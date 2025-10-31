import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    route("login", "routes/login.tsx"),
    route("login/callback", "routes/login-callback.tsx"),
    route("logout", "routes/logout.tsx"),
    layout("routes/authed.tsx", [index("routes/index.tsx")]),
  ]),
] satisfies RouteConfig;
