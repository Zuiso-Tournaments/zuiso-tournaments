import Logo from '@/icons/Logo';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mx-auto w-full  ">
      <div className=" flex flex-col items-center justify-center gap-8 bg-zuiso-950 py-12  text-zuiso-50 transition-colors duration-150 dark:bg-zuiso-50 dark:text-zuiso-950 lg:grid-cols-12">
        <div className="col-span-6 lg:col-span-6">
          <Link href="/" className="flex flex-initial items-center font-bold">
            <span className="mr-2 rounded-full border border-zuiso-700">
              <Logo />
            </span>
            <span>Zuiso Tournaments</span>
          </Link>
        </div>
        <ul className="flex  flex-initial gap-4 md:flex-1">
          <li className="py-3 md:py-0 md:pb-4">
            <Link
              href="/"
              className=" transition duration-150 ease-in-out hover:text-zuiso-200">
              Home
            </Link>
          </li>
          <li className="py-3 md:py-0 md:pb-4">
            <Link
              href="/about"
              className="transition duration-150 ease-in-out hover:text-zuiso-200">
              About
            </Link>
          </li>
          <li className="py-3 md:py-0 md:pb-4">
            <Link
              href="/pricing"
              className="transition duration-150 ease-in-out hover:text-zuiso-200">
              Pricing
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
