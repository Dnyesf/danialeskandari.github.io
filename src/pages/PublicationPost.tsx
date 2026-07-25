import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { publications } from '../data';
import { ArrowLeft, ExternalLink, Lock, Quote, Copy, Check } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

export default function PublicationPost() {
  const { id } = useParams<{ id: string }>();
  const pub = publications.find((p) => p.id === id);
  const [showCitation, setShowCitation] = useState(false);
  const [citationTab, setCitationTab] = useState<'plain' | 'bibtex' | 'ris'>('plain');
  const [copied, setCopied] = useState(false);
  const [doiCopied, setDoiCopied] = useState(false);

  // Extend with generic data if missing
  const pubType = pub ? (pub as any).type || 'Paper' : '';
  const pubDate = pub ? (pub as any).date || pub.year : '';
  const pubDoi = pub ? (pub as any).doi || '10.xxxx/xxxxxxx.xxxx.xxxxxxx' : '';
  const pubConf = pub ? (pub as any).conference || pub.venue : '';
  const pubAbstract = pub ? (pub as any).abstract || pub.excerpt : '';
  const pubBibtex = pub ? (pub as any).bibtex || `@INPROCEEDINGS{...,\n  title={${pub.title}}\n}` : '';
  const pubRis = pub ? (pub as any).ris || `TY  - CONF\nTI  - ${pub.title}\nER  - ` : '';
  const pubCitation = pub ? (pub as any).citation || pub.title : '';
  const pubKeywords = pub ? (pub as any).keywords || ['Machine Learning', 'Artificial Intelligence'] : [];

  const jsonLd = pub ? [{
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "headline": pub.title,
    "author": {
      "@type": "Person",
      "name": pub.authors
    },
    "datePublished": pubDate,
    "publisher": {
      "@type": "Organization",
      "name": pubConf
    },
    "description": pubAbstract,
    "url": pub.url,
    "sameAs": pubDoi && pubDoi !== '10.xxxx/xxxxxxx.xxxx.xxxxxxx' ? `https://doi.org/${pubDoi}` : undefined,
    "image": `https://danialeskandari.com/${pub.image}`,
    "keywords": pubKeywords.join(', ')
  }] : [];

  useSEO({
    title: pub ? `${pub.title} | Danial Eskandari Faruji` : 'Publication Not Found | Danial Eskandari Faruji',
    description: pub ? pub.excerpt : 'The requested publication could not be found.',
    jsonLd,
  });

  if (!pub) {
    return (
      <div className="max-w-3xl text-stone-700 dark:text-stone-300 leading-relaxed">
        <h1 className="text-2xl sm:text-3xl font-serif italic font-bold mb-8 text-stone-800 dark:text-stone-200">Publication not found</h1>
        <Link to="/publications" className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:text-stone-100 underline">
          &larr; Back to publications
        </Link>
      </div>
    );
  }

  const getCitationText = () => {
    switch(citationTab) {
      case 'plain': return pubCitation;
      case 'bibtex': return pubBibtex;
      case 'ris': return pubRis;
      default: return pubCitation;
    }
  };

  const copyCitation = () => {
    navigator.clipboard.writeText(getCitationText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyDoi = () => {
    navigator.clipboard.writeText(pubDoi);
    setDoiCopied(true);
    setTimeout(() => setDoiCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl text-stone-700 dark:text-stone-300 leading-relaxed">
      <article>
        {/* CLEAR METADATA SECTION */}
        <header className="mb-10">
          <div className="text-xs font-bold uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <span className="text-stone-800 dark:text-stone-200 bg-stone-100 dark:bg-stone-900 px-2 py-1 rounded">{pubType}</span>
            <span>{pubDate}</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-serif italic font-bold text-stone-900 dark:text-stone-100 leading-tight mb-6">
            {pub.title}
          </h1>
          
          <div className="space-y-4 text-sm sm:text-base mb-8">
            <div>
              <span className="font-bold text-stone-900 dark:text-stone-100">Authors:</span>{' '}
              <span className="text-stone-600 dark:text-stone-400">{pub.authors}</span>
            </div>
            <div>
              <span className="font-bold text-stone-900 dark:text-stone-100">Contact:</span>{' '}
              <a href="mailto:dn.eskandarifaruji@gmail.com" className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 underline decoration-stone-300 dark:decoration-stone-700 transition-colors">dn.eskandarifaruji@gmail.com</a>
            </div>
            <div>
              <span className="font-bold text-stone-900 dark:text-stone-100">Published:</span>{' '}
              <span className="text-stone-600 dark:text-stone-400">{pubDate}</span>
            </div>
            <div>
              <span className="font-bold text-stone-900 dark:text-stone-100">Last Updated:</span>{' '}
              <span className="text-stone-600 dark:text-stone-400">{pubDate}</span>
            </div>
            {pubConf && (
              <div>
                <span className="font-bold text-stone-900 dark:text-stone-100">Conference:</span>{' '}
                <span className="text-stone-600 dark:text-stone-400">{pubConf}</span>
              </div>
            )}
            {pubDoi && (
              <div className="flex items-center gap-2">
                <span className="font-bold text-stone-900 dark:text-stone-100">DOI / Official Link:</span>
                <a href={pubDoi.startsWith('http') ? pubDoi : `https://doi.org/${pubDoi}`} target="_blank" rel="noopener noreferrer" className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 underline decoration-stone-300 dark:decoration-stone-700 transition-colors">
                  {pubDoi}
                </a>
                <button 
                  onClick={copyDoi}
                  className="p-1 text-stone-400 hover:text-stone-800 dark:text-stone-500 dark:hover:text-stone-200 transition-colors"
                  aria-label="Copy DOI"
                  title="Copy DOI"
                >
                  {doiCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            )}
          </div>

          <div className="flex gap-4 border-b border-stone-200 dark:border-stone-800 pb-10 mb-10">
            <button 
              onClick={() => setShowCitation(true)}
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-stone-900 dark:text-stone-100 bg-white dark:bg-stone-900 hover:bg-stone-50 dark:hover:bg-stone-800 rounded-lg border border-stone-300 dark:border-stone-700 shadow-sm transition-colors"
            >
              <Quote className="w-4 h-4 mr-2" />
              Cite This
            </button>
            <a 
              href={(pub as any).pdfUrl || pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-sm transition-colors"
            >
              PDF
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>

          <div className="mb-10">
            <h3 className="text-xl font-serif italic font-bold text-stone-900 dark:text-stone-100 mb-4">Abstract</h3>
            <p className="text-justify leading-relaxed text-stone-700 dark:text-stone-300">
              {pubAbstract}
            </p>
          </div>
        </header>

        <div className="prose prose-stone max-w-none dark:prose-invert">
          <h3 className="text-xl font-serif italic font-bold mb-4 text-stone-900 dark:text-stone-100">Keywords</h3>
          <div className="flex flex-wrap gap-2 mb-10">
            {pubKeywords.map((kw: string, i: number) => (
              <span key={i} className="px-3 py-1 bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-full text-xs text-stone-700 dark:text-stone-300">
                {kw}
              </span>
            ))}
          </div>

          {pub.codeUrl && pub.codeUrl !== '#' && (
            <>
              <h3 className="text-xl font-serif italic font-bold mb-4 text-stone-900 dark:text-stone-100">Code</h3>
              <p className="mb-10 text-stone-700 dark:text-stone-300">
                The source code used in this study has been made publicly available. You can access the repository here:{' '}
                <a href={pub.codeUrl} target="_blank" rel="noopener noreferrer" className="text-stone-900 dark:text-stone-100 underline hover:text-stone-600 dark:hover:text-stone-400">
                  {pub.codeUrl}
                </a>
              </p>
            </>
          )}

          {(pub as any).datasetUrl && (
            <>
              <h3 className="text-xl font-serif italic font-bold mb-4 text-stone-900 dark:text-stone-100">Dataset</h3>
              <p className="mb-10 text-stone-700 dark:text-stone-300">
                The dataset used in this research is publicly available for reproducibility:{' '}
                <a href={(pub as any).datasetUrl} target="_blank" rel="noopener noreferrer" className="text-stone-900 dark:text-stone-100 underline hover:text-stone-600 dark:hover:text-stone-400">
                  {(pub as any).datasetUrl}
                </a>
              </p>
            </>
          )}

          {(pub as any).relatedProject && (
            <>
              <h3 className="text-xl font-serif italic font-bold mb-4 text-stone-900 dark:text-stone-100">Related Project</h3>
              <p className="mb-10 text-stone-700 dark:text-stone-300">
                This publication is part of a larger research project. View the project details:{' '}
                <Link to={`/projects/${(pub as any).relatedProject}`} className="text-stone-900 dark:text-stone-100 underline hover:text-stone-600 dark:hover:text-stone-400">
                  View Project
                </Link>
              </p>
            </>
          )}

          {/* BLURRED CONTENT SECTION */}
          <div className="relative pt-4 mt-8">
            {/* OVERLAY WITH BUTTON */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-start pt-12 bg-white/40 dark:bg-stone-950/40 backdrop-blur-[4px]">
              <div className="bg-white dark:bg-stone-900 p-8 rounded-xl shadow-xl border border-stone-200 dark:border-stone-800 text-center max-w-sm mx-4 transform transition-all">
                <Lock className="w-10 h-10 mx-auto text-stone-400 dark:text-stone-500 mb-4" />
                <h3 className="text-xl font-serif italic font-bold text-stone-900 dark:text-stone-100 mb-2">Read Full Text</h3>
                <p className="text-sm text-stone-500 dark:text-stone-400 mb-6">
                  The full content of this publication is available on external platforms.
                </p>
                <div className="flex flex-col gap-3">
                  {(pub as any).ieeeUrl && (
                    <a 
                      href={(pub as any).ieeeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-5 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                    >
                      View on IEEE Xplore
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  )}
                  <a 
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-5 py-2.5 text-sm font-medium text-white bg-stone-900 hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white rounded-lg transition-colors"
                  >
                    View on ResearchGate
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>

            {/* DUMMY BLURRED CONTENT */}
            <div className="select-none opacity-40 blur-[3px] pointer-events-none">
              <h3 className="text-xl font-serif italic font-bold mb-4 text-stone-900 dark:text-stone-100">Introduction</h3>
              <p className="mb-8 text-stone-700 dark:text-stone-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <h3 className="text-xl font-serif italic font-bold mb-4 text-stone-900 dark:text-stone-100">Methodology</h3>
              <p className="mb-8 text-stone-700 dark:text-stone-300">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
              <h3 className="text-xl font-serif italic font-bold mb-4 text-stone-900 dark:text-stone-100">Results and Discussion</h3>
              <p className="mb-8 text-stone-700 dark:text-stone-300">
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* CITATION MODAL */}
      {showCitation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setShowCitation(false)}>
          <div 
            className="bg-white dark:bg-stone-900 rounded-xl shadow-2xl max-w-2xl w-full border border-stone-200 dark:border-stone-800 overflow-hidden flex flex-col max-h-[90vh]"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-stone-200 dark:border-stone-800">
              <h2 className="text-xl font-serif italic font-bold text-stone-900 dark:text-stone-100">Cite this publication</h2>
              <button 
                onClick={() => setShowCitation(false)}
                className="text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 transition-colors text-2xl leading-none"
              >
                &times;
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto">
              <div className="flex space-x-2 mb-4 border-b border-stone-200 dark:border-stone-800">
                <button
                  className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 ${citationTab === 'plain' ? 'border-stone-900 dark:border-stone-100 text-stone-900 dark:text-stone-100' : 'border-transparent text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-300'}`}
                  onClick={() => setCitationTab('plain')}
                >
                  Plain Text
                </button>
                <button
                  className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 ${citationTab === 'bibtex' ? 'border-stone-900 dark:border-stone-100 text-stone-900 dark:text-stone-100' : 'border-transparent text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-300'}`}
                  onClick={() => setCitationTab('bibtex')}
                >
                  BibTeX
                </button>
                <button
                  className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 ${citationTab === 'ris' ? 'border-stone-900 dark:border-stone-100 text-stone-900 dark:text-stone-100' : 'border-transparent text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-300'}`}
                  onClick={() => setCitationTab('ris')}
                >
                  RIS
                </button>
              </div>

              <div className="bg-stone-50 dark:bg-stone-950 p-4 rounded-lg border border-stone-200 dark:border-stone-800 text-sm font-mono whitespace-pre-wrap break-words text-stone-700 dark:text-stone-300 max-h-64 overflow-y-auto">
                {getCitationText()}
              </div>
            </div>

            <div className="p-6 border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 flex justify-end">
              <button
                onClick={copyCitation}
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-stone-900 hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white rounded-lg transition-colors"
              >
                {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                {copied ? 'Copied!' : 'Copy to Clipboard'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
