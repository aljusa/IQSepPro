import React, { useState } from 'react';
import { 
  BookOpen, 
  Package, // Reemplazamos Conveyor por Package
  Bot, 
  TrainTrack, 
  Truck, 
  Map, 
  CheckCircle, 
  Info, 
  Settings, 
  ArrowRight,
  Anchor,
  Box
} from 'lucide-react';

// --- Tipos y Datos ---

interface Section {
  id: string;
  title: string;
  icon: React.ElementType;
  content: React.ReactNode;
}

const LessonISO: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('intro');

  // Definición del contenido de la lección
  const sections: Section[] = [
    {
      id: 'intro',
      title: 'Alcance y Propósito',
      icon: BookOpen,
      content: (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
            <h3 className="text-xl font-bold text-blue-800 mb-2">Definición General</h3>
            <p className="text-gray-700 leading-relaxed">
              La <strong>ISO 14617-14:2004</strong> define los símbolos gráficos usados en diagramas técnicos para representar componentes y dispositivos destinados al transporte y la manipulación de materiales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <Map className="w-5 h-5 text-indigo-500" />
                Aplicaciones Principales
              </h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0"></span>
                  Diagramas de planta industrial
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0"></span>
                  Diagramas logísticos y de flujo de materiales
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0"></span>
                  Sistemas de producción y almacenamiento
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0"></span>
                  Documentación técnica de procesos industriales
                </li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-emerald-500" />
                Normativa Relacionada
              </h4>
              <p className="text-sm text-gray-600 mb-2">Esta norma es parte de la biblioteca ISO 14617 y debe usarse junto con:</p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500" />
                  <strong>ISO 14617-1:</strong> Información general y reglas de uso.
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500" />
                  <strong>ISO 81714-1:</strong> Principios de diseño de símbolos.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'transport',
      title: 'Transportadores',
      icon: Package, // Icono corregido
      content: (
        <div className="space-y-6 animate-fadeIn">
          <div className="prose max-w-none text-gray-700">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Concepto General</h3>
            <p>
              Un transportador es un dispositivo diseñado para mover materiales de un punto a otro, de forma continua o intermitente, utilizando distintos principios mecánicos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-orange-50 p-5 rounded-lg border border-orange-100">
              <h4 className="font-bold text-orange-800 mb-3 border-b border-orange-200 pb-2">Símbolos Básicos</h4>
              <ul className="space-y-3">
                {[
                  "Transportador (conveyor)",
                  "Tolva o embudo de alimentación",
                  "Rotor de alimentación por paletas",
                  "Mesa giratoria"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-800">
                    <Box className="w-4 h-4 text-orange-600" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-orange-700 italic">
                * El símbolo del transportador es genérico y puede adaptarse.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h4 className="font-bold text-gray-800 mb-3 border-b border-gray-200 pb-2">Tipos Específicos (Símbolos Adicionales)</h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-green-500"/> Banda</span>
                <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-green-500"/> Rodillos</span>
                <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-green-500"/> Cadena/Cable</span>
                <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-green-500"/> Tornillo sinfín</span>
                <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-green-500"/> Cangilones</span>
                <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-green-500"/> Vibratorio</span>
                <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-green-500"/> Gravedad</span>
                <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-green-500"/> Escalera mecánica</span>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-md text-sm text-blue-800 flex items-start gap-3">
            <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <p>
              Estos símbolos permiten identificar no solo que existe transporte, sino <strong>cómo se mueve el material</strong>, su dirección (unidireccional, reversible) y si tiene pendiente o ajustabilidad.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'handling',
      title: 'Grúas y Robots',
      icon: Bot,
      content: (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-slate-800 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Función Principal</h3>
            <p className="text-slate-300">
              Dispositivos empleados para elevar, descender o mover materiales en el espacio, normalmente de forma discontinua. Esenciales en naves industriales y sistemas de carga/descarga.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="bg-gray-100 px-6 py-3 border-b border-gray-200 font-semibold text-gray-700">
              Símbolos Definidos
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <div className="mx-auto w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-3">
                    <Settings className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h5 className="font-bold text-gray-800">Grúa</h5>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <div className="mx-auto w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-3">
                    <ArrowRight className="w-6 h-6 text-indigo-600 -rotate-90" />
                  </div>
                  <h5 className="font-bold text-gray-800">Elevador / Polipasto</h5>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <div className="mx-auto w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-3">
                    <Bot className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h5 className="font-bold text-gray-800">Robot de Manipulación</h5>
                </div>
              </div>
            </div>
            <div className="bg-yellow-50 px-6 py-3 text-yellow-800 text-sm border-t border-yellow-100 flex items-center gap-2">
              <Info className="w-4 h-4" />
              <strong>Nota Importante:</strong> En esta categoría no se definen símbolos suplementarios; el símbolo base es suficiente.
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'tracks',
      title: 'Vías y Rieles',
      icon: TrainTrack,
      content: (
        <div className="space-y-6 animate-fadeIn">
           <div className="prose max-w-none text-gray-700">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Infraestructura de Movimiento</h3>
            <p>
              Las vías son elementos que guían el movimiento de equipos o materiales, especialmente en sistemas ferroviarios o internos de planta.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
             <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h4 className="font-bold text-gray-800 mb-3">Símbolos Básicos</h4>
                <ul className="space-y-2">
                  <li className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span>Monorraíl</span>
                    <div className="h-1 w-8 bg-gray-400 rounded"></div>
                  </li>
                  <li className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span>Doble riel / Vía férrea</span>
                    <div className="h-2 w-8 border-t border-b border-gray-400"></div>
                  </li>
                  <li className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span>Plataforma transversal</span>
                    <Settings className="w-4 h-4 text-gray-400"/>
                  </li>
                  <li className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span>Plataforma giratoria</span>
                    <Settings className="w-4 h-4 text-gray-400 animate-spin-slow"/>
                  </li>
                   <li className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span>Volteador de vagones</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 rotate-90"/>
                  </li>
                </ul>
             </div>
             
             <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100 flex flex-col justify-center">
                <h4 className="font-bold text-indigo-800 mb-2">Ejemplos de Aplicación</h4>
                <p className="text-sm text-indigo-700 mb-4">
                  La norma permite combinar símbolos para representar sistemas complejos, como:
                </p>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded shadow-sm text-sm text-gray-600 border-l-4 border-indigo-400">
                    Plataformas transversales que conectan varias vías.
                  </div>
                  <div className="bg-white p-3 rounded shadow-sm text-sm text-gray-600 border-l-4 border-indigo-400">
                    Mesas giratorias ferroviarias para cambio de dirección.
                  </div>
                  <div className="bg-white p-3 rounded shadow-sm text-sm text-gray-600 border-l-4 border-indigo-400">
                    Volteadores de vagones junto a bunkers o silos.
                  </div>
                </div>
             </div>
          </div>
        </div>
      )
    },
    {
      id: 'vehicles',
      title: 'Vehículos y Barcos',
      icon: Truck,
      content: (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-gradient-to-r from-slate-700 to-slate-900 text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-1">Medios Móviles</h3>
            <p className="text-slate-300 text-sm">Transporte de materiales dentro y fuera de la planta.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "Vehículo industrial genérico",
              "Montacargas",
              "Montacargas automático (AGV)",
              "Camión contenedor",
              "Cargador frontal",
              "Cargador de troncos",
              "Bulldozer",
              "Camión",
              "Camión cubierto",
              "Camión cisterna",
              "Vagón ferroviario",
              "Vagón de no sólidos",
              "Locomotora",
              "Barco de carga"
            ].map((v, i) => (
              <div key={i} className="flex items-center gap-3 p-3 border border-gray-100 bg-white shadow-sm rounded-lg hover:shadow-md transition-shadow">
                {v.includes('Barco') ? <Anchor className="w-5 h-5 text-blue-500"/> : <Truck className="w-5 h-5 text-slate-500"/>}
                <span className="text-sm font-medium text-gray-700">{v}</span>
              </div>
            ))}
          </div>

          <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400 text-orange-800 text-sm">
            <strong>Nota:</strong> Al igual que en las categorías de grúas y vías, no se utilizan símbolos suplementarios para los vehículos.
          </div>
        </div>
      )
    },
    {
      id: 'summary',
      title: 'Resumen y Cierre',
      icon: CheckCircle,
      content: (
        <div className="space-y-8 animate-fadeIn">
          <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
            <div className="bg-gray-800 text-white px-6 py-3 font-bold">Relación con el Mapa Mental</div>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Elemento</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Norma ISO 14617-14</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Transportadores</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Sección 3</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Grúas y Robots</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Sección 4</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Vías</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Sección 5</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Vehículos y Barcos</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Sección 6</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-green-50 p-6 rounded-xl border border-green-200 text-center">
            <h3 className="text-2xl font-bold text-green-800 mb-4">Conclusión de la Lección</h3>
            <p className="text-green-700 mb-6 max-w-2xl mx-auto">
              Dominar la norma <strong>ISO 14617-14:2004</strong> es clave para la ingeniería industrial, logística y automatización. Permite representar sistemas complejos sin necesidad de texto adicional y comprender flujos logísticos rápidamente.
            </p>
            <button 
              onClick={() => setActiveTab('intro')}
              className="px-6 py-2 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-colors shadow-md"
            >
              Repasar Lección
            </button>
          </div>
        </div>
      )
    }
  ];

  const activeContent = sections.find(s => s.id === activeTab)?.content;

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <header className="mb-8 text-center md:text-left bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-gray-900">
                <span className="text-blue-600 block text-lg font-semibold mb-1">Norma ISO 14617-14:2004</span>
                Dispositivos de Transporte y Manipulación
              </h1>
              <p className="text-gray-500 mt-2">Lección interactiva sobre simbología técnica industrial</p>
            </div>
            <div className="bg-blue-50 px-4 py-2 rounded-lg border border-blue-100 text-blue-700 text-sm font-medium">
              Ingeniería & Logística
            </div>
          </div>
        </header>

        {/* Navigation Tabs */}
        <div className="flex overflow-x-auto pb-4 gap-2 mb-6 scrollbar-hide">
          {sections.map((section) => {
            const Icon = section.icon;
            const isActive = activeTab === section.id;
            return (
              <button
                key={section.id}
                onClick={() => setActiveTab(section.id)}
                className={`
                  flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-all whitespace-nowrap
                  ${isActive 
                    ? 'bg-blue-600 text-white shadow-md scale-105' 
                    : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-blue-600 border border-gray-200'}
                `}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                {section.title}
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <main className="bg-white rounded-2xl shadow-xl p-6 md:p-10 min-h-[500px] border border-gray-100">
          {activeContent}
        </main>

        {/* Footer */}
        <footer className="mt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Material Educativo de Ingeniería. Basado en estándares ISO.</p>
        </footer>

      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
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
};

export default LessonISO;