import S from "@sanity/desk-tool/structure-builder";

const hiddenDocTypes = (listItem) => !["about", "registration", "conference", "contact" ].includes(listItem.getId());

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("About Page")
        .child(
          S.editor()
            .id("about")
            .schemaType("about")
            .documentId("singleton-about")
        ),
        S.listItem()
        .title("Registration Form")
        .child(
          S.editor()
            .id("registration")
            .schemaType("registration")
            .documentId("singleton-registration")
        ),
        S.listItem()
        .title("Conference")
        .child(
          S.editor()
            .id("conference")
            .schemaType("conference")
            .documentId("singleton-conference")
        ),
        S.listItem()
        .title("Contact Page")
        .child(
          S.editor()
            .id("contact")
            .schemaType("contact")
            .documentId("singleton-contact")
        ),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
