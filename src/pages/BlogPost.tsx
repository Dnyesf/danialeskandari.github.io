import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import { blogs } from '../data';
import { ArrowLeft, Folder } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import BlurImage from '../components/BlurImage';

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = blogs.find((b) => b.id === id);

  useSEO({
    title: post ? `${post.title} | Danial Eskandari Faruji` : 'Post Not Found | Danial Eskandari Faruji',
    description: post ? post.excerpt : 'The requested blog post could not be found.',
  });

  if (!post) {
    return (
      <div className="max-w-2xl text-stone-700 dark:text-stone-300 leading-relaxed">
        <h1 className="text-2xl sm:text-3xl font-serif italic font-bold mb-8 text-stone-800 dark:text-stone-200">Post not found</h1>
        <Link to="/blog" className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:text-stone-100 underline">
          &larr; Back to blog
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl text-stone-700 dark:text-stone-300 leading-relaxed">
      <article>
        <header className="mb-10">
          <time className="text-xs font-mono text-stone-400 dark:text-stone-500 uppercase tracking-widest block mb-3">
            {post.date}
          </time>
          <h1 className="text-3xl sm:text-4xl font-serif italic font-bold text-stone-900 dark:text-stone-100 leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-base sm:text-lg text-stone-500 dark:text-stone-400 italic mb-8">
            {post.excerpt}
          </p>
          {post.image && (
            <div className="w-full aspect-[2/1] rounded-xl overflow-hidden bg-white dark:bg-stone-900 shadow-sm border border-stone-200 dark:border-stone-800 p-4">
              <BlurImage loading="lazy" src={post.image} alt={post.title} width="800" height="384" className="w-full h-full object-contain hover:scale-105 transition-transform duration-700 ease-out" />
            </div>
          )}
        </header>

        <div className="prose prose-stone prose-lg max-w-none prose-headings:font-serif prose-headings:font-bold prose-headings:italic prose-a:text-stone-900 dark:text-stone-100 prose-a:underline prose-a:decoration-stone-300 dark:decoration-stone-700 hover:prose-a:decoration-stone-900 prose-img:rounded-lg mb-10">
          <Markdown>{post.content}</Markdown>
        </div>

      </article>
    </div>
  );
}
