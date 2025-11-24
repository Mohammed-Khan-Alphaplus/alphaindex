"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Search, Wrench } from "lucide-react";
import toolsData from "@/data/tools.json";
import { useState } from "react";
import Link from "next/link";
import { NavigationHeader } from "@/components/navigation-header";
import { Footer } from "@/components/footer";

export default function Home() {
  const tools = toolsData.tools;
  const [searchQuery, setSearchQuery] = useState("");

  // Get unique categories
  const categories = ["All", ...Array.from(new Set(tools.map(tool => tool.category)))];

  // Filter tools based on search query and category
  const getFilteredTools = (category: string) => {
    let filtered = tools;

    // Filter by category
    if (category !== "All") {
      filtered = filtered.filter(tool => tool.category === category);
    }

    // Filter by search query
    if (searchQuery !== "") {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(tool =>
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query) ||
        tool.category.toLowerCase().includes(query) ||
        tool.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    return filtered;
  };

  const ToolGrid = ({ category }: { category: string }) => {
    const filteredTools = getFilteredTools(category);
    const displayTools = searchQuery === "" 
      ? filteredTools.filter(tool => tool.featured)
      : filteredTools;

    if (displayTools.length === 0) {
      return (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            No tools found {searchQuery && `matching "${searchQuery}"`}
          </p>
          {searchQuery && (
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => setSearchQuery("")}
            >
              Clear Search
            </Button>
          )}
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayTools.map((tool) => (
          <Link href={`/tools/${tool.id}`} key={tool.id}>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl">{tool.name}</CardTitle>
                  <Badge variant="secondary">{tool.category}</Badge>
                </div>
                <CardDescription>{tool.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Version:</span>
                    <span className="font-medium">{tool.version}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Size:</span>
                    <span className="font-medium">{tool.fileSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Updated:</span>
                    <span className="font-medium">{tool.lastUpdated}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mt-4">
                  {tool.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <a 
                  href={tool.downloadUrl} 
                  download 
                  onClick={(e) => e.stopPropagation()}
                  className="w-full"
                >
                  <Button className="w-full" size="lg">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      
      {/* Stats Bar */}
      <section className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-3xl font-bold text-primary">{tools.length}</p>
              <p className="text-sm text-muted-foreground">Total Tools</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">{categories.length - 1}</p>
              <p className="text-sm text-muted-foreground">Categories</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">
                {tools.filter(t => t.featured).length}
              </p>
              <p className="text-sm text-muted-foreground">Featured Tools</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="border-b bg-gradient-to-b from-violet-50/50 to-background dark:from-violet-950/20">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <Wrench className="h-8 w-8 text-primary" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">>
              AlphaIndex
            </h1>
          </div>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your one-stop shop for all internal tools, TestWare, and proprietary software 
            built by our amazing Dev and QA teams.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input 
              placeholder="Search tools..." 
              className="pl-10 h-11"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Tools Section with Category Tabs */}
      <section className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">
            {searchQuery === "" ? "Browse Tools" : "Search Results"}
          </h2>
          <p className="text-muted-foreground">
            {searchQuery === "" 
              ? "Filter by category to find the tools you need"
              : `Showing results for "${searchQuery}"`
            }
          </p>
        </div>

        <Tabs defaultValue="All" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-4 mb-8">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <ToolGrid category={category} />
            </TabsContent>
          ))}
        </Tabs>
      </section>
      <Footer />
    </div>
  );
}