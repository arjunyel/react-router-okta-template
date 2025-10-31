import { useOktaAuth } from "@okta/okta-react";
import { Outlet, redirect } from "react-router";
import { oktaAuthInstance as oktaInstance } from "~/utils/auth";

export async function clientLoader() {
  if (!(await oktaInstance.isAuthenticated())) {
    throw redirect("/login");
  }
}

export default function ProtectedLayout() {
  const { oktaAuth } = useOktaAuth();
  return (
    <>
      <button
        onClick={() =>
          void oktaAuth.signOut({
            postLogoutRedirectUri: `${window.location.origin}/logout`,
          })
        }
      >
        Logout
      </button>
      <Outlet />
    </>
  );
}
