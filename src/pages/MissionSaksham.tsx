
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Gem } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const MissionSaksham = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero section */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-16">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-1/2">
                <h1 className="text-4xl font-bold mb-4">Mission Saksham</h1>
                <p className="text-lg mb-6">Building skills, capacities, and creating livelihood opportunities across India.</p>
                <Button asChild size="lg" variant="secondary" className="gap-2">
                  <NavLink to="/search-organization?mission=saksham">
                    <Gem className="h-5 w-5" /> Support Mission Saksham
                  </NavLink>
                </Button>
              </div>
              <div className="md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                    alt="Skill development" 
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
            <h2>About Mission Saksham</h2>
            <p>
              Mission Saksham focuses on enhancing skills and capacities to create sustainable livelihood opportunities, particularly for women and marginalized groups. The mission aims to empower individuals through training, mentoring, and access to resources.
            </p>
            
            <h2>Key Objectives</h2>
            <ul>
              <li>Providing vocational and skill development training</li>
              <li>Promoting entrepreneurship and self-employment</li>
              <li>Facilitating access to markets and financial services</li>
              <li>Building capacity of individuals and organizations</li>
              <li>Creating sustainable livelihood models</li>
            </ul>
            
            <h2>How You Can Contribute</h2>
            <p>
              Through PANKHUDI, you can support Mission Saksham in various ways:
            </p>
            <ul>
              <li>Volunteer as trainers or mentors for skill development programs</li>
              <li>Provide professional guidance and career counseling</li>
              <li>Donate equipment and materials for vocational training</li>
              <li>Support entrepreneurship initiatives through funding or mentoring</li>
              <li>Facilitate market linkages for products and services</li>
            </ul>
            
            <div className="flex justify-center mt-8">
              <Button asChild size="lg">
                <NavLink to="/search-organization?mission=saksham">Find Organizations</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MissionSaksham;
