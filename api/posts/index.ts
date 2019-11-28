import api from "../api";

const switchInclude = (include?: string | string[]): string => {
  if (include === undefined) {
    return "authors,tags";
  }
  if (Array.isArray(include)) {
    return include.join(",");
  }
  return include;
};

export interface getPostsQuery {
  limit?: string;
  include?: string[] | string;
  [key: string]: any;
}

export const getAllPosts = (
  query: getPostsQuery = {
    limit: "all"
  }
): Promise<any> =>
  api.posts
    .browse({ ...query, include: switchInclude(query.include) })
    .catch((err: any) => {
      console.error(err);
      return Promise.reject(err);
    });

export const getTaggedPosts = (tagSlug: string) =>
  getAllPosts({ limit: "all", filter: `tag:${tagSlug}` });

export const getFeaturedPosts = () =>
  getAllPosts({ limit: "all", filter: "featured:true" });
export const getPostBySlug = async (slug: string) =>
  api.posts
    .read({
      slug
    })
    .catch((err: any) => {
      console.error(err);
    });
