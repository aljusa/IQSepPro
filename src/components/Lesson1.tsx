import React, { useState } from 'react';
import { 
  Settings, 
  Info, 
  Layers, 
  Activity, 
  AlertTriangle, 
   
  CheckCircle2, 
  XCircle,
  
  FileText
} from 'lucide-react';
import DivCarousel from '../assets/DivCarousel';

// --- Types & Interfaces ---

interface TabData {
  id: string;
  label: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

// --- UI Components ---

const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden ${className}`}>
    {children}
  </div>
);

// --- Diagram Components ---

const InterpretationDiagram = () => {
  const [userRole, setUserRole] = useState<'operador' | 'ingeniero' | 'mantenimiento'>('operador');
  
  const perspectives = {
    operador: "Veo una válvula manual para abrir/cerrar flujo.",
    ingeniero: "Veo una válvula de control con actuador neumático (FC).",
    mantenimiento: "Veo un punto de inspección técnica para el sello mecánico."
  };

  return (
    <div className="p-8 flex flex-col items-center bg-slate-50 rounded-lg">
      <div className="grid grid-cols-3 gap-4 mb-8 w-full">
        {Object.keys(perspectives).map((role) => (
          <button
            key={role}
            onClick={() => setUserRole(role as any)}
            className={`p-3 rounded-lg text-sm font-bold transition-all ${userRole === role ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'}`}
          >
            {role.toUpperCase()}
          </button>
        ))}
      </div>
      
      <div className="relative w-64 h-40 bg-white border-2 border-dashed border-slate-300 flex items-center justify-center rounded-xl mb-6">
        <svg width="120" height="80" viewBox="0 0 120 80">
          <path d="M20 40 L50 60 L50 20 L80 40 L110 20 L110 60 Z" fill="#94a3b8" stroke="#1e293b" strokeWidth="2" />
          <circle cx="65" cy="40" r="15" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="4" />
        </svg>
        <div className="absolute -top-4 bg-red-500 text-white px-2 py-1 text-xs rounded">Símbolo no normalizado</div>
      </div>
      
      <div className="text-center p-4 bg-blue-50 border-l-4 border-blue-500 rounded w-full">
        <p className="text-blue-900 font-medium italic">"{perspectives[userRole]}"</p>
      </div>
    </div>
  );
};

const NormalizationComparison = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
    <div className="flex flex-col items-center border p-6 rounded-lg bg-red-50">
      <h4 className="text-red-700 font-bold mb-4">Sin Normalización</h4>
      <svg width="200" height="150" viewBox="0 0 200 150">
        <rect x="20" y="50" width="60" height="40" fill="#fecaca" stroke="#dc2626" />
        <path d="M80 70 L140 70" stroke="#dc2626" strokeWidth="2" />
        <circle cx="150" cy="70" r="20" fill="#fecaca" stroke="#dc2626" />
        <text x="25" y="40" fontSize="10" fill="#dc2626">Cosa que calienta</text>
      </svg>
      <p className="text-xs text-red-600 mt-4 text-center">Dibujos ambiguos, textos largos, falta de jerarquía visual.</p>
    </div>
    <div className="flex flex-col items-center border p-6 rounded-lg bg-green-50">
      <h4 className="text-green-700 font-bold mb-4">Normalizado (ISO/ANSI)</h4>
      <svg width="200" height="150" viewBox="0 0 200 150">
        <rect x="20" y="50" width="60" height="50" fill="none" stroke="#166534" strokeWidth="2" />
        <path d="M20 65 L80 65 M20 85 L80 85" stroke="#166534" strokeWidth="1" strokeDasharray="2" />
        <path d="M80 75 L130 75" stroke="#166534" strokeWidth="2" />
        <circle cx="155" cy="75" r="15" fill="none" stroke="#166534" strokeWidth="2" />
        <text x="148" y="79" fontSize="10" fontWeight="bold" fill="#166534">TIC</text>
        <text x="145" y="105" fontSize="8" fill="#166534">101</text>
      </svg>
      <p className="text-xs text-green-600 mt-4 text-center">Símbolos estándar, codificación alfanumérica, precisión técnica.</p>
    </div>
  </div>
);

