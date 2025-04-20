import React from 'react'

const educationData = [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science & Engineering',
    institution:
      'Manav Rachna International institute of research and studies, Faridabad, Haryana - 121003',
    year: '2022 - 2026',
    cgpa: 'CGPA: 6.5',
  },
  {
    degree: 'Intermediate',
    field: 'MPC',
    institution: 'NRI Junior College, Guntur, Andhra Pradesh - 522005',
    year: '2020 - 2022',
    cgpa: 'Marks: 941/1000',
  },
  {
    degree: 'Secondary School (10th)',
    field: 'SSC',
    institution:
      'Sri Vivekananda High School, Simhadripuram, Dist. Cuddapah, Andhra Pradesh - 516454',
    year: '2019 - 2020',
    cgpa: 'Marks: 589/600',
  },
]

const Education = () => {
  return (
    <div
      className="py-16 text-white"
      style={{
        background: 'linear-gradient(to bottom, #000000, #18181b, #000000)',
      }}
    >
      <h2 className="text-4xl font-bold text-center text-lime-400 mb-10 tracking-wide">
        Education
      </h2>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 space-y-6">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className={`p-6 sm:p-8 rounded-xl border-l-4 transition-all duration-300 ${
              index % 2 === 0
                ? 'bg-gray-800 border-lime-500'
                : 'bg-zinc-800 border-yellow-400'
            }`}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-1">
              {edu.degree}
            </h3>
            <p className="text-base sm:text-lg text-gray-200 font-medium mb-1">
              {edu.field}
            </p>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4">
              {edu.institution}
            </p>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm sm:text-base text-gray-300">
              <span className="mb-2 sm:mb-0">{edu.year}</span>
              <span className="font-bold">{edu.cgpa}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education
