import { SelectorMap } from "../../types/types";
import { AbstractObserver } from "../AbstractObserver";

/**
 * Observer class for Intermarche-specific DOM mutations.
 */
export class IntermarcheObserver extends AbstractObserver {

    /**
     * Map of Intermarche-specific selectors.
     */
    private static readonly intermarcheSelectors: SelectorMap = {
        vignette: '.luckyCart',
        slider: '.sliderCampaign',
        quadriptyque: '.wrapper-productSlider-image',
        butterfly: '.helenaTile--diptyque',
        matcha: '.matchabot'
    };

    /**
     * Constructor for IntermarcheObserver.
     * Initializes the observer with Intermarche-specific selectors.
     */
    constructor() {
        super(IntermarcheObserver.intermarcheSelectors);
    }

    /**
     * Checks if the current URL is valid for Intermarche.
     */
    protected isCurrentUrlValid(): boolean {
        return window.location.hostname.includes("intermarche.com");
    }
}
