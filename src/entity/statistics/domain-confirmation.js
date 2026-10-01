class DomainConfirmationBreakdown {
  /**
   * @param {Object} data
   */
  constructor(data = {}) {
    this.count = data.count !== undefined ? Number(data.count) : 0;
    this.percentage = data.percentage !== undefined ? Number(data.percentage) : 0;
  }
}

export class DomainConfirmation {
  /**
   * @param {Object} data
   */
  constructor(data = {}) {
    this.domain = data.domain || '';
    this.confirmed = new DomainConfirmationBreakdown(data.confirmed);
    this.unconfirmed = new DomainConfirmationBreakdown(data.unconfirmed);
    this.blacklisted = new DomainConfirmationBreakdown(data.blacklisted);
    this.total = new DomainConfirmationBreakdown(data.total);
  }
}