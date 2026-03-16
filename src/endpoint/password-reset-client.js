/**
 * Client for password reset related API endpoints.
 */
export class PasswordResetClient {
  /**
   * @param {Client} client - The API client
   */
  constructor(client) {
    this.client = client;
  }

  /**
   * Request a password reset token for an administrator account.
   *
   * @param {string} email - Administrator email
   * @returns {Promise<void>}
   * @throws {ApiException} If an API error occurs
   */
  async request(email) {
    await this.client.post('password-reset/request', {
      email: email
    });
  }

  /**
   * Validate a password reset token.
   *
   * @param {string} token - Password reset token
   * @returns {Promise<Object>} Generic response as returned by the API
   * @throws {ApiException} If an API error occurs
   */
  async validate(token) {
    return await this.client.post('password-reset/validate', {
      token: token
    });
  }

  /**
   * Reset an administrator password using a token.
   *
   * @param {string} token - Password reset token
   * @param {string} newPassword - New password
   * @returns {Promise<Object>} Generic response as returned by the API
   * @throws {ApiException} If an API error occurs
   */
  async reset(token, newPassword) {
    return await this.client.post('password-reset/reset', {
      token: token,
      newPassword: newPassword
    });
  }
}
