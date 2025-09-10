import { Switch, Route } from "wouter";
import Home from "@/pages/home";
import TrainingCenters from "@/pages/training-centers";
import Gallery from "@/pages/gallery";
import Search from "@/pages/search";
import NotFound from "@/pages/not-found";
<<<<<<< HEAD
import AboutPage from '@/pages/AboutPage';
=======
import ProgramsSection from "./components/ProgramsSection";
import ProgramDetails from "./pages/programs/[id]";
import NewsPage from "./pages/news";
import NewsDetails from "./pages/news/[id]";
>>>>>>> 5aa5f36fe42ff95ad287accbb576ccd2d5ebcf6f

function Router() {
  return (
    <Switch>
<<<<<<< HEAD
      <Route path="/">
        <Home />
      </Route>

      <Route path="/training-centers">
        <TrainingCenters />
      </Route>

      <Route path="/about">
        <AboutPage />
      </Route>

      <Route path="/gallery">
        <Gallery />
      </Route>

      <Route path="/search">
        <Search />
      </Route>

      {/* Catch-all 404 route */}
      <Route>
        <NotFound />
      </Route>
=======
      <Route path="/" component={Home} />
      <Route path="/training-centers" component={TrainingCenters} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/search" component={Search} />
       <Route path="/programs" component={ProgramsSection} />
      <Route path="/programs/:id" component={ProgramDetails} />
       <Route path="/news" component={NewsPage} />
       <Route path="/news/:id" component={NewsDetails} />

      <Route component={NotFound} />
>>>>>>> 5aa5f36fe42ff95ad287accbb576ccd2d5ebcf6f
    </Switch>
  );
}

export default Router;
