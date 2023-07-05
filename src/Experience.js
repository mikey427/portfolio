import React, { useState } from 'react'

function Experience () {
  const [selectedJob, setSelectedJob] = useState(0)
  const experience = [
    {
      name: 'Lightspeed Voice',
      title: 'Software Developer',
      link: 'https://www.lightspeedvoice.com/',
      datesEmployed: 'September 2021 - July 2022',
      descriptionBullets: [
        'Collaborated with a team of developers to plan and execute projects.',
        'Utilized AngularJS and MaterialUI for frontend development, and PHP Laravel for backend development.',
        'Designed and implemented efficient and scalable code for increased functionality and readability.',
        'Maintained effective communication with team members to ensure project success.'
      ]
    },
    {
      name: 'FullStack Academy',
      title: 'Web Dev Student',
      link: 'https://www.fullstackacademy.com/',
      datesEmployed: 'March 2021 - July 2021',
      descriptionBullets: [
        'Completed a 17-week full-time immersive Full Stack Engineering program at Fullstack Academy in July 2021.',
        'Gained experience working in a simulated work environment, which included code reviews, daily standups, and using Git workflow.',
        'Developed solo and team projects, which helped to improve team dynamics, Agile development, and research skills for new technologies.',
        'Acquired experience with various technologies and frameworks relevant to Full Stack Engineering, including [insert relevant technologies/frameworks you learned].'
      ]
    }
  ]

  function handleClick (event) {
    if (event.target.textContent === 'FullStack Academy') {
      setSelectedJob(1)
    } else {
      setSelectedJob(0)
    }
  }

  return (
    <div
      id='experience'
      className='text-text bg-main md:pl-20 lg:pl-32 xl:pl-80 py-36 lg:py-16 w-screen animate-fade-in-up'
    >
      {/* <h1 className="flex mt-2 text-2xl text-text sm:text-3xl font-bold font-sans">
        <span className="text-xl text-pink-500 font-mono ">02.</span>
        My Experience
        <hr className="h-px my-auto mx-4 w-6 sm:w-80 opacity-20 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      </h1> */}
      <h1 className='flex text-2xl ml-4 mt-2 text-text md:text-3xl font-bold font-sans'>
        <span className='text-xl text-pink-500 font-mono pt-2 mr-2'>02.</span>
        <span className='pt-[2px]'>My Experience</span>
        <hr className='h-px mx-4 my-auto w-1/5 sm:w-1/2 md:w-80 opacity-20 bg-gray-200 border-0 dark:bg-gray-700'></hr>
      </h1>
      <div className='relative flex flex-col md:flex-row'>
        <hr className='relative hidden md:inline w-px my-4 ml-4 h-64 opacity-20 bg-gray-200 border-0 dark:bg-gray-700'></hr>
        {selectedJob === 0 ? (
          <hr className='hidden md:inline transition ease-in-out duration-500 absolute mt-4 top-0 left-0 w-[2px] my-auto ml-4 h-[40px] bg-pink-500 border-0 rounded-lg'></hr>
        ) : (
          <hr className='hidden md:inline transition ease-in-out duration-500 translate-y-10 absolute mt-4 top-0 left-0 w-[2px] my-auto ml-4 h-[40px] bg-pink-500 border-0 rounded-lg'></hr>
        )}
        <div className='flex justify-center md:justify-start md:mx-auto sm:w-auto md:ml-0 md:flex-col text-sm font-mono md:mr-8 mt-4'>
          <button
            onClick={handleClick}
            value='Lightspeed Voice'
            className='hover:bg-pink-500 hover:bg-opacity-10 w-2/5 md:w-40 h-16 md:h-10'
          >
            <span className='relative text-pink-500'>Lightspeed Voice</span>
          </button>

          <button
            onClick={handleClick}
            value='FullStack Academy'
            className='hover:bg-pink-500 hover:bg-opacity-10 w-2/5 md:w-40 h-16 md:h-10'
          >
            <span className='text-pink-500'>FullStack Academy</span>
          </button>
        </div>
        <div className='md:hidden w-4/5 mx-auto'>
          {selectedJob === 0 ? (
            <hr className='md:hidden transition ease-in-out duration-500 absolute top-20 left-4 2xsm:left-5 xsm:left-6 sm:left-14 w-2/5 ml-4 h-[2px] bg-pink-500 border-0 rounded-lg'></hr>
          ) : (
            <hr className='md:hidden transition ease-in-out duration-500 translate-x-full absolute top-20 left-4 2xsm:left-5 xsm:left-6 sm:left-14 w-2/5 ml-4 h-[2px] bg-pink-500 border-0 rounded-lg'></hr>
          )}
          <hr className='relative md:hidden w-full mx-auto h-px opacity-20 bg-gray-200 border-0 dark:bg-gray-700'></hr>
        </div>
        <div className='mt-4 ml-4'>
          <h1 className='flex font-bold break-normal mx-1 xsm:ml-6 md:ml-0 lg:text-xl md:text-md'>
            {experience[selectedJob].title}{' '}
            <span className='text-pink-500 mx-1'>@</span>
            <span className='flex flex-col group w-max'>
              <a
                href={experience[selectedJob].link}
                className='group text-pink-500 transition duration-300'
              >
                {experience[selectedJob].name}
                  <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-pink-500'></span>
              </a>
            </span>
          </h1>
          <h2 className='font-mono pl-2 sm:ml-0 text-sm my-2 xsm:ml-6 md:ml-0'>
            {experience[selectedJob].datesEmployed}
          </h2>
          <ul className='mt-4 list-disc mx-auto marker:text-pink-500 xsm:ml-12 w-3/4'>
            {experience[selectedJob].descriptionBullets.map((text, id) => {
              return (
                <li key={id} className='my-1'>
                  {text}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Experience
