'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, ChevronLeft, CheckCircle, AlertCircle, TrendingUp, Target, Shield, Users, Zap, Brain, Download, Mail } from 'lucide-react';

interface Question {
  id: string;
  category: string;
  question: string;
  options: {
    value: number;
    label: string;
    description: string;
  }[];
  weight: number;
}

interface CategoryScore {
  name: string;
  score: number;
  maxScore: number;
  icon: JSX.Element;
  color: string;
}

export default function AgenticAIAssessment() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState('');

  const categories = [
    { name: 'Data Infrastructure', icon: <Shield className="w-5 h-5" />, color: 'blue' },
    { name: 'Technical Capabilities', icon: <Zap className="w-5 h-5" />, color: 'purple' },
    { name: 'Organizational Readiness', icon: <Users className="w-5 h-5" />, color: 'green' },
    { name: 'Strategic Alignment', icon: <Target className="w-5 h-5" />, color: 'orange' },
    { name: 'Innovation Culture', icon: <Brain className="w-5 h-5" />, color: 'pink' },
  ];

  const questions: Question[] = [
    // Data Infrastructure
    {
      id: 'data1',
      category: 'Data Infrastructure',
      question: 'How would you describe your current data management capabilities?',
      options: [
        { value: 1, label: 'Basic', description: 'Siloed databases, manual processes' },
        { value: 2, label: 'Developing', description: 'Some integration, partial automation' },
        { value: 3, label: 'Advanced', description: 'Integrated data lake, good governance' },
        { value: 4, label: 'Mature', description: 'Real-time pipelines, full lifecycle management' },
      ],
      weight: 1.2,
    },
    {
      id: 'data2',
      category: 'Data Infrastructure',
      question: 'What is the quality and accessibility of your data?',
      options: [
        { value: 1, label: 'Poor', description: 'Inconsistent, hard to access' },
        { value: 2, label: 'Fair', description: 'Some standards, limited access' },
        { value: 3, label: 'Good', description: 'Standardized, API access available' },
        { value: 4, label: 'Excellent', description: 'High quality, self-service access' },
      ],
      weight: 1.1,
    },
    
    // Technical Capabilities
    {
      id: 'tech1',
      category: 'Technical Capabilities',
      question: 'What is your current AI/ML experience level?',
      options: [
        { value: 1, label: 'None', description: 'No AI/ML implementation' },
        { value: 2, label: 'Experimental', description: 'POCs and pilots only' },
        { value: 3, label: 'Production', description: 'Several models in production' },
        { value: 4, label: 'Scaled', description: 'MLOps platform, hundreds of models' },
      ],
      weight: 1.3,
    },
    {
      id: 'tech2',
      category: 'Technical Capabilities',
      question: 'How robust is your cloud and compute infrastructure?',
      options: [
        { value: 1, label: 'On-premise', description: 'Traditional data center only' },
        { value: 2, label: 'Hybrid', description: 'Some cloud adoption' },
        { value: 3, label: 'Cloud-first', description: 'Primarily cloud-based' },
        { value: 4, label: 'Cloud-native', description: 'Fully elastic, auto-scaling' },
      ],
      weight: 1.0,
    },
    
    // Organizational Readiness
    {
      id: 'org1',
      category: 'Organizational Readiness',
      question: 'How would you rate your team\'s AI skills and expertise?',
      options: [
        { value: 1, label: 'Limited', description: 'Few people with AI knowledge' },
        { value: 2, label: 'Growing', description: 'Building AI team, training programs' },
        { value: 3, label: 'Strong', description: 'Dedicated AI team, good expertise' },
        { value: 4, label: 'Expert', description: 'Center of excellence, thought leaders' },
      ],
      weight: 1.2,
    },
    {
      id: 'org2',
      category: 'Organizational Readiness',
      question: 'What is the level of executive support for AI initiatives?',
      options: [
        { value: 1, label: 'Minimal', description: 'Limited awareness or interest' },
        { value: 2, label: 'Interested', description: 'Exploring possibilities' },
        { value: 3, label: 'Committed', description: 'Active sponsorship, budget allocated' },
        { value: 4, label: 'Strategic', description: 'Board-level priority, transformation agenda' },
      ],
      weight: 1.4,
    },
    
    // Strategic Alignment
    {
      id: 'strat1',
      category: 'Strategic Alignment',
      question: 'How clear are your AI use cases and business objectives?',
      options: [
        { value: 1, label: 'Undefined', description: 'No clear use cases identified' },
        { value: 2, label: 'Exploring', description: 'Identifying potential applications' },
        { value: 3, label: 'Defined', description: 'Clear roadmap with priorities' },
        { value: 4, label: 'Optimized', description: 'Data-driven selection, continuous refinement' },
      ],
      weight: 1.3,
    },
    {
      id: 'strat2',
      category: 'Strategic Alignment',
      question: 'What is your approach to AI governance and ethics?',
      options: [
        { value: 1, label: 'None', description: 'No formal governance' },
        { value: 2, label: 'Basic', description: 'Some guidelines in place' },
        { value: 3, label: 'Comprehensive', description: 'Full framework, ethics committee' },
        { value: 4, label: 'Leading', description: 'Industry-leading practices, transparent AI' },
      ],
      weight: 1.1,
    },
    
    // Innovation Culture
    {
      id: 'innov1',
      category: 'Innovation Culture',
      question: 'How open is your organization to change and experimentation?',
      options: [
        { value: 1, label: 'Resistant', description: 'Risk-averse, slow to change' },
        { value: 2, label: 'Cautious', description: 'Some openness to new ideas' },
        { value: 3, label: 'Adaptive', description: 'Embraces change, fail-fast mentality' },
        { value: 4, label: 'Innovative', description: 'Culture of continuous innovation' },
      ],
      weight: 1.0,
    },
    {
      id: 'innov2',
      category: 'Innovation Culture',
      question: 'What is your current approach to process automation?',
      options: [
        { value: 1, label: 'Manual', description: 'Most processes are manual' },
        { value: 2, label: 'RPA', description: 'Some robotic process automation' },
        { value: 3, label: 'Intelligent', description: 'AI-enhanced automation' },
        { value: 4, label: 'Autonomous', description: 'Self-optimizing processes' },
      ],
      weight: 1.2,
    },
  ];

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateResults();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateResults = () => {
    setShowResults(true);
  };

  const getCategoryScores = (): CategoryScore[] => {
    return categories.map(cat => {
      const categoryQuestions = questions.filter(q => q.category === cat.name);
      const totalScore = categoryQuestions.reduce((sum, q) => {
        const answer = answers[q.id] || 0;
        return sum + (answer * q.weight);
      }, 0);
      const maxScore = categoryQuestions.reduce((sum, q) => sum + (4 * q.weight), 0);
      
      return {
        name: cat.name,
        score: totalScore,
        maxScore: maxScore,
        icon: cat.icon,
        color: cat.color,
      };
    });
  };

  const getTotalScore = () => {
    const categoryScores = getCategoryScores();
    const totalScore = categoryScores.reduce((sum, cat) => sum + cat.score, 0);
    const maxScore = categoryScores.reduce((sum, cat) => sum + cat.maxScore, 0);
    return { total: totalScore, max: maxScore, percentage: Math.round((totalScore / maxScore) * 100) };
  };

  const getMaturityLevel = (percentage: number) => {
    if (percentage >= 85) return { level: 'Leader', color: 'green', description: 'Ready for advanced agentic AI implementation' };
    if (percentage >= 70) return { level: 'Advanced', color: 'blue', description: 'Well-positioned for AI transformation' };
    if (percentage >= 50) return { level: 'Developing', color: 'yellow', description: 'Building foundations for AI adoption' };
    if (percentage >= 30) return { level: 'Emerging', color: 'orange', description: 'Early stages of AI readiness' };
    return { level: 'Beginning', color: 'red', description: 'Significant preparation needed' };
  };

  const getRecommendations = (percentage: number) => {
    if (percentage >= 85) {
      return [
        'Implement multi-agent orchestration systems',
        'Explore autonomous business unit automation',
        'Lead industry AI standards and best practices',
        'Scale AI across all business functions',
      ];
    }
    if (percentage >= 70) {
      return [
        'Deploy production-grade agentic AI systems',
        'Establish AI center of excellence',
        'Implement advanced MLOps practices',
        'Focus on AI-driven innovation',
      ];
    }
    if (percentage >= 50) {
      return [
        'Start with pilot agentic AI projects',
        'Invest in team training and upskilling',
        'Strengthen data infrastructure',
        'Develop AI governance framework',
      ];
    }
    if (percentage >= 30) {
      return [
        'Focus on data quality and integration',
        'Build foundational AI capabilities',
        'Secure executive sponsorship',
        'Create AI strategy and roadmap',
      ];
    }
    return [
      'Assess current data and technology landscape',
      'Build awareness of AI opportunities',
      'Invest in basic infrastructure',
      'Start small with automation projects',
    ];
  };

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  if (showResults) {
    const categoryScores = getCategoryScores();
    const totalScore = getTotalScore();
    const maturity = getMaturityLevel(totalScore.percentage);
    const recommendations = getRecommendations(totalScore.percentage);

    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Results Header */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Assessment Complete</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your AI Readiness Score
            </h1>
            
            {/* Score Display */}
            <div className="relative w-48 h-48 mx-auto mb-8">
              <svg className="transform -rotate-90 w-48 h-48">
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  stroke="currentColor"
                  strokeWidth="12"
                  fill="none"
                  className="text-white/20"
                />
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  stroke="currentColor"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 88}`}
                  strokeDashoffset={`${2 * Math.PI * 88 * (1 - totalScore.percentage / 100)}`}
                  className="text-white transition-all duration-1000"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div>
                  <div className="text-5xl font-bold">{totalScore.percentage}%</div>
                  <div className="text-sm opacity-90">Overall Score</div>
                </div>
              </div>
            </div>

            <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-${maturity.color}-500/20 border-2 border-${maturity.color}-400`}>
              <TrendingUp className="w-5 h-5" />
              <span className="font-bold text-lg">{maturity.level}</span>
            </div>
            <p className="mt-3 text-blue-100">{maturity.description}</p>
          </div>
        </section>

        {/* Detailed Results */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Category Scores */}
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Category Breakdown</h2>
              <div className="space-y-6">
                {categoryScores.map((category, index) => {
                  const percentage = Math.round((category.score / category.maxScore) * 100);
                  return (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 bg-${category.color}-100 rounded-lg flex items-center justify-center text-${category.color}-600`}>
                            {category.icon}
                          </div>
                          <span className="font-semibold text-gray-900">{category.name}</span>
                        </div>
                        <span className="text-lg font-bold text-gray-900">{percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className={`bg-gradient-to-r from-${category.color}-400 to-${category.color}-600 h-3 rounded-full transition-all duration-1000`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Recommended Next Steps</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recommendations.map((rec, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-blue-600">{index + 1}</span>
                    </div>
                    <p className="text-gray-700">{rec}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Download Report */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Get Your Detailed Report</h2>
              <p className="text-gray-600 mb-6">
                Receive a comprehensive PDF report with detailed analysis, benchmarks, and a personalized roadmap.
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download Report
                </button>
              </form>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/consultation"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition font-semibold"
              >
                Schedule Expert Consultation
              </Link>
              <Link 
                href="/agentic-ai-guide"
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition font-semibold"
              >
                Read Complete Guide
              </Link>
              <button
                onClick={() => {
                  setShowResults(false);
                  setCurrentStep(0);
                  setAnswers({});
                }}
                className="text-gray-600 hover:text-gray-800 font-medium"
              >
                Retake Assessment
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            AI Readiness Assessment
          </h1>
          <p className="text-blue-100">
            Evaluate your organization's readiness for agentic AI implementation
          </p>
        </div>
      </section>

      {/* Assessment Form */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Progress Bar */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-600">Question {currentStep + 1} of {questions.length}</span>
              <span className="text-sm font-semibold text-blue-600">{Math.round(progress)}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center gap-2 text-blue-600 mb-4">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                {categories.find(c => c.name === currentQuestion.category)?.icon}
              </div>
              <span className="text-sm font-medium">{currentQuestion.category}</span>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {currentQuestion.question}
            </h2>

            <div className="space-y-3">
              {currentQuestion.options.map((option) => (
                <label
                  key={option.value}
                  className={`block p-4 border-2 rounded-lg cursor-pointer transition ${
                    answers[currentQuestion.id] === option.value
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                  }`}
                >
                  <input
                    type="radio"
                    name={currentQuestion.id}
                    value={option.value}
                    checked={answers[currentQuestion.id] === option.value}
                    onChange={() => handleAnswer(currentQuestion.id, option.value)}
                    className="sr-only"
                  />
                  <div className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 mt-0.5 flex items-center justify-center ${
                      answers[currentQuestion.id] === option.value
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300'
                    }`}>
                      {answers[currentQuestion.id] === option.value && (
                        <div className="w-2 h-2 bg-white rounded-full" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">{option.label}</div>
                      <div className="text-sm text-gray-600 mt-1">{option.description}</div>
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition ${
                currentStep === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              Previous
            </button>

            <button
              onClick={handleNext}
              disabled={!answers[currentQuestion.id]}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition ${
                !answers[currentQuestion.id]
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {currentStep === questions.length - 1 ? 'See Results' : 'Next'}
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Help Text */}
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
              <div className="text-sm text-blue-800">
                <p className="font-semibold mb-1">Why this matters:</p>
                <p>This assessment helps us understand your current capabilities and provide tailored recommendations for your AI journey.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}