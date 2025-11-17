import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
console.log("VITE_OKTA_DOMAIN:", import.meta.env.VITE_OKTA_DOMAIN);

export const oktaAuthInstance = new OktaAuth({
  issuer: `https://${import.meta.env.VITE_OKTA_DOMAIN}`,
  clientId: import.meta.env.VITE_OKTA_CLIENT_ID,
  redirectUri: `${window.location.origin}/login/callback`,
});

export { toRelativeUrl, type OktaAuth };
