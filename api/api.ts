import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: process.env.API_URL || "http://localhost:2369",
  key: process.env.API_KEY || "9bf57a58316ee7050fe2b61204",
  version: "v3"
});

export default api;
