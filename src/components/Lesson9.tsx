import React, { useState } from 'react';
import { 
  BookOpen, 
  Settings, 
  GitCommit, 
  Database, 
  ClipboardList, 
  Map, 
  CheckCircle, 
  ChevronRight, 
  ChevronLeft,
  Info,
  Layers,
  ShieldCheck,
  Disc,
  Anchor,
  Wind
} from 'lucide-react';

// --- Tipos e Interfaces ---

interface TabItem {
  id: string;
  title: string;
  shortTitle: string;
  icon: React.ElementType;
}

// --- Datos de Configuración ---

const TABS: TabItem[] = [
  { id: 'intro', title: '1. Introducción', shortTitle: 'Intro', icon: BookOpen },
  { id: 'mecanicos', title: '2. Elementos Mecánicos', shortTitle: 'Mecánicos', icon: Settings },
  { id: 'tuberias', title: '3. Tubería y Ductos', shortTitle: 'Tuberías', icon: GitCommit },
  { id: 'almacen', title: '4. Almacenamiento', shortTitle: 'Almacén', icon: Database },
  { id: 'reglas', title: '5. Reglas de Aplicación', shortTitle: 'Reglas', icon: ClipboardList },
  { id: 'mapa', title: '6. Relación Mapa Mental', shortTitle: 'Mapa', icon: Map },
  { id: 'cierre', title: '7. Cierre', shortTitle: 'Cierre', icon: CheckCircle },
];

// --- Componentes Auxiliares ---

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b-2 border-blue-500 pb-2 flex items-center gap-2">
    {children}
  </h2>
);

const SubTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-lg font-semibold text-blue-700 mt-6 mb-3 flex items-center gap-2">
    {children}
  </h3>
);

const Card = ({ title, children, icon: Icon }: { title: string, children: React.ReactNode, icon?: React.ElementType }) => (
  <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-5 hover:shadow-md transition-shadow">
    <div className="flex items-center gap-2 mb-3">
      {Icon && <Icon className="w-5 h-5 text-blue-500" />}
      <h4 className="font-bold text-slate-700">{title}</h4>
    </div>
    <div className="text-slate-600 text-sm leading-relaxed">
      {children}
    </div>
  </div>
);

const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2 mb-2 text-slate-700">
    <span className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
    <span>{children}</span>
  </li>
);

// --- Contenido de las Pestañas ---

const IntroContent = () => (
  <div className="space-y-6 animate-in fade-in duration-500">
    <SectionTitle>1. Introducción a la ISO 14617-7</SectionTitle>
    
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
      <p className="text-blue-900 font-medium">
        La ISO 14617-7:2002 establece los símbolos gráficos utilizados en diagramas técnicos para representar componentes mecánicos básicos.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <SubTitle><Layers className="w-5 h-5" /> Ámbitos de Aplicación</SubTitle>
        <ul className="space-y-2">
          <ListItem>Diagramas de plantas de proceso</ListItem>
          <ListItem>Sistemas mecánicos e industriales</ListItem>
          <ListItem>Esquemas hidráulicos y neumáticos</ListItem>
          <ListItem>Documentación de ingeniería</ListItem>
        </ul>
      </div>

      <div>
        <SubTitle><Info className="w-5 h-5" /> Grupos Principales</SubTitle>
        <ul className="space-y-2">
          <ListItem><strong>Elementos mecánicos</strong></ListItem>
          <ListItem><strong>Elementos de tubería y ductos</strong></ListItem>
          <ListItem><strong>Dispositivos de almacenamiento</strong></ListItem>
        </ul>
      </div>
    </div>
    
    <p className="text-slate-500 italic mt-4 text-sm border-t pt-4">
      "Define reglas claras de aplicación para asegurar una interpretación uniforme de los símbolos."
    </p>
  </div>
);

