import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  
  ResponsiveContainer,
  Label
} from 'recharts';

// --- DEFINICIÓN DE TIPOS ---

interface LessonBlock {
  id: number;
  tabLabel: string;
  title: string;
  description: string;
}

interface LayoutProps {
  children: React.ReactNode;
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface DiagramRenderProps {
  blockId: number;
}

// --- DATOS DE LA LECCIÓN ---

const LESSON_BLOCKS: LessonBlock[] = [
  {
    id: 1,
    tabLabel: "1. Principio",
    title: "Introducción al principio de la fuerza centrífuga",
    description: "El proceso de centrifugación se fundamenta en la acción de la fuerza centrífuga, un concepto clave de la física del movimiento circular. Comprender este principio permite explicar por qué las partículas de una mezcla se separan al ser sometidas a rotación."
  },
  {
    id: 2,
    tabLabel: "2. Definición",
    title: "Definición de la fuerza centrífuga",
    description: "La fuerza centrífuga es una fuerza aparente que se manifiesta en sistemas en rotación. Actúa sobre los objetos desplazándolos hacia el exterior del eje de giro. Aunque no es una fuerza fundamental, su efecto es observable desde un sistema de referencia en movimiento circular."
  },
  {
    id: 3,
    tabLabel: "3. Movimiento",
    title: "Movimiento circular y efecto sobre las partículas",
    description: "Cuando una mezcla se somete a rotación, cada partícula describe una trayectoria circular. Durante este movimiento, la fuerza centrífuga actúa sobre todas ellas, pero su efecto varía según sus propiedades físicas. Esto genera un desplazamiento diferencial dentro del recipiente."
  },
  {
    id: 4,
    tabLabel: "4. Masa",
    title: "Influencia de la masa en la fuerza centrífuga",
    description: "Las partículas con mayor masa experimentan una fuerza centrífuga más intensa. Como consecuencia, se desplazan con mayor rapidez hacia la periferia del sistema, lo que favorece su sedimentación en comparación con partículas más ligeras."
  },
  {
    id: 5,
    tabLabel: "5. Distribución",
    title: "Distribución espacial de las partículas",
    description: "Durante la centrifugación, las partículas más densas o pesadas se concentran en las regiones más alejadas del eje de rotación, mientras que las más ligeras permanecen en zonas cercanas al centro. Esta organización espacial es la base de la separación."
  },
  {
    id: 6,
    tabLabel: "6. Velocidad",
    title: "Relación con la velocidad angular",
    description: "La velocidad angular es un factor determinante en la magnitud de la fuerza centrífuga. A mayor velocidad de rotación, mayor será la fuerza ejercida sobre las partículas, incrementando la rapidez y eficacia de la separación."
  },
  {
    id: 7,
    tabLabel: "7. Distancia",
    title: "Influencia de la distancia al eje",
    description: "La fuerza centrífuga también depende de la distancia entre la partícula y el eje de rotación. Cuanto mayor es esta distancia, mayor es la fuerza que actúa sobre la partícula, lo que intensifica su desplazamiento hacia el exterior."
  },
  {
    id: 8,
    tabLabel: "8. Aplicación",
    title: "Aplicación en la separación de mezclas",
    description: "La acción combinada de la masa, la velocidad y la distancia al eje permite separar eficazmente componentes de una mezcla. Este principio se aplica para separar sólidos de líquidos, líquidos inmiscibles de distinta densidad y para clarificar soluciones en diversos contextos científicos e industriales."
  },
  {
    id: 9,
    tabLabel: "9. Síntesis",
    title: "Síntesis del principio",
    description: "La fuerza centrífuga es el mecanismo central que impulsa la centrifugación. Su acción diferencial sobre las partículas, determinada por variables físicas específicas, permite lograr separaciones rápidas y controladas en múltiples aplicaciones."
  }
];

// --- COMPONENTES BASE (ESTRUCTURA Y UI) ---

const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div className={`grid bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8 ${className}`}>
      {children}
    </div>
  );
};

const LessonLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="grid min-h-screen bg-slate-50 font-sans text-slate-800 grid-rows-[auto_1fr]">
      {children}
    </div>
  );
};

// --- COMPONENTES DE VISUALIZACIÓN (DIAGRAM RENDER) ---

const DefsMarcador: React.FC = () => (
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
    </marker>
    <marker id="arrow-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#2563eb" />
    </marker>
    <marker id="arrow-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#dc2626" />
    </marker>
  </defs>
);

