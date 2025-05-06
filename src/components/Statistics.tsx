
import React from 'react';
import StatsCard from './StatsCard';
import { Building, Users, Handshake, PackageOpen } from 'lucide-react';

const Statistics = () => {
  return (
    <section className="container py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Together we're making a difference in communities across India.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard 
          title="Organizations" 
          value="2,500+" 
          description="Registered across India"
          icon={<Building className="w-full h-full" />}
        />
        
        <StatsCard 
          title="Volunteers" 
          value="15,000+" 
          description="Active contributors"
          icon={<Users className="w-full h-full" />}
        />
        
        <StatsCard 
          title="Completed Activities" 
          value="8,750+" 
          description="Services provided"
          icon={<Handshake className="w-full h-full" />}
        />
        
        <StatsCard 
          title="Material Contributions" 
          value="₹120M+" 
          description="Worth of resources donated"
          icon={<PackageOpen className="w-full h-full" />}
        />
      </div>
    </section>
  );
};

export default Statistics;
