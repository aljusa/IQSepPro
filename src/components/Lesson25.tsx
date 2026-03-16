import React, { useState } from 'react';
import { 
  Filter, 
  Droplet, 
  Factory, 
  Settings, 
  RefreshCw, 
  Layers, 
  Activity,
  Beaker,
  Mountain
} from 'lucide-react';

// --- TIPOS E INTERFACES ---

interface SectionData {
  id: string;
  tabLabel: string;
  title: string;
  description: string;
  diagramType: DiagramType;
}

type DiagramType = 
  | 'concept-map'
  | 'cartridge-def'
  | 'cartridge-features'
  | 'cartridge-apps'
  | 'press-def'
  | 'press-func'
  | 'press-features'
  | 'press-apps'
  | 'rotary-def'
  | 'rotary-func'
  | 'rotary-features'
  | 'rotary-apps'
  | 'synthesis-table';

// --- DATOS DE LA LECCIÓN ---

const LESSON_DATA: SectionData[] = [
  {
    id: 's1',
    tabLabel: 'Clasificación',
    title: 'Clasificación general de los filtros industriales',
    description: 'Los filtros industriales son equipos diseñados para separar partículas sólidas de un fluido mediante el uso de un medio filtrante. La selección del tipo de filtro depende de factores como el volumen de operación, el tipo de partículas presentes y las condiciones del proceso productivo. Entre los equipos más utilizados se encuentran los filtros de cartucho, filtros prensa y filtros rotatorios, cada uno con características operativas distintas.',
    diagramType: 'concept-map'
  },
  {
    id: 's2',
    tabLabel: 'Cartucho: Def.',
    title: 'Definición de filtro de cartucho',
    description: 'El filtro de cartucho es un equipo de filtración que utiliza elementos filtrantes cilíndricos intercambiables, llamados cartuchos. Estos cartuchos contienen materiales porosos capaces de retener partículas sólidas mientras el fluido atraviesa el medio filtrante.',
    diagramType: 'cartridge-def'
  },
  {
    id: 's3',
    tabLabel: 'Cartucho: Caract.',
    title: 'Características del filtro de cartucho',
    description: 'Los filtros de cartucho se caracterizan por ofrecer alta eficiencia de filtración, especialmente para partículas muy pequeñas. Además, permiten mantenimiento sencillo, ya que los cartuchos pueden retirarse y reemplazarse fácilmente. Debido a estas propiedades, son comunes en procesos donde se requiere alta pureza del fluido.',
    diagramType: 'cartridge-features'
  },
  {
    id: 's4',
    tabLabel: 'Cartucho: Aplic.',
    title: 'Aplicaciones del filtro de cartucho',
    description: 'Los filtros de cartucho se utilizan ampliamente en procesos que requieren filtración fina. Son comunes en la industria farmacéutica, donde se necesita alta pureza del producto; en la producción de bebidas, para clarificar líquidos; y en sistemas de purificación de agua destinados a remover partículas microscópicas.',
    diagramType: 'cartridge-apps'
  },
  {
    id: 's5',
    tabLabel: 'Prensa: Def.',
    title: 'Definición de filtro prensa',
    description: 'El filtro prensa es un equipo de filtración formado por una serie de placas y marcos que sostienen telas filtrantes. Estas placas crean cámaras donde se acumulan los sólidos retenidos durante el proceso de filtración.',
    diagramType: 'press-def'
  },
  {
    id: 's6',
    tabLabel: 'Prensa: Func.',
    title: 'Funcionamiento del filtro prensa',
    description: 'El funcionamiento del filtro prensa ocurre en una secuencia de pasos. Primero, la suspensión se bombea hacia el interior del equipo. Luego, el fluido atraviesa las telas filtrantes mientras los sólidos quedan retenidos entre las placas. Con el tiempo se forma una torta de filtración compacta dentro de cada cámara.',
    diagramType: 'press-func'
  },
  {
    id: 's7',
    tabLabel: 'Prensa: Caract.',
    title: 'Características del filtro prensa',
    description: 'El filtro prensa se caracteriza por ofrecer alta eficiencia en la separación sólido-líquido. Permite obtener tortas de sólidos compactas, lo cual facilita su manipulación posterior. Generalmente funciona en operación por lotes, ya que después de cada ciclo es necesario abrir el equipo para retirar la torta formada.',
    diagramType: 'press-features'
  },
  {
    id: 's8',
    tabLabel: 'Prensa: Aplic.',
    title: 'Aplicaciones del filtro prensa',
    description: 'El filtro prensa se utiliza en procesos donde es importante recuperar o concentrar sólidos. Es común en el tratamiento de lodos, en la industria química para separación de suspensiones, y en la industria minera para la recuperación de sólidos valiosos.',
    diagramType: 'press-apps'
  },
  {
    id: 's9',
    tabLabel: 'Rotatorio: Def.',
    title: 'Definición de filtro rotatorio',
    description: 'El filtro rotatorio es un equipo de filtración continua que utiliza un tambor cilíndrico giratorio cubierto con un medio filtrante. Este tambor rota parcialmente sumergido en la suspensión mientras el proceso de filtración ocurre de manera continua.',
    diagramType: 'rotary-def'
  },
  {
    id: 's10',
    tabLabel: 'Rotatorio: Func.',
    title: 'Funcionamiento del filtro rotatorio',
    description: 'Durante la operación del filtro rotatorio, el tambor gira lentamente dentro de la suspensión. En su interior se genera vacío, lo que provoca que el fluido atraviese el medio filtrante. Las partículas sólidas se adhieren a la superficie del tambor formando una torta, que posteriormente es retirada mediante un sistema de raspado o descarga.',
    diagramType: 'rotary-func'
  },
  {
    id: 's11',
    tabLabel: 'Rotatorio: Caract.',
    title: 'Características del filtro rotatorio',
    description: 'Los filtros rotatorios destacan por su operación continua, lo que permite procesar grandes volúmenes de suspensión. También presentan alta capacidad de procesamiento y facilitan la automatización del proceso, lo cual los hace adecuados para operaciones industriales de gran escala.',
    diagramType: 'rotary-features'
  },
  {
    id: 's12',
    tabLabel: 'Rotatorio: Aplic.',
    title: 'Aplicaciones del filtro rotatorio',
    description: 'Los filtros rotatorios se utilizan principalmente en procesos industriales de gran escala. Son comunes en la industria azucarera para la separación de cristales y líquidos, en la producción de minerales para procesar pulpas minerales, y en el tratamiento de efluentes para separar sólidos suspendidos.',
    diagramType: 'rotary-apps'
  },
  {
    id: 's13',
    tabLabel: 'Síntesis',
    title: 'Síntesis de los filtros industriales',
    description: 'Los filtros de cartucho, prensa y rotatorios representan tecnologías complementarias de filtración industrial. Los filtros de cartucho destacan en filtración fina, los filtros prensa en separación eficiente por lotes con tortas compactas, y los filtros rotatorios en procesos continuos de gran capacidad.',
    diagramType: 'synthesis-table'
  }
];

