function Publication() {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12">
  
        <h1 className="text-3xl font-bold mb-6">
          Publication Process
        </h1>
  
        {/* Introduction */}
        <p className="text-gray-700 mb-6">
          After successful peer review and acceptance, manuscripts undergo a
          structured publication process to ensure quality, accuracy, and
          accessibility.
        </p>
  
        {/* Step 1 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            1. Acceptance Notification
          </h2>
          <p className="text-gray-700">
            Authors receive an official acceptance notification along with final
            instructions for publication.
          </p>
        </section>
  
        {/* Step 2 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            2. Copyright & Documentation
          </h2>
          <p className="text-gray-700">
            Authors are required to submit the copyright agreement and any
            additional documents required for publication.
          </p>
        </section>
  
        {/* Step 3 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            3. Copyediting & Formatting
          </h2>
          <p className="text-gray-700">
            The manuscript is edited for clarity, grammar, and formatting in
            accordance with journal standards.
          </p>
        </section>
  
        {/* Step 4 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            4. Proofreading
          </h2>
          <p className="text-gray-700">
            Authors review the final proof and approve it before publication.
          </p>
        </section>
  
        {/* Step 5 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            5. Online Publication
          </h2>
          <p className="text-gray-700">
            The article is published online and becomes accessible through the
            journal archive.
          </p>
        </section>
  
        {/* Step 6 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            6. Indexing & Archiving
          </h2>
          <p className="text-gray-700">
            Published articles are indexed and archived for long-term accessibility
            and citation.
          </p>
        </section>
  
      </div>
    )
  }
  
  export default Publication