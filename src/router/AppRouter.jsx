import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "../components/Navbar"

import Home from "../pages/Home"
import Archives from "../pages/Archives"
import Publication from "../pages/Publication"
import PublicEthics from "../pages/PublicEthics"
import JournalEthics from "../pages/JournalEthics"
import SubmitManuscript from "../pages/SubmitManuscript"
import Contact from "../pages/Contact"
import ArticlePage from "../pages/ArticlePage"

function AppRouter() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/archives" element={<Archives />} />
        <Route path="/publication" element={<Publication />} />
        <Route path="/public-ethics" element={<PublicEthics />} />
        <Route path="/journal-ethics" element={<JournalEthics />} />
        <Route path="/submit" element={<SubmitManuscript />} />
        <Route path="/contact" element={<Contact />} />

        {/* dynamic article page */}
        <Route path="/article/:id" element={<ArticlePage />} />

      </Routes>

    </BrowserRouter>
  )
}

export default AppRouter