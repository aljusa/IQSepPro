import React, { useState } from 'react';
import { 
  BookOpen, 
  Zap, 
  Radio, 
  Activity, 
  FileText, 
  Bookmark, 
  CheckCircle, 
  ChevronRight, 
  ChevronLeft,
  Menu,
  Info
} from 'lucide-react';

// --- Interfaces ---
interface LessonSection {
  id: string;
  title: string;
  shortTitle: string;
  icon: React.ElementType;
  content: React.ReactNode;
}

// --- Componente Principal ---
export default function App() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // --- Datos del Contenido ---
  const sections: LessonSection[] = [
    {
      id: 'intro',
      title: '1. Introducción a la norma',
      shortTitle: 'Introducción',
      icon: BookOpen,
      content: (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
            <h2 className="text-xl font-bold text-blue-900 mb-2">IEC 617-5 / ISO 14617-5</h2>
            <p className="text-blue-800">
              Parte de la serie internacional de símbolos gráficos para diagramas técnicos, dedicada a la representación normalizada de dispositivos electrónicos activos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="font-semibold text-slate-800 text-lg mb-4 border-b pb-2">Ámbito de Aplicación</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center gap-2"><Zap size={18} className="text-yellow-500" /> Dispositivos semiconductores</li>
                <li className="flex items-center gap-2"><Radio size={18} className="text-purple-500" /> Tubos electrónicos</li>
                <li className="flex items-center gap-2"><Activity size={18} className="text-green-500" /> Detectores de radiación</li>
                <li className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-cyan-400" /> Dispositivos electroquímicos</li>
              </ul>
            </div>
            
            <div className="bg-slate-800 text-white p-6 rounded-xl shadow-lg flex flex-col justify-center">
              <h3 className="font-bold text-lg mb-2 text-blue-300">Objetivo Principal</h3>
              <p className="leading-relaxed">
                Garantizar una interpretación clara y uniforme de los esquemas eléctricos y electrónicos, independientemente del fabricante, país o idioma.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'semiconductores',
      title: '2. Dispositivos Semiconductores',
      shortTitle: 'Semiconductores',
      icon: Zap,
      content: (
        <div className="space-y-8 animate-fadeIn">
          <div className="prose max-w-none text-slate-600">
            <p className="text-lg">
              Un dispositivo semiconductor es un componente electrónico cuya conductividad puede controlarse mediante polarización eléctrica, luz, campo magnético o temperatura. La norma define símbolos básicos basados en la <strong>función</strong>, no en la construcción física.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Tarjeta Diodos */}
            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-6l-6 5v-10l6 5z"/><line x1="22" y1="12" x2="22" y2="12"/><line x1="2" y1="12" x2="10" y2="12"/><line x1="10" y1="7" x2="10" y2="17"/></svg>
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Diodos</h3>
              <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside">
                <li>Rectificador</li>
                <li>Zener</li>
                <li>LED (Emisor de luz)</li>
                <li>Fotodiodo</li>
                <li>Schottky</li>
              </ul>
            </div>

            {/* Tarjeta Transistores */}
            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center mb-4 text-indigo-600">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 12v-4"/><path d="M12 12l4 4"/><path d="M12 12l-4 4"/></svg>
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Transistores</h3>
              <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside">
                <li>Bipolares (NPN y PNP)</li>
                <li>Efecto de campo (FET)</li>
                <li>MOSFET</li>
              </ul>
            </div>

            {/* Tarjeta Tiristores */}
            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 bg-orange-100 rounded-full flex items-center justify-center mb-4 text-orange-600">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Tiristores</h3>
              <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside">
                <li>SCR</li>
                <li>Triac</li>
                <li>Diac</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-100 p-4 rounded-lg flex items-start gap-3">
             <Info className="text-slate-500 mt-1 shrink-0" />
             <p className="text-sm text-slate-700">
               <strong>Nota:</strong> También se incluyen dispositivos sensibles a la luz y al campo magnético. Los símbolos se construyen a partir de elementos gráficos normalizados para mantener la coherencia.
             </p>
          </div>
        </div>
      )
    },
    {
      id: 'tubos',
      title: '3. Tubos Electrónicos',
      shortTitle: 'Tubos Electrónicos',
      icon: Radio,
      content: (
        <div className="space-y-6 animate-fadeIn">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">¿Qué son?</h3>
              <p className="text-slate-600 mb-4">
                Dispositivos que controlan el flujo de electrones en el vacío o en gases ionizados. Aunque hoy son menos comunes, son cruciales en:
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Alta Potencia</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Radiofrecuencia</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Ciencia</span>
              </div>
            </div>
            <div className="w-full md:w-1/3 bg-slate-200 h-32 rounded-lg flex items-center justify-center text-slate-400">
              <Radio size={48} strokeWidth={1.5} />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-4 border-t pt-6 border-slate-200">
            <div>
              <h4 className="font-bold text-slate-700 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Elementos Básicos
              </h4>
              <ul className="space-y-2 text-slate-600 ml-4 border-l-2 border-slate-200 pl-4">
                <li>Cátodo</li>
                <li>Ánodo</li>
                <li>Rejillas de control</li>
                <li>Envoltura del tubo</li>
                <li>Filamentos calefactores</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-700 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                Tipos Incluidos
              </h4>
              <ul className="space-y-2 text-slate-600 ml-4 border-l-2 border-slate-200 pl-4">
                <li>Tubos de rayos catódicos (CRT)</li>
                <li>Tubos de cámara</li>
                <li>Tubos de microondas</li>
                <li>Tubos rectificadores (vapor de mercurio)</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'detectores',
      title: '4. Detectores y Dispositivos Electroquímicos',
      shortTitle: 'Detectores',
      icon: Activity,
      content: (
        <div className="space-y-8 animate-fadeIn">
          {/* Detectores */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
            <h3 className="text-xl font-bold text-emerald-800 mb-4 flex items-center gap-2">
              <Activity className="text-emerald-600" />
              Detectores de Radiación
            </h3>
            <p className="text-emerald-900 mb-4">
              Representan dispositivos que detectan radiación ionizante (Rayos X, Gamma, Nuclear). Sus símbolos indican el principio de detección y la conversión a señal eléctrica.
            </p>
          </div>

          {/* Electroquímicos */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-cyan-500 text-white flex items-center justify-center text-xs font-bold">Q</div>
              Dispositivos Electroquímicos
            </h3>
            <p className="text-slate-600 mb-4">
              Componentes donde la energía eléctrica y química se convierten mutuamente. Esenciales en instrumentación científica e industria química.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
              <div className="p-3 bg-slate-50 rounded border border-slate-200 text-center text-sm font-medium text-slate-700">Celdas electroquímicas</div>
              <div className="p-3 bg-slate-50 rounded border border-slate-200 text-center text-sm font-medium text-slate-700">Sensores</div>
              <div className="p-3 bg-slate-50 rounded border border-slate-200 text-center text-sm font-medium text-slate-700">Medición química</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'normativa',
      title: '5. Información Normativa',
      shortTitle: 'Normativa',
      icon: FileText,
      content: (
        <div className="space-y-6 animate-fadeIn">
           <h3 className="text-xl font-semibold text-slate-800">Contenido Clave</h3>
           
           <div className="grid md:grid-cols-2 gap-4">
             {['Definiciones precisas', 'Reglas de construcción', 'Convenciones gráficas', 'Compatibilidad IEC/ISO'].map((item, idx) => (
               <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border border-slate-100">
                 <CheckCircle className="text-blue-500" size={20} />
                 <span className="font-medium text-slate-700">{item}</span>
               </div>
             ))}
           </div>

           <div className="bg-slate-800 text-slate-200 p-6 rounded-xl mt-8">
             <h4 className="text-white font-bold text-lg mb-4 border-b border-slate-600 pb-2">Principios Importantes</h4>
             <ul className="space-y-4">
               <li className="flex items-start gap-3">
                 <span className="text-blue-400 font-bold">01.</span>
                 <p>Los símbolos representan <strong>función</strong>, no estructura física.</p>
               </li>
               <li className="flex items-start gap-3">
                 <span className="text-blue-400 font-bold">02.</span>
                 <p>Pueden escalarse sin perder significado.</p>
               </li>
               <li className="flex items-start gap-3">
                 <span className="text-blue-400 font-bold">03.</span>
                 <p>La lectura debe ser intuitiva y no ambigua para asegurar coherencia en control e industria.</p>
               </li>
             </ul>
           </div>
        </div>
      )
    },
    {
      id: 'anexos',
      title: '6. Anexos',
      shortTitle: 'Anexos',
      icon: Bookmark,
      content: (
        <div className="animate-fadeIn text-center py-10">
          <div className="inline-flex items-center justify-center p-4 bg-yellow-50 rounded-full mb-6 text-yellow-600">
            <Bookmark size={40} />
          </div>
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Material de Referencia</h3>
          <p className="text-slate-600 max-w-lg mx-auto mb-8">
            Los anexos son informativos y facilitan la transición y búsqueda rápida.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
            <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
              <h4 className="font-bold text-slate-800">Símbolos Antiguos</h4>
              <p className="text-sm text-slate-500 mt-1">Referencia histórica para mantenimiento.</p>
            </div>
            <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
              <h4 className="font-bold text-slate-800">Índice Francés</h4>
              <p className="text-sm text-slate-500 mt-1">Nomenclatura original.</p>
            </div>
            <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
              <h4 className="font-bold text-slate-800">Índice Inglés</h4>
              <p className="text-sm text-slate-500 mt-1">Referencia internacional.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cierre',
      title: '7. Cierre de la lección',
      shortTitle: 'Conclusión',
      icon: CheckCircle,
      content: (
        <div className="animate-fadeIn">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
            <h2 className="text-3xl font-bold mb-6">¡Lección Completada!</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              La IEC 617-5 / ISO 14617-5 establece el lenguaje gráfico universal para dispositivos electrónicos activos.
            </p>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-left max-w-xl mx-auto border border-white/20">
              <h3 className="font-bold text-lg mb-4 text-center">Dominar esta norma te permite:</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-green-400 shrink-0" size={20} />
                  <span>Leer esquemas electrónicos profesionales</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-green-400 shrink-0" size={20} />
                  <span>Diseñar diagramas claros y estandarizados</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-green-400 shrink-0" size={20} />
                  <span>Comunicar funciones sin ambigüedades</span>
                </li>
              </ul>
            </div>
            
            <button 
              onClick={() => setActiveTab(0)}
              className="mt-8 px-8 py-3 bg-white text-blue-700 font-bold rounded-full hover:bg-blue-50 transition-colors shadow-lg"
            >
              Repasar Lección
            </button>
          </div>
        </div>
      )
    }
  ];

  // Funciones de navegación
  const handleNext = () => {
    if (activeTab < sections.length - 1) {
      setActiveTab(activeTab + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrev = () => {
    if (activeTab > 0) {
      setActiveTab(activeTab - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row font-sans">
      
      {/* Sidebar Navigation (Desktop) */}
      <aside className="hidden md:flex flex-col w-72 bg-white border-r border-slate-200 h-screen sticky top-0 overflow-y-auto z-10">
        <div className="p-6 border-b border-slate-100 bg-slate-50">
          <h1 className="text-xl font-bold text-slate-800 leading-tight">Símbolos Gráficos</h1>
          <p className="text-sm text-slate-500 mt-1">IEC 617-5 / ISO 14617-5</p>
        </div>
        <nav className="flex-1 py-4">
          {sections.map((section, index) => {
            const Icon = section.icon;
            const isActive = activeTab === index;
            return (
              <button
                key={section.id}
                onClick={() => setActiveTab(index)}
                className={`w-full flex items-center gap-3 px-6 py-4 text-left transition-all duration-200 border-l-4 ${
                  isActive 
                    ? 'border-blue-600 bg-blue-50 text-blue-700 font-medium' 
                    : 'border-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <Icon size={20} className={isActive ? 'text-blue-600' : 'text-slate-400'} />
                <span className="text-sm">{section.shortTitle}</span>
              </button>
            );
          })}
        </nav>
        <div className="p-6 border-t border-slate-100 text-xs text-slate-400">
          © 2024 Engineering Docs
        </div>
      </aside>

      {/* Mobile Navigation Header */}
      <div className="md:hidden bg-white border-b border-slate-200 sticky top-0 z-20">
        <div className="flex items-center justify-between p-4">
          <div>
            <h1 className="font-bold text-slate-800">Símbolos Gráficos</h1>
            <p className="text-xs text-slate-500">IEC 617-5</p>
          </div>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-600">
            <Menu size={24} />
          </button>
        </div>
        
        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl max-h-[80vh] overflow-y-auto">
             {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => {
                  setActiveTab(index);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-6 py-4 text-left border-b border-slate-50 ${
                  activeTab === index ? 'bg-blue-50 text-blue-700' : 'text-slate-600'
                }`}
              >
                <section.icon size={18} />
                {section.shortTitle}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full min-h-screen">
        {/* Top Progress Bar (Mobile only essentially, but good visual indicator) */}
        <div className="h-1 bg-slate-200 w-full">
          <div 
            className="h-full bg-blue-600 transition-all duration-500" 
            style={{ width: `${((activeTab + 1) / sections.length) * 100}%` }}
          />
        </div>

        <div className="flex-1 p-6 md:p-12 max-w-4xl mx-auto w-full">
          <header className="mb-8 pb-4 border-b border-slate-200">
            <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">
              <span className="px-2 py-1 bg-blue-100 rounded">Capítulo {activeTab + 1} de {sections.length}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{sections[activeTab].title}</h2>
          </header>

          <div className="min-h-[400px]">
            {sections[activeTab].content}
          </div>
        </div>

        {/* Footer Navigation */}
        <footer className="bg-white border-t border-slate-200 p-6">
          <div className="max-w-4xl mx-auto flex justify-between items-center w-full">
            <button 
              onClick={handlePrev}
              disabled={activeTab === 0}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 0 
                  ? 'text-slate-300 cursor-not-allowed' 
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <ChevronLeft size={20} />
              <span className="hidden sm:inline">Anterior</span>
            </button>

            <div className="text-sm text-slate-400 font-medium hidden sm:block">
              {activeTab + 1} / {sections.length}
            </div>

            <button 
              onClick={handleNext}
              disabled={activeTab === sections.length - 1}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg font-medium transition-colors ${
                activeTab === sections.length - 1
                  ? 'text-slate-300 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
              }`}
            >
              <span className="hidden sm:inline">Siguiente</span>
              <span className="sm:hidden">Sig.</span>
              <ChevronRight size={20} />
            </button>
          </div>
        </footer>
      </main>
      
      {/* Global Styles for Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
}