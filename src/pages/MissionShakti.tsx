
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const MissionShakti = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero section */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-1/2">
                <h1 className="text-4xl font-bold mb-4">Mission Shakti</h1>
                <p className="text-lg mb-6">Empowering women through safety, protection, and independence initiatives across India.</p>
                <Button asChild size="lg" variant="secondary" className="gap-2">
                  <NavLink to="/search-organization?mission=shakti">
                    <Heart className="h-5 w-5" /> Support Mission Shakti
                  </NavLink>
                </Button>
              </div>
              <div className="md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                    alt="Women empowerment" 
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content section */}
        <div className="container py-12">
          <div className="max-w-3xl mx-auto prose">
            <h2>About Mission Shakti</h2>
            <p>
              Mission Shakti is a holistic approach to women's safety and empowerment, focusing on prevention, protection, and rehabilitation. The mission aims to create a safe environment for women and girls across India.
            </p>
            
            <h2>Key Objectives</h2>
            <ul>
              <li>Ensuring women's safety and security in public and private spaces</li>
              <li>Providing support services to women affected by violence</li>
              <li>Strengthening institutional mechanisms to address gender-based violence</li>
              <li>Economic empowerment through skill development and livelihood opportunities</li>
              <li>Raising awareness about women's rights and gender equality</li>
            </ul>
            
            <h2>How You Can Contribute</h2>
            <p>
              Through PANKHUDI, you can support Mission Shakti in various ways:
            </p>
            <ul>
              <li>Volunteer for women's safety workshops and awareness programs</li>
              <li>Provide professional services like legal aid, counseling, or healthcare</li>
              <li>Contribute resources for women's shelters and helplines</li>
              <li>Support skill development and training programs</li>
              <li>Sponsor safety equipment or digital solutions for women's security</li>
            </ul>
            
            <div className="flex justify-center mt-8">
              <Button asChild size="lg">
                <NavLink to="/search-organization?mission=shakti">Find Organizations</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MissionShakti;
