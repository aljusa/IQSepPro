import React from 'react';
import { ArrowRight, Droplets, Gem, Beaker } from 'lucide-react';

// --- Visual Components ---

const VisualRecipiente = () => (
  <div className="flex flex-col items-center justify-center p-6 bg-blue-50 rounded-xl w-full h-64 border border-blue-100">
    <svg viewBox="0 0 100 120" className="w-32 h-auto">
      {/* Recipiente */}
      <path d="M 20 10 L 20 100 A 10 10 0 0 0 30 110 L 70 110 A 10 10 0 0 0 80 100 L 80 10 Z" fill="none" stroke="#475569" strokeWidth="4" />
      {/* Fluido */}
      <path d="M 22 40 L 22 100 A 8 8 0 0 0 30 108 L 70 108 A 8 8 0 0 0 78 100 L 78 40 Z" fill="#bae6fd" fillOpacity="0.7" />
      
      {/* Partículas Menos Densas (Arriba) */}
      <circle cx="35" cy="50" r="3" fill="#38bdf8" />
      <circle cx="50" cy="45" r="2.5" fill="#38bdf8" />
      <circle cx="65" cy="55" r="3" fill="#38bdf8" />
      <circle cx="45" cy="60" r="2" fill="#38bdf8" />
      
      {/* Partículas Más Densas (Fondo) */}
      <circle cx="30" cy="102" r="4" fill="#0f172a" />
      <circle cx="42" cy="104" r="3.5" fill="#0f172a" />
      <circle cx="52" cy="100" r="4.5" fill="#0f172a" />
      <circle cx="65" cy="103" r="4" fill="#0f172a" />
      <circle cx="72" cy="101" r="3" fill="#0f172a" />
      <circle cx="38" cy="96" r="3" fill="#1e293b" />
      <circle cx="60" cy="95" r="4" fill="#1e293b" />
    </svg>
    <p className="text-sm text-slate-600 mt-4 text-center font-medium">Sedimentación de partículas densas en el fondo</p>
  </div>
);

const VisualFuerzas = () => (
  <div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl w-full h-64 border border-slate-200">
    <svg viewBox="0 0 200 200" className="w-48 h-auto">
      {/* Fluido Background */}
      <rect x="0" y="0" width="200" height="200" fill="#e0f2fe" rx="12" />
      
      {/* Partícula */}
      <circle cx="100" cy="100" r="20" fill="#64748b" />
      
      {/* Fuerza de Flotación (Arriba) */}
      <line x1="100" y1="80" x2="100" y2="30" stroke="#16a34a" strokeWidth="4" markerEnd="url(#arrowhead-up)" />
      <text x="110" y="50" fontSize="12" fill="#16a34a" fontWeight="bold">Flotación (Fb)</text>
      
      {/* Peso (Abajo) */}
      <line x1="100" y1="120" x2="100" y2="180" stroke="#dc2626" strokeWidth="6" markerEnd="url(#arrowhead-down)" />
      <text x="110" y="160" fontSize="12" fill="#dc2626" fontWeight="bold">Peso (W)</text>

      {/* Markers for arrows */}
      <defs>
        <marker id="arrowhead-up" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#16a34a" />
        </marker>
        <marker id="arrowhead-down" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#dc2626" />
        </marker>
      </defs>
    </svg>
    <p className="text-sm text-slate-600 mt-4 text-center font-medium">Balance de fuerzas en una partícula</p>
  </div>
);

const VisualFactores = () => (
  <div className="flex flex-col p-6 bg-white rounded-xl w-full border border-gray-200">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Tamaño */}
      <div className="flex flex-col items-center text-center">
        <h4 className="text-sm font-bold text-slate-700 mb-2">Tamaño de Partícula</h4>
        <div className="flex gap-4 items-end h-24">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-slate-700 rounded-full mb-2"></div>
            <ArrowRight className="text-green-500 w-6 h-6 transform rotate-90" strokeWidth={3} />
          </div>
          <div className="flex flex-col items-center">
            <div className="w-4 h-4 bg-slate-400 rounded-full mb-8"></div>
            <ArrowRight className="text-green-400 w-4 h-4 transform rotate-90" />
          </div>
        </div>
        <p className="text-xs text-slate-500 mt-2">Mayor tamaño = mayor velocidad</p>
      </div>

      {/* Viscosidad */}
      <div className="flex flex-col items-center text-center border-t md:border-t-0 md:border-l border-slate-200 md:pt-0 pt-4">
        <h4 className="text-sm font-bold text-slate-700 mb-2">Viscosidad del Fluido</h4>
        <div className="flex gap-4 items-end h-24">
          <div className="flex flex-col items-center bg-blue-100 p-2 rounded w-16 h-20">
             <div className="w-6 h-6 bg-slate-600 rounded-full mt-1"></div>
             <ArrowRight className="text-red-400 w-4 h-4 transform rotate-90 mt-2" />
          </div>
          <div className="flex flex-col items-center bg-blue-50 p-2 rounded w-16 h-20">
             <div className="w-6 h-6 bg-slate-600 rounded-full mt-1"></div>
             <ArrowRight className="text-green-500 w-6 h-6 transform rotate-90 mt-2" strokeWidth={3} />
          </div>
        </div>
        <p className="text-xs text-slate-500 mt-2">Alta visc. (izq) vs Baja visc. (der)</p>
      </div>

      {/* Diferencia de Densidad */}
      <div className="flex flex-col items-center text-center border-t md:border-t-0 md:border-l border-slate-200 md:pt-0 pt-4">
        <h4 className="text-sm font-bold text-slate-700 mb-2">Diferencia de Densidad</h4>
        <div className="flex gap-4 items-end h-24">
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 bg-black rounded-full mb-2 border-2 border-slate-300 relative">
               <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-[10px] font-bold">Alta</span>
            </div>
            <ArrowRight className="text-green-500 w-6 h-6 transform rotate-90" strokeWidth={3} />
          </div>
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 bg-slate-300 rounded-full mb-8 relative">
               <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-[10px] font-bold">Baja</span>
            </div>
            <ArrowRight className="text-green-400 w-4 h-4 transform rotate-90" />
          </div>
        </div>
        <p className="text-xs text-slate-500 mt-2">Mayor dif. = mayor fuerza neta</p>
      </div>
    </div>
  </div>
);

