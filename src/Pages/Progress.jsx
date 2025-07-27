"use client"

import { BookOpen, Lightbulb, BarChart2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Progress as ShadcnProgress } from "@/components/ui/progress"
import { LearningTrendChart } from "@/components/learning-trend-chart"

export default function Progress() {
  const knowledgeGaps = [
    {
      title: "Advanced Calculus - Derivatives",
      score: 45,
      summary:
        "You struggled with chain rule and second derivatives. Recommended: Watch Lecture 3 & try practice set 2.",
    },
    {
      title: "Python Programming - Data Structures",
      score: 55,
      summary: "Linked lists and hash maps need revision. Watch timestamp 14:00–23:00 in 'Data Structures Deep Dive'.",
    },
    {
      title: "Machine Learning - Model Evaluation",
      score: 60,
      summary:
        "Concepts like precision, recall, and F1-score need reinforcement. Review 'Model Evaluation Metrics' module.",
    },
  ]

  const testHistory = [
    {
      course: "Machine Learning Basics",
      date: "2024-08-10",
      score: 88,
      status: "Passed",
    },
    {
      course: "Data Science Fundamentals",
      date: "2024-08-05",
      score: 80,
      status: "Passed",
    },
    {
      course: "Neural Networks I",
      date: "2024-07-29",
      score: 72,
      status: "Needs Review",
    },
    {
      course: "Linear Algebra for AI",
      date: "2024-07-22",
      score: 65,
      status: "Needs Review",
    },
    {
      course: "Probability & Statistics",
      date: "2024-07-15",
      score: 78,
      status: "Passed",
    },
    {
      course: "Introduction to Python",
      date: "2024-07-08",
      score: 92,
      status: "Passed",
    },
  ]

  const averageScore = testHistory.reduce((sum, test) => sum + test.score, 0) / testHistory.length

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 px-4 sm:px-8 py-10 text-gray-900">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-blue-900">Your Learning Progress</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <SummaryCard
          icon={<BarChart2 size={24} className="text-blue-600" />}
          title="Average Score"
          value={`${averageScore.toFixed(0)}%`}
          subtitle="Across all completed tests"
        />
        <SummaryCard
          icon={<BookOpen size={24} className="text-green-600" />}
          title="Courses Completed"
          value="5 / 12"
          subtitle="Keep up the great work!"
          progress={(5 / 12) * 100}
        />
        <SummaryCard
          icon={<Lightbulb size={24} className="text-yellow-600" />}
          title="Knowledge Gaps"
          value={`${knowledgeGaps.length}`}
          subtitle="Areas to improve"
        />
      </div>

      {/* Learning Trend Chart */}
      <Card className="mb-10 border-blue-100 shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-blue-800">Learning Trend</CardTitle>
          <p className="text-sm text-gray-600">Your performance over recent tests.</p>
        </CardHeader>
        <CardContent>
          <LearningTrendChart data={testHistory} />
        </CardContent>
      </Card>

      {/* Knowledge Gaps */}
      <Card className="mb-10 border-red-100 shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-blue-800">Knowledge Gaps</CardTitle>
          <p className="text-sm text-gray-600">AI-driven insights and suggestions for improvement.</p>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {knowledgeGaps.map((gap, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-red-100">
                <AccordionTrigger className="flex justify-between items-center py-3 text-lg font-medium text-red-700 hover:no-underline">
                  <span className="flex-grow text-left">{gap.title}</span>
                  <span className="bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full ml-4">
                    Score: {gap.score}%
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-3 text-sm text-gray-700">{gap.summary}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      {/* Test History */}
      <Card className="mb-10 border-blue-100 shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-blue-800">Recent Test History</CardTitle>
          <p className="text-sm text-gray-600">Overview of your latest performance.</p>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <table className="min-w-full text-sm text-left border-collapse">
            <thead className="bg-blue-50 text-blue-700 font-semibold">
              <tr>
                <th className="py-3 px-4 rounded-tl-lg">Course</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Score</th>
                <th className="py-3 px-4 rounded-tr-lg">Status</th>
              </tr>
            </thead>
            <tbody>
              {testHistory.map((test, i) => (
                <tr key={i} className="border-t border-gray-100 hover:bg-blue-50 transition-all">
                  <td className="py-3 px-4">{test.course}</td>
                  <td className="py-3 px-4">{test.date}</td>
                  <td className="py-3 px-4 font-medium text-blue-800">{test.score}%</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        test.status === "Passed" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"
                      }`}
                    >
                      {test.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  )
}

function SummaryCard({ icon, title, value, subtitle, progress }) {
  return (
    <Card className="border-blue-100 shadow-md hover:shadow-lg transition-all">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-600">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-blue-900">{value}</div>
        <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
        {progress !== undefined && <ShadcnProgress value={progress} className="h-2 mt-3" />}
      </CardContent>
    </Card>
  )
}
