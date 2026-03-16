export class Content {
  /**
   * @param {Object} data
   */
  constructor(data) {
    this.subject = data.subject || null;
    this.textMessage = data.text_message || null;
    this.text = data.text || null;
    this.footer = data.footer || null;
  }
}