const DiagramRender: React.FC<DiagramRenderProps> = ({ blockId }) => {
  // Renderizado condicional estricto basado en el ID del bloque
  switch (blockId) {
    case 1:
      // Esquema de centrífuga
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full max-w-sm text-slate-700">
          <DefsMarcador />
          <circle cx="100" cy="100" r="15" fill="#475569" />
          {/* Brazos y tubos girando */}
          {[0, 90, 180, 270].map((angle) => (
            <g key={angle} transform={`rotate(${angle} 100 100)`}>
              <rect x="96" y="20" width="8" height="65" fill="#cbd5e1" rx="4" />
              <rect x="92" y="15" width="16" height="30" fill="#94a3b8" rx="2" />
              {/* Fuerza centrífuga */}
              <line x1="100" y1="15" x2="100" y2="-10" stroke="#dc2626" strokeWidth="3" markerEnd="url(#arrow-red)" />
            </g>
          ))}
          <path d="M 40 100 A 60 60 0 0 1 100 40" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow-blue)" />
          <path d="M 160 100 A 60 60 0 0 1 100 160" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow-blue)" />
        </svg>
      );

    case 2:
      // Definición de fuerza centrífuga (partícula girando)
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full max-w-sm text-slate-700">
          <DefsMarcador />
          <circle cx="100" cy="100" r="4" fill="#0f172a" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="6 6" />
          {/* Eje al centro */}
          <line x1="100" y1="100" x2="142.4" y2="57.6" stroke="#475569" strokeWidth="2" />
          {/* Partícula */}
          <circle cx="142.4" cy="57.6" r="8" fill="#3b82f6" />
          {/* Vector de fuerza */}
          <line x1="148" y1="52" x2="180" y2="20" stroke="#dc2626" strokeWidth="3" markerEnd="url(#arrow-red)" />
          <text x="185" y="15" fontSize="12" fill="#dc2626" fontWeight="bold">Fc</text>
        </svg>
      );

    case 3:
      // Movimiento circular (tubo giratorio y partículas)
      return (
        <svg viewBox="0 0 300 200" className="w-full h-full max-w-md text-slate-700">
          <DefsMarcador />
          <path d="M 150 180 Q 150 100 250 50" fill="none" stroke="#cbd5e1" strokeWidth="40" strokeLinecap="round" />
          {/* Partículas separándose */}
          <circle cx="170" cy="140" r="5" fill="#ef4444" />
          <line x1="170" y1="140" x2="185" y2="120" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arrow-red)" />
          
          <circle cx="200" cy="100" r="6" fill="#3b82f6" />
          <line x1="200" y1="100" x2="220" y2="80" stroke="#2563eb" strokeWidth="2" markerEnd="url(#arrow-blue)" />
          
          <circle cx="230" cy="65" r="7" fill="#10b981" />
          <line x1="230" y1="65" x2="255" y2="45" stroke="#059669" strokeWidth="2" markerEnd="url(#arrow)" />
          
          <text x="50" y="180" fontSize="14" fill="#475569" fontWeight="bold">Eje de Rotación</text>
          <line x1="130" y1="180" x2="150" y2="180" stroke="#475569" strokeWidth="2" />
        </svg>
      );

    case 4:
      // Influencia de la masa
      return (
        <svg viewBox="0 0 300 150" className="w-full h-full max-w-md text-slate-700">
          <DefsMarcador />
          {/* Partícula pequeña */}
          <circle cx="80" cy="75" r="8" fill="#3b82f6" />
          <text x="75" y="105" fontSize="12" fill="#475569">Masa (m)</text>
          <line x1="90" y1="75" x2="130" y2="75" stroke="#2563eb" strokeWidth="2" markerEnd="url(#arrow-blue)" />
          <text x="100" y="65" fontSize="12" fill="#2563eb">Fc1</text>
          
          {/* Partícula grande */}
          <circle cx="200" cy="75" r="16" fill="#dc2626" />
          <text x="185" y="115" fontSize="12" fill="#475569">Masa (M &gt; m)</text>
          <line x1="220" y1="75" x2="290" y2="75" stroke="#dc2626" strokeWidth="4" markerEnd="url(#arrow-red)" />
          <text x="245" y="65" fontSize="14" fill="#dc2626" fontWeight="bold">Fc2 &gt; Fc1</text>
        </svg>
      );

    case 5:
      // Distribución espacial (tubo con capas)
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full max-w-xs text-slate-700">
          <g transform="rotate(45 100 100)">
            <rect x="80" y="40" width="40" height="120" rx="10" fill="#f8fafc" stroke="#94a3b8" strokeWidth="3" />
            {/* Capas */}
            <path d="M 80 130 L 120 130 L 120 150 A 10 10 0 0 1 80 150 Z" fill="#1e293b" />
            <rect x="80" y="90" width="40" height="40" fill="#3b82f6" opacity="0.8" />
            <rect x="80" y="50" width="40" height="40" fill="#bae6fd" opacity="0.6" />
            
            {/* Etiquetas rotadas para que se lean derecho respecto al canvas global */}
            <g transform="rotate(-45 140 140)">
              <text x="135" y="150" fontSize="12" fill="#1e293b" fontWeight="bold">Sedimento pesado</text>
              <line x1="120" y1="145" x2="130" y2="145" stroke="#1e293b" strokeWidth="1" />
            </g>
            <g transform="rotate(-45 140 100)">
              <text x="140" y="105" fontSize="12" fill="#2563eb" fontWeight="bold">Fase media</text>
              <line x1="120" y1="100" x2="135" y2="100" stroke="#2563eb" strokeWidth="1" />
            </g>
            <g transform="rotate(-45 140 60)">
              <text x="130" y="65" fontSize="12" fill="#0284c7" fontWeight="bold">Líquido ligero</text>
              <line x1="120" y1="60" x2="125" y2="60" stroke="#0284c7" strokeWidth="1" />
            </g>
          </g>
        </svg>
      );

    case 6:
      // Relación velocidad angular (Gráfico con Recharts)
      const data = [
        { w: 0, f: 0 },
        { w: 1, f: 1 },
        { w: 2, f: 4 },
        { w: 3, f: 9 },
        { w: 4, f: 16 },
        { w: 5, f: 25 },
      ];
      return (
        <div className="w-full h-[300px] grid">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 20, right: 30, bottom: 20, left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="w" stroke="#64748b">
                <Label value="Velocidad Angular (ω)" offset={-10} position="insideBottom" fill="#475569" />
              </XAxis>
              <YAxis stroke="#64748b">
                <Label value="Fuerza Centrífuga (Fc)" angle={-90} position="insideLeft" fill="#475569" />
              </YAxis>
             
              <Line type="monotone" dataKey="f" stroke="#dc2626" strokeWidth={3} dot={{ r: 4, fill: '#dc2626' }} activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      );

    case 7:
      // Influencia de la distancia al eje (Radio)
      return (
        <svg viewBox="0 0 300 200" className="w-full h-full max-w-md text-slate-700">
          <DefsMarcador />
          <circle cx="150" cy="100" r="4" fill="#0f172a" />
          <circle cx="150" cy="100" r="40" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="4 4" />
          <circle cx="150" cy="100" r="80" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
          
          <line x1="150" y1="100" x2="230" y2="100" stroke="#94a3b8" strokeWidth="1" />
          
          {/* Partícula interna */}
          <circle cx="190" cy="100" r="6" fill="#3b82f6" />
          <line x1="190" y1="100" x2="210" y2="100" stroke="#2563eb" strokeWidth="2" markerEnd="url(#arrow-blue)" />
          <text x="180" y="90" fontSize="10" fill="#2563eb">r1</text>
          
          {/* Partícula externa */}
          <circle cx="230" cy="100" r="6" fill="#dc2626" />
          <line x1="230" y1="100" x2="270" y2="100" stroke="#dc2626" strokeWidth="3" markerEnd="url(#arrow-red)" />
          <text x="220" y="90" fontSize="10" fill="#dc2626">r2 &gt; r1</text>
          
          <text x="80" y="105" fontSize="12" fill="#475569" fontWeight="bold">Eje</text>
        </svg>
      );

    case 8:
      // Aplicación en la separación (Secuencia de tubos)
      return (
        <svg viewBox="0 0 300 150" className="w-full h-full max-w-lg text-slate-700">
          <g transform="translate(30, 20)">
            <rect x="0" y="0" width="30" height="90" rx="5" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" />
            <path d="M 0 70 L 30 70 L 30 85 A 5 5 0 0 1 0 85 Z" fill="#475569" />
            <rect x="0" y="30" width="30" height="40" fill="#cbd5e1" opacity="0.6" />
            <text x="15" y="110" fontSize="10" textAnchor="middle" fill="#475569">Sólido-Líquido</text>
          </g>

          <g transform="translate(130, 20)">
            <rect x="0" y="0" width="30" height="90" rx="5" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" />
            <path d="M 0 50 L 30 50 L 30 85 A 5 5 0 0 1 0 85 Z" fill="#3b82f6" />
            <rect x="0" y="20" width="30" height="30" fill="#fbbf24" opacity="0.8" />
            <text x="15" y="110" fontSize="10" textAnchor="middle" fill="#475569">Líquido-Líquido</text>
          </g>

          <g transform="translate(230, 20)">
            <rect x="0" y="0" width="30" height="90" rx="5" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" />
            <path d="M 0 80 L 30 80 L 30 85 A 5 5 0 0 1 0 85 Z" fill="#1e293b" />
            <rect x="0" y="20" width="30" height="60" fill="#7dd3fc" opacity="0.3" />
            <text x="15" y="110" fontSize="10" textAnchor="middle" fill="#475569">Clarificación</text>
          </g>
        </svg>
      );

    case 9:
      // Síntesis (Mapa conceptual en SVG)
      return (
        <svg viewBox="0 0 300 200" className="w-full h-full max-w-md text-slate-700 font-sans">
          <DefsMarcador />
          {/* Nodo central */}
          <rect x="70" y="20" width="160" height="40" rx="8" fill="#1e293b" />
          <text x="150" y="45" fontSize="14" fill="white" textAnchor="middle" fontWeight="bold">Fuerza Centrífuga</text>

          {/* Líneas conectoras */}
          <line x1="150" y1="60" x2="60" y2="110" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
          <line x1="150" y1="60" x2="150" y2="110" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
          <line x1="150" y1="60" x2="240" y2="110" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />

          {/* Nodos secundarios */}
          <rect x="20" y="120" width="80" height="30" rx="4" fill="#3b82f6" />
          <text x="60" y="140" fontSize="12" fill="white" textAnchor="middle" fontWeight="bold">Masa (m)</text>

          <rect x="110" y="120" width="80" height="30" rx="4" fill="#dc2626" />
          <text x="150" y="140" fontSize="12" fill="white" textAnchor="middle" fontWeight="bold">Velocidad (ω)</text>

          <rect x="200" y="120" width="80" height="30" rx="4" fill="#10b981" />
          <text x="240" y="140" fontSize="12" fill="white" textAnchor="middle" fontWeight="bold">Distancia (r)</text>

          {/* Ecuación base de síntesis */}
          <text x="150" y="185" fontSize="16" fill="#475569" textAnchor="middle" fontWeight="bold" fontStyle="italic">
            Fc = m · ω² · r
          </text>
        </svg>
      );

    default:
      return <div className="text-slate-400">Diagrama no disponible</div>;
  }
};


