import React, { useState, useEffect } from 'react';
import { Settings, Activity, AlertTriangle, CheckCircle, XCircle, Sliders, Play } from 'lucide-react';

// --- Tipos e Interfaces ---

interface TabData {
  id: string;
  title: string;
  category: 'Estático' | 'Dinámico';
  description: string;
  detail: string;
  icon: React.ElementType;
}

// --- Datos del Contenido ---

const TABS: TabData[] = [
  {
    id: 'comparacion',
    title: 'Comparación de Funciones',
    category: 'Estático',
    description: 'Diferenciación visual de funciones abstractas.',
    detail: 'En la diagramación funcional, cada bloque representa una transformación. Aquí observamos cómo diferentes entradas (A, B) producen distintas salidas (Y, Z) dependiendo de la función interna (F1 vs F2).',
    icon: Activity
  },
  {
    id: 'senales',
    title: 'Entradas y Salidas',
    category: 'Estático',
    description: 'Lectura correcta de agrupación de señales.',
    detail: 'La jerarquía visual es crítica. Las señales agrupadas deben interpretarse como un bus o vector de datos que alimenta una función compleja, no como líneas independientes sin relación.',
    icon: Settings
  },
  {
    id: 'secuencia',
    title: 'Secuencia de Aplicación',
    category: 'Dinámico',
    description: 'Impacto de errores en la secuencia lógica.',
    detail: 'El orden de los factores sí altera el producto en sistemas lógicos. Observa cómo invertir el orden de filtrado y amplificación cambia drásticamente el resultado final.',
    icon: AlertTriangle
  },
  {
    id: 'variabilidad',
    title: 'Variabilidad y Ajuste',
    category: 'Dinámico',
    description: 'Representación visual de parámetros ajustables.',
    detail: 'Los diagramas modernos deben indicar capacidad de cambio. Interactúa con los controles para ver cómo la representación gráfica denota estados variables en tiempo real.',
    icon: Sliders
  }
];

