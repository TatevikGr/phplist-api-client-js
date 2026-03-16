import { AbstractRequest } from '../abstract-request.js';

/**
 * Request class for updating an administrator attribute definition.
 */
export class UpdateAdminAttributeDefinitionRequest extends AbstractRequest {
  /**
   * @param {string|null} [name=null] - The attribute name
   * @param {string|null} [type=null] - The attribute type
   * @param {number|null} [order=null] - The attribute order
   * @param {string|null} [defaultValue=null] - The default value
   * @param {boolean|null} [required=null] - Whether the attribute is required
   * @param {string|null} [tableName=null] - The table name
   */
  constructor(name = null, type = null, order = null, defaultValue = null, required = null, tableName = null) {
    super();
    this.name = name;
    this.type = type;
    this.order = order;
    this.defaultValue = defaultValue;
    this.required = required;
    this.tableName = tableName;
  }
}
