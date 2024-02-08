import DocPaper from "@/components/containers/document_paper";
import { Skeleton } from "@/components/shadcn/ui/skeleton";
import { formatDate } from "@/lib/utils_fns";
import blog from "@/locales/blog";
import { localeSafety } from "@/locales/types";
import useArticleStore from "@/store/article_store";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Blog() {
  const { locale } = useRouter();
  const safeLocale = localeSafety(locale);

  const { fetchArticles, articles, loading, error } = useArticleStore(
    (state) => ({
      fetchArticles: state.fetchArticles,
      articles: state.articles,
      loading: state.loading,
      error: state.error,
    })
  );

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  const content = blog[safeLocale];

  return (
    <DocPaper title={content.title} subTitle={content.subTitle}>
      <Head>
        <title>Blog</title>
      </Head>
      <section className="grid gap-4 mb-8">
        {loading ? (
          <Skeleton className="h-96 w-full rounded-xl p-4" />
        ) : error ? (
          <div className="bg-coffee_bg_two dark:bg-zinc-700 rounded-xl p-2">
            Error: {error}
          </div>
        ) : (
          articles.map((art) => (
            <article
              className="bg-coffee_bg_two dark:bg-zinc-700 rounded-xl p-2"
              key={`blog-article-${art.id}`}
            >
              <header className="relative rounded-lg overflow-clip">
                <img
                  src={art.cover_image}
                  loading="lazy"
                  alt={`cover ${art.title.split(" ").join("-")}`}
                />
                <h3 className="absolute left-0 bottom-0 p-2 bg-zinc-900 bg-opacity-95 w-full text-lg font-semibold">
                  {art.title}
                </h3>
              </header>
              <main className="px-2 pt-2 flex flex-col gap-1 justify-center">
                <p>{art.description}</p>
                <div className="flex justify-between">
                  <p className="text-sm flex">
                    <img
                      className="h-8 rounded-full"
                      src={art.user.profile_image}
                      loading="lazy"
                      alt="profile image"
                    />{" "}
                    <span className="pl-4 flex items-center">
                      {formatDate(art.readable_publish_date)}
                    </span>
                  </p>
                  <Link
                    href={`/blog/${art.id}`}
                    className="transition-colors px-2 py-1 rounded-sm bg-primary hover:bg-secondary"
                  >
                    ver mas
                  </Link>
                </div>
              </main>
            </article>
          ))
        )}
      </section>
    </DocPaper>
  );
}
