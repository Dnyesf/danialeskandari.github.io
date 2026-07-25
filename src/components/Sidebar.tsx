import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { siteData } from '../data';
import { MapPin, Briefcase, Mail, Github, Twitter, Linkedin, BookOpen, Download, Moon, Sun } from 'lucide-react';
import { useTheme } from '../useTheme';

export default function Sidebar() {
  const { author } = siteData;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { isDark, toggleDark } = useTheme();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <aside className="hidden lg:flex w-[321px] h-full bg-stone-100 dark:bg-stone-900 border-r border-stone-200 dark:border-stone-800 p-8 shrink-0 overflow-y-auto flex-col no-scrollbar transition-colors">
        <div className="absolute top-4 left-4 z-10">
          <button onClick={toggleDark} className="p-2 rounded-full bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-300 dark:hover:bg-stone-700 transition-colors">
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
        <div className="w-48 h-48 bg-stone-300 dark:bg-stone-800 rounded-lg mx-auto mb-6 shadow-inner flex items-center justify-center border border-stone-200 dark:border-stone-700 overflow-hidden">
          <img
            src={author.avatar}
            alt={author.name}
            width="192"
            height="192"
            
            className="w-full h-full object-cover -scale-x-100"
          />
        </div>
        
        <div className="text-[22px] font-serif font-bold text-center leading-tight mb-1 text-stone-900 dark:text-stone-100">{author.name}</div>
        <div className="text-center mb-6">
          <p className="text-sm font-medium text-stone-700 dark:text-stone-300">AI Researcher</p>
          <p className="text-sm text-stone-600 dark:text-stone-400">{author.employer}</p>
          <p className="text-xs text-stone-500 dark:text-stone-500 mt-2">Researching Machine Learning, Deep Learning, Computer Vision, Biomedical AI, and Intelligent Systems.</p>
        </div>

        <div className="space-y-4 text-sm border-t border-stone-200 dark:border-stone-800 pt-6">
          <div className="flex items-start text-stone-700 dark:text-stone-300">
            <span className="mr-3 mt-1 text-stone-400 dark:text-stone-500">
              <MapPin className="w-4 h-4" />
            </span>
            <span>{author.location}</span>
          </div>
          <div className="flex items-start text-stone-700 dark:text-stone-300">
            <span className="mr-3 mt-1 text-stone-400 dark:text-stone-500">
              <Mail className="w-4 h-4" />
            </span>
            <a href={`mailto:${author.email}`} target="_blank" rel="noopener noreferrer" className="underline decoration-stone-300 dark:decoration-stone-600 hover:text-stone-900 dark:hover:text-white transition-colors">
              {author.email}
            </a>
          </div>
          <div className="flex items-start text-stone-700 dark:text-stone-300">
            <span className="mr-3 mt-1 text-stone-400 dark:text-stone-500">
              <BookOpen className="w-4 h-4" />
            </span>
            <a href={author.links.scholar} target="_blank" rel="noopener noreferrer" className="underline decoration-stone-300 dark:decoration-stone-600 hover:text-stone-900 dark:hover:text-white transition-colors">
              Google Scholar
            </a>
          </div>
        </div>

        <div className="mt-auto pt-6 border-t border-stone-200 dark:border-stone-800">
          <div className="flex justify-center space-x-3 mb-4">
            <a href={author.links.twitter} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded bg-stone-200 dark:bg-stone-800 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity text-stone-700 dark:text-stone-300">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
            </a>
            <a href={author.links.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded bg-stone-200 dark:bg-stone-800 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity text-stone-700 dark:text-stone-300">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href={author.links.github} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded bg-stone-200 dark:bg-stone-800 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity text-stone-700 dark:text-stone-300">
              <Github className="w-4 h-4" />
            </a>
            <a href="/cv.pdf" target="_blank" className="h-8 px-3 rounded bg-stone-800 dark:bg-stone-200 text-stone-100 dark:text-stone-900 flex items-center justify-center gap-1.5 hover:bg-black dark:hover:bg-white transition-colors text-xs font-medium shrink-0">
              <Download className="w-3.5 h-3.5" /> Download CV
            </a>
          </div>
        </div>
      </aside>

      {/* Mobile Top Bar (Always visible, pinned at top) */}
      <div className="lg:hidden w-full bg-white dark:bg-stone-950 px-4 py-3 flex items-center justify-between border-b border-stone-200 dark:border-stone-800 z-50 shrink-0 transition-colors">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 bg-stone-200 dark:bg-stone-800">
              <img
                src={author.avatar}
                alt={author.name}
                width="48"
                height="48"
                
                className="w-full h-full object-cover -scale-x-100"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-[13px] font-serif font-bold text-stone-900 dark:text-stone-100 leading-none mb-1.5">{author.name}</div>
              <p className="text-[10px] text-stone-500 dark:text-stone-400 leading-none">AI Researcher</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button onClick={toggleDark} className="p-1.5 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors">
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <div className="relative shrink-0" ref={dropdownRef}>
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="bg-[#2d2d2d] dark:bg-stone-800 hover:bg-black dark:hover:bg-stone-700 text-white text-[12px] font-medium px-3.5 py-1.5 rounded flex items-center gap-1.5 transition-colors"
              >
                Follow
                <svg className="w-3.5 h-3.5 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-[250px] sm:w-[200px] bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-md shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] py-1.5 z-50 overflow-hidden">
                  <a href={`mailto:${author.email}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-2.5 text-[13px] text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors">
                    <Mail className="w-4 h-4 text-stone-500 dark:text-stone-400" /> {author.email}
                  </a>
                  <a href={author.links.scholar} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-2.5 text-[13px] text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors">
                    <BookOpen className="w-4 h-4 text-stone-500 dark:text-stone-400" /> Google Scholar
                  </a>
                  <a href={author.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-2.5 text-[13px] text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors">
                    <Github className="w-4 h-4 text-stone-500 dark:text-stone-400" /> GitHub
                  </a>
                  <a href={author.links.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-2.5 text-[13px] text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors">
                    <Linkedin className="w-4 h-4 text-stone-500 dark:text-stone-400" /> LinkedIn
                  </a>
                  <a href={author.links.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-2.5 text-[13px] text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors">
                    <svg className="w-4 h-4 text-stone-500 dark:text-stone-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg> X
                  </a>
                  <a href="/cv.pdf" target="_blank" className="flex items-center gap-3 px-4 py-2.5 text-[13px] text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors">
                    <Download className="w-4 h-4 text-stone-500 dark:text-stone-400" /> Download CV
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
    </>
  );
}
