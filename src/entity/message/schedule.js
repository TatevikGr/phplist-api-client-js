export class Schedule {
  /**
   * @param {Object} data
   */
  constructor(data) {
    this.repeatInterval = data.repeat_interval !== undefined ? Number(data.repeat_interval) : null;
    this.repeatUntil = data.repeat_until || null;
    this.requeueInterval = data.requeue_interval !== undefined ? Number(data.requeue_interval) : null;
    this.requeueUntil = data.requeue_until || null;
    this.embargo = data.embargo || null;
  }
}
