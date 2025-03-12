import React from 'react'

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Technology (B.Tech)',
      field: 'Computer Science & Engineering',
      institution: 'Manav Rachna International University',
      year: '2022 - 2026',
      cgpa: 'CGPA: 6.5',
    },
    {
      degree: 'Intermediate',
      field: 'MPC',
      institution: 'NRI Junior College',
      year: '2020 - 2022',
      cgpa: 'Marks: 941/1000',
    },
    {
      degree: 'Secondary School (10th)',
      field: 'SSC',
      institution: 'Sri Vivekananda High School',
      year: '2019 - 2020',
      cgpa: 'Marks: 589/600',
    },
  ]

  return (
    <div className="py-12">
      <h2 className="text-4xl font-bold text-lime-500 text-center mb-8">
        Education
      </h2>
      <div className="max-w-5xl mx-auto space-y-6 px-4">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl shadow-lg border-l-4 ${
              index % 2 === 0 ? 'bg-gray-800 border-lime-500' : 'bg-gray-700 border-yellow-500'
            }`}
          >
            <h3 className="text-2xl font-semibold text-yellow-400">{edu.degree}</h3>
            <p className="text-lg text-gray-100 font-medium">{edu.field}</p>
            <p className="text-gray-300 font-semibold">{edu.institution}</p>
            <div className="flex justify-between items-center mt-2 text-gray-400">
              <span>{edu.year}</span>
              <span className="font-bold">{edu.cgpa}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education
