export type Lang = 'es' | 'en';
export const defaultLang: Lang = 'es';
export const langs: Lang[] = ['es', 'en'];

export function getLangFromUrl(url: URL): Lang {
  const segments = url.pathname.split('/').filter(Boolean);
  if (segments[0] === 'en') return 'en';
  return defaultLang;
}

export function localizedPath(path: string, lang: Lang): string {
  const clean = path.replace(/^\/en/, '') || '/';
  if (lang === defaultLang) return clean;
  return clean === '/' ? '/en/' : `/en${clean}`;
}

export function stripLangPrefix(path: string): string {
  return path.replace(/^\/en/, '') || '/';
}

interface Job {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
}

interface Project {
  name: string;
  period: string;
  summary: string;
  link?: string;
}

interface ContentShape {
  nav: { home: string; portfolio: string; cv: string; contact: string };
  footer: { credit: string };
  switcher: { es: string; en: string; aria: string };
  home: {
    meta: { title: string; description: string };
    kicker: string;
    name: [string, string];
    role: string;
    status: string;
    aboutTitle: string;
    bio: string[];
  };
  portfolio: {
    meta: { title: string; description: string };
    kicker: string;
    headline: [string, string, string];
    lede: string;
    cta: string;
    videosTitle: string;
    projectsTitle: string;
    moreLine: string;
    projects: Project[];
    dateLocale: string;
  };
  cv: {
    meta: { title: string; description: string };
    kicker: string;
    headline: [string, string, string];
    lede: string;
    experienceTitle: string;
    skillsTitle: string;
    experience: Job[];
    skills: string[];
  };
  contact: {
    meta: { title: string; description: string };
    kicker: string;
    headline: [string, string];
    lede: string;
    othersTitle: string;
    channels: { label: string; value: string; href: string }[];
  };
}

