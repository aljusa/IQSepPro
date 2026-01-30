import React, { useState, useEffect } from 'react';
import {   Share2, MousePointerClick,  Maximize,  PlayCircle,    BookOpen,  Settings,  Database,  Activity,  Zap,  Box } from 'lucide-react';

// --- Types & Interfaces ---

interface TabData {
  id: string;
  label: string;
  icon: React.ReactNode;
  category: 'Estático' | 'Interactivo' | 'Dinámico';
  title: string;
  description: string;
}

interface SymbolLayer {
  step: number;
  label: string;
  description: string;
}

// --- Data Definitions ---

const TABS: TabData[] = [
  {
    id: 'synthesis',
    label: 'Combinación',
    icon: <Share2 size={18} />,
    category: 'Estático',
    title: 'Combinación de Símbolos',
    description: 'Los símbolos generales actúan como bloques básicos. Aquí vemos cómo un actuador manual y una válvula se combinan para formar una válvula manual.'
  },
  {
    id: 'hierarchy',
    label: 'Jerarquía',
    icon: <Database size={18} />,
    category: 'Estático',
    title: 'Jerarquía Normativa ISO 14617',
    description: 'La Parte 2 (Símbolos Generales) es la base fundamental que soporta y conecta a las especialidades (Partes 3-12).'
  },
  {
    id: 'map',
    label: 'Mapa Interactivo',
    icon: <MousePointerClick size={18} />,
    category: 'Interactivo',
    title: 'Términos Clave',
    description: 'Explora los conceptos fundamentales de la norma seleccionando los nodos activos.'
  },
  {
    id: 'context',
    label: 'Contextos',
    icon: <Maximize size={18} />,
    category: 'Estático',
    title: 'Símbolo 101: Versatilidad',
    description: 'El "Símbolo 101" (Círculo Genérico) cambia su significado semántico dependiendo del contexto del diagrama.'
  },
  {
    id: 'construction',
    label: 'Construcción',
    icon: <PlayCircle size={18} />,
    category: 'Dinámico',
    title: 'Construcción Progresiva (R101)',
    description: 'Visualización de cómo se agregan capas de información gráfica paso a paso según la regla de construcción.'
  }
];

// --- Components ---

/**
 * Card Component
 * Wraps content in a consistent styled container
 */
