import { AbstractRequest } from './abstract-request';

/**
 * Request class for creating a subscriber list.
 */
export class CreateSubscriberListRequest extends AbstractRequest {
  /**
   * @param {string} name - The list name
   * @param {boolean} [isPublic=false] - Whether the list is public
   * @param {number|null} [listPosition=null] - The list position
   * @param {string|null} [description=null] - The list description
   */
  constructor(name, isPublic = false, listPosition = null, description = null) {
    super();
    this.name = name;
    this.public = isPublic;
    this.listPosition = listPosition;
    this.description = description;
  }
}
