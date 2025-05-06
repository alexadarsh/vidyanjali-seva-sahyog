
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutPankhudi = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="container py-12">
          <h1 className="text-4xl font-bold mb-8 text-center">About PANKHUDI</h1>
          
          <div className="max-w-3xl mx-auto prose">
            <p className="lead">
              PANKHUDI is an initiative by the Ministry of Women and Child Development, Government of India with the aim to strengthen support systems through community and private sector involvement across the country.
            </p>
            
            <h2>Our Vision</h2>
            <p>
              To create a platform that connects organizations working for women and child development with individuals, corporations, and NGOs who want to contribute to these causes through service activities or material contributions.
            </p>
            
            <h2>Our Mission</h2>
            <p>
              To facilitate meaningful engagement between welfare organizations and volunteers to address the needs of women and children through our three core mission areas: Shakti, Vatsalya, and Saksham.
            </p>
            
            <h2>How PANKHUDI Works</h2>
            <p>
              PANKHUDI serves as a bridge between organizations that need support and individuals or entities that want to contribute. Organizations can register and post their requirements, while volunteers can browse these requests and offer their assistance.
            </p>
            
            <h3>Our Key Features:</h3>
            <ul>
              <li>Simple registration process for both organizations and volunteers</li>
              <li>Detailed profiles for registered organizations</li>
              <li>Posting service requirements and material needs</li>
              <li>Search functionality to find organizations by location, category, or need</li>
              <li>Secure communication between organizations and volunteers</li>
              <li>Verification and feedback systems</li>
            </ul>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPankhudi;
