import React, { useState } from 'react';
import { 
  Activity, 
  Compass, 
  Layers, 
  MapPin, 
  CheckCircle, 
  XCircle, 
  Info, 
  AlertTriangle,
  ArrowRight
} from 'lucide-react';

// --- TIPOS E INTERFACES ---

type TabId = 'dynamic' | 'static-orientation' | 'static-simplified' | 'interactive';

interface TabConfig {
  id: TabId;
  label: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

// --- CONFIGURACIÓN DE PESTAÑAS (DATA) ---

const TABS: TabConfig[] = [
  {
    id: 'dynamic',
    label: 'Señales Dinámicas',
    icon: <Activity className="w-4 h-4" />,
    title: 'Representación animada de señales',
    description: 'Traducción de comportamientos físicos (movimiento, alerta) en símbolos visuales comprensibles. Observa cómo el ritmo y la dirección comunican urgencia.'
  },
  {
    id: 'static-orientation',
    label: 'Orientación',
    icon: <Compass className="w-4 h-4" />,
    title: 'Comparativa de Orientaciones',
    description: 'Prevención de la confusión visual. A la izquierda, un ejemplo ambiguo; a la derecha, la aplicación correcta de alineación y jerarquía visual.'
  },
  {
    id: 'static-simplified',
    label: 'Simplificación',
    icon: <Layers className="w-4 h-4" />,
    title: 'Diagramas: Simplificados vs. Saturados',
    description: 'El valor de la sustracción. Eliminar el ruido visual ("chartjunk") permite que el usuario procese la información crítica un 40% más rápido.'
  },
  {
    id: 'interactive',
    label: 'Caso Práctico',
    icon: <MapPin className="w-4 h-4" />,
    title: 'Ejemplo Práctico Normativo',
    description: 'Integración de reglas en un plano real. Haz clic en los puntos de interés para revelar la referencia normativa específica (ISO/ANSI).'
  }
];

// --- COMPONENTES DE UI ---

/**
 * Card Component
 * Wrapper genérico para mantener consistencia visual.
 */
const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden ${className}`}>
    {children}
  </div>
);

/**
 * Diagram Render: Dynamic Signals
 * Muestra animaciones CSS puras para simular señales.
 */
const DynamicSignalsView: React.FC = () => {
  return (
    <div className="w-full h-64 grid grid-cols-2 gap-8 p-6 bg-slate-50 place-items-center">
      {/* Señal de Peligro Pulsante */}
      <div className="grid place-items-center gap-4 text-center">
        <div className="relative w-24 h-24 grid place-items-center">
          <div className="absolute inset-0 bg-amber-500 rounded-full opacity-20 animate-ping"></div>
          <div className="relative bg-amber-100 border-4 border-amber-500 text-amber-600 rounded-full w-20 h-20 grid place-items-center">
            <AlertTriangle size={32} />
          </div>
        </div>
        <p className="text-sm font-semibold text-slate-600">Alerta Pulsante</p>
      </div>

      {/* Flujo de Movimiento */}
      <div className="grid place-items-center gap-4 text-center w-full">
        <div className="relative w-full h-12 bg-slate-200 rounded-full overflow-hidden">
          <div className="absolute inset-y-0 left-0 bg-blue-500 w-1/3 animate-[slide_2s_infinite_linear] opacity-75"></div>
          <div className="absolute inset-0 grid place-items-center">
            <ArrowRight className="text-slate-800 z-10" />
          </div>
        </div>
        <p className="text-sm font-semibold text-slate-600">Dirección de Flujo</p>
      </div>

      <style>{`
        @keyframes slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
      `}</style>
    </div>
  );
};

/**
 * Diagram Render: Static Orientation
 * Grid comparativo Correcto vs Incorrecto.
 */
const OrientationView: React.FC = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-slate-50 h-full">
      {/* Incorrecto */}
      <div className="border-2 border-dashed border-rose-300 bg-rose-50 p-4 rounded grid place-content-center text-center opacity-80">
        <div className="mb-2 grid justify-items-center">
          <XCircle className="text-rose-500 mb-2" />
          <span className="text-rose-700 font-bold uppercase text-xs">Incorrecto</span>
        </div>
        <div className="grid grid-cols-3 gap-1 w-32 rotate-12 opacity-50 blur-[1px]">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-8 h-8 bg-slate-400 rounded-sm"></div>
          ))}
        </div>
        <p className="text-xs text-rose-600 mt-2">Rotación arbitraria y falta de rejilla base.</p>
      </div>

      {/* Correcto */}
      <div className="border-2 border-emerald-500 bg-emerald-50 p-4 rounded grid place-content-center text-center">
        <div className="mb-2 grid justify-items-center">
          <CheckCircle className="text-emerald-600 mb-2" />
          <span className="text-emerald-700 font-bold uppercase text-xs">Correcto</span>
        </div>
        <div className="grid grid-cols-3 gap-2 w-32">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-8 h-8 bg-blue-600 rounded-sm shadow-sm"></div>
          ))}
        </div>
        <p className="text-xs text-emerald-800 mt-2">Alineación ortogonal y consistencia.</p>
      </div>
    </div>
  );
};

/**
 * Diagram Render: Simplified vs Saturated
 * Visualización del concepto "Data-Ink Ratio".
 */
const SimplificationView: React.FC = () => {
  return (
    <div className="w-full h-80 grid grid-rows-[1fr_auto_1fr] gap-4 p-6 bg-white">
      {/* Saturado */}
      <div className="relative border border-slate-300 bg-slate-100 p-4 overflow-hidden">
        <span className="absolute top-2 left-2 text-xs bg-slate-800 text-white px-2 py-0.5">Saturado (Ruido)</span>
        <svg viewBox="0 0 400 100" className="w-full h-full opacity-50">
           {/* Líneas de ruido */}
           {[...Array(20)].map((_, i) => (
             <line key={i} x1={i * 20} y1="0" x2={i * 20} y2="100" stroke="#ccc" strokeWidth="1" />
           ))}
           {[...Array(5)].map((_, i) => (
             <line key={i} x1="0" y1={i * 20} x2="400" y2={i * 20} stroke="#ccc" strokeWidth="1" />
           ))}
           <path d="M0,80 Q50,10 100,50 T200,80 T300,40 T400,90" fill="none" stroke="blue" strokeWidth="4" />
           {/* Decoración innecesaria */}
           <circle cx="100" cy="50" r="5" fill="red" />
           <circle cx="200" cy="80" r="5" fill="red" />
           <circle cx="300" cy="40" r="5" fill="red" />
        </svg>
      </div>
      
      <div className="grid place-items-center">
        <ArrowRight className="rotate-90 text-slate-400" />
      </div>

      {/* Simplificado */}
      <div className="relative border-b-2 border-l-2 border-slate-800 bg-white p-4">
        <span className="absolute top-2 left-2 text-xs bg-blue-600 text-white px-2 py-0.5">Simplificado (Señal)</span>
        <svg viewBox="0 0 400 100" className="w-full h-full">
           <path d="M0,80 Q50,10 100,50 T200,80 T300,40 T400,90" fill="none" stroke="#2563eb" strokeWidth="3" />
        </svg>
      </div>
    </div>
  );
};

/**
 * Diagram Render: Interactive Map
 * Mapa interactivo con hotspots.
 */
const InteractiveExample: React.FC = () => {
  const [selectedPoint, setSelectedPoint] = useState<number | null>(null);

  const points = [
    { id: 1, x: 20, y: 30, type: 'danger', label: 'Riesgo Eléctrico', code: 'ISO 7010-W012' },
    { id: 2, x: 50, y: 50, type: 'info', label: 'Punto de Reunión', code: 'ISO 7010-E001' },
    { id: 3, x: 80, y: 20, type: 'fire', label: 'Extintor', code: 'ISO 7010-F001' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 h-80">
      {/* Plano */}
      <div className="relative bg-slate-900 rounded-lg p-4 overflow-hidden border border-slate-700 shadow-inner">
        <div className="absolute top-4 left-4 text-slate-400 text-xs font-mono">PLANO DE PLANTA A-12</div>
        
        {/* Estructura del mapa (SVG simple) */}
        <svg viewBox="0 0 100 100" className="w-full h-full pointer-events-none absolute inset-0 opacity-30">
          <rect x="10" y="10" width="80" height="80" fill="none" stroke="white" strokeWidth="0.5" />
          <line x1="10" y1="40" x2="60" y2="40" stroke="white" strokeWidth="0.5" />
          <line x1="60" y1="40" x2="60" y2="10" stroke="white" strokeWidth="0.5" />
          <rect x="65" y="60" width="20" height="20" fill="none" stroke="white" strokeWidth="0.5" />
        </svg>

        {/* Hotspots Interactivos */}
        {points.map((p) => (
          <button
            key={p.id}
            onClick={() => setSelectedPoint(p.id)}
            className={`absolute w-8 h-8 -ml-4 -mt-4 rounded-full border-2 grid place-items-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 z-10
              ${selectedPoint === p.id 
                ? 'bg-white border-blue-500 scale-110 shadow-[0_0_15px_rgba(59,130,246,0.5)]' 
                : 'bg-slate-800 border-slate-500 hover:border-white'}`}
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
            aria-label={`Ver detalles de ${p.label}`}
          >
            {p.type === 'danger' && <AlertTriangle size={14} className={selectedPoint === p.id ? 'text-amber-500' : 'text-slate-400'} />}
            {p.type === 'info' && <MapPin size={14} className={selectedPoint === p.id ? 'text-emerald-500' : 'text-slate-400'} />}
            {p.type === 'fire' && <Activity size={14} className={selectedPoint === p.id ? 'text-rose-500' : 'text-slate-400'} />}
          </button>
        ))}
      </div>

      {/* Panel de Detalles */}
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 grid place-content-start gap-4">
        <h4 className="font-bold text-slate-700 border-b pb-2">Detalle Normativo</h4>
        {selectedPoint ? (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <span className="text-xs font-mono text-blue-600 bg-blue-100 px-2 py-1 rounded">
              {points.find(p => p.id === selectedPoint)?.code}
            </span>
            <h3 className="text-lg font-bold mt-2 text-slate-800">
              {points.find(p => p.id === selectedPoint)?.label}
            </h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              El símbolo debe ubicarse a una altura visible (1.5m - 2.0m) y contrastar con el fondo.
            </p>
          </div>
        ) : (
          <div className="text-slate-400 text-sm italic grid place-items-center h-32 text-center">
            <Info className="mb-2 opacity-50" />
            Selecciona un punto en el mapa para ver la norma.
          </div>
        )}
      </div>
    </div>
  );
};

// --- ESTRUCTURA PRINCIPAL (LAYOUT) ---

/**
 * LessonLayout
 * Implementa Grid Layout puro (no flex) para la estructura principal.
 */
const LessonLayout: React.FC<{
  header: React.ReactNode;
  navigation: React.ReactNode;
  content: React.ReactNode;
  visual: React.ReactNode;
}> = ({ header, navigation, content, visual }) => {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans p-4 md:p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Header Area */}
        <div className="col-span-1 md:col-span-12">
          {header}
        </div>

        {/* Navigation Tabs */}
        <div className="col-span-1 md:col-span-12 sticky top-0 z-50 bg-slate-100/90 backdrop-blur-sm py-2">
          {navigation}
        </div>

        {/* Main Content Area: Split 5/7 columns */}
        <main className="col-span-1 md:col-span-5 grid content-start gap-4">
          {content}
        </main>

        <aside className="col-span-1 md:col-span-7 grid h-full">
          {visual}
        </aside>

      </div>
    </div>
  );
};

// --- COMPONENTE PRINCIPAL (APP) ---

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('dynamic');

  const activeData = TABS.find(t => t.id === activeTab) || TABS[0];

  const renderVisual = () => {
    switch (activeTab) {
      case 'dynamic': return <DynamicSignalsView />;
      case 'static-orientation': return <OrientationView />;
      case 'static-simplified': return <SimplificationView />;
      case 'interactive': return <InteractiveExample />;
      default: return null;
    }
  };

  return (
    <LessonLayout
      header={
        <header className="grid gap-2 border-b border-slate-300 pb-4">
          <div className="grid grid-flow-col justify-start items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg grid place-items-center text-white shadow-lg">
              <Layers size={20} />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900">Guía de Visualización</h1>
              <p className="text-sm text-slate-500">Normativas Técnicas y Señalización</p>
            </div>
          </div>
        </header>
      }
      
      navigation={
        <nav className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                grid grid-flow-col items-center justify-center gap-2 p-3 text-sm font-medium rounded-md transition-all duration-200
                ${activeTab === tab.id 
                  ? 'bg-white text-indigo-600 shadow-md ring-1 ring-slate-200' 
                  : 'text-slate-500 hover:bg-slate-200 hover:text-slate-700'}
              `}
              aria-selected={activeTab === tab.id}
            >
              {tab.icon}
              <span className="hidden md:inline">{tab.label}</span>
            </button>
          ))}
        </nav>
      }

      content={
        <Card className="h-full">
          <div className="p-6 grid gap-4">
            <div className="border-l-4 border-indigo-500 pl-4">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-500 mb-1 block">
                Concepto Teórico
              </span>
              <h2 className="text-xl font-bold text-slate-900">{activeData.title}</h2>
            </div>
            
            <p className="text-slate-600 leading-relaxed text-lg">
              {activeData.description}
            </p>

            <div className="mt-4 bg-indigo-50 p-4 rounded-md text-sm text-indigo-800 border border-indigo-100">
              <strong>Nota del Instructor:</strong> Observa el panel de la derecha para ver la aplicación visual de este concepto.
            </div>
          </div>
        </Card>
      }

      visual={
        <Card className="h-full bg-slate-50 border-slate-200">
          <div className="border-b border-slate-200 bg-white px-4 py-3">
            <span className="text-xs font-semibold text-slate-500 uppercase flex items-center gap-2">
              <Activity size={12} />
              Renderizado Visual
            </span>
          </div>
          <div className="p-0 h-full">
             {renderVisual()}
          </div>
        </Card>
      }
    />
  );
};

export default App;