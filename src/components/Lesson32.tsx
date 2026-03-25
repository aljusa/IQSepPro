import React from 'react';
import { 
  ArrowRight, 
  Wind, 
  Droplets, 
  Factory, 
  Pickaxe, 
  CheckCircle2, 
  XCircle, 
  Settings 
} from 'lucide-react';

// --- Componentes Visuales (Diagramas) ---

const CycloneSchematic = () => (
  <div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl border border-slate-200">
    <svg width="250" height="250" viewBox="0 0 200 250" className="overflow-visible">
      {/* Salida superior */}
      <rect x="85" y="10" width="30" height="30" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
      <text x="125" y="25" fontSize="12" fill="#334155">Salida (Fluido limpio)</text>
      <path d="M100 40 L100 0" stroke="#3b82f6" strokeWidth="3" markerEnd="url(#arrowhead-up)" />
      
      {/* Entrada tangencial */}
      <rect x="20" y="40" width="40" height="20" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
      <text x="0" y="30" fontSize="12" fill="#334155">Entrada</text>
      <path d="M10 50 L55 50" stroke="#334155" strokeWidth="3" markerEnd="url(#arrowhead)" />

      {/* Cuerpo cilíndrico */}
      <rect x="60" y="40" width="80" height="50" fill="#e2e8f0" stroke="#475569" strokeWidth="2" />
      
      {/* Cuerpo cónico */}
      <polygon points="60,90 140,90 115,190 85,190" fill="#e2e8f0" stroke="#475569" strokeWidth="2" />
      
      {/* Descarga inferior */}
      <rect x="85" y="190" width="30" height="30" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
      <text x="125" y="210" fontSize="12" fill="#334155">Descarga (Sólidos)</text>
      <path d="M100 190 L100 240" stroke="#8b5cf6" strokeWidth="3" markerEnd="url(#arrowhead-down)" />

      {/* Definiciones de flechas */}
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#334155" />
        </marker>
        <marker id="arrowhead-up" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
        </marker>
        <marker id="arrowhead-down" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#8b5cf6" />
        </marker>
      </defs>
    </svg>
  </div>
);

const CycloneFlow = () => (
  <div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl border border-slate-200">
    <svg width="200" height="250" viewBox="0 0 200 250" className="overflow-visible">
      {/* Cuerpo simplificado */}
      <rect x="60" y="40" width="80" height="50" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4" />
      <polygon points="60,90 140,90 115,190 85,190" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4" />
      
      {/* Espiral descendente (Sólidos) */}
      <path d="M 60 60 Q 130 70 130 90 T 70 120 T 120 150 T 90 180" fill="none" stroke="#8b5cf6" strokeWidth="3" strokeDasharray="5" />
      <circle cx="90" cy="180" r="4" fill="#8b5cf6" />
      <circle cx="95" cy="185" r="3" fill="#8b5cf6" />
      <circle cx="105" cy="182" r="5" fill="#8b5cf6" />
      
      {/* Corriente ascendente (Fluido limpio) */}
      <path d="M 100 170 L 100 20" fill="none" stroke="#3b82f6" strokeWidth="4" markerEnd="url(#arrowhead-up)" />
      
      <text x="145" y="110" fontSize="12" fill="#8b5cf6" className="max-w-[80px]">Flujo en espiral (Fuerza centrífuga)</text>
      <text x="110" y="60" fontSize="12" fill="#3b82f6">Fluido limpio</text>
    </svg>
  </div>
);

const CycloneTypes = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="bg-sky-50 p-6 rounded-xl border border-sky-200 flex flex-col items-center text-center">
      <div className="bg-sky-100 p-4 rounded-full mb-4">
        <Wind className="w-8 h-8 text-sky-600" />
      </div>
      <h4 className="font-bold text-sky-800 mb-2">Ciclón Gas-Sólido</h4>
      <p className="text-sm text-sky-700 mb-4">Mezcla de entrada: Gas con partículas de polvo.</p>
      <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-white px-3 py-1 rounded-full shadow-sm">
        <Factory className="w-4 h-4" /> Ventilación Industrial
      </div>
    </div>
    
    <div className="bg-teal-50 p-6 rounded-xl border border-teal-200 flex flex-col items-center text-center">
      <div className="bg-teal-100 p-4 rounded-full mb-4">
        <Droplets className="w-8 h-8 text-teal-600" />
      </div>
      <h4 className="font-bold text-teal-800 mb-2">Hidrociclón (Líquido-Sólido)</h4>
      <p className="text-sm text-teal-700 mb-4">Mezcla de entrada: Suspensión líquida con sólidos.</p>
      <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-white px-3 py-1 rounded-full shadow-sm">
        <Pickaxe className="w-4 h-4" /> Minería y Clasificación
      </div>
    </div>
  </div>
);


