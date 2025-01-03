import { SelectorMap } from "../types/types";
import { IObserver } from "./IObserver";

/**
 * Abstract class for observing DOM mutations and detecting specific elements.
 */
export abstract class AbstractObserver implements IObserver {
    protected selectors: SelectorMap;
    private observer: MutationObserver | null = null;

    /**
     * Constructor for AbstractObserver.
     * @param selectors - Map of selectors to observe.
     */
    constructor(selectors: SelectorMap) {
        this.selectors = selectors;
    }

    /**
     * Starts observing DOM mutations.
     */
    public start(): void {
        if (!this.isCurrentUrlValid()) {
            console.log("Invalid URL for this observer.");
            return;
        }

        if (this.observer) {
            this.stop();
        }

        this.observer = new MutationObserver((mutations: MutationRecord[]) => {
            mutations.forEach(() => this.checkForElements());
        });

        this.observer.observe(document.body, {
            childList: true,
            subtree: true,
        });
    }

    /**
     * Stops observing DOM mutations.
     */
    public stop(): void {
        if (this.observer) {
            this.observer.disconnect();
            this.observer = null;
        }
    }

    /**
     * Checks for the presence of elements specified in the selectors.
     */
    private checkForElements(): void {
        let elementsFound = false;
        Object.entries(this.selectors).forEach(([name, selector]: [string, string]) => {
            const elements: NodeListOf<Element> = document.querySelectorAll(selector);
            if (elements.length > 0) {
                this.displayWarning(name, selector);
                elementsFound = true;
            }
        });
        if (elementsFound) {
            this.stop();
        }
    }

    /**
     * Displays a warning for a detected element.
     * @param name - Name of the element.
     * @param selector - Selector of the element.
     */
    private displayWarning(name: string, selector: string): void {
        console.log(`Element detected: ${name} (${selector})`);
        const elements: NodeListOf<HTMLDivElement> = document.querySelectorAll(selector);
        elements.forEach(element => {
            const warningBanner: HTMLDivElement = document.createElement("div");
            warningBanner.textContent = `Warning: '${name}' detected here.`;
            warningBanner.className = "warning-banner";

            element.appendChild(warningBanner);
            element.style.position = "relative";
        });
    }

    /**
     * Checks if the current URL is valid for the observer.
     */
    protected abstract isCurrentUrlValid(): boolean;
}
