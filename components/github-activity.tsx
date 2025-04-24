"use client"

import { motion } from "framer-motion"
import { GitlabIcon as GitHub } from "lucide-react"

// This is a simplified version of a GitHub activity heatmap
// In a real implementation, you would fetch actual GitHub contribution data
export default function GitHubActivity() {
  // Generate some random data for the heatmap
  const generateContributions = () => {
    const contributions = []
    const today = new Date()

    for (let i = 0; i < 365; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() - i)

      // Random contribution count (0-10)
      const count = Math.floor(Math.random() * 11)

      contributions.push({
        date: date.toISOString().split("T")[0],
        count,
      })
    }

    return contributions.reverse()
  }

  const contributions = generateContributions()

  // Get intensity class based on contribution count
  const getIntensityClass = (count: number) => {
    if (count === 0) return "bg-gray-100"
    if (count < 3) return "bg-green-100"
    if (count < 6) return "bg-green-300"
    if (count < 9) return "bg-green-500"
    return "bg-green-700"
  }

  // Group contributions by week for display
  const weeks = []
  for (let i = 0; i < contributions.length; i += 7) {
    weeks.push(contributions.slice(i, i + 7))
  }

  // Calculate total contributions and current streak
  const totalContributions = contributions.reduce((sum, day) => sum + day.count, 0)

  let currentStreak = 0
  for (let i = contributions.length - 1; i >= 0; i--) {
    if (contributions[i].count > 0) {
      currentStreak++
    } else {
      break
    }
  }

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-6">
        <GitHub size={24} className="text-gray-800" />
        <h3 className="text-xl font-bold">GitHub Activity</h3>
      </div>

      <div className="flex justify-between mb-6">
        <motion.div
          className="bg-white p-4 rounded-lg shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm text-gray-500">Total Contributions</p>
          <p className="text-2xl font-bold">{totalContributions}</p>
        </motion.div>

        <motion.div
          className="bg-white p-4 rounded-lg shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <p className="text-sm text-gray-500">Current Streak</p>
          <p className="text-2xl font-bold">{currentStreak} days</p>
        </motion.div>

        <motion.div
          className="bg-white p-4 rounded-lg shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <p className="text-sm text-gray-500">Repositories</p>
          <p className="text-2xl font-bold">24</p>
        </motion.div>
      </div>

      <motion.div
        className="bg-white p-6 rounded-lg shadow-sm overflow-x-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="flex flex-col gap-1">
          <div className="flex text-xs text-gray-500 mb-1">
            <div className="w-8"></div>
            <div className="flex gap-1">
              <div className="w-3">M</div>
              <div className="w-3">W</div>
              <div className="w-3">F</div>
              <div className="w-3">S</div>
            </div>
          </div>

          <div className="flex gap-1">
            {weeks.slice(-52).map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-1">
                {week.map((day, dayIndex) => (
                  <div
                    key={`${weekIndex}-${dayIndex}`}
                    className={`w-3 h-3 rounded-sm ${getIntensityClass(day.count)}`}
                    title={`${day.date}: ${day.count} contributions`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-end mt-4 gap-2">
          <span className="text-xs text-gray-500">Less</span>
          <div className="w-3 h-3 rounded-sm bg-gray-100"></div>
          <div className="w-3 h-3 rounded-sm bg-green-100"></div>
          <div className="w-3 h-3 rounded-sm bg-green-300"></div>
          <div className="w-3 h-3 rounded-sm bg-green-500"></div>
          <div className="w-3 h-3 rounded-sm bg-green-700"></div>
          <span className="text-xs text-gray-500">More</span>
        </div>
      </motion.div>
    </div>
  )
}
