import Link from "next/link";
import { Post } from "../../types";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "@/sanity/lib/client";
import Image from "next/image";

type Props = {
  post: Post;
};
type CategoriesConst = {
  [key: string]: string;
};

const categories: CategoriesConst = {
  "code-projekte": "Code Projekte",
  fotografie: "Fotografie",
  blender: "Blender",
};

export default function CategoryPreview({ post }: Props) {
  const imageProps = useNextSanityImage(client, post.mainImage);
  console.log(post);
  return (
    <article className="category-preview-card w-[320px] lg:w-[360px] flex flex-col items-start m-7">
      <h3 className="category-last-title  text-2xl text-cyan-600 self-center font-semibold">
        {post.title}
      </h3>
      <h4 className="preview-category italic text-md self-center text-zinc-100 mb-5">
        {categories[post.category]}
      </h4>
      <div className="image-container w-full h-[160px] overflow-hidden object-contain rounded-md shadow-md shadow-zinc-700">
        {imageProps ? (
          <Image
            className="w-full h-[160px] object-cover"
            src={imageProps?.src ?? ""}
            width={imageProps?.width}
            height={imageProps?.height}
            alt={`Bild für ${post.title}`}
            placeholder="empty"
          />
        ) : (
          <div className="w-full lg:w-full h-full bg-zinc-100/20 backdrop-blur-sm flex justify-center items-center">
            No Image
          </div>
        )}
      </div>
      <div className="category-last-summary my-2">{post.summary}</div>
      <div className="link-container flex justify-between w-full mt-5">
        <Link
          href={`/blog/${post.category.toLowerCase()}`}
          className="hover:text-orange-500 text-cyan-600 transition-all"
        >
          Alle in <span className="font-bold">{categories[post.category]}</span>
        </Link>
        <Link
          href={`/blog/${post.category.toLowerCase()}/${post.slug.current.toString()}`}
          className="hover:text-orange-500 text-cyan-600"
        >
          Weiterlesen
        </Link>
      </div>
    </article>

    // <div className="border p-4">
    //   <h2>{post.category}</h2>
    //   <h3>{post.title}</h3>
    //   <p>{post.summary}</p>
    //   <Link href={`/blog/${post.category.toLowerCase()}`}>Zur Übersicht</Link>
    //   <Link href={`/blog/${post.category.toLowerCase()}/${post.slug.current.toString()}`}>Weiterlesen</Link>
    // </div>
  );
}
