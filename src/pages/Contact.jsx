function ContactUs() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">

      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-10 text-center">
        Contact Information
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Principal Contact */}
        <div className="border p-6 rounded-lg shadow-sm">

          <h2 className="text-xl font-semibold mb-4">
            Principal Contact
          </h2>

          <p className="text-gray-800 font-medium">
            J.K. Jadhav
          </p>

          <p className="text-gray-600">
            Editor-in-Chief
          </p>

          <p className="mt-3 text-gray-700">
            Email:{" "}
            <a
              href="mailto:editor@journal.com"
              className="text-blue-600 hover:underline"
            >
              editor@journal.com
            </a>
          </p>

          <p className="text-gray-700 mt-2">
            Phone: +91-XXXXXXXXXX
          </p>

        </div>

        {/* Support Contact */}
        <div className="border p-6 rounded-lg shadow-sm">

          <h2 className="text-xl font-semibold mb-4">
            Technical Support
          </h2>

          <p className="text-gray-700">
            For submission issues or technical queries:
          </p>

          <p className="mt-3 text-gray-700">
            Email:{" "}
            <a
              href="mailto:support@journal.com"
              className="text-blue-600 hover:underline"
            >
              support@journal.com
            </a>
          </p>

        </div>

      </div>

      {/* Address Section */}
      <div className="mt-12 border p-6 rounded-lg shadow-sm">

        <h2 className="text-xl font-semibold mb-4">
          Editorial Office
        </h2>

        <p className="text-gray-700">
          Elementary Education Online Journal
        </p>

        <p className="text-gray-700">
          Department of Education
        </p>

        <p className="text-gray-700">
          Pune, Maharashtra, India
        </p>

      </div>

    </div>
  )
}

export default Contact