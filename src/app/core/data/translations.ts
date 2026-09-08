export const translations = {
  en: {
    meta: {
      title: 'Nikola Sajić | AI Automation for Businesses',
      description:
        'AI automation solutions using n8n, Claude and custom integrations. Automate invoices, emails and repetitive business workflows.'
    },
    nav: {
      home: 'Home',
      services: 'Services',
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
        eyebrow: 'Business workflow automation',
        title: 'Automate invoice processing and repetitive operations',
        subtitle:
          'I build practical AI workflows that read invoices from email, extract the important data and send it to Excel or your ERP — while keeping exceptions visible for your team.',
        primaryCta: 'Get a Free Workflow Audit',
        secondaryCta: 'See How It Works',
        note: 'Best for teams processing recurring PDFs, emails and spreadsheets by hand.',
        outcomes: ['Invoice processing', 'Email operations', 'Document workflows'],
        proof: [
          { value: '10+', label: 'hours saved weekly' },
          { value: '2–5', label: 'days to delivery' },
          { value: 'Free', label: '30-min consultation' }
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
        status: 'Ready to automate'
      },
      howItWorks: {
        eyebrow: 'One practical workflow',
        title: 'How it works',
        subtitle: 'A typical invoice flow, built to remove manual data entry while keeping exceptions visible.',
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
        title: 'Automation built around your actual operations.',
        subtitle: 'Focused systems for the workflows your team repeats every day.',
        items: [
          {
            title: 'AI Invoice Processing',
            text: 'Extract data from PDFs and populate Excel or ERP automatically.',
            icon: 'document'
          },
          {
            title: 'Email Workflow Automation',
            text: 'Automatically sort, forward, reply and archive emails.',
            icon: 'email'
          },
          {
            title: 'AI Business Chatbots',
            text: '24/7 customer support trained on company knowledge.',
            icon: 'chatbot'
          },
          {
            title: 'Custom Workflow Automation',
            text: 'Connect CRM, ERP, Google Sheets and APIs using n8n.',
            icon: 'workflow'
          }
        ]
      },
      outcomes: {
        eyebrow: 'Business outcomes',
        title: 'Less administration. More reliable operations.',
        subtitle: 'The system should make your existing process easier to run, not force your team into a new one.',
        items: [
          {
            title: 'Reduce manual work',
            text: 'Remove repetitive copying, filing and handoffs from everyday operations.'
          },
          {
            title: 'Fewer human errors',
            text: 'Apply the same extraction and routing rules every time a document arrives.'
          },
          {
            title: 'Faster document processing',
            text: 'Move PDFs and emails into the right system while the team focuses on exceptions.'
          },
          {
            title: 'Works with existing systems',
            text: 'Connect the inboxes, spreadsheets, CRMs and internal tools your business already relies on.'
          }
        ]
      },
      cases: {
        eyebrow: 'Case study',
        title: 'A workflow that removes weekly admin',
        subtitle: 'A practical invoice process where AI handles repeatable extraction and people handle the exceptions.',
        problem: 'Problem',
        solution: 'Solution',
        result: 'Result',
        problemItems: ['Hundreds of PDF invoices', 'Manual data entry', 'Time-consuming administration'],
        solutionItems: ['Outlook + AI + n8n', 'Automatic Excel population', 'Organized document archive'],
        resultBadge: '10+ hours saved weekly'
      },
      faq: {
        eyebrow: 'FAQ',
        title: 'Questions before we build',
        subtitle: 'Clear answers before your team changes a process.',
        items: [
          {
            question: 'How long does implementation take?',
            answer: 'A focused workflow is usually delivered in 2–5 business days. Larger systems are scoped in clear phases before work starts.'
          },
          {
            question: 'Do I need to change my current software?',
            answer: 'Usually not. The aim is to connect the tools you already use, then add only what the workflow genuinely needs.'
          },
          {
            question: 'Can it work with Excel?',
            answer: 'Yes. Excel and Google Sheets are common destinations for extracted data, reports and workflow updates.'
          },
          {
            question: 'Is my data secure?',
            answer: 'Each workflow is designed around the data involved. Access is limited to what is required, and sensitive steps can stay behind a review point.'
          },
          {
            question: 'Do you provide maintenance?',
            answer: 'Yes. I can support, monitor and improve a workflow after launch when the process or connected tools change.'
          }
        ]
      },
      contact: {
        title: 'Get a free workflow audit',
        text: "Tell me about one repetitive process. I'll identify what can be automated and show you a practical next step.",
        trust: [
          { title: 'Free 30-Min Consultation', icon: 'clock' },
          { title: 'Delivery in 2-5 Business Days', icon: 'check' },
          { title: 'Custom AI Workflow Solutions', icon: 'wrench' }
        ],
        technology: 'Built with n8n, Claude and custom integrations where they fit the workflow.',
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
          hint: 'No obligation. I will reply with practical automation ideas for your process.',
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
        'AI automatizacije uz n8n, Claude i custom integracije. Automatizujte fakture, emailove i ponavljajuće poslovne procese.'
    },
    nav: {
      home: 'Početna',
      services: 'Usluge',
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
        eyebrow: 'Automatizacija poslovnih procesa',
        title: 'Automatizujte obradu faktura i repetitivne procese',
        subtitle:
          'Gradim praktične AI workflow-e koji čitaju fakture iz emaila, izvlače važne podatke i šalju ih u Excel ili ERP — dok izuzeci ostaju vidljivi vašem timu.',
        primaryCta: 'Zatražite besplatan audit workflow-a',
        secondaryCta: 'Pogledajte kako funkcioniše',
        note: 'Najkorisnije za timove koji ručno obrađuju PDF-ove, emailove i tabele.',
        outcomes: ['Obrada faktura', 'Email operacije', 'Workflow za dokumenta'],
        proof: [
          { value: '10+', label: 'sati uštede nedeljno' },
          { value: '2–5', label: 'dana do isporuke' },
          { value: 'Besplatno', label: '30-min konsultacije' }
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
        status: 'Spremno za automatizaciju'
      },
      howItWorks: {
        eyebrow: 'Jedan praktičan workflow',
        title: 'Kako funkcioniše',
        subtitle: 'Tipičan tok faktura koji uklanja ručni unos, dok izuzeci ostaju vidljivi.',
        steps: [
          { title: 'PDF fakture stižu emailom', text: 'Nova faktura stiže u inbox koji vaš tim već koristi.' },
          { title: 'AI izvlači važne podatke', text: 'Dobavljač, datum, iznos i stavke se čitaju iz dokumenta.' },
          { title: 'Podaci se upisuju u Excel ili ERP', text: 'Strukturirana polja se automatski šalju u pravi zapis.' },
          { title: 'Fajlovi se arhiviraju i organizuju', text: 'Originalni PDF se čuva uz jasan naziv koji se lako pretražuje.' }
        ]
      },
      services: {
        eyebrow: 'Usluge',
        title: 'Automatizacija za vaše stvarne operacije.',
        subtitle: 'Fokusirani sistemi za procese koje vaš tim ponavlja svakog dana.',
        items: [
          { title: 'AI obrada faktura', text: 'Izvucite podatke iz PDF-ova i automatski ih upišite u Excel ili ERP.', icon: 'document' },
          { title: 'Automatizacija email workflow-a', text: 'Automatski sortirajte, prosleđujte, odgovarajte i arhivirajte emailove.', icon: 'email' },
          { title: 'AI poslovni chatbotovi', text: 'Korisnička podrška 24/7 obučena na znanju vaše kompanije.', icon: 'chatbot' },
          { title: 'Custom workflow automatizacija', text: 'Povežite CRM, ERP, Google Sheets i API-je uz n8n.', icon: 'workflow' }
        ]
      },
      outcomes: {
        eyebrow: 'Poslovni rezultati',
        title: 'Manje administracije. Pouzdanije operacije.',
        subtitle: 'Sistem treba da olakša postojeći proces, a ne da vaš tim tera na potpuno novi način rada.',
        items: [
          { title: 'Manje ručnog rada', text: 'Uklonite ponavljajuće prepisivanje, arhiviranje i predaje iz svakodnevnog posla.' },
          { title: 'Manje ljudskih grešaka', text: 'Ista pravila za izvlačenje i rutiranje primenjuju se svaki put kada stigne dokument.' },
          { title: 'Brža obrada dokumenata', text: 'PDF-ovi i emailovi stižu do pravog sistema dok se tim bavi izuzecima.' },
          { title: 'Radi sa postojećim sistemima', text: 'Povežite inboxe, tabele, CRM-ove i interne alate na koje se već oslanjate.' }
        ]
      },
      cases: {
        eyebrow: 'Primer iz prakse',
        title: 'Workflow koji uklanja nedeljnu administraciju',
        subtitle: 'Praktičan proces za fakture gde AI radi ponavljajuće izvlačenje, a ljudi obrađuju izuzetke.',
        problem: 'Problem',
        solution: 'Rešenje',
        result: 'Rezultat',
        problemItems: ['Stotine PDF faktura', 'Ručni unos podataka', 'Administracija koja oduzima vreme'],
        solutionItems: ['Outlook + AI + n8n', 'Automatsko popunjavanje Excela', 'Organizovana arhiva dokumenata'],
        resultBadge: '10+ sati uštede nedeljno'
      },
      faq: {
        eyebrow: 'FAQ',
        title: 'Pitanja pre početka',
        subtitle: 'Jasni odgovori pre nego što vaš tim promeni proces.',
        items: [
          { question: 'Koliko traje implementacija?', answer: 'Fokusirani workflow se obično isporučuje za 2–5 radnih dana. Veći sistemi se pre početka dele na jasne faze.' },
          { question: 'Da li moram da menjam postojeći softver?', answer: 'Uglavnom ne. Cilj je da se povežu alati koje već koristite i doda samo ono što je workflow-u zaista potrebno.' },
          { question: 'Može li da radi sa Excelom?', answer: 'Da. Excel i Google Sheets su česta odredišta za izvučene podatke, izveštaje i workflow izmene.' },
          { question: 'Da li su moji podaci bezbedni?', answer: 'Svaki workflow se dizajnira prema podacima koje obrađuje. Pristup je ograničen na neophodno, a osetljivi koraci mogu imati ručnu proveru.' },
          { question: 'Da li pružate održavanje?', answer: 'Da. Mogu da podržavam, pratim i unapređujem workflow nakon pokretanja kada se proces ili povezani alati promene.' }
        ]
      },
      contact: {
        title: 'Zatražite besplatan audit workflow-a',
        text: 'Opišite jedan repetitivan proces. Pokazaću šta može da se automatizuje i koji bi bio praktičan sledeći korak.',
        trust: [
          { title: 'Besplatne konsultacije od 30 minuta', icon: 'clock' },
          { title: 'Isporuka za 2-5 radnih dana', icon: 'check' },
          { title: 'Custom AI workflow rešenja', icon: 'wrench' }
        ],
        technology: 'Gradim uz n8n, Claude i custom integracije tamo gde odgovaraju workflow-u.',
        form: {
          name: 'Ime', email: 'Poslovni email', company: 'Kompanija', message: 'Šta želite da automatizujete?',
          namePlaceholder: 'Vaše ime', emailPlaceholder: 'vi@kompanija.com', companyPlaceholder: 'Ime kompanije',
          messagePlaceholder: 'Na primer: fakture stižu emailom i ručno se unose u Excel.',
          submit: 'Započni razgovor', subject: 'Zahtev za konsultacije o automatizaciji',
          hint: 'Bez obaveze. Dobićete praktične ideje za automatizaciju vašeg procesa.',
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
