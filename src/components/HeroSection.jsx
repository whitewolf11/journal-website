import { Link } from "react-router-dom"

function HeroSection() {
  return (
    <section className="bg-gray-100 py-20 px-6">

      <div className="max-w-6xl mx-auto text-center">

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Elementary Education Online
        </h1>

        <p className="mt-4 text-gray-600">
          ISSN Online: 1305-3515 | ISSN Print: 1305-3515
        </p>

        <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
          A peer-reviewed academic journal dedicated to advancing research,
          theories, instructional practices, and innovations in elementary
          education through interdisciplinary scholarship.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">

          <Link
            to="/submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Submit Manuscript
          </Link>

          <Link
            to="/archives"
            className="border border-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition"
          >
            View Archives
          </Link>

        </div>

      </div>

    </section>
  )
}

export default HeroSection