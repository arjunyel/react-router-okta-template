import type { Route } from "./+types/layout";
import { Security } from "@okta/okta-react";
import { oktaAuthInstance, type OktaAuth, toRelativeUrl } from "~/utils/auth";
import { useCallback } from "react";
import { Outlet, useNavigate } from "react-router";

export default function RootLayout(_: Route.ComponentProps) {
  const navigate = useNavigate();

  const restoreOriginalUri = useCallback(
    (_oktaAuth: OktaAuth, originalUri?: string) => {
      void navigate(toRelativeUrl(originalUri ?? "/", window.location.origin), {
        replace: true,
      });
    },
    [navigate]
  );

  return (
    <Security
      oktaAuth={oktaAuthInstance}
      restoreOriginalUri={restoreOriginalUri}
    >
      <Outlet />
    </Security>
  );
}
