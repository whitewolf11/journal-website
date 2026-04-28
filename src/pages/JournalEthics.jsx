function JournalEthics() {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12">
  
        <h1 className="text-3xl font-bold mb-6">
          Journal Ethics
        </h1>
  
        {/* Introduction */}
        <p className="text-gray-700 mb-6">
          Elementary Education Online is committed to upholding the highest
          standards of publication ethics and integrity. All parties involved
          in the publication process—authors, reviewers, and editors—are expected
          to adhere to ethical guidelines.
        </p>
  
        {/* Author Responsibilities */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Responsibilities of Authors
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Submit original and unpublished work only</li>
            <li>Avoid plagiarism and properly cite all sources</li>
            <li>Do not submit the same manuscript to multiple journals</li>
            <li>Disclose any conflicts of interest</li>
            <li>Ensure all listed authors have approved the manuscript</li>
          </ul>
        </section>
  
        {/* Reviewer Responsibilities */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Responsibilities of Reviewers
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Provide objective and constructive feedback</li>
            <li>Maintain confidentiality of submitted manuscripts</li>
            <li>Identify relevant published work not cited by authors</li>
            <li>Avoid conflicts of interest</li>
          </ul>
        </section>
  
        {/* Editor Responsibilities */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Responsibilities of Editors
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Make fair and unbiased decisions</li>
            <li>Ensure confidentiality of submissions</li>
            <li>Prevent publication of plagiarized content</li>
            <li>Address ethical complaints promptly</li>
          </ul>
        </section>
  
        {/* Publication Ethics */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Ethical Standards
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>No plagiarism, data fabrication, or falsification</li>
            <li>Proper acknowledgment of sources</li>
            <li>Transparent authorship and contributions</li>
            <li>Compliance with research and publication laws</li>
          </ul>
        </section>
  
        {/* Misconduct */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            Handling Misconduct
          </h2>
          <p className="text-gray-700">
            Any ethical misconduct, including plagiarism or data falsification,
            will result in immediate rejection and may lead to blacklisting of the
            authors. The journal reserves the right to notify institutions in case
            of serious violations.
          </p>
        </section>
  
      </div>
    )
  }
  
  export default JournalEthics