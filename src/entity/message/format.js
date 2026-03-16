export class Format {
  /**
   * @param {Object} data
   */
  constructor(data) {
    this.htmlFormated = data.html_formated !== undefined ? !!data.html_formated : null;
    this.sendFormat = data.send_format || null;
    this.formatOptions = data.format_options || null;
  }
}
