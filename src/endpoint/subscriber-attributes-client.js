import { SubscriberAttributeDefinition } from '../entity/subscriber-attribute-definition.js';
import { SubscriberAttributeValue } from '../entity/subscriber-attribute-value.js';
import { SubscriberAttributeCollection } from '../response/subscribers/subscriber-attribute-collection.js';
import { SubscriberAttributeValueCollection } from '../response/subscribers/subscriber-attribute-value-collection.js';

/**
 * Client for subscriber attribute-related API endpoints.
 */
export class SubscriberAttributesClient {
  /**
   * @param {Client} client - The API client
   */
  constructor(client) {
    this.client = client;
  }

  /**
   * Get a list of subscriber attribute definitions.
   *
   * @param {number|null} [afterId=null] - The ID to start from for pagination
   * @param {number} [limit=25] - The maximum number of items to return
   * @returns {Promise<SubscriberAttributeCollection>} The list of attribute definitions
   * @throws {ApiException} If an API error occurs
   */
  async getAttributeDefinitions(afterId = null, limit = 25) {
    const queryParams = { limit };

    if (afterId !== null) {
      queryParams.after_id = afterId;
    }

    const data = await this.client.get('subscribers/attributes', queryParams);
    return new SubscriberAttributeCollection(data);
  }

  /**
   * Get a subscriber attribute definition by ID.
   *
   * @param {number} id - The attribute definition ID
   * @returns {Promise<SubscriberAttributeDefinition>} The attribute definition data
   * @throws {NotFoundException} If the attribute definition is not found
   * @throws {ApiException} If an API error occurs
   */
  async getAttributeDefinition(id) {
    const data = await this.client.get(`attributes/${id}`);
    return new SubscriberAttributeDefinition(data);
  }

  /**
   * Create a new subscriber attribute definition.
   *
   * @param {CreateSubscriberAttributeDefinitionRequest} request
   * @returns {Promise<SubscriberAttributeDefinition>} The created attribute definition
   * @throws {ApiException} If an API error occurs
   */
  async createAttributeDefinition(request) {
    const data = await this.client.post('attributes', request);
    return new SubscriberAttributeDefinition(data);
  }

  /**
   * Update a subscriber attribute definition.
   *
   * @param {number} id - The attribute definition ID
   * @param {UpdateSubscriberAttributeDefinitionRequest} request
   * @returns {Promise<SubscriberAttributeDefinition>} The updated attribute definition
   * @throws {ApiException} If an API error occurs
   */
  async updateAttributeDefinition(id, request) {
    const data = await this.client.put(`attributes/${id}`, request);
    return new SubscriberAttributeDefinition(data);
  }

  /**
   * Delete a subscriber attribute definition.
   *
   * @param {number} id - The attribute definition ID
   * @returns {Promise<void>}
   * @throws {NotFoundException} If the attribute definition is not found
   * @throws {ApiException} If an API error occurs
   */
  async deleteAttributeDefinition(id) {
    await this.client.delete(`attributes/${id}`);
  }

  /**
   * Get attribute values for a subscriber.
   *
   * @param {number} subscriberId - The subscriber ID
   * @param {number|null} [afterId=null]
   * @returns {Promise<SubscriberAttributeValueCollection>} The attribute values
   * @throws {NotFoundException} If the subscriber is not found
   * @throws {ApiException} If an API error occurs
   */
  async getAttributeValues(subscriberId, afterId = null) {
    const queryParams = {};
    if (afterId !== null) {
      queryParams.after_id = afterId;
    }

    const data = await this.client.get(`subscribers/${subscriberId}/attributes`, queryParams);
    return new SubscriberAttributeValueCollection(data);
  }

  /**
   * Get a specific attribute value for a subscriber.
   *
   * @param {number} subscriberId - The subscriber ID
   * @param {number} definitionId - The attribute definition ID
   * @returns {Promise<SubscriberAttributeValue>} The attribute value
   * @throws {NotFoundException} If the subscriber or attribute definition is not found
   * @throws {ApiException} If an API error occurs
   */
  async getAttributeValue(subscriberId, definitionId) {
    const data = await this.client.get(`subscribers/${subscriberId}/attributes/${definitionId}`);
    return new SubscriberAttributeValue(data);
  }

  /**
   * Set a specific attribute value for a subscriber.
   *
   * @param {number} subscriberId - The subscriber ID
   * @param {number} definitionId - The attribute definition ID
   * @param {string|null} [value=null]
   * @returns {Promise<SubscriberAttributeValue>} The updated attribute value
   * @throws {ApiException} If an API error occurs
   */
  async setAttributeValue(subscriberId, definitionId, value = null) {
    const data = {};
    if (value !== null) {
      data.value = value;
    }
    const response = await this.client.post(`subscribers/${subscriberId}/attributes/${definitionId}`, data);
    return new SubscriberAttributeValue(response);
  }

  /**
   * Delete a specific attribute value for a subscriber.
   *
   * @param {number} subscriberId - The subscriber ID
   * @param {number} definitionId - The attribute definition ID
   * @returns {Promise<void>}
   * @throws {NotFoundException} If the subscriber or attribute definition is not found
   * @throws {ApiException} If an API error occurs
   */
  async deleteAttributeValue(subscriberId, definitionId) {
    await this.client.delete(`subscribers/${subscriberId}/attributes/${definitionId}`);
  }
}
