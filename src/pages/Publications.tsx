import React, { useMemo, useEffect } from 'react';
import { publications } from '../data';
import { useSEO } from '../hooks/useSEO';
import { Link, useLocation } from 'react-router-dom';
import { Folder } from 'lucide-react';

import BlurImage from '../components/BlurImage';

export default function Publications() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  const jsonLd = useMemo(() => {
    const articles = publications.map((pub) => ({
      "@type": "ScholarlyArticle",
      "headline": pub.title,
      "author": {
        "@type": "Person",
        "name": pub.authors
      },
      "datePublished": pub.year,
      "publisher": {
        "@type": "Organization",
        "name": pub.venue
      },
      "description": pub.excerpt,
      "url": pub.url,
      "image": `https://danialeskandari.com/${pub.image}`
    }));

    return [{
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Publications | Danial Eskandari Faruji",
      "description": "Academic publications, papers, and research works in Biomedical AI and Machine Learning by Danial Eskandari Faruji.",
      "url": "https://danialeskandari.com/publications",
      "hasPart": articles
    }];
  }, []);

  useSEO({
    title: 'Publications | Danial Eskandari Faruji',
    description: 'Academic publications, papers, and research works in Biomedical AI and Machine Learning by Danial Eskandari Faruji.',
    jsonLd,
  });

  return (
    <div className="max-w-4xl text-stone-700 dark:text-stone-300 leading-relaxed">
      <h1 className="text-2xl sm:text-3xl font-serif italic font-bold mb-8 text-stone-800 dark:text-stone-200">Publications</h1>
      
      <div className="space-y-8">
        {publications.map((pub, index) => (
          <div id={pub.id} key={index} className="bg-white dark:bg-stone-900 p-6 rounded-lg border border-stone-200 dark:border-stone-800 shadow-sm relative group hover:border-stone-300 dark:border-stone-700 transition-colors flex flex-col sm:flex-row items-start gap-6 scroll-mt-24">
            <div className="shrink-0 rounded overflow-hidden bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-2 self-start">
              <Link to={`/publications/${pub.id}`} className="block">
                <BlurImage loading="lazy" src={pub.image} alt={pub.title} className="w-auto" imgClassName="w-auto h-auto object-contain max-w-full sm:max-w-48" />
              </Link>
            </div>
            <div className="flex-1 flex flex-col">
              <Link to={`/publications/${pub.id}`} className="group-hover:text-stone-700 dark:group-hover:text-stone-300 transition-colors">
                <h2 className="font-serif italic font-bold text-base sm:text-lg text-stone-900 dark:text-stone-100 mb-1">
                  {pub.title}
                </h2>
              </Link>
              <p className="text-sm text-stone-900 dark:text-stone-100 font-medium mb-1">{pub.authors}</p>
              <p className="text-xs text-stone-500 dark:text-stone-400 mb-3">Published in <span className="italic underline">{pub.venue}</span>, {pub.year}</p>
              <p className="text-sm text-stone-600 dark:text-stone-400 mb-4 line-clamp-2">"{pub.excerpt}"</p>
              
              <div className="flex flex-wrap gap-3 mt-auto">
                {(pub.id === 'gat-icu-prediction' || pub.id === 'ptsd-detection-framework') && (
                  <Link
                    to={`/publications/${pub.id}`}
                    className="inline-flex items-center justify-center px-4 py-1.5 text-xs font-medium text-white bg-stone-800 hover:bg-stone-900 dark:bg-stone-200 dark:text-stone-900 dark:hover:bg-white rounded border border-stone-800 dark:border-stone-200 transition-colors"
                  >
                    View Details
                  </Link>
                )}
                <a 
                  href={pub.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-1.5 text-xs font-medium text-stone-700 dark:text-stone-300 bg-white dark:bg-stone-900 hover:bg-stone-50 dark:hover:bg-stone-950 rounded border border-stone-300 dark:border-stone-700 transition-colors"
                >
                  Paper
                </a>
                {pub.codeUrl !== '#' && (
                  <a 
                    href={pub.codeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-1.5 text-xs font-medium text-stone-700 dark:text-stone-300 bg-white dark:bg-stone-900 hover:bg-stone-50 dark:hover:bg-stone-950 rounded border border-stone-300 dark:border-stone-700 transition-colors"
                  >
                    Code
                  </a>
                )}
                {(pub as any).relatedProject && (
                  <Link 
                    to={`/projects/${(pub as any).relatedProject}`}
                    className="inline-flex items-center justify-center px-4 py-1.5 text-xs font-medium text-stone-700 dark:text-stone-300 bg-white dark:bg-stone-900 hover:bg-stone-50 dark:hover:bg-stone-950 rounded border border-stone-300 dark:border-stone-700 transition-colors"
                  >
                    <Folder className="w-4 h-4 mr-2" />
                    Related Project
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
