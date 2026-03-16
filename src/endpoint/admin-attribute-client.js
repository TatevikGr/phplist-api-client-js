import { AdminAttributeDefinition } from '../entity/admin-attribute-definition.js';
import { AdminAttributeValue } from '../entity/admin-attribute-value.js';
import { AdminAttributeDefinitionCollection } from '../response/admin/admin-attribute-definition-collection.js';
import { AdminAttributeValueCollection } from '../response/admin/admin-attribute-value-collection.js';

/**
 * Client for administrator-related API endpoints.
 */
export class AdminAttributeClient {
  /**
   * @param {Client} client - The API client
   */
  constructor(client) {
    this.client = client;
  }

  /**
   * Get a list of administrator attribute definitions.
   *
   * @param {number|null} [afterId=null] - The ID to start from for pagination
   * @param {number} [limit=25] - The maximum number of items to return
   * @returns {Promise<AdminAttributeDefinitionCollection>} The list of attribute definitions
   * @throws {ApiException} If an API error occurs
   */
  async getAttributeDefinitions(afterId = null, limit = 25) {
    const queryParams = { limit };

    if (afterId !== null) {
      queryParams.after_id = afterId;
    }

    const data = await this.client.get('administrators/attributes', queryParams);
    return new AdminAttributeDefinitionCollection(data);
  }

  /**
   * Get an administrator attribute definition by ID.
   *
   * @param {number} id - The attribute definition ID
   * @returns {Promise<AdminAttributeDefinition>} The attribute definition data
   * @throws {NotFoundException} If the attribute definition is not found
   * @throws {ApiException} If an API error occurs
   */
  async getAttributeDefinition(id) {
    const data = await this.client.get(`administrators/attributes/${id}`);
    return new AdminAttributeDefinition(data);
  }

  /**
   * Create a new administrator attribute definition.
   *
   * @param {CreateAdminAttributeDefinitionRequest} request - The attribute definition data
   * @returns {Promise<AdminAttributeDefinition>} The created attribute definition
   * @throws {ValidationException} If validation fails
   * @throws {ApiException} If an API error occurs
   */
  async createAttributeDefinition(request) {
    const data = await this.client.post('administrators/attributes', request);
    return new AdminAttributeDefinition(data);
  }

  /**
   * Update an administrator attribute definition.
   *
   * @param {number} id - The attribute definition ID
   * @param {UpdateAdminAttributeDefinitionRequest} request - The attribute definition data
   * @returns {Promise<AdminAttributeDefinition>} The updated attribute definition
   * @throws {NotFoundException} If the attribute definition is not found
   * @throws {ValidationException} If validation fails
   * @throws {ApiException} If an API error occurs
   */
  async updateAttributeDefinition(id, request) {
    const data = await this.client.put(`administrators/attributes/${id}`, request);
    return new AdminAttributeDefinition(data);
  }

  /**
   * Delete an administrator attribute definition.
   *
   * @param {number} id - The attribute definition ID
   * @returns {Promise<void>}
   * @throws {NotFoundException} If the attribute definition is not found
   * @throws {ApiException} If an API error occurs
   */
  async deleteAttributeDefinition(id) {
    await this.client.delete(`administrators/attributes/${id}`);
  }

  /**
   * Get attribute values for an administrator.
   *
   * @param {number} adminId - The administrator ID
   * @param {number|null} [afterId=null] - The ID to start from for pagination
   * @param {number} [limit=25] - The maximum number of items to return
   * @returns {Promise<AdminAttributeValueCollection>} The attribute values
   * @throws {NotFoundException} If the administrator is not found
   * @throws {ApiException} If an API error occurs
   */
  async getAttributeValues(adminId, afterId = null, limit = 25) {
    const queryParams = { limit };

    if (afterId !== null) {
      queryParams.after_id = afterId;
    }

    const data = await this.client.get(`administrators/${adminId}/attributes`, queryParams);
    return new AdminAttributeValueCollection(data);
  }

  /**
   * Get a specific attribute value for an administrator.
   *
   * @param {number} adminId - The administrator ID
   * @param {number} definitionId - The attribute definition ID
   * @returns {Promise<AdminAttributeValue>} The attribute value
   * @throws {NotFoundException} If the administrator or attribute definition is not found
   * @throws {ApiException} If an API error occurs
   */
  async getAttributeValue(adminId, definitionId) {
    const data = await this.client.get(`administrators/${adminId}/attributes/${definitionId}`);
    return new AdminAttributeValue(data);
  }

  /**
   * Set a specific attribute value for an administrator.
   *
   * @param {number} adminId - The administrator ID
   * @param {number} definitionId - The attribute definition ID
   * @param {string} value
   * @returns {Promise<AdminAttributeValue>} The updated attribute value
   * @throws {ApiException} If an API error occurs
   */
  async setAttributeValue(adminId, definitionId, value) {
    const data = await this.client.post(`administrators/${adminId}/attributes/${definitionId}`, {
      value: value
    });
    return new AdminAttributeValue(data);
  }

  /**
   * Delete a specific attribute value for an administrator.
   *
   * @param {number} adminId - The administrator ID
   * @param {number} definitionId - The attribute definition ID
   * @returns {Promise<void>}
   * @throws {NotFoundException} If the administrator or attribute definition is not found
   * @throws {ApiException} If an API error occurs
   */
  async deleteAttributeValue(adminId, definitionId) {
    await this.client.delete(`administrators/${adminId}/attributes/${definitionId}`);
  }
}
