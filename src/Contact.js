function Contact () {
  function handleRedirect () {
    window.open('https://www.brittanychiang.com', '_blank')
  }
  return (
    <div className='flex flex-col md:mt-64 mx-auto py-3 md:py-0 md:w-3/5 lg:1/3 animate-fade-in-up'>
      <h2 className='font-mono font-bold text-xl mx-auto text-pink-500'>
        04. What's Next
      </h2>
      <h1 className='text-text font-bold mx-auto my-3 text-5xl sm:text-6xl'>
        Get In Touch
      </h1>
      <p className='mx-auto text-center py-3'>
        I am currently seeking new opportunities and my inbox is open for any
        queries or messages. If you have any questions or want to get in touch,
        I would be happy to hear from you.
      </p>
      <a href='mailto:mrbaez427@gmail.com' className='mx-auto my-4'>
        <button className='px-7 py-4  font-bold border text-pink-500 border-pink-500 rounded hover:bg-pink-500 hover:bg-opacity-20'>
          Say Hello
        </button>
      </a>
      <div className='font-mono text-sm mt-36 mx-auto mb-3'>
        Design influenced by{' '}
        <button className='hover:text-pink-500' onClick={handleRedirect}>
          Brittany Chiang
        </button>
      </div>
    </div>
  )
}

export default Contact
