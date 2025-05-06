
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ChartBar, CalendarCheck, Download, TrendingUp, CheckCircle2, AlertCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Monitoring = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Project Monitoring & Reporting</h1>
          <p className="text-muted-foreground">Track fund utilization and project progress</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Fund Utilization</CardTitle>
              <CardDescription>Overall across all projects</CardDescription>
            </CardHeader>
            <CardContent className="space-y-1">
              <div className="flex justify-between items-center text-sm">
                <span>₹185.2 Cr utilized</span>
                <span className="font-medium">78%</span>
              </div>
              <Progress value={78} className="h-2" />
              <p className="text-xs text-muted-foreground">Out of ₹237.5 Cr allocated</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Milestone Completion</CardTitle>
              <CardDescription>Project deliverables status</CardDescription>
            </CardHeader>
            <CardContent className="space-y-1">
              <div className="flex justify-between items-center text-sm">
                <span>523 milestones completed</span>
                <span className="font-medium">63%</span>
              </div>
              <Progress value={63} className="h-2" />
              <p className="text-xs text-muted-foreground">Out of 829 planned milestones</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Projects at Risk</CardTitle>
              <CardDescription>Requiring attention</CardDescription>
            </CardHeader>
            <CardContent className="space-y-1">
              <div className="flex justify-between items-center text-sm">
                <span className="text-amber-500 font-medium">18 projects flagged</span>
                <span className="font-medium">14%</span>
              </div>
              <Progress value={14} className="h-2 bg-amber-100 [&>div]:bg-amber-500" />
              <p className="text-xs text-muted-foreground">Out of 127 active projects</p>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="w-full justify-start mb-6 border-b rounded-none bg-transparent p-0">
            <TabsTrigger 
              value="projects" 
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
            >
              Project Progress
            </TabsTrigger>
            <TabsTrigger 
              value="funds" 
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
            >
              Fund Utilization
            </TabsTrigger>
            <TabsTrigger 
              value="milestones" 
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
            >
              Milestones & KPIs
            </TabsTrigger>
          </TabsList>
          
          <div className="flex justify-between items-center mb-4">
            <div className="space-x-2">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by mission" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all_missions">All Missions</SelectItem>
                  <SelectItem value="shakti">Mission Shakti</SelectItem>
                  <SelectItem value="vatsalya">Mission Vatsalya</SelectItem>
                  <SelectItem value="saksham">Mission Saksham</SelectItem>
                </SelectContent>
              </Select>
              
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all_statuses">All Statuses</SelectItem>
                  <SelectItem value="on_track">On Track</SelectItem>
                  <SelectItem value="at_risk">At Risk</SelectItem>
                  <SelectItem value="delayed">Delayed</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button variant="outline" className="flex items-center gap-2">
              <Download size={16} />
              <span>Export Data</span>
            </Button>
          </div>
          
          <TabsContent value="projects">
            <Card>
              <CardContent className="p-0">
                <div className="divide-y">
                  {/* Project 1 */}
                  <div className="p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-medium">Women's Vocational Training Centers</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="bg-purple-100 text-purple-800">Mission Shakti</Badge>
                          <span className="text-sm text-muted-foreground">Implementing Partner: Smile Foundation</span>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-800 flex items-center gap-1">
                        <CheckCircle2 size={14} />
                        On Track
                      </Badge>
                    </div>
                    
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Overall Progress</span>
                          <span className="font-medium">72%</span>
                        </div>
                        <Progress value={72} className="h-2" />
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Budget:</span>
                          <span className="font-medium ml-1">₹48.5 Lakhs</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Timeline:</span>
                          <span className="font-medium ml-1">15 months</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Last Updated:</span>
                          <span className="font-medium ml-1">3 days ago</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-3 flex justify-end">
                      <Button variant="outline" size="sm">View Details</Button>
                    </div>
                  </div>
                  
                  {/* Project 2 */}
                  <div className="p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-medium">Child Protection & Safe Spaces Initiative</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="bg-cyan-100 text-cyan-800">Mission Vatsalya</Badge>
                          <span className="text-sm text-muted-foreground">Implementing Partner: CRY</span>
                        </div>
                      </div>
                      <Badge className="bg-amber-100 text-amber-800 flex items-center gap-1">
                        <AlertCircle size={14} />
                        At Risk
                      </Badge>
                    </div>
                    
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Overall Progress</span>
                          <span className="font-medium">38%</span>
                        </div>
                        <Progress value={38} className="h-2 bg-amber-100 [&>div]:bg-amber-500" />
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Budget:</span>
                          <span className="font-medium ml-1">₹1.2 Cr</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Timeline:</span>
                          <span className="font-medium ml-1">24 months</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Last Updated:</span>
                          <span className="font-medium ml-1">1 week ago</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-3 flex justify-end">
                      <Button variant="outline" size="sm">View Details</Button>
                    </div>
                  </div>
                  
                  {/* Project 3 */}
                  <div className="p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-medium">Digital Skills & Entrepreneurship Program</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="bg-orange-100 text-orange-800">Mission Saksham</Badge>
                          <span className="text-sm text-muted-foreground">Implementing Partner: Pratham</span>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-800 flex items-center gap-1">
                        <CheckCircle2 size={14} />
                        On Track
                      </Badge>
                    </div>
                    
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Overall Progress</span>
                          <span className="font-medium">85%</span>
                        </div>
                        <Progress value={85} className="h-2" />
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Budget:</span>
                          <span className="font-medium ml-1">₹65.8 Lakhs</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Timeline:</span>
                          <span className="font-medium ml-1">12 months</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Last Updated:</span>
                          <span className="font-medium ml-1">Yesterday</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-3 flex justify-end">
                      <Button variant="outline" size="sm">View Details</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center p-4 border-t">
                <Button variant="outline">Load More Projects</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="funds">
            <Card>
              <CardHeader>
                <CardTitle>Fund Utilization Breakdown</CardTitle>
                <CardDescription>Track financial utilization across projects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[350px] bg-muted rounded-md flex items-center justify-center mb-6">
                  <div className="text-center">
                    <ChartBar size={48} className="mx-auto text-muted-foreground mb-2" />
                    <p className="text-muted-foreground">Fund utilization chart will be displayed here</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="border rounded-md p-4">
                    <h3 className="font-medium mb-2">Mission Shakti Funds</h3>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Utilized: ₹83.6 Cr</span>
                        <span className="font-medium">82%</span>
                      </div>
                      <Progress value={82} className="h-2" />
                      <p className="text-xs text-muted-foreground">Out of ₹102 Cr allocated</p>
                    </div>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="font-medium mb-2">Mission Vatsalya Funds</h3>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Utilized: ₹57.8 Cr</span>
                        <span className="font-medium">72%</span>
                      </div>
                      <Progress value={72} className="h-2" />
                      <p className="text-xs text-muted-foreground">Out of ₹80.5 Cr allocated</p>
                    </div>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="font-medium mb-2">Mission Saksham Funds</h3>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Utilized: ₹43.8 Cr</span>
                        <span className="font-medium">80%</span>
                      </div>
                      <Progress value={80} className="h-2" />
                      <p className="text-xs text-muted-foreground">Out of ₹55 Cr allocated</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="milestones">
            <Card>
              <CardHeader>
                <CardTitle>Project Milestones & KPIs</CardTitle>
                <CardDescription>Track key performance indicators and milestone completion</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[350px] bg-muted rounded-md flex items-center justify-center mb-6">
                  <div className="text-center">
                    <TrendingUp size={48} className="mx-auto text-muted-foreground mb-2" />
                    <p className="text-muted-foreground">KPI performance chart will be displayed here</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="border rounded-md p-4">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-medium">Women Empowerment KPIs</h3>
                      <Button variant="link" size="sm" className="h-auto p-0">View Detailed Report</Button>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Women trained in vocational skills</span>
                          <span className="font-medium">15,824 / 20,000</span>
                        </div>
                        <Progress value={79} className="h-2" />
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Women placed in jobs/self-employed</span>
                          <span className="font-medium">8,536 / 12,000</span>
                        </div>
                        <Progress value={71} className="h-2" />
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Women aware of legal rights</span>
                          <span className="font-medium">42,650 / 50,000</span>
                        </div>
                        <Progress value={85} className="h-2" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-medium">Child Welfare KPIs</h3>
                      <Button variant="link" size="sm" className="h-auto p-0">View Detailed Report</Button>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Children enrolled in education programs</span>
                          <span className="font-medium">28,452 / 35,000</span>
                        </div>
                        <Progress value={81} className="h-2" />
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Children with improved nutrition</span>
                          <span className="font-medium">18,625 / 30,000</span>
                        </div>
                        <Progress value={62} className="h-2" />
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Children in safe shelter homes</span>
                          <span className="font-medium">3,850 / 5,000</span>
                        </div>
                        <Progress value={77} className="h-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default Monitoring;
