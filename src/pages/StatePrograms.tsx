
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { ExternalLink } from 'lucide-react';

// Mock data for state programs
const statePrograms = [
  { id: 1, state: "Andhra Pradesh", url: "https://wcd.ap.gov.in/" },
  { id: 2, state: "Assam", url: "https://wcd.assam.gov.in/" },
  { id: 3, state: "Bihar", url: "https://wcd.bihar.gov.in/" },
  { id: 4, state: "Chhattisgarh", url: "https://wcd.cg.gov.in/" },
  { id: 5, state: "Delhi", url: "https://wcd.delhi.gov.in/" },
  { id: 6, state: "Goa", url: "https://wcd.goa.gov.in/" },
  { id: 7, state: "Gujarat", url: "https://wcd.gujarat.gov.in/" },
  { id: 8, state: "Haryana", url: "https://wcdharyana.gov.in/" },
  { id: 9, state: "Himachal Pradesh", url: "https://wcd.hp.gov.in/" },
  { id: 10, state: "Jharkhand", url: "https://wcd.jharkhand.gov.in/" },
  { id: 11, state: "Karnataka", url: "https://dwcd.karnataka.gov.in/" },
  { id: 12, state: "Kerala", url: "https://wcd.kerala.gov.in/" },
  { id: 13, state: "Madhya Pradesh", url: "https://wcd.mp.gov.in/" },
  { id: 14, state: "Maharashtra", url: "https://wcd.maharashtra.gov.in/" },
  { id: 15, state: "Odisha", url: "https://wcd.odisha.gov.in/" }
];

const StatePrograms = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  
  const filteredPrograms = statePrograms.filter(program => 
    program.state.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">State Programs</h1>
          <p className="text-muted-foreground max-w-3xl">
            Various states have their own initiatives for women and child development. 
            Find links to the official websites of state departments managing these programs.
          </p>
        </div>
        
        <div className="max-w-sm mb-6">
          <Input 
            placeholder="Search by state name..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
        
        <div className="rounded-md border">
          <Table>
            <TableCaption>List of State Women and Child Development Programs</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>S. No.</TableHead>
                <TableHead>State Name</TableHead>
                <TableHead>URL</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPrograms.map((program, index) => (
                <TableRow key={program.id}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell>{program.state}</TableCell>
                  <TableCell>
                    <a 
                      href={program.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline flex items-center gap-1"
                    >
                      {program.url} <ExternalLink size={14} />
                    </a>
                  </TableCell>
                </TableRow>
              ))}
              {filteredPrograms.length === 0 && (
                <TableRow>
                  <TableCell colSpan={3} className="text-center py-4">
                    No states found matching your search.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StatePrograms;
