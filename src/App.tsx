import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RevolutionPage from "./pages/RevolutionPage";
import QuizPage from "./pages/QuizPage";
import NotFound from "./pages/NotFound";
import RevolutionPage2 from "./pages/RevolutionPage2";
import RevolutionPage3 from "./pages/RevolutionPage3";
import RevolutionPage4 from "./pages/RevolutionPage4";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/revolution-1" element={<RevolutionPage />} />
              <Route path="/revolution-2" element={<RevolutionPage2 />} />
              <Route path="/revolution-3" element={<RevolutionPage3 />} />
              <Route path="/revolution-4" element={<RevolutionPage4 />} />
              <Route path="/quiz" element={<QuizPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
