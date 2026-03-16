import { Administrator } from '../entity/administrator.js';
import { AdministratorCollection } from '../response/admin/administrator-collection.js';

/**
 * Client for administrator-related API endpoints.
 */
export class AdminClient {
  /**
   * @param {Client} client - The API client
   */
  constructor(client) {
    this.client = client;
  }

  /**
   * Get a list of administrators.
   *
   * @param {number|null} [afterId=null] - The ID to start from for pagination
   * @param {number} [limit=25] - The maximum number of items to return
   * @returns {Promise<AdministratorCollection>} The list of administrators
   * @throws {ApiException} If an API error occurs
   */
  async getAdministrators(afterId = null, limit = 25) {
    const queryParams = { limit };

    if (afterId !== null) {
      queryParams.after_id = afterId;
    }

    const data = await this.client.get('administrators', queryParams);
    return new AdministratorCollection(data);
  }

  /**
   * Get an administrator by ID.
   *
   * @param {number} id - The administrator ID
   * @returns {Promise<Administrator>} The administrator data
   * @throws {NotFoundException} If the administrator is not found
   * @throws {ApiException} If an API error occurs
   */
  async getAdministrator(id) {
    const data = await this.client.get(`administrators/${id}`);
    return new Administrator(data);
  }

  /**
   * Create a new administrator.
   *
   * @param {CreateAdministratorRequest} request - The administrator data
   * @returns {Promise<Administrator>} The created administrator
   * @throws {ValidationException} If validation fails
   * @throws {ApiException} If an API error occurs
   */
  async createAdministrator(request) {
    const data = await this.client.post('administrators', request);
    return new Administrator(data);
  }

  /**
   * Update an administrator.
   *
   * @param {number} id - The administrator ID
   * @param {UpdateAdministratorRequest} request - The administrator data
   * @returns {Promise<Administrator>} The updated administrator
   * @throws {NotFoundException} If the administrator is not found
   * @throws {ValidationException} If validation fails
   * @throws {ApiException} If an API error occurs
   */
  async updateAdministrator(id, request) {
    const data = await this.client.put(`administrators/${id}`, request);
    return new Administrator(data);
  }

  /**
   * Delete an administrator.
   *
   * @param {number} id - The administrator ID
   * @returns {Promise<void>}
   * @throws {NotFoundException} If the administrator is not found
   * @throws {ApiException} If an API error occurs
   */
  async deleteAdministrator(id) {
    await this.client.delete(`administrators/${id}`);
  }
}