const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-lg border border-slate-200 shadow-sm p-6 ${className}`}>
    {children}
  </div>
);

/**
 * Diagram 1: Symbol Synthesis
 */
const SynthesisDiagram: React.FC = () => {
  return (
    <div className="w-full h-64 grid grid-cols-5 items-center justify-items-center gap-4">
      {/* Component A */}
      <div className="grid justify-items-center gap-2">
        <div className="w-24 h-24 border-2 border-slate-300 rounded-lg grid place-items-center bg-slate-50">
          <svg width="60" height="60" viewBox="0 0 100 100">
            {/* Valve Symbol */}
            <path d="M10,10 L90,90 L90,10 L10,90 Z" fill="none" stroke="#3b82f6" strokeWidth="3" />
          </svg>
        </div>
        <span className="text-sm font-medium text-slate-600">Símbolo Base</span>
      </div>

      {/* Operator */}
      <div className="text-2xl font-bold text-slate-400">+</div>

      {/* Component B */}
      <div className="grid justify-items-center gap-2">
        <div className="w-24 h-24 border-2 border-slate-300 rounded-lg grid place-items-center bg-slate-50">
          <svg width="60" height="60" viewBox="0 0 100 100">
            {/* Actuator Symbol (T shape) */}
            <line x1="50" y1="90" x2="50" y2="20" stroke="#ef4444" strokeWidth="3" />
            <line x1="20" y1="20" x2="80" y2="20" stroke="#ef4444" strokeWidth="3" />
          </svg>
        </div>
        <span className="text-sm font-medium text-slate-600">Cualificador</span>
      </div>

      {/* Operator */}
      <div className="text-2xl font-bold text-slate-400">=</div>

      {/* Result */}
      <div className="grid justify-items-center gap-2">
        <div className="w-24 h-24 border-2 border-blue-100 rounded-lg grid place-items-center bg-blue-50 shadow-md">
           <svg width="60" height="60" viewBox="0 0 100 100">
            {/* Combined */}
            <path d="M10,40 L90,90 L90,40 L10,90 Z" fill="none" stroke="#1e293b" strokeWidth="3" transform="translate(0, -10)" />
            <line x1="50" y1="50" x2="50" y2="10" stroke="#1e293b" strokeWidth="3" />
            <line x1="30" y1="10" x2="70" y2="10" stroke="#1e293b" strokeWidth="3" />
          </svg>
        </div>
        <span className="text-sm font-bold text-blue-700">Símbolo Complejo</span>
      </div>
    </div>
  );
};

/**
 * Diagram 2: Normative Hierarchy
 * Uses CSS Grid for Tree Structure
 */
const HierarchyDiagram: React.FC = () => {
  return (
    <div className="w-full h-full p-4">
      <div className="grid gap-8 justify-center">
        {/* Top Level - Specific Applications */}
        <div className="grid grid-cols-3 gap-4">
          {['Parte 3: Conexiones', 'Parte 4: Actuadores', 'Parte 6: Funciones'].map((item, i) => (
            <div key={i} className="p-3 bg-slate-100 border border-slate-300 rounded text-center text-xs text-slate-600 relative">
              {item}
              <div className="absolute bottom-[-2rem] left-1/2 w-px h-8 bg-slate-300 -translate-x-1/2"></div>
            </div>
          ))}
        </div>

        {/* Connector Line Horizontal */}
        <div className="h-px bg-slate-300 w-full mx-auto max-w-md relative -mt-4"></div>
        
        {/* Connector Line Vertical to Core */}
        <div className="h-8 w-px bg-slate-300 mx-auto -mt-4"></div>

        {/* Core Level */}
        <div className="p-6 bg-blue-600 text-white rounded-lg shadow-lg text-center max-w-sm mx-auto z-10">
          <h3 className="font-bold text-lg">Parte 2: Símbolos Generales</h3>
          <p className="text-blue-100 text-sm mt-2">Fundamento Gráfico (Formas básicas)</p>
        </div>

        {/* Foundation Level */}
        <div className="mx-auto">
          <div className="h-8 w-px bg-slate-300 mx-auto -mt-8"></div>
           <div className="p-3 bg-slate-800 text-slate-200 rounded text-center text-xs min-w-[200px] mt-0">
              ISO 81714 (Diseño de Símbolos)
            </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Diagram 3: Interactive Map
 */
const InteractiveMap: React.FC = () => {
  const [activeTerm, setActiveTerm] = useState<string | null>(null);

  const terms = [
    { id: 'outline', label: 'Contorno', desc: 'Define la frontera física o funcional del objeto.', color: 'bg-emerald-100 border-emerald-500' },
    { id: 'connection', label: 'Punto de Conexión', desc: 'Nodo donde interactúan los flujos de energía o materia.', color: 'bg-amber-100 border-amber-500' },
    { id: 'flow', label: 'Dirección de Flujo', desc: 'Indica el sentido del movimiento del fluido o señal.', color: 'bg-indigo-100 border-indigo-500' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      {/* Visualization Area */}
      <div className="relative border border-slate-200 rounded-lg bg-slate-50 grid place-items-center h-64 md:h-auto">
        <svg viewBox="0 0 200 200" className="w-64 h-64 drop-shadow-xl">
          {/* Main Body (Outline) */}
          <circle 
            cx="100" cy="100" r="40" 
            fill={activeTerm === 'outline' ? '#d1fae5' : 'white'} 
            stroke={activeTerm === 'outline' ? '#10b981' : '#64748b'} 
            strokeWidth={activeTerm === 'outline' ? 4 : 2}
            className="transition-all duration-300"
          />
          
          {/* Connections */}
          <line x1="20" y1="100" x2="60" y2="100" stroke={activeTerm === 'connection' ? '#f59e0b' : '#64748b'} strokeWidth="3" />
          <line x1="140" y1="100" x2="180" y2="100" stroke={activeTerm === 'connection' ? '#f59e0b' : '#64748b'} strokeWidth="3" />
          <circle cx="20" cy="100" r="4" fill={activeTerm === 'connection' ? '#f59e0b' : '#64748b'} />
          <circle cx="180" cy="100" r="4" fill={activeTerm === 'connection' ? '#f59e0b' : '#64748b'} />

          {/* Flow Arrow */}
          <path 
            d="M 85,90 L 115,90 L 115,110" 
            fill="none" 
            stroke={activeTerm === 'flow' ? '#6366f1' : 'transparent'} 
            strokeWidth="3" 
            markerEnd="url(#arrowhead)"
            className="transition-all duration-300"
          />
        </svg>
      </div>

      {/* Controls */}
      <div className="grid content-center gap-4">
        <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Elementos Interactivos</h4>
        {terms.map((term) => (
          <button
            key={term.id}
            onClick={() => setActiveTerm(term.id)}
            className={`text-left p-4 rounded-lg border transition-all duration-200 ${
              activeTerm === term.id 
                ? `${term.color} shadow-md scale-[1.02]` 
                : 'bg-white border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="font-bold text-slate-800">{term.label}</div>
            <div className={`text-sm mt-1 ${activeTerm === term.id ? 'text-slate-800' : 'text-slate-500'}`}>
              {term.desc}
            </div>
          </button>
        ))}
        {activeTerm && (
             <button 
                onClick={() => setActiveTerm(null)}
                className="text-xs text-slate-400 hover:text-slate-600 justify-self-start"
             >
                Restablecer vista
             </button>
        )}
      </div>
    </div>
  );
};

