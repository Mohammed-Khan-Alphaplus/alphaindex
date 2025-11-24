import { Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="font-semibold mb-3">About AlphaIndex</h3>
            <p className="text-sm text-muted-foreground">
              Internal tools repository for all company-developed software, 
              TestWare, and utilities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/" className="hover:text-primary transition-colors">
                  Browse Tools
                </a>
              </li>
              <li>
                <a href="#submit" className="hover:text-primary transition-colors">
                  Submit a Tool
                </a>
              </li>
              <li>
                <a href="#docs" className="hover:text-primary transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <div className="space-y-2">
              <a 
                href="mailto:mohammed.khan@alphaplus.co.uk" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                mohammed.khan@alphaplus.co.uk
              </a>
              <a 
                href="#github" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-4 w-4" />
                Internal GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} AlphaPlus. All tools are property of the company.</p>
        </div>
      </div>
    </footer>
  );
}