type TrendType = "down" | "up";

type GraphProps = {
  title: string;
  xLabel: string;
  trend: TrendType;
};

const EfficiencyGraphs: React.FC = () => {
  const Graph: React.FC<GraphProps> = ({ title, xLabel, trend }) => (
  <div className="flex flex-col items-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
      <h5 className="text-sm font-semibold text-slate-700 mb-2">{title}</h5>
      <svg width="150" height="100" className="bg-slate-50">
        {/* Ejes */}
        <line x1="20" y1="10" x2="20" y2="80" stroke="#94a3b8" strokeWidth="2" />
        <line x1="20" y1="80" x2="140" y2="80" stroke="#94a3b8" strokeWidth="2" />
        {/* Línea de tendencia */}
        {trend === 'down' ? (
          <path d="M 25 20 Q 80 40 130 75" fill="none" stroke="#3b82f6" strokeWidth="3" />
        ) : (
          <path d="M 25 75 Q 80 50 130 20" fill="none" stroke="#10b981" strokeWidth="3" />
        )}
        <text x="5" y="50" fontSize="10" fill="#64748b" transform="rotate(-90 10,50)">Eficiencia</text>
        <text x="60" y="95" fontSize="10" fill="#64748b">{xLabel}</text>
      </svg>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Graph title="Vs. Diámetro" xLabel="Diámetro del Ciclón" trend="down" />
      <Graph title="Vs. Velocidad" xLabel="Velocidad de Entrada" trend="up" />
      <Graph title="Vs. Tamaño Partícula" xLabel="Tamaño de Partícula" trend="up" />
    </div>
  );
};

