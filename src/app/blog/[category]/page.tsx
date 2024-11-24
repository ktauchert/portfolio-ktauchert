// import PostList from "@/components/PostList";
import { getPostsByCategory } from "@/sanity/lib/get-posts";

type Params = {
  category: string;
};

type Props = {
  params: Params;
};

export default async function CategoryPage({ params }: Props) {
  const { category } = params;
  const posts = await getPostsByCategory(category);

  console.log(posts)

  return (
    <div>
      <h1>{category}</h1>
      {posts &&
        posts.map((post, idx) => {
          return (
            <>
              {post.title} - {post.summary}
            </>
          );
        })}
      {/* <PostList posts={posts} /> */}
    </div>
  );
}
