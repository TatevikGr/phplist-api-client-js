export class SubscriberAttributeDefinition {
  /**
   * @param {Object} data
   */
  constructor(data) {
    this.id = data.id ? Number(data.id) : 0;
    this.name = data.name || '';
    this.type = data.type || '';
    this.required = !!data.required;
    this.defaultValue = data.default_value || null;
    this.description = data.description || null;
    this.listOrder = data.list_order !== undefined ? Number(data.list_order) : null;
  }
}
