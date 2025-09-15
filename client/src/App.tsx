import { Switch, Route } from "wouter";
import Home from "@/pages/home";
import Departments01 from "./pages/departments/depatment01";
import Departments02 from "./pages/departments/depatment02";
import Departments03 from "./pages/departments/depatment03";
import Departments04 from "./pages/departments/depatment04";
import Departments05 from "./pages/departments/depatment05";
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

      <Route path="/departments/01">
        <Departments01 />
      </Route>
      <Route path="/departments/02">
        <Departments02 />
      </Route>
      <Route path="/departments/03">
        <Departments03 />
      </Route>
      <Route path="/departments/04">
        <Departments04 />
      </Route>
      <Route path="/departments/05">
        <Departments05 />
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
