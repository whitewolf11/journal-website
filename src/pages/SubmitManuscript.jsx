import ManuscriptForm from "../components/ManuscriptForm"

function SubmitManuscript() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">

      <h1 className="text-3xl font-bold mb-6 text-center">
        Manuscript Submission
      </h1>

      <p className="text-gray-700 mb-8 text-center">
        Please complete the form below to submit your manuscript. Ensure all
        required fields are filled and the document is uploaded in PDF format.
      </p>

      <ManuscriptForm />

    </div>
  )
}

export default SubmitManuscript