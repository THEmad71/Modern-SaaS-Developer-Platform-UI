import { Link } from 'react-router';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';
import { Heart, Eye, User } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const featuredComponents = [
  {
    id: 1,
    name: 'Animated Pricing Card',
    author: 'Sarah Chen',
    avatar: 'https://images.unsplash.com/photo-1580894732930-0babd100d356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=150',
    category: 'Layout',
    likes: 142,
    views: 2847,
    description: 'Interactive pricing card with smooth hover animations and feature toggles.',
  },
  {
    id: 2,
    name: 'Dashboard Sidebar',
    author: 'Alex Kumar',
    avatar: 'https://images.unsplash.com/photo-1570215171323-4ec328f3f5fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=150',
    category: 'Navigation',
    likes: 98,
    views: 1653,
    description: 'Collapsible sidebar with nested navigation and icon support.',
  },
  {
    id: 3,
    name: 'Command Palette',
    author: 'David Park',
    avatar: 'https://images.unsplash.com/photo-1767880239595-f4ea13b5c78c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=150',
    category: 'Overlay',
    likes: 215,
    views: 3912,
    description: 'Keyboard-accessible command palette with search and shortcuts.',
  },
];

const latestSubmissions = [
  { id: 4, name: 'Loading Skeleton', author: 'Emma Wilson', category: 'Data Display', date: '2026-02-21' },
  { id: 5, name: 'Toast Notification', author: 'Michael Brown', category: 'Overlay', date: '2026-02-20' },
  { id: 6, name: 'File Upload', author: 'Lisa Anderson', category: 'Forms', date: '2026-02-19' },
  { id: 7, name: 'Timeline', author: 'James Taylor', category: 'Data Display', date: '2026-02-18' },
  { id: 8, name: 'Color Picker', author: 'Sophie Martin', category: 'Forms', date: '2026-02-17' },
];

const topContributors = [
  { name: 'Sarah Chen', submissions: 12, likes: 847 },
  { name: 'Alex Kumar', submissions: 9, likes: 623 },
  { name: 'David Park', submissions: 8, likes: 591 },
  { name: 'Emma Wilson', submissions: 7, likes: 428 },
  { name: 'Michael Brown', submissions: 6, likes: 392 },
];

export default function CommunityBrowse() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-semibold text-black dark:text-white mb-4">
                Community Components
              </h1>
              <p className="text-lg text-neutral-600 dark:text-neutral-400">
                Discover and share components created by the NeedUI community.
              </p>
            </div>

            {/* CTA */}
            <div className="mb-12 p-6 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/30">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-black dark:text-white mb-2">
                    Share Your Components
                  </h2>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Contribute to the library and get recognized by the community.
                  </p>
                </div>
                <Link to="/community/submit">
                  <Button variant="default">Submit Component</Button>
                </Link>
              </div>
            </div>

            {/* Featured Components */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-black dark:text-white mb-6">
                Featured Components
              </h2>
              <div className="grid grid-cols-3 gap-6">
                {featuredComponents.map((component) => (
                  <Card key={component.id} className="group hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-4">
                        <ImageWithFallback
                          src={component.avatar}
                          alt={component.author}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <div className="font-medium text-sm text-black dark:text-white">
                            {component.author}
                          </div>
                          <div className="text-xs text-neutral-500 dark:text-neutral-400">
                            {component.category}
                          </div>
                        </div>
                      </div>
                      <CardTitle className="mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {component.name}
                      </CardTitle>
                      <CardDescription className="mb-4">
                        {component.description}
                      </CardDescription>
                      <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          {component.likes}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {component.views}
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {/* Latest Submissions */}
              <div className="col-span-2">
                <h2 className="text-2xl font-semibold text-black dark:text-white mb-6">
                  Latest Submissions
                </h2>
                <div className="space-y-3">
                  {latestSubmissions.map((submission) => (
                    <Card key={submission.id} className="hover:bg-neutral-50 dark:hover:bg-neutral-950 transition-colors cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium text-black dark:text-white mb-1">
                              {submission.name}
                            </h3>
                            <div className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400">
                              <span>by {submission.author}</span>
                              <span>•</span>
                              <span>{submission.category}</span>
                            </div>
                          </div>
                          <div className="text-sm text-neutral-500 dark:text-neutral-400">
                            {submission.date}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Top Contributors */}
              <div>
                <h2 className="text-2xl font-semibold text-black dark:text-white mb-6">
                  Top Contributors
                </h2>
                <Card>
                  <CardContent className="p-4">
                    <div className="space-y-4">
                      {topContributors.map((contributor, idx) => (
                        <div key={idx} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-950/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-semibold text-sm">
                              {idx + 1}
                            </div>
                            <div>
                              <div className="text-sm font-medium text-black dark:text-white">
                                {contributor.name}
                              </div>
                              <div className="text-xs text-neutral-500 dark:text-neutral-400">
                                {contributor.submissions} components
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-neutral-600 dark:text-neutral-400">
                            <Heart className="w-3 h-3" />
                            {contributor.likes}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