const MechanicalContent = () => (
  <div className="space-y-6 animate-in fade-in duration-500">
    <SectionTitle>2. Elementos Mecánicos</SectionTitle>

    <div className="bg-slate-100 p-4 rounded-lg mb-6">
      <h3 className="font-bold text-slate-800 mb-2">🔹 Definición</h3>
      <p className="text-slate-700">
        Componentes que transmiten, transforman, almacenan o limitan movimiento y fuerza dentro de un sistema.
        Representan la <strong>función</strong>, no el diseño constructivo.
      </p>
    </div>

    <SubTitle>Tipos Principales</SubTitle>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card title="Pesos" icon={Anchor}>
        Generan fuerza por gravedad (ej. válvulas de seguridad con peso).
      </Card>
      <Card title="Resortes (Muelles)" icon={Wind}>
        Usados para contrafuerza, retorno automático o almacenamiento de energía.
      </Card>
      <Card title="Membranas y Diafragmas" icon={Disc}>
        Separan medios o transmiten presión.
      </Card>
      <Card title="Articulaciones" icon={GitCommit}>
        Permiten movimiento en dos o más dimensiones (ej. junta cardán).
      </Card>
      <Card title="Cojinetes (Bearings)" icon={Settings}>
        Soportan ejes y reducen fricción.
      </Card>
      <Card title="Engranajes" icon={Settings}>
        Transmiten movimiento rotacional.
      </Card>
      <Card title="Embragues y Frenos" icon={Disc}>
        Pueden estar enganchados/aplicados o liberados en estado no accionado.
      </Card>
      <Card title="Ruedas y Bolas" icon={Disc}>
        Facilitan el desplazamiento o transmisión de movimiento.
      </Card>
    </div>
  </div>
);

const PipesContent = () => (
  <div className="space-y-6 animate-in fade-in duration-500">
    <SectionTitle>3. Elementos de Tubería y Ductos</SectionTitle>
    
    <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg mb-6">
      <h3 className="font-bold text-indigo-900">🔹 Función</h3>
      <p className="text-indigo-800">
        Controlan, miden, protegen o modifican el flujo de fluidos o gases en un sistema. Esenciales en diagramas P&ID.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <SubTitle>Control y Medición</SubTitle>
        <ul className="bg-white rounded-lg border p-4 space-y-3 shadow-sm">
          <ListItem><strong>Restrictores:</strong> Limitan el caudal.</ListItem>
          <ListItem><strong>Placas de orificio:</strong> Generan caída de presión para medición.</ListItem>
          <ListItem><strong>Elemento Venturi:</strong> Diferencia de presión por perfil convergente-divergente.</ListItem>
          <ListItem><strong>Boquillas de flujo:</strong> Normales o críticas.</ListItem>
          <ListItem><strong>Visor (Mirilla):</strong> Inspección visual.</ListItem>
        </ul>
      </div>

      <div>
        <SubTitle>Seguridad y Otros</SubTitle>
        <ul className="bg-white rounded-lg border p-4 space-y-3 shadow-sm">
          <ListItem><strong>Disco de ruptura:</strong> Protección contra sobrepresión.</ListItem>
          <ListItem><strong>Silenciador:</strong> Reducción de ruido.</ListItem>
          <ListItem><strong>Arrestador de llama:</strong> Seguridad contra fuego.</ListItem>
          <ListItem><strong>Ciegos y bridas:</strong> Representados abiertos o cerrados.</ListItem>
          <ListItem><strong>Sifón / Embudo de drenaje / Chimenea.</strong></ListItem>
        </ul>
      </div>
    </div>
  </div>
);

