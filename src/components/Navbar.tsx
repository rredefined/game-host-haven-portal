
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Gamepad } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-4 px-6 md:px-10 w-full fixed top-0 z-50 bg-game-dark/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Gamepad className="h-6 w-6 text-game" />
          <span className="text-xl font-bold text-white">GameHostHaven</span>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
          <a href="#servers" className="text-gray-300 hover:text-white transition-colors">Servers</a>
          <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
          <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="border-game hover:bg-game/10">Login</Button>
          <Button className="bg-game hover:bg-game/90">Sign Up</Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-game-dark/95 backdrop-blur-md border-b border-gray-800 p-4 flex flex-col space-y-4 animate-fade-in">
          <a 
            href="#features" 
            className="text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#servers" 
            className="text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Servers
          </a>
          <a 
            href="#pricing" 
            className="text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </a>
          <a 
            href="#testimonials" 
            className="text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </a>
          <div className="flex flex-col space-y-2 pt-2 border-t border-gray-800">
            <Button variant="outline" className="border-game hover:bg-game/10 w-full">Login</Button>
            <Button className="bg-game hover:bg-game/90 w-full">Sign Up</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
