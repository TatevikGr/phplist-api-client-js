import { CampaignPerformancePoint } from '../../entity/statistics/campaign-performance-point.js';

/**
 * Response class for a collection of campaign performance chart points.
 */
export class CampaignPerformanceCollection {
  /**
   * @param {Array} data
   */
  constructor(data = []) {
    this.points = [];
    for (const point of Array.isArray(data) ? data : []) {
      this.points.push(new CampaignPerformancePoint(point));
    }
  }
}