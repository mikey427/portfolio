import React from "react";

function About() {
	return (
		<div
			id="about"
			className="w-screen mt-40 pt-40 md:pt-24 lg:pt-0 text-text bg-main animate-fade-in-up xxl:mx-0 xxl:mt-0 xxl:px-0"
		>
			<div className="lg:ml-32 xl:ml-80 lg:my-36 xxl:mx-0 xxl:px-0">
				<h1 className="flex text-2xl pl-4 md:pl-20 lg:pl-0 mt-2 text-text md:text-3xl font-bold font-sans xxl:mx-0 xxl:px-0">
					<span className="text-xl text-pink-500 font-mono pt-2 mr-2">01.</span>
					<span className="pt-[2px] xxl:mx-0 xxl:px-0">About Me</span>
					<hr className="h-px mx-4 my-auto w-1/3 sm:w-1/2 md:w-80 opacity-20 bg-gray-200 border-0 dark:bg-gray-700"></hr>
				</h1>
				<div className="flex flex-col lg:flex-row xl:w-4/5">
					<div className="pl-6 pr-6 md:pl-20 lg:pl-0 md:pr-12 lg:w-1/2">
						<div className="text-darktext w-full">
							<p className="m-1 md:m-3 indent-8">
								Hi, I'm Michael, a Software Engineer with a passion for
								technology and problem-solving. I've always had an insatiable
								curiosity for technology and have been keeping up with the
								latest advancements since I was young. In fact, I even built my
								first computer when I was just 13 years old! I'm also a car
								enthusiast and an avid gamer who enjoys playing games like
								Valorant, League, Overwatch, and TFT.
							</p>
							<p className="m-1 md:m-3 indent-8">
								In search of a more fitting academic path, I enrolled in
								FullStack Academy and honed my skills in cutting-edge
								technologies like Javascript, React, Node, Express, and
								Sequelize. My experience at Lightspeed Voice further developed
								my expertise, as I built and maintained a custom VoIP phone
								system, gaining valuable insights into project management, time
								management, and teamwork. This sparked my passion for creating
								efficient and user-friendly software solutions, and I continue
								to strive towards delivering top-notch solutions that enhance
								user experience.
							</p>
						</div>
						<div className="flex flex-col m-1 mr-2 text-darktext sm:text-lg sm:m-3 font-mono">
							Here are the technologies I'm most well-versed in:
							<div className="flex md:ml-5 my-3">
								<ul className="list-disc marker:text-pink-500 ml-4 sm:mx-10">
									<li className="">Javascript</li>
									<li>React</li>
									<li>Node/Express</li>
								</ul>
								<ul className="list-disc marker:text-pink-500 ml-5 md:ml-10 sm:mx-5">
									<li>Typescript</li>
									<li>Angular</li>
									<li>PHP/Laravel</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="relative mt-[12px] lg:mt-16 mx-auto sm:mx-auto lg:w-max lg:ml-0 sm:w-96 sm:h-96 group">
						<div className="bg-pink-500 bg-opacity-30 transition-all duration-500 hover:opacity-0 rounded-xl ease-out absolute w-44 h-44 sm:w-80 sm:h-80 z-20"></div>
						<img
							className="relative w-44 h-44 sm:w-80 sm:h-80 z-10 rounded-xl"
							alt=""
							src="/me.jpg"
						></img>
						<div className="transition ease-in-out duration-500 group-hover:transition-all group-hover:ease-in-out group-hover:duration-500 group-hover:-translate-y-[-5px] group-hover:-translate-x-[-5px] w-44 h-44 sm:w-80 sm:h-80 absolute border-[3px] rounded-xl border-pink-500 top-5 left-5"></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