const IsoSymbols = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
    {[
      { name: "Instrumento Discreto", svg: <circle cx="50" cy="50" r="30" stroke="currentColor" fill="none" strokeWidth="2"/> },
      { name: "Función Compartida", svg: <><circle cx="50" cy="50" r="30" stroke="currentColor" fill="none" strokeWidth="2"/><line x1="20" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="2"/></> },
      { name: "Lógica/Computación", svg: <rect x="25" y="25" width="50" height="50" stroke="currentColor" fill="none" strokeWidth="2"/> },
      { name: "Válvula General", svg: <path d="M20 30 L80 70 L80 30 L20 70 Z" stroke="currentColor" fill="none" strokeWidth="2"/> }
    ].map((item, i) => (
      <div key={i} className="flex flex-col items-center p-4 bg-white border rounded-lg shadow-sm">
        <div className="w-20 h-20 text-blue-600 mb-2">{item.svg}</div>
        <span className="text-xs font-semibold text-slate-700 text-center">{item.name}</span>
      </div>
    ))}
  </div>
);

const AnsiVsIso = () => (
  <div className="p-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-slate-100">
          <th className="border p-2 text-left">Elemento</th>
          <th className="border p-2">ISO (Básico)</th>
          <th className="border p-2">ANSI/ISA (Detallado)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border p-2 font-medium">Bomba Centrifuga</td>
          <td className="border p-2 flex justify-center">
            <svg width="40" height="40"><circle cx="20" cy="20" r="15" stroke="black" fill="none"/><path d="M20 5 L20 35 M5 20 L35 20" stroke="black"/></svg>
          </td>
          <td className="border p-2 flex justify-center">
             <svg width="40" height="40"><circle cx="20" cy="20" r="15" stroke="black" fill="none"/><path d="M20 5 L35 20 L20 35" fill="none" stroke="black"/><path d="M5 20 L20 20" stroke="black"/></svg>
          </td>
        </tr>
        <tr className="bg-slate-50">
          <td className="border p-2 font-medium">Intercambiador</td>
          <td className="border p-2 flex justify-center">
            <svg width="40" height="40"><rect x="5" y="10" width="30" height="20" stroke="black" fill="none"/><path d="M10 10 L30 30" stroke="black"/></svg>
          </td>
          <td className="border p-2 flex justify-center">
             <svg width="40" height="40"><rect x="5" y="10" width="30" height="20" rx="5" stroke="black" fill="none"/><path d="M10 15 Q 20 5 30 15 T 10 25" fill="none" stroke="black"/></svg>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

const EvolutionDiagram = () => {
  const [level, setLevel] = useState(0);
  const steps = [
    { label: "BFD (Block)", desc: "Cajas negras, flujos principales." },
    { label: "PFD (Process)", desc: "Equipos mayores, balances de masa." },
    { label: "P&ID (Full)", desc: "Instrumentación, tuberías, control, seguridad." }
  ];

  return (
    <div className="p-8 bg-slate-900 rounded-xl text-white">
      <div className="flex justify-between mb-8">
        {steps.map((step, i) => (
          <button 
            key={i} 
            onClick={() => setLevel(i)}
            className={`flex flex-col items-center w-1/3 transition-opacity ${level >= i ? 'opacity-100' : 'opacity-30'}`}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${level === i ? 'bg-blue-500' : 'bg-slate-700'}`}>
              {i + 1}
            </div>
            <span className="text-xs font-bold">{step.label}</span>
          </button>
        ))}
      </div>
      
      <div className="h-48 border border-slate-700 rounded-lg p-4 relative overflow-hidden flex items-center justify-center bg-slate-800">
        <svg viewBox="0 0 400 200" className="w-full h-full">
           {/* Base Equipment */}
           <rect x="150" y="70" width="100" height="60" fill="none" stroke="white" strokeWidth="2" />
           
           {/* PFD Level */}
           {level >= 1 && (
             <g>
               <path d="M50 100 L150 100 M250 100 L350 100" stroke="#3b82f6" strokeWidth="2" />
               <path d="M340 95 L350 100 L340 105" fill="#3b82f6" />
             </g>
           )}

           {/* P&ID Level */}
           {level >= 2 && (
             <g>
               <circle cx="200" cy="40" r="15" stroke="#10b981" fill="none" strokeWidth="2" />
               <line x1="200" y1="55" x2="200" y2="70" stroke="#10b981" strokeWidth="1" strokeDasharray="3" />
               <text x="190" y="44" fontSize="8" fill="#10b981">PT</text>
               <path d="M250 80 L280 80 L280 150" stroke="#f59e0b" strokeWidth="1" />
               <circle cx="280" cy="160" r="10" stroke="#f59e0b" fill="none" />
             </g>
           )}
        </svg>
      </div>
      <p className="mt-4 text-sm text-slate-400 text-center">{steps[level].desc}</p>
    </div>
  );
};

const NormsMatrix = () => (
  <div className="p-4 grid grid-cols-3 gap-2">
    <div className="contents">
      <div className="p-2 font-bold text-xs bg-slate-100">Atributo</div>
      <div className="p-2 font-bold text-xs bg-slate-100 text-center">Normas (ISO/ANSI)</div>
      <div className="p-2 font-bold text-xs bg-slate-100 text-center">Convenciones (Internas)</div>
      
      <div className="p-2 text-xs border-b italic">Naturaleza</div>
      <div className="p-2 text-xs border-b text-center">Rígidas / Universales</div>
      <div className="p-2 text-xs border-b text-center">Flexibles / Específicas</div>

      <div className="p-2 text-xs border-b italic">Objetivo</div>
      <div className="p-2 text-xs border-b text-center">Interoperabilidad Global</div>
      <div className="p-2 text-xs border-b text-center">Eficiencia en Proyecto</div>

      <div className="p-2 text-xs border-b italic">Ejemplo</div>
      <div className="p-2 text-xs border-b text-center">Símbolo de Válvula</div>
      <div className="p-2 text-xs border-b text-center">Grosor de línea de aire</div>
    </div>
  </div>
);

const InteractiveSafety = () => {
  const [errorIndex, setErrorIndex] = useState<number | null>(null);
  const errors = [
    { title: "Tag Duplicado", msg: "Dos bombas con el mismo ID causan confusión en el pedido de repuestos." },
    { title: "Sentido Erróneo", msg: "Una flecha de flujo invertida puede llevar a una instalación física peligrosa." },
    { title: "Símbolo No Estándar", msg: "Un operador no reconoce la función de seguridad (Interlock) y la ignora." }
  ];

  return (
    <div className="p-6">
      <div className="flex gap-4 mb-6">
        {errors.map((err, i) => (
          <button 
            key={i}
            onClick={() => setErrorIndex(i)}
            className={`flex-1 p-3 rounded border text-sm flex flex-col items-center gap-2 transition-all ${errorIndex === i ? 'bg-red-100 border-red-500 text-red-700' : 'bg-white hover:bg-slate-50'}`}
          >
            <AlertTriangle size={18} className={errorIndex === i ? 'text-red-600' : 'text-slate-400'} />
            {err.title}
          </button>
        ))}
      </div>
      {errorIndex !== null ? (
        <div className="animate-in fade-in slide-in-from-bottom-2 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
          <XCircle className="text-red-500 shrink-0 mt-1" size={20} />
          <div>
            <h5 className="font-bold text-red-800 mb-1">Impacto Técnico:</h5>
            <p className="text-sm text-red-700 leading-relaxed">{errors[errorIndex].msg}</p>
          </div>
        </div>
      ) : (
        <div className="p-12 border-2 border-dashed border-slate-200 rounded-lg text-center text-slate-400">
          Selecciona un error común para ver sus consecuencias
        </div>
      )}
    </div>
  );
};

// --- Main Application Structure ---

const LessonLayout = () => {
  const [activeTab, setActiveTab] = useState('intro');

  const tabs: TabData[] = [
    { id: 'intro', label: 'Inicio', icon: <Info size={18} />, title: 'Introducción', description: (
      <DivCarousel>
        <p>
          Ahora veremos que la simbología utilizada en los diagramas de proceso no es arbitraria. Para asegurar que un diagrama pueda ser interpretado correctamente por profesionales de distintos países, industrias y disciplinas, se han desarrollado normas y convenciones gráficas internacionales.
        </p>
        <p>
          Estas normas definen cómo representar equipos, líneas de proceso, instrumentos y conexiones, garantizando coherencia, seguridad y eficiencia en el diseño, construcción y operación de plantas industriales.
        </p>
      </DivCarousel>
    ) },
    { id: 'concept', label: 'Concepto', icon: <Layers size={18} />, title: 'Concepto de normalización gráfica', description: (
      <DivCarousel>
        <p>
          A continuación veremos que la normalización gráfica es el proceso mediante el cual se establecen reglas comunes para la representación de elementos técnicos en diagramas.
        </p>
        <p>En ingeniería de procesos, estas reglas determinan:</p>
        <ul>
          <li>La forma básica de los símbolos de equipos.</li>
          <li>El significado de líneas, flechas y conexiones.</li>
          <li>El uso de códigos, letras y numeración.</li>
          <li>La consistencia visual entre diferentes documentos técnicos.</li>
        </ul>
        <p>
          El objetivo principal de la normalización es eliminar ambigüedades y asegurar una comunicación técnica precisa, independientemente del autor del diagrama.
        </p>
      </DivCarousel>
    ) },
    { id: 'iso', label: 'ISO', icon: <Settings size={18} />, title: 'Normas ISO', description:  (
      <DivCarousel>
        <p>
          Las normas de la ISO proporcionan lineamientos internacionales ampliamente aceptados para diagramas técnicos e industriales.
        </p>
        <div> <p>En el ámbito de la simbología de procesos, ISO establece criterios generales para:</p>
        <ul>
          <li>Representación de equipos industriales.</li>
          <li>Diagramas de flujo y esquemas funcionales.</li>
          <li>Uso de símbolos genéricos y convenciones gráficas.</li>
        </ul></div>
       
        <p>
          Estas normas son especialmente utilizadas en proyectos de alcance internacional, donde la interoperabilidad técnica es esencial.
        </p>
        
      </DivCarousel>
    ) },
    { id: 'ansi', label: 'ANSI', icon: <FileText size={18} />, title: 'Normas ANSI/ISA', description: (
      <DivCarousel>
        <p>
          La ANSI desarrolla normas técnicas ampliamente usadas en América y en sectores como la industria química, petroquímica y energética.
        </p>
        <div> <p>Sus estándares influyen especialmente en:</p>
        <ul>
          <li>Diagramas de tuberías e instrumentación.</li>
          <li>Simbología detallada de equipos, válvulas y accesorios.</li>
          <li>Convenciones de identificación alfanumérica.</li>
        </ul>
        </div>
       <p>
          Muchas normas ANSI han servido como base para estándares industriales adoptados a nivel global.
        </p>
      </DivCarousel>
    ) },
    { id: 'convenciones', label: 'Convenciones', icon: <Activity size={18} />, title: 'Convenciones P&ID', description: (
      <DivCarousel>
        <p>
          Ahora veremos que el P&ID (Piping and Instrumentation Diagram) no es una norma en sí misma, sino un tipo de diagrama que integra normas ISO, ANSI y convenciones propias de cada empresa o proyecto.
        </p>
        <div> <p>En los diagramas P&ID:</p>
        <ul>
          <li>Los equipos se representan con símbolos estandarizados y detallados.</li>
          <li>Se incluyen instrumentos, lazos de control y válvulas.</li>
          <li>Cada equipo posee un código identificador único.</li>
          <li>La simbología prioriza la función y la interconexión real del sistema.</li>
        </ul></div>
       
        <p>
          El P&ID es el documento gráfico más completo para la operación y el control del proceso.
        </p>
      </DivCarousel>
    )},
    { id: 'comparativa', label: 'Matriz', icon: <CheckCircle2 size={18} />, title: 'Diferencias clave entre normas y convenciones', description: (
      <DivCarousel>
        <p>
          En esta sección veremos cómo se diferencian ISO, ANSI y los P&ID en términos de alcance y nivel de detalle.
      <br />
          Esta diferenciación permite seleccionar el tipo de simbología adecuado según la etapa del proyecto y el uso del diagrama.
        </p>
      </DivCarousel>
    ) },
    { id: 'importancia', label: 'Riesgos', icon: <AlertTriangle size={18} />, title: 'Importancia y Seguridad', description: (
      <DivCarousel>
        <p>
          Finalmente veremos que el uso correcto de normas gráficas no es opcional, sino una necesidad técnica y profesional.
        </p>
        <div><p>Respetar normas y convenciones garantiza que:</p>
        <ul>
          <li>Los diagramas sean claros, coherentes y auditables.</li>
          <li>Se reduzcan errores de diseño, construcción y operación.</li>
          <li>Diferentes equipos de trabajo puedan colaborar eficazmente.</li>
          <li>Los documentos tengan validez técnica, contractual y legal.</li>
        </ul></div>
        
        <p>
          En proyectos industriales reales, el incumplimiento de normas puede provocar retrabajos, fallas operativas o riesgos de seguridad.
        </p>
      </DivCarousel>
    ) },
  ];

  const currentTab = tabs.find(t => t.id === activeTab) || tabs[0];

  const renderDiagram = () => {
    switch (activeTab) {
      case 'intro': return <InterpretationDiagram />;
      case 'concept': return <NormalizationComparison />;
      case 'iso': return <IsoSymbols />;
      case 'ansi': return <AnsiVsIso />;
      case 'convenciones': return <EvolutionDiagram />;
      case 'comparativa': return <NormsMatrix />;
      case 'importancia': return <InteractiveSafety />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 grid grid-cols-12">
      {/* Header - Full Width */}
      <header className="col-span-12 bg-slate-900 text-white p-6 shadow-xl z-10 grid grid-cols-12 items-center">
        <div className="col-span-12 md:col-span-6 flex items-center gap-4">
          <div className="p-2 bg-blue-600 rounded-lg">
            <Activity size={32} />
          </div>
          <div>
            <h1 className="text-2xl font-black tracking-tight uppercase">Normas y convenciones gráficas (ISO, ANSI y P&ID)</h1>
           
          </div>
        </div>
        <nav className="col-span-12 md:col-span-6 mt-4 md:mt-0">
          <ul className="flex justify-end gap-6 text-sm font-medium">
            <li className="hover:text-blue-400 cursor-pointer">Documentación</li>
            <li className="hover:text-blue-400 cursor-pointer">Normativa ISA-5.1</li>
            <li className="hover:text-blue-400 cursor-pointer">Soporte</li>
          </ul>
        </nav>
      </header>

      {/* Navigation Tabs - Full Width below Header */}
      <div className="col-span-12 bg-white border-b border-slate-200 sticky top-0 z-20 overflow-x-auto no-scrollbar">
        <div className="flex px-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-4 text-sm font-bold whitespace-nowrap transition-all border-b-2 ${activeTab === tab.id ? 'border-blue-600 text-blue-600 bg-blue-50/50' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <main className="col-span-12 max-w-7xl mx-auto w-full p-6 grid  gap-8">
        
        {/* Text Section */}
        <section className="col-span-12 lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <h2 className="text-4xl font-black text-slate-900 leading-tight">
              {currentTab.title}
            </h2>
          </div>
          
          <Card className="p-6 bg-white">
             {currentTab.description}
            
            
          </Card>

        
        </section>

        {/* Diagram Section */}
        <section className="col-span-12 lg:col-span-7">
        
          
          <Card className="min-h-[400px] flex items-center justify-center bg-white border-2 border-slate-100">
            <div className="w-full">
              {renderDiagram()}
            </div>
          </Card>
          
          
        </section>

      </main>

     

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-in { animation: fade-in 0.4s ease-out forwards; }
      `}} />
    </div>
  );
};

export default function App() {
  return <LessonLayout />;
}