import Link from "next/link";
import Image from "next/image";

import { links } from "./Landing";
import { wants } from "./WhatWeWant";

type WantType = {
	title: string,
	route: string
}

type LinkType = {
  title: string,
  route: string
}

export default function Page() {
	return (
		<section className="py-20">
			<div className="container space-y-20">
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
					<div className="text-center md:text-left">
						<div className="space-y-5">
							<div className="inline-block">
	              <Link href="/">
	                <Image src="/favicon.ico" alt="Logo image" width="40" height="40" />
	              </Link>
	            </div>
	            <p className="capitalize text-lg font-normal text-gray-600">
								Amet suscipit urna turpis in malesuada et sapien semper porttitor netus turpis molestie sit molestie quis vitae.
							</p>
						</div>
					</div>
					<div className="text-center md:text-left">
						<div className="space-y-5">
							<div className="capitalize font-normal text-2xl">quick links</div>
	            <div className="flex flex-col space-y-2">
	            	{links.map(({ title, route }: LinkType, index) => (
									<Link
										key={index}
										href={route}
										className="text-lg capitalize text-gray-600"
									>
										{title}
									</Link>

	            	))}
							</div>
						</div>
					</div>
					<div className="text-center md:text-left">
						<div className="space-y-5">
							<div className="capitalize font-normal text-2xl">services</div>
	            <div className="flex flex-col space-y-2">
	            	{wants.map(({ title, route }: WantType, index) => (
									<Link
										key={index}
										href={route}
										className="text-lg capitalize text-gray-600"
									>
										{title}
									</Link>

	            	))}
							</div>
						</div>
					</div>
					<div className="text-center md:text-left">
						<div className="space-y-5">
							<div className="capitalize font-normal text-2xl">contact info</div>
	            <div className="flex flex-col space-y-2">
								<address className="text-lg text-gray-600">
									123 Fifth Avenue, New York, NY 12004. United States.
								</address>
								<Link href="mailto://mail@example.com" className="text-lg text-gray-600">
									mail@example.com
								</Link>
								<Link href="tel://+01-123-4567-890" className="text-lg text-gray-600">
									+01-123-4567-890
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="text-center">
					<p className="capitalize text-lg font-normal text-gray-600">
						&copy; 2023 Business Coaching & Consulting
					</p>
				</div>
			</div>
		</section>
	);
}