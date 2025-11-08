import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import React, { Dispatch, SetStateAction, useState } from "react";
import { FaMailBulk } from "react-icons/fa";
import { FiArrowRight, FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import useMeasure from "react-use-measure";

const FlyoutNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 250);
  });

  return (
    <nav
      className={`fixed top-0 z-50 w-full px-6 text-white transition-all duration-300 ease-out lg:px-12 ${
        scrolled
          ? "bg-neutral-950 py-3 shadow-xl"
          : "bg-neutral-950/0 py-6 shadow-none"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <img src="/assets/images/logo.png" alt="logo" width={200} height={90} />
        <div className="hidden gap-6 lg:flex">
          <Links />
          <CTAs />
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
};

// -------- NAV LINKS --------

const Links = () => (
  <div className="flex items-center gap-6">
    {LINKS.map((l) => (
      <NavLink key={l.text} href={l.href} FlyoutContent={l.component}>
        {l.text}
      </NavLink>
    ))}
  </div>
);

const NavLink = ({
  children,
  href,
  FlyoutContent,
}: {
  children: React.ReactNode;
  href: string;
  FlyoutContent?: React.ElementType;
}) => {
  const [open, setOpen] = useState(false);
  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative h-fit w-fit"
    >
      <a href={href} className="relative">
        {children}
        <span
          style={{ transform: showFlyout ? "scaleX(1)" : "scaleX(0)" }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-emerald-300 transition-transform duration-300 ease-out"
        />
      </a>

      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 w-[400px] -translate-x-1/2 rounded-lg bg-white text-black shadow-xl"
          >
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// -------- CTA BUTTONS --------

const CTAs = () => (
  <div className="flex items-center gap-3">
    <button className="flex items-center gap-2 rounded-lg border-2 border-white px-4 py-2 font-semibold text-white transition-colors hover:bg-white hover:text-black">
      <FaMailBulk />
      <span>Email Us</span>
    </button>
    <button className="rounded-lg border-2 border-emerald-300 bg-emerald-300 px-4 py-2 font-semibold text-black transition-colors hover:border-emerald-600 hover:bg-emerald-600 hover:text-white">
      📞 01633 441457
    </button>
  </div>
);

// -------- FLYOUT CONTENTS --------

const SubcontractorsContent = () => (
  <div className="grid grid-cols-3 gap-6 p-6">
    <div>
      <h3 className="mb-2 font-semibold">Scotland</h3>
      <a href="/subcontractors/scotland" className="block text-sm hover:underline">
        All Scotland
      </a>
      <a href="#" className="block text-sm hover:underline">
        Aberdeen
      </a>
      <a href="#" className="block text-sm hover:underline">
        Glasgow
      </a>
      <a href="#" className="block text-sm hover:underline">
        Edinburgh
      </a>
    </div>

    <div>
      <h3 className="mb-2 font-semibold">England</h3>
      <a href="#" className="block text-sm hover:underline">
        North East
      </a>
      <a href="#" className="block text-sm hover:underline">
        North West
      </a>
      <a href="#" className="block text-sm hover:underline">
        Midlands
      </a>
      <a href="#" className="block text-sm hover:underline">
        South
      </a>
    </div>

    <div>
      <h3 className="mb-2 font-semibold">Wales</h3>
      <a href="#" className="block text-sm hover:underline">
        North Wales
      </a>
      <a href="#" className="block text-sm hover:underline">
        South Wales
      </a>
    </div>
  </div>
);

const CustomersContent = () => (
  <div className="grid grid-cols-3 gap-6 p-6">
    <div>
      <h3 className="mb-2 font-semibold">Scotland</h3>
      <a href="#" className="block text-sm hover:underline">
        Haulage
      </a>
      <a href="#" className="block text-sm hover:underline">
        Pallet Delivery
      </a>
    </div>

    <div>
      <h3 className="mb-2 font-semibold">England</h3>
      <a href="#" className="block text-sm hover:underline">
        North East
      </a>
      <a href="#" className="block text-sm hover:underline">
        Midlands
      </a>
      <a href="#" className="block text-sm hover:underline">
        South
      </a>
    </div>

    <div>
      <h3 className="mb-2 font-semibold">Wales</h3>
      <a href="#" className="block text-sm hover:underline">
        Cardiff
      </a>
      <a href="#" className="block text-sm hover:underline">
        Swansea
      </a>
    </div>
  </div>
);

// -------- MOBILE MENU --------

const MobileMenuLink = ({
  children,
  href,
  FoldContent,
  setMenuOpen,
}: {
  children: React.ReactNode;
  href: string;
  FoldContent?: React.ElementType;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [ref, { height }] = useMeasure();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative text-neutral-950">
      {FoldContent ? (
        <div
          className="flex w-full cursor-pointer items-center justify-between border-b border-neutral-300 py-6 text-start text-2xl font-semibold"
          onClick={() => setOpen((pv) => !pv)}
        >
          <span>{children}</span>
          <motion.div
            animate={{ rotate: open ? "180deg" : "0deg" }}
            transition={{ duration: 0.3 }}
          >
            <FiChevronDown />
          </motion.div>
        </div>
      ) : (
        <a
          onClick={() => setMenuOpen(false)}
          href={href}
          className="flex w-full cursor-pointer items-center justify-between border-b border-neutral-300 py-6 text-start text-2xl font-semibold"
        >
          <span>{children}</span>
          <FiArrowRight />
        </a>
      )}

      {FoldContent && (
        <motion.div
          initial={false}
          animate={{
            height: open ? height : "0px",
            marginBottom: open ? "24px" : "0px",
          }}
          className="overflow-hidden"
        >
          <div ref={ref}>
            <FoldContent />
          </div>
        </motion.div>
      )}
    </div>
  );
};

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="block lg:hidden">
      <button onClick={() => setOpen(true)} className="block text-3xl">
        <FiMenu />
      </button>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "100vw" }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed left-0 top-0 flex h-screen w-full flex-col bg-white"
          >
            <div className="flex items-center justify-between p-6">
              <img
                src="/assets/images/logo.png"
                alt="logo"
                width={200}
                height={90}
              />
              <button onClick={() => setOpen(false)}>
                <FiX className="text-3xl text-neutral-950" />
              </button>
            </div>

            <div className="h-screen overflow-y-scroll bg-neutral-100 p-6">
              {LINKS.map((l) => (
                <MobileMenuLink
                  key={l.text}
                  href={l.href}
                  FoldContent={l.component}
                  setMenuOpen={setOpen}
                >
                  {l.text}
                </MobileMenuLink>
              ))}
            </div>

            <div className="flex justify-end bg-neutral-950 p-6">
              <CTAs />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

// -------- LINK STRUCTURE --------

const LINKS = [
  {
    text: "Subcontractors",
    href: "#",
    component: SubcontractorsContent,
  },
  {
    text: "Customers",
    href: "#",
    component: CustomersContent,
  },
];

export default FlyoutNav;
