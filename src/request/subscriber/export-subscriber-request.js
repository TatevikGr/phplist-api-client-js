import { AbstractRequest } from '../abstract-request.js';

export class ExportSubscriberRequest extends AbstractRequest {
  /**
   * @param {string} [dateType='any']
   * @param {number|null} [listId=null]
   * @param {string|null} [dateFrom=null]
   * @param {string|null} [dateTo=null]
   * @param {string[]} [columns=['id', 'email', 'confirmed', 'blacklisted', 'bounceCount', 'createdAt', 'updatedAt', 'uniqueId', 'htmlEmail', 'disabled', 'extraData']]
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
    ]
  ) {
    super();
    this.dateType = dateType;
    this.listId = listId;
    this.dateFrom = dateFrom;
    this.dateTo = dateTo;
    this.columns = columns;
  }
}
