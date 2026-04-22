import { AbstractRequest } from '../abstract-request.js';

/**
 * Request class for creating a new template.
 */
export class TemplateRequest extends AbstractRequest {
  /**
   * @param {string} title - The title of the template
   * @param {string|null} [content=null] - The HTML content of the template
   * @param {string|null} [text=null] - The plain text content of the template
   * @param {string|null} [file=null] - Optional file upload for HTML content
   * @param {boolean|null} [checkLinks=null] - Check that all links have full URLs
   * @param {boolean|null} [checkImages=null] - Check that all images have full URLs
   * @param {boolean|null} [checkExternalImages=null] - Check that all external images exist
   * @param {number|null} [listOrder=null] - The order of the template in a list
   */
  constructor(
    title,
    content = null,
    text = null,
    file = null,
    checkLinks = null,
    checkImages = null,
    checkExternalImages = null,
    listOrder = null,
  ) {
    super();
    this.title = title;
    this.content = content;
    this.text = text;
    this.file = file;
    this.checkLinks = checkLinks;
    this.checkImages = checkImages;
    this.checkExternalImages = checkExternalImages;
    this.listOrder = listOrder;
  }
}
