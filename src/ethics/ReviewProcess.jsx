function ReviewProcess() {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12">
  
        <h1 className="text-3xl font-bold mb-6">
          Review Process
        </h1>
  
        {/* Introduction */}
        <p className="text-gray-700 mb-6">
          All submitted manuscripts undergo a rigorous peer-review process to ensure
          academic quality, originality, and relevance to the field of elementary
          education.
        </p>
  
        {/* Step 1 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            1. Initial Screening
          </h2>
          <p className="text-gray-700">
            The editorial team reviews the manuscript for scope, formatting, and
            adherence to submission guidelines. Submissions that do not meet basic
            requirements may be rejected at this stage.
          </p>
        </section>
  
        {/* Step 2 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            2. Plagiarism Check
          </h2>
          <p className="text-gray-700">
            Manuscripts are screened using plagiarism detection tools to ensure
            originality and ethical compliance.
          </p>
        </section>
  
        {/* Step 3 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            3. Peer Review
          </h2>
          <p className="text-gray-700">
            Qualified reviewers evaluate the manuscript based on originality,
            methodology, clarity, and contribution to the field. This process is
            conducted using a double-blind review system.
          </p>
        </section>
  
        {/* Step 4 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            4. Decision & Revision
          </h2>
          <p className="text-gray-700">
            Based on reviewer feedback, the manuscript may be accepted, rejected,
            or returned for revision. Authors are expected to address all comments
            before resubmission.
          </p>
        </section>
  
        {/* Step 5 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            5. Final Acceptance & Publication
          </h2>
          <p className="text-gray-700">
            Once approved, the manuscript is prepared for publication and included
            in the journal's upcoming issue.
          </p>
        </section>
  
        {/* Timeline */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Review Timeline
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Initial screening: 3–5 days</li>
            <li>Peer review: 2–4 weeks</li>
            <li>Revision (if required): 1–2 weeks</li>
            <li>Final decision: Within 4–6 weeks</li>
          </ul>
        </section>
  
        {/* Contact */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            Contact
          </h2>
          <p className="text-gray-700">
            For queries regarding the review process, please contact the editorial team.
          </p>
        </section>
  
      </div>
    )
  }
  
  export default ReviewProcess