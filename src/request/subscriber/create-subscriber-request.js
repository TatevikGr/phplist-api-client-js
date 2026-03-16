import { AbstractRequest } from '../abstract-request.js';

export class CreateSubscriberRequest extends AbstractRequest {
  /**
   * @param {string} email
   * @param {boolean} [requestConfirmation=false]
   * @param {boolean} [htmlEmail=false]
   */
  constructor(email, requestConfirmation = false, htmlEmail = false) {
    super();
    this.email = email;
    this.requestConfirmation = requestConfirmation;
    this.htmlEmail = htmlEmail;
  }
}
