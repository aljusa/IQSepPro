import React, { useState } from 'react';
import { 
  BookOpen, 
  Network, 
  Info, 
  CircleDot, 
  Plug, 
  Minimize2, 
  BookType, 
  CheckCircle2, 
  Menu
} from 'lucide-react';

// --- Interfaces ---
interface Section {
  id: number;
  title: string;
  shortTitle: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

export default function App() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // --- Contenido de la Lección ---
  const sections: Section[] = [
    {
      id: 0,
      title: "1. Introducción a la ISO 14617-3",
      shortTitle: "Introducción",
      icon: <BookOpen className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-slate-800">Definición y Objetivo</h3>
          <p className="text-slate-600 leading-relaxed">
            La <strong>ISO 14617-3:2002</strong> define los símbolos gráficos utilizados para representar conexiones y dispositivos asociados en diagramas técnicos.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <p className="text-blue-800 italic">
              "Su objetivo es asegurar que las conexiones entre componentes (mecánicas, eléctricas, neumáticas, hidráulicas o funcionales) se representen de forma clara, coherente y universal."
            </p>
          </div>
          
          <h4 className="font-semibold text-slate-700 mt-4">Alcance de la norma:</h4>
          <ul className="list-disc list-inside space-y-2 text-slate-600 ml-2">
            <li>Conexiones funcionales</li>
            <li>Enlaces mecánicos</li>
            <li>Tuberías y conductos</li>
            <li>Juntas, extremos y uniones</li>
            <li>Puertos, conectores y acoples</li>
            <li>Simplificaciones gráficas adicionales</li>
          </ul>
        </div>
      )
    },
    {
      id: 1,
      title: "2. Tipos de Conexiones",
      shortTitle: "Tipos",
      icon: <Network className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="bg-slate-100 p-4 rounded-md">
            <h4 className="font-bold text-slate-800 mb-2">🔹 Concepto General</h4>
            <p className="text-slate-600">
              Una conexión es cualquier medio que permite unir funciones, energía, movimiento, fluidos o señales entre componentes.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-800 mb-3">🔹 Tipos principales definidos por la norma</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-slate-200 p-3 rounded hover:shadow-md transition-shadow">
                <span className="font-semibold text-indigo-600 block">Conexión funcional</span>
                <span className="text-sm text-slate-500">Une funciones, no necesariamente elementos físicos (muy usada en diagramas de control).</span>
              </div>
              <div className="border border-slate-200 p-3 rounded hover:shadow-md transition-shadow">
                <span className="font-semibold text-indigo-600 block">Enlace mecánico</span>
                <span className="text-sm text-slate-500">Transmite movimiento o fuerza (ejes, varillas, cables).</span>
              </div>
              <div className="border border-slate-200 p-3 rounded hover:shadow-md transition-shadow">
                <span className="font-semibold text-indigo-600 block">Conexión eléctrica</span>
                <span className="text-sm text-slate-500">Conductores o circuitos eléctricos.</span>
              </div>
              <div className="border border-slate-200 p-3 rounded hover:shadow-md transition-shadow">
                <span className="font-semibold text-indigo-600 block">Tuberías o conductos</span>
                <span className="text-sm text-slate-500">Transporte de fluidos o gases.</span>
              </div>
            </div>
            <p className="mt-4 text-xs text-slate-400">
              * Nota: Las conexiones pueden cruzarse gráficamente sin implicar unión, siempre que el símbolo lo deje claro.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "3. Información Complementaria",
      shortTitle: "Info. Extra",
      icon: <Info className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-slate-600">
            En muchos diagramas, una línea por sí sola no es suficiente. Por eso, la norma define símbolos complementarios para aclarar detalles técnicos.
          </p>

          <div className="flex flex-col md:flex-row gap-6 mt-4">
            <div className="flex-1 bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
              <h4 className="text-lg font-semibold text-slate-800 mb-3 border-b pb-2">¿Qué aclaran?</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start"><span className="mr-2 text-blue-500">•</span>El tipo de medio (eléctrico, hidráulico, etc.)</li>
                <li className="flex items-start"><span className="mr-2 text-blue-500">•</span>Si la conexión es flexible o rígida</li>
                <li className="flex items-start"><span className="mr-2 text-blue-500">•</span>Si es una conexión interna</li>
                <li className="flex items-start"><span className="mr-2 text-blue-500">•</span>La forma física del conducto</li>
              </ul>
            </div>

            <div className="flex-1 bg-slate-50 rounded-lg p-5">
              <h4 className="text-lg font-semibold text-slate-800 mb-3">Ejemplos</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>✅ Tipo eléctrico, hidráulico o neumático</li>
                <li>✅ Conductos flexibles (mangueras)</li>
                <li>✅ Cables o unidades de tuberías</li>
                <li>✅ Conexiones internas dentro de un componente</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-slate-500 italic mt-2">
            Estos símbolos pueden colocarse sobre la línea o junto a ella con una línea guía.
          </p>
        </div>
      )
    },
    {
      id: 3,
      title: "4. Juntas y Extremos",
      shortTitle: "Juntas",
      icon: <CircleDot className="w-5 h-5" />,
      content: (
        <div className="space-y-5">
          <div className="flex items-center gap-4 bg-indigo-50 p-4 rounded-lg">
             <div className="bg-indigo-100 p-2 rounded-full">
               <CircleDot className="text-indigo-600" />
             </div>
             <div>
               <h4 className="font-bold text-indigo-900">Definición</h4>
               <p className="text-indigo-800 text-sm">
                 Las <strong>juntas</strong> indican el punto donde conexiones se unen físicamente. Los <strong>extremos</strong> muestran el final.
               </p>
             </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-slate-700 mb-2">Elementos Representados</h5>
              <ul className="list-disc list-inside space-y-1 text-slate-600 text-sm">
                <li>Juntas simples entre conexiones</li>
                <li>Uniones en T</li>
                <li>Uniones múltiples</li>
                <li>Articulaciones mecánicas (cardán)</li>
                <li>Extremos cerrados de tuberías</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-4 rounded border border-amber-200">
              <h5 className="font-bold text-amber-800 mb-2">⚠️ Regla Importante</h5>
              <p className="text-amber-900 text-sm">
                El punto de unión se representa con un <strong>punto cuyo diámetro debe ser proporcional</strong> al grosor de las líneas. 
              </p>
              <p className="text-amber-800 text-xs mt-2">
                * Puede omitirse en ciertos casos claros (como uniones en T).
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "5. Accesorios y Puertos",
      shortTitle: "Accesorios",
      icon: <Plug className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-slate-600">
            Símbolos para dispositivos que permiten conectar, desconectar o adaptar conexiones.
          </p>

          <div className="overflow-hidden rounded-lg border border-slate-200">
            <table className="min-w-full bg-white text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="py-3 px-4 text-left font-semibold text-slate-700">Elemento</th>
                  <th className="py-3 px-4 text-left font-semibold text-slate-700">Descripción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-3 px-4 font-medium text-slate-800">Puertos ISO</td>
                  <td className="py-3 px-4 text-slate-600">Puntos normalizados de conexión para fluidos.</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-slate-800">Acoples rápidos</td>
                  <td className="py-3 px-4 text-slate-600">Permiten unir o separar sin herramientas. Algunos tienen cierre automático para evitar fugas.</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-slate-800">Conectores</td>
                  <td className="py-3 px-4 text-slate-600">Enchufes y tomas (Macho-Hembra / Enchufe-Toma).</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="text-sm bg-gray-50 p-3 rounded text-gray-600">
            <strong>Nota de simplificación:</strong> Si no existe riesgo de confusión, el símbolo del puerto puede omitirse para simplificar el diagrama.
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "6. Simplificaciones Adicionales",
      shortTitle: "Simplificar",
      icon: <Minimize2 className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-slate-800">Reducción de Complejidad</h3>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">Eficiencia Visual</span>
          </div>
          <p className="text-slate-600">
            Las simplificaciones permiten reducir el "ruido" visual del diagrama sin perder información funcional, esencial en diagramas grandes.
          </p>

          <h4 className="font-bold text-slate-700 mt-4">Reglas Clave:</h4>
          <div className="grid gap-3">
             <div className="flex items-center p-3 bg-white border rounded shadow-sm">
               <span className="w-8 h-8 flex items-center justify-center bg-slate-100 rounded-full font-bold text-slate-600 mr-3">n</span>
               <p className="text-slate-600 text-sm">La letra <strong>n</strong> se sustituye por el número real de conexiones.</p>
             </div>
             <div className="flex items-center p-3 bg-white border rounded shadow-sm">
               <span className="w-8 h-8 flex items-center justify-center bg-slate-100 rounded-full font-bold text-slate-600 mr-3">≡</span>
               <p className="text-slate-600 text-sm">La <strong>secuencia de líneas</strong> debe mantenerse o identificarse claramente.</p>
             </div>
             <div className="flex items-center p-3 bg-white border rounded shadow-sm">
               <span className="w-8 h-8 flex items-center justify-center bg-slate-100 rounded-full font-bold text-slate-600 mr-3">∠</span>
               <p className="text-slate-600 text-sm">El <strong>ángulo del trazo</strong> indica hacia dónde continúan las conexiones ocultas.</p>
             </div>
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: "7. Definiciones Clave",
      shortTitle: "Glosario",
      icon: <BookType className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-slate-600 mb-4">
            La norma establece definiciones precisas para evitar ambigüedades en cualquier disciplina técnica.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { term: "Conexión", def: "Término general para cualquier unión funcional o física." },
              { term: "Conexión funcional", def: "Relación entre funciones." },
              { term: "Puerto", def: "Punto de entrada o salida de un fluido." },
              { term: "Conector", def: "Elemento que permite conexión y desconexión." },
              { term: "Acople rápido", def: "Conexión sin herramientas." },
              { term: "Rep. Monolínea", def: "Varias conexiones mostradas como una sola." },
            ].map((item, index) => (
              <div key={index} className="bg-slate-50 p-4 rounded hover:bg-white hover:shadow-md transition-all duration-200 cursor-default border border-transparent hover:border-slate-200">
                <h5 className="font-bold text-blue-700">{item.term}</h5>
                <p className="text-sm text-slate-600 mt-1">{item.def}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 7,
      title: "8. Cierre de la lección",
      shortTitle: "Conclusión",
      icon: <CheckCircle2 className="w-5 h-5" />,
      content: (
        <div className="text-center space-y-6 py-8">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          
          <h2 className="text-2xl font-bold text-slate-800">¡Lección Completada!</h2>
          
          <p className="text-slate-600 max-w-lg mx-auto">
            Dominar los símbolos de la <strong>ISO 14617-3</strong> es esencial para leer, diseñar y comunicar sistemas técnicos complejos con precisión.
          </p>

          <div className="bg-slate-50 inline-block p-6 rounded-lg text-left max-w-md mx-auto border border-slate-200">
            <h4 className="font-semibold text-slate-700 mb-2">Aplicable en:</h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-slate-600">
              <span className="flex items-center">⚡ Diagramas eléctricos</span>
              <span className="flex items-center">💧 Sistemas hidráulicos</span>
              <span className="flex items-center">🏭 Plantas de proceso</span>
              <span className="flex items-center">🤖 Automatización</span>
            </div>
          </div>
        </div>
      )
    }
  ];


  const progress = ((activeTab + 1) / sections.length) * 100;

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-900 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 text-white p-2 rounded-lg">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h1 className="font-bold text-lg leading-tight md:text-xl text-slate-800">
                ISO 14617-3:2002


              </h1>
            </div>
          </div>
          
          <button 
            className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        
        {/* Progress Bar */}
        <div className="h-1 bg-slate-100 w-full">
          <div 
            className="h-full bg-blue-500 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

<div className="max-w-7xl mx-auto w-full flex-1 flex flex-col gap-6 p-4 sm:p-6 lg:p-8">
        
       
<nav className="flex gap-2 overflow-x-auto border-b border-slate-200 pb-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  setActiveTab(section.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`
                  w-full flex items-center gap-3 px-3 py-3 text-sm font-medium rounded-md transition-colors
                  ${activeTab === section.id 
                    ? 'bg-blue-100 text-blue-700 border-r-4 border-blue-600 md:border-r-0 md:bg-white md:shadow-sm md:ring-1 md:ring-slate-200' 
                    : 'text-slate-600 hover:bg-slate-200 hover:text-slate-900'}
                `}
              >
                <span className={`${activeTab === section.id ? 'text-blue-600' : 'text-slate-400'}`}>
                  {section.icon}
                </span>
                <span className="truncate">{section.shortTitle}</span>
              </button>
            ))}
          </nav>

        {/* Main Content Area */}
        <main className="flex-1 min-w-0">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden min-h-[500px] flex flex-col">
            
            {/* Content Header */}
            <div className="bg-slate-50 border-b border-slate-100 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">
                  {activeTab + 1}
                </span>
                {sections[activeTab].title.split('. ')[1] || sections[activeTab].title}
              </h2>
            </div>

            {/* Dynamic Content */}
            <div className="p-6 sm:p-8 flex-1">
              <div className="prose prose-slate max-w-none animate-in fade-in slide-in-from-bottom-2 duration-300">
                {sections[activeTab].content}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}