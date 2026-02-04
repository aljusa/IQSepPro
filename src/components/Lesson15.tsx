import React, { useState } from 'react';
import { 
  BookOpen, 
  Settings, 
  Box, 
  Layers, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft, 
  Menu,
  Factory,
  Hammer,
  Flame,
  Scissors,
  Maximize2,
  FileText
} from 'lucide-react';

// --- Tipos e Interfaces ---

type SectionId = 'general' | 'definiciones' | 'basicos' | 'suplementarios' | 'ejemplos' | 'conclusion';

interface Tab {
  id: SectionId;
  label: string;
  icon: React.ElementType;
}

interface ProcessCategory {
  title: string;
  icon: React.ElementType;
  items: string[];
  color: string;
}

// --- Datos Estáticos ---

const tabs: Tab[] = [
  { id: 'general', label: '1. General', icon: BookOpen },
  { id: 'definiciones', label: '2. Definiciones', icon: Layers },
  { id: 'basicos', label: '3. Símbolos Básicos', icon: Box },
  { id: 'suplementarios', label: '4. Procesos', icon: Settings },
  { id: 'ejemplos', label: '5. Ejemplos y Mapa', icon: Factory },
  { id: 'conclusion', label: '6. Cierre', icon: CheckCircle },
];

const processCategories: ProcessCategory[] = [
  {
    title: 'Conformado y Transformación',
    icon: Hammer,
    color: 'bg-blue-100 text-blue-700',
    items: ['Fundición o moldeo', 'Forja', 'Prensado', 'Doblado o plegado', 'Laminado', 'Extrusión o pultrusión']
  },
  {
    title: 'Tratamientos Térmicos',
    icon: Flame,
    color: 'bg-red-100 text-red-700',
    items: ['Recocido', 'Temple', 'Otros tratamientos térmicos']
  },
  {
    title: 'Modificación de Tamaño',
    icon: Maximize2, // Representando cambio de escala
    color: 'bg-green-100 text-green-700',
    items: ['Reducción (trituración, pulverización)', 'Aumento (sinterización, aglomeración)']
  },
  {
    title: 'División del Material',
    icon: Scissors,
    color: 'bg-orange-100 text-orange-700',
    items: ['Corte general', 'Corte por sierra', 'Corte por cizallado', 'Corte por láser']
  },
  {
    title: 'Operaciones de Mecanizado',
    icon: Settings,
    color: 'bg-gray-100 text-gray-700',
    items: ['Taladrado', 'Mandrinado', 'Escariado', 'Cepillado', 'Fresado', 'Torneado']
  },
  {
    title: 'Unión y Acabado',
    icon: Layers,
    color: 'bg-purple-100 text-purple-700',
    items: ['Unión (soldadura, pegado)', 'Tratamiento superficial (pulido, granallado)', 'Recubrimiento (pintura)', 'Sellado']
  }
];

// --- Componentes ---

