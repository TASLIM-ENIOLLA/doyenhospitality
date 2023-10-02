import Link from "next/link";
import Image from "next/image";

import { links } from "./Header";
import { services, ServiceType } from "./Services/__props/services";

type LinkType = {
  title: string,
  route: string
}

export default function Page() {
	return (
		<section className="py-20 bg-gray-100">
			<div className="container space-y-20">
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
					<div className="text-center md:text-left">
						<div className="space-y-5">
							<div className="inline-block">
	              <Link href="/">
	                <Image src="/favicon.ico" alt="Logo image" width="40" height="40" />
	              </Link>
	            </div>
	            <p className="capitalize text-md md:text-lg font-normal text-gray-600">
								Amet suscipit urna turpis in malesuada et sapien semper porttitor netus turpis molestie sit molestie quis vitae.
							</p>
						</div>
					</div>
					<div className="text-center md:text-left">
						<div className="space-y-5">
							<div className="capitalize font-normal text-xl md:text-2xl">quick links</div>
	            <div className="flex flex-col space-y-2">
	            	{links.map(({ title, route }: LinkType, index: number) => (
									<Link
										key={index}
										href={route}
										className="text-md md:text-lg capitalize text-gray-600"
									>
										{title}
									</Link>
	            	))}
							</div>
						</div>
					</div>
					<div className="text-center md:text-left">
						<div className="space-y-5">
							<div className="capitalize font-normal text-xl md:text-2xl">services</div>
	            <div className="flex flex-col space-y-2">
	            	{services.map(({ title, route }: ServiceType, index: number) => (
									<Link
										key={index}
										href={route}
										className="text-md md:text-lg capitalize text-gray-600"
									>
										{title}
									</Link>
	            	))}
							</div>
						</div>
					</div>
					<div className="text-center md:text-left">
						<div className="space-y-5">
							<div className="capitalize font-normal text-xl md:text-2xl">contact info</div>
	            <div className="flex flex-col space-y-2">
								<address className="text-md md:text-lg text-gray-600">
									123 Fifth Avenue, New York, NY 12004. United States.
								</address>
								<Link href="mailto://mail@example.com" className="text-md md:text-lg text-gray-600">
									mail@example.com
								</Link>
								<Link href="tel://+01-123-4567-890" className="text-md md:text-lg text-gray-600">
									+01-123-4567-890
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="text-center">
					<p className="capitalize text-md md:text-lg font-normal text-gray-600">
						&copy; { new Date().getFullYear() } Doyen Hospitality
					</p>
				</div>
			</div>
		</section>
	);
}