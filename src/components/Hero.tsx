
import React from 'react';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-background overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-primary to-transparent"></div>
        <div className="absolute grid grid-cols-10 gap-2 w-full h-full">
          {Array.from({ length: 100 }).map((_, i) => (
            <div 
              key={i} 
              className="aspect-square rounded-full bg-primary/20"
              style={{
                transform: `translate(${Math.random() * 100}%, ${Math.random() * 100}%)`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="container relative z-10 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-8 text-center md:text-left animate-fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Empowering Communities Through <span className="text-primary">PANKHUDI</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Join the initiative by the Ministry of Women and Child Development to strengthen 
            support systems through community and private sector involvement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg" className="gap-2">
              <NavLink to="/register">
                Get Involved <ChevronRight size={16} />
              </NavLink>
            </Button>
            <Button asChild variant="outline" size="lg">
              <NavLink to="/search-organization">
                Find Organizations
              </NavLink>
            </Button>
          </div>
        </div>
        
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full shakti-gradient opacity-70 animate-float"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full vatsalya-gradient opacity-70 animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="relative z-10 border-4 border-background rounded-2xl shadow-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Empowerment" 
                className="w-full aspect-video object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
