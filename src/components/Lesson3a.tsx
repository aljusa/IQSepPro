import React, { useState } from 'react';
import { 
  BookOpen, 
  Globe, 
  Layers, 
  ArrowRight, 
  FileText, 
  Settings, 
  Database, 
  CheckCircle2, 
  XCircle,
  Network,
  Book,
  Menu,
  Maximize
} from 'lucide-react';
import DivCarousel from '../assets/DivCarousel';

// --- Types & Interfaces ---

interface TabData {
  id: string;
  label: string;
  title: string;
  description: React.ReactNode;
  icon: React.ElementType;
}

// --- Data Configuration ---

const TABS: TabData[] = [
  {
    id: 'hierarchy',
    label: 'Jerarquía',
    title: 'Introducción',
    description: (
      <DivCarousel>
        <p>Esta lección introduce y desarrolla de forma sistemática la <strong>ISO 14617-1</strong>, que constituye la base conceptual y metodológica de toda la serie ISO 14617 sobre <strong>símbolos gráficos para diagramas técnicos</strong>.
          <br /> No enseña <strong>símbolos concretos</strong>, sino cómo <strong>entenderlos</strong>, <strong>organizarlos</strong>, <strong>identificarlos</strong> y <strong>aplicarlos</strong> correctamente en contextos reales de ingeniería.</p>
      
        
      </DivCarousel>
    ),
    icon: Layers
  },
  {
    id: 'universality',
    label: 'Universalidad',
    title: 'Propósito de la ISO 14617',
    description: (
      <DivCarousel>
        <p>  La <strong>ISO 14617</strong> es una<strong> biblioteca internacional de símbolos gráficos</strong> normalizados destinada a diagramas técnicos utilizados en <strong>ingeniería de procesos</strong>, <strong>instalaciones industriales</strong>, <strong>mecánica</strong>, <strong>fluidos</strong>, <strong>control</strong> y <strong>sistemas afines</strong>.</p>
      
  
        <p>  Su propósito central es <strong>garantizar que un mismo diagrama sea interpretado de forma idéntica</strong>, independientemente del idioma, país o disciplina técnica del lector.
        <br /> <strong>El símbolo gráfico sustituye al texto como lenguaje universal</strong>.</p>
      
      </DivCarousel>
    ),
    icon: Globe
  },
  {
    id: 'manual',
    label: 'Modelo Manual',
    title: 'Guía de Navegación',
    description: (
      <DivCarousel>
        <div><p> La ISO 14617-1 no contiene símbolos específicos. Su función es:</p>
       
        <ul>
          <li><strong>Introducir</strong> toda la<strong> serie ISO 14617</strong></li>
          <li><strong>Definir</strong> <strong>conceptos</strong> fundamentales</li>
          <li><strong>Explicar la lógica</strong> de numeración y organización</li>
          <li><strong>Establecer</strong> cómo se usan <strong>reglas</strong>, <strong>ejemplos</strong> e <strong>índices</strong></li>
        </ul>
        Por ello, esta parte debe entenderse como el <strong>manual de uso de la norma completa</strong>.</div>
        
      </DivCarousel>
    ),
    icon: BookOpen
  },
  {
    id: 'dependency',
    label: 'Dependencias',
    title: 'Relación Normativa ISO',
    description: (
      <DivCarousel>
        <div>  <p>   La ISO 14617-1 se aplica a todo tipo de diagramas técnicos y es una <strong>introducción obligatoria para comprender las demás partes de la serie</strong>.
        <br />
        Se apoya conceptualmente en la <strong>ISO 81714-1</strong>, que define las <strong>reglas generales para el diseño de símbolos gráficos</strong>.</p>
        
      </div>
      
        
      </DivCarousel>
    ),
    icon: Network
  },
  {
    id: 'glossary',
    label: 'Glosario',
    title: 'Términos Clave',
    description: (
      <DivCarousel>
        <div>La norma define un vocabulario común imprescindible:
        <ul>
          <li><strong>Función</strong>: acción realizada (medir, controlar, indicar)</li>
          <li><strong>Producto</strong>: resultado físico</li>
          <li><strong>Componente</strong>: parte indivisible sin perder función</li>
          <li><strong>Dispositivo</strong>: conjunto de componentes</li>
          <li><strong>Elemento</strong>: parte de un componente</li>
          <li><strong>Símbolo gráfico</strong>: representación visual sin texto</li>
          <li><strong>Línea de conexión</strong>: enlace funcional (tubería, cable, señal)</li>
        </ul>
        Estas definiciones garantizan coherencia técnica y semántica.</div>
        
      </DivCarousel>
    ),
    icon: Database
  }
];

// --- Shared Components ---

