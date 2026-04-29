'use client';

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ABC Technologies LLC",
    "url": "https://abctechnologies.com",
    "logo": "https://abctechnologies.com/logo.png",
    "description": "Global partner for reliable sourcing, technical expertise, and deployment of advanced engineering and technology solutions.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "UAE"
    },
    "sameAs": [
      "https://www.linkedin.com/company/abctechnologies"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
