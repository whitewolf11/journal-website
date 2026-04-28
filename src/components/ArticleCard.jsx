import { Link } from "react-router-dom"

function ArticleCard({ id, title, authors, abstract, pdf }) {
  return (
    <div className="border rounded-lg p-6 hover:shadow-md transition bg-white">

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900">
        {title || "Untitled Article"}
      </h3>

      {/* Authors */}
      <p className="text-gray-600 mt-2">
        {authors || "Unknown Authors"}
      </p>

      {/* DOI */}
      <p className="text-sm text-gray-500 mt-1">
        DOI: {id ? `10.1234/eeo.${id}` : "N/A"}
      </p>

      {/* Abstract */}
      <p className="text-gray-700 mt-4">
        {abstract
          ? abstract.length > 150
            ? abstract.slice(0, 150) + "..."
            : abstract
          : "No abstract available"}
      </p>

      {/* Buttons */}
      <div className="flex gap-4 mt-6 items-center">

        <Link
          to={`/article/${id}`}
          className="text-blue-600 font-semibold hover:underline"
        >
          View Article
        </Link>

        {pdf ? (
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            PDF
          </a>
        ) : (
          <span className="text-gray-400 text-sm">
            PDF not available
          </span>
        )}

      </div>

    </div>
  )
}

export default ArticleCard