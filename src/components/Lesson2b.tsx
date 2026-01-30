import React, { useState } from 'react';
import { 
  Database, 
  Layers, 
  Thermometer, 
  Filter, 
  Activity, 
  
  ChevronRight,
  Settings,
  ArrowRightLeft
} from 'lucide-react';
import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import DivCarousel from '../assets/DivCarousel';

// --- Types & Interfaces ---

type TabId = 'tanques' | 'columnas' | 'calor' | 'separacion' | 'maquinaria';

interface TabConfig {
  id: TabId;
  label: string;
  icon: React.ReactNode;
}

interface DiagramProps {
  type: TabId;
}

// --- Mock Data for Interactive Diagrams ---

const compositionData = [
  { step: 'Entrada', gas: 40, liquido: 50, solido: 10 },
  { step: 'Filtro', gas: 40, liquido: 50, solido: 5 },
  { step: 'Separador', gas: 40, liquido: 15, solido: 5 },
  { step: 'Destilación', gas: 40, liquido: 4, solido: 1 },
];

// --- Components ---

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`bg-white rounded-xl border border-slate-200 border-slate-700 shadow-sm overflow-hidden ${className}`}>
    {children}
  </div>
);

const DiagramRender: React.FC<DiagramProps> = ({ type }) => {
  const [internalState, setInternalState] = useState<'platos' | 'empaque' | 'vacio'>('platos');
  const [flowActive, setFlowActive] = useState(false);

  // 1. Static: Tanks
  if (type === 'tanques') {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 bg-slate-50  rounded-lg">
        <div className="flex flex-col items-center gap-2">
          <svg viewBox="0 0 100 100" className="w-24 h-24 stroke-slate-700 stroke-slate-300 fill-none stroke-2">
            <rect x="20" y="20" width="60" height="60" rx="5" />
            <line x1="20" y1="30" x2="80" y2="30" />
          </svg>
          <span className="text-xs font-mono uppercase">Tanque Atmosférico</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <svg viewBox="0 0 100 100" className="w-24 h-24 stroke-slate-700 stroke-slate-300 fill-none stroke-2">
            <circle cx="50" cy="50" r="35" />
          </svg>
          <span className="text-xs font-mono uppercase">Recipiente Esférico</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <svg viewBox="0 0 100 100" className="w-24 h-24 stroke-slate-700 stroke-slate-300 fill-none stroke-2">
            <path d="M20 80 V30 Q50 10 80 30 V80 Z" />
          </svg>
          <span className="text-xs font-mono uppercase">Techo Flotante</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <svg viewBox="0 0 100 100" className="w-24 h-24 stroke-slate-700 stroke-slate-300 fill-none stroke-2">
            <rect x="30" y="10" width="40" height="80" rx="20" />
          </svg>
          <span className="text-xs font-mono uppercase">Bala GLP</span>
        </div>
      </div>
    );
  }

  // 2. Dynamic: Columns
  if (type === 'columnas') {
    return (
      <div className="grid grid-cols-12 gap-6 p-6 items-center bg-slate-50  rounded-lg min-h-[400px]">
        <div className="col-span-4 flex flex-col gap-3">
          <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Configuración</h4>
          <button 
            onClick={() => setInternalState('platos')}
            className={`p-3 text-left rounded-lg border transition-all ${internalState === 'platos' ? 'bg-blue-600  border-blue-600' : 'bg-white border-slate-200'}`}
          >
            Platos de Válvula
          </button>
          <button 
            onClick={() => setInternalState('empaque')}
            className={`p-3 text-left rounded-lg border transition-all ${internalState === 'empaque' ? 'bg-blue-600  border-blue-600' : 'bg-white border-slate-200'}`}
          >
            Lecho Empacado
          </button>
        </div>
        <div className="col-span-8 flex justify-center">
          <svg viewBox="0 0 100 200" className="w-48 h-auto">
            <rect x="35" y="20" width="30" height="160" rx="15" fill="none" stroke="currentColor" strokeWidth="2" />
            {internalState === 'platos' && (
              <g className="stroke-blue-500" strokeWidth="1">
                {[40, 60, 80, 100, 120, 140, 160].map(y => (
                  <line key={y} x1="38" y1={y} x2="62" y2={y} />
                ))}
              </g>
            )}
            {internalState === 'empaque' && (
              <rect x="38" y="45" width="24" height="110" fill="url(#pattern-empaque)" className="text-blue-400 opacity-50" />
            )}
            <defs>
              <pattern id="pattern-empaque" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="currentColor" />
              </pattern>
            </defs>
          </svg>
        </div>
      </div>
    );
  }

  // 3. Static: Heat Exchangers
  if (type === 'calor') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-slate-50  rounded-lg">
        <div className="flex flex-col items-center p-4 border border-dashed border-slate-300 rounded-xl">
          <svg viewBox="0 0 200 100" className="w-full max-w-[250px]">
            <circle cx="100" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2" />
            <line x1="40" y1="50" x2="160" y2="50" stroke="currentColor" strokeWidth="2" />
            <path d="M70 20 L130 20" stroke="red" strokeWidth="3" markerEnd="url(#arrowhead)" />
            <path d="M130 80 L70 80" stroke="blue" strokeWidth="3" markerEnd="url(#arrowhead)" />
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
              </marker>
            </defs>
          </svg>
          <p className="mt-4 text-sm font-medium">Intercambiador de Coraza y Tubos</p>
        </div>
        <div className="flex flex-col items-center p-4 border border-dashed border-slate-300 rounded-xl">
          <svg viewBox="0 0 200 100" className="w-full max-w-[250px]">
            <rect x="70" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M75 25 h50 v10 h-50 v10 h50 v10 h-50 v10 h50" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M150 30 Q170 50 150 70" stroke="orange" strokeWidth="3" markerEnd="url(#arrowhead)" />
          </svg>
          <p className="mt-4 text-sm font-medium">Enfriador por Aire (Fin-Fan)</p>
        </div>
      </div>
    );
  }

  // 4. Interactive: Separation
  if (type === 'separacion') {
    return (
      <div className="grid grid-cols-1 gap-6 p-6 bg-slate-50  rounded-lg h-[450px]">
        <div className="h-full">
          <h4 className="text-sm font-bold mb-4 text-slate-500 uppercase">Perfil de Composición del Proceso</h4>
          <ResponsiveContainer width="100%" height="85%">
            <AreaChart data={compositionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="step" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="gas" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
              <Area type="monotone" dataKey="liquido" stackId="1" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
              <Area type="monotone" dataKey="solido" stackId="1" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.6} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }

  // 5. Dynamic: Machinery
  if (type === 'maquinaria') {
    return (
      <div className="grid grid-cols-1 gap-8 p-10 bg-slate-50  rounded-lg min-h-[400px] relative overflow-hidden">
        <button 
          onClick={() => setFlowActive(!flowActive)}
          className={`absolute top-4 right-4 px-6 py-2 rounded-full font-bold transition-all ${flowActive ? 'bg-red-500  animate-pulse' : 'bg-green-600 '}`}
        >
          {flowActive ? 'DETENER FLUJO' : 'INICIAR FLUJO'}
        </button>
        <div className="flex justify-around items-center h-full">
          <div className="relative">
             <Settings className={`w-20 h-20 text-slate-400 ${flowActive ? 'animate-spin-slow' : ''}`} style={{ animationDuration: '3s' }} />
             <p className="text-center text-xs mt-2 font-mono">Bomba Centrífuga</p>
          </div>
          <div className="flex-1 px-10 relative">
             <div className="h-2 bg-slate-200 rounded-full w-full overflow-hidden">
                <div className={`h-full bg-blue-500 transition-all duration-1000 ${flowActive ? 'translate-x-full' : '-translate-x-full'}`} style={{ width: '40%' }}></div>
             </div>
             {flowActive && (
               <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 text-blue-600 flex gap-1">
                 {[1,2,3].map(i => <ChevronRight key={i} className="animate-bounce" />)}
               </div>
             )}
          </div>
          <div className="relative">
             <ArrowRightLeft className={`w-20 h-20 text-slate-400 ${flowActive ? 'animate-pulse' : ''}`} />
             <p className="text-center text-xs mt-2 font-mono">Compresor Reciprocante</p>
          </div>
        </div>
        <style>{`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow linear infinite;
          }
        `}</style>
      </div>
    );
  }

  return null;
};

