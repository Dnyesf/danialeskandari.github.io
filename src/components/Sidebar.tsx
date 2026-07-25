import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'motion/react';
import { siteData } from '../data';
import { MapPin, Briefcase, Mail, Github, Twitter, Linkedin, BookOpen, Download, Moon, Sun } from 'lucide-react';
import { useTheme } from '../useTheme';
import AnimatedDownloadButton from './AnimatedDownloadButton';
import BlurImage from './BlurImage';

export default function Sidebar() {
  const { author } = siteData;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileProfileOpen, setIsMobileProfileOpen] = useState(false);
  const [isProfileExpanded, setIsProfileExpanded] = useState(false);

  const openMobileProfile = () => {
    setIsProfileExpanded(false);
    setIsMobileProfileOpen(true);
  };

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
          <BlurImage
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
            <AnimatedDownloadButton
              href="/cv.pdf"
              className="h-8 shrink-0"
              buttonClassName="px-3 rounded bg-stone-800 dark:bg-stone-200 text-stone-100 dark:text-stone-900 hover:bg-black dark:hover:bg-white transition-colors text-xs font-medium"
            />
          </div>
        </div>
      </aside>

      {/* Mobile Top Bar (Always visible, pinned at top) */}
      <div className="lg:hidden w-full bg-white dark:bg-stone-950 px-4 py-3 flex items-center justify-between border-b border-stone-200 dark:border-stone-800 z-50 shrink-0 transition-colors">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={openMobileProfile}>
          <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 bg-stone-200 dark:bg-stone-800 ring-2 ring-transparent group-hover:ring-stone-300 dark:group-hover:ring-stone-600 transition-all">
              <BlurImage
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
                  <AnimatedDownloadButton
                    href="/cv.pdf"
                    className="mx-auto mt-2 mb-1.5 w-[208px]"
                    buttonClassName="w-full flex items-center justify-center gap-2 px-4 py-2 text-[13px] font-medium text-white dark:text-stone-900 bg-stone-900 dark:bg-stone-100 hover:bg-black dark:hover:bg-white rounded-md transition-colors"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Profile Modal */}
        <AnimatePresence>
          {isMobileProfileOpen && (
            <>
              {/* Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="lg:hidden fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm"
                onClick={() => setIsMobileProfileOpen(false)}
              />
              
              {/* Sheet container */}
              <motion.div
                className="lg:hidden fixed inset-x-0 bottom-0 z-[101] flex justify-center pointer-events-none touch-none"
              >
                <motion.div 
                  initial={{ y: "100%" }}
                  animate={{ y: isProfileExpanded ? 0 : "45%" }}
                  exit={{ y: "100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  drag="y"
                  dragConstraints={{ top: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(e, info) => {
                    if (isProfileExpanded) {
                      if (info.offset.y > 100 || info.velocity.y > 500) {
                        setIsProfileExpanded(false);
                      }
                    } else {
                      if (info.offset.y < -50 || info.velocity.y < -500) {
                        setIsProfileExpanded(true);
                      } else if (info.offset.y > 100 || info.velocity.y > 500) {
                        setIsMobileProfileOpen(false);
                      }
                    }
                  }}
                  className="w-full sm:w-[400px] sm:max-w-[90vw] bg-white dark:bg-stone-900 rounded-t-2xl sm:rounded-2xl p-6 sm:p-8 pt-5 pb-8 shadow-2xl pointer-events-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="w-10 h-1.5 bg-stone-300 dark:bg-stone-700 rounded-full mx-auto mb-6" />
                  <div className="flex justify-between items-start mb-6">
                  <div className="w-24 h-24 bg-stone-300 dark:bg-stone-800 rounded-lg shadow-inner flex items-center justify-center border border-stone-200 dark:border-stone-700 overflow-hidden">
                    <BlurImage src={author.avatar} alt={author.name} className="w-full h-full object-cover -scale-x-100" />
                  </div>
                  <button onClick={() => setIsMobileProfileOpen(false)} className="p-2 text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </button>
                </div>
                
                <div className="mb-6">
                  <h1 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">{author.name}</h1>
                  <p className="text-base font-medium text-stone-700 dark:text-stone-300 mt-1">AI Researcher</p>
                  <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">{author.employer}</p>
                  <p className="text-sm text-stone-500 dark:text-stone-500 mt-3 leading-relaxed">Researching Machine Learning, Deep Learning, Computer Vision, Biomedical AI, and Intelligent Systems.</p>
                </div>

                <div className="space-y-3 text-[14px] border-t border-stone-200 dark:border-stone-800 pt-6">
                  <div className="flex items-center text-stone-700 dark:text-stone-300 mb-2">
                    <span className="mr-3 text-stone-400 dark:text-stone-500"><MapPin className="w-4 h-4" /></span>
                    <span>{author.location}</span>
                  </div>
                  <a href={`mailto:${author.email}`} className="flex items-center text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 py-1.5 transition-colors">
                    <span className="mr-3 text-stone-400 dark:text-stone-500"><Mail className="w-4 h-4" /></span>
                    <span className="underline decoration-stone-300 dark:decoration-stone-600">{author.email}</span>
                  </a>
                  <a href={author.links.scholar} target="_blank" rel="noopener noreferrer" className="flex items-center text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 py-1.5 transition-colors">
                    <span className="mr-3 text-stone-400 dark:text-stone-500"><BookOpen className="w-4 h-4" /></span>
                    Google Scholar
                  </a>
                  <a href={author.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 py-1.5 transition-colors">
                    <span className="mr-3 text-stone-400 dark:text-stone-500"><Github className="w-4 h-4" /></span>
                    GitHub
                  </a>
                  <a href={author.links.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 py-1.5 transition-colors">
                    <span className="mr-3 text-stone-400 dark:text-stone-500"><Linkedin className="w-4 h-4" /></span>
                    LinkedIn
                  </a>
                  <a href={author.links.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 py-1.5 transition-colors">
                    <span className="mr-3 text-stone-400 dark:text-stone-500">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
                    </span>
                    X
                  </a>
                </div>

                <div className="mt-6 pt-6 border-t border-stone-200 dark:border-stone-800">
                  <AnimatedDownloadButton
                    href="/cv.pdf"
                    className="w-full"
                    buttonClassName="w-full flex items-center justify-center gap-2 py-3 text-[14px] font-medium text-white dark:text-stone-900 bg-stone-900 dark:bg-stone-100 hover:bg-black dark:hover:bg-white rounded-lg shadow-sm transition-all"
                  />
                </div>
              </motion.div>
            </motion.div>
            </>
          )}
        </AnimatePresence>
    </>
  );
}
