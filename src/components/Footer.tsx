import { Instagram, Youtube, Linkedin, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2">
            {['Home', 'About us', 'Products', 'Services', 'Legal', 'Privacy Policy', 'Contact us'].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-[#d041f4] transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-gray-300">
            We are a team of passionate people whose goal is to improve
            everyone's life through disruptive products. We build great
            products to solve your business problems. Also enrich the future 
            of tomorrow by our curated training programmes.
          </p>
          <p className="mt-4 text-gray-300">
            Our products are designed for small to medium size companies 
            willing to optimize their performance.
          </p>
        </div>

        {/* Connect with us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect with us</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <a href="mailto:Info@extioninfotech.com" className="hover:text-[#d041f4] transition-colors">
                Info@extioninfotech.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <a href="tel:+9101169270472" className="hover:text-[#d041f4] transition-colors">
                +91 01169270472
              </a>
            </div>
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-[#d041f4] transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#d041f4] transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#d041f4] transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-400 border-t border-gray-800 pt-8">
        © 2024 Created by: Extion Team | All rights reserved.
      </div>
    </footer>
  );
}