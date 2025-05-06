
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const steps = [
  {
    number: '01',
    title: 'Registration',
    description: 'Organizations and volunteers register on the platform'
  },
  {
    number: '02',
    title: 'Identify Needs',
    description: 'Organizations publish service/activity requests and material needs'
  },
  {
    number: '03',
    title: 'Match & Connect',
    description: 'Volunteers browse and select opportunities that match their skills'
  },
  {
    number: '04',
    title: 'Collaborate',
    description: 'Organizations and volunteers coordinate to implement initiatives'
  }
];

const HowItWorks = () => {
  return (
    <section className="container py-12 md:py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Connecting organizations with volunteers and resources to empower women and children through 
          a simple, transparent process.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <Card className="border-2 border-muted transition-all duration-300 hover:border-primary">
              <CardContent className="pt-6">
                <span className="inline-block text-5xl font-bold text-primary/20">{step.number}</span>
                <h3 className="text-xl font-semibold mt-2 mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
            
            {index < steps.length - 1 && (
              <div className="hidden lg:flex items-center justify-center">
                <ArrowRight className="text-muted-foreground" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
