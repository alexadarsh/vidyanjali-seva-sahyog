
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { FileText, MapPin, ChartBar, Database, Settings, Eye, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">MWCD Nodal Officer Dashboard</h1>
            <p className="text-muted-foreground">Monitor and manage CSR projects and partnerships</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="font-medium">Welcome, Rajesh Kumar</p>
              <p className="text-sm text-muted-foreground">State Nodal Officer, Delhi</p>
            </div>
            <div className="bg-primary text-white rounded-full h-10 w-10 flex items-center justify-center">
              <User size={20} />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Total Projects</CardTitle>
              <CardDescription>All registered CSR projects</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">127</p>
              <p className="text-sm text-muted-foreground mt-1">12 new this month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Pending Approvals</CardTitle>
              <CardDescription>Projects awaiting review</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-amber-500">8</p>
              <p className="text-sm text-muted-foreground mt-1">Updated 2 hours ago</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Total CSR Funding</CardTitle>
              <CardDescription>Committed across all projects</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">₹2.7 Cr</p>
              <p className="text-sm text-muted-foreground mt-1">₹85L this quarter</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mb-8">
          <NavigationMenu>
            <NavigationMenuList className="border-b w-full justify-start">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                  <FileText className="mr-2 h-4 w-4" />
                  <span>Project Management</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    <li className="row-span-3">
                      <a href="/project-proposal" className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Project Proposals</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                          Review and approve new CSR project submissions
                        </p>
                      </a>
                    </li>
                    <li>
                      <a href="/monitoring" className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Project Monitoring</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                          Track progress of ongoing projects
                        </p>
                      </a>
                    </li>
                    <li>
                      <a href="/mis-reports" className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Reports & Analytics</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                          Generate detailed MIS reports
                        </p>
                      </a>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                  <User className="mr-2 h-4 w-4" />
                  <span>Partner Management</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[400px]">
                    <li>
                      <a href="/search-organization" className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Registered Partners</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                          View and manage NGOs and implementing partners
                        </p>
                      </a>
                    </li>
                    <li>
                      <a href="/search-organization" className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">CSR Entities</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                          Manage registered corporate partners
                        </p>
                      </a>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
          <Card>
            <CardContent className="p-0">
              <ul className="divide-y">
                <li className="p-4 hover:bg-muted/50 transition-colors">
                  <p className="font-medium">Project Proposal Submitted</p>
                  <p className="text-sm text-muted-foreground">Reliance Foundation submitted a new project under Mission Shakti</p>
                  <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                </li>
                <li className="p-4 hover:bg-muted/50 transition-colors">
                  <p className="font-medium">NGO Registration Approved</p>
                  <p className="text-sm text-muted-foreground">Smile Foundation registration has been approved</p>
                  <p className="text-xs text-muted-foreground mt-1">Yesterday at 4:30 PM</p>
                </li>
                <li className="p-4 hover:bg-muted/50 transition-colors">
                  <p className="font-medium">Project Update</p>
                  <p className="text-sm text-muted-foreground">Tata Trust has submitted the quarterly report for Skills Development Program</p>
                  <p className="text-xs text-muted-foreground mt-1">2 days ago</p>
                </li>
                <li className="p-4 hover:bg-muted/50 transition-colors">
                  <p className="font-medium">Fund Utilization Report</p>
                  <p className="text-sm text-muted-foreground">HDFC Bank CSR has uploaded the fund utilization certificate</p>
                  <p className="text-xs text-muted-foreground mt-1">3 days ago</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
