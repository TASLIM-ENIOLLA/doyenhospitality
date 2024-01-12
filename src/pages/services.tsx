import { Fragment } from "react";

import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { services, ServiceType } from "@/components/Services/__props/services";

export default function Page() {
	return (
		<Fragment>
			<Header />
			<section className="py-20">
				<div className="container space-y-10 md:space-y-20">
					<div className="text-center capitalize text-3xl md:text-4xl lg:text-5xl leading-normal font-semibold text-blue-600">
						our services
					</div>
					<div className="space-y-5 md:space-y-10">
						{services.map(({ id, title, route, image, content }: ServiceType, index: number) => (
							<div
								id={id}
								key={index}
								className={`py-5 flex flex-wrap gap-5 md:gap-0 ${index % 2 ? "flex-row-reverse" : "flex-row"}`}
							>
								<div className="w-full md:w-2/5">
									<div className="relative h-full min-h-[300px]">
										<img
											src={image.src}
											alt={`${title} image`}
											className="w-full h-full shadow-lg rounded-xl"
											style={{ objectFit: "cover", objectPosition: "center" }}
										/>
									</div>
								</div>
								<div className="w-full md:w-3/5">
									<div className={`${index % 2 ? "md:pr-10" : "md:pl-10"} space-y-5`}>
										<div className="text-xl md:text-3xl font-semibold text-gray-900">
											{title}
										</div>
										<div className="leading-6 md:leading-9 text-md md:text-xl text-gray-700">
											{content}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
      <Footer />
		</Fragment>
	);
}