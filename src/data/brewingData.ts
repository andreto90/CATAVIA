export interface BrewStep {
  title: string;
  time: string;
  desc: string;
}

export interface BrewRecipe {
  ratio: string;
  coffeeGrams: number;
  waterGrams: number;
  waterTemp: string;
  grindSize: string;
  targetTime: string;
  sensoryTarget: string;
  steps: BrewStep[];
}

export interface CoffeeProfileInfo {
  id: string;
  name: string;
  roast: string;
  flavorProfile: string;
  character: string;
}

export const COFFEE_PROFILES: CoffeeProfileInfo[] = [
  {
    id: 'huila-geisha',
    name: 'Huila Geisha Reserve',
    roast: 'Tueste Medio Claro',
    flavorProfile: 'Jazmín, Bergamota & Miel de Azahar',
    character: 'Floral, aromático y de acidez cítrica cristalina'
  },
  {
    id: 'sierra-nevada-mist',
    name: 'Sierra Nevada Dark Mist',
    roast: 'Tueste Medio Oscuro',
    flavorProfile: 'Cacao 72%, Panela Fundida & Avellana',
    character: 'Denso, achocolatado, reconfortante y de acidez suave'
  },
  {
    id: 'narino-bourbon',
    name: 'Nariño High-Altitude Bourbon',
    roast: 'Tueste Medio Artesanal',
    flavorProfile: 'Mora Andina, Ciruela Roja & Caramelo',
    character: 'Frutal, jugoso y con dulzura natural vibrante'
  },
  {
    id: 'santander-honey',
    name: 'Santander Honey Process',
    roast: 'Tueste Medio',
    flavorProfile: 'Néctar de Guayaba, Vainilla & Almendra',
    character: 'Cremoso, meloso y balanceado'
  }
];

