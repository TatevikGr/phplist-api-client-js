import { AbstractRequest } from '../abstract-request.js';

export class ImportSubscribersRequest extends AbstractRequest {
  /**
   * @param {File|Blob} file
   * @param {number|null} [listId=null]
   * @param {boolean} [updateExisting=false]
   * @param {boolean} [skipInvalidEmails=false]
   */
  constructor(
    file,
    listId = null,
    updateExisting = false,
    skipInvalidEmails = false
  ) {
    super();
    this.file = file;
    this.listId = listId;
    this.updateExisting = updateExisting;
    this.skipInvalidEmails = skipInvalidEmails;
  }
}
