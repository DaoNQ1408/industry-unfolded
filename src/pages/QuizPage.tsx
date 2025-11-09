import { useState } from "react";
import { quizData, QuizQuestion } from "@/data/quizData";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import { CheckCircle2, XCircle, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: string }>({});
  const [showResults, setShowResults] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set());

  const handleAnswerSelect = (questionId: string, optionId: string) => {
    if (!answeredQuestions.has(currentQuestion)) {
      setSelectedAnswers({ ...selectedAnswers, [questionId]: optionId });
      setAnsweredQuestions(new Set([...answeredQuestions, currentQuestion]));
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let score = 0;
    quizData.forEach((question) => {
      const selectedOption = question.options.find(
        (opt) => opt.id === selectedAnswers[question.id]
      );
      if (selectedOption?.isCorrect) {
        score += question.points;
      }
    });
    return score;
  };

  const totalPoints = quizData.reduce((sum, q) => sum + q.points, 0);
  const score = calculateScore();
  const percentage = (score / totalPoints) * 100;

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setAnsweredQuestions(new Set());
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto py-12 px-4">
          <Card className="max-w-2xl mx-auto p-8 shadow-medium text-center">
            <h1 className="text-4xl font-bold mb-6 text-foreground">Kết quả kiểm tra</h1>
            
            <div className="mb-8">
              <div className="text-6xl font-bold text-primary mb-4">
                {score}/{totalPoints}
              </div>
              <Progress value={percentage} className="h-3 mb-4" />
              <p className="text-xl text-muted-foreground">
                Bạn đạt {percentage.toFixed(1)}%
              </p>
            </div>

            <div className="space-y-4 mb-8 text-left">
              {quizData.map((question, index) => {
                const selectedOption = question.options.find(
                  (opt) => opt.id === selectedAnswers[question.id]
                );
                const isCorrect = selectedOption?.isCorrect || false;

                return (
                  <Card key={question.id} className="p-4">
                    <div className="flex items-start gap-3">
                      {isCorrect ? (
                        <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      ) : (
                        <XCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                      )}
                      <div className="flex-1">
                        <p className="font-semibold mb-2 text-foreground">
                          Câu {index + 1}: {question.question}
                        </p>
                        <p className={cn("text-sm", isCorrect ? "text-accent" : "text-destructive")}>
                          {selectedOption?.text || "Chưa trả lời"}
                        </p>
                        {question.explanation && (
                          <p className="text-sm text-muted-foreground mt-2">
                            {question.explanation}
                          </p>
                        )}
                      </div>
                      <Badge variant={isCorrect ? "default" : "destructive"}>
                        {isCorrect ? `+${question.points}` : "0"}
                      </Badge>
                    </div>
                  </Card>
                );
              })}
            </div>

            <Button onClick={resetQuiz} size="lg" className="bg-primary">
              <RotateCcw className="mr-2 h-5 w-5" />
              Làm lại
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  const question = quizData[currentQuestion];
  const progress = ((currentQuestion + 1) / quizData.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 shadow-medium">
            {/* Progress */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-muted-foreground">
                  Câu hỏi {currentQuestion + 1}/{quizData.length}
                </span>
                <Badge>{question.points} điểm</Badge>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            {/* Question */}
            <h2 className="text-2xl font-bold mb-6 text-foreground">
              {question.question}
            </h2>

            {/* Options */}
            <div className="space-y-3 mb-8">
              {question.options.map((option) => {
                const isSelected = selectedAnswers[question.id] === option.id;
                const isAnswered = answeredQuestions.has(currentQuestion);
                const showCorrect = isAnswered && option.isCorrect;
                const showIncorrect = isAnswered && isSelected && !option.isCorrect;

                return (
                  <button
                    key={option.id}
                    onClick={() => handleAnswerSelect(question.id, option.id)}
                    disabled={isAnswered}
                    className={cn(
                      "w-full p-4 text-left rounded-lg border-2 transition-all duration-200",
                      "hover:shadow-soft disabled:cursor-not-allowed",
                      isSelected && !isAnswered && "border-primary bg-primary/5",
                      showCorrect && "border-accent bg-accent/10",
                      showIncorrect && "border-destructive bg-destructive/10",
                      !isSelected && !showCorrect && !showIncorrect && "border-border hover:border-primary/50"
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-foreground">{option.text}</span>
                      {showCorrect && <CheckCircle2 className="h-5 w-5 text-accent" />}
                      {showIncorrect && <XCircle className="h-5 w-5 text-destructive" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center">
              <Button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                variant="outline"
              >
                Câu trước
              </Button>
              
              <Button
                onClick={handleNext}
                disabled={!selectedAnswers[question.id]}
                className="bg-primary"
              >
                {currentQuestion === quizData.length - 1 ? "Xem kết quả" : "Câu tiếp theo"}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