export const BREWING_RECIPES: Record<string, Record<'v60' | 'french' | 'chemex', BrewRecipe>> = {
  'huila-geisha': {
    v60: {
      ratio: '1:16.6',
      coffeeGrams: 15,
      waterGrams: 250,
      waterTemp: '94°C / 201°F',
      grindSize: 'Media-Fina (sal marina fina)',
      targetTime: '2:45 min',
      sensoryTarget: 'Taza limpia y translúcida con notas vivas de jazmín blanco, bergamota y té de melocotón.',
      steps: [
        {
          title: 'Enjuague y preparación',
          time: '0:00',
          desc: 'Enjuaga el filtro de papel con agua caliente para purgar sabores a celulosa y calentar el cono de cerámica. Añade 15g de Huila Geisha y nivela la cama.'
        },
        {
          title: 'La Floración (Bloom)',
          time: '0:00 - 0:45',
          desc: 'Vierte 45g de agua en círculos suaves desde el centro hacia afuera. Observa el desgasificado activo del tueste fresco durante 45 segundos.'
        },
        {
          title: 'Segundo vertido concéntrico',
          time: '0:45 - 1:20',
          desc: 'Vierte suavemente en espiral hasta alcanzar 150g. Mantén un flujo continuo y delicado sin tocar directamente las paredes del filtro.'
        },
        {
          title: 'Vertido final y goteo',
          time: '1:20 - 2:45',
          desc: 'Completa hasta los 250g con vertido pausado al centro. Da un suave giro al V60 para asentar la cama. Deja drenar por completo y disfruta a 60°C.'
        }
      ]
    },
    french: {
      ratio: '1:16',
      coffeeGrams: 28,
      waterGrams: 450,
      waterTemp: '93°C / 200°F',
      grindSize: 'Media-Gruesa',
      targetTime: '3:45 min',
      sensoryTarget: 'Mayor presencia de miel de azahar y cuerpo sedoso sin opacar la sutileza floral del Geisha.',
      steps: [
        {
          title: 'Precalentamiento',
          time: '0:00',
          desc: 'Llena la prensa con agua tibia para aclimatar el cristal. Descarta el agua y coloca los 28g de café molido.'
        },
        {
          title: 'Infusión total',
          time: '0:00 - 0:45',
          desc: 'Vierte 450g de agua a 93°C de manera vigorosa para saturar todas las partículas. Remueve una vez con cuchara de madera.'
        },
        {
          title: 'Extracción pasiva',
          time: '0:45 - 3:30',
          desc: 'Coloca el émbolo arriba sin bajarlo. Deja reposar mientras los aceites y azúcares se integran armónicamente.'
        },
        {
          title: 'Romper costra y servir',
          time: '3:30 - 3:45',
          desc: 'Retira la espuma dorada superior con cuchara, baja el émbolo lentamente y sirve de inmediato en jarra para detener la extracción.'
        }
      ]
    },
    chemex: {
      ratio: '1:16.6',
      coffeeGrams: 30,
      waterGrams: 500,
      waterTemp: '94°C / 201°F',
      grindSize: 'Media',
      targetTime: '4:00 min',
      sensoryTarget: 'Claridad estética inmaculada. Destaca la frescura cristalina de los cítricos andinos y miel.',
      steps: [
        {
          title: 'Filtro triple capa',
          time: '0:00',
          desc: 'Coloca el filtro Chemex con el lado de 3 capas hacia el pico vertedor. Enjuaga con agua caliente abundante y bota el agua residual.'
        },
        {
          title: 'Floración generosa',
          time: '0:00 - 0:50',
          desc: 'Vierte 75g de agua sobre los 30g de Geisha. Deja abrir los aromáticos volátiles de jazmín durante 50 segundos.'
        },
        {
          title: 'Vertido principal',
          time: '0:50 - 2:30',
          desc: 'Vierte en círculos lentos hasta los 300g, manteniendo el nivel del agua a 1 cm del borde del cono.'
        },
        {
          title: 'Paso final y oxigenación',
          time: '2:30 - 4:00',
          desc: 'Llega a 500g con pulsos suaves. Al terminar el goteo, retira el filtro y agita la Chemex en círculos para oxigenar la bebida antes de servir.'
        }
      ]
    }
  },
  'sierra-nevada-mist': {
    v60: {
      ratio: '1:15',
      coffeeGrams: 16,
      waterGrams: 240,
      waterTemp: '90°C / 194°F',
      grindSize: 'Media',
      targetTime: '2:30 min',
      sensoryTarget: 'Chocolate 72% fundido y panela tostada con acidez muy baja y textura aterciopelada.',
      steps: [
        {
          title: 'Preparación',
          time: '0:00',
          desc: 'Enjuaga el filtro de papel. Agrega 16g de café molido medio para evitar sobre-extracción amarga.'
        },
        {
          title: 'Floración controlada',
          time: '0:00 - 0:40',
          desc: 'Vierte 40g de agua a 90°C (temperatura más moderada para tuestes medio-oscuros). Deja reposar 40 segundos.'
        },
        {
          title: 'Vertido continuo',
          time: '0:40 - 1:40',
          desc: 'Vierte en espiral continua hasta alcanzar los 240g sin pausas largas, extrayendo las notas ricas a caramelo y cacao.'
        },
        {
          title: 'Drenaje rápido',
          time: '1:40 - 2:30',
          desc: 'Deja drenar y retira el cono antes de que el último goteo astringente caiga. Obtendrás una taza densa y dulce.'
        }
      ]
    },
    french: {
      ratio: '1:15',
      coffeeGrams: 30,
      waterGrams: 450,
      waterTemp: '91°C / 196°F',
      grindSize: 'Gruesa clásica (sal kosher)',
      targetTime: '4:00 min',
      sensoryTarget: 'El método predilecto para Sierra Nevada: cuerpo rotundo, sensación cremosa de avellana y cacao.',
      steps: [
        {
          title: 'Molienda gruesa',
          time: '0:00',
          desc: 'Coloca 30g de molienda gruesa en la prensa precalentada.'
        },
        {
          title: 'Vertido vigoroso',
          time: '0:00 - 0:30',
          desc: 'Vierte los 450g de agua caliente asegurando que toda la molienda se hidrate de golpe.'
        },
        {
          title: 'Inmersión profunda',
          time: '0:30 - 3:30',
          desc: 'Coloca la tapa con el émbolo arriba. Deja que los aceites naturales de la Sierra Nevada se transfieran al agua.'
        },
        {
          title: 'Prensado suave',
          time: '3:30 - 4:00',
          desc: 'Rompe la costra, baja el émbolo con la presión de dos dedos y sirve en tazas precalentadas.'
        }
      ]
    },
    chemex: {
      ratio: '1:15',
      coffeeGrams: 28,
      waterGrams: 420,
      waterTemp: '90°C / 194°F',
      grindSize: 'Media-Gruesa',
      targetTime: '3:45 min',
      sensoryTarget: 'Taza de chocolate negro sorprendentemente pura y sin sedimentos, muy suave al paladar.',
      steps: [
        {
          title: 'Filtro y enjuague',
          time: '0:00',
          desc: 'Enjuaga el filtro grueso para retener aceites pesados y dejar pasar únicamente notas a panela y chocolate.'
        },
        {
          title: 'Bloom',
          time: '0:00 - 0:45',
          desc: 'Vierte 60g de agua y aguarda 45 segundos de floración.'
        },
        {
          title: 'Vertido en dos fases',
          time: '0:45 - 2:40',
          desc: 'Vierte hasta 250g a los 1:30 min. Luego completa hasta los 420g a los 2:40 min con vertido constante al centro.'
        },
        {
          title: 'Final',
          time: '2:40 - 3:45',
          desc: 'Permite que el café filtre. Remueve el filtro y sirve.'
        }
      ]
    }
  },
  'narino-bourbon': {
    v60: {
      ratio: '1:16.3',
      coffeeGrams: 15,
      waterGrams: 245,
      waterTemp: '93°C / 199°F',
      grindSize: 'Media-Fina',
      targetTime: '2:40 min',
      sensoryTarget: 'Acidez jugosa de manzana roja, mora silvestre andina y dulzura envolvente de caramelo.',
      steps: [
        {
          title: 'Enjuague y dosis',
          time: '0:00',
          desc: 'Enjuaga el cono V60 e incorpora los 15g de Nariño Bourbon.'
        },
        {
          title: 'Floración aromática',
          time: '0:00 - 0:40',
          desc: 'Vierte 45g de agua a 93°C. Respira las notas a frutas rojas que desprenden los azúcares concentrados.'
        },
        {
          title: 'Vertidos por pulsos',
          time: '0:40 - 2:00',
          desc: 'Vierte en 2 pulsos: primero hasta 150g, espera 15 segundos y continúa hasta los 245g.'
        },
        {
          title: 'Drenaje',
          time: '2:00 - 2:40',
          desc: 'Deja drenar. La cama de café debe quedar plana. Tómalo tibio para sentir la explosión frutal.'
        }
      ]
    },
    french: {
      ratio: '1:15',
      coffeeGrams: 30,
      waterGrams: 450,
      waterTemp: '92°C / 198°F',
      grindSize: 'Gruesa',
      targetTime: '4:00 min',
      sensoryTarget: 'Sabor denso a compota de ciruela andina y chocolate con leche dulce.',
      steps: [
        {
          title: 'Montaje',
          time: '0:00',
          desc: 'Coloca 30g de café en la prensa.'
        },
        {
          title: 'Infusión',
          time: '0:00 - 0:30',
          desc: 'Vierte 450g de agua caliente y remueve suavemente para asegurar extracción uniforme.'
        },
        {
          title: 'Reposo',
          time: '0:30 - 3:30',
          desc: 'Deja reposar sin perturbar la cámara de inmersión.'
        },
        {
          title: 'Prensado',
          time: '3:30 - 4:00',
          desc: 'Baja el émbolo y sirve.'
        }
      ]
    },
    chemex: {
      ratio: '1:16',
      coffeeGrams: 30,
      waterGrams: 480,
      waterTemp: '93°C / 199°F',
      grindSize: 'Media',
      targetTime: '4:10 min',
      sensoryTarget: 'El método predilecto para Nariño: resalta la dulzura de la mora andina con una nitidez incomparable.',
      steps: [
        {
          title: 'Preparación',
          time: '0:00',
          desc: 'Coloca filtro Chemex, enjuaga con 200g de agua caliente y desecha.'
        },
        {
          title: 'Bloom',
          time: '0:00 - 0:45',
          desc: 'Vierte 70g de agua y deja florecer durante 45 segundos.'
        },
        {
          title: 'Vertido rítmico',
          time: '0:45 - 2:45',
          desc: 'Vierte en círculos suaves manteniendo la cama a media altura hasta alcanzar los 480g.'
        },
        {
          title: 'Servido',
          time: '2:45 - 4:10',
          desc: 'Retira el filtro al completarse el flujo y sirve en copas o tazas anchas.'
        }
      ]
    }
  },
  'santander-honey': {
    v60: {
      ratio: '1:16',
      coffeeGrams: 15,
      waterGrams: 240,
      waterTemp: '92°C / 198°F',
      grindSize: 'Media',
      targetTime: '2:35 min',
      sensoryTarget: 'Melosidad natural de guayaba y vainilla con textura envolvente y balanceada.',
      steps: [
        {
          title: 'Preparación',
          time: '0:00',
          desc: 'Enjuaga el filtro de papel y añade 15g de café proceso Honey.'
        },
        {
          title: 'Bloom dulce',
          time: '0:00 - 0:40',
          desc: 'Vierte 45g de agua a 92°C para abrir las notas a miel y toffee.'
        },
        {
          title: 'Vertido continuo',
          time: '0:40 - 1:45',
          desc: 'Vierte en espiral constante hasta los 240g.'
        },
        {
          title: 'Extracción final',
          time: '1:45 - 2:35',
          desc: 'Deja filtrar y sirve.'
        }
      ]
    },
    french: {
      ratio: '1:15',
      coffeeGrams: 30,
      waterGrams: 450,
      waterTemp: '92°C / 198°F',
      grindSize: 'Gruesa',
      targetTime: '4:15 min',
      sensoryTarget: 'Textura cremosa extraordinaria similar a un toffee artesanal con almendra tostada.',
      steps: [
        {
          title: 'Preparación',
          time: '0:00',
          desc: 'Precalienta y agrega 30g de Santander Honey.'
        },
        {
          title: 'Vertido',
          time: '0:00 - 0:30',
          desc: 'Vierte 450g de agua caliente.'
        },
        {
          title: 'Maceración',
          time: '0:30 - 3:45',
          desc: 'Deja reposar para que el mucílago caramelizado del proceso Honey transfiera toda su dulzura.'
        },
        {
          title: 'Servir',
          time: '3:45 - 4:15',
          desc: 'Presiona y sirve.'
        }
      ]
    },
    chemex: {
      ratio: '1:16',
      coffeeGrams: 30,
      waterGrams: 480,
      waterTemp: '92°C / 198°F',
      grindSize: 'Media',
      targetTime: '4:00 min',
      sensoryTarget: 'Taza armoniosa de gran dulzura con acidez moderada y retrogusto a vainilla.',
      steps: [
        {
          title: 'Filtro y enjuague',
          time: '0:00',
          desc: 'Enjuaga y agrega 30g de café.'
        },
        {
          title: 'Floración',
          time: '0:00 - 0:45',
          desc: 'Bloom con 60g de agua caliente.'
        },
        {
          title: 'Vertido continuo',
          time: '0:45 - 2:30',
          desc: 'Vierte en círculos hasta los 480g.'
        },
        {
          title: 'Drenaje',
          time: '2:30 - 4:00',
          desc: 'Retira filtro y sirve.'
        }
      ]
    }
  }
};
