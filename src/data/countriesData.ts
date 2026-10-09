import colombiaRealMap from '../assets/images/colombia_real_map_1791527847030.jpg';
import costaRicaRealMap from '../assets/images/costa_rica_real_map_1791527865347.jpg';
import panamaRealMap from '../assets/images/panama_real_map_1791527883981.jpg';
import brasilRealMap from '../assets/images/brasil_real_map_1791527898585.jpg';
import turquiaRealMap from '../assets/images/turquia_real_map_1791527919957.jpg';

export interface RegionMarker {
  id: string;
  name: string;
  altName?: string;
  x: number; // percentage coordinates 0-100 on the SVG map
  y: number; // percentage coordinates 0-100 on the SVG map
  altitude?: string;
  soilOrClimate?: string;
  profile: string;
  description: string;
  culturalNote?: string;
}

export interface CoffeeBrand {
  id: string;
  name: string;
  highlighted?: boolean;
  location: string;
  founded?: string;
  logoText?: string;
  tagline: string;
  description: string;
  varieties?: string[];
  sensoryNotes: string[];
  officialUrl?: string;
  image: string;
  farmExperience?: string;
}

export interface CoffeeTour {
  id: string;
  title: string;
  location: string;
  duration: string;
  operator: string;
  type: string;
  description: string;
  highlights: string[];
  image: string;
  infoUrl?: string;
}

export interface BaristaExperience {
  id: string;
  title: string;
  category: 'barismo' | 'metodos' | 'catacion' | 'tueste' | 'cultura';
  duration: string;
  level: string;
  description: string;
  keyLearnings: string[];
  image: string;
}

export interface TastingExperience {
  id: string;
  title: string;
  format: 'presencial' | 'sensorial' | 'comparativa';
  description: string;
  sensoryWheel: {
    aroma: string;
    acidity: string;
    body: string;
    sweetness: string;
    finish: string;
  };
  sampleProfiles: {
    name: string;
    process: string;
    notes: string;
  }[];
}

export interface CountryData {
  slug: 'colombia' | 'costa-rica' | 'panama' | 'brasil' | 'turquia';
  name: string;
  nameEn: string;
  nameFr: string;
  editorialKicker: string;
  conceptSubtitle: string;
  narrativeLead: string;
  narrativeBody: string[];
  heroImage: string;
  realMapImage: string;
  cultureImage: string;
  tastingImage: string;
  altitudeRange?: string;
  annualProductionNote?: string;
  keyHarvestSeason?: string;
  isOriginProducer: boolean; // false for Turkey
  accentColor: string;
  mapSvgPath: string; // Real silhouette path
  viewBox: string;
  regions: RegionMarker[];
  brands: CoffeeBrand[];
  tours: CoffeeTour[];
  baristaClasses: BaristaExperience[];
  tastings: TastingExperience[];
}

