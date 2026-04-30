export class ApiException extends Error {
  constructor(message, status = null, responseData = null) {
    super(message);
    this.name = 'ApiException';
    this.status = status;
    this.responseData = responseData;
  }
}

export class AuthenticationException extends ApiException {
  constructor(message, status = null, responseData = null) {
    super(message, status, responseData);
    this.name = 'AuthenticationException';
  }
}

export class AuthorizationException extends ApiException {
  constructor(message, status = null, responseData = null) {
    super(message, status, responseData);
    this.name = 'AuthorizationException';
  }
}

export class NotFoundException extends ApiException {
  constructor(message, status = null, responseData = null) {
    super(message, status, responseData);
    this.name = 'NotFoundException';
  }
}

export class ValidationException extends ApiException {
  constructor(message, status = null, responseData = null) {
    super(message, status, responseData);
    this.name = 'ValidationException';
  }
}
