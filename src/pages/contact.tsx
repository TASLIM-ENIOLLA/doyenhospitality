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
					<div className="text-center capitalize text-3xl md:text-4xl lg:text-5xl leading-normal font-semibold text-gray-900">
						contact us
					</div>
					<div className="grid grid-cols-7 gap-10">
						<div className="col-span-2 space-y-10">
							<div className="space-y-2">
								<div className="font-bold text-lg capitalize">phone numbers</div>
								<div className="flex flex-col gap-2">
									<div>
										<Link href="tel://+01-123-4567-890" className="text-md md:text-lg text-gray-600">
											+01-123-4567-890
										</Link>
									</div>
									<div>
										<Link href="tel://+234 (0) 123-4567-890" className="text-md md:text-lg text-gray-600">
											+234 (0) 123-4567-890
										</Link>
									</div>
								</div>
							</div>
							<div className="space-y-2">
								<div className="font-bold text-lg capitalize">email address</div>
								<div className="gap-2">
									<div>
										<Link href="mailto://support@doyenhospitality.com.ng" className="text-md md:text-lg text-gray-600">
											support@doyenhospitality.com.ng
										</Link>
									</div>
									<div>
										<Link href="mailto://contact@doyenhospitality.com.ng" className="text-md md:text-lg text-gray-600">
											contact@doyenhospitality.com.ng
										</Link>
									</div>
								</div>
							</div>
							<div className="space-y-2">
								<div className="font-bold text-lg capitalize">physical address</div>
								<div className="flex flex-col gap-2">
									<address className="text-md md:text-lg text-gray-600">
										123 Fifth Avenue, New York, NY 12004. United States.
									</address>
								</div>
							</div>
						</div>
						<div className="col-span-5">
							<div className="space-y-5">
								<div className="grid grid-cols-2">
									
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