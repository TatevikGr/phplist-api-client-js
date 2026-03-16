import { AbstractRequest } from '../abstract-request';

/**
 * Request class for creating an administrator attribute definition.
 */
export class CreateAdminAttributeDefinitionRequest extends AbstractRequest {
  /**
   * @param {string} name - The attribute name
   * @param {string|null} [type=null] - The attribute type
   * @param {number|null} [order=null] - The attribute order
   * @param {string|null} [defaultValue=null] - The default value
   * @param {boolean|null} [required=null] - Whether the attribute is required
   */
  constructor(name, type = null, order = null, defaultValue = null, required = null) {
    super();
    this.name = name;
    this.type = type;
    this.order = order;
    this.defaultValue = defaultValue;
    this.required = required;
  }
}
