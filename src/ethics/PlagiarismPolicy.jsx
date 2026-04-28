function PlagiarismPolicy() {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12">
  
        <h1 className="text-3xl font-bold mb-6">
          Plagiarism Policy
        </h1>
  
        {/* Introduction */}
        <p className="text-gray-700 mb-6">
          Elementary Education Online is committed to maintaining the highest
          standards of academic integrity. All submissions must be original and
          free from plagiarism. Authors are responsible for ensuring that their
          work complies with ethical publishing standards.
        </p>
  
        {/* Definition */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What is Plagiarism?
          </h2>
          <p className="text-gray-700">
            Plagiarism includes copying text, ideas, images, or data from another
            source without proper attribution. It also includes self-plagiarism,
            where authors reuse their previously published work without disclosure.
          </p>
        </section>
  
        {/* Screening */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Plagiarism Screening
          </h2>
          <p className="text-gray-700">
            All submitted manuscripts are screened using plagiarism detection tools.
            Manuscripts with a high similarity index may be rejected or returned
            for revision.
          </p>
        </section>
  
        {/* Acceptable Limits */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Acceptable Similarity Index
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Up to 10% similarity: Acceptable</li>
            <li>10%–20% similarity: Requires revision</li>
            <li>Above 20% similarity: Likely rejection</li>
          </ul>
        </section>
  
        {/* Consequences */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Consequences of Plagiarism
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Immediate rejection of the manuscript</li>
            <li>Notification to authors and affiliated institutions</li>
            <li>Blacklisting of authors for future submissions</li>
          </ul>
        </section>
  
        {/* Author Responsibility */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Author Responsibilities
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Ensure originality of the manuscript</li>
            <li>Properly cite all sources</li>
            <li>Use quotation marks where necessary</li>
            <li>Avoid duplicate submissions</li>
          </ul>
        </section>
  
        {/* Contact */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            Contact
          </h2>
          <p className="text-gray-700">
            For any questions regarding plagiarism policy, please contact the
            editorial team.
          </p>
        </section>
  
      </div>
    )
  }
  
  export default PlagiarismPolicy