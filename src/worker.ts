import { handle } from "@astrojs/cloudflare/handler";

export { ContentIndex } from "./workers/content-index";

export default {
  fetch: handle,
};
