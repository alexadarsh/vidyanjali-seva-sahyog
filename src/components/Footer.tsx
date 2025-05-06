
import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-muted mt-12">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">PANKHUDI</h3>
            <p className="text-sm text-muted-foreground">
              An initiative by the Ministry of Women and Child Development, 
              Government of India to strengthen support systems through community 
              and private sector involvement.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about-pankhudi" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About PANKHUDI
                </NavLink>
              </li>
              <li>
                <NavLink to="/search-organization" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Search Organization
                </NavLink>
              </li>
              <li>
                <NavLink to="/state-programs" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  State Programs
                </NavLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Mission Areas</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/mission-shakti" className="text-sm text-muted-foreground hover:text-shakti transition-colors">
                  Mission Shakti
                </NavLink>
              </li>
              <li>
                <NavLink to="/mission-vatsalya" className="text-sm text-muted-foreground hover:text-vatsalya transition-colors">
                  Mission Vatsalya
                </NavLink>
              </li>
              <li>
                <NavLink to="/mission-saksham" className="text-sm text-muted-foreground hover:text-saksham transition-colors">
                  Mission Saksham
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} Ministry of Women and Child Development, Government of India. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <NavLink to="/privacy-policy" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </NavLink>
              <NavLink to="/terms-conditions" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Terms & Conditions
              </NavLink>
              <NavLink to="/contact" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
