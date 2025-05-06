
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { ChartBar, Eye, Users, UserCheck, GraduationCap, Heart, Search, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PublicDashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container py-8">
        <div className="mb-6 text-center max-w-3xl mx-auto">
          <Badge variant="outline" className="mb-2">Public View</Badge>
          <h1 className="text-4xl font-bold mb-4">PANKHUDI Public Dashboard</h1>
          <p className="text-muted-foreground">
            Explore ongoing CSR projects, their locations, and impact metrics across our three mission areas
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Total Projects</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold">127</p>
                  <p className="text-sm text-muted-foreground">Across 18 states</p>
                </div>
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Beneficiaries Reached</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold">2.8M</p>
                  <p className="text-sm text-muted-foreground">Women and children</p>
                </div>
                <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">CSR Investment</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold">₹237.5 Cr</p>
                  <p className="text-sm text-muted-foreground">Total allocated</p>
                </div>
                <div className="h-12 w-12 bg-cyan-100 rounded-full flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-cyan-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Partner Organizations</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold">85</p>
                  <p className="text-sm text-muted-foreground">NGOs & CSR entities</p>
                </div>
                <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <UserCheck className="h-6 w-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card className="mb-8">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Project Distribution</CardTitle>
                <CardDescription>By mission area and geographical coverage</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Mission Area" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Missions</SelectItem>
                    <SelectItem value="shakti">Mission Shakti</SelectItem>
                    <SelectItem value="vatsalya">Mission Vatsalya</SelectItem>
                    <SelectItem value="saksham">Mission Saksham</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-4">Projects by Mission</h3>
                <div className="h-[300px] bg-muted rounded-md flex items-center justify-center">
                  <div className="text-center">
                    <ChartBar size={48} className="mx-auto text-muted-foreground mb-2" />
                    <p className="text-muted-foreground">Mission distribution chart will be displayed here</p>
                  </div>
                </div>
                
                <div className="mt-4 space-y-3">
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <span>Mission Shakti</span>
                      </div>
                      <span className="font-medium">52 projects (41%)</span>
                    </div>
                    <Progress value={41} className="h-1.5 bg-purple-100 [&>div]:bg-purple-500" />
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                        <span>Mission Vatsalya</span>
                      </div>
                      <span className="font-medium">43 projects (34%)</span>
                    </div>
                    <Progress value={34} className="h-1.5 bg-cyan-100 [&>div]:bg-cyan-500" />
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                        <span>Mission Saksham</span>
                      </div>
                      <span className="font-medium">32 projects (25%)</span>
                    </div>
                    <Progress value={25} className="h-1.5 bg-orange-100 [&>div]:bg-orange-500" />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4">Geographical Coverage</h3>
                <div className="h-[300px] bg-muted rounded-md flex items-center justify-center relative">
                  <div className="text-center">
                    <MapPin size={48} className="mx-auto text-muted-foreground mb-2" />
                    <p className="text-muted-foreground">Map visualization will be displayed here</p>
                  </div>
                  
                  {/* Map markers placeholder */}
                  <div className="absolute top-1/3 left-1/3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                  </div>
                  <div className="absolute top-1/2 left-2/3">
                    <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
                  </div>
                  <div className="absolute bottom-1/3 right-1/4">
                    <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="flex items-center justify-between p-2 border rounded-md">
                    <span className="text-sm">Maharashtra</span>
                    <Badge variant="outline">24 projects</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 border rounded-md">
                    <span className="text-sm">Delhi</span>
                    <Badge variant="outline">18 projects</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 border rounded-md">
                    <span className="text-sm">Karnataka</span>
                    <Badge variant="outline">15 projects</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 border rounded-md">
                    <span className="text-sm">Tamil Nadu</span>
                    <Badge variant="outline">12 projects</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Tabs defaultValue="shakti" className="w-full">
          <TabsList className="w-full justify-center mb-6">
            <TabsTrigger value="shakti" className="px-6">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 bg-purple-500 rounded-full"></span>
                <span>Mission Shakti</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="vatsalya" className="px-6">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 bg-cyan-500 rounded-full"></span>
                <span>Mission Vatsalya</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="saksham" className="px-6">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 bg-orange-500 rounded-full"></span>
                <span>Mission Saksham</span>
              </div>
            </TabsTrigger>
          </TabsList>
          
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Featured Projects</h2>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search projects" className="pl-9 max-w-[200px]" />
              </div>
            </div>
          </div>
          
          <TabsContent value="shakti">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Women's Safety & Legal Aid</CardTitle>
                  <CardDescription>Delhi & NCR Region</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="h-40 bg-muted rounded-md flex items-center justify-center">
                      <Heart className="h-10 w-10 text-muted-foreground" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Project Progress</span>
                        <span className="font-medium">78%</span>
                      </div>
                      <Progress value={78} className="h-2" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-muted-foreground">Budget:</span>
                        <span className="font-medium ml-1">₹1.5 Cr</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">CSR Partner:</span>
                        <span className="font-medium ml-1">Reliance</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">NGO:</span>
                        <span className="font-medium ml-1">PRIA</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Impact:</span>
                        <span className="font-medium ml-1">25,000+</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Women's Digital Literacy</CardTitle>
                  <CardDescription>Maharashtra</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="h-40 bg-muted rounded-md flex items-center justify-center">
                      <Heart className="h-10 w-10 text-muted-foreground" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Project Progress</span>
                        <span className="font-medium">62%</span>
                      </div>
                      <Progress value={62} className="h-2" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-muted-foreground">Budget:</span>
                        <span className="font-medium ml-1">₹85 L</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">CSR Partner:</span>
                        <span className="font-medium ml-1">TCS</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">NGO:</span>
                        <span className="font-medium ml-1">Pratham</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Impact:</span>
                        <span className="font-medium ml-1">15,000+</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Women's Health Initiative</CardTitle>
                  <CardDescription>Karnataka</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="h-40 bg-muted rounded-md flex items-center justify-center">
                      <Heart className="h-10 w-10 text-muted-foreground" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Project Progress</span>
                        <span className="font-medium">45%</span>
                      </div>
                      <Progress value={45} className="h-2" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-muted-foreground">Budget:</span>
                        <span className="font-medium ml-1">₹1.2 Cr</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">CSR Partner:</span>
                        <span className="font-medium ml-1">Infosys</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">NGO:</span>
                        <span className="font-medium ml-1">CRY</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Impact:</span>
                        <span className="font-medium ml-1">18,000+</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="vatsalya">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Early Childhood Development</CardTitle>
                  <CardDescription>Multiple States</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="h-40 bg-muted rounded-md flex items-center justify-center">
                      <GraduationCap className="h-10 w-10 text-muted-foreground" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Project Progress</span>
                        <span className="font-medium">85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-muted-foreground">Budget:</span>
                        <span className="font-medium ml-1">₹2.2 Cr</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">CSR Partner:</span>
                        <span className="font-medium ml-1">HDFC</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">NGO:</span>
                        <span className="font-medium ml-1">Save the Children</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Impact:</span>
                        <span className="font-medium ml-1">30,000+</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Child Protection & Safe Spaces</CardTitle>
                  <CardDescription>Delhi, UP, Bihar</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="h-40 bg-muted rounded-md flex items-center justify-center">
                      <GraduationCap className="h-10 w-10 text-muted-foreground" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Project Progress</span>
                        <span className="font-medium">38%</span>
                      </div>
                      <Progress value={38} className="h-2" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-muted-foreground">Budget:</span>
                        <span className="font-medium ml-1">₹1.2 Cr</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">CSR Partner:</span>
                        <span className="font-medium ml-1">Tata Trusts</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">NGO:</span>
                        <span className="font-medium ml-1">CRY</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Impact:</span>
                        <span className="font-medium ml-1">22,000+</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Child Nutrition Program</CardTitle>
                  <CardDescription>Maharashtra, Gujarat</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="h-40 bg-muted rounded-md flex items-center justify-center">
                      <GraduationCap className="h-10 w-10 text-muted-foreground" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Project Progress</span>
                        <span className="font-medium">72%</span>
                      </div>
                      <Progress value={72} className="h-2" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-muted-foreground">Budget:</span>
                        <span className="font-medium ml-1">₹1.8 Cr</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">CSR Partner:</span>
                        <span className="font-medium ml-1">Reliance Foundation</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">NGO:</span>
                        <span className="font-medium ml-1">Akshaya Patra</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Impact:</span>
                        <span className="font-medium ml-1">45,000+</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="saksham">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Digital Skills for Youth</CardTitle>
                  <CardDescription>Karnataka, Tamil Nadu</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="h-40 bg-muted rounded-md flex items-center justify-center">
                      <Users className="h-10 w-10 text-muted-foreground" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Project Progress</span>
                        <span className="font-medium">85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-muted-foreground">Budget:</span>
                        <span className="font-medium ml-1">₹65.8 L</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">CSR Partner:</span>
                        <span className="font-medium ml-1">Microsoft</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">NGO:</span>
                        <span className="font-medium ml-1">Pratham</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Impact:</span>
                        <span className="font-medium ml-1">12,000+</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Vocational Training Centers</CardTitle>
                  <CardDescription>Multiple States</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="h-40 bg-muted rounded-md flex items-center justify-center">
                      <Users className="h-10 w-10 text-muted-foreground" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Project Progress</span>
                        <span className="font-medium">62%</span>
                      </div>
                      <Progress value={62} className="h-2" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-muted-foreground">Budget:</span>
                        <span className="font-medium ml-1">₹1.5 Cr</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">CSR Partner:</span>
                        <span className="font-medium ml-1">L&T</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">NGO:</span>
                        <span className="font-medium ml-1">Don Bosco</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Impact:</span>
                        <span className="font-medium ml-1">20,000+</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Rural Entrepreneurship</CardTitle>
                  <CardDescription>Maharashtra, Gujarat</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="h-40 bg-muted rounded-md flex items-center justify-center">
                      <Users className="h-10 w-10 text-muted-foreground" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Project Progress</span>
                        <span className="font-medium">48%</span>
                      </div>
                      <Progress value={48} className="h-2" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-muted-foreground">Budget:</span>
                        <span className="font-medium ml-1">₹95 L</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">CSR Partner:</span>
                        <span className="font-medium ml-1">HDFC Bank</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">NGO:</span>
                        <span className="font-medium ml-1">BAIF</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Impact:</span>
                        <span className="font-medium ml-1">8,000+</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-8 flex justify-center">
          <Button size="lg" className="px-8">View All Projects</Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PublicDashboard;
