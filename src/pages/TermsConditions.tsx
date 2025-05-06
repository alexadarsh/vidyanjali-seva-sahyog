
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsConditions = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container py-12">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
        
        <div className="prose max-w-none">
          <p>Last updated: May 6, 2025</p>
          
          <h2>Agreement to Terms</h2>
          <p>
            By accessing or using the PANKHUDI platform, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access the service.
          </p>
          
          <h2>User Accounts</h2>
          <p>
            When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
          </p>
          <p>
            You are responsible for safeguarding the password that you use to access the service and for any activities that occur under your account.
          </p>
          
          <h2>Content and Conduct</h2>
          <p>
            Our service allows you to post, link, store, share, and otherwise make available certain information, text, graphics, or other material. You are responsible for the content that you post, including its legality, reliability, and appropriateness.
          </p>
          <p>
            When using our service, you agree not to:
          </p>
          <ul>
            <li>Use the service in any way that violates any applicable laws</li>
            <li>Post unauthorized commercial communications</li>
            <li>Engage in unlawful multi-level marketing</li>
            <li>Upload viruses or other malicious code</li>
            <li>Solicit login information or access an account belonging to someone else</li>
            <li>Bully, intimidate, or harass any user</li>
          </ul>
          
          <h2>Intellectual Property</h2>
          <p>
            The service and its original content, features, and functionality are and will remain the exclusive property of PANKHUDI and its licensors. The service is protected by copyright, trademark, and other laws.
          </p>
          
          <h2>Termination</h2>
          <p>
            We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
          </p>
          <p>
            Upon termination, your right to use the service will immediately cease. If you wish to terminate your account, you may simply discontinue using the service.
          </p>
          
          <h2>Limitation of Liability</h2>
          <p>
            In no event shall PANKHUDI, its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
          </p>
          
          <h2>Changes to Terms</h2>
          <p>
            We reserve the right to modify or replace these Terms at any time. By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms.
          </p>
          
          <h2>Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at terms@pankhudi.gov.in
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsConditions;
