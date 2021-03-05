export default {
  title: "Settings",
  name: "settings",
  type: "document",
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      title: "Notification",
      name: "notification",
      description: "Global message shown on front page.",
      type: "object",
      fields: [
        { title: "Notification Active", name: "active", type: "boolean" },
        {
          title: "Header",
          name: "header",
          type: "string",
        },
        {
          title: "Message",
          name: "message",
          type: "string",
        },
        {
          title: "Type",
          name: "type",
          type: "string",
          description: "Background colour of message to show.",
          options: {
            list: [
              { title: "Neutral", value: "neutral" },
              { title: "Success", value: "success" },
              { title: "Warning", value: "warning" },
              { title: "Danger", value: "danger" },
              { title: "Theme", value: "" },
            ],
          },
        },
      ],
    },
    // {
    //   title: "Theme Colours",
    //   name: "themeColours",
    //   type: "object",
    //   fields: [
    //     {
    //       name: 'primary',
    //       title: 'Primary Colour',
    //       type: 'color'
    //     },
    //     {
    //       name: 'secondary',
    //       title: 'Secondary Colour',
    //       type: 'color'
    //     },
    //     {
    //       name: 'tertiary',
    //       title: 'Tertiary Colour',
    //       type: 'color'
    //     }
    //   ]
    // },
    {
      title: "Administration Address",
      name: "adminEmail",
      description: "All website related emails will be sent to this email address (e.g. contact messages and registrations).",
      type: "email",
    },
  ],
};
