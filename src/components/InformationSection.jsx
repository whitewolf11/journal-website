import { Link } from "react-router-dom"

function InformationSection() {
  return (
    <section className="py-16 bg-white">

      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-10">
          Information
        </h2>

        <div className="grid grid-cols-3 gap-8">

          <Link
            to="/readers"
            className="border p-6 rounded-lg hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold">For Readers</h3>
            <p className="mt-3 text-gray-600">
              Access published research articles and journal issues.
            </p>
          </Link>

          <Link
            to="/authors"
            className="border p-6 rounded-lg hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold">For Authors</h3>
            <p className="mt-3 text-gray-600">
              Guidelines and policies for submitting manuscripts.
            </p>
          </Link>

          <Link
            to="/librarians"
            className="border p-6 rounded-lg hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold">For Librarians</h3>
            <p className="mt-3 text-gray-600">
              Information about journal indexing and archiving.
            </p>
          </Link>

        </div>

      </div>

    </section>
  )
}

export default InformationSection