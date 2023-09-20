import { IBlog_payload } from "@/interface/interface";

export function blogValidate(value: IBlog_payload) {
  const errors = {};
  /***_______  title    ________**/
  if (!value.title) {
    // @ts-ignore
    errors.title = "Required*";
  }
  /***_______  subtitle    ________**/

  if (!value.subtitle) {
    // @ts-ignore

    errors.subtitle = "Required*";
  }
  /***_______  category    ________**/

  if (!value.category) {
    // @ts-ignore

    errors.category = "Required*";
  }

  /***_______  description   ________**/

  if (!value.description) {
    // @ts-ignore

    errors.description = "Required*";
  }

  /***_______  published   ________**/

  if (!value.published) {
    // @ts-ignore

    errors.published = "Required*";
  }

  /***_______  author.name   ________**/

  if (!value.authorName) {
    // @ts-ignore

    errors.authorName = "Required*";
  }

  // console.log(errors)
  return errors;
}
