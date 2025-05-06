
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MapPin, Search, Filter, Layers, ZoomIn } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ProjectMapping = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Project Mapping & Geo-tagging</h1>
          <p className="text-muted-foreground">Visualize project coverage and impact across regions</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Filter Projects</CardTitle>
                <CardDescription>Refine the map view</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="mission">Mission Area</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select mission" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Missions</SelectItem>
                      <SelectItem value="shakti">Mission Shakti</SelectItem>
                      <SelectItem value="vatsalya">Mission Vatsalya</SelectItem>
                      <SelectItem value="saksham">Mission Saksham</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="thematic">Thematic Focus</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Themes</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="health">Health</SelectItem>
                      <SelectItem value="nutrition">Nutrition</SelectItem>
                      <SelectItem value="women-empowerment">Women Empowerment</SelectItem>
                      <SelectItem value="child-protection">Child Protection</SelectItem>
                      <SelectItem value="skills">Skills Development</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="state">State</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All States</SelectItem>
                      <SelectItem value="delhi">Delhi</SelectItem>
                      <SelectItem value="maharashtra">Maharashtra</SelectItem>
                      <SelectItem value="karnataka">Karnataka</SelectItem>
                      <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                      <SelectItem value="gujarat">Gujarat</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="partner">Implementing Partner</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select partner" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Partners</SelectItem>
                      <SelectItem value="smile-foundation">Smile Foundation</SelectItem>
                      <SelectItem value="pratham">Pratham</SelectItem>
                      <SelectItem value="cry">CRY</SelectItem>
                      <SelectItem value="save-children">Save the Children</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="csr">CSR Entity</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select CSR entity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All CSR Entities</SelectItem>
                      <SelectItem value="tata">Tata Trust</SelectItem>
                      <SelectItem value="reliance">Reliance Foundation</SelectItem>
                      <SelectItem value="hdfc">HDFC Bank</SelectItem>
                      <SelectItem value="infosys">Infosys Foundation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button className="w-full flex items-center gap-2">
                  <Filter size={16} />
                  Apply Filters
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Project Density</CardTitle>
                <CardDescription>Project concentration by region</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <span className="text-sm">High Density (10+ projects)</span>
                  </div>
                  <span className="text-sm font-medium">3 regions</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-orange-500"></div>
                    <span className="text-sm">Medium Density (5-9 projects)</span>
                  </div>
                  <span className="text-sm font-medium">8 regions</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <span className="text-sm">Low Density (1-4 projects)</span>
                  </div>
                  <span className="text-sm font-medium">15 regions</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-gray-300"></div>
                    <span className="text-sm">No Projects</span>
                  </div>
                  <span className="text-sm font-medium">12 regions</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            <Card className="h-full flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Project Map</CardTitle>
                    <CardDescription>Visual representation of CSR projects</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon">
                      <Layers size={16} />
                    </Button>
                    <Button variant="outline" size="icon">
                      <ZoomIn size={16} />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow relative">
                {/* Map Placeholder */}
                <div className="w-full h-[500px] bg-muted rounded-md flex items-center justify-center relative">
                  <div className="text-center">
                    <MapPin size={48} className="mx-auto text-muted-foreground mb-2" />
                    <p className="text-muted-foreground">Interactive map will be displayed here</p>
                    <p className="text-sm text-muted-foreground">Showing 127 projects across India</p>
                  </div>
                  
                  {/* Sample map markers */}
                  <div className="absolute top-1/4 left-1/3">
                    <div className="relative">
                      <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center animate-pulse">
                        <span className="text-[10px] text-white font-bold">12</span>
                      </div>
                      <div className="absolute -bottom-1 -left-1 -right-1 h-2 bg-purple-500 opacity-30 rounded-full blur-sm"></div>
                    </div>
                  </div>
                  
                  <div className="absolute top-1/2 right-1/3">
                    <div className="relative">
                      <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center animate-pulse">
                        <span className="text-[10px] text-white font-bold">18</span>
                      </div>
                      <div className="absolute -bottom-1 -left-1 -right-1 h-2 bg-cyan-500 opacity-30 rounded-full blur-sm"></div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-1/3 left-1/2">
                    <div className="relative">
                      <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center animate-pulse">
                        <span className="text-[10px] text-white font-bold">7</span>
                      </div>
                      <div className="absolute -bottom-1 -left-1 -right-1 h-2 bg-orange-500 opacity-30 rounded-full blur-sm"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-xs">Shakti</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                    <span className="text-xs">Vatsalya</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-xs">Saksham</span>
                  </div>
                </div>
                
                <Button variant="link">Download Map Data</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectMapping;
