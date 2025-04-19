import React from 'react'

const educationData = [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science & Engineering',
    institution: 'Manav Rachna International institute of research and studies, Faridabad, Haryana - 121003',
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
    institution: 'Sri Vivekananda High School, Simhadripuram, Dist. Cuddapah, Andhra Pradesh - 516454',
    year: '2019 - 2020',
    cgpa: 'Marks: 589/600',
  },
]

const Education = () => {
  return (
    <div className="py-16 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center text-lime-500 mb-12">
        Education
      </h2>

      <div className="max-w-4xl mx-auto px-6">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className={`p-8 mb-6 rounded-lg shadow-lg border-2 ${
              index % 2 === 0
                ? 'bg-gray-800 border-lime-500'
                : 'bg-gray-700 border-yellow-500'
            }`}
          >
            <h3 className="text-2xl font-semibold text-yellow-400 mb-2">
              {edu.degree}
            </h3>
            <p className="text-lg text-gray-100 font-medium mb-2">
              {edu.field}
            </p>
            <p className="text-gray-300 text-md">{edu.institution}</p>

            <div className="mt-4 flex justify-between items-center text-gray-400">
              <span>{edu.year}</span>
              <span className="font-bold text-gray-300">{edu.cgpa}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education
