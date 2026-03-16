import { CampaignStatisticsCollection } from '../response/statistics/campaign-statistics-collection';
import { ViewOpensCollection } from '../response/statistics/view-opens-collection';
import { TopDomainsCollection } from '../response/statistics/top-domains-collection';
import { DomainConfirmation } from '../entity/statistics/domain-confirmation';
import { TopLocalPart } from '../entity/statistics/top-local-part';

/**
 * Client for statistics and analytics-related API endpoints.
 */
export class StatisticsClient {
  /**
   * @param {Client} client - The API client
   */
  constructor(client) {
    this.client = client;
  }

  /**
   * Get campaign statistics.
   *
   * @param {number|null} [afterId=null] - The ID to start from for pagination
   * @param {number} [limit=25] - The maximum number of items to return
   * @returns {Promise<CampaignStatisticsCollection>} The campaign statistics
   * @throws {ApiException} If an API error occurs
   * @throws {NotFoundException} If the campaign is not found
   */
  async getCampaignStatistics(afterId = null, limit = 25) {
    const queryParams = { limit };

    if (afterId !== null) {
      queryParams.after_id = afterId;
    }

    const data = await this.client.get('analytics/campaigns', queryParams);
    return new CampaignStatisticsCollection(data);
  }

  /**
   * Get statistics for a specific time period.
   *
   * @param {number|null} [afterId=null]
   * @param {number} [limit=25]
   * @returns {Promise<ViewOpensCollection>} The time period statistics
   * @throws {ApiException} If an API error occurs
   */
  async getStatisticsOfViewOpens(afterId = null, limit = 25) {
    const queryParams = { limit };

    if (afterId !== null) {
      queryParams.after_id = afterId;
    }

    const data = await this.client.get('analytics/view-opens', queryParams);
    return new ViewOpensCollection(data);
  }

  /**
   * Get top domains' statistics.
   *
   * @param {number} [limit=20] - Maximum number of domains to return
   * @param {number} [minSubscribers=5] - Minimum number of subscribers per domain
   * @returns {Promise<TopDomainsCollection>} The top domains statistics
   * @throws {ApiException} If an API error occurs
   */
  async getTopDomains(limit = 20, minSubscribers = 5) {
    const queryParams = {
      limit: limit,
      min_subscribers: minSubscribers
    };

    const data = await this.client.get('analytics/domains/top', queryParams);
    return new TopDomainsCollection(data);
  }

  /**
   * Get domain confirmation statistics.
   *
   * @param {number} [limit=50] - Maximum number of domains to return
   * @returns {Promise<DomainConfirmation>} The domain confirmation statistics
   * @throws {ApiException} If an API error occurs
   */
  async getDomainConfirmationStatistics(limit = 50) {
    const queryParams = { limit };

    const data = await this.client.get('analytics/domains/confirmation', queryParams);
    return new DomainConfirmation(data);
  }

  /**
   * Get top local-parts statistics.
   *
   * @param {number} [limit=25] - Maximum number of local-parts to return
   * @returns {Promise<TopLocalPart>} The top local-parts statistics
   * @throws {ApiException} If an API error occurs
   */
  async getTopLocalParts(limit = 25) {
    const queryParams = { limit };

    const data = await this.client.get('analytics/local-parts/top', queryParams);
    return new TopLocalPart(data);
  }
}
