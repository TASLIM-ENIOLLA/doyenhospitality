import Link from "next/link";

import ArrowRight from "@/icons/ArrowRight";

import { services, ServiceType } from "./__props/services";

export default function Component() {
	return (
		<section className="py-20">
			<div className="container">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
					<div>
						<div className="space-y-10 lg:space-y-20">
							<div className="text-3xl md:text-5xl md:line-height-lg capitalize font-semibold text-gray-700">
								the services we offer our clients
							</div>
							<div>
								<Link href="/services" className="border-blue-600 text-sm md:text-md font-bold text-blue-600 uppercase border-2 rounded-md tracking-wide px-5 md:px-10 py-4">
									view all services
								</Link>
							</div>
						</div>
					</div>
					<div className="space-y-5 md:space-y-10">
						{services.map(({ title, route }: ServiceType, index: number) => (
							<Link key={index} href={route} className="flex w-full justify-between pb-5 border-b hover:border-blue-600 border-gray-300 transition duration-500 flex-row items-center">
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