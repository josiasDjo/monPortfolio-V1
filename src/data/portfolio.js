export const personal = {
  name: 'Josias Kabambi',
  title: 'Full Stack & Ingénieur Réseau',
  location: 'Goma, Congo DR',
  pitch:
    "Je conçois des applications web performantes et des infrastructures réseau fiables. Du code à la configuration, je transforme les besoins concrets en solutions qui fonctionnent.",
  avatar: '/avatar.png',
  cv: '/cv-josias-kabambi.pdf',
  email: 'josias.kabambi@gmail.com',
  socials: {
    github: 'https://github.com/josiasdjo',
    linkedin: 'https://linkedin.com/in/josias-kabambi',
    twitter: 'https://x.com/josiasdjo',
  },
}

export const about = {
  intro: "Je suis un développeur Full Stack et ingénieur réseau basé à Goma, en République Démocratique du Congo.",
  body: "Mon parcours hybride me permet d'intervenir aussi bien sur le développement d'applications web modernes que sur la configuration d'infrastructures réseau et télécom. J'aime résoudre des problèmes concrets : centraliser la gestion d'une exploitation agricole, sécuriser l'accès distant aux ressources d'une organisation, ou construire une présence digitale efficace.",
}

export const skills = [
  {
    category: 'Développement Web',
    items: ['JavaScript', 'React.js', 'Next.js', 'PHP', 'C#', 'Python', 'Tailwind CSS', 'SQL'],
  },
  {
    category: 'Réseaux & Télécom',
    items: [
      'Configuration VLANs',
      'Routes statiques (RIP, OSPF)',
      'PfSense',
      'OpenVPN',
      'Câblage structuré',
      'Installation sites télécoms',
    ],
  },
  {
    category: 'Support & Administration',
    items: [
      'Administration Active Directory',
      'Gestion de parc informatique',
      'Assistance utilisateurs',
      'Outils collaboratifs',
    ],
  },
]

export const projects = [
  {
    id: 'fertilia',
    title: 'Fertilia',
    subtitle: 'Gestion agricole centralisée',
    description:
      "Application web de gestion agricole permettant aux exploitants de centraliser la gestion de tous leurs champs : parcelles, cultures, interventions et suivi.",
    problem:
      "Les exploitants agricoles manquaient d'un outil unique pour suivre leurs parcelles et leurs interventions, ce qui entraînait des pertes de données et une mauvaise traçabilité.",
    tech: ['React.js', 'Tailwind CSS', 'Express.js', 'MariaDB'],
    image: '/BG-Fertilia.png',
    link: 'https://fertilia.vercel.app/',
    type: 'web',
  },
  {
    id: 'svpn',
    title: 'SVPN',
    subtitle: 'VPN Client-to-Site pour le télétravail',
    description:
      "Solution VPN Client-to-Site conçue pour permettre aux collaborateurs d'accéder aux ressources internes de leur organisation à distance, en toute sécurité.",
    problem:
      "Les employés en télétravail devaient accéder aux ressources internes de l'organisation sans exposer le réseau à des risques de sécurité.",
    tech: ['PfSense', 'OpenVPN', 'MFA'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    link: 'https://github.com/josiasDjo/SOPROP-VPN.git',
    type: 'network',
  },
  {
    id: 'debisol',
    title: 'DEBISOL',
    subtitle: 'Site web & présence digitale',
    description:
      "Conception et développement d'un site web moderne pour DEBISOL, avec une attention particulière portée à la performance et à l'expérience utilisateur.",
    problem:
      "L'entreprise avait besoin d'une présence digitale professionnelle pour présenter ses activités et attirer de nouveaux clients.",
    tech: ['Next.js', 'PHP', 'Tailwind CSS', 'MariaDB', ],
    image: '/BG-DEBISOL.png',
    link: 'https://www.debisol.com/',
    type: 'web',
  },
]

export const navLinks = [
  { label: 'Accueil', href: '#hero' },
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Projets', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]