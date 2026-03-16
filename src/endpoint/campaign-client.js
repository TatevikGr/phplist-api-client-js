import { Campaign } from '../entity/campaign.js';
import { CampaignCollection } from '../response/campaign/campaign-collection.js';

/**
 * Client for campaign-related API endpoints.
 */
export class CampaignClient {
  /**
   * @param {Client} client - The API client
   */
  constructor(client) {
    this.client = client;
  }

  /**
   * Get a list of campaigns.
   *
   * @param {number|null} [afterId=null] - The ID to start from for pagination
   * @param {number} [limit=25] - The maximum number of items to return
   * @returns {Promise<CampaignCollection>} The list of campaigns
   * @throws {ApiException} If an API error occurs
   */
  async getCampaigns(afterId = null, limit = 25) {
    const queryParams = { limit };

    if (afterId !== null) {
      queryParams.after_id = afterId;
    }

    const data = await this.client.get('campaigns', queryParams);
    return new CampaignCollection(data);
  }

  /**
   * Get a campaign by ID.
   *
   * @param {number} id - The campaign ID
   * @returns {Promise<Campaign>} The campaign data
   * @throws {NotFoundException} If the campaign is not found
   * @throws {ApiException} If an API error occurs
   */
  async getCampaign(id) {
    const data = await this.client.get(`campaigns/${id}`);
    return new Campaign(data);
  }

  /**
   * Create a new campaign.
   *
   * @param {CreateCampaignRequest} request - The campaign data
   * @returns {Promise<Campaign>} The created campaign
   * @throws {ValidationException} If validation fails
   * @throws {ApiException} If an API error occurs
   */
  async createCampaign(request) {
    const data = await this.client.post('campaigns', request);
    return new Campaign(data);
  }

  /**
   * Update a campaign.
   *
   * @param {number} id - The campaign ID
   * @param {UpdateCampaignRequest} request - The campaign data
   * @returns {Promise<Campaign>} The updated campaign
   * @throws {NotFoundException} If the campaign is not found
   * @throws {ValidationException} If validation fails
   * @throws {ApiException} If an API error occurs
   */
  async updateCampaign(id, request) {
    const data = await this.client.put(`campaigns/${id}`, request);
    return new Campaign(data);
  }

  /**
   * Delete a campaign.
   *
   * @param {number} id - The campaign ID
   * @returns {Promise<void>}
   * @throws {NotFoundException} If the campaign is not found
   * @throws {ApiException} If an API error occurs
   */
  async deleteCampaign(id) {
    await this.client.delete(`campaigns/${id}`);
  }
}
