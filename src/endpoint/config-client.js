import ConfigCollection from "../response/config-collection-response.js";
import Config from "../entity/config.js";

export class ConfigClient {
  constructor(client) {
    this.client = client;
  }

  async getConfigs() {
    const response = await this.client.get('configs');
    return new ConfigCollection(response);
  }

  async getByKey(key) {
    const response = await this.client.get(`configs/${key}`);
    return new Config(response);
  }

  async delete(key) {
    const encodedKey = encodeURIComponent(key);
    await this.client.delete(`configs/${encodedKey}`);
  }

  async create(request) {
    const response = await this.client.post(
        'configs',
        request.toArray()
    );

    return new Config(response);
  }

  async update(key, value) {
    const encodedKey = encodeURIComponent(key);
    const response = await this.client.put(
        `configs/${encodedKey}`,
        { value }
    );

    return new Config(response);
  }
}
