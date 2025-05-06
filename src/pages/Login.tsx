
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Login = () => {
  const [mobileNumber, setMobileNumber] = React.useState('');
  const [otp, setOtp] = React.useState('');
  const [otpSent, setOtpSent] = React.useState(false);

  const handleSendOtp = () => {
    // In a real app, this would send an OTP to the user's mobile number
    console.log('Sending OTP to:', mobileNumber);
    setOtpSent(true);
  };

  const handleVerifyOtp = () => {
    // In a real app, this would verify the OTP
    console.log('Verifying OTP:', otp);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
              <CardDescription className="text-center">
                Access your Vidyanjali Seva Sahyog account
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
                      <Label htmlFor="mobile">Mobile Number</Label>
                      <Input 
                        id="mobile" 
                        type="tel" 
                        placeholder="10-digit mobile number"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                      />
                    </div>
                    
                    {otpSent ? (
                      <div className="space-y-2">
                        <Label htmlFor="otp">Enter OTP</Label>
                        <Input 
                          id="otp" 
                          type="text" 
                          placeholder="6-digit OTP"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                        />
                        <Button className="w-full" onClick={handleVerifyOtp}>
                          Verify & Login
                        </Button>
                        <div className="text-center">
                          <Button variant="link" onClick={handleSendOtp}>
                            Resend OTP
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <Button className="w-full" onClick={handleSendOtp}>
                        Send OTP
                      </Button>
                    )}
                  </div>
                </TabsContent>
                
                <TabsContent value="volunteer" className="space-y-4">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="volunteer-mobile">Mobile Number</Label>
                      <Input id="volunteer-mobile" type="tel" placeholder="10-digit mobile number" />
                    </div>
                    <Button className="w-full">
                      Send OTP
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4 border-t pt-4">
              <div className="text-sm text-center text-muted-foreground">
                Don't have an account?{' '}
                <NavLink to="/register" className="text-primary underline underline-offset-4 hover:text-primary/90">
                  Register
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

export default Login;
