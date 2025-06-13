
import React from 'react';
import { StoryCard } from '@/components/StoryCard';

const sampleStories = [
  {
    id: 1,
    author: 'Elena Rodriguez',
    authorAvatar: '👩‍🎨',
    title: 'The Last Library',
    genre: 'Dystopian',
    content: 'Maya pressed her palm against the scanner, and the heavy vault door groaned open. Inside, thousands of physical books lined the walls—the last repository of human knowledge before the Digital Purge. She had exactly ten minutes before the authorities arrived.',
    likes: 234,
    comments: 18,
    theories: 7,
    timeAgo: '2h ago',
    isOngoing: true,
    chapter: 12
  },
  {
    id: 2,
    author: 'Marcus Chen',
    authorAvatar: '🧙‍♂️',
    title: 'Coffee Shop Chronicles',
    genre: 'Urban Fantasy',
    content: 'The barista handed me my usual order, but instead of my name, the cup read "Dragon Slayer." I looked up, confused, only to see her eyes flash gold. "Your real order is ready," she whispered, pointing to a door that definitely wasn\'t there five minutes ago.',
    likes: 156,
    comments: 23,
    theories: 12,
    timeAgo: '4h ago',
    isOngoing: true,
    chapter: 8
  },
  {
    id: 3,
    author: 'Aria Moon',
    authorAvatar: '🌙',
    title: 'Between Dimensions',
    genre: 'Sci-Fi',
    content: 'The mirror cracked, but instead of breaking, it revealed another room—identical to mine, except the person looking back wasn\'t me. She mouthed the words "Help me" just as the crack began to seal itself.',
    likes: 198,
    comments: 31,
    theories: 19,
    timeAgo: '6h ago',
    isOngoing: true,
    chapter: 5
  }
];

export const StoryFeed: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Latest Stories</h2>
        <p className="text-slate-600">Discover ongoing tales from our community of writers</p>
      </div>

      <div className="space-y-6">
        {sampleStories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </div>
  );
};
