import { CountryData, RegionMarker, CoffeeBrand, CoffeeTour, BaristaExperience, TastingExperience } from './countriesData.ts';

export interface CountryTranslationOverride {
  name: string;
  editorialKicker: string;
  conceptSubtitle: string;
  narrativeLead: string;
  narrativeBody: string[];
  altitudeRange?: string;
  annualProductionNote?: string;
  keyHarvestSeason?: string;
  regions?: Record<string, Partial<RegionMarker>>;
  brands?: Record<string, Partial<CoffeeBrand>>;
  tours?: Record<string, Partial<CoffeeTour>>;
  baristaClasses?: Record<string, Partial<BaristaExperience>>;
  tastings?: Record<string, Partial<TastingExperience>>;
}

export const COUNTRY_TRANSLATIONS: Record<'en' | 'fr', Record<string, CountryTranslationOverride>> = {
  en: {
    'colombia': {
      name: 'Colombia',
      editorialKicker: 'The Cradle of Andean Smoothness',
      conceptSubtitle: 'Discover Colombia, one cup at a time.',
      narrativeLead: 'Across the three branches of the Andes mountains, Colombia cultivates the world’s most celebrated washed Arabica coffee, where unique microclimates shape an unmistakable identity.',
      narrativeBody: [
        'Colombian geography is a marvel of nature for specialty coffee: volcanic peaks, two oceans, and deep valleys create a thermal range allowing continuous harvesting throughout the year.',
        'Generations of coffee growers on small family farms have mastered selective hand-picking bean by bean, harvesting solely cherries at their peak ripeness.',
        'The result is a cup of supreme balance: unmistakable floral aromas, lively citrus acidity, and silky caramel notes that have won over the most discerning palates worldwide.'
      ],
      altitudeRange: '1,200 - 2,200 m.a.s.l.',
      annualProductionNote: '3rd global producer · World leader in Washed Mild Arabica',
      keyHarvestSeason: 'September - December (Main crop) · April - June (Mitaca fly crop)',
      regions: {
        'huila': {
          name: 'Huila',
          altName: 'Laboyos Valley & San Agustín',
          altitude: '1,400 - 1,950 m.a.s.l.',
          soilOrClimate: 'Volcanic soils from the Colombian Massif',
          profile: 'Bright acidity, red fruit notes, cane sugar, and silky caramel.',
          description: 'Colombia’s most award-winning coffee region in the Cup of Excellence. Temperate winds and fertile volcanic soil produce an unmatched structured sweetness.',
          culturalNote: 'Cradle of deep campesino traditions and globally renowned coffee grower cooperatives.'
        },
        'narino': {
          name: 'Nariño',
          altName: 'Juanambú Canyon & Galeras Slopes',
          altitude: '1,700 - 2,300 m.a.s.l.',
          soilOrClimate: 'Extreme altitude with equatorial radiation shielded by deep canyons',
          profile: 'Refined citrus, jasmine floral notes, sweet lime, and brown sugar with a smooth body.',
          description: 'Due to its close proximity to the equator, coffee thrives at extreme altitudes without frost risk, resulting in slow bean maturation and extraordinary aromatic concentration.',
          culturalNote: 'Breathtaking Andean landscapes where family farms cling to precipitous mountainsides.'
        },
        'eje-cafetero': {
          name: 'Coffee Cultural Landscape',
          altName: 'Quindío, Caldas & Risaralda',
          altitude: '1,300 - 1,850 m.a.s.l.',
          soilOrClimate: 'Coffee Cultural Landscape designated a UNESCO World Heritage site',
          profile: 'Harmonious balance, rich chocolate, toasted walnuts, and sweet red apple.',
          description: 'The historical heartland of Colombian coffee culture. Rolling emerald hills, traditional bahareque architecture, and iconic colorful Jeep Willys.',
          culturalNote: 'Epicenter of agritourism and the iconic national coffee heritage.'
        },
        'sierra-nevada': {
          name: 'Sierra Nevada',
          altName: 'Santa Marta & Cesar',
          altitude: '1,000 - 1,700 m.a.s.l.',
          soilOrClimate: 'Highest coastal mountain range on Earth facing the Caribbean Sea',
          profile: 'Intense creamy body, dark cocoa notes, toasted almond, and dried fruit.',
          description: 'Shade-grown coffees cultivated under lush jungle canopies in sacred harmony with the indigenous Arhuaco and Kogui communities.',
          culturalNote: 'Ancestral practices honoring water stewardship and Mother Earth (Seynekun).'
        },
        'antioquia': {
          name: 'Antioquia',
          altName: 'Jericó, Fredonia & Andes',
          altitude: '1,300 - 1,900 m.a.s.l.',
          soilOrClimate: 'Rugged terrain and century-old muleteer traditions',
          profile: 'Sweet panela aroma, velvety medium body, and balanced fruit acidity.',
          description: 'Pioneers of 19th-century coffee expansion. Heritage towns with flowering balconies and storied colonial coffee haciendas.',
          culturalNote: 'The tenacious spirit of the arrieros and lifelong devotion to the mountain soil.'
        }
      },
      brands: {
        'catavia-colombia': {
          name: 'CATAVIA Master Selection',
          tagline: 'Single-origin Colombian specialty coffee delivered from farm to North America',
          description: 'The signature CATAVIA experience: hand-selected microlots grown above 1,700 meters, roasted fresh to order, and air-shipped to protect every delicate aromatic compound.',
          location: 'Huila & Nariño, Colombia',
          sensoryNotes: ['Orange Blossom', 'Artisanal Caramel', 'Wild Berries', 'Criollo Cacao'],
          farmExperience: 'Complete experience available on the official Colombia portal.'
        }
      },
      tours: {
        'tour-colombia-eje': {
          title: 'Sensory Journey of the Coffee Axis',
          location: 'Salento & Cocora Valley, Quindío',
          duration: 'Full Day Experience',
          operator: 'UNESCO Heritage Haciendas',
          type: 'Living Farm & Landscape Tour',
          description: 'Walk through shade-grown coffee groves, pick ripe cherries with traditional baskets, observe hand pulping, and enjoy a guided tasting with the master roaster.',
          highlights: ['Wax Palms of Cocora Valley', 'Sun-Drying and Milling Demonstration', 'Comparative Tasting of 4 Varietals']
        }
      },
      baristaClasses: {
        'barismo-colombia': {
          title: 'Andean Filtered Brewing & Chemex Immersion',
          category: 'metodos',
          duration: '4 hours',
          level: 'All levels',
          description: 'Master how to extract the full aromatic complexity of high-altitude Colombian coffees using manual pour-over techniques: V60, Chemex, and AeroPress.',
          keyLearnings: ['Water-to-coffee brewing ratio', 'Water temperature & pour rate curve', 'Micrometric grind calibration']
        }
      },
      tastings: {
        'catacion-colombia': {
          title: 'Andean Terroir Cupping: Huila vs. Nariño vs. Sierra Nevada',
          format: 'sensorial',
          description: 'Experience firsthand how altitude and soil chemistry dramatically alter cup profile following the official SCA cupping protocol.',
          sensoryWheel: {
            aroma: 'Jasmine blossom, sugarcane honey, and white chocolate',
            acidity: 'Bright malic and sweet Valencia orange acidity',
            body: 'Silky, enveloping, and impeccably clean',
            sweetness: 'Pure panela and raw cane sugar',
            finish: 'Long and lingering with dried fruit nuances'
          },
          sampleProfiles: [
            { name: 'Huila San Agustín', process: 'Traditional Washed', notes: 'Red berries and toffee caramel' },
            { name: 'Nariño Alto del Obispo', process: 'Extended Fermentation', notes: 'Orange blossom and kaffir lime' }
          ]
        }
      }
    },

    'costa-rica': {
      name: 'Costa Rica',
      editorialKicker: 'Pura Vida in Cloud Forests',
      conceptSubtitle: 'Symphony of microclimates and pure biodiversity.',
      narrativeLead: 'A global pioneer in specialty coffee and environmental sustainability, Costa Rica is home to eight unique growing regions blessed by volcanic soils and artisanal devotion.',
      narrativeBody: [
        'Costa Rica is the only country in the world where the cultivation of anything other than 100% Arabica is prohibited by law, ensuring an unwavering commitment to supreme cup quality.',
        'In the cloud forests of Monteverde and the high peaks of Tarrazú, micro-mills pioneered the honey and anaerobic processing methods that revolutionized the international coffee world.',
        'Between clean rivers and volcanic ridges, Costa Rican coffee growers embody the Pura Vida philosophy: radical respect for nature and uncompromising pursuit of sensory perfection.'
      ],
      altitudeRange: '1,200 - 1,900 m.a.s.l.',
      annualProductionNote: 'Global pioneer in sustainability and origin-certified coffees',
      keyHarvestSeason: 'November - March',
      regions: {
        'monteverde': {
          name: 'Monteverde',
          altName: 'Tilarán Range & Cloud Forest Reserve',
          altitude: '1,300 - 1,650 m.a.s.l.',
          soilOrClimate: 'Dense mist, volcanic humus, and evergreen biodiversity canopy',
          profile: 'Silky body, sweet hazelnut, golden honey, and crisp green apple.',
          description: 'A cloud forest sanctuary where coffee grows in intimate symbiosis with the biological reserve, nourished by persistent trade winds and gentle mists.',
          culturalNote: 'Founded with a deep Quaker and Costa Rican conservation ethos; home to the inspiring Café Monteverde cooperative.'
        },
        'tarrazu': {
          name: 'Tarrazú',
          altName: 'Los Santos Region',
          altitude: '1,400 - 1,900 m.a.s.l.',
          soilOrClimate: 'Steep volcanic hillsides and pronounced Pacific dry season',
          profile: 'Intense citrus acidity, jasmine blossom, milk chocolate, and sparkling finish.',
          description: 'The world benchmark for Costa Rican strictly hard bean (SHB) coffee. Extreme elevation produces dense, intensely aromatic cherries.',
          culturalNote: 'A valley of generational pickers and family micro-mills that collect international awards annually.'
        },
        'valle-central': {
          name: 'Central Valley',
          altName: 'Poás & Barva Volcano Slopes',
          altitude: '1,200 - 1,600 m.a.s.l.',
          soilOrClimate: 'Centuries-old volcanic ash soils and distinct wet and dry seasons',
          profile: 'Balanced body, ripe apricot, bittersweet chocolate, and fine floral notes.',
          description: 'The historic cradle where coffee was first introduced to Costa Rica at the end of the 18th century, still framed by active volcanic slopes.',
          culturalNote: 'Historic colonial coffee haciendas and traditional water-powered wet mills.'
        },
        'valle-occidental': {
          name: 'Western Valley',
          altName: 'Naranjo, San Ramón & Palmares',
          altitude: '1,200 - 1,750 m.a.s.l.',
          soilOrClimate: 'Fertile mountain soils and steady afternoon breezes',
          profile: 'Sweet peach, orange peel, wild honey, and vanilla bean.',
          description: 'A hotbed of experimental processing techniques in Costa Rica, producing recurring Cup of Excellence champions.',
          culturalNote: 'Cooperative spirit where smallholder producers innovate in eco-friendly milling.'
        },
        'brunca': {
          name: 'Brunca',
          altName: 'Pérez Zeledón & Coto Brus',
          altitude: '900 - 1,500 m.a.s.l.',
          soilOrClimate: 'Lush tropical transition soils near Chirripó National Park',
          profile: 'Heavy creamy body, molasses, toasted almond, and sweet citrus zest.',
          description: 'Southern mountain slopes with abundant rainfall and vibrant biodiversity, emerging as a dynamic producer of complex microlots.',
          culturalNote: 'Close ties to indigenous Brunca culture, colorful textile crafts, and agroforestry.'
        }
      },
      brands: {
        'cafe-monteverde': {
          name: 'Café Monteverde',
          tagline: 'Conservation coffee grown in the heart of the Monteverde Cloud Forest',
          description: 'A pioneering family association dedicated for decades to sustainable organic agriculture, cloud forest watershed protection, and producing world-class specialty lots with full transparency.',
          location: 'Monteverde, Puntarenas',
          sensoryNotes: ['Cloud Forest Honey', 'Hazelnut Praline', 'Red Plum', 'Velvety Milk Chocolate'],
          farmExperience: 'Open to immersive educational visits, biological corridors, and cupping lab tours.'
        },
        'cafe-britt': {
          name: 'Café Britt',
          tagline: 'Pioneers of Costa Rican gourmet roasted coffee since 1985',
          description: 'The brand that demonstrated Costa Ricans could roast and enjoy the finest export-grade beans at home, championing regional single-origins across North America.',
          location: 'Mercedes Norte, Heredia',
          sensoryNotes: ['Dark Chocolate Truffle', 'Roasted Almond', 'Brown Sugar'],
          farmExperience: 'Classic theatrical coffee tour in Heredia highlighting history and folklore.'
        },
        'doka-estate': {
          name: 'Hacienda Doka Estate',
          tagline: 'Historical volcanic coffee crafted on the slopes of Poás Volcano',
          description: 'Owned by the Vargas family since 1931, preserving the country’s oldest working water-powered mill (beneficio), powered purely by mountain river currents.',
          location: 'Alajuela, Poás Volcano',
          sensoryNotes: ['Cane Sugar', 'Sweet Tangerine', 'Toasted Walnut'],
          farmExperience: 'Historic wet mill tours showing 100-year-old wooden machinery and volcanic fields.'
        }
      },
      tours: {
        'monteverde-coffee-tour': {
          title: 'Café Monteverde Farm & Cloud Forest Experience',
          location: 'Monteverde, Costa Rica',
          duration: '2.5 hours',
          operator: 'Café Monteverde Community Collective',
          type: 'Regenerative Farm & Forest Walk',
          description: 'Walk through agroforestry coffee parcels, discover native bird corridors, observe eco-friendly honey processing, and cup fresh roast profiles with licensed Q-graders.',
          highlights: ['Agroforestry & Carbon-Neutral Practices', 'Live Honey and Natural Drying Patios', 'Guided Professional Sensory Tasting']
        },
        'doka-historic-tour': {
          title: 'Doka Estate: Historic Hydraulic Mill & Plantation Tour',
          location: 'Poás Volcano, Alajuela',
          duration: '2 hours',
          operator: 'Hacienda Doka Estate',
          type: 'Living Industrial Heritage Tour',
          description: 'Explore the oldest water-powered coffee processing mill in Central America, watch traditional fermentation tanks, and taste freshly roasted volcanic coffees.',
          highlights: ['19th-Century Water Wheel Demonstration', 'Botanical Variety Garden', 'Volcanic Soil Roastery Tasting']
        }
      },
      baristaClasses: {
        'metodos-chorreador-costa-rica': {
          title: 'The Art of the Chorreador & Manual Pour-Over Methods',
          category: 'metodos',
          duration: '3 hours',
          level: 'All levels',
          description: 'Learn the physics and ancestral secrets of the Costa Rican cotton filter chorreador, compared side-by-side with modern V60 and Kalita Wave brewers.',
          keyLearnings: ['Cotton sock filter calibration and care', 'Extraction temperature control', 'Enhancing sweetness in high-altitude coffees']
        },
        'barismo-honey-process': {
          title: 'Extracting Honey & Anaerobic Processed Coffees',
          category: 'barismo',
          duration: '3.5 hours',
          level: 'Intermediate',
          description: 'Calibrate grind size, water chemistry, and brew temperatures to unlock the delicate fruit mucilage notes of Yellow, Red, and Black Honey coffees.',
          keyLearnings: ['Managing intense cup sweetness and body', 'Taming heavy fruit ferment notes', 'Espresso dial-in for honey-processed beans']
        }
      },
      tastings: {
        'catacion-monteverde-honey': {
          title: 'Sensory Trilogy of Processes: Washed vs. Yellow Honey vs. Black Honey',
          format: 'comparativa',
          description: 'A comparative cupping of the exact same Caturra harvest processed three distinct ways to understand how mucilage contact shapes the final cup profile.',
          sensoryWheel: {
            aroma: 'Jasmine, orange blossom, and wildflower honey',
            acidity: 'Vibrant malic apple and crisp lime zest',
            body: 'Creamy, coating, and velvety smooth',
            sweetness: 'Golden honeycomb and panela molasses',
            finish: 'Persistent with echoes of roasted nuts and cocoa nibs'
          },
          sampleProfiles: [
            { name: 'Monteverde Washed SHB', process: 'Washed', notes: 'Green apple, jasmine, and sparkling citric acidity' },
            { name: 'Monteverde Yellow Honey', process: 'Honey', notes: 'Apricot jam, wildflower honey, and silky body' },
            { name: 'Monteverde Black Honey', process: 'Black Honey', notes: 'Dark fig, blackberry liqueur, and molasses' }
          ]
        }
      }
    },

    'panama': {
      name: 'Panama',
      editorialKicker: 'The Olympus of Geisha in the Highlands',
      conceptSubtitle: 'The most coveted floral coffee on earth.',
      narrativeLead: 'On the volcanic slopes of Mount Barú and amidst the cool mists of Boquete thrive the world’s most aromatic and highly priced coffees: legendary Geisha microlots of supreme floral finesse.',
      narrativeBody: [
        'Panama wrote modern coffee history when the Peterson family at Hacienda La Esmeralda rediscovered the Ethiopian Geisha varietal in Boquete in 2004, stunning international cuppers with aromas of bergamot and jasmine.',
        'The combination of rich volcanic soil, continuous bajareque mists, and dual ocean breezes between the Pacific and Caribbean creates an unparalleled microclimate on Mount Barú.',
        'At the Best of Panama auctions, local lots regularly shatter world pricing records, establishing Boquete, Volcán, and Renacimiento as the global sanctuary of luxury coffee.'
      ],
      altitudeRange: '1,400 - 2,000 m.a.s.l.',
      annualProductionNote: 'World pinnacle of luxury microlots and Best of Panama auctions',
      keyHarvestSeason: 'December - March',
      regions: {
        'boquete': {
          name: 'Boquete',
          altName: 'Barú Volcano Eastern Slopes',
          altitude: '1,450 - 1,950 m.a.s.l.',
          soilOrClimate: 'Volcanic andosol, persistent bajareque mists, and cold night winds',
          profile: 'Jasmine, bergamot, lemongrass, white peach, and tea-like delicate body.',
          description: 'The world epicenter of the Geisha varietal. Narrow mountain valleys channel cool breezes that prolong cherry maturation, yielding unmatched floral intensity.',
          culturalNote: 'Home to multi-generational pioneering families and indigenous Ngäbe-Buglé master harvest pickers.'
        },
        'volcan': {
          name: 'Tierras Altas (Volcán & Cerro Punta)',
          altName: 'Barú Volcano Western Slopes',
          altitude: '1,500 - 2,100 m.a.s.l.',
          soilOrClimate: 'Deep volcanic soil, cool mountain temperatures, and pine forests',
          profile: 'Black tea, Meyer lemon, passionfruit, and refined floral honeysuckle.',
          description: 'Perched on the western flank of the volcano, this region enjoys higher altitudes and dramatic diurnal temperature shifts, producing dense, complex beans.',
          culturalNote: 'Known as the breadbasket of Panama, blending Swiss immigrant agricultural heritage with cutting-edge cupping labs.'
        },
        'renacimiento': {
          name: 'Renacimiento',
          altName: 'Costa Rica Border Range & Río Sereno',
          altitude: '1,100 - 1,600 m.a.s.l.',
          soilOrClimate: 'Lush tropical volcanic foothills with rich organic matter',
          profile: 'Full milk chocolate body, sweet dried plum, orange blossom, and brown sugar.',
          description: 'A secluded border valley cultivating exceptional traditional Arabicas, Catuai, Typica, and emerging high-altitude Geishas.',
          culturalNote: 'Quiet farming communities pioneering sustainable biodiversity and organic shade farming.'
        }
      },
      brands: {
        'hacienda-la-esmeralda': {
          name: 'Hacienda La Esmeralda',
          tagline: 'Pioneers of the modern Geisha revolution in world coffee history',
          description: 'The Peterson family placed Panama on the global luxury map in 2004 when their Jaramillo Geisha stunned judges with floral notes never before tasted in coffee.',
          location: 'Boquete, Chiriquí',
          sensoryNotes: ['Jasmine Flower', 'Earl Grey Bergamot', 'White Peach', 'Orange Blossom Honey'],
          farmExperience: 'Exclusive cupping sessions and botanical tours by special reservation.'
        },
        'kotowa-coffee': {
          name: 'Café Kotowa',
          tagline: 'Over a century of volcanic craftsmanship on the slopes of Mount Barú',
          description: 'Founded in the early 20th century by Canadian pioneer Alexander Duncan MacIntyre, Kotowa translates to "mountains" in native language, producing champion lots.',
          location: 'Boquete, Chiriquí',
          sensoryNotes: ['Mandarin Blossom', 'Ripe Apricot', 'Silky Caramel'],
          farmExperience: 'Scenic walking trails, canopy tours, and state-of-the-art wet milling visits.'
        },
        'elida-estate': {
          name: 'Elida Estate (Lamastus Family)',
          tagline: 'Ultra-high elevation coffees and world auction record breakers',
          description: 'The Lamastus family has cultivated the highest coffee trees in Panama for over a century, setting multiple all-time records in the Best of Panama auctions.',
          location: 'Boquete, Chiriquí',
          sensoryNotes: ['Lavender', 'Passion Fruit', 'Champagne Crispness', 'Floral Honey'],
          farmExperience: 'High-elevation farm tours and specialized Q-grader cupping workshops.'
        }
      },
      tours: {
        'boquete-geisha-trail': {
          title: 'Supreme Geisha Trail in Boquete',
          location: 'Boquete, Chiriquí',
          duration: '3.5 hours',
          operator: 'Tierras Altas Specialty Coffee Alliance',
          type: 'Exclusive Microlot Farm Walk',
          description: 'Stroll among century-old Geisha and Typica trees on the mist-shrouded slopes of Mount Barú, inspect high-altitude drying beds, and participate in an elite cupping.',
          highlights: ['High-Altitude Microclimate Viewing', 'Slow Drying Raised African Beds', 'Private Cupping of 90+ Point Geishas']
        },
        'kotowa-nature-tour': {
          title: 'Kotowa Coffee, Cacao & Cloud Forest Tour',
          location: 'Boquete, Chiriquí',
          duration: '3 hours',
          operator: 'Kotowa Estate Tours',
          type: 'Farm & Roastery Experience',
          description: 'Discover the complete journey from seed to cup: high-elevation nurseries, solar drying patios, modern roasters, and bean-to-bar chocolate pairings.',
          highlights: ['Century-Old Coffee Mill History', 'Micro-Roaster Demonstration', 'Estate Coffee & Cacao Pairing']
        }
      },
      baristaClasses: {
        'masterclass-geisha-brewing': {
          title: 'Masterclass: Brewing High-Elevation Floral Varietals (Geisha)',
          category: 'metodos',
          duration: '3.5 hours',
          level: 'Advanced',
          description: 'Discover how to preserve the ethereal volatile aromatics of Geisha using soft-water brewing, calibrated pour speeds, and specialized flat-bottom drippers.',
          keyLearnings: ['Optimizing water mineral composition for floral notes', 'Bypass brewing techniques on V60', 'Tasting notes evolution across temperature drops']
        }
      },
      tastings: {
        'catacion-geisha-panama': {
          title: 'Vertical Geisha Cupping: Washed vs. Natural vs. Anaerobic Slow Dry',
          format: 'comparativa',
          description: 'An elite cupping of world-class Panamanian Geisha lots from the same harvest block, demonstrating how fermentation alters jasmine, bergamot, and tropical fruit intensity.',
          sensoryWheel: {
            aroma: 'Jasmine, bergamot, lemongrass, and elderflower',
            acidity: 'Effervescent, sparkling champagne and Meyer lemon',
            body: 'Delicate, tea-like, silky, and crystalline',
            sweetness: 'Clover honey, raw sugar cane, and ripe peach',
            finish: 'Astonishingly long, floral perfume lingering for minutes'
          },
          sampleProfiles: [
            { name: 'Boquete Geisha Washed', process: 'Washed', notes: 'Pure jasmine, bergamot, and white peach' },
            { name: 'Boquete Geisha Natural', process: 'Natural', notes: 'Ripe mango, strawberry, and floral honey' }
          ]
        }
      }
    },

    'brasil': {
      name: 'Brazil',
      editorialKicker: 'The Coffee Giant & Natural Sweetness',
      conceptSubtitle: 'Vastness, tradition, and silky chocolates.',
      narrativeLead: 'With vast high plateaus and generous volcanic terroir across Minas Gerais and São Paulo, Brazil is the world’s largest producer, undisputed master of sweet, chocolaty coffees.',
      narrativeBody: [
        'Brazil has shaped the global coffee market for over 150 years. From historical colonial fazendas to modern bio-engineered estates, its scale and mastery are unparalleled.',
        'Thanks to abundant tropical sunshine and dry harvest months, Brazilian producers perfected the Natural and Pulped Natural processes, letting the coffee cherry dry under the sun to infuse rich sweetness into the seed.',
        'The resulting cup profile is adored by espresso masters worldwide: immense crema, low balanced acidity, deep dark chocolate notes, and a silky toasted hazelnut body.'
      ],
      altitudeRange: '800 - 1,400 m.a.s.l.',
      annualProductionNote: 'World’s largest producer and exporter for over 150 years',
      keyHarvestSeason: 'May - September',
      regions: {
        'sul-de-minas': {
          name: 'Sul de Minas',
          altName: 'Serra da Mantiqueira',
          altitude: '950 - 1,400 m.a.s.l.',
          soilOrClimate: 'Rolling granite hills, mild mountain climate, and rich volcanic loam',
          profile: 'Velvety milk chocolate, roasted almond, caramel, and gentle citrus acidity.',
          description: 'The historic epicentre of Brazilian specialty coffee. Mountainous terrain where hand-picked microlots flourish alongside multi-generational family fazendas.',
          culturalNote: 'Rich heritage of agricultural colleges, artisan cooperatives, and traditional Brazilian farm hospitality.'
        },
        'cerrado-mineiro': {
          name: 'Cerrado Mineiro',
          altName: 'Alto Paranaíba Plateau',
          altitude: '800 - 1,250 m.a.s.l.',
          soilOrClimate: 'Flat highland plateaus with warm sunny days and cool, crisp dry nights',
          profile: 'Intense nutty praline, molten caramel, dark cocoa, and lingering sweet finish.',
          description: 'The first coffee region in Brazil granted a protected Designation of Origin (D.O.), known for precise drip irrigation and immaculate lot traceability.',
          culturalNote: 'Modern, highly organized agricultural cooperatives with rigorous sustainability standards.'
        },
        'mogiana-paulista': {
          name: 'Mogiana Paulista',
          altName: 'São Paulo Northern Border',
          altitude: '900 - 1,300 m.a.s.l.',
          soilOrClimate: 'Fertile red clay soils (Terra Roxa) and undulating hillsides',
          profile: 'Heavy creamy body, sweet honey, chocolate ganache, and ripe dried fruit.',
          description: 'Over 200 years of coffee history. Historic railway lines once transported these revered harvests from grand fazendas directly to the Port of Santos.',
          culturalNote: 'Colonial coffee manor houses, cobblestone drying patios, and pioneering agronomy.'
        },
        'matas-de-minas': {
          name: 'Matas de Minas',
          altName: 'Pico da Bandeira Foothills',
          altitude: '700 - 1,300 m.a.s.l.',
          soilOrClimate: 'Steep Atlantic rainforest terrain and lush humid valleys',
          profile: 'Cane sugar sweetness, toasted toffee, floral hints, and bright balance.',
          description: 'A rugged mountain region farmed predominantly by smallholders who hand-pick each slope, gaining immense prestige in quality competitions.',
          culturalNote: 'Cooperative agriculture deeply intertwined with Atlantic Forest biodiversity protection.'
        }
      },
      brands: {
        'daterra-coffee': {
          name: 'Daterra Coffee',
          tagline: 'Science, sustainability, and absolute mastery of quality in Cerrado',
          description: 'Internationally acclaimed for B-Corp certification, cutting-edge vacuum packaging (Penta Box), and providing coffees used by multiple World Barista Champions.',
          location: 'Patrocínio, Cerrado Mineiro',
          sensoryNotes: ['Toffee Praline', 'Dark Cocoa Truffle', 'Roasted Macadamia', 'Golden Honey'],
          farmExperience: 'Technical tours highlighting precision agriculture and post-harvest drying labs.'
        },
        'ipanema-coffees': {
          name: 'Ipanema Coffees',
          tagline: 'Sustainable specialty harvests from the rolling mountains of Sul de Minas',
          description: 'Spanning historic fazendas across the Mantiqueira mountains, renowned for their Premier Cru selections with complete micro-climate traceability.',
          location: 'Alfenas, Sul de Minas',
          sensoryNotes: ['Milk Chocolate', 'Toasted Hazelnut', 'Caramelized Orange'],
          farmExperience: 'Large-scale sustainable farm walks and dedicated sensory calibration.'
        },
        'faf-brasil': {
          name: 'Fazenda Ambiental Fortaleza (FAF)',
          tagline: 'Regenerative organic farming and the Bob-o-Link artisan movement',
          description: 'Led by the Croce family, FAF revolutionized sustainable farming by converting monoculture estates into biodiverse bird and water sanctuaries.',
          location: 'Mococa, Mogiana',
          sensoryNotes: ['Brown Sugar', 'Ripe Apricot', 'Floral Honey', 'Cacao Nibs'],
          farmExperience: 'Organic farm stay, bird watching, and farm-to-table culinary dinners.'
        }
      },
      tours: {
        'sul-de-minas-route': {
          title: 'Specialty Coffee Route in Sul de Minas',
          location: 'São Lourenço & Carmo de Minas, Minas Gerais',
          duration: 'Full Day',
          operator: 'Rota do Café Especial Mantiqueira',
          type: 'Mountain Fazenda Heritage Tour',
          description: 'Ride vintage trains and modern 4x4s into high mountain estates, walk sun-drenched drying patios, and savor fresh farm breakfasts with traditional pão de queijo.',
          highlights: ['Panoramic Serra da Mantiqueira Views', 'Tasting Traditional Brazilian Farm Breakfast', 'Natural Sun-Drying Patio Demonstration']
        },
        'daterra-immersion': {
          title: 'Daterra Sustainability & Coffee Science Tour',
          location: 'Patrocínio, Cerrado Mineiro',
          duration: '4 hours',
          operator: 'Daterra Sustainable Farms',
          type: 'Agro-Science & Cupping Tour',
          description: 'Observe sustainable soil regeneration, closed-loop composting systems, innovative anaerobic fermentation tanks, and Penta Box vacuum packaging.',
          highlights: ['B-Corp Certified Ecological Forest Reserves', 'Anaerobic Tree Fermentation Tanks', 'World Barista Competition Masterclass']
        }
      },
      baristaClasses: {
        'espresso-brasileno': {
          title: 'The Science of Brazilian Espresso: Crema, Body & Density',
          category: 'barismo',
          duration: '3.5 hours',
          level: 'All levels',
          description: 'Understand why high-density naturally processed Brazilian beans are the worldwide foundation of espresso blends: maximizing hazelnut crema and sweetness.',
          keyLearnings: ['Dialing in naturally processed coffees', 'Temperature stability and pressure profiling', 'Steaming milk to complement dark chocolate notes']
        }
      },
      tastings: {
        'catacion-bourbon-brasil': {
          title: 'Tasting Classic Brazilian Varietals: Yellow Bourbon vs. Catuaí vs. Mundo Novo',
          format: 'comparativa',
          description: 'A structured cupping comparing Brazil’s most celebrated botanical varieties grown under the same climate to decipher differences in sweetness, acidity, and mouthfeel.',
          sensoryWheel: {
            aroma: 'Toasted hazelnut, cocoa butter, and dark caramel',
            acidity: 'Mild, sweet, malic, and rounded',
            body: 'Exceptionally thick, velvety, and syrupy',
            sweetness: 'Dulce de leche, brown sugar, and toffee',
            finish: 'Long, persistent, and chocolaty with zero bitterness'
          },
          sampleProfiles: [
            { name: 'Sul de Minas Yellow Bourbon', process: 'Pulped Natural', notes: 'Caramel toffee, ripe apricot, and creamy milk chocolate' },
            { name: 'Cerrado Red Catuaí', process: 'Natural', notes: 'Dark cocoa, roasted hazelnut, and brown sugar' }
          ]
        }
      }
    },

    'turquia': {
      name: 'Turkey',
      editorialKicker: 'Five Centuries of Ottoman Hospitality',
      conceptSubtitle: 'An ancestral ritual in copper, sand, and poetry.',
      narrativeLead: 'Though not growing its own agricultural crop due to climate, Turkey forged the world’s first coffee civilization: the cezve brewing ritual, UNESCO intangible cultural heritage that conquered Europe.',
      narrativeBody: [
        'In the 16th century, coffee arrived in Istanbul from Yemen through Ottoman governors. In the streets of Tahtakale, the world’s very first coffeehouses (kahvehanes) were born, forever changing social dialogue and diplomacy.',
        'Turkish coffee is the oldest brewing method still practiced in its original form: extra-fine impalpable grind simmered slowly in a hand-hammered copper cezve over embers or hot sand.',
        'In Turkish culture, offering coffee is an act of deep hospitality and respect: "A cup of coffee commits one to forty years of friendship." Today, Istanbul merges this 500-year ceremony with third-wave specialty roasting.'
      ],
      altitudeRange: 'UNESCO Cultural Heritage',
      annualProductionNote: 'Intangible Cultural Heritage of Humanity (UNESCO 2013)',
      keyHarvestSeason: 'Living tradition 365 days a year in historic kahvehanes',
      regions: {
        'estambul-eminonu': {
          name: 'Istanbul: Eminönü & Tahtakale',
          altName: 'Spice Bazaar & Historical Roasters Alley',
          altitude: 'Bosphorus Sea Level',
          soilOrClimate: 'Historic stone alleys, maritime breezes, and century-old spice aromas',
          profile: 'Intense roasted notes, rich dark chocolate, warming cardamom, and velvety foam.',
          description: 'The historic ground zero where the world’s first coffeehouses opened in 1554. The intoxicating aroma of freshly ground coffee wafts through the Spice Bazaar.',
          culturalNote: 'Home to multi-generational artisanal copper coppersmiths and historic ground coffee masters.'
        },
        'estambul-beyoglu': {
          name: 'Istanbul: Beyoğlu & Karaköy',
          altName: 'Galata & Istiklal Avenue',
          altitude: 'Golden Horn Hills',
          soilOrClimate: 'Cosmopolitan waterfront, historic arcades, and modern roasteries',
          profile: 'Dense creamy mouthfeel, dried fig, roasted hazelnut, and delicate clove.',
          description: 'The bohemian heart of Istanbul where Ottoman coffeehouse culture seamlessly connects with cutting-edge specialty roasters and Q-graders.',
          culturalNote: 'Famous historic cafes like Mandabatmaz where poets, journalists, and travelers have gathered for decades.'
        },
        'estambul-kadikoy': {
          name: 'Istanbul: Kadıköy (Asian Side)',
          altName: 'Moda & Marmara Sea',
          altitude: 'Bosphorus Coastline',
          soilOrClimate: 'Sea breezes, vibrant pedestrian markets, and modern coffee boutiques',
          profile: 'Refined single-origins brewed in cezve: stone fruit, floral spice, and sweet cacao.',
          description: 'The energetic cultural quarter on the Asian shore, spearheading the modern reinvention of Turkish coffee using single-origin microlots.',
          culturalNote: 'A thriving artistic district filled with contemporary specialty roasters and sunny terrace cafes.'
        },
        'gaziantep': {
          name: 'Gaziantep & Southeastern Anatolia',
          altName: 'Silk Road Caravan Inns & Tahmis Kahvesi',
          altitude: 'Historic Anatolian Plateau',
          soilOrClimate: 'Dry continental climate, ancient stone caravanserais, and wild pistachios',
          profile: 'Roasted wild pistachio (Menengiç), rich cream, mastic resin, and warm spices.',
          description: 'Along the historic Silk Road, the Tahmis Kahvesi (founded in 1635) preserves ancestral regional preparation methods, including decaffeinated Menengiç coffee.',
          culturalNote: 'World Capital of Gastronomy with ancient copper workshops and grand historic caravanserais.'
        }
      },
      brands: {
        'mehmet-efendi': {
          name: 'Kurukahveci Mehmet Efendi',
          tagline: 'The undisputed national icon of Turkish coffee since 1871',
          description: 'Before Mehmet Efendi, coffee was sold as raw green beans and roasted at home. He pioneered roasting and grinding fresh beans ready to brew on Tahtakale Street.',
          location: 'Eminönü, Istanbul',
          sensoryNotes: ['Deep Cocoa', 'Toasted Hazelnut', 'Warm Spice', 'Traditional Dark Roast'],
          farmExperience: 'Historic flagship store outside the Spice Bazaar grinding fresh coffee daily.'
        },
        'mandabatmaz': {
          name: 'Mandabatmaz',
          tagline: 'The legendary velvety foam of Beyoğlu since 1967',
          description: 'A beloved small alleyway coffee institution off Istiklal Street. Its name means "even a water buffalo wouldn’t sink in this foam," celebrating its dense, thick crema.',
          location: 'Beyoğlu, Istanbul',
          sensoryNotes: ['Dark Chocolate Ganache', 'Dried Black Fig', 'Velvety Thick Foam'],
          farmExperience: 'Authentic counter seating watching master baristas brew over open flames.'
        },
        'petra-roasting': {
          name: 'Petra Roasting Co.',
          tagline: 'Pioneers of Istanbul’s contemporary specialty coffee revolution',
          description: 'Curating world-class single-origin coffees from Ethiopia, Colombia, and Central America, roasted on custom equipment and brewed in modern brass cezves.',
          location: 'Gayrettepe & Karaköy, Istanbul',
          sensoryNotes: ['Bergamot', 'Raspberry Jam', 'Floral Cocoa'],
          farmExperience: 'Modern open roastery, vintage design gallery, and specialty barista lab.'
        }
      },
      tours: {
        'istanbul-coffee-heritage-tour': {
          title: 'Historical Ottoman Coffee Journey in Istanbul',
          location: 'Sultanahmet & Eminönü, Istanbul',
          duration: '3.5 hours',
          operator: 'Istanbul Heritage & Food Guild',
          type: 'Living Cultural & Culinary Walk',
          description: 'Walk through 500 years of coffee history: the original 1554 Tahtakale coffeehouse site, Ottoman copper coppersmith alleys, and historic coffee tastings in old madrasas.',
          highlights: ['16th-Century Coffee Guild Locations', 'Artisanal Copper Cezve Hammering Workshop', 'Traditional Coffee & Turkish Delight Pairing in Corlulu Ali Pasa']
        }
      },
      baristaClasses: {
        'cezve-ibrik-ritual-class': {
          title: 'The Art of the Cezve: Foam Dynamics, Fine Grind & Hot Sand',
          category: 'cultura',
          duration: '2.5 hours',
          level: 'All levels',
          description: 'Master the delicate art of simmering coffee in copper cezve: managing water temperature, achieving thick crema without boiling over, and optional sand brewing.',
          keyLearnings: ['Ultra-fine powder grind consistency', 'Water ratio and heat control', 'Foam pouring etiquette and silver cup service']
        },
        'arte-del-fal': {
          title: 'Culture, Hospitality & Grounds Reading (Kahve Falı)',
          category: 'cultura',
          duration: '2 hours',
          level: 'All levels',
          description: 'Discover the cultural symbolism, poetry, and storytelling tradition of reading coffee grounds left in the saucer after finishing a cup of Turkish coffee.',
          keyLearnings: ['Cultural history of coffee divination', 'Turning the cup (Fincan Kapatma) ritual', 'Traditional idioms and hospitality expressions']
        }
      },
      tastings: {
        'catacion-cafe-turco-estilos': {
          title: 'Tasting the Three Eras of Turkish Coffee',
          format: 'comparativa',
          description: 'A sensory journey through time comparing 17th-century dark roast Ottoman coffee with mastic resin, 20th-century classical roast, and modern single-origin Geisha Turkish coffee.',
          sensoryWheel: {
            aroma: 'Roasted hazelnut, dark cocoa, cardamom, and mastic gum',
            acidity: 'Low, smooth, and gently spicy',
            body: 'Extremely dense, creamy, and lingering',
            sweetness: 'Natural caramelized sweetness, served with Lokum',
            finish: 'Long and velvety, warming the palate for minutes'
          },
          sampleProfiles: [
            { name: 'Classical Ottoman Style', process: 'Fine Simmered', notes: 'Dark chocolate, toasted walnuts, and cardamom' },
            { name: 'Specialty Single-Origin Cezve', process: 'Light Roast Single Origin', notes: 'Wild berries, bergamot, and sweet milk chocolate' }
          ]
        }
      }
    }
  },

  fr: {
    'colombia': {
      name: 'Colombie',
      editorialKicker: 'Le Berceau de la Douceur Andine',
      conceptSubtitle: 'Découvrez la Colombie, une tasse à la fois.',
      narrativeLead: 'À travers les trois cordillères des Andes, la Colombie cultive l’arabica lavé le plus réputé au monde, où des microclimats uniques forgent une identité remarquable.',
      narrativeBody: [
        'La géographie colombienne est une merveille de la nature pour le café de spécialité : sommets volcaniques, deux océans et vallées profondes créent une diversité thermique permettant des récoltes toute l’année.',
        'Des générations de caféiculteurs sur de petites exploitations familiales ont perfectionné la cueillette manuelle sélective grain par grain, ne récoltant que les cerises à parfaite maturité.',
        'Le résultat est une tasse à l’équilibre souverain : arômes floraux délicats, vive acidité d’agrumes et notes soyeuses de caramel qui séduisent les palais les plus exigeants du monde entier.'
      ],
      altitudeRange: '1 200 - 2 200 m d’altitude',
      annualProductionNote: '3e producteur mondial · Leader mondial de l’Arabica doux lavé',
      keyHarvestSeason: 'Septembre - Décembre (Récolte principale) · Avril - Juin (Mitaca)',
      regions: {
        'huila': {
          name: 'Huila',
          altName: 'Vallée de Laboyos & San Agustín',
          altitude: '1 400 - 1 950 m d’altitude',
          soilOrClimate: 'Sols volcaniques fertiles du Massif Colombien',
          profile: 'Acidité brillante, notes de fruits rouges, canne à sucre et caramel soyeux.',
          description: 'La région la plus primée de Colombie à la Cup of Excellence. Vents tempérés et sols volcaniques créent une douceur structurée sans égale.',
          culturalNote: 'Berceau d’anciennes traditions paysannes et de coopératives de caféiculteurs de renommée mondiale.'
        },
        'narino': {
          name: 'Nariño',
          altName: 'Canyon du Juanambú & Flancs du Galeras',
          altitude: '1 700 - 2 300 m d’altitude',
          soilOrClimate: 'Altitude extrême avec rayonnement équatorial abrité dans de profonds canyons',
          profile: 'Agrumes raffinés, notes florales de jasmin, lime douce et panela au corps suave.',
          description: 'Grâce à sa proximité avec l’équateur, le café prospère à des altitudes exceptionnelles sans gelée, offrant une maturation lente et une concentration aromatique exceptionnelle.',
          culturalNote: 'Paysages andins spectaculaires où les fermes familiales s’accrochent aux versants abrupts.'
        },
        'eje-cafetero': {
          name: 'Paysage Culturel Caféier',
          altName: 'Quindío, Caldas & Risaralda',
          altitude: '1 300 - 1 850 m d’altitude',
          soilOrClimate: 'Paysage Culturel Caféier inscrit au patrimoine mondial de l’UNESCO',
          profile: 'Équilibre parfait, chocolat fin, noix grillées et pomme rouge sucrée.',
          description: 'Le cœur historique de la culture caféière colombienne. Collines verdoyantes, architecture traditionnelle en bahareque et fameux Jeeps Willys colorés.',
          culturalNote: 'Épicentre de l’agrotourisme et de l’identité culturelle caféière nationale.'
        },
        'sierra-nevada': {
          name: 'Sierra Nevada',
          altName: 'Santa Marta & Cesar',
          altitude: '1 000 - 1 700 m d’altitude',
          soilOrClimate: 'Plus haute chaîne côtière du monde face à la mer des Caraïbes',
          profile: 'Corps crémeux et intense, cacao noir, amande grillée et fruits secs.',
          description: 'Cafés d’ombre cultivés sous une dense canopée forestière en harmonie sacrée avec les communautés indigènes Arhuaco et Kogui.',
          culturalNote: 'Pratiques ancestrales honorant la préservation de l’eau et de la Terre Mère (Seynekun).'
        },
        'antioquia': {
          name: 'Antioquia',
          altName: 'Jericó, Fredonia & Andes',
          altitude: '1 300 - 1 900 m d’altitude',
          soilOrClimate: 'Relief escarpé et tradition centenaire des muletiers (arrieros)',
          profile: 'Arôme doux de panela, corps soyeux moyen et acidité fruitée équilibrée.',
          description: 'Pionniers de l’expansion caféière au XIXe siècle. Villages historiques aux balcons fleuris et légendaires haciendas coloniales.',
          culturalNote: 'La ténacité des muletiers et l’attachement viscéral à la terre montagnarde.'
        }
      },
      brands: {
        'catavia-colombia': {
          name: 'Sélection Maître CATAVIA',
          tagline: 'Café de spécialité d’origine colombienne livré directement en Amérique du Nord',
          description: 'L’expérience signature de CATAVIA : microlots triés à la main au-dessus de 1 700 m, torréfiés sur commande et expédiés par voie aérienne pour préserver chaque molécule d’arôme.',
          location: 'Huila & Nariño, Colombie',
          sensoryNotes: ['Fleur d’Oranger', 'Caramel Artisanal', 'Fruits Rouges', 'Cacao Criollo'],
          farmExperience: 'Expérience complète disponible sur le portail officiel Colombie.'
        }
      },
      tours: {
        'tour-colombia-eje': {
          title: 'Traversée Sensorielle de l’Axe Caféier',
          location: 'Salento & Vallée de Cocora, Quindío',
          duration: 'Journée Complète',
          operator: 'Haciendas Patrimoniales UNESCO',
          type: 'Visite de Ferme Vivante & Paysage',
          description: 'Promenez-vous au milieu de caféiers sous ombrage, récoltez les cerises mûres au panier traditionnel, observez le dépulpage et profitez d’une dégustation guidée.',
          highlights: ['Palmiers de Cire de la Vallée de Cocora', 'Démonstration de Dépulpage et Séchage au Soleil', 'Dégustation Comparative de 4 Variétés']
        }
      },
      baristaClasses: {
        'barismo-colombia': {
          title: 'Immersion dans les Méthodes Douces Andines & Chemex',
          category: 'metodos',
          duration: '4 heures',
          level: 'Tous niveaux',
          description: 'Apprenez à extraire toute la complexité aromatique des cafés d’altitude colombiens à l’aide des méthodes douces manuelles : V60, Chemex et AeroPress.',
          keyLearnings: ['Ratio eau-café précis', 'Température de l’eau et courbe de versement', 'Calibrage micrométrique de la mouture']
        }
      },
      tastings: {
        'catacion-colombia': {
          title: 'Dégustation des Terroirs Andins : Huila vs Nariño vs Sierra Nevada',
          format: 'sensorial',
          description: 'Découvrez comment l’altitude et le sol transforment le profil en tasse selon le protocole officiel de dégustation de la SCA.',
          sensoryWheel: {
            aroma: 'Fleur de jasmin, miel de canne et chocolat blanc',
            acidity: 'Vive acidité malique et orange douce de Valence',
            body: 'Soyeux, enveloppant et remarquablement propre',
            sweetness: 'Pure panela et sucre roux artisanal',
            finish: 'Persistant avec des nuances de fruits secs'
          },
          sampleProfiles: [
            { name: 'Huila San Agustín', process: 'Lavé Traditionnel', notes: 'Fruits rouges et caramel toffee' },
            { name: 'Nariño Alto del Obispo', process: 'Fermentation Prolongée', notes: 'Fleur d’oranger et lime kaffir' }
          ]
        }
      }
    },

    'costa-rica': {
      name: 'Costa Rica',
      editorialKicker: 'Pura Vida dans les Forêts de Nuages',
      conceptSubtitle: 'Symphonie de microclimats et de pure biodiversité.',
      narrativeLead: 'Pionnier mondial du café de spécialité et de la durabilité environnementale, le Costa Rica abrite huit régions productrices uniques bénies par des sols volcaniques et un dévouement artisanal.',
      narrativeBody: [
        'Le Costa Rica est le seul pays au monde où la loi interdit toute culture autre que le 100 % Arabica, garantissant une quête intransigeante de l’excellence.',
        'Dans les forêts de nuages de Monteverde et sur les hauteurs de Tarrazú, les micro-moulins ont conçu les procédés honey et anaérobies qui ont révolutionné le monde du café.',
        'Entre rivières cristallines et volcans majestueux, les producteurs costariciens incarnent la philosophie Pura Vida : respect absolu de la nature et passion du goût.'
      ],
      altitudeRange: '1 200 - 1 900 m d’altitude',
      annualProductionNote: 'Pionnier mondial de la durabilité et des cafés d’appellation',
      keyHarvestSeason: 'Novembre - Mars',
      regions: {
        'monteverde': {
          name: 'Monteverde',
          altName: 'Cordillère de Tilarán & Réserve de Forêt de Nuages',
          altitude: '1 300 - 1 650 m d’altitude',
          soilOrClimate: 'Brumes persistantes, humus volcanique et canopée luxuriante',
          profile: 'Corps soyeux, noisette douce, miel doré et pomme verte croquante.',
          description: 'Un sanctuaire de forêt de nuages où le café pousse en symbiose avec la réserve biologique, nourri par les brumes bienveillantes des alizés.',
          culturalNote: 'Fondé sur des valeurs de conservation quakers et costariciennes ; berceau de la coopérative Café Monteverde.'
        },
        'tarrazu': {
          name: 'Tarrazú',
          altName: 'Région de Los Santos',
          altitude: '1 400 - 1 900 m d’altitude',
          soilOrClimate: 'Versants volcaniques abrupts et saison sèche marquée du Pacifique',
          profile: 'Acidité citrique éclatante, fleur de jasmin, chocolat au lait et finale scintillante.',
          description: 'La référence mondiale du café d’altitude SHB du Costa Rica. L’altitude extrême confère aux cerises une densité et une intensité remarquables.',
          culturalNote: 'Une vallée de familles de cueilleurs et de micro-moulins qui collectionnent les prix internationaux.'
        },
        'valle-central': {
          name: 'Vallée Centrale',
          altName: 'Pentes des Volcans Poás & Barva',
          altitude: '1 200 - 1 600 m d’altitude',
          soilOrClimate: 'Sols de cendres volcaniques centenaires et saisons bien contrastées',
          profile: 'Corps équilibré, abricot mûr, chocolat noir et notes florales fines.',
          description: 'Le berceau historique où le café a été introduit au Costa Rica à la fin du XVIIIe siècle, toujours entouré de volcans actifs.',
          culturalNote: 'Haciendas coloniales historiques et moulins hydrauliques centenaires fonctionnant à l’eau des rivières.'
        },
        'valle-occidental': {
          name: 'Vallée Occidentale',
          altName: 'Naranjo, San Ramón & Palmares',
          altitude: '1 200 - 1 750 m d’altitude',
          soilOrClimate: 'Sols de montagne fertiles et brises régulières de l’après-midi',
          profile: 'Pêche douce, zeste d’orange, miel sauvage et gousse de vanille.',
          description: 'Un laboratoire d’innovation en procédés de fermentation, donnant régulièrement naissance aux lauréats de la Cup of Excellence.',
          culturalNote: 'Esprit coopératif où les petits producteurs excellent dans l’éco-milling durable.'
        },
        'brunca': {
          name: 'Brunca',
          altName: 'Pérez Zeledón & Coto Brus',
          altitude: '900 - 1 500 m d’altitude',
          soilOrClimate: 'Sols de transition tropicale luxuriante près du mont Chirripó',
          profile: 'Corps crémeux généreux, mélasse, amande grillée et agrumes doux.',
          description: 'Versants sud bénéficiant d’une biodiversité éclatante, reconnus pour leurs microlots complexes et chaleureux.',
          culturalNote: 'Lié aux traditions de la communauté indigène Brunca et à l’agroforesterie protectrice.'
        }
      },
      brands: {
        'cafe-monteverde': {
          name: 'Café Monteverde',
          tagline: 'Café de conservation cultivé au cœur de la forêt de nuages de Monteverde',
          description: 'Une association pionnière dédiée depuis des décennies à l’agriculture biologique régénératrice, à la protection des bassins versants et à la production de cafés de renommée mondiale.',
          location: 'Monteverde, Puntarenas',
          sensoryNotes: ['Miel de Forêt de Nuages', 'Praline de Noisette', 'Prune Rouge', 'Chocolat au Lait'],
          farmExperience: 'Ouvert aux visites éducatives, corridors biologiques et ateliers de dégustation.'
        },
        'cafe-britt': {
          name: 'Café Britt',
          tagline: 'Pionniers de la torréfaction gastronomique au Costa Rica depuis 1985',
          description: 'La marque qui a prouvé que les Costariciens méritaient de déguster leurs meilleurs grains d’exportation torréfiés localement à la perfection.',
          location: 'Mercedes Norte, Heredia',
          sensoryNotes: ['Truffe au Chocolat Noir', 'Amande Grillée', 'Sucre Roux'],
          farmExperience: 'Visite théâtrale classique à Heredia valorisant l’histoire et le folklore costaricien.'
        },
        'doka-estate': {
          name: 'Hacienda Doka Estate',
          tagline: 'Café volcanique d’exception issu des pentes du volcan Poás',
          description: 'Propriété de la famille Vargas depuis 1931, préservant le plus ancien moulin hydraulique en activité du pays, alimenté par l’eau de montagne.',
          location: 'Alajuela, Volcan Poás',
          sensoryNotes: ['Sucre de Canne', 'Mandarine Douce', 'Noix Toastée'],
          farmExperience: 'Visites guidées du moulin historique montrant les machines centenaires en bois.'
        }
      },
      tours: {
        'monteverde-coffee-tour': {
          title: 'Expérience Café & Forêt de Nuages à Café Monteverde',
          location: 'Monteverde, Costa Rica',
          duration: '2,5 heures',
          operator: 'Collectif Communautaire Café Monteverde',
          type: 'Parcours Agroforestier en Forêt',
          description: 'Explorez des parcelles d’agroforesterie, observez les corridors pour oiseaux migrateurs, découvrez le séchage honey et dégustez avec des Q-graders certifiés.',
          highlights: ['Pratiques Agroforestières Zéro Carbone', 'Patios de Séchage Honey et Naturel', 'Dégustation Professionnelle Guidée']
        },
        'doka-historic-tour': {
          title: 'Doka Estate : Moulin Hydraulique Historique & Plantation',
          location: 'Volcan Poás, Alajuela',
          duration: '2 heures',
          operator: 'Hacienda Doka Estate',
          type: 'Patrimoine Industriel Vivant',
          description: 'Découvrez le plus ancien moulin hydraulique d’Amérique centrale, observez les étapes traditionnelles et dégustez des cafés volcaniques fraîchement torréfiés.',
          highlights: ['Roue Hydraulique du XIXe Siècle en Action', 'Jardin Botanique des Variétés', 'Dégustation au Cœur de la Plantation']
        }
      },
      baristaClasses: {
        'metodos-chorreador-costa-rica': {
          title: 'L’Art du Chorreador & Méthodes de Versement Douces',
          category: 'metodos',
          duration: '3 heures',
          level: 'Tous niveaux',
          description: 'Découvrez la physique et la tradition du chorreador costaricien au filtre en tissu, comparé aux méthodes modernes V60 et Kalita Wave.',
          keyLearnings: ['Entretien et calibration du filtre en tissu', 'Maîtrise de la température d’extraction', 'Valorisation de la sucrosité des cafés d’altitude']
        },
        'barismo-honey-process': {
          title: 'Extraction des Cafés aux Procédés Honey & Anaérobies',
          category: 'barismo',
          duration: '3,5 heures',
          level: 'Intermédiaire',
          description: 'Ajustez mouture, eau et température pour libérer les subtiles notes de mucilage fruité des cafés Yellow, Red et Black Honey.',
          keyLearnings: ['Gestion du corps sirupeux et de la douceur', 'Contrôle des notes fermentaires fruitées', 'Réglage de l’espresso pour cafés honey']
        }
      },
      tastings: {
        'catacion-monteverde-honey': {
          title: 'Trilogie Sensorielle des Procédés : Lavé vs Yellow Honey vs Black Honey',
          format: 'comparativa',
          description: 'Une dégustation comparative de la même récolte de Caturra traitée selon trois méthodes pour comprendre l’impact du mucilage sur la tasse finale.',
          sensoryWheel: {
            aroma: 'Fleur de jasmin, fleur d’oranger et miel de fleurs sauvages',
            acidity: 'Acidité malique vive de pomme verte et zeste de lime',
            body: 'Crémeux, enrobant et soyeux',
            sweetness: 'Miel doré artisanal et mélasse de panela',
            finish: 'Persistant avec des notes de noisette et éclats de fèves de cacao'
          },
          sampleProfiles: [
            { name: 'Monteverde Lavé SHB', process: 'Lavé', notes: 'Pomme verte, jasmin et acidité citrique vive' },
            { name: 'Monteverde Yellow Honey', process: 'Honey', notes: 'Confiture d’abricot, miel doré et corps soyeux' },
            { name: 'Monteverde Black Honey', process: 'Black Honey', notes: 'Figue noire, liqueur de mûre et mélasse' }
          ]
        }
      }
    },

    'panama': {
      name: 'Panama',
      editorialKicker: 'L’Olympe du Geisha dans les Hautes Terres',
      conceptSubtitle: 'Le café floral le plus convoité de la planète.',
      narrativeLead: 'Sur les pentes volcaniques du mont Barú et dans les brumes fraîches de Boquete s’épanouissent les cafés les plus aromatiques et prisés au monde : les légendaires microlots Geisha.',
      narrativeBody: [
        'Le Panama a marqué l’histoire moderne du café lorsque la famille Peterson à Hacienda La Esmeralda a redécouvert la variété éthiopienne Geisha en 2004, bouleversant le monde par ses notes de bergamote et jasmin.',
        'La conjonction des sols volcaniques fertiles, du bajareque (brume rafraîchissante) et des brises océaniques entre Caraïbes et Pacifique crée un microclimat unique sur le volcan Barú.',
        'Lors des prestigieuses enchères Best of Panama, les lots locaux battent régulièrement tous les records mondiaux de prix, consacrant Boquete, Volcán et Renacimiento au sommet du luxe caféier.'
      ],
      altitudeRange: '1 400 - 2 000 m d’altitude',
      annualProductionNote: 'Référence mondiale des microlots de luxe et enchères Best of Panama',
      keyHarvestSeason: 'Décembre - Mars',
      regions: {
        'boquete': {
          name: 'Boquete',
          altName: 'Flanc Oriental du Volcan Barú',
          altitude: '1 450 - 1 950 m d’altitude',
          soilOrClimate: 'Sols volcaniques andosols, brumes bajareque et vents frais nocturnes',
          profile: 'Jasmin, bergamote, citronnelle, pêche blanche et corps délicat façon thé.',
          description: 'L’épicentre mondial du Geisha. Les vallées encaissées captent des brises fraîches qui ralentissent la maturation des cerises pour une intensité florale suprême.',
          culturalNote: 'Foyer de familles pionnières et de maîtres cueilleurs indigènes Ngäbe-Buglé.'
        },
        'volcan': {
          name: 'Tierras Altas (Volcán & Cerro Punta)',
          altName: 'Flanc Occidental du Volcan Barú',
          altitude: '1 500 - 2 100 m d’altitude',
          soilOrClimate: 'Terre volcanique profonde, températures fraîches et forêts de pins',
          profile: 'Thé noir d’origine, citron Meyer, fruit de la passion et chèvrefeuille.',
          description: 'Sur le flanc ouest du volcan, cette région jouit d’altitudes encore plus élevées et d’amplitudes thermiques marquées, produisant des grains d’une densité rare.',
          culturalNote: 'Véritable grenier du Panama, alliant traditions agricoles suisses et laboratoires de pointe.'
        },
        'renacimiento': {
          name: 'Renacimiento',
          altName: 'Frontière Costaricienne & Río Sereno',
          altitude: '1 100 - 1 600 m d’altitude',
          soilOrClimate: 'Contreforts volcaniques tropicaux riches en matière organique',
          profile: 'Corps au chocolat au lait, prune séchée, fleur d’oranger et sucre roux.',
          description: 'Une vallée frontalière paisible cultivant des arabicas traditionnels réputés ainsi que des Geishas d’altitude émergents.',
          culturalNote: 'Communautés rurales dévouées à la biodiversité et aux cultures sous couvert végétal.'
        }
      },
      brands: {
        'hacienda-la-esmeralda': {
          name: 'Hacienda La Esmeralda',
          tagline: 'Pionniers de la révolution moderne du Geisha dans l’histoire du café',
          description: 'La famille Peterson a placé le Panama au zénith du café de spécialité en 2004 lorsque son Geisha Jaramillo a ébloui les experts avec des notes florales inédites.',
          location: 'Boquete, Chiriquí',
          sensoryNotes: ['Fleur de Jasmin', 'Bergamote Earl Grey', 'Pêche Blanche', 'Miel de Fleurs'],
          farmExperience: 'Dégustations exclusives et visites botaniques sur réservation.'
        },
        'kotowa-coffee': {
          name: 'Café Kotowa',
          tagline: 'Plus d’un siècle de savoir-faire volcanique sur les pentes du mont Barú',
          description: 'Fondé au début du XXe siècle par le pionnier canadien Alexander Duncan MacIntyre, Kotowa signifie « montagnes » en langue autochtone, créant des crus d’élite.',
          location: 'Boquete, Chiriquí',
          sensoryNotes: ['Fleur de Mandarine', 'Abricot Mûr', 'Caramel Soyeux'],
          farmExperience: 'Sentiers panoramiques en canopée et visites des moulins écologiques.'
        },
        'elida-estate': {
          name: 'Elida Estate (Famille Lamastus)',
          tagline: 'Cafés cultivés à la plus haute altitude et records mondiaux d’enchères',
          description: 'La famille Lamastus cultive depuis plus d’un siècle les caféiers les plus élevés du Panama, collectionnant les records historiques à la Best of Panama.',
          location: 'Boquete, Chiriquí',
          sensoryNotes: ['Lavande Fine', 'Fruit de la Passion', 'Bulles de Champagne', 'Miel Floral'],
          farmExperience: 'Visite de parcelles d’altitude extrême et ateliers de cupping avec maîtres torréfacteurs.'
        }
      },
      tours: {
        'boquete-geisha-trail': {
          title: 'Circuit Suprême du Geisha à Boquete',
          location: 'Boquete, Chiriquí',
          duration: '3,5 heures',
          operator: 'Alliance des Cafés de Spécialité des Hautes Terres',
          type: 'Parcours Privilège des Microlots',
          description: 'Marchez parmi les arbres centenaires de Geisha et Typica dans la brume du mont Barú, inspectez les lits de séchage surélevés et participez à une dégustation d’élite.',
          highlights: ['Observation du Microclimat d’Altitude', 'Lits Africains de Séchage Lent au Soleil', 'Dégustation Privée de Lots Notés 90+ SCA']
        },
        'kotowa-nature-tour': {
          title: 'Visite Nature, Café & Cacao Kotowa',
          location: 'Boquete, Chiriquí',
          duration: '3 heures',
          operator: 'Kotowa Estate Tours',
          type: 'Ferme, Forêt & Atelier Chocolat',
          description: 'Découvrez tout le parcours de la cerise à la tasse : pépinières d’altitude, patios solaires, torréfacteurs artisanaux et accords café et chocolat bean-to-bar.',
          highlights: ['Histoire du Moulin Centenaire', 'Démonstration de Micro-Torréfaction', 'Accords Gourmands Café et Cacao de la Finca']
        }
      },
      baristaClasses: {
        'masterclass-geisha-brewing': {
          title: 'Masterclass : Extraction des Variétés Florales d’Altitude (Geisha)',
          category: 'metodos',
          duration: '3,5 heures',
          level: 'Avancé',
          description: 'Découvrez comment capturer les arômes volatils du Geisha grâce à une eau douce adaptée, un débit de versement calibré et des goutteurs à fond plat.',
          keyLearnings: ['Minéralisation optimale de l’eau pour notes florales', 'Techniques de versement bypass sur V60', 'Évolution aromatique en fonction du refroidissement']
        }
      },
      tastings: {
        'catacion-geisha-panama': {
          title: 'Dégustation Verticale de Geishas : Lavé vs Naturel vs Anaérobie Lent',
          format: 'comparativa',
          description: 'Une dégustation d’élite de lots de Geisha panaméens de la même parcelle pour explorer comment la fermentation sublime le jasmin, la bergamote et les fruits exotiques.',
          sensoryWheel: {
            aroma: 'Jasmin, bergamote, citronnelle et fleur de sureau',
            acidity: 'Effervescente, champagne raffiné et citron Meyer',
            body: 'Délicat, aérien, soyeux et cristallin',
            sweetness: 'Miel de trèfle, sucre de canne brut et pêche blanche',
            finish: 'Exceptionnellement long, parfum floral persistant pendant des minutes'
          },
          sampleProfiles: [
            { name: 'Boquete Geisha Lavé', process: 'Lavé', notes: 'Pur jasmin, bergamote et pêche blanche' },
            { name: 'Boquete Geisha Naturel', process: 'Naturel', notes: 'Mangue mûre, fraise des bois et miel floral' }
          ]
        }
      }
    },

    'brasil': {
      name: 'Brésil',
      editorialKicker: 'Le Géant du Café et la Douceur Naturelle',
      conceptSubtitle: 'Immensité, tradition et chocolats soyeux.',
      narrativeLead: 'Avec ses vastes plateaux et son terroir généreux dans le Minas Gerais et à São Paulo, le Brésil est le premier producteur mondial, maître incontesté des cafés chocolatés et doux.',
      narrativeBody: [
        'Le Brésil façonne l’histoire du café depuis plus de 150 ans. De ses haciendas coloniales majestueuses à ses domaines agro-écologiques contemporains, sa maîtrise est sans équivalent.',
        'Grâce à son ensoleillement tropical généreux et à ses saisons de récolte sèches, les producteurs ont perfectionné les procédés Naturel et Pulped Natural, séchant la cerise entière au soleil pour infuser un sucre dense dans le grain.',
        'La tasse qui en résulte est adulée des maîtres de l’espresso : une crema onctueuse, une acidité douce équilibrée, des notes profondes de cacao noir et un corps satiné de noisette grillée.'
      ],
      altitudeRange: '800 - 1 400 m d’altitude',
      annualProductionNote: 'Plus grand producteur et exportateur mondial depuis plus de 150 ans',
      keyHarvestSeason: 'Mai - Septembre',
      regions: {
        'sul-de-minas': {
          name: 'Sul de Minas',
          altName: 'Serra da Mantiqueira',
          altitude: '950 - 1 400 m d’altitude',
          soilOrClimate: 'Collines granitiques vallonnées, climat tempéré et sols volcaniques riches',
          profile: 'Chocolat au lait soyeux, amande torréfiée, caramel et douce acidité citrique.',
          description: 'Le cœur historique du café de spécialité brésilien. Un relief montagneux où les microlots cueillis à la main cohabitent avec des fazendas familiales centenaires.',
          culturalNote: 'Riche tradition d’écoles agronomiques, coopératives artisanales et hospitalité chaleureuse.'
        },
        'cerrado-mineiro': {
          name: 'Cerrado Mineiro',
          altName: 'Plateau d’Alto Paranaíba',
          altitude: '800 - 1 250 m d’altitude',
          soilOrClimate: 'Hauts plateaux ensoleillés avec journées chaudes et nuits sèches et fraîches',
          profile: 'Praline intense de noisette, caramel fondant, cacao noir et finale sucrée.',
          description: 'Première région du Brésil bénéficiant d’une Appellation d’Origine Protégée (AOP), reconnue pour sa traçabilité irréprochable et son irrigation de précision.',
          culturalNote: 'Coopératives agricoles modernes aux normes environnementales rigoureuses.'
        },
        'mogiana-paulista': {
          name: 'Mogiana Paulista',
          altName: 'Frontière Nord de l’État de São Paulo',
          altitude: '900 - 1 300 m d’altitude',
          soilOrClimate: 'Sols d’argile rouge volcanique fertile (Terra Roxa) et collines douces',
          profile: 'Corps crémeux opulent, miel doux, ganache au chocolat et fruits séchés.',
          description: 'Plus de deux siècles d’histoire caféière. Les anciennes lignes de chemin de fer transportaient ces récoltes prestigieuses directement vers le port de Santos.',
          culturalNote: 'Demeures de maîtres coloniales, patios pavés de séchage et agronomie d’avant-garde.'
        },
        'matas-de-minas': {
          name: 'Matas de Minas',
          altName: 'Contreforts du Pico da Bandeira',
          altitude: '700 - 1 300 m d’altitude',
          soilOrClimate: 'Relief escarpé de forêt atlantique et vallées humides et verdoyantes',
          profile: 'Douceur de canne à sucre, toffee au beurre, touches florales et bel équilibre.',
          description: 'Région de montagne cultivée principalement par de petits exploitants cueillant à la main, brillant régulièrement dans les compétitions de qualité.',
          culturalNote: 'Agriculture familiale étroitement liée à la protection de la forêt atlantique (Mata Atlântica).'
        }
      },
      brands: {
        'daterra-coffee': {
          name: 'Daterra Coffee',
          tagline: 'Science, durabilité et maîtrise absolue de la qualité dans le Cerrado',
          description: 'Réputée mondialement pour sa certification B-Corp, son emballage sous vide innovant (Penta Box) et ses cafés utilisés par de multiples champions du monde baristas.',
          location: 'Patrocínio, Cerrado Mineiro',
          sensoryNotes: ['Praliné au Toffee', 'Truffe au Cacao Noir', 'Macadamia Grillée', 'Miel Doré'],
          farmExperience: 'Visites techniques de l’agriculture de précision et des laboratoires de séchage.'
        },
        'ipanema-coffees': {
          name: 'Ipanema Coffees',
          tagline: 'Récoltes durables d’exception issues des montagnes du Sul de Minas',
          description: 'S’étendant sur des fazendas historiques dans la chaîne de la Mantiqueira, célèbre pour sa sélection Premier Cru avec traçabilité complète de chaque microclimat.',
          location: 'Alfenas, Sul de Minas',
          sensoryNotes: ['Chocolat au Lait', 'Noisette Toastée', 'Orange Confite'],
          farmExperience: 'Parcours des plantations durables et étalonnage sensoriel professionnel.'
        },
        'faf-brasil': {
          name: 'Fazenda Ambiental Fortaleza (FAF)',
          tagline: 'Agriculture biologique régénératrice et mouvement artisanal Bob-o-Link',
          description: 'Dirigée par la famille Croce, FAF a révolutionné la culture durable en transformant les monocultures en sanctuaires pour oiseaux et cours d’eau.',
          location: 'Mococa, Mogiana',
          sensoryNotes: ['Sucre Roux', 'Abricot Mûr', 'Miel Floral', 'Éclats de Fèves de Cacao'],
          farmExperience: 'Séjour à la ferme biologique, observation ornithologique et dîners de la terre à la table.'
        }
      },
      tours: {
        'sul-de-minas-route': {
          title: 'Route du Café de Spécialité dans le Sul de Minas',
          location: 'São Lourenço & Carmo de Minas, Minas Gerais',
          duration: 'Journée Complète',
          operator: 'Rota do Café Especial Mantiqueira',
          type: 'Parcours Patrimonial des Fazendas de Montagne',
          description: 'Montez à bord de trains d’époque et de 4x4 vers les sommets des fazendas, parcourez les patios solaires et savourez le petit-déjeuner traditionnel fermier au pão de queijo.',
          highlights: ['Panoramas Majestueux de la Serra da Mantiqueira', 'Petit-Déjeuner Fermier Traditionnel du Minas', 'Démonstration de Séchage Solaire sur Patios']
        },
        'daterra-immersion': {
          title: 'Immersion Scientifique & Écologique à Daterra',
          location: 'Patrocínio, Cerrado Mineiro',
          duration: '4 heures',
          operator: 'Daterra Sustainable Farms',
          type: 'Agro-Science & Dégustation d’Élite',
          description: 'Observez la régénération biologique des sols, le compostage en circuit fermé, les cuves de fermentation anaérobie et l’emballage sous vide Penta Box.',
          highlights: ['Réserves Écologiques Certifiées B-Corp', 'Cuves de Fermentation Anaérobie sur Arbre', 'Masterclass Championnat du Monde Barista']
        }
      },
      baristaClasses: {
        'espresso-brasileno': {
          title: 'La Science de l’Espresso Brésilien : Crema, Corps & Densité',
          category: 'barismo',
          duration: '3,5 heures',
          level: 'Tous niveaux',
          description: 'Comprenez pourquoi les grains brésiliens naturels à haute densité sont le pilier mondial des assemblages espresso : maximisation de la crema et douceur.',
          keyLearnings: ['Réglage de la mouture pour cafés au procédé naturel', 'Stabilité thermique et profilage de pression', 'Moussage du lait pour sublimer le cacao noir']
        }
      },
      tastings: {
        'catacion-bourbon-brasil': {
          title: 'Dégustation des Variétés Brésiliennes : Bourbon Jaune vs Catuaí vs Mundo Novo',
          format: 'comparativa',
          description: 'Une séance comparative structurée des variétés botaniques emblématiques du Brésil cultivées sous le même terroir pour évaluer sucrosité, acidité et texture.',
          sensoryWheel: {
            aroma: 'Noisette grillée, beurre de cacao et caramel cuit',
            acidity: 'Douce, agréable, malique et ronde',
            body: 'Remarquablement dense, onctueux et sirupeux',
            sweetness: 'Dulce de leche, cassonade et caramel beurre salé',
            finish: 'Long, persistant et chocolaté, sans amertume'
          },
          sampleProfiles: [
            { name: 'Sul de Minas Bourbon Jaune', process: 'Pulped Natural', notes: 'Caramel toffee, abricot mûr et chocolat au lait' },
            { name: 'Cerrado Catuaí Rouge', process: 'Naturel', notes: 'Cacao noir, noisette grillée et cassonade' }
          ]
        }
      }
    },

    'turquia': {
      name: 'Turquie',
      editorialKicker: 'Cinq Siècles d’Hospitalité Ottomane',
      conceptSubtitle: 'Un rituel ancestral en cuivre, sable et poésie.',
      narrativeLead: 'Bien que ne cultivant pas ses propres grains en raison du climat, la Turquie a forgé la première civilisation du café : le rituel au cezve, patrimoine immatériel de l’UNESCO qui a conquis l’Europe.',
      narrativeBody: [
        'Au XVIe siècle, le café est arrivé à Istanbul en provenance du Yémen par les gouverneurs ottomans. Dans les ruelles de Tahtakale s’ouvrirent les tout premiers cafés du monde (kahvehanes), révolutionnant les échanges culturels.',
        'Le café turc est la plus ancienne méthode d’extraction encore pratiquée sous sa forme originelle : une mouture impalpable extra-fine mijotée lentement dans un cezve en cuivre sur braises ou sable chaud.',
        'Dans la culture turque, offrir un café est un acte de pure hospitalité : « Une tasse de café engage à quarante ans d’amitié. » Aujourd’hui, Istanbul marie cette cérémonie 5 fois centenaire avec la torréfaction moderne de spécialité.'
      ],
      altitudeRange: 'Patrimoine Culturel UNESCO',
      annualProductionNote: 'Patrimoine culturel immatériel de l’humanité (UNESCO 2013)',
      keyHarvestSeason: 'Tradition vivante 365 jours par an dans les kahvehanes',
      regions: {
        'estambul-eminonu': {
          name: 'Istanbul : Eminönü & Tahtakale',
          altName: 'Bazar aux Épices & Ruelle des Torréfacteurs Historiques',
          altitude: 'Niveau de la Mer du Bosphore',
          soilOrClimate: 'Rues pavées historiques, brise marine et arômes d’épices séculaires',
          profile: 'Notes intenses torréfiées, chocolat noir riche, cardamome chaude et mousse soyeuse.',
          description: 'Le point de départ historique où les premiers cafés du monde ont ouvert en 1554. Le parfum envoûtant du café fraîchement moulu flotte continuellement près du Bazar aux Épices.',
          culturalNote: 'Ateliers d’artisans dinandiers martelant le cuivre et maîtres mouliniers depuis des générations.'
        },
        'estambul-beyoglu': {
          name: 'Istanbul : Beyoğlu & Karaköy',
          altName: 'Galata & Avenue Istiklal',
          altitude: 'Hauteurs de la Corne d’Or',
          soilOrClimate: 'Quais cosmopolites, passages historiques et torréfactions modernes',
          profile: 'Matière crémeuse veloutée, figue séchée, noisette toastée et clou de girofle subtil.',
          description: 'Le cœur bohème d’Istanbul où la tradition des kahvehanes s’unit harmonieusement aux micro-torréfacteurs modernes et experts certifiés Q-graders.',
          culturalNote: 'Cafés historiques emblématiques comme Mandabatmaz où artistes, écrivains et voyageurs se retrouvent depuis des décennies.'
        },
        'estambul-kadikoy': {
          name: 'Istanbul : Kadıköy (Rive Asiatique)',
          altName: 'Moda & Mer de Marmara',
          altitude: 'Littoral du Bosphore',
          soilOrClimate: 'Air marin vivifiant, ruelles piétonnes animées et cafés de quartier',
          profile: 'Pure origine raffinée en cezve : fruits à noyau, épices florales et cacao doux.',
          description: 'Le quartier dynamique et branché de la rive asiatique, fer de lance de la réinvention moderne du café turc à partir de microlots de spécialité.',
          culturalNote: 'Un foisonnement d’ateliers d’artistes, de librairies et de terrasses ensoleillées.'
        },
        'gaziantep': {
          name: 'Gaziantep & Anatolie du Sud-Est',
          altName: 'Caravansérails de la Route de la Soie & Tahmis Kahvesi',
          altitude: 'Plateau Historique Anatolien',
          soilOrClimate: 'Climat continental sec, caravansérails en pierre millénaires et pistaches sauvages',
          profile: 'Pistache sauvage torréfiée (Menengiç), crème onctueuse, résine de mastic et épices douces.',
          description: 'Sur l’ancienne Route de la Soie, le Tahmis Kahvesi (fondé en 1635) perpétue des recettes ancestrales régionales, notamment le café sans caféine Menengiç.',
          culturalNote: 'Capitale gastronomique de l’UNESCO renommée pour ses artisans dinandiers du cuivre.'
        }
      },
      brands: {
        'mehmet-efendi': {
          name: 'Kurukahveci Mehmet Efendi',
          tagline: 'L’icône nationale incontournable du café turc depuis 1871',
          description: 'Avant Mehmet Efendi, le café était vendu vert et torréfié à la maison. Il a été le premier à proposer des grains torréfiés et moulus prêts à préparer rue Tahtakale.',
          location: 'Eminönü, Istanbul',
          sensoryNotes: ['Cacao Noir', 'Noisette Grillée', 'Épices Chaudes', 'Torréfaction Brune Classique'],
          farmExperience: 'Boutique historique à l’entrée du Bazar aux Épices moulant le café sous vos yeux.'
        },
        'mandabatmaz': {
          name: 'Mandabatmaz',
          tagline: 'La légendaire mousse veloutée de Beyoğlu depuis 1967',
          description: 'Une minuscule institution d’une ruelle près d’Istiklal. Son nom signifie « même un buffle ne coulerait pas dans cette mousse », en hommage à sa crema dense et épaisse.',
          location: 'Beyoğlu, Istanbul',
          sensoryNotes: ['Ganache au Chocolat Noir', 'Figue Noire Séchée', 'Mousse Épaisse Onctueuse'],
          farmExperience: 'Comptoir authentique pour admirer les maîtres baristas préparant sur le feu vif.'
        },
        'petra-roasting': {
          name: 'Petra Roasting Co.',
          tagline: 'Pionniers de la révolution moderne du café de spécialité à Istanbul',
          description: 'Sélectionnant de grands crus d’Éthiopie, de Colombie et d’Amérique centrale, torréfiés sur mesure et préparés dans des cezves modernes en laiton.',
          location: 'Gayrettepe & Karaköy, Istanbul',
          sensoryNotes: ['Bergamote', 'Confiture de Framboise', 'Cacao Floral'],
          farmExperience: 'Atelier moderne de torréfaction, galerie de design et laboratoire barista.'
        }
      },
      tours: {
        'istanbul-coffee-heritage-tour': {
          title: 'Parcours Historique du Café Ottoman à Istanbul',
          location: 'Sultanahmet & Eminönü, Istanbul',
          duration: '3,5 heures',
          operator: 'Guilde Culinaire & Patrimoniale d’Istanbul',
          type: 'Balade Culturelle & Dégustation Historique',
          description: 'Revivez 500 ans d’histoire caféière : l’emplacement du premier café de 1554, les ateliers d’artisans dinandiers et dégustations dans d’anciennes médersas.',
          highlights: ['Sites Historiques des Corporations de 1554', 'Atelier d’Artisans Dinandiers du Cuivre', 'Dégustation Traditionnelle Café & Loukoum à Çorlulu Ali Paşa']
        }
      },
      baristaClasses: {
        'cezve-ibrik-ritual-class': {
          title: 'L’Art du Cezve : Dynamique de la Mousse, Mouture Fine & Sable Chaud',
          category: 'cultura',
          duration: '2,5 heures',
          level: 'Tous niveaux',
          description: 'Maîtrisez la préparation au cezve en cuivre : gestion de la température, création d’une mousse dense sans débordement et cuisson sur sable chaud.',
          keyLearnings: ['Consistance de la mouture poudreuse extra-fine', 'Dosage de l’eau et contrôle de l’émulsion', 'Rituel du service dans des tasses en porcelaine et argent']
        },
        'arte-del-fal': {
          title: 'Culture, Hospitalité & Lecture du Marc de Café (Kahve Falı)',
          category: 'cultura',
          duration: '2 heures',
          level: 'Tous niveaux',
          description: 'Explorez la symbolique culturelle, la poésie et la tradition narrative de la lecture du marc de café laissé dans la soucoupe après dégustation.',
          keyLearnings: ['Histoire culturelle de la divination par le café', 'Rituel du retournement de la tasse (Fincan Kapatma)', 'Expressions traditionnelles d’hospitalité et d’amitié']
        }
      },
      tastings: {
        'catacion-cafe-turco-estilos': {
          title: 'Dégustation des Trois Époques du Café Turc',
          format: 'comparativa',
          description: 'Un voyage sensoriel à travers le temps comparant le café ottoman du XVIIe siècle à la résine de mastic, la torréfaction classique du XXe siècle et le café turc moderne en pure origine.',
          sensoryWheel: {
            aroma: 'Noisette grillée, chocolat noir, cardamome et résine de mastic',
            acidity: 'Douce, suave et délicatement épicée',
            body: 'Extrêmement dense, sirupeux et persistant',
            sweetness: 'Douceur naturelle caramélisée, servie avec un Loukoum',
            finish: 'Long et soyeux, réchauffant délicatement le palais'
          },
          sampleProfiles: [
            { name: 'Style Ottoman Classique', process: 'Mijoté Fin', notes: 'Chocolat noir, noix grillées et cardamome' },
            { name: 'Pure Origine en Cezve', process: 'Torréfaction Claire Pure Origine', notes: 'Fruits des bois, bergamote et chocolat au lait' }
          ]
        }
      }
    }
  }
};