export const content: Record<Lang, ContentShape> = {
  es: {
    nav: { home: 'Sobre mí', portfolio: 'Portfolio', cv: 'CV', contact: 'Contacto' },
    footer: { credit: 'Hecho con Astro' },
    switcher: { es: 'ES', en: 'EN', aria: 'Cambiar idioma' },
    home: {
      meta: {
        title: 'Ronny Montano — Odoo Engineer',
        description:
          'Desarrollador de software especializado en Odoo, Python y Flutter. Tutoriales y casos prácticos en YouTube.',
      },
      kicker: 'Hola, soy',
      name: ['Ronny', 'Montano.'],
      role: '<strong>Odoo Engineer</strong> · Python · OWL',
      status: 'Actualmente en <strong>Process Control</strong>',
      aboutTitle: 'Sobre mí',
      bio: [
        'Soy desarrollador de software con amplia experiencia en <strong>Python</strong>, especializado en el desarrollo, personalización e implementación de soluciones empresariales basadas en <strong>Odoo</strong>. Mi pasión por la tecnología y el desarrollo móvil me llevó a profundizar en <strong>Flutter</strong>, lo que me permite crear aplicaciones móviles modernas, escalables y de alto rendimiento.',
        'Me motiva asumir nuevos desafíos que impulsen la transformación digital, siempre con un enfoque en la excelencia técnica, la innovación continua y la entrega de soluciones que generen verdadero impacto en los proyectos.',
        'Además, comparto conocimiento y experiencia en mi canal de YouTube <a class="link-fancy" href="https://www.youtube.com/@ronny-montano" target="_blank" rel="noopener noreferrer">@ronny-montano</a>, donde publico tutoriales, casos prácticos y tips para desarrolladores interesados en Odoo, Flutter y más.',
      ],
    },
    portfolio: {
      meta: {
        title: 'Portfolio — Ronny Montano',
        description: 'Canal de YouTube, videos recientes y proyectos destacados de Ronny Montano.',
      },
      kicker: 'Portfolio',
      headline: ['Comparto lo que aprendo', 'en YouTube', '.'],
      lede: 'Tutoriales, casos prácticos y deep-dives técnicos sobre Odoo, OWL, Flutter y Python. Nuevo video cada pocos días.',
      cta: 'Suscribirse al canal',
      videosTitle: 'Últimos videos',
      projectsTitle: 'Proyectos seleccionados',
      moreLine: 'También público código en',
      dateLocale: 'es-ES',
      projects: [
        {
          name: 'Ok Located',
          period: 'Mar. 2022 — Sept. 2022',
          summary:
            'Plataforma tecnológica móvil basada en Bluetooth que ofrece soluciones y servicios gratuitos a través de pequeños dispositivos inteligentes (beacons).',
          link: 'https://apps.apple.com/mx/app/ok-located/id1114782805',
        },
      ],
    },
    cv: {
      meta: {
        title: 'CV — Ronny Montano',
        description: 'Experiencia profesional y habilidades de Ronny Montano.',
      },
      kicker: 'CV',
      headline: ['8+ años construyendo', 'soluciones empresariales', '.'],
      lede: 'Desde Cuba hasta España, pasando por México — desarrollo de ERP, móvil y backend.',
      experienceTitle: 'Experiencia',
      skillsTitle: 'Habilidades',
      experience: [
        {
          role: 'Odoo Engineer | Python · OWL',
          company: 'Process Control',
          period: 'Sept. 2024 — Actualidad',
          location: 'España',
          bullets: [
            'Desarrollo y personalización de soluciones empresariales en Odoo.',
            'Trabajo con Python y el framework OWL para extender funcionalidad del ERP.',
          ],
        },
        {
          role: 'Desarrollador de software',
          company: 'Binhex',
          period: 'Feb. 2024 — Sept. 2024',
          location: 'Remoto',
          bullets: [
            'Desarrollo de módulos y personalizaciones sobre Odoo.',
            'Implementación de componentes front-end con OWL.',
          ],
        },
        {
          role: 'Odoo developer',
          company: 'Grupo Empresarial JUMO',
          period: 'Oct. 2022 — Ene. 2024',
          location: 'México · Remoto',
          bullets: [
            'Desarrollo de soluciones Odoo y APIs con Django REST framework.',
            'Trabajo con Dart/Flutter para aplicaciones móviles asociadas al ERP.',
          ],
        },
        {
          role: 'Desarrollador de software',
          company: 'Desoft',
          period: 'Oct. 2017 — Sept. 2022',
          location: 'La Habana, Cuba',
          bullets: [
            'Desarrollo backend con Django REST framework y frontend con Dart.',
            'Participación en proyectos empresariales de gestión.',
          ],
        },
        {
          role: 'Desarrollador de software para web',
          company: 'Universidad de las Ciencias Informáticas',
          period: 'Sept. 2016 — Oct. 2017',
          location: 'La Habana, Cuba',
          bullets: ['Desarrollo web con Django y Python.'],
        },
      ],
      skills: [
        'Odoo',
        'Python',
        'OWL',
        'Django',
        'Django REST framework',
        'Flutter',
        'Dart',
        'PostgreSQL',
        'JavaScript',
      ],
    },
    contact: {
      meta: {
        title: 'Contacto — Ronny Montano',
        description: 'Formas de contactar con Ronny Montano.',
      },
      kicker: 'Contacto',
      headline: ['Hablemos.', 'Sin compromisos.'],
      lede: 'Sobre Odoo, Flutter, una colaboración o cualquier tema técnico — escríbeme por donde te resulte más cómodo.',
      othersTitle: 'Otros canales',
      channels: [
        { label: 'Email', value: 'rmontano1992@gmail.com', href: 'mailto:rrmontano1992@gmail.com' },
        { label: 'LinkedIn', value: 'linkedin.com/in/ronny-montano', href: 'https://www.linkedin.com/in/ronny-montano/' },
        { label: 'YouTube', value: '@ronny-montano', href: 'https://www.youtube.com/@ronny-montano' },
        { label: 'GitHub', value: '@ronny-montano', href: 'https://github.com/ronny-montano' },
      ],
    },
  },
  en: {
    nav: { home: 'About', portfolio: 'Portfolio', cv: 'CV', contact: 'Contact' },
    footer: { credit: 'Built with Astro' },
    switcher: { es: 'ES', en: 'EN', aria: 'Switch language' },
    home: {
      meta: {
        title: 'Ronny Montano — Odoo Engineer',
        description:
          'Software developer specializing in Odoo, Python and Flutter. Tutorials and case studies on YouTube.',
      },
      kicker: "Hi, I'm",
      name: ['Ronny', 'Montano.'],
      role: '<strong>Odoo Engineer</strong> · Python · OWL',
      status: 'Currently at <strong>Process Control</strong>',
      aboutTitle: 'About me',
      bio: [
        "I'm a software developer with extensive experience in <strong>Python</strong>, specializing in the development, customization and implementation of enterprise solutions based on <strong>Odoo</strong>. My passion for technology and mobile development led me to dive deep into <strong>Flutter</strong>, allowing me to build modern, scalable and high-performance mobile applications.",
        'I love taking on new challenges that drive digital transformation, always with a focus on technical excellence, continuous innovation and delivering solutions that have real impact on the projects I work on.',
        'I also share what I learn on my YouTube channel <a class="link-fancy" href="https://www.youtube.com/@ronny-montano" target="_blank" rel="noopener noreferrer">@ronny-montano</a>, where I post tutorials, case studies and tips for developers interested in Odoo, Flutter and more.',
      ],
    },
    portfolio: {
      meta: {
        title: 'Portfolio — Ronny Montano',
        description: "YouTube channel, latest videos and selected projects by Ronny Montano.",
      },
      kicker: 'Portfolio',
      headline: ['I share what I learn', 'on YouTube', '.'],
      lede: 'Tutorials, case studies and technical deep-dives about Odoo, OWL, Flutter and Python. New video every few days.',
      cta: 'Subscribe to the channel',
      videosTitle: 'Latest videos',
      projectsTitle: 'Selected projects',
      moreLine: 'I also publish code on',
      dateLocale: 'en-US',
      projects: [
        {
          name: 'Ok Located',
          period: 'Mar 2022 — Sep 2022',
          summary:
            'Mobile technology platform based on Bluetooth that delivers free solutions and services through small smart devices (beacons).',
          link: 'https://apps.apple.com/mx/app/ok-located/id1114782805',
        },
      ],
    },
    cv: {
      meta: {
        title: 'CV — Ronny Montano',
        description: 'Professional experience and skills of Ronny Montano.',
      },
      kicker: 'CV',
      headline: ['8+ years building', 'enterprise solutions', '.'],
      lede: 'From Cuba to Spain, by way of Mexico — building ERP, mobile and backend systems.',
      experienceTitle: 'Experience',
      skillsTitle: 'Skills',
      experience: [
        {
          role: 'Odoo Engineer | Python · OWL',
          company: 'Process Control',
          period: 'Sep 2024 — Present',
          location: 'Spain',
          bullets: [
            'Development and customization of enterprise solutions on Odoo.',
            'Using Python and the OWL framework to extend ERP functionality.',
          ],
        },
        {
          role: 'Software Developer',
          company: 'Binhex',
          period: 'Feb 2024 — Sep 2024',
          location: 'Remote',
          bullets: [
            'Development of modules and customizations on Odoo.',
            'Implementation of front-end components with OWL.',
          ],
        },
        {
          role: 'Odoo Developer',
          company: 'Grupo Empresarial JUMO',
          period: 'Oct 2022 — Jan 2024',
          location: 'Mexico · Remote',
          bullets: [
            'Development of Odoo solutions and APIs with Django REST framework.',
            'Work with Dart/Flutter for mobile applications connected to the ERP.',
          ],
        },
        {
          role: 'Software Developer',
          company: 'Desoft',
          period: 'Oct 2017 — Sep 2022',
          location: 'Havana, Cuba',
          bullets: [
            'Backend development with Django REST framework and frontend with Dart.',
            'Contributed to enterprise management projects.',
          ],
        },
        {
          role: 'Web Software Developer',
          company: 'Universidad de las Ciencias Informáticas',
          period: 'Sep 2016 — Oct 2017',
          location: 'Havana, Cuba',
          bullets: ['Web development with Django and Python.'],
        },
      ],
      skills: [
        'Odoo',
        'Python',
        'OWL',
        'Django',
        'Django REST framework',
        'Flutter',
        'Dart',
        'PostgreSQL',
        'JavaScript',
      ],
    },
    contact: {
      meta: {
        title: 'Contact — Ronny Montano',
        description: 'Ways to get in touch with Ronny Montano.',
      },
      kicker: 'Contact',
      headline: ["Let's talk.", 'No strings attached.'],
      lede: 'About Odoo, Flutter, a collaboration or any technical topic — reach out wherever feels easiest.',
      othersTitle: 'Other channels',
      channels: [
        { label: 'Email', value: 'rmontano1992@gmail.com', href: 'mailto:rrmontano1992@gmail.com' },
        { label: 'LinkedIn', value: 'linkedin.com/in/ronny-montano', href: 'https://www.linkedin.com/in/ronny-montano/' },
        { label: 'YouTube', value: '@ronny-montano', href: 'https://www.youtube.com/@ronny-montano' },
        { label: 'GitHub', value: '@ronny-montano', href: 'https://github.com/ronny-montano' },
      ],
    },
  },
};
