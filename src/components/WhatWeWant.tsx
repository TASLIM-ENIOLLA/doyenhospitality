import Link from "next/link";

import ArrowRight from "@/icons/ArrowRight";

export default function Component() {
	return (
		<section className="py-20 mx-auto max-w-[1300px]">
			<div className="container">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
					<div>
						<div className="space-y-5 lg:space-y-20">
							<div className="text-3xl md:text-4xl leading-normal capitalize font-semibold text-gray-700">
								we all need help to realize what we want the most
							</div>
							<div>
								<button className="border-blue-600 text-sm md:text-md font-semibold text-blue-600 uppercase border rounded-md tracking-wide px-5 md:px-10 py-4">
									view all services
								</button>
							</div>
						</div>
					</div>
					<div className="space-y-5 md:space-y-10">
						{wants.map(({ title, route }: WantType, index: number) => (
							<Link key={index} href={route} className="flex w-full justify-between pb-5 border-b hover:border-blue-600 border-transparent transition duration-500 flex-row items-center">
								<div>
									<div className="text-xl md:text-3xl font-semibold text-gray-900">
										{title}
									</div>
								</div>
								<div className="text-gray-600">
									<ArrowRight />
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

type WantType = {
	id: string,
	title: string,
	route: string,
	image?: any,
	content?: string
}

export const wants: WantType[] = [
	{
		id: "ceo-coaching",
		title: "Operational Assessment",
		route: "/services#ceo-coaching",
		content: "Hospitality consultants conduct comprehensive reviews of your current operational processes, identifying areas of inefficiency and suggesting improvements. They also assist in creating standardized operating procedures for different departments to enhance overall efficiency."
	},
	{
		id: "business-coaching",
		title: "Business Coaching",
		route: "/services#business-coaching",
		content: "These consultants delve into your pricing strategies, analyzing them closely to provide recommendations for revenue maximization. They also work on optimizing your distribution channels by considering factors such as demand fluctuations and market conditions."
	},
	{
		id: "management-coaching",
		title: "Management Coaching",
		route: "/services#management-coaching",
		content: "Hospitality consultants perform in-depth market research to identify emerging trends, potential areas of competition, and lucrative opportunities. They then develop targeted strategies to attract specific customer segments, helping you stay ahead in the market."
	},
	{
		id: "workshops",
		title: "Workshops & Seminars",
		route: "/services#workshops",
		content: "Consultants in this field not only recommend but also implement cutting-edge technology solutions, such as advanced property management systems (PMS). They ensure these systems are used efficiently for tasks like managing reservations and enhancing guest services."
	}
];