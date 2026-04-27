export class Bounce {
  /**
   * @param {Object} data
   */
  constructor(data) {
    this.id = data.id ? Number(data.id) : 0;
    this.status = data.status ?? null;
    this.date = data.date ?? null;
    this.messageId = data.message_id ? Number(data.message_id) : 0;
    this.messageSubject = data.message_subject ?? null;
    this.subscriberId = data.subscriber_id !== undefined && data.subscriber_id !== null
      ? Number(data.subscriber_id)
      : null;
    this.subscriberEmail = data.subscriber_email ?? null;
    this.comment = data.comment ?? null;
  }
}
