import React, { useMemo, useEffect } from 'react';
import { projects } from '../data';
import { Github, FileText } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import BlurImage from '../components/BlurImage';

export default function Projects() {
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
    return projects.map((project) => ({
      "@context": "https://schema.org",
      "@type": "ResearchProject",
      "name": project.title,
      "description": project.description,
      "url": project.githubUrl,
      "image": `https://danialeskandari.com/${project.image}`
    }));
  }, []);

  useSEO({
    title: 'Projects | Danial Eskandari Faruji',
    description: 'Explore the AI and Machine Learning research projects by Danial Eskandari Faruji, including Deep Learning frameworks for disease prediction.',
    jsonLd,
  });

  return (
    <div className="max-w-4xl text-stone-700 dark:text-stone-300 leading-relaxed">
      <h1 className="text-2xl sm:text-3xl font-serif italic font-bold mb-8 text-stone-800 dark:text-stone-200">Projects</h1>
      
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div id={project.id} key={index} className="bg-white dark:bg-stone-900 p-6 rounded-lg border border-stone-200 dark:border-stone-800 shadow-sm relative group hover:border-stone-300 dark:border-stone-700 transition-colors flex flex-col sm:flex-row items-start gap-6 scroll-mt-24">
            <div className="shrink-0 rounded overflow-hidden bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-2 self-start">
              <Link to={`/projects/${project.id}`} className="block">
                <BlurImage loading="lazy" src={project.image} alt={project.title} className="w-auto" imgClassName="w-auto h-auto object-contain max-w-full sm:max-w-[250px]" />
              </Link>
            </div>
            <div className="flex-1">
              <Link to={`/projects/${project.id}`}>
                <h2 className="font-serif italic font-bold text-base sm:text-lg text-stone-900 dark:text-stone-100 mb-2 group-hover:text-stone-700 dark:text-stone-300 transition-colors">
                  {project.title}
                </h2>
              </Link>
              <p className="text-sm text-stone-600 dark:text-stone-400 mb-6">{project.description}</p>
              
              <div className="flex flex-wrap gap-3 mt-auto">
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-flex items-center justify-center px-4 py-1.5 text-xs font-medium text-white bg-stone-800 hover:bg-stone-900 dark:bg-stone-200 dark:text-stone-900 dark:hover:bg-white rounded border border-stone-800 dark:border-stone-200 transition-colors"
                >
                  View Details
                </Link>
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-1.5 text-xs font-medium text-stone-700 dark:text-stone-300 bg-white dark:bg-stone-900 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded border border-stone-300 dark:border-stone-700 hover:border-black dark:hover:border-white transition-colors"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
                
                {project.relatedPublication && (
                  <Link 
                    to={`/publications/${project.relatedPublication}`}
                    className="inline-flex items-center justify-center px-4 py-1.5 text-xs font-medium text-stone-700 dark:text-stone-300 bg-white dark:bg-stone-900 hover:bg-stone-50 dark:hover:bg-stone-950 rounded border border-stone-300 dark:border-stone-700 transition-colors"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Related Publication
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
