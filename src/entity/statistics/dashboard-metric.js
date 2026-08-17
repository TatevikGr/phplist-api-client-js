export class DashboardMetric {
  /**
   * @param {Object} data
   */
  constructor(data = {}) {
    const rawValue = data.value !== undefined ? data.value : 0;
    this.value = Number.isInteger(rawValue) ? rawValue : Number(rawValue) || 0;
    this.changeVsLastMonth = data.change_vs_last_month !== undefined ? Number(data.change_vs_last_month) : 0.0;
  }
}