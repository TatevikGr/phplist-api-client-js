import { Subscriber } from '../entity/subscriber';
import { SubscriberHistoryCollection } from '../response/subscribers/subscriber-history-collection';
import { SubscriberCollection } from '../response/subscribers/subscriber-collection';

export class SubscribersClient {
  /**
   * @param {Client} client
   */
  constructor(client) {
    this.client = client;
  }

  /**
   * Get a subscriber by ID.
   *
   * @param {number} subscriberId
   * @returns {Promise<Subscriber>}
   */
  async getSubscriber(subscriberId) {
    const response = await this.client.get(`subscribers/${subscriberId}`);
    return new Subscriber(response);
  }

  /**
   * Create a new subscriber.
   *
   * @param {CreateSubscriberRequest} request
   * @returns {Promise<Subscriber>}
   */
  async createSubscriber(request) {
    const response = await this.client.post('subscribers', request);
    return new Subscriber(response);
  }

  /**
   * Update a subscriber.
   *
   * @param {number} subscriberId
   * @param {UpdateSubscriberRequest} request
   * @returns {Promise<Subscriber>}
   */
  async updateSubscriber(subscriberId, request) {
    const response = await this.client.put(`subscribers/${subscriberId}`, request);
    return new Subscriber(response);
  }

  /**
   * Delete a subscriber.
   *
   * @param {number} subscriberId
   * @returns {Promise<void>}
   */
  async deleteSubscriber(subscriberId) {
    await this.client.delete(`subscribers/${subscriberId}`);
  }

  /**
   * Confirm a subscriber by unique ID.
   *
   * @param {string} uniqueId
   * @returns {Promise<string>}
   */
  async confirmSubscriber(uniqueId) {
    return await this.client.getRaw('subscribers/confirm', { uniqueId });
  }

  /**
   * Export subscribers.
   *
   * @param {ExportSubscriberRequest|null} [filters=null]
   * @returns {Promise<Array>}
   */
  async exportSubscribers(filters = null) {
    return await this.client.get('subscribers/export', filters);
  }

  /**
   * Import subscribers.
   *
   * @param {ImportSubscribersRequest} request
   * @returns {Promise<Object>}
   */
  async importSubscribers(request) {
    const formData = new FormData();
    formData.append('file', request.file);
    formData.append('list_id', request.listId);
    formData.append('update_existing', request.updateExisting ? '1' : '0');

    return await this.client.postMultipart('subscribers/import', formData);
  }

  /**
   * Get a subscriber history by filter.
   *
   * @param {number} id - The subscriber ID
   * @param {GetSubscriberHistoryRequest|null} [filters=null]
   * @returns {Promise<SubscriberHistoryCollection>}
   */
  async getSubscriberHistory(id, filters = null) {
    const response = await this.client.get(`subscribers/${id}/history`, filters);
    return new SubscriberHistoryCollection(response);
  }

  /**
   * Gets a paginated list of subscribers.
   *
   * @param {SubscribersFilterRequest} request
   * @param {number|null} [afterId=null]
   * @param {number} [limit=25]
   * @returns {Promise<SubscriberCollection>}
   */
  async getSubscribers(request, afterId = null, limit = 25) {
    const queryParams = { ...request?.toJSON?.() || request, limit };

    if (afterId !== null) {
      queryParams.after_id = afterId;
    }

    const response = await this.client.get('subscribers', queryParams);
    return new SubscriberCollection(response);
  }

  /**
   * Reset bounce count for a subscriber.
   *
   * @param {number} subscriberId
   * @returns {Promise<Subscriber>}
   */
  async resetBounceCount(subscriberId) {
    const response = await this.client.post(`subscribers/${subscriberId}/reset-bounce-count`);
    return new Subscriber(response);
  }
}
