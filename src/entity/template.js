export class Template {
  /**
   * @param {Object} data
   */
  constructor(data) {
    this.id = data.id ? Number(data.id) : 0;
    this.title = data.title || '';
    this.text = data.text || null;
    this.content = data.content || null;
    this.listOrder = data.list_order || null;
    this.images = Array.isArray(data.images) ? data.images : null;
  }
}
