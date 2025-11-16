"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-grey text-gray-200">
      <div className="flex w-full flex-col items-center justify-center px-4 py-12 sm:px-10">
        {/* Main Grid */}
        <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Address Section */}
          <ul className="flex flex-col items-center gap-1 sm:items-start">
            <li className="text-lg font-semibold uppercase">Address</li>
            <li>Logic Freight Limited</li>
            <li>Rising Sun House</li>
            <li>Rising Sun Lane</li>
            <li>Off Newport Road</li>
            <li>Machen</li>
            <li>Caerphilly</li>
            <li>CF83 8RJ</li>
          </ul>

          {/* Telephone Section */}
          <ul className="flex flex-col items-center gap-1 sm:items-start">
            <li className="text-lg font-semibold uppercase">Telephone</li>
            <li>
              <a href="tel:01633441457" className="underline hover:text-white">
                Newport 01633 441457
              </a>
            </li>
          </ul>

          {/* Email Section */}
          <ul className="flex flex-col items-center gap-1 sm:items-start">
            <li className="text-lg font-semibold uppercase">Email</li>
            <li>
              <a
                href="mailto:traffic@logic-freight.co.uk"
                className="underline hover:text-white"
              >
                traffic@logic-freight.co.uk
              </a>
            </li>
          </ul>

          {/* Navigation Links */}
          <ul className="flex flex-col items-center gap-1 sm:items-start">
            <li className="text-lg font-semibold uppercase">Navigation</li>
            <li>
              <Link href="/" className="underline hover:text-white">
                Return Loads UK
              </Link>
            </li>

            <li>
              <Link
                href="/return-loads-scotland"
                className="underline hover:text-white"
              >
                Return Loads Scotland
              </Link>
            </li>
            <li>
              <Link
                href="/return-loads-england"
                className="underline hover:text-white"
              >
                Return Loads England
              </Link>
            </li>
            <li>
              <Link
                href="/return-loads-wales"
                className="underline hover:text-white"
              >
                Return Loads Wales
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="underline hover:text-white"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Logic Freight Limited. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
