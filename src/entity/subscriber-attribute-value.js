import { Subscriber } from './subscriber.js';
import { SubscriberAttributeDefinition } from './subscriber-attribute-definition.js';

export class SubscriberAttributeValue {
  /**
   * @param {Object} data
   */
  constructor(data) {
    this.subscriber = (data.subscriber && typeof data.subscriber === 'object') ? new Subscriber(data.subscriber) : null;
    this.definition = (data.definition && typeof data.definition === 'object') ? new SubscriberAttributeDefinition(data.definition) : null;
    this.value = data.value || null;
  }
}
