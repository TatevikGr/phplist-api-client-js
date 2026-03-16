import { SubscriberList } from '../entity/subscriber-list.js';
import { Subscription } from '../entity/subscription.js';
import { SubscriberCollection } from '../response/subscribers/subscriber-collection.js';
import { SubscriberListCollection } from '../response/subscribers/subscriber-list-collection.js';

/**
 * Client for subscription-related API endpoints.
 */
export class SubscriptionClient {
  /**
   * @param {Client} client - The API client
   */
  constructor(client) {
    this.client = client;
  }

  /**
   * Get a list of subscriber lists.
   *
   * @param {number|null} [afterId=null] - The ID to start from for pagination
   * @param {number} [limit=25] - The maximum number of items to return
   * @returns {Promise<SubscriberListCollection>} The list of subscriber lists
   * @throws {ApiException} If an API error occurs
   */
  async getSubscriberLists(afterId = null, limit = 25) {
    const queryParams = { limit };

    if (afterId !== null) {
      queryParams.after_id = afterId;
    }

    const data = await this.client.get('lists', queryParams);
    return new SubscriberListCollection(data);
  }

  /**
   * Get a subscriber list by ID.
   *
   * @param {number} id - The subscriber list ID
   * @returns {Promise<SubscriberList>} The subscriber list data
   * @throws {ApiException} If an API error occurs
   */
  async getSubscriberList(id) {
    const data = await this.client.get(`lists/${id}`);
    return new SubscriberList(data);
  }

  /**
   * Create a new subscriber list.
   *
   * @param {CreateSubscriberListRequest} request
   * @returns {Promise<SubscriberList>} The created subscriber list
   * @throws {ApiException} If an API error occurs
   */
  async createSubscriberList(request) {
    const data = await this.client.post('lists', request);
    return new SubscriberList(data);
  }

  /**
   * Delete a subscriber list.
   *
   * @param {number} id - The subscriber list ID
   * @returns {Promise<void>}
   * @throws {NotFoundException} If the subscriber list is not found
   * @throws {ApiException} If an API error occurs
   */
  async deleteSubscriberList(id) {
    await this.client.delete(`lists/${id}`);
  }

  /**
   * Get total number of subscribers of a list
   * @param {number} id
   * @returns {Promise<Object>}
   * @throws {ApiException}
   */
  async getSubscribersCountForList(id) {
    return await this.client.get(`lists/${id}/count`);
  }

  /**
   * Gets a paginated list of subscribers for a list
   *
   * @param {number} listId
   * @param {number|null} [afterId=null] - The ID to start from for pagination
   * @param {number} [limit=25] - The maximum number of items to return
   * @returns {Promise<SubscriberCollection>} The list of subscribers
   * @throws {ApiException} If an API error occurs
   */
  async getSubscribersOfList(listId, afterId = null, limit = 25) {
    const queryParams = { limit };

    if (afterId !== null) {
      queryParams.after_id = afterId;
    }

    const data = await this.client.get(`lists/${listId}/subscribers`, queryParams);
    return new SubscriberCollection(data);
  }

  /**
   * Create subscription / add subscribers to list
   *
   * @param {string[]} emails
   * @param {number} listId
   * @returns {Promise<Subscription[]>}
   * @throws {ApiException} If an API error occurs
   */
  async createSubscriptions(emails, listId) {
    const data = await this.client.post(`lists/${listId}/subscribers`, { emails });
    return data.map(item => new Subscription(item));
  }

  /**
   * Delete subscription / remove subscribers from a list
   *
   * @param {string[]} emails
   * @param {number} listId
   * @returns {Promise<void>}
   * @throws {ApiException} If an API error occurs
   */
  async deleteSubscription(emails, listId) {
    const query = {};
    if (emails.length === 1) {
      query.emails = emails[0];
    } else {
      query.emails = emails;
    }

    await this.client.delete(`lists/${listId}/subscribers`, query);
  }
}
