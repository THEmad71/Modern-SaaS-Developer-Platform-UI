import { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';
import { Calendar, Clock, Check } from 'lucide-react';

export default function StudioOrder() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Order submitted:', formData);
    alert('Thank you for your order! We will get back to you within 24 hours.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-semibold text-black dark:text-white mb-4">
                Order UI/UX Design
              </h1>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                Fill out the form below to get started, or schedule a meeting to discuss your project in detail.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8">
              {/* Order Form */}
              <div className="col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Project Information</CardTitle>
                    <CardDescription>
                      Tell us about your project and we'll get back to you within 24 hours
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <Input
                          label="Full Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                        />
                        <Input
                          label="Email Address"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          required
                        />
                      </div>

                      <Input
                        label="Company (Optional)"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Acme Inc."
                      />

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-black dark:text-white">
                          Project Type
                        </label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full px-3 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                          required
                        >
                          <option value="">Select a project type</option>
                          <option value="component-library">Component Library</option>
                          <option value="design-system">Design System</option>
                          <option value="web-app">Web Application UI/UX</option>
                          <option value="mobile-app">Mobile App Design</option>
                          <option value="dashboard">Dashboard Design</option>
                          <option value="landing-page">Landing Page</option>
                          <option value="redesign">Website Redesign</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-black dark:text-white">
                            Budget Range
                          </label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full px-3 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                            required
                          >
                            <option value="">Select budget range</option>
                            <option value="5k-10k">$5,000 - $10,000</option>
                            <option value="10k-25k">$10,000 - $25,000</option>
                            <option value="25k-50k">$25,000 - $50,000</option>
                            <option value="50k-100k">$50,000 - $100,000</option>
                            <option value="100k+">$100,000+</option>
                          </select>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium text-black dark:text-white">
                            Timeline
                          </label>
                          <select
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleChange}
                            className="w-full px-3 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                            required
                          >
                            <option value="">Select timeline</option>
                            <option value="urgent">ASAP (2-4 weeks)</option>
                            <option value="normal">Normal (1-2 months)</option>
                            <option value="flexible">Flexible (2-3 months)</option>
                            <option value="longterm">Long-term (3+ months)</option>
                          </select>
                        </div>
                      </div>

                      <Textarea
                        label="Project Description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Tell us about your project, goals, target audience, and any specific requirements..."
                        rows={6}
                        required
                      />

                      <Button type="submit" variant="default" className="w-full">
                        Submit Request
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Meeting Booking */}
                <Card>
                  <CardHeader>
                    <CardTitle>Schedule a Meeting</CardTitle>
                    <CardDescription>
                      Prefer to discuss your project directly?
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400">
                        <Clock className="w-4 h-4 flex-shrink-0" />
                        <span>30-minute consultation call</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400">
                        <Calendar className="w-4 h-4 flex-shrink-0" />
                        <span>Available Mon-Fri, 9AM-5PM EST</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
                      <Button variant="outline" className="w-full">
                        Book a Call
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Process */}
                <Card>
                  <CardHeader>
                    <CardTitle>Our Process</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {[
                        'Initial consultation to discuss needs',
                        'Detailed proposal and timeline',
                        'Design iterations with feedback',
                        'Development-ready handoff',
                        'Post-launch support',
                      ].map((step, idx) => (
                        <li key={idx} className="flex gap-3 text-sm">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-950/30 flex items-center justify-center">
                            <Check className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                          </div>
                          <span className="text-neutral-700 dark:text-neutral-300">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Contact Info */}
                <Card>
                  <CardHeader>
                    <CardTitle>Need Help?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div>
                      <div className="text-neutral-500 dark:text-neutral-400 mb-1">Email</div>
                      <div className="text-black dark:text-white">hello@needui.com</div>
                    </div>
                    <div>
                      <div className="text-neutral-500 dark:text-neutral-400 mb-1">Response Time</div>
                      <div className="text-black dark:text-white">Within 24 hours</div>
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
