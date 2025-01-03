import { SelectorMap } from "../../types/types";
import { AbstractObserver } from "../AbstractObserver";

/**
 * Observer class for Carrefour-specific DOM mutations.
 */
export class CarrefourObserver extends AbstractObserver {

    /**
     * Map of Carrefour-specific selectors.
     */
    private static readonly carrefourSelectors: SelectorMap = {
        spotlight: '#data-advertising-fs',
        butterfly: '.advertising-placeholder-butterfly',
        vignette: '.lc-search-categ-promo-banner',
        banner: '.advertising-placeholder-butterfly'
    };

    /**
     * Constructor for CarrefourObserver.
     * Initializes the observer with Carrefour-specific selectors.
     */
    constructor() {
        super(CarrefourObserver.carrefourSelectors);
    }

    /**
     * Checks if the current URL is valid for Carrefour.
     */
    protected isCurrentUrlValid(): boolean {
        return window.location.hostname.includes("carrefour.fr");
    }
}