// --- Componentes de UI (Átomos) ---

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-lg border border-slate-200 shadow-sm p-6 ${className}`}>
    {children}
  </div>
);

const Badge: React.FC<{ category: 'Estático' | 'Dinámico' }> = ({ category }) => {
  const colorClass = category === 'Estático' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800';
  return (
    <span className={`px-2 py-1 rounded text-xs font-semibold uppercase tracking-wide ${colorClass}`}>
      {category}
    </span>
  );
};

// --- Componentes de Visualización (Diagram Renders) ---

// 1. Comparación (Estático)
const VisualComparison = () => (
  <div className="w-full h-64 grid grid-cols-2 gap-8 items-center justify-items-center">
    {/* Función Lineal */}
    <div className="grid justify-items-center gap-2">
      <div className="text-sm font-mono text-slate-500">Entrada A</div>
      <div className="relative group">
        <svg width="120" height="80" className="drop-shadow-md">
          <rect x="10" y="10" width="100" height="60" rx="4" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
          <text x="60" y="45" textAnchor="middle" fill="#1e40af" fontSize="14" fontWeight="bold">F(x) Lineal</text>
        </svg>
        <div className="absolute top-1/2 -right-6 w-6 h-0.5 bg-slate-400"></div>
        <div className="absolute top-1/2 -left-6 w-6 h-0.5 bg-slate-400"></div>
      </div>
      <div className="text-sm font-mono text-slate-500">Salida Lineal</div>
    </div>

    {/* Función Exponencial */}
    <div className="grid justify-items-center gap-2">
      <div className="text-sm font-mono text-slate-500">Entrada B</div>
      <div className="relative group">
        <svg width="120" height="80" className="drop-shadow-md">
          <circle cx="60" cy="40" r="35" fill="#faf5ff" stroke="#9333ea" strokeWidth="2" />
          <text x="60" y="45" textAnchor="middle" fill="#6b21a8" fontSize="14" fontWeight="bold">G(x) Exp</text>
        </svg>
        <div className="absolute top-1/2 -right-8 w-8 h-0.5 bg-slate-400"></div>
        <div className="absolute top-1/2 -left-8 w-8 h-0.5 bg-slate-400"></div>
      </div>
      <div className="text-sm font-mono text-slate-500">Salida Exp.</div>
    </div>
  </div>
);

// 2. Señales (Estático)
const VisualSignals = () => (
  <div className="w-full h-full grid content-center justify-items-center">
    <svg width="300" height="200" viewBox="0 0 300 200">
      {/* Grupo de entradas */}
      <path d="M 20 50 L 80 50 L 100 80" fill="none" stroke="#64748b" strokeWidth="2" />
      <path d="M 20 100 L 100 100" fill="none" stroke="#64748b" strokeWidth="2" />
      <path d="M 20 150 L 80 150 L 100 120" fill="none" stroke="#64748b" strokeWidth="2" />
      
      <text x="10" y="55" className="text-xs fill-slate-500">Data A</text>
      <text x="10" y="105" className="text-xs fill-slate-500">Data B</text>
      <text x="10" y="155" className="text-xs fill-slate-500">Clk</text>

      {/* Bus Unificado */}
      <rect x="100" y="80" width="40" height="40" fill="#e2e8f0" stroke="#475569" strokeDasharray="4 2" />
      <text x="120" y="105" textAnchor="middle" className="text-xs fill-slate-700 font-mono">MUX</text>

      {/* Salida Unica */}
      <path d="M 140 100 L 200 100" fill="none" stroke="#0f172a" strokeWidth="4" />
      
      {/* Bloque Procesador */}
      <rect x="200" y="60" width="80" height="80" rx="4" fill="#f0f9ff" stroke="#0ea5e9" strokeWidth="2" />
      <text x="240" y="105" textAnchor="middle" fontWeight="bold" fill="#0369a1">CPU</text>
    </svg>
    <p className="text-sm text-slate-500 mt-4 text-center">
      Las líneas finas se consolidan en un bus grueso (negro) antes del procesamiento.
    </p>
  </div>
);

// 3. Secuencia (Dinámico)
const VisualSequence = () => {
  const [mode, setMode] = useState<'correct' | 'incorrect'>('correct');
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    setAnimating(true);
    const timer = setTimeout(() => setAnimating(false), 2000);
    return () => clearTimeout(timer);
  }, [mode]);

  return (
    <div className="grid gap-4 w-full">
      <div className="grid grid-flow-col gap-4 justify-center">
        <button 
          onClick={() => setMode('correct')}
          className={`px-4 py-2 rounded grid grid-flow-col gap-2 items-center ${mode === 'correct' ? 'bg-green-100 text-green-700 ring-2 ring-green-500' : 'bg-slate-100 text-slate-600'}`}
        >
          <CheckCircle size={16} /> Secuencia Correcta
        </button>
        <button 
          onClick={() => setMode('incorrect')}
          className={`px-4 py-2 rounded grid grid-flow-col gap-2 items-center ${mode === 'incorrect' ? 'bg-red-100 text-red-700 ring-2 ring-red-500' : 'bg-slate-100 text-slate-600'}`}
        >
          <XCircle size={16} /> Secuencia Incorrecta
        </button>
      </div>

      <div className="h-48 bg-slate-50 rounded border border-slate-200 grid items-center justify-center overflow-hidden relative">
        {/* Diagrama Esquemático */}
        <div className="grid grid-flow-col gap-12 items-center relative z-10">
          <div className="w-16 h-16 bg-white border-2 border-slate-400 grid place-items-center rounded">
            Input
          </div>
          
          {/* Orden de bloques cambia según modo */}
          {mode === 'correct' ? (
            <>
              <div className="w-20 h-20 bg-blue-100 border-2 border-blue-500 grid place-items-center rounded shadow-lg">
                <span className="text-xs font-bold text-blue-900">Limpiar</span>
              </div>
              <div className="w-20 h-20 bg-orange-100 border-2 border-orange-500 grid place-items-center rounded shadow-lg">
                <span className="text-xs font-bold text-orange-900">Amplificar</span>
              </div>
            </>
          ) : (
            <>
              <div className="w-20 h-20 bg-orange-100 border-2 border-orange-500 grid place-items-center rounded shadow-lg">
                <span className="text-xs font-bold text-orange-900">Amplificar</span>
              </div>
              <div className="w-20 h-20 bg-blue-100 border-2 border-blue-500 grid place-items-center rounded shadow-lg">
                <span className="text-xs font-bold text-blue-900">Limpiar</span>
              </div>
            </>
          )}

          <div className={`w-16 h-16 border-2 grid place-items-center rounded transition-colors duration-500 ${animating ? 'bg-white border-slate-300' : mode === 'correct' ? 'bg-green-100 border-green-500' : 'bg-red-100 border-red-500'}`}>
            {animating ? '...' : mode === 'correct' ? 'Limpio' : 'Ruido!'}
          </div>
        </div>

        {/* Flechas conectivas simples */}
        <div className="absolute inset-0 grid items-center justify-center pointer-events-none">
           <div className="w-[80%] h-1 bg-slate-200"></div>
        </div>
      </div>
    </div>
  );
};

// 4. Variabilidad (Dinámico)
const VisualVariability = () => {
  const [amplitude, setAmplitude] = useState(50);
  const [frequency, setFrequency] = useState(50);

  // Generar path de onda simple
  const generatePath = () => {
    let path = "M 0 50 ";
    for (let x = 0; x <= 300; x += 5) {
      const y = 50 + (amplitude / 2) * Math.sin((x + (Date.now() / 20)) * (frequency / 1000));
      path += `L ${x} ${y} `;
    }
    return path;
  };
  
  // Pequeño hook para animación continua
  const [d, setD] = useState("");
  useEffect(() => {
    let frame: number;
    const loop = () => {
      setD(generatePath());
      frame = requestAnimationFrame(loop);
    }
    loop();
    return () => cancelAnimationFrame(frame);
  }, [amplitude, frequency]);

  return (
    <div className="grid gap-6">
      <div className="grid grid-cols-2 gap-8">
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Amplitud (Variable)
          <input 
            type="range" 
            min="10" 
            max="90" 
            value={amplitude} 
            onChange={(e) => setAmplitude(Number(e.target.value))}
            className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Frecuencia (Variable)
          <input 
            type="range" 
            min="10" 
            max="200" 
            value={frequency} 
            onChange={(e) => setFrequency(Number(e.target.value))}
            className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
          />
        </label>
      </div>

      <div className="border border-slate-200 rounded bg-slate-900 h-40 relative overflow-hidden">
        <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 300 100">
            <path d={d} fill="none" stroke="#22d3ee" strokeWidth="2" />
            
            {/* Indicadores visuales de "Límites" */}
            <line x1="0" y1={50 - amplitude/2} x2="300" y2={50 - amplitude/2} stroke="#94a3b8" strokeDasharray="4 4" strokeWidth="1" opacity="0.5" />
            <line x1="0" y1={50 + amplitude/2} x2="300" y2={50 + amplitude/2} stroke="#94a3b8" strokeDasharray="4 4" strokeWidth="1" opacity="0.5" />
        </svg>
        <div className="absolute top-2 right-2 text-xs text-cyan-400 font-mono">
           Monitor de Salida
        </div>
      </div>
    </div>
  );
};


// --- Componente Layout Principal (LessonLayout) ---

const LessonLayout: React.FC<{
  activeTab: string;
  setActiveTab: (id: string) => void;
  children: React.ReactNode;
}> = ({ activeTab, setActiveTab, children }) => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans p-4 md:p-8">
      {/* Grid Principal: Definimos filas explícitas */}
      <div className="max-w-6xl mx-auto grid gap-6" style={{ gridTemplateRows: 'auto auto 1fr' }}>
        
        {/* Header - Row 1 */}
        <header className="grid gap-2">
          <div className="grid grid-flow-col justify-start items-center gap-3">
             <div className="bg-indigo-600 p-2 rounded text-white">
               <Activity size={24} />
             </div>
             <div>
               <h1 className="text-2xl font-bold text-slate-900">DiagramtoReact</h1>
               <p className="text-slate-500 text-sm">Sistema de Enseñanza de Visualización de Datos</p>
             </div>
          </div>
        </header>

        {/* Navigation Tabs - Row 2 */}

        <nav className="bg-white border-b border-slate-200 px-6 pt-2">
        <div className="grid grid-cols-5 gap-2 w-full max-w-5xl">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                group relative pb-3 pt-2 px-2 flex flex-col items-center gap-2 transition-colors duration-200 outline-none
                ${activeTab === tab.id ? 'text-blue-600' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50 rounded-t-md'}
              `}
            >
              <div className={`p-1.5 rounded-full ${activeTab === tab.id ? 'bg-blue-100' : 'bg-transparent group-hover:bg-slate-200'} transition-colors`}>
                
               <Icon size={16} />
                                   <span className="hidden sm:inline">{tab.title}</span>

              </div>
             {/* Active Indicator Bar */}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-t-full" />
              )}
            </button>
          )})}
        </div>
      </nav>
        {/* Content Area - Row 3 */}
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {children}
        </main>

      </div>
    </div>
  );
};


