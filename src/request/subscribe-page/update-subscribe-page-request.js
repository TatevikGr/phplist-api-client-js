import { AbstractRequest } from '../abstract-request.js';

export class UpdateSubscribePageRequest extends AbstractRequest {
  /**
   * @param {string|null} [title=null]
   * @param {boolean|null} [active=null]
   */
  constructor(title = null, active = null) {
    super();
    this.title = title;
    this.active = active;
  }
}