const StorageContent = () => (
  <div className="space-y-6 animate-in fade-in duration-500">
    <SectionTitle>4. Dispositivos de Almacenamiento</SectionTitle>
    
    <p className="text-lg text-slate-700 mb-4">
      Elementos diseñados para contener materiales, fluidos o gases, ya sea a presión atmosférica o presurizados.
    </p>

    <div className="grid md:grid-cols-3 gap-4 mb-6">
      <div className="col-span-1 md:col-span-2 bg-white p-5 rounded-lg border shadow-sm">
        <h3 className="font-bold text-slate-800 mb-3 border-b pb-2">Tipos Principales</h3>
        <div className="grid grid-cols-2 gap-2">
          <ul className="space-y-2 text-sm text-slate-600">
            <ListItem>Tanques atmosféricos</ListItem>
            <ListItem>Recipientes a presión/vacío</ListItem>
            <ListItem>Búnkeres</ListItem>
            <ListItem>Gasómetros</ListItem>
          </ul>
          <ul className="space-y-2 text-sm text-slate-600">
            <ListItem>Almacenes abiertos</ListItem>
            <ListItem>Estanterías</ListItem>
            <ListItem>Barriles y Sacos</ListItem>
            <ListItem>Recipientes con camisa</ListItem>
          </ul>
        </div>
      </div>
      
      <div className="col-span-1 bg-yellow-50 p-5 rounded-lg border border-yellow-200">
        <h3 className="font-bold text-yellow-800 mb-2 flex items-center gap-2">
          <Info className="w-4 h-4" /> Nota de Geometría
        </h3>
        <p className="text-sm text-yellow-900">
          La norma permite modificar la forma del símbolo cuando la geometría es relevante (ej. fondo cónico, techo flotante).
        </p>
      </div>
    </div>
  </div>
);