const LessonLayout: React.FC<{
  activeTab: TabId;
  title: string;
  description: React.ReactNode;
}> = ({ activeTab, title, description }) => {
  return (
    <div className="grid grid-cols-1 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Card className="p-8">
        <div className="grid grid-cols-1 gap-4">
          <header className="border-l-4 border-blue-600 pl-4 mb-4">
            <h2 className="text-2xl font-bold  ">{title}</h2>
          </header>
          
          <p className="text-slate-600 text-slate-400 leading-relaxed max-w-4xl">
            {description}
          </p>

          <div className="mt-8 border-t border-slate-100 border-slate-700 pt-8">
            <DiagramRender type={activeTab} />
          </div>
        </div>
      </Card>
    </div>
  );
};

// --- Main Application ---

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('tanques');

  const tabs: TabConfig[] = [
    { id: 'tanques', label: 'Tanques', icon: <Database size={18} /> },
    { id: 'columnas', label: 'Columnas', icon: <Layers size={18} /> },
    { id: 'calor', label: 'Intercambiadores', icon: <Thermometer size={18} /> },
    { id: 'separacion', label: 'Separación', icon: <Filter size={18} /> },
    { id: 'maquinaria', label: 'Maquinaria', icon: <Activity size={18} /> },
  ];

  const contentMap: Record<TabId, { title: string; desc: React.ReactNode }> = {
    tanques: {
      title: "Simbología de Tanques y Recipientes",
      desc:  (
      <DivCarousel>
        <p>
          Los recipientes y tanques constituyen uno de los grupos más extensos y fundamentales de la norma. Estos símbolos representan equipos cuya función principal es contener, almacenar o acondicionar materiales, ya sean líquidos, sólidos o gases.
        </p>
        <div><p>
          Desde el punto de vista técnico:
        </p>
        <ul>
          <li><strong>Recipiente</strong> se refiere a un equipo cerrado diseñado para soportar ciertas condiciones de presión o temperatura.</li>
          <li><strong>Tanque</strong> suele asociarse a almacenamiento, generalmente a presión cercana a la atmosférica.</li>
        </ul></div>
        <div><p>
          Dentro de este grupo, la norma incluye:
        </p>
        <ul>
          <li>Tanques abiertos y cerrados.</li>
          <li>Recipientes cilíndricos, esféricos o con fondo cónico.</li>
          <li>Contenedores para distintos estados de la materia.</li>
        </ul></div>
        
        <p>
          Las variaciones en la forma del símbolo (tipo de fondo, tapa, soportes o camisas de calentamiento/enfriamiento) permiten identificar características constructivas importantes sin necesidad de texto adicional.
        </p>
      </DivCarousel>
    )
    },
    columnas: {
      title: "Internos en Columnas de Fraccionamiento",
      desc: (
      <DivCarousel>
        <p>
          Las columnas con internos representan equipos verticales utilizados principalmente en operaciones de separación y contacto entre fases, muy comunes en procesos químicos.
        </p>
        <div><p>
          En términos sencillos:
        </p>
        <ul>
          <li>Una columna es un equipo alto y vertical.</li>
          <li>Los internos son los elementos que se encuentran dentro y que facilitan la separación (platos, lechos, rellenos).</li>
        </ul></div>
        <div> <p>
          La norma incluye símbolos para:
        </p>
        <ul>
          <li>Columnas genéricas.</li>
          <li>Columnas con platos o bandejas.</li>
          <li>Columnas con lecho fijo o lecho fluidizado.</li>
        </ul></div>
       
        <p>
          Los patrones internos dibujados dentro del símbolo permiten identificar el tipo de interno, lo que a su vez indica el principio de operación del equipo, por ejemplo, contacto gas-líquido o retención de sólidos.
        </p>
      </DivCarousel>
    )
    },
    calor: {
      title: "Símbolos de intercambiadores de calor",
      desc: (
      <DivCarousel>
        <p>
          Los intercambiadores de calor son equipos diseñados para transferir energía térmica entre dos o más corrientes, sin que estas se mezclen directamente.
        </p>
        <div><p>
          Desde el enfoque técnico:
        </p>
        <ul>
          <li>No modifican la composición del material.</li>
          <li>Su función es calentar, enfriar, condensar o evaporar.</li>
        </ul></div>
        <div> <p>
          En este grupo, la norma contempla:
        </p>
        <ul>
          <li>Intercambiadores genéricos.</li>
          <li>Intercambiadores de tubos rectos, en U o de cabeza flotante.</li>
          <li>Intercambiadores de placas y de espiral.</li>
          <li>Evaporadores y rehervidores.</li>
        </ul></div>
       
        <p>
          Las diferencias gráficas en los símbolos indican el tipo constructivo, lo que permite inferir su uso típico dentro del proceso, como precalentamiento, condensación o ebullición.
        </p>
      </DivCarousel>
    )
    },
    separacion: {
      title: "Dinámica en Equipos de Separación",
      desc: (
      <DivCarousel>
        <p>
          Este grupo reúne símbolos asociados a operaciones de separación física, es decir, procesos donde se separan componentes sin cambiar su naturaleza química.
        </p>
        <div> <p>
          Incluye símbolos para:
        </p>
        <ul>
          <li>Filtros de líquidos y de gases.</li>
          <li>Separadores gravitacionales y ciclónicos.</li>
          <li>Centrífugas de distintos tipos.</li>
          <li>Tamices, cribas y dispositivos de selección.</li>
        </ul></div>
       <div><p>
          Desde un punto de vista funcional, estos equipos permiten:
        </p>
        <ul>
          <li>Eliminar impurezas.</li>
          <li>Recuperar productos valiosos.</li>
          <li>Clasificar materiales por tamaño o densidad.</li>
        </ul></div>
        
        <p>
          La correcta interpretación de estos símbolos es clave para entender en qué punto del proceso se limpian, separan o concentran los materiales.
        </p>
      </DivCarousel>
    )
    },
    maquinaria: {
      title: "Equipos Auxiliares y Acondicionamiento de Flujo",
      desc:(
      <DivCarousel>
        <p>
          Además de los equipos principales, los diagramas de proceso incluyen símbolos de máquinas y equipos auxiliares que permiten el movimiento, transformación o manejo de materiales.
        </p>
        <p>
          Entre ellos se encuentran:
        </p>
        <ul>
          <li>Bombas (centrífugas, de pistón, de tornillo, entre otras).</li>
          <li>Compresores y bombas de vacío.</li>
          <li>Mezcladores, trituradoras y secadores.</li>
          <li>Equipos de transporte y elevación.</li>
        </ul>
        <p>
          Estos símbolos suelen ser más esquemáticos, pero están diseñados para comunicar claramente la función mecánica principal, como impulsar, comprimir, mezclar o secar.
        </p>
      </DivCarousel>
    )
    }
  };

  return (
    <div className="min-h-screen bg-slate-100  font-sans">
      {/* Main Grid Structure:
          - Header: 100% width
          - Navigation: Center-aligned row
          - Content: Focused single column
      */}
      <div className="grid grid-cols-1 grid-rows-[auto_auto_1fr] min-h-screen">
        
        {/* Header Section */}
        <header className="grid grid-cols-1 bg-white  border-b border-slate-200 border-slate-800 px-6 py-4 shadow-sm z-10">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-[1fr_auto] items-center">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded-lg ">
                <Settings size={24} />
              </div>
              <div>
                 <h1 className="text-2xl md:text-3xl font-bold">Norma ISO 10628-2</h1>
            <p className="text-slate-400 text-sm mt-1">Diagramas para la industria química y petroquímica</p>
              </div>
            </div>
           
          </div>
        </header>

        {/* Tab Navigation Section */}
        <div className="bg-white  border-b border-slate-200 border-slate-800 sticky top-0 z-20">
          <div className="max-w-7xl mx-auto w-full px-6">
            <div className="grid grid-flow-col auto-cols-auto justify-start gap-1 overflow-x-auto no-scrollbar">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 text-sm font-bold transition-all border-b-2 ${
                    activeTab === tab.id 
                    ? 'border-blue-600 text-blue-600 bg-blue-50/50 bg-blue-900/20' 
                    : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {tab.icon}
                  <span className="whitespace-nowrap uppercase tracking-wider">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <main className="grid grid-cols-1 p-6 md:p-10 max-w-7xl mx-auto w-full">
          <LessonLayout 
            activeTab={activeTab}
            title={contentMap[activeTab].title}
            description={contentMap[activeTab].desc}
          />
        </main>

    
      </div>
    </div>
  );
}