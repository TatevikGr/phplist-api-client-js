import { SubscribePage } from '../entity/subscribe-page.js';

/**
 * Client for subscribe page-related API endpoints.
 */
export class SubscribePagesClient {
  /**
   * @param {Client} client - The API client
   */
  constructor(client) {
    this.client = client;
  }

  /**
   * Get a subscribe page by ID.
   *
   * @param {number} id
   * @returns {Promise<SubscribePage>}
   * @throws {NotFoundException}
   * @throws {ApiException}
   */
  async getSubscribePage(id) {
    const data = await this.client.get(`subscribe-pages/${id}`);
    return new SubscribePage(data);
  }

  /**
   * Create a new subscribe page.
   *
   * @param {CreateSubscribePageRequest} request
   * @returns {Promise<SubscribePage>}
   * @throws {ApiException}
   */
  async createSubscribePage(request) {
    const data = await this.client.post('subscribe-pages', request);
    return new SubscribePage(data);
  }

  /**
   * Update a subscribe page by ID.
   *
   * @param {number} id
   * @param {UpdateSubscribePageRequest} request
   * @returns {Promise<SubscribePage>}
   * @throws {NotFoundException}
   * @throws {ApiException}
   */
  async updateSubscribePage(id, request) {
    const data = await this.client.put(`subscribe-pages/${id}`, request);
    return new SubscribePage(data);
  }

  /**
   * Delete a subscribe page by ID.
   *
   * @param {number} id
   * @returns {Promise<void>}
   * @throws {NotFoundException}
   * @throws {ApiException}
   */
  async deleteSubscribePage(id) {
    await this.client.delete(`subscribe-pages/${id}`);
  }
}
