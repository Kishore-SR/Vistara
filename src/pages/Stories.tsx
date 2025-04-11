
import { useState } from "react";
import { stories } from "@/data/stories";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/common/PageHeader";
import StoryCard from "@/components/stories/StoryCard";
import { Search, Filter, UploadCloud } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";

const Stories = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popular");

  const filteredStories = stories.filter((story) => {
    // Filter by search term
    const matchesSearch = story.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         story.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by category
    const matchesCategory = category === "all" || story.categories.some(cat => cat.toLowerCase() === category.toLowerCase());
    
    return matchesSearch && matchesCategory;
  });

  // Sort stories
  const sortedStories = [...filteredStories].sort((a, b) => {
    if (sortBy === "popular") {
      return b.likes - a.likes;
    } else if (sortBy === "comments") {
      return b.comments - a.comments;
    } else if (sortBy === "newest") {
      // This would typically use a date field, but we're using the postedAt string as a proxy
      return a.postedAt.localeCompare(b.postedAt);
    }
    return 0;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <PageHeader
          title="StoryShare"
          description="Explore authentic cultural stories and personal experiences from travelers across India. Share your own journey to inspire others."
          bgImage="https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&q=80"
        >
          <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
            <div className="relative flex-grow max-w-lg">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                type="text"
                placeholder="Search stories, experiences, or places..."
                className="pl-10 bg-white/80 backdrop-blur-sm border-white/20"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button className="w-full md:w-auto">
              <UploadCloud size={18} className="mr-2" />
              Share Your Story
            </Button>
          </div>
        </PageHeader>

        <div className="container-custom py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={setCategory}>
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="Historical">Historical</TabsTrigger>
                <TabsTrigger value="Adventure">Adventure</TabsTrigger>
                <TabsTrigger value="Cultural">Cultural</TabsTrigger>
                <TabsTrigger value="Festival">Festivals</TabsTrigger>
                <TabsTrigger value="Spiritual">Spiritual</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="flex items-center gap-2 w-full md:w-auto">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter size={16} />
                    <span>Sort: {sortBy === "popular" ? "Most Popular" : sortBy === "comments" ? "Most Commented" : "Newest"}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setSortBy("popular")}>
                    Most Popular
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSortBy("comments")}>
                    Most Commented
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSortBy("newest")}>
                    Newest
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {sortedStories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedStories.map((story) => (
                <StoryCard
                  key={story.id}
                  id={story.id}
                  title={story.title}
                  excerpt={story.excerpt}
                  thumbnail={story.thumbnail}
                  author={story.author}
                  postedAt={story.postedAt}
                  likes={story.likes}
                  comments={story.comments}
                  categories={story.categories}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold mb-2">No stories found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filters to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Stories;
