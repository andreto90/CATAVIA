export interface TrackingMilestone {
  timestamp: string;
  location: string;
  description: string;
  status: 'completed' | 'active' | 'upcoming';
  carrierNotice?: string;
}

export interface TrackingStage {
  id: string;
  stepNumber: number;
  title: string;
  subtitle: string;
  location: string;
  status: 'completed' | 'active' | 'upcoming';
  timestamp?: string;
  detail: string;
}

export interface TrackedOrder {
  orderId: string;
  customerIdNumber?: string;
  customerPhone?: string;
  status: 'roasting' | 'packaging' | 'transit' | 'customs' | 'out_for_delivery' | 'delivered';
  statusLabel: string;
  statusBadgeColor: string;
  progressPercent: number;
  currentStepIndex: number;
  estimatedDelivery: string;
  carrier: string;
  trackingNumber: string;
  origin: {
    farm: string;
    department: string;
    altitude: string;
    country: string;
  };
  destination: {
    recipient: string;
    city: string;
    stateOrProv: string;
    postalCode: string;
    countryName: string;
    countryCode: 'US' | 'CA';
  };
  coffee: {
    id: string;
    name: string;
    variant: string;
    size: string;
    grind: string;
    quantity: number;
    roastDate: string;
    cuppingScore: number;
    flavorNotes: string[];
  };
  temperatureControlled: boolean;
  stages: TrackingStage[];
  milestones: TrackingMilestone[];
}

/**
 * Official Designated Order for ID: 9873660 and CEL: 3217013200 under CATAVIA Service
 */
