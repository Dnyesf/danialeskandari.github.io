export const siteData = {
  author: {
    name: 'Danial Eskandari Faruji',
    bio: 'Machine Learning | Computer Vision | Biomedical Ai | Natural Language Proccesing | Artificial Intelligence Researcher',
    employer: 'Computer Engineering @ HSU',
    location: 'Sabzevar, Iran',
    email: 'dn.Eskandarifaruji@gmail.com',
    links: {
      scholar: 'https://scholar.google.com/citations?hl=en&user=6ihGka8AAAAJ',
      github: 'https://github.com/Dnyesf/',
      twitter: 'https://x.com/Dnyesf',
      linkedin: 'https://ir.linkedin.com/in/dnyesf',
    },
    avatar: '/assets/images/danial-eskandari-portrait.webp',
  },
  nav: [
    { label: 'Home', path: '/' },
    { label: 'Publications', path: '/publications' },
    { label: 'Projects', path: '/projects' },
    { label: 'Honors & Awards', path: '/honors' },
    { label: 'Research Blog', path: '/blog' },
  ],
};

export const publications = [
  {
    id: 'gat-icu-prediction',
    type: 'Conference Paper',
    title: 'Graph Attention Networks for Modelling Multi-Sensor Relationships in Early Prediction of Critical Events in ICU Patients',
    date: 'October 2025',
    year: '2025',
    doi: '10.1109/ICCKE68588.2025.11273891',
    venue: '15th International Conference on Computer and Knowledge Engineering (ICCKE 2025), Ferdowsi University of Mashhad',
    conference: '2025 15th International Conference on Computer and Knowledge Engineering (ICCKE)',
    authors: 'Amir Akhavan Saffar, Danial Eskandari Faruji, Javad Hamidzadeh',
    keywords: ['Graph Attention Networks', 'Multi-Sensor Physiological Signals', 'ICU Event Prediction', 'Temporal Dependencies', 'Explainable AI in Critical Care'],
    excerpt: 'Utilizes Graph Attention Networks to model relationships across multiple sensors to provide early predictions for critical events in ICU patients.',
    abstract: 'Timely prediction of critical events like sepsis, cardiac arrest, acute hypotension, respiratory failure, and atrial arrhythmia in Intensive Care Unit (ICU) patients is crucial for reducing mortality and enabling preemptive care. These events arise from complex physiological interactions, requiring advanced tools to detect early warning signs. We introduce a novel Graph Attention Network (GAT) framework that excels by exploiting inter-sensor relationships, dynamically tracking patient state changes with a multi-head attention mechanism, and using similarity edges to enable knowledge sharing among patients with similar profiles. The framework constructs patient-specific graphs with nodes representing physiological signals, including electrocardiogram (ECG), arterial blood pressure (ABP), oxygen saturation (SpO2), body temperature, respiratory rate, and heart rate variability (HRV), within 300-second windows. Edges reflect temporal sequences, physiological correlations, and inter-patient similarities, capturing unique patterns such as HRV drops in sepsis or ABP-respiratory synchronisation in hypotension, while addressing data sparsity. To enhance robustness and prevent data leakage, we employ KNN imputation, fitted solely on the training data, and use stratified 5-fold cross-validation at the patient level. An ablation study demonstrates the critical role of similarity edges, improving ROC-AUC by 8-10% compared to models without them. Evaluated on the HiRID dataset (900 admissions from University Hospital Zurich, Switzerland), MIMIC-IV (1,000 admissions from Beth Israel Deaconess Medical Centre, USA), and eICU (2,000 admissions from multiple US centres), the model applies Z-score normalization, utilizes a time-aware imputation strategy to prevent leakage, and tackles class imbalance using weighted cross-entropy combined with SMOTE on clinical features. Experiments yield a multi-class ROC-AUC of 0.94 ± 0.01 on HiRID, 0.92 on MIMIC-IV, and 0.91 on eICU, surpassing baselines...',
    url: 'https://www.researchgate.net/publication/398608780_Graph_Attention_Networks_for_Modelling_Multi-Sensor_Relationships_in_Early_Prediction_of_Critical_Events_in_ICU_Patients',
    ieeeUrl: 'https://ieeexplore.ieee.org/document/11273891',
    codeUrl: 'https://github.com/Dnyesf/GAT-ICU-Prediction',
    relatedProject: 'gat-project',
    image: '/assets/images/graph-attention-network.webp',
    citation: 'Amir Akhavan Saffar, Danial Eskandari Faruji, Javad Hamidzadeh, "Graph Attention Networks for Modelling Multi-Sensor Relationships in Early Prediction of Critical Events in ICU Patients", 2025 15th International Conference on Computer and Knowledge Engineering (ICCKE), October 2025.',
    bibtex: `@INPROCEEDINGS{11273891,
  author={Akhavan Saffar, Amir and Eskandari Faruji, Danial and Hamidzadeh, Javad},
  booktitle={2025 15th International Conference on Computer and Knowledge Engineering (ICCKE)}, 
  title={Graph Attention Networks for Modelling Multi-Sensor Relationships in Early Prediction of Critical Events in ICU Patients}, 
  year={2025},
  doi={10.1109/ICCKE68588.2025.11273891}}`,
    ris: `TY  - CONF
TI  - Graph Attention Networks for Modelling Multi-Sensor Relationships in Early Prediction of Critical Events in ICU Patients
T2  - 2025 15th International Conference on Computer and Knowledge Engineering (ICCKE)
AU  - Akhavan Saffar, Amir
AU  - Eskandari Faruji, Danial
AU  - Hamidzadeh, Javad
PY  - 2025
DO  - 10.1109/ICCKE68588.2025.11273891
ER  - `,
  },
  {
    id: 'ptsd-detection-framework',
    type: 'Conference Paper',
    title: 'Multimodal Deep Learning Framework for PTSD Detection during Sleep via EEG and Biosignal Fusion',
    date: 'October 2025',
    year: '2025',
    doi: '10.1109/ICCKE68588.2025.11273859',
    venue: '15th International Conference on Computer and Knowledge Engineering (ICCKE 2025), IEEE Iran Section',
    conference: '2025 15th International Conference on Computer and Knowledge Engineering (ICCKE)',
    authors: 'Danial Eskandari Faruji, Amir Akhavan Saffar, Mobina Ansari Astaneh',
    keywords: ['PTSD Detection', 'EEG', 'Multimodal Fusion', 'Sleep Analysis', 'CNN-BiLSTM'],
    excerpt: 'Developed a multimodal deep learning architecture integrating EEG signals and physiological biosignals for automated PTSD detection during sleep. The framework explores biosignal fusion strategies and advanced neural network models to improve diagnostic accuracy and robustness in mental health monitoring systems.',
    abstract: 'We introduce a multimodal deep learning framework designed for automated detection of Post-Traumatic Stress Disorder (PTSD) severity during sleep, leveraging the fusion of EEG spectrograms and ECG-derived heart rate variability (HRV). Utilizing overnight polysomnographic (PSG) recordings from a cohort of 44 subjects, our hybrid CNN-BiLSTM architecture, enhanced by a multi-head attention fusion module, effectively captures neurophysiological and autonomic biomarkers specific to PTSD, such as REM-related theta activity and HRV dysregulation. The model was rigorously evaluated using subject-wise 10-fold cross-validation, reporting performance metrics as mean ± standard deviation across folds, alongside leave-one-subject-out (LOSO) validation to ensure robustness. Ablation studies and interpretability analyses, including attention maps, Grad-CAM, and SHAP, reveal that the model prioritizes key features like theta power (4–8 Hz) during REM sleep and LF/HF HRV ratios for accurate PTSD classification. Despite the promising results, the modest dataset size highlights the need for larger cohorts to enhance generalizability. This framework offers a scalable, non-invasive solution for clinical diagnostics, with potential integration into wearable devices, thereby paving the way for real-time mental health monitoring while outlining future strategies for enhanced generalization and clinical translation.',
    url: 'https://www.researchgate.net/publication/398603177_Multimodal_Deep_Learning_Framework_for_PTSD_Detection_during_Sleep_via_EEG_and_Biosignal_Fusion',
    ieeeUrl: 'https://ieeexplore.ieee.org/document/11273859',
    codeUrl: 'https://github.com/Dnyesf/PTSD-Detection-EEG-ECG-HRV',
    relatedProject: 'ptsd-project',
    image: '/assets/images/ptsd-eeg-framework.webp',
    citation: 'Danial Eskandari Faruji, Amir Akhavan Saffar, Mobina Ansari Astaneh, "Multimodal Deep Learning Framework for PTSD Detection during Sleep via EEG and Biosignal Fusion", 2025 15th International Conference on Computer and Knowledge Engineering (ICCKE), October 2025.',
    bibtex: `@INPROCEEDINGS{11273859,
  author={Eskandari Faruji, Danial and Akhavan Saffar, Amir and Ansari Astaneh, Mobina},
  booktitle={2025 15th International Conference on Computer and Knowledge Engineering (ICCKE)}, 
  title={Multimodal Deep Learning Framework for PTSD Detection during Sleep via EEG and Biosignal Fusion}, 
  year={2025},
  doi={10.1109/ICCKE68588.2025.11273859}}`,
    ris: `TY  - CONF
TI  - Multimodal Deep Learning Framework for PTSD Detection during Sleep via EEG and Biosignal Fusion
T2  - 2025 15th International Conference on Computer and Knowledge Engineering (ICCKE)
AU  - Eskandari Faruji, Danial
AU  - Akhavan Saffar, Amir
AU  - Ansari Astaneh, Mobina
PY  - 2025
DO  - 10.1109/ICCKE68588.2025.11273859
ER  - `,
  },
  {
    id: 'ocd-reinforcement-learning',
    title: 'Safe Reinforcement Learning for Personalized Digital Interventions in Obsessive-Compulsive Disorder (OCD)',
    year: '2025',
    venue: 'International Conference on advances in Artificial Intelligence in Engineering and Humanities, Melbourne Australia',
    authors: 'Eskandari D., Akhavan A., Hamidzadeh J.',
    excerpt: 'Presents a safe reinforcement learning approach to create tailored, digital interventions for patients suffering from Obsessive-Compulsive Disorder (OCD).',
    url: 'https://civilica.com/doc/2366946/',
    codeUrl: '#',
    image: '/assets/images/ocd-reinforcement-learning.webp',
    citation: 'Eskandari D., Akhavan A., Hamidzadeh J., "Safe Reinforcement Learning for Personalized Digital Interventions in Obsessive-Compulsive Disorder (OCD)", International Conference on advances in Artificial Intelligence in Engineering and Humanities, Melbourne Australia, 2025.',
  },
  {
    id: 'snn-framework-fpga',
    title: 'Adaptive SNN Framework on FPGA for Multi-Modal Signal Processing in Industrial IoT: Addressing Data Drift for Predictive Maintenance',
    year: '2025',
    venue: 'International Conference on Computer Engineering, Electricity and Technology',
    authors: 'Eskandari D., Akhavan A., Hamidzadeh J.',
    excerpt: 'Introduces an adaptive Spiking Neural Network (SNN) framework deployed on FPGAs to handle multi-modal signal processing and address data drift in Industrial IoT predictive maintenance.',
    url: 'https://civilica.com/doc/2353647/',
    codeUrl: '#',
    image: '/assets/images/snn-industrial-iot.webp',
    citation: 'Eskandari D., Akhavan A., Hamidzadeh J., "Adaptive SNN Framework on FPGA for Multi-Modal Signal Processing in Industrial IoT: Addressing Data Drift for Predictive Maintenance", International Conference on Computer Engineering, Electricity and Technology, 2025.',
  },
  {
    id: 'cloud-native-conversational-ai',
    title: 'Cloud-Native Conversational AI: Scalable Architectures for Chatbots and Virtual Assistants',
    year: '2025',
    venue: '5th International Conference on Computer, Electrical Engineering and Technology, Hamadan',
    authors: 'Akhavan Saffar, Amir and Eskandari Faruji, Danial and Yazdanjoo, Javad',
    excerpt: 'Proposes scalable, cloud-native architectures designed for deploying and managing state-of-the-art conversational AI chatbots and virtual assistants.',
    url: 'https://civilica.com/doc/2353648',
    codeUrl: '#',
    image: '/assets/images/cloud-native-conversational-ai.webp',
    citation: 'Amir Akhavan Saffar and Danial Eskandari Faruji and Dr. Javad Yazdanjoo, 1404, Cloud-Native Conversational AI: Scalable Architectures for Chatbots and Virtual Assistants, 5th International Conference on Computer, Electrical Engineering and Technology, Hamadan, https://civilica.com/doc/2353648',
  }
];

