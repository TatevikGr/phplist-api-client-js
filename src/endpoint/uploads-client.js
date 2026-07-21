/**
 * Client for editor uploads API endpoints.
 */
export class UploadsClient {
  /**
   * @param {Client} client - The API client
   */
  constructor(client) {
    this.client = client;
  }

  /**
   * List files in an upload directory.
   *
   * @param {string} [directory='/'] - Upload directory (e.g. uploads, images)
   * @returns {Promise<Object>} Response containing files, directory and total
   * @throws {NotFoundException} If the directory does not exist
   * @throws {ApiException} If an API error occurs
   */
  async getUploads(directory = '/') {
    return await this.client.get('editor-uploads', { directory });
  }

  /**
   * Upload an editor asset.
   *
   * @param {File|Blob} file - File to upload
   * @param {string} [field='upload'] - Form field name ("upload" or "file")
   * @returns {Promise<Object>} Uploaded file information
   * @throws {ValidationException} If validation fails
   * @throws {ApiException} If an API error occurs
   */
  async upload(file, field = 'upload') {
    const formData = new FormData();
    formData.append(field, file);

    return await this.client.postMultipart('editor-uploads', formData);
  }

  /**
   * Get an uploaded file by name.
   *
   * @param {string} filename - Name of the uploaded image file
   * @returns {Promise<string>} Raw file contents
   * @throws {NotFoundException} If the file does not exist
   * @throws {ApiException} If an API error occurs
   */
  async getUploadedFile(filename) {
    return await this.client.getRaw(`editor-uploads/${filename}`, {}, {
      Accept: 'application/octet-stream, */*;q=0.8'
    });
  }
}