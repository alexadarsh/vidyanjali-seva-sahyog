
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
                Join Vidyanjali Seva Sahyog to start contributing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="organization" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="organization">Organization</TabsTrigger>
                  <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
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
                
                <TabsContent value="volunteer" className="space-y-4">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" placeholder="Enter your first name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" placeholder="Enter your last name" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email address" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="mobile">Mobile Number</Label>
                      <Input id="mobile" type="tel" placeholder="10-digit mobile number" />
                    </div>
                    
                    <Button className="w-full">Register as Volunteer</Button>
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
