
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Importing the same mock data from RecentRequests
import { serviceRequests, materialRequests } from '@/data/requestsData';

const AllRequests = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  
  // Combined requests for display
  const allServiceRequests = serviceRequests;
  const allMaterialRequests = materialRequests;
  
  // Filter function based on search term and category
  const filterRequests = (requests: any[]) => {
    return requests.filter(req => {
      const matchesSearch = req.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           req.organization.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = categoryFilter === 'all' || req.category.includes(categoryFilter);
      return matchesSearch && matchesCategory;
    });
  };
  
  const filteredServiceRequests = filterRequests(allServiceRequests);
  const filteredMaterialRequests = filterRequests(allMaterialRequests);
  
  const handleViewDetails = (request: any, type: 'service' | 'material') => {
    navigate(`/request/${request.id}`, { state: { request, type } });
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container py-12">
        <h1 className="text-3xl font-bold mb-2">All Requests</h1>
        <p className="text-muted-foreground mb-8">Browse all service and material requests from organizations</p>
        
        {/* Search and filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              className="pl-10"
              placeholder="Search by title or organization"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="w-full md:w-64">
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Mission Shakti">Mission Shakti</SelectItem>
                <SelectItem value="Mission Vatsalya">Mission Vatsalya</SelectItem>
                <SelectItem value="Mission Saksham">Mission Saksham</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* Tabs */}
        <Tabs defaultValue="services" className="w-full">
          <div className="mb-8">
            <TabsList className="mb-2">
              <TabsTrigger value="services">Service Requests</TabsTrigger>
              <TabsTrigger value="materials">Material Requests</TabsTrigger>
            </TabsList>
            
            {/* Services tab */}
            <TabsContent value="services">
              {filteredServiceRequests.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredServiceRequests.map(request => (
                    <RequestCard 
                      key={request.id} 
                      request={request} 
                      type="service"
                      onViewDetails={() => handleViewDetails(request, 'service')}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No service requests found matching your criteria.</p>
                </div>
              )}
            </TabsContent>
            
            {/* Materials tab */}
            <TabsContent value="materials">
              {filteredMaterialRequests.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredMaterialRequests.map(request => (
                    <RequestCard 
                      key={request.id} 
                      request={request} 
                      type="material"
                      onViewDetails={() => handleViewDetails(request, 'material')}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No material requests found matching your criteria.</p>
                </div>
              )}
            </TabsContent>
          </div>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

// RequestCard component
const RequestCard = ({ request, type, onViewDetails }: { request: any, type: 'service' | 'material', onViewDetails: () => void }) => {
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
        
        <Button className="w-full mt-4" onClick={onViewDetails}>View Details</Button>
      </CardContent>
    </Card>
  );
};

export default AllRequests;
