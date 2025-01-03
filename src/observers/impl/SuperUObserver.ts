import { SelectorMap } from "../../types/types";
import { AbstractObserver } from "../AbstractObserver";

/**
 * Observer class for SuperU-specific DOM mutations.
 */
export class SuperUObserver extends AbstractObserver {

    /**
     * Map of SuperU-specific selectors.
     */
    private static readonly superUSelectors: SelectorMap = {
        vignette: 'li .lc-banner'
    };

    /**
     * Constructor for SuperUObserver.
     * Initializes the observer with SuperU-specific selectors.
     */
    constructor() {
        super(SuperUObserver.superUSelectors);
    }

    /**
     * Checks if the current URL is valid for SuperU.
     */
    protected isCurrentUrlValid(): boolean {
        return window.location.hostname.includes("coursesu.com");
    }
}
