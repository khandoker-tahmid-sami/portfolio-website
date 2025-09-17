import { Ovo } from "next/font/google";

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

import Link from "next/link";
const Navlink = ({ title, href, onClick }) => {
  return (
    <>
      <Link
        href={href}
        className={`block text-[20px] px-4 hover:text-zinc-400 ${ovo.className}`}
        onClick={onClick}
      >
        {title}
      </Link>
    </>
  );
};

export default Navlink;
