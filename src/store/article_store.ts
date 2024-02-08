import { create } from "zustand";

type UserArticle = {
  name: string;
  username: string;
  twitter_username: string;
  github_username: string;
  user_id: number;
  website_url: null;
  profile_image: string;
};

type Article = {
  id: number;
  title: string;
  description: string;
  readable_publish_date: string;
  slug: string;
  path: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  collection_id: null;
  published_timestamp: string;
  positive_reactions_count: number;
  cover_image: string;
  social_image: string;
  created_at: string;
  crossposted_at: null;
  published_at: string;
  last_comment_at: string;
  reading_time_minutes: number;
  tag_list: string[];
  tags: string;
  user: UserArticle;

  body_html: string | null;
  body_markdown: string | null;
};

type StoreState = {
  articles: Article[];
  article: Article | null;
  loading: boolean;
  error: string | null;
  fetchArticles: () => Promise<void>;
  fetchArticle: (id:number) => Promise<void>;
};

const useArticleStore = create<StoreState>((set) => ({
  articles: [],
  article: null,
  loading: false,
  error: null,

  fetchArticles: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch("/devto/articles?username=ratapan", {
        method: "GET",
        headers: {
          "api-key": process.env.DEV_TO ?? "",
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const articles: Article[] = await response.json();
      let article = null;
      if (articles.length > 0) article = articles[0];
      set({ articles, article, loading: false });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },

  fetchArticle: async (id:number) => {
    set({ loading: true, error: null });
    try {
      const url = `/devto/articles/${id}`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "api-key": process.env.DEV_TO ?? "",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const article: Article = await response.json();
      set({ article, loading: false });
    } catch (error) {
      set({ error: (error as Error).message, loading: false, article: null });
    }
  },
}));

export default useArticleStore;
