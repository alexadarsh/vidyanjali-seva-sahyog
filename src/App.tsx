
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StatePrograms from "./pages/StatePrograms";
import SearchOrganization from "./pages/SearchOrganization";
import NotFound from "./pages/NotFound";
import AboutPankhudi from "./pages/AboutPankhudi";
import MissionShakti from "./pages/MissionShakti";
import MissionVatsalya from "./pages/MissionVatsalya";
import MissionSaksham from "./pages/MissionSaksham";
import RequestDetail from "./pages/RequestDetail";
import AllRequests from "./pages/AllRequests";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/state-programs" element={<StatePrograms />} />
          <Route path="/search-organization" element={<SearchOrganization />} />
          <Route path="/about-pankhudi" element={<AboutPankhudi />} />
          <Route path="/mission-shakti" element={<MissionShakti />} />
          <Route path="/mission-vatsalya" element={<MissionVatsalya />} />
          <Route path="/mission-saksham" element={<MissionSaksham />} />
          <Route path="/request/:id" element={<RequestDetail />} />
          <Route path="/all-requests" element={<AllRequests />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
