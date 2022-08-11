import sanityClient from "@sanity/client";
import { sanityQuery } from "./queries";

export default class SanityService {
  _client = sanityClient({
    dataset: "production",
    projectId: process.env.SANITY_PROJECT_ID,
    useCdn: process.env.NODE_ENV === "production",
  });

  async getHome() {
    return await this._client.fetch(sanityQuery.mainPostUrlQuery);
  }

  async getPosts() {
    return await this._client.fetch(sanityQuery.homeQuery);
  }
}
