
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock data for recent requests
const serviceRequests = [
  {
    id: 'req-001',
    title: 'Women Safety Workshop',
    organization: 'Shakti Center, Delhi',
    category: 'Mission Shakti',
    type: 'Service',
    deadline: '2023-06-15',
    tags: ['Workshop', 'Training']
  },
  {
    id: 'req-002',
    title: 'Child Counseling Sessions',
    organization: 'Child Welfare Home, Mumbai',
    category: 'Mission Vatsalya',
    type: 'Service',
    deadline: '2023-06-20',
    tags: ['Counseling', 'Mental Health']
  },
  {
    id: 'req-003',
    title: 'Digital Literacy Training',
    organization: 'Skill Development Center, Bangalore',
    category: 'Mission Saksham',
    type: 'Service',
    deadline: '2023-06-25',
    tags: ['Digital Skills', 'Training']
  }
];

const materialRequests = [
  {
    id: 'req-004',
    title: 'Educational Tablets for Girls',
    organization: 'Shakti Center, Pune',
    category: 'Mission Shakti',
    type: 'Material',
    quantity: 25,
    tags: ['Digital', 'Education']
  },
  {
    id: 'req-005',
    title: "Children's Books & Toys",
    organization: 'Child Welfare Home, Chennai',
    category: 'Mission Vatsalya',
    type: 'Material',
    quantity: 100,
    tags: ['Books', 'Toys']
  },
  {
    id: 'req-006',
    title: 'Sewing Machines',
    organization: 'Women Empowerment Center, Kolkata',
    category: 'Mission Saksham',
    type: 'Material',
    quantity: 10,
    tags: ['Equipment', 'Vocational']
  }
];

const RequestCard = ({ request, type }: { request: any, type: 'service' | 'material' }) => {
  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'Mission Shakti': return 'bg-purple-100 text-purple-800';
      case 'Mission Vatsalya': return 'bg-cyan-100 text-cyan-800';
      case 'Mission Saksham': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <Badge variant="outline" className={getCategoryColor(request.category)}>
            {request.category}
          </Badge>
          <Badge variant="secondary">{request.type}</Badge>
        </div>
        <CardTitle className="mt-2">{request.title}</CardTitle>
        <CardDescription>{request.organization}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-1 mb-4">
          {request.tags.map((tag: string) => (
            <Badge key={tag} variant="outline" className="bg-muted">{tag}</Badge>
          ))}
        </div>
        
        {type === 'service' ? (
          <div className="text-sm text-muted-foreground">
            <span className="font-medium">Deadline:</span> {new Date(request.deadline).toLocaleDateString()}
          </div>
        ) : (
          <div className="text-sm text-muted-foreground">
            <span className="font-medium">Quantity Needed:</span> {request.quantity}
          </div>
        )}
        
        <Button className="w-full mt-4">View Details</Button>
      </CardContent>
    </Card>
  );
};

const RecentRequests = () => {
  return (
    <section className="bg-muted py-12 md:py-16">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Recent Requests</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse through the latest service and material requests from organizations across the country.
          </p>
        </div>
        
        <Tabs defaultValue="services" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="services">Service Requests</TabsTrigger>
              <TabsTrigger value="materials">Material Requests</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="services" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceRequests.map(request => (
                <RequestCard key={request.id} request={request} type="service" />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="materials" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {materialRequests.map(request => (
                <RequestCard key={request.id} request={request} type="material" />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="flex justify-center mt-8">
          <Button variant="outline" size="lg">
            View All Requests
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecentRequests;
