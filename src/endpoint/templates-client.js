import { Template } from '../entity/template.js';
import { TemplateCollection } from '../response/index.js';

/**
 * Client for templates-related API endpoints.
 */
export class TemplatesClient {
  /**
   * @param {Client} client - The API client
   */
  constructor(client) {
    this.client = client;
  }

  /**
   * Get a list of templates.
   *
   * @param {number|null} [afterId=null] - The ID to start from for pagination
   * @param {number} [limit=25] - The maximum number of items to return
   * @returns {Promise<TemplateCollection>} The list of templates
   * @throws {ApiException} If an API error occurs
   */
  async getTemplates(afterId = null, limit = 25) {
    const queryParams = { limit };

    if (afterId !== null) {
      queryParams.after_id = afterId;
    }

    const data = await this.client.get('templates', queryParams);
    return new TemplateCollection(data);
  }

  /**
   * Get a template by ID.
   *
   * @param {string} id - The template ID
   * @returns {Promise<Template>} The template data
   * @throws {NotFoundException} If the template is not found
   * @throws {ApiException} If an API error occurs
   */
  async getTemplate(id) {
    const data = await this.client.get(`templates/${id}`);
    return new Template(data);
  }

  /**
   * Create a new template.
   *
   * @param {CreateTemplateRequest} request - The template request
   * @returns {Promise<Template>} The created template
   * @throws {ValidationException} If validation fails
   * @throws {ApiException} If an API error occurs
   */
  async createTemplate(request) {
    const data = await this.client.post('templates', request);
    return new Template(data);
  }

  /**
   * Update template.
   *
   * @param {CreateTemplateRequest} request - The template request
   * @param {int} templateId - The template ID
   * @returns {Promise<Template>} The updated template
   * @throws {ValidationException} If validation fails
   * @throws {ApiException} If an API error occurs
   */
  async updateTemplate(request, templateId) {
    const data = await this.client.put(`templates/${templateId}`, request);
    return new Template(data);
  }

  /**
   * Delete a template.
   *
   * @param {string} id - The template ID
   * @returns {Promise<void>}
   * @throws {NotFoundException} If the template is not found
   * @throws {ApiException} If an API error occurs
   */
  async deleteTemplate(id) {
    await this.client.delete(`templates/${id}`);
  }
}
