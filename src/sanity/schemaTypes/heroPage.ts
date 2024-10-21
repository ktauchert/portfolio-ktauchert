import { defineField, defineType } from "sanity";
import {} from '@sanity/block-tools'
export const heroPage = defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Your Name',
    }),
    defineField({
      name: 'typewriterWords',
      type: 'array',
      title: 'Typewriter Words',
      of: [{ type: 'string' }],
      description: 'Words to be used in the typewriter animation',
    }),
    defineField({
      name: 'welcomeMessage',
      type: 'string',
      title: 'Welcome Message',
      description: 'A brief welcome message',
    }),
    defineField({
      name: 'richContent',
      type: 'array',
      title: 'Rich Content',
      of: [{ type: 'block' }, { type: 'button' }], // Supports buttons and rich text
      description: 'Content with links, lists, or custom buttons',
    }),
  ],
});