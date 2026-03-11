import Navbar from "../components/Navbar"

function Home() {
  return (
    <>
      <Navbar />

      <div className="p-10">
        <h1 className="text-4xl font-bold">
          Journal of Ethical Education
        </h1>

        <p className="mt-4 text-lg">
          A global platform for ethical research publication.
        </p>
      </div>

    </>
  )
}

export default Home