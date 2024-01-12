export default function Component() {
	return (
		<section className="py-20">
			<div className="container space-y-10 lg:space-y-20">
				<div className="capitalize text-3xl lg:text-5xl font-bold text-gray-700 text-center">what we do</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-10">
					{discussion.map(({ title, body }: DiscussionType, index: number) => (
						<div key={index}>
							<div className="border-t border-transparent hover:border-blue-600 transition duration-500 py-5 space-y-3 h-full">
								<div className="text-blue-600 font-semibold text-md md:text-lg">{(index + 1).toString().padStart(2, "0")}.</div>
								<div className="capitalize text-xl md:text-2xl font-bold text-gray-700">{title}</div>
								<div className="capitalize text-md md:text-lg font-normal text-gray-600">{body}</div>
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
		title: "Operational Efficiency Enhancement",
		body: "Hospitality consultants streamline operations within a hotel or restaurant, identifying inefficiencies and suggesting improvements to enhance service quality and profitability."
	},
	{
		title: "Revenue Management Strategies",
		body: "They develop pricing strategies, forecast demand, and optimize distribution channels to maximize revenue for the establishment, ensuring sustainable financial growth."
	},
	{
		title: "Market Research and Analysis",
		body: "Hospitality consultants conduct market research to identify trends, opportunities, and competition, enabling businesses to stay competitive and adapt to changing market dynamics."
	},
	{
		title: "Hospitality Technology Integration",
		body: "They recommend, implement, and optimize technology solutions such as property management systems (PMS) to improve reservations, guest services, and data management."
	},
	{
		title: "Guest Experience Enhancement",
		body: "These consultants focus on enhancing guest satisfaction by training staff in exceptional customer service, analyzing feedback, and implementing strategies for improvement."
	},
	{
		title: "Cost Control and Budgeting",
		body: "They analyze expenses, identify areas for cost reduction, and create budgets to ensure effective cost control without compromising service quality."
	},
	{
		title: "Marketing and Branding Strategies",
		body: "Consultants develop branding and marketing strategies, create campaigns, and manage online presence to attract and retain customers, building a strong brand identity."
	},
	{
		title: "Food and Beverage Management",
		body: "They review menu offerings, analyze food and beverage costs, and recommend menu changes and sourcing strategies to maximize profitability."
	},
	{
		title: "Quality Assurance and Compliance",
		body: "Consultants ensure compliance with industry regulations, conduct quality audits, and implement health and safety protocols to maintain standards."
	},
	{
		title: "Strategic Planning",
		body: "Hospitality consultants develop long-term business plans, growth strategies, and provide guidance on expansion, mergers, and acquisitions to drive sustainable success."
	},
];