const RulesContent = () => (
  <div className="space-y-6 animate-in fade-in duration-500">
    <SectionTitle>5. Reglas de Aplicación</SectionTitle>

    <div className="flex flex-col md:flex-row gap-6 items-start">
      <div className="flex-1">
        <p className="text-slate-700 mb-4">
          Garantizan que los símbolos se usen de manera coherente y sin ambigüedad en diagramas de proceso, mecánicos y de control.
        </p>
        
        <div className="space-y-4">
          <div className="flex gap-4 p-4 bg-white rounded-lg border-l-4 border-green-500 shadow-sm">
            <ShieldCheck className="w-6 h-6 text-green-600 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-slate-800">Función vs. Construcción</h4>
              <p className="text-sm text-slate-600">El símbolo representa la función, no el detalle constructivo exacto.</p>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-white rounded-lg border-l-4 border-blue-500 shadow-sm">
            <Settings className="w-6 h-6 text-blue-600 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-slate-800">Adaptabilidad</h4>
              <p className="text-sm text-slate-600">La forma puede adaptarse si es funcionalmente significativa. Detalles obvios pueden omitirse.</p>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-white rounded-lg border-l-4 border-purple-500 shadow-sm">
            <Layers className="w-6 h-6 text-purple-600 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-slate-800">Combinación</h4>
              <p className="text-sm text-slate-600">Los símbolos pueden combinarse con otros de la serie ISO 14617 (válvulas, actuadores).</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const MapContent = () => (
  <div className="space-y-6 animate-in fade-in duration-500">
    <SectionTitle>6. Relación con el Mapa Mental</SectionTitle>

    <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
      <table className="min-w-full bg-white">
        <thead className="bg-slate-50">
          <tr>
            <th className="py-3 px-6 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Concepto del mapa</th>
            <th className="py-3 px-6 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Contenido según la norma</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          <tr>
            <td className="py-4 px-6 font-medium text-slate-900">Elementos Mecánicos</td>
            <td className="py-4 px-6 text-slate-600">Transmisión y control de movimiento</td>
          </tr>
          <tr>
            <td className="py-4 px-6 font-medium text-slate-900">Tubería y Ductos</td>
            <td className="py-4 px-6 text-slate-600">Control, medición y protección del flujo</td>
          </tr>
          <tr>
            <td className="py-4 px-6 font-medium text-slate-900">Almacenamiento</td>
            <td className="py-4 px-6 text-slate-600">Contención de fluidos y materiales</td>
          </tr>
          <tr>
            <td className="py-4 px-6 font-medium text-slate-900">Reglas de Aplicación</td>
            <td className="py-4 px-6 text-slate-600">Uso correcto y consistente de símbolos</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const ConclusionContent = () => (
  <div className="space-y-6 animate-in fade-in duration-500 text-center py-8">
    <div className="inline-flex items-center justify-center p-4 bg-green-100 rounded-full mb-4">
      <CheckCircle className="w-12 h-12 text-green-600" />
    </div>
    
    <h2 className="text-3xl font-bold text-slate-800">¡Lección Completada!</h2>
    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
      La ISO 14617-7 proporciona el lenguaje gráfico esencial para representar la mecánica básica en diagramas técnicos.
    </p>

    <div className="bg-white p-6 rounded-xl shadow-md max-w-3xl mx-auto text-left border mt-8">
      <h3 className="font-bold text-slate-800 mb-4 text-lg">Beneficios de dominar esta norma:</h3>
      <div className="grid gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">1</div>
          <span className="text-slate-700">Leer y diseñar diagramas de proceso y mecánicos con precisión.</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">2</div>
          <span className="text-slate-700">Interpretar correctamente sistemas industriales complejos.</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">3</div>
          <span className="text-slate-700">Integrar componentes mecánicos con válvulas y control estandarizado.</span>
        </div>
      </div>
    </div>
  </div>
);

// --- Componente Principal ---

export default function App() {
  const [activeTab, setActiveTab] = useState(0);

  const renderContent = () => {
    switch (activeTab) {
      case 0: return <IntroContent />;
      case 1: return <MechanicalContent />;
      case 2: return <PipesContent />;
      case 3: return <StorageContent />;
      case 4: return <RulesContent />;
      case 5: return <MapContent />;
      case 6: return <ConclusionContent />;
      default: return <IntroContent />;
    }
  };

  const nextTab = () => {
    if (activeTab < TABS.length - 1) setActiveTab(prev => prev + 1);
  };

  const prevTab = () => {
    if (activeTab > 0) setActiveTab(prev => prev - 1);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-12">
      {/* Header */}
      <header className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <div>
              <h1 className="text-xl md:text-2xl font-bold tracking-tight">Componentes Mecánicos Básicos</h1>
              <p className="text-slate-400 text-sm">Norma ISO 14617-7:2002</p>
            </div>
            <div className="hidden md:block text-xs bg-slate-800 px-3 py-1 rounded-full text-slate-300">
              Lección Interactiva
            </div>
          </div>
        </div>
        
        {/* Navigation Tabs (Scrollable on mobile) */}
        <div className="bg-white border-b border-slate-200 shadow-sm">
          <div className="max-w-5xl mx-auto px-2">
            <div className="flex overflow-x-auto no-scrollbar gap-1 py-1">
              {TABS.map((tab, index) => {
                const Icon = tab.icon;
                const isActive = activeTab === index;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(index)}
                    className={`
                      flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors whitespace-nowrap border-b-2
                      ${isActive 
                        ? 'border-blue-600 text-blue-700 bg-blue-50' 
                        : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50'}
                    `}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                    <span className="hidden sm:inline">{tab.title}</span>
                    <span className="sm:hidden">{tab.shortTitle}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 min-h-[500px] flex flex-col">
          {/* Content Padding */}
          <div className="p-6 md:p-10 flex-grow">
            {renderContent()}
          </div>

          {/* Footer Navigation within Card */}
          <div className="bg-slate-50 border-t p-4 rounded-b-xl flex justify-between items-center">
            <button 
              onClick={prevTab}
              disabled={activeTab === 0}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors
                ${activeTab === 0 
                  ? 'text-slate-300 cursor-not-allowed' 
                  : 'text-slate-600 hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-200'}
              `}
            >
              <ChevronLeft className="w-4 h-4" /> Anterior
            </button>
            
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
              Sección {activeTab + 1} de {TABS.length}
            </div>

            <button 
              onClick={nextTab}
              disabled={activeTab === TABS.length - 1}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors
                ${activeTab === TABS.length - 1 
                  ? 'text-slate-300 cursor-not-allowed' 
                  : 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm'}
              `}
            >
              Siguiente <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </main>
      
      {/* Global Style for scrollbar hiding if needed */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}