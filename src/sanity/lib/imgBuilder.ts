import imageUrlBuilder from "@sanity/image-url";
import { SanityAsset } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/lib/client";

const builder = imageUrlBuilder(client);
export const urlFor = (source: SanityAsset) => {
  return builder.image(source);
};
