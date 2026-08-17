import { DashboardMetric } from '../../entity/statistics/dashboard-metric.js';

/**
 * Response class for the dashboard summary statistics.
 */
export class DashboardSummaryResponse {
  /**
   * @param {Object} data
   */
  constructor(data = {}) {
    this.totalSubscribers = new DashboardMetric(data.total_subscribers || {});
    this.activeCampaigns = new DashboardMetric(data.active_campaigns || {});
    this.openRate = new DashboardMetric(data.open_rate || {});
    this.bounceRate = new DashboardMetric(data.bounce_rate || {});
  }
}