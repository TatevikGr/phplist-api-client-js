import { AbstractRequest } from '../abstract-request.js';

/**
 * Request class for creating a new administrator.
 */
export class CreateAdministratorRequest extends AbstractRequest {
  /**
   * @param {string} loginName - The login name
   * @param {string} password - The password
   * @param {string} email - The email address
   * @param {boolean} superUser - Whether the administrator is a super user
   * @param {Array|null} [privileges=null] - The administrator privileges
   */
  constructor(loginName, password, email, superUser, privileges = null) {
    super();
    this.loginName = loginName;
    this.password = password;
    this.email = email;
    this.superUser = superUser;
    this.privileges = privileges;
  }
}
