import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { siteData } from '../data';
import { publications, projects, blogs as blogPosts } from '../data';

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) return null; // Don't show on Home page if not desired. Or we can just show Home.
  // Actually, maybe show it everywhere except Home.
  
  const getCrumbTitle = (pathSegment: string, index: number, fullPath: string) => {
    // Check if it's the first level, use nav labels
    if (index === 0) {
      const navItem = siteData.nav.find((item) => item.path === `/${pathSegment}`);
      if (navItem) return navItem.label;
    }

    // For second level, find the specific item title
    if (index === 1) {
      const parent = pathnames[0];
      if (parent === 'publications') {
        const item = publications.find(p => p.id === pathSegment);
        if (item) return item.title.length > 40 ? item.title.substring(0, 40) + '...' : item.title;
      }
      if (parent === 'projects') {
        const item = projects.find(p => p.id === pathSegment);
        if (item) return item.title.length > 40 ? item.title.substring(0, 40) + '...' : item.title;
      }
      if (parent === 'blog') {
        const item = blogPosts.find(p => p.id === pathSegment);
        if (item) return item.title.length > 40 ? item.title.substring(0, 40) + '...' : item.title;
      }
    }

    // Fallback: capitalize
    return pathSegment.charAt(0).toUpperCase() + pathSegment.slice(1);
  };

  return (
    <nav className="flex items-center text-sm text-stone-500 dark:text-stone-400 mb-6 mt-2 overflow-hidden whitespace-nowrap" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-1 sm:space-x-2">
        <li>
          <Link to="/" className="flex items-center hover:text-stone-900 dark:hover:text-stone-100 transition-colors">
            <Home className="w-4 h-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const title = getCrumbTitle(value, index, to);

          return (
            <li key={to} className="flex items-center">
              <ChevronRight className="w-4 h-4 mx-1 flex-shrink-0" />
              {isLast ? (
                <span className="text-stone-900 dark:text-stone-100 font-medium truncate max-w-[200px] sm:max-w-[400px]" title={title} aria-current="page">
                  {title}
                </span>
              ) : (
                <Link to={to} className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors truncate max-w-[150px] sm:max-w-[300px]" title={title}>
                  {title}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