export const DESIGNATED_USER_ORDER: TrackedOrder = {
  orderId: 'CTV-9873660',
  customerIdNumber: '9873660',
  customerPhone: '3217013200',
  status: 'transit',
  statusLabel: 'En Tránsito Aéreo Internacional CATAVIA',
  statusBadgeColor: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
  progressPercent: 68,
  currentStepIndex: 2,
  estimatedDelivery: 'Mañana, 11:30 AM - 3:00 PM',
  carrier: 'DHL Express Worldwide Cargo · Red CATAVIA',
  trackingNumber: 'CTV-DHL-9873660-CO',
  origin: {
    farm: 'Finca El Mirador',
    department: 'San Agustín, Huila',
    altitude: '1,850 msnm',
    country: 'Colombia'
  },
  destination: {
    recipient: 'Germán Darío Restrepo',
    city: 'Miami',
    stateOrProv: 'FL',
    postalCode: '33101',
    countryName: 'Estados Unidos',
    countryCode: 'US'
  },
  coffee: {
    id: 'huila-geisha',
    name: 'Huila Geisha Reserve - CATAVIA Selección',
    variant: 'Variedad Geisha Lavado Especial',
    size: '12oz (340g)',
    grind: 'Grano Entero (Whole Bean)',
    quantity: 2,
    roastDate: 'Hace 2 días · Tostado Fresco por CATAVIA',
    cuppingScore: 88.5,
    flavorNotes: ['Jazmín', 'Bergamota', 'Miel de Azahar']
  },
  temperatureControlled: true,
  stages: [
    {
      id: 'roast',
      stepNumber: 1,
      title: 'Cosecha & Tueste en Origen',
      subtitle: 'Finca El Mirador, Huila',
      location: 'San Agustín, Huila (1,850 msnm)',
      status: 'completed',
      timestamp: 'Lunes 08:30 AM',
      detail: 'Granos recolectados a mano en su punto óptimo de maduración. Tostado artesanal bajo curva CATAVIA en tambor de hierro fundido.'
    },
    {
      id: 'pack',
      stepNumber: 2,
      title: 'Empaque Hermético & Válvula CATAVIA',
      subtitle: 'Centro de Calidad Bogotá',
      location: 'Hub Especializado Bogotá D.C.',
      status: 'completed',
      timestamp: 'Ayer 02:15 PM',
      detail: 'Sellado al vacío con barrera tricapa y válvula de desgasificación unidireccional para conservar los aceites esenciales del café colombiano.'
    },
    {
      id: 'air_transit',
      stepNumber: 3,
      title: 'Vuelo de Carga Internacional Express',
      subtitle: 'Vuelo Directo BOG ➔ MIA #CTV-8823',
      location: 'Espacio Aéreo Internacional · En Vuelo',
      status: 'active',
      timestamp: 'Hoy 06:45 AM (En Tránsito)',
      detail: 'Aeronave Boeing 767 Cargo en cabina presurizada con temperatura controlada a 18°C para resguardar las notas florales del Geisha.'
    },
    {
      id: 'customs',
      stepNumber: 4,
      title: 'Inspección Fitosanitaria & Aduana',
      subtitle: 'Miami Gateway Port of Entry',
      location: 'Aeropuerto Internacional de Miami (MIA)',
      status: 'upcoming',
      timestamp: 'Programado: Hoy 04:30 PM',
      detail: 'Desaduanaje prioritario con certificado fitosanitario de la Federación Nacional de Cafeteros bajo protocolo comercial CATAVIA.'
    },
    {
      id: 'courier',
      stepNumber: 5,
      title: 'Reparto de Última Milla',
      subtitle: 'Unidad Courier Especializada',
      location: 'Miami Metro Distribution Hub, FL',
      status: 'upcoming',
      timestamp: 'Estimado: Mañana 08:00 AM',
      detail: 'Asignado a mensajero local certificado para entrega directa a la dirección registrada de Germán Darío Restrepo.'
    },
    {
      id: 'delivered',
      stepNumber: 6,
      title: 'Entregado en tu Puerta',
      subtitle: 'Listo para el Ritual en Casa',
      location: 'Miami, FL 33101',
      status: 'upcoming',
      timestamp: 'Estimado: Mañana 11:30 AM',
      detail: 'Confirmación de entrega en puerta con firma digital y recomendación de preparación de la guía CATAVIA.'
    }
  ],
  milestones: [
    {
      timestamp: 'Hoy, 06:45 AM',
      location: 'Aeropuerto Int. El Dorado (BOG), Colombia',
      description: 'Vuelo de carga despegó con manifiesto internacional prioritario CATAVIA #CTV-8823.',
      status: 'completed'
    },
    {
      timestamp: 'Ayer, 07:20 PM',
      location: 'Terminal de Carga Bogotá D.C., Colombia',
      description: 'Inspección de calidad y control fitosanitario aprobados. Contenedor climatizado asignado.',
      status: 'completed'
    },
    {
      timestamp: 'Ayer, 02:15 PM',
      location: 'Taller de Catación & Tueste Bogotá',
      description: 'Empacado bajo atmósfera inerte en empaque oficial CATAVIA con válvula desgasificadora.',
      status: 'completed'
    },
    {
      timestamp: 'Lunes, 08:30 AM',
      location: 'San Agustín, Huila, Colombia',
      description: 'Lote tostado en origen por el maestro tostador. Puntuación de catación Q-Grader: 88.50 puntos SCA.',
      status: 'completed'
    }
  ]
};

