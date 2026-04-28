import { Link } from "react-router-dom"
import { useState } from "react"

function Sidebar() {
  const [search, setSearch] = useState("")

  const handleSearch = (e) => {
    e.preventDefault()
    if (!search.trim()) return
    alert(`Searching for: ${search}`) // replace later with real logic
  }

  const shareUrl = window.location.href

  return (
    <aside className="w-full lg:w-1/3 space-y-6">

      {/* Make Submission */}
      <div className="border p-5 rounded-lg">
        <h3 className="font-bold text-lg mb-3">Make a Submission</h3>
        <Link
          to="/submit"
          className="block bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700 transition"
        >
          Submit Manuscript
        </Link>
      </div>

      {/* Search */}
      <div className="border p-5 rounded-lg">
        <h3 className="font-bold text-lg mb-3">Search</h3>

        <form onSubmit={handleSearch} className="flex gap-2">
          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border w-full p-2 rounded"
          />
          <button
            type="submit"
            className="bg-gray-800 text-white px-3 rounded"
          >
            Go
          </button>
        </form>
      </div>

      {/* Information */}
      <div className="border p-5 rounded-lg">
        <h3 className="font-bold text-lg mb-3">Information</h3>

        <ul className="space-y-2">
          <li>
            <Link to="/readers" className="text-blue-600 hover:underline">
              For Readers
            </Link>
          </li>
          <li>
            <Link to="/authors" className="text-blue-600 hover:underline">
              For Authors
            </Link>
          </li>
          <li>
            <Link to="/librarians" className="text-blue-600 hover:underline">
              For Librarians
            </Link>
          </li>
        </ul>
      </div>

      {/* Social Share */}
      <div className="border p-5 rounded-lg">
        <h3 className="font-bold text-lg mb-3">Share</h3>

        <div className="flex flex-wrap gap-2">

          <a
            href={`https://wa.me/?text=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-3 py-1 rounded"
          >
            WhatsApp
          </a>

          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-3 py-1 rounded"
          >
            Facebook
          </a>

          <a
            href={`https://pinterest.com/pin/create/button/?url=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Pinterest
          </a>

          <a
            href={`https://www.reddit.com/submit?url=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 text-white px-3 py-1 rounded"
          >
            Reddit
          </a>

          <a
            href={`https://t.me/share/url?url=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-400 text-white px-3 py-1 rounded"
          >
            Telegram
          </a>

        </div>
      </div>

    </aside>
  )
}

export default Sidebar