const VisualStokes = () => (
  <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl w-full h-72 border border-slate-200 shadow-sm">
    <h4 className="text-sm font-bold text-slate-700 mb-4">Relación Velocidad vs Tamaño (Ley de Stokes)</h4>
    <svg viewBox="0 0 300 200" className="w-full max-w-sm h-auto">
      {/* Axes */}
      <line x1="40" y1="160" x2="280" y2="160" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow-axis)" />
      <line x1="40" y1="160" x2="40" y2="20" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow-axis)" />
      
      {/* Labels */}
      <text x="160" y="190" fontSize="12" fill="#475569" textAnchor="middle" fontWeight="500">Tamaño de partícula (d)</text>
      <text x="20" y="90" fontSize="12" fill="#475569" textAnchor="middle" transform="rotate(-90 20 90)" fontWeight="500">Velocidad (v)</text>
      
      {/* Curve (Quadratic relationship v ~ d^2) */}
      <path d="M 40 160 Q 150 160 260 40" fill="none" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" />
      
      {/* Points on curve */}
      <circle cx="100" cy="143" r="4" fill="#1e40af" />
      <circle cx="180" cy="100" r="4" fill="#1e40af" />
      <circle cx="240" cy="57" r="4" fill="#1e40af" />

      {/* Grid lines */}
      <line x1="40" y1="100" x2="180" y2="100" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4" />
      <line x1="180" y1="160" x2="180" y2="100" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4" />

      <defs>
        <marker id="arrow-axis" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <polygon points="0 0, 6 3, 0 6" fill="#94a3b8" />
        </marker>
      </defs>
    </svg>
    <p className="text-xs text-slate-500 mt-2">Crecimiento cuadrático de la velocidad según el diámetro.</p>
  </div>
);

const VisualAplicaciones = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
    <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-100 flex flex-col items-center text-center">
      <div className="bg-cyan-500 p-3 rounded-full text-white mb-3">
        <Droplets size={24} />
      </div>
      <h4 className="font-bold text-cyan-900 text-sm mb-1">Tratamiento de Aguas</h4>
      <p className="text-xs text-cyan-700">Remoción de sólidos suspendidos mediante sedimentadores.</p>
    </div>
    <div className="bg-amber-50 p-4 rounded-lg border border-amber-100 flex flex-col items-center text-center">
      <div className="bg-amber-600 p-3 rounded-full text-white mb-3">
        <Gem size={24} />
      </div>
      <h4 className="font-bold text-amber-900 text-sm mb-1">Industria Minera</h4>
      <p className="text-xs text-amber-700">Separación de minerales valiosos según su densidad.</p>
    </div>
    <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 flex flex-col items-center text-center">
      <div className="bg-indigo-500 p-3 rounded-full text-white mb-3">
        <Beaker size={24} />
      </div>
      <h4 className="font-bold text-indigo-900 text-sm mb-1">Clarificación</h4>
      <p className="text-xs text-indigo-700">Recuperación de sólidos y clarificación de líquidos en suspensiones.</p>
    </div>
  </div>
);

