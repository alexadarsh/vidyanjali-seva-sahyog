
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "The Vidyanjali Seva Sahyog platform has transformed how we connect with volunteers. We've been able to implement programs that were previously impossible due to resource constraints.",
    author: "Priya Sharma",
    role: "Director, Women's Center, Jaipur",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
  },
  {
    quote: "Volunteering through this platform has been a rewarding experience. The process is smooth, and I can see the direct impact of my contributions on children's lives.",
    author: "Rahul Patel",
    role: "IT Professional & Volunteer",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
  },
  {
    quote: "As a corporate partner, we've found meaningful ways to direct our CSR initiatives through Vidyanjali Seva Sahyog, ensuring our resources reach those who need them most.",
    author: "Anita Singh",
    role: "CSR Head, TechInnovate Solutions",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
  }
];

const Testimonials = () => {
  return (
    <section className="container py-12 md:py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">What People Say</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Hear from the organizations and volunteers who are part of our community.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-background overflow-hidden border-2 h-full">
            <CardContent className="p-6 flex flex-col h-full">
              <Quote className="text-primary/20 w-10 h-10 mb-4" />
              <p className="text-foreground flex-grow italic mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src={testimonial.image} alt={testimonial.author} />
                  <AvatarFallback>{testimonial.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
