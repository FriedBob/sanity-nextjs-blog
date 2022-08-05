import sanityClient from "@sanity/client";
import { sanityQuery } from "./queries";

export default class SanityService {
  _client = sanityClient({
    dataset: "production",
    projectId: "fty5c0wl",
    useCdn: process.env.NODE_ENV === "production",
  });

  async getHome() {
    return await this._client.fetch(sanityQuery.mainPostUrlQuery);
  }

  async getPosts() {
    return await this._client.fetch(sanityQuery.homeQuery);
  }
}
