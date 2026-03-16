import { AbstractRequest } from '../abstract-request';

/**
 * Request class for updating an administrator.
 */
export class UpdateAdministratorRequest extends AbstractRequest {
  /**
   * @param {string|null} [loginName=null] - The login name
   * @param {string|null} [password=null] - The password
   * @param {string|null} [email=null] - The email address
   * @param {boolean|null} [superUser=null] - Whether the administrator is a super user
   * @param {Array|null} [privileges=null] - The administrator privileges
   */
  constructor(loginName = null, password = null, email = null, superUser = null, privileges = null) {
    super();
    this.loginName = loginName;
    this.password = password;
    this.email = email;
    this.superUser = superUser;
    this.privileges = privileges;
  }
}
