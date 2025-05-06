
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const MissionVatsalya = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero section */}
        <div className="bg-gradient-to-r from-cyan-600 to-cyan-800 text-white py-16">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-1/2">
                <h1 className="text-4xl font-bold mb-4">Mission Vatsalya</h1>
                <p className="text-lg mb-6">Ensuring the welfare, safety, and development of children across India.</p>
                <Button asChild size="lg" variant="secondary" className="gap-2">
                  <NavLink to="/search-organization?mission=vatsalya">
                    <BookOpen className="h-5 w-5" /> Support Mission Vatsalya
                  </NavLink>
                </Button>
              </div>
              <div className="md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                    alt="Child welfare" 
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
            <h2>About Mission Vatsalya</h2>
            <p>
              Mission Vatsalya focuses on securing the rights of children to ensure their healthy development and welfare. The mission recognizes that children are the future of the nation and aims to provide them with the necessary environment for their growth.
            </p>
            
            <h2>Key Objectives</h2>
            <ul>
              <li>Ensuring child protection through appropriate institutional care</li>
              <li>Providing support services to children in difficult circumstances</li>
              <li>Promoting child education and development programs</li>
              <li>Creating child-friendly spaces and services</li>
              <li>Supporting childcare institutions and adoption services</li>
            </ul>
            
            <h2>How You Can Contribute</h2>
            <p>
              Through PANKHUDI, you can support Mission Vatsalya in various ways:
            </p>
            <ul>
              <li>Volunteer for child education and care programs</li>
              <li>Provide professional services like counseling, healthcare, or special education</li>
              <li>Donate educational materials, books, toys, and games</li>
              <li>Support nutrition programs for children</li>
              <li>Sponsor recreational activities and development workshops</li>
            </ul>
            
            <div className="flex justify-center mt-8">
              <Button asChild size="lg">
                <NavLink to="/search-organization?mission=vatsalya">Find Organizations</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MissionVatsalya;
