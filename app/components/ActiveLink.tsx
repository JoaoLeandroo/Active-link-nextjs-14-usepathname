"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "Icons",
    href: "/dashboard/Icons",
  },
  {
    id: 3,
    name: "Interface",
    href: "/dashboard/Interface",
  },
];

const ActiveLink = () => {

    const location = usePathname()
    console.log(location)
    return (
    <div className="col-span-6 flex items-center justify-center gap-x-5">
      {navLinks.map((item) => (
        <div key={item.id}>
            {location === item.href ? 
            <Link href={item.href} className="underline underline-offset-4">
                {item.name}
            </Link>
            :
            <Link href={item.href}>
            {item.name}
        </Link>}

        </div>
      ))}
    </div>
  );
};

export default ActiveLink;
