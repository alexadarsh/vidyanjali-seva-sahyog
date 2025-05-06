
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { FileText, Upload } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Register = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">Create an Account</CardTitle>
              <CardDescription className="text-center">
                Join PANKHUDI to start contributing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="organization" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="organization">Organization</TabsTrigger>
                  <TabsTrigger value="csr">CSR Entity</TabsTrigger>
                  <TabsTrigger value="ngo">NGO/Partner</TabsTrigger>
                </TabsList>
                
                <TabsContent value="organization" className="space-y-4">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="org-id">Organization ID</Label>
                      <Input id="org-id" placeholder="Enter your unique organization ID" />
                      <p className="text-xs text-muted-foreground">
                        Contact your district/block coordinator to get your organization ID.
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="org-mobile">Mobile Number</Label>
                      <Input id="org-mobile" type="tel" placeholder="10-digit mobile number" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="org-captcha">Captcha</Label>
                      <div className="flex space-x-2">
                        <div className="bg-muted flex items-center justify-center w-36 h-10 text-sm font-mono">
                          CAPTCHA
                        </div>
                        <Button variant="outline" size="icon">
                          ↻
                        </Button>
                      </div>
                      <Input id="org-captcha" placeholder="Enter the captcha above" />
                    </div>
                    
                    <Button className="w-full">Register Organization</Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="csr" className="space-y-4">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="csr-name">CSR Entity Name</Label>
                      <Input id="csr-name" placeholder="Enter company/entity name" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="cin">Corporate Identity Number (CIN)</Label>
                      <Input id="cin" placeholder="Enter CIN" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="csr-email">Email</Label>
                      <Input id="csr-email" type="email" placeholder="Enter official email address" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="csr-mobile">Mobile Number</Label>
                      <Input id="csr-mobile" type="tel" placeholder="10-digit mobile number" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Upload Documents</Label>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 border rounded-md">
                          <div className="flex items-center gap-2">
                            <FileText size={18} className="text-muted-foreground" />
                            <span className="text-sm">CSR Certificate</span>
                          </div>
                          <Button size="sm" variant="outline" className="flex items-center gap-1">
                            <Upload size={14} />
                            <span>Upload</span>
                          </Button>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 border rounded-md">
                          <div className="flex items-center gap-2">
                            <FileText size={18} className="text-muted-foreground" />
                            <span className="text-sm">CSR-1 Form</span>
                          </div>
                          <Button size="sm" variant="outline" className="flex items-center gap-1">
                            <Upload size={14} />
                            <span>Upload</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <Button className="w-full">Register CSR Entity</Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="ngo" className="space-y-4">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="ngo-name">NGO/Implementing Partner Name</Label>
                      <Input id="ngo-name" placeholder="Enter organization name" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="ngo-type">Organization Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select organization type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ngo">NGO</SelectItem>
                          <SelectItem value="trust">Trust</SelectItem>
                          <SelectItem value="section8">Section 8 Company</SelectItem>
                          <SelectItem value="society">Society</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="reg-number">Registration Number</Label>
                      <Input id="reg-number" placeholder="Enter registration number" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="ngo-email">Email</Label>
                      <Input id="ngo-email" type="email" placeholder="Enter official email address" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="ngo-mobile">Mobile Number</Label>
                      <Input id="ngo-mobile" type="tel" placeholder="10-digit mobile number" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Upload Documents</Label>
                      <div className="flex items-center justify-between p-3 border rounded-md">
                        <div className="flex items-center gap-2">
                          <FileText size={18} className="text-muted-foreground" />
                          <span className="text-sm">Registration Certificate</span>
                        </div>
                        <Button size="sm" variant="outline" className="flex items-center gap-1">
                          <Upload size={14} />
                          <span>Upload</span>
                        </Button>
                      </div>
                    </div>
                    
                    <Button className="w-full">Register as Partner</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4 border-t pt-4">
              <div className="text-sm text-center text-muted-foreground">
                Already have an account?{' '}
                <NavLink to="/login" className="text-primary underline underline-offset-4 hover:text-primary/90">
                  Login
                </NavLink>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Register;
