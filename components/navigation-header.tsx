import Link from "next/link";
import Image from "next/image";

export function NavigationHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Image 
            src="/logo.svg" 
            alt="Company Logo" 
            width={24} 
            height={24}
            className="h-6 w-6"
          />
          <span className="text-5xl font-bold text-primary">
            AlphaIndex
          </span>
        </Link>
        
        <nav className="flex items-center gap-6">
          <Link 
            href="/" 
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Browse Tools
          </Link>
          <Link 
            href="#about" 
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}