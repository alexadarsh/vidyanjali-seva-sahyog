
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown, FileText, MapPin, ChartBar, Database, Eye, Settings, File as FileIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const NavItem = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <NavLink 
      to={to} 
      className={({ isActive }) => 
        `px-4 py-2 rounded-md transition-colors ${
          isActive 
            ? 'text-primary font-semibold' 
            : 'text-foreground hover:text-primary'
        }`
      }
      onClick={() => isMobile && setIsMenuOpen(false)}
    >
      {children}
    </NavLink>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <NavLink to="/" className="text-xl font-bold flex items-center gap-2">
            <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-r from-shakti to-vatsalya">
              <span className="text-white font-bold">PK</span>
            </div>
            <span className="hidden sm:inline-block">PANKHUDI</span>
            <span className="inline-block sm:hidden">PK</span>
          </NavLink>
        </div>
        
        {!isMobile ? (
          <nav className="hidden md:flex items-center space-x-1">
            <NavItem to="/">Home</NavItem>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1 px-4 py-2 rounded-md">
                  About <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center">
                <DropdownMenuItem asChild>
                  <NavLink to="/about-pankhudi" className="cursor-pointer">About PANKHUDI</NavLink>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <NavLink to="/mission-shakti" className="cursor-pointer">Mission Shakti</NavLink>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <NavLink to="/mission-vatsalya" className="cursor-pointer">Mission Vatsalya</NavLink>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <NavLink to="/mission-saksham" className="cursor-pointer">Mission Saksham</NavLink>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1 px-4 py-2 rounded-md">
                  Modules <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center">
                <DropdownMenuItem asChild>
                  <NavLink to="/dashboard" className="cursor-pointer flex items-center gap-2">
                    <Settings size={16} /> Dashboard
                  </NavLink>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <NavLink to="/project-proposal" className="cursor-pointer flex items-center gap-2">
                    <FileText size={16} /> Project Proposal
                  </NavLink>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <NavLink to="/project-mapping" className="cursor-pointer flex items-center gap-2">
                    <MapPin size={16} /> Project Mapping
                  </NavLink>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <NavLink to="/monitoring" className="cursor-pointer flex items-center gap-2">
                    <ChartBar size={16} /> Monitoring
                  </NavLink>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <NavLink to="/mis-reports" className="cursor-pointer flex items-center gap-2">
                    <Database size={16} /> MIS Reports
                  </NavLink>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <NavLink to="/public-dashboard" className="cursor-pointer flex items-center gap-2">
                    <Eye size={16} /> Public Dashboard
                  </NavLink>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <NavItem to="/search-organization">Search Organization</NavItem>
            <NavItem to="/state-programs">State Programs</NavItem>
          </nav>
        ) : null}
        
        <div className="flex items-center space-x-2">
          <Button asChild variant="default" size="sm" className="rounded-full">
            <NavLink to="/register">Register</NavLink>
          </Button>
          <Button asChild variant="outline" size="sm" className="rounded-full">
            <NavLink to="/login">Login</NavLink>
          </Button>
          
          {isMobile && (
            <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          )}
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-background border-t">
          <nav className="flex flex-col p-4 space-y-3">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/about-pankhudi">About PANKHUDI</NavItem>
            <NavItem to="/mission-shakti">Mission Shakti</NavItem>
            <NavItem to="/mission-vatsalya">Mission Vatsalya</NavItem>
            <NavItem to="/mission-saksham">Mission Saksham</NavItem>
            <NavItem to="/search-organization">Search Organization</NavItem>
            <NavItem to="/state-programs">State Programs</NavItem>
            <div className="pt-2 border-t">
              <h3 className="px-4 py-2 text-sm font-semibold text-muted-foreground">Functional Modules</h3>
              <NavItem to="/dashboard">Dashboard</NavItem>
              <NavItem to="/project-proposal">Project Proposal</NavItem>
              <NavItem to="/project-mapping">Project Mapping</NavItem>
              <NavItem to="/monitoring">Monitoring</NavItem>
              <NavItem to="/mis-reports">MIS Reports</NavItem>
              <NavItem to="/public-dashboard">Public Dashboard</NavItem>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
