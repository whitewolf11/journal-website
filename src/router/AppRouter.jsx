import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "../components/Navbar"

import Home from "../pages/Home"
import Archives from "../pages/Archives"
import Publication from "../pages/Publication"
import PublicationEthics from "../pages/PublicationEthics"
import JournalEthics from "../pages/JournalEthics"
import SubmitManuscript from "../pages/SubmitManuscript"
import Contact from "../pages/Contact"
import ArticlePage from "../pages/ArticlePage"

function AppRouter() {
  return (
    <BrowserRouter>

      {/* Global Navbar */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archives" element={<Archives />} />
        <Route path="/publication" element={<Publication />} />
        <Route path="/publication-ethics" element={<PublicationEthics />} />
        <Route path="/journal-ethics" element={<JournalEthics />} />
        <Route path="/submit" element={<SubmitManuscript />} />
        <Route path="/contact" element={<Contact />} />

        {/* Dynamic Article Page */}
        <Route path="/article/:id" element={<ArticlePage />} />
      </Routes>

    </BrowserRouter>
  )
}

export default AppRouter