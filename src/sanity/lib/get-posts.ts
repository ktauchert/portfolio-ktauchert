import { Post } from "../../../types";
import { client } from "./client";

export async function getLatestPostsByCategory(
  categories: string[]
): Promise<Post[]> {
  const queries = categories.map(
    (category) =>
      `*[_type == "post" && category == "${category}"] | order(publishedAt desc)[0]`
  );
  return await client.fetch(`[${queries.join(", ")}]`);
}

export async function getPostsByCategory(category: string): Promise<Post[]> {
  console.log(category);
  return await client.fetch(
    `*[_type == "post" && category == "${category}"] | order(publishedAt desc)`
  );
}

export async function getPostBySlug(
  category: string,
  slug: string
): Promise<Post | null> {
  return await client.fetch(
    `*[_type == "post" && category == "${category}" && slug.current == "${slug}"][0]`
  );
}
