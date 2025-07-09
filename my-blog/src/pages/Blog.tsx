import React from 'react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
}

const Blog: React.FC = () => {
  // Mock blog posts data - replace with actual data later
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Getting Started with React and TypeScript",
      excerpt: "Learn how to set up a React project with TypeScript and build type-safe applications.",
      date: "2024-01-15",
      readTime: "5 min read",
      tags: ["React", "TypeScript", "Web Development"]
    },
    {
      id: 2,
      title: "Building Interactive Calculators with React",
      excerpt: "A step-by-step guide to creating useful calculators using React hooks and state management.",
      date: "2024-01-10",
      readTime: "8 min read",
      tags: ["React", "JavaScript", "Tutorial"]
    },
    {
      id: 3,
      title: "Styling with Tailwind CSS",
      excerpt: "Discover the power of utility-first CSS framework and how it can speed up your development.",
      date: "2024-01-05",
      readTime: "6 min read",
      tags: ["CSS", "Tailwind", "Design"]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
        <p className="text-lg text-gray-600">
          Thoughts on web development, technology, and programming.
        </p>
      </div>

      {/* Blog Posts Grid */}
      <div className="space-y-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                {post.title}
              </h2>
              <div className="flex items-center text-sm text-gray-500 space-x-4">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <p className="text-gray-700 mb-4">{post.excerpt}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button className="text-blue-500 hover:text-blue-600 font-medium">
                Read More →
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination placeholder */}
      <div className="mt-12 text-center">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
          Load More Posts
        </button>
      </div>
    </div>
  );
};

export default Blog;