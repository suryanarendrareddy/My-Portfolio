import React from 'react'
import { skills, coreCS, tools, softSkills } from '../data/skillsData.jsx'

const SkillCard = ({ skill }) => (
  <div className="flex flex-col items-center justify-center p-6 bg-black/40 backdrop-blur-xl rounded-2xl shadow-lg border border-lime-500/20 hover:border-lime-400 hover:shadow-lime-500/20 transition duration-300 ease-in-out hover:scale-105">
    {skill.icon}
    <p className="mt-4 text-base md:text-lg font-medium text-white text-center tracking-wide">
      {skill.name}
    </p>
  </div>
)

const Section = ({ title, data, wide }) => (
  <div className="w-full">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-green-500 tracking-wider drop-shadow-lg">
      {title}
    </h2>
    <div
      className={`grid gap-6 ${
        wide
          ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'
          : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4'
      } max-w-7xl mx-auto`}
    >
      {data.map((skill, index) => (
        <SkillCard key={index} skill={skill} />
      ))}
    </div>
  </div>
)

const Skills = () => {
  return (
    <div className="text-white min-h-screen pt-28 pb-20 px-6 md:px-10 bg-gradient-to-br from-zinc-950 via-black to-zinc-900">
      <div className="space-y-28">
        <Section title="Technical Skills" data={skills} wide />
        <Section title="Core CS Skills" data={coreCS} wide />
        <Section title="Tools" data={tools} wide />
        <Section title="Soft Skills" data={softSkills} wide={false} />
      </div>
    </div>
  )
}

export default Skills
