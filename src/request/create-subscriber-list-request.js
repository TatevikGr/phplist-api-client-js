import { AbstractRequest } from './abstract-request.js';

/**
 * Request class for creating a subscriber list.
 */
export class CreateSubscriberListRequest extends AbstractRequest {
  /**
   * @param {string} name - The list name
   * @param {boolean} [isPublic=false] - Whether the list is public
   * @param {number|null} [listPosition=null] - The list position
   * @param {string|null} [description=null] - The list description
   * @param {string|null} [subjectPrefix=null] - The subject prefix
   * @param {string|null} [rssFeed=null] - The RSS feed URL
   * @param {string|null} [category=null] - The category
   */
  constructor(
      name,
      isPublic = false,
      listPosition = null,
      description = null,
      subjectPrefix = null,
      rssFeed = null,
      category = null
  ) {
    super();
    this.name = name;
    this.public = isPublic;
    this.listPosition = listPosition;
    this.description = description;
    this.subjectPrefix = subjectPrefix;
    this.rssFeed = rssFeed;
    this.category = category;
  }
}
