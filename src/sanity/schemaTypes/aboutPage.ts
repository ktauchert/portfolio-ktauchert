import { defineField, defineType } from "sanity";

export const aboutPage = defineType({
  name: "about",
  title: "About Page",
  type: "document",
  fields: [
    defineField({
      name: "profilePicture",
      title: "Profile Picture",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "background",
      title: "Background",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "interests",
      title: "Interests",
      type: "string",
    }),
    defineField({
      name: "short",
      title: "In Short",
      type: "string",
    }),
    defineField({
      name: "skills",
      type: "array",
      title: "Skills",
      of: [{ type: "block" }],  
      description: "Content with lists and Skills",
    }),
  ],
});