// --- COMPONENTES BASE ---

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-xl shadow-sm border border-slate-200 p-6 ${className}`}>
    {children}
  </div>
);

// --- COMPONENTES DE DIAGRAMAS (Visualización Estática/Conceptual usando Grid) ---

const ConceptMapNode: React.FC<{ title: string; icon?: React.ReactNode; highlight?: boolean }> = ({ title, icon, highlight }) => (
  <div className={`p-4 rounded-lg border-2 text-center grid place-items-center gap-2 transition-colors ${highlight ? 'border-blue-500 bg-blue-50 text-blue-900 font-semibold' : 'border-slate-300 bg-white text-slate-700'}`}>
    {icon && <div className={highlight ? 'text-blue-600' : 'text-slate-500'}>{icon}</div>}
    <span>{title}</span>
  </div>
);

const DiagramConceptMap = () => (
  <div className="grid grid-rows-[auto_auto] gap-8 w-full max-w-2xl">
    <div className="grid justify-center relative">
      <ConceptMapNode title="Filtros Industriales" highlight icon={<Filter size={32} />} />
      {/* Línea vertical conectora */}
      <div className="h-8 w-0.5 bg-slate-300 justify-self-center absolute -bottom-8"></div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative pt-4">
       {/* Línea horizontal conectora superior */}
       <div className="absolute top-0 left-1/6 right-1/6 h-0.5 bg-slate-300 w-2/3 justify-self-center hidden md:block"></div>
       <div className="grid gap-2 relative">
          <div className="absolute -top-4 left-1/2 w-0.5 h-4 bg-slate-300 -translate-x-1/2 hidden md:block"></div>
          <ConceptMapNode title="Filtro de Cartucho" />
          <span className="text-xs text-center text-slate-500">Filtración fina y alta pureza</span>
       </div>
       <div className="grid gap-2 relative">
          <div className="absolute -top-4 left-1/2 w-0.5 h-4 bg-slate-300 -translate-x-1/2 hidden md:block"></div>
          <ConceptMapNode title="Filtro Prensa" />
          <span className="text-xs text-center text-slate-500">Separación por lotes, tortas compactas</span>
       </div>
       <div className="grid gap-2 relative">
          <div className="absolute -top-4 left-1/2 w-0.5 h-4 bg-slate-300 -translate-x-1/2 hidden md:block"></div>
          <ConceptMapNode title="Filtro Rotatorio" />
          <span className="text-xs text-center text-slate-500">Operación continua, gran capacidad</span>
       </div>
    </div>
  </div>
);

const DiagramCartridgeDef = () => (
  <div className="grid place-items-center gap-6">
    <div className="bg-blue-50 border-2 border-blue-200 p-4 rounded-xl text-center shadow-sm">
      <h3 className="font-bold text-blue-900 text-xl">Filtro de Cartucho</h3>
    </div>
    <svg width="200" height="250" viewBox="0 0 200 250" className="drop-shadow-md">
      {/* Carcasa */}
      <rect x="40" y="20" width="120" height="200" rx="10" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="4"/>
      <path d="M40 40 Q100 20 160 40" fill="none" stroke="#94a3b8" strokeWidth="4"/>
      <path d="M40 200 Q100 220 160 200" fill="none" stroke="#94a3b8" strokeWidth="4"/>
      {/* Cartuchos Internos */}
      <rect x="60" y="50" width="20" height="140" rx="5" fill="#bae6fd" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 2"/>
      <rect x="90" y="50" width="20" height="140" rx="5" fill="#bae6fd" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 2"/>
      <rect x="120" y="50" width="20" height="140" rx="5" fill="#bae6fd" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 2"/>
      {/* Flujo */}
      <path d="M20 120 L50 120" stroke="#3b82f6" strokeWidth="3" markerEnd="url(#arrow)"/>
      <path d="M150 120 L180 120" stroke="#3b82f6" strokeWidth="3" markerEnd="url(#arrow)"/>
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6" />
        </marker>
      </defs>
    </svg>
    <p className="text-sm text-slate-500">Flujo de líquido a través de elementos porosos verticales.</p>
    <a href="https://www.youtube.com/watch?v=hCSIhNcGl64">Video</a>
  </div>
);

const DiagramFeatures = ({ center, features }: { center: string, features: string[] }) => (
  <div className="grid grid-rows-3 grid-cols-3 gap-4 w-full max-w-lg place-items-center">
    <div className="col-start-2 row-start-2 z-10">
      <div className="bg-slate-800 text-white p-4 rounded-xl font-bold text-center shadow-lg">
        {center}
      </div>
    </div>
    <div className="col-start-2 row-start-1 grid place-items-center relative w-full h-full">
      <div className="bg-blue-100 border border-blue-300 p-3 rounded-lg text-sm text-center font-medium w-full shadow-sm">{features[0]}</div>
      <div className="h-6 w-0.5 bg-slate-300 absolute -bottom-6"></div>
    </div>
    <div className="col-start-1 row-start-3 grid place-items-center relative w-full h-full">
      <div className="bg-blue-100 border border-blue-300 p-3 rounded-lg text-sm text-center font-medium w-full shadow-sm">{features[1]}</div>
      <svg className="absolute -top-6 -right-6 w-12 h-12" style={{transform: 'rotate(45deg)'}}>
         <line x1="0" y1="100%" x2="100%" y2="0" stroke="#cbd5e1" strokeWidth="2"/>
      </svg>
    </div>
    <div className="col-start-3 row-start-3 grid place-items-center relative w-full h-full">
      <div className="bg-blue-100 border border-blue-300 p-3 rounded-lg text-sm text-center font-medium w-full shadow-sm">{features[2]}</div>
      <svg className="absolute -top-6 -left-6 w-12 h-12" style={{transform: 'rotate(-45deg)'}}>
         <line x1="100%" y1="100%" x2="0" y2="0" stroke="#cbd5e1" strokeWidth="2"/>
      </svg>
    </div>
  </div>
);

const DiagramApps = ({ apps }: { apps: { title: string, icon: React.ReactNode, desc: string }[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
    {apps.map((app, i) => (
      <div key={i} className="bg-white border-2 border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow grid gap-4 place-items-center text-center">
        <div className="p-4 bg-slate-50 rounded-full text-blue-600">
          {app.icon}
        </div>
        <h4 className="font-bold text-slate-800">{app.title}</h4>
        <p className="text-xs text-slate-500">{app.desc}</p>
      </div>
    ))}
  </div>
);

const DiagramPressDef = () => (
  <div className="grid place-items-center gap-6">
    <div className="bg-green-50 border-2 border-green-200 p-4 rounded-xl text-center shadow-sm">
      <h3 className="font-bold text-green-900 text-xl">Filtro Prensa</h3>
    </div>
    <svg width="300" height="150" viewBox="0 0 300 150" className="drop-shadow-md">
      <rect x="20" y="40" width="260" height="70" fill="none" stroke="#94a3b8" strokeWidth="2"/>
      {/* Placas y Telas (alternadas) */}
      {[...Array(6)].map((_, i) => (
        <g key={i}>
          {/* Placa */}
          <rect x={40 + i * 40} y="30" width="10" height="90" fill="#64748b" rx="2"/>
          {/* Tela (espacio entre placas) */}
          {i < 5 && <rect x={50 + i * 40} y="40" width="30" height="70" fill="#fef08a" opacity="0.6"/>}
          {i < 5 && <path d={`M${65 + i * 40} 40 L${65 + i * 40} 110`} stroke="#eab308" strokeWidth="2" strokeDasharray="2 2"/>}
        </g>
      ))}
      <path d="M0 75 L30 75" stroke="#3b82f6" strokeWidth="3" markerEnd="url(#arrow)"/>
      <path d="M270 75 L300 75" stroke="#3b82f6" strokeWidth="3" markerEnd="url(#arrow)"/>
    </svg>
    <p className="text-sm text-slate-500">Esquema en corte: Placas rígidas (gris) alternadas con cámaras de filtración (amarillo).</p>
    <a href=" https://youtu.be/rsKFB983mkc?si=QzPPQT7PiIscBarE&t=58">Video</a>
  </div>
);

const DiagramSteps = ({ steps }: { steps: string[] }) => (
  <div className="grid grid-cols-1 md:grid-flow-col auto-cols-fr gap-4 w-full max-w-3xl">
    {steps.map((step, i) => (
      <div key={i} className="grid grid-rows-[auto_1fr] gap-3 relative">
        <div className="grid place-items-center">
          <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold grid place-items-center shadow-md z-10">
            {i + 1}
          </div>
          {i < steps.length - 1 && (
            <div className="hidden md:block absolute top-5 left-1/2 w-full h-1 bg-blue-200 -z-0"></div>
          )}
        </div>
        <div className="bg-white border border-slate-200 p-4 rounded-xl text-center shadow-sm text-sm">
          {step}
        </div>
      </div>
    ))}
  </div>
);

const DiagramRotaryDef = () => (
  <div className="grid place-items-center gap-6">
    <div className="bg-purple-50 border-2 border-purple-200 p-4 rounded-xl text-center shadow-sm">
      <h3 className="font-bold text-purple-900 text-xl">Filtro Rotatorio</h3>
    </div>
    <svg width="250" height="200" viewBox="0 0 250 200" className="drop-shadow-md">
      {/* Tanque de suspensión */}
      <path d="M 40 100 L 40 180 L 210 180 L 210 100" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="4"/>
      <path d="M 40 130 L 210 130" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="5 5"/>
      {/* Tambor Rotatorio */}
      <circle cx="125" cy="100" r="60" fill="#f8fafc" stroke="#64748b" strokeWidth="4"/>
      <circle cx="125" cy="100" r="50" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4"/>
      <circle cx="125" cy="100" r="10" fill="#64748b"/>
      {/* Cuchilla rascadora */}
      <path d="M 180 60 L 220 100" stroke="#ef4444" strokeWidth="4" strokeLinecap="round"/>
      {/* Flecha de rotación */}
      <path d="M 90 60 A 40 40 0 0 1 160 60" fill="none" stroke="#3b82f6" strokeWidth="3" markerEnd="url(#arrow)"/>
    </svg>
    <p className="text-sm text-slate-500">Tambor giratorio parcialmente sumergido en tanque de suspensión.</p>
    <a href='https://www.youtube.com/watch?v=29FGhBp7juQ'> Video</a>
  </div>
);

const DiagramCircularSteps = ({ steps }: { steps: string[] }) => (
  <div className="grid grid-cols-2 grid-rows-2 gap-6 w-full max-w-lg relative p-8">
    {/* Fondo conectivo pseudo-circular usando grid */}
    <div className="absolute inset-8 border-4 border-slate-100 rounded-full z-0"></div>
    {steps.map((step, i) => (
      <div key={i} className={`grid place-items-center z-10 ${i===0?'justify-self-end self-end': i===1?'justify-self-start self-end': i===2?'justify-self-start self-start': 'justify-self-end self-start'}`}>
        <div className="bg-white border-2 border-purple-200 p-4 rounded-full w-32 h-32 grid place-content-center text-center shadow-lg hover:border-purple-500 transition-colors">
          <span className="font-bold text-purple-700 text-lg mb-1">{i+1}</span>
          <span className="text-xs text-slate-600 leading-tight">{step}</span>
        </div>
      </div>
    ))}
  </div>
);

const DiagramSynthesisTable = () => (
  <div className="w-full overflow-x-auto">
    <table className="w-full border-collapse bg-white text-left text-sm text-slate-700">
      <thead className="bg-slate-50">
        <tr>
          <th scope="col" className="px-6 py-4 font-bold text-slate-900 border-b-2 border-slate-200">Característica</th>
          <th scope="col" className="px-6 py-4 font-bold text-slate-900 border-b-2 border-slate-200">Filtro de Cartucho</th>
          <th scope="col" className="px-6 py-4 font-bold text-slate-900 border-b-2 border-slate-200">Filtro Prensa</th>
          <th scope="col" className="px-6 py-4 font-bold text-slate-900 border-b-2 border-slate-200">Filtro Rotatorio</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100 border-b border-slate-200">
        <tr className="hover:bg-slate-50">
          <td className="px-6 py-4 font-medium text-slate-900">Modo de Operación</td>
          <td className="px-6 py-4">Continuo / Lotes (reemplazo)</td>
          <td className="px-6 py-4">Por Lotes (Batch)</td>
          <td className="px-6 py-4">Continuo</td>
        </tr>
        <tr className="hover:bg-slate-50">
          <td className="px-6 py-4 font-medium text-slate-900">Capacidad de Procesamiento</td>
          <td className="px-6 py-4">Baja a Media (Alta pureza)</td>
          <td className="px-6 py-4">Media a Alta (Tortas densas)</td>
          <td className="px-6 py-4">Muy Alta (Grandes volúmenes)</td>
        </tr>
        <tr className="hover:bg-slate-50">
          <td className="px-6 py-4 font-medium text-slate-900">Tipo de Aplicación</td>
          <td className="px-6 py-4">Clarificación, Farmacéutica, Agua</td>
          <td className="px-6 py-4">Química, Lodos, Minería</td>
          <td className="px-6 py-4">Azucarera, Efluentes, Minerales</td>
        </tr>
      </tbody>
    </table>
  </div>
);

// --- RENDERIZADOR PRINCIPAL DE DIAGRAMAS ---

const DiagramRender: React.FC<{ type: DiagramType }> = ({ type }) => {
  switch (type) {
    case 'concept-map': return <DiagramConceptMap />;
    case 'cartridge-def': return <DiagramCartridgeDef />;
    case 'cartridge-features': 
      return <DiagramFeatures center="Filtro de Cartucho" features={['Alta Eficiencia', 'Retención Partículas Finas', 'Mantenimiento Sencillo']} />;
    case 'cartridge-apps':
      return <DiagramApps apps={[
        { title: 'Industria Farmacéutica', desc: 'Alta pureza del producto', icon: <Activity size={32}/> },
        { title: 'Producción de Bebidas', desc: 'Clarificación de líquidos', icon: <Beaker size={32}/> },
        { title: 'Purificación de Agua', desc: 'Remoción microscópica', icon: <Droplet size={32}/> }
      ]} />;
    case 'press-def': return <DiagramPressDef />;
    case 'press-func':
      return <DiagramSteps steps={['Entrada de suspensión (Bombeo)', 'Paso del fluido (Filtración)', 'Formación de torta compacta']} />;
    case 'press-features':
      return <DiagramFeatures center="Filtro Prensa" features={['Alta Eficiencia Separación', 'Tortas Compactas', 'Operación por Lotes']} />;
    case 'press-apps':
      return <DiagramApps apps={[
        { title: 'Tratamiento de Lodos', desc: 'Concentración de sólidos', icon: <Layers size={32}/> },
        { title: 'Industria Química', desc: 'Separación de suspensiones', icon: <Beaker size={32}/> },
        { title: 'Industria Minera', desc: 'Recuperación de valiosos', icon: <Mountain size={32}/> }
      ]} />;
    case 'rotary-def': return <DiagramRotaryDef />;
    case 'rotary-func':
      return <DiagramCircularSteps steps={['Inmersión del tambor', 'Filtración por vacío', 'Formación de torta', 'Remoción de sólidos']} />;
    case 'rotary-features':
      return <DiagramFeatures center="Filtro Rotatorio" features={['Operación Continua', 'Alta Capacidad', 'Fácil Automatización']} />;
    case 'rotary-apps':
      return <DiagramApps apps={[
        { title: 'Industria Azucarera', desc: 'Separación cristales', icon: <Factory size={32}/> },
        { title: 'Procesamiento Mineral', desc: 'Pulpas minerales', icon: <Mountain size={32}/> },
        { title: 'Tratamiento Efluentes', desc: 'Sólidos suspendidos', icon: <RefreshCw size={32}/> }
      ]} />;
    case 'synthesis-table': return <DiagramSynthesisTable />;
    default: return <div>Diagrama no encontrado</div>;
  }
};

// --- ESTRUCTURA PRINCIPAL (CSS Grid Layout) ---

const LessonLayout: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>(LESSON_DATA[0].id);

  const activeSection = LESSON_DATA.find(s => s.id === activeTabId) || LESSON_DATA[0];

  return (
    <div className="h-screen w-full bg-slate-50 text-slate-900 grid grid-rows-[auto_1fr] font-sans ">
      
      {/* HEADER (Row 1) */}
      <header className="grid grid-rows-[auto_auto] border-b bg-white border-slate-200 shadow-sm z-10">
        {/* Título Principal */}
        <div className="px-6 py-4 border-b border-slate-100 grid grid-cols-[auto_1fr] gap-3 items-center">
          <div className="bg-blue-600 text-white p-2 rounded-lg grid place-items-center">
            <Settings size={24} />
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight">
Tipos de Filtros Industriales          </h1>
        </div>

        {/* Navegación por Pestañas (Scroll horizontal con Grid) */}
        <nav className="px-2 py-2 overflow-x-auto custom-scrollbar">
          <div className="grid grid-cols-5 auto-cols-max gap-2 px-4">
            {LESSON_DATA.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveTabId(section.id)}
                className={`
                  px-4 py-2 rounded-md text-sm font-medium transition-all
                  ${activeTabId === section.id 
                    ? 'bg-blue-100 text-blue-700 shadow-sm border border-blue-200' 
                    : 'bg-transparent text-slate-600 hover:bg-slate-100 border border-transparent'}
                `}
              >
                {section.tabLabel}
              </button>
            ))}
          </div>
        </nav>
      </header>

      {/* ÁREA PRINCIPAL DE CONTENIDO (Row 2) */}
      <main className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-6 p-4 md:p-6  bg-slate-100">
        
        {/* Columna Izquierda: Contenido de Texto */}
        <div className="grid grid-rows-[1fr] ">
          <div className=" pr-2 grid content-start gap-4">
            <Card className="border-l-4 border-l-blue-500">
              <h2 className="text-2xl font-bold text-slate-800 mb-2">{activeSection.title}</h2>
              
              <p className="text-slate-600 leading-relaxed text-lg">
                {activeSection.description}
              </p>
            </Card>
          </div>
        </div>

        {/* Columna Derecha: Renderizado del Diagrama */}
        <div className="grid ">
           <Card className="grid grid-rows-[auto_1fr] h-full  p-0 border-slate-300 shadow-md">
             <div className="grid place-items-center p-6  bg-white" style={{ backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                <DiagramRender type={activeSection.diagramType} />
             </div>
           </Card>
        </div>

      </main>

      {/* Estilos globales para la barra de scroll oculta visualmente pero funcional */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}} />
    </div>
  );
};

export default LessonLayout;