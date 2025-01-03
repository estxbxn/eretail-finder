import { SelectorMap } from "../../types/types";
import { AbstractObserver } from "../AbstractObserver";

/**
 * Observer class for Auchan-specific DOM mutations.
 */
export class AuchanObserver extends AbstractObserver {

    /**
     * Map of Auchan-specific selectors.
     */
    private static readonly auchanSelectors: SelectorMap = {
        banner: '.hp-banners--row',
        squad: '.hp-banners--triptych',
        totem: '.product-carousel__container.testtsteestsretse',
        sword: '.product-carousel__container.showcaseContainer'
    };

    /**
     * Constructor for AuchanObserver.
     * Initializes the observer with Auchan-specific selectors.
     */
    constructor() {
        super(AuchanObserver.auchanSelectors);
    }

    /**
     * Checks if the current URL is valid for Auchan.
     */
    protected isCurrentUrlValid(): boolean {
        return window.location.hostname.includes("auchan.fr");
    }
}
