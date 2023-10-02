import Image from "next/image";

export default function Page() {
	return (
		<section className="py-20">
			<div className="container space-y-10">
				<div>
					<div className="space-y-3 md:space-y-5">
						<div className="uppercase text-md md:text-lg font-semibold text-blue-600">
							testimonials
						</div>
						<div className="text-3xl md:text-4xl lg:text-5xl leading-normal font-semibold text-gray-900">
							What clients are saying
						</div>
					</div>
				</div>
				<div className="grid gap-10 grid-cols-1 lg:grid-cols-2">
					{testimonials.map(({ testimony, clientName}: TestimonialsType, index: number) => (
						<div key={index}>
							<div className="bg-white rounded-lg h-full hover:shadow-lg py-10 lg:py-20 px-5 lg:px-10">
								<div className="flex flex-col lg:flex-row flex-wrap gap-10">
									<div>
										<Image
											width="80"
											height="80"
											className="rounded-full"
											alt="testimonial picture"
											src={`/images/testimonial-${(index % 4) + 1}.jpg`}
										/>
									</div>
									<div className="flex-1 space-y-5">
										<div className="font-medium leading-6 md:leading-9 text-md md:text-xl text-gray-700">
											&quot;{testimony}&quot;
										</div>
										<div className="uppercase font-medium text-gray-500 text-md md:text-lg">
											{clientName}
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>	
			</div>	
		</section>	
	);
}

type TestimonialsType = {
	testimony: string,
	clientName: string,
}

const testimonials: TestimonialsType[] = [
	{
		testimony: "Justo vestibulum risus imperdiet consectetur consectetur pretium urna augue etiam risus accumsan volutpat urna, eu semper enim, est aliquam laoreet urna fringilla viverra.",
		clientName: "daniel johnson"
	},
	{
		testimony: "Ullamcorper enim at amet eget faucibus morbi ornare feugiat posuere blandit donec sit quis lectus eget faucibus scelerisque duis.",
		clientName: "julia michele"
	},
	{
		testimony: "Semper duis tellus orci nulla nibh elementum purus, pretium facilisi vel eget amet, diam lacinia tempus tristique euismod viverra fusce risus euismod amet.",
		clientName: "robert green"
	},
	{
		testimony: "Vitae erat pretium, interdum et, massa, nunc rutrum at lectus lectus aenean etiam nulla nibh ipsum commodo eu nibh scelerisque pharetra, sem netus risus.",
		clientName: "oliver goodman"
	},
];