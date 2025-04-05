
import { useTheme } from "@/components/theme/theme-provider";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="relative overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, rotate: -30 }}
          animate={{ opacity: theme === "light" ? 0 : 1, rotate: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute"
        >
          <Moon className="h-5 w-5" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, rotate: 30 }}
          animate={{ opacity: theme === "light" ? 1 : 0, rotate: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute"
        >
          <Sun className="h-5 w-5" />
        </motion.div>
        
        <span className="sr-only">Toggle theme</span>
      </Button>
    </motion.div>
  );
}
