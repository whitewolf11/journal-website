function CopyrightForm() {
    return (
      <div className="max-w-3xl mx-auto p-8 border rounded-lg shadow bg-white">
  
        <h2 className="text-2xl font-bold mb-6 text-center">
          Copyright Agreement
        </h2>
  
        <form
          name="copyright-form"
          method="POST"
          data-netlify="true"
          className="space-y-5"
        >
  
          <input type="hidden" name="form-name" value="copyright-form" />
  
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
  
          {/* Manuscript Title */}
          <div>
            <label className="block font-semibold mb-1">
              Manuscript Title
            </label>
            <input
              type="text"
              name="title"
              required
              className="w-full border p-2 rounded"
            />
          </div>
  
          {/* Declaration */}
          <div className="text-sm text-gray-700 space-y-2">
            <p>
              I hereby confirm that:
            </p>
  
            <ul className="list-disc pl-5 space-y-1">
              <li>The submitted manuscript is original work.</li>
              <li>It has not been published elsewhere.</li>
              <li>All authors have approved the submission.</li>
              <li>The journal has the right to publish and distribute the work.</li>
            </ul>
          </div>
  
          {/* Agreement Checkbox */}
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              name="agreement"
              required
            />
            <span className="text-sm">
              I agree to the above terms and conditions.
            </span>
          </div>
  
          {/* Signature */}
          <div>
            <label className="block font-semibold mb-1">
              Digital Signature (Type Your Name)
            </label>
            <input
              type="text"
              name="signature"
              required
              className="w-full border p-2 rounded"
            />
          </div>
  
          {/* Date */}
          <div>
            <label className="block font-semibold mb-1">
              Date
            </label>
            <input
              type="date"
              name="date"
              required
              className="w-full border p-2 rounded"
            />
          </div>
  
          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Submit Agreement
          </button>
  
        </form>
      </div>
    )
  }
  
  export default CopyrightForm