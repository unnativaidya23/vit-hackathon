import { useState } from "react"
import { Brain, PlayCircle, BookOpen, Clock, Target, ChevronDown, ChevronUp, Filter, TrendingUp, AlertCircle, CheckCircle2, TrendingDown, Minus } from 'lucide-react'

// Progress Ring Component
function ProgressRing({ percentage, size = 60, strokeWidth = 4, color = "#8b5cf6" }) {
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const strokeDasharray = `${circumference} ${circumference}`
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg className="transform -rotate-90" width={size} height={size}>
        <circle cx={size / 2} cy={size / 2} r={radius} stroke="#e5e7eb" strokeWidth={strokeWidth} fill="transparent" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-300 ease-in-out"
        />
      </svg>
      <span className="absolute text-sm font-semibold text-gray-700">{percentage}%</span>
    </div>
  )
}

// Confidence Badge Component
function ConfidenceBadge({ level, percentage }) {
  const getConfig = () => {
    switch (level) {
      case "Low":
        return {
          color: "bg-red-50 text-red-700 border-red-200",
          icon: TrendingDown,
          iconColor: "text-red-500",
        }
      case "Medium":
        return {
          color: "bg-yellow-50 text-yellow-700 border-yellow-200",
          icon: Minus,
          iconColor: "text-yellow-500",
        }
      case "High":
        return {
          color: "bg-green-50 text-green-700 border-green-200",
          icon: TrendingUp,
          iconColor: "text-green-500",
        }
    }
  }

  const config = getConfig()
  const Icon = config.icon

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium border ${config.color}`}>
      <Icon size={14} className={config.iconColor} />
      <span>Confidence: {level}</span>
      {percentage && <span className="text-xs opacity-75">({percentage}%)</span>}
    </div>
  )
}

// Progress Bar Component
function Progress({ value, className = "" }) {
  return (
    <div className={`w-full bg-gray-200 rounded-full ${className}`}>
      <div
        className="bg-blue-600 h-full rounded-full transition-all duration-300"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  )
}

// Badge Component
function Badge({ children, variant = "default", className = "" }) {
  const baseClasses = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
  const variants = {
    default: "bg-blue-100 text-blue-800",
    outline: "border border-gray-300 text-gray-700",
    secondary: "bg-gray-100 text-gray-800",
  }
  
  return (
    <span className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}

// Button Component
function Button({ children, variant = "default", size = "default", className = "", onClick, ...props }) {
  const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
  
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90 bg-gray-900 text-white hover:bg-gray-800",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground border-gray-300 hover:bg-gray-50",
    ghost: "hover:bg-accent hover:text-accent-foreground hover:bg-gray-100",
  }
  
  const sizes = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 text-sm",
    lg: "h-11 px-8",
  }
  
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

// Card Components
function Card({ children, className = "" }) {
  return (
    <div className={`rounded-lg border bg-card text-card-foreground shadow-sm bg-white border-gray-200 ${className}`}>
      {children}
    </div>
  )
}

function CardHeader({ children, className = "" }) {
  return <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>{children}</div>
}

function CardTitle({ children, className = "" }) {
  return <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`}>{children}</h3>
}

function CardContent({ children, className = "" }) {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>
}

