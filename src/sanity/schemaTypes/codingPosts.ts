import { defineType, defineField } from "sanity";

export const blogPosts = defineType({
  name: "coding",
  title: "Coding-Posts",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", title: "Title" }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "title" },
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      title: "Published At",
    }),
    defineField({
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "string" }],
    }),
    defineField({ name: "summary", type: "text", title: "Summary" }),
    defineField({ name: "mainImage", type: "image", title: "Main Image" }),
    defineField({
      name: "body",
      type: "array",
      title: "Body",
      of: [{ type: "block"}],
    }),
  ],
});
