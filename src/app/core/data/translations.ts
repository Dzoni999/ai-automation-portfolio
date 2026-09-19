export const translations = {
  en: {
    meta: {
      title: 'Nikola Sajić | AI Automation for Businesses',
      description:
        'AI-powered invoice and document processing for logistics companies. Move data from email and PDFs into Excel, ERP or your existing systems.'
    },
    nav: {
      home: 'Home',
      services: 'Services',
      pricing: 'Pricing',
      caseStudies: 'Case Study',
      about: 'Outcomes',
      contact: 'Contact'
    },
    header: {
      role: 'AI workflow systems',
      menu: 'Menu',
      close: 'Close',
      themeDark: 'Dark',
      themeLight: 'Light',
      switchToDark: 'Switch to dark theme',
      switchToLight: 'Switch to light theme',
      switchToEnglish: 'Switch language to English',
      switchToSerbian: 'Switch language to Serbian',
      languageLabel: 'Language'
    },
    footer: {
      line: 'Practical AI automation for invoices, email and internal business operations.',
      availability: 'Available for freelance projects from Belgrade, Serbia.',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      copyright: 'Nikola Sajić. All rights reserved.'
    },
    home: {
      hero: {
        eyebrow: 'Invoice and document automation for logistics',
        title: 'Automate invoice processing for your logistics business',
        subtitle:
          'Stop spending hours moving invoice and document data from email and PDFs into spreadsheets. I build AI workflows that extract the details and send them to Excel, ERP or your existing system.',
        primaryCta: 'Discuss Your Workflow',
        secondaryCta: 'See the Process',
        note: 'Built for logistics, freight forwarding and transport teams handling recurring invoices and documents.',
        outcomes: ['Invoice processing', 'PDF and email handling', 'Excel / ERP preparation'],
        proof: [
          { value: 'Email', label: 'input' },
          { value: 'AI', label: 'extraction' },
          { value: 'ERP', label: 'output' }
        ]
      },
      visual: {
        label: 'Invoice workflow preview',
        platform: 'Outlook + AI + n8n',
        trigger: 'Invoice email',
        qualify: 'AI extraction',
        route: 'Excel / ERP',
        summary: 'Archive file',
        review: 'Review exception',
        panelTitle: 'Workflow setup',
        metricOne: 'Input source',
        metricOneValue: 'Email',
        metricTwo: 'Destination',
        metricTwoValue: 'Excel / ERP',
        metricThree: 'Fallback',
        metricThreeValue: 'Human review',
        reviewDetail: 'Manual check',
        status: 'Ready to automate',
        processEyebrow: 'Live workflow',
        processSubtitle: 'Watch the process move from inbox to structured output.',
        processBadge: 'Scroll-activated',
        process: [
          { title: 'Email', detail: 'Invoice arrives' },
          { title: 'PDF', detail: 'Document is read' },
          { title: 'AI', detail: 'Fields are extracted' },
          { title: 'Structured data', detail: 'Values are validated' },
          { title: 'Excel / ERP', detail: 'Record is updated' }
        ]
      },
      howItWorks: {
        eyebrow: 'One practical workflow',
        title: 'How it works',
        subtitle: 'See how an emailed invoice becomes structured data ready for the next system.',
        steps: [
          {
            title: 'Receive PDF invoices by email',
            text: 'A new invoice arrives in the inbox your team already uses.'
          },
          {
            title: 'AI extracts all important data',
            text: 'Supplier, date, amount and line items are read from the document.'
          },
          {
            title: 'Data is written into Excel or ERP',
            text: 'Structured fields are sent to the right record automatically.'
          },
          {
            title: 'Files are archived and organized',
            text: 'The original PDF is stored with a clear, searchable naming pattern.'
          }
        ]
      },
      services: {
        eyebrow: 'Services',
        title: 'Start with invoice and document processing.',
        subtitle: 'Automate the manual work between your inbox, documents, spreadsheets and business systems.',
        items: [
          {
            title: 'AI Invoice Processing',
            text: 'Extract data from PDFs and populate Excel or ERP automatically.',
            icon: 'document'
          },
          {
            title: 'Email & Document Workflows',
            text: 'Route incoming emails and documents to the right workflow automatically.',
            icon: 'email'
          },
          {
            title: 'ERP & CRM Integrations',
            text: 'Prepare and sync structured data with the systems your team already uses.',
            icon: 'chatbot'
          },
          {
            title: 'Custom Automation',
            text: 'Connect multiple tools, APIs and business rules around one process.',
            icon: 'workflow'
          }
        ]
      },
      pricing: {
        eyebrow: 'Clear starting points',
        title: 'Automation that fits your workflow',
        subtitle: 'Start with one focused process, then scale when the workflow proves its value. Every project is scoped around your tools, data and requirements.',
        note: 'Starting prices only. Final scope depends on integrations, edge cases and deployment requirements.',
        plans: [
          {
            name: 'Automation Starter',
            price: 'From €500',
            description: 'For one focused process with a clear, measurable outcome.',
            cta: 'Get Started',
            featured: '',
            priceNote: '',
            features: ['1 production workflow', '1–2 tool integrations', 'Email or PDF processing', 'AI data extraction', 'Excel or Google Sheets output', 'Testing, deployment and handover']
          },
          {
            name: 'Custom Automation',
            price: 'From €1,200',
            description: 'For complex workflows that connect multiple systems and business rules.',
            cta: 'Discuss Your Workflow',
            featured: 'Most Popular',
            priceNote: '',
            features: ['Multi-step workflow design', 'AI document processing', 'Multiple integrations', 'API and webhook connections', 'ERP or CRM integration', 'Error handling, testing and documentation']
          },
          {
            name: 'Automation Partner',
            price: 'From €2,000',
            priceNote: 'initial engagement',
            description: 'For teams that want ongoing development, monitoring and optimization.',
            cta: 'Let’s Talk',
            featured: '',
            features: ['Multiple workflows', 'Monitoring and maintenance', 'Workflow improvements', 'Priority support', 'New integrations', 'Continuous optimization']
          }
        ],
        support: {
          label: 'Ongoing support',
          price: 'From €150/month',
          text: 'Monitoring, fixes and small workflow improvements after launch.'
        }
      },
      outcomes: {
        eyebrow: 'Business outcomes',
        title: 'The business results that matter.',
        subtitle: 'Less manual entry, faster processing and cleaner data for the systems your team already uses.',
        items: [
          {
            title: 'Less manual data entry',
            text: 'Stop copying invoice and document details between email, PDFs and spreadsheets.'
          },
          {
            title: 'Fewer data-entry errors',
            text: 'Use consistent extraction and validation rules for every document.'
          },
          {
            title: 'Faster invoice processing',
            text: 'Get key fields into the next step while your team handles only exceptions.'
          },
          {
            title: 'Data ready for ERP or Excel',
            text: 'Keep the tools you use and connect them with a workflow built around your process.'
          }
        ]
      },
      cases: {
        eyebrow: 'Case study',
        title: 'A workflow that removes weekly admin',
        subtitle: 'A clear example of how logistics teams can move invoice data from inbox to structured output.',
        problem: 'Problem',
        solution: 'Solution',
        result: 'Result',
        problemItems: ['Hundreds of PDF invoices', 'Manual data entry', 'Time-consuming administration'],
        solutionItems: ['Outlook + AI + n8n', 'Automatic Excel population', 'Organized document archive'],
        resultBadge: '10+ hours saved weekly'
      },
      faq: {
        eyebrow: 'FAQ',
        title: 'Questions before we automate',
        subtitle: 'The essentials before we connect a workflow to your business.',
        items: [
          {
            question: 'What can be automated?',
            answer: 'Common starting points include invoice PDFs, email attachments, document classification, data extraction and Excel or ERP preparation.'
          },
          {
            question: 'What systems can you integrate?',
            answer: 'Email, Excel, Google Sheets, ERP, CRM, APIs and webhooks can be connected when they fit the workflow.'
          },
          {
            question: 'How does implementation work?',
            answer: 'We map one process, define the rules and exceptions, build the workflow, test it and deploy it into your existing setup.'
          },
          {
            question: 'How much does it cost?',
            answer: 'Projects start from €500 for a focused workflow. The final price depends on integrations, complexity and edge cases.'
          },
          {
            question: 'Do I need to replace my existing software?',
            answer: 'Usually not. The goal is to connect the tools your team already relies on and improve the process around them.'
          }
        ]
      },
      contact: {
        title: 'Discuss your workflow',
        text: "Tell me where invoice or document data is still entered manually. I will suggest a practical first automation step.",
        trust: [
          { title: 'Free 30-Min Consultation', icon: 'clock' },
          { title: 'Delivery in 2-5 Business Days', icon: 'check' },
          { title: 'Custom AI Workflow Solutions', icon: 'wrench' }
        ],
        technology: 'Built around your existing tools, with AI used where it makes the process faster and more reliable.',
        form: {
          name: 'Name',
          email: 'Work email',
          company: 'Company',
          message: 'What would you like to automate?',
          namePlaceholder: 'Your name',
          emailPlaceholder: 'you@company.com',
          companyPlaceholder: 'Company name',
          messagePlaceholder: 'For example: invoices arrive by email and are entered into Excel manually.',
          submit: 'Start the conversation',
          subject: 'Automation consultation request',
          hint: 'No obligation. I will reply with one practical automation opportunity for your workflow.',
          sending: 'Sending your message…',
          sendingHint: 'Please wait while I send your request to Formspree.',
          success: 'Message sent successfully.',
          submitError: 'Sorry, the message could not be sent right now. Please try again.',
          error: 'Please fix the highlighted fields and try again.',
          validationError: 'Please fix the highlighted fields and try again.',
          validation: {
            name: 'Your name is required.',
            emailRequired: 'Your email is required.',
            emailInvalid: 'Enter a valid email address.',
            company: 'Company is required.',
            message: 'Please add a short description of what you want to automate.'
          }
        }
      }
    }
  },
  sr: {
    meta: {
      title: 'Nikola Sajić | AI automatizacija za biznise',
      description:
        'AI obrada faktura i dokumentacije za logističke firme. Prebacite podatke iz emailova i PDF-ova u Excel, ERP ili postojeći poslovni sistem.'
    },
    nav: {
      home: 'Početna',
      services: 'Usluge',
      pricing: 'Cene',
      caseStudies: 'Primer',
      about: 'Rezultati',
      contact: 'Kontakt'
    },
    header: {
      role: 'AI workflow sistemi',
      menu: 'Meni',
      close: 'Zatvori',
      themeDark: 'Tamno',
      themeLight: 'Svetlo',
      switchToDark: 'Prebaci na tamnu temu',
      switchToLight: 'Prebaci na svetlu temu',
      switchToEnglish: 'Prebaci jezik na engleski',
      switchToSerbian: 'Prebaci jezik na srpski',
      languageLabel: 'Jezik'
    },
    footer: {
      line: 'Praktična AI automatizacija za fakture, emailove i interne poslovne procese.',
      availability: 'Dostupan za freelance projekte iz Beograda, Srbija.',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      copyright: 'Nikola Sajić. Sva prava zadržana.'
    },
    home: {
      hero: {
        eyebrow: 'Obrada faktura i dokumentacije u logistici',
        title: 'Automatizujte obradu faktura u logističkoj firmi',
        subtitle:
          'Prekinite sa ručnim prepisivanjem podataka iz emailova, PDF faktura i dokumentacije. Povezujem AI obradu sa Excelom, ERP-om ili sistemima koje već koristite.',
        primaryCta: 'Razgovarajmo o vašem procesu',
        secondaryCta: 'Pogledajte proces',
        note: 'Za logističke, špediterske i transportne firme koje ručno obrađuju fakture i dokumentaciju.',
        outcomes: ['Obrada faktura', 'Emailovi i PDF dokumenta', 'Priprema za Excel / ERP'],
        proof: [
          { value: 'Email', label: 'ulaz' },
          { value: 'AI', label: 'obrada' },
          { value: 'ERP', label: 'rezultat' }
        ]
      },
      visual: {
        label: 'Primer workflow-a za fakture',
        platform: 'Outlook + AI + n8n',
        trigger: 'Email sa fakturom',
        qualify: 'AI izvlačenje podataka',
        route: 'Excel / ERP',
        summary: 'Arhiviraj fajl',
        review: 'Proveri izuzetak',
        panelTitle: 'Podešavanje workflow-a',
        metricOne: 'Izvor',
        metricOneValue: 'Email',
        metricTwo: 'Odredište',
        metricTwoValue: 'Excel / ERP',
        metricThree: 'Izuzeci',
        metricThreeValue: 'Ručna provera',
        reviewDetail: 'Ručna provera',
        status: 'Spremno za automatizaciju',
        processEyebrow: 'Živi workflow',
        processSubtitle: 'Pogledajte kako proces ide od inboxa do strukturiranog rezultata.',
        processBadge: 'Aktivira se skrolom',
        process: [
          { title: 'Email', detail: 'Faktura stiže' },
          { title: 'PDF', detail: 'Dokument se čita' },
          { title: 'AI', detail: 'Podaci se izvlače' },
          { title: 'Strukturirani podaci', detail: 'Vrednosti se proveravaju' },
          { title: 'Excel / ERP', detail: 'Zapis se ažurira' }
        ]
      },
      howItWorks: {
        eyebrow: 'Jedan praktičan workflow',
        title: 'Kako funkcioniše',
        subtitle: 'Pogledajte kako faktura iz inboxa postaje strukturirani podatak spreman za sledeći sistem.',
        steps: [
          { title: 'PDF fakture stižu emailom', text: 'Nova faktura stiže u inbox koji vaš tim već koristi.' },
          { title: 'AI izvlači važne podatke', text: 'Dobavljač, datum, iznos i stavke se čitaju iz dokumenta.' },
          { title: 'Podaci se upisuju u Excel ili ERP', text: 'Strukturirana polja se automatski šalju u pravi zapis.' },
          { title: 'Fajlovi se arhiviraju i organizuju', text: 'Originalni PDF se čuva uz jasan naziv koji se lako pretražuje.' }
        ]
      },
      services: {
        eyebrow: 'Usluge',
        title: 'Krenite od obrade faktura i dokumentacije.',
        subtitle: 'Automatizujte ručni rad između inboxa, dokumenata, tabela i poslovnih sistema.',
        items: [
          { title: 'AI obrada faktura', text: 'Izvucite podatke iz PDF-ova i automatski ih upišite u Excel ili ERP.', icon: 'document' },
          { title: 'Email i dokumentacija', text: 'Usmerite emailove i dokumenta u pravi workflow bez ručnog prosleđivanja.', icon: 'email' },
          { title: 'ERP i CRM integracije', text: 'Pripremite i sinhronizujte strukturirane podatke sa sistemima koje već koristite.', icon: 'chatbot' },
          { title: 'Custom automatizacija', text: 'Povežite više alata, API-ja i poslovnih pravila oko jednog procesa.', icon: 'workflow' }
        ]
      },
      pricing: {
        eyebrow: 'Jasne početne cene',
        title: 'Automatizacija prilagođena vašem procesu',
        subtitle: 'Krenite od jednog fokusiranog procesa, pa proširite sistem kada se pokaže njegova vrednost. Svaki projekat se prilagođava vašim alatima, podacima i zahtevima.',
        note: 'Početne cene su okvirne. Konačna cena zavisi od integracija, izuzetaka i zahteva za implementaciju.',
        plans: [
          {
            name: 'Automation Starter',
            price: 'Od €500',
            description: 'Za jedan fokusiran proces sa jasnim i merljivim rezultatom.',
            cta: 'Započnite',
            featured: '',
            priceNote: '',
            features: ['1 produkcioni workflow', '1–2 integracije', 'Email ili PDF obrada', 'AI izvlačenje podataka', 'Excel ili Google Sheets rezultat', 'Testiranje, puštanje u rad i predaja']
          },
          {
            name: 'Custom Automation',
            price: 'Od €1.200',
            description: 'Za složenije workflow-e koji povezuju više sistema i poslovnih pravila.',
            cta: 'Razgovarajmo o procesu',
            featured: 'Najpopularnije',
            priceNote: '',
            features: ['Dizajn višekoračnog workflow-a', 'AI obrada dokumenata', 'Više integracija', 'API i webhook konekcije', 'ERP ili CRM integracija', 'Obrada grešaka, testiranje i dokumentacija']
          },
          {
            name: 'Automation Partner',
            price: 'Od €2.000',
            priceNote: 'početni angažman',
            description: 'Za timove kojima su potrebni kontinuirani razvoj, monitoring i optimizacija.',
            cta: 'Hajde da razgovaramo',
            featured: '',
            features: ['Više workflow-a', 'Monitoring i održavanje', 'Unapređenje workflow-a', 'Prioritetna podrška', 'Nove integracije', 'Kontinuirana optimizacija']
          }
        ],
        support: {
          label: 'Kontinuirana podrška',
          price: 'Od €150/mesečno',
          text: 'Monitoring, ispravke i manja unapređenja workflow-a nakon puštanja u rad.'
        }
      },
      outcomes: {
        eyebrow: 'Poslovni rezultati',
        title: 'Rezultati koji su važni za poslovanje.',
        subtitle: 'Manje ručnog unosa, brža obrada i uredniji podaci u sistemima koje već koristite.',
        items: [
          { title: 'Manje ručnog unosa', text: 'Prestanite da prepisujete podatke iz faktura i dokumenata između emaila, PDF-ova i tabela.' },
          { title: 'Manje grešaka pri unosu', text: 'Ista pravila za izvlačenje i proveru primenjuju se na svaki dokument.' },
          { title: 'Brža obrada faktura', text: 'Važna polja stižu u sledeći sistem, a tim se bavi samo izuzecima.' },
          { title: 'Podaci spremni za ERP ili Excel', text: 'Zadržite alate koje koristite i povežite ih workflow-om prilagođenim vašem procesu.' }
        ]
      },
      cases: {
        eyebrow: 'Primer iz prakse',
        title: 'Workflow koji uklanja nedeljnu administraciju',
        subtitle: 'Jasan primer kako logistički tim može da prebaci podatke sa fakture iz inboxa u strukturirani rezultat.',
        problem: 'Problem',
        solution: 'Rešenje',
        result: 'Rezultat',
        problemItems: ['Stotine PDF faktura', 'Ručni unos podataka', 'Administracija koja oduzima vreme'],
        solutionItems: ['Outlook + AI + n8n', 'Automatsko popunjavanje Excela', 'Organizovana arhiva dokumenata'],
        resultBadge: '10+ sati uštede nedeljno'
      },
      faq: {
        eyebrow: 'FAQ',
        title: 'Pitanja pre automatizacije',
        subtitle: 'Najvažnije informacije pre nego što povežemo workflow sa vašim poslovanjem.',
        items: [
          { question: 'Šta može da se automatizuje?', answer: 'Dobar početak su PDF fakture, email prilozi, razvrstavanje dokumenata, izvlačenje podataka i priprema za Excel ili ERP.' },
          { question: 'Sa kojim sistemima možeš da radiš?', answer: 'Email, Excel, Google Sheets, ERP, CRM, API-ji i webhook konekcije mogu da se povežu kada to ima smisla za workflow.' },
          { question: 'Kako izgleda implementacija?', answer: 'Mapiramo jedan proces, definišemo pravila i izuzetke, izgradimo workflow, testiramo ga i pustimo u rad u vašem postojećem okruženju.' },
          { question: 'Koliko košta?', answer: 'Projekti počinju od €500 za fokusirani workflow. Konačna cena zavisi od integracija, složenosti i izuzetaka.' },
          { question: 'Da li moramo da menjamo postojeći softver?', answer: 'Uglavnom ne. Cilj je da povežemo alate na koje se vaš tim već oslanja i unapredimo proces oko njih.' }
        ]
      },
      contact: {
        title: 'Razgovarajmo o vašem procesu',
        text: 'Recite gde se podaci sa faktura ili dokumenata još uvek unose ručno. Predložiću jedan praktičan prvi korak.',
        trust: [
          { title: 'Besplatne konsultacije od 30 minuta', icon: 'clock' },
          { title: 'Isporuka za 2-5 radnih dana', icon: 'check' },
          { title: 'Prilagođena AI rešenja za procese', icon: 'wrench' }
        ],
        technology: 'Povezujem alate koje već koristite i uvodim AI tamo gde proces postaje brži i pouzdaniji.',
        form: {
          name: 'Ime', email: 'Poslovni email', company: 'Kompanija', message: 'Šta želite da automatizujete?',
          namePlaceholder: 'Vaše ime', emailPlaceholder: 'vi@kompanija.com', companyPlaceholder: 'Ime kompanije',
          messagePlaceholder: 'Na primer: fakture stižu emailom i ručno se unose u Excel.',
          submit: 'Započni razgovor', subject: 'Zahtev za konsultacije o automatizaciji',
          hint: 'Bez obaveze. Odgovoriću jednom konkretnom idejom za unapređenje vašeg procesa.',
          sending: 'Šaljem poruku…',
          sendingHint: 'Sačekaj trenutak dok šaljem upit preko Formspree servisa.',
          success: 'Poruka je uspešno poslata.',
          submitError: 'Nažalost, poruka trenutno nije mogla da se pošalje. Pokušaj ponovo.',
          error: 'Ispravi označena polja i pokušaj ponovo.',
          validationError: 'Ispravi označena polja i pokušaj ponovo.',
          validation: {
            name: 'Ime je obavezno.',
            emailRequired: 'Email je obavezan.',
            emailInvalid: 'Unesi ispravan email format.',
            company: 'Kompanija je obavezna.',
            message: 'Dodaj kratak opis šta želiš da automatizuješ.'
          }
        }
      }
    }
  }
} as const;

export type LanguageCode = keyof typeof translations;
export type SiteCopy = (typeof translations)[LanguageCode];
