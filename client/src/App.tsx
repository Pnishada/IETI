import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import TrainingCenters from "@/pages/training-centers";
import Gallery from "@/pages/gallery";
import Search from "@/pages/search";
import NotFound from "@/pages/not-found";
import ProgramsSection from "./components/ProgramsSection";
import ProgramDetails from "./pages/programs/[id]";
import NewsPage from "./pages/news";
import NewsDetails from "./pages/news/[id]";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/training-centers" component={TrainingCenters} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/search" component={Search} />
       <Route path="/programs" component={ProgramsSection} />
      <Route path="/programs/:id" component={ProgramDetails} />
       <Route path="/news" component={NewsPage} />
       <Route path="/news/:id" component={NewsDetails} />

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
