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
		title: "Client Needs Assessment",
		body: "Understand unique client needs to provide tailored brokerage services. Market Research: Stay informed about market trends, investment opportunities, and regulatory changes."
	},
	{
		title: "Job Analysis",
		body: "Clearly define roles and responsibilities for open positions within the organization. Sourcing: Identify and attract potential candidates through various channels."
	},
	{
		title: "Communication",
		body: "Facilitate open and honest communication between conflicting parties to understand perspectives."
	},
	{
		title: "Mediation",
		body: "Intervene impartially to help parties find common ground and reach mutually agreeable solutions."
	},
	{
		title: "Follow up",
		body: "Monitor resolution implementation and address any lingering issues to ensure long-term success."
	},
	{
		title: "Skill development",
		body: "Design and implement training programs to enhance specific skills or knowledge areas."
	},
	{
		title: "Feedback mechanism",
		body: "Conduct regular feedback sessions to provide constructive criticism and guide continuous improvement."
	},
	{
		title: "Feedback mechanism",
		body: "Conduct regular feedback sessions to provide constructive criticism and guide continuous improvement."
	},
	{
		title: "Performance metrics",
		body: "Establish key performance indicators (KPIs) to measure the success and efficiency of operational processes."
	},
	{
		title: "Process mapping",
		body: "Visualize workflows to pinpoint bottlenecks and inefficiencies in the sequence of activities."
	},
];

/**
 * 
 * 
 * Operational Assessment:

Data Collection and Analysis: Gather relevant data on processes, performance, and efficiency to identify strengths and weaknesses.
Process Mapping: Visualize workflows to pinpoint bottlenecks and inefficiencies in the sequence of activities.
Risk Assessment: Evaluate potential operational risks and develop strategies for mitigation.
Performance Metrics: Establish key performance indicators (KPIs) to measure the success and efficiency of operational processes.
Coaching & Mentoring:

Needs Analysis: Identify specific skills and knowledge gaps for individuals or teams.
Goal Setting: Collaboratively set clear and achievable goals for improvement and professional development.
Feedback Mechanism: Conduct regular feedback sessions to provide constructive criticism and guide continuous improvement.
Skill Development: Design and implement training programs to enhance specific skills or knowledge areas.
General Brokerage:

Client Needs Assessment: Understand unique client needs to provide tailored brokerage services.
Market Research: Stay informed about market trends, investment opportunities, and regulatory changes.
Transaction Execution: Efficiently execute buy or sell orders considering market conditions and client objectives.
Compliance Management: Ensure adherence to legal and regulatory requirements governing brokerage activities.
Recruitment:

Job Analysis: Clearly define roles and responsibilities for open positions within the organization.
Sourcing: Identify and attract potential candidates through various channels.
Screening and Shortlisting: Review resumes, conduct initial interviews, and shortlist candidates based on qualifications.
Interview and Selection: Conduct in-depth interviews, assess cultural fit, and make informed hiring decisions.
Conflict Resolution:

Identification: Recognize and acknowledge conflicts within the organization.
Communication: Facilitate open and honest communication between conflicting parties to understand perspectives.
Mediation: Intervene impartially to help parties find common ground and reach mutually agreeable solutions.
Follow-up: Monitor resolution implementation and address any lingering issues to ensure long-term success.
 */