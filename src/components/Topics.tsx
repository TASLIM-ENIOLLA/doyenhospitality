export default function Component() {
	return (
		<section className="py-20">
			<div className="container space-y-10 lg:space-y-20">
				<div className="capitalize text-4xl lg:text-5xl font-bold text-gray-700 text-center">what i discuss</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
					{discussion.map(({ title, body }: DiscussionType, index: number) => (
						<div key={index}>
							<div className="border-t border-transparent hover:border-blue-600 transition duration-500 py-5 space-y-3 h-full">
								<div className="text-blue-600 font-semibold text-lg">0{index + 1}.</div>
								<div className="capitalize text-2xl font-bold text-gray-700">{title}</div>
								<div className="capitalize text-lg font-normal text-gray-600">{body}</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

type DiscussionType = {
	title: string,
	body: string,
}

const discussion: DiscussionType[] = [
	{
		title: "motivation",
		body: "Lorem dictumst vitae commodo sagittis consectetur mi, varius id gravida tincidunt faucibus."
	},
	{
		title: "vision",
		body: "Adipiscing id in lectus hendrerit mus in ut vulputate scelerisque fermentum."
	},
	{
		title: "strategy",
		body: "Commodo sit in odio velit non lacus, rhoncus, commodo faucibus ac nec."
	},
	{
		title: "leadership",
		body: "Turpis metus orci massa, praesent vitae eget purus pulvinar augue et est."
	},
	{
		title: "self improvement",
		body: "Porttitor nibh eget tellus sed odio diam sit ultrices sit enim viverra."
	},
	{
		title: "self awareness",
		body: "Risus tincidunt tempor, velit hendrerit cras neque adipiscing pharetra, vitae consequat."
	},
	{
		title: "confidence",
		body: "Mus a pulvinar lectus cum ultricies nibh mi ac blandit phasellus porttitor."
	},
	{
		title: "life skills",
		body: "Orci vestibulum, massa morbi eu nec ultrices integer nulla feugiat morbi."
	},
];