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
    body: "Welcome to Doyen Hospitality Consultant Company, your trusted partner in elevating the world of hospitality. With a passion for excellence and a commitment to innovation, we are dedicated to helping hospitality businesses thrive in a competitive and ever-evolving industry. We are driven by a strong business development DNA and entrepreneurial spirit, always looking for new ways to grow and improve. We believe that change leads the way to success. Hospitality is all about people, and in a marketplace based on online reputation and guest reviews, a hotel with an individual character will have a competitive edge, gaining in global reach and exposure. We are passionate to create one of a kind experiences for our guests. And our team of hospitality ambassadors, combines personal interaction with creative ideas, to differentiate our hotels. And on-top we have a single-minded commitment to profitability."
  },
  {
    title: "Our Expertise",
    body: "At Doyen Hospitality Consultant Company, we bring a wealth of experience and expertise to the table. Our team of seasoned hospitality professionals possesses a deep understanding of the nuances that make the industry unique. We have an average of 15 years of hands-on experience in our field of expertise, and have been selected for their specific background in different property types and positions in the hospitality industry. From boutique hotels to international resorts, from fine dining establishments to trendy cafes, we've had the privilege of working with a diverse range of clients, each with their own distinct challenges and opportunities."
  },
  {
    title: "Our Mission",
    body: "Our mission is simple yet profound: to empower your hospitality venture to reach its full potential. We believe that every establishment, regardless of its size or location, has the potential to excel. We're here to provide the knowledge, strategies, and support necessary to turn that potential into reality."
  },
  {
    title: "What Sets Us Apart",
    bullets: [
      {
        title: "Customized Solutions",
        content: "We understand that no two hospitality businesses are alike. That's why we take a tailored approach to each client, developing solutions that align with your unique goals and circumstances."
      },
      {
        title: "Innovation",
        content: "In a fast-paced industry, staying ahead means embracing innovation. We keep our finger on the pulse of emerging trends and technologies, ensuring that your business remains competitive and relevant."
      },
      {
        title: "Passion for Service",
        content: "Hospitality is built on a foundation of service, and so are we. Our team is passionate about delivering exceptional service to our clients, going the extra mile to exceed your expectations."
      },
    ]
  },
];