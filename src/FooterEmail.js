import React from "react";

function FooterEmail() {
	return (
		<div className="hidden md:flex md:flex-col md:justify-end md:text-text md:w-24 xxl:right-12 md:bottom-0 md:fixed md:right-0 animate-fade-in">
			<p className="font-mono text-darktext rotate-90 h-max md:my-6 lg:my-12 p-auto hover:text-pink-500 transition ease-in-out duration-500  hover:transition hover:-translate-y-1 hover:ease-in-out hover:duration-200">
				<a
					className="md:text-sm lg:text-md"
					href="mailto:mrbaez427@gmail.com"
					target="_blank"
					rel="noreferrer"
				>
					mrbaez427@gmail.com
				</a>
			</p>

			<hr className="w-px md:h-12 lg:h-32 mx-auto mt-24 bg-darktext"></hr>
		</div>
	);
}

export default FooterEmail;
