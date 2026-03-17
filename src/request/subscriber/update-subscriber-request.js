import { AbstractRequest } from '../abstract-request.js';

export class UpdateSubscriberRequest extends AbstractRequest {
  /**
   * @param {string} email
   * @param {boolean} [confirmed=false]
   * @param {boolean} [blacklisted=false]
   * @param {boolean} [htmlEmail=false]
   * @param {boolean} [disabled=false]
   */
  constructor(
    email,
    confirmed = false,
    blacklisted = false,
    htmlEmail = false,
    disabled = false,
  ) {
    super();
    this.email = email;
    this.confirmed = confirmed;
    this.blacklisted = blacklisted;
    this.htmlEmail = htmlEmail;
    this.disabled = disabled;
  }
}
