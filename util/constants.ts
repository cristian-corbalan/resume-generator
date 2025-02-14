import { ResumeData } from '@/util/resume';

export const resumeDataEmptyValue = {
  name: '',
  title: '',
  country: '',
  phone: '',
  email: '',
  website: '',
  resume: '',
  workExperience: [],
  education: [],
  skills: [],
  languages: [],
};

export const fakeResumeData: ResumeData = {
  name: 'John Doe',
  title: 'Desarrollador de Software Senior',
  country: 'España',
  phone: '+34 666 555 444',
  email: 'john.doe@example.com',
  website: 'www.johndoeportfolio.com',
  resume:
    'Un desarrollador de software senior altamente motivado y orientado a resultados con más de 10 años de experiencia en el desarrollo de aplicaciones web y móviles. Apasionado por la tecnología y siempre buscando aprender nuevas habilidades y afrontar nuevos desafíos.',
  workExperience: [
    {
      role: 'Desarrollador Principal de Frontend',
      company: 'Tech Solutions S.L.',
      location: 'Barcelona',
      startDate: new Date(2018, 0, 1),
      endDate: 'present',
      responsibilities:
        'Lideré el desarrollo del frontend para nuestra aplicación web principal utilizando React y Next.js.  Implementé nuevas funcionalidades, optimicé el rendimiento y mentoré a desarrolladores junior del equipo.  Colaboré estrechamente con el equipo de backend y diseño UX/UI para asegurar una experiencia de usuario excepcional.',
    },
    {
      role: 'Desarrollador de Software Frontend',
      company: 'Innovative Apps Inc.',
      location: 'Madrid',
      startDate: new Date(2015, 6, 15),
      endDate: new Date(2017, 11, 31),
      responsibilities:
        'Desarrollé y mantuve componentes de interfaz de usuario reutilizables utilizando AngularJS.  Trabajé en la integración con APIs RESTful y en la creación de pruebas unitarias y de integración.  Participé en la planificación y el diseño de nuevas funcionalidades de la aplicación.',
    },
    {
      role: 'Desarrollador Web Junior',
      company: 'StartUp Web Services',
      location: 'Valencia',
      startDate: new Date(2013, 2, 1),
      endDate: new Date(2015, 5, 30),
      responsibilities:
        'Desarrollé páginas web estáticas y dinámicas utilizando HTML, CSS, JavaScript y jQuery.  Colaboré en el desarrollo de un sistema de gestión de contenidos (CMS) personalizado.  Aprendí las bases del desarrollo frontend y trabajé en un entorno de equipo ágil.',
    },
  ],
  education: [
    {
      degree: 'Máster en Ingeniería de Software',
      location: 'Madrid',
      school: 'Universidad Politécnica de Madrid',
      startDate: new Date(2012, 8, 1),
      endDate: new Date(2013, 11, 15),
    },
    {
      degree: 'Grado en Informática',
      location: 'Valencia',
      school: 'Universidad de Valencia',
      startDate: new Date(2009, 8, 1),
      endDate: new Date(2012, 5, 30),
    },
  ],
  skills: [
    'JavaScript (ES6+)',
    'React',
    'Next.js',
    'HTML5',
    'CSS3',
    'Git',
    'Testing (Jest, Cypress)',
    'Desarrollo Responsivo',
    'Performance Optimization',
    'AngularJS',
  ],
  languages: [
    {
      name: 'Español',
      level: 'Nativo',
    },
    {
      name: 'Inglés',
      level: 'Profesional Completo',
    },
    {
      name: 'Francés',
      level: 'Básico',
    },
  ],
};
