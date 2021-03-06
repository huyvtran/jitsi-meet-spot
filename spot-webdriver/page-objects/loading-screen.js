const PageObject = require('./page-object');

const LOADING_SCREEN = '[data-qa-id=loading]';
const RECONNECT_INDICATOR = '[data-qa-id=reconnect-indicator]';

/**
 * A page object for interacting with the loading screen displayed when connecting or reconnecting.
 *
 * @extends PageObject
 */
class LoadingScreen extends PageObject {
    /**
     * Initializes a new {@code LoadingScreen} instance.
     *
     * @inheritdoc
     */
    constructor(driver) {
        super(driver, LOADING_SCREEN);
    }

    /**
     * Waits for the loading screen to appear.
     *
     * @param {number} [timeToWait] - How long to wait. Default timeout of 25 seconds - it can take
     * time for the reconnect to start.
     * @returns {void}
     */
    waitForLoadingToAppear(timeToWait = 25 * 1000) {
        this.waitForElementDisplayed(LOADING_SCREEN, timeToWait);
    }

    /**
     * Waits for the loading screen to disappear.
     *
     * @param {number} [timeToWait] - How long to wait.
     * @returns {void}
     */
    waitForLoadingToDisappear(timeToWait) {
        this.waitForHidden(timeToWait);
    }

    /**
     * Waits for the loading screen to appear.
     *
     * @param {number} [timeToWait] - How long to wait. Default timeout of 25 seconds - it can take
     * time for the reconnect to start.
     * @returns {void}
     */
    waitForReconnectingToAppear(timeToWait = 25 * 1000) {
        this.waitForElementDisplayed(RECONNECT_INDICATOR, timeToWait);
    }

    /**
     * Waits for the loading screen to disappear.
     *
     * @param {number} [timeToWait] - How long to wait.
     * @returns {void}
     */
    waitForReconnectingToDisappear(timeToWait = 25 * 1000) {
        this.waitForElementHidden(RECONNECT_INDICATOR, timeToWait);
    }
}

module.exports = LoadingScreen;