export const PRESET_ORDERS: Record<string, TrackedOrder> = {
  'CTV-9873660': DESIGNATED_USER_ORDER,
  'COL-84920': DESIGNATED_USER_ORDER,
  'COL-77219': {
    orderId: 'COL-77219',
    customerIdNumber: '9873660',
    customerPhone: '3217013200',
    status: 'out_for_delivery',
    statusLabel: 'En Reparto Local Hoy',
    statusBadgeColor: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
    progressPercent: 88,
    currentStepIndex: 4,
    estimatedDelivery: 'Hoy, antes de las 4:30 PM',
    carrier: 'FedEx Priority Overnight · Red CATAVIA',
    trackingNumber: 'FDX-US-883719002',
    origin: {
      farm: 'Finca La Cascada',
      department: 'Ciénaga, Sierra Nevada',
      altitude: '1,700 msnm',
      country: 'Colombia'
    },
    destination: {
      recipient: 'Germán Darío Restrepo',
      city: 'Austin',
      stateOrProv: 'TX',
      postalCode: '78704',
      countryName: 'Estados Unidos',
      countryCode: 'US'
    },
    coffee: {
      id: 'sierra-nevada-mist',
      name: 'Sierra Nevada Dark Mist',
      variant: 'Variedad Typica Orgánica',
      size: '2.2lb (1kg)',
      grind: 'Prensa Francesa (Grueso)',
      quantity: 1,
      roastDate: 'Hace 4 días · Tueste medio oscuro',
      cuppingScore: 86.8,
      flavorNotes: ['Cacao 72%', 'Panela Fundida', 'Avellana']
    },
    temperatureControlled: true,
    stages: [
      {
        id: 'roast',
        stepNumber: 1,
        title: 'Cosecha & Tueste en Origen',
        subtitle: 'Sierra Nevada de Santa Marta',
        location: 'Ciénaga (1,700 msnm)',
        status: 'completed',
        timestamp: 'Hace 4 días',
        detail: 'Cosechado bajo sombra de bosque nativo. Notas intensas a chocolate y panela colombiana.'
      },
      {
        id: 'pack',
        stepNumber: 2,
        title: 'Empaque Hermético & Válvula',
        subtitle: 'Laboratorio de Calidad CATAVIA',
        location: 'Bogotá D.C.',
        status: 'completed',
        timestamp: 'Hace 3 días',
        detail: 'Sellado al vacío con protección contra humedad.'
      },
      {
        id: 'air_transit',
        stepNumber: 3,
        title: 'Vuelo de Carga Internacional',
        subtitle: 'BOG ➔ DFW (Dallas)',
        location: 'DFW Hub de Carga',
        status: 'completed',
        timestamp: 'Ayer 11:00 AM',
        detail: 'Arribo a Estados Unidos sin demoras operacionales.'
      },
      {
        id: 'customs',
        stepNumber: 4,
        title: 'Inspección Fitosanitaria & Aduana',
        subtitle: 'Liberación Aduanera US CBP',
        location: 'Dallas/Fort Worth Gateway',
        status: 'completed',
        timestamp: 'Ayer 03:20 PM',
        detail: 'Inspección de alimentos FDA/USDA completada exitosamente.'
      },
      {
        id: 'courier',
        stepNumber: 5,
        title: 'Reparto de Última Milla',
        subtitle: 'Camión Courier Ruta Residencial',
        location: 'Austin, TX · Unidad #402',
        status: 'active',
        timestamp: 'Hoy 08:15 AM (En Ruta)',
        detail: 'Tu mensajero local está en camino con tu café colombiano recién tostado.'
      },
      {
        id: 'delivered',
        stepNumber: 6,
        title: 'Entregado en tu Puerta',
        subtitle: 'Destino Final',
        location: 'Austin, TX 78704',
        status: 'upcoming',
        timestamp: 'Estimado: Hoy 03:30 PM',
        detail: 'Dejaremos el paquete en tu puerta principal según tus instrucciones.'
      }
    ],
    milestones: [
      {
        timestamp: 'Hoy, 08:15 AM',
        location: 'Austin Local Sorting Center, TX',
        description: 'Cargado en camión de reparto para entrega durante el día.',
        status: 'completed'
      },
      {
        timestamp: 'Hoy, 04:30 AM',
        location: 'Central Logística Austin, TX',
        description: 'Arribó a la instalación local tras tránsito nocturno desde Dallas.',
        status: 'completed'
      },
      {
        timestamp: 'Ayer, 03:20 PM',
        location: 'Aduana Internacional DFW Airport, TX',
        description: 'Liberado formalmente por agentes aduaneros estadounidenses.',
        status: 'completed'
      }
    ]
  },
  'COL-31045': {
    orderId: 'COL-31045',
    customerIdNumber: '9873660',
    customerPhone: '3217013200',
    status: 'roasting',
    statusLabel: 'En Tueste Artesanal y Control de Calidad',
    statusBadgeColor: 'bg-orange-500/10 text-orange-500 border-orange-500/20',
    progressPercent: 25,
    currentStepIndex: 0,
    estimatedDelivery: 'Próximo Lunes (5-6 días hábiles)',
    carrier: 'DHL Express International Priority · CATAVIA',
    trackingNumber: 'DHL-CO-31045-EXP',
    origin: {
      farm: 'Finca El Paraíso',
      department: 'Buesaco, Nariño',
      altitude: '2,100 msnm',
      country: 'Colombia'
    },
    destination: {
      recipient: 'Germán Darío Restrepo',
      city: 'Toronto',
      stateOrProv: 'ON',
      postalCode: 'M5V 2T6',
      countryName: 'Canadá',
      countryCode: 'CA'
    },
    coffee: {
      id: 'narino-bourbon',
      name: 'Nariño High-Altitude Bourbon',
      variant: 'Variedad Bourbon Rosado',
      size: '12oz (340g)',
      grind: 'Filtro / V60 (Medio Fino)',
      quantity: 1,
      roastDate: 'Hoy · Tostándose en este momento',
      cuppingScore: 89.0,
      flavorNotes: ['Mora Andina', 'Ciruela Roja', 'Caramelo']
    },
    temperatureControlled: true,
    stages: [
      {
        id: 'roast',
        stepNumber: 1,
        title: 'Cosecha & Tueste en Origen',
        subtitle: 'Finca El Paraíso, Nariño',
        location: 'Buesaco, Nariño (2,100 msnm)',
        status: 'active',
        timestamp: 'En Proceso Hoy',
        detail: 'El maestro tostador de CATAVIA está calibrando la curva de aire caliente para resaltar la dulzura de la mora andina.'
      },
      {
        id: 'pack',
        stepNumber: 2,
        title: 'Empaque Hermético & Válvula',
        subtitle: 'Sellado al Vacío con Nitrógeno',
        location: 'Centro de Exportación Bogotá',
        status: 'upcoming',
        detail: 'Se empacará inmediatamente tras 12 horas de reposo térmico.'
      },
      {
        id: 'air_transit',
        stepNumber: 3,
        title: 'Vuelo de Carga Internacional',
        subtitle: 'BOG ➔ YYZ (Toronto)',
        location: 'Vuelo Express Air Canada Cargo',
        status: 'upcoming',
        detail: 'Tránsito directo sin escalas hacia Canadá.'
      },
      {
        id: 'customs',
        stepNumber: 4,
        title: 'Inspección CBSA Canadá',
        subtitle: 'Toronto Pearson International',
        location: 'Toronto Pearson Airport (YYZ)',
        status: 'upcoming',
        detail: 'Desaduanaje simplificado de café colombiano de especialidad.'
      },
      {
        id: 'courier',
        stepNumber: 5,
        title: 'Reparto de Última Milla',
        subtitle: 'Canada Post / DHL Express Canada',
        location: 'Toronto Downtown Distribution',
        status: 'upcoming',
        detail: 'En ruta directa hacia tu dirección en Ontario.'
      },
      {
        id: 'delivered',
        stepNumber: 6,
        title: 'Entregado en tu Puerta',
        subtitle: 'Toronto, ON M5V 2T6',
        location: 'Destino Final',
        status: 'upcoming',
        detail: 'Listo para preparar en V60 con agua a 93°C.'
      }
    ],
    milestones: [
      {
        timestamp: 'Hoy, 09:10 AM',
        location: 'Tostaduría de Especialidad CATAVIA, Nariño',
        description: 'Inicio de tostión lote #B-88. Temperatura de entrada: 198°C.',
        status: 'completed'
      },
      {
        timestamp: 'Hoy, 07:00 AM',
        location: 'Finca El Paraíso, Buesaco',
        description: 'Muestra de humedad verificada en 11.2% (rango óptimo para exportación).',
        status: 'completed'
      }
    ]
  },
  'COL-99412': {
    orderId: 'COL-99412',
    customerIdNumber: '9873660',
    customerPhone: '3217013200',
    status: 'delivered',
    statusLabel: 'Entregado en Puerta con Éxito',
    statusBadgeColor: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
    progressPercent: 100,
    currentStepIndex: 5,
    estimatedDelivery: 'Entregado Ayer a las 2:15 PM',
    carrier: 'Canada Post Xpresspost · CATAVIA',
    trackingNumber: 'CP-CA-551029431',
    origin: {
      farm: 'Hacienda Santa María',
      department: 'El Socorro, Santander',
      altitude: '1,750 msnm',
      country: 'Colombia'
    },
    destination: {
      recipient: 'Germán Darío Restrepo',
      city: 'Vancouver',
      stateOrProv: 'BC',
      postalCode: 'V6B 2W2',
      countryName: 'Canadá',
      countryCode: 'CA'
    },
    coffee: {
      id: 'santander-honey',
      name: 'Santander Honey Process',
      variant: 'Proceso Honey Amarillo',
      size: '12oz (340g)',
      grind: 'Grano Entero (Whole Bean)',
      quantity: 2,
      roastDate: 'Hace 6 días · Frescura perfecta para desgasificación',
      cuppingScore: 87.5,
      flavorNotes: ['Néctar de Guayaba', 'Vainilla', 'Almendra']
    },
    temperatureControlled: true,
    stages: [
      {
        id: 'roast',
        stepNumber: 1,
        title: 'Cosecha & Tueste en Origen',
        subtitle: 'El Socorro, Santander',
        location: 'Hacienda Santa María',
        status: 'completed',
        timestamp: 'Hace 6 días',
        detail: 'Proceso Honey con secado en camas africanas elevadas.'
      },
      {
        id: 'pack',
        stepNumber: 2,
        title: 'Empaque Hermético & Válvula',
        subtitle: 'Control de Hermeticidad',
        location: 'Bogotá D.C.',
        status: 'completed',
        timestamp: 'Hace 5 días',
        detail: 'Empacado con válvula de frescura CATAVIA.'
      },
      {
        id: 'air_transit',
        stepNumber: 3,
        title: 'Vuelo de Carga Internacional',
        subtitle: 'BOG ➔ YVR (Vancouver)',
        location: 'Vuelo Internacional Prioritario',
        status: 'completed',
        timestamp: 'Hace 3 días',
        detail: 'Transporte aéreo completado sin contratiempos.'
      },
      {
        id: 'customs',
        stepNumber: 4,
        title: 'Inspección Aduana Canadá',
        subtitle: 'Vancouver International Port',
        location: 'Richmond Border Facility, BC',
        status: 'completed',
        timestamp: 'Hace 2 días',
        detail: 'Liberado por la Agencia de Servicios Fronterizos de Canadá.'
      },
      {
        id: 'courier',
        stepNumber: 5,
        title: 'Reparto de Última Milla',
        subtitle: 'Camión Postal Vancouver Downtown',
        location: 'Vancouver, BC',
        status: 'completed',
        timestamp: 'Ayer 09:30 AM',
        detail: 'En ruta de entrega final.'
      },
      {
        id: 'delivered',
        stepNumber: 6,
        title: 'Entregado en tu Puerta',
        subtitle: 'Recibido en Recepción',
        location: 'Vancouver, BC V6B 2W2',
        status: 'completed',
        timestamp: 'Ayer 02:15 PM',
        detail: 'Paquete entregado y firmado por el residente. ¡Disfruta tu auténtico café colombiano con CATAVIA!'
      }
    ],
    milestones: [
      {
        timestamp: 'Ayer, 02:15 PM',
        location: 'Vancouver, BC V6B 2W2',
        description: 'Entregado exitosamente. Firma registrada: G. Restrepo.',
        status: 'completed'
      },
      {
        timestamp: 'Ayer, 09:30 AM',
        location: 'Vancouver Sorting Hub, BC',
        description: 'Asignado a conductor para recorrido matutino.',
        status: 'completed'
      },
      {
        timestamp: 'Hace 2 días, 05:40 PM',
        location: 'Richmond Border Facility, BC',
        description: 'Inspección aduanera finalizada satisfactoriamente.',
        status: 'completed'
      }
    ]
  }
};

