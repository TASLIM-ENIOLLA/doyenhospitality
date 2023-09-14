import Link from "next/link";

import ArrowRight from "@/icons/ArrowRight";

export default function Component() {
	return (
		<section className="py-20 mx-auto max-w-[1300px]">
			<div className="container">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
					<div>
						<div className="space-y-5 lg:space-y-20">
							<div className="text-4xl leading-normal capitalize font-semibold text-gray-700">
								we all need help to realize what we want the most
							</div>
							<div>
								<button className="border-blue-600 text-md font-semibold text-blue-600 uppercase border rounded-md tracking-wide px-10 py-4">
									view all services
								</button>
							</div>
						</div>
					</div>
					<div className="space-y-10">
						{wants.map(({ title, route }: WantsType, index: number) => (
							<Link key={index} href={route} className="flex w-full justify-between pb-5 border-b hover:border-blue-600 border-transparent transition duration-500 flex-row items-center">
								<div>
									<div className="text-4xl font-semibold text-gray-900">
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

export type WantType = {
	title: string,
	route: string
}

export const wants: WantType[] = [
	{
		title: "One-on-one / CEO Coaching",
		route: "/what-we-want/ceo-coaching"
	},
	{
		title: "Business Coaching",
		route: "/what-we-want/business-coaching"
	},
	{
		title: "Management Coaching",
		route: "/what-we-want/management-coaching"
	},
	{
		title: "Workshops & Seminars",
		route: "/what-we-want/workshops"
	}
];