import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ColumnProps {
  title: string;
  links: Array<string>;
}
const date = new Date().getFullYear();
const FooterColumn = ({ title, links }: ColumnProps) => (
  <div className="footer_column">
    <h4 className="font-semibold">{title}</h4>
    <ul className="flex flex-col gap-2">
      {links.map((link) => (
        <li className="hover:font-semibold">

        <Link href="/" key={link}>{link}</Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="flexStart footer">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex flex-col items-start">
          <Image src="/logo-purple.svg" width={115} height={38} alt="Flexibble" />
          <p className="text-start text-sm font-normal mt-5 max-w-xs">
            Flexibble is the world's leading community for creatives to share,
            grow, and get hired.
          </p>
        </div>
        <div className="flex flex-wrap gap-12">
            {
                footerLinks.map((link, i) => <FooterColumn title={link.title} links={link.links} />)
            }
        </div>
      </div>
      <div className="flexBetween footer_copyright">
            <p>@ {date} Flexibble. All rights reserved</p>
            <p className="text-gray"><span className="text-black font-semibold">10,214</span> projects submitted</p>
      </div>
    </footer>
  );
};

export default Footer;
