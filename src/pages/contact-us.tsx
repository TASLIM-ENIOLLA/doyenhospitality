import { Fragment } from "react";

import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Page() {
	return (
		<Fragment>
			<Header />
			<section className="py-20">
				<div className="container space-y-10 md:space-y-20">
					<div className="text-center capitalize text-3xl md:text-4xl lg:text-5xl leading-normal font-semibold text-blue-600">
						contact us
					</div>
					<div className="grid grid-cols-7 gap-10">
						<div className="col-span-7 lg:col-span-3 space-y-10">
							<div className="space-y-2 text-center">
								<div className="font-bold text-lg capitalize">phone numbers</div>
								<div className="flex flex-col gap-2">
									<div>
										<Link href="tel://+01-123-4567-890" className="text-md md:text-lg text-gray-600">
											+01 123-4567-890
										</Link>
									</div>
									<div>
										<Link href="tel://+234 (0) 123-4567-890" className="text-md md:text-lg text-gray-600">
											+234 (0) 123-4567-890
										</Link>
									</div>
								</div>
							</div>
							<div className="space-y-2 text-center">
								<div className="font-bold text-lg capitalize">email address</div>
								<div className="space-y-2">
									<div>
										<Link href="mailto://info@doyenhospitality.com.ng" className="text-md md:text-lg text-gray-600">
											info@doyenhospitality.com.ng
										</Link>
									</div>
									<div>
										<Link href="mailto://ceo@doyenhospitality.com.ng" className="text-md md:text-lg text-gray-600">
											ceo@doyenhospitality.com.ng
										</Link>
									</div>
								</div>
							</div>
							<div className="space-y-2 text-center">
								<div className="font-bold text-lg capitalize">physical address</div>
								<div className="flex flex-col gap-2">
									<address className="text-md md:text-lg text-gray-600">
										123 Fifth Avenue, New York, NY 12004. United States.
									</address>
								</div>
							</div>
						</div>
						<div className="col-span-7 lg:col-span-4">
							<div className="border rounded-lg px-5 md:px-10 py-10">
								<div className="space-y-10">
									<div className="text-center capitalize text-xl md:text-2xl lg:text-3xl leading-normal font-semibold text-gray-900">
										leave a message
									</div>
									<div className="grid grid-cols-2 gap-10">
										<div className="col-span-2">
											<div className="space-y-1">
												<div className="capitalize font-bold text-sm md:text-lg">full name</div>
												<input type="text" className="block w-full p-3 border rounded" />
											</div>
										</div>
										<div className="col-span-2 md:col-span-1">
											<div className="space-y-1">
												<div className="capitalize font-bold text-sm md:text-lg">email address</div>
												<input type="text" className="block w-full p-3 border rounded" />
											</div>
										</div>
										<div className="col-span-2 md:col-span-1">
											<div className="space-y-1">
												<div className="capitalize font-bold text-sm md:text-lg">phone number</div>
												<input type="text" className="block w-full p-3 border rounded" />
											</div>
										</div>
										<div className="col-span-2">
											<div className="space-y-1">
												<div className="capitalize font-bold text-sm md:text-lg">message</div>
												<textarea className="block w-full p-3 border rounded resize-none" rows={6} />
											</div>
										</div>
										<div className="col-span-2">
											<button className="block w-full p-5 font-bold capitalize bg-black text-white rounded shadow text-sm md:text-lg">
												send message
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</Fragment>
	);
}