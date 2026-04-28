function PublicationEthics() {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12">
  
        <h1 className="text-3xl font-bold mb-6">
          Publication Ethics
        </h1>
  
        {/* Introduction */}
        <p className="text-gray-700 mb-6">
          The journal follows strict publication ethics to ensure integrity,
          transparency, and accountability in scholarly publishing. All published
          content must meet ethical and professional standards.
        </p>
  
        {/* Ethical Principles */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Ethical Principles
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Originality and authenticity of research</li>
            <li>Transparency in authorship and contributions</li>
            <li>Proper citation and acknowledgment of sources</li>
            <li>Fair and unbiased editorial decisions</li>
          </ul>
        </section>
  
        {/* Misconduct */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Handling Misconduct
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Plagiarism and duplicate publication are strictly prohibited</li>
            <li>Data fabrication or falsification will lead to rejection</li>
            <li>Conflicts of interest must be disclosed</li>
            <li>Serious violations may be reported to institutions</li>
          </ul>
        </section>
  
        {/* Corrections */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Corrections & Retractions
          </h2>
          <p className="text-gray-700">
            If errors or ethical issues are identified after publication, the
            journal will issue corrections, retractions, or expressions of concern
            as necessary.
          </p>
        </section>
  
        {/* Complaints */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Complaints & Appeals
          </h2>
          <p className="text-gray-700">
            Authors may appeal editorial decisions or report ethical concerns.
            All complaints will be handled fairly and confidentially.
          </p>
        </section>
  
        {/* Data & Transparency */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            Data Transparency
          </h2>
          <p className="text-gray-700">
            Authors may be required to provide raw data and supporting materials
            for verification. Transparency ensures credibility and reproducibility
            of research findings.
          </p>
        </section>
  
      </div>
    )
  }
  
  export default PublicationEthics