
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { StoryFeed } from '@/components/StoryFeed';
import { CreateStoryModal } from '@/components/CreateStoryModal';
import { UserProfile } from '@/components/UserProfile';

const Index = () => {
  const [activeView, setActiveView] = useState<'feed' | 'profile'>('feed');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header 
        activeView={activeView} 
        setActiveView={setActiveView}
        onCreateStory={() => setIsCreateModalOpen(true)}
      />
      
      <main className="container mx-auto px-4 py-6 max-w-4xl">
        {activeView === 'feed' ? (
          <StoryFeed />
        ) : (
          <UserProfile />
        )}
      </main>

      <CreateStoryModal 
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />
    </div>
  );
};

export default Index;
