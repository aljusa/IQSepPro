import React, { useState } from 'react';
import { 
  ArrowDownCircle, 
  Wind, 
  Settings, 
  Zap, 
  Activity, 
  Droplets,
  Factory,
  CheckCircle2,
  Minimize2,
  Maximize2
} from 'lucide-react';

// --- TYPES ---
interface SectionData {
  id: string;
  tabTitle: string;
  conceptTitle: string;
  conceptText: string;
  diagramTitle: string;
  diagramDescription: string;
  DiagramComponent: React.FC;
}

// --- COMPONENTS ---

// 1. Card Component (Strict Grid)
const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`grid bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden ${className}`}>
    {children}
  </div>
);

// 2. LessonLayout Component (Strict Grid)
interface LessonLayoutProps {
  title: string;
  sections: SectionData[];
  activeSectionId: string;
  onTabChange: (id: string) => void;
}

const LessonLayout: React.FC<LessonLayoutProps> = ({ title, sections, activeSectionId, onTabChange }) => {
  const activeSection = sections.find(s => s.id === activeSectionId) || sections[0];

  return (
    <div className="grid grid-rows-[auto_1fr] h-screen w-full bg-slate-50 font-sans text-slate-800">
      
      {/* Header with Title and Nav */}
      <header className="grid grid-rows-[auto_auto] gap-4 p-6 bg-slate-900 text-white shadow-md z-10">
        <div className="grid place-items-start">
          <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        </div>
        
        {/* Navigation Tabs - Using Grid Flow Col instead of flex */}
        <nav className="grid grid-cols-5 gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-600">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onTabChange(section.id)}
              className={`grid place-items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors border ${
                activeSectionId === section.id
                  ? 'bg-blue-600 border-blue-500 text-white shadow-inner'
                  : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {section.tabTitle}
            </button>
          ))}
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="grid p-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-7xl mx-auto w-full items-start">
          
          {/* Left Panel: Concept */}
          <div className="grid lg:col-span-4 gap-6 content-start">
            <Card className="p-6 gap-4 border-t-4 border-t-blue-500">
              <h2 className="text-xl font-bold text-slate-800 border-b border-slate-100 pb-2">
                {activeSection.conceptTitle}
              </h2>
              <p className="text-slate-600 leading-relaxed text-base">
                {activeSection.conceptText}
              </p>
            </Card>

       
          </div>

          {/* Right Panel: Diagram Render */}
          <div className="grid lg:col-span-8 h-full min-h-[500px]">
            <Card className="grid grid-rows-[auto_1fr] h-full border-t-4 border-t-emerald-500">
              <div className="grid p-4 border-b border-slate-100 bg-slate-50/50">
                <h2 className="text-lg font-bold text-slate-800 text-center">
                  {activeSection.diagramTitle}
                </h2>
              </div>
              <div className="grid place-items-center p-8 bg-white relative overflow-hidden">
                <activeSection.DiagramComponent />
              </div>
            </Card>
          </div>

        </div>
      </main>
    </div>
  );
};

// --- DIAGRAM COMPONENTS ---

const DiagFuerzaImpulsora: React.FC = () => (
  <div className="grid grid-rows-[auto_auto_auto] gap-8 place-items-center w-full max-w-2xl">
    <div className="grid px-6 py-4 bg-blue-600 text-white rounded-xl shadow-md font-bold text-lg text-center z-10 relative">
      Fuerza Impulsora de la Filtración
      {/* Grid lines down */}
      <div className="grid absolute -bottom-8 left-1/2 w-[2px] h-8 bg-slate-300 transform -translate-x-1/2"></div>
      <div className="grid absolute -bottom-8 left-1/4 w-1/2 h-[2px] bg-slate-300"></div>
    </div>
    
    <div className="grid grid-cols-2 gap-24 w-full relative">
      {/* Branch 1 */}
      <div className="grid grid-rows-[auto_auto] gap-4 place-items-center relative">
        <div className="grid absolute -top-8 left-1/2 w-[2px] h-8 bg-slate-300 transform -translate-x-1/2"></div>
        <div className="grid px-4 py-2 bg-emerald-100 text-emerald-800 rounded-lg font-semibold border border-emerald-200">
          Presión Positiva
        </div>
        <div className="grid w-32 h-32 bg-slate-50 border-2 border-slate-200 rounded-lg place-items-center relative">
          <ArrowDownCircle className="w-8 h-8 text-emerald-500 mb-2" />
          <div className="grid w-24 h-2 bg-slate-300 rounded-full my-2"></div>
          <div className="grid grid-flow-col gap-1">
            <Droplets className="w-4 h-4 text-blue-400" />
            <Droplets className="w-4 h-4 text-blue-400" />
          </div>
        </div>
      </div>

      {/* Branch 2 */}
      <div className="grid grid-rows-[auto_auto] gap-4 place-items-center relative">
         <div className="grid absolute -top-8 left-1/2 w-[2px] h-8 bg-slate-300 transform -translate-x-1/2"></div>
        <div className="grid px-4 py-2 bg-purple-100 text-purple-800 rounded-lg font-semibold border border-purple-200">
          Vacío
        </div>
        <div className="grid w-32 h-32 bg-slate-50 border-2 border-slate-200 rounded-lg place-items-center relative">
          <div className="grid grid-flow-col gap-1 mb-2">
            <Droplets className="w-4 h-4 text-blue-400" />
            <Droplets className="w-4 h-4 text-blue-400" />
          </div>
          <div className="grid w-24 h-2 bg-slate-300 rounded-full my-2"></div>
          <Wind className="w-8 h-8 text-purple-500 mt-2" />
        </div>
      </div>
    </div>
  </div>
);

const DiagDefPresion: React.FC = () => (
  <div className="grid grid-cols-[1fr_2fr] gap-8 items-center max-w-3xl w-full">
    <div className="grid bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg shadow-sm h-full content-center">
      <h3 className="font-bold text-blue-900 mb-2 text-lg">Cámara Presurizada</h3>
      <p className="text-sm text-blue-700">La presión P1 es mayor que P2, forzando la suspensión a través del medio.</p>
    </div>
    
    <div className="grid relative w-full h-80 bg-slate-50 border-2 border-slate-200 rounded-xl place-items-center overflow-hidden">
      {/* Tank */}
      <div className="grid w-48 h-64 border-4 border-slate-400 rounded-t-xl rounded-b-md relative overflow-hidden bg-white">
        {/* Suspension */}
        <div className="grid absolute top-12 left-0 right-0 bottom-24 bg-amber-100 opacity-80 border-b-4 border-amber-900">
           {/* Particles */}
           <div className="grid absolute bottom-0 left-0 right-0 h-4 bg-amber-800"></div>
        </div>
        {/* Filter Medium */}
        <div className="grid absolute bottom-20 left-0 right-0 h-4 bg-slate-600 border-y-2 border-slate-800 pattern-dots"></div>
        {/* Filtrate */}
        <div className="grid absolute bottom-0 left-0 right-0 h-20 bg-blue-100"></div>

        {/* Pressure Arrows */}
        <div className="grid absolute top-2 left-0 right-0 grid-flow-col justify-evenly">
          <ArrowDownCircle className="w-6 h-6 text-red-500 animate-pulse" />
          <ArrowDownCircle className="w-6 h-6 text-red-500 animate-pulse" />
          <ArrowDownCircle className="w-6 h-6 text-red-500 animate-pulse" />
        </div>
        
        {/* Labels */}
        <div className="grid absolute top-4 left-1/2 transform -translate-x-1/2 font-bold text-red-600 bg-white/80 px-2 rounded text-xs">P  Atm</div>
      </div>
    </div>
  </div>
);

const DiagCaractPresion: React.FC = () => (
  <div className="grid grid-cols-3 gap-6 w-full max-w-4xl">
    <div className="grid grid-rows-[auto_1fr] place-items-center text-center p-6 bg-rose-50 rounded-xl border border-rose-100 shadow-sm transition-transform hover:-translate-y-1">
      <div className="grid w-16 h-16 bg-rose-100 rounded-full place-items-center mb-4 text-rose-600">
        <Zap size={32} />
      </div>
      <h3 className="font-bold text-slate-800 mb-2">Alta Velocidad de Filtración</h3>
      <p className="text-sm text-slate-600">Mayor fuerza impulsora acelera la separación sólido-líquido.</p>
    </div>
    <div className="grid grid-rows-[auto_1fr] place-items-center text-center p-6 bg-amber-50 rounded-xl border border-amber-100 shadow-sm transition-transform hover:-translate-y-1">
      <div className="grid w-16 h-16 bg-amber-100 rounded-full place-items-center mb-4 text-amber-600">
        <Activity size={32} />
      </div>
      <h3 className="font-bold text-slate-800 mb-2">Fluidos Viscosos</h3>
      <p className="text-sm text-slate-600">Capaz de vencer la alta resistencia al flujo de suspensiones densas.</p>
    </div>
    <div className="grid grid-rows-[auto_1fr] place-items-center text-center p-6 bg-indigo-50 rounded-xl border border-indigo-100 shadow-sm transition-transform hover:-translate-y-1">
      <div className="grid w-16 h-16 bg-indigo-100 rounded-full place-items-center mb-4 text-indigo-600">
        <Factory size={32} />
      </div>
      <h3 className="font-bold text-slate-800 mb-2">Procesos Industriales</h3>
      <p className="text-sm text-slate-600">Ideal para operaciones continuas o por lotes de alta eficiencia.</p>
    </div>
  </div>
);

const DiagGenPresion: React.FC = () => (
  <div className="grid grid-cols-[auto_auto_auto] gap-4 items-center w-full max-w-3xl">
    {/* Source */}
    <div className="grid place-items-center p-6 bg-slate-100 rounded-full border-4 border-slate-300 relative z-10 shadow-lg">
      <Settings className="w-12 h-12 text-slate-600 animate-[spin_4s_linear_infinite]" />
      <span className="grid mt-2 font-bold text-sm text-slate-700">Bomba / Compresor</span>
    </div>

    {/* Connection line */}
    <div className="grid w-32 h-4 bg-slate-300 relative place-items-center">
        <div className="grid absolute w-full grid-flow-col justify-evenly">
             <div className="grid w-3 h-3 border-t-2 border-r-2 border-red-500 transform rotate-45"></div>
             <div className="grid w-3 h-3 border-t-2 border-r-2 border-red-500 transform rotate-45"></div>
        </div>
        <span className="grid absolute -top-6 text-xs font-bold text-red-500">Presión</span>
    </div>

    {/* Destination Filter */}
    <div className="grid w-40 h-48 border-4 border-blue-400 rounded-lg relative overflow-hidden bg-slate-50 place-items-center">
        <div className="grid absolute top-0 w-full h-1/2 bg-amber-100/50"></div>
        <div className="grid w-full h-4 bg-slate-600 z-10"></div>
        <div className="grid absolute bottom-0 w-full h-1/2 bg-blue-100/50"></div>
        <span className="grid absolute bottom-2 text-xs font-bold text-slate-500 z-20">Filtro</span>
    </div>
  </div>
);

const DiagDefVacio: React.FC = () => (
  <div className="grid grid-cols-[2fr_1fr] gap-8 items-center max-w-3xl w-full">
    
    <div className="grid relative w-full h-80 bg-slate-50 border-2 border-slate-200 rounded-xl place-items-center overflow-hidden">
      {/* Tank open to atmosphere */}
      <div className="grid w-48 h-64 border-l-4 border-r-4 border-b-4 border-slate-400 rounded-b-xl relative bg-white">
        {/* Atmosphere pressure */}
        <div className="grid absolute -top-6 left-0 right-0 grid-flow-col justify-evenly">
          <ArrowDownCircle className="w-5 h-5 text-slate-400" />
          <ArrowDownCircle className="w-5 h-5 text-slate-400" />
        </div>

        {/* Suspension */}
        <div className="grid absolute top-4 left-0 right-0 bottom-24 bg-amber-100 opacity-80 border-b-4 border-amber-900">
        </div>
        {/* Filter Medium */}
        <div className="grid absolute bottom-20 left-0 right-0 h-4 bg-slate-600 border-y-2 border-slate-800 pattern-dots"></div>
        {/* Filtrate */}
        <div className="grid absolute bottom-0 left-0 right-0 h-20 bg-blue-100"></div>

        {/* Vacuum Tube Connection */}
        <div className="grid absolute bottom-8 -right-8 w-10 h-4 bg-slate-300"></div>
      </div>
    </div>

    <div className="grid gap-4 w-full place-items-center">
       <div className="grid p-4 bg-purple-50 rounded-full border-4 border-purple-200 relative shadow-inner">
          <Wind className="w-10 h-10 text-purple-600" />
          <div className="grid absolute -left-12 top-1/2 transform -translate-y-1/2 grid-flow-col gap-1">
             <div className="grid w-3 h-3 border-b-2 border-l-2 border-purple-500 transform rotate-45"></div>
             <div className="grid w-3 h-3 border-b-2 border-l-2 border-purple-500 transform rotate-45"></div>
          </div>
       </div>
       <div className="grid bg-purple-100 p-3 rounded text-center border border-purple-200 shadow-sm">
          <h3 className="font-bold text-purple-900 text-sm">Bomba de Vacío</h3>
          <p className="text-xs text-purple-700">Genera P &lt; Atm</p>
       </div>
    </div>
  </div>
);

const DiagCaractVacio: React.FC = () => (
  <div className="grid grid-rows-[auto_1fr] gap-8 place-items-center w-full max-w-3xl">
    <div className="grid px-8 py-3 bg-slate-800 text-white rounded-full font-bold shadow-md relative">
      Filtración por Vacío
      {/* Connector lines below */}
      <div className="grid absolute -bottom-6 left-1/2 w-[2px] h-6 bg-slate-300 transform -translate-x-1/2"></div>
      <div className="grid absolute -bottom-6 left-[16.66%] w-[66.66%] h-[2px] bg-slate-300"></div>
    </div>

    <div className="grid grid-cols-3 gap-6 w-full relative pt-6">
      <div className="grid grid-rows-[auto_1fr] place-items-center text-center p-4 bg-white border-2 border-slate-100 rounded-xl shadow-sm relative">
        <div className="grid absolute -top-6 left-1/2 w-[2px] h-6 bg-slate-300 transform -translate-x-1/2"></div>
        <Minimize2 className="w-8 h-8 text-teal-500 mb-2" />
        <h4 className="font-bold text-sm text-slate-800">Operación Sencilla</h4>
      </div>
      
      <div className="grid grid-rows-[auto_1fr] place-items-center text-center p-4 bg-white border-2 border-slate-100 rounded-xl shadow-sm relative">
        <div className="grid absolute -top-6 left-1/2 w-[2px] h-6 bg-slate-300 transform -translate-x-1/2"></div>
        <Zap className="w-8 h-8 text-yellow-500 mb-2" />
        <h4 className="font-bold text-sm text-slate-800">Menor Consumo Energético</h4>
      </div>

      <div className="grid grid-rows-[auto_1fr] place-items-center text-center p-4 bg-white border-2 border-slate-100 rounded-xl shadow-sm relative">
        <div className="grid absolute -top-6 left-1/2 w-[2px] h-6 bg-slate-300 transform -translate-x-1/2"></div>
        <Maximize2 className="w-8 h-8 text-orange-500 mb-2" />
        <h4 className="font-bold text-sm text-slate-800">Alta Concentración de Sólidos</h4>
      </div>
    </div>
  </div>
);

const DiagAppVacio: React.FC = () => (
  <div className="grid place-items-center w-full h-full relative p-8">
     {/* Central Node */}
     <div className="grid w-32 h-32 bg-purple-600 rounded-full place-items-center shadow-lg border-4 border-purple-200 z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-bold text-sm p-4">
        Filtración por Vacío
     </div>

     {/* Grid layout for satellites using absolute positioning within the grid container for exact circular placement, avoiding flex */}
     
     {/* Mining */}
     <div className="grid absolute top-8 left-1/2 transform -translate-x-1/2 grid-rows-[auto_auto] place-items-center gap-2">
        <div className="grid w-16 h-16 bg-slate-700 rounded-lg place-items-center text-white shadow-md">
           <Factory />
        </div>
        <span className="grid font-semibold text-slate-700 bg-white px-2 rounded text-sm">Minería</span>
        <div className="grid absolute top-16 w-[2px] h-12 bg-dashed border-l-2 border-slate-300 border-dashed"></div>
     </div>

     {/* Water */}
     <div className="grid absolute bottom-12 left-1/4 transform -translate-x-1/2 grid-rows-[auto_auto] place-items-center gap-2">
        <div className="grid absolute bottom-16 right-0 w-24 h-[2px] bg-dashed border-t-2 border-slate-300 border-dashed transform -rotate-30 origin-bottom-right"></div>
        <div className="grid w-16 h-16 bg-blue-500 rounded-lg place-items-center text-white shadow-md">
           <Droplets />
        </div>
        <span className="grid font-semibold text-slate-700 bg-white px-2 rounded text-sm text-center">Tratamiento<br/>de Aguas</span>
     </div>

     {/* Food */}
     <div className="grid absolute bottom-12 right-1/4 transform translate-x-1/2 grid-rows-[auto_auto] place-items-center gap-2">
        <div className="grid absolute bottom-16 left-0 w-24 h-[2px] bg-dashed border-t-2 border-slate-300 border-dashed transform rotate-30 origin-bottom-left"></div>
        <div className="grid w-16 h-16 bg-emerald-500 rounded-lg place-items-center text-white shadow-md">
           <Activity />
        </div>
        <span className="grid font-semibold text-slate-700 bg-white px-2 rounded text-sm text-center">Industria<br/>Alimentaria</span>
     </div>
  </div>
);

const DiagComparacion: React.FC = () => (
  <div className="grid w-full max-w-3xl overflow-hidden rounded-xl border border-slate-200 shadow-sm">
    <div className="grid grid-cols-[auto_1fr_1fr] bg-slate-100 border-b border-slate-200">
      <div className="grid p-4 font-bold text-slate-700 bg-slate-200/50 text-sm place-content-center">Característica</div>
      <div className="grid p-4 font-bold text-emerald-800 text-center border-l border-slate-200 bg-emerald-50">Filtración por Presión</div>
      <div className="grid p-4 font-bold text-purple-800 text-center border-l border-slate-200 bg-purple-50">Filtración por Vacío</div>
    </div>
    
    <div className="grid grid-cols-[auto_1fr_1fr] border-b border-slate-100 bg-white">
      <div className="grid p-4 font-semibold text-slate-600 text-sm items-center bg-slate-50/50">Fuerza Impulsora</div>
      <div className="grid p-4 text-slate-700 border-l border-slate-100 place-content-center text-center">Presión positiva (P &gt; Atm)</div>
      <div className="grid p-4 text-slate-700 border-l border-slate-100 place-content-center text-center">Presión negativa (P &lt; Atm)</div>
    </div>

    <div className="grid grid-cols-[auto_1fr_1fr] border-b border-slate-100 bg-slate-50/30">
      <div className="grid p-4 font-semibold text-slate-600 text-sm items-center bg-slate-50/50">Velocidad</div>
      <div className="grid p-4 text-slate-700 border-l border-slate-100 place-content-center text-center">
        <span className="grid inline-grid bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-xs font-bold">Alta</span>
      </div>
      <div className="grid p-4 text-slate-700 border-l border-slate-100 place-content-center text-center">
         <span className="grid inline-grid bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-bold">Moderada</span>
      </div>
    </div>

    <div className="grid grid-cols-[auto_1fr_1fr] border-b border-slate-100 bg-white">
      <div className="grid p-4 font-semibold text-slate-600 text-sm items-center bg-slate-50/50">Proceso Típico</div>
      <div className="grid p-4 text-slate-700 border-l border-slate-100 place-content-center text-center">Sistemas cerrados / Lotes</div>
      <div className="grid p-4 text-slate-700 border-l border-slate-100 place-content-center text-center">Procesos abiertos / Continuos</div>
    </div>

    <div className="grid grid-cols-[auto_1fr_1fr] bg-slate-50/30">
      <div className="grid p-4 font-semibold text-slate-600 text-sm items-center bg-slate-50/50">Complejidad Equipo</div>
      <div className="grid p-4 text-slate-700 border-l border-slate-100 place-content-center text-center">Mayor (requiere contención)</div>
      <div className="grid p-4 text-slate-700 border-l border-slate-100 place-content-center text-center">Menor (operación sencilla)</div>
    </div>
  </div>
);

const DiagSeleccion: React.FC = () => (
  <div className="grid grid-rows-[auto_auto_auto] gap-6 place-items-center w-full max-w-2xl font-sans">
    
    <div className="grid px-6 py-3 bg-slate-800 text-white rounded-lg shadow font-bold text-center w-64 z-10 relative">
      Requisitos del Proceso
      {/* Split lines down */}
      <div className="grid absolute -bottom-6 left-1/2 w-[2px] h-6 bg-slate-400 transform -translate-x-1/2"></div>
      <div className="grid absolute -bottom-6 left-1/4 w-1/2 h-[2px] bg-slate-400"></div>
    </div>

    <div className="grid grid-cols-2 gap-16 w-full relative pt-6">
       {/* Path 1 */}
       <div className="grid grid-rows-[auto_1fr_auto] gap-4 place-items-center relative">
          <div className="grid absolute -top-6 left-1/2 w-[2px] h-6 bg-slate-400 transform -translate-x-1/2"></div>
          
          <div className="grid bg-emerald-50 border-2 border-emerald-200 p-3 rounded-lg text-center w-48 shadow-sm">
             <p className="text-sm font-semibold text-emerald-800">Altas velocidades</p>
             <div className="grid w-full h-[1px] bg-emerald-200 my-1"></div>
             <p className="text-sm font-semibold text-emerald-800">Fluidos viscosos</p>
          </div>
          
          <div className="grid w-[2px] h-8 bg-emerald-300">
             <div className="grid w-3 h-3 border-b-2 border-r-2 border-emerald-500 transform rotate-45 relative top-6 -left-[5px]"></div>
          </div>
          
          <div className="grid bg-emerald-600 text-white px-6 py-3 rounded-full font-bold shadow-md grid-flow-col gap-2 place-items-center">
             <CheckCircle2 size={18}/> Presión
          </div>
       </div>

       {/* Path 2 */}
       <div className="grid grid-rows-[auto_1fr_auto] gap-4 place-items-center relative">
          <div className="grid absolute -top-6 left-1/2 w-[2px] h-6 bg-slate-400 transform -translate-x-1/2"></div>
          
          <div className="grid bg-purple-50 border-2 border-purple-200 p-3 rounded-lg text-center w-48 shadow-sm">
             <p className="text-sm font-semibold text-purple-800">Grandes volúmenes</p>
             <div className="grid w-full h-[1px] bg-purple-200 my-1"></div>
             <p className="text-sm font-semibold text-purple-800">Simplicidad operativa</p>
          </div>
          
          <div className="grid w-[2px] h-8 bg-purple-300">
             <div className="grid w-3 h-3 border-b-2 border-r-2 border-purple-500 transform rotate-45 relative top-6 -left-[5px]"></div>
          </div>
          
          <div className="grid bg-purple-600 text-white px-6 py-3 rounded-full font-bold shadow-md grid-flow-col gap-2 place-items-center">
             <CheckCircle2 size={18}/> Vacío
          </div>
       </div>
    </div>
  </div>
);

// --- DATA ---
const lessonData: SectionData[] = [
  {
    id: 'fuerza-impulsora',
    tabTitle: 'Fuerza Impulsora',
    conceptTitle: 'Fuerza impulsora en la filtración',
    conceptText: 'Para que ocurra la filtración es necesario que exista una fuerza impulsora que empuje el fluido a través del medio filtrante. Esta fuerza se genera mediante una diferencia de presión entre ambos lados del filtro. En la práctica industrial, esta diferencia se crea principalmente de dos maneras: aplicando presión positiva sobre la suspensión o generando vacío en el lado del filtrado.',
    diagramTitle: 'Tipos de Fuerza Impulsora',
    diagramDescription: 'Un mapa conceptual simple con el concepto central "Fuerza impulsora de la filtración", del cual salen dos ramas principales: "Presión positiva" y "Vacío", cada una conectada con un esquema de flujo atravesando un medio filtrante.',
    DiagramComponent: DiagFuerzaImpulsora
  },
  {
    id: 'def-presion',
    tabTitle: 'Def. Presión',
    conceptTitle: 'Definición de filtración por presión',
    conceptText: 'La filtración por presión es un método en el cual la mezcla sólido-fluido es impulsada a través del medio filtrante mediante la aplicación de presión positiva en el lado de la alimentación. Esta presión fuerza al fluido a atravesar los poros del medio filtrante mientras las partículas sólidas quedan retenidas formando la torta de filtración.',
    diagramTitle: 'Esquema de Filtración por Presión',
    diagramDescription: 'Una caja de definición destacada acompañada por un esquema conceptual donde una cámara presurizada empuja la suspensión hacia un filtro, mostrando flechas de presión que impulsan el flujo a través del medio filtrante.',
    DiagramComponent: DiagDefPresion
  },
  {
    id: 'caract-presion',
    tabTitle: 'Caract. Presión',
    conceptTitle: 'Características operativas de la filtración por presión',
    conceptText: 'La filtración por presión se caracteriza por su alta velocidad de filtración, debido a la mayor fuerza impulsora aplicada al sistema. Este método también permite procesar suspensiones con alta viscosidad, ya que la presión adicional ayuda a vencer la resistencia al flujo. Por estas razones, se utiliza frecuentemente en procesos industriales continuos o por lotes donde se requiere alta eficiencia de separación.',
    diagramTitle: 'Ventajas Operativas (Presión)',
    diagramDescription: 'Un diagrama conceptual con tres bloques conectados que destaquen las características clave: "Alta velocidad de filtración", "Procesamiento de fluidos viscosos" y "Aplicación en procesos industriales".',
    DiagramComponent: DiagCaractPresion
  },
  {
    id: 'gen-presion',
    tabTitle: 'Gen. Presión',
    conceptTitle: 'Generación de presión en sistemas de filtración',
    conceptText: 'La presión necesaria para impulsar la filtración puede generarse mediante diferentes dispositivos industriales. Entre los más comunes se encuentran bombas, compresores y sistemas que utilizan aire o gas comprimido. Estos equipos permiten mantener una presión controlada que favorece el flujo del fluido a través del medio filtrante.',
    diagramTitle: 'Sistemas de Generación de Presión',
    diagramDescription: 'Un esquema de flujo del sistema donde se muestre una bomba o compresor conectado al recipiente de alimentación, indicando mediante flechas cómo la presión generada impulsa la suspensión hacia el filtro.',
    DiagramComponent: DiagGenPresion
  },
  {
    id: 'def-vacio',
    tabTitle: 'Def. Vacío',
    conceptTitle: 'Definición de filtración por vacío',
    conceptText: 'La filtración por vacío es un método en el cual la fuerza impulsora se genera creando una presión menor que la atmosférica en el lado del filtrado. Esta diferencia de presión produce una succión que atrae el fluido a través del medio filtrante mientras las partículas sólidas quedan retenidas.',
    diagramTitle: 'Esquema de Filtración por Vacío',
    diagramDescription: 'Una caja de definición acompañada de un esquema en el que el filtro está conectado a una bomba de vacío. Las flechas indican la succión del fluido desde la suspensión hacia la zona de menor presión.',
    DiagramComponent: DiagDefVacio
  },
  {
    id: 'caract-vacio',
    tabTitle: 'Caract. Vacío',
    conceptTitle: 'Características operativas de la filtración por vacío',
    conceptText: 'La filtración por vacío presenta operación sencilla y consumo energético relativamente bajo, lo que la convierte en una opción común para procesos de gran volumen. Además, resulta especialmente adecuada para suspensiones con alta concentración de sólidos, ya que facilita la formación y remoción de la torta de filtración.',
    diagramTitle: 'Ventajas Operativas (Vacío)',
    diagramDescription: 'Un diagrama conceptual con tres elementos clave conectados al concepto central "Filtración por vacío": "Operación sencilla", "Menor consumo energético" y "Adecuada para suspensiones con alta concentración de sólidos".',
    DiagramComponent: DiagCaractVacio
  },
  {
    id: 'app-vacio',
    tabTitle: 'Aplicaciones Vacío',
    conceptTitle: 'Aplicaciones industriales de la filtración por vacío',
    conceptText: 'La filtración por vacío se utiliza ampliamente en diversas industrias. En la industria minera se emplea para separar sólidos de pulpas minerales; en el tratamiento de aguas para remover lodos y partículas; y en la industria alimentaria para procesos como la clarificación de líquidos.',
    diagramTitle: 'Sectores Industriales',
    diagramDescription: 'Una representación contextual con tres escenas industriales conectadas por un esquema central de filtración por vacío: minería, planta de tratamiento de agua y procesamiento alimentario.',
    DiagramComponent: DiagAppVacio
  },
  {
    id: 'comparacion',
    tabTitle: 'Comparación',
    conceptTitle: 'Comparación entre filtración por presión y por vacío',
    conceptText: 'La filtración por presión y por vacío difieren principalmente en la forma en que generan la fuerza impulsora del proceso. La filtración por presión utiliza presión positiva, lo que generalmente permite mayores velocidades de filtración, pero requiere equipos más complejos y sistemas cerrados. En contraste, la filtración por vacío utiliza presión negativa, suele emplearse en procesos abiertos y presenta menor complejidad de equipo, aunque con velocidades de filtración más moderadas.',
    diagramTitle: 'Cuadro Comparativo',
    diagramDescription: 'Una tabla comparativa de dos columnas tituladas "Filtración por presión" y "Filtración por vacío", con filas que comparen: fuerza impulsora, velocidad de filtración, tipo de proceso industrial y complejidad del equipo.',
    DiagramComponent: DiagComparacion
  },
  {
    id: 'seleccion',
    tabTitle: 'Selección',
    conceptTitle: 'Selección del método de filtración',
    conceptText: 'La elección entre filtración por presión o por vacío depende de varios factores del proceso, como el tipo de suspensión, el volumen de producción requerido y las condiciones operativas del sistema. En aplicaciones donde se requiere alta velocidad y control del proceso suele preferirse la filtración por presión, mientras que en procesos de gran volumen y operación sencilla es común utilizar filtración por vacío.',
    diagramTitle: 'Criterios de Decisión',
    diagramDescription: 'Un diagrama de decisión conceptual que muestre dos rutas: una que conduce a "Filtración por presión" cuando se requieren altas velocidades o fluidos viscosos, y otra hacia "Filtración por vacío" cuando se prioriza simplicidad y grandes volúmenes.',
    DiagramComponent: DiagSeleccion
  }
];

// --- MAIN APP ENTRY POINT ---
export default function App() {
  const [activeTab, setActiveTab] = useState<string>(lessonData[0].id);

  return (
    <LessonLayout 
      title="Filtración por Presión y por Vacío"
      sections={lessonData}
      activeSectionId={activeTab}
      onTabChange={setActiveTab}
    />
  );
}