// --- APLICACIÓN PRINCIPAL ---

export default function App() {
  const [activeBlockId, setActiveBlockId] = useState<number>(1);

  const activeBlock = LESSON_BLOCKS.find(b => b.id === activeBlockId) || LESSON_BLOCKS[0];

  return (
    <LessonLayout>
      {/* HEADER & NAVEGACIÓN */}
      <header className="grid grid-rows-[auto_auto] gap-6 bg-white border-b border-slate-200 px-6 py-8 sm:px-12">
        <div className="grid">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            El Principio de la Fuerza Centrífuga
          </h1>
       
        </div>

        {/* PESTAÑAS DE NAVEGACIÓN (TABS) - Usando Grid estricto */}
        <nav className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2">
          {LESSON_BLOCKS.map((block) => {
            const isActive = block.id === activeBlockId;
            return (
              <button
                key={block.id}
                onClick={() => setActiveBlockId(block.id)}
                className={`
                  grid place-items-center p-3 text-sm font-semibold rounded-t-lg transition-all duration-200 border-b-4 
                  ${isActive 
                    ? 'bg-blue-50 text-blue-700 border-blue-600' 
                    : 'bg-white text-slate-500 border-transparent hover:bg-slate-50 hover:text-slate-700'}
                `}
              >
                {block.tabLabel}
              </button>
            );
          })}
        </nav>
      </header>

      {/* ÁREA DE CONTENIDO PRINCIPAL */}
      <main className="grid p-6 sm:p-12 place-items-start">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 w-full max-w-7xl mx-auto items-stretch">
          
          {/* PANEL DE TEXTO */}
          <Card className="grid grid-rows-[auto_1fr] gap-6 content-start">
            <h2 className="text-2xl font-bold text-slate-800 leading-snug">
              {activeBlock.title}
            </h2>
            <div className="grid grid-rows-[auto_1fr] gap-4">
              <div className="h-1 w-12 bg-blue-600 rounded-full"></div>
              <p className="text-slate-600 leading-relaxed text-lg text-justify">
                {activeBlock.description}
              </p>
            </div>
          </Card>

          {/* PANEL DE DIAGRAMA */}
          <Card className="grid grid-rows-[auto_1fr] gap-6 min-h-[400px]">
          
            <div className="grid place-items-center w-full h-full bg-slate-50/50 rounded-lg p-6">
              <DiagramRender blockId={activeBlock.id} />
            </div>
          </Card>

        </div>
      </main>
    </LessonLayout>
  );
}