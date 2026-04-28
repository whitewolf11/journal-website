import { useParams } from "react-router-dom"
import { articles } from "../data/articles"

function ArticlePage() {
  const { id } = useParams()

  const article = articles.find((a) => a.id === id)

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto p-10">
        <h2 className="text-2xl font-bold">Article not found</h2>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-10">

      {/* Title */}
      <h1 className="text-3xl font-bold">
        {article.title}
      </h1>

      {/* Authors */}
      <p className="text-gray-600 mt-2">
        {article.authors}
      </p>

      {/* DOI */}
      <p className="text-sm text-gray-500 mt-1">
        DOI: 10.1234/eeo.{article.id}
      </p>

      {/* Abstract */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">
          Abstract
        </h2>

        <p className="text-gray-700">
          {article.abstract}
        </p>
      </div>

      {/* Keywords */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">
          Keywords
        </h2>

        <p className="text-gray-700">
          Elementary Education, Teaching Methods, Learning Outcomes
        </p>
      </div>

      {/* PDF Download */}
      <div className="mt-8">
        {article.pdf ? (
          <a
            href={article.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Download PDF
          </a>
        ) : (
          <p className="text-gray-500">PDF not available</p>
        )}
      </div>

    </div>
  )
}

export default ArticlePage