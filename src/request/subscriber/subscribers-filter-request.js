import { AbstractRequest } from '../abstract-request';

export class SubscribersFilterRequest extends AbstractRequest {
  /**
   * @param {boolean|null} [isConfirmed=null]
   * @param {boolean|null} [isBlacklisted=null]
   * @param {string|null} [findColumn=null]
   * @param {string|null} [findValue=null]
   */
  constructor(
    isConfirmed = null,
    isBlacklisted = null,
    findColumn = null,
    findValue = null
  ) {
    super();
    this.isConfirmed = isConfirmed;
    this.isBlacklisted = isBlacklisted;
    this.findColumn = findColumn;
    this.findValue = findValue;
  }
}