/**
 * Normalizes string removing punctuation, dots, spaces, dashes
 */
export function cleanDigits(str: string): string {
  return str.replace(/\D/g, '');
}

/**
 * Looks up tracked order by Customer Identification (ID/Cédula) and Mobile Phone
 * Matches user-specified credentials: ID 9873660 and CEL 3217013200
 */
export function getOrderByCredentials(
  idNumber: string,
  phone: string,
  defaultCountry: 'US' | 'CA' = 'US'
): TrackedOrder {
  const cleanId = cleanDigits(idNumber);
  const cleanTel = cleanDigits(phone);

  // Exact match or partial match for designated credentials (9873660 & 3217013200)
  if (
    cleanId === '9873660' ||
    cleanTel === '3217013200' ||
    cleanTel.endsWith('3217013200') ||
    cleanId.includes('9873660')
  ) {
    const order = JSON.parse(JSON.stringify(DESIGNATED_USER_ORDER));
    order.customerIdNumber = '9873660';
    order.customerPhone = '3217013200';
    if (defaultCountry === 'CA') {
      order.destination.city = 'Toronto';
      order.destination.stateOrProv = 'ON';
      order.destination.countryName = 'Canadá';
      order.destination.countryCode = 'CA';
      order.destination.postalCode = 'M5V 2T6';
    }
    return order;
  }

  // If order ID was passed instead of numeric ID
  if (idNumber.toUpperCase().startsWith('COL-') || idNumber.toUpperCase().startsWith('CTV-')) {
    return getOrderById(idNumber, defaultCountry);
  }

  // Deterministic realistic order for other custom IDs/phones
  const combined = (cleanId || '9873660') + (cleanTel || '3217013200');
  let hash = 0;
  for (let i = 0; i < combined.length; i++) {
    hash = (hash << 5) - hash + combined.charCodeAt(i);
    hash |= 0;
  }
  const positiveHash = Math.abs(hash);

  const base = JSON.parse(JSON.stringify(DESIGNATED_USER_ORDER));
  base.orderId = `CTV-${cleanId ? cleanId.slice(0, 7) : '9873660'}`;
  base.customerIdNumber = cleanId || '9873660';
  base.customerPhone = cleanTel || '3217013200';
  base.destination.recipient = `Cliente CATAVIA (ID: ${cleanId || '9873660'})`;

  if (defaultCountry === 'CA') {
    base.destination.city = 'Toronto';
    base.destination.stateOrProv = 'ON';
    base.destination.countryName = 'Canadá';
    base.destination.countryCode = 'CA';
    base.destination.postalCode = 'M5V 2T6';
  }

  return base;
}

