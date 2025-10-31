import { useOktaAuth } from "@okta/okta-react";

export default function Login() {
  const { authState, oktaAuth } = useOktaAuth();

  if (!authState?.isAuthenticated) {
    void oktaAuth.signInWithRedirect();
  }
  return <div></div>;
}
