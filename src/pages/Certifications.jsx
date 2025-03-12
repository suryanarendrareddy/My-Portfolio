import React from 'react'
import { RiDownload2Fill, RiGalleryView } from 'react-icons/ri'

const Certifications = () => {
  const certifications = [
    {
      title: 'Full-Stack Developer Intern',
      duration: '2 Months',
      description:
        'I worked as a Full-Stack Developer Intern at EngineersWorld.in, gaining hands-on experience in full-stack development using React.js, Node.js, Express, and MongoDB.',
      certificate: 'ew-certificate.pdf',
    },
    {
      "title": "Prompt Engineering",
      "duration": "",
      "description": "Completed a certification in Prompt Engineering, learning advanced AI prompt design techniques for optimizing language model outputs.",
      "certificate": "prompt-engineering.pdf"
    }
  ]

  return (
    <div className="mx-auto text-center max-w-3xl py-10">
      <h1 className="text-lime-500 text-4xl font-bold mb-8">Certifications</h1>
      {certifications.map((cert, index) => (
        <div
          key={index}
          className="bg-gray-800 text-white p-6 rounded-lg shadow-lg mb-6 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-left w-full md:w-3/4">
            <h2 className="text-yellow-400 text-2xl font-bold">{cert.title}</h2>
            {cert.duration && (
              <p className="mt-2 text-gray-400 font-medium">Duration: {cert.duration}</p>
            )}
            {cert.description && <p className="text-gray-300 mt-2 font-medium">{cert.description}</p>}
          </div>
          <div className="flex flex-col gap-4 mt-4 md:mt-0">
            <a
              href={cert.certificate}
              target="_blank"
              className="px-5 py-2 bg-lime-500 text-gray-900 font-bold rounded-lg hover:bg-lime-400 transition flex items-center gap-2"
            >
              <RiGalleryView className="size-5 sm:size-6 md:size-7" />
              View
            </a>
            <a
              href={cert.certificate}
              download
              className="px-5 py-2 bg-lime-500 text-gray-900 font-bold rounded-lg hover:bg-lime-400 transition flex items-center gap-2"
            >
              <RiDownload2Fill className="size-5 sm:size-6 md:size-7" />
              Download
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Certifications
