import axios from 'axios';
import {
  ApiException,
  AuthenticationException,
  NotFoundException,
  ValidationException
} from './exception';

export class Client {
  /**
   * Client constructor.
   *
   * @param {string} baseUrl - The base URL for the API (e.g., 'https://example.com')
   * @param {Object} [config={}] - Additional configuration options
   * @param {Object} [logger=console] - Logger instance
   */
  constructor(baseUrl, config = {}, logger = console) {
    this.baseUrl = baseUrl.replace(/\/+$/, '');
    this.logger = logger;
    this.sessionId = null;
    this.id = null;

    this.axiosInstance = axios.create({
      baseURL: `${this.baseUrl}/api/v2`,
      timeout: config.timeout || 30000,
      ...config
    });
  }

  /**
   * Authenticate with the API using login credentials.
   *
   * @param {string} username
   * @param {string} password
   * @returns {Promise<Object>}
   * @throws {AuthenticationException}
   */
  async login(username, password) {
    this.logger.info(`Authenticating with the API: ${username}`);

    try {
      const response = await this.axiosInstance.post('/sessions', {
        login_name: username,
        password: password
      });

      const data = response.data;

      if (data?.key) {
        this.sessionId = data.key;
        this.id = Number(data.id ?? 0);
        this.logger.info('Successfully authenticated with the API');
        return data;
      }

      throw new AuthenticationException('Session ID not found in response');
    } catch (error) {
      this.logger.error(`Authentication failed: ${error.message}`);
      throw this._handleError(error, AuthenticationException);
    }
  }

  setSessionId(sessionId) {
    this.sessionId = sessionId;
    return this;
  }

  getSessionId() {
    return this.sessionId;
  }

  setId(id) {
    this.id = id;
    return this;
  }

  getId() {
    return this.id;
  }

  async get(endpoint, queryParams = {}, headers = {}) {
    try {
      const params = typeof queryParams.toJSON === 'function' ? queryParams.toJSON() : queryParams;
      const response = await this.axiosInstance.get(this._normalizeEndpoint(endpoint), {
        params,
        headers: { ...this._getHeaders(), ...headers }
      });
      return response.data;
    } catch (error) {
      throw this._handleError(error);
    }
  }

  async post(endpoint, data = {}, headers = {}) {
    try {
      const response = await this.axiosInstance.post(
          this._normalizeEndpoint(endpoint),
          data,
          { headers: { ...this._getHeaders(), ...headers } }
      );
      return response.data;
    } catch (error) {
      throw this._handleError(error);
    }
  }

  async put(endpoint, data = {}, headers = {}) {
    try {
      const response = await this.axiosInstance.put(
          this._normalizeEndpoint(endpoint),
          data,
          { headers: { ...this._getHeaders(), ...headers } }
      );
      return response.data;
    } catch (error) {
      throw this._handleError(error);
    }
  }

  async delete(endpoint, queryParams = {}, headers = {}) {
    try {
      const params = typeof queryParams.toJSON === 'function' ? queryParams.toJSON() : queryParams;
      const response = await this.axiosInstance.delete(this._normalizeEndpoint(endpoint), {
        params,
        headers: { ...this._getHeaders(), ...headers }
      });
      return response.data;
    } catch (error) {
      throw this._handleError(error);
    }
  }

  /**
   * Make a GET request to the API expecting a non-JSON (raw) response, e.g., text/html.
   *
   * @param {string} endpoint - The API endpoint
   * @param {Object} [queryParams={}] - Query parameters
   * @param {Object} [headers={}] - Additional headers to send
   * @returns {Promise<string>} The raw response body
   * @throws {ApiException} If an API error occurs
   */
  async getRaw(endpoint, queryParams = {}, headers = {}) {
    try {
      const params = typeof queryParams.toJSON === 'function' ? queryParams.toJSON() : queryParams;
      const response = await this.axiosInstance.get(this._normalizeEndpoint(endpoint), {
        params,
        headers: {
          Accept: 'text/html, */*;q=0.8',
          ...this._getHeaders(),
          ...headers
        },
        responseType: 'text'
      });
      return response.data;
    } catch (error) {
      throw this._handleError(error);
    }
  }

  /**
   * Make a POST request with multipart/form-data.
   *
   * @param {string} endpoint - The API endpoint
   * @param {FormData|Object} formData - The form data to send
   * @returns {Promise<Object>} The response data
   * @throws {ApiException} If an API error occurs
   */
  async postMultipart(endpoint, formData) {
    try {
      const response = await this.axiosInstance.post(
          this._normalizeEndpoint(endpoint),
          formData,
          {
            headers: {
              ...this._getHeaders(),
              'Content-Type': 'multipart/form-data'
            }
          }
      );
      return response.data;
    } catch (error) {
      throw this._handleError(error);
    }
  }

  _normalizeEndpoint(endpoint) {
    return endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  }

  _getHeaders() {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };

    if (this.sessionId) {
      headers['php-auth-pw'] = this.sessionId;
    }

    return headers;
  }

  _handleError(error, DefaultException = ApiException) {
    if (error.response) {
      const { status, data } = error.response;
      const message = data?.message || error.message;

      if (status === 401 || status === 403) {
        return new AuthenticationException(message, status, data);
      }
      if (status === 404) {
        return new NotFoundException(message, status, data);
      }
      if (status === 400 || status === 422) {
        return new ValidationException(message, status, data?.errors || data);
      }

      return new DefaultException(message, status, data);
    }

    return new DefaultException(error.message);
  }
}
