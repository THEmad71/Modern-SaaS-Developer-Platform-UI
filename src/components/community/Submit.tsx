import { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/Card';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { Button } from '../ui/Button';
import { Alert } from '../ui/Alert';
import { Upload, Award } from 'lucide-react';

export default function CommunitySubmit() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    github: '',
    componentName: '',
    category: '',
    description: '',
    code: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submission:', formData);
    alert('Thank you for your submission! We will review it and get back to you soon.');
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
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-semibold text-black dark:text-white mb-4">
                Submit Component
              </h1>
              <p className="text-lg text-neutral-600 dark:text-neutral-400">
                Share your component with the NeedUI community and get credited as a contributor.
              </p>
            </div>

            <Alert variant="info" className="mb-8">
              <strong className="block mb-1">Review Process</strong>
              All submissions are reviewed by our team to ensure quality and consistency. You'll receive feedback 
              within 48 hours. Approved components will be added to the library with full credit to you.
            </Alert>

            <div className="grid grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-medium text-black dark:text-white mb-2">
                    Get Credit
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Your name and links will be featured on the component page.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center mb-4">
                    <Upload className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-medium text-black dark:text-white mb-2">
                    Share Knowledge
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Help other developers build better interfaces faster.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center mb-4">
                    <span className="text-2xl">🎉</span>
                  </div>
                  <h3 className="font-medium text-black dark:text-white mb-2">
                    Join Community
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Become part of a growing community of designers and developers.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Component Details</CardTitle>
                <CardDescription>
                  Fill out the information below to submit your component
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      label="Your Name"
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
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <Input
                    label="GitHub Profile (Optional)"
                    name="github"
                    value={formData.github}
                    onChange={handleChange}
                    placeholder="https://github.com/yourusername"
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      label="Component Name"
                      name="componentName"
                      value={formData.componentName}
                      onChange={handleChange}
                      placeholder="e.g., Animated Button"
                      required
                    />

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-black dark:text-white">
                        Category
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                        required
                      >
                        <option value="">Select category</option>
                        <option value="layout">Layout</option>
                        <option value="forms">Forms</option>
                        <option value="data-display">Data Display</option>
                        <option value="overlay">Overlay</option>
                        <option value="navigation">Navigation</option>
                      </select>
                    </div>
                  </div>

                  <Textarea
                    label="Description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe your component, its features, and use cases..."
                    rows={4}
                    required
                  />

                  <Textarea
                    label="Component Code"
                    name="code"
                    value={formData.code}
                    onChange={handleChange}
                    placeholder="Paste your component code here (React/TypeScript)..."
                    rows={12}
                    className="font-mono text-sm"
                    required
                  />

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-black dark:text-white">
                      Preview Image (Optional)
                    </label>
                    <div className="border-2 border-dashed border-neutral-200 dark:border-neutral-800 rounded-lg p-8 text-center hover:border-blue-500/50 transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 text-neutral-400 mx-auto mb-2" />
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-1">
                        PNG, JPG up to 2MB
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button type="submit" variant="default" className="flex-1">
                      Submit for Review
                    </Button>
                    <Button type="button" variant="outline">
                      Save as Draft
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            <div className="mt-8 p-6 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800">
              <h3 className="font-medium text-black dark:text-white mb-2">
                Contributor Badge Preview
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                Once approved, your component will display this credit:
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800">
                <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  Contributed by{' '}
                  <span className="text-black dark:text-white font-medium">
                    {formData.name || 'Your Name'}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
