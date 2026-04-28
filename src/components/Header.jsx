import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">

        <h1 className="text-xl font-bold text-gray-800">
          Elementary Education Online
        </h1>

        <input
          type="text"
          placeholder="Search articles..."
          className="border px-3 py-2 rounded-md w-64"
        />

        <Link
          to="/submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700"
        >
          Make a Submission
        </Link>

      </div>
    </header>
  )
}

export default Header