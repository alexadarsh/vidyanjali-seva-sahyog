
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Database, FileText, Mail, Calendar, Download, ChartBar, Filter, ChevronDown } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const MISReports = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">MIS Reports & Analytics</h1>
          <p className="text-muted-foreground">Generate comprehensive reports and insights</p>
        </div>
        
        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="w-full justify-start mb-6">
            <TabsTrigger value="projects">Project Reports</TabsTrigger>
            <TabsTrigger value="financial">Financial Reports</TabsTrigger>
            <TabsTrigger value="beneficiary">Beneficiary Reports</TabsTrigger>
            <TabsTrigger value="partner">Partner Performance</TabsTrigger>
          </TabsList>
          
          <div className="mb-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Generate Report</CardTitle>
                <CardDescription>Select parameters to generate custom reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <Label htmlFor="report-type">Report Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select report type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="summary">Summary Report</SelectItem>
                        <SelectItem value="detailed">Detailed Report</SelectItem>
                        <SelectItem value="analytics">Analytics Report</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="time-period">Time Period</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="quarterly">Quarterly</SelectItem>
                        <SelectItem value="yearly">Yearly</SelectItem>
                        <SelectItem value="custom">Custom Range</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="mission">Filter by Mission</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select mission" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all_missions">All Missions</SelectItem>
                        <SelectItem value="shakti">Mission Shakti</SelectItem>
                        <SelectItem value="vatsalya">Mission Vatsalya</SelectItem>
                        <SelectItem value="saksham">Mission Saksham</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="format">Export Format</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pdf">PDF</SelectItem>
                        <SelectItem value="excel">Excel</SelectItem>
                        <SelectItem value="csv">CSV</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="flex items-center gap-2">
                  <ChartBar size={16} />
                  Generate Report
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <TabsContent value="projects">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Project Status Reports</CardTitle>
                    <CardDescription>Overview of all project statuses</CardDescription>
                  </div>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Download size={16} />
                    Export
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Project Name</TableHead>
                      <TableHead>Mission</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Progress</TableHead>
                      <TableHead>Budget Utilized</TableHead>
                      <TableHead>Last Updated</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Women's Vocational Training Centers</TableCell>
                      <TableCell>Mission Shakti</TableCell>
                      <TableCell><Badge className="bg-green-100 text-green-800">On Track</Badge></TableCell>
                      <TableCell>72%</TableCell>
                      <TableCell>₹35.2L / ₹48.5L</TableCell>
                      <TableCell>3 days ago</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">View</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Child Protection & Safe Spaces</TableCell>
                      <TableCell>Mission Vatsalya</TableCell>
                      <TableCell><Badge className="bg-amber-100 text-amber-800">At Risk</Badge></TableCell>
                      <TableCell>38%</TableCell>
                      <TableCell>₹52.6L / ₹1.2Cr</TableCell>
                      <TableCell>1 week ago</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">View</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Digital Skills & Entrepreneurship</TableCell>
                      <TableCell>Mission Saksham</TableCell>
                      <TableCell><Badge className="bg-green-100 text-green-800">On Track</Badge></TableCell>
                      <TableCell>85%</TableCell>
                      <TableCell>₹55.9L / ₹65.8L</TableCell>
                      <TableCell>Yesterday</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">View</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Rural Health & Nutrition Program</TableCell>
                      <TableCell>Mission Vatsalya</TableCell>
                      <TableCell><Badge className="bg-green-100 text-green-800">On Track</Badge></TableCell>
                      <TableCell>62%</TableCell>
                      <TableCell>₹28.3L / ₹45L</TableCell>
                      <TableCell>5 days ago</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">View</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Gender-based Violence Prevention</TableCell>
                      <TableCell>Mission Shakti</TableCell>
                      <TableCell><Badge className="bg-red-100 text-red-800">Delayed</Badge></TableCell>
                      <TableCell>28%</TableCell>
                      <TableCell>₹18.2L / ₹70L</TableCell>
                      <TableCell>2 weeks ago</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">View</Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-muted-foreground">
                  Showing 5 of 127 projects
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" disabled>Previous</Button>
                  <Button variant="outline" size="sm">Next</Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="financial">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Financial Reports</CardTitle>
                    <CardDescription>Budget allocation and utilization reports</CardDescription>
                  </div>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter size={16} />
                    Filter
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-[350px] bg-muted rounded-md flex items-center justify-center mb-6">
                  <div className="text-center">
                    <Database size={48} className="mx-auto text-muted-foreground mb-2" />
                    <p className="text-muted-foreground">Financial data visualization will be displayed here</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <Card>
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-base">Mission Shakti</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-1">
                      <div className="text-2xl font-bold mb-1">₹102 Cr</div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Utilized: ₹83.6 Cr (82%)</span>
                        <span className="text-green-600">+₹12.5 Cr YoY</span>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-base">Mission Vatsalya</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-1">
                      <div className="text-2xl font-bold mb-1">₹80.5 Cr</div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Utilized: ₹57.8 Cr (72%)</span>
                        <span className="text-green-600">+₹8.3 Cr YoY</span>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-base">Mission Saksham</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-1">
                      <div className="text-2xl font-bold mb-1">₹55 Cr</div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Utilized: ₹43.8 Cr (80%)</span>
                        <span className="text-green-600">+₹6.7 Cr YoY</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Recent Financial Reports</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-between p-3 border rounded-md hover:bg-muted/50 transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Q1 2025 Financial Summary</p>
                          <p className="text-xs text-muted-foreground">Generated on 01 Apr 2025</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">Download</Button>
                    </li>
                    
                    <li className="flex items-center justify-between p-3 border rounded-md hover:bg-muted/50 transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Q4 2024 Fund Utilization Report</p>
                          <p className="text-xs text-muted-foreground">Generated on 15 Jan 2025</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">Download</Button>
                    </li>
                    
                    <li className="flex items-center justify-between p-3 border rounded-md hover:bg-muted/50 transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Annual Financial Report 2024</p>
                          <p className="text-xs text-muted-foreground">Generated on 10 Feb 2025</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">Download</Button>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="beneficiary">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Beneficiary Impact Reports</CardTitle>
                    <CardDescription>Metrics on beneficiaries reached and impacted</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>Last Quarter</span>
                      <ChevronDown size={14} />
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Download size={14} />
                      <span>Export</span>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <Card>
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-base">Total Beneficiaries</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-1">
                      <div className="text-2xl font-bold mb-1">2.8 Million</div>
                      <div className="text-sm text-green-600">+320K since last quarter</div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-base">Women Impacted</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-1">
                      <div className="text-2xl font-bold mb-1">1.2 Million</div>
                      <div className="text-sm text-green-600">+150K since last quarter</div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-base">Children Supported</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-1">
                      <div className="text-2xl font-bold mb-1">1.6 Million</div>
                      <div className="text-sm text-green-600">+170K since last quarter</div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="h-[350px] bg-muted rounded-md flex items-center justify-center mb-6">
                  <div className="text-center">
                    <ChartBar size={48} className="mx-auto text-muted-foreground mb-2" />
                    <p className="text-muted-foreground">Beneficiary impact visualization will be displayed here</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Key Impact Metrics</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Impact Area</TableHead>
                        <TableHead>Key Indicator</TableHead>
                        <TableHead>Current Value</TableHead>
                        <TableHead>Target</TableHead>
                        <TableHead>Progress</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Women's Empowerment</TableCell>
                        <TableCell>Women with financial independence</TableCell>
                        <TableCell>425,620</TableCell>
                        <TableCell>600,000</TableCell>
                        <TableCell>71%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Child Education</TableCell>
                        <TableCell>Children with improved learning outcomes</TableCell>
                        <TableCell>850,375</TableCell>
                        <TableCell>1,200,000</TableCell>
                        <TableCell>71%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Skill Development</TableCell>
                        <TableCell>Youth with employable skills</TableCell>
                        <TableCell>318,450</TableCell>
                        <TableCell>400,000</TableCell>
                        <TableCell>80%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Health & Nutrition</TableCell>
                        <TableCell>Children with improved nutrition</TableCell>
                        <TableCell>625,780</TableCell>
                        <TableCell>800,000</TableCell>
                        <TableCell>78%</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="partner">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Partner Performance Reports</CardTitle>
                    <CardDescription>Evaluation of implementing partners and CSR entities</CardDescription>
                  </div>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Mail size={16} />
                    Share Report
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-[350px] bg-muted rounded-md flex items-center justify-center mb-6">
                  <div className="text-center">
                    <ChartBar size={48} className="mx-auto text-muted-foreground mb-2" />
                    <p className="text-muted-foreground">Partner performance visualization will be displayed here</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Top Performing Partners</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Partner Name</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Projects</TableHead>
                        <TableHead>Total Funding</TableHead>
                        <TableHead>Performance Score</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Smile Foundation</TableCell>
                        <TableCell>NGO</TableCell>
                        <TableCell>8</TableCell>
                        <TableCell>₹3.2 Cr</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <span className="font-medium">92%</span>
                            <div className="ml-2 h-2 w-24 bg-muted rounded-full overflow-hidden">
                              <div className="bg-green-500 h-full" style={{ width: '92%' }}></div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">View</Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Tata Trusts</TableCell>
                        <TableCell>CSR</TableCell>
                        <TableCell>12</TableCell>
                        <TableCell>₹8.5 Cr</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <span className="font-medium">88%</span>
                            <div className="ml-2 h-2 w-24 bg-muted rounded-full overflow-hidden">
                              <div className="bg-green-500 h-full" style={{ width: '88%' }}></div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">View</Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Pratham</TableCell>
                        <TableCell>NGO</TableCell>
                        <TableCell>6</TableCell>
                        <TableCell>₹2.8 Cr</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <span className="font-medium">85%</span>
                            <div className="ml-2 h-2 w-24 bg-muted rounded-full overflow-hidden">
                              <div className="bg-green-500 h-full" style={{ width: '85%' }}></div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">View</Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">HDFC Bank</TableCell>
                        <TableCell>CSR</TableCell>
                        <TableCell>7</TableCell>
                        <TableCell>₹5.7 Cr</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <span className="font-medium">83%</span>
                            <div className="ml-2 h-2 w-24 bg-muted rounded-full overflow-hidden">
                              <div className="bg-green-500 h-full" style={{ width: '83%' }}></div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">View</Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Performance Analysis Reports</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-between p-3 border rounded-md hover:bg-muted/50 transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">NGO Performance Analysis - Q1 2025</p>
                          <p className="text-xs text-muted-foreground">Generated on 05 Apr 2025</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">Download</Button>
                    </li>
                    
                    <li className="flex items-center justify-between p-3 border rounded-md hover:bg-muted/50 transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">CSR Entity Contribution Report - 2024</p>
                          <p className="text-xs text-muted-foreground">Generated on 22 Feb 2025</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">Download</Button>
                    </li>
                  </ul>
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

export default MISReports;
