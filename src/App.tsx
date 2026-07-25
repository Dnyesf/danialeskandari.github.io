import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Masthead from './components/Masthead';
import Sidebar from './components/Sidebar';
import About from './pages/About';
import Publications from './pages/Publications';
import PublicationPost from './pages/PublicationPost';
import Projects from './pages/Projects';
import Honors from './pages/Honors';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import { siteData } from './data';

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
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<PageWrapper><About /></PageWrapper>} />
      <Route path="/publications" element={<PageWrapper><Publications /></PageWrapper>} />
      <Route path="/publications/:id" element={<PageWrapper><PublicationPost /></PageWrapper>} />
      <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
      <Route path="/honors" element={<PageWrapper><Honors /></PageWrapper>} />
      <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
      <Route path="/blog/:id" element={<PageWrapper><BlogPost /></PageWrapper>} />
    </Routes>
  );
}

export default function App() {
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
            <div className="px-6 sm:px-8 lg:px-12 text-center lg:text-left text-xs lg:text-sm text-stone-500 dark:text-stone-400">
              &copy; {new Date().getFullYear()} Danial Eskandari Faruji. Powered by React & Tailwind CSS.
            </div>
          </footer>
        </main>
      </div>
    </Router>
  );
}
