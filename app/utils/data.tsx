import ky from "ky";
import { oktaAuthInstance } from "./auth";

const api = ky.create({
  prefixUrl: import.meta.env.VITE_BACKEND_API_URL,
  hooks: {
    beforeRequest: [
      async (request) => {
        const token = await oktaAuthInstance.getOrRenewAccessToken();
        if (token) {
          request.headers.set("Authorization", `Bearer ${token}`);
        }
      },
    ],
  },
});

export { api };
