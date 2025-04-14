import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useQuiz } from "./hooks/useQuiz";
import Quiz from "./components/Quiz";
import LandingPage from "./components/LandingPage"; // Make sure this is the correct path

const queryClient = new QueryClient();

const AppContent = () => {
  const [started, setStarted] = useState(false);
  const { data, isLoading, error } = useQuiz();

  if (!started) {
    return <LandingPage onStart={() => setStarted(true)} />;
  }

  if (isLoading) {
    return <div className="p-6 text-center text-lg">Loading quiz...</div>;
  }

  if (error) {
    return (
      <div className="p-6 text-center text-lg text-red-600">
        Failed to load quiz.
      </div>
    );
  }

  if (!data) return null;

  return <Quiz data={data} />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AppContent />
  </QueryClientProvider>
);

export default App;
