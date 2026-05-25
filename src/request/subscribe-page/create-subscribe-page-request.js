import { AbstractRequest } from '../abstract-request.js';

export class CreateSubscribePageRequest extends AbstractRequest {
  /**
   * @param {string} title
   * @param {boolean|null} [active=null]
   * @param {Array<{key: string, value: *}>|Object<string, *>|null} [data=null]
   */
  constructor(title, active = null, data = null) {
    super();
    this.title = title;
    this.active = active;
    this.data = data;
  }
}
