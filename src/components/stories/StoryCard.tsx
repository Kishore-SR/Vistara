
import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, MessageSquare, Clock, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

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

  const handleLikeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <Link to={`/stories/${id}`}>
      <div className="feature-card h-full overflow-hidden hover:shadow-lg transition-all duration-300">
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
            <span className="font-medium text-foreground">
              Read More →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default StoryCard;