export function getLocalizedCountryData(baseCountry: CountryData, lang: string): CountryData {
  if (!baseCountry) return baseCountry;
  const normLang = lang?.startsWith('en') ? 'en' : lang?.startsWith('fr') ? 'fr' : 'es';
  if (normLang === 'es') {
    return baseCountry;
  }

  const overrides = COUNTRY_TRANSLATIONS[normLang]?.[baseCountry.slug];
  if (!overrides) {
    return baseCountry;
  }

  return {
    ...baseCountry,
    name: overrides.name || baseCountry.name,
    editorialKicker: overrides.editorialKicker || baseCountry.editorialKicker,
    conceptSubtitle: overrides.conceptSubtitle || baseCountry.conceptSubtitle,
    narrativeLead: overrides.narrativeLead || baseCountry.narrativeLead,
    narrativeBody: overrides.narrativeBody || baseCountry.narrativeBody,
    altitudeRange: overrides.altitudeRange !== undefined ? overrides.altitudeRange : baseCountry.altitudeRange,
    annualProductionNote: overrides.annualProductionNote !== undefined ? overrides.annualProductionNote : baseCountry.annualProductionNote,
    keyHarvestSeason: overrides.keyHarvestSeason !== undefined ? overrides.keyHarvestSeason : baseCountry.keyHarvestSeason,
    regions: baseCountry.regions.map(r => ({
      ...r,
      ...(overrides.regions?.[r.id] || {})
    })),
    brands: baseCountry.brands.map(b => ({
      ...b,
      ...(overrides.brands?.[b.id] || {})
    })),
    tours: baseCountry.tours.map(t => ({
      ...t,
      ...(overrides.tours?.[t.id] || {})
    })),
    baristaClasses: baseCountry.baristaClasses.map(c => ({
      ...c,
      ...(overrides.baristaClasses?.[c.id] || {})
    })),
    tastings: baseCountry.tastings.map(t => ({
      ...t,
      ...(overrides.tastings?.[t.id] || {})
    }))
  };
}
