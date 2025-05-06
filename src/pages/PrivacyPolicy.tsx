
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container py-12">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        
        <div className="prose max-w-none">
          <p>Last updated: May 6, 2025</p>
          
          <h2>Introduction</h2>
          <p>
            PANKHUDI ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
          </p>
          
          <h2>Information We Collect</h2>
          <p>We may collect information about you in a variety of ways:</p>
          
          <h3>Personal Data</h3>
          <p>
            When you register on our platform, we collect personal information such as your name, email address, phone number, and organization details. This information is necessary to create and maintain your account and to provide our services.
          </p>
          
          <h3>Usage Data</h3>
          <p>
            We may also collect information on how the website is accessed and used. This data may include your computer's IP address, browser type, browser version, pages visited, time and date of your visit, and other diagnostic data.
          </p>
          
          <h2>How We Use Your Information</h2>
          <p>We may use the information we collect about you to:</p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Communicate with you about your account or our services</li>
            <li>Connect organizations with relevant volunteers</li>
            <li>Monitor the usage of our services</li>
            <li>Detect, prevent, and address technical issues</li>
          </ul>
          
          <h2>Disclosure of Data</h2>
          <p>We may disclose your personal information in the following situations:</p>
          <ul>
            <li>To our service providers who perform services on our behalf</li>
            <li>To fulfill the purpose for which you provide it</li>
            <li>For any other purpose disclosed by us when you provide the information</li>
            <li>To comply with any court order, law, or legal process</li>
          </ul>
          
          <h2>Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>
          
          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>
          
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at privacy@pankhudi.gov.in
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
