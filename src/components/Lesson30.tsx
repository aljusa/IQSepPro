import React, { useState } from 'react';
import { 
  Beaker, 
  Settings, 
  Droplets, 
  Factory, 
  Pickaxe, 
  Wheat,
  Activity
} from 'lucide-react';

// --- DEFINICIONES DE TIPOS ---

interface LessonSection {
  id: string;
  tabTitle: string;
  title: string;
  description: string;
  renderDiagram: () => React.ReactNode;
}

// --- COMPONENTES BASE ---

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`grid grid-cols-1 bg-white border border-slate-200 rounded-xl shadow-sm  ${className}`}>
    {children}
  </div>
);

interface LessonLayoutProps {
  title: string;
  sections: LessonSection[];
  activeSectionId: string;
  onTabChange: (id: string) => void;
}

const LessonLayout: React.FC<LessonLayoutProps> = ({ title, sections, activeSectionId, onTabChange }) => {
  const activeSection = sections.find(s => s.id === activeSectionId) || sections[0];

  return (
    <div className="grid grid-rows-[auto_1fr] min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* HEADER & NAV */}
      <header className="grid grid-rows-[auto_auto] gap-6 p-6 bg-white border-b border-slate-200 shadow-sm z-10  top-0">
        <div className="grid grid-cols-1 items-center">
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">{title}</h1>
        </div>
        
        {/* TABS (Strictly Grid) */}
        <nav className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2">
          {sections.map((section) => {
            const isActive = section.id === activeSectionId;
            return (
              <button
                key={section.id}
                onClick={() => onTabChange(section.id)}
                className={`grid truncate items-center p-2 py-2 text-sm font-medium rounded-lg transition-colors  ${
                  isActive 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {section.tabTitle}
              </button>
            );
          })}
        </nav>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="grid grid-cols-1 p-4 md:p-8 lg:p-12 gap-8 items-start align-start">
        <Card className="max-w-5xl mx-auto w-full">
          <div className="grid grid-cols-1 gap-0">
            {/* TEXT PANEL */}
            <div className="grid grid-rows-[auto_1fr] gap-4 p-8 bg-slate-50 border-b md:border-b-0 md:border-r border-slate-200">
              <h2 className="text-xl font-bold text-slate-800">{activeSection.title}</h2>
              <p className="text-base text-slate-600 leading-relaxed self-start">
                {activeSection.description}
              </p>
            </div>
            
            {/* DIAGRAM PANEL */}
            <div className="grid grid-cols-1 items-center justify-items-center p-8 bg-white min-h-[400px]">
              {activeSection.renderDiagram()}
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

// --- RENDERIZADORES DE DIAGRAMAS (Visualizaciones SVG / Grid) ---

const FilterDesignDiagram = () => (
  <svg viewBox="0 0 400 400" className="w-full max-w-[350px] h-auto drop-shadow-sm">
    <defs>
      <pattern id="porous" patternUnits="userSpaceOnUse" width="10" height="10">
        <circle cx="2" cy="2" r="1.5" className="fill-blue-300" />
      </pattern>
    </defs>
    {/* Outer Drum */}
    <circle cx="200" cy="200" r="160" className="fill-slate-100 stroke-slate-400 stroke-2" />
    <circle cx="200" cy="200" r="150" className="fill-none stroke-slate-500 stroke-[4]" />
    
    {/* Filter Medium */}
    <circle cx="200" cy="200" r="130" className="fill-none stroke-blue-500 stroke-[6]" strokeDasharray="8 6" />
    <circle cx="200" cy="200" r="130" fill="url(#porous)" />
    
    {/* Center Axis */}
    <circle cx="200" cy="200" r="15" className="fill-slate-700" />
    <circle cx="200" cy="200" r="8" className="fill-slate-300" />

    {/* Labels */}
    <g className="text-xs font-semibold fill-slate-700" textAnchor="middle">
      <text x="200" y="45">Pared del Tambor</text>
      <text x="200" y="85" className="fill-blue-700">Medio Filtrante (Poroso)</text>
      <text x="200" y="235">Eje de Rotación</text>
    </g>
    
    {/* Pointers */}
    <line x1="200" y1="50" x2="200" y2="150" className="stroke-slate-400 stroke-1" />
    <line x1="200" y1="90" x2="200" y2="125" className="stroke-blue-400 stroke-1" />
  </svg>
);

const FilterOperationDiagram = () => (
  <svg viewBox="0 0 400 400" className="w-full max-w-[350px] h-auto drop-shadow-sm">
    <defs>
      <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" className="fill-blue-500" />
      </marker>
      <pattern id="cake" patternUnits="userSpaceOnUse" width="8" height="8">
        <circle cx="4" cy="4" r="3" className="fill-amber-600" />
      </pattern>
    </defs>
    
    {/* Outer structure */}
    <circle cx="200" cy="200" r="150" className="fill-slate-50 stroke-slate-400 stroke-2" />
    <circle cx="200" cy="200" r="130" className="fill-none stroke-blue-300 stroke-[4]" strokeDasharray="6 4" />
    
    {/* Solid Cake */}
    <path d="M 200 70 A 130 130 0 1 1 199.9 70 Z M 200 100 A 100 100 0 1 0 200.1 100 Z" fill="url(#cake)" className="opacity-90" />
    
    {/* Liquid Center */}
    <circle cx="200" cy="200" r="100" className="fill-blue-100 opacity-60" />
    <circle cx="200" cy="200" r="15" className="fill-slate-700" />
    
    {/* Centrifugal Force Arrows */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
      <g key={angle} transform={`rotate(${angle} 200 200)`}>
        <line x1="200" y1="200" x2="200" y2="110" className="stroke-blue-500 stroke-2" markerEnd="url(#arrow)" />
        <line x1="200" y1="70" x2="200" y2="35" className="stroke-blue-400 stroke-2 opacity-50" markerEnd="url(#arrow)" />
      </g>
    ))}

    {/* Labels */}
    <g className="text-xs font-bold" textAnchor="middle">
      <text x="200" y="25" className="fill-blue-600">Líquido Filtrado</text>
      <text x="200" y="85" className="fill-amber-800 bg-white">Torta de Sólidos</text>
      <text x="200" y="240" className="fill-blue-800">Mezcla (Entrada)</text>
    </g>
  </svg>
);

const FilterApplicationsDiagram = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[450px]">
    <div className="grid grid-rows-[auto_1fr] justify-items-center gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
      <div className="bg-white p-3 rounded-full shadow-sm">
        <Beaker className="w-8 h-8 text-blue-600" />
      </div>
      <p className="text-sm font-semibold text-center text-slate-700">Química Fina</p>
    </div>
    
    <div className="grid grid-rows-[auto_1fr] justify-items-center gap-3 p-4 bg-amber-50 rounded-xl border border-amber-100">
      <div className="bg-white p-3 rounded-full shadow-sm">
        <Activity className="w-8 h-8 text-amber-600" />
      </div>
      <p className="text-sm font-semibold text-center text-slate-700">Recuperación de Cristales</p>
    </div>
    
    <div className="grid grid-rows-[auto_1fr] justify-items-center gap-3 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
      <div className="bg-white p-3 rounded-full shadow-sm">
        <Settings className="w-8 h-8 text-emerald-600" />
      </div>
      <p className="text-sm font-semibold text-center text-slate-700">Precipitados</p>
    </div>
  </div>
);

const DecanterStructureDiagram = () => (
  <svg viewBox="0 0 500 250" className="w-full h-auto drop-shadow-sm">
    {/* Decanter Bowl */}
    <path d="M 50 80 L 350 80 L 450 110 L 450 140 L 350 170 L 50 170 Z" className="fill-slate-100 stroke-slate-600 stroke-2" />
    
    {/* Inner Scroll (Tornillo sin fin) */}
    <path d="M 40 100 L 340 100 L 430 118 L 430 132 L 340 150 L 40 150 Z" className="fill-slate-200 stroke-slate-500 stroke-1" />
    
    {/* Screw Blades */}
    {[...Array(15)].map((_, i) => (
      <path 
        key={i} 
        d={`M ${60 + (i * 20)} 80 L ${70 + (i * 20)} 170`} 
        className="stroke-slate-700 stroke-2" 
        strokeLinecap="round"
      />
    ))}
    {/* Conical blades */}
    <path d="M 370 90 L 375 160" className="stroke-slate-700 stroke-2" />
    <path d="M 390 95 L 395 155" className="stroke-slate-700 stroke-2" />
    <path d="M 410 105 L 415 145" className="stroke-slate-700 stroke-2" />

    {/* Center Feed Tube */}
    <rect x="20" y="120" width="250" height="10" className="fill-blue-200 stroke-blue-500 stroke-1" />

    {/* Labels */}
    <g className="text-xs font-bold fill-slate-800" textAnchor="middle">
      <text x="200" y="50">Tambor Horizontal</text>
      <text x="250" y="210">Tornillo Sin Fin</text>
      <text x="420" y="60">Sección Cónica</text>
    </g>
    
    {/* Pointer lines */}
    <line x1="200" y1="55" x2="200" y2="80" className="stroke-slate-400 stroke-1" />
    <line x1="250" y1="195" x2="250" y2="170" className="stroke-slate-400 stroke-1" />
  </svg>
);

const DecanterOperationDiagram = () => (
  <svg viewBox="0 0 500 250" className="w-full h-auto drop-shadow-sm">
    <defs>
      <marker id="arrowSolid" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" className="fill-amber-600" />
      </marker>
      <marker id="arrowLiquid" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" className="fill-blue-500" />
      </marker>
    </defs>

    {/* Decanter Bowl */}
    <path d="M 50 80 L 350 80 L 450 110 L 450 140 L 350 170 L 50 170 Z" className="fill-slate-50 stroke-slate-300 stroke-2" />
    
    {/* Liquid Phase */}
    <path d="M 50 100 L 300 100 L 300 150 L 50 150 Z" className="fill-blue-100 opacity-80" />
    
    {/* Solid Phase (Cake at the edges) */}
    <path d="M 50 80 L 350 80 L 450 110 L 450 115 L 350 85 L 50 85 Z" className="fill-amber-200" />
    <path d="M 50 170 L 350 170 L 450 140 L 450 135 L 350 165 L 50 165 Z" className="fill-amber-200" />

    {/* Feed */}
    <rect x="0" y="120" width="200" height="10" className="fill-slate-300 stroke-slate-500" />
    <line x1="20" y1="125" x2="180" y2="125" className="stroke-slate-800 stroke-[3]" strokeDasharray="4 2" />

    {/* Flow Arrows */}
    <path d="M 210 125 L 250 100" className="stroke-blue-500 stroke-2" markerEnd="url(#arrowLiquid)" />
    <path d="M 210 125 L 250 150" className="stroke-amber-600 stroke-2" markerEnd="url(#arrowSolid)" />
    
    <line x1="200" y1="105" x2="60" y2="105" className="stroke-blue-500 stroke-2" markerEnd="url(#arrowLiquid)" />
    <line x1="250" y1="83" x2="430" y2="112" className="stroke-amber-600 stroke-2" markerEnd="url(#arrowSolid)" />
    <line x1="250" y1="167" x2="430" y2="138" className="stroke-amber-600 stroke-2" markerEnd="url(#arrowSolid)" />

    {/* Liquid Discharge */}
    <line x1="50" y1="100" x2="20" y2="100" className="stroke-blue-500 stroke-2" markerEnd="url(#arrowLiquid)" />
    
    {/* Solid Discharge */}
    <line x1="450" y1="110" x2="480" y2="110" className="stroke-amber-600 stroke-2" markerEnd="url(#arrowSolid)" />

    {/* Labels */}
    <g className="text-xs font-bold" textAnchor="middle">
      <text x="100" y="115" className="fill-slate-800">Mezcla</text>
      <text x="45" y="60" className="fill-blue-600">Salida Líquido</text>
      <text x="455" y="90" className="fill-amber-800">Salida Sólidos</text>
    </g>
  </svg>
);

const DecanterApplicationsDiagram = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[500px]">
    <div className="grid grid-rows-[auto_1fr] justify-items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
      <div className="bg-white p-3 rounded-full shadow-sm">
        <Droplets className="w-8 h-8 text-blue-500" />
      </div>
      <p className="text-sm font-semibold text-center text-slate-700">Aguas Residuales</p>
    </div>
    
    <div className="grid grid-rows-[auto_1fr] justify-items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
      <div className="bg-white p-3 rounded-full shadow-sm">
        <Pickaxe className="w-8 h-8 text-stone-600" />
      </div>
      <p className="text-sm font-semibold text-center text-slate-700">Industria Minera</p>
    </div>
    
    <div className="grid grid-rows-[auto_1fr] justify-items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
      <div className="bg-white p-3 rounded-full shadow-sm">
        <Wheat className="w-8 h-8 text-amber-500" />
      </div>
      <p className="text-sm font-semibold text-center text-slate-700">Industria Alimentaria</p>
    </div>
    <div className="grid grid-cols-1 md:col-span-3 mt-2">
      <div className="grid grid-cols-[auto_1fr] items-center gap-3 bg-indigo-50 border border-indigo-100 p-3 rounded-lg justify-center">
         <Factory className="w-5 h-5 text-indigo-600" />
         <span className="text-sm font-medium text-indigo-900">Operación Continua en Grandes Volúmenes</span>
      </div>
    </div>
  </div>
);

const SynthesisTableDiagram = () => (
  <div className="w-full max-w-full ">
    <div className="grid grid-cols-[minmax(120px,1fr)_minmax(150px,2fr)_minmax(120px,1fr)_minmax(150px,2fr)] border border-slate-200 rounded-lg  text-sm">
      {/* Header Row */}
      <div className="grid grid-cols-subgrid col-span-4 bg-slate-800 text-white font-bold">
        <div className="p-3 border-r border-slate-600">Tipo</div>
        <div className="p-3 border-r border-slate-600">Principio / Operación</div>
        <div className="p-3 border-r border-slate-600">Mezcla</div>
        <div className="p-3">Aplicación Principal</div>
      </div>
      
      {/* Row 1 */}
      <div className="grid grid-cols-subgrid col-span-4 border-b border-slate-200 bg-white items-center">
        <div className="p-3 font-semibold text-slate-800 border-r border-slate-200">Tazón</div>
        <div className="p-3 text-slate-600 border-r border-slate-200">Sedimentación simple, por lotes.</div>
        <div className="p-3 text-slate-600 border-r border-slate-200">Sólido-Líquido</div>
        <div className="p-3 text-slate-600">Separaciones a pequeña escala, laboratorios.</div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-subgrid col-span-4 border-b border-slate-200 bg-slate-50 items-center">
        <div className="p-3 font-semibold text-slate-800 border-r border-slate-200">Discos</div>
        <div className="p-3 text-slate-600 border-r border-slate-200">Placas apiladas, alta área, continua.</div>
        <div className="p-3 text-slate-600 border-r border-slate-200">Líquido-Líquido</div>
        <div className="p-3 text-slate-600">Lácteos (desnatado), purificación de aceites.</div>
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-subgrid col-span-4 border-b border-slate-200 bg-white items-center">
        <div className="p-3 font-semibold text-blue-700 border-r border-slate-200">Filtro</div>
        <div className="p-3 text-slate-600 border-r border-slate-200">Retención física en medio poroso.</div>
        <div className="p-3 text-slate-600 border-r border-slate-200">Sólido-Líquido</div>
        <div className="p-3 text-slate-600">Recuperación de cristales y precipitados químicos.</div>
      </div>

      {/* Row 4 */}
      <div className="grid grid-cols-subgrid col-span-4 bg-slate-50 items-center">
        <div className="p-3 font-semibold text-amber-700 border-r border-slate-200">Decantadora</div>
        <div className="p-3 text-slate-600 border-r border-slate-200">Tambor + tornillo, flujo continuo.</div>
        <div className="p-3 text-slate-600 border-r border-slate-200">Sólido-Líquido</div>
        <div className="p-3 text-slate-600">Tratamiento de aguas, minería, grandes volúmenes.</div>
      </div>
    </div>
  </div>
);

// --- DATOS DE LA LECCIÓN ---

const LESSON_DATA: LessonSection[] = [
  {
    id: "filtro-diseno",
    tabTitle: "Filtro: Diseño",
    title: "Centrífugas de filtro – Principio de diseño",
    description: "Las centrífugas de filtro incorporan un medio filtrante que actúa como barrera física. Este medio permite el paso del líquido mientras retiene las partículas sólidas, aprovechando la fuerza centrífuga para acelerar el proceso de filtración tradicional.",
    renderDiagram: () => <FilterDesignDiagram />
  },
  {
    id: "filtro-func",
    tabTitle: "Filtro: Funcionamiento",
    title: "Centrífugas de filtro – Funcionamiento",
    description: "Durante la rotación, la fuerza centrífuga impulsa el líquido a través del medio filtrante, mientras que los sólidos quedan atrapados formando una torta compacta sobre la superficie del filtro.",
    renderDiagram: () => <FilterOperationDiagram />
  },
  {
    id: "filtro-app",
    tabTitle: "Filtro: Aplicaciones",
    title: "Centrífugas de filtro – Aplicaciones",
    description: "Se utilizan principalmente en la industria química y en procesos donde es fundamental recuperar sólidos con un alto grado de pureza, como en la producción de cristales o la recolección de precipitados.",
    renderDiagram: () => <FilterApplicationsDiagram />
  },
  {
    id: "decanter-est",
    tabTitle: "Decantadora: Estructura",
    title: "Centrífugas decantadoras – Estructura",
    description: "Las centrífugas decantadoras, también llamadas 'decanter', incluyen un tambor horizontal y un tornillo sin fin en su interior. Ambos giran en el mismo sentido pero a velocidades ligeramente diferentes.",
    renderDiagram: () => <DecanterStructureDiagram />
  },
  {
    id: "decanter-func",
    tabTitle: "Decantadora: Operación",
    title: "Centrífugas decantadoras – Funcionamiento",
    description: "La mezcla entra de forma continua al tambor. La rotación separa los sólidos hacia las paredes, y el tornillo sin fin los transporta hacia la salida cónica. Simultáneamente, el líquido clarificado se descarga por el extremo opuesto.",
    renderDiagram: () => <DecanterOperationDiagram />
  },
  {
    id: "decanter-app",
    tabTitle: "Decantadora: Aplicaciones",
    title: "Centrífugas decantadoras – Aplicaciones",
    description: "Se emplean ampliamente en el tratamiento de aguas residuales, la industria minera y la alimentaria. Su diseño las hace ideales para procesar grandes volúmenes de manera continua y eficiente.",
    renderDiagram: () => <DecanterApplicationsDiagram />
  },
  {
    id: "sintesis",
    tabTitle: "Síntesis Comparativa",
    title: "Síntesis y Selección de Centrífugas",
    description: "Los distintos tipos de centrífugas responden a necesidades específicas. La selección adecuada (Tazón, Discos, Filtro, o Decantadora) garantiza la eficiencia y calidad en la separación dependiendo del tipo de mezcla, el volumen y si el proceso requiere ser por lotes o continuo.",
    renderDiagram: () => <SynthesisTableDiagram />
  }
];

// --- APLICACIÓN PRINCIPAL ---

export default function App() {
  const [activeTab, setActiveTab] = useState<string>(LESSON_DATA[0].id);

  return (
    <LessonLayout
      title="Tipos de Centrífugas"
      sections={LESSON_DATA}
      activeSectionId={activeTab}
      onTabChange={setActiveTab}
    />
  );
}