// Main Component
export default function LearningInsights() {
  const [expandedCard, setExpandedCard] = useState(null)
  const [filter, setFilter] = useState("All")

  const improvementsData = [
    {
      id: 1,
      topic: "Algebra",
      subject: "Mathematics",
      summary: "You struggled with solving quadratic equations. Revisit solving techniques and substitution problems for better understanding.",
      confidence: "Low",
      confidenceScore: 35,
      timestamp: "12:34 - 15:20",
      lectureTitle: "Advanced Quadratic Equations",
      priority: "High",
      estimatedTime: "45 min",
      completionRate: 23,
      recommendations: [
        "Practice more substitution problems",
        "Review factoring techniques",
        "Watch supplementary video on discriminants",
      ],
      relatedTopics: ["Factoring", "Discriminants", "Graphing Parabolas"],
      nextSteps: "Complete practice set A before moving to complex equations",
    },
    {
      id: 2,
      topic: "Calculus - Derivatives",
      subject: "Mathematics",
      summary: "You performed well in derivatives but need revision in definite integrals and area under curves.",
      confidence: "Medium",
      confidenceScore: 72,
      timestamp: "08:10 - 11:45",
      lectureTitle: "Integration Fundamentals",
      priority: "Medium",
      estimatedTime: "30 min",
      completionRate: 67,
      recommendations: [
        "Focus on integration by parts",
        "Practice area calculation problems",
        "Review fundamental theorem of calculus",
      ],
      relatedTopics: ["Integration by Parts", "Area Under Curves", "Definite Integrals"],
      nextSteps: "Master basic integration before advanced techniques",
    },
    {
      id: 3,
      topic: "Linear Algebra",
      subject: "Mathematics",
      summary: "Strong understanding of matrix operations but need work on eigenvalues and eigenvectors.",
      confidence: "High",
      confidenceScore: 89,
      timestamp: "14:20 - 16:45",
      lectureTitle: "Eigenvalues and Eigenvectors",
      priority: "Low",
      estimatedTime: "25 min",
      completionRate: 85,
      recommendations: [
        "Practice characteristic polynomial calculations",
        "Work on diagonalization problems",
        "Review geometric interpretations",
      ],
      relatedTopics: ["Matrix Diagonalization", "Characteristic Polynomial", "Vector Spaces"],
      nextSteps: "Ready for advanced linear transformations",
    },
  ]

  const filteredData = filter === "All" ? improvementsData : improvementsData.filter((item) => item.confidence === filter)

  const overallProgress = Math.round(
    improvementsData.reduce((acc, item) => acc + item.completionRate, 0) / improvementsData.length,
  )

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800 border-red-200"
      case "Medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Low":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">AI Learning Insights</h1>
              <p className="text-gray-600 mt-1">Personalized recommendations based on your performance</p>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-4 flex items-center gap-3">
                <ProgressRing percentage={overallProgress} size={50} />
                <div>
                  <p className="text-sm text-gray-600">Overall Progress</p>
                  <p className="text-lg font-semibold">{overallProgress}%</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Topics to Review</p>
                  <p className="text-lg font-semibold">{filteredData.length}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">High Confidence</p>
                  <p className="text-lg font-semibold">
                    {improvementsData.filter((item) => item.confidence === "High").length}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex items-center gap-3">
                <div className="p-2 bg-red-100 rounded-lg">
                  <AlertCircle className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Needs Attention</p>
                  <p className="text-lg font-semibold">
                    {improvementsData.filter((item) => item.confidence === "Low").length}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Filter Controls */}
          <div className="flex items-center gap-2 mb-6">
            <Filter className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600 mr-2">Filter by confidence:</span>
            {["All", "Low", "Medium", "High"].map((level) => (
              <Button
                key={level}
                variant={filter === level ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(level)}
                className="text-xs"
              >
                {level}
              </Button>
            ))}
          </div>
        </div>

        {/* Learning Cards */}
        <div className="grid gap-6">
          {filteredData.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-xl text-gray-900">{item.topic}</CardTitle>
                      <Badge variant="outline" className="text-xs">
                        {item.subject}
                      </Badge>
                      <Badge className={`text-xs ${getPriorityColor(item.priority)}`}>{item.priority} Priority</Badge>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.summary}</p>
                  </div>
                  <ProgressRing
                    percentage={item.confidenceScore}
                    size={60}
                    color={item.confidence === "Low" ? "#ef4444" : item.confidence === "Medium" ? "#f59e0b" : "#10b981"}
                  />
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <ConfidenceBadge level={item.confidence} percentage={item.confidenceScore} />
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>{item.estimatedTime}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <BookOpen className="h-4 w-4" />
                    <span>{item.lectureTitle}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-600">Completion Progress</span>
                    <span className="font-medium">{item.completionRate}%</span>
                  </div>
                  <Progress value={item.completionRate} className="h-2" />
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <Button
                    variant="default"
                    size="sm"
                    className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
                  >
                    <PlayCircle className="h-4 w-4 mr-2" />
                    Watch Clip ({item.timestamp})
                  </Button>
                  <Button variant="outline" size="sm">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Practice Problems
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setExpandedCard(expandedCard === item.id ? null : item.id)}
                  >
                    {expandedCard === item.id ? (
                      <>
                        <ChevronUp className="h-4 w-4 mr-1" />
                        Less Details
                      </>
                    ) : (
                      <>
                        <ChevronDown className="h-4 w-4 mr-1" />
                        More Details
                      </>
                    )}
                  </Button>
                </div>

                {/* Expanded Details */}
                {expandedCard === item.id && (
                  <div className="border-t pt-4 space-y-4 animate-in slide-in-from-top-2 duration-200">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">AI Recommendations</h4>
                      <ul className="space-y-1">
                        {item.recommendations.map((rec, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {rec}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Related Topics</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.relatedTopics.map((topic, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-1">Next Steps</h4>
                      <p className="text-sm text-blue-700">{item.nextSteps}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredData.length === 0 && (
          <div className="text-center py-12">
            <div className="p-4 bg-gray-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Target className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No insights found</h3>
            <p className="text-gray-600">Try adjusting your filter or check back later for new recommendations.</p>
          </div>
        )}
      </div>
    </div>
  )
}