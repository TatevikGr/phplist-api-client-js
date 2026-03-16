/**
 * Client for blacklist related API endpoints.
 */
export class BlacklistClient {
  /**
   * @param {Client} client - The API client
   */
  constructor(client) {
    this.client = client;
  }

  /**
   * Check if an email address is blacklisted.
   *
   * @param {string} email - Email address to check
   * @returns {Promise<Object>} Raw API response
   * @throws {ApiException} If an API error occurs
   */
  async check(email) {
    return await this.client.get(`blacklist/check/${encodeURIComponent(email)}`);
  }

  /**
   * Add an email address to the blacklist.
   *
   * @param {string} email - Email address to add
   * @param {string|null} [reason=null] - Optional reason
   * @returns {Promise<Object>} Raw API response
   * @throws {ApiException} If an API error occurs
   */
  async add(email, reason = null) {
    const payload = { email };
    if (reason !== null) {
      payload.reason = reason;
    }
    return await this.client.post('blacklist/add', payload);
  }

  /**
   * Remove an email address from the blacklist.
   *
   * @param {string} email - Email address to remove
   * @returns {Promise<Object>} Raw API response
   * @throws {ApiException} If an API error occurs
   */
  async remove(email) {
    return await this.client.delete(`blacklist/remove/${encodeURIComponent(email)}`);
  }

  /**
   * Get information about a blacklisted email.
   *
   * @param {string} email - Email address to get info for
   * @returns {Promise<Object>} Raw API response
   * @throws {ApiException} If an API error occurs
   */
  async info(email) {
    return await this.client.get(`blacklist/info/${encodeURIComponent(email)}`);
  }
}
