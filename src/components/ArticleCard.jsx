import { Link } from "react-router-dom"

function ArticleCard({ title, authors, abstract, pdf }) {
  return (
    <div className="border rounded-lg p-6 hover:shadow-md transition">

      <h3 className="text-xl font-semibold text-gray-900">
        {title}
      </h3>

      <p className="text-gray-600 mt-2">
        {authors}
      </p>

      <p className="text-gray-700 mt-4 line-clamp-3">
        {abstract}
      </p>

      <div className="flex gap-4 mt-6">

        <Link
          to="/article"
          className="text-blue-600 font-semibold"
        >
          View Article
        </Link>

        <a
          href={pdf}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          PDF
        </a>

      </div>

    </div>
  )
}

export default ArticleCard