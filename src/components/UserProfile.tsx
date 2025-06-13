
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const UserProfile: React.FC = () => {
  const userStats = {
    storiesWritten: 12,
    totalLikes: 1247,
    followers: 89,
    following: 156
  };

  const userStories = [
    { title: 'The Digital Nomad', genre: 'Sci-Fi', chapters: 8, likes: 234 },
    { title: 'Midnight Cafe', genre: 'Romance', chapters: 12, likes: 189 },
    { title: 'The Lost Algorithm', genre: 'Thriller', chapters: 6, likes: 156 }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-4xl text-white mx-auto mb-4">
          ✍️
        </div>
        <h2 className="text-2xl font-bold text-slate-800">Your Writing Journey</h2>
        <p className="text-slate-600">Track your stories and connect with readers</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="text-center bg-white/70 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl font-bold text-orange-600">{userStats.storiesWritten}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600">Stories Written</p>
          </CardContent>
        </Card>

        <Card className="text-center bg-white/70 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl font-bold text-red-600">{userStats.totalLikes}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600">Total Likes</p>
          </CardContent>
        </Card>

        <Card className="text-center bg-white/70 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl font-bold text-blue-600">{userStats.followers}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600">Followers</p>
          </CardContent>
        </Card>

        <Card className="text-center bg-white/70 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl font-bold text-purple-600">{userStats.following}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600">Following</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white/70 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-slate-800">Your Stories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {userStories.map((story, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <div>
                  <h3 className="font-semibold text-slate-800">{story.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                      {story.genre}
                    </Badge>
                    <span className="text-sm text-slate-500">{story.chapters} chapters</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-slate-700">{story.likes} likes</p>
                  <p className="text-sm text-slate-500">Continue writing</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
