import React, { useState } from 'react';
import { 
  BookOpen, 
  Filter, 
  FlaskConical, 
  Shuffle, 
  Wind, 
  Map, 
  CheckCircle, 
  ChevronRight, 
  ChevronLeft,
  Info,
  
  Zap,
  Settings
} from 'lucide-react';

// --- Interfaces & Types ---
interface TabConfig {
  id: string;
  label: string;
  icon: React.ElementType;
}

// --- Configuration ---
const TABS: TabConfig[] = [
  { id: 'intro', label: '1. Generalidades', icon: BookOpen },
  { id: 'separation', label: '2. Separación', icon: Filter },
  { id: 'purification', label: '3. Purificación', icon: FlaskConical },
  { id: 'mixing', label: '4. Mezcla', icon: Shuffle },
  { id: 'pneumatic', label: '5. Neumática', icon: Wind },
  { id: 'relation', label: '6. Relaciones', icon: Map },
  { id: 'conclusion', label: '7. Cierre', icon: CheckCircle },
];

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('intro');

  const handleNext = () => {
    const currentIndex = TABS.findIndex(t => t.id === activeTab);
    if (currentIndex < TABS.length - 1) {
      setActiveTab(TABS[currentIndex + 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    const currentIndex = TABS.findIndex(t => t.id === activeTab);
    if (currentIndex > 0) {
      setActiveTab(TABS[currentIndex - 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'intro':
        return <IntroSection />;
      case 'separation':
        return <SeparationSection />;
      case 'purification':
        return <PurificationSection />;
      case 'mixing':
        return <MixingSection />;
      case 'pneumatic':
        return <PneumaticSection />;
      case 'relation':
        return <RelationSection />;
      case 'conclusion':
        return <ConclusionSection />;
      default:
        return <IntroSection />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Header */}
      <header className="bg-slate-900 text-white p-6 shadow-lg">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="text-blue-400" size={28} />
            <h1 className="text-2xl md:text-3xl font-bold">Norma ISO 14617-12:2002</h1>
          </div>
          <p className="text-slate-300 text-lg">Dispositivos de Separación, Purificación y Mezcla</p>
        </div>
      </header>

      {/* Main Layout */}
      <main className="max-w-5xl mx-auto p-4 md:p-6 flex flex-col md:flex-row gap-6">
        
        {/* Sidebar Navigation (Desktop) / Top Scroll (Mobile) */}
        <nav className="md:w-64 flex-shrink-0">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 sticky top-6 overflow-hidden">
            <div className="p-4 bg-slate-100 border-b border-slate-200 font-semibold text-slate-700">
              Índice de la Lección
            </div>
            <ul className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible custom-scrollbar">
              {TABS.map((tab) => (
                <li key={tab.id}>
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 p-4 text-sm font-medium transition-all whitespace-nowrap md:whitespace-normal
                      ${activeTab === tab.id 
                        ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600' 
                        : 'text-slate-600 hover:bg-slate-50 border-l-4 border-transparent'
                      }`}
                  >
                    <tab.icon size={18} className={activeTab === tab.id ? 'text-blue-600' : 'text-slate-400'} />
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Content Area */}
        <div className="flex-1 min-w-0">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 min-h-[500px] p-6 md:p-8 animate-fadeIn">
            {renderContent()}
          </div>

          {/* Bottom Navigation Buttons */}
          <div className="mt-6 flex justify-between">
            <button 
              onClick={handlePrev}
              disabled={activeTab === 'intro'}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={20} />
              Anterior
            </button>
            <button 
              onClick={handleNext}
              disabled={activeTab === 'conclusion'}
              className="flex items-center gap-2 px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-md transition-colors"
            >
              Siguiente
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

// --- Sub-Components for Content ---

const SectionHeader: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div className="mb-8 border-b border-slate-100 pb-4">
    <h2 className="text-2xl font-bold text-slate-800 mb-2">{title}</h2>
    {subtitle && <p className="text-slate-500 italic">{subtitle}</p>}
  </div>
);

const Card: React.FC<{ title: string; children: React.ReactNode; icon?: React.ElementType; color?: string }> = ({ title, children, icon: Icon, color = "blue" }) => {
  const colorClasses: Record<string, string> = {
    blue: "bg-blue-50 border-blue-100 text-blue-700",
    emerald: "bg-emerald-50 border-emerald-100 text-emerald-700",
    amber: "bg-amber-50 border-amber-100 text-amber-700",
    purple: "bg-purple-50 border-purple-100 text-purple-700",
  };

  return (
    <div className="bg-white rounded-lg border border-slate-200 overflow-hidden mb-6 hover:shadow-md transition-shadow">
      <div className={`px-4 py-3 border-b flex items-center gap-2 font-semibold ${colorClasses[color] || colorClasses.blue}`}>
        {Icon && <Icon size={18} />}
        {title}
      </div>
      <div className="p-4 text-slate-600 leading-relaxed">
        {children}
      </div>
    </div>
  );
};

const IntroSection = () => (
  <>
    <SectionHeader title="1. Información General y Alcance" subtitle="ISO 14617-12:2002" />
    <p className="mb-6 text-slate-700 leading-relaxed">
      La <strong>ISO 14617-12:2002</strong> forma parte de la serie internacional de símbolos gráficos para diagramas. 
      Su objetivo es estandarizar la representación visual de equipos críticos en ingeniería.
    </p>

    <div className="grid md:grid-cols-2 gap-6">
      <Card title="¿Qué especifica?" icon={Settings} color="blue">
        <ul className="list-disc list-inside space-y-2">
          <li>Dispositivos de <strong>separación</strong>.</li>
          <li>Dispositivos de <strong>purificación</strong>.</li>
          <li>Dispositivos de <strong>mezcla</strong>.</li>
          <li>Acondicionadores de aire para sistemas neumáticos.</li>
        </ul>
      </Card>

      <Card title="Áreas de Aplicación" icon={Map} color="emerald">
        <ul className="list-disc list-inside space-y-2">
          <li>Diagramas de proceso (P&ID).</li>
          <li>Plantas químicas y de tratamiento.</li>
          <li>Sistemas neumáticos e industriales.</li>
        </ul>
      </Card>
    </div>

    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded text-sm text-amber-800">
      <strong>Nota Importante:</strong> La norma establece que la función del dispositivo debe entenderse gráficamente, 
      sin depender de texto adicional.
    </div>
  </>
);

const SeparationSection = () => (
  <>
    <SectionHeader title="2. Dispositivos de Separación" />
    
    <div className="mb-8">
      <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
        <Info size={20} className="text-blue-500" /> Concepto General
      </h3>
      <p className="text-slate-600 mb-4">
        Un dispositivo de separación divide una mezcla en dos o más fases o componentes utilizando principios físicos.
      </p>
      <div className="flex flex-wrap gap-2">
        {['Tamaño de partícula', 'Densidad', 'Fuerzas centrífugas', 'Campos eléctricos/magnéticos', 'Interacción térmica'].map((tag) => (
          <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm border border-slate-200">
            {tag}
          </span>
        ))}
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <Card title="Símbolos Básicos (Elementos)" color="purple">
        <ul className="space-y-1 text-sm">
          <li>• Dispositivo de separación (símbolo base)</li>
          <li>• Envolvente o tanque</li>
          <li>• Elemento filtrante o tamiz</li>
          <li>• Lecho filtrante fijo / fluidizado</li>
          <li>• Rascador / Disco con cuchilla</li>
          <li>• Placa de impacto</li>
          <li>• Rotor de centrífuga</li>
          <li>• Boquilla de aspersión</li>
        </ul>
      </Card>

      <Card title="Ejemplos de Equipos Reales" color="blue">
        <ul className="space-y-1 text-sm">
          <li>• Filtros (bolsa, cartucho, rotativos)</li>
          <li>• Separadores ciclónicos</li>
          <li>• Centrífugas de alta velocidad</li>
          <li>• Separadores magnéticos/electrostáticos</li>
          <li>• Columnas de fraccionamiento</li>
        </ul>
      </Card>
    </div>

    <div className="mt-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
      <h4 className="font-semibold text-slate-800 mb-2">Reglas de Aplicación</h4>
      <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
        <li>El símbolo de envolvente solo se usa si la forma del recipiente es relevante.</li>
        <li>El símbolo puede adaptarse geométricamente si influye en el funcionamiento.</li>
        <li>Los símbolos suplementarios reemplazan el asterisco (*) del símbolo base.</li>
      </ul>
    </div>
  </>
);

const PurificationSection = () => (
  <>
    <SectionHeader title="3. Dispositivos de Purificación por Conversión" />
    
    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-6 text-center">
      <h3 className="text-xl font-bold text-blue-800 mb-2">Definición Clave</h3>
      <p className="text-blue-700">
        Estos dispositivos eliminan contaminantes <strong>transformándolos químicamente</strong>, 
        a diferencia de la separación física.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <Card title="Símbología" icon={FlaskConical} color="amber">
        <p className="mb-3">La norma define un símbolo general de <strong>Purificador por conversión</strong>.</p>
        <p className="text-sm font-semibold">El asterisco (*):</p>
        <ul className="list-disc list-inside text-sm text-slate-600 ml-2">
          <li>Se reemplaza por el símbolo del método.</li>
          <li>O se elimina si no es necesario indicar el método.</li>
        </ul>
      </Card>

      <Card title="Tipo Principal: Catalítico" icon={Zap} color="purple">
        <p className="mb-3">Se identifica comúnmente mediante el símbolo <strong>“CAT”</strong>.</p>
        <p className="text-sm font-semibold">Usos comunes:</p>
        <ul className="list-disc list-inside text-sm text-slate-600 ml-2">
          <li>Tratamiento de gases.</li>
          <li>Control de emisiones.</li>
          <li>Procesos químicos y ambientales.</li>
        </ul>
      </Card>
    </div>
  </>
);

const MixingSection = () => (
  <>
    <SectionHeader title="4. Dispositivos de Mezcla" />

    <div className="flex flex-col md:flex-row gap-6 mb-8">
      <div className="flex-1">
        <h3 className="text-lg font-bold text-slate-800 mb-3">Concepto</h3>
        <p className="text-slate-600">
          Los dispositivos de mezcla combinan dos o más sustancias para obtener una 
          <strong> composición uniforme</strong>, sin separación de fases.
        </p>
      </div>
      <div className="flex-1 bg-slate-50 p-4 rounded-lg border border-slate-200">
        <h4 className="text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Regla Clave</h4>
        <p className="text-sm text-slate-600 italic">
          "El dispositivo de mezcla puede representarse directamente con el símbolo base o dentro de una envolvente (tanque), si esta es funcionalmente relevante."
        </p>
      </div>
    </div>

    <div className="grid md:grid-cols-3 gap-4">
      {[
        { title: "Símbolos Básicos", items: ["Dispositivo de mezcla (base)", "Elemento mezclador rotativo", "Elemento mezclador estático"] },
        { title: "Tipos Rotativos", items: ["Mezcladores en tanque", "Agitadores", "Mezcladores rotativos en línea"] },
        { title: "Tipos Estáticos", items: ["Mezcladores estáticos en línea", "Tubos mezcladores"] }
      ].map((card, idx) => (
        <div key={idx} className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
          <h5 className="font-bold text-blue-600 mb-3 text-sm">{card.title}</h5>
          <ul className="space-y-2">
            {card.items.map((item, i) => (
              <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span> {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </>
);

const PneumaticSection = () => (
  <>
    <SectionHeader title="5. Acondicionadores de Aire Neumáticos" />

    <div className="flex items-start gap-4 mb-6">
      <div className="bg-emerald-100 p-3 rounded-full text-emerald-600">
        <Wind size={32} />
      </div>
      <div>
        <h3 className="text-lg font-bold text-slate-800">Función Principal</h3>
        <p className="text-slate-600">Prepara el aire comprimido antes de su uso en sistemas de automatización y potencia fluida.</p>
      </div>
    </div>

    <Card title="Representación Simplificada" color="emerald">
      <p className="mb-4">
        La norma permite usar un <strong>símbolo único</strong> que representa el conjunto completo (unidad FRL), sin necesidad de dibujar cada componente por separado.
      </p>
      
      <div className="bg-white border border-slate-200 rounded p-3">
        <p className="text-sm font-semibold mb-2">Elementos que incluye típicamente:</p>
        <div className="grid grid-cols-2 gap-2">
          {['Filtro', 'Regulador de presión', 'Manómetro', 'Lubricador'].map(item => (
            <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
              <CheckCircle size={14} className="text-emerald-500" /> {item}
            </div>
          ))}
        </div>
      </div>
    </Card>
  </>
);

const RelationSection = () => (
  <>
    <SectionHeader title="6. Relación con el Mapa Mental" />
    <p className="mb-6 text-slate-600">Guía rápida para localizar los conceptos en la norma oficial.</p>

    <div className="overflow-hidden rounded-lg border border-slate-200 shadow-sm">
      <table className="w-full text-left text-sm">
        <thead className="bg-slate-100 text-slate-700">
          <tr>
            <th className="p-4 font-bold border-b border-slate-200">Concepto del Mapa</th>
            <th className="p-4 font-bold border-b border-slate-200">Sección ISO 14617-12</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {[
            { concept: "Información general ISO", section: "Secciones 1 a 3" },
            { concept: "Dispositivos de separación", section: "Sección 4" },
            { concept: "Purificación por conversión", section: "Sección 5" },
            { concept: "Dispositivos de mezcla", section: "Sección 6" },
            { concept: "Acondicionadores neumáticos", section: "Sección 7" },
          ].map((row, index) => (
            <tr key={index} className="hover:bg-slate-50 transition-colors">
              <td className="p-4 text-slate-800 font-medium">{row.concept}</td>
              <td className="p-4 text-blue-600 font-mono bg-blue-50/30">{row.section}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
);

const ConclusionSection = () => (
  <>
    <SectionHeader title="7. Cierre de la Lección" />
    
    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-8 shadow-lg text-center">
      <CheckCircle size={48} className="mx-auto mb-4 text-blue-200" />
      <h3 className="text-2xl font-bold mb-4">Resumen Final</h3>
      <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
        La ISO 14617-12 proporciona el lenguaje gráfico estandarizado para procesos de separación, purificación y mezcla.
      </p>

      <div className="grid md:grid-cols-3 gap-4 text-left">
        {[
          "Leer correctamente diagramas de proceso complejos (P&ID).",
          "Identificar el principio físico o químico de cada equipo.",
          "Evitar ambigüedades e integrar dispositivos con sistemas de control."
        ].map((item, i) => (
          <div key={i} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
            <p className="text-sm font-medium">{item}</p>
          </div>
        ))}
      </div>
    </div>
  </>
);

export default App;