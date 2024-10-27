import { defineField, defineType } from "sanity";


export const contactPage = defineType({
  name: 'contact',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'cvFile',
      title: 'CV File',
      type: 'file'
    })
  ]
})