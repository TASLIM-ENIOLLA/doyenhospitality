import Link from "next/link";
import Image from "next/image";
import { Fragment, useMemo, useState } from "react";

export default function Page() {
  const [sideBar, setSideBar] = useState <boolean> (false)

	return (
    <Fragment>
      <header
        className="sticky top-0 left-0 shadow-md bg-white border-gray-400 p-4"
        style={{
          zIndex: 10,
          backdropFilter: "blur(7px)",
          color: "color-contrast(#505050 vs #fff, #000)"
        }}
      >
        <div className="sm:container flex flex-row justify-between items-center">
          <div className="flex flex-row gap-20 items-center">
            <div>
              <Link href="/">
                <Image src="/favicon.ico" alt="Logo image" width="95" quality={100} height="35" />
              </Link>
            </div>
            <div className="hidden md:flex flex-row gap-10">
              {links.map(({ title, route }: LinkType, index: number) => (
                <Link
                  key={index}
                  href={route}
                  className="font-semibold uppercase"
                  style={{
                    color: "color-contrast(#505050 vs #fff, #000)"
                  }}
                >
                  {title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <Link href="/contact-us" className="hidden md:inline-block border-2 rounded-md border-black font-medium uppercase text-sm px-5 py-3">
              work with me
            </Link>
            <button onClick={() => setSideBar(true)} className="md:hidden border-2 rounded-md border-black px-4 py-2">
              <span className="bi-border-width text-lg"></span>
            </button>
          </div>
        </div>
      </header>
      {useMemo(() => {
        if(sideBar) return (
          <div className="w-screen fixed top-0 left-0 pr-20" style={{ backdropFilter: "blur(3px)", zIndex: 12, }}>
            <div className="h-screen max-w-[350px] flex flex-col p-5 space-y-5 shadow-lg bg-gray-100 border-r border-gray-300">
              <div className="flex-1 overflow-y-auto">
                <div className="space-y-5">
                  <div className="capitalize text-md md:text-lg text-blue-600 font-semibold">
                    quick links
                  </div>
                  <div className="space-y-5">
                    {links.map(({ title, route }: LinkType, index: number) => (
                      <Link
                        key={index}
                        href={route}
                        className="block p-5 rounded-lg bg-gray-200 font-medium text-sm md:text-lg capitalize"
                      >
                        {title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="">
                <button onClick={() => setSideBar(false)} className="block w-full p-5 rounded-lg bg-gray-400 text-sm md:text-lg capitalize font-medium">
                  close
                </button>
              </div>
            </div>
          </div>
        )
      }, [sideBar])}
    </Fragment>
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
    title: "services",
    route: "/services"
  },
  {
    title: "about us",
    route: "/about-us"
  },
  {
    title: "contact",
    route: "/contact-us"
  },
];