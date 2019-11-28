import api from "../api";

export const getTagList = () =>
  api.tags
    .browse({
      limit: "all"
    })
    .catch((err: any) => {
      console.error(err);
      return err;
    });

export default getTagList;