const Card: React.FC<{ children: React.ReactNode; className?: string; title?: string }> = ({ children, className = "", title }) => (
  <div className={`bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden ${className}`}>
    {title && (
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
        <h3 className="font-semibold text-gray-800 text-lg">{title}</h3>
      </div>
    )}
    <div className="p-6">{children}</div>
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState<SectionId>('general');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const activeTabIndex = tabs.findIndex(tab => tab.id === activeTab);

  const handleNext = () => {
    if (activeTabIndex < tabs.length - 1) {
      setActiveTab(tabs[activeTabIndex + 1].id);
      window.scrollTo(0, 0);
    }
  };

  const handlePrev = () => {
    if (activeTabIndex > 0) {
      setActiveTab(tabs[activeTabIndex - 1].id);
      window.scrollTo(0, 0);
    }
  };

  // Renderizado del contenido basado en la pestaña activa
  const renderContent = () => {
    switch (activeTab) {
      case 'general':
        return (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="bg-blue-600 text-white p-8 rounded-2xl shadow-lg">
              <h1 className="text-3xl font-bold mb-2">ISO 14617-13:2004</h1>
              <p className="text-blue-100 text-lg">Dispositivos de Procesamiento de Materiales</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card title="Alcance y Objetivos">
                <p className="text-gray-600 mb-4">
                  Esta norma especifica los símbolos gráficos utilizados para representar dispositivos de procesamiento de materiales en diagramas técnicos.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" /> Máquinas de fundición
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" /> Máquinas herramienta
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" /> Transformación mecánica y térmica
                  </li>
                </ul>
              </Card>

              <Card title="Aplicación Principal">
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <span className="font-medium text-gray-800">🏭 Diagramas de plantas de proceso</span>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <span className="font-medium text-gray-800">📄 Documentación de manufactura</span>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <span className="font-medium text-gray-800">⚙️ Sistemas de producción industrial</span>
                  </div>
                </div>
              </Card>
            </div>

            <Card title="Referencias Normativas">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-800">ISO 14617-1</h4>
                  <p className="text-sm text-blue-600">Reglas generales e índices.</p>
                </div>
                <div className="flex-1 bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-800">ISO 81714-1</h4>
                  <p className="text-sm text-blue-600">Principios básicos de diseño de símbolos.</p>
                </div>
              </div>
            </Card>
          </div>
        );

      case 'definiciones':
        return (
          <div className="space-y-6 animate-in fade-in duration-500">
            <h2 className="text-2xl font-bold text-gray-800">2. Definiciones Clave</h2>
            <p className="text-gray-600">Para interpretar los símbolos correctamente, es esencial entender estos dos conceptos fundamentales.</p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-indigo-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                    <Box size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Dispositivo Complejo</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Es aquel equipo formado por <strong>varios componentes funcionalmente relacionados</strong>. Debido a su complejidad interna, requiere un diagrama específico para describir su funcionamiento detallado.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-emerald-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
                    <Layers size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Unidad Funcional</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Conjunto constructivo que integra componentes interrelacionados para cumplir una <strong>función específica</strong>. El símbolo representa la función global, no el despiece mecánico.
                </p>
              </div>
            </div>
          </div>
        );

      case 'basicos':
        return (
          <div className="space-y-6 animate-in fade-in duration-500">
             <h2 className="text-2xl font-bold text-gray-800">3. Símbolos de Naturaleza Básica</h2>
             
             <Card className="border-2 border-blue-100">
               <div className="flex flex-col md:flex-row gap-8 items-center">
                 <div className="w-48 h-48 bg-gray-100 rounded-xl flex flex-col items-center justify-center border-2 border-dashed border-gray-300 relative">
                    <span className="absolute top-2 left-2 text-xs text-gray-400">Representación Abstracta</span>
                    <div className="w-24 h-24 border-2 border-gray-800 bg-white flex items-center justify-center">
                      <span className="text-3xl text-gray-300">*</span>
                    </div>
                    <p className="mt-2 text-sm font-medium text-gray-500">Símbolo Base</p>
                 </div>
                 
                 <div className="flex-1">
                   <h3 className="text-xl font-bold text-blue-900 mb-2">El Contenedor Funcional</h3>
                   <p className="text-gray-700 mb-4">
                     La norma define un símbolo gráfico básico que actúa como un "contenedor". Este símbolo por sí solo indica que existe un <strong>Dispositivo Complejo</strong>, una <strong>Unidad Funcional</strong> o un <strong>Equipo</strong>.
                   </p>
                   
                   <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                     <p className="font-bold text-yellow-800">📌 Regla Importante</p>
                     <p className="text-yellow-700 text-sm">
                       El símbolo base NO describe el proceso. Necesita <strong>símbolos suplementarios</strong> (que reemplazan el asterisco o se asocian a él) para adquirir significado técnico real.
                     </p>
                   </div>
                 </div>
               </div>
             </Card>
          </div>
        );

      case 'suplementarios':
        return (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex justify-between items-end">
              <h2 className="text-2xl font-bold text-gray-800">4. Información Suplementaria</h2>
              <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Catálogo de Funciones</span>
            </div>
            
            <p className="text-gray-600">
              Los símbolos suplementarios indican la <strong>transformación exacta</strong> que sufre el material.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {processCategories.map((cat, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 overflow-hidden">
                  <div className={`p-4 ${cat.color} flex items-center gap-3`}>
                    <cat.icon size={20} />
                    <h3 className="font-bold text-sm uppercase tracking-wide">{cat.title}</h3>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-2">
                      {cat.items.map((item, i) => (
                        <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                          <span className="text-gray-300 mt-1">•</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200 text-center text-sm text-gray-600 italic">
              "Estos símbolos permiten describir qué hace la máquina, sin necesidad de texto adicional."
            </div>
          </div>
        );

      case 'ejemplos':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <h2 className="text-2xl font-bold text-gray-800">5. Aplicación y Relaciones</h2>

            {/* Ejemplos Visuales */}
            <div className="grid md:grid-cols-2 gap-6">
               <Card title="Ejemplo 1: Fundición" className="border-t-4 border-t-orange-500">
                 <div className="flex flex-col items-center">
                   <div className="flex items-center gap-4 text-2xl font-bold text-gray-400 mb-4">
                     <div className="flex flex-col items-center">
                       <Box className="text-gray-800" />
                       <span className="text-xs font-normal mt-1">Base</span>
                     </div>
                     <span>+</span>
                     <div className="flex flex-col items-center">
                       <Flame className="text-orange-500" />
                       <span className="text-xs font-normal mt-1">Moldeo</span>
                     </div>
                     <span>=</span>
                     <span className="text-gray-800 text-lg">Máquina de Fundición</span>
                   </div>
                   <p className="text-center text-gray-600 text-sm">
                     El conjunto representa inequívocamente una máquina destinada a fundir y moldear material.
                   </p>
                 </div>
               </Card>

               <Card title="Ejemplo 2: Torno Mecánico" className="border-t-4 border-t-blue-500">
                 <div className="flex flex-col items-center">
                   <div className="flex items-center gap-4 text-2xl font-bold text-gray-400 mb-4">
                     <div className="flex flex-col items-center">
                       <Box className="text-gray-800" />
                       <span className="text-xs font-normal mt-1">Base</span>
                     </div>
                     <span>+</span>
                     <div className="flex flex-col items-center">
                       <Settings className="text-blue-500" />
                       <span className="text-xs font-normal mt-1">Torneado</span>
                     </div>
                     <span>=</span>
                     <span className="text-gray-800 text-lg">Torno</span>
                   </div>
                   <p className="text-center text-gray-600 text-sm">
                     La combinación del símbolo base con el de torneado define la máquina herramienta específica.
                   </p>
                 </div>
               </Card>
            </div>

            {/* Mapa Mental */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FileText size={20} />
                Relación con el Mapa Mental
              </h3>
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-100 text-gray-700">
                    <tr>
                      <th className="p-4 font-semibold">Concepto del Mapa</th>
                      <th className="p-4 font-semibold">Contenido en la Norma</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="p-4 font-medium text-gray-900">Información general</td>
                      <td className="p-4 text-gray-600">Alcance, referencias y propósito</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-gray-900">Definiciones clave</td>
                      <td className="p-4 text-gray-600">Dispositivo complejo, unidad funcional</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-gray-900">Símbolos básicos</td>
                      <td className="p-4 text-gray-600">Símbolo base de equipo (contenedor)</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-gray-900">Símbolos suplementarios</td>
                      <td className="p-4 text-gray-600">Procesos de transformación (Corte, unión, etc.)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'conclusion':
        return (
          <div className="space-y-6 animate-in fade-in duration-500 h-full flex flex-col justify-center">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white shadow-xl text-center">
              <CheckCircle size={64} className="mx-auto mb-6 opacity-80" />
              <h2 className="text-3xl font-bold mb-4">Fin de la Lección</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                La norma ISO 14617-13:2004 proporciona el lenguaje gráfico esencial para la ingeniería de procesos moderna.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <span className="block font-bold text-blue-200 mb-1">Claridad</span>
                  Representa máquinas complejas de forma simple.
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <span className="block font-bold text-blue-200 mb-1">Velocidad</span>
                  Identifica rápidamente el tipo de procesamiento.
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <span className="block font-bold text-blue-200 mb-1">Precisión</span>
                  Evita ambigüedades en diagramas industriales.
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <span className="block font-bold text-blue-200 mb-1">Integración</span>
                  Facilita diagramas de planta y producción unificados.
                </div>
              </div>

              <button 
                onClick={() => {
                  setActiveTab('general');
                  window.scrollTo(0, 0);
                }}
                className="mt-8 px-6 py-3 bg-white text-blue-700 font-bold rounded-full shadow-lg hover:bg-blue-50 transition-colors"
              >
                Volver al Inicio
              </button>
            </div>
          </div>
        );
      
      default:
        return <div>Sección no encontrada</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* Header Fijo */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="text-blue-600" />
            <h1 className="font-bold text-lg sm:text-xl tracking-tight">Lección: ISO 14617-13</h1>
          </div>
          
          {/* Navegación Desktop */}
          <nav className="hidden md:flex space-x-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                   setActiveTab(tab.id);
                   window.scrollTo(0, 0);
                }}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-2
                  ${activeTab === tab.id 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}
              >
                <tab.icon size={16} />
                {tab.label.split(' ')[0] + ' ' + (tab.label.split(' ')[1] || '')}
              </button>
            ))}
          </nav>

          {/* Menú Móvil Botón */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-md"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Menú Móvil Desplegable */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-2 shadow-lg absolute w-full left-0">
             {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setIsMobileMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
                className={`w-full text-left px-6 py-3 text-sm font-medium flex items-center gap-3
                  ${activeTab === tab.id 
                    ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600' 
                    : 'text-gray-600 hover:bg-gray-50'}`}
              >
                <tab.icon size={18} />
                {tab.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Área de Contenido Principal */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 min-h-[calc(100vh-4rem)] flex flex-col">
        
        {/* Breadcrumb simple */}
        <div className="mb-6 text-sm text-gray-400 font-medium uppercase tracking-wider">
           Lección / {tabs.find(t => t.id === activeTab)?.label}
        </div>

        <div className="flex-grow">
          {renderContent()}
        </div>

        {/* Footer de Navegación */}
        <div className="mt-12 pt-6 border-t border-gray-200 flex justify-between items-center">
          <button
            onClick={handlePrev}
            disabled={activeTabIndex === 0}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors
              ${activeTabIndex === 0 
                ? 'text-gray-300 cursor-not-allowed' 
                : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600'}`}
          >
            <ArrowLeft size={18} />
            Anterior
          </button>

          <div className="hidden sm:flex space-x-1">
            {tabs.map((_, idx) => (
               <div 
                 key={idx} 
                 className={`w-2 h-2 rounded-full ${idx === activeTabIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
               />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={activeTabIndex === tabs.length - 1}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors
              ${activeTabIndex === tabs.length - 1 
                ? 'text-gray-300 cursor-not-allowed' 
                : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md'}`}
          >
            Siguiente
            <ArrowRight size={18} />
          </button>
        </div>
      </main>

    </div>
  );
}