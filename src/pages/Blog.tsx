import React from 'react';
import { Link } from 'react-router-dom';
import { blogs } from '../data';
import { useSEO } from '../hooks/useSEO';

export default function Blog() {
  useSEO({
    title: 'Blog | Danial Eskandari Faruji',
    description: 'Read the latest blog posts and articles on Artificial Intelligence, Machine Learning, and tech by Danial Eskandari Faruji.',
  });

  return (
    <div className="max-w-4xl text-stone-700 dark:text-stone-300 leading-relaxed">
      <h1 className="text-2xl sm:text-3xl font-serif italic font-bold mb-8 text-stone-800 dark:text-stone-200">Research Blog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.map((post) => (
          <article key={post.id} className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 shadow-sm relative group hover:border-stone-300 dark:border-stone-700 transition-colors flex flex-col overflow-hidden">
            <Link to={`/blog/${post.id}`} className="absolute inset-0 z-10">
              <span className="sr-only">Read {post.title}</span>
            </Link>
            {post.image && (
              <div className="w-full h-48 bg-white dark:bg-stone-900 overflow-hidden border-b border-stone-200 dark:border-stone-800 p-2">
                <img loading="lazy" src={post.image} alt={post.title} width="400" height="224" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out" />
              </div>
            )}
            <div className="p-6 flex flex-col gap-3 flex-1">
              <time className="text-xs font-mono text-stone-400 dark:text-stone-500 uppercase tracking-widest">{post.date}</time>
              <h2 className="font-serif italic font-bold text-base sm:text-lg text-stone-900 dark:text-stone-100 group-hover:text-stone-700 dark:text-stone-300 transition-colors line-clamp-2">
                {post.title}
              </h2>
              <p className="text-stone-600 dark:text-stone-400 text-sm line-clamp-3">
                {post.excerpt}
              </p>
              <div className="mt-auto pt-2 text-sm font-medium text-stone-800 dark:text-stone-200 group-hover:text-stone-500 dark:text-stone-400 transition-colors flex items-center">
                Read more <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
