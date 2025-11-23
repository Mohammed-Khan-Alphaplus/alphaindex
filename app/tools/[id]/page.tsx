import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, ArrowLeft, User, Calendar, HardDrive, Package } from "lucide-react";
import toolsData from "@/data/tools.json";
import Link from "next/link";
import { notFound } from "next/navigation";
import { NavigationHeader } from "@/components/navigation-header";
import { Footer } from "@/components/footer";

export function generateStaticParams() {
  return toolsData.tools.map((tool) => ({
    id: tool.id,
  }));
}

export default async function ToolPage({ params }: { params: Promise<{ id: string }> }) {
  // Await the params Promise
  const { id } = await params;
  
  // Find the tool by ID
  const tool = toolsData.tools.find(t => t.id === id);

  // If tool doesn't exist, show 404
  if (!tool) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />

      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-3">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Browse
            </Button>
          </Link>
        </div>
      </div>

      {/* Tool Details */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Title Section */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-4xl font-bold">{tool.name}</h1>
              <Badge variant="secondary" className="text-base px-3 py-1">
                {tool.category}
              </Badge>
            </div>
            <p className="text-xl text-muted-foreground">{tool.description}</p>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Package className="h-4 w-4" />
                  Version
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{tool.version}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <HardDrive className="h-4 w-4" />
                  Size
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{tool.fileSize}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Updated
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-bold">{tool.lastUpdated}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Maintainer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-bold">{tool.maintainer.name}</p>
              </CardContent>
            </Card>
          </div>

          {/* Download Section */}
          <Card className="mb-8 bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle>Download</CardTitle>
              <CardDescription>
                Click below to download the latest version
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a href={tool.downloadUrl} download>
                <Button size="lg" className="w-full md:w-auto">
                  <Download className="mr-2 h-5 w-5" />
                  Download {tool.name} v{tool.version}
                </Button>
              </a>
              <p className="text-sm text-muted-foreground mt-4">
                Contact: <a href={`mailto:${tool.maintainer.contact}`} className="text-primary hover:underline">
                  {tool.maintainer.contact}
                </a>
              </p>
            </CardContent>
          </Card>

          {/* Prerequisites */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Prerequisites</CardTitle>
              <CardDescription>
                System requirements to run this tool
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {tool.prerequisites.map((prereq, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{prereq}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Tags */}
          <Card>
            <CardHeader>
              <CardTitle>Tags</CardTitle>
              <CardDescription>
                Related topics and technologies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {tool.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-sm px-3 py-1">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Placeholder for future sections */}
          <div className="mt-8 p-6 border rounded-lg bg-muted/30">
            <h3 className="font-semibold mb-2">Coming Soon</h3>
            <p className="text-sm text-muted-foreground">
              • Installation instructions<br />
              • Usage examples<br />
              • Troubleshooting guide<br />
              • Changelog
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}