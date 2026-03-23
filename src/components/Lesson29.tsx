import React, { useState } from 'react';
import { Settings,  Factory, RotateCw, Layers, Droplets, FlaskConical } from 'lucide-react';

// --- TYPES & INTERFACES ---

interface LessonBlock {
  id: string;
  tabLabel: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

// --- DATA ---

const lessonBlocks: LessonBlock[] = [
  {
    id: 'intro',
    tabLabel: 'Introducción',
    title: 'Introducción a los tipos de centrífugas',
    description: 'Las centrífugas se diseñan en diferentes configuraciones para adaptarse a distintos tipos de mezclas y objetivos de separación. La elección del equipo adecuado depende de factores como el estado de la mezcla (sólido-líquido o líquido-líquido), el volumen de procesamiento y el grado de separación requerido.',
    icon: <Settings className="w-4 h-4" />
  },
  {
    id: 'bowl-structure',
    tabLabel: 'Tazón: Estructura',
    title: 'Centrífugas de tazón – estructura básica',
    description: 'Las centrífugas de tazón son dispositivos simples que consisten en un recipiente giratorio donde se introduce la mezcla. Su diseño básico las hace adecuadas para procesos sencillos y de pequeña escala.',
    icon: <Droplets className="w-4 h-4" />
  },
  {
    id: 'bowl-operation',
    tabLabel: 'Tazón: Función',
    title: 'Centrífugas de tazón – funcionamiento',
    description: 'Al girar el tazón, las partículas más densas se desplazan hacia las paredes del recipiente formando un sedimento, mientras que el líquido menos denso permanece en la zona central. Este proceso permite una separación clara de fases.',
    icon: <RotateCw className="w-4 h-4" />
  },
  {
    id: 'bowl-apps',
    tabLabel: 'Tazón: Usos',
    title: 'Centrífugas de tazón – aplicaciones',
    description: 'Este tipo de centrífuga se utiliza comúnmente en laboratorios y en procesos por lotes donde no se requiere operación continua ni alta capacidad de procesamiento.',
    icon: <FlaskConical className="w-4 h-4" />
  },
  {
    id: 'disc-structure',
    tabLabel: 'Discos: Estructura',
    title: 'Centrífugas de discos – estructura interna',
    description: 'Las centrífugas de discos contienen una serie de discos cónicos apilados dentro de un tambor. Esta configuración incrementa la superficie disponible para la separación, lo que mejora el rendimiento del proceso.',
    icon: <Layers className="w-4 h-4" />
  },
  {
    id: 'disc-operation',
    tabLabel: 'Discos: Función',
    title: 'Centrífugas de discos – funcionamiento',
    description: 'La mezcla fluye entre los discos, formando capas delgadas que facilitan la separación. Este diseño permite que las partículas se desplacen distancias más cortas, aumentando la eficiencia incluso cuando las diferencias de densidad son pequeñas.',
    icon: <RotateCw className="w-4 h-4" />
  },
  {
    id: 'disc-apps',
    tabLabel: 'Discos: Usos',
    title: 'Centrífugas de discos – aplicaciones',
    description: 'Son ampliamente utilizadas en la industria láctea y en procesos donde se requiere separar líquidos con diferencias de densidad muy pequeñas, como la clarificación de bebidas o aceites.',
    icon: <Factory className="w-4 h-4" />
  }
];

// --- COMPONENTS ---

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden grid ${className}`}>
    {children}
  </div>
);

// --- VISUALIZATIONS (DIAGRAM RENDERS) ---

const IntroDiagram = () => (
  <div className="grid grid-cols-2 gap-6 w-full h-full p-6 bg-slate-50 items-center justify-items-center">
    <div className="grid grid-rows-[1fr_auto] gap-3 justify-items-center">
      <svg width="80" height="80" viewBox="0 0 100 100" className="drop-shadow-md">
        <path d="M20,20 L20,60 A30,30 0 0,0 80,60 L80,20 Z" fill="#3b82f6" stroke="#1e40af" strokeWidth="4"/>
      </svg>
      <span className="font-semibold text-slate-700">Tazón</span>
    </div>
    <div className="grid grid-rows-[1fr_auto] gap-3 justify-items-center">
      <svg width="80" height="80" viewBox="0 0 100 100" className="drop-shadow-md">
        <path d="M10,80 L50,20 L90,80 Z M20,70 L50,25 L80,70 Z M30,60 L50,30 L70,60 Z" fill="#10b981" stroke="#047857" strokeWidth="3"/>
      </svg>
      <span className="font-semibold text-slate-700">Discos</span>
    </div>
    <div className="grid grid-rows-[1fr_auto] gap-3 justify-items-center">
      <svg width="80" height="80" viewBox="0 0 100 100" className="drop-shadow-md">
        <path d="M20,20 L20,60 A30,30 0 0,0 80,60 L80,20 Z" fill="none" stroke="#f59e0b" strokeWidth="4" strokeDasharray="6,4"/>
        <path d="M30,30 L30,55 A20,20 0 0,0 70,55 L70,30 Z" fill="#fcd34d" opacity="0.5"/>
      </svg>
      <span className="font-semibold text-slate-700">Filtro</span>
    </div>
    <div className="grid grid-rows-[1fr_auto] gap-3 justify-items-center">
      <svg width="100" height="60" viewBox="0 0 120 60" className="drop-shadow-md">
        <path d="M10,10 L80,10 L110,25 L110,35 L80,50 L10,50 Z" fill="#8b5cf6" stroke="#5b21b6" strokeWidth="4"/>
        <line x1="5" y1="30" x2="115" y2="30" stroke="#ddd" strokeWidth="2" strokeDasharray="4,4"/>
      </svg>
      <span className="font-semibold text-slate-700">Decantadora</span>
    </div>
  </div>
);

const BowlStructureDiagram = () => (
  <div className="grid items-center justify-items-center w-full h-full p-8 bg-blue-50">
    <svg width="400" height="240" viewBox="0 0 200 240">
      <defs>
        <linearGradient id="mixGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#93c5fd" />
          <stop offset="50%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#93c5fd" />
        </linearGradient>
      </defs>
      {/* Eje central */}
      <rect x="95" y="10" width="10" height="220" fill="#94a3b8" />
      {/* Tazón */}
      <path d="M40,50 L40,180 A60,30 0 0,0 160,180 L160,50 Z" fill="url(#mixGrad)" stroke="#1e3a8a" strokeWidth="4" />
      {/* Partículas mezcladas */}
      <circle cx="70" cy="100" r="4" fill="#1e40af" />
      <circle cx="120" cy="140" r="5" fill="#1e40af" />
      <circle cx="130" cy="90" r="3" fill="#1e40af" />
      <circle cx="80" cy="160" r="4.5" fill="#1e40af" />
      <circle cx="100" cy="120" r="4" fill="#1e40af" />
      {/* Etiquetas */}
      <text x="170" y="115" fontSize="14" fill="#334155" fontWeight="bold">Mezcla inicial</text>
      <line x1="145" y1="110" x2="165" y2="110" stroke="#334155" strokeWidth="2" />
    </svg>
  </div>
);

const BowlOperationDiagram = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full h-full p-4 bg-slate-100 items-center justify-items-center">
    {/* Paso 1 */}
    <div className="grid grid-rows-[1fr_auto] gap-2 justify-items-center">
      <svg width="100" height="120" viewBox="0 0 100 120">
        <path d="M20,20 L20,90 A30,15 0 0,0 80,90 L80,20 Z" fill="#93c5fd" stroke="#334155" strokeWidth="2" />
        <circle cx="40" cy="50" r="3" fill="#1e3a8a" /><circle cx="60" cy="70" r="3" fill="#1e3a8a" />
        <circle cx="50" cy="40" r="3" fill="#1e3a8a" /><circle cx="70" cy="60" r="3" fill="#1e3a8a" />
      </svg>
      <span className="text-sm font-semibold text-slate-600">1. Mezcla Inicial</span>
    </div>
    {/* Paso 2 */}
    <div className="grid grid-rows-[1fr_auto] gap-2 justify-items-center relative">
      <svg width="100" height="120" viewBox="0 0 100 120">
        <path d="M20,20 L20,90 A30,15 0 0,0 80,90 L80,20 Z" fill="#bfdbfe" stroke="#334155" strokeWidth="2" />
        <path d="M30,50 Q50,20 70,50" fill="none" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arrow)" />
        <path d="M70,70 Q50,100 30,70" fill="none" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arrow)" />
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#f59e0b" />
          </marker>
        </defs>
      </svg>
      <span className="text-sm font-semibold text-slate-600">2. Rotación</span>
    </div>
    {/* Paso 3 */}
    <div className="grid grid-rows-[1fr_auto] gap-2 justify-items-center">
      <svg width="100" height="120" viewBox="0 0 100 120">
        <path d="M20,20 L20,90 A30,15 0 0,0 80,90 L80,20 Z" fill="#eff6ff" stroke="#334155" strokeWidth="2" />
        {/* Sedimento */}
        <path d="M20,20 L20,90 A30,15 0 0,0 80,90 L80,20 L70,20 L70,90 A20,10 0 0,1 30,90 L30,20 Z" fill="#1e3a8a" />
      </svg>
      <span className="text-sm font-semibold text-slate-600">3. Separación</span>
    </div>
  </div>
);

const BowlAppsDiagram = () => (
  <div className="grid items-end justify-items-center w-full h-full p-8 bg-gray-50">
    <svg width="300" height="200" viewBox="0 0 300 200">
      {/* Mesa */}
      <rect x="20" y="160" width="260" height="10" fill="#cbd5e1" rx="2" />
      <rect x="40" y="170" width="10" height="30" fill="#94a3b8" />
      <rect x="250" y="170" width="10" height="30" fill="#94a3b8" />
      
      {/* Centrífuga de mesa */}
      <rect x="120" y="90" width="100" height="70" fill="#e2e8f0" rx="8" stroke="#64748b" strokeWidth="3" />
      <path d="M120,110 Q170,70 220,110" fill="#cbd5e1" stroke="#64748b" strokeWidth="3" />
      <circle cx="170" cy="130" r="15" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
      <circle cx="170" cy="130" r="5" fill="#10b981" />
      <rect x="140" y="145" width="60" height="6" fill="#94a3b8" rx="2" />

      {/* Rack de tubos de ensayo */}
      <rect x="50" y="130" width="50" height="30" fill="#fbbf24" rx="3" stroke="#b45309" strokeWidth="2" />
      <rect x="55" y="100" width="8" height="40" fill="#eff6ff" rx="4" stroke="#3b82f6" strokeWidth="1" />
      <rect x="55" y="125" width="8" height="15" fill="#3b82f6" rx="0" />
      <rect x="70" y="100" width="8" height="40" fill="#eff6ff" rx="4" stroke="#3b82f6" strokeWidth="1" />
      <rect x="70" y="120" width="8" height="20" fill="#3b82f6" rx="0" />
      <rect x="85" y="100" width="8" height="40" fill="#eff6ff" rx="4" stroke="#3b82f6" strokeWidth="1" />
      <rect x="85" y="130" width="8" height="10" fill="#3b82f6" rx="0" />
    </svg>
  </div>
);

const DiscStructureDiagram = () => (
  <div className="grid items-center justify-items-center w-full h-full p-8 bg-emerald-50">
    <svg width="240" height="240" viewBox="0 0 240 240">
      {/* Tambor Exterior */}
      <path d="M40,60 L200,60 L220,180 L20,180 Z" fill="#d1fae5" stroke="#047857" strokeWidth="4" />
      {/* Eje central */}
      <rect x="115" y="20" width="10" height="200" fill="#64748b" />
      {/* Discos cónicos */}
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <path key={i} d={`M60,${160 - i * 15} L120,${120 - i * 15} L180,${160 - i * 15}`} fill="none" stroke="#10b981" strokeWidth="4" />
      ))}
      {/* Etiquetas */}
      <line x1="180" y1="100" x2="210" y2="80" stroke="#334155" strokeWidth="2" />
      <text x="215" y="85" fontSize="12" fill="#334155" fontWeight="bold">Discos cónicos</text>
    </svg>
  </div>
);

const DiscOperationDiagram = () => (
  <div className="grid items-center justify-items-center w-full h-full p-8 bg-slate-800 rounded-lg">
    <svg width="260" height="240" viewBox="0 0 260 240">
      {/* Eje central (mitad visible para zoom) */}
      <rect x="20" y="0" width="20" height="240" fill="#475569" />
      
      {/* Discos ampliados (mitad derecha) */}
      <path d="M40,180 L200,240" fill="none" stroke="#10b981" strokeWidth="8" />
      <path d="M40,120 L200,180" fill="none" stroke="#10b981" strokeWidth="8" />
      <path d="M40,60 L200,120" fill="none" stroke="#10b981" strokeWidth="8" />

      {/* Flujo de líquido (hacia el centro/arriba) */}
      <path d="M160,195 L80,165" fill="none" stroke="#60a5fa" strokeWidth="3" strokeDasharray="4,4" markerEnd="url(#arrowBlue)" />
      <path d="M140,130 L60,100" fill="none" stroke="#60a5fa" strokeWidth="3" strokeDasharray="4,4" markerEnd="url(#arrowBlue)" />

      {/* Flujo de sólidos (hacia afuera/abajo por la pared del disco) */}
      <circle cx="120" cy="150" r="4" fill="#f59e0b" />
      <circle cx="150" cy="161" r="4" fill="#f59e0b" />
      <path d="M100,142 L180,172" fill="none" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrowOrange)" />

      <defs>
        <marker id="arrowBlue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="3" markerHeight="3" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#60a5fa" />
        </marker>
        <marker id="arrowOrange" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="3" markerHeight="3" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#f59e0b" />
        </marker>
      </defs>
      
      {/* Leyenda */}
      <rect x="150" y="20" width="100" height="50" fill="#1e293b" rx="4" stroke="#334155" />
      <line x1="160" y1="35" x2="180" y2="35" stroke="#60a5fa" strokeWidth="2" strokeDasharray="2,2"/>
      <text x="185" y="39" fontSize="10" fill="#f8fafc">Líquido ligero</text>
      <circle cx="170" cy="55" r="3" fill="#f59e0b" />
      <text x="185" y="59" fontSize="10" fill="#f8fafc">Sólido/Pesado</text>
    </svg>
  </div>
);

const DiscAppsDiagram = () => (
  <div className="grid items-end justify-items-center w-full h-full p-8 bg-blue-50">
    <svg width="320" height="220" viewBox="0 0 320 220">
      {/* Tanque de leche cruda */}
      <rect x="20" y="80" width="60" height="100" fill="#e2e8f0" rx="5" stroke="#94a3b8" strokeWidth="3" />
      <text x="30" y="130" fontSize="12" fill="#475569" fontWeight="bold">Leche</text>
      
      {/* Tubería entrada */}
      <path d="M80,160 L140,160 L140,120" fill="none" stroke="#94a3b8" strokeWidth="6" />
      <path d="M100,160 L120,160" fill="none" stroke="#fff" strokeWidth="2" strokeDasharray="4,4" />

      {/* Centrífuga de discos industrial */}
      <path d="M120,60 L160,60 L180,120 L100,120 Z" fill="#10b981" stroke="#047857" strokeWidth="3" />
      <rect x="110" y="120" width="60" height="60" fill="#34d399" stroke="#047857" strokeWidth="3" rx="4" />
      <circle cx="140" cy="150" r="10" fill="#059669" />

      {/* Tubería salida 1 (Leche descremada) */}
      <path d="M160,70 L220,70 L220,100" fill="none" stroke="#93c5fd" strokeWidth="6" />
      <rect x="200" y="100" width="40" height="80" fill="#eff6ff" rx="4" stroke="#60a5fa" strokeWidth="2" />
      <text x="205" y="145" fontSize="10" fill="#1e40af" fontWeight="bold">Descremada</text>

      {/* Tubería salida 2 (Crema) */}
      <path d="M150,50 L150,30 L280,30 L280,120" fill="none" stroke="#fde68a" strokeWidth="6" />
      <rect x="260" y="120" width="40" height="60" fill="#fffbeb" rx="4" stroke="#d97706" strokeWidth="2" />
      <text x="265" y="155" fontSize="10" fill="#b45309" fontWeight="bold">Crema</text>
    </svg>
  </div>
);

const DiagramRender: React.FC<{ activeId: string }> = ({ activeId }) => {
  switch (activeId) {
    case 'intro': return <IntroDiagram />;
    case 'bowl-structure': return <BowlStructureDiagram />;
    case 'bowl-operation': return <BowlOperationDiagram />;
    case 'bowl-apps': return <BowlAppsDiagram />;
    case 'disc-structure': return <DiscStructureDiagram />;
    case 'disc-operation': return <DiscOperationDiagram />;
    case 'disc-apps': return <DiscAppsDiagram />;
    default: return <div className="grid place-items-center h-full text-slate-400">Seleccione un tema</div>;
  }
};

// --- MAIN LAYOUT COMPONENT ---

export default function App() {
  const [activeTab, setActiveTab] = useState<string>(lessonBlocks[0].id);

  const activeContent = lessonBlocks.find(b => b.id === activeTab) || lessonBlocks[0];

  return (
    <div className="grid grid-rows-[auto_1fr] min-h-screen bg-slate-100 text-slate-800 font-sans">
      
      {/* HEADER & NAV TABS (Grid base) */}
      <header className="grid grid-cols-1 bg-white shadow-sm border-b border-slate-200  top-0 z-10">
        <div className="grid grid-cols-1 gap-4 p-4 md:p-6 max-w-7xl w-full mx-auto">
          <div className="grid grid-cols-[auto_1fr] gap-3 items-center">
            <div className="bg-blue-600 p-2 rounded-lg text-white">
              <RotateCw className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold text-slate-800">Tipos de Centrífugas</h1>
          </div>
          
          <nav className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 overflow-x-auto pb-2">
            {lessonBlocks.map((block) => (
              <button
                key={block.id}
                onClick={() => setActiveTab(block.id)}
                className={`grid grid-cols-[auto_1fr] items-center justify-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-colors border
                  ${activeTab === block.id 
                    ? 'bg-blue-50 text-blue-700 border-blue-200 shadow-sm' 
                    : 'bg-white text-slate-600 border-transparent hover:bg-slate-50 hover:text-slate-900 hover:border-slate-200'
                  }`}
              >
                {block.icon}
                <span className="truncate">{block.tabLabel}</span>
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* MAIN CONTENT AREA (Grid base) */}
      <main className="grid p-4 md:p-6 max-w-7xl w-full mx-auto items-start">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* TEXT PANEL */}
          <div className="grid lg:col-span-5 gap-6">
            <Card className="grid grid-rows-[auto_1fr] h-full">
              <div className="grid border-b border-slate-100 bg-slate-50 p-6">
                <h2 className="text-xl font-bold text-slate-800 leading-tight">
                  {activeContent.title}
                </h2>
              </div>
              <div className="grid p-6 content-start">
                <p className="text-slate-600 text-lg leading-relaxed">
                  {activeContent.description}
                </p>
              
              </div>
            </Card>
          </div>

          {/* RENDER PANEL */}
          <div className="grid lg:col-span-7 h-full min-h-[400px]">
            <Card className="grid grid-rows-[auto_1fr] h-full">
             
              <div className="grid w-full h-full min-h-[300px] overflow-hidden">
                <DiagramRender activeId={activeTab} />
              </div>
            </Card>
          </div>

        </div>
      </main>
      
    </div>
  );
}