function Contact() {
  return (
    <div className="flex flex-col my-36 mx-auto w-1/4">
      <h2 className="font-mono font-bold text-xl mx-auto text-pink-500">
        04. What's Next
      </h2>
      <h1 className="text-text font-bold mx-auto my-3 text-6xl">
        Get In Touch
      </h1>
      <p className="mx-auto text-center my-3">
        I am currently seeking new opportunities and my inbox is open for any
        queries or messages. If you have any questions or want to get in touch,
        I would be happy to hear from you.
      </p>
      <a href="mailto:mrbaez427@gmail.com" className="mx-auto my-4">
        <button className="px-7 py-4  font-bold border text-pink-500 border-pink-500 rounded hover:bg-pink-500 hover:bg-opacity-20">
          Say Hello
        </button>
      </a>
    </div>
  );
}

export default Contact;
