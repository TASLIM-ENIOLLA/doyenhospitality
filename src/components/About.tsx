import Image from "next/image";

export default function Page() {
	return (
		<section className="py-20">
			<div className="container space-y-5 md:space-y-10 lg:space-y-20">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10">
					<div>
						<div className="space-y-5 lg:space-y-10">
							<div className="uppercase text-md md:text-lg font-semibold text-blue-600">
								about me
							</div>
							<div className="text-3xl md:text-4xl lg:text-5xl leading-normal font-semibold text-gray-700">
								I am Lisa Martin. I help entrepreneurs build their dreams
							</div>
						</div>
					</div>
					<div className="space-y-5 lg:space-y-10">
						<div className="space-y-5 md:space-y-10">
							<div className="text-md md:text-xl tracking-wide leading-normal font-normal text-gray-600">
								Diam lorem nulla suspendisse id ullamcorper lobortis id sit nisl purus tellus curabitur leo volutpat vitae quisque eros, gravida magna diam id elit facilisi gravida at non consectetur nulla leo congue in netus ut et habitant massa id libero turpis.
							</div>
							<div>
								<button className="border-blue-600 text-sm md:text-md font-semibold text-blue-600 uppercase border rounded-md tracking-wide px-5 md:px-10 py-4">
									read more
								</button>
							</div>
						</div>
					</div>
				</div>
				{/* <div className="flex bg-red-400 flex-row items-center flex-wrap gap-10 lg:gap-20 justify-center"> */}
				<div className="grid grid-cols-5 gap-10 lg:gap-20">
					<div className="col-span-5 lg:col-span-2 relative">
						<Image
							width="500"
							height="600"
							quality={100}
							alt="signature"
							className="block bg-red-400"
							style={{objectFit: "cover", objectPosition: "top"}}
							src="/images/business-consulting-woman-figure-img-bg.jpg"
						/>
					</div>
					<div className="col-span-5 lg:col-span-3 space-y-10">
						<div className="text-2xl lg:text-4xl leading-normal font-semibold text-gray-700">
							Enim accumsan cras semper metus ante vitae massa aliquam nec, diam pulvinar nisl, egestas quam pharetra nunc magna consequat orci viverra quis aliquam tortor
						</div>
						<div>
							<Image
								width="100"
								height="35"
								alt="signature"
								src="/images/signature.png"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}