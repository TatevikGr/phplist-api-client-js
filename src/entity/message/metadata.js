export class Metadata {
  /**
   * @param {Object} data
   */
  constructor(data) {
    this.status = data.status || null;
    this.processed = Number(data.processed);
    this.views = data.views !== undefined ? Number(data.views) : null;
    this.bounceCount = data.bounce_count !== undefined ? Number(data.bounce_count) : null;
    this.entered = data.entered || null;
    this.sent = data.sent || null;
    this.sendStart = data.send_start || null;
  }
}
