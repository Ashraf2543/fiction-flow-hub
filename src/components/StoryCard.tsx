
import React, { useState } from 'react';
import { Heart, MessageSquare, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Story {
  id: number;
  author: string;
  authorAvatar: string;
  title: string;
  genre: string;
  content: string;
  likes: number;
  comments: number;
  theories: number;
  timeAgo: string;
  isOngoing: boolean;
  chapter: number;
}

interface StoryCardProps {
  story: Story;
}

export const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <Card className="w-full bg-white/70 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-all duration-300 hover:bg-white/80">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full flex items-center justify-center text-2xl">
              {story.authorAvatar}
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">{story.author}</h3>
              <p className="text-sm text-slate-500">{story.timeAgo}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="bg-orange-100 text-orange-700">
              {story.genre}
            </Badge>
            {story.isOngoing && (
              <Badge variant="outline" className="border-green-300 text-green-700">
                Ch. {story.chapter}
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-3">{story.title}</h2>
          <p className="text-slate-700 leading-relaxed line-height-loose">
            {story.content}
          </p>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLike}
              className={`gap-2 ${isLiked ? 'text-red-500' : 'text-slate-600'}`}
            >
              <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
              {story.likes + (isLiked ? 1 : 0)}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowComments(!showComments)}
              className="gap-2 text-slate-600"
            >
              <MessageSquare className="h-4 w-4" />
              {story.comments}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="gap-2 text-slate-600"
            >
              <User className="h-4 w-4" />
              {story.theories} theories
            </Button>
          </div>

          <Button size="sm" variant="outline" className="text-slate-600 border-slate-300">
            Continue Reading
          </Button>
        </div>

        {showComments && (
          <div className="mt-4 p-4 bg-slate-50 rounded-lg">
            <p className="text-sm text-slate-600 italic">
              "I think Maya might be connected to the resistance!" - @BookwormSarah
            </p>
            <p className="text-sm text-slate-600 italic mt-2">
              "Plot twist: The barista is her sister from the past!" - @StorySeeker
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
