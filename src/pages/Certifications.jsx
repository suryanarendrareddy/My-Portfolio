import React, { memo } from 'react'
import { RiDownload2Fill } from 'react-icons/ri'
import { BsFileEarmarkText } from 'react-icons/bs'
import certificationsData from "../data/certifications.json"
const CertificationCard = memo(
  ({ title, duration, description, certificate }) => {
    return (
      <div
        className="bg-black text-white p-6 rounded-xl shadow-lg mb-6 flex flex-col md:flex-row justify-between items-center"
        role="article"
      >
        <div className="text-left w-full md:w-3/4">
          <h2 className="text-yellow-400 text-2xl font-semibold mb-2">
            {title}
          </h2>
          {duration && (
            <p
              className="mt-2 text-gray-300 font-medium"
              aria-label={`Duration: ${duration}`}
            >
              Duration: {duration}
            </p>
          )}
          {description && (
            <p
              className="text-gray-200 mt-2 font-medium"
              aria-label={description}
            >
              {description}
            </p>
          )}
        </div>
        <div className="flex md:flex-col flex-row gap-4 mt-4 md:mt-0">
          <a
            href={certificate}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-lime-500 text-gray-900 font-bold rounded-lg hover:bg-lime-400 transition flex items-center gap-2"
            aria-label={`View certificate for ${title}`}
          >
            <BsFileEarmarkText className="text-lg sm:text-xl md:text-2xl" />
            View
          </a>
          <a
            href={certificate}
            download
            className="px-5 py-2 bg-lime-500 text-gray-900 font-bold rounded-lg hover:bg-lime-400 transition flex items-center gap-2"
            aria-label={`Download certificate for ${title}`}
          >
            <RiDownload2Fill className="text-lg sm:text-xl md:text-2xl" />
            Download
          </a>
        </div>
      </div>
    )
  }
)

const Certifications = () => {

  return (
    <div className="mx-auto text-center max-w-3xl py-10">
      <h1 className="text-lime-500 text-4xl font-bold mb-8">Certifications</h1>
      {certificationsData.map((cert, index) => (
        <CertificationCard
          key={index}
          title={cert.title}
          duration={cert.duration}
          description={cert.description}
          certificate={cert.certificate}
        />
      ))}
    </div>
  )
}

export default Certifications
