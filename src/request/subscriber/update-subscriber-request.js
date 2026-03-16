import { AbstractRequest } from '../abstract-request';

export class UpdateSubscriberRequest extends AbstractRequest {
  /**
   * @param {string} email
   * @param {boolean} [confirmed=false]
   * @param {boolean} [blacklisted=false]
   * @param {boolean} [htmlEmail=false]
   * @param {boolean} [disabled=false]
   * @param {string|null} [additionalData=null]
   */
  constructor(
    email,
    confirmed = false,
    blacklisted = false,
    htmlEmail = false,
    disabled = false,
    additionalData = null
  ) {
    super();
    this.email = email;
    this.confirmed = confirmed;
    this.blacklisted = blacklisted;
    this.htmlEmail = htmlEmail;
    this.disabled = disabled;
    this.additionalData = additionalData;
  }
}
