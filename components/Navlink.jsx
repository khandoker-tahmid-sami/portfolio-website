import Link from "next/link";
const Navlink = ({ title, href }) => {
  return (
    <>
      <Link href={href} className="block px-4 hover:text-zinc-400">
        {title}
      </Link>
    </>
  );
};

export default Navlink;
