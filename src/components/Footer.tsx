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
	                <Image src="/favicon.ico" alt="Logo image" width="100" height="40" />
	              </Link>
	            </div>
	            <p className="capitalize text-md md:text-lg font-normal text-gray-600">
								Doyen Hospitality / Consultancy Company is an international management consultancy company in recruitment and human capital development.
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
									38, Ilorin Street, Off Adelabu Road, Surulere, Lagos.
								</address>
								<Link href="mailto://dadegoke2005@yahoo.com" className="text-md md:text-lg text-gray-600">
									dadegoke2005@yahoo.com
								</Link>
								<Link href="tel:// +234-0802-725-2705" className="text-md md:text-lg text-gray-600">
									 +234-0802-725-2705
								</Link>
								<Link href="tel://+234-0806-260-5130" className="text-md md:text-lg text-gray-600">
									+234-0806-260-5130
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="text-center">
					<p className="capitalize text-md md:text-lg font-normal text-gray-600">
						&copy; { new Date().getFullYear() } Doyen Hospitality Consultant Company. All rights reserved.
					</p>
				</div>
			</div>
		</section>
	);
}