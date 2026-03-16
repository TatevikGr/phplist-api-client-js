export class DomainConfirmation {
  /**
   * @param {Object} data
   */
  constructor(data) {
    this.domain = data.domain || '';
    this.total = data.total !== undefined ? Number(data.total) : 0;
    this.confirmed = data.confirmed !== undefined ? Number(data.confirmed) : 0;
    this.unconfirmed = data.unconfirmed !== undefined ? Number(data.unconfirmed) : 0;
    this.confirmationRate = data.confirmation_rate !== undefined ? Number(data.confirmation_rate) : 0.0;
  }
}
