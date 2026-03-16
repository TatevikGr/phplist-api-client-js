import { AbstractRequest } from '../abstract-request';

export class GetSubscriberHistoryRequest extends AbstractRequest {
  /**
   * @param {number|null} [afterId=null]
   * @param {number|null} [limit=null]
   * @param {string|null} [ip=null]
   * @param {string|null} [dateFrom=null]
   * @param {string|null} [summery=null]
   */
  constructor(
    afterId = null,
    limit = null,
    ip = null,
    dateFrom = null,
    summery = null
  ) {
    super();
    this.afterId = afterId;
    this.limit = limit;
    this.ip = ip;
    this.dateFrom = dateFrom;
    this.summery = summery;
  }
}
