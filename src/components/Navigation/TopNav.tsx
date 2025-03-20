import { useState } from "react";
import { Search, Bell, Moon, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";

const TopNav = () => {
  const [language, setLanguage] = useState("English");

  return (
    <nav className="bg-[#1074B9] text-white p-3 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="text-white">
          &gt;
        </Button>
        <div className="flex gap-4 text-[#9FC7E3]">
          <Button variant="ghost" className="flex items-center gap-1 cursor-pointer hover:text-[#c5d7e4] transition-colors">
            <span className="text-xl">🏛️</span> Institution
          </Button>
          <Button variant="ghost" className="flex items-center gap-1 cursor-pointer hover:text-[#c5d7e4] transition-colors">
            <span className="text-xl">💵</span> Accounting
          </Button>
          <Button variant="ghost" className="flex items-center gap-1 cursor-pointer hover:text-[#c5d7e4] transition-colors">
            <span className="text-xl">📊</span> Reports
          </Button>
          <Button variant="ghost" className="flex items-center gap-1 cursor-pointer hover:text-[#c5d7e4] transition-colors">
            <span className="text-xl">🛡️</span> Admin
          </Button>
          <Button variant="ghost" className="flex items-center gap-1 cursor-pointer hover:text-[#c5d7e4] transition-colors">
            <span className="text-xl">👥</span> Self Service
          </Button>
          <Button variant="ghost" className="flex items-center gap-1 cursor-pointer hover:text-[#c5d7e4] transition-colors">
            <span className="text-xl">ℹ️</span> Configuration Wizard
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Search className="w-5 h-5" />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="text-white">{language} ▼</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setLanguage("English")}>English</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setLanguage("Spanish")}>Spanish</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Bell className="w-5 h-5" />
        <Moon className="w-5 h-5" />
        <User className="w-5 h-5" />
      </div>
    </nav>
  );
};

export default TopNav;
