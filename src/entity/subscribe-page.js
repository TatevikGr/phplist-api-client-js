import { Administrator } from './administrator';

export class SubscribePage {
  /**
   * @param {Object} data
   */
  constructor(data) {
    this.id = data.id ? Number(data.id) : 0;
    this.title = data.title || '';
    this.active = !!data.active;
    this.owner = (data.owner && typeof data.owner === 'object') ? new Administrator(data.owner) : null;
  }
}
