import React from 'react';
import { useSEO } from '../hooks/useSEO';

export default function About() {
  useSEO({
    title: 'Danial Eskandari Faruji | AI Researcher',
    description: 'Personal website of Danial Eskandari Faruji, an undergraduate student in Computer Engineering researching AI, Deep Learning, and Biomedical Artificial Intelligence.',
  });

  return (
    <div className="max-w-2xl text-stone-700 dark:text-stone-300 leading-relaxed space-y-12 pb-12">
      <section>
        <h1 className="text-2xl sm:text-3xl font-serif italic font-bold mb-6 text-stone-800 dark:text-stone-200">About Me</h1>
        <div className="space-y-4">
          <p>
            I am an undergraduate student in Computer Engineering at Hakim Sabzevari University, Iran. My research interests lie at the intersection of Artificial Intelligence and intelligent computational systems, with particular emphasis on Machine Learning, Deep Learning, Computer Vision, Graph Neural Networks, and Biomedical Artificial Intelligence.
          </p>
          <p>
            My current research focuses on the development of data-driven methodologies for biomedical signal analysis, including electrocardiogram (ECG) and electroencephalogram (EEG) data, with applications in early disease detection, clinical decision support, and medical diagnosis. I am also interested in the design of robust and interpretable deep learning models for real-world healthcare challenges.
          </p>
          <p>
            In addition to my research activities, I have contributed to scientific publications and collaborative research projects in artificial intelligence. My broader objective is to pursue graduate studies and conduct impactful research that advances trustworthy, reliable, and clinically applicable AI systems at the intersection of computer science and healthcare.
          </p>
        </div>
      </section>
      
      <section>
        <h2 className="text-xs font-bold uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-6 border-b border-stone-200 dark:border-stone-800 pb-2">News</h2>
        <div className="relative border-l border-stone-200 dark:border-stone-800 ml-2.5 space-y-6">
          <div className="relative pl-7">
            <span className="absolute -left-2.5 top-0.5 bg-stone-50 dark:bg-stone-950 p-0.5">
              <svg className="w-4 h-4 text-stone-500 dark:text-stone-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>
            </span>
            <div className="text-xs text-stone-500 dark:text-stone-400 font-mono mb-1">Oct 2025</div>
            <div className="text-sm text-stone-700 dark:text-stone-300"><span className="font-semibold text-stone-900 dark:text-stone-100">Paper Accepted:</span> Graph Attention Networks for Modeling Multi-Sensor Relationships in Early Prediction of Critical Events in ICU Patients</div>
          </div>
          <div className="relative pl-7">
            <span className="absolute -left-2.5 top-0.5 bg-stone-50 dark:bg-stone-950 p-0.5">
              <svg className="w-4 h-4 text-stone-500 dark:text-stone-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>
            </span>
            <div className="text-xs text-stone-500 dark:text-stone-400 font-mono mb-1">Oct 2025</div>
            <div className="text-sm text-stone-700 dark:text-stone-300"><span className="font-semibold text-stone-900 dark:text-stone-100">Paper Accepted:</span> Multimodal Deep Learning Framework for PTSD Detection during Sleep via EEG and Biosignal Fusion</div>
          </div>
          <div className="relative pl-7">
            <span className="absolute -left-2.5 top-0.5 bg-stone-50 dark:bg-stone-950 p-0.5">
              <svg className="w-4 h-4 text-stone-500 dark:text-stone-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>
            </span>
            <div className="text-xs text-stone-500 dark:text-stone-400 font-mono mb-1">May 2025</div>
            <div className="text-sm text-stone-700 dark:text-stone-300"><span className="font-semibold text-stone-900 dark:text-stone-100">Award:</span> Secured 3rd Place in the Fintech Entrepreneurship Competition in Iran</div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xs font-bold uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-6 border-b border-stone-200 dark:border-stone-800 pb-2">Research Interests</h2>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center px-3 py-1.5 rounded bg-stone-200/50 dark:bg-stone-800/50 text-xs font-medium text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-800">Machine Learning</span>
          <span className="inline-flex items-center px-3 py-1.5 rounded bg-stone-200/50 dark:bg-stone-800/50 text-xs font-medium text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-800">Deep Learning</span>
          <span className="inline-flex items-center px-3 py-1.5 rounded bg-stone-200/50 dark:bg-stone-800/50 text-xs font-medium text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-800">Computer Vision</span>
          <span className="inline-flex items-center px-3 py-1.5 rounded bg-stone-200/50 dark:bg-stone-800/50 text-xs font-medium text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-800">Graph Neural Networks</span>
          <span className="inline-flex items-center px-3 py-1.5 rounded bg-stone-200/50 dark:bg-stone-800/50 text-xs font-medium text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-800">Biomedical Artificial Intelligence</span>
        </div>
      </section>

      <section>
        <h2 className="text-xs font-bold uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-6 border-b border-stone-200 dark:border-stone-800 pb-2">Work Experience</h2>
        <ul className="space-y-6 text-sm">
          <li>
            <div className="flex flex-col sm:flex-row sm:items-center mb-1">
              <span className="text-stone-900 dark:text-stone-100 font-medium sm:w-1/3">Co-founder</span>
              <span className="text-stone-600 dark:text-stone-400 sm:w-1/2 font-semibold flex items-center gap-2">
                <img loading="lazy" src="/assets/images/aryaspace-group-logo.webp" alt="Aryaspace group" width="16" height="16" className="h-4 w-auto object-contain shrink-0 rounded-sm" />
                Aryaspace group
              </span>
              <span className="text-stone-400 dark:text-stone-500 font-mono text-xs sm:w-1/6 sm:text-right mt-1 sm:mt-0">2025 - Present</span>
            </div>
            <p className="text-stone-500 dark:text-stone-400 sm:pl-[33.333%]">Co-founder and Backend Developer in a company developing monitoring and control solutions. Engaged in backend design, commercial product development, and strategic decision-making.</p>
          </li>
          <li>
            <div className="flex flex-col sm:flex-row sm:items-center mb-1">
              <span className="text-stone-900 dark:text-stone-100 font-medium sm:w-1/3">AI Researcher</span>
              <span className="text-stone-600 dark:text-stone-400 sm:w-1/2 font-semibold flex items-center gap-2">
                <img loading="lazy" src="/assets/images/secure-intelligent-systems-lab-logo.webp" alt="Secure Intelligent Systems Laboratory" width="16" height="16" className="h-4 w-auto object-contain shrink-0 rounded-sm" />              
                Secure Intelligent Systems Laboratory
              </span>
              <span className="text-stone-400 dark:text-stone-500 font-mono text-xs sm:w-1/6 sm:text-right mt-1 sm:mt-0">2025 - Present</span>
            </div>
            <p className="text-stone-500 dark:text-stone-400 sm:pl-[33.333%]">Conducting research in Artificial Intelligence, Machine Learning, Deep Learning, and AI-driven Cybersecurity under the supervision of Dr. Javad Hamidzadeh at Sadjad University. Contributing to scientific publications and collaborative research projects.</p>
          </li>
          <li>
            <div className="flex flex-col sm:flex-row sm:items-center mb-1">
              <span className="text-stone-900 dark:text-stone-100 font-medium sm:w-1/3">Back-end Developer</span>
              <span className="text-stone-600 dark:text-stone-400 sm:w-1/2 font-semibold flex items-center gap-2">
                <img loading="lazy" src="https://ferdowsiaccelerator.ir/wp-content/uploads/2017/10/logo400.png" alt="VEERASENSE HOLDING" width="16" height="16" className="h-4 w-4 object-contain shrink-0 rounded-sm bg-white pl-[1px]" />
                VEERASENSE HOLDING
              </span>
              <span className="text-stone-400 dark:text-stone-500 font-mono text-xs sm:w-1/6 sm:text-right mt-1 sm:mt-0">2024 - Present</span>
            </div>
            <div className="text-stone-500 dark:text-stone-400 sm:pl-[33.333%] space-y-2">
              <p><strong>Industrial Intern – Viraico</strong> (Jan 2024 – Feb 2024)<br/>Gained first-hand experience in an industrial environment and production processes.</p>
              <p><strong>Full-Stack Developer – Barsam (Veerasense Central Team)</strong> (Feb 2024 – Present)<br/>Developing and maintaining Veerasense software solutions as a full-stack developer, with side contributions to AI modules (license plate recognition, face detection, smoke and fence monitoring).</p>
              <p><strong>Full-Stack Developer – Omid Vira (Joint Venture of Veerasense & Bank Sepah)</strong> (Sep 2024 – Present)<br/>Part of the development team building Bank Sepah’s web application under the newly established joint venture.</p>
            </div>
          </li>
          <li>
            <div className="flex flex-col sm:flex-row sm:items-center mb-1">
              <span className="text-stone-900 dark:text-stone-100 font-medium sm:w-1/3">Back-end Developer</span>
              <span className="text-stone-600 dark:text-stone-400 sm:w-1/2 font-semibold flex items-center gap-2">
                <img loading="lazy" src="https://media.licdn.com/dms/image/v2/C4E0BAQGvQTVxHjXgkA/company-logo_200_200/company-logo_200_200/0/1659949282076?e=2147483647&v=beta&t=n3GTmk5Or2yJKy0rfrJYobFOaFOHezarkXtYMSQp-u8" alt="NEUROSINA" width="16" height="16" className="h-4 w-auto object-contain shrink-0 rounded-sm bg-white pl-[1px] pt-[1px] pr-0 pb-0" />
                NEUROSINA
              </span>
              <span className="text-stone-400 dark:text-stone-500 font-mono text-xs sm:w-1/6 sm:text-right mt-1 sm:mt-0">2023 - 2025</span>
            </div>
            <p className="text-stone-500 dark:text-stone-400 sm:pl-[33.333%]">Contributed as a Backend Developer in a company specializing in digital signatures for confidential documents. Collaborated on secure backend solutions for electronic banking and fintech services.</p>
          </li>
          <li>
            <div className="flex flex-col sm:flex-row sm:items-center mb-1">
              <span className="text-stone-900 dark:text-stone-100 font-medium sm:w-1/3">AI Specialist</span>
              <span className="text-stone-600 dark:text-stone-400 sm:w-1/2 font-semibold flex items-center gap-2">
                <img loading="lazy" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY7BHFzapnVSPAZUDV5lSRDRafB_rmjD3bbEDSoTCADQ&s=10" alt="FUM CARE" width="16" height="16" className="h-4 w-auto object-contain shrink-0 rounded-sm" />
                FUM CARE
              </span>
              <span className="text-stone-400 dark:text-stone-500 font-mono text-xs sm:w-1/6 sm:text-right mt-1 sm:mt-0">Jun 2022 - 2024</span>
            </div>
            <p className="text-stone-500 dark:text-stone-400 sm:pl-[33.333%]">Served as an AI Specialist in a laboratory setting, developing and testing AI models for research-oriented applications. Enhanced skills in data-driven experimentation and evaluation.</p>
          </li>
          <li>
            <div className="flex flex-col sm:flex-row sm:items-center mb-1">
              <span className="text-stone-900 dark:text-stone-100 font-medium sm:w-1/3">AI Team Member</span>
              <span className="text-stone-600 dark:text-stone-400 sm:w-1/2 font-semibold flex items-center gap-2">
                SCEC
              </span>
              <span className="text-stone-400 dark:text-stone-500 font-mono text-xs sm:w-1/6 sm:text-right mt-1 sm:mt-0">Nov 2020 - Jan 2022</span>
            </div>
            <p className="text-stone-500 dark:text-stone-400 sm:pl-[33.333%]">Worked as an AI Specialist in a competitive environment, focusing on applying machine learning techniques to real-world problems. Gained practical experience in algorithm design and collaborative problem-solving.</p>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xs font-bold uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-6 border-b border-stone-200 dark:border-stone-800 pb-2">Education</h2>
        <ul className="space-y-6 text-sm">
          <li className="flex flex-col sm:flex-row sm:items-center">
            <div className="text-stone-900 dark:text-stone-100 font-medium sm:w-1/2 flex items-center gap-3">
              <div className="w-5 h-5 bg-stone-200 dark:bg-stone-800 rounded-sm shrink-0 overflow-hidden flex items-center justify-center">
                <img loading="lazy" src="/assets/images/hakim-sabzevari-university-logo.webp" alt="Hakim Sabzevari University" width="48" height="48" className="w-full h-full object-cover bg-white" />
              </div>
              <span>B.Sc. in Computer Engineering</span>
            </div>
            <span className="text-stone-600 dark:text-stone-400 text-xs leading-relaxed sm:w-1/3 mt-1 sm:mt-0 pl-8 sm:pl-0">Hakim Sabzevari University (GPA: 18.01)</span>
            <span className="text-stone-400 dark:text-stone-500 font-mono text-xs sm:w-1/6 sm:text-right mt-1 sm:mt-0 pl-8 sm:pl-0">2023</span>
          </li>
          <li className="flex flex-col sm:flex-row sm:items-center">
            <div className="text-stone-900 dark:text-stone-100 font-medium sm:w-1/2 flex items-center gap-3">
              <div className="w-5 h-5 bg-stone-200 dark:bg-stone-800 rounded-sm shrink-0 overflow-hidden flex items-center justify-center">
                <img loading="lazy" src="/assets/images/imam-reza-high-school-logo.webp" alt="Imam Reza high school" width="48" height="48" className="w-full h-full object-cover bg-white dark:bg-stone-900" />
              </div>
              <span>Mathematics and Physics</span>
            </div>
            <span className="text-stone-600 dark:text-stone-400 text-xs leading-relaxed sm:w-1/3 mt-1 sm:mt-0 pl-8 sm:pl-0">Imam Reza high school (GPA: 17.69)</span>
            <span className="text-stone-400 dark:text-stone-500 font-mono text-xs sm:w-1/6 sm:text-right mt-1 sm:mt-0 pl-8 sm:pl-0">2020</span>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xs font-bold uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-6 border-b border-stone-200 dark:border-stone-800 pb-2">Certifications</h2>
        <ul className="space-y-4 text-sm text-stone-700 dark:text-stone-300">
          <li className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-stone-200 dark:bg-stone-800 rounded-sm shrink-0 overflow-hidden flex items-center justify-center">
                <img loading="lazy" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAVFBMVEX////6/f6x1+tsudwpotEAl8xitdqm0ujy+fyGxOEAk8oAlcsAms0AmMwAkcnS6PO43O0AkMmXzOXo9PmPyONVsNfg8PdBqdQxpdLu9/t+wN/K5fHHhPk6AAAA8klEQVR4AazRwZqCMAxF4QiNlPYmgIgU5/3fczCfdKLO0rNq+zeLAn2hU9MG5nDu4qf1KTMAkaztGw/MqLGO3sZJ4NOLm5sA1sRWTrxrU5EFuZ2PXezTrse2Z3BLritDlucbEpBm8mVAb7Zq8o700gpwb6uWP1GAYquAf/A4YofjXFFjxfoxtlcMUnGGmBrayfkPaXuooQQ76LKhU3vK3fZRAd0OjQ8VIA10PFT2e3WWWSCFqI6mK7lZYBrq79yVU1lLWdelo1MQd5cuimciOf8s2pKrUUEtTfucb16UTYRTGei9W1+Sqoa7J1+MvyM+nQMAnnIQMvUA3IsAAAAASUVORK5CYII=" alt="PHP" width="20" height="20" className="w-full h-full object-cover" />
              </div>
              <span className="text-stone-900 dark:text-stone-100 font-medium">Project-Oriented course in Web Development with PHP</span>
            </div>
            <div className="flex items-center gap-4 shrink-0 pl-8 sm:pl-0">
              <span className="text-stone-600 dark:text-stone-400 text-xs">Perfect</span>
              <span className="text-stone-400 dark:text-stone-500 text-xs"><a href="https://quera.org/certificate/zHdGelE1/" target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 dark:text-stone-100 underline">[click]</a></span>
            </div>
          </li>
          <li className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-stone-200 dark:bg-stone-800 rounded-sm shrink-0 overflow-hidden flex items-center justify-center">
                <img loading="lazy" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAVFBMVEX////6/f6x1+tsudwpotEAl8xitdqm0ujy+fyGxOEAk8oAlcsAms0AmMwAkcnS6PO43O0AkMmXzOXo9PmPyONVsNfg8PdBqdQxpdLu9/t+wN/K5fHHhPk6AAAA8klEQVR4AazRwZqCMAxF4QiNlPYmgIgU5/3fczCfdKLO0rNq+zeLAn2hU9MG5nDu4qf1KTMAkaztGw/MqLGO3sZJ4NOLm5sA1sRWTrxrU5EFuZ2PXezTrse2Z3BLritDlucbEpBm8mVAb7Zq8o700gpwb6uWP1GAYquAf/A4YofjXFFjxfoxtlcMUnGGmBrayfkPaXuooQQ76LKhU3vK3fZRAd0OjQ8VIA10PFT2e3WWWSCFqI6mK7lZYBrq79yVU1lLWdelo1MQd5cuimciOf8s2pKrUUEtTfucb16UTYRTGei9W1+Sqoa7J1+MvyM+nQMAnnIQMvUA3IsAAAAASUVORK5CYII=" alt="Python" width="20" height="20" className="w-full h-full object-cover" />
              </div>
              <span className="text-stone-900 dark:text-stone-100 font-medium">Task-Oriented course in Data Analysis with Python</span>
            </div>
            <div className="flex items-center gap-4 shrink-0 pl-8 sm:pl-0">
              <span className="text-stone-600 dark:text-stone-400 text-xs">Perfect</span>
              <span className="text-stone-400 dark:text-stone-500 text-xs"><a href="https://quera.org/certificate/BHggWolP/" target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 dark:text-stone-100 underline">[click]</a></span>
            </div>
          </li>
          <li className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-stone-200 dark:bg-stone-800 rounded-sm shrink-0 overflow-hidden flex items-center justify-center">
                <img loading="lazy" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAVFBMVEX////6/f6x1+tsudwpotEAl8xitdqm0ujy+fyGxOEAk8oAlcsAms0AmMwAkcnS6PO43O0AkMmXzOXo9PmPyONVsNfg8PdBqdQxpdLu9/t+wN/K5fHHhPk6AAAA8klEQVR4AazRwZqCMAxF4QiNlPYmgIgU5/3fczCfdKLO0rNq+zeLAn2hU9MG5nDu4qf1KTMAkaztGw/MqLGO3sZJ4NOLm5sA1sRWTrxrU5EFuZ2PXezTrse2Z3BLritDlucbEpBm8mVAb7Zq8o700gpwb6uWP1GAYquAf/A4YofjXFFjxfoxtlcMUnGGmBrayfkPaXuooQQ76LKhU3vK3fZRAd0OjQ8VIA10PFT2e3WWWSCFqI6mK7lZYBrq79yVU1lLWdelo1MQd5cuimciOf8s2pKrUUEtTfucb16UTYRTGei9W1+Sqoa7J1+MvyM+nQMAnnIQMvUA3IsAAAAASUVORK5CYII=" alt="Python" width="20" height="20" className="w-full h-full object-cover" />
              </div>
              <span className="text-stone-900 dark:text-stone-100 font-medium">Advanced Python Programming and Object-Oriented Thinking Course</span>
            </div>
            <div className="flex items-center gap-4 shrink-0 pl-8 sm:pl-0">
              <span className="text-stone-600 dark:text-stone-400 text-xs">Perfect</span>
              <span className="text-stone-400 dark:text-stone-500 text-xs"><a href="https://quera.org/certificate/zHdGelE1/" target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 dark:text-stone-100 underline">[click]</a></span>
            </div>
          </li>
          <li className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-stone-200 dark:bg-stone-800 rounded-sm shrink-0 overflow-hidden flex items-center justify-center">
                <img loading="lazy" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAVFBMVEX////6/f6x1+tsudwpotEAl8xitdqm0ujy+fyGxOEAk8oAlcsAms0AmMwAkcnS6PO43O0AkMmXzOXo9PmPyONVsNfg8PdBqdQxpdLu9/t+wN/K5fHHhPk6AAAA8klEQVR4AazRwZqCMAxF4QiNlPYmgIgU5/3fczCfdKLO0rNq+zeLAn2hU9MG5nDu4qf1KTMAkaztGw/MqLGO3sZJ4NOLm5sA1sRWTrxrU5EFuZ2PXezTrse2Z3BLritDlucbEpBm8mVAb7Zq8o700gpwb6uWP1GAYquAf/A4YofjXFFjxfoxtlcMUnGGmBrayfkPaXuooQQ76LKhU3vK3fZRAd0OjQ8VIA10PFT2e3WWWSCFqI6mK7lZYBrq79yVU1lLWdelo1MQd5cuimciOf8s2pKrUUEtTfucb16UTYRTGei9W1+Sqoa7J1+MvyM+nQMAnnIQMvUA3IsAAAAASUVORK5CYII=" alt="Python" width="20" height="20" className="w-full h-full object-cover" />
              </div>
              <span className="text-stone-900 dark:text-stone-100 font-medium">Task-Oriented Course in Fundamentals of Python Programming</span>
            </div>
            <div className="flex items-center gap-4 shrink-0 pl-8 sm:pl-0">
              <span className="text-stone-600 dark:text-stone-400 text-xs">Perfect</span>
              <span className="text-stone-400 dark:text-stone-500 text-xs"><a href="https://quera.org/certificate/U22Q0W0B/" target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 dark:text-stone-100 underline">[click]</a></span>
            </div>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xs font-bold uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-6 border-b border-stone-200 dark:border-stone-800 pb-2">Language Competence</h2>
        <ul className="space-y-3 text-sm text-stone-700 dark:text-stone-300">
          <li className="flex flex-col sm:flex-row sm:items-baseline">
            <span className="text-stone-900 dark:text-stone-100 font-medium sm:w-1/3">English</span>
            <span className="text-stone-600 dark:text-stone-400 sm:w-2/3">Fluent / Bilingual</span>
          </li>
          <li className="flex flex-col sm:flex-row sm:items-baseline">
            <span className="text-stone-900 dark:text-stone-100 font-medium sm:w-1/3">German</span>
            <span className="text-stone-600 dark:text-stone-400 sm:w-2/3">Begginer</span>
          </li>
          <li className="flex flex-col sm:flex-row sm:items-baseline">
            <span className="text-stone-900 dark:text-stone-100 font-medium sm:w-1/3">Persian</span>
            <span className="text-stone-600 dark:text-stone-400 sm:w-2/3">Native</span>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xs font-bold uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-6 border-b border-stone-200 dark:border-stone-800 pb-2">Recommendation and References</h2>
        <div className="space-y-4 text-sm text-stone-700 dark:text-stone-300">
          <p className="italic">"A brilliant researcher with a profound understanding of AI alignment."</p>
          <p className="font-medium">— Prof. Great Scientist, University of Awesome</p>
          
          <p className="mt-4 text-stone-500 dark:text-stone-400">Available upon request.</p>
        </div>
      </section>
    </div>
  );
}
