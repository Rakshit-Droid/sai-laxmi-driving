"use client";

import React, { useState } from "react";
import {
  BookOpen,
  Check,
  X,
  ArrowRight,
  RotateCcw,
  Award,
  CheckCircle2,
  AlertTriangle,
  Octagon,
  Moon,
  CloudRain,
} from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // Index of options
  explanation: string;
}

export default function TheoryTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answerChecked, setAnswerChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      question: "What does a circular red traffic sign with a white horizontal bar in India indicate?",
      options: [
        "Slow down and proceed with caution",
        "No entry for vehicles in that direction",
        "Give way to oncoming traffic",
        "Speed limit zone ahead"
      ],
      correctAnswer: 1,
      explanation: "A circular red sign with a white horizontal bar is the 'No Entry' sign in India. It prohibits all vehicles from entering that road or lane."
    },
    {
      id: 2,
      question: "Under the Motor Vehicles Act, what is the maximum speed limit for a car in a residential area unless otherwise posted?",
      options: [
        "30 km/h",
        "40 km/h",
        "50 km/h",
        "60 km/h"
      ],
      correctAnswer: 1,
      explanation: "As per Indian Motor Vehicles rules, the default speed limit in residential and urban areas is 40 km/h unless a different limit is posted on a sign."
    },
    {
      id: 3,
      question: "During the monsoon season, which driving habit is most important to prevent skidding on wet Indian roads?",
      options: [
        "Accelerating quickly to avoid waterlogged patches",
        "Reducing speed and increasing following distance significantly",
        "Switching to high beam headlights at all times",
        "Keeping both hands on the horn for alerting pedestrians"
      ],
      correctAnswer: 1,
      explanation: "Wet roads drastically reduce tyre grip. Slowing down and maintaining a longer following distance gives you more reaction time and reduces skid risk during the monsoon."
    },
    {
      id: 4,
      question: "Which document is NOT mandatory to carry while driving a motor vehicle in India?",
      options: [
        "Valid Driving Licence (DL)",
        "Registration Certificate (RC)",
        "Vehicle Insurance Certificate",
        "Pollution Under Control (PUC) Certificate"
      ],
      correctAnswer: 3,
      explanation: "While PUC is legally required and can result in a fine, all four documents are actually mandatory. However, among the options, the RC, DL, and Insurance are the primary documents checked. A PUC lapse is a commonly missed violation — always carry all four."
    },
    {
      id: 5,
      question: "What is the recommended safe following distance behind another vehicle on Indian highways?",
      options: [
        "The 1-second rule",
        "The 3-second rule",
        "Exactly two car lengths regardless of speed",
        "A distance equal to the width of your driving lane"
      ],
      correctAnswer: 1,
      explanation: "The 3-second rule provides a safe, speed-adjusted buffer zone under standard conditions, allowing you enough time to react if the vehicle ahead brakes suddenly."
    }
  ];

  const handleSelectOption = (index: number) => {
    if (answerChecked) return;
    setSelectedAnswer(index);
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer === null) return;
    setAnswerChecked(true);
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setAnswerChecked(false);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswerChecked(false);
    setScore(0);
    setShowResults(false);
  };

  const progressPercentage = ((currentQuestion) / questions.length) * 100;

  return (
    <section id="theory-prep" className="py-24 md:py-32 bg-stone-50 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 text-[10px] uppercase tracking-[0.2em] font-semibold mb-4">
            <BookOpen className="w-3.5 h-3.5 text-amber-600" />
            <span>Interactive Simulator</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight text-stone-900 leading-tight mb-4">
            Test your road knowledge instantly.
          </h2>
          <p className="text-base text-stone-600 leading-relaxed max-w-2xl mx-auto mb-10">
            Try our mini-quiz modeled after current RTO theory exams. Spot your weaknesses and see explanations instantly.
          </p>

          {/* Topic tiles — illustrated, on-label, no stock-photo guesswork */}
          <div className="grid grid-cols-3 gap-3 max-w-2xl mx-auto">
            {[
              {
                label: "Road Signs",
                Icon: Octagon,
                gradient: "from-rose-700 via-red-600 to-amber-700",
                topic: "Indian RTO sign chart",
                stroke: "stroke-[1.5]",
              },
              {
                label: "Night Driving",
                Icon: Moon,
                gradient: "from-stone-900 via-indigo-950 to-stone-800",
                topic: "Headlight discipline",
                stroke: "fill-amber-200 stroke-amber-200",
              },
              {
                label: "Monsoon Rules",
                Icon: CloudRain,
                gradient: "from-sky-800 via-slate-700 to-stone-800",
                topic: "Wet road safety",
                stroke: "stroke-[1.5]",
              },
            ].map(({ label, Icon, gradient, topic, stroke }) => (
              <div
                key={label}
                className={`relative rounded-2xl overflow-hidden h-28 border border-amber-700/10 bg-gradient-to-br ${gradient} flex flex-col justify-between p-4 text-left`}
              >
                {/* Decorative concentric ring for visual depth */}
                <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full border border-white/15 pointer-events-none"></div>
                <div className="absolute -bottom-10 -left-6 w-20 h-20 rounded-full border border-white/10 pointer-events-none"></div>

                <Icon className={`w-7 h-7 text-white ${stroke}`} />

                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                    {label}
                  </span>
                  <span className="block text-[9px] text-white/70 mt-0.5">
                    {topic}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quiz Module Wrapper using Double-Bezel Architecture */}
        <div className="max-w-2xl mx-auto p-1.5 bg-slate-200/40 border border-slate-300/20 rounded-[2.5rem] diffused-shadow animate-fade-up">
          <div className="bg-white rounded-[calc(2.5rem-0.25rem)] p-8 md:p-10 min-h-[460px] flex flex-col justify-between">
            {showResults ? (
              /* Results Screen */
              <div className="text-center py-6 animate-fade-up flex flex-col items-center justify-center h-full">
                <div className="w-20 h-20 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6">
                  {score >= 4 ? (
                    <Award className="w-10 h-10 text-amber-600" />
                  ) : (
                    <AlertTriangle className="w-10 h-10 text-amber-500" />
                  )}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Quiz Completed!</h3>
                <p className="text-sm text-slate-400 mb-6">Here is how you performed on the rules of the road:</p>

                {/* Score Circle */}
                <div className="relative flex items-center justify-center w-28 h-28 rounded-full border-4 border-slate-100 mb-8">
                  <div className="text-center">
                    <span className="text-4xl font-extrabold text-slate-900">{score}</span>
                    <span className="text-slate-400 text-sm block">/ {questions.length}</span>
                  </div>
                  <svg className="absolute -rotate-90 top-0 left-0 w-28 h-28 pointer-events-none" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="46"
                      fill="transparent"
                      stroke={score >= 4 ? "#d97706" : "#f59e0b"}
                      strokeWidth="4"
                      strokeDasharray={`${2 * Math.PI * 46}`}
                      strokeDashoffset={`${2 * Math.PI * 46 * (1 - score / questions.length)}`}
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div className="max-w-[40ch] mb-8">
                  <p className="text-sm font-medium text-slate-700">
                    {score === 5 && "Flawless score! You have got excellent defensive road knowledge."}
                    {score === 4 && "Great job! A tiny refresher and you are ready to ace the RTO."}
                    {score < 4 && "Practice makes perfect. A structured curriculum is highly recommended."}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  <button
                    onClick={handleReset}
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-full border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-stone-50 transition-colors duration-300 active:scale-[0.98]"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Reset Quiz</span>
                  </button>
                  <a
                    href="#scheduler"
                    className="flex-1 flex items-center justify-between p-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-full text-xs font-semibold transition-all shadow-md active:scale-[0.98]"
                  >
                    <span className="pl-4">Schedule Class</span>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </a>
                </div>
              </div>
            ) : (
              /* Quiz Step Screen */
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-400 uppercase tracking-wider mb-6">
                    <span>Question {currentQuestion + 1} of {questions.length}</span>
                    <span>Score: {score}</span>
                  </div>

                  {/* Progress Bar Container */}
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mb-8">
                    <div
                      className="h-full bg-amber-600 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>

                  {/* Question Content */}
                  <h3 className="text-lg md:text-xl font-bold text-slate-950 leading-snug mb-8 min-h-[60px]">
                    {questions[currentQuestion].question}
                  </h3>

                  {/* Options List */}
                  <div className="space-y-3">
                    {questions[currentQuestion].options.map((option, idx) => {
                      const isSelected = selectedAnswer === idx;
                      const isCorrect = idx === questions[currentQuestion].correctAnswer;
                      
                      let optionStyle = "border-slate-200 bg-white hover:border-slate-300 text-slate-700";
                      if (isSelected) optionStyle = "border-slate-900 bg-slate-900 text-white";
                      
                      if (answerChecked) {
                        if (isCorrect) {
                          optionStyle = "border-amber-600 bg-amber-500/10 text-amber-950";
                        } else if (isSelected) {
                          optionStyle = "border-red-600 bg-red-500/10 text-red-950";
                        } else {
                          optionStyle = "border-slate-100 bg-stone-50/50 text-slate-400 cursor-not-allowed";
                        }
                      }

                      return (
                        <button
                          key={idx}
                          type="button"
                          disabled={answerChecked}
                          onClick={() => handleSelectOption(idx)}
                          className={`w-full flex items-center justify-between p-4 rounded-2xl border text-left text-xs font-medium transition-all duration-300 active:scale-[0.98] ${optionStyle}`}
                        >
                          <span className="pr-4">{option}</span>
                          <div className="flex shrink-0 items-center justify-center">
                            {answerChecked && isCorrect && (
                              <div className="w-5 h-5 rounded-full bg-amber-600 flex items-center justify-center">
                                <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                              </div>
                            )}
                            {answerChecked && isSelected && !isCorrect && (
                              <div className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center">
                                <X className="w-3.5 h-3.5 text-white stroke-[3]" />
                              </div>
                            )}
                            {!answerChecked && (
                              <div className={`w-5 h-5 rounded-full border transition-all ${
                                isSelected ? "border-white bg-white/20" : "border-slate-300 bg-transparent"
                              }`} />
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Question Control Actions */}
                <div className="mt-8">
                  {answerChecked && (
                    <div className="p-4 bg-stone-50 border border-slate-100 rounded-2xl mb-6 text-xs text-slate-500 leading-relaxed animate-fade-up">
                      <span className="font-bold text-slate-800 block mb-1">Why this is correct:</span>
                      {questions[currentQuestion].explanation}
                    </div>
                  )}

                  {!answerChecked ? (
                    <button
                      onClick={handleCheckAnswer}
                      disabled={selectedAnswer === null}
                      className="group w-full flex items-center justify-between p-3.5 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-100 disabled:text-slate-300 disabled:cursor-not-allowed text-white rounded-full text-xs font-semibold transition-all active:scale-[0.98]"
                    >
                      <span className="pl-4">Check Answer</span>
                      <div className="w-8 h-8 rounded-full bg-white/10 group-disabled:bg-slate-200/20 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                    </button>
                  ) : (
                    <button
                      onClick={handleNextQuestion}
                      className="group w-full flex items-center justify-between p-3.5 bg-amber-600 hover:bg-amber-500 text-white rounded-full text-xs font-semibold transition-all shadow-md active:scale-[0.98]"
                    >
                      <span className="pl-4">
                        {currentQuestion === questions.length - 1 ? "Finish and See Score" : "Next Question"}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-all">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
