import React, { memo } from 'react'
import { educationData } from "../data/education.jsx"
const EducationCard = memo(
  ({ degree, field, institution, year, cgpa, index }) => {
    return (
      <div
        className={`p-6 sm:p-8 rounded-xl border-l-4 transition-all duration-300 ${
          index % 2 === 0
            ? 'bg-black border-lime-500'
            : 'bg-black border-yellow-400'
        }`}
        role="listitem"
      >
        <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-1">
          {degree}
        </h3>
        <p className="text-base sm:text-lg text-gray-100 font-medium mb-1">
          {field}
        </p>
        <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-4">
          {institution}
        </p>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm sm:text-base text-gray-300">
          <span className="mb-2 sm:mb-0">{year}</span>
          <span className="font-bold">{cgpa}</span>
        </div>
      </div>
    )
  }
)

const Education = () => {
  return (
    <div className="py-16 text-white">
      <h2 className="text-4xl font-bold text-center text-lime-400 mb-10 tracking-wide">
        Education
      </h2>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 space-y-6">
        {educationData.map((edu, index) => (
          <EducationCard
            key={index}
            degree={edu.degree}
            field={edu.field}
            institution={edu.institution}
            year={edu.year}
            cgpa={edu.cgpa}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}

export default Education
