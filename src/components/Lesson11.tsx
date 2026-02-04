import React, { useState } from 'react';
import { 
  BookOpen, 
  Wind, 
  Zap, 
  AlertTriangle, 
  Settings, 
  Droplets, 
  Snowflake, 
  ArrowRight, 
  CheckCircle2, 
  Info,
  Menu,
  ChevronRight,
  RotateCw
} from 'lucide-react';

// --- Tipos e Interfaces ---
type SectionId = 'intro' | 'mecanicos' | 'arrastre' | 'electricas' | 'definiciones' | 'mapa' | 'cierre';

interface Section {
  id: SectionId;
  title: string;
  icon: React.ReactNode;
}

// --- Datos de Configuración ---
const sections: Section[] = [
  { id: 'intro', title: '1. Introducción', icon: <BookOpen className="w-4 h-4" /> },
  { id: 'mecanicos', title: '2. Bombas Mecánicas', icon: <Settings className="w-4 h-4" /> },
  { id: 'arrastre', title: '3. Arrastre y Atrapamiento', icon: <Wind className="w-4 h-4" /> },
  { id: 'electricas', title: '4. Bombas Eléctricas', icon: <Zap className="w-4 h-4" /> },
  { id: 'definiciones', title: '5. Definiciones', icon: <Info className="w-4 h-4" /> },
  { id: 'mapa', title: '6. Mapa Mental', icon: <Menu className="w-4 h-4" /> },
  { id: 'cierre', title: '7. Cierre', icon: <CheckCircle2 className="w-4 h-4" /> },
];

// --- Componentes de Contenido ---

const IntroSection = () => (
  <div className="space-y-6 animate-fadeIn">
    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
      <h3 className="text-xl font-bold text-blue-900 mb-2">Objetivo de la Norma</h3>
      <p className="text-blue-800">
        La <strong>ISO 14617-9:2002</strong> define los símbolos gráficos usados en diagramas técnicos para bombas, compresores y ventiladores, 
        utilizados principalmente para el transporte de fluidos y gases en sistemas industriales.
      </p>
    </div>

    <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 flex flex-col sm:flex-row gap-4">
      <div className="flex-shrink-0">
        <AlertTriangle className="w-8 h-8 text-amber-600" />
      </div>
      <div>
        <h4 className="font-bold text-amber-800 text-lg mb-2">Puntos Importantes</h4>
        <ul className="list-disc list-inside space-y-2 text-amber-900">
          <li>
            <strong>No cubre conversión de energía:</strong> Las bombas para sistemas de potencia fluida corresponden a la ISO 14617-10.
          </li>
          <li>
            <strong>Abstracción funcional:</strong> Los símbolos representan la <em>función</em> del equipo, no su diseño constructivo detallado.
          </li>
        </ul>
      </div>
    </div>
  </div>
);

