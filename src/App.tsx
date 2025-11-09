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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/revolution-1" element={<RevolutionPage />} />
          <Route path="/revolution-2" element={<RevolutionPage2 />} />
          <Route path="/revolution-3" element={<RevolutionPage3 />} />
          <Route path="/revolution-4" element={<RevolutionPage4 />} />
          <Route path="/quiz" element={<QuizPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
