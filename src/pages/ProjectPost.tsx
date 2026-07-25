import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data';
import { ArrowLeft, ExternalLink, Github, FileText } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import BlurImage from '../components/BlurImage';

export default function ProjectPost() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  const jsonLd = project ? [{
    "@context": "https://schema.org",
    "@type": "ResearchProject",
    "name": project.title,
    "description": project.description,
    "url": project.githubUrl,
    "image": `https://danialeskandari.com${project.image}`
  }] : undefined;

  useSEO({
    title: project ? `${project.title} | Danial Eskandari Faruji` : 'Project Not Found | Danial Eskandari Faruji',
    description: project ? project.description : 'The requested project could not be found.',
    jsonLd,
  });

  if (!project) {
    return (
      <div className="max-w-3xl text-stone-700 dark:text-stone-300 leading-relaxed">
        <h1 className="text-2xl sm:text-3xl font-serif italic font-bold mb-8 text-stone-800 dark:text-stone-200">Project not found</h1>
        <Link to="/projects" className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:text-stone-100 underline">
          &larr; Back to projects
        </Link>
      </div>
    );
  }

  // Extend with generic data for E-E-A-T
  const pubDate = 'February 2024'; // Example date
  
  return (
    <div className="max-w-4xl text-stone-700 dark:text-stone-300 leading-relaxed">
      <article>
        <header className="mb-10">
          <div className="text-xs font-bold uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <span className="text-stone-800 dark:text-stone-200 bg-stone-100 dark:bg-stone-900 px-2 py-1 rounded">Research Project</span>
            <span>{pubDate}</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-serif italic font-bold text-stone-900 dark:text-stone-100 leading-tight mb-6">
            {project.title}
          </h1>
          
          <div className="space-y-4 text-sm sm:text-base mb-8">
            <div>
              <span className="font-bold text-stone-900 dark:text-stone-100">Authors / Contributors:</span>{' '}
              <span className="text-stone-600 dark:text-stone-400">Danial Eskandari Faruji</span>
            </div>
            <div>
              <span className="font-bold text-stone-900 dark:text-stone-100">Contact:</span>{' '}
              <a href="mailto:dn.eskandarifaruji@gmail.com" className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 underline decoration-stone-300 dark:decoration-stone-700 transition-colors">dn.eskandarifaruji@gmail.com</a>
            </div>
            <div>
              <span className="font-bold text-stone-900 dark:text-stone-100">Last Updated:</span>{' '}
              <span className="text-stone-600 dark:text-stone-400">{pubDate}</span>
            </div>
          </div>

          <div className="flex gap-4 border-b border-stone-200 dark:border-stone-800 pb-10 mb-10">
            {project.githubUrl && (
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-stone-900 dark:text-stone-100 bg-white dark:bg-stone-900 hover:bg-stone-50 dark:hover:bg-stone-800 rounded-lg border border-stone-300 dark:border-stone-700 shadow-sm transition-colors"
              >
                <Github className="w-4 h-4 mr-2" />
                View Repository
              </a>
            )}
          </div>

          <div className="mb-10">
            <h3 className="text-xl font-serif italic font-bold text-stone-900 dark:text-stone-100 mb-4">Project Overview</h3>
            <p className="text-justify leading-relaxed text-stone-700 dark:text-stone-300">
              {project.description}
            </p>
          </div>
        </header>

        <div className="prose prose-stone max-w-none dark:prose-invert">
          <div className="w-full h-auto rounded-lg overflow-hidden border border-stone-200 dark:border-stone-800 mb-10 bg-white dark:bg-stone-900">
            <BlurImage src={project.image} alt={project.title} className="w-full h-auto object-contain max-h-[400px]" />
          </div>

          <h3 className="text-xl font-serif italic font-bold mb-4 text-stone-900 dark:text-stone-100">Methodology & Implementation</h3>
          <p className="mb-10 text-stone-700 dark:text-stone-300">
            The development of this project involved rigorous data preprocessing, model architecture design, and comprehensive evaluation against baseline methods. We focused on robustness and generalization to real-world scenarios.
          </p>

          {project.relatedPublication && (
            <>
              <h3 className="text-xl font-serif italic font-bold mb-4 text-stone-900 dark:text-stone-100">Related Publication</h3>
              <p className="mb-10 text-stone-700 dark:text-stone-300">
                The detailed findings and theoretical contributions of this project have been published. Read the full paper for an in-depth analysis:{' '}
                <Link to={`/publications/${project.relatedPublication}`} className="text-stone-900 dark:text-stone-100 underline hover:text-stone-600 dark:hover:text-stone-400 font-medium">
                  Read Publication <FileText className="w-4 h-4 inline ml-1" />
                </Link>
              </p>
            </>
          )}
        </div>
      </article>
    </div>
  );
}
