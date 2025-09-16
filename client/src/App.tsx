import { Switch, Route } from "wouter";
import Home from "@/pages/home";
import Electronics_Departments from "./pages/departments/Electronics";
import Electrical_Departments from "./pages/departments/Electrical";
import Mechanical_Departments from "./pages/departments/Mechanical";
import Construction_Departments from "./pages/departments/Construction";
import Woodwork_Departments from "./pages/departments/Woodwork";
import Gallery from "@/pages/gallery";
import Search from "@/pages/search";
import NotFound from "@/pages/not-found";
import AboutPage from "@/pages/AboutPage";
import ProgramsSection from "./components/ProgramsSection";
import ProgramDetails from "./pages/programs/[id]";
import NewsPage from "./pages/news";
import NewsDetails from "./pages/news/[id]";
import { Download } from "lucide-react";
import Downloadpage from "./pages/download";
import FullTimeCoursesPage from "./pages/courses/FullTimeCoursesPage";
import PartTimeCoursesPage from "./pages/courses/PartTimeCoursesPage";
import OtherCoursesPage from "./pages/courses/others-courses";
import ApplyOnline from "./pages/apply-online";

function Router() {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>

      <Route path="/departments/electronics">
        < Electronics_Departments/>
      </Route>
      <Route path="/departments/electrical">
        <Electrical_Departments />
      </Route>
      <Route path="/departments/mechanical">
        < Mechanical_Departments/>
      </Route>
      <Route path="/departments/construction">
        <Construction_Departments/>
      </Route>
      <Route path="/departments/woodwork">
        < Woodwork_Departments/>
      </Route>

      <Route path="/about">
        <AboutPage />
      </Route>

      <Route path="/gallery">
        <Gallery/>
      </Route>

      <Route path="/search">
        <Search />
      </Route>

      <Route path="/programs">
        <ProgramsSection />
      </Route>

      <Route path="/programs/:id">
        <ProgramDetails />
      </Route>

      <Route path="/news">
        <NewsPage />
      </Route>

      <Route path="/news/:id">
        <NewsDetails />
      </Route>

      <Route path="/download">
        <Downloadpage />
      </Route>

      <Route path="/courses/full-time">
        <FullTimeCoursesPage />
      </Route>

      <Route path="/courses/part-time">
        <PartTimeCoursesPage />
      </Route>

      <Route path="/courses/others">
        <OtherCoursesPage />
      </Route>

      <Route path="/apply-online">
        <ApplyOnline />
      </Route>

      {/* Catch-all 404 route */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default Router;
