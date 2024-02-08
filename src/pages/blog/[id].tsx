import DocPaper from "@/components/containers/document_paper";
import { formatDate } from "@/lib/utils_fns";
import useArticleStore from "@/store/article_store";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Blog() {
  const router = useRouter();
  const id = Number(router.query.id);
  if (isNaN(id))
    <DocPaper title="" subTitle="">
      <article className="font-semibold text-center text-xl">
        Lo siento, "{router.query.id}" no es un id correcto
      </article>
    </DocPaper>;

  const { fetchArticle, article, loading, error } = useArticleStore(
    (state) => ({
      fetchArticle: state.fetchArticle,
      article: state.article,
      loading: state.loading,
      error: state.error,
    })
  );

  useEffect(() => {
    if (!isNaN(id)) fetchArticle(id);
  }, [id, fetchArticle]);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!article) return <div>No se encontró el artículo.</div>;

  return (
    <DocPaper title="" subTitle="">
      <article>
        <header className="relative rounded-lg overflow-clip">
          <img
            src={article.cover_image}
            loading="lazy"
            alt={`cover ${article.title.split(" ").join("-")}`}
          />
          <h1 className="p-2 py-4 bg-zinc-900 bg-opacity-95 w-full text-2xl text-center text-pretty font-semibold">
            {article.title}
          </h1>
        </header>
        <main className="px-2 pt-2 flex flex-col gap-1 justify-center">
          <div className="flex justify-between">
            <p className="text-sm flex">
              <img
                className="h-8 rounded-full"
                src={article.user.profile_image}
                loading="lazy"
                alt="profile image"
              />{" "}
              <span className="pl-4 flex items-center">
                {formatDate(article.readable_publish_date)}
              </span>
            </p>
            <div >

            </div>
          </div>
        </main>
      </article>
    </DocPaper>
  );
}
