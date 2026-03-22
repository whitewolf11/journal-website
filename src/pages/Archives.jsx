import Navbar from "../components/Navbar"
import ArticleCard from "../components/ArticleCard"
import { articles } from "../data/articles"

function Archives() {
  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto p-10">

        <h1 className="text-3xl font-bold mb-8">
          Journal Archives
        </h1>

        <div className="grid md:grid-cols-2 gap-8">

          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              authors={article.authors}
              abstract={article.abstract}
              pdf={article.pdf}
            />
          ))}

        </div>

      </div>
    </>
  )
}

export default Archives