import { useLocation } from "react-router";

import {
  CreditCardIcon,
  KeyIcon,
  UserCircleIcon,
  UserGroupIcon,
  ViewGridAddIcon,
} from "@heroicons/react/outline";

const navigation = [
  { name: "Artwork Details", href: "#", icon: UserCircleIcon, current: true },
  { name: "Images", href: "#", icon: KeyIcon, current: false },
  {
    name: "Loans & Consignment",
    href: "#",
    icon: CreditCardIcon,
    current: false,
  },
  { name: "Provenance", href: "#", icon: UserGroupIcon, current: false },
  {
    name: "Location & Shipping",
    href: "#",
    icon: ViewGridAddIcon,
    current: false,
  },
  { name: "Financial", href: "#", icon: ViewGridAddIcon, current: false },
  { name: "Notes", href: "#", icon: ViewGridAddIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Artwork() {
  const { artwork, artist, medium } = useLocation().state;
  return (
    <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
      <aside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
        <nav className="space-y-1">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-gray-50 text-indigo-700 hover:text-indigo-700 hover:bg-white"
                  : "text-gray-900 hover:text-gray-900 hover:bg-gray-50",
                "group rounded-md px-3 py-2 flex items-center text-sm font-medium"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              <item.icon
                className={classNames(
                  item.current
                    ? "text-indigo-500 group-hover:text-indigo-500"
                    : "text-gray-400 group-hover:text-gray-500",
                  "flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                )}
                aria-hidden="true"
              />
              <span className="truncate">{item.name}</span>
            </a>
          ))}
        </nav>
      </aside>

      <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
        <h1>{artwork.title}</h1>
        <h2>{artist.name}</h2>
        <h3>{medium.medium}</h3>
      </div>
    </div>
  );
}
