import { Routes, Route } from "react-router-dom"
import { Navbar } from "@/components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Leadership from "./pages/Leadership"
import History from "./pages/History"
import Elementary from "./pages/academics/Elementary"
import MiddleSchool from "./pages/academics/MiddleSchool"
import HighSchool from "./pages/academics/HighSchool"
import SpecialPrograms from "./pages/academics/SpecialPrograms"
import Activities from "./pages/studentlife/Activities"
import Athletics from "./pages/studentlife/Athletics"
import Arts from "./pages/studentlife/Arts"
import Services from "./pages/studentlife/Services"
import Apply from "./pages/admissions/Apply"
import Requirements from "./pages/admissions/Requirements"
import Tuition from "./pages/admissions/Tuition"
import Scholarships from "./pages/admissions/Scholarships"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/history" element={<History />} />
        <Route path="/academics/elementary" element={<Elementary />} />
        <Route path="/academics/middle" element={<MiddleSchool />} />
        <Route path="/academics/high" element={<HighSchool />} />
        <Route path="/academics/special" element={<SpecialPrograms />} />
        <Route path="/student-life/activities" element={<Activities />} />
        <Route path="/student-life/athletics" element={<Athletics />} />
        <Route path="/student-life/arts" element={<Arts />} />
        <Route path="/student-life/services" element={<Services />} />
        <Route path="/admissions/apply" element={<Apply />} />
        <Route path="/admissions/requirements" element={<Requirements />} />
        <Route path="/admissions/tuition" element={<Tuition />} />
        <Route path="/admissions/scholarships" element={<Scholarships />} />
        {/* Additional routes will be added here */}
      </Routes>
    </div>
  )
}

export default App
