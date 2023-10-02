import Link from "next/link";
import Image from "next/image";

import Header from "./Header";

export default function Component() {
	return (
		<section className="min-h-[60vh] md:min-h-[80vh] flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col justify-center py-5">
        <div className="container">
          <div className="flex flex-row flex-wrap justify-end">
            <div className="sm:3/4 lg:w-1/2 space-y-7 md:space-y-10">
              <div className="font-medium uppercase text-md text-white">doyen hospitality</div>
              <div className="space-y-5">
                <div className="font-bold md:font-medium _leading-10 capitalize text-3xl md:text-5xl text-white">
                  helping you rebuild your inner resilience
                </div>
                <div className="capitalize font-semibold text-white text-md md:text-lg">
                  Pellentesque odio aliquam vitae amet, elementum at urna facilisis purus, integer nam libero pharetra viverra et dolor tellus, eget commodo tellus tempus vitae.
                </div>
              </div>
              <div>
                <button className="text-black bg-white rounded-md font-bold uppercase text-md px-10 py-4">
                  work with me
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <style jsx>{`
        section {
          background: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(/images/business-consulting-hero-img-bg.jpg);
          background-size: cover;
          background-position: top;
          background-attachment: fixed;
        }
      `}</style>
    </section>
	);
}
