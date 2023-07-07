import React from "react";

export default function Projects() {
	const projects = [
		{
			name: "Park App",
			description:
				"A mobile application which connects users who need a place to park with parking spots provided by other users. Built by myself and 3 peers for our Capstone Project at FullStack Academy.",
			tech: ["React-Native", "Firebase", "Google Maps API"],
			image: "./ParkAppCaptureNew.jpg",
			customImgSize: "565px",
			githubLink: "https://github.com/Parkpp/parkapp",
			deployedLink: "",
		},
		{
			name: "Cloud Companion",
			description:
				"A responsive web app that displays the weather for 4 locations simultaneously with the ability to change those locations. Your set locations are stored in localStorage so that way you don't have to enter your locations each time you enter the app.",
			tech: ["React", "Node.JS", "RapidAPI's Weather API"],
			image: "./cloudCompanion.jpeg",
			customImgSize: "611px",
			githubLink: "https://github.com/mikey427/Cloud-Companion",
			deployedLink: "",
		},
	];

	return (
		<div id="projects" className="h-max mt-40 mb-36">
			<h1 className="flex my-auto lg:mt-36 md:pl-20 lg:pl-0 xxl:px-0 text-text text-3xl font-bold font-sans lg:ml-32 xl:ml-80 xxl:mx-0">
				<span className="ml-4 text-xl text-pink-500 font-mono mt-1 mr-3">
					03.
				</span>
				Some Things I've Built
				<hr className="h-px my-auto mx-4 w-1/5 sm:w-1/2 md:w-80 opacity-20 bg-gray-200 border-0 dark:bg-gray-700"></hr>
			</h1>
			<div className="flex flex-col justify-center lg:flex-row mx-auto xxl:justify-evenly w-2/3">
				{projects.map((project, idx) => {
					return (
						<div
							className="w-full lg:mr-10 mx-auto mt-4 max-w-sm rounded overflow-hidden shadow-2xl my-10 xxl:my-0  group/img"
							key={idx}
						>
							<div className="w-2/3 bg-pink-500 bg-opacity-50 transition-all duration-500 group-hover/img:opacity-0 ease-out absolute md:w-96 h-52 z-20"></div>
							<img
								className="w-full h-52"
								src={project.image}
								alt="Project Preview"
							/>
							<div className="px-6 py-4">
								<a href={project.githubLink} target="_blank" rel="noreferrer">
									<div className="font-bold text-text text-xl mb-2 group/link flex justify-between">
										<span className="inline-block group-hover/link:text-pink-500">
											{project.name}
										</span>
										<span className="ml-3 inline-block">
											<svg
												className="group"
												version="1.1"
												id="Layer_1"
												xmlns="http://www.w3.org/2000/svg"
												x="0px"
												y="0px"
												width="24px"
												height="24px"
												viewBox="0 0 511 512"
											>
												<path
													fill="none"
													opacity="1.000000"
													stroke="none"
													d="
  M356.000000,513.000000
    C310.979095,513.000000 265.958221,513.000000 220.600784,512.691284
    C220.847061,511.799896 221.332809,511.038422 222.027267,510.661285
    C232.407425,505.024017 236.252747,496.158173 236.093750,484.590912
    C235.777756,461.599030 235.916641,438.599243 236.039734,415.603638
    C236.109894,402.494965 240.049194,390.583527 248.890198,380.764282
    C256.787231,371.993408 259.422058,362.207947 255.069122,351.269318
    C250.884247,340.752991 241.999619,336.813293 231.236572,334.915833
    C216.524155,332.322083 201.679993,329.607788 187.496719,325.060120
    C157.485474,315.437378 135.802795,296.158295 124.626564,266.090576
    C119.483734,252.254700 117.037788,237.884628 115.653282,223.214371
    C112.972984,194.813965 115.799271,167.755142 132.091187,143.219055
    C142.351196,127.767189 145.586380,110.677528 143.225388,92.176392
    C141.910538,81.872810 141.940002,71.354164 142.003189,60.936321
    C142.035507,55.609447 143.262146,55.309486 148.211975,57.068890
    C164.170197,62.741199 179.124268,70.407326 192.664978,80.538467
    C201.771957,87.352295 211.297424,87.814667 221.992722,85.650673
    C238.600739,82.290344 255.303116,78.582413 272.136841,77.336174
    C299.652588,75.299118 327.087708,77.629707 353.785004,85.247192
    C366.164368,88.779381 376.692841,86.549614 387.003296,78.728722
    C399.790985,69.028801 414.304626,62.188206 429.399353,56.659473
    C432.342133,55.581623 434.024048,56.163658 434.110352,59.389111
    C434.327789,67.517662 435.516754,75.814774 434.335297,83.749336
    C430.926056,106.645226 432.895996,127.961929 446.535278,147.715469
    C454.137482,158.725616 458.561981,171.507385 460.003235,184.980820
    C462.726471,210.438751 460.833710,235.586273 453.044403,260.019409
    C443.872284,288.790131 426.097626,310.047607 397.650940,321.827972
    C380.223419,329.045044 361.984161,332.542145 343.459473,334.957428
    C335.666168,335.973480 328.960968,338.793152 324.257477,345.236816
    C316.286652,356.156677 316.950684,368.056213 326.820465,379.970886
    C336.116211,391.192566 340.075867,403.933380 340.023193,418.274872
    C339.938080,441.437408 339.995575,464.600555 340.013123,487.763428
    C340.020416,497.395294 344.242035,504.652100 352.388489,509.746613
    C353.741394,510.592682 354.803497,511.903778 356.000000,513.000000
  z"
												/>
												<path
													className="fill-darktext group-hover/link:fill-pink-500 hover:fill-pink-500"
													fill="none"
													opacity="1.000000"
													stroke="none"
													d="
  M356.467590,513.000000
    C354.803497,511.903778 353.741394,510.592682 352.388489,509.746613
    C344.242035,504.652100 340.020416,497.395294 340.013123,487.763428
    C339.995575,464.600555 339.938080,441.437408 340.023193,418.274872
    C340.075867,403.933380 336.116211,391.192566 326.820465,379.970886
    C316.950684,368.056213 316.286652,356.156677 324.257477,345.236816
    C328.960968,338.793152 335.666168,335.973480 343.459473,334.957428
    C361.984161,332.542145 380.223419,329.045044 397.650940,321.827972
    C426.097626,310.047607 443.872284,288.790131 453.044403,260.019409
    C460.833710,235.586273 462.726471,210.438751 460.003235,184.980820
    C458.561981,171.507385 454.137482,158.725616 446.535278,147.715469
    C432.895996,127.961929 430.926056,106.645226 434.335297,83.749336
    C435.516754,75.814774 434.327789,67.517662 434.110352,59.389111
    C434.024048,56.163658 432.342133,55.581623 429.399353,56.659473
    C414.304626,62.188206 399.790985,69.028801 387.003296,78.728722
    C376.692841,86.549614 366.164368,88.779381 353.785004,85.247192
    C327.087708,77.629707 299.652588,75.299118 272.136841,77.336174
    C255.303116,78.582413 238.600739,82.290344 221.992722,85.650673
    C211.297424,87.814667 201.771957,87.352295 192.664978,80.538467
    C179.124268,70.407326 164.170197,62.741199 148.211975,57.068890
    C143.262146,55.309486 142.035507,55.609447 142.003189,60.936321
    C141.940002,71.354164 141.910538,81.872810 143.225388,92.176392
    C145.586380,110.677528 142.351196,127.767189 132.091187,143.219055
    C115.799271,167.755142 112.972984,194.813965 115.653282,223.214371
    C117.037788,237.884628 119.483734,252.254700 124.626564,266.090576
    C135.802795,296.158295 157.485474,315.437378 187.496719,325.060120
    C201.679993,329.607788 216.524155,332.322083 231.236572,334.915833
    C241.999619,336.813293 250.884247,340.752991 255.069122,351.269318
    C259.422058,362.207947 256.787231,371.993408 248.890198,380.764282
    C240.049194,390.583527 236.109894,402.494965 236.039734,415.603638
    C235.916641,438.599243 235.777756,461.599030 236.093750,484.590912
    C236.252747,496.158173 232.407425,505.024017 222.027267,510.661285
    C221.332809,511.038422 220.847061,511.799896 220.132126,512.691284
    C213.978851,513.000000 207.957703,513.000000 201.336121,512.691345
    C200.013260,511.708618 199.392349,510.849213 198.552673,510.389099
    C190.137543,505.778076 185.582611,498.683502 184.767960,489.166046
    C184.442017,485.358307 184.193115,481.543396 183.955978,477.728821
    C183.790344,475.064484 183.027878,473.520569 179.761337,473.539337
    C170.457840,473.592865 161.100632,473.824249 151.856186,472.980988
    C111.456894,469.295959 78.149414,451.271210 51.229034,421.394897
    C41.561600,410.665924 30.352470,402.586365 17.628599,396.035339
    C12.775215,393.536530 8.793850,389.282837 4.578218,385.640106
    C3.130154,384.388885 2.178459,382.563232 1.000000,381.000000
    C1.000000,374.978851 1.000000,368.957703 1.308386,362.337952
    C2.562138,360.598816 3.608408,359.526855 4.437211,358.307068
    C12.367492,346.635773 24.437229,342.958862 37.660194,348.291412
    C53.303009,354.599823 67.095879,363.699341 79.108978,375.568390
    C87.042397,383.406647 94.970245,391.275543 103.294495,398.688354
    C124.708641,417.757721 149.647232,425.373444 178.174957,421.216675
    C182.694748,420.558075 183.709198,418.474701 184.094910,414.360748
    C185.007492,404.627594 186.306107,394.916077 187.891266,385.268524
    C188.431885,381.978302 187.937897,380.339142 184.682999,379.331177
    C177.688400,377.165222 170.659637,375.035309 163.842545,372.382629
    C123.199615,356.567413 93.609566,329.192352 77.026497,288.487091
    C65.536377,260.283081 61.842007,230.772125 61.881378,200.483414
    C61.919716,170.981552 69.652496,143.976395 85.238228,119.041763
    C89.054657,112.936096 91.833771,106.667053 90.385132,98.819595
    C85.464317,72.163010 88.207741,46.129532 97.899452,20.794781
    C100.758865,13.320083 105.017204,7.325575 112.652901,4.112437
    C114.254845,3.438335 115.558754,2.055985 117.000000,0.999998
    C125.354233,1.000000 133.708466,1.000000 142.729309,1.295589
    C144.256668,2.056110 145.067581,2.759277 145.985397,2.951181
    C169.827255,7.936212 191.033203,18.883961 211.537048,31.546093
    C213.527374,32.775215 216.582031,32.998390 219.012329,32.683350
    C237.464981,30.291325 255.813736,26.577808 274.332672,25.342821
    C300.148560,23.621220 325.882202,26.258421 351.165161,31.957251
    C357.133240,33.302467 361.963593,32.694569 367.131073,29.373215
    C385.591705,17.507822 405.270782,8.284060 426.758423,3.227238
    C428.263641,2.873008 429.590302,1.760109 431.000000,1.000001
    C439.354218,1.000000 447.708466,1.000000 456.694122,1.299533
    C458.585205,2.361917 459.762726,3.345589 461.118500,3.850037
    C467.569275,6.250194 472.172760,10.666310 474.841766,16.874941
    C484.843903,40.141876 488.368103,64.514648 485.160370,89.529259
    C483.668274,101.164955 483.825928,111.472626 490.691925,121.774673
    C500.262817,136.135178 505.926178,152.340714 509.202301,169.341553
    C509.648071,171.654831 511.044006,173.785034 512.000000,176.000000
    C512.000000,194.687561 512.000000,213.375122 511.703613,232.748993
    C510.932068,234.811951 510.333618,236.159531 510.000824,237.569794
    C506.568909,252.114212 504.078827,266.952972 499.586731,281.159729
    C490.942352,308.498627 474.931824,331.168823 452.361725,348.956177
    C434.315948,363.177979 413.840302,372.522003 391.595306,378.091095
    C385.074158,379.723694 385.028961,380.138062 386.326904,386.616241
    C387.761292,393.775665 389.696991,401.003845 389.812927,408.227814
    C390.232330,434.361145 390.025940,460.505371 389.955383,486.645233
    C389.929749,496.150879 385.797668,503.583099 377.977203,509.005493
    C376.233307,510.214630 374.654724,511.662231 373.000000,513.000000
    C367.645081,513.000000 362.290131,513.000000 356.467590,513.000000
  z"
												/>
											</svg>
										</span>
									</div>
								</a>
								<p className="text-darktext">{project.description}</p>
							</div>
							<div className="px-6 pt-4 pb-2">
								<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-main bg-pink-500 mr-2 mb-2">
									{project.tech[0]}
								</span>
								<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-main bg-pink-500  mr-2 mb-2">
									{project.tech[1]}
								</span>
								<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-main bg-pink-500 mr-2 mb-2">
									{project.tech[2]}
								</span>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