const ProsConsTable = () => (
  <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr>
          <th className="bg-emerald-50 text-emerald-800 p-4 border-b border-emerald-200 w-1/2">
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> Ventajas</div>
          </th>
          <th className="bg-rose-50 text-rose-800 p-4 border-b border-rose-200 w-1/2">
            <div className="flex items-center gap-2"><XCircle className="w-5 h-5" /> Limitaciones</div>
          </th>
        </tr>
      </thead>
      <tbody className="bg-white">
        <tr>
          <td className="p-4 border-b border-slate-100 text-slate-700">Equipos altamente compactos.</td>
          <td className="p-4 border-b border-slate-100 text-slate-700">Baja eficiencia en partículas muy finas.</td>
        </tr>
        <tr>
          <td className="p-4 border-b border-slate-100 text-slate-700">Bajo costo de adquisición y operación.</td>
          <td className="p-4 border-b border-slate-100 text-slate-700">Dificultad con partículas de muy baja densidad.</td>
        </tr>
        <tr>
          <td className="p-4 text-slate-700">Sin partes móviles; mantenimiento sencillo y económico.</td>
          <td className="p-4 text-slate-700">Requiere un flujo constante para mantener la fuerza centrífuga.</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const ProcessDiagram = () => (
  <div className="flex flex-col md:flex-row items-center justify-between bg-slate-50 p-6 rounded-xl border border-slate-200 gap-4">
    <div className="flex flex-col items-center text-center w-32">
      <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mb-2 border-2 border-slate-300">
        <Settings className="text-slate-500 w-8 h-8" />
      </div>
      <span className="text-sm font-medium text-slate-700">Mezcla Bruta</span>
    </div>
    
    <ArrowRight className="text-slate-400 hidden md:block" />
    
    <div className="flex flex-col items-center text-center w-40 relative">
      <div className="absolute -top-3 bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
        Etapa Preliminar
      </div>
      <div className="w-20 h-20 bg-blue-500 rounded-lg flex items-center justify-center mb-2 shadow-lg shadow-blue-200 border-2 border-blue-600">
        <Wind className="text-white w-10 h-10" />
      </div>
      <span className="text-sm font-bold text-blue-900">Ciclón Separador</span>
    </div>

    <ArrowRight className="text-slate-400 hidden md:block" />

    <div className="flex flex-col items-center text-center w-40 relative">
       <div className="absolute -top-3 bg-slate-200 text-slate-600 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
        Etapa Secundaria
      </div>
      <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-2 border-2 border-slate-300 shadow-sm">
        <div className="grid grid-cols-2 gap-1">
          <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
          <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
          <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
          <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
        </div>
      </div>
      <span className="text-sm font-medium text-slate-700">Filtro Fino</span>
    </div>
    
    <ArrowRight className="text-slate-400 hidden md:block" />

    <div className="flex flex-col items-center text-center w-32">
      <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-2 border-2 border-emerald-300">
        <CheckCircle2 className="text-emerald-600 w-8 h-8" />
      </div>
      <span className="text-sm font-medium text-emerald-800">Fluido Purificado</span>
    </div>
  </div>
);

// --- Componente de Sección Reutilizable ---
type SectionProps = {

    number:string;
    title:string;
    content:React.ReactNode;
    visual: React.ReactNode;
    isReverse: boolean;
}


const Section: React.FC<SectionProps> = ({ number, title, content, visual, isReverse=false }) => (
  <section className
  ="mb-16">
    <div className="flex items-center gap-4 mb-6">
      <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md">
        {number}
      </div>
      <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
    </div>
    
    <div className={`flex flex-col ${isReverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}>
      <div className="w-full lg:w-1/2 text-slate-600 leading-relaxed text-lg">
        {content}
      </div>
      <div className="w-full lg:w-1/2">
        {visual}
      </div>
    </div>
  </section>
);

// --- Componente Principal de la Página ---

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-200 selection:text-blue-900">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm py-12 px-6 mb-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Ciclones y Sistemas de Separación
          </h1>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="max-w-5xl mx-auto px-6 pb-20">
        
        <Section 
          number="1"
          title="Introducción a los Ciclones"
          isReverse={false}
          content={
            <p>
              Los ciclones son equipos de separación que utilizan la fuerza centrífuga para remover partículas sólidas suspendidas en un fluido, ya sea gas o líquido. Su alcance incluye aplicaciones industriales donde se requiere una separación <strong>continua, eficiente y de bajo costo</strong>, especialmente en corrientes con alta carga de partículas.
            </p>
          }
          visual={<CycloneSchematic />}
        />

        <Section 
          number="2"
          title="Principio de Operación"
          isReverse={true}
          content={
            <p>
              El fluido ingresa al ciclón de manera tangencial, generando un <strong>flujo rotacional en espiral</strong>. Este movimiento produce una fuerza centrífuga que actúa sobre las partículas, empujándolas hacia las paredes del equipo. Al chocar con las paredes, las partículas pierden energía y descienden hacia la parte inferior, mientras el fluido limpio asciende por el centro y sale por la parte superior.
            </p>
          }
          visual={<CycloneFlow />}
        />

        <Section 
          number="3"
          title="Tipos según el Sistema de Fases"
          isReverse={false}

          content={
            <div className="space-y-4">
              <p>Existen dos configuraciones principales según el tipo de mezcla tratada:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Ciclones gas–sólido:</strong> Se utilizan para remover polvo o partículas de corrientes gaseosas, como en sistemas de ventilación industrial.</li>
                <li><strong>Hidrociclones (líquido–sólido):</strong> Operan con líquidos y se emplean para separar partículas sólidas en suspensiones, siendo muy comunes en la industria minera.</li>
              </ul>
            </div>
          }
          visual={<CycloneTypes />}
        />

        <Section 
          number="4"
          title="Factores que Afectan la Eficiencia"
          isReverse={true}
          content={
            <p>
              El desempeño de un ciclón depende de variables de diseño y operación. Un <strong>menor diámetro</strong> del ciclón generalmente incrementa la fuerza centrífuga y mejora la separación. Una <strong>mayor velocidad de entrada</strong> también aumenta la eficiencia, aunque puede incrementar la caída de presión. Además, partículas más grandes y con mayor densidad se separan con mayor facilidad, mientras que fluidos más viscosos reducen la eficiencia.
            </p>
          }
          visual={<EfficiencyGraphs />}
        />

        <Section 
          number="5"
          title="Ventajas y Limitaciones"
          isReverse={false}
          content={
            <p>
              Los ciclones destacan por ser equipos compactos, de bajo costo, sin partes móviles y de fácil mantenimiento. Sin embargo, su principal desafío radica en el límite físico de la fuerza centrífuga generada: presentan <strong>limitaciones en la separación de partículas muy finas o de baja densidad</strong>, ya que estas no experimentan suficiente inercia para ser separadas eficientemente del fluido principal.
            </p>
          }
          visual={<ProsConsTable />}
        />

        <Section 
          number="6"
          title="Importancia en los Procesos Industriales"
          isReverse={true}
          content={
            <p>
              Los ciclones amplían el principio de separación más allá de la simple gravedad, al introducir fuerzas centrífugas que aceleran drásticamente el proceso. Por ello, son ampliamente utilizados como <strong>etapas preliminares o complementarias</strong> en sistemas de separación más complejos, aliviando la carga de equipos más sensibles (como filtros de mangas o membranas) y mejorando la eficiencia global del proceso.
            </p>
          }
          visual={<ProcessDiagram />}
        />

      </main>
    </div>
  );
}