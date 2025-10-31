import type { Route } from "./+types/index";
import { oktaAuthInstance } from "~/utils/auth";

export async function clientLoader() {
  /**
   * Example of fetching from API in clientLoader:
   * import { api } from "~/utils/data";
   *
   * export async function clientLoader() {
   *   const data = await api.get("your-endpoint").json();
   *   return data;
   * }
   */
  const user = await oktaAuthInstance.getUser();
  return { name: user.name };
}

export default function Index({ loaderData }: Route.ComponentProps) {
  return <h1>Welcome to the React Router Okta Template {loaderData.name}!</h1>;
}
