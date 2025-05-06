
import React from 'react';
import { Heart, BookOpen, Gem } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import MissionCard from '@/components/MissionCard';
import HowItWorks from '@/components/HowItWorks';
import RecentRequests from '@/components/RecentRequests';
import Statistics from '@/components/Statistics';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Mission Section */}
        <section className="container py-12 md:py-16">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Missions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the three key missions that drive our work in empowering women, protecting children, and developing skills.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MissionCard
              title="Mission Shakti"
              description="Empowering women through safety, protection, and independence"
              icon={<Heart className="w-8 h-8" />}
              link="/mission-shakti"
              gradient="shakti-gradient"
            />
            
            <MissionCard
              title="Mission Vatsalya"
              description="Ensuring the welfare, safety, and development of children"
              icon={<BookOpen className="w-8 h-8" />}
              link="/mission-vatsalya"
              gradient="vatsalya-gradient"
            />
            
            <MissionCard
              title="Mission Saksham"
              description="Building skills, capacities, and livelihood opportunities"
              icon={<Gem className="w-8 h-8" />}
              link="/mission-saksham"
              gradient="saksham-gradient"
            />
          </div>
        </section>
        
        <HowItWorks />
        <Statistics />
        <RecentRequests />
        <Testimonials />
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
