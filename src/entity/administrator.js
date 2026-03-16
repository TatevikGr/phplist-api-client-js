export class Administrator {
  /**
   * @param {Object} data
   */
  constructor(data) {
    this.id = data.id ? Number(data.id) : 0;
    this.loginName = data.login_name || '';
    this.email = data.email || '';
    this.superUser = !!data.super_user;
    this.createdAt = data.created_at || '';
  }
}
