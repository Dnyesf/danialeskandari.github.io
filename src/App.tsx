import React, { useEffect, Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Masthead from './components/Masthead';
import Sidebar from './components/Sidebar';
import { siteData } from './data';

import PageSkeleton from './components/PageSkeleton';
import FullPageSkeleton from './components/FullPageSkeleton';
import Breadcrumbs from './components/Breadcrumbs';

const About = lazy(() => import('./pages/About'));
const Publications = lazy(() => import('./pages/Publications'));
const PublicationPost = lazy(() => import('./pages/PublicationPost'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectPost = lazy(() => import('./pages/ProjectPost'));
const Honors = lazy(() => import('./pages/Honors'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));

function RouteHandler() {
  const location = useLocation();
  const currentTab = siteData.nav.find(item => item.path === location.pathname) || siteData.nav[0];
  
  useEffect(() => {
    document.title = `${currentTab.label} - ${siteData.author.name}`;
    const main = document.querySelector('main');
    if (main) {
      main.scrollTo(0, 0);
    }
  }, [currentTab, location]);
  return null;
}

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        <Breadcrumbs />
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <Suspense fallback={
      <PageSkeleton />
    }>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/publications" element={<PageWrapper><Publications /></PageWrapper>} />
        <Route path="/publications/:id" element={<PageWrapper><PublicationPost /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
        <Route path="/projects/:id" element={<PageWrapper><ProjectPost /></PageWrapper>} />
        <Route path="/honors" element={<PageWrapper><Honors /></PageWrapper>} />
        <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
        <Route path="/blog/:id" element={<PageWrapper><BlogPost /></PageWrapper>} />
      </Routes>
    </Suspense>
  );
}

export default function App() {
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isInitialLoading) {
    return <FullPageSkeleton />;
  }

  return (
    <Router>
      <RouteHandler />
      <div className="h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 font-sans flex flex-col lg:flex-row overflow-hidden no-scrollbar transition-colors">
        <Sidebar />
        
        <main className="flex-1 flex flex-col overflow-y-auto relative bg-stone-50 dark:bg-stone-950 no-scrollbar transition-colors">
          <Masthead />
          
          <div className="p-4 sm:p-8 lg:p-12 w-full max-w-4xl mx-auto">
            <AnimatedRoutes />
          </div>
          
          <footer className="mt-auto border-t border-stone-200 dark:border-stone-800 py-6 lg:py-8 transition-colors">
            <div className="px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs lg:text-sm text-stone-500 dark:text-stone-400">
              <div>
                &copy; {new Date().getFullYear()} Danial Eskandari Faruji. Powered by React & Tailwind CSS.
              </div>
              <div>
                Last update: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </div>
            </div>
          </footer>
        </main>
      </div>
    </Router>
  );
}
