import { Switch, Route } from "wouter";
import Home from "@/pages/home";
import TrainingCenters from "@/pages/training-centers";
import Gallery from "@/pages/gallery";
import Search from "@/pages/search";
import NotFound from "@/pages/not-found";
import AboutPage from '@/pages/AboutPage';

function Router() {
  return (
    <Switch>
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
    </Switch>
  );
}

export default Router;
