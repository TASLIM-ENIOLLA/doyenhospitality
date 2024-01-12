import OperationalAssessment from "../__images/operational-assessment.jpg";
import BusinessCoaching from "../__images/business-coaching.jpg";
import ManagementCoaching from "../__images/management-coaching.jpg";
import WorkshopSeminars from "../__images/workshop-seminars.jpg";

export const services: ServiceType [] = [
	{
		id: "op-assessment",
		image: OperationalAssessment,
		title: "Operational Assessment",
		route: "/services#op-assessment",
		content: "we conduct comprehensive reviews of your current operational processes, identifying areas of inefficiency and suggesting improvements. They also assist in creating standardized operating procedures for different departments to enhance overall efficiency."
	},
	{
		id: "coaching",
		image: BusinessCoaching,
		title: "Coaching & Mentoring",
		route: "/services#coaching-and-mentoring",
		content: "At Doyen Hospitality / Consultancy, coaching and mentoring fuel our success. We unlock potential through personalized coaching and foster collaboration with mentorship. This dynamic approach accelerates professional growth, ensuring consultancy excellence in a fast-paced industry."
	},
	{
		id: "general-brokerage",
		image: ManagementCoaching,
		title: "General Brokerage",
		route: "/services#management-coaching",
		content: "As a consultancy company, we specialize in facilitating connections, negotiations, and transactions across various industries. Let us be your strategic partner in navigating the diverse landscape of opportunities, ensuring your success in the broader spectrum of business ventures."
	},
	{
		id: "conflict-resolution",
		image: WorkshopSeminars,
		title: "Recruitment & Conflict resolution",
		route: "/services#workshops",
		content: "Elevate your team dynamics with our consultancy's expertise in strategic recruitment and effective conflict resolution. We specialize in acquiring top talent and fostering a positive work environment, ensuring your company thrives with the right people. Partner with us to achieve lasting success through optimized workforce management."
	}
];

export type ServiceType = {
	id: string,
	title: string,
	route: string,
	image?: any,
	content?: string
}