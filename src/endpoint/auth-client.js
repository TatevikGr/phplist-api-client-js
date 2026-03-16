import { Administrator } from '../entity/administrator.js';
import { AuthenticationException } from '../exception.js';

/**
 * Client for identity-related API endpoints.
 */
export class AuthClient {
  /**
   * @param {Client} client
   */
  constructor(client) {
    this.client = client;
  }

  /**
   * Login a user and get a session.
   *
   * @param {string} username - The username
   * @param {string} password - The password
   * @returns {Promise<Object>} The session data
   * @throws {AuthenticationException} If authentication fails
   * @throws {ApiException} If an API error occurs
   */
  async login(username, password) {
    return await this.client.login(username, password);
  }

  /**
   * Logout the current user.
   *
   * @returns {Promise<Object>} The response data
   * @throws {AuthenticationException} If not authenticated or an API error occurs
   */
  async logout() {
    const sessionId = this.client.getSessionId();

    if (!sessionId) {
      throw new AuthenticationException('Not authenticated');
    }

    const result = await this.client.delete(`sessions/${this.client.getId()}`);
    this.client.setSessionId('');

    return result;
  }

  /**
   * Get the current admin user data.
   *
   * @returns {Promise<Administrator>} The current admin user data
   * @throws {AuthenticationException} If not authenticated
   */
  async getSessionUser() {
    const sessionId = this.client.getSessionId();

    if (!sessionId) {
      throw new AuthenticationException('Not authenticated');
    }

    const data = await this.client.get('sessions/me');

    return new Administrator(data);
  }
}
