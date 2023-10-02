import Link from "next/link";
import Image from "next/image";

export default function Page() {
	return (
		<header
      className="shadow-md bg-white bg-opacity-50 border-gray-400 p-4"
      style={{
        backdropFilter: "blur(7px)",
        color: "color-contrast(#505050 vs #fff, #000)"
      }}
    >
      <div className="sm:container flex flex-row justify-between items-center">
        <div className="flex flex-row gap-10 items-center">
          <div>
            <Link href="/">
              <Image src="/favicon.ico" alt="Logo image" width="35" height="35" />
            </Link>
          </div>
          <div className="hidden md:flex flex-row gap-10">
            {links.map(({ title, route }: LinkType, index: number) => (
              <Link
                key={index}
                href={route}
                className="font-medium capitalize"
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
          <button className="hidden md:inline-block border-2 rounded-md border-black font-medium uppercase text-sm px-5 py-3">
            work with me
          </button>
          <button className="md:hidden border-2 rounded-md border-black px-4 py-2">
            <span className="bi-border-width text-lg"></span>
          </button>
        </div>
      </div>
    </header>
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