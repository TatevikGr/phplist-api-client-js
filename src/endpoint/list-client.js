import { SubscriberList } from '../entity/subscriber-list.js';
import { SubscriberListCollection } from '../response/index.js';

/**
 * Client for lists endpoints.
 */
export class ListClient {
  /**
   * @param {Client} client - The API client
   */
  constructor(client) {
    this.client = client;
  }

  /**
   * Returns a list of subscriber lists associated with admin or are public.
   *
   * @param {number|null} [afterId=null] - The ID to start from for pagination
   * @param {number} [limit=25] - The maximum number of items to return
   * @returns {Promise<SubscriberListCollection>}
   * @throws {ApiException}
   */
  async getLists(afterId = null, limit = 25) {
    const queryParams = { limit };

    if (afterId !== null) {
      queryParams.after_id = afterId;
    }

    const response = await this.client.get('lists', queryParams);
    return new SubscriberListCollection(response);
  }

  /**
   * Creates a subscriber list.
   *
   * @param {CreateSubscriberListRequest} request
   * @returns {Promise<SubscriberList>}
   * @throws {ApiException}
   */
  async createList(request) {
    const response = await this.client.post('lists', request);
    return new SubscriberList(response);
  }

  /**
   * Returns a subscriber list by ID.
   *
   * @param {number} listId
   * @returns {Promise<SubscriberList>}
   * @throws {ApiException}
   */
  async getList(listId) {
    const response = await this.client.get(`lists/${listId}`);
    return new SubscriberList(response);
  }

  /**
   * Deletes a subscriber list by ID.
   *
   * @param {number} listId
   * @returns {Promise<void>}
   * @throws {ApiException}
   */
  async deleteList(listId) {
    await this.client.delete(`lists/${listId}`);
  }

  /**
   * Updates a subscriber list.
   *
   * @param {number} listId
   * @param {CreateSubscriberListRequest} request
   * @returns {Promise<SubscriberList>}
   * @throws {ApiException}
   */
  async updateList(listId, request) {
    const response = await this.client.put(`lists/${listId}`, request);
    return new SubscriberList(response);
  }
}