export const COUNTRIES_DATA: Record<string, CountryData> = {
  'colombia': {
    slug: 'colombia',
    name: 'Colombia',
    nameEn: 'Colombia',
    nameFr: 'Colombie',
    editorialKicker: 'La Cuna de la Suavidad Andina',
    conceptSubtitle: 'Descubre Colombia, una taza a la vez.',
    narrativeLead: 'Entre las tres ramificaciones de la cordillera de los Andes, Colombia cultiva el café arábica lavado más célebre del planeta, donde cada microclima forja un carácter irrepetible.',
    narrativeBody: [
      'La geografía colombiana es un prodigio de la naturaleza cafetera: cumbres volcánicas, dos océanos y valles profundos crean un abanico térmico donde la cosecha se extiende durante todo el año.',
      'Generaciones de caficultores en pequeñas fincas familiares han perfeccionado la recolección manual grano a grano, seleccionando únicamente cerezas en su punto culminante de maduración.',
      'El resultado es una taza de balance supremo: aromas florales inconfundibles, acidez cítrica viva y notas acarameladas que han conquistado a los paladares más exigentes del mundo.'
    ],
    heroImage: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1920&q=85',
    realMapImage: colombiaRealMap,
    cultureImage: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
    tastingImage: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
    altitudeRange: '1.200 - 2.200 msnm',
    annualProductionNote: 'Tercer productor mundial · Líder global en Arábica Suave Lavado',
    keyHarvestSeason: 'Septiembre - Diciembre (Cosecha principal) · Abril - Junio (Mitaca)',
    isOriginProducer: true,
    accentColor: '#E85D04',
    viewBox: '0 0 100 100',
    // Realistic SVG silhouette of Colombia
    mapSvgPath: 'M 19.1 64.1 L 18.1 63.1 L 19.0 62.1 L 20.5 62.3 L 19.8 60.1 L 20.4 58.9 L 21.6 57.7 L 22.8 58.6 L 23.0 57.7 L 24.7 58.0 L 24.4 57.1 L 25.5 56.2 L 24.9 56.0 L 26.3 54.0 L 27.0 54.2 L 27.0 53.0 L 28.5 51.1 L 27.4 51.4 L 27.1 50.8 L 27.7 50.3 L 27.3 50.0 L 26.9 51.0 L 26.4 50.5 L 26.5 49.7 L 27.5 49.2 L 26.7 48.8 L 27.0 46.6 L 27.4 46.9 L 26.7 43.2 L 25.8 42.7 L 27.4 41.5 L 26.2 39.1 L 26.9 37.1 L 25.1 35.6 L 25.2 34.7 L 24.0 33.6 L 24.7 31.1 L 25.7 32.0 L 27.9 29.9 L 26.1 27.0 L 26.4 26.2 L 26.9 26.0 L 29.0 28.9 L 29.6 28.8 L 29.2 29.9 L 30.0 29.9 L 29.9 27.3 L 29.0 26.7 L 32.3 24.5 L 34.3 21.9 L 36.0 21.9 L 36.2 21.0 L 35.5 20.6 L 36.4 17.7 L 35.5 18.3 L 36.5 17.3 L 36.5 16.0 L 37.8 14.8 L 40.0 13.2 L 42.9 13.8 L 41.3 14.4 L 42.4 15.1 L 43.7 11.9 L 48.2 12.2 L 51.1 10.0 L 53.6 9.1 L 54.3 7.1 L 55.3 7.6 L 55.7 7.1 L 55.2 7.0 L 56.7 6.0 L 58.9 6.7 L 59.5 8.4 L 55.0 10.3 L 53.6 12.9 L 52.4 13.1 L 51.4 14.5 L 50.2 16.7 L 49.8 20.0 L 47.7 23.4 L 49.7 22.7 L 50.0 23.7 L 50.8 23.7 L 51.4 26.1 L 52.9 27.7 L 53.2 29.0 L 52.4 29.9 L 52.5 32.3 L 53.9 32.8 L 55.0 34.7 L 59.3 35.0 L 61.8 34.3 L 64.8 35.0 L 68.4 39.4 L 69.5 39.6 L 70.4 38.9 L 72.7 39.4 L 76.9 38.4 L 78.9 39.0 L 79.0 40.2 L 78.0 41.2 L 78.0 42.5 L 76.9 43.6 L 76.7 47.8 L 77.9 51.9 L 79.6 53.9 L 76.8 57.0 L 78.0 56.9 L 80.3 59.1 L 81.9 64.6 L 81.9 65.2 L 80.8 65.5 L 80.6 62.7 L 79.0 60.4 L 76.4 62.5 L 75.0 61.1 L 74.5 62.0 L 75.1 62.6 L 66.2 62.7 L 66.3 66.1 L 69.2 66.2 L 70.0 68.3 L 68.2 67.8 L 65.2 68.6 L 65.1 72.5 L 67.5 74.4 L 68.6 77.9 L 65.7 94.0 L 63.9 91.9 L 61.6 91.6 L 65.2 86.0 L 64.9 85.5 L 62.1 84.6 L 60.7 83.3 L 58.0 84.2 L 56.3 82.9 L 54.1 84.4 L 51.6 84.0 L 50.1 84.5 L 48.7 83.3 L 49.1 82.6 L 48.7 81.1 L 46.9 80.5 L 47.1 79.5 L 46.4 78.3 L 43.1 76.8 L 42.3 74.5 L 40.3 73.3 L 40.1 72.6 L 35.1 71.2 L 32.4 69.3 L 31.0 70.5 L 26.6 69.6 L 26.3 68.3 L 25.0 67.2 L 22.8 66.8 L 19.1 64.1 Z',
    regions: [
      {
        id: 'huila',
        name: 'Huila',
        altName: 'Valle de Laboyos & San Agustín',
        x: 37.6,
        y: 56.4,
        altitude: '1.400 - 1.950 msnm',
        soilOrClimate: 'Suelos volcánicos del Macizo Colombiano',
        profile: 'Acidez brillante, notas a frutos rojos, caña de azúcar y caramelo sedoso.',
        description: 'La región cafetera más premiada de Colombia en Taza de la Excelencia. Sus vientos templados y suelo volcánico crean un dulzor estructurado inigualable.',
        culturalNote: 'Cuna de tradiciones campesinas arraigadas y cooperativas de caficultores de renombre mundial.'
      },
      {
        id: 'narino',
        name: 'Nariño',
        altName: 'Cañón del Juanambú & Faldas del Galeras',
        x: 27.1,
        y: 64.8,
        altitude: '1.700 - 2.300 msnm',
        soilOrClimate: 'Altitud extrema con radiación ecuatorial protegida en cañones',
        profile: 'Cítrico refinado, notas a jazmín, lima y panela con cuerpo terso.',
        description: 'Por su cercanía al ecuador, el café puede cultivarse a altitudes extremas sin heladas, resultando en una maduración lenta y concentración aromática sin igual.',
        culturalNote: 'Paisajes andinos vertiginosos donde las fincas cuelgan de laderas escarpadas.'
      },
      {
        id: 'eje-cafetero',
        name: 'Eje Cafetero',
        altName: 'Quindío, Caldas & Risaralda',
        x: 35.5,
        y: 48.0,
        altitude: '1.300 - 1.850 msnm',
        soilOrClimate: 'Paisaje Cultural Cafetero declarado Patrimonio Mundial por la UNESCO',
        profile: 'Equilibrio perfecto, notas achocolatadas, nueces tostadas y manzana dulce.',
        description: 'El corazón histórico de la caficultura colombiana. Paisaje de colinas verdes, arquitectura de bahareque y tradición del Jeep Willys tradicional.',
        culturalNote: 'Epicentro del agroturismo y la cultura cafetera emblemática nacional.'
      },
      {
        id: 'sierra-nevada',
        name: 'Sierra Nevada',
        altName: 'Santa Marta & Cesar',
        x: 46.1,
        y: 14.8,
        altitude: '1.000 - 1.700 msnm',
        soilOrClimate: 'Montaña costera más alta del mundo frente al mar Caribe',
        profile: 'Cuerpo cremoso intenso, notas a cacao amargo, almendra y frutos secos.',
        description: 'Cafés de sombra cultivados bajo frondosas copas forestales en armonía con las comunidades indígenas Arhuacas y Koguis.',
        culturalNote: 'Prácticas ancestrales de respeto por el agua y la Madre Tierra (Seynekun).'
      },
      {
        id: 'antioquia',
        name: 'Antioquia',
        altName: 'Jericó, Fredonia & Andes',
        x: 36.6,
        y: 37.4,
        altitude: '1.300 - 1.900 msnm',
        soilOrClimate: 'Relieve quebrado y tradición arriera centenaria',
        profile: 'Aroma dulce a panela, cuerpo medio sedoso y acidez frutal balanceada.',
        description: 'Pioneros en la expansión cafetera del siglo XIX. Pueblos patrimoniales con balcones floridos y haciendas cafetaleras legendarias.',
        culturalNote: 'La tenacidad de los arrieros y el amor por la tierra montañosa.'
      }
    ],
    brands: [
      {
        id: 'catavia-colombia',
        name: 'CATAVIA Selección Maestra',
        highlighted: true,
        location: 'Huila & Nariño, Colombia',
        founded: '2024',
        logoText: 'CATAVIA',
        tagline: 'Café colombiano de especialidad directo de origen a Norteamérica',
        description: 'La experiencia insignia de CATAVIA: microlotes seleccionados a mano en alturas superiores a los 1.700 msnm, tostados bajo pedido y enviados por vía aérea para preservar cada molécula de aroma.',
        varieties: ['Castillo', 'Geisha', 'Caturra Chiroso', 'Bourbon Rosado'],
        sensoryNotes: ['Flor de Azahar', 'Caramelo Artesanal', 'Frutas Rojas', 'Cacao Criollo'],
        officialUrl: '/colombia',
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
        farmExperience: 'Experiencia completa disponible en la tienda oficial de Colombia.'
      }
    ],
    tours: [
      {
        id: 'tour-colombia-eje',
        title: 'Travesía Sensorial del Eje Cafetero',
        location: 'Salento & Valle de Cocora, Quindío',
        duration: '1 Día completo',
        operator: 'Haciendas Patrimoniales de la UNESCO',
        type: 'Finca Vivencial & Paisaje',
        description: 'Recorrido a pie por cafetales bajo sombra, recolección tradicional con canasto, despulpado manual y cata guiada junto al maestro tostador.',
        highlights: ['Palmas de Cera del Quindío', 'Despulpado y Secado al Sol', 'Cata Comparativa de 4 Variedades'],
        image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80',
        infoUrl: '/colombia'
      }
    ],
    baristaClasses: [
      {
        id: 'barismo-colombia',
        title: 'Inmersión en Filtrados Andinos & Chemex',
        category: 'metodos',
        duration: '4 horas',
        level: 'Todos los niveles',
        description: 'Aprende a extraer la complejidad aromática del café colombiano utilizando métodos de goteo manual: V60, Chemex y Aeropress.',
        keyLearnings: ['Ratio agua-café', 'Temperatura y curva de vertido', 'Molienda micrométrica'],
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80'
      }
    ],
    tastings: [
      {
        id: 'catacion-colombia',
        title: 'Cata de Orígenes Andinos: Huila vs. Nariño vs. Sierra Nevada',
        format: 'sensorial',
        description: 'Descubre cómo la altitud y el suelo modifican drásticamente el perfil en taza bajo el protocolo oficial de catación de la SCA.',
        sensoryWheel: {
          aroma: 'Jazmín, miel de caña y chocolate blanco',
          acidity: 'Málica brillante y cítrica de naranja valenciana',
          body: 'Sedoso, envolvente y limpio',
          sweetness: 'Panela pura y azúcar moreno',
          finish: 'Prolongado con recuerdos a frutos secos'
        },
        sampleProfiles: [
          { name: 'Huila San Agustín', process: 'Lavado Tradicional', notes: 'Frutas rojas y caramelo toffee' },
          { name: 'Nariño Alto del Obispo', process: 'Fermentación Prolongada', notes: 'Flor de azahar y lima kaffir' }
        ]
      }
    ]
  },

  'costa-rica': {
    slug: 'costa-rica',
    name: 'Costa Rica',
    nameEn: 'Costa Rica',
    nameFr: 'Costa Rica',
    editorialKicker: 'Santuario del Bosque Nuboso & Micro-Molinos',
    conceptSubtitle: 'Pura vida cultivada entre volcanes y bruma.',
    narrativeLead: 'Costa Rica transformó la caficultura mundial al consagrar exclusivamente la especie Arábica por ley, impulsando una revolución de micro-molinos artesanales y sostenibilidad ecológica sin precedentes.',
    narrativeBody: [
      'En las altas cordilleras de Tilarán y Talamanca, el café convive con reservas biológicas de bosque nuboso. La neblina persistente modera las temperaturas, permitiendo que el grano madure con lentitud y acumule azúcares complejos.',
      'Los productores costarricenses son maestros del procesamiento: fueron pioneros en los métodos "Honey" (miel amarillo, rojo y negro), donde la pulpa parcial del mucílago aporta notas afrutadas y sedosas.',
      'La comunidad cafetera se organiza en torno a cooperativas familiares sostenibles y fincas carbono-neutrales, demostrando que la excelencia sensorial va de la mano con la preservación del planeta.'
    ],
    heroImage: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1920&q=85',
    realMapImage: costaRicaRealMap,
    cultureImage: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=80',
    tastingImage: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=80',
    altitudeRange: '1.000 - 1.950 msnm',
    annualProductionNote: '100% especie Arábica por mandato legal · Referente mundial en procesos Honey',
    keyHarvestSeason: 'Noviembre - Marzo (Pico de recolección en altura)',
    isOriginProducer: true,
    accentColor: '#10B981',
    viewBox: '0 0 100 100',
    // Realistic SVG silhouette of Costa Rica (NW to SE isthmus)
    mapSvgPath: 'M 64.5 15.3 L 65.9 15.6 L 67.5 18.7 L 66.4 17.4 L 66.8 20.4 L 66.0 21.0 L 67.3 20.3 L 67.3 21.0 L 67.7 19.8 L 70.5 27.0 L 77.3 36.6 L 80.4 40.0 L 82.0 39.9 L 85.8 45.8 L 87.6 46.7 L 88.2 48.7 L 92.6 49.9 L 94.0 52.2 L 93.0 51.9 L 92.5 53.6 L 91.7 53.5 L 86.6 50.6 L 85.8 51.6 L 86.6 53.4 L 84.1 54.4 L 84.2 64.8 L 85.2 64.5 L 89.9 68.5 L 85.8 70.9 L 84.6 72.8 L 86.7 77.0 L 86.6 80.5 L 81.3 84.2 L 84.1 86.2 L 85.6 90.1 L 85.3 91.9 L 83.4 87.0 L 78.7 83.1 L 80.2 81.0 L 79.1 79.2 L 80.0 78.3 L 78.3 77.9 L 78.0 76.5 L 78.6 77.6 L 79.4 77.1 L 78.2 76.0 L 76.4 76.3 L 72.7 73.3 L 70.1 74.0 L 72.1 77.3 L 75.2 78.5 L 75.2 82.9 L 72.1 81.4 L 67.7 81.1 L 63.5 77.2 L 64.2 75.1 L 67.7 72.0 L 65.9 72.2 L 67.5 70.5 L 66.6 69.3 L 67.7 69.6 L 66.2 68.7 L 66.9 67.3 L 66.1 65.3 L 58.8 58.6 L 52.0 55.9 L 51.2 54.2 L 42.7 52.7 L 40.6 51.2 L 39.0 49.2 L 40.1 45.8 L 37.7 43.1 L 37.5 40.9 L 34.5 40.9 L 36.1 40.4 L 33.3 39.6 L 28.3 35.5 L 25.6 35.6 L 23.1 32.6 L 24.4 37.3 L 26.6 38.9 L 25.8 39.1 L 31.7 41.4 L 32.9 42.4 L 32.4 44.3 L 34.1 44.5 L 31.7 47.2 L 30.4 46.8 L 30.7 47.9 L 29.0 48.9 L 27.6 51.8 L 22.8 45.1 L 13.4 42.7 L 8.7 33.9 L 8.8 31.8 L 7.9 30.7 L 10.4 28.2 L 9.6 26.5 L 12.4 25.6 L 14.2 23.7 L 13.7 23.0 L 12.4 23.9 L 13.4 22.1 L 12.9 19.0 L 6.0 16.3 L 8.3 15.6 L 7.8 15.1 L 9.4 15.1 L 9.9 16.2 L 10.3 15.3 L 12.1 15.6 L 12.5 14.1 L 11.2 13.1 L 13.3 12.6 L 12.4 11.5 L 15.1 8.1 L 32.4 15.2 L 39.0 11.8 L 45.2 14.9 L 47.4 13.8 L 48.5 15.8 L 51.2 17.3 L 50.7 18.4 L 51.6 19.4 L 56.4 19.2 L 58.8 21.2 L 65.4 18.7 L 64.5 15.3 Z',
    regions: [
      {
        id: 'monteverde',
        name: 'Monteverde',
        altName: 'Cordillera de Tilarán',
        x: 35.3,
        y: 32.1,
        altitude: '1.200 - 1.550 msnm',
        soilOrClimate: 'Bosque nuboso con microclima de bruma constante y biodiversidad protegida',
        profile: 'Acidez brillante de manzana verde, miel de caña, chocolate suave y frutos secos.',
        description: 'Ubicado en la divisoria continental entre el Caribe y el Pacífico. Sus fincas cafetaleras están entrelazadas con corredores biológicos donde anida el quetzal resplandeciente.',
        culturalNote: 'Hogar de Café Monteverde, modelo internacional de cooperativismo campesino y agricultura regenerativa.'
      },
      {
        id: 'tarrazu',
        name: 'Tarrazú',
        altName: 'Valle de los Santos (San Marcos, San Pablo, Santa María)',
        x: 56.1,
        y: 49.3,
        altitude: '1.400 - 1.900 msnm',
        soilOrClimate: 'Valles estrechos de gran altitud rodeados por la Cordillera de Talamanca',
        profile: 'Acidez cítrica vivaz, cuerpo denso, notas a naranja confitada, jazmín y chocolate amargo.',
        description: 'La denominación de origen más famosa de Costa Rica. El café estrictamente duro (SHB) madura con calma en pendientes pronunciadas bañadas por el sol de montaña.',
        culturalNote: 'Cosechado predominantemente con recolección manual selectiva por familias de la zona.'
      },
      {
        id: 'valle-central',
        name: 'Valle Central',
        altName: 'Heredia, Alajuela & San José',
        x: 53.0,
        y: 40.0,
        altitude: '1.000 - 1.400 msnm',
        soilOrClimate: 'Ricos suelos volcánicos nutridos por los volcanes Poás, Barva e Irazú',
        profile: 'Equilibrio clásico, notas a chocolate con leche, frutos rojos y acidez limpia.',
        description: 'La cuna histórica del café costarricense desde finales del siglo XVIII. Clima templado con dos estaciones perfectamente delimitadas: seca y lluviosa.',
        culturalNote: 'Paisajes históricos con molinos hidráulicos coloniales y haciendas centenarias.'
      },
      {
        id: 'valle-occidental',
        name: 'Valle Occidental',
        altName: 'Naranjo, San Ramón & Palmares',
        x: 47.7,
        y: 37.8,
        altitude: '1.000 - 1.650 msnm',
        soilOrClimate: 'Micro-valles volcánicos con mañanas soleadas y tardes frescas',
        profile: 'Dulzura excepcional a durazno, miel, vainilla y notas florales delicadas.',
        description: 'Ganador constante del certamen Taza de la Excelencia. Los productores de esta región lideraron la innovación en micro-beneficios ecológicos.',
        culturalNote: 'Espíritu pionero en procesamiento Honey y fermentaciones anaeróbicas.'
      },
      {
        id: 'brunca',
        name: 'Brunca',
        altName: 'Coto Brus & Pérez Zeledón',
        x: 69.6,
        y: 69.1,
        altitude: '800 - 1.450 msnm',
        soilOrClimate: 'Terrenos exuberantes en el sur del país cercanos al Parque Nacional La Amistad',
        profile: 'Cuerpo medio, notas a caramelo tostado, avellana y sutiles toques herbales.',
        description: 'Región de gran diversidad étnica y biológica donde la caficultura convive con selvas tropicales y comunidades indígenas Boruca y Bribri.',
        culturalNote: 'Tradición de respeto comunitario y coexistencia con la fauna nativa.'
      }
    ],
    brands: [
      {
        id: 'cafe-monteverde',
        name: 'Café Monteverde',
        highlighted: true,
        location: 'Monteverde, Puntarenas, Costa Rica',
        founded: '1989',
        logoText: 'CAFÉ MONTEVERDE',
        tagline: 'Café de Bosque Nuboso y Agricultura Regenerativa',
        description: 'Fundada por un grupo de familias campesinas y educadores en Monteverde, Café Monteverde es un referente global en café de bosque nuboso. Su misión une la producción de cafés de especialidad con la conservación biológica, la educación comunitaria y el comercio justo. Sus fincas integran corredores biológicos donde habitan cientos de especies protegidas.',
        varieties: ['Caturra', 'Catuaí', 'Geisha', 'Villalobos'],
        sensoryNotes: ['Manzana Verde', 'Miel Silvestre', 'Chocolate Suave', 'Caña de Azúcar'],
        officialUrl: 'https://cafedemonteverde.com/',
        image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80',
        farmExperience: 'Ofrecen tours vivenciales y educativos en su finca y laboratorio de cata en Monteverde.'
      },
      {
        id: 'cafe-britt',
        name: 'Café Britt',
        location: 'Heredia, Valle Central, Costa Rica',
        founded: '1985',
        logoText: 'BRITT',
        tagline: 'Pioneros del café gourmet tostado en origen',
        description: 'Café Britt revolucionó el mercado costarricense al decidir tostar el mejor café del país para consumo local e internacional en lugar de exportar únicamente grano verde sin procesar.',
        varieties: ['Tarrazú SHB', 'Tres Ríos', 'Orgánico de Sombra'],
        sensoryNotes: ['Chocolate Oscuro', 'Cítricos Nobles', 'Caramelo Tostado'],
        officialUrl: 'https://www.cafebritt.com/',
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
        farmExperience: 'Finca experimental y teatro de la historia del café en Barva de Heredia.'
      },
      {
        id: 'doka-estate',
        name: 'Hacienda Doka Estate',
        location: 'Sabanilla de Alajuela, Faldas del Volcán Poás',
        founded: '1900',
        logoText: 'DOKA',
        tagline: 'Más de un siglo de tradición familiar cafetera',
        description: 'Finca histórica de la familia Vargas Ruiz en las faldas del Volcán Poás. Su beneficio húmedo, impulsado por una rueda de agua histórica de más de 100 años, sigue en funcionamiento pleno como testimonio vivo de la tradición.',
        varieties: ['Caturra', 'Catuaí', 'Peaberry'],
        sensoryNotes: ['Frutas Amarillas', 'Azúcar Rubio', 'Nuez y Almendra'],
        officialUrl: 'https://dokaestate.com/',
        image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80',
        farmExperience: 'Recorrido por el molino hidráulico centenario y plantaciones de café volcánico.'
      }
    ],
    tours: [
      {
        id: 'monteverde-coffee-tour',
        title: 'Café Monteverde Farm & Cloud Forest Experience',
        location: 'Monteverde, Puntarenas',
        duration: '2.5 Horas',
        operator: 'Café Monteverde Coffee Experience',
        type: 'Finca Sostenible & Conservación',
        description: 'Camina por plantaciones bajo dosel de bosque nuboso, aprende cómo la biodiversidad regenera los suelos, visita el micro-beneficio artesanal y degusta cafés especiales en el laboratorio de cata profesional.',
        highlights: ['Corredores biológicos y fauna nativa', 'Manejo de micro-molino ecológico', 'Cata de lotes Lavado y Honey'],
        image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80',
        infoUrl: 'https://cafedemonteverde.com/'
      },
      {
        id: 'doka-historic-tour',
        title: 'Doka Estate: Molino Hidráulico Histórico & Plantación',
        location: 'Sabanilla de Alajuela (Volcán Poás)',
        duration: '2 Horas',
        operator: 'Hacienda Doka',
        type: 'Historia & Beneficio Tradicional',
        description: 'Descubre el proceso completo del café desde el semillero hasta el tostado, conociendo el molino de agua más antiguo de Costa Rica declarado patrimonio histórico-arquitectónico.',
        highlights: ['Rueda de agua funcional de 1900', 'Patios de secado al sol', 'Degustación de 8 tostados'],
        image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80',
        infoUrl: 'https://dokaestate.com/'
      }
    ],
    baristaClasses: [
      {
        id: 'metodos-chorreador-costa-rica',
        title: 'El Arte del Chorreador y Métodos Filtrados',
        category: 'metodos',
        duration: '3 Horas',
        level: 'Principiante a Intermedio',
        description: 'Descubre la física detrás del tradicional "chorreador" de madera y tela costarricense, y compáralo técnica y sensorialmente contra V60, Kalita Wave y Chemex.',
        keyLearnings: ['Temperatura del agua para tuestes medios', 'Tiempo de contacto y clarificación', 'Limpieza y mantenimiento del filtro de tela'],
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'barismo-honey-process',
        title: 'Calibración de Cafés de Proceso Honey & Anaeróbico',
        category: 'barismo',
        duration: '4 Horas',
        level: 'Intermedio a Avanzado',
        description: 'Taller especializado para baristas sobre cómo calibrar la molienda y el flujo de extracción en cafés con alta carga de azúcares naturales derivados del mucílago.',
        keyLearnings: ['Comportamiento del mucílago en la molienda', 'Control de astringencia y canalización', 'Optimización del dulzor'],
        image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80'
      }
    ],
    tastings: [
      {
        id: 'catacion-monteverde-honey',
        title: 'Trilogía Sensorial de Procesos: Lavado vs. Yellow Honey vs. Black Honey',
        format: 'sensorial',
        description: 'Prueba el mismo varietal cultivado en el mismo suelo pero procesado con tres niveles diferentes de mucílago para entender la alquimia del procesamiento moderno.',
        sensoryWheel: {
          aroma: 'Flores de café, panal de abejas y durazno',
          acidity: 'Málica brillante y refrescante',
          body: 'Almibarado y sedoso',
          sweetness: 'Caña de azúcar y miel pura',
          finish: 'Limpio con notas a frutos secos'
        },
        sampleProfiles: [
          { name: 'Monteverde Washed Reserve', process: 'Lavado Clásico', notes: 'Manzana verde fresca y té de jazmín' },
          { name: 'Tarrazú Black Honey', process: 'Black Honey Lento', notes: 'Higo maduro, ciruela y miel negra' }
        ]
      }
    ]
  },

  'panama': {
    slug: 'panama',
    name: 'Panamá',
    nameEn: 'Panama',
    nameFr: 'Panama',
    editorialKicker: 'La Meca Mundial del Geisha & Tierras Altas',
    conceptSubtitle: 'El aroma floral más codiciado del planeta.',
    narrativeLead: 'En las laderas empinadas del Volcán Barú en Boquete, Panamá produce los cafés más galardonados y cotizados de las subastas internacionales, con perfiles florales comparados a los mejores perfumes.',
    narrativeBody: [
      'El microclima de Boquete es legendario: el viento del Caribe choca con las cumbres volcánicas generando el "bajareque", una lluvia fina como rocío que nutre los cafetos mientras el suelo volcánico aporta minerales prodigiosos.',
      'En 2004, la familia Peterson de Hacienda La Esmeralda descubrió el potencial sobrenatural del varietal Geisha. Desde entonces, Panamá se convirtió en el epicentro indiscutido de la alta perfumería del café.',
      'Las fincas panameñas operan con la precisión de los viñedos Grand Cru de Borgoña, catalogando parcelas microscópicas por elevación, exposición solar y horas de bajareque.'
    ],
    heroImage: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1920&q=85',
    realMapImage: panamaRealMap,
    cultureImage: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=1200&q=80',
    tastingImage: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
    altitudeRange: '1.200 - 2.500 msnm',
    annualProductionNote: 'Producción de ultra-especialidad · Récords históricos absolutos en Best of Panama',
    keyHarvestSeason: 'Diciembre - Mayo (Cosechas tardías en las faldas altas del volcán)',
    isOriginProducer: true,
    accentColor: '#D97706',
    viewBox: '0 0 100 100',
    // Realistic SVG silhouette of Panama (curved S-isthmus W to E)
    mapSvgPath: 'M 13.2 32.3 L 16.6 34.5 L 16.5 36.6 L 15.8 37.0 L 16.5 37.9 L 19.2 38.0 L 19.1 38.9 L 17.8 38.6 L 18.1 41.0 L 20.3 42.1 L 25.1 41.9 L 25.1 41.1 L 22.7 39.1 L 23.6 39.1 L 23.5 38.3 L 28.6 43.9 L 32.1 44.3 L 39.3 42.7 L 43.0 39.8 L 49.7 37.9 L 52.3 35.4 L 52.7 36.4 L 53.5 34.9 L 54.7 35.8 L 54.7 34.7 L 57.1 31.9 L 63.7 32.9 L 67.0 32.4 L 65.7 33.0 L 65.7 34.1 L 74.7 34.9 L 80.9 37.5 L 83.7 40.2 L 83.6 39.4 L 85.7 42.7 L 88.3 44.4 L 88.3 45.4 L 90.9 46.1 L 89.1 49.0 L 90.1 49.3 L 94.0 57.1 L 92.0 57.6 L 90.8 59.6 L 91.4 60.6 L 87.8 63.3 L 85.0 60.6 L 85.5 63.2 L 84.2 64.1 L 82.7 67.6 L 77.1 60.8 L 75.0 55.3 L 77.7 54.4 L 76.9 52.3 L 78.5 52.0 L 79.5 50.0 L 81.5 52.6 L 83.2 52.6 L 84.8 54.4 L 85.4 54.2 L 81.1 51.8 L 79.5 47.7 L 80.1 49.9 L 79.2 49.1 L 77.9 50.4 L 78.2 48.0 L 78.2 49.5 L 77.6 48.6 L 76.0 49.7 L 75.4 47.9 L 76.1 50.2 L 75.3 50.8 L 73.6 47.4 L 74.3 47.4 L 74.0 46.6 L 72.2 45.9 L 72.3 44.4 L 71.8 45.5 L 69.5 43.1 L 69.0 43.8 L 68.4 42.7 L 65.3 41.2 L 64.9 39.8 L 66.9 38.9 L 65.8 39.1 L 64.8 39.8 L 64.8 41.1 L 60.2 40.8 L 58.8 41.6 L 58.9 42.6 L 58.1 41.7 L 58.1 42.7 L 55.3 43.8 L 55.4 45.6 L 54.2 46.5 L 56.1 46.3 L 55.0 47.4 L 50.4 50.5 L 48.2 51.6 L 46.0 51.4 L 44.6 52.8 L 44.4 54.9 L 50.8 61.6 L 51.7 63.4 L 51.3 64.4 L 47.0 64.8 L 47.7 64.8 L 46.3 65.5 L 46.4 66.4 L 45.1 67.5 L 38.7 68.1 L 37.7 67.4 L 38.3 65.8 L 37.5 62.9 L 35.4 59.5 L 36.3 58.8 L 35.9 57.5 L 35.4 58.5 L 33.4 57.7 L 34.2 59.3 L 33.4 60.3 L 33.0 59.9 L 33.8 60.7 L 33.4 62.1 L 30.3 61.1 L 28.1 59.8 L 27.6 56.4 L 27.2 57.0 L 26.1 55.7 L 25.8 55.0 L 26.5 55.1 L 25.5 53.3 L 25.0 54.3 L 22.4 53.3 L 22.8 52.6 L 22.0 53.2 L 20.0 52.6 L 19.4 53.8 L 19.6 52.9 L 18.4 52.8 L 19.0 51.0 L 15.7 51.8 L 15.3 50.8 L 14.7 52.0 L 11.9 51.3 L 9.6 51.7 L 8.6 52.8 L 9.0 55.2 L 8.3 55.6 L 7.6 52.4 L 6.0 51.2 L 9.0 49.1 L 9.1 47.1 L 7.9 44.7 L 11.0 42.2 L 7.7 40.1 L 7.6 34.2 L 9.1 33.6 L 9.1 32.0 L 12.3 33.7 L 13.2 32.3 Z',
    regions: [
      {
        id: 'boquete',
        name: 'Boquete',
        altName: 'Valle de la Luna, Chiriquí',
        x: 15.3,
        y: 44.4,
        altitude: '1.200 - 1.950 msnm',
        soilOrClimate: 'Laderas orientales del Volcán Barú con presencia del microclima de bajareque',
        profile: 'Jazmín explosivo, bergamota, melocotón blanco, flor de azahar y té Earl Grey.',
        description: 'La capital indiscutida del café Geisha a nivel global. Las fincas centenarias de Boquete han marcado la pauta de la excelencia sensorial contemporánea.',
        culturalNote: 'Comunidad cosmopolita de productores, catadores internacionales y pueblos originarios Ngäbe-Buglé.'
      },
      {
        id: 'volcan',
        name: 'Tierras Altas (Volcán & Cerro Punta)',
        altName: 'Lado Occidental del Volcán Barú',
        x: 12.3,
        y: 44.5,
        altitude: '1.350 - 2.200 msnm',
        soilOrClimate: 'Suelo volcánico negro y fértil con noches frías y brisas del Pacífico',
        profile: 'Acidez málica elegante, notas a mandarina, flor de saúco, manzana fuji y miel.',
        description: 'Ubicado en el flanco occidental del volcán. La altitud extrema y temperaturas bajas prolongan el ciclo de maduración de las cerezas de café.',
        culturalNote: 'Región agrícola de alta tecnología y conservación ambiental.'
      },
      {
        id: 'renacimiento',
        name: 'Renacimiento',
        altName: 'Río Sereno & Frontera con Costa Rica',
        x: 10.1,
        y: 43.8,
        altitude: '1.100 - 1.500 msnm',
        soilOrClimate: 'Valles selváticos húmedos y templados en la cordillera fronteriza',
        profile: 'Cuerpo redondo, notas a mora silvestre, cacao fino de aroma y nuez moscada.',
        description: 'Zona de tradición cafetera que produce excelentes varietales Typica, Catuai y Geishas que crecen en micro-parcelas boscosas.',
        culturalNote: 'Fuerte arraigo de familias productoras locales dedicadas al cultivo artesanal.'
      }
    ],
    brands: [
      {
        id: 'hacienda-la-esmeralda',
        name: 'Hacienda La Esmeralda',
        highlighted: true,
        location: 'Boquete, Chiriquí, Panamá',
        founded: '1967',
        logoText: 'ESMERALDA',
        tagline: 'Pioneros del Geisha que cambiaron la historia del café mundial',
        description: 'La familia Peterson redescubrió en 2004 el varietal Geisha recolectado en su lote Jaramillo. Al presentarlo en la competencia Best of Panama, los jueces internacionales quedaron anonadados por sus notas a jazmín y bergamota, estableciendo un nuevo estándar de café de especialidad a escala global.',
        varieties: ['Geisha Jaramillo', 'Geisha Cañas Verdes', 'Diamond Mountain Catuai'],
        sensoryNotes: ['Flor de Jazmín', 'Bergamota', 'Melocotón', 'Té de Hierba Luisa'],
        officialUrl: 'https://haciendaesmeralda.com/',
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
        farmExperience: 'Visitas privadas a sus lotes históricos en las faldas de Boquete.'
      },
      {
        id: 'kotowa-coffee',
        name: 'Café Kotowa',
        location: 'Boquete, Chiriquí, Panamá',
        founded: '1918',
        logoText: 'KOTOWA',
        tagline: 'Más de 100 años de pasión cafetera en las montañas de Boquete',
        description: 'Fundada por el inmigrante canadiense Alexander Duncan MacIntyre a comienzos del siglo XX. El nombre "Kotowa" proviene de la lengua indígena y significa "montañas". Hoy en día, sus bisnietos preservan métodos de cultivo orgánico y micro-lotes galardonados.',
        varieties: ['Geisha Duncan', 'Pacamara', 'Bourbon', 'Typica'],
        sensoryNotes: ['Cerezas Maduras', 'Chocolate Amargo', 'Albaricoque', 'Flores Blancas'],
        officialUrl: 'https://kotowacoffee.com/',
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
        farmExperience: 'Tour guiado por fincas tradicionales, cavas de café y bosque nuboso.'
      },
      {
        id: 'elida-estate',
        name: 'Elida Estate (Lamastus Family Estates)',
        location: 'Boquete, Tierras Altas, Panamá',
        founded: '1918',
        logoText: 'ELIDA',
        tagline: 'El café cultivado a mayor altitud en Panamá',
        description: 'Ubicada dentro del Parque Nacional Volcán Barú hasta alturas superiores a los 2.000 msnm. La familia Lamastus ha obtenido récords mundiales en subastas Best of Panama por sus lotes Geisha Natural y Geisha Washed.',
        varieties: ['Elida Geisha Green Tip', 'Elida Catuai', 'Torre Lot'],
        sensoryNotes: ['Flor de Azahar', 'Papaya', 'Mango', 'Vainilla Bourbon'],
        officialUrl: 'https://lamastusfamilyestates.com/',
        image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80',
        farmExperience: 'Cataciones exclusivas en su mirador en lo alto de la cordillera.'
      }
    ],
    tours: [
      {
        id: 'boquete-geisha-trail',
        title: 'Ruta Suprema del Geisha en Boquete',
        location: 'Boquete, Chiriquí',
        duration: '3 Horas',
        operator: 'Highlands Coffee Experience',
        type: 'Inmersión en Varietales Exóticos',
        description: 'Recorrido por parcelas de Geisha a la sombra del Volcán Barú, explicación del fenómeno del bajareque y cata en copas de cristal de 3 lotes galardonados.',
        highlights: ['Parcelas históricas de Geisha', 'Camas africanas de secado al sol', 'Cata en laboratorio SCA'],
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
        infoUrl: 'https://haciendaesmeralda.com/'
      },
      {
        id: 'kotowa-nature-tour',
        title: 'Kotowa Coffee, Cacao & Cloud Forest Tour',
        location: 'Finca Kotowa, Boquete',
        duration: '2.5 Horas',
        operator: 'Café Kotowa',
        type: 'Finca Histórica & Sendero',
        description: 'Conoce los procesos de cosecha ecológica, las plantas de beneficio con certificación hídrica y finaliza con un maridaje de café de especialidad y chocolate artesanal.',
        highlights: ['Finca centenaria de 1918', 'Tratamiento ecológico del agua', 'Maridaje café y chocolate'],
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
        infoUrl: 'https://kotowacoffee.com/'
      }
    ],
    baristaClasses: [
      {
        id: 'masterclass-geisha-brewing',
        title: 'Masterclass de Extracción de Varietales Florales (Geisha)',
        category: 'metodos',
        duration: '4 Horas',
        level: 'Avanzado',
        description: 'Descubre los parámetros exactos de temperatura de agua (88°-92°C), flujo de vertido continuo y geometría de cono (Origami, V60) para extraer notas florales sin amargor.',
        keyLearnings: ['Gestión de turbulencia en molienda gruesa', 'Preservación de ésteres y terpenos aromáticos', 'Uso de agua con bajo contenido mineral'],
        image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80'
      }
    ],
    tastings: [
      {
        id: 'catacion-geisha-panama',
        title: 'Cata Vertical de Geishas de Boquete: Lavado vs. Natural vs. Anaeróbico',
        format: 'sensorial',
        description: 'La experiencia sensorial definitiva: descubre cómo el mismo grano Geisha se transforma desde una taza etérea a jazmín hasta una explosión frutal de frutos tropicales maduros.',
        sensoryWheel: {
          aroma: 'Jazmín fresco, flor de café, bergamota y té blanco',
          acidity: 'Cítrica vibrante y fosfórica brillante',
          body: 'Ligero como la seda, similar al té fino',
          sweetness: 'Albaricoque deshidratado y miel blanca',
          finish: 'Eterno con recuerdos a azahar y jengibre suave'
        },
        sampleProfiles: [
          { name: 'Boquete Geisha Washed', process: 'Lavado Puro', notes: 'Jazmín, té Earl Grey y bergamota' },
          { name: 'Boquete Geisha Natural', process: 'Secado en Cama Africana', notes: 'Papaya, arándanos y chocolate blanco' }
        ]
      }
    ]
  },

  'brasil': {
    slug: 'brasil',
    name: 'Brasil',
    nameEn: 'Brazil',
    nameFr: 'Brésil',
    editorialKicker: 'El Gigante de las Fazendas & Minas Gerais',
    conceptSubtitle: 'Grandes horizontes, dulzor a chocolate y cuerpo sedoso.',
    narrativeLead: 'Como mayor productor y exportador del mundo desde hace más de 150 años, Brasil ha impulsado una era dorada de cafés de especialidad con denominaciones de origen célebres por su dulzura profunda y notas a nuez.',
    narrativeBody: [
      'Las onduladas colinas de Minas Gerais y las altiplanicies del Cerrado albergan fazendas que combinan la escala majestuosa con la micro-selección más rigurosa de cerezas maduras cosechadas bajo el sol tropical.',
      'El proceso Natural brasileño es un arte perfeccionado: las cerezas se secan con su cáscara en amplios "terreiros" al sol, impregnando el grano de azúcares caramelizados, chocolate con leche y baja acidez.',
      'Hoy, los tostadores y baristas más innovadores del mundo eligen los cafés brasileños no solo por su cuerpo inigualable en espresso, sino por la finura de sus variedades Bourbon Amarillo y microlotes anaeróbicos.'
    ],
    heroImage: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1920&q=85',
    realMapImage: brasilRealMap,
    cultureImage: 'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?auto=format&fit=crop&w=1200&q=80',
    tastingImage: 'https://images.unsplash.com/photo-1524350876685-274059332603?auto=format&fit=crop&w=1200&q=80',
    altitudeRange: '800 - 1.450 msnm',
    annualProductionNote: 'Mayor productor de café del planeta (~35% del suministro mundial)',
    keyHarvestSeason: 'Mayo - Septiembre (Época seca de secado en terreiro)',
    isOriginProducer: true,
    accentColor: '#EAB308',
    viewBox: '0 0 100 100',
    // Realistic SVG silhouette of Brazil (Broad triangular mass)
    mapSvgPath: 'M 43.0 86.0 L 47.0 81.6 L 51.3 79.1 L 51.6 77.1 L 51.1 75.7 L 49.6 75.6 L 50.4 72.1 L 47.8 71.9 L 46.8 68.2 L 42.2 67.7 L 42.5 65.2 L 41.8 63.4 L 42.4 63.0 L 41.9 62.4 L 43.3 59.0 L 42.6 57.4 L 41.3 56.8 L 41.4 54.6 L 37.4 54.6 L 36.5 51.9 L 37.2 51.9 L 36.7 49.0 L 35.5 48.3 L 33.8 48.4 L 31.0 46.4 L 28.4 46.1 L 26.8 44.9 L 26.0 43.3 L 26.0 39.7 L 23.2 40.2 L 18.9 43.0 L 14.5 42.7 L 14.8 39.2 L 13.1 40.4 L 11.1 40.5 L 10.8 39.4 L 8.9 39.1 L 9.4 38.2 L 7.1 34.9 L 9.0 32.5 L 9.5 29.5 L 14.5 27.2 L 16.0 27.6 L 17.2 20.6 L 15.8 18.2 L 15.8 16.6 L 17.8 16.4 L 17.5 15.5 L 16.2 15.5 L 16.2 14.0 L 19.9 14.0 L 19.9 13.3 L 20.4 14.0 L 21.5 13.1 L 22.3 15.2 L 24.0 16.2 L 25.5 15.7 L 25.7 16.4 L 30.4 12.8 L 28.9 12.3 L 28.6 9.8 L 27.3 8.2 L 31.4 9.8 L 31.7 8.8 L 35.6 7.7 L 36.5 6.7 L 36.2 6.1 L 37.3 6.0 L 37.4 7.7 L 38.8 9.0 L 37.8 11.4 L 38.3 13.7 L 40.3 15.2 L 43.6 13.4 L 46.6 13.7 L 46.6 12.2 L 53.2 13.0 L 56.2 8.3 L 56.5 9.0 L 56.3 7.9 L 57.3 9.1 L 57.9 13.2 L 59.7 14.0 L 59.3 15.1 L 59.9 15.2 L 56.7 18.1 L 55.4 20.9 L 53.7 21.5 L 54.8 21.7 L 57.8 19.9 L 57.8 22.3 L 59.7 22.0 L 60.0 22.6 L 60.9 21.9 L 60.4 23.9 L 61.9 21.5 L 61.7 22.0 L 62.6 21.0 L 63.1 21.6 L 63.9 19.4 L 66.6 19.5 L 66.7 20.2 L 69.7 20.8 L 69.6 21.4 L 69.9 20.8 L 69.9 21.8 L 70.9 21.1 L 71.4 21.8 L 71.0 23.0 L 72.0 23.1 L 71.0 25.3 L 72.1 23.5 L 72.7 23.3 L 72.3 24.4 L 74.0 23.2 L 78.8 24.7 L 81.5 24.3 L 87.7 29.0 L 91.3 29.5 L 92.9 34.1 L 91.8 38.6 L 87.5 42.7 L 85.2 47.1 L 84.4 46.2 L 83.9 46.6 L 83.4 57.8 L 82.2 59.1 L 82.0 62.1 L 79.2 66.3 L 79.3 67.5 L 77.2 68.7 L 77.1 69.7 L 74.9 69.7 L 74.8 69.0 L 73.7 69.9 L 71.9 69.6 L 69.6 71.6 L 67.5 71.7 L 63.6 75.3 L 62.4 75.1 L 63.2 75.6 L 62.3 76.2 L 62.7 77.0 L 62.3 76.7 L 63.0 79.1 L 62.4 82.2 L 60.0 84.3 L 58.1 87.9 L 55.1 90.4 L 55.1 89.7 L 56.9 88.9 L 58.4 86.6 L 56.8 85.6 L 56.9 87.3 L 54.8 89.5 L 55.1 90.4 L 53.9 92.6 L 52.2 94.0 L 51.9 92.7 L 52.8 91.7 L 51.4 90.2 L 47.4 87.5 L 46.5 88.0 L 44.7 85.8 L 43.0 86.0 Z M 63.0 19.2 L 61.3 21.5 L 59.3 21.9 L 59.1 21.2 L 58.7 22.0 L 57.9 21.1 L 58.6 20.2 L 57.9 20.2 L 58.1 18.7 L 58.8 18.1 L 63.1 18.5 L 63.0 19.2 Z',
    regions: [
      {
        id: 'sul-de-minas',
        name: 'Sul de Minas',
        altName: 'Carmo de Minas, Alfenas & Varginha (Minas Gerais)',
        x: 69.5,
        y: 67.1,
        altitude: '950 - 1.400 msnm',
        soilOrClimate: 'Colinas onduladas verdes con clima templado y lluvias veraniegas',
        profile: 'Cuerpo denso y aterciopelado, acidez cítrica moderada, notas a avellana, chocolate con leche y caramelo toffee.',
        description: 'El corazón palpitante del café de calidad en Brasil. Concentra más del 30% de la producción del país y alberga las fazendas más premiadas de Cup of Excellence.',
        culturalNote: 'Tradición colonial de grandes haciendas familiares que evolucionaron hacia la especialidad.'
      },
      {
        id: 'cerrado-mineiro',
        name: 'Cerrado Mineiro',
        altName: 'Patrocínio, Monte Carmelo & Araguari (Minas Gerais)',
        x: 66.2,
        y: 60.5,
        altitude: '800 - 1.300 msnm',
        soilOrClimate: 'Planicies elevadas de meseta con estaciones seca y lluviosa rigurosamente definidas',
        profile: 'Dulzura intensa a chocolate amargo, frutos secos tostados, caramelo y cuerpo cremoso consistente.',
        description: 'Primera región cafetera de Brasil en obtener Denominación de Origen Protegida (DOP). Su clima seco durante la cosecha garantiza un secado natural uniforme y limpio.',
        culturalNote: 'Líder en tecnificación sustentable y trazabilidad satelital de cada lote.'
      },
      {
        id: 'mogiana-paulista',
        name: 'Mogiana Paulista',
        altName: 'Franca, Mococa & São João da Boa Vista (São Paulo)',
        x: 65.5,
        y: 66.2,
        altitude: '900 - 1.250 msnm',
        soilOrClimate: 'Suelo rojo fértil (terra roxa) en la frontera histórica entre São Paulo y Minas',
        profile: 'Equilibrio armonioso, notas a miel, almendras dulces y suave toque floral.',
        description: 'Región cafetera histórica unida a la red ferroviaria del siglo XIX que transportaba el café al puerto de Santos. Hoy hogar de productores orgánicos y biodinámicos.',
        culturalNote: 'Cuna de innovadores ecológicos como la Fazenda Ambiental Fortaleza.'
      },
      {
        id: 'matas-de-minas',
        name: 'Matas de Minas',
        altName: 'Manhuaçu & Espera Feliz (Minas Gerais)',
        x: 76.7,
        y: 63.9,
        altitude: '650 - 1.300 msnm',
        soilOrClimate: 'Bosque atlántico montañoso con laderas escarpadas y recolección manual',
        profile: 'Notas afrutadas a caña de azúcar, frutas amarillas y cuerpo sedoso balanceado.',
        description: 'Una región montañosa donde las cosechas son recolectadas a mano por pequeños productores familiares que han ganado fama por sus cafés artesanales pulped natural.',
        culturalNote: 'Cultura de minifundio cooperativo y fermentaciones cuidadosas.'
      }
    ],
    brands: [
      {
        id: 'daterra-coffee',
        name: 'Daterra Coffee',
        highlighted: true,
        location: 'Patrocínio, Cerrado Mineiro, Brasil',
        founded: '1993',
        logoText: 'DATERRA',
        tagline: 'Agricultura regenerativa B-Corp y microlotes Masterpieces',
        description: 'Daterra es considerada una de las fincas cafeteras más avanzadas y ecológicas del mundo. Con certificación B-Corp y Rainforest Alliance, más del 50% de sus tierras están destinadas a reservas biológicas. Sus microlotes "Masterpieces" se empacan al vacío en origen ("PentaBox") para preservar su frescura intacta.',
        varieties: ['Bourbon Amarillo', 'Laurina', 'Aramosa', 'Catuaí'],
        sensoryNotes: ['Chocolate Belga', 'Almendra Tostada', 'Caramelo Toffee', 'Naranja Dulce'],
        officialUrl: 'https://daterracoffee.com.br/',
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
        farmExperience: 'Tours técnicos sobre sostenibilidad, agricultura regenerativa y cata de lotes de laboratorio.'
      },
      {
        id: 'ipanema-coffees',
        name: 'Ipanema Coffees',
        location: 'Alfenas, Sul de Minas, Brasil',
        founded: '1969',
        logoText: 'IPANEMA',
        tagline: 'Excelencia y trazabilidad en el corazón de Sul de Minas',
        description: 'Operando en tres fazendas legendarias (Conquista, Rio Verde y Capoeirinha), Ipanema es un referente mundial de trazabilidad y calidad a escala, famosa por su serie "Premier Cru" seleccionada por parcelas de altitud.',
        varieties: ['Bourbon Amarillo', 'Mundo Novo', 'Catuaí'],
        sensoryNotes: ['Cacao Puro', 'Miel de Caña', 'Avellanas', 'Vainilla'],
        officialUrl: 'https://ipanemacoffees.com/',
        image: 'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?auto=format&fit=crop&w=800&q=80',
        farmExperience: 'Visitas a plantaciones centenarias en Sul de Minas con cata de microlotes.'
      },
      {
        id: 'faf-brasil',
        name: 'Fazenda Ambiental Fortaleza (FAF)',
        location: 'Mococa, Mogiana, São Paulo, Brasil',
        founded: '1850 / Renacimiento 2001',
        logoText: 'FAF',
        tagline: 'Líderes de la revolución orgánica y biodinámica en Brasil',
        description: 'Liderada por Marcos y Silvia Croce, FAF transformó una plantación histórica en un modelo vivo de policultivo, reforestación y café orgánico de especialidad que abastece a las mejores tostadurías de Europa y América.',
        varieties: ['Bourbon Rojo & Amarillo', 'Obatã', 'Catuaí'],
        sensoryNotes: ['Frutas Amarillas', 'Chocolate con Leche', 'Panela', 'Cítricos Suaves'],
        officialUrl: 'https://fafcoffees.com/',
        image: 'https://images.unsplash.com/photo-1524350876685-274059332603?auto=format&fit=crop&w=800&q=80',
        farmExperience: 'Inmersión en agroforestería, observación de aves y cata de cafés orgánicos.'
      }
    ],
    tours: [
      {
        id: 'sul-de-minas-route',
        title: 'Rota do Café Especial en Sul de Minas',
        location: 'Carmo de Minas, Minas Gerais',
        duration: 'Día Completo (8 Horas)',
        operator: 'Rota do Café Especial',
        type: 'Fazendas Históricas & Terreiros',
        description: 'Subida en vehículos 4x4 a miradores de montaña a 1.400 msnm, observación de la cosecha y el secado al sol en terreiro, visita al molino de beneficio y degustación de cafés premiados.',
        highlights: ['Vistas panorámicas de la Serra da Mantiqueira', 'Paseo en globo aerostático opcional', 'Cata de Bourbon Amarillo'],
        image: 'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?auto=format&fit=crop&w=800&q=80',
        infoUrl: 'https://rotadocafeespecial.com.br/'
      },
      {
        id: 'daterra-immersion',
        title: 'Daterra Sustainability & Science Tour',
        location: 'Patrocínio, Cerrado Mineiro',
        duration: '3.5 Horas',
        operator: 'Daterra Coffee',
        type: 'Sostenibilidad & Laboratorio',
        description: 'Aprende cómo opera una finca carbono-negativa, conoce su banco genético con cientos de varietales y participa en una sesión de cata ciega de sus lotes Masterpieces.',
        highlights: ['Investigación científica y banco botánico', 'Empaque al vacío en origen PentaBox', 'Cata de microlotes fermentados'],
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
        infoUrl: 'https://daterracoffee.com.br/'
      }
    ],
    baristaClasses: [
      {
        id: 'espresso-brasileno',
        title: 'La Ciencia del Espresso Brasileño: Crema, Dulzor & Densidad',
        category: 'barismo',
        duration: '4 Horas',
        level: 'Todos los niveles',
        description: 'Aprende a extraer la máxima crema avellanada y riqueza táctil que distinguen a los cafés brasileños en máquinas de palanca y espresso comercial.',
        keyLearnings: ['Ratio 1:2 a 9 bares de presión', 'Emulsión de grasas naturales y azúcares', 'Balance de bebidas con leche (Cappuccino, Cortado)'],
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80'
      }
    ],
    tastings: [
      {
        id: 'catacion-bourbon-brasil',
        title: 'Cata de Variedades Brasileñas: Bourbon Amarillo vs. Catuaí vs. Mundo Novo',
        format: 'sensorial',
        description: 'Una sesión sensorial que desafía los mitos sobre el café brasileño, revelando notas florales y frutales inesperadas en microlotes de alta elevación.',
        sensoryWheel: {
          aroma: 'Chocolate con leche, almendras tostadas y azúcar moreno',
          acidity: 'Cremosa y cítrica suave (naranja dulce)',
          body: 'Pesado, untuoso y aterciopelado',
          sweetness: 'Caramelo toffee y melaza',
          finish: 'Persistente con retrogusto a cacao y avellana'
        },
        sampleProfiles: [
          { name: 'Cerrado Natural Daterra', process: 'Secado Natural al Sol', notes: 'Chocolate belga, nuez y caramelo' },
          { name: 'Sul de Minas Bourbon Amarillo', process: 'Pulped Natural', notes: 'Fruta amarilla madura y crema espesa' }
        ]
      }
    ]
  },

  'turquia': {
    slug: 'turquia',
    name: 'Turquía',
    nameEn: 'Turkey',
    nameFr: 'Turquie',
    editorialKicker: 'El Alma del Café Turco & Patrimonio de la UNESCO',
    conceptSubtitle: 'Quinientos años de ritual en cezve, hospitalidad y misticismo.',
    narrativeLead: 'Turquía no cultiva café, pero inventó el ritual social del café: en el siglo XVI, Estambul abrió las primeras cafeterías de la historia humana, convirtiendo la preparación en cezve en Patrimonio Inmaterial de la Humanidad por la UNESCO.',
    narrativeBody: [
      'Introducido en la corte otomana del sultán Solimán el Magnífico en 1536 por el gobernador de Yemen Özdemir Pasha, el café fue adoptado con devoción real: se crearon cargos oficiales como el "Kahvecibaşı" (jefe de cafeteros del palacio).',
      'El método es inconfundible y ancestral: granos tostados con molienda ultrafina impalpable como talco, cocidos lentamente con agua fría y azúcar en un cazo de cobre y latón ("cezve" o "ibrik") sobre brasas o arena caliente.',
      'Servido sin filtrar en delicadas tazas ("fincan"), la densa espuma aterciopelada corona la bebida mientras los posos decantan al fondo, dando origen a la hospitalidad turca y al arte milenario de la lectura del porvenir ("fal").'
    ],
    heroImage: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1920&q=85',
    realMapImage: turquiaRealMap,
    cultureImage: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a1b?auto=format&fit=crop&w=1200&q=80',
    tastingImage: 'https://images.unsplash.com/photo-1524350876685-274059332603?auto=format&fit=crop&w=1200&q=80',
    annualProductionNote: 'Capital histórica del ritual cafetero · Patrimonio Cultural Inmaterial UNESCO (2013)',
    keyHarvestSeason: 'Consumo y ritual ceremonial vivo los 365 días del año',
    isOriginProducer: false, // Explicitly not an agricultural producer
    accentColor: '#B91C1C',
    viewBox: '0 0 100 100',
    // Realistic SVG silhouette of Turkey (Anatolian peninsula + Thrace)
    mapSvgPath: 'M 87.6 37.0 L 88.9 39.1 L 88.1 40.8 L 88.6 43.0 L 91.7 43.5 L 94.0 45.9 L 92.9 45.1 L 92.0 47.2 L 90.3 47.5 L 91.5 50.7 L 91.6 53.5 L 92.4 53.7 L 91.2 56.4 L 93.0 57.5 L 92.9 59.1 L 94.0 60.0 L 93.8 60.9 L 93.1 60.7 L 91.5 62.0 L 91.1 61.3 L 91.3 60.4 L 90.6 59.9 L 89.3 60.6 L 84.5 59.5 L 83.4 61.0 L 82.5 61.1 L 81.8 59.8 L 78.4 61.3 L 74.8 61.2 L 67.9 63.8 L 65.5 63.7 L 63.1 62.4 L 59.5 64.0 L 57.6 64.1 L 55.7 62.8 L 55.2 64.9 L 55.8 66.4 L 54.4 66.5 L 54.4 67.9 L 53.3 68.9 L 52.3 68.3 L 52.6 67.7 L 51.7 66.0 L 53.7 64.0 L 52.8 62.2 L 50.8 63.4 L 51.3 63.5 L 50.9 64.2 L 49.6 64.6 L 46.5 62.9 L 44.6 64.3 L 43.1 66.5 L 42.7 65.9 L 41.8 67.0 L 37.7 67.7 L 35.6 66.8 L 34.0 64.5 L 30.8 63.0 L 27.7 62.5 L 26.5 66.5 L 25.3 66.0 L 23.0 67.1 L 20.3 65.5 L 20.4 64.5 L 19.9 64.5 L 20.3 63.8 L 19.5 63.3 L 19.0 64.2 L 17.3 62.5 L 17.0 63.1 L 16.3 62.7 L 16.5 63.5 L 15.3 64.4 L 14.9 64.2 L 15.6 64.0 L 15.0 63.7 L 15.6 63.0 L 12.3 63.8 L 13.5 63.0 L 15.3 63.1 L 15.3 62.2 L 16.7 61.6 L 11.7 62.0 L 11.6 61.1 L 13.1 61.0 L 13.3 60.1 L 12.6 60.3 L 12.4 59.3 L 11.3 59.6 L 11.4 58.2 L 10.5 57.8 L 11.6 57.3 L 11.6 55.8 L 9.8 55.6 L 9.3 54.5 L 8.5 55.1 L 6.8 54.1 L 8.2 53.2 L 7.6 53.0 L 7.7 51.7 L 8.7 52.6 L 8.9 53.9 L 9.0 53.2 L 11.2 53.1 L 10.1 53.1 L 9.1 51.8 L 10.7 50.4 L 9.5 50.0 L 9.9 49.2 L 8.6 48.1 L 10.1 46.3 L 6.1 46.7 L 6.5 43.9 L 9.2 41.3 L 11.8 40.9 L 12.6 41.8 L 14.0 41.8 L 14.6 41.4 L 13.7 40.7 L 14.0 40.5 L 15.3 40.8 L 14.9 41.5 L 20.1 41.5 L 20.3 40.9 L 18.8 40.5 L 19.7 39.8 L 24.2 39.3 L 21.0 38.8 L 19.9 37.5 L 20.6 36.3 L 30.3 37.1 L 31.1 35.8 L 35.1 33.3 L 40.1 31.5 L 46.5 32.0 L 48.1 31.1 L 49.0 31.5 L 48.4 32.1 L 49.4 33.4 L 50.7 33.9 L 52.9 33.4 L 54.5 36.1 L 56.2 35.5 L 58.0 36.8 L 59.8 37.4 L 61.0 36.9 L 61.6 37.8 L 63.6 38.2 L 68.8 37.0 L 72.1 38.1 L 78.6 34.6 L 83.0 35.1 L 83.9 34.1 L 87.6 37.0 Z M 15.2 31.8 L 15.0 32.7 L 16.2 34.5 L 20.3 36.2 L 19.8 37.6 L 15.9 37.2 L 12.9 37.7 L 11.8 39.5 L 9.0 41.0 L 6.5 43.4 L 6.8 41.7 L 9.6 40.1 L 6.0 39.7 L 7.4 37.9 L 7.3 36.2 L 8.7 35.5 L 8.5 34.0 L 7.3 32.9 L 10.7 31.1 L 11.7 31.1 L 13.0 32.2 L 15.2 31.8 Z',
    regions: [
      {
        id: 'estambul-eminonu',
        name: 'Estambul: Eminönü & Tahtakale',
        altName: 'El epicentro histórico de las primeras cafeterías de 1554',
        x: 19.7,
        y: 37.7,
        profile: 'Tueste medio oscuro tradicional, molienda impalpable como harina, notas especiadas, cardamomo y cuerpo suntuoso.',
        description: 'Aquí abrieron las primeras casas de café del mundo bajo el mandato otomano. Sus callejuelas albergan el Mercado de las Especias y la legendaria tostaduría de Mehmet Efendi abierta en 1871.',
        culturalNote: 'Lugar donde comprar café fresco recién tostado y molido en papel estraza es un ritual diario inmutable.'
      },
      {
        id: 'estambul-beyoglu',
        name: 'Estambul: Beyoğlu & Karaköy',
        altName: 'La convergencia entre tradición bohemia y tercera ola',
        x: 20.5,
        y: 37.2,
        profile: 'Café turco de especialidad en cezve de plata sobre arena caliente, notas a cacao criollo y flor de azahar.',
        description: 'A orillas del Cuerno de Oro y en los callejones del barrio de Pera, conviven cafeterías centenarias de cezve al carbón (como Mandabatmaz) con micro-tostadores contemporáneos de café de origen.',
        culturalNote: 'Espacio de intelectuales, músicos y artistas que debaten frente a una taza humeante de café.'
      },
      {
        id: 'estambul-kadikoy',
        name: 'Estambul: Kadıköy (Lado Asiático)',
        altName: 'Moda & Costa del Mar de Mármara',
        x: 21.2,
        y: 38.3,
        profile: 'Innovación en tuestes claros aplicados al cezve de precisión moderna.',
        description: 'Cruzando el Bósforo en ferry, Kadıköy es el vibrante centro de la juventud estambulita, donde el café tradicional en cezve se prepara con microlotes etíopes y colombianos.',
        culturalNote: 'Hospitalidad relajada en terrazas frente a los atardeceres dorados sobre el mar.'
      },
      {
        id: 'gaziantep',
        name: 'Gaziantep & Anatolia Sudoriental',
        altName: 'Cuna del café Menengiç y cafeterías de piedra de Tahmis Kahvesi (1635)',
        x: 59.1,
        y: 61.4,
        profile: 'Variaciones tradicionales como Menengiç (pistacho silvestre sin cafeína) y café Dibek (machacado en mortero).',
        description: 'Hogar del histórico Tahmis Kahvesi, fundado en 1635 con techos altos de piedra y vigas de madera. En esta región el café se mezcla con especias ancestrales de la Ruta de la Seda.',
        culturalNote: 'Patrimonio de hospitalidad donde una taza de café sella 40 años de amistad ("Bir fincan kahvenin kırk yıl hatırı vardır").'
      }
    ],
    brands: [
      {
        id: 'mehmet-efendi',
        name: 'Kurukahveci Mehmet Efendi',
        highlighted: true,
        location: 'Eminönü, Estambul, Turquía',
        founded: '1871',
        logoText: 'MEHMET EFENDI',
        tagline: 'El tostador más icónico del mundo otomano desde 1871',
        description: 'Antes de 1871, los hogares de Estambul compraban los granos de café crudos y los tostaban en sartenes caseras. Mehmet Efendi cambió la historia al comenzar a tostar y moler finamente el café en su tienda de Tahmis Sokak en Eminönü, vendiéndolo listo para preparar. Hoy, el olor a café tostado en su tienda original sigue atrayendo a miles de personas cada día.',
        varieties: ['Café Turco Tradicional', 'Tueste Oscuro Especial', 'Café en Grano Seleccionado'],
        sensoryNotes: ['Especias Dulces', 'Chocolate Tostado', 'Madera Noble', 'Cuerpo Denso'],
        officialUrl: 'https://mehmetefendi.com/',
        image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80',
        farmExperience: 'Visita a su histórica tienda de Eminönü junto al Bazar de las Especias de Estambul.'
      },
      {
        id: 'mandabatmaz',
        name: 'Mandabatmaz',
        location: 'İstiklal Caddesi, Beyoğlu, Estambul, Turquía',
        founded: '1967',
        logoText: 'MANDABATMAZ',
        tagline: 'Tan espeso que ni un búfalo se hundiría en su espuma',
        description: 'Fundado por Cemil Filik en un estrecho callejón de İstiklal Caddesi. Su nombre significa literalmente "el búfalo no se hunde", aludiendo a la legendaria densidad de su espuma. Es una parada obligatoria para los amantes del café tradicional preparado en pequeños fogones individuales.',
        varieties: ['Fórmula Secreta de Molienda Fina Mandabatmaz'],
        sensoryNotes: ['Espuma Densa Aterciopelada', 'Cacao Puro', 'Aroma Ahumado Sutil'],
        officialUrl: 'https://www.mandabatmaz.com.tr/',
        image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a1b?auto=format&fit=crop&w=800&q=80',
        farmExperience: 'Degustación en sus taburetes de madera en el callejón de Beyoğlu.'
      },
      {
        id: 'petra-roasting',
        name: 'Petra Roasting Co.',
        location: 'Gayrettepe & Karaköy, Estambul, Turquía',
        founded: '2013',
        logoText: 'PETRA',
        tagline: 'Pioneros del café de especialidad de la tercera ola en Turquía',
        description: 'Fundada por Kaan Bergsen, Petra transformó la escena del café contemporáneo en Turquía al introducir orígenes trazables, tuestes claros a la medida y una reinterpretación moderna del café turco utilizando cezves de plata hechos a mano por artesanos locales.',
        varieties: ['Microlotes de Origen Único', 'Mezclas de Temporada'],
        sensoryNotes: ['Frutas Silvestres', 'Bergamota', 'Chocolate Rubio'],
        officialUrl: 'https://petraroasting.com/',
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
        farmExperience: 'Espacio galería de arte y laboratorio de tueste en Gayrettepe.'
      }
    ],
    tours: [
      {
        id: 'istanbul-coffee-heritage-tour',
        title: 'Travesía Histórica del Café Otomano en Estambul',
        location: 'Eminönü, Spice Bazaar & Galata, Estambul',
        duration: '3.5 Horas',
        operator: 'Istanbul Culinary Heritage Guild',
        type: 'Ruta Histórica & Palaciega',
        description: 'Recorre los lugares donde nacieron las primeras cafeterías de 1554, entra a la tostaduría de Mehmet Efendi, visita un taller tradicional de cezves de cobre martillado a mano y prueba café turco sobre arena caliente.',
        highlights: ['Bazar de las Especias y tiendas históricas', 'Taller de caldereros de cobre en Tahtakale', 'Degustación con delicias turcas (Lokum)'],
        image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a1b?auto=format&fit=crop&w=800&q=80',
        infoUrl: 'https://mehmetefendi.com/'
      }
    ],
    baristaClasses: [
      {
        id: 'cezve-ibrik-ritual-class',
        title: 'El Arte del Cezve: Dinámica de la Espuma, Molienda Impalpable & Arena Caliente',
        category: 'cultura',
        duration: '3 Horas',
        level: 'Todos los niveles',
        description: 'Aprende las técnicas ancestrales para preparar el café turco perfecto: proporción agua-café en cezve de cobre, control de temperatura para crear la espuma dorada ("köpük") sin hervir, y servicio ceremonial.',
        keyLearnings: ['Molienda extrafina impalpable', 'Técnica de cocción en arena caliente ("kumda kahve")', 'Etiqueta del servicio con agua y lokum'],
        image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'arte-del-fal',
        title: 'Cultura, Hospitalidad & Lectura de Posos (Kahve Falı)',
        category: 'cultura',
        duration: '2 Horas',
        level: 'Cultural / Vivencial',
        description: 'Sumérgete en la tradición social que acompaña a la taza de café: el proverbio turco de la amistad, la conversación pausada y los símbolos milenarios interpretados al voltear la taza sobre el plato.',
        keyLearnings: ['Ritual de voltear la taza ("Neyse halim, çıksın falim")', 'Simbología en los sedimentos de café', 'La hospitalidad en las bodas otomanas'],
        image: 'https://images.unsplash.com/photo-1524350876685-274059332603?auto=format&fit=crop&w=800&q=80'
      }
    ],
    tastings: [
      {
        id: 'catacion-cafe-turco-estilos',
        title: 'Degustación de las Tres Épocas del Café Turco',
        format: 'comparativa',
        description: 'Compara tres tazas emblemáticas: el café turco clásico de tueste oscuro con cardamomo, el café cocido en arena de Mandabatmaz y la reinterpretación contemporánea de especialidad en cezve de plata.',
        sensoryWheel: {
          aroma: 'Cardamomo verde, cacao tostado y canela dulce',
          acidity: 'Muy baja, casi imperceptible y redonda',
          body: 'Extraordinariamente espeso, casi jaraboso',
          sweetness: 'Aromatizado con azúcar moreno o almáciga de Quíos',
          finish: 'Persistente con sensaciones especiadas profundas'
        },
        sampleProfiles: [
          { name: 'Mehmet Efendi Clásico', process: 'Cezve de Cobre en Fuego Lento', notes: 'Cacao tostado, madera noble y canela' },
          { name: 'Petra Specialty Ibrik', process: 'Cezve de Plata con Grano Etíope', notes: 'Jazmín, frutos del bosque y chocolate con leche' }
        ]
      }
    ]
  }
};
