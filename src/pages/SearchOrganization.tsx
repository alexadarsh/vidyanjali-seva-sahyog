
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, MapPin, Phone } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Mock data for organizations
const organizations = [
  {
    id: 1,
    name: 'Shakti Women Empowerment Center',
    address: '123 Main Road, Delhi',
    district: 'Central Delhi',
    state: 'Delhi',
    contact: '9876543210',
    serviceActivities: 8,
    materialRequests: 3,
    type: 'onboarded'
  },
  {
    id: 2,
    name: 'Children\'s Future Society',
    address: '456 Park Avenue, Mumbai',
    district: 'Mumbai Suburban',
    state: 'Maharashtra',
    contact: '9876123450',
    serviceActivities: 5,
    materialRequests: 10,
    type: 'onboarded'
  },
  {
    id: 3,
    name: 'Skill Development Institute',
    address: '789 Tech Park, Bangalore',
    district: 'Bangalore Urban',
    state: 'Karnataka',
    contact: '9871234560',
    serviceActivities: 12,
    materialRequests: 6,
    type: 'onboarded'
  },
  {
    id: 4,
    name: 'Vatsalya Child Care Home',
    address: '234 River View, Chennai',
    district: 'Chennai',
    state: 'Tamil Nadu',
    contact: '9876987650',
    serviceActivities: 0,
    materialRequests: 0,
    type: 'all'
  },
  {
    id: 5,
    name: 'Women\'s Welfare Association',
    address: '567 Hill Road, Pune',
    district: 'Pune',
    state: 'Maharashtra',
    contact: '9812345670',
    serviceActivities: 0,
    materialRequests: 0,
    type: 'all'
  }
];

const OrganizationCard = ({ organization }: { organization: typeof organizations[0] }) => {
  return (
    <Card className="border-2 hover:border-primary transition-all duration-300">
      <CardContent className="p-5">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-lg mb-2">{organization.name}</h3>
          {organization.type === 'onboarded' ? (
            <Badge variant="outline" className="bg-green-100 text-green-800">Onboarded</Badge>
          ) : (
            <Badge variant="outline" className="bg-yellow-100 text-yellow-800">Not Onboarded</Badge>
          )}
        </div>
        
        <div className="space-y-2 text-sm text-muted-foreground mb-4">
          <div className="flex items-start">
            <MapPin size={16} className="mr-2 mt-0.5" />
            <div>
              <p>{organization.address}</p>
              <p>{organization.district}, {organization.state}</p>
            </div>
          </div>
          <div className="flex items-center">
            <Phone size={16} className="mr-2" />
            <p>{organization.contact}</p>
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <div className="text-sm">
            <span className="inline-block mr-4">
              <strong className="text-primary">{organization.serviceActivities}</strong> Activities
            </span>
            <span className="inline-block">
              <strong className="text-secondary">{organization.materialRequests}</strong> Requests
            </span>
          </div>
          <Button size="sm" disabled={organization.type !== 'onboarded'}>
            View
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const SearchOrganization = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedState, setSelectedState] = React.useState('');
  const [selectedDistrict, setSelectedDistrict] = React.useState('');
  const [filteredOrganizations, setFilteredOrganizations] = React.useState(organizations);
  const [activeTab, setActiveTab] = React.useState('onboarded');
  
  // Filter organizations based on search term, state, district and active tab
  React.useEffect(() => {
    const filtered = organizations.filter(org => {
      const matchesSearch = !searchTerm || 
        org.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        org.address.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesState = !selectedState || org.state === selectedState;
      const matchesDistrict = !selectedDistrict || org.district === selectedDistrict;
      const matchesTab = activeTab === 'all' || org.type === activeTab;
      
      return matchesSearch && matchesState && matchesDistrict && matchesTab;
    });
    
    setFilteredOrganizations(filtered);
  }, [searchTerm, selectedState, selectedDistrict, activeTab]);
  
  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Already handled by useEffect
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Search Organizations</h1>
          <p className="text-muted-foreground max-w-3xl">
            Find organizations that are part of PANKHUDI and discover their ongoing activities and requests.
          </p>
        </div>
        
        <div className="mb-8">
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search by name or address"
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={selectedState} onValueChange={setSelectedState}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="State" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all_states">All States</SelectItem>
                  <SelectItem value="Delhi">Delhi</SelectItem>
                  <SelectItem value="Maharashtra">Maharashtra</SelectItem>
                  <SelectItem value="Karnataka">Karnataka</SelectItem>
                  <SelectItem value="Tamil Nadu">Tamil Nadu</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="District" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all_districts">All Districts</SelectItem>
                  <SelectItem value="Central Delhi">Central Delhi</SelectItem>
                  <SelectItem value="Mumbai Suburban">Mumbai Suburban</SelectItem>
                  <SelectItem value="Bangalore Urban">Bangalore Urban</SelectItem>
                  <SelectItem value="Chennai">Chennai</SelectItem>
                  <SelectItem value="Pune">Pune</SelectItem>
                </SelectContent>
              </Select>
              
              <Button type="submit" className="flex items-center gap-2">
                <Filter size={16} />
                <span>Filter</span>
              </Button>
            </div>
          </form>
        </div>
        
        <Tabs 
          defaultValue="onboarded" 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="mb-6">
            <TabsTrigger value="onboarded">Onboarded Organizations</TabsTrigger>
            <TabsTrigger value="all">All Organizations</TabsTrigger>
          </TabsList>
          
          <TabsContent value={activeTab} className="mt-0">
            {filteredOrganizations.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredOrganizations.map(org => (
                  <OrganizationCard key={org.id} organization={org} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No organizations found matching your search criteria.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default SearchOrganization;
