# phpList REST API Client for JavaScript

A JavaScript client for interacting with the phpList REST API.

## Installation

```bash
npm install axios @phplist/rest-api-client
```

## Usage

### Basic Usage

```javascript
import { Client, SubscribersClient } from '@phplist/rest-api-client';

const client = new Client('https://your-phplist-instance.com');

// Authenticate
await client.login('admin', 'password');

const subscribersClient = new SubscribersClient(client);

// Get a subscriber
try {
  const subscriber = await subscribersClient.getSubscriber(1);
  console.log(subscriber.email);
} catch (error) {
  console.error(error.message);
}
```

### Configuration

You can pass additional configuration to the client constructor, which will be passed to the underlying Axios instance.

```javascript
const client = new Client('https://your-phplist-instance.com', {
  timeout: 5000,
  headers: {
    'Custom-Header': 'value'
  },
  onAuthenticationError: (authError) => {
    console.error(`Authentication error (${authError.status}): ${authError.message}`);
    // e.g. clear local auth state / trigger re-login flow
  },
  onAuthorizationError: (authError) => {
    console.error(`Authorization error (${authError.status}): ${authError.message}`);
    // e.g. clear local auth state / trigger re-login flow
  }
});
```

You can also set or replace the authentication hook later:

```javascript
client.setOnAuthenticationError((authError, originalError, clientInstance) => {
  // central place for 401 handling
});
client.setOnAuthorizationError((authError, originalError, clientInstance) => {
    // central place for 403 handling
});
```

npm version patch
npm version minor
npm version major

npm publish --access public
