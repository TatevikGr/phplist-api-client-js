export class Options {
  /**
   * @param {Object} data
   */
  constructor(data) {
    this.fromField = data.from_field || null;
    this.toField = data.to_field || null;
    this.replyTo = data.reply_to || null;
    this.userSelection = data.user_selection || null;
  }
}
