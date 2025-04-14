import { useQuery } from "@tanstack/react-query";
import { QuizData } from "../types";

export const useQuiz = () =>
  useQuery<QuizData>({
    queryKey: ["quizData"],
    queryFn: async () => {
      const res = await fetch(
        "https://raw.githubusercontent.com/yghugardare/Sample/refs/heads/main/sample.json"
      );
      if (!res.ok) throw new Error("Failed to fetch quiz data");

      const json = await res.json();
      return json.data as QuizData; // 👈 Extract only the inner `data`
    },
  });
