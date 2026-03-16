import { Subscriber } from './subscriber';
import { SubscriberList } from './subscriber-list';

export class Subscription {
  /**
   * @param {Object} data
   */
  constructor(data) {
    this.subscriber = data.subscriber ? new Subscriber(data.subscriber) : null;
    this.subscriberList = data.subscriber_list ? new SubscriberList(data.subscriber_list) : null;
    this.subscriptionDate = data.subscription_date || '';
  }
}
