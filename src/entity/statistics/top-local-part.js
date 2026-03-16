export class TopLocalPart {
  /**
   * @param {Object} data
   */
  constructor(data) {
    this.localPart = data.local_part || '';
    this.count = data.count !== undefined ? Number(data.count) : 0;
    this.percentage = data.percentage !== undefined ? Number(data.percentage) : 0.0;
  }
}
