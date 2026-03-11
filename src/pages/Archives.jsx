import Navbar from "../components/Navbar"

function Archives() {
  return (
    <>
      <Navbar />

      <div className="p-10">

        <h1 className="text-3xl font-bold">
          Archives
        </h1>

        <div className="grid grid-cols-3 gap-6 mt-6">

          <div className="border p-4">
            <h3>Volume 1 Issue 1</h3>
          </div>

          <div className="border p-4">
            <h3>Volume 1 Issue 2</h3>
          </div>

        </div>

      </div>
    </>
  )
}

export default Archives