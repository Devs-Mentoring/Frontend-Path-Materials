const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CALLBACK_PATH = process.env.REACT_APP_CALLBACK_PATH;
const ISSUER = process.env.REACT_APP_ISSUER;
const HOST = process.env.REACT_APP_HOST;
const DOMAIN = process.env.REACT_APP_OKTA_DOMAIN;

if (!CLIENT_ID || !CALLBACK_PATH || !ISSUER || !HOST) {
  throw new Error("All environmental variables must be set");
}

export const oktaAuthConfig = {
  // Note: If your app is configured to use the Implicit flow
  // instead of the Authorization Code with Proof of Code Key Exchange (PKCE)
  // you will need to add `pkce: false`
  issuer: `https://${DOMAIN}/oauth2/default`,
  clientId: `${CLIENT_ID}`,
  redirectUri: window.location.origin + "/login/callback",
};

export const oktaSignInConfig = {
  baseUrl: `https://${DOMAIN}`,
  clientId: `${CLIENT_ID}`,
  redirectUri: window.location.origin + "/login/callback",
  authParams: {
    // If your app is configured to use the Implicit flow
    // instead of the Authorization Code with Proof of Code Key Exchange (PKCE)
    // you will need to uncomment the below line
    // pkce: false
  },
  // Additional documentation on config options can be found at https://github.com/okta/okta-signin-widget#basic-config-options
};
