import Navlink from "./Navlink";
const MobileNavbar = ({ navlinks, open, onNavigate }) => {
  return (
    <div className="md:hidden overflow-hidden transition-all duration-300">
      <ul className="flex flex-col items-center mt-3 divide-white/10 rounded-lg  px-3 py-2">
        {navlinks.map((n) => (
          <li key={n.title} className="mb-3 text-[1.2rem]">
            <Navlink title={n.title} href={n.path} onClick={onNavigate} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNavbar;
