"use client";

import { useState } from "react";
import { GraduationCap, Menu, X, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useLocation } from "wouter";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useLocation();
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const [isDepartmentsDropdownOpen, setIsDepartmentsDropdownOpen] = useState(false);

  // Toggle menus
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleCoursesDropdown = () => setIsCoursesDropdownOpen(!isCoursesDropdownOpen);
  const toggleDepartmentsDropdown = () => setIsDepartmentsDropdownOpen(!isDepartmentsDropdownOpen);

  // Search handler
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setLocation(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setIsMobileMenuOpen(false);
    }
  };

  // Smooth scroll handler
  const handleSectionClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);

    if (location === "/") {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 100);
    } else {
      setLocation("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 800);
    }
  };

  return (
    <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
       <Link href="/" className="flex items-center space-x-3" data-testid="logo">
  <div className="w-40 h-40 flex items-center justify-center">
    <img src="/images/logo.jpeg" alt="Logo" className="w-24 h-24 object-cover rounded-full" /> {/* Increased size */}
  </div>
</Link>



          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6" data-testid="desktop-nav">
            <Link href="/" className="text-slate-700 hover:text-primary transition-colors">Home</Link>
            <button onClick={() => handleSectionClick('about')} className="text-slate-700 hover:text-primary transition-colors">About</button>
            {/* <button onClick={() => handleSectionClick('programs')} className="text-slate-700 hover:text-primary transition-colors">Programs</button> */}

            {/* Departments Dropdown */}
            <div className="relative">
              <button onClick={toggleDepartmentsDropdown} className="flex items-center text-slate-700 hover:text-primary transition-colors">
                Departments <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {isDepartmentsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-slate-200 shadow-lg rounded-lg z-50">
                  <Link href="/departments/01" className="block px-4 py-2 hover:bg-gray-100">Department 01</Link>
                  <Link href="/departments/02" className="block px-4 py-2 hover:bg-gray-100">Department 02</Link>
                  <Link href="/departments/03" className="block px-4 py-2 hover:bg-gray-100">Department 03</Link>
                  <Link href="/departments/04" className="block px-4 py-2 hover:bg-gray-100">Department 04</Link>
                  <Link href="/departments/05" className="block px-4 py-2 hover:bg-gray-100">Department 05</Link>
                </div>
              )}
            </div>

            {/* Courses Dropdown */}
            <div className="relative">
              <button onClick={toggleCoursesDropdown} className="flex items-center text-slate-700 hover:text-primary transition-colors">
                Courses <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {isCoursesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-slate-200 shadow-lg rounded-lg z-50">
                  <Link href="/courses/full-time" className="block px-4 py-2 hover:bg-gray-100">Full-time Courses</Link>
                  <Link href="/courses/part-time" className="block px-4 py-2 hover:bg-gray-100">Part-time Courses</Link>
                  <Link href="/courses/others" className="block px-4 py-2 hover:bg-gray-100">Others</Link>
                </div>
              )}
            </div>

            <Link href="/gallery" className="text-slate-700 hover:text-primary transition-colors">Gallery</Link>
            <button onClick={() => handleSectionClick('news')} className="text-slate-700 hover:text-primary transition-colors">News</button>
            <button onClick={() => handleSectionClick('contact')} className="text-slate-700 hover:text-primary transition-colors">Contact</button>
          </nav>

          {/* Search & Download */}
          <div className="hidden lg:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-64 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </form>

            <Link href="/download">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-medium transition-colors">
                Download
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X className="w-6 h-6 text-slate-700" /> : <Menu className="w-6 h-6 text-slate-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="px-4 pt-2 pb-3 space-y-1 bg-white border-t border-slate-200">
            <div className="px-3 py-2">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </form>
            </div>

            <Link href="/" className="block px-3 py-2 text-slate-700">Home</Link>
            <button onClick={() => handleSectionClick('about')} className="block px-3 py-2 text-slate-700 w-full text-left">About</button>
            <button onClick={() => handleSectionClick('programs')} className="block px-3 py-2 text-slate-700 w-full text-left">Programs</button>

            {/* Mobile Departments Dropdown */}
            <div className="block">
              <button
                onClick={toggleDepartmentsDropdown}
                className="w-full text-left px-3 py-2 text-slate-700 flex justify-between items-center"
              >
                Departments <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {isDepartmentsDropdownOpen && (
                <div className="pl-6">
                  <Link href="/departments/01" className="block px-3 py-2 hover:bg-gray-100">Department 01</Link>
                  <Link href="/departments/02" className="block px-3 py-2 hover:bg-gray-100">Department 02</Link>
                  <Link href="/departments/03" className="block px-3 py-2 hover:bg-gray-100">Department 03</Link>
                  <Link href="/departments/04" className="block px-3 py-2 hover:bg-gray-100">Department 04</Link>
                  <Link href="/departments/05" className="block px-3 py-2 hover:bg-gray-100">Department 05</Link>
                </div>
              )}
            </div>

            {/* Mobile Courses Dropdown */}
            <div className="block">
              <button
                onClick={toggleCoursesDropdown}
                className="w-full text-left px-3 py-2 text-slate-700 flex justify-between items-center"
              >
                Courses <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {isCoursesDropdownOpen && (
                <div className="pl-6">
                  <Link href="/courses/full-time" className="block px-3 py-2 hover:bg-gray-100">Full-time Courses</Link>
                  <Link href="/courses/part-time" className="block px-3 py-2 hover:bg-gray-100">Part-time Courses</Link>
                  <Link href="/courses/others" className="block px-3 py-2 hover:bg-gray-100">Others</Link>
                </div>
              )}
            </div>

            <Link href="/gallery" className="block px-3 py-2 text-slate-700">Gallery</Link>
            <button onClick={() => handleSectionClick('news')} className="block px-3 py-2 text-slate-700 w-full text-left">News</button>
            <button onClick={() => handleSectionClick('contact')} className="block px-3 py-2 text-slate-700 w-full text-left">Contact</button>

            <Link href="/download">
              <Button className="w-full text-left bg-primary text-primary-foreground px-3 py-2 rounded-lg mt-2">
                Download
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
