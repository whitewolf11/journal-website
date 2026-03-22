import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <aside className="w-full lg:w-1/3 space-y-6">

      {/* Make Submission */}
      <div className="border p-5 rounded-lg">
        <h3 className="font-bold text-lg mb-3">Make a Submission</h3>
        <Link
          to="/submit"
          className="block bg-blue-600 text-white text-center py-2 rounded"
        >
          Submit Manuscript
        </Link>
      </div>

      {/* Search */}
      <div className="border p-5 rounded-lg">
        <h3 className="font-bold text-lg mb-3">Search</h3>
        <input
          type="text"
          placeholder="Search articles..."
          className="border w-full p-2 rounded"
        />
      </div>

      {/* Information */}
      <div className="border p-5 rounded-lg">
        <h3 className="font-bold text-lg mb-3">Information</h3>

        <ul className="space-y-2">

          <li>
            <Link to="/readers" className="text-blue-600">
              For Readers
            </Link>
          </li>

          <li>
            <Link to="/authors" className="text-blue-600">
              For Authors
            </Link>
          </li>

          <li>
            <Link to="/librarians" className="text-blue-600">
              For Librarians
            </Link>
          </li>

        </ul>
      </div>

      {/* Social Share */}
      <div className="border p-5 rounded-lg">
        <h3 className="font-bold text-lg mb-3">Share</h3>

        <div className="flex flex-wrap gap-2">

          <button className="bg-green-500 text-white px-3 py-1 rounded">
            WhatsApp
          </button>

          <button className="bg-blue-600 text-white px-3 py-1 rounded">
            Facebook
          </button>

          <button className="bg-red-500 text-white px-3 py-1 rounded">
            Pinterest
          </button>

          <button className="bg-orange-500 text-white px-3 py-1 rounded">
            Reddit
          </button>

          <button className="bg-blue-400 text-white px-3 py-1 rounded">
            Telegram
          </button>

        </div>
      </div>

    </aside>
  )
}

export default Sidebar