import React from 'react';
import Image from 'next/image';

const Footer = () => (
  <footer className="w-full bg-[#181012] pl-0 pr-0">
    <div className="max-w-6xl mx-auto px-4">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-start md:items-center mb-10 pt-16 px-4">
        {/* Logo and description */}
        <div className="flex-1 mb-8 md:mb-0 flex flex-col items-start">
          <div className="flex items-center mb-3">
            <div className="w-35 h-6 relative mr-2">
              <Image 
                src="https://framerusercontent.com/images/MRA5lLDeZkPvIGByV5ieTZ3CXTQ.png" 
                alt="TaskHub Logo" 
                fill
                className="object-contain"
              />
            </div>
          </div>
          <p className="text-[#B8B3B0] text-sm max-w-xs">Streamline your workflow, manage projects, and empower your team.</p>
        </div>
        {/* Quick Links */}
        <div className="flex-1 flex flex-row gap-12 justify-center">
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="text-[#B8B3B0] text-sm space-y-2">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Changelog</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">404 Page</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Company</h4>
            <ul className="text-[#B8B3B0] text-sm space-y-2">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Testimonials</a></li>
              <li><a href="#" className="hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
            </ul>
          </div>
        </div>
        {/* Newsletter */}
        <div className="flex-1 flex flex-col items-start md:items-end mt-8 md:mt-0">
          <h4 className="text-white font-semibold mb-3">Stay updated with our latest<br/>news and tips!</h4>
          <div className='flex flex-row  justify-between items-center bg-white px-6 py-3 w-full rounded-4xl'>
              <p>Enter your email</p>
              <button className='bg-[#A89EFF] text-white px-4 py-2 rounded-4xl font-semibold '>Subscribe</button>
          </div>
        </div>
      </div>
      {/* Bottom bar */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-center border-t border-[#292024] pt-6 mt-6 px-4 pb-8">
        <span className="text-[#B8B3B0] text-xs">© 2024 TaskHub, Inc. All rights reserved.</span>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" aria-label="Facebook" className="text-[#B8B3B0] hover:text-white"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M18.333 10A8.333 8.333 0 1 0 10 18.333V12.5h-2.083V10h2.083V8.333c0-2.042 1.25-3.167 3.125-3.167.896 0 1.833.167 1.833.167v2.042h-1.042c-1.042 0-1.375.646-1.375 1.312V10h2.333l-.375 2.5h-1.958v5.833A8.333 8.333 0 0 0 18.333 10Z" fill="currentColor"/></svg></a>
          <a href="#" aria-label="LinkedIn" className="text-[#B8B3B0] hover:text-white"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M16.667 2.5H3.333A.833.833 0 0 0 2.5 3.333v13.334a.833.833 0 0 0 .833.833h13.334a.833.833 0 0 0 .833-.833V3.333a.833.833 0 0 0-.833-.833ZM7.5 15H5V8.333h2.5V15Zm-1.25-7.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm9.167 7.5h-2.5v-3.333c0-.792-.008-1.812-1.104-1.812-1.104 0-1.271.863-1.271 1.755V15h-2.5V8.333h2.4v.917h.034c.334-.633 1.15-1.3 2.367-1.3 2.533 0 3 1.667 3 3.833V15Z" fill="currentColor"/></svg></a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;