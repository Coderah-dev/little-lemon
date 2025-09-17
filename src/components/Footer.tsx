import React from "react";
import { typography } from "@/app/ui/fonts";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const footerLinks = [
    { label: "Home", path: "/" },
    { label: "Menu", path: "/menu" },
    { label: "About", path: "/about" },
    { label: "Reservations", path: "/reservations" }, // ✅ fixed path
    { label: "Order Online", path: "/order-online" },
  ];

  return (
    <footer className='bg-[rgb(var(--neutral-100))] text-[var(--foreground)] h-auto w-full px-4 sm:px-6 md:px-10 lg:px-[7.625rem] py-14'>
      <div className='mx-auto grid grid-cols-1 lg:grid-cols-6 gap-8 text-left items-start'>
        {/* Logo / Brand */}
        <div className='space-y-3 lg:col-start-1 lg:col-end-3 flex flex-col'>
          <h2 className={`${typography.h2} mb-6 text-[rgb(var(--primary))]`}>
            Little Lemon
          </h2>
          <p className={typography.body}>
            Serving fresh Mediterranean flavors with a modern twist. Authentic,
            healthy, and made with love.
          </p>
        </div>

        {/* Navigation */}
        <div className='lg:col-start-4 lg:col-end-5 flex flex-col'>
          <h3 className={`${typography.h3} mb-6 text-[rgb(var(--primary))]`}>
            Navigation
          </h3>
          <ul className='flex flex-col gap-y-3'>
            {footerLinks.map(({ label, path }) => (
              <li key={label}>
                <Link
                  href={path}
                  className={`${typography.nav} text-[var(--foreground)] hover:text-[rgb(var(--primary))] transition-colors`}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className='flex flex-col gap-y-3'>
          <h3 className={`${typography.h3} mb-6 text-[rgb(var(--primary))]`}>
            Contact
          </h3>
          <ul className='flex flex-col gap-y-3'>
            <li className={typography.body}>123 Main Street, Chicago, IL</li>
            <li className={typography.body}>+1 (555) 123-4567</li>
            <li className={typography.body}>contact@littlelemon.com</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className='flex flex-col'>
          <h3 className={`${typography.h3} mb-6 text-[rgb(var(--primary))]`}>
            Follow Us
          </h3>
          <div className='flex gap-4'>
            {/* External links should open in a new tab */}
            <a
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
              className='p-2 bg-[rgb(var(--primary))] rounded-full hover:bg-[rgb(var(--primary-dark))] transition-colors'
              aria-label='Facebook'>
              <Facebook className='w-5 h-5 text-[rgb(var(--neutral-100))]' />
            </a>
            <a
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
              className='p-2 bg-[rgb(var(--primary))] rounded-full hover:bg-[rgb(var(--primary-dark))] transition-colors'
              aria-label='Instagram'>
              <Instagram className='w-5 h-5 text-[rgb(var(--neutral-100))]' />
            </a>
            <a
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
              className='p-2 bg-[rgb(var(--primary))] rounded-full hover:bg-[rgb(var(--primary-dark))] transition-colors'
              aria-label='Twitter'>
              <Twitter className='w-5 h-5 text-[rgb(var(--neutral-100))]' />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='mt-10 border-t border-[rgb(var(--neutral-600))] pt-6 text-center'>
        <p className={typography.small}>
          © {new Date().getFullYear()} Little Lemon. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
