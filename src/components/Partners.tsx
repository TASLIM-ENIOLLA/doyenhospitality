import Image from "next/image";

export default function Component() {
	return (
		<section className="py-20">
			<div className="container space-y-5 lg:space-y-10">
				<div className="uppercase text-md md:text-lg font-semibold text-blue-600 text-center">
					our partners
				</div>
				<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
					{Array(8).fill("").map((_: string, index: number) => (
						<div key={index}>
							<div className="hover:shadow-lg transition ease-in-out duration-500 flex flex-col justify-center items-center py-10">
								<Image className="block w-full max-w-[200px]" alt={`logo-${index + 1}`} width="200" height="80" src={`/images/logo-${index + 1}.svg`} />
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
} 