import ky from "ky";
import { oktaAuthInstance } from "./auth";

const api = ky.create({
  // prefixUrl: "API URL HERE"
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
