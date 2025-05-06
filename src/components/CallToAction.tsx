
import React from 'react';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="bg-primary text-primary-foreground py-16">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Make a Difference?</h2>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8">
          Join thousands of organizations and volunteers already contributing to women and child welfare initiatives across India.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="secondary">
            <NavLink to="/register">Register Now</NavLink>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
            <NavLink to="/search-organization">Browse Opportunities</NavLink>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
