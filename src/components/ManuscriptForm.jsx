function ManuscriptForm() {
  return (
    <div className="max-w-3xl mx-auto p-8 border rounded-lg shadow bg-white">

      <h2 className="text-2xl font-bold mb-6 text-center">
        Submit Manuscript
      </h2>

      <form
        name="manuscript-submission"
        method="POST"
        data-netlify="true"
        encType="multipart/form-data"
        className="space-y-5"
      >

        <input type="hidden" name="form-name" value="manuscript-submission" />

        {/* Author Name */}
        <div>
          <label className="block font-semibold mb-1">
            Author Name
          </label>
          <input
            type="text"
            name="author"
            required
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Institution */}
        <div>
          <label className="block font-semibold mb-1">
            Institution
          </label>
          <input
            type="text"
            name="institution"
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Paper Title */}
        <div>
          <label className="block font-semibold mb-1">
            Paper Title
          </label>
          <input
            type="text"
            name="title"
            required
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Abstract */}
        <div>
          <label className="block font-semibold mb-1">
            Abstract
          </label>
          <textarea
            name="abstract"
            rows="4"
            required
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Keywords */}
        <div>
          <label className="block font-semibold mb-1">
            Keywords
          </label>
          <input
            type="text"
            name="keywords"
            placeholder="e.g. education, pedagogy, curriculum"
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Upload Manuscript */}
        <div>
          <label className="block font-semibold mb-1">
            Upload Manuscript (PDF)
          </label>
          <input
            type="file"
            name="manuscript"
            accept="application/pdf"
            required
            className="w-full"
          />
        </div>

        {/* Declaration */}
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            name="declaration"
            required
          />
          <span className="text-sm">
            I confirm that this manuscript is original and not submitted elsewhere.
          </span>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Submit Manuscript
        </button>

      </form>
    </div>
  )
}

export default ManuscriptForm