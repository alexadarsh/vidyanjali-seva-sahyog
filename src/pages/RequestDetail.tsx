
import React from 'react';
import { useLocation, useParams, NavLink } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Calendar, MapPin, Users } from 'lucide-react';

const RequestDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const { request, type } = location.state || {};
  
  // If no request data passed, we could fetch it using the ID
  
  if (!request) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Request not found</h1>
          <p className="mb-8">The request you are looking for does not exist or has been removed.</p>
          <Button asChild>
            <NavLink to="/">Back to Home</NavLink>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'Mission Shakti': return 'bg-purple-100 text-purple-800';
      case 'Mission Vatsalya': return 'bg-cyan-100 text-cyan-800';
      case 'Mission Saksham': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container py-12">
        <div className="mb-6">
          <Button variant="ghost" asChild className="mb-6">
            <NavLink to="/" className="flex items-center gap-2">
              <ArrowLeft size={16} /> Back to Home
            </NavLink>
          </Button>
          
          <div className="flex flex-wrap gap-2 mb-2">
            <Badge variant="outline" className={getCategoryColor(request.category)}>
              {request.category}
            </Badge>
            <Badge variant="secondary">{request.type}</Badge>
          </div>
          
          <h1 className="text-3xl font-bold mb-2">{request.title}</h1>
          <p className="text-muted-foreground text-lg">{request.organization}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">Request Details</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-2">Description</h3>
                    <p>This {type} request is part of the {request.category} initiative to support women and child development in India.</p>
                  </div>
                  
                  {type === 'service' ? (
                    <div>
                      <h3 className="font-medium mb-2">Timeline</h3>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-muted-foreground" />
                        <span>Deadline: {new Date(request.deadline).toLocaleDateString()}</span>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h3 className="font-medium mb-2">Required Materials</h3>
                      <div className="flex items-center gap-2">
                        <Users size={16} className="text-muted-foreground" />
                        <span>Quantity needed: {request.quantity}</span>
                      </div>
                    </div>
                  )}
                  
                  <div>
                    <h3 className="font-medium mb-2">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {request.tags.map((tag: string) => (
                        <Badge key={tag} variant="outline">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">Organization</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <MapPin size={16} className="text-muted-foreground mt-1" />
                    <div>
                      <span className="font-medium">Location</span>
                      <p>{request.organization.split(', ')[1]}</p>
                    </div>
                  </div>
                  
                  <div>
                    <Button className="w-full mb-2">Contact Organization</Button>
                    <Button variant="outline" className="w-full">Apply to Help</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RequestDetail;
