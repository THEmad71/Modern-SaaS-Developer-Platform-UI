import { Link } from 'react-router';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { Button } from '../ui/Button';
import { Card, CardHeader, CardTitle, CardDescription } from '../ui/Card';
import { ArrowRight, Calendar } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const projects = [
  {
    id: 1,
    title: 'E-commerce Dashboard',
    description: 'Complete analytics dashboard with real-time data visualization and reporting tools for online retailers.',
    image: 'https://images.unsplash.com/photo-1758411898021-ef0dadaaa295?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    tags: ['Dashboard', 'Analytics', 'SaaS'],
    duration: '4 weeks',
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    description: 'Modern mobile banking application with seamless UX, secure transactions, and biometric authentication.',
    image: 'https://images.unsplash.com/photo-1725267196915-7700df784ba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    tags: ['Mobile', 'Fintech', 'iOS/Android'],
    duration: '6 weeks',
  },
  {
    id: 3,
    title: 'Creative Portfolio Platform',
    description: 'Minimalist portfolio platform for designers and artists to showcase their work with custom layouts.',
    image: 'https://images.unsplash.com/photo-1603985585179-3d71c35a537c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    tags: ['Portfolio', 'Web Design', 'Creative'],
    duration: '3 weeks',
  },
  {
    id: 4,
    title: 'Component Design System',
    description: 'Comprehensive design system with 100+ components, documentation, and Figma integration.',
    image: 'https://images.unsplash.com/photo-1651931803059-268de2b0417b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    tags: ['Design System', 'Components', 'Documentation'],
    duration: '8 weeks',
  },
  {
    id: 5,
    title: 'Healthcare Management',
    description: 'Patient management system with appointment scheduling, medical records, and telehealth features.',
    image: 'https://images.unsplash.com/photo-1758411898528-869feeea2765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    tags: ['Healthcare', 'Web App', 'Enterprise'],
    duration: '10 weeks',
  },
  {
    id: 6,
    title: 'Developer Tools Platform',
    description: 'Modern developer platform with API documentation, testing tools, and interactive code examples.',
    image: 'https://images.unsplash.com/photo-1649698145660-d30f91023b52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    tags: ['Developer Tools', 'API', 'Documentation'],
    duration: '5 weeks',
  },
];

export default function StudioPortfolio() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-5xl font-semibold text-black dark:text-white mb-6">
                NeedUI Studio
              </h1>
              <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-2">
                UI/UX Design & Component Systems
              </p>
              <p className="text-lg text-neutral-500 dark:text-neutral-500 mb-8 max-w-2xl mx-auto">
                We craft beautiful, functional design systems and user interfaces for modern web applications. 
                From concept to implementation, we deliver production-ready solutions.
              </p>
              <div className="flex gap-4 justify-center">
                <Link to="/studio/order">
                  <Button variant="default" className="text-base px-6">
                    Order a Design
                  </Button>
                </Link>
                <Button variant="outline" className="text-base px-6">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book a Meeting
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-6 mb-16">
              {[
                { label: 'Projects Completed', value: '150+' },
                { label: 'Happy Clients', value: '80+' },
                { label: 'Components Created', value: '500+' },
                { label: 'Years Experience', value: '5+' },
              ].map((stat, idx) => (
                <div key={idx} className="text-center p-6 rounded-lg border border-neutral-200 dark:border-neutral-800">
                  <div className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Portfolio Grid */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-black dark:text-white mb-8">
                Featured Work
              </h2>

              <div className="grid grid-cols-2 gap-8">
                {projects.map((project) => (
                  <Card key={project.id} className="group cursor-pointer hover:shadow-lg transition-shadow overflow-hidden">
                    <div className="relative overflow-hidden">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-sm text-xs font-medium text-neutral-700 dark:text-neutral-300">
                        {project.duration}
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="mb-4">
                        {project.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs rounded bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Button variant="ghost" className="w-full justify-between">
                        View Case Study
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/20 dark:to-black p-12 text-center">
              <h2 className="text-3xl font-semibold text-black dark:text-white mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
                Let's collaborate to create something exceptional. Whether you need a complete design system, 
                custom components, or a full application UI/UX, we're here to help.
              </p>
              <div className="flex gap-4 justify-center">
                <Link to="/studio/order">
                  <Button variant="default" className="px-6">
                    Get Started
                  </Button>
                </Link>
                <Button variant="outline" className="px-6">
                  View Pricing
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
