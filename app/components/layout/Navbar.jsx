'use client';

import Link from 'next/link';
import { 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaClock, 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaGoogle 
} from 'react-icons/fa';

export default function Navbar() {
  return (
    <header className="w-full shadow-sm bg-white font-sans">
      
      {/* Top Bar */}
      <div className="bg-[#0A1329] text-white text-[11px] sm:text-xs py-2 px-3 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
          
          {/* Row 1 (Mobile) / Left (Desktop): Location & Email */}
          <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-6 text-gray-300 w-full md:w-auto">
            <div className="flex items-center gap-1.5 shrink-0">
              <FaMapMarkerAlt className="text-[#E5A64C] text-xs" />
              <span className="truncate">Ahmedabad, Gujarat</span>
            </div>
            <span className="text-gray-600">|</span>
            <div className="flex items-center gap-1.5 shrink-0">
              <FaEnvelope className="text-[#E5A64C] text-xs" />
              <a href="mailto:info@nexeraconsultancy.in" className="hover:underline">
                info@nexeraconsultancy.in
              </a>
            </div>
          </div>

          {/* Row 2 (Mobile) / Right (Desktop): Hours & Social Icons */}
          <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto pt-1.5 md:pt-0 border-t md:border-t-0 border-gray-800">
            <div className="flex items-center gap-1.5 text-gray-300">
              <FaClock className="text-[#E5A64C] text-xs" />
              <span className="whitespace-nowrap">Mon - Sat: 10:00 AM - 5:00 PM</span>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-1.5 shrink-0">
              {[
                { 
                  icon: FaFacebookF, 
                  href: 'https://www.facebook.com/people/Nexera-Visa-Consultancy/61592196149767/?sk=directory_specialties',
                  label: 'Facebook'
                },
                { 
                  icon: FaInstagram, 
                  href: 'https://www.instagram.com/nexera_consultancy/',
                  label: 'Instagram'
                },
                { 
                  icon: FaLinkedinIn, 
                  href: 'https://www.linkedin.com/in/nexera-consultancy-2aba87423/',
                  label: 'LinkedIn'
                },
                { 
                  icon: FaGoogle, 
                  href: 'https://www.google.com/search?hl=en&authuser=0&sca_esv=77821bc6db13ead3&biw=1707&bih=811&sxsrf=APpeQnuMq4ZKrVhPLqn3Ddxmcjzj8UC0CA%3A1785301657140&q=Nexera%20Visa%20Consultancy&mat=CXgD9w0mDSH6&zx=1785301667998&ihs=0',
                  label: 'Google Business'
                }
              ].map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a 
                    key={index} 
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-gray-600 flex items-center justify-center text-[9px] sm:text-[10px] hover:bg-[#E5A64C] hover:border-[#E5A64C] hover:text-white transition-colors"
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          </div>

        </div>
      </div>

    </header>
  );
}