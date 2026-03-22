import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import Sidebar from "../components/Sidebar"

function Home() {
  return (
    <>
      <Header />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10 mt-10 px-6">

        {/* Main Content */}
        <div className="lg:col-span-2">

          <HeroSection />

        </div>

        {/* Right Sidebar */}
        <Sidebar />

      </div>

    </>
  )
}

export default Home