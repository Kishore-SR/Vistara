import { useState } from "react";
import { Heart, MessageSquare, Clock, User, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { stories } from "@/data/stories";

interface StoryCardProps {
  id: string;
  title: string;
  excerpt: string;
  thumbnail: string;
  author: {
    name: string;
    avatar?: string;
  };
  postedAt: string;
  likes: number;
  comments: number;
  categories: string[];
  isLiked?: boolean;
}

const StoryCard = ({
  id,
  title,
  excerpt,
  thumbnail,
  author,
  postedAt,
  likes,
  comments,
  categories,
  isLiked = false,
}: StoryCardProps) => {
  const [liked, setLiked] = useState(isLiked);
  const [likeCount, setLikeCount] = useState(likes);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Find the full story details from stories array
  const fullStory = stories.find(story => story.id === id);

  const handleLikeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  const handleReadMore = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDialogOpen(true);
  };

  return (
    <>
      <div className="feature-card h-full overflow-hidden hover:shadow-lg transition-all duration-300" onClick={handleReadMore}>
        <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                className="bg-primary/80 hover:bg-primary"
              >
                {category}
              </Badge>
            ))}
          </div>
          <button
            onClick={handleLikeClick}
            className={cn(
              "absolute top-3 right-3 p-2 rounded-full transition-colors",
              liked
                ? "bg-primary/90 text-white"
                : "bg-white/90 text-muted-foreground hover:text-primary"
            )}
            aria-label={liked ? "Unlike" : "Like"}
          >
            <Heart
              size={16}
              className={cn(liked ? "fill-current" : "")}
            />
          </button>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold line-clamp-1">{title}</h3>

          <p className="text-muted-foreground text-sm line-clamp-2">
            {excerpt}
          </p>

          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <div className="flex items-center">
              <User size={14} className="mr-1" />
              <span>{author.name}</span>
            </div>
            <div className="flex items-center">
              <Clock size={14} className="mr-1" />
              <span>{postedAt}</span>
            </div>
          </div>

          <div className="flex justify-between items-center pt-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                <Heart size={14} className="mr-1" />
                <span>{likeCount}</span>
              </div>
              <div className="flex items-center">
                <MessageSquare size={14} className="mr-1" />
                <span>{comments}</span>
              </div>
            </div>
            <Button 
              variant="ghost" 
              className="font-medium text-foreground p-0 hover:bg-transparent hover:text-primary"
              onClick={handleReadMore}
            >
              Read More →
            </Button>
          </div>
        </div>
      </div>

      {/* Story Detail Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">{title}</DialogTitle>
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-4 top-4"
              onClick={() => setIsDialogOpen(false)}
            >
              <X size={18} />
            </Button>
          </DialogHeader>
          
          <div className="space-y-6 mt-2">
            {/* Author and metadata */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {author.avatar ? (
                  <img src={author.avatar} alt={author.name} className="w-10 h-10 rounded-full object-cover" />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <User size={20} />
                  </div>
                )}
                <div>
                  <p className="font-medium">{author.name}</p>
                  <p className="text-sm text-muted-foreground">{postedAt}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <Heart size={18} className={cn("mr-1", liked ? "fill-primary text-primary" : "")} />
                  <span>{likeCount}</span>
                </div>
                <div className="flex items-center">
                  <MessageSquare size={18} className="mr-1" />
                  <span>{comments}</span>
                </div>
              </div>
            </div>
            
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge key={category} variant="secondary">{category}</Badge>
              ))}
            </div>
            
            {/* Main image */}
            <div className="rounded-lg overflow-hidden">
              <img 
                src={thumbnail} 
                alt={title} 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="prose prose-stone max-w-none">
              <p>{fullStory?.content || excerpt}</p>
            </div>
            
            {/* Media gallery */}
            {fullStory?.media && fullStory.media.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {fullStory.media.map((item, index) => (
                    <div key={index} className="rounded-md overflow-hidden">
                      {item.type === 'image' ? (
                        <figure>
                          <img 
                            src={item.url} 
                            alt={item.caption } 
                            className="w-full h-auto object-cover"
                          />
                          {item.caption && (
                            <figcaption className="text-sm text-muted-foreground mt-2">{item.caption}</figcaption>
                          )}
                        </figure>
                      ) : (
                        <figure>
                          <video 
                            src={item.url} 
                            controls 
                            className="w-full h-auto"
                          />
                          {item.caption && (
                            <figcaption className="text-sm text-muted-foreground mt-2">{item.caption}</figcaption>
                          )}
                        </figure>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default StoryCard;