// string from, to, title, company
// array;string subject
// array; string stack

import { defineField, defineType } from "sanity";

export const careerPage = defineType({
  name: "career",
  title: "Career Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "Title or Position",
      type: "string",
    }),
    defineField({
      name: "from",
      title: "From",
      description: "Worked there from...",
      type: "string",
    }),

    defineField({
      name: "until",
      title: "Until",
      description: "Worked there until.",
      type: "string",
    }),

    defineField({
      name: "company",
      title: "Company",
      type: "string",
    }),
    defineField({
      name: "subjects",
      title: "Subjects",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "stack",
      title: "Stack",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});
