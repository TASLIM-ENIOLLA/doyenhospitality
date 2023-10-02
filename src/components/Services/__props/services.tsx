import OperationalAssessment from "../__images/operational-assessment.jpg";
import BusinessCoaching from "../__images/business-coaching.jpg";
import ManagementCoaching from "../__images/management-coaching.jpg";
import WorkshopSeminars from "../__images/workshop-seminars.jpg";

export const services: ServiceType [] = [
	{
		id: "ceo-coaching",
		image: OperationalAssessment,
		title: "Operational Assessment",
		route: "/services#ceo-coaching",
		content: "Hospitality consultants conduct comprehensive reviews of your current operational processes, identifying areas of inefficiency and suggesting improvements. They also assist in creating standardized operating procedures for different departments to enhance overall efficiency."
	},
	{
		id: "business-coaching",
		image: BusinessCoaching,
		title: "Business Coaching",
		route: "/services#business-coaching",
		content: "These consultants delve into your pricing strategies, analyzing them closely to provide recommendations for revenue maximization. They also work on optimizing your distribution channels by considering factors such as demand fluctuations and market conditions."
	},
	{
		id: "management-coaching",
		image: ManagementCoaching,
		title: "Management Coaching",
		route: "/services#management-coaching",
		content: "Hospitality consultants perform in-depth market research to identify emerging trends, potential areas of competition, and lucrative opportunities. They then develop targeted strategies to attract specific customer segments, helping you stay ahead in the market."
	},
	{
		id: "workshops",
		image: WorkshopSeminars,
		title: "Workshops & Seminars",
		route: "/services#workshops",
		content: "Consultants in this field not only recommend but also implement cutting-edge technology solutions, such as advanced property management systems (PMS). They ensure these systems are used efficiently for tasks like managing reservations and enhancing guest services."
	}
];

export type ServiceType = {
	id: string,
	title: string,
	route: string,
	image?: any,
	content?: string
}