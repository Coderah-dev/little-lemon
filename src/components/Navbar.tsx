"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // ✅ for active link
import Logo from "../../public/Little lemon logo.svg";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// ✅ define once outside component
const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/our-services" },
  { label: "Contact", path: "/get-in-touch" },
  { label: "Blog", path: "/blog" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // ✅ get current route

  return (
    <nav className='fixed top-0 left-0 w-full bg-[#FAF7F0] shadow-md z-50'>
      <div className='w-full mx-auto h-14 md:h-16 lg:h-24 flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-[7.625rem]'>
        {/* Logo */}
        <Link
          href='/'
          className='flex items-center'>
          <Image
            src={Logo}
            alt='Little Lemon Logo'
            priority
            className='w-[160px] md:w-[200px] h-auto' // ✅ no mixed heights
          />
        </Link>

        {/* Desktop Menu */}
        <div className='hidden lg:flex items-center gap-10'>
          {navItems.map((item, i) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={i}
                href={item.path}
                className={`font-medium text-[18px] leading-[150%] transition ${
                  isActive
                    ? "text-black underline underline-offset-4"
                    : "text-gray-800 hover:text-gray-600"
                }`}>
                {item.label}
              </Link>
            );
          })}

          {/* CTA Button */}
          <button className='bg-black text-white text-[16px] font-medium px-6 py-3 rounded-md shadow-sm hover:opacity-90 transition'>
            Sign Up
          </button>
        </div>

        {/* Hamburger Menu - visible only on mobile & tablet */}
        <div className='lg:hidden'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label='Toggle menu'
            aria-expanded={isOpen}
            aria-controls='mobile-menu'>
            <svg
              className='h-7 w-7'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'>
              {isOpen ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id='mobile-menu'
            role='dialog' // ✅ accessibility
            aria-modal='true'
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className='lg:hidden bg-[#FAF7F0] overflow-hidden'>
            <div className='px-6 py-6 space-y-5 flex flex-col'>
              {" "}
              {/* ✅ consistent spacing */}
              {navItems.map((item, i) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={i}
                    href={item.path}
                    className={`font-medium text-[18px] leading-[150%] ${
                      isActive
                        ? "text-black underline underline-offset-4"
                        : "text-gray-800 hover:text-gray-600"
                    }`}
                    onClick={() => setIsOpen(false)}>
                    {item.label}
                  </Link>
                );
              })}
              <button className='w-full bg-black text-white text-[16px] font-medium py-3 rounded-md shadow-sm hover:opacity-90 transition'>
                Sign Up
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
