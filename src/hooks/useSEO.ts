import { useEffect } from 'react';

export function useSEO({ 
  title, 
  description, 
  path,
  jsonLd
}: { 
  title: string; 
  description: string; 
  path?: string;
  jsonLd?: any[];
}) {
  useEffect(() => {
    document.title = title;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Get current path or use the provided one
    const currentPath = path || window.location.pathname;
    
    // Canonical link
    const canonicalUrl = `https://danialeskandari.com${currentPath}`;
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // Helper to update meta tags
    const updateMetaTag = (attributeName: string, attributeValue: string, content: string) => {
      let tag = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attributeName, attributeValue);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // Open Graph tags
    updateMetaTag('property', 'og:title', title);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:url', canonicalUrl);

    // Twitter Card tags
    updateMetaTag('name', 'twitter:title', title);
    updateMetaTag('name', 'twitter:description', description);

    // JSON-LD Structured Data
    let scriptTag = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }

    // Generate BreadcrumbList based on path
    const pathParts = currentPath.split('/').filter(Boolean);
    const breadcrumbItems = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://danialeskandari.com/"
      }
    ];

    let currentUrl = "https://danialeskandari.com";
    pathParts.forEach((part, index) => {
      currentUrl += `/${part}`;
      let name = part.charAt(0).toUpperCase() + part.slice(1);
      
      // If it's the last part, use the page title
      if (index === pathParts.length - 1) {
        name = title.split(' | ')[0];
      }
      
      breadcrumbItems.push({
        "@type": "ListItem",
        "position": index + 2,
        "name": name,
        "item": currentUrl
      });
    });

    const baseJsonLd = [
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": "https://danialeskandari.com/#person",
        "name": "Danial Eskandari Faruji",
        "jobTitle": "AI Researcher",
        "affiliation": {
          "@type": "Organization",
          "name": "Computer Engineering @ HSU"
        },
        "alumniOf": {
          "@type": "CollegeOrUniversity",
          "name": "Hakim Sabzevari University"
        },
        "email": "dn.eskandarifaruji@gmail.com",
        "url": "https://danialeskandari.com",
        "sameAs": [
          "https://github.com/Dnyesf/",
          "https://scholar.google.com/citations?hl=en&user=6ihGka8AAAAJ",
          "https://ir.linkedin.com/in/dnyesf",
          "https://x.com/Dnyesf"
        ],
        "image": {
          "@type": "ImageObject",
          "url": "https://danialeskandari.com/assets/images/danial-eskandari-portrait.webp",
          "caption": "Danial Eskandari Faruji"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "dateCreated": "2024-01-01T12:00:00Z",
        "dateModified": new Date().toISOString(),
        "mainEntity": {
          "@id": "https://danialeskandari.com/#person"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "CollegeOrUniversity",
        "@id": "https://danialeskandari.com/#HakimSabzevariUniversity",
        "name": "Hakim Sabzevari University",
        "url": "https://hsu.ac.ir"
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://danialeskandari.com/#website",
        "name": "Danial AI",
        "url": "https://danialeskandari.com"
      },
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${canonicalUrl}/#webpage`,
        "url": canonicalUrl,
        "name": title,
        "description": description,
        "isPartOf": {
          "@id": "https://danialeskandari.com/#website"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbItems
      }
    ];

    if (jsonLd && jsonLd.length > 0) {
      baseJsonLd.push(...jsonLd);
    }

    scriptTag.textContent = JSON.stringify(baseJsonLd);

  }, [title, description, path, jsonLd]);
}
