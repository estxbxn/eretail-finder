import { SelectorMap } from "../../types/types";
import { AbstractObserver } from "../AbstractObserver";

/**
 * Observer class for Leclerc-specific DOM mutations.
 */
export class LeclercObserver extends AbstractObserver {

    /**
     * Map of Leclerc-specific selectors.
     */
    private static readonly leclercSelectors: SelectorMap = {
        banner: '#ctl00_ctl00_mainMutiUnivers_main_ctl04_pnlBanniere > :first-child',
        butterfly: '.liTrdGen_RmpButterfly',
        gondole: '.liTrdGen_RmpTG',
    };

    /**
     * Constructor for LeclercObserver.
     * Initializes the observer with Leclerc-specific selectors.
     */
    constructor() {
        super(LeclercObserver.leclercSelectors);
    }

    /**
     * Checks if the current URL is valid for Leclerc.
     */
    protected isCurrentUrlValid(): boolean {
        return window.location.hostname.includes("leclercdrive.fr");
    }
}
