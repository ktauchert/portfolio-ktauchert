import { getPostBySlug } from "@/sanity/lib/get-posts";
import React from "react";

type Params = {
  category: string;
  slug: string;
};
type Props = {
  params: Params;
};

const Slug = async ({ params }: Props) => {
  console.log(params);
  const { category, slug } = params;
  const post = await getPostBySlug(category, slug);
  console.log(post);

  return <div>{post?.title}</div>;
};

export default Slug;
