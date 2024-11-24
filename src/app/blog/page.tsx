// Helper für Datenabruf
import CategoryPreview from "@/components/CategoryPreview";
import { getLatestPostsByCategory } from "@/sanity/lib/get-posts";
import { Post } from "../../../types";

export default async function BlogPage() {
  const categories: string[] = ["code-projekte", "fotografie", "blender"];
  const posts: Post[] = await getLatestPostsByCategory(categories);

  console.log(posts);

  return (
    <section
      id="blog"
      className="min-h-[calc(100vh-5em)] flex flex-col items-center"
    >
      <header className="my-20 ">
        <h1 className="text-center text-4xl text-orange-600 uppercase tracking-wider font-bold">
          Blog
        </h1>
        <span className="inline-block text-md text-zinc-100 ">
          Der letzte Post je Kategorie.
        </span>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        {posts !== null ? (
          posts.map((post) => {
            console.log(post);
            if (post) {
              return <CategoryPreview key={post.category} post={post} />;
            }
            return "";
          })
        ) : (
          <div>Keine Posts gefunden!</div>
        )}
      </div>
    </section>
  );
}
