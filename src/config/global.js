export default {
  global: {
    componenteFormativo:
      'Diagnosticar los residuos y vertimientos generados según normativa vigente',
    descripcionCurso:
      'Se establecen criterios para el aprendizaje integral en el manejo de los vertimientos de acuerdo con lineamientos técnicos y legales a nivel nacional. Teniendo en cuenta las necesidades de los sectores económicos colombianos, el desarrollo tecnológico y la innovación en el diagnóstico para establecer alternativas en el tratamiento de las aguas residuales a partir de la recolección de información primaria, el diseño y planeación para el control del vertimiento.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',

        numero: '1',
        titulo: 'Presentación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',

        numero: '2',
        titulo: 'Introducción vertimientos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',

        numero: '3',
        titulo: 'Bases conceptuales',
      },
      {
        nombreRuta: 'tema4',

        numero: '4',
        titulo:
          'Parámetros físicos, químicos y microbiológicos del agua residual',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',

        numero: '5',
        titulo: 'Normativa en control de vertimientos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',

        numero: '6',
        titulo: 'Infraestructura de recolección de aguas residuales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Requisitos ',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo:
              'Procedimiento general de diseño de los sistemas de recolección y evacuación de aguas residuales y pluviales',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',

        numero: '7',
        titulo: 'Diagramas de proceso para identificación de los vertimientos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',

        numero: '8',
        titulo: 'Características del vertimiento',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',

        numero: '9',
        titulo: 'Aforos para vertimientos.',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema10',

        numero: '10',
        titulo: 'Carga contaminante',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema11',

        numero: '11',
        titulo:
          'Normativa ambiental relacionada con el valor máximo admisible.  ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema12',

        numero: '12',
        titulo: 'Balance hídrico a nivel corporativo.',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema13',

        numero: '13',
        titulo: 'Seguridad y salud en el trabajo en laboratorio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '13.1',
            titulo: 'Las normas generales en laboratorio',
            hash: 't_13_1',
          },
          {
            numero: '13.2',
            titulo: 'Normas hábitos personales',
            hash: 't_13_2',
          },
          {
            numero: '13.3',
            titulo: 'Medidas de protección',
            hash: 't_13_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Norma de Vertimientos.',
      referencia:
        'Eduardoño S.A.S (2015). Norma de Vertimientos. Resolución 631 de 2015',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Hu7dPIDceEk',
    },
    {
      tema: 'Resolución 631',
      referencia:
        'Resolución 631  de 2015. [Ministerio de Ambiente y Desarrollo Sostenible]. Por la cual se establecen los parámetros y los valores límites máximos permisibles en los vertimientos puntuales a cuerpos de aguas superficiales y a los sistemas de alcantarillado público y se dictan otras disposiciones.',
      tipo: 'Norma',
      link: 'http://www.emserchia.gov.co/PDF/Resolucion631.pdf',
    },
    {
      tema: 'Requisitos',
      referencia:
        'Ministerio de Vivienda, Ciudad y Territorio (2016) Reglamento técnico del sector de Agua potable y saneamiento básico – RAS. ',
      tipo: 'Página web',
      link:
        'https://www.minvivienda.gov.co/sites/default/files/documentos/titulo_d.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Aguas crudas',
      significado:
        'Aguas naturales que no han sido tratadas, por lo general provienen de una fuente o cuerpo de agua.',
    },
    {
      termino: 'Aguas residuales municipales',
      significado:
        'Aguas residuales de origen doméstico, comercial e institucional que contiene desechos humanos.(Ministerio de Desarrollo Económico Dirección de Agua Potable y Saneamiento Básico, 2002, p.6).',
    },
    {
      termino: 'Aguas residuales',
      significado:
        'Agua que contiene material disuelto y en suspensión, luego de ser usada por una comunidad o industria. (Ministerio de Desarrollo Económico Dirección de Agua Potable y Saneamiento Básico, 2002, p.6).',
    },
    {
      termino: 'Aguas servidas',
      significado:
        'Aguas de desecho provenientes de lavamanos, tinas de baño, duchas, lavaplatos, y otros artefactos que no descargan materias fecales. Ministerio de Desarrollo (Ministerio de Desarrollo Económico Dirección de Agua Potable y Saneamiento Básico, 2002, p.6).  (Arkiplus. S. f. Aguas servidas).',
    },
    {
      termino: 'Biodegradación',
      significado:
        'Degradación de la materia orgánica por acción de microorganismos sobre el suelo, aire, cuerpos de agua receptores o procesos de tratamiento de aguas residuales. (Ministerio de Desarrollo Económico Dirección de Agua Potable y Saneamiento Básico, 2002, p.6).',
    },
    {
      termino: 'Biopelícula',
      significado:
        'Película biológica adherida a un medio sólido que lleva a cabo la degradación de la materia orgánica. Ministerio de Desarrollo Económico Dirección de Agua Potable y (Ministerio de Desarrollo Económico Dirección de Agua Potable y Saneamiento Básico, 2002, p.6).',
    },
    {
      termino: 'Carga orgánica',
      significado:
        'Producto de la concentración media de DBO por el caudal medio determinado en el mismo sitio; se expresa en kilogramos por día (kg/d). (Ministerio de Desarrollo Económico Dirección de Agua Potable y Saneamiento Básico, 2002, p.6).',
    },
  ],
  referencias: [
    {
      referencia:
        'Alcaldía de Santiago de Cali. (2005).  Identificación de fuentes. ',
      link: 'http://web1.cali.gov.co/descargar.php?idFile=7671',
    },
    {
      referencia:
        'CEU (2018 ). Normas básicas de seguridad y salud en los laboratorios. ',
      link:
        'http://www.uspceu.com/Portals/0/docs/conocenos/normativa-universitaria/Normas-Basicas-de-Seguridad-Labs.pdf',
    },
    {
      referencia:
        'DrCalderonLABS. (s, f). Interpretación del análisis del agua.',
      link:
        'https://es.scribd.com/document/391350379/Delgadillo-2015-Como-Aforar-Pequenas-Fuentes-de-Agua-Por-El-Metodo-Volumetrico#',
    },
    {
      referencia:
        'Delgadillo, O. (2014). ¿Cómo aforar pequeñas fuentes de agua por el método volumétrico?',
      link:
        'https://es.scribd.com/document/391350379/Delgadillo-2015-Como-Aforar-Pequenas-Fuentes-de-Agua-Por-El-Metodo-Volumetrico#',
    },
    {
      referencia: 'EMASESA. (2018). Balance Hídrico-Energético.',
      link: 'https://www.emasesa.com/sostenibilidad/agua-y-energia/',
    },
    {
      referencia:
        'Foros Semana. (2020, 14 agosto). La promesa climática de los colombianos. Semana.com. ',
      link:
        'https://www.semana.com/nacion/articulo/la-promesa-climatica-de-los-colombianos/694633/',
    },
    {
      referencia: 'Educaguía (2005). Diagramas de flujo.',
      link:
        'http://www.educaguia.com/apuntesde/calidad/herramientas-basicas-mejora-calidad-y-evaluacion.pdf',
    },
    {
      referencia: 'Gobierno de Vantabria (2006) El agua: Fabrica de vida.',
      link:
        'https://cima.cantabria.es/documents/5710649/5728986/El+agua.+F%C3%A1brica+de+vida.pdf/752c9839-f221-e635-3d1f-100d27dec673',
    },
    {
      referencia:
        'Instituto de Hidrología, Meteorología y Estudios Ambientales (2007) Demanda Química de Oxígeno por reflujo cerrado y volumetría. ',
      link:
        'http://www.ideam.gov.co/documents/14691/38155/Demanda+Qu%C3%ADmica+de+Ox%C3%ADgeno.pdf/20030922-4f81-4e8f-841c-c124b9ab5adb',
    },
    {
      referencia:
        'Instituto de Hidrología, Meteorología y Estudios Ambientales (2007). Grasas y Aceites en aguas extracción Líquido – Líquido y gravimetría.  ',
      link:
        'http://www.ideam.gov.co/documents/14691/38155/Grasas+y+Aceites+en+agua+por+extracci%C3%B3n+L+-+L+y+gravimetr%C3%ADa.pdf/aad8c4e0-3e09-4ad5-a5a2-22966c6ddad9',
    },
    {
      referencia:
        'Instituto de Hidrología, Meteorología y Estudios Ambientales. (2007). Instructivo para la toma de muestras de aguas residuales.',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2015). Máximos permisibles en la agroindustria. ',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2021/08/resolucion-0883-de-2018.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible.(2018). Decreto 050 de 2018.',
      link:
        'http://es.presidencia.gov.co/normativa/normativa/DECRETO%2050%20DEL%2016%20ENERO%20DE%202018.pdf',
    },
    {
      referencia:
        'Ministerio de ambiente y desarrollo sostenible. (2015). Decreto 1076 de 2015. ',
      link:
        'http://www.parquesnacionales.gov.co/portal/wp-content/uploads/2013/08/Decreto-Unico-Reglamentario-Sector-Ambiental-1076-Mayo-2015.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2015). Resolución 0631 del 2015. ',
      link:
        'https://www.minambiente.gov.co/images/normativa/app/resoluciones/d1-res_631_marz_2015.pdf',
    },
    {
      referencia:
        'Ministerio de Vivienda, Ordenamiento Territorial y Medio Ambiente (1996) Manual de procedimientos analíticos para aguas y efluentes.',
      link:
        'http://imasd.fcien.edu.uy/difusion/educamb/docs/pdfs/manual_dinama.pdf',
    },
    {
      referencia:
        'MMAVDT. (2002). Guía ambiental para la formulación de planes de pretratamiento de efluentes industriales. ',
      link:
        'https://repository.agrosavia.co/bitstream/handle/20.500.12324/18912/43962_55724.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Constitución Política de Colombia. (1991). Derechos Colectivos y del Ambiente. ',
      link:
        'https://www.ramajudicial.gov.co/documents/10228/1547471/CONSTITUCION-Interiores.pdf ',
    },
    {
      referencia:
        'Ministerio de Desarrollo Económico Dirección de Agua Potable y Saneamiento Básico (2002) RAS – 2000. ',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2021/08/resolucion-0883-de-2018.pdf',
    },
    {
      referencia: 'Educaguía (2005). Diagramas causa-efecto.',
      link:
        'http://www.educaguia.com/apuntesde/calidad/herramientas-basicas-mejora-calidad-y-evaluacion.pdf',
    },
    {
      referencia:
        'Educaguía (2005). Herramientas básicas para la mejora de la calidad y su evaluación.',
      link:
        'http://www.educaguia.com/apuntesde/calidad/herramientas-basicas-mejora-calidad-y-evaluacion.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Maria Camila Garcia Santamaria',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: 'Nombre',
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Desarrollo Front-End',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