// --- Aplicación Principal ---

const DiagramApp: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>(TABS[0].id);

  const activeData = TABS.find(t => t.id === activeTabId) || TABS[0];

  const renderContent = () => {
    switch (activeTabId) {
      case 'comparacion': return <VisualComparison />;
      case 'senales': return <VisualSignals />;
      case 'secuencia': return <VisualSequence />;
      case 'variabilidad': return <VisualVariability />;
      default: return <div className="text-slate-400">Seleccione un diagrama</div>;
    }
  };

  return (
    <LessonLayout activeTab={activeTabId} setActiveTab={setActiveTabId}>
      
      {/* Panel Izquierdo: Información Teórica (3 columnas en desktop) */}
      <section className="lg:col-span-4 grid gap-4 content-start">
        <Card className="h-full border-t-4 border-t-indigo-500">
          <div className="grid gap-4">
            <div className="grid grid-flow-col justify-between items-center">
              <h2 className="text-xl font-bold text-slate-800">{activeData.title}</h2>
              <Badge category={activeData.category} />
            </div>
            
            <div className="w-full h-px bg-slate-100"></div>
            
            <div className="grid gap-2">
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Propósito Visual</h3>
              <p className="text-slate-700 leading-relaxed">
                {activeData.description}
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded text-sm text-slate-600 leading-relaxed border border-slate-100">
              {activeData.detail}
            </div>
          </div>
        </Card>
      </section>

      {/* Panel Derecho: Diagrama Interactivo (8 columnas en desktop) */}
      <section className="lg:col-span-8 h-full min-h-[400px]">
        <Card className="h-full bg-slate-50/50 grid grid-rows-[auto_1fr] gap-6">
          <div className="grid grid-flow-col justify-between items-center border-b border-slate-200 pb-4">
            <h3 className="font-semibold text-slate-700 flex items-center gap-2">
              <Play size={18} className="text-indigo-500" />
              Renderizado del Diagrama
            </h3>
            <span className="text-xs text-slate-400 font-mono">LIVE PREVIEW</span>
          </div>
          
          <div className="w-full h-full grid place-items-center bg-white rounded border border-slate-200 shadow-inner p-4 overflow-hidden">
            {renderContent()}
          </div>
        </Card>
      </section>

    </LessonLayout>
  );
};

export default DiagramApp;