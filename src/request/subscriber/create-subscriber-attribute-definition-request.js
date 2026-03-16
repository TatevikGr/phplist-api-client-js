import { AbstractRequest } from '../abstract-request';

export class CreateSubscriberAttributeDefinitionRequest extends AbstractRequest {
  /**
   * @param {string} name - The attribute name
   * @param {string|null} [type=null] - The attribute type
   * @param {number|null} [order=null] - The attribute order
   * @param {string|null} [defaultValue=null] - The default value
   * @param {boolean|null} [required=null] - Whether the attribute is required
   * @param {Array|null} [options=null] - Options for dynamic list attributes
   */
  constructor(
    name,
    type = null,
    order = null,
    defaultValue = null,
    required = null,
    options = null
  ) {
    super();
    this.name = name;
    this.type = type;
    this.order = order;
    this.defaultValue = defaultValue;
    this.required = required;
    this.options = options;
  }
}
