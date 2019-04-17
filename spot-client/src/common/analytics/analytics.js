/**
 * Service for sending analytics events to an analytics endpoint.
 */
export default {
    _handlers: new Set(),

    /**
     * Sets a handler to intercept and process log events.
     *
     * @param {Object} handler - An analytics handler which can log events.
     * @returns {void}
     */
    addHandler(handler) {
        this._handlers.add(handler);
    },

    /**
     * Sends an event to be logged.
     *
     * @param {string} eventName - A name which describes and identifies the
     * event to be logged.
     * @param {Object} eventProperties - Additional information to log which
     * describe the event in greater detail.
     * @returns {void}
     */
    log(eventName, eventProperties) {
        this._handlers.forEach(handler =>
            handler.log(eventName, eventProperties));
    },

    /**
     * Modifies the meta data to associate with the sender of events.
     *
     * @param {string} propertyName - A key for a property to associate with
     * the current Spot instance sending events.
     * @param {*} propertyValue - The value for the property.
     * @returns {void}
     */
    updateProperty(propertyName, propertyValue) {
        this._handlers.forEach(handler =>
            handler.updateProperty(propertyName, propertyValue));
    }
};