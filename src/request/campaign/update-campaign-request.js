import { AbstractRequest } from '../abstract-request';

/**
 * Request class for updating a campaign.
 */
export class UpdateCampaignRequest extends AbstractRequest {
  /**
   * @param {Object|null} [content=null] - The content of the campaign (subject, body)
   * @param {Object|null} [format=null] - The format of the campaign (html, text)
   * @param {Object|null} [metadata=null] - The metadata of the campaign (title, description)
   * @param {Object|null} [schedule=null] - The schedule of the campaign (send_at)
   * @param {Object|null} [options=null] - The options of the campaign (track_opens, track_clicks)
   */
  constructor(content = null, format = null, metadata = null, schedule = null, options = null) {
    super();
    this.content = content;
    this.format = format;
    this.metadata = metadata;
    this.schedule = schedule;
    this.options = options;
  }
}
