import React, { useEffect, useState } from 'react'

function Navbar () {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  function openMenu () {
    setMenuOpen(true)
    let sideMenu = document.getElementById('side-menu')
    sideMenu.classList.remove('right-[-250px]')
    sideMenu.classList.add('right-0')
    sideMenu.classList.remove('hidden')
  }

  function closeMenu () {
    setMenuOpen(false)
    let sideMenu = document.getElementById('side-menu')
    sideMenu.classList.remove('right-0')
    sideMenu.classList.add('right-[-250px]')
    sideMenu.classList.add('hidden')
  }

  function handleScroll () {
    const currentScrollPos = window.scrollY
    if (!menuOpen) {
      if (currentScrollPos > prevScrollPos) {
        setVisible(false)
      } else {
        setVisible(true)
      }
      setPrevScrollPos(currentScrollPos)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <div
      className={`flex justify-between sticky top-0 bg-main shadow-2xl z-50 ${
        visible
          ? 'transition ease-in-out duration-500'
          : 'transition ease-in-out duration-500 -translate-y-20'
      }`}
    >
      <a href='/#'>
        <img
          className='w-max h-max ml-4 animate-fade-in-down1'
          src={process.env.PUBLIC_URL + 'logo.png'}
          alt='IMG NOT FOUND'
        ></img>
      </a>
      <header className='hidden sm:flex justify-end font-mono text-md my-auto'>
        <a href='/#about' className='m-4 animate-fade-in-down1'>
          <span className='m-2 text-pink-500 font-bold'>01.</span>
          About
        </a>
        <a href='/#experience' className='m-4 animate-fade-in-down2'>
          <span className='m-2 text-pink-500 font-bold'>02.</span>
          Experience
        </a>
        <a href='/#projects' className='m-4 animate-fade-in-down3'>
          <span className='m-2 text-pink-500 font-bold'>03.</span>
          Projects
        </a>
        <a
          href='./Michael Baez Tech Resume.pdf'
          className='px-2 m-4 mr-6 font-bold border text-pink-500 border-pink-500 rounded hover:bg-pink-500 hover:bg-opacity-20 animate-fade-in-down5 duration-300'
        >
          Resume
        </a>
      </header>
      <button className='sm:hidden' onClick={openMenu}>
        <svg
          className='sm:hidden h-12 w-12 mr-7 my-auto'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            className='fill-pink-500'
            d='M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z'
            fill='#000000'
          />
        </svg>
      </button>
      <div
        id='side-menu'
        className='transition-all ease-in-out duration-500 right-[-250px] w-[240px] right-0 z-50 top-0 absolute w-52 h-screen bg-lightBG font-mono text-sm'
      >
        <button className='sm:hidden sticky ml-44 mt-4' onClick={closeMenu}>
          <svg
            className='sm:hidden h-8 w-8 mt-3 my-auto'
            fill='#000000'
            version='1.1'
            id='Capa_1'
            viewBox='0 0 460.775 460.775'
          >
            <path
              className='fill-pink-500'
              d='M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
	c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
	c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
	c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
	l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
	c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z'
            />
          </svg>
        </button>
        <ul className='flex flex-col'>
          <li className='mx-auto my-4'>
            <a href='/#about' className='flex flex-col'>
              <span className='mx-auto my-1 text-pink-500'>01.</span>
              <button onClick={closeMenu}>
                <span className='mx-auto my-1'>About</span>
              </button>
            </a>
          </li>
          <li className='mx-auto my-4'>
            <a href='/#experience' className='flex flex-col'>
              <span className='mx-auto my-1 text-pink-500'>02.</span>
              <button onClick={closeMenu}>
                <span className='mx-auto my-1'>Experience</span>
              </button>
            </a>
          </li>
          <li className='mx-auto my-4'>
            <a href='/#projects' className='flex flex-col'>
              <span className='mx-auto my-1 text-pink-500'>03.</span>
              <button onClick={closeMenu}>
                <span className='mx-auto my-1'>Projects</span>
              </button>
            </a>
          </li>
          <li className='mx-auto my-4'>
            <a href='/#contact' className='flex flex-col'>
              <span className='mx-auto my-1 text-pink-500'>04.</span>
              <button onClick={closeMenu}>
                <span className='mx-auto my-1'>Contact</span>
              </button>
            </a>
          </li>
          <li className='mx-auto my-4'>
            <a href='./Michael Baez Tech Resume.pdf'>
              <button
                onClick={closeMenu}
                className='w-36 h-16 border rounded border-pink-500 text-pink-500'
              >
                Resume
              </button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
