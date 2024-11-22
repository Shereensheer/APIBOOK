import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Shereen Library. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link href="#" className="hover:text-accent">Privacy Policy</Link>
          <Link href="#" className="hover:text-accent">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