/**
 * Diagram 4: Context Grid
 */
const ContextGrid: React.FC = () => {
  const contexts = [
    { name: 'Mecánico', icon: <Settings size={24} />, color: 'text-slate-600', bg: 'bg-slate-100', meaning: 'Bomba' },
    { name: 'Eléctrico', icon: <Zap size={24} />, color: 'text-amber-500', bg: 'bg-amber-50', meaning: 'Motor' },
    { name: 'Procesos', icon: <Activity size={24} />, color: 'text-blue-500', bg: 'bg-blue-50', meaning: 'Compresor' },
    { name: 'Lógico', icon: <Box size={24} />, color: 'text-emerald-500', bg: 'bg-emerald-50', meaning: 'Nodo' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-full">
      {contexts.map((ctx, idx) => (
        <div key={idx} className={`${ctx.bg} rounded-xl p-4 flex flex-col items-center justify-between border border-transparent hover:border-slate-200 transition-all`}>
            <div className="w-full flex justify-between items-start opacity-50">
                <span className="text-[10px] font-bold uppercase tracking-widest">{ctx.name}</span>
                {ctx.icon}
            </div>
            
            <div className="flex-1 grid place-items-center">
                 {/* The Universal Symbol 101 (Circle) */}
                 <div className={`w-16 h-16 rounded-full border-4 ${ctx.color.replace('text', 'border')} bg-white grid place-items-center shadow-sm`}>
                    <span className="font-mono font-bold text-lg">101</span>
                 </div>
            </div>

            <div className="w-full text-center border-t border-black/5 pt-3">
                <span className="text-xs text-slate-500">Significado:</span>
                <div className={`font-bold ${ctx.color}`}>{ctx.meaning}</div>
            </div>
        </div>
      ))}
    </div>
  );
};

/**
 * Diagram 5: Progressive Builder
 */
const ProgressiveBuilder: React.FC = () => {
  const [step, setStep] = useState(1);
  const maxSteps = 3;

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev >= maxSteps ? 1 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const layers: SymbolLayer[] = [
    { step: 1, label: 'Capa 1: Geometría Base', description: 'Se define el contorno geométrico primario según ISO 14617-2.' },
    { step: 2, label: 'Capa 2: Relleno Funcional', description: 'Se aplica el sombreado o relleno sólido para indicar estado (ej. lleno/vacío).' },
    { step: 3, label: 'Capa 3: Anotación', description: 'Se agregan identificadores alfanuméricos (TAGs) según R101.' },
  ];

  return (
    <div className="grid grid-cols-[1fr_300px] gap-8 h-full">
      {/* Visualization */}
      <div className="bg-slate-900 rounded-lg relative overflow-hidden grid place-items-center">
        <div className="relative w-48 h-48 transition-all duration-500">
           {/* Layer 1 */}
           <div className={`absolute inset-0 border-4 border-white rounded-md transition-opacity duration-500 ${step >= 1 ? 'opacity-100' : 'opacity-10'}`}></div>
           
           {/* Layer 2 */}
           <div className={`absolute inset-0 m-4 bg-blue-500 rounded-sm transition-all duration-500 ${step >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}></div>
           
           {/* Layer 3 */}
           <div className={`absolute -right-12 -top-8 bg-yellow-400 text-black font-mono font-bold px-2 py-1 rounded shadow-lg transition-all duration-500 ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
             TAG-01
           </div>
        </div>
        
        {/* Progress Bar */}
        <div className="absolute bottom-4 left-4 right-4 h-1 bg-slate-800 rounded-full overflow-hidden">
             <div 
                className="h-full bg-blue-500 transition-all duration-300 ease-out"
                style={{ width: `${(step / maxSteps) * 100}%` }}
             ></div>
        </div>
      </div>

      {/* Info Panel */}
      <div className="grid gap-4 content-start">
        {layers.map((layer) => (
          <div 
            key={layer.step}
            className={`p-4 rounded border-l-4 transition-all duration-300 ${
                step === layer.step 
                ? 'bg-blue-50 border-blue-500 shadow-sm' 
                : 'bg-white border-slate-200 opacity-50'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-sm text-slate-800">{layer.label}</span>
                {step === layer.step && <Activity size={14} className="text-blue-500 animate-pulse" />}
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">{layer.description}</p>
          </div>
        ))}
         <button 
            onClick={() => setStep(1)}
            className="mt-4 text-xs text-blue-600 hover:underline text-center w-full"
         >
            Reiniciar Animación
         </button>
      </div>
    </div>
  );
};

// --- Main Layout Components ---

const LessonLayout: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>(TABS[0].id);

  const currentTab = TABS.find(t => t.id === activeTabId) || TABS[0];

  const renderContent = () => {
    switch (activeTabId) {
      case 'synthesis': return <SynthesisDiagram />;
      case 'hierarchy': return <HierarchyDiagram />;
      case 'map': return <InteractiveMap />;
      case 'context': return <ContextGrid />;
      case 'construction': return <ProgressiveBuilder />;
      default: return <div className="text-slate-400">Seleccione una pestaña</div>;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans grid grid-rows-[auto_auto_1fr] h-screen overflow-hidden">
      
      {/* 1. Header Area */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 grid grid-cols-[auto_1fr] items-center gap-4">
        <div className="bg-blue-600 p-2 rounded-lg text-white">
          <BookOpen size={24} />
        </div>
        <div>
          <h1 className="text-xl font-bold tracking-tight text-slate-900">Simbología ISO 14617</h1>
          <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Módulo Educativo Interactivo v1.0</p>
        </div>
      </header>

      {/* 2. Navigation Tabs (CSS Grid) */}
      <nav className="bg-white border-b border-slate-200 px-6 pt-2">
        <div className="grid grid-cols-5 gap-2 w-full max-w-5xl">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTabId(tab.id)}
              className={`
                group relative pb-3 pt-2 px-2 flex flex-col items-center gap-2 transition-colors duration-200 outline-none
                ${activeTabId === tab.id ? 'text-blue-600' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50 rounded-t-md'}
              `}
            >
              <div className={`p-1.5 rounded-full ${activeTabId === tab.id ? 'bg-blue-100' : 'bg-transparent group-hover:bg-slate-200'} transition-colors`}>
                {tab.icon}
              </div>
              <span className="text-xs font-medium truncate w-full text-center">{tab.label}</span>
              
              {/* Active Indicator Bar */}
              {activeTabId === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-t-full" />
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* 3. Main Content Area (CSS Grid Layout) */}
      <main className="grid grid-rows-[auto_1fr] overflow-hidden max-w-6xl w-full mx-auto p-6 gap-6">
        
        {/* Section Header */}
        <div className="grid gap-2 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex items-center gap-3">
             <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest border
                ${currentTab.category === 'Estático' ? 'bg-slate-100 text-slate-600 border-slate-200' : ''}
                ${currentTab.category === 'Interactivo' ? 'bg-indigo-50 text-indigo-600 border-indigo-200' : ''}
                ${currentTab.category === 'Dinámico' ? 'bg-amber-50 text-amber-600 border-amber-200' : ''}
             `}>
               {currentTab.category}
             </span>
             <h2 className="text-2xl font-bold text-slate-800">{currentTab.title}</h2>
          </div>
          <p className="text-slate-600 max-w-3xl leading-relaxed">
            {currentTab.description}
          </p>
        </div>

        {/* Diagram Render Area */}
        <Card className="h-full overflow-hidden bg-white relative group">
           {/* Background Grid Pattern for Technical feel */}
           <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
                style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
           </div>
           
           <div className="h-full w-full relative z-10 animate-in zoom-in-95 duration-300">
              {renderContent()}
           </div>

           {/* Helper label */}
           <div className="absolute bottom-3 right-3 text-[10px] text-slate-300 font-mono pointer-events-none">
             DIAGRAM_RENDER :: {activeTabId.toUpperCase()}
           </div>
        </Card>

      </main>

    </div>
  );
};

// --- Entry Point ---

export default function App() {
  return <LessonLayout />;
}