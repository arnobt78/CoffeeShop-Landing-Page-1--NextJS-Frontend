/**
 * Footer Component
 *
 * Site footer with navigation links, social media icons, and copyright.
 * Features:
 * - Background image with dark overlay
 * - Logo linking to home
 * - Navigation links
 * - Social media icons (YouTube, Facebook, Twitter, Instagram)
 * - Copyright notice
 */

// Social media icons from react-icons library
import Image from "next/image";
import Link from "next/link";
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

// Footer navigation links
const links = [
  { href: "/", name: "Home" },
  { href: "/", name: "Explore" },
  { href: "/", name: "About" },
  { href: "/", name: "Menu" },
  { href: "/", name: "Contact" },
];

// Social media icon components
const socialIcons = [
  { icon: <FaYoutube /> },
  { icon: <FaFacebook /> },
  { icon: <FaTwitter /> },
  { icon: <FaInstagram /> },
];

const Footer = () => {
  return (
    // Footer with background image (bg-footer from tailwind config)
    <footer className="bg-footer bg-cover bg-no-repeat pt-16 relative">
      {/* Dark Overlay - 90% opacity black overlay for text readability */}
      <div className="absolute w-full h-full bg-black/[0.90] z-10 top-0" />
      <div className="container mx-auto z-20 relative">
        <div className="flex flex-col items-center justify-center gap-14">
          {/* Footer Logo */}
          <Link href="/" className="relative w-[120px] h-[50px] mx-auto">
            <Image
              src="/assets/logo.svg"
              fill
              alt=""
              className="object-contain"
            />
          </Link>

          {/* Footer Navigation Links - Vertical on mobile, horizontal on xl */}
          <nav className="flex flex-col xl:flex-row gap-8 xl:gap-12 justify-center items-center">
            {links.map((link, index) => (
              <Link
                href={link.href}
                key={index}
                className="uppercase text-white tracking-widest hover:text-accent transition-all"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Media Icons - Circular buttons with border */}
          <ul className="flex text-white text-xl gap-4">
            {socialIcons.map((social, index) => (
              <Link
                key={`social-${index}`}
                href="/"
                className="w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all"
              >
                {social.icon}
              </Link>
            ))}
          </ul>

          {/* Copyright Notice */}
          <div className="border-t border-white/10 text-[15px] text-white/70 font-light w-full flex items-center justify-center py-6">
            <p>&copy; {new Date().getFullYear()}. All reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
