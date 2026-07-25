import React from 'react';
import { useSEO } from '../hooks/useSEO';

export default function Honors() {
  useSEO({
    title: 'Honors & Awards | Danial Eskandari Faruji',
    description: 'Awards, honors, and competition achievements of Danial Eskandari Faruji in the field of Artificial Intelligence, algorithms, and entrepreneurship.',
  });

  return (
    <div className="max-w-2xl text-stone-700 dark:text-stone-300 leading-relaxed">
      <h1 className="text-2xl sm:text-3xl font-serif italic font-bold mb-8 text-stone-800 dark:text-stone-200">Honors & Awards</h1>
      <ul className="space-y-8 text-sm">
        <li className="flex flex-col border-l-2 border-stone-200 dark:border-stone-800 pl-5 py-1">
          <span className="text-stone-900 dark:text-stone-100 font-medium text-base">3rd Place in the Fintech Entrepreneurship Competition in Iran</span>
          <span className="text-stone-500 dark:text-stone-400 text-xs mt-1 uppercase tracking-wider">ICT Research Institute</span>
        </li>
        <li className="flex flex-col border-l-2 border-stone-200 dark:border-stone-800 pl-5 py-1">
          <span className="text-stone-900 dark:text-stone-100 font-medium text-base">6th Place in the ICPC Relay Competition (Eastern Region Stage)</span>
          <span className="text-stone-500 dark:text-stone-400 text-xs mt-1 uppercase tracking-wider">Khatam University (Organized by Dotin)</span>
        </li>
        <li className="flex flex-col border-l-2 border-stone-200 dark:border-stone-800 pl-5 py-1">
          <span className="text-stone-900 dark:text-stone-100 font-medium text-base">7th Place in the Programming and Algorithm Competition of Region 9, Iran</span>
          <span className="text-stone-500 dark:text-stone-400 text-xs mt-1 uppercase tracking-wider">Semnan University, Faculty of Computer Engineering</span>
        </li>
        <li className="flex flex-col border-l-2 border-stone-200 dark:border-stone-800 pl-5 py-1">
          <span className="text-stone-900 dark:text-stone-100 font-medium text-base">Participant in the "Lovely Hackers" Bug Bounty Event and Competition</span>
          <span className="text-stone-500 dark:text-stone-400 text-xs mt-1 uppercase tracking-wider">Technology Olympics 2025</span>
        </li>
        <li className="flex flex-col border-l-2 border-stone-200 dark:border-stone-800 pl-5 py-1">
          <span className="text-stone-900 dark:text-stone-100 font-medium text-base">2nd Place in the STAR Programming Competition</span>
          <span className="text-stone-500 dark:text-stone-400 text-xs mt-1 uppercase tracking-wider">Sabzevar Tournament of Algorithm Race (May 2025)</span>
        </li>
      </ul>
    </div>
  );
}