const Card: React.FC<{ children: React.ReactNode; className?: string; }> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden ${className}`}>
    <div className="p-4 h-full">
      {children}
    </div>
  </div>
);

// --- Diagram Components ---

const HierarchyDiagram = () => (
  <div className="w-full h-full grid grid-rows-[auto_1fr] gap-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
    {/* Top Level */}
    <div className="grid place-items-center">
      <div className="bg-indigo-600 text-white p-6 rounded-lg shadow-md text-center max-w-md w-full">
        <h3 className="text-xl font-bold mb-2">ISO 14617-1</h3>
        <p className="text-sm opacity-90">Información General e Índices</p>
      </div>
    </div>

    {/* Connector Lines (Simulated with Grid Borders) */}
    <div className="grid grid-cols-4 gap-4 relative">
      <div className="absolute top-0 left-0 w-full h-4 border-t-2 border-indigo-300 transform -translate-y-4"></div>
      
      {['Conceptos', 'Estructura', 'Reglas', 'Aplicación'].map((item, idx) => (
        <div key={idx} className="grid place-items-center relative">
          <div className="absolute top-0 left-1/2 h-4 w-0.5 bg-indigo-300 transform -translate-y-4 -translate-x-1/2"></div>
          <div className="bg-white p-4 rounded border-l-4 border-indigo-500 shadow-sm w-full text-center">
            <span className="font-medium text-slate-700">{item}</span>
          </div>
        </div>
      ))}
      
      {/* Sub-parts context */}
      <div className="col-span-4 mt-4 grid place-items-center">
         <div className="w-full border-2 border-dashed border-slate-300 rounded p-4 text-center text-slate-500 bg-slate-100">
            Base para Partes 2 a 15 (Símbolos Específicos)
         </div>
      </div>
    </div>
  </div>
);

const UniversalityDiagram = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center justify-center p-6 bg-slate-50">
    
    {/* Wrong Approach */}
    <Card className="border-red-200 bg-red-50/50">
      <div className="grid grid-rows-[auto_1fr_auto] gap-4 h-full text-center">
        <h4 className="text-red-700 font-bold uppercase tracking-wide">Dependiente del Idioma</h4>
        <div className="grid place-items-center">
          <div className="relative">
            <FileText size={64} className="text-red-300" />
            <div className="absolute inset-0 grid place-items-center">
              <span className="text-xs font-mono bg-white px-1">Valve</span>
              <span className="text-xs font-mono bg-white px-1 mt-6">Válvula</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[auto_1fr] gap-2 items-center justify-center text-red-600">
          <XCircle size={20} />
          <span className="font-medium">Interpretación ambigua</span>
        </div>
      </div>
    </Card>

    {/* Correct Approach */}
    <Card className="border-emerald-200 bg-emerald-50/50">
      <div className="grid grid-rows-[auto_1fr_auto] gap-4 h-full text-center">
        <h4 className="text-emerald-700 font-bold uppercase tracking-wide">Símbolo ISO 14617</h4>
        <div className="grid place-items-center">
          {/* Simple valve symbol representation */}
          <svg width="80" height="80" viewBox="0 0 100 100" className="stroke-emerald-600 stroke-2 fill-none">
            <path d="M20,20 L80,80 L80,20 L20,80 Z" />
          </svg>
        </div>
        <div className="grid grid-cols-[auto_1fr] gap-2 items-center justify-center text-emerald-600">
          <CheckCircle2 size={20} />
          <span className="font-medium">Interpretación Univoca</span>
        </div>
      </div>
    </Card>
  </div>
);

const ManualModelDiagram = () => (
  <div className="h-full grid grid-cols-[1fr_2fr] gap-6 p-4">
    {/* The Guide (Part 1) */}
    <div className="bg-blue-600 text-white rounded-l-lg shadow-lg p-6 grid grid-rows-[auto_1fr] gap-4">
      <div className="grid grid-cols-[auto_1fr] gap-3 items-center border-b border-blue-400 pb-4">
        <Book size={32} />
        <div>
          <h3 className="font-bold text-lg">ISO 14617-1</h3>
          <p className="text-xs text-blue-100">MASTER INDEX</p>
        </div>
      </div>
      <div className="text-sm space-y-3">
        <p>• Reglas de creación</p>
        <p>• Índice alfabético</p>
        <p>• Números de registro</p>
        <div className="mt-4 p-3 bg-blue-700 rounded text-center text-xs">
          Consulta aquí primero
        </div>
      </div>
    </div>

    {/* The Content (Parts 2-15) */}
    <div className="grid grid-cols-2 gap-3 content-start">
      {[2, 3, 4, 5, 6, 7].map((num) => (
        <div key={num} className="bg-white border border-slate-200 p-3 rounded shadow-sm hover:shadow-md transition-shadow grid grid-cols-[auto_1fr] gap-2 items-center">
          <div className="bg-slate-100 p-2 rounded text-slate-500 font-mono text-xs font-bold">PT {num}</div>
          <div className="h-2 bg-slate-200 rounded w-full"></div>
        </div>
      ))}
      <div className="col-span-2 text-center text-slate-400 text-sm py-2 italic">
        ... hasta Parte 15
      </div>
    </div>
  </div>
);

const DependencyDiagram = () => (
  <div className="h-full grid grid-rows-[1fr_auto_1fr] gap-4 items-center justify-center p-6 bg-slate-50">
    {/* Source */}
    <div className="bg-slate-800 text-slate-100 p-6 rounded-lg shadow-md w-64 text-center border-t-4 border-orange-500">
      <div className="flex justify-center mb-3">
        <Settings size={28} className="text-orange-400" />
      </div>
      <h3 className="font-bold text-lg">ISO 81714-1</h3>
      <p className="text-sm text-slate-400 mt-2">Reglas fundamentales de diseño de símbolos</p>
    </div>

    {/* Connection */}
    <div className="grid place-items-center">
      <div className="bg-slate-200 rounded-full p-2">
        <ArrowRight className="text-slate-500 transform rotate-90" size={24} />
      </div>
    </div>

    {/* Target */}
    <div className="bg-white text-slate-800 p-6 rounded-lg shadow-md w-64 text-center border-t-4 border-blue-500">
      <div className="flex justify-center mb-3">
        <Layers size={28} className="text-blue-500" />
      </div>
      <h3 className="font-bold text-lg">ISO 14617-1</h3>
      <p className="text-sm text-slate-500 mt-2">Implementación de reglas y organización de la biblioteca</p>
    </div>
  </div>
);

const GlossaryDiagram = () => {
  const terms = [
    { title: "Símbolo", def: "Representación gráfica de un concepto.", icon: Maximize },
    { title: "Índice", def: "Lista ordenada para localizar información.", icon: Menu },
    { title: "Registro", def: "Identificador único para cada elemento gráfico.", icon: Database },
    { title: "Aplicación", def: "Uso práctico en diagramas de ingeniería.", icon: Settings },
  ];

  return (
    <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-4 p-4 overflow-y-auto">
      {terms.map((term, idx) => (
        <Card key={idx} className="hover:border-indigo-300 transition-colors cursor-default group">
          <div className="grid grid-rows-[auto_1fr] gap-2">
            <div className="grid grid-cols-[auto_1fr] gap-3 items-center border-b border-slate-100 pb-2">
              <div className="p-2 bg-indigo-50 text-indigo-600 rounded-md group-hover:bg-indigo-100 transition-colors">
                <term.icon size={20} />
              </div>
              <h4 className="font-bold text-slate-800">{term.title}</h4>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed pt-2">
              {term.def}
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
};

// --- Main Layout Component ---

const App: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>('hierarchy');
  
  const activeTab = TABS.find(t => t.id === activeTabId) || TABS[0];

  const renderDiagram = () => {
    switch (activeTabId) {
      case 'hierarchy': return <HierarchyDiagram />;
      case 'universality': return <UniversalityDiagram />;
      case 'manual': return <ManualModelDiagram />;
      case 'dependency': return <DependencyDiagram />;
      case 'glossary': return <GlossaryDiagram />;
      default: return <HierarchyDiagram />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-900 grid grid-rows-[auto_1fr] overflow-hidden">
      
      {/* Header Area */}
      <header className="bg-white border-b border-slate-200 shadow-sm z-10 grid grid-rows-[auto_auto]">
        {/* Title Bar */}
        <div className="px-6 py-4 grid grid-cols-[auto_1fr] gap-4 items-center">
          <div className="bg-indigo-600 p-2 rounded-lg text-white">
            <Layers size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-800">ISO 14617-1</h1>
            
          </div>
        </div>

        {/* Navigation Tabs - CSS Grid */}
        <nav className="px-6 grid grid-cols-5 gap-1 bg-slate-50/50">
          {TABS.map((tab) => {
            const isActive = activeTabId === tab.id;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`
                  py-3 px-2 text-sm font-medium transition-all duration-200
                  grid grid-cols-[auto_1fr] gap-2 items-center justify-center
                  border-b-2 hover:bg-slate-100 rounded-t-lg
                  ${isActive 
                    ? 'border-indigo-600 text-indigo-700 bg-white shadow-sm' 
                    : 'border-transparent text-slate-500 hover:text-slate-700'
                  }
                `}
              >
                <Icon size={16} className={isActive ? 'text-indigo-600' : 'text-slate-400'} />
                <span className="hidden md:inline truncate">{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </header>

      {/* Main Content - Grid Layout */}
      <main className="p-6 grid grid-rows-[auto_auto_1fr] gap-6 max-w-7xl mx-auto w-full h-full overflow-hidden">
        
        {/* Section 1: Diagram Title */}
        <div className="border-l-4 border-indigo-500 pl-4 py-1">
          <h2 className="text-2xl font-bold text-slate-800">{activeTab.title}</h2>
        </div>

        {/* Section 2: Diagram Description */}
        <Card className="bg-white">
            {activeTab.description}
     
        </Card>

        {/* Section 3: Diagram Render */}
        <Card className="h-full min-h-[400px]">
          {renderDiagram()}
        </Card>

      </main>
    </div>
  );
};

export default App;