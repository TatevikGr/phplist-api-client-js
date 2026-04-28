import { BounceCollection } from '../response/index.js';

/**
 * Client for bounce-related API endpoints.
 */
export class BouncesClient {
  /**
   * @param {Client} client - The API client
   */
  constructor(client) {
    this.client = client;
  }

  /**
   * Get a list of all bounce regex rules.
   *
   * @returns {Promise<Array>} Raw API response
   * @throws {ApiException} If an API error occurs
   */
  async listRegex() {
    return await this.client.get('bounces/regex');
  }

  /**
   * Get a list of all bounces.
   *
   * @returns {Promise<BounceCollection>} The list of bounces
   * @throws {ApiException} If an API error occurs
   */
  async list(afterId = null, limit = 25, status = null) {
    const queryParams = { limit };

    if (afterId !== null) {
      queryParams.after_id = afterId;
    }
    if (status !== null) {
      queryParams.status = status
    }
    const data = await this.client.get('bounces', queryParams);
    return new BounceCollection(data);
  }

  /**
   * Create or update a bounce regex rule.
   *
   * @param {Object} data - Keys: regex (required), action?, list_order?, admin?, comment?, status?
   * @returns {Promise<Object>} The created/updated regex data
   * @throws {ApiException} If an API error occurs
   */
  async upsertRegex(data) {
    return await this.client.post('bounces/regex', data);
  }

  /**
   * Get a bounce regex rule by its hash.
   *
   * @param {string} regexHash - The regex hash
   * @returns {Promise<Object>} The regex data
   * @throws {ApiException} If an API error occurs
   */
  async getRegexByHash(regexHash) {
    return await this.client.get(`bounces/regex/${encodeURIComponent(regexHash)}`);
  }

  /**
   * Delete a bounce regex rule by its hash.
   *
   * @param {string} regexHash - The regex hash
   * @returns {Promise<Object>} Empty response on success
   * @throws {ApiException} If an API error occurs
   */
  async deleteRegexByHash(regexHash) {
    return await this.client.delete(`bounces/regex/${encodeURIComponent(regexHash)}`);
  }

  /**
   * Delete a bounce by its id.
   *
   * @param {string} bounceId - The bounce id
   * @returns {Promise<Object>} Empty response on success
   * @throws {ApiException} If an API error occurs
   */
  async deleteById(bounceId) {
    return await this.client.delete(`bounces/${encodeURIComponent(bounceId)}`);
  }
}
