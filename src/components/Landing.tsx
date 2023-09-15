import Link from "next/link";
import Image from "next/image";

export default function Component() {
	return (
		<section className="min-h-screen flex flex-col">
      <header className="shadow-md border-gray-400 p-4" style={{backdropFilter: "blur(7px)"}}>
        <div className="sm:container flex flex-row justify-between items-center">
          <div className="flex flex-row gap-10 items-center">
            <div>
              <Link href="/">
                <Image src="/favicon.ico" alt="Logo image" width="35" height="35" />
              </Link>
            </div>
            <div className="hidden md:flex flex-row text-white gap-10">
              {links.map(({ title, route }: LinkType, index: number) => (
                <Link
                  key={index}
                  href={route}
                  className="font-medium capitalize"
                >
                  {title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <button className="hidden md:inline-block text-white border-2 rounded-md border-white font-medium uppercase text-sm px-5 py-3">
              work with me
            </button>
            <button className="md:hidden text-white border-2 rounded-md border-white uppercase text-5xl p-5">
            </button>
          </div>
        </div>
      </header>
      <main className="flex-1 flex flex-col justify-center">
        <div className="container">
          <div className="flex flex-row flex-wrap justify-end">
            <div className="sm:3/4 lg:w-1/2 space-y-10">
              <div className="font-medium uppercase text-lg text-white">lisa martin</div>
              <div className="space-y-5">
                <div className="font-medium leading-normal capitalize text-5xl text-white">
                  helping you rebuild your inner resilience
                </div>
                <div className="capitalize font-semibold text-white text-lg">
                  Pellentesque odio aliquam vitae amet, elementum at urna facilisis purus, integer nam libero pharetra viverra et dolor tellus, eget commodo tellus tempus vitae.
                </div>
              </div>
              <div>
                <button className="text-black bg-gradient-to-l from-gray-400 to-white rounded-md font-medium uppercase text-md px-10 py-4">
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

type LinkType = {
  title: string,
  route: string
}

export const links: LinkType[] = [
  {
    title: "home",
    route: "/"
  },
  {
    title: "about",
    route: "/about"
  },
  {
    title: "services",
    route: "/services"
  },
  {
    title: "contact",
    route: "/contact"
  },
];