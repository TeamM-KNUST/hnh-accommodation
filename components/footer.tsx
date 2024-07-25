import Link from "next/link";
import React from "react";
import { PiCaretUpBold } from "react-icons/pi";
import { FiGlobe } from "react-icons/fi";
import { Container } from "./container";

export default function Footer() {
  const links = [
    "privacy",
    "terms",
    "sitemap",
    "company details",
    "destinations",
  ];
  return (
    <div className=" px-20 border-t border-t-gray-200 py-4 flex justify-between w-full text-sm z-50 bg-white items-center bottom-0">
      <ul className="flex gap-3 font-normal ">
        <li>&copy; {new Date().getFullYear()} HnH Accomodation</li>
        {links.map((link) => (
          <li key={link}>
            <Link href="#">
              {link.charAt(0).toUpperCase() + link.slice(1).toLowerCase()}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="flex gap-4 font-medium">
        <li className="flex items-center gap-2 cursor-pointer">
          <FiGlobe /> English (IN)
        </li>
        <li className="cursor-pointer">$ USD</li>
        <li className="flex items-center gap-2 cursor-pointer">
          Support & resources <PiCaretUpBold />
        </li>
      </ul>
    </div>
  );
}
