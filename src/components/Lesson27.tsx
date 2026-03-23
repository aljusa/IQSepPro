import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts';
import { Activity, Droplet, FlaskConical, Beaker, Settings, Layers, Clock, ArrowDownCircle, Network } from 'lucide-react';

// --- Types & Interfaces ---

interface BlockData {
  id: string;
  tabLabel: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

// --- Data ---

const lessonData: BlockData[] = [
  {
    id: 'intro',
    tabLabel: '1. Introducción',
    title: 'Introducción al proceso de centrifugación',
    description: 'La centrifugación es un método físico de separación de mezclas que utiliza el movimiento rotacional para generar una fuerza que actúa sobre las partículas. Este proceso se aplica cuando los componentes de una mezcla presentan diferencias de densidad, permitiendo su separación de forma rápida y eficiente. Su uso es común tanto en contextos industriales como en laboratorios.',
    icon: FlaskConical
  },
  {
    id: 'definition',
    tabLabel: '2. Definición',
    title: 'Definición de centrifugación',
    description: 'La centrifugación consiste en someter una mezcla a una rotación acelerada alrededor de un eje. Esta rotación genera una fuerza centrífuga que impulsa a las partículas más densas hacia la periferia del recipiente, mientras que las menos densas permanecen más cerca del eje de rotación. Este principio permite separar componentes sin alterar su composición química.',
    icon: Activity
  },
  {
    id: 'physics',
    tabLabel: '3. Fundamento Físico',
    title: 'Fundamento físico de la separación',
    description: 'El funcionamiento de la centrifugación se basa en la relación entre fuerza, masa y movimiento circular. Cuando una mezcla gira, las partículas experimentan una aceleración radial hacia afuera. Las partículas con mayor densidad (o masa efectiva) responden con mayor intensidad a esta fuerza, desplazándose más rápidamente que las menos densas, lo que produce la separación.',
    icon: ArrowDownCircle
  },
  {
    id: 'applications',
    tabLabel: '4. Aplicaciones',
    title: 'Importancia y aplicaciones',
    description: 'La centrifugación es una técnica clave en múltiples campos. En la industria alimentaria, permite separar la crema de la leche; en el tratamiento de aguas, facilita la eliminación de sólidos suspendidos; en la industria química, se emplea para purificar sustancias; y en laboratorios clínicos, es esencial para separar componentes sanguíneos como plasma y células.',
    icon: Layers
  },
  {
    id: 'speed',
    tabLabel: '5. Velocidad',
    title: 'Velocidad de rotación',
    description: 'La velocidad de rotación, generalmente expresada en revoluciones por minuto (rpm), determina la magnitud de la fuerza centrífuga aplicada. A mayor velocidad, mayor será la fuerza ejercida sobre las partículas, lo que acelera el proceso de sedimentación. Sin embargo, velocidades excesivas pueden dañar muestras sensibles.',
    icon: Settings
  },
  {
    id: 'time',
    tabLabel: '6. Tiempo',
    title: 'Tiempo de centrifugado',
    description: 'El tiempo durante el cual se mantiene la rotación influye directamente en el grado de separación. Un tiempo insuficiente puede resultar en una separación incompleta, mientras que un tiempo adecuado permite que las partículas alcancen su posición final según su densidad.',
    icon: Clock
  },
  {
    id: 'size_density',
    tabLabel: '7. Tamaño y Densidad',
    title: 'Tamaño y densidad de las partículas',
    description: 'Las partículas más grandes y densas sedimentan más rápidamente que las pequeñas o menos densas. Esto se debe a que experimentan una mayor fuerza centrífuga efectiva y menor resistencia relativa del fluido.',
    icon: Beaker
  },
  {
    id: 'viscosity',
    tabLabel: '8. Viscosidad',
    title: 'Viscosidad del fluido',
    description: 'La viscosidad del medio influye en la resistencia al movimiento de las partículas. En fluidos más viscosos, las partículas se desplazan con mayor dificultad, lo que ralentiza el proceso de sedimentación. En cambio, en fluidos menos viscosos, la separación ocurre con mayor rapidez.',
    icon: Droplet
  },
  {
    id: 'synthesis',
    tabLabel: '9. Síntesis',
    title: 'Síntesis del proceso',
    description: 'La centrifugación es una técnica eficiente que permite separar componentes de una mezcla mediante la aplicación de fuerza centrífuga. Su eficacia depende de variables físicas como la velocidad, el tiempo, las características de las partículas y la viscosidad del medio. Comprender estos factores permite optimizar su uso en diferentes contextos.',
    icon: Network
  }
];

// --- Sub-components ---

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-xl shadow-md border border-slate-200  ${className}`}>
    {children}
  </div>
);

// SVGs reutilizables para los diagramas
const TubeSVG = ({ fillBottom = "#cbd5e1", fillTop = "#f1f5f9", label = "" }) => (
  <div className="grid grid-rows-[1fr_auto] gap-2 justify-items-center">
    <svg width="60" height="160" viewBox="0 0 60 160">
      {/* Líquido superior (sobrenadante) */}
      <path d="M 15 20 L 45 20 L 45 100 L 15 100 Z" fill={fillTop} />
      {/* Líquido/sólido inferior (sedimento) */}
      <path d="M 15 100 L 45 100 L 45 130 A 15 15 0 0 1 15 130 Z" fill={fillBottom} />
      {/* Contorno del tubo */}
      <path d="M 15 10 L 15 130 A 15 15 0 0 0 45 130 L 45 10" fill="none" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
      {/* Borde superior */}
      <line x1="10" y1="10" x2="50" y2="10" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
    </svg>
    <span className="text-sm font-medium text-slate-600 text-center">{label}</span>
  </div>
);

// --- Componente de Renderizado de Diagramas ---

const DiagramRender: React.FC<{ blockId: string }> = ({ blockId }) => {
  // Utilizando un grid genérico para centrar contenido en el contenedor del diagrama
  const containerClass = "grid place-items-center w-full h-80 bg-slate-50 p-6";

  switch (blockId) {
    case 'intro':
      return (
        <div className={containerClass}>
          <div className="grid grid-cols-3 items-center gap-8 w-full max-w-md">
            <TubeSVG fillTop="#94a3b8" fillBottom="#94a3b8" label="Antes (Mezcla)" />
            <div className="grid place-items-center">
              <span className="text-2xl text-slate-400">→</span>
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Centrifugación</span>
            </div>
            <TubeSVG fillTop="#bfdbfe" fillBottom="#1e3a8a" label="Después (Separado)" />
          </div>
        </div>
      );

    case 'definition':
      return (
        <div className={containerClass}>
          <svg width="400" height="300" viewBox="0 0 300 300">
            {/* Eje central */}
            <line x1="50" y1="20" x2="50" y2="220" stroke="#94a3b8" strokeWidth="4" strokeDasharray="8 8" />
            {/* Brazo del rotor */}
            <line x1="50" y1="120" x2="150" y2="120" stroke="#64748b" strokeWidth="6" />
            {/* Tubo inclinado */}
            <g transform="translate(150, 120) rotate(-60)">
              <path d="M -15 -80 L 15 -80 L 15 60 A 15 15 0 0 1 -15 60 Z" fill="#e2e8f0" stroke="#475569" strokeWidth="3" />
              {/* Partículas */}
              <circle cx="0" cy="50" r="5" fill="#1e3a8a" />
              <circle cx="-5" cy="40" r="4" fill="#1e3a8a" />
              <circle cx="5" cy="45" r="4" fill="#1e3a8a" />
              <circle cx="0" cy="-20" r="3" fill="#60a5fa" />
              <circle cx="5" cy="-40" r="3" fill="#60a5fa" />
            </g>
            {/* Flecha de fuerza centrífuga */}
            <g transform="translate(180, 170)">
              <line x1="0" y1="0" x2="50" y2="30" stroke="#ef4444" strokeWidth="3" markerEnd="url(#arrowhead)" />
              <text x="60" y="45" fill="#ef4444" fontSize="12" fontWeight="bold">Fuerza Centrífuga</text>
            </g>
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444" />
              </marker>
            </defs>
          </svg>
        </div>
      );

    case 'physics':
      return (
        <div className={containerClass}>
          <svg width="400" height="200" viewBox="0 0 400 200">
             {/* Partícula grande/densa */}
             <circle cx="100" cy="60" r="20" fill="#1e3a8a" />
             <line x1="130" y1="60" x2="280" y2="60" stroke="#1e3a8a" strokeWidth="4" markerEnd="url(#arrowBlue)" />
             <text x="130" y="45" fill="#1e3a8a" fontSize="14" fontWeight="bold">Alta masa efectiva (v rápido)</text>
             
             {/* Partícula pequeña/ligera */}
             <circle cx="100" cy="140" r="10" fill="#60a5fa" />
             <line x1="120" y1="140" x2="180" y2="140" stroke="#60a5fa" strokeWidth="3" markerEnd="url(#arrowLightBlue)" />
             <text x="120" y="125" fill="#60a5fa" fontSize="14" fontWeight="bold">Baja masa efectiva (v lento)</text>

             <defs>
              <marker id="arrowBlue" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#1e3a8a" />
              </marker>
              <marker id="arrowLightBlue" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#60a5fa" />
              </marker>
            </defs>
          </svg>
        </div>
      );

    case 'applications':
      return (
        <div className={containerClass}>
          <div className="grid grid-cols-2 grid-rows-2 gap-6 w-full max-w-lg h-full p-4">
            <Card className="grid place-items-center p-4 bg-orange-50 border-orange-200">
              <div className="grid gap-2 justify-items-center">
                <span className="text-3xl">🥛</span>
                <span className="font-semibold text-orange-900 text-sm">Alimentaria (Leche)</span>
              </div>
            </Card>
            <Card className="grid place-items-center p-4 bg-blue-50 border-blue-200">
              <div className="grid gap-2 justify-items-center">
                <span className="text-3xl">🚰</span>
                <span className="font-semibold text-blue-900 text-sm">Tratamiento de Aguas</span>
              </div>
            </Card>
            <Card className="grid place-items-center p-4 bg-purple-50 border-purple-200">
              <div className="grid gap-2 justify-items-center">
                <span className="text-3xl">⚗️</span>
                <span className="font-semibold text-purple-900 text-sm">Industria Química</span>
              </div>
            </Card>
            <Card className="grid place-items-center p-4 bg-red-50 border-red-200">
              <div className="grid gap-2 justify-items-center">
                <span className="text-3xl">🩸</span>
                <span className="font-semibold text-red-900 text-sm">Laboratorio Clínico</span>
              </div>
            </Card>
          </div>
        </div>
      );

    case 'speed':
      const data = [
        { rpm: 1000, rcf: 100 },
        { rpm: 2000, rcf: 400 },
        { rpm: 3000, rcf: 900 },
        { rpm: 4000, rcf: 1600 },
        { rpm: 5000, rcf: 2500 }
      ];
      return (
        <div className={containerClass}>
          <div className="w-full h-full max-w-xl">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="rpm" label={{ value: 'Velocidad (RPM)', position: 'insideBottom', offset: -10 }} />
                <YAxis label={{ value: 'Fuerza (RCF)', angle: -90, position: 'insideLeft' }} />
           
                <Line type="monotone" dataKey="rcf" stroke="#2563eb" strokeWidth={3} dot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      );

    case 'time':
      return (
        <div className={containerClass}>
          <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-4 w-full max-w-2xl">
            <TubeSVG fillTop="#94a3b8" fillBottom="#94a3b8" label="t = 0 (Inicio)" />
            <span className="text-slate-400 font-bold">→</span>
            <TubeSVG fillTop="#cbd5e1" fillBottom="#475569" label="t = 5 min (Intermedio)" />
            <span className="text-slate-400 font-bold">→</span>
            <TubeSVG fillTop="#f1f5f9" fillBottom="#1e293b" label="t = 15 min (Final)" />
          </div>
        </div>
      );

    case 'size_density':
      return (
        <div className={containerClass}>
          <svg width="200" height="220" viewBox="0 0 200 220">
            <path d="M 50 20 L 150 20 L 150 160 L 50 160 Z" fill="#f8fafc" />
            <path d="M 50 160 L 150 160 L 150 190 A 50 20 0 0 1 50 190 Z" fill="#e2e8f0" />
            <path d="M 50 10 L 50 190 A 50 20 0 0 0 150 190 L 150 10" fill="none" stroke="#64748b" strokeWidth="4" />
            
            {/* Partículas grandes (sedimentadas) */}
            <circle cx="80" cy="180" r="8" fill="#1e3a8a" />
            <circle cx="100" cy="190" r="10" fill="#1e3a8a" />
            <circle cx="120" cy="185" r="9" fill="#1e3a8a" />

            {/* Partículas pequeñas (suspendidas) */}
            <circle cx="70" cy="80" r="3" fill="#60a5fa" />
            <circle cx="120" cy="60" r="4" fill="#60a5fa" />
            <circle cx="100" cy="110" r="3" fill="#60a5fa" />
            <circle cx="130" cy="130" r="4" fill="#60a5fa" />
            <circle cx="80" cy="140" r="3" fill="#60a5fa" />
          </svg>
        </div>
      );

    case 'viscosity':
      return (
        <div className={containerClass}>
          <div className="grid grid-cols-2 gap-16 text-center">
            <div className="grid gap-4 justify-items-center">
              <svg width="100" height="200" viewBox="0 0 100 200">
                <rect x="20" y="20" width="60" height="160" rx="10" fill="#bae6fd" opacity="0.5" stroke="#0ea5e9" strokeWidth="2" />
                <circle cx="50" cy="160" r="10" fill="#0369a1" />
                <line x1="50" y1="40" x2="50" y2="140" stroke="#0369a1" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrowVisc)" />
              </svg>
              <span className="font-semibold text-slate-700">Baja Viscosidad (Rápido)</span>
            </div>
            <div className="grid gap-4 justify-items-center">
              <svg width="100" height="200" viewBox="0 0 100 200">
                <rect x="20" y="20" width="60" height="160" rx="10" fill="#fef08a" opacity="0.8" stroke="#ca8a04" strokeWidth="2" />
                <circle cx="50" cy="80" r="10" fill="#854d0e" />
                <line x1="50" y1="40" x2="50" y2="60" stroke="#854d0e" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrowVisc2)" />
              </svg>
              <span className="font-semibold text-slate-700">Alta Viscosidad (Lento)</span>
            </div>
            <defs>
              <marker id="arrowVisc" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
                <polygon points="0 0, 6 2, 0 4" fill="#0369a1" />
              </marker>
              <marker id="arrowVisc2" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
                <polygon points="0 0, 6 2, 0 4" fill="#854d0e" />
              </marker>
            </defs>
          </div>
        </div>
      );

    case 'synthesis':
      return (
        <div className={containerClass}>
          <div className="grid grid-rows-[auto_1fr_auto] grid-cols-3 gap-4 w-full h-full max-w-2xl place-items-center text-center">
            <div className="col-start-2 bg-blue-100 p-3 rounded-lg border border-blue-300 w-full font-semibold text-blue-900 shadow-sm">
              Eficiencia de Separación
            </div>
            
            {/* Conectores usando grid lines */}
            <div className="col-span-3 grid grid-cols-4 w-full px-8 gap-4">
               <div className="grid justify-items-center"><div className="h-8 border-l-2 border-slate-300"></div></div>
               <div className="grid justify-items-center"><div className="h-8 border-l-2 border-slate-300"></div></div>
               <div className="grid justify-items-center"><div className="h-8 border-l-2 border-slate-300"></div></div>
               <div className="grid justify-items-center"><div className="h-8 border-l-2 border-slate-300"></div></div>
            </div>

            <div className="col-span-3 grid grid-cols-4 gap-4 w-full">
              <Card className="p-3 bg-white text-sm font-medium border-slate-200">Fuerza Centrífuga</Card>
              <Card className="p-3 bg-white text-sm font-medium border-slate-200">Tiempo</Card>
              <Card className="p-3 bg-white text-sm font-medium border-slate-200">Prop. Partículas</Card>
              <Card className="p-3 bg-white text-sm font-medium border-slate-200">Viscosidad</Card>
            </div>
          </div>
        </div>
      );

    default:
      return <div className={containerClass}>Visualización no disponible</div>;
  }
};

// --- Layout Principal ---

const LessonLayout: React.FC<{
  activeId: string;
  setActiveId: (id: string) => void;
  activeBlock: BlockData;
}> = ({ activeId, setActiveId, activeBlock }) => {
  const ActiveIcon = activeBlock.icon;

  return (
    <div className="grid grid-rows-[auto_1fr] min-h-screen bg-slate-100 text-slate-800 font-sans">
      
      {/* HEADER & NAV */}
      <header className="grid gap-6 bg-white border-b border-slate-200 p-6 shadow-sm z-10 top-0">
        <div className="grid grid-cols-[auto_1fr] gap-4 items-center">
          <div className="grid place-items-center w-12 h-12 bg-blue-600 rounded-lg text-white shadow-md">
            <ActiveIcon size={24} />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
            Proceso de Centrifugación
          </h1>
        </div>
        
        {/* TAB NAVIGATION (Grid-based) */}
        <nav className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {lessonData.map((block) => {
            const isSelected = block.id === activeId;
            return (
              <button
                key={block.id}
                onClick={() => setActiveId(block.id)}
                className={`
                  text-sm font-semibold py-3 px-4 rounded-md transition-all duration-200 text-left border
                  ${isSelected 
                    ? 'bg-blue-50 border-blue-600 text-blue-700 shadow-inner' 
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300'}
                `}
              >
                {block.tabLabel}
              </button>
            );
          })}
        </nav>
      </header>

      {/* CONTENT AREA */}
      <main className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 lg:p-8 items-start max-w-7xl mx-auto w-full">
        
        {/* TEXT PANEL */}
        <div className="col-span-1 lg:col-span-4 grid gap-6 content-start">
          <Card className="p-6 lg:p-8 border-t-4 border-t-blue-600">
            <div className="grid gap-4">
              <h2 className="text-2xl font-bold text-slate-800 leading-tight">
                {activeBlock.title}
              </h2>
              <div className="w-12 h-1 bg-blue-100 rounded-full"></div>
              <p className="text-slate-600 text-lg leading-relaxed">
                {activeBlock.description}
              </p>
            </div>
          </Card>
        </div>

        {/* DIAGRAM PANEL */}
        <div className="col-span-1 lg:col-span-8 grid gap-4 h-full">
          <Card className="grid grid-rows-[auto_1fr] h-full min-h-[400px]">
            <div className="bg-slate-800 text-white p-4 grid grid-cols-[1fr_auto] items-center">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <Settings size={18} className="text-slate-400" />
                {activeBlock.title}
              </h3>
            </div>
            <div className="grid place-items-center w-full h-full p-4 bg-slate-50 relative">
              <DiagramRender blockId={activeBlock.id} />
            </div>
          </Card>
        </div>

      </main>
    </div>
  );
};

// --- App Entry Point ---

export default function App() {
  const [activeTabId, setActiveTabId] = useState<string>(lessonData[0].id);

  const activeBlock = lessonData.find(b => b.id === activeTabId) || lessonData[0];

  return (
    <LessonLayout 
      activeId={activeTabId} 
      setActiveId={setActiveTabId} 
      activeBlock={activeBlock} 
    />
  );
}