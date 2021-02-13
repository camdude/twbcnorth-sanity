export default {
  title: "About",
  name: "about",
  type: "document",
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      name: "content",
      title: "Content",
      description: 'All content included here will be shown on the about page.',
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [
        { type: "block" },
        {
          type: "image",
          fields: [
            {
              title: "Position",
              name: "position",
              type: "string",
              options: {
                list: [
                  { title: "Center", value: "center" },
                  { title: "Left", value: "left" },
                  { title: "Right", value: "right" },
                ],
                layout: "radio",
                isHighlighted: true,
              },
            },
            {
              name: "alt",
              title: "Description",
              type: "text",
              options: {
                isHighlighted: true,
              },
            },
          ],
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
};
