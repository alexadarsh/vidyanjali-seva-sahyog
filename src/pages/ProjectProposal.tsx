
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { FileText, Upload, CheckSquare, Clock, AlertCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ProjectProposal = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Project Proposal Management</h1>
          <p className="text-muted-foreground">Submit and manage CSR project proposals</p>
        </div>
        
        <Tabs defaultValue="submit" className="w-full">
          <TabsList className="w-full justify-start mb-6 border-b rounded-none bg-transparent p-0">
            <TabsTrigger 
              value="submit" 
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
            >
              Submit New Proposal
            </TabsTrigger>
            <TabsTrigger 
              value="track" 
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
            >
              Track Proposals
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="submit">
            <Card>
              <CardHeader>
                <CardTitle>New CSR Project Proposal</CardTitle>
                <CardDescription>Submit details for your new CSR project under PANKHUDI</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="project-title">Project Title</Label>
                    <Input id="project-title" placeholder="Enter a descriptive title for your project" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="thematic-area">Thematic Area</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select thematic area" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="nutrition">Nutrition</SelectItem>
                          <SelectItem value="health">Health</SelectItem>
                          <SelectItem value="women-empowerment">Women Empowerment</SelectItem>
                          <SelectItem value="child-protection">Child Protection</SelectItem>
                          <SelectItem value="skill-development">Skill Development</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="mission-alignment">Aligned Mission</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select alignment" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="shakti">Mission Shakti</SelectItem>
                          <SelectItem value="vatsalya">Mission Vatsalya</SelectItem>
                          <SelectItem value="saksham">Mission Saksham</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="project-budget">Total Budget (₹)</Label>
                      <Input id="project-budget" type="number" placeholder="Enter total project budget" />
                    </div>
                    
                    <div>
                      <Label htmlFor="project-duration">Duration (months)</Label>
                      <Input id="project-duration" type="number" placeholder="Enter project duration" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="project-description">Project Description</Label>
                    <Textarea id="project-description" placeholder="Describe the project objectives, activities, and expected outcomes" className="min-h-[120px]" />
                  </div>
                  
                  <div>
                    <Label htmlFor="project-location">Project Location</Label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="delhi">Delhi</SelectItem>
                          <SelectItem value="maharashtra">Maharashtra</SelectItem>
                          <SelectItem value="karnataka">Karnataka</SelectItem>
                          <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                        </SelectContent>
                      </Select>
                      
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select district" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="central-delhi">Central Delhi</SelectItem>
                          <SelectItem value="new-delhi">New Delhi</SelectItem>
                          <SelectItem value="south-delhi">South Delhi</SelectItem>
                          <SelectItem value="north-delhi">North Delhi</SelectItem>
                        </SelectContent>
                      </Select>
                      
                      <Input placeholder="Enter block/village/area" />
                    </div>
                  </div>
                  
                  <div>
                    <Label className="mb-2 block">Required Documents</Label>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded-md">
                        <div className="flex items-center gap-2">
                          <FileText size={18} className="text-muted-foreground" />
                          <span className="text-sm">Detailed Project Proposal</span>
                        </div>
                        <Button size="sm" variant="outline" className="flex items-center gap-1">
                          <Upload size={14} />
                          <span>Upload</span>
                        </Button>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 border rounded-md">
                        <div className="flex items-center gap-2">
                          <FileText size={18} className="text-muted-foreground" />
                          <span className="text-sm">Budget Breakdown</span>
                        </div>
                        <Button size="sm" variant="outline" className="flex items-center gap-1">
                          <Upload size={14} />
                          <span>Upload</span>
                        </Button>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 border rounded-md">
                        <div className="flex items-center gap-2">
                          <FileText size={18} className="text-muted-foreground" />
                          <span className="text-sm">Implementation Timeline</span>
                        </div>
                        <Button size="sm" variant="outline" className="flex items-center gap-1">
                          <Upload size={14} />
                          <span>Upload</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex flex-col sm:flex-row gap-3 w-full justify-end">
                  <Button variant="outline">Save as Draft</Button>
                  <Button>Submit Proposal</Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="track">
            <Card>
              <CardHeader>
                <CardTitle>Submitted Proposals</CardTitle>
                <CardDescription>Track the status of your submitted CSR project proposals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Proposal Item 1 */}
                  <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">Women Skill Development Program</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="bg-purple-100 text-purple-800">Mission Shakti</Badge>
                          <span className="text-sm text-muted-foreground">Submitted on: 05 May 2025</span>
                        </div>
                      </div>
                      <Badge className="bg-amber-100 text-amber-800 flex items-center gap-1">
                        <Clock size={14} />
                        Under Review
                      </Badge>
                    </div>
                    <div className="mt-3">
                      <p className="text-sm text-muted-foreground">Budget: ₹45,00,000 | Duration: 18 months</p>
                      <p className="text-sm text-muted-foreground">Location: Delhi, Central Delhi</p>
                    </div>
                    <div className="mt-3 flex justify-end">
                      <Button variant="outline" size="sm">View Details</Button>
                    </div>
                  </div>
                  
                  {/* Proposal Item 2 */}
                  <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">Early Childhood Care Centers</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="bg-cyan-100 text-cyan-800">Mission Vatsalya</Badge>
                          <span className="text-sm text-muted-foreground">Submitted on: 28 Apr 2025</span>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-800 flex items-center gap-1">
                        <CheckSquare size={14} />
                        Approved
                      </Badge>
                    </div>
                    <div className="mt-3">
                      <p className="text-sm text-muted-foreground">Budget: ₹72,50,000 | Duration: 24 months</p>
                      <p className="text-sm text-muted-foreground">Location: Maharashtra, Mumbai Suburban</p>
                    </div>
                    <div className="mt-3 flex justify-end">
                      <Button variant="outline" size="sm">View Details</Button>
                    </div>
                  </div>
                  
                  {/* Proposal Item 3 */}
                  <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">Digital Literacy for Rural Youth</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="bg-orange-100 text-orange-800">Mission Saksham</Badge>
                          <span className="text-sm text-muted-foreground">Submitted on: 15 Apr 2025</span>
                        </div>
                      </div>
                      <Badge className="bg-red-100 text-red-800 flex items-center gap-1">
                        <AlertCircle size={14} />
                        Needs Revision
                      </Badge>
                    </div>
                    <div className="mt-3">
                      <p className="text-sm text-muted-foreground">Budget: ₹38,20,000 | Duration: 12 months</p>
                      <p className="text-sm text-muted-foreground">Location: Karnataka, Bangalore Urban</p>
                    </div>
                    <div className="mt-3 flex justify-end">
                      <Button variant="outline" size="sm">View Details</Button>
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

export default ProjectProposal;
