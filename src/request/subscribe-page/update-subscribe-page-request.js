import { AbstractRequest } from '../abstract-request.js';

export class UpdateSubscribePageRequest extends AbstractRequest {
  /**
   * @param {string|null} [title=null]
   * @param {boolean|null} [active=null]
   * @param {Array<{key: string, value: *}>|Object<string, *>|null} [data=null]
   */
  constructor(title = null, active = null, data = null) {
    super();
    this.title = title;
    this.active = active;
    this.data = data;
  }
}
