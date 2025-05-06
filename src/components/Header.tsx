
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
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
              <span className="text-white font-bold">VS</span>
            </div>
            <span className="hidden sm:inline-block">Vidyanjali Seva Sahyog</span>
            <span className="inline-block sm:hidden">VSS</span>
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
                  <NavLink to="/about-vidyanjali" className="cursor-pointer">About Vidyanjali</NavLink>
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
            <NavItem to="/about-vidyanjali">About Vidyanjali</NavItem>
            <NavItem to="/mission-shakti">Mission Shakti</NavItem>
            <NavItem to="/mission-vatsalya">Mission Vatsalya</NavItem>
            <NavItem to="/mission-saksham">Mission Saksham</NavItem>
            <NavItem to="/search-organization">Search Organization</NavItem>
            <NavItem to="/state-programs">State Programs</NavItem>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
