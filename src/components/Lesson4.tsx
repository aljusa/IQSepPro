import React, { useState } from 'react';
import { 
  BookOpen, 
  Settings, 
  Sliders, 
  Activity, 
  ArrowRightLeft, 
  Box, 
  Minimize2, 
  Key, 
  CheckCircle,
  Info,
  Menu
} from 'lucide-react';

// --- Interfaces ---
interface SectionContent {
  id: number;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

// --- Data: Contenido de la Lección ---
const lessonData: SectionContent[] = [
  {
    id: 0,
    title: "1. Introducción",
    icon: <BookOpen className="w-5 h-5" />,
    content: (
      <div className="space-y-6">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
          <h3 className="font-bold text-blue-800 text-lg mb-2">Objetivo de la Norma</h3>
          <p className="text-gray-700 leading-relaxed">
            La <strong>ISO 14617-2:2002</strong> forma parte de una serie de normas cuyo objetivo es normalizar los símbolos gráficos usados en diagramas técnicos, especialmente en ingeniería de procesos, automatización, electricidad y control.
          </p>
        </div>
        <p className="text-gray-600">
          Esta <strong>Parte 2</strong> se enfoca en símbolos de aplicación general. No representan equipos específicos (como una bomba concreta), sino funciones, propiedades, direcciones y características comunes que se combinan para construir diagramas complejos.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold text-gray-800 mb-2">Áreas de Aplicación</h4>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
              <li>Ingeniería de procesos</li>
              <li>Automatización</li>
              <li>Sistemas eléctricos</li>
              <li>Sistemas de control</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm flex items-center justify-center">
            <div className="text-center">
              <span className="block text-4xl mb-2">🌍</span>
              <span className="text-sm font-medium text-gray-500">Estándar Internacional</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 1,
    title: "2. Componentes Generales",
    icon: <Settings className="w-5 h-5" />,
    content: (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-slate-800 border-b pb-2">¿Qué representan?</h3>
        <p className="text-gray-600">
          Son símbolos base utilizados cuando no existe un símbolo específico o cuando el sistema es demasiado complejo. Generalmente se representan con una forma geométrica básica (como un rectángulo).
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {['Componentes', 'Dispositivos', 'Unidades funcionales', 'Equipos', 'Plantas', 'Funciones'].map((item, idx) => (
            <div key={idx} className="bg-slate-100 text-slate-700 px-3 py-2 rounded text-center text-sm font-medium">
              {item}
            </div>
          ))}
        </div>

        <h3 className="text-xl font-bold text-slate-800 border-b pb-2 mt-8">Información Complementaria</h3>
        <p className="text-gray-600 mb-4">El símbolo genérico se enriquece añadiendo:</p>
        
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="bg-blue-100 text-blue-600 p-1 rounded mr-3 mt-1"><Info size={16}/></span>
            <span className="text-gray-700"><strong>Símbolos de funciones:</strong> Amplificación, conversión, retardo.</span>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-100 text-blue-600 p-1 rounded mr-3 mt-1"><span className="text-xs font-bold">f(x)</span></span>
            <span className="text-gray-700"><strong>Matemáticas:</strong> Letras o fórmulas.</span>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-100 text-blue-600 p-1 rounded mr-3 mt-1"><span className="text-xs font-bold">TXT</span></span>
            <span className="text-gray-700"><strong>Texto:</strong> Descripciones cortas (preferiblemente en inglés).</span>
          </li>
        </ul>
        
        <div className="bg-green-50 text-green-800 p-3 rounded-md text-sm mt-4 border border-green-200">
          👉 <strong>Nota:</strong> Esto permite la construcción modular de símbolos complejos.
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "3. Variabilidad",
    icon: <Sliders className="w-5 h-5" />,
    content: (
      <div className="space-y-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="p-3 bg-orange-100 text-orange-600 rounded-full">
            <Sliders size={24} />
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-800">Concepto de Variabilidad</h3>
            <p className="text-gray-600 text-sm">Capacidad de cambiar una propiedad (resistencia, caudal, ganancia).</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:border-orange-300 transition-colors">
            <h4 className="font-bold text-gray-800 mb-2">Ajustabilidad</h4>
            <p className="text-sm text-gray-600">El valor puede ajustarse manual o automáticamente durante la operación.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:border-orange-300 transition-colors">
            <h4 className="font-bold text-gray-800 mb-2">Ajustabilidad Previa</h4>
            <p className="text-sm text-gray-600">Solo puede ajustarse <em>antes</em> de la operación normal, no durante.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:border-orange-300 transition-colors">
            <h4 className="font-bold text-gray-800 mb-2">Variabilidad Inherente</h4>
            <p className="text-sm text-gray-600">Depende de las características físicas intrínsecas del componente.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:border-orange-300 transition-colors">
            <h4 className="font-bold text-gray-800 mb-2">Variabilidad No Lineal</h4>
            <p className="text-sm text-gray-600">El cambio en la propiedad no es proporcional a la entrada.</p>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 italic mt-4">
          "Visualmente, estos símbolos suelen ser flechas diagonales que cruzan el componente."
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "4. Fuerza y Flujo",
    icon: <Activity className="w-5 h-5" />,
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 text-lg">
          Esta categoría describe cómo una magnitud física varía en el tiempo. Usan formas gráficas similares a diagramas temporales.
        </p>

        <div className="bg-slate-800 text-white rounded-lg p-6">
          <h4 className="text-blue-300 font-bold mb-4 uppercase text-xs tracking-wider">Magnitudes Comunes</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>Fuerza</div>
            <div className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>Señales eléctricas</div>
            <div className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>Caudal de masa</div>
            <div className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>Movimiento</div>
          </div>
        </div>

        <h4 className="font-bold text-gray-800 mt-6 mb-3">Ejemplos de Representación</h4>
        <div className="space-y-2">
          {[
            { label: "Constante", desc: "Línea recta horizontal" },
            { label: "Sinusoidal", desc: "Onda suave (corriente alterna, vibración)" },
            { label: "Pulsos / Escalones", desc: "Cambios abruptos de nivel" },
            { label: "Digital / Binario", desc: "Valores discretos (0 y 1)" }
          ].map((item, idx) => (
            <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded border border-gray-100">
              <span className="font-semibold text-slate-700">{item.label}</span>
              <span className="text-xs text-gray-500">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "5. Direcciones",
    icon: <ArrowRightLeft className="w-5 h-5" />,
    content: (
      <div className="space-y-6">
        <div className="bg-indigo-50 p-4 rounded-lg">
          <h3 className="font-bold text-indigo-800 mb-2">Función</h3>
          <p className="text-indigo-700 text-sm">Indican hacia dónde ocurre una acción, flujo de fluido, transmisión de energía o señal de información.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border border-indigo-100 p-4 rounded-lg flex flex-col items-center text-center">
            <div className="mb-2 text-indigo-500">➡️</div>
            <h4 className="font-bold text-sm">Dirección Única</h4>
            <p className="text-xs text-gray-500 mt-1">Flujo en un solo sentido.</p>
          </div>
          <div className="border border-indigo-100 p-4 rounded-lg flex flex-col items-center text-center">
            <div className="mb-2 text-indigo-500">↔️</div>
            <h4 className="font-bold text-sm">Bidireccional</h4>
            <p className="text-xs text-gray-500 mt-1">Flujo en ambos sentidos.</p>
          </div>
          <div className="border border-indigo-100 p-4 rounded-lg flex flex-col items-center text-center">
            <div className="mb-2 text-indigo-500">📡</div>
            <h4 className="font-bold text-sm">Transmisión</h4>
            <p className="text-xs text-gray-500 mt-1">Simplex, Half-duplex, Full-duplex.</p>
          </div>
          <div className="border border-indigo-100 p-4 rounded-lg flex flex-col items-center text-center">
            <div className="mb-2 text-indigo-500">🔄</div>
            <h4 className="font-bold text-sm">Movimiento Circular</h4>
            <p className="text-xs text-gray-500 mt-1">Horario, antihorario o alternado.</p>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 mt-4">
          * Las flechas pueden colocarse sobre líneas de conexión o junto al símbolo del componente.
        </p>
      </div>
    )
  },
  {
    id: 5,
    title: "6. Materiales",
    icon: <Box className="w-5 h-5" />,
    content: (
      <div className="space-y-6">
        <section>
          <h3 className="font-bold text-lg text-slate-800 mb-3 flex items-center">
            <span className="bg-slate-200 p-1 rounded mr-2">📦</span> Envolturas (Tanques)
          </h3>
          <p className="text-gray-700 mb-2">
            Recinto que forma parte funcional del componente (ej. tanque de presión).
          </p>
          <div className="bg-yellow-50 text-yellow-800 text-sm p-3 rounded border border-yellow-200">
            ⚠️ Solo se representa cuando es relevante para la función, no si es una simple carcasa de protección.
          </div>
        </section>

        <section className="mt-6">
          <h3 className="font-bold text-lg text-slate-800 mb-3 flex items-center">
             🧪 Materiales Definidos
          </h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {['Líquidos', 'Gases', 'Material Aislante', 'Imán Permanente', 'Bimetal', 'Químicos Genéricos'].map((mat, idx) => (
              <div key={idx} className="bg-white border p-2 rounded shadow-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-2"></span>
                {mat}
              </div>
            ))}
          </div>
        </section>
      </div>
    )
  },
  {
    id: 6,
    title: "7. Simplificaciones",
    icon: <Minimize2 className="w-5 h-5" />,
    content: (
      <div className="space-y-6">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-800">Menos es Más</h3>
          <p className="text-gray-500">Reducir complejidad visual sin perder datos.</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-5">
          <h4 className="font-semibold text-gray-700 mb-4 border-b pb-2">¿Qué se simplifica?</h4>
          <ul className="space-y-4">
            <li className="flex justify-between items-center">
              <span className="text-gray-600">Elementos idénticos</span>
              <span className="bg-gray-100 px-2 py-1 rounded text-xs font-mono">x3</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-600">Grupos repetidos</span>
              <span className="bg-gray-100 px-2 py-1 rounded text-xs font-mono">Grupo A (n)</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-600">Conexiones múltiples</span>
              <span className="bg-gray-100 px-2 py-1 rounded text-xs font-mono">/ / /</span>
            </li>
          </ul>
        </div>
        
        <p className="text-sm text-gray-500 mt-4">
          Se utilizan marcas con números o letras (ej: <em>n</em>) para indicar la cantidad, evitando dibujar el mismo símbolo 50 veces.
        </p>
      </div>
    )
  },
  {
    id: 7,
    title: "8. Términos Clave",
    icon: <Key className="w-5 h-5" />,
    content: (
      <div className="space-y-4">
        <p className="text-gray-600 mb-4">
          Para evitar ambigüedades técnicas entre países, la norma define conceptos esenciales:
        </p>
        <div className="grid gap-3">
          {[
            { term: "Histéresis", def: "Tendencia de un material a conservar una de sus propiedades." },
            { term: "Banda muerta", def: "Rango en el cual la señal de entrada no produce cambios en la salida." },
            { term: "Compensación", def: "Corrección de errores debidos a variaciones externas." },
            { term: "Dirección de referencia", def: "Sentido convencional adoptado como positivo." },
            { term: "Conversión", def: "Transformación de una magnitud física en otra." }
          ].map((item, idx) => (
            <div key={idx} className="group p-3 rounded-lg border border-transparent hover:bg-white hover:shadow-md hover:border-gray-200 transition-all cursor-default">
              <span className="block font-bold text-blue-700 mb-1">{item.term}</span>
              <span className="text-sm text-gray-600">{item.def}</span>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 8,
    title: "9. Conclusión",
    icon: <CheckCircle className="w-5 h-5" />,
    content: (
      <div className="text-center space-y-8 py-6">
        <div className="inline-block p-4 bg-green-100 rounded-full text-green-600 mb-2">
          <CheckCircle size={48} />
        </div>
        
        <h2 className="text-2xl font-bold text-gray-800">¡Lección Completada!</h2>
        
        <p className="text-gray-600 max-w-lg mx-auto">
          La <strong>ISO 14617-2</strong> no solo presenta símbolos, sino un lenguaje gráfico universal.
        </p>

        <div className="bg-slate-800 text-white p-6 rounded-xl shadow-lg text-left max-w-md mx-auto">
          <h3 className="font-bold mb-4 text-blue-300">Dominar esto te permite:</h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <CheckCircle size={16} className="text-green-400 mr-3" />
              Leer diagramas profesionales con precisión.
            </li>
            <li className="flex items-center">
              <CheckCircle size={16} className="text-green-400 mr-3" />
              Diseñar documentación estandarizada.
            </li>
            <li className="flex items-center">
              <CheckCircle size={16} className="text-green-400 mr-3" />
              Comunicar ideas sin barreras de idioma.
            </li>
          </ul>
        </div>
      </div>
    )
  }
];

// --- Componentes UI ---

const TabButton = ({ 
  section, 
  isActive, 
  onClick 
}: { 
  section: SectionContent; 
  isActive: boolean; 
  onClick: () => void; 
}) => {
  return (
    <button
      onClick={onClick}
      className={`
         w-full
    px-2
    py-2
    text-sm
    truncate
    whitespace-nowrap
    overflow-hidden
  "
        ${isActive 
          ? 'border-blue-600 text-blue-700 bg-blue-50' 
          : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
        }
      `}
    >
      <span className="mr-2">{section.icon}</span>
      {section.title.split('.')[1] || section.title} {/* Mostrar solo texto después del número en tabs pequeños */}
    </button>
  );
};

const ContentCard = ({ section }: { section: SectionContent }) => {
  return (
    <div className="animate-fade-in-up">
      <div className="mb-6 border-b pb-4">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
          <span className="p-2 bg-blue-100 text-blue-600 rounded-lg">{section.icon}</span>
          {section.title}
        </h2>
      </div>
      <div className="prose max-w-none">
        {section.content}
      </div>
    </div>
  );
};

// --- Componente Principal ---

export default function App() {
  const [activeTab, setActiveTab] = useState(0);



  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans pb-12">
      {/* Header */}
      <header className="bg-slate-900 text-white shadow-lg top-0 z-20">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Menu size={20} />
            </div>
            <div>
              <h1 className="text-lg font-bold leading-tight">ISO 14617-2:2002</h1>
            </div>
          </div>
         
        </div>
      </header>

      {/* Tabs Navigation */}
      <nav className="bg-white border-t border-gray-200">
        <div     className='grid grid-cols-9 '   >
          {lessonData.map((section, index) => (
            <TabButton 
              key={section.id} 
              section={section} 
              isActive={activeTab === index} 
              onClick={() => setActiveTab(index)} 
            />
          ))}
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-xl p-6 md:p-10 min-h-[400px] flex flex-col justify-between transition-all">
          
          {/* Content */}
          <ContentCard section={lessonData[activeTab]} />

        
        </div>
      </main>

      {/* Global Style for hiding scrollbar but keeping functionality */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}