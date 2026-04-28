import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex gap-6">

      <Link to="/">Home</Link>
      <Link to="/archives">Archives</Link>
      <Link to="/publication">Publication</Link>
      <Link to="/publication-ethics">Publication Ethics</Link>
      <Link to="/journal-ethics">Journal Ethics</Link>
      <Link to="/submit">Submit Manuscript</Link>
      <Link to="/contact">Contact</Link>

    </nav>
  )
}

export default Navbar