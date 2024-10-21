import { defineType, defineField } from 'sanity';

export const buttonType = defineType({
  name: 'button',
  title: 'Button',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      title: 'Button Label',
    }),
    defineField({
      name: 'url',
      type: 'url',
      title: 'Button URL',
    }),
  ],
});