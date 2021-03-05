export default {
  title: "Contact",
  name: "contact",
  type: "document",
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      title: "Description",
      name: "desc",
      description: "This is shown at the top of the contact page.",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Phone",
      name: "phone",
      description: "Main phone number to be contacted by.",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Email",
      name: "email",
      description: "Main email to be contacted by.",
      type: "email",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Facebook",
      name: "facebook",
      description: "Please use the facebook tag.",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};
