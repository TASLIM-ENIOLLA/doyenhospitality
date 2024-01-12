import { Fragment } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <Fragment>
      <Header />
      <section className="py-10 md:py-20">
        <div className="container space-y-10 md:space-y-20">
          <div className="text-center capitalize text-3xl md:text-4xl lg:text-5xl leading-normal font-semibold text-blue-600">
            about us
          </div>
          <div className="flex flex-row flex-wrap">
            <div className="w-full md:w-3/6">
              <div className="min-h-[200px]">
                <div className="h-full">
                  <img src="/images/about-us.jpg" alt="About us image" className="h-full w-full" />
                </div>
              </div>
            </div>
            <div className="w-full md:w-3/6 space-y-10">
              {content.map(({ title, body, bullets }, index: number) => (
                <div key={index} className="space-y-3">
                  <div className="uppercase text-xl md:text-xl leading-normal font-semibold">
                    {title}
                  </div>
                  {body ? (
                    <p className="text-md md:text-xl">{body}</p>
                  ) : (
                    <ul className="space-y-5">
                      {bullets?.map(({ title, content }: { title: string, content: string }, index: number) => (
                        <li key={index} className="list-inside list-disc">
                          <span className="text-md md:text-xl font-bold">{title}: </span>  
                          <span className="text-md md:text-xl">{content}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
}

type ContentType = {
  title: string,
  body?: string,
  bullets?: {
    title: string,
    content: string
  }[]
}

const content: ContentType [] = [
  {
    title: "about us",
    body: "Welcome to Doyen Hospitality / Consultancy Company, where we redefine success through our specialized services in strategic recruitment and conflict resolution. At the heart of our mission is the commitment to elevating team dynamics and fostering a positive work environment. With a keen focus on talent acquisition, we bring unparalleled expertise in identifying and attracting the right individuals to enhance your workforce. Our strategic recruitment process goes beyond matching skills; we align values and cultural fit to ensure a cohesive and thriving team."
  },
  {
    title: "Our Expertise",
    body: "At Doyen Hospitality / Consultancy Company, we bring a wealth of experience and expertise to the table. Our team of seasoned professionals possess a deep understanding of the nuances that make the industry unique. We have an average of 15 years of hands-on experience in our field of expertise, and have been selected for our specific background in different property types and positions in the industry."
  },
  {
    title: "Our Mission",
    body: "Our mission is simple yet profound: to empower your venture to reach its full potential. We believe that every establishment, regardless of its size or location, has the potential to excel. We're here to provide the knowledge, strategies, and support necessary to turn that potential into reality."
  },
  {
    title: "What Sets Us Apart",
    bullets: [
      {
        title: "Customized Solutions",
        content: "We understand that no two businesses are alike. That's why we take a tailored approach to each client, developing solutions that align with your unique goals and circumstances."
      },
      {
        title: "Innovation",
        content: "In a fast-paced industry, staying ahead means embracing innovation. We keep our finger on the pulse of emerging trends and technologies, ensuring that your business remains competitive and relevant."
      },
      {
        title: "Passion for Service",
        content: "We are built on a foundation of service. Our team is passionate about delivering exceptional service to our clients, going the extra mile to exceed your expectations."
      },
    ]
  },
];