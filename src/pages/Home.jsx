import HeroSection from "../components/HeroSection"
import Sidebar from "../components/Sidebar"

function Home() {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10 px-6">

      {/* Main Content */}
      <div className="lg:col-span-2">
        <HeroSection />
      </div>

      {/* Right Sidebar */}
      <Sidebar />

    </div>
  )
}

export default Home