import React, { useState } from 'react';

// --- TIPOS E INTERFACES ---
interface SectionData {
  id: string;
  title: string;
  concept: string;
  visualDesc: string;
}

interface LessonLayoutProps {
  children: React.ReactNode;
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface DiagramPanelProps {
  renderId: string;
}

// --- DATOS DE LA LECCIÓN ---
const LESSON_DATA: SectionData[] = [
  {
    id: 'intro',
    title: 'Introducción al concepto',
    concept: 'La filtración es una operación mecánica de separación en la que una mezcla formada por un fluido y partículas sólidas atraviesa un medio poroso. Este medio permite el paso del fluido pero retiene las partículas sólidas. Debido a su simplicidad y eficiencia, la filtración es una operación fundamental en procesos industriales como la industria química, farmacéutica, alimentaria y minera.',
    visualDesc: 'Una caja de definición destacada que resalte el término "Filtración". Debajo, una viñeta conceptual con una flecha que muestre una mezcla entrando a un medio poroso: las partículas quedan atrapadas y el líquido continúa su paso.'
  },
  {
    id: 'principio',
    title: 'Principio físico',
    concept: 'El principio de la filtración se basa en el paso de un fluido a través de un material poroso que actúa como barrera física para las partículas sólidas. Durante el proceso, el fluido que atraviesa el medio filtrante se denomina filtrado, mientras que las partículas retenidas se acumulan sobre la superficie del medio formando una torta de filtración.',
    visualDesc: 'Un esquema conceptual del proceso que muestre tres zonas: mezcla de entrada, medio filtrante poroso y salida del filtrado. En la superficie del medio se representaría la acumulación progresiva de partículas formando la torta.'
  },
  {
    id: 'presion',
    title: 'Diferencia de presión',
    concept: 'Para que el fluido atraviese el medio filtrante es necesario que exista una diferencia de presión entre ambos lados del filtro. Esta diferencia de presión actúa como fuerza impulsora del proceso, empujando el fluido a través de los poros del medio filtrante mientras las partículas sólidas quedan retenidas.',
    visualDesc: 'Un diagrama con dos cámaras separadas por un medio filtrante, donde una presenta mayor presión que la otra. Flechas atravesando el medio representarían el flujo del fluido impulsado por el gradiente de presión.'
  },
  {
    id: 'poros',
    title: 'Tamaño de poro',
    concept: 'La eficiencia de la filtración depende de la relación entre el tamaño de poro del medio filtrante y el tamaño de las partículas sólidas. Si los poros son demasiado grandes, algunas partículas pueden atravesar el medio. Si son muy pequeños, el flujo del fluido puede reducirse significativamente.',
    visualDesc: 'Un esquema comparativo de poros y partículas, donde se ilustren tres casos: poros más grandes que las partículas (pasan), poros adecuados (retención efectiva) y poros demasiado pequeños (flujo restringido).'
  },
  {
    id: 'suspension',
    title: 'La suspensión',
    concept: 'La suspensión o alimentación es la mezcla inicial que contiene partículas sólidas dispersas dentro de un fluido. Esta mezcla es el material que se somete al proceso de filtración para separar las fases sólida y líquida.',
    visualDesc: 'Una caja de definición tipo mini-glosario que destaque el término "Suspensión". A su lado, una representación conceptual de partículas sólidas distribuidas dentro de un líquido antes de entrar al filtro.'
  },
  {
    id: 'medio',
    title: 'Medio filtrante',
    concept: 'El medio filtrante es el material poroso encargado de retener las partículas sólidas durante la filtración. Puede estar formado por telas, papeles, membranas o materiales granulares, dependiendo del proceso y del tamaño de partícula que se desea separar.',
    visualDesc: 'Una caja de definición acompañada de un esquema de una capa porosa con pequeños canales internos que permiten el paso del fluido mientras bloquean las partículas.'
  },
  {
    id: 'soporte',
    title: 'Soporte del filtro',
    concept: 'El soporte del filtro es la estructura que sostiene el medio filtrante y evita que se rompa o deforme bajo la presión del proceso. Generalmente consiste en placas, mallas metálicas o estructuras rígidas que mantienen el medio filtrante en su posición.',
    visualDesc: 'Un diagrama en corte transversal donde se observe el medio filtrante apoyado sobre una estructura rígida perforada que distribuye el flujo y proporciona soporte mecánico.'
  },
  {
    id: 'filtrado',
    title: 'El filtrado',
    concept: 'El filtrado es el fluido que logra atravesar el medio filtrante después de que las partículas sólidas han sido retenidas. Este líquido suele ser el producto deseado del proceso o una fase que requiere tratamiento posterior.',
    visualDesc: 'Una caja de definición acompañada de una flecha que muestre el flujo de líquido claro saliendo del sistema de filtración después del medio poroso.'
  },
  {
    id: 'torta',
    title: 'La torta',
    concept: 'La torta de filtración es la capa de partículas sólidas que se acumula sobre la superficie del medio filtrante durante el proceso. Con el tiempo, esta capa puede aumentar su espesor y afectar la velocidad del flujo del filtrado.',
    visualDesc: 'Un esquema del filtro mostrando la acumulación progresiva de sólidos sobre el medio filtrante, destacando el crecimiento del espesor de la torta.'
  },
  {
    id: 'factores',
    title: 'Factores que influyen',
    concept: 'La eficiencia y velocidad de la filtración dependen de varios factores físicos del sistema. Entre los más importantes se encuentran: Tamaño de partícula, Viscosidad del fluido, Diferencia de presión, Tipo de medio filtrante, Espesor de la torta.',
    visualDesc: 'Un mapa conceptual central con "Velocidad de Filtración" en el centro, conectado mediante flechas a los cinco factores principales que influyen en el proceso.'
  }
];

// --- COMPONENTES BASE ---

const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden ${className}`}>
    {children}
  </div>
);

const LessonLayout: React.FC<LessonLayoutProps> = ({ children }) => (
  // Uso estricto de CSS Grid para el layout principal
  <main className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 max-w-7xl mx-auto w-full">
    {children}
  </main>
);

// --- COMPONENTES DE DIAGRAMAS (SVGs) ---

const DiagramIntro = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full text-slate-800">
    <rect x="50" y="20" width="300" height="60" rx="8" className="fill-blue-50 stroke-blue-200 stroke-2" />
    <text x="200" y="55" className="text-2xl font-bold fill-blue-800" textAnchor="middle">FILTRACIÓN</text>
    
    {/* Mezcla entrando */}
    <path d="M 200 100 L 200 140" className="stroke-slate-400 stroke-2" markerEnd="url(#arrow)" />
    <circle cx="190" cy="115" r="4" className="fill-amber-600" />
    <circle cx="210" cy="125" r="4" className="fill-amber-600" />
    <circle cx="200" cy="105" r="4" className="fill-blue-400" />
    <circle cx="185" cy="130" r="4" className="fill-blue-400" />
    
    {/* Medio poroso */}
    <rect x="100" y="150" width="200" height="20" className="fill-slate-200 stroke-slate-400 stroke-2 stroke-dasharray-4" />
    <text x="310" y="165" className="text-xs fill-slate-500">Medio Poroso</text>
    
    {/* Partículas retenidas */}
    <circle cx="180" cy="146" r="4" className="fill-amber-600" />
    <circle cx="195" cy="146" r="4" className="fill-amber-600" />
    <circle cx="210" cy="146" r="4" className="fill-amber-600" />
    <circle cx="225" cy="146" r="4" className="fill-amber-600" />

    {/* Líquido saliendo */}
    <path d="M 200 180 L 200 240" className="stroke-blue-400 stroke-2" markerEnd="url(#arrow-blue)" />
    <circle cx="200" cy="200" r="4" className="fill-blue-400" />
    <circle cx="190" cy="220" r="4" className="fill-blue-400" />
    <circle cx="210" cy="230" r="4" className="fill-blue-400" />

    <defs>
      <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" className="fill-slate-400" />
      </marker>
      <marker id="arrow-blue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" className="fill-blue-400" />
      </marker>
    </defs>
  </svg>
);

const DiagramPrincipio = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    {/* Zonas */}
    <rect x="100" y="20" width="200" height="100" className="fill-blue-50/50 stroke-slate-200" />
    <text x="50" y="70" className="text-xs fill-slate-500">Mezcla</text>
    
    <rect x="100" y="120" width="200" height="30" className="fill-slate-200" />
    <text x="25" y="140" className="text-xs fill-slate-500">Medio Filtrante</text>

    <rect x="100" y="150" width="200" height="100" className="fill-blue-50/20 stroke-slate-200" />
    <text x="50" y="200" className="text-xs fill-slate-500">Filtrado</text>

    {/* Torta */}
    <rect x="100" y="100" width="200" height="20" className="fill-amber-700/80" />
    <text x="310" y="115" className="text-xs font-bold fill-amber-800">Torta de filtración</text>

    {/* Partículas en mezcla */}
    {[...Array(15)].map((_, i) => (
      <circle key={`p-${i}`} cx={120 + (i * 37) % 180} cy={40 + (i * 23) % 50} r="3" className="fill-amber-600" />
    ))}
    {[...Array(15)].map((_, i) => (
      <circle key={`f-${i}`} cx={130 + (i * 41) % 180} cy={50 + (i * 19) % 50} r="3" className="fill-blue-400" />
    ))}

    {/* Filtrado puro */}
    {[...Array(15)].map((_, i) => (
      <circle key={`f2-${i}`} cx={120 + (i * 37) % 180} cy={170 + (i * 23) % 60} r="3" className="fill-blue-400" />
    ))}
  </svg>
);

const DiagramPresion = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <rect x="100" y="40" width="200" height="220" className="fill-none stroke-slate-300 stroke-2" rx="4" />
    <line x1="100" y1="150" x2="300" y2="150" className="stroke-slate-400 stroke-[6px] stroke-dasharray-4" />
    
    {/* Indicadores de presión */}
    <text x="200" y="80" className="text-2xl font-bold fill-rose-500" textAnchor="middle">P₁ (Alta Presión)</text>
    <text x="200" y="220" className="text-2xl font-bold fill-teal-500" textAnchor="middle">P₂ (Baja Presión)</text>

    {/* Flechas de fuerza */}
    <path d="M 150 90 L 150 130" className="stroke-rose-400 stroke-[4px]" markerEnd="url(#arrow-rose)" />
    <path d="M 200 90 L 200 130" className="stroke-rose-400 stroke-[4px]" markerEnd="url(#arrow-rose)" />
    <path d="M 250 90 L 250 130" className="stroke-rose-400 stroke-[4px]" markerEnd="url(#arrow-rose)" />

    <defs>
      <marker id="arrow-rose" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" className="fill-rose-400" />
      </marker>
    </defs>
  </svg>
);

const DiagramPoros = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    {/* Caso 1: Poros grandes */}
    <circle cx="80" cy="120" r="50" className="fill-slate-50 stroke-slate-300 stroke-2" />
    <line x1="40" y1="120" x2="120" y2="120" className="stroke-slate-800 stroke-[4px] stroke-dasharray-10-20" />
    <circle cx="80" cy="100" r="6" className="fill-amber-600" />
    <circle cx="80" cy="140" r="6" className="fill-amber-600" />
    <path d="M 80 105 L 80 130" className="stroke-amber-600 stroke-2" markerEnd="url(#arrow)" />
    <text x="80" y="190" className="text-xs font-bold fill-rose-600" textAnchor="middle">Poros grandes:</text>
    <text x="80" y="205" className="text-xs fill-slate-600" textAnchor="middle">Atraviesan</text>

    {/* Caso 2: Poros adecuados */}
    <circle cx="200" cy="120" r="50" className="fill-slate-50 stroke-slate-300 stroke-2" />
    <line x1="160" y1="120" x2="240" y2="120" className="stroke-slate-800 stroke-[4px] stroke-dasharray-4-6" />
    <circle cx="200" cy="100" r="8" className="fill-amber-600" />
    <circle cx="185" cy="110" r="8" className="fill-amber-600" />
    <circle cx="215" cy="110" r="8" className="fill-amber-600" />
    <text x="200" y="190" className="text-xs font-bold fill-teal-600" textAnchor="middle">Poros adecuados:</text>
    <text x="200" y="205" className="text-xs fill-slate-600" textAnchor="middle">Retención</text>

    {/* Caso 3: Poros pequeños */}
    <circle cx="320" cy="120" r="50" className="fill-slate-50 stroke-slate-300 stroke-2" />
    <line x1="280" y1="120" x2="360" y2="120" className="stroke-slate-800 stroke-[4px] stroke-dasharray-2-2" />
    <circle cx="320" cy="105" r="8" className="fill-amber-600" />
    <path d="M 320 90 L 320 100" className="stroke-blue-400 stroke-2" markerEnd="url(#arrow-blue)" />
    <path d="M 320 110 L 300 90" className="stroke-blue-400 stroke-2" /> 
    <text x="320" y="190" className="text-xs font-bold fill-amber-600" textAnchor="middle">Poros pequeños:</text>
    <text x="320" y="205" className="text-xs fill-slate-600" textAnchor="middle">Flujo restringido</text>
  </svg>
);

const DiagramSuspension = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <rect x="20" y="100" width="160" height="100" rx="8" className="fill-indigo-50 stroke-indigo-200 stroke-2" />
    <text x="100" y="145" className="text-lg font-bold fill-indigo-800" textAnchor="middle">SUSPENSIÓN</text>
    <text x="100" y="165" className="text-xs fill-indigo-600" textAnchor="middle">(Partículas + Fluido)</text>

    <path d="M 230 50 C 230 50, 230 250, 330 250 C 330 250, 330 50, 230 50 Z" className="fill-blue-50 stroke-slate-300 stroke-2" />
    
    {[...Array(30)].map((_, i) => (
      <circle key={`s-${i}`} cx={245 + (i * 29) % 70} cy={70 + (i * 17) % 160} r="4" className={i % 2 === 0 ? "fill-amber-600" : "fill-blue-400"} />
    ))}
  </svg>
);

const DiagramMedio = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <rect x="50" y="50" width="300" height="200" className="fill-slate-100 stroke-slate-300 stroke-2" />
    {/* Canales simulados */}
    <path d="M 100 50 Q 120 150 100 250 M 150 50 Q 180 150 130 250 M 200 50 Q 190 150 220 250 M 250 50 Q 280 150 260 250 M 300 50 Q 290 150 320 250" className="stroke-slate-400 stroke-[8px] fill-none" />
    <path d="M 80 50 Q 160 150 80 250 M 180 50 Q 130 150 180 250 M 230 50 Q 280 150 230 250 M 280 50 Q 220 150 280 250 M 330 50 Q 350 150 330 250" className="stroke-slate-300 stroke-[6px] fill-none" />
    
    <text x="200" y="30" className="text-sm font-bold fill-slate-700" textAnchor="middle">Vista microscópica del Medio Filtrante</text>
    
    <circle cx="155" cy="100" r="8" className="fill-amber-600" />
    <circle cx="215" cy="80" r="8" className="fill-amber-600" />
    <circle cx="270" cy="120" r="8" className="fill-amber-600" />
    
    <circle cx="115" cy="200" r="4" className="fill-blue-400" />
    <circle cx="205" cy="220" r="4" className="fill-blue-400" />
    <circle cx="305" cy="190" r="4" className="fill-blue-400" />
  </svg>
);

const DiagramSoporte = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    {/* Medio Filtrante */}
    <rect x="80" y="100" width="240" height="30" className="fill-slate-200 stroke-slate-400 stroke-2 stroke-dasharray-2" />
    <text x="200" y="120" className="text-xs font-bold fill-slate-600" textAnchor="middle">Medio Filtrante</text>

    {/* Soporte Rígido */}
    <rect x="80" y="130" width="240" height="20" className="fill-slate-700" />
    {[...Array(11)].map((_, i) => (
      <rect key={`gap-${i}`} x={90 + (i * 22)} y="130" width="10" height="20" className="fill-white" />
    ))}
    <text x="200" y="170" className="text-xs font-bold fill-slate-800" textAnchor="middle">Soporte Estructural (Placa Perforada)</text>

    {/* Flechas de carga */}
    {[...Array(5)].map((_, i) => (
      <path key={`arrow-${i}`} d={`M ${100 + (i * 50)} 60 L ${100 + (i * 50)} 90`} className="stroke-rose-400 stroke-[3px]" markerEnd="url(#arrow-rose)" />
    ))}
    <text x="200" y="45" className="text-xs fill-rose-600" textAnchor="middle">Presión del proceso</text>
  </svg>
);

const DiagramFiltrado = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <rect x="50" y="40" width="300" height="60" rx="8" className="fill-teal-50 stroke-teal-200 stroke-2" />
    <text x="200" y="75" className="text-xl font-bold fill-teal-800" textAnchor="middle">EL FILTRADO</text>

    <rect x="150" y="140" width="100" height="10" className="fill-slate-300 stroke-slate-400 stroke-dasharray-2" />
    
    <path d="M 200 160 L 200 220" className="stroke-blue-400 stroke-[6px]" markerEnd="url(#arrow-blue)" />
    <path d="M 180 170 L 180 210" className="stroke-blue-400 stroke-[3px]" markerEnd="url(#arrow-blue)" />
    <path d="M 220 170 L 220 210" className="stroke-blue-400 stroke-[3px]" markerEnd="url(#arrow-blue)" />

    <text x="200" y="250" className="text-sm font-bold fill-blue-600" textAnchor="middle">Líquido Claro (Producto)</text>
  </svg>
);

const DiagramTorta = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    {/* Medio */}
    <rect x="100" y="200" width="200" height="20" className="fill-slate-200 stroke-slate-400 stroke-dasharray-4" />
    
    {/* Torta creciendo (capas) */}
    <rect x="100" y="180" width="200" height="20" className="fill-amber-700/60" />
    <rect x="100" y="150" width="200" height="30" className="fill-amber-700/80" />
    <rect x="100" y="100" width="200" height="50" className="fill-amber-800" />
    
    <path d="M 320 200 L 320 100" className="stroke-slate-800 stroke-2" markerEnd="url(#arrow)" markerStart="url(#arrow)" />
    <text x="330" y="155" className="text-xs font-bold fill-slate-800">Espesor</text>
    <text x="330" y="170" className="text-xs font-bold fill-slate-800">Creciente</text>

    <text x="200" y="145" className="text-lg font-bold fill-white" textAnchor="middle">Torta Acumulada</text>
  </svg>
);

const DiagramFactores = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <circle cx="200" cy="150" r="50" className="fill-indigo-600 shadow-lg" />
    <text x="200" y="145" className="text-xs font-bold fill-white" textAnchor="middle">Velocidad</text>
    <text x="200" y="160" className="text-xs font-bold fill-white" textAnchor="middle">de Filtración</text>

    {/* Nodos */}
    <g className="stroke-indigo-300 stroke-2">
      <line x1="200" y1="100" x2="200" y2="50" />
      <line x1="155" y1="125" x2="80" y2="80" />
      <line x1="245" y1="125" x2="320" y2="80" />
      <line x1="160" y1="180" x2="100" y2="230" />
      <line x1="240" y1="180" x2="300" y2="230" />
    </g>

    <rect x="150" y="20" width="100" height="30" rx="4" className="fill-white stroke-indigo-200 stroke-2" />
    <text x="200" y="40" className="text-[10px] fill-slate-700" textAnchor="middle">Diferencia de Presión</text>

    <rect x="30" y="65" width="100" height="30" rx="4" className="fill-white stroke-indigo-200 stroke-2" />
    <text x="80" y="85" className="text-[10px] fill-slate-700" textAnchor="middle">Tamaño de Partícula</text>

    <rect x="270" y="65" width="100" height="30" rx="4" className="fill-white stroke-indigo-200 stroke-2" />
    <text x="320" y="85" className="text-[10px] fill-slate-700" textAnchor="middle">Viscosidad del Fluido</text>

    <rect x="50" y="230" width="100" height="30" rx="4" className="fill-white stroke-indigo-200 stroke-2" />
    <text x="100" y="250" className="text-[10px] fill-slate-700" textAnchor="middle">Tipo de Medio</text>

    <rect x="250" y="230" width="100" height="30" rx="4" className="fill-white stroke-indigo-200 stroke-2" />
    <text x="300" y="250" className="text-[10px] fill-slate-700" textAnchor="middle">Espesor de Torta</text>
  </svg>
);

const DiagramRender: React.FC<{ id: string }> = ({ id }) => {
  // Renderiza dinámicamente el diagrama según el ID de la pestaña
  const diagramMap: Record<string, React.ReactNode> = {
    'intro': <DiagramIntro />,
    'principio': <DiagramPrincipio />,
    'presion': <DiagramPresion />,
    'poros': <DiagramPoros />,
    'suspension': <DiagramSuspension />,
    'medio': <DiagramMedio />,
    'soporte': <DiagramSoporte />,
    'filtrado': <DiagramFiltrado />,
    'torta': <DiagramTorta />,
    'factores': <DiagramFactores />
  };

  return (
    <div className="w-full h-64 md:h-80 bg-slate-50 border border-slate-100 rounded-lg p-4 grid place-items-center">
      {diagramMap[id] || <p className="text-slate-400">Diagrama no disponible</p>}
    </div>
  );
};

const DiagramPanel: React.FC<DiagramPanelProps> = ({ renderId }) => (
  <Card className="grid grid-rows-[auto_auto_1fr] h-full">
  
    <div className="p-6 grid place-items-center">
      <DiagramRender id={renderId} />
    </div>
  </Card>
);

// --- APLICACIÓN PRINCIPAL ---

export default function App() {
  const [activeTabId, setActiveTabId] = useState<string>(LESSON_DATA[0].id);
  const activeSection = LESSON_DATA.find(sec => sec.id === activeTabId) || LESSON_DATA[0];

  return (
    // Uso estricto de CSS Grid para el maquetado de la página completa
    <div className="min-h-screen bg-slate-100 grid grid-rows-[auto_1fr] text-slate-800 font-sans">
      
      {/* HEADER Y NAVEGACIÓN */}
      <header className="bg-white shadow-sm border-b border-slate-200 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 grid gap-4">
          <div className="grid">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
Fundamentos de la Filtración            </h1>
          </div>
          
          {/* Sistema de Pestañas usando CSS Grid fluido */}
<nav className="grid grid-cols-5 grid-rows-2 gap-2 pb-2 ">            {LESSON_DATA.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveTabId(section.id)}
                className={`px-4 py-2  break-words leading-tight text-xs sm:text-sm md:text-base lg:text-lg font-medium rounded-t-lg border-b-2 transition-colors 
                  ${activeTabId === section.id 
                    ? 'border-blue-600 text-blue-700 bg-blue-50/50' 
                    : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                  }`}
              >
                {section.title}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* ÁREA DE CONTENIDO PRINCIPAL */}
      <LessonLayout>
        
        {/* PANEL DE EXPLICACIÓN TEXTUAL */}
        <div className="lg:col-span-5 grid grid-rows-[auto_1fr]">
          <Card className="h-full grid grid-rows-[auto_1fr]">
            <div className="bg-blue-600 p-4 border-b border-blue-700">
              <h2 className="text-xl font-semibold text-white">{activeSection.title}</h2>
            </div>
            <div className="p-6 lg:p-8 overflow-y-auto">
              <p className="text-slate-700 text-lg leading-relaxed">
                {activeSection.concept}
              </p>
            </div>
          </Card>
        </div>

        {/* PANEL DE DIAGRAMA */}
        <div className="lg:col-span-7 grid grid-rows-[1fr]">
          <DiagramPanel 
            renderId={activeSection.id}
          />
        </div>

      </LessonLayout>
    </div>
  );
}