/**
 * Returns a tracked order for any given ID, either by exact match or by dynamic procedural generation
 */
export function getOrderById(orderId: string, defaultCountry: 'US' | 'CA' = 'US'): TrackedOrder {
  const normalized = orderId.trim().toUpperCase();
  if (PRESET_ORDERS[normalized]) {
    return JSON.parse(JSON.stringify(PRESET_ORDERS[normalized]));
  }

  if (normalized.includes('9873660')) {
    return JSON.parse(JSON.stringify(DESIGNATED_USER_ORDER));
  }

  // Generate deterministic realistic order based on the string hash
  let hash = 0;
  for (let i = 0; i < normalized.length; i++) {
    hash = (hash << 5) - hash + normalized.charCodeAt(i);
    hash |= 0;
  }
  const positiveHash = Math.abs(hash);

  const statuses: ('roasting' | 'packaging' | 'transit' | 'customs' | 'out_for_delivery' | 'delivered')[] = [
    'roasting',
    'transit',
    'transit',
    'customs',
    'out_for_delivery',
    'delivered'
  ];
  const selectedStatus = statuses[positiveHash % statuses.length];

  const stepIndex =
    selectedStatus === 'roasting'
      ? 0
      : selectedStatus === 'packaging'
      ? 1
      : selectedStatus === 'transit'
      ? 2
      : selectedStatus === 'customs'
      ? 3
      : selectedStatus === 'out_for_delivery'
      ? 4
      : 5;

  const base = JSON.parse(JSON.stringify(DESIGNATED_USER_ORDER));
  base.orderId = normalized;
  base.status = selectedStatus;
  base.currentStepIndex = stepIndex;
  base.progressPercent = Math.round(((stepIndex + 0.5) / 6) * 100);
  base.stages = base.stages.map((st: TrackingStage, idx: number) => ({
    ...st,
    status: (idx < stepIndex ? 'completed' : idx === stepIndex ? 'active' : 'upcoming') as 'completed' | 'active' | 'upcoming',
    timestamp: idx <= stepIndex ? (idx === stepIndex ? 'En Curso' : 'Completado') : 'Programado'
  }));

  return base;
}