export const projects = [
  {
    id: 'ptsd-project',
    title: 'Multimodal Deep Learning Framework for PTSD Detection',
    description: 'A hybrid deep learning framework for the automated detection of Post-Traumatic Stress Disorder (PTSD) from physiological sleep data. Using EEG and ECG signals, our model identifies key biomarkers such as elevated theta power and heart rate variability (HRV) dysregulation to provide an objective, non-invasive, and scalable diagnostic tool.',
    image: '/assets/images/ptsd-eeg-framework.webp',
    githubUrl: 'https://github.com/Dnyesf/PTSD-Detection-EEG-ECG-HRV', relatedPublication: 'ptsd-detection-framework',
  },
  {
    id: 'gat-project',
    title: 'GAT-ICU-Prediction',
    description: 'A deep learning solution for the automated and early detection of critical cardio-respiratory conditions in ICU patients. It transforms multiple physiological signals into graph neural networks and employs an advanced Graph Attention Network (GAT) model to learn local and global patterns for holistic, patient-level prediction.',
    image: '/assets/images/graph-attention-network.webp',
    githubUrl: 'https://github.com/Dnyesf/GAT-ICU-Prediction', relatedPublication: 'gat-icu-prediction',
  },
];

export const blogs = [
  {
    id: 'scalable-oversight-llm',
    title: 'A Primer on Scalable Oversight for Large Language Models',
    date: 'March 15, 2024',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDaAZuCZ8OtOdOyNXxbXcYaIP6gu0UUUEV_1Z-B4Kl5A&s=10',
    excerpt: 'Exploring the challenges of aligning increasingly capable LLMs and the promise of scalable oversight methodologies.',
    content: `
As large language models (LLMs) become more capable, the challenge of aligning them with human values—a task often referred to as the "alignment problem"—grows increasingly complex. Traditional reinforcement learning from human feedback (RLHF) struggles when evaluating tasks that surpass human cognitive bandwidth or domain expertise. This is where **scalable oversight** comes into play.

### The Core Problem

When we train an AI to summarize a 1,000-page medical textbook, asking a human rater to evaluate the summary's accuracy requires the rater to read the entire textbook. This is slow, expensive, and unscalable. 

### Methods of Scalable Oversight

Several promising directions are being researched to address this:
- **Constitutional AI:** Providing models with a list of principles or "constitution" to self-critique and revise their own outputs.
- **Debate:** Having two AI models debate the correct answer to a complex question, making it easier for a human judge to spot flaws in reasoning.
- **Recursive Reward Modeling:** Using AI to assist humans in evaluating other AI systems, breaking down complex tasks into smaller, human-verifiable sub-tasks.

### Looking Ahead

Scalable oversight is not a silver bullet, but it represents a crucial shift in our approach to alignment. Instead of relying solely on direct human supervision, we are building systems that can help us supervise themselves.
    `
  },
  {
    id: 'cross-layer-attention',
    title: 'Implementing Cross-Layer Attention in Volumetric Medical Segmentation',
    date: 'January 20, 2024',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThYUrIhABLa71kqjO24kgA2ETqHx-lDsE8-JhsKimziaxO6LvP9JBFVGuj&s=10',
    excerpt: 'A deep dive into our recent Nature Machine Intelligence paper on bridging semantic features in medical imaging.',
    content: `
In our recent publication, we explored a novel approach to multi-modal medical image segmentation using a cross-layer attention mechanism within a transformer-based architecture.

### Why Cross-Layer Attention?

Standard convolutional networks often struggle to maintain high-resolution spatial details while simultaneously capturing deep, semantic features. Transformers offer a way to model long-range dependencies, but applying them directly to 3D volumetric medical scans (like MRI or CT) is computationally prohibitive due to the quadratic complexity of self-attention.

Our proposed **Cross-Layer Attention** mechanism addresses this by allowing low-resolution, highly semantic feature maps from the deep stages of the network to directly query and guide the reconstruction of high-resolution spatial features in the decoder.

### The Results

By bypassing the traditional bottleneck of strict layer-by-layer upsampling, our model achieved state-of-the-art Dice scores on multiple benchmark datasets, while significantly reducing the parameter count compared to fully dense transformer models.

The code is fully open-sourced on GitHub. We encourage the community to adapt it for other medical imaging tasks!
    `
  }
];

