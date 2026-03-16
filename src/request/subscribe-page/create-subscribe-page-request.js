import { AbstractRequest } from '../abstract-request';

export class CreateSubscribePageRequest extends AbstractRequest {
  /**
   * @param {string} title
   * @param {boolean|null} [active=null]
   */
  constructor(title, active = null) {
    super();
    this.title = title;
    this.active = active;
  }
}
