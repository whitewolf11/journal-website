function AuthorGuidelines() {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12">
  
        <h1 className="text-3xl font-bold mb-6">
          Author Guidelines
        </h1>
  
        {/* Introduction */}
        <p className="text-gray-700 mb-6">
          Authors are invited to submit original research articles that have not
          been published previously and are not under consideration elsewhere.
          Submissions should contribute significantly to the field of elementary
          education.
        </p>
  
        {/* Submission Requirements */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Submission Requirements
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Manuscripts must be written in clear and concise English.</li>
            <li>All submissions should be in PDF format.</li>
            <li>Include title, author details, and institutional affiliation.</li>
            <li>Provide an abstract (150–250 words).</li>
            <li>Add 4–6 relevant keywords.</li>
          </ul>
        </section>
  
        {/* Formatting Guidelines */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Formatting Guidelines
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Font: Times New Roman, Size 12</li>
            <li>Line spacing: 1.5</li>
            <li>Margins: 1 inch on all sides</li>
            <li>Use standard citation styles (APA/MLA/Chicago)</li>
          </ul>
        </section>
  
        {/* Review Process */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Review Process
          </h2>
          <p className="text-gray-700">
            All manuscripts undergo a double-blind peer review process.
            Authors will be notified about acceptance, revision, or rejection
            within 2–4 weeks.
          </p>
        </section>
  
        {/* Ethics */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Publication Ethics
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Ensure originality and avoid plagiarism.</li>
            <li>Properly cite all sources and references.</li>
            <li>Disclose any conflicts of interest.</li>
          </ul>
        </section>
  
        {/* Contact */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            Contact
          </h2>
          <p className="text-gray-700">
            For any queries regarding submissions, please contact the editorial team.
          </p>
        </section>
  
      </div>
    )
  }
  
  export default AuthorGuidelines