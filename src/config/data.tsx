import { LucideIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

export interface SubEntry {
  company: string;
  period: string;
  bullets: string[];
}

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  periodShort: string;
  current: boolean;
  highlights: string[];
  bullets?: string[];
  subEntries?: SubEntry[];
}

export interface EducationItem {
  degree: string;
  degreeShort: string;
  school: string;
  period: string;
  periodShort: string;
}

export type ResumeLocale = {
  personal: {
    firstName: string;
    lastName: string;
    photo: string;
  };
  contact: {
    phone: { display: string; href: string; icon: LucideIcon };
    email: { display: string; href: string; icon: LucideIcon };
    address: { full: string; city: string; icon: LucideIcon };
  };
  experience: ExperienceItem[];
  education: EducationItem[];
};

const baseLocale = {
  personal: {
    firstName: "Nicolas",
    lastName: "Thouvenin",
    photo: "/Thouvenin Nicolas.png",
  },
  contact: {
    phone: {
      display: "+33 (0)6 62 24 96 58",
      href: "tel:+33662249658",
      icon: PhoneIcon,
    },
    email: {
      display: "contact@nicolas-thouvenin.dev",
      href: "mailto:contact@nicolas-thouvenin.dev",
      icon: MailIcon,
    },
    address: {
      full: "54 Rue des Alpins, 74000 Annecy, France",
      city: "Annecy, France",
      icon: MapPinIcon,
    },
  },
};

export const fr = {
  ...baseLocale,

  experience: [
    {
      title: "Freelance Ingénieur Consultant IT",
      company: "THOUVENIN Nicolas EI",
      period: "Depuis 10.2024",
      periodShort: "Depuis oct. 2024",
      current: true,
      highlights: [
        "Application de cotation comparative d'offres énergétiques avec calculs automatisés Gaz/Élec et génération PDF (COGEM Energies)",
        "Intégrations API : CRE, ENEDIS, GRDF, CRM, INSEE — authentification Google avec gestion des rôles utilisateurs",
        "Évaluation du processus SI et migration cloud sécurisée pour un cabinet d'avocats (MB Avocats, 2025)",
      ],
      subEntries: [
        {
          company: "COGEM Energies",
          period: "Depuis 11.2024 (Missions ponctuelles)",
          bullets: [
            "Création d'une application interne de cotation comparative entre offres énergétiques par fournisseurs pour les priceurs",
            "Calculs automatisés des prix Gaz et Elec HT et TTC",
            "Génération de comparatifs PDF personnalisés pour les clients finaux",
            "Génération de factures SPECIMEN pour les commerciaux",
            "Gestion de constantes globales et par fournisseur pour les calculs de prix basés sur les normes réglementaires françaises",
            "Connexion API à la CRE pour la récupération des données tarifaires",
            "Benchmark Optimisation du TURPE",
            "Proof of Concept connexion API ENEDIS et GRDF",
            "Connexion API au CRM actuel pour récupération des données clients et intégration des documents générés dans les fiches clients",
            "Connexion à l'API de l'INSEE pour l'autocomplétion des adresses clients",
            "Système d'authentification avec Google et gestion des rôles pour les utilisateurs internes",
          ],
        },
        {
          company: "MB Avocats",
          period: "07.2025 (Mission de 2 semaines)",
          bullets: [
            "Évaluation et réagencement du processus SI de gestion des documents juridiques et des mails.",
            "Migration de l'infrastructure d'hébergement des documents internes vers une solution cloud plus moderne et sécurisée.",
          ],
        },
      ],
    },
    {
      title: "Business Developer Innovation et Numérique",
      company: "COGEM Eni ESP | EPF ENR",
      period: "09.2023 – 09.2024",
      periodShort: "sept. 2023 – sept. 2024",
      current: false,
      highlights: [
        "Application de calcul de rentabilité pour installations Photovoltaïques et Pompes à Chaleur, utilisée en direct avec les clients",
        "Génération automatique de rapports PDF commerciaux",
        "PoC : visualisation 3D des installations via les données géospatiales Google Maps",
      ],
      bullets: [
        "Création d'une application de calcul de rentabilité énergétique et financière pour les projets d'installation de système Photovoltaïque et Pompes à Chaleur pour les commerciaux terrain en direct avec les clients",
        "Automatisation de la génération de rapports PDF pour les clients à partir des données d'entrée et des résultats de calculs.",
        "Proof of Concept d'un Système de visualisation 3D des installations sur les toits des clients grâce aux données géospatiales de Google Maps.",
      ],
    },
    {
      title: "Ingénieur Développeur Web Full Stack",
      company: "IzyCardio | Cardioparc",
      period: "09.2020 – 09.2023",
      periodShort: "sept. 2020 – sept. 2023",
      current: false,
      highlights: [
        "Refonte complète de l'application de gestion des patients pour professionnels de santé",
        "Modules développés : dossiers patients, rendez-vous, prescriptions médicales, comptes-rendus de consultation",
      ],
      bullets: [
        "Refonte complète de l'application web interne de gestion des patients pour les professionnels de santé et tout le personnel médical.",
        "Fonctionnalités développées : gestion des dossiers patients, prise de rendez-vous, prescriptions médicales, comptes-rendus de consultation.",
      ],
    },
  ],

  education: [
    {
      degree: "Master Entrepreneuriat et Management de l'Innovation",
      degreeShort: "Master Entrepreneuriat & Management de l'Innovation",
      school: "EMLyon Business School",
      period: "09.2023 – 09.2024",
      periodShort: "2023 – 2024",
    },
    {
      degree: "Diplôme d'Ingénieur en Informatique et Réseaux de Communication",
      degreeShort: "Diplôme d'Ingénieur — Informatique & Réseaux",
      school: "CPE Lyon",
      period: "09.2020 – 09.2023",
      periodShort: "2020 – 2023",
    },
    {
      degree: "DUT Informatique",
      degreeShort: "DUT Informatique",
      school: "IUT Savoie Mont-Blanc",
      period: "09.2017 – 09.2020",
      periodShort: "2017 – 2020",
    },
  ],
} satisfies ResumeLocale;

export const en = {
  ...baseLocale,

  experience: [
    {
      title: "Freelance IT Consultant Engineer",
      company: "THOUVENIN Nicolas EI",
      period: "Since 10/2024",
      periodShort: "Since Oct. 2024",
      current: true,
      highlights: [
        "Comparative energy offer quoting app with automated Gas/Electricity calculations and PDF generation (COGEM Energies)",
        "API integrations: CRE, ENEDIS, GRDF, CRM, INSEE — Google authentication with user role management",
        "IS process evaluation and secure cloud migration for a law firm (MB Avocats, 2025)",
      ],
      subEntries: [
        {
          company: "COGEM Energies",
          period: "Since 11/2024 (Ad-hoc missions)",
          bullets: [
            "Development of an internal comparative quoting application for energy offers by supplier, for pricing teams",
            "Automated Gas and Electricity price calculations (pre-tax and VAT-inclusive)",
            "Generation of personalised PDF comparisons for end clients",
            "Generation of specimen invoices for sales representatives",
            "Management of global and per-supplier constants for price calculations based on French regulatory standards",
            "API connection to the CRE for tariff data retrieval",
            "TURPE optimisation benchmark",
            "Proof of Concept for ENEDIS and GRDF API connection",
            "API connection to the current CRM for customer data retrieval and integration of generated documents into client records",
            "Connection to the INSEE API for client address autocomplete",
            "Google authentication system with role-based access management for internal users",
          ],
        },
        {
          company: "MB Avocats",
          period: "07/2025 (2-week mission)",
          bullets: [
            "Evaluation and reorganisation of the IS process for managing legal documents and emails.",
            "Migration of internal document hosting infrastructure to a more modern and secure cloud solution.",
          ],
        },
      ],
    },
    {
      title: "Innovation & Digital Business Developer",
      company: "COGEM Eni ESP | EPF ENR",
      period: "09/2023 – 09/2024",
      periodShort: "Sept. 2023 – Sept. 2024",
      current: false,
      highlights: [
        "Profitability calculator app for Photovoltaic and Heat Pump installations, used live with clients",
        "Automated generation of commercial PDF reports",
        "PoC: 3D visualisation of rooftop installations using Google Maps geospatial data",
      ],
      bullets: [
        "Development of an energy and financial profitability calculator for Photovoltaic system and Heat Pump installation projects, used by field sales representatives directly with clients",
        "Automated generation of PDF reports for clients based on input data and calculation results.",
        "Proof of Concept for a 3D visualisation system of rooftop installations using Google Maps geospatial data.",
      ],
    },
    {
      title: "Full Stack Web Developer Engineer",
      company: "IzyCardio | Cardioparc",
      period: "09/2020 – 09/2023",
      periodShort: "Sept. 2020 – Sept. 2023",
      current: false,
      highlights: [
        "Complete redesign of the patient management app for healthcare professionals",
        "Features built: patient records, appointment scheduling, medical prescriptions, consultation reports",
      ],
      bullets: [
        "Complete redesign of the internal patient management web application for healthcare professionals and all medical staff.",
        "Features developed: patient record management, appointment scheduling, medical prescriptions, consultation reports.",
      ],
    },
  ],

  education: [
    {
      degree: "Master's in Entrepreneurship & Innovation Management",
      degreeShort: "Master's — Entrepreneurship & Innovation",
      school: "EMLyon Business School",
      period: "09/2023 – 09/2024",
      periodShort: "2023 – 2024",
    },
    {
      degree: "Engineering Degree in Computer Science & Communication Networks",
      degreeShort: "Engineering Degree — Computer Science & Networks",
      school: "CPE Lyon",
      period: "09/2020 – 09/2023",
      periodShort: "2020 – 2023",
    },
    {
      degree: "Two-Year Technology Degree in Computer Science (DUT)",
      degreeShort: "Technology Degree — Computer Science",
      school: "IUT Savoie Mont-Blanc",
      period: "09/2017 – 09/2020",
      periodShort: "2017 – 2020",
    },
  ],
} satisfies ResumeLocale;
