import { SubscriberListCollection } from '../response/subscribers/subscriber-list-collection';

/**
 * Client for message/list association endpoints.
 */
export class ListMessagesClient {
  /**
   * @param {Client} client - The API client
   */
  constructor(client) {
    this.client = client;
  }

  /**
   * Returns a list of subscriber lists associated with a message.
   *
   * @param {number} messageId
   * @returns {Promise<SubscriberListCollection>}
   * @throws {ApiException}
   */
  async getListsByMessage(messageId) {
    const response = await this.client.get(`list-messages/message/${messageId}/lists`);
    return new SubscriberListCollection(response);
  }

  /**
   * Removes all list associations for a message.
   *
   * @param {number} messageId
   * @returns {Promise<void>}
   * @throws {ApiException}
   */
  async removeAllListsFromMessage(messageId) {
    await this.client.delete(`list-messages/message/${messageId}/lists`);
  }

  /**
   * Returns a list of messages associated with a subscriber list.
   *
   * @param {number} listId
   * @returns {Promise<Array>}
   * @throws {ApiException}
   */
  async getMessagesByList(listId) {
    return await this.client.get(`list-messages/list/${listId}/messages`);
  }

  /**
   * Associates a message with a subscriber list.
   *
   * @param {number} messageId
   * @param {number} listId
   * @returns {Promise<Object>} Raw API response
   * @throws {ApiException}
   */
  async associateMessageWithList(messageId, listId) {
    return await this.client.post(`list-messages/message/${messageId}/list/${listId}`);
  }

  /**
   * Disassociates a message from a subscriber list.
   *
   * @param {number} messageId
   * @param {number} listId
   * @returns {Promise<void>}
   * @throws {ApiException}
   */
  async dissociateMessageFromList(messageId, listId) {
    await this.client.delete(`list-messages/message/${messageId}/list/${listId}`);
  }

  /**
   * Checks if a message is associated with a subscriber list.
   *
   * @param {number} messageId
   * @param {number} listId
   * @returns {Promise<boolean>} True if associated, false otherwise
   * @throws {ApiException}
   */
  async checkMessageAssociatedWithList(messageId, listId) {
    const response = await this.client.get(`list-messages/message/${messageId}/list/${listId}/check`);
    return !!(response?.is_associated);
  }
}
