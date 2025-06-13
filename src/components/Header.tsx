
import React from 'react';
import { Book, User, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  activeView: 'feed' | 'profile';
  setActiveView: (view: 'feed' | 'profile') => void;
  onCreateStory: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeView, setActiveView, onCreateStory }) => {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 max-w-4xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl">
              <Book className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Fiction Feed
              </h1>
              <p className="text-sm text-slate-500">Stories in motion</p>
            </div>
          </div>

          <nav className="flex items-center gap-2">
            <Button
              variant={activeView === 'feed' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveView('feed')}
              className="gap-2"
            >
              <Book className="h-4 w-4" />
              Feed
            </Button>
            
            <Button
              variant={activeView === 'profile' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveView('profile')}
              className="gap-2"
            >
              <User className="h-4 w-4" />
              Profile
            </Button>

            <Button 
              onClick={onCreateStory}
              size="sm"
              className="gap-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
            >
              <Plus className="h-4 w-4" />
              Create
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
