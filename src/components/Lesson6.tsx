import React, { useState } from 'react';
import { 
  BookOpen, 
  Settings, 
  HandMetal, 
  Cpu, 
  Zap, 
  FileText, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft,
  Info,
  AlertTriangle
} from 'lucide-react';

// --- Tipos y Datos ---

interface LessonSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  // Datos de la lección estructurados
  const sections: LessonSection[] = [
    {
      id: 'intro',
      title: '1. Introducción',
      icon: <BookOpen size={20} />,
      content: (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
            <h3 className="text-xl font-bold text-blue-800 mb-2">Norma ISO 14617-4:2002</h3>
            <p className="text-blue-700">
              Establece los símbolos gráficos utilizados para representar actuadores y dispositivos de accionamiento en diagramas técnicos.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Propósito</h4>
            <p className="text-gray-600 leading-relaxed">
              Su propósito es describir cómo se produce una acción física (movimiento, apertura, cierre, conmutación, posicionamiento) dentro de un sistema, ya sea por acción humana o automática.
            </p>
          </div>

          <div className="bg-white border rounded-xl p-5 shadow-sm">
            <h4 className="font-semibold text-gray-800 mb-4 border-b pb-2">Esta parte de la norma cubre:</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {['Elementos básicos de los actuadores', 'Actuadores manuales', 'Actuadores automáticos', 'Dispositivos de accionamiento', 'Reglas y definiciones normativas'].map((item, idx) => (
                <li key={idx} className="flex items-center text-gray-600">
                  <CheckCircle2 size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'basicos',
      title: '2. Elementos Básicos',
      icon: <Settings size={20} />,
      content: (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-indigo-50 p-4 rounded-lg flex items-start">
            <Info className="text-indigo-600 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-indigo-900">¿Qué son?</h3>
              <p className="text-indigo-800">
                Los elementos básicos son componentes funcionales que no actúan por sí solos, pero que forman parte del comportamiento de un actuador.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Elementos definidos por la norma</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                { name: 'Embragues (clutch)', desc: 'Conectan o desconectan partes mecánicas.' },
                { name: 'Frenos', desc: 'Aplicados o liberados en estado no accionado.' },
                { name: 'Resortes (muelles)', desc: 'Almacenan energía y permiten retorno automático.' },
                { name: 'Dispositivos de retardo', desc: 'Introducen un tiempo entre la acción y el efecto.' },
                { name: 'Retorno automático', desc: 'Devuelven el sistema a su posición inicial.' },
                { name: 'Enclavamiento (latching)', desc: 'Permiten movimiento en un solo sentido.' },
                { name: 'Bloqueo', desc: 'Impiden cualquier movimiento hasta ser liberados.' },
                { name: 'Mecanismos "trip-free"', desc: 'Garantizan desconexión segura, ignorando otras órdenes.' },
                { name: 'Interbloqueo', desc: 'Hacen depender la acción de un elemento del estado de otro.' }
              ].map((item, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors bg-white shadow-sm">
                  <span className="block font-semibold text-blue-700">{item.name}</span>
                  <span className="text-sm text-gray-600">{item.desc}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-500 italic text-center">
              Estos símbolos se combinan con actuadores para definir su comportamiento dinámico.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'manuales',
      title: '3. Actuadores Manuales',
      icon: <HandMetal size={20} />,
      content: (
        <div className="space-y-6 animate-fadeIn">
          <div className="border-b pb-4">
            <h3 className="text-2xl font-bold text-gray-800">Operación Manual</h3>
            <p className="text-gray-600 mt-2">
              Un actuador manual requiere fuerza humana directa para producir una acción.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {['Pulsador', 'Tirador (Jalar)', 'Empujar y Jalar', 'Giro', 'Palanca', 'Pedal', 'Treadle (balancín)', 'Llave', 'Manija removible', 'Seguridad (Paro de emergencia)', 'Acceso restringido'].map((tipo, idx) => (
              <div key={idx} className="bg-gray-50 rounded px-3 py-2 text-center text-sm font-medium text-gray-700 border border-gray-200">
                {tipo}
              </div>
            ))}
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <h4 className="flex items-center text-amber-800 font-bold mb-3">
              <AlertTriangle size={20} className="mr-2" />
              Reglas Importantes
            </h4>
            <ul className="space-y-2 text-amber-900">
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span><strong>Empujar, jalar o pedal:</strong> Suponen retorno automático, salvo indicación contraria.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span><strong>Giro, llave o manija:</strong> Suponen posición retenida (sin retorno automático).</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span><strong>Actuadores en paralelo:</strong> Se asume lógica OR, salvo indicación de función AND.</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'automaticos',
      title: '4. Actuadores Automáticos',
      icon: <Cpu size={20} />,
      content: (
        <div className="space-y-6 animate-fadeIn">
           <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 rounded-lg shadow-md">
             <h3 className="text-xl font-bold mb-2">Automatización</h3>
             <p className="opacity-90">
               Actúan sin intervención humana, respondiendo a variables de proceso, señales de control o mecanismos fluidos.
             </p>
           </div>

           <div>
             <h4 className="text-lg font-bold text-gray-800 mb-4 border-l-4 border-indigo-500 pl-3">Tipos Principales</h4>
             <div className="space-y-3">
               <div className="flex group">
                 <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors mr-4">
                   <Settings size={24} />
                 </div>
                 <div>
                   <h5 className="font-bold text-gray-800">Mecánicos y de Fluido</h5>
                   <p className="text-sm text-gray-600">Por leva, rodillo, nivel (flotadores) o caudal (banderas mecánicas).</p>
                 </div>
               </div>
               
               <div className="flex group">
                 <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors mr-4">
                   <Zap size={24} />
                 </div>
                 <div>
                   <h5 className="font-bold text-gray-800">Cilindros y Motores</h5>
                   <p className="text-sm text-gray-600">Hidráulicos o neumáticos (simple efecto, doble efecto, diafragma).</p>
                 </div>
               </div>

               <div className="flex group">
                 <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors mr-4">
                   <Cpu size={24} />
                 </div>
                 <div>
                   <h5 className="font-bold text-gray-800">Por Magnitud Física</h5>
                   <p className="text-sm text-gray-600">Operan cuando una magnitud (presión, temperatura) supera un valor prefijado.</p>
                 </div>
               </div>
             </div>
           </div>
        </div>
      )
    },
    {
      id: 'dispositivos',
      title: '5. Dispositivos',
      icon: <Zap size={20} />,
      content: (
        <div className="space-y-6 animate-fadeIn">
          <h3 className="text-xl font-bold text-gray-800">Dispositivos de Accionamiento</h3>
          <p className="text-gray-600">
            Son conjuntos funcionales que permiten representar sistemas complejos sin descomponerlos completamente en el diagrama.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-xl border shadow-sm">
              <h4 className="text-indigo-600 font-bold mb-2">Composición</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><span className="font-medium text-gray-900">Elemento principal:</span> Palanca, motor, solenoide, resorte, cilindro, etc.</li>
                <li><span className="font-medium text-gray-900">Auxiliares:</span> Contactos, bloqueos, sensores.</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-xl border shadow-sm">
              <h4 className="text-indigo-600 font-bold mb-2">Tipos de Energía</h4>
              <div className="flex flex-wrap gap-2">
                {['Neumático', 'Eléctrico', 'Manual', 'Energía Almacenada'].map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold border">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'normativa',
      title: '6. Normativa',
      icon: <FileText size={20} />,
      content: (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-slate-800 text-white p-6 rounded-lg">
             <h3 className="text-xl font-bold mb-3">Más allá de los símbolos</h3>
             <p className="text-slate-300">
               La ISO 14617-4 no es solo un catálogo de dibujos. Define la gramática visual para la ingeniería.
             </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
             <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-2">Contenido Normativo</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                   <li>• Términos y definiciones normalizadas.</li>
                   <li>• Reglas de aplicación estricta.</li>
                   <li>• Convenciones de estado "accionado/no accionado".</li>
                   <li>• Compatibilidad con válvulas y funciones.</li>
                </ul>
             </div>
             <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-bold text-green-800 mb-2">Beneficios</h4>
                <ul className="space-y-2 text-sm text-green-700">
                   <li className="flex items-center"><CheckCircle2 size={14} className="mr-2"/> Interpretación global uniforme.</li>
                   <li className="flex items-center"><CheckCircle2 size={14} className="mr-2"/> Reducción de errores de diseño.</li>
                   <li className="flex items-center"><CheckCircle2 size={14} className="mr-2"/> Mayor seguridad industrial.</li>
                </ul>
             </div>
          </div>
        </div>
      )
    },
    {
      id: 'cierre',
      title: '7. Cierre',
      icon: <CheckCircle2 size={20} />,
      content: (
        <div className="text-center space-y-8 animate-fadeIn py-8">
          <div className="inline-block p-4 rounded-full bg-green-100 text-green-600 mb-4">
            <CheckCircle2 size={48} />
          </div>
          
          <h2 className="text-3xl font-bold text-gray-800">¡Lección Completada!</h2>
          
          <p className="max-w-xl mx-auto text-gray-600 text-lg">
            La ISO 14617-4 proporciona el lenguaje gráfico universal para describir cómo se acciona un sistema.
          </p>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Al dominar esta norma ahora puedes:</h3>
            <div className="space-y-3 text-left">
               <div className="flex items-center p-3 hover:bg-gray-50 rounded transition-colors">
                 <BookOpen className="text-blue-500 mr-3" size={24} />
                 <span className="text-gray-700">Leer diagramas de control y automatización con precisión.</span>
               </div>
               <div className="flex items-center p-3 hover:bg-gray-50 rounded transition-colors">
                 <Settings className="text-purple-500 mr-3" size={24} />
                 <span className="text-gray-700">Diseñar sistemas seguros y estandarizados.</span>
               </div>
               <div className="flex items-center p-3 hover:bg-gray-50 rounded transition-colors">
                 <Cpu className="text-orange-500 mr-3" size={24} />
                 <span className="text-gray-700">Integrar correctamente actuadores con válvulas y sensores.</span>
               </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const handleNext = () => {
    if (activeTab < sections.length - 1) {
      setActiveTab(activeTab + 1);
      // Pequeño scroll al top del contenido en móviles
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (activeTab > 0) {
      setActiveTab(activeTab - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-900 pb-12">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded text-white">
              <BookOpen size={24} />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-800 leading-none">Curso ISO 14617-4</h1>
              <p className="text-xs text-gray-500 mt-1">Actuadores y Dispositivos Asociados</p>
            </div>
          </div>
          <div className="text-sm font-medium text-gray-500 hidden md:block">
            Lección 1 de 1
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-6">
        
        {/* Navigation Tabs (Scrollable on mobile) */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6 overflow-hidden">
          <div className="flex overflow-x-auto scrollbar-hide border-b border-gray-100">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => setActiveTab(index)}
                className={`
                  flex items-center space-x-2 px-6 py-4 whitespace-nowrap transition-all duration-200
                  ${activeTab === index 
                    ? 'border-b-2 border-blue-600 text-blue-600 bg-blue-50/50' 
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'}
                `}
              >
                {/* Mostrar icono solo en desktop o tab activa para ahorrar espacio en móvil */}
                <span className={`${activeTab === index ? 'opacity-100' : 'opacity-70'}`}>
                  {section.icon}
                </span>
                <span className="font-medium text-sm">{section.title}</span>
              </button>
            ))}
          </div>
          
          {/* Progress Bar */}
          <div className="h-1 w-full bg-gray-100">
            <div 
              className="h-full bg-blue-600 transition-all duration-500 ease-out"
              style={{ width: `${((activeTab + 1) / sections.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden min-h-[400px]">
          <div className="p-6 md:p-8">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                <span className="text-blue-200 mr-3 text-3xl font-black opacity-20 select-none">
                  0{activeTab + 1}
                </span>
                {sections[activeTab].title.split('. ')[1]}
              </h2>
            </div>
            
            {/* Render Active Content */}
            <div key={activeTab} className="animate-fadeIn">
               {sections[activeTab].content}
            </div>
          </div>

          {/* Footer / Navigation Controls */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex justify-between items-center">
            <button
              onClick={handlePrev}
              disabled={activeTab === 0}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors
                ${activeTab === 0 
                  ? 'text-gray-300 cursor-not-allowed' 
                  : 'text-gray-600 hover:bg-gray-200 hover:text-gray-900'}
              `}
            >
              <ChevronLeft size={18} />
              <span>Anterior</span>
            </button>

            <span className="text-xs font-medium text-gray-400">
              Página {activeTab + 1} de {sections.length}
            </span>

            <button
              onClick={handleNext}
              disabled={activeTab === sections.length - 1}
              className={`flex items-center space-x-2 px-5 py-2 rounded-lg font-medium transition-colors shadow-sm
                ${activeTab === sections.length - 1
                  ? 'bg-green-600 text-white hover:bg-green-700 opacity-50 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'}
              `}
            >
              <span>{activeTab === sections.length - 1 ? 'Finalizado' : 'Siguiente'}</span>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

      </main>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default App;