import { AbstractCollectionResponse } from './abstract-collection-response.js';
import Config from "../entity/config.js";

export default class ConfigCollection extends AbstractCollectionResponse {
    constructor(data = {}) {
        super(data);
        this.items = [];

        if (Array.isArray(data.items)) {
            this.processItems(data.items);
        }
    }

    processItems(items) {
        this.items = items.map(item => new Config(item));
    }
}
