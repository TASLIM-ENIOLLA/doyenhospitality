import Link from "next/link";

export default function Page() {
	return (
		<section className="py-20">
			<div className="container space-y-10">
				<div className="max-w-[600px] mx-auto">
					<div className="space-y-7">
						<div className="text-3xl md:text-4xl lg:text-5xl capitalize font-semibold md:line-height-lg text-center">
							If You Have Any Question, Feel Free to Call
							<Link style={{ fontSize: "inherit" }} href="tel://+1 (317) 945-9468">
								&nbsp;+1 (317) 945-9468
							</Link>
						</div>
						<div className="capitalize text-md md:text-lg font-normal font-normal text-gray-600 text-center">
							Reach out to us to know more about what we do
						</div>
						<div className="text-center">
							<Link href="/contact-us" className="px-10 py-4 uppercase text-md md:text-lg font-semibold rounded-md text-white bg-gradient-to-r from-blue-600 to-blue-800">
								let&#39;s work together
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}