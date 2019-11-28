import api from "../api";

export const getPageList = () =>
  api.pages
    .browse({
      limit: "all"
    })
    .catch((err: any) => {
      console.error(err);
      return err;
    });

export const getPageBySlug = (slug: string) =>
  api.pages.read({ slug }).catch((err: any) => {
    console.error(err);
    return err;
  });

export default getPageBySlug;
