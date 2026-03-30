import { AbstractRequest } from '../abstract-request.js';

export class ExportSubscriberRequest extends AbstractRequest {
  /**
   * @param {string} [dateType='any']
   * @param {number|null} [listId=null]
   * @param {string|null} [dateFrom=null]
   * @param {string|null} [dateTo=null]
   * @param {string[]} [columns=['id', 'email', 'confirmed', 'blacklisted', 'bounceCount', 'createdAt', 'updatedAt', 'uniqueId', 'htmlEmail', 'disabled', 'extraData']]
   * @param {boolean|null} [isConfirmed=null]
   * @param {boolean|null} [isBlacklisted=null]
   */
  constructor(
    dateType = 'any',
    listId = null,
    dateFrom = null,
    dateTo = null,
    columns = [
      'id',
      'email',
      'confirmed',
      'blacklisted',
      'bounceCount',
      'createdAt',
      'updatedAt',
      'uniqueId',
      'htmlEmail',
      'disabled',
      'extraData'
    ],
    isConfirmed = null,
    isBlacklisted = null,
  ) {
    super();
    this.dateType = dateType;
    this.listId = listId;
    this.dateFrom = dateFrom;
    this.dateTo = dateTo;
    this.columns = columns;
    this.isConfirmed = isConfirmed;
    this.isBlacklisted = isBlacklisted;
  }
}
