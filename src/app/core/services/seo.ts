import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

type SeoData = {
  title: string;
  description: string;
};

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly document = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  update(data: SeoData): void {
    const pageUrl = this.currentPageUrl();

    this.title.setTitle(data.title);
    this.meta.updateTag({ name: 'description', content: data.description });
    this.meta.updateTag({ name: 'author', content: 'Nikola Sajic' });
    this.meta.updateTag({
      name: 'keywords',
      content: 'AI automation engineer, n8n automation, AI integrations, workflow automation, Belgrade'
    });
    this.meta.updateTag({ property: 'og:title', content: data.title });
    this.meta.updateTag({ property: 'og:description', content: data.description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Nikola Sajic' });
    this.meta.updateTag({ property: 'og:url', content: pageUrl });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: data.title });
    this.meta.updateTag({ name: 'twitter:description', content: data.description });
    this.meta.updateTag({ name: 'twitter:creator', content: '@Dzoni999' });
    this.upsertCanonical(pageUrl);
    this.upsertStructuredData(pageUrl);
  }

  private currentPageUrl(): string {
    const location = this.document.location;
    return `${location.origin}${location.pathname}`;
  }

  private upsertCanonical(url: string): void {
    const existing = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const canonical = existing ?? this.document.createElement('link');

    canonical.rel = 'canonical';
    canonical.href = url;

    if (!existing) {
      this.document.head.appendChild(canonical);
    }
  }

  private upsertStructuredData(url: string): void {
    const scriptId = 'person-structured-data';
    const existing = this.document.getElementById(scriptId) as HTMLScriptElement | null;
    const script = existing ?? this.document.createElement('script');

    script.id = scriptId;
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Nikola Sajić',
      url,
      jobTitle: 'AI Workflow Automation Consultant',
      email: 'mailto:nikolasajic7@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Belgrade',
        addressCountry: 'RS'
      },
      sameAs: ['https://www.linkedin.com/in/nikola-sajic', 'https://github.com/Dzoni999'],
      knowsAbout: [
        'AI automation',
        'n8n workflow automation',
        'backend development',
        'API integrations',
        'document processing'
      ]
    });

    if (!existing) {
      this.document.head.appendChild(script);
    }
  }
}