const MechanicalSection = () => (
  <div className="space-y-8 animate-fadeIn">
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
      <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2 mb-4">
        <Settings className="w-6 h-6 text-indigo-600" />
        Concepto General
      </h3>
      <p className="text-slate-600">
        Son equipos accionados por energía mecánica (ejes, motores externos) que aumentan la energía del fluido para permitir su desplazamiento.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
        <h4 className="font-bold text-slate-700 mb-3 border-b border-slate-200 pb-2">Símbolos Básicos</h4>
        <ul className="space-y-2 text-slate-600 text-sm">
          <li className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-500 rounded-full"></div> Bomba de líquido</li>
          <li className="flex items-center gap-2"><div className="w-2 h-2 bg-cyan-500 rounded-full"></div> Bomba de gas (y vacío)</li>
          <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div> Compresor</li>
          <li className="flex items-center gap-2"><div className="w-2 h-2 bg-orange-500 rounded-full"></div> Ventilador</li>
        </ul>
      </div>

      <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
        <h4 className="font-bold text-slate-700 mb-3 border-b border-slate-200 pb-2">Información Suplementaria</h4>
        <p className="text-sm text-slate-600 mb-2">Los símbolos pueden complementarse para indicar:</p>
        <div className="flex flex-wrap gap-2">
          {['Ajustabilidad', 'Tipo de flujo', 'Sentido rotación', 'Velocidad', 'Reversible'].map((tag) => (
            <span key={tag} className="px-2 py-1 bg-white border border-slate-300 rounded text-xs text-slate-600 font-medium shadow-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>

    <div>
      <h4 className="font-bold text-slate-800 mb-4 text-lg">Clasificación Funcional</h4>
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { title: 'Desplazamiento Positivo', desc: 'Aumentan la energía en una cámara de volumen variable.', icon: <ArrowRight className="text-blue-500" /> },
          { title: 'Rotodinámicas', desc: 'Utilizan un impulsor rotativo (ej. centrífugas).', icon: <RotateCw className="text-green-500" /> },
          { title: 'Turbo-moleculares', desc: 'Usadas en vacío, con discos y álabes de alta velocidad.', icon: <Wind className="text-purple-500" /> },
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-2">{item.icon}</div>
            <h5 className="font-bold text-slate-800 mb-1">{item.title}</h5>
            <p className="text-xs text-slate-500">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const EntrainmentSection = () => (
  <div className="space-y-8 animate-fadeIn">
    <div className="bg-indigo-50 p-6 rounded-lg mb-6">
      <h3 className="text-lg font-semibold text-indigo-900 mb-2">Definición General</h3>
      <p className="text-indigo-800">
        Estas bombas se usan principalmente en <strong>sistemas de vacío</strong> y funcionan sin cámaras de compresión convencionales.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      {/* Columna Arrastre */}
      <div className="bg-white rounded-xl shadow border-t-4 border-cyan-500 overflow-hidden">
        <div className="bg-cyan-50 p-4 border-b border-cyan-100 flex items-center gap-3">
          <Droplets className="text-cyan-600" />
          <h3 className="font-bold text-cyan-900">Bombas de Arrastre (Entrainment)</h3>
        </div>
        <div className="p-6">
          <p className="text-slate-600 mb-4 text-sm">
            Funcionan impartiendo cantidad de movimiento a las moléculas del gas. Suelen requerir indicar el fluido mediante símbolo químico.
          </p>
          <h4 className="font-bold text-xs uppercase text-slate-400 mb-2 tracking-wider">Ejemplos</h4>
          <ul className="space-y-2">
            {['Bomba eyectora', 'Bomba de difusión', 'Bomba gas-lift'].map(item => (
              <li key={item} className="flex items-center gap-2 text-slate-700 text-sm">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Columna Atrapamiento */}
      <div className="bg-white rounded-xl shadow border-t-4 border-purple-500 overflow-hidden">
        <div className="bg-purple-50 p-4 border-b border-purple-100 flex items-center gap-3">
          <Snowflake className="text-purple-600" />
          <h3 className="font-bold text-purple-900">Bombas de Atrapamiento</h3>
        </div>
        <div className="p-6">
          <p className="text-slate-600 mb-4 text-sm">
            Funcionan reteniendo moléculas de gas por adsorción, condensación o reacción química. El asterisco se sustituye por el material absorbente.
          </p>
          <h4 className="font-bold text-xs uppercase text-slate-400 mb-2 tracking-wider">Mecanismos</h4>
          <div className="flex gap-2 mb-4">
            <span className="px-2 py-1 bg-slate-100 rounded text-xs text-slate-600">Adsorción</span>
            <span className="px-2 py-1 bg-slate-100 rounded text-xs text-slate-600">Condensación</span>
          </div>
          <h4 className="font-bold text-xs uppercase text-slate-400 mb-2 tracking-wider">Ejemplos</h4>
          <ul className="space-y-2">
            {['Bomba getter', 'Bomba getter iónica', 'Criobomba'].map(item => (
              <li key={item} className="flex items-center gap-2 text-slate-700 text-sm">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const ElectricSection = () => (
  <div className="animate-fadeIn space-y-6">
    <div className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white p-8 rounded-2xl shadow-lg mb-8">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-white/20 rounded-full">
          <Zap className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold">Bombas Eléctricas</h2>
      </div>
      <p className="text-yellow-50 text-lg max-w-2xl">
        Son bombas en las que la energía eléctrica se introduce directamente en el fluido, sin partes mecánicas móviles convencionales.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="border border-slate-200 rounded-xl p-6 hover:border-yellow-400 transition-colors bg-white">
        <h3 className="font-bold text-slate-800 text-lg mb-3">Bomba eléctrica de líquido</h3>
        <p className="text-slate-600">
          Utilizan principios físicos directos, por ejemplo, el <strong>efecto piezoeléctrico</strong>, para desplazar líquidos sin motores rotativos.
        </p>
      </div>

      <div className="border border-slate-200 rounded-xl p-6 hover:border-yellow-400 transition-colors bg-white">
        <h3 className="font-bold text-slate-800 text-lg mb-3">Bomba de inducción eléctrica</h3>
        <p className="text-slate-600">
          Utiliza <strong>campos electromagnéticos</strong> para mover el fluido. Es común en el transporte de metales líquidos (como en reactores nucleares).
        </p>
      </div>
    </div>
    
    <p className="text-center text-slate-500 text-sm mt-8 italic">
      "La norma permite versiones detalladas o simplificadas del símbolo, dependiendo del nivel de detalle del diagrama."
    </p>
  </div>
);

const DefinitionSection = () => (
  <div className="animate-fadeIn">
    <div className="mb-6">
      <h3 className="text-2xl font-bold text-slate-800 mb-2">Definiciones Clave</h3>
      <p className="text-slate-600">
        La norma establece términos esenciales para evitar ambigüedad y asegurar que el símbolo coincida con el principio de funcionamiento.
      </p>
    </div>

    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
        <div className="p-6 space-y-4">
          <h4 className="font-bold text-indigo-600 uppercase text-xs tracking-wider mb-4">Tipos de Flujo y Energía</h4>
          <dl className="space-y-4">
            <div>
              <dt className="font-semibold text-slate-800">Desplazamiento Positivo</dt>
              <dd className="text-slate-600 text-sm">Movimiento mediante cambio de volumen de cámara.</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-800">Rotodinámica</dt>
              <dd className="text-slate-600 text-sm">Movimiento mediante impulsor rotativo.</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-800">Capacidad</dt>
              <dd className="text-slate-600 text-sm">Volumen desplazado por ciclo.</dd>
            </div>
          </dl>
        </div>

        <div className="p-6 space-y-4">
          <h4 className="font-bold text-indigo-600 uppercase text-xs tracking-wider mb-4">Categorías de Equipo</h4>
          <dl className="space-y-4">
            <div>
              <dt className="font-semibold text-slate-800">Compresor vs. Ventilador</dt>
              <dd className="text-slate-600 text-sm">Diferenciados por la relación de presión alcanzada.</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-800">Bomba de Arrastre</dt>
              <dd className="text-slate-600 text-sm">Imparte momentum (cantidad de movimiento) molecular.</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-800">Uni-flow vs. Reversible</dt>
              <dd className="text-slate-600 text-sm">Capacidad de cambiar la dirección del flujo del fluido.</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
);

const MapSection = () => (
  <div className="animate-fadeIn flex flex-col items-center">
    <div className="max-w-3xl w-full">
      <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">Relación Estructural Norma vs. Concepto</h3>
      
      <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full -z-0"></div>

        <div className="relative z-10 grid gap-6">
            {/* Table Header */}
            <div className="grid grid-cols-2 font-bold text-slate-500 border-b-2 border-slate-100 pb-2 uppercase text-xs tracking-wider">
                <div>Concepto del Mapa</div>
                <div className="text-right">Sección en ISO 14617-9</div>
            </div>

            {/* Rows */}
            {[
                { concept: "Bombas, compresores y ventiladores mecánicos", section: "Sección 4" },
                { concept: "Bombas de arrastre y atrapamiento", section: "Sección 5" },
                { concept: "Bombas eléctricas", section: "Sección 6" },
                { concept: "Definiciones clave", section: "Sección 3" }
            ].map((row, i) => (
                <div key={i} className="grid grid-cols-2 items-center py-3 border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors rounded px-2 -mx-2">
                    <div className="font-medium text-slate-800">{row.concept}</div>
                    <div className="text-right font-mono text-indigo-600 bg-indigo-50 inline-block justify-self-end px-3 py-1 rounded text-sm">{row.section}</div>
                </div>
            ))}
        </div>
      </div>
    </div>
  </div>
);

const ClosingSection = () => (
  <div className="animate-fadeIn space-y-8">
    <div className="bg-emerald-50 p-8 rounded-2xl text-center border border-emerald-100">
      <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
      <h2 className="text-3xl font-bold text-emerald-900 mb-4">Lección Completada</h2>
      <p className="text-emerald-800 text-lg max-w-2xl mx-auto">
        La ISO 14617-9 proporciona el lenguaje gráfico universal para representar equipos de transporte de fluidos y gases.
      </p>
    </div>

    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
      <h3 className="font-bold text-slate-800 text-xl mb-6">¿Qué has logrado hoy?</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {[
          "Leer correctamente diagramas P&ID y de proceso.",
          "Diferenciar tipos de bombas (mecánicas, arrastre, eléctricas) por su símbolo.",
          "Evitar errores críticos de interpretación técnica.",
          "Entender la integración con válvulas y actuadores."
        ].map((item, idx) => (
          <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
            <div className="mt-1 bg-emerald-100 p-1 rounded-full">
               <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
            <p className="text-slate-700 font-medium">{item}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- Componente Principal ---

export default function App() {
  const [activeTab, setActiveTab] = useState<SectionId>('intro');

  const handleNext = () => {
    const currentIndex = sections.findIndex(s => s.id === activeTab);
    if (currentIndex < sections.length - 1) {
      setActiveTab(sections[currentIndex + 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    const currentIndex = sections.findIndex(s => s.id === activeTab);
    if (currentIndex > 0) {
      setActiveTab(sections[currentIndex - 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'intro': return <IntroSection />;
      case 'mecanicos': return <MechanicalSection />;
      case 'arrastre': return <EntrainmentSection />;
      case 'electricas': return <ElectricSection />;
      case 'definiciones': return <DefinitionSection />;
      case 'mapa': return <MapSection />;
      case 'cierre': return <ClosingSection />;
      default: return <IntroSection />;
    }
  };

  const currentSectionIndex = sections.findIndex(s => s.id === activeTab);
  const progress = ((currentSectionIndex + 1) / sections.length) * 100;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900 pb-20">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 text-white p-1.5 rounded">
              <BookOpen className="w-5 h-5" />
            </div>
            <h1 className="text-lg font-bold text-slate-800 hidden sm:block">ISO 14617-9:2002</h1>
            <h1 className="text-lg font-bold text-slate-800 sm:hidden">ISO 14617-9</h1>
          </div>
          <div className="text-xs font-medium px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full border border-indigo-100">
            Bombas, Compresores y Ventiladores
          </div>
        </div>
        {/* Progress Bar */}
        <div className="h-1 w-full bg-slate-100">
          <div 
            className="h-full bg-indigo-600 transition-all duration-500 ease-out" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Navigation Tabs (Scrollable on mobile) */}
        <nav className="flex space-x-1 overflow-x-auto pb-4 mb-6 scrollbar-hide border-b border-slate-200">
          {sections.map((section) => {
            const isActive = activeTab === section.id;
            return (
              <button
                key={section.id}
                onClick={() => setActiveTab(section.id)}
                className={`
                  flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200
                  ${isActive 
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200' 
                    : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-transparent hover:border-slate-200'}
                `}
              >
                {section.icon}
                {section.title.split('. ')[1] /* Show only title without number for cleaner tabs */}
              </button>
            );
          })}
        </nav>

        {/* Main Content Area */}
        <div className="bg-white min-h-[400px] p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 transition-all duration-300">
          <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-4">
            <h2 className="text-2xl font-bold text-slate-900">{sections[currentSectionIndex].title}</h2>
            <span className="text-xs font-mono text-slate-400 bg-slate-50 px-2 py-1 rounded">
              {currentSectionIndex + 1} / {sections.length}
            </span>
          </div>
          
          {renderContent()}
        </div>

        {/* Footer Navigation */}
        <div className="mt-8 flex justify-between items-center">
          <button
            onClick={handlePrev}
            disabled={currentSectionIndex === 0}
            className={`
              flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all
              ${currentSectionIndex === 0 
                ? 'opacity-0 pointer-events-none' 
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:shadow-sm'}
            `}
          >
            Anterior
          </button>

          <button
            onClick={handleNext}
            disabled={currentSectionIndex === sections.length - 1}
            className={`
              flex items-center gap-2 px-6 py-3 rounded-xl font-semibold shadow-md transition-all group
              ${currentSectionIndex === sections.length - 1
                ? 'opacity-0 pointer-events-none'
                : 'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg shadow-indigo-200'}
            `}
          >
            Siguiente
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </main>
    </div>
  );
}