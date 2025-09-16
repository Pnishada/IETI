import { GraduationCap, Phone, Mail, MapPin } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200 py-8" id="contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center">
                <img src="/images/logo.jpeg" alt="Logo" className="w-18 h-18 object-cover rounded-full" />
              </div>
              
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              A government institute dedicated to developing technical excellence
              and creating opportunities for the nation’s youth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/gallery" className="hover:text-white">Gallery</a></li>
              <li><a href="/programs" className="hover:text-white">News</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
              <li><a href="/apply-online" className="hover:text-white">Apply Online</a></li>
              <li><a href="/download" className="hover:text-white">Download</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base font-semibold mb-3">Services</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="/apprenticeships" className="hover:text-white">Apprenticeships</a></li>
              <li><a href="/nvq" className="hover:text-white">NVQ Programs</a></li>
              <li><a href="/career" className="hover:text-white">Career Development</a></li>
              <li><a href="/partnerships" className="hover:text-white">Industry Partnerships</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center"><Phone className="w-4 h-4 mr-2 text-primary" /> 011 2641092 / 011 2647393 / 011 2649329 / 011 2643847</li>
              <li className="flex items-center"><Mail className="w-4 h-4 mr-2 text-primary" /> ieti.adm581@gmail.com</li>
              <li className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-primary" /> Industrial Engineering Training Institute, 581 Galle Rd, Moratuwa</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-4 text-center">
          <p className="text-slate-500 text-xs">
            © 2025 National Apprentice & Industrial Training Authority (NAITA). All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