const VisualFlujo = () => (
  <div className="flex w-full items-center justify-center p-6 bg-slate-50 rounded-xl border border-slate-200 overflow-x-auto">
    <div className="flex items-center min-w-[600px] gap-2">
      <div className="px-4 py-3 bg-white border-2 border-slate-300 rounded-lg shadow-sm text-center font-medium text-slate-700 text-sm w-40">
        Mezcla Bruta <br/><span className="text-xs text-slate-500 font-normal">(Sólidos/Líquidos)</span>
      </div>
      
      <ArrowRight className="text-slate-400" />
      
      <div className="px-4 py-4 bg-blue-600 border-2 border-blue-700 rounded-lg shadow-md text-center font-bold text-white text-sm w-48 relative transform scale-105">
        Separación Gravitacional
        <span className="absolute -top-3 -right-3 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-2 py-1 rounded-full shadow">
          Etapa Inicial
        </span>
      </div>
      
      <ArrowRight className="text-slate-400" />
      
      <div className="px-4 py-3 bg-white border-2 border-slate-300 rounded-lg shadow-sm text-center font-medium text-slate-700 text-sm w-40">
        Técnicas Complejas <br/><span className="text-xs text-slate-500 font-normal">(Centrifugación, Filtros)</span>
      </div>

      <ArrowRight className="text-slate-400" />

      <div className="px-4 py-3 bg-green-50 border-2 border-green-500 rounded-lg shadow-sm text-center font-bold text-green-700 text-sm w-32">
        Producto Final
      </div>
    </div>
  </div>
);

// --- Main Layout Component ---

type SectionProps = {

    number:number;
    title:string;
    content:string;
    Visual: React.ComponentType;
}


const Section: React.FC<SectionProps> = ({ number, title, content, Visual }) => (
  <section className="mb-16 scroll-mt-20" id={`section-${number}`}>
    <div className="flex items-center gap-4 mb-6">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-lg shadow-md">
        {number}
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">{title}</h2>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div className="prose prose-slate prose-lg text-slate-600 leading-relaxed">
        <p>{content}</p>
      </div>
      <div className="w-full flex justify-center">
        <Visual />
      </div>
    </div>
  </section>
);

export default function App() {
  const data = [
    {
      title: "Introducción a la separación gravitacional",
      content: "La separación gravitacional es un método físico utilizado para separar componentes de una mezcla aprovechando la diferencia de densidades entre ellos. Su alcance se centra en sistemas donde las fases (sólidos o fluidos) pueden redistribuirse bajo la acción de la gravedad sin necesidad de fuerzas externas complejas. Es una técnica fundamental en ingeniería de procesos por su simplicidad y bajo costo operativo.",
      Visual: VisualRecipiente
    },
    {
      title: "Principio físico de la separación por gravedad",
      content: "El funcionamiento se basa en que, bajo la acción de la gravedad, cada componente de una mezcla experimenta una fuerza proporcional a su masa. Las partículas o fases más densas tienen mayor tendencia a desplazarse hacia abajo, mientras que las menos densas pueden permanecer suspendidas o ascender si el medio lo permite. Este proceso ocurre de manera natural hasta alcanzar un estado de equilibrio.",
      Visual: VisualFuerzas
    },
    {
      title: "Factores que afectan la separación",
      content: "La eficiencia de la separación gravitacional depende de varios factores clave. El tamaño de partícula influye porque partículas más grandes sedimentan más rápido. La viscosidad del fluido afecta la resistencia al movimiento, disminuyendo la velocidad de sedimentación en fluidos más viscosos. Finalmente, la diferencia de densidades entre las fases determina la magnitud de la fuerza neta que impulsa la separación.",
      Visual: VisualFactores
    },
    {
      title: "Velocidad de sedimentación y ley de Stokes",
      content: "La velocidad de sedimentación describe qué tan rápido una partícula se desplaza en el fluido. Para partículas pequeñas y en condiciones de flujo laminar, esta velocidad puede estimarse mediante la ley de Stokes, que establece que la velocidad aumenta con el tamaño de la partícula y la diferencia de densidad, y disminuye con la viscosidad del fluido. Este modelo es fundamental para diseñar equipos de separación.",
      Visual: VisualStokes
    },
    {
      title: "Aplicaciones industriales",
      content: "La separación gravitacional se utiliza ampliamente en diversas industrias. En el tratamiento de aguas, permite remover sólidos suspendidos mediante sedimentadores. En la industria minera, se emplea para separar minerales según su densidad. También se aplica en procesos donde se requiere clarificar líquidos o recuperar sólidos de suspensiones.",
      Visual: VisualAplicaciones
    },
    {
      title: "Importancia y alcance del método",
      content: "Este método constituye la base de muchas tecnologías de separación debido a su eficiencia cuando existen diferencias de densidad significativas. Aunque es limitado en sistemas con partículas muy finas o densidades similares, sigue siendo una solución inicial clave en el diseño de procesos, frecuentemente combinada con otras técnicas para mejorar el rendimiento.",
      Visual: VisualFlujo
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-200 text-slate-900">
      {/* Header Banner */}
      <header className="bg-slate-900 text-white pt-20 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          {/* Subtle background pattern */}
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Separación <span className="text-blue-400">Gravitacional</span>
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-16">
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <Section 
              number={index + 1}
              title={item.title}
              content={item.content}
              Visual={item.Visual}
            />
            {index < data.length - 1 && (
              <hr className="border-slate-100 my-16" />
            )}
          </React.Fragment>
        ))}
      </main>
    </div>
  );
}