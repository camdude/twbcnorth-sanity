export default {
  title: "Registration Form",
  name: "registration",
  type: "document",
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    { title: "Form Active", name: "active", type: "boolean" },
    {
      title: "Registration Closed Message",
      name: "closedMsg",
      description: "This message will be displayed when form is inactive.",
      type: "string",
    },
    {
      title: "Description",
      name: "desc",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Form",
      name: "form",
      description:
        "For confrimation purposes, please ensure there is a field titled 'First Name' and 'Email'",
      type: "array",
      of: [
        {
          title: "Form Field",
          name: "field",
          type: "object",
          fields: [
            { title: "Name", name: "name", type: "string" },
            {
              title: "Element Type",
              name: "element",
              type: "string",
              options: {
                list: [
                  { title: "Text Input", value: "input" },
                  { title: "Textarea", value: "textarea" },
                  { title: "Dropdown", value: "select" },
                ],
              },
            },
            {
              title: "Dropdown Options",
              name: "selection",
              description: "Leave blank if 'Dropdown' is not selected above",
              type: "array",
              of: [
                {
                  title: "Option",
                  name: "option",
                  type: "string",
                },
              ],
            },
            {
              title: "Validation",
              name: "validation",
              description: "Select rules that will apply to this field",
              type: "array",
              of: [
                {
                  title: "Rule",
                  name: "rule",
                  type: "string",
                  options: {
                    list: [
                      { title: "Required", value: "REQUIRED" },
                      { title: "Email", value: "EMAIL" },
                      { title: "Phone", value: "PHONE" },
                    ],
                  },
                },
              ],
            },
            { title: "Error Message", name: "errMsg", type: "string" },
          ],
        },
      ],
    },
  ],
};
