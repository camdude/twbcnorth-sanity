export default {
  title: "Talks",
  name: "talks",
  type: "document",
  fields: [
    {
      name: "year",
      title: "Year",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "talkList",
      title: "Talk List",
      description: "",
      type: "array",
      of: [
        {
          name: "audio",
          title: "Audio",
          type: "object",
          fields: [
            {
              name: "title",
              title: "Talk Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "audio",
              title: "Audio",
              description: ".mp3 files only.",
              type: "file",
              options: {
                accept: ".mp3",
              },
            },
          ],
        },
      ],
    },
  ],
};
