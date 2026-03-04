import React, { useState, useMemo } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
  ReferenceDot
} from 'recharts';
import DivCarousel from '../assets/DivCarousel';

// --- TIPOS E INTERFACES ---
interface Tab {
  id: string;
  label: string;
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface LessonLayoutProps {
  title: string;
  tabs: Tab[];
  activeTab: string;
  setActiveTab: (id: string) => void;
  children: React.ReactNode;
}

interface DiagramSectionProps {
  title: string;
  description: React.ReactNode;
  children: React.ReactNode;
}

// --- COMPONENTES BASE ---
const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden grid ${className}`}>
    {children}
  </div>
);

const LessonLayout: React.FC<LessonLayoutProps> = ({ title, tabs, activeTab, setActiveTab, children }) => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 grid grid-rows-[auto_auto_1fr] font-sans">
      {/* Header */}
      <header className="bg-slate-900 text-white p-6 grid items-center justify-items-center shadow-md z-10">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-center">{title}</h1>
      </header>

      {/* Navegación por pestañas (Grid) */}
      <nav className="bg-white border-b border-slate-300 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] px-2 pt-2 gap-1 shadow-sm">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`grid place-items-center p-3 text-sm font-semibold rounded-t-lg transition-all duration-200 border-b-4 
              ${activeTab === tab.id
                ? 'bg-indigo-50 text-indigo-700 border-indigo-600'
                : 'bg-slate-100 text-slate-500 border-transparent hover:bg-slate-200 hover:text-slate-700'
              }`}
            role="tab"
            aria-selected={activeTab === tab.id}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* Contenedor Principal */}
      <main className="p-4 md:p-8 grid place-items-start justify-items-center overflow-y-auto">
        <div className="w-full max-w-5xl grid gap-8">
          {children}
        </div>
      </main>
    </div>
  );
};

// Envoltorio estándar para cada sección de diagrama
const DiagramSection: React.FC<DiagramSectionProps> = ({ title, description, children }) => (
  <Card className="p-6 md:p-8 grid gap-6 grid-rows-[auto_auto_1fr]">
    <div className="grid gap-2 border-b border-slate-100 pb-4">
      <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
      <p className="text-slate-600 leading-relaxed text-sm md:text-base">{description}</p>
    </div>
    <div className="grid place-items-center w-full bg-slate-50/50 rounded-lg p-4 border border-slate-100">
      {children}
    </div>
  </Card>
);

// --- COMPONENTES DE DIAGRAMAS ---

// 1. Diagrama Transversal (Estático)
const SieveTransversalDiagram: React.FC = () => (
  <svg viewBox="0 0 500 300" className="w-full max-w-2xl h-auto drop-shadow-sm">
    <defs>
      <pattern id="mesh" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#94a3b8" strokeWidth="3" />
      </pattern>
    </defs>
    
    {/* Estructura del tamiz */}
    <rect x="50" y="140" width="400" height="20" fill="#cbd5e1" rx="4" />
    <rect x="50" y="140" width="400" height="20" fill="url(#mesh)" />
    <path d="M 40 130 L 60 160 M 460 130 L 440 160" stroke="#64748b" strokeWidth="4" />

    {/* Partículas retenidas (Grandes) */}
    <circle cx="100" cy="115" r="22" fill="#4f46e5" />
    <circle cx="160" cy="110" r="28" fill="#4338ca" />
    <circle cx="230" cy="118" r="20" fill="#4f46e5" />
    <circle cx="300" cy="105" r="30" fill="#3730a3" />
    <circle cx="380" cy="120" r="18" fill="#4f46e5" />
    
    {/* Partículas pasantes (Pequeñas) */}
    <circle cx="120" cy="180" r="8" fill="#38bdf8" />
    <circle cx="180" cy="220" r="10" fill="#0ea5e9" />
    <circle cx="250" cy="170" r="6" fill="#38bdf8" />
    <circle cx="280" cy="240" r="12" fill="#0284c7" />
    <circle cx="350" cy="200" r="9" fill="#0ea5e9" />
    <circle cx="400" cy="230" r="7" fill="#38bdf8" />

    {/* Flechas de movimiento */}
    <path d="M 250 40 L 250 80" stroke="#64748b" strokeWidth="3" markerEnd="url(#arrow)" />
    <path d="M 250 260 L 250 290" stroke="#64748b" strokeWidth="3" markerEnd="url(#arrow)" strokeDasharray="4" />

    <defs>
      <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b" />
      </marker>
    </defs>
  </svg>
);

// 2. Diagrama Comparativo (Estático)
const ComparativeMethodsDiagram: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
    {/* Mecánico */}
    <div className="grid grid-rows-[auto_1fr] gap-4 place-items-center bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
      <h3 className="font-bold text-slate-700 text-center">Tamiz Mecánico</h3>
      <svg viewBox="0 0 150 200" className="w-full h-40">
        <rect x="25" y="80" width="100" height="10" fill="#94a3b8" />
        <circle cx="50" cy="65" r="12" fill="#4f46e5" />
        <circle cx="100" cy="60" r="15" fill="#4338ca" />
        <circle cx="75" cy="120" r="5" fill="#38bdf8" />
        <circle cx="50" cy="150" r="4" fill="#38bdf8" />
        <path d="M 75 20 L 75 50" stroke="#cbd5e1" strokeWidth="2" markerEnd="url(#arrow)" />
      </svg>
      <p className="text-xs text-slate-500 text-center">Separación por barrera física (malla).</p>
    </div>

    {/* Neumático */}
    <div className="grid grid-rows-[auto_1fr] gap-4 place-items-center bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
      <h3 className="font-bold text-slate-700 text-center">Flujo Neumático</h3>
      <svg viewBox="0 0 150 200" className="w-full h-40">
        <path d="M 40 10 L 40 190 M 110 10 L 110 190" stroke="#cbd5e1" strokeWidth="4" fill="none" />
        {/* Corriente de aire */}
        <path d="M 75 180 L 75 40" stroke="#e2e8f0" strokeWidth="20" opacity="0.5" />
        <path d="M 75 180 L 75 40" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4" markerEnd="url(#arrow)" />
        {/* Partículas ligeras subiendo */}
        <circle cx="65" cy="50" r="4" fill="#38bdf8" />
        <circle cx="85" cy="80" r="5" fill="#38bdf8" />
        {/* Partículas pesadas cayendo */}
        <circle cx="75" cy="140" r="15" fill="#4f46e5" />
        <circle cx="60" cy="170" r="12" fill="#4338ca" />
      </svg>
      <p className="text-xs text-slate-500 text-center">Separación por arrastre aerodinámico.</p>
    </div>

    {/* Hidráulico */}
    <div className="grid grid-rows-[auto_1fr] gap-4 place-items-center bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
      <h3 className="font-bold text-slate-700 text-center">Sedimentación Hidráulica</h3>
      <svg viewBox="0 0 150 200" className="w-full h-40">
        <path d="M 30 20 L 30 180 L 120 180 L 120 20" stroke="#cbd5e1" strokeWidth="4" fill="none" />
        <rect x="32" y="60" width="86" height="118" fill="#bae6fd" opacity="0.5" />
        <path d="M 32 60 Q 75 65 118 60" stroke="#7dd3fc" strokeWidth="2" fill="none" />
        
        {/* Finos arriba */}
        <circle cx="50" cy="80" r="3" fill="#0ea5e9" />
        <circle cx="90" cy="90" r="4" fill="#0ea5e9" />
        <circle cx="70" cy="110" r="5" fill="#0284c7" />
        
        {/* Gruesos sedimentados */}
        <circle cx="60" cy="165" r="14" fill="#3730a3" />
        <circle cx="90" cy="160" r="18" fill="#312e81" />
        <circle cx="45" cy="155" r="10" fill="#4338ca" />
      </svg>
      <p className="text-xs text-slate-500 text-center">Separación por velocidad de caída en fluido.</p>
    </div>
  </div>
);

// 3. Diagrama Curva Acumulativa (Dinámico - Recharts)
const CumulativeCurveDiagram: React.FC = () => {
  // Generando datos basados en la ecuación de distribución de Rosin-Rammler
  const data = useMemo(() => {
    const points = [];
    const d50 = 50;
    const n = 2; // Pendiente fija para este gráfico
    for (let d = 1; d <= 120; d += 2) {
      const y = 100 * (1 - Math.exp(-Math.pow(d / d50, n)));
      points.push({ size: d, passing: parseFloat(y.toFixed(2)) });
    }
    return points;
  }, []);

  // Encontrar aproximaciones para D10, D50, D90
  const d10 = data.find(p => p.passing >= 10)?.size || 0;
  const d50 = data.find(p => p.passing >= 50)?.size || 0;
  const d90 = data.find(p => p.passing >= 90)?.size || 0;

  return (
    <div className="w-full h-[400px] grid">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis 
            dataKey="size" 
            label={{ value: 'Tamaño de partícula (mm)', position: 'insideBottom', offset: -10 }} 
            type="number" 
            domain={[0, 120]}
          />
          <YAxis 
            label={{ value: '% Acumulado Pasante', angle: -90, position: 'insideLeft', offset: 10 }} 
            domain={[0, 100]}
          />
          <Tooltip 
          
            labelFormatter={(label) => `Tamaño: ${label} mm`}
          />
          <Line 
            type="monotone" 
            dataKey="passing" 
            stroke="#4f46e5" 
            strokeWidth={3} 
            dot={false}
            name="Curva Granulométrica" 
          />
          
          {/* Marcadores Dinámicos */}
          <ReferenceLine y={10} stroke="#94a3b8" strokeDasharray="3 3" />
          <ReferenceLine x={d10} stroke="#94a3b8" strokeDasharray="3 3" />
          <ReferenceDot x={d10} y={10} r={6} fill="#ef4444" stroke="white" />
          
          <ReferenceLine y={50} stroke="#94a3b8" strokeDasharray="3 3" />
          <ReferenceLine x={d50} stroke="#94a3b8" strokeDasharray="3 3" />
          <ReferenceDot x={d50} y={50} r={6} fill="#eab308" stroke="white" />

          <ReferenceLine y={90} stroke="#94a3b8" strokeDasharray="3 3" />
          <ReferenceLine x={d90} stroke="#94a3b8" strokeDasharray="3 3" />
          <ReferenceDot x={d90} y={90} r={6} fill="#22c55e" stroke="white" />
          
          <Legend verticalAlign="top" />
        </LineChart>
      </ResponsiveContainer>
      <div className="grid grid-cols-3 gap-4 text-center mt-4 border-t border-slate-200 pt-4">
        <div className="grid gap-1">
          <span className="font-bold text-red-500">D10</span>
          <span className="text-sm text-slate-600">{d10} mm</span>
        </div>
        <div className="grid gap-1">
          <span className="font-bold text-yellow-500">D50</span>
          <span className="text-sm text-slate-600">{d50} mm</span>
        </div>
        <div className="grid gap-1">
          <span className="font-bold text-green-500">D90</span>
          <span className="text-sm text-slate-600">{d90} mm</span>
        </div>
      </div>
    </div>
  );
};

// 4. Diagrama Interactivo de Pendiente (Interactivo)
const InteractiveSlopeDiagram: React.FC = () => {
  const [slope, setSlope] = useState<number>(2.0);

  const data = useMemo(() => {
    const points = [];
    const d50 = 50; 
    for (let d = 1; d <= 120; d += 2) {
      // Ecuación de distribución para variar la pendiente de uniformidad
      const y = 100 * (1 - Math.exp(-Math.pow(d / d50, slope)));
      points.push({ size: d, passing: parseFloat(y.toFixed(2)) });
    }
    return points;
  }, [slope]);

  return (
    <div className="w-full grid grid-rows-[1fr_auto] gap-6">
      <div className="h-[350px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 30, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis 
              dataKey="size" 
              type="number" 
              domain={[0, 120]}
            />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="passing" 
              stroke="#0ea5e9" 
              strokeWidth={4} 
              dot={false}
              animationDuration={300}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-slate-100 p-6 rounded-lg grid gap-4 place-items-center w-full max-w-lg mx-auto border border-slate-200">
        <label htmlFor="slope-slider" className="font-semibold text-slate-700 grid gap-2 text-center w-full">
          <span>Índice de Uniformidad (Pendiente): <span className="text-indigo-600 font-bold">{slope.toFixed(2)}</span></span>
          <input 
            id="slope-slider"
            type="range" 
            min="0.5" 
            max="5.0" 
            step="0.1" 
            value={slope} 
            onChange={(e) => setSlope(parseFloat(e.target.value))}
            className="w-full cursor-pointer accent-indigo-600"
          />
        </label>
        <p className="text-xs text-slate-500 text-center">
          {slope < 1.5 
            ? "Distribución amplia (Material mal clasificado, tamaños variados)." 
            : slope > 3.5 
              ? "Distribución estrecha (Material altamente uniforme)." 
              : "Distribución típica estándar."}
        </p>
      </div>
    </div>
  );
};

// 5. Diagrama Dinámico de Criba Vibratoria (Dinámico - Animación CSS)
const VibratingScreenDiagram: React.FC = () => {
  return (
    <div className="w-full grid place-items-center p-8 overflow-hidden relative min-h-[400px]">
      <style>
        {`
          @keyframes shake {
            0% { transform: translate(0, 0) rotate(-10deg); }
            25% { transform: translate(-3px, -3px) rotate(-10deg); }
            50% { transform: translate(3px, -3px) rotate(-10deg); }
            75% { transform: translate(3px, 3px) rotate(-10deg); }
            100% { transform: translate(0, 0) rotate(-10deg); }
          }
          @keyframes slideDownLarge {
            0% { transform: translate(-100px, -50px); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translate(300px, 150px); opacity: 0; }
          }
          @keyframes fallThroughSmall {
            0% { transform: translate(-50px, -25px); opacity: 0; }
            20% { transform: translate(20px, 10px); opacity: 1; }
            40% { transform: translate(80px, 150px); opacity: 1; } /* Cae a través de la malla */
            100% { transform: translate(80px, 300px); opacity: 0; }
          }
          .vibrating-deck {
            animation: shake 0.1s infinite linear;
            transform-origin: center;
          }
          .particle-large { animation: slideDownLarge 3s infinite linear; }
          .particle-small { animation: fallThroughSmall 2.5s infinite linear; }
          .delay-1 { animation-delay: 0.5s; }
          .delay-2 { animation-delay: 1.2s; }
          .delay-3 { animation-delay: 1.8s; }
          .delay-4 { animation-delay: 2.4s; }
        `}
      </style>

      <div className="relative w-[500px] h-[300px] grid place-items-center">
        {/* Contenedor animado del deck */}
        <div className="vibrating-deck absolute top-[100px] w-[400px] h-[20px] bg-slate-400 rounded-full grid">
          {/* Representación visual de la malla */}
          <div className="w-full h-full bg-[repeating-linear-gradient(90deg,transparent,transparent_10px,#334155_10px,#334155_12px)] opacity-60"></div>
        </div>

        {/* Partículas Grandes (Deslizan sobre la malla) */}
        <div className="absolute top-[100px] left-[50px] particle-large delay-1 w-8 h-8 rounded-full bg-indigo-600 shadow-md"></div>
        <div className="absolute top-[80px] left-[20px] particle-large delay-3 w-10 h-10 rounded-full bg-indigo-800 shadow-md"></div>
        <div className="absolute top-[90px] left-[60px] particle-large delay-4 w-7 h-7 rounded-full bg-indigo-500 shadow-md"></div>

        {/* Partículas Pequeñas (Caen a través de la malla) */}
        <div className="absolute top-[110px] left-[80px] particle-small delay-1 w-3 h-3 rounded-full bg-sky-400 shadow-sm"></div>
        <div className="absolute top-[90px] left-[100px] particle-small delay-2 w-4 h-4 rounded-full bg-sky-500 shadow-sm"></div>
        <div className="absolute top-[120px] left-[60px] particle-small delay-3 w-2 h-2 rounded-full bg-sky-300 shadow-sm"></div>
        <div className="absolute top-[100px] left-[120px] particle-small delay-4 w-3 h-3 rounded-full bg-sky-400 shadow-sm"></div>

        {/* Elementos Estáticos de la Máquina */}
        <div className="absolute bottom-[20px] left-[80px] w-6 h-[100px] bg-slate-300 rounded-md"></div>
        <div className="absolute bottom-[20px] right-[80px] w-6 h-[50px] bg-slate-300 rounded-md"></div>
        
        {/* Tolva de finos */}
        <div className="absolute bottom-[-20px] left-[150px] w-[200px] h-[80px] border-l-[40px] border-r-[40px] border-t-[80px] border-l-transparent border-r-transparent border-t-slate-200 opacity-80 z-[-1]"></div>
      </div>
    </div>
  );
};


const MeshDiagram: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-6 h-full items-center p-4">
      {[
        { mesh: 10, aperture: '2.00 mm', particles: 4 },
        { mesh: 50, aperture: '0.30 mm', particles: 12 },
        { mesh: 100, aperture: '0.15 mm', particles: 24 }
      ].map((item, index) => (
        <div key={index} className="grid grid-rows-[auto_1fr_auto] gap-4 text-center h-full">
          <h3 className="font-bold text-lg text-slate-700">Malla {item.mesh} Mesh</h3>
          <div className="border-4 border-slate-300 rounded-lg relative overflow-hidden bg-slate-100 place-self-center w-full aspect-square max-w-[200px] grid">
            {/* Generación de la cuadrícula de la malla */}
            <div 
              className="w-full h-full absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'linear-gradient(slate 2px, transparent 2px), linear-gradient(90deg, slate 2px, transparent 2px)',
                backgroundSize: `${100 / (item.mesh / 5)}% ${100 / (item.mesh / 5)}%`
              }}
            />
            {/* Partículas separadas */}
            <div className="relative w-full h-full grid place-items-center">
               <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${item.particles / 2}, 1fr)`}}>
                 {Array.from({ length: item.particles }).map((_, i) => (
                   <div 
                     key={i} 
                     className="bg-indigo-500 rounded-full"
                     style={{ 
                       width: `${40 / (item.mesh / 10)}px`, 
                       height: `${40 / (item.mesh / 10)}px` 
                     }}
                   />
                 ))}
               </div>
            </div>
          </div>
          <div className="bg-slate-200 p-2 rounded text-sm font-medium">
            Abertura aprox: <span className="text-indigo-700">{item.aperture}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

// 2. Diagrama Estático: Efecto de Humedad
const MoistureDiagram: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-8 h-full p-6">
      <div className="grid grid-rows-[auto_1fr] gap-4 relative">
        <h3 className="text-center font-bold text-slate-700">Partículas Secas (Flujo Libre)</h3>
        <div className="border-2 border-slate-300 rounded-xl bg-white relative overflow-hidden grid">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Malla */}
            <line x1="0" y1="50" x2="100" y2="50" stroke="#cbd5e1" strokeWidth="4" strokeDasharray="8 8" />
            {/* Partículas pasando */}
            <circle cx="30" cy="20" r="3" fill="#64748b" />
            <circle cx="50" cy="35" r="4" fill="#64748b" />
            <circle cx="70" cy="15" r="2.5" fill="#64748b" />
            
            <circle cx="25" cy="70" r="3" fill="#64748b" />
            <circle cx="45" cy="85" r="2" fill="#64748b" />
            <circle cx="75" cy="65" r="3.5" fill="#64748b" />
            
            {/* Flechas de flujo */}
            <path d="M50 10 L50 90" stroke="#475569" strokeWidth="1" strokeDasharray="2 2" markerEnd="url(#arrow)" opacity="0.4"/>
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#475569" />
              </marker>
            </defs>
          </svg>
        </div>
      </div>
      <div className="grid grid-rows-[auto_1fr] gap-4 relative">
        <h3 className="text-center font-bold text-slate-700">Partículas Húmedas (Aglomeración/Cegado)</h3>
        <div className="border-2 border-slate-300 rounded-xl bg-slate-50 relative overflow-hidden grid">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Malla */}
            <line x1="0" y1="50" x2="100" y2="50" stroke="#cbd5e1" strokeWidth="4" strokeDasharray="8 8" />
            {/* Aglomeraciones en la malla */}
            <circle cx="35" cy="48" r="6" fill="#3b82f6" opacity="0.8" />
            <circle cx="38" cy="46" r="5" fill="#2563eb" opacity="0.9" />
            <circle cx="32" cy="52" r="4.5" fill="#60a5fa" opacity="0.7" />
            
            <circle cx="65" cy="49" r="7" fill="#3b82f6" opacity="0.8" />
            <circle cx="60" cy="51" r="5.5" fill="#2563eb" opacity="0.9" />
            <circle cx="68" cy="47" r="4" fill="#60a5fa" opacity="0.7" />
            
            <circle cx="50" cy="49" r="5" fill="#3b82f6" opacity="0.8" />
            
            {/* Bloqueo visual */}
            <path d="M25 45 Q 35 35 45 45 Q 55 55 65 45 Q 75 35 80 48 L 80 52 Q 75 60 65 52 Q 55 45 45 52 Q 35 60 25 52 Z" fill="#93c5fd" opacity="0.5" />
            
            <text x="50" y="80" textAnchor="middle" fontSize="6" fill="#1e3a8a" fontWeight="bold">Malla Obstruida (Cegado)</text>
          </svg>
        </div>
      </div>
    </div>
  );
};

// 3. Diagrama Dinámico: Parámetros de Vibración
const VibrationDiagram: React.FC = () => {
  const [amplitude, setAmplitude] = useState(50);
  const [frequency, setFrequency] = useState(50);
  
  return (
    <div className="grid grid-cols-4 gap-6 p-6">
      <div className="grid grid-rows-[auto_auto_auto] gap-8 bg-slate-50 p-6 rounded-xl border border-slate-200 h-fit">
        <h3 className="font-bold text-slate-800 text-lg">Controles</h3>
        <div className="grid gap-2">
          <label className="text-sm font-semibold text-slate-600 grid grid-cols-2">
            <span>Amplitud (Stroke)</span>
            <span className="text-right text-indigo-600">{amplitude}%</span>
          </label>
          <input 
            type="range" min="10" max="100" value={amplitude} 
            onChange={(e) => setAmplitude(Number(e.target.value))}
            className="w-full accent-indigo-600"
          />
        </div>
        <div className="grid gap-2">
          <label className="text-sm font-semibold text-slate-600 grid grid-cols-2">
            <span>Frecuencia (RPM)</span>
            <span className="text-right text-indigo-600">{frequency}%</span>
          </label>
          <input 
            type="range" min="10" max="100" value={frequency} 
            onChange={(e) => setFrequency(Number(e.target.value))}
            className="w-full accent-indigo-600"
          />
        </div>
      </div>
      
      <div className="relative col-span-3 bg-white border-2 border-slate-300 rounded-xl grid place-items-center">
        {/* Simulación visual mediante CSS y variables React */}
        <div className="relative w-full grid place-items-center">
          {/* Malla vibratoria */}
          <div 
            className="w-3/4 h-2 bg-slate-800 rounded absolute"
            style={{
              animationName: 'vibrateScreen',
              animationDuration: `${2000 / frequency}ms`,
              animationIterationCount: 'infinite',
              animationDirection: 'alternate',
              animationTimingFunction: 'ease-in-out',
              transformOrigin: 'center'
            }}
          />
          {/* Partículas saltando */}
          <div className="absolute w-3/4 h-32 bottom-1/2 flex justify-around items-end px-10">
            {[1, 2, 3, 4, 5].map((i) => (
              <div 
                key={i}
                className="w-4 h-4 bg-amber-500 rounded-full"
                style={{
                  animationName: 'bounceParticle',
                  animationDuration: `${2000 / frequency}ms`,
                  animationIterationCount: 'infinite',
                  animationDirection: 'alternate',
                  animationTimingFunction: 'ease-out',
                  animationDelay: `${i * 0.1}s`,
                  transform: `translateY(-${amplitude * 1.5}px)`
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Estilos dinámicos inyectados para la animación */}
        <style>{`
          @keyframes vibrateScreen {
            0% { transform: translateY(${amplitude / 5}px) rotate(${-amplitude / 20}deg); }
            100% { transform: translateY(${-amplitude / 5}px) rotate(${amplitude / 20}deg); }
          }
          @keyframes bounceParticle {
            0% { transform: translateY(0); }
            100% { transform: translateY(-${amplitude * 1.5}px); }
          }
        `}</style>
      </div>
    </div>
  );
};

// 4. Diagrama Interactivo: Saturación de Malla
const SaturationDiagram: React.FC = () => {
  const [feedRate, setFeedRate] = useState(20);
  
  // Calcular nivel de saturación
  const saturationLevel = useMemo(() => {
    if (feedRate < 40) return 0;
    if (feedRate < 70) return (feedRate - 40) * 1.5;
    return 45 + (feedRate - 70) * 2;
  }, [feedRate]);

  return (
    <div className="grid grid-rows-[auto_1fr] gap-6 h-full p-6">
      <div className="grid grid-cols-[1fr_auto] gap-4 items-center bg-slate-100 p-4 rounded-xl border border-slate-200">
        <div className="grid gap-2">
          <label className="text-sm font-bold text-slate-700">Tasa de Alimentación (Toneladas/Hora)</label>
          <input 
            type="range" min="0" max="100" value={feedRate} 
            onChange={(e) => setFeedRate(Number(e.target.value))}
            className="w-full accent-rose-600"
          />
        </div>
        <div className="text-2xl font-black text-rose-600 w-16 text-right">
          {feedRate}
        </div>
      </div>
      
      <div className="bg-white border-2 border-slate-300 rounded-xl relative overflow-hidden grid grid-rows-[1fr_auto_1fr] place-items-center">
        {/* Zona de alimentación */}
        <div className="w-full h-full relative grid justify-center">
          <div 
            className="bg-slate-400 opacity-30"
            style={{ 
              width: `${Math.max(20, feedRate)}%`, 
              height: '100%', 
              transition: 'width 0.3s ease' 
            }}
          />
          {feedRate > 0 && (
            <div className="absolute inset-0 grid place-items-center">
               <span className="text-slate-500 font-bold animate-pulse">↓ Flujo de Material ↓</span>
            </div>
          )}
        </div>
        
        {/* Malla */}
        <div className="w-full h-4 bg-slate-800 relative z-10 grid grid-cols-12 gap-1 px-2">
           {Array.from({length: 12}).map((_, i) => <div key={i} className="h-full bg-slate-200 w-1/2 justify-self-center"></div>)}
        </div>
        
        {/* Representación visual de la saturación sobre la malla */}
        <div 
          className="absolute bg-rose-500 opacity-80 rounded-t-lg bottom-1/2 left-1/2 -translate-x-1/2 transition-all duration-500 ease-in-out z-0"
          style={{
            width: `${Math.min(90, feedRate + 20)}%`,
            height: `${saturationLevel}%`,
            maxHeight: '48%'
          }}
        >
          {saturationLevel > 30 && (
             <div className="w-full h-full grid place-items-center text-white font-bold text-sm">
               Cama de Material (Saturación)
             </div>
          )}
        </div>

        {/* Zona inferior (Material pasante) */}
        <div className="w-full h-full relative grid justify-center items-end">
          <div 
            className="bg-emerald-500 opacity-40 rounded-t-xl transition-all duration-300"
            style={{ 
              width: `${Math.max(20, feedRate)}%`, 
              height: `${feedRate < 60 ? feedRate : 60 - (feedRate - 60)}%`, 
            }}
          />
           <div className="absolute inset-0 grid place-items-center text-emerald-800 font-bold text-sm">
             Material Clasificado
           </div>
        </div>
      </div>
    </div>
  );
};

// 5. Diagrama Dinámico: Flujo de Masas y Eficiencia
const EfficiencyDiagram: React.FC = () => {
  return (
    <div className="grid h-[400px] p-6 place-items-center bg-slate-50 rounded-xl">
      <svg viewBox="0 0 800 400" className="w-full h-full drop-shadow-md">
        {/* Alimentación principal */}
        <path d="M 50 200 L 250 200" stroke="#94a3b8" strokeWidth="60" strokeLinecap="round" />
        <text x="80" y="205" fill="white" fontWeight="bold" fontSize="16">Alimentación (100%)</text>
        
        {/* Nodo de Separación (Criba) */}
        <rect x="250" y="140" width="100" height="120" rx="10" fill="#312e81" />
        <text x="270" y="205" fill="white" fontWeight="bold" fontSize="14">CRIBA</text>

        {/* Fracción Correctamente Clasificada (Pasa la malla) */}
        <path d="M 350 220 Q 450 220 500 300 L 700 300" stroke="#10b981" strokeWidth="35" fill="none" strokeLinecap="round" />
        {/* Partículas animadas correctas */}
        <circle r="6" fill="#064e3b">
          <animateMotion dur="2s" repeatCount="indefinite" path="M 350 220 Q 450 220 500 300 L 700 300" />
        </circle>
        <circle r="6" fill="#064e3b">
          <animateMotion dur="2s" begin="1s" repeatCount="indefinite" path="M 350 220 Q 450 220 500 300 L 700 300" />
        </circle>
        <text x="520" y="305" fill="white" fontWeight="bold" fontSize="12">Pasos (Undersize) - Alta Eficiencia</text>

        {/* Fracción Mal Clasificada / Bypass (Se queda arriba) */}
        <path d="M 350 180 Q 450 180 500 100 L 700 100" stroke="#ef4444" strokeWidth="25" fill="none" strokeLinecap="round" />
        {/* Partículas animadas incorrectas */}
        <circle r="6" fill="#7f1d1d">
          <animateMotion dur="2.5s" repeatCount="indefinite" path="M 350 180 Q 450 180 500 100 L 700 100" />
        </circle>
        <text x="520" y="105" fill="white" fontWeight="bold" fontSize="12">Rechazo (Oversize) - Contiene Finos</text>

        {/* Leyenda de eficiencia */}
        <rect x="600" y="10" width="180" height="60" rx="5" fill="white" stroke="#cbd5e1" strokeWidth="2" />
        <text x="610" y="30" fill="#334155" fontSize="12" fontWeight="bold">Eficiencia (E) = (C * c) / (F * f)</text>
        <text x="610" y="50" fill="#64748b" fontSize="10">Flujos de masa balanceados</text>
      </svg>
    </div>
  );
};


// --- COMPONENTE PRINCIPAL (APP) ---
const App: React.FC = () => {
  const tabs: Tab[] = [
    { id: 'transversal', label: 'Proceso de Tamizado' },
    { id: 'comparativo', label: 'Métodos de Clasificación' },
    { id: 'curva', label: 'Curva Acumulativa' },
    { id: 'pendiente', label: 'Pendiente Interactiva' },
    { id: 'vibratoria', label: 'Criba Vibratoria' },
    { id: 'mesh', label: 'Mallas (Mesh)' },
    { id: 'moisture', label: 'Efecto de Humedad' },
    { id: 'vibration', label: 'Vibración' },
    { id: 'saturation', label: 'Saturación' },
    { id: 'efficiency', label: 'Eficiencia' }
  ];

  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

  return (
    <LessonLayout 
      title="Fundamentos de Clasificación de Partículas" 
      tabs={tabs} 
      activeTab={activeTab} 
      setActiveTab={setActiveTab}
    >
      {activeTab === 'transversal' && (
        <DiagramSection 
          title="Concepto de Tamizado" 
          description= {(<DivCarousel>
            <div><p>Después de la reducción de tamaño, es necesario clasificar las partículas para garantizar uniformidad en el producto final. <br />El tamizado es una operación unitaria mecánica que separa partículas sólidas según su tamaño mediante superficies perforadas o mallas. <br />Esta operación es esencial para cumplir especificaciones granulométricas en industrias como la minera, alimentaria, farmacéutica y química.</p></div>
<div><p>El tamizado es un método de separación sólido–sólido basado en la diferencia de tamaño de partículas.</p>
<strong>        <h3>Principio físico</h3>
</strong>        <p>El proceso se fundamenta en:</p>
        <ul>
          <li>Diferencia de tamaño entre partículas.</li>
          <li>Existencia de una superficie con aberturas definidas.</li>
          <li>Movimiento relativo entre partículas y malla.</li>
          <li>Acción gravitacional o vibratoria.</li>
        </ul></div>
<div>   <p>Las partículas más pequeñas atraviesan la abertura, mientras que las más grandes quedan retenidas.</p>
<strong>        <h3>Elementos del proceso</h3>
</strong>        <ul>
          <li>Alimentación del material.</li>
          <li>Superficie de cribado (malla).</li>
          <li>Producto pasante.</li>
          <li>Producto retenido.</li>
        </ul></div>
        
      </DivCarousel>)}
        >
          <SieveTransversalDiagram />
        </DiagramSection>
      )}

      {activeTab === 'comparativo' && (
        <DiagramSection 
          title="Clasificación de partículas" 
          description={(
      <DivCarousel>
        <div><p>La clasificación es el proceso general de separación de partículas según su tamaño, forma o densidad.</p>
        <h3>Tipos de clasificación</h3>
        <ul>
          <li>Mecánica (tamices): separación directa mediante mallas.</li>
          <li>Neumática: separación mediante corrientes de aire.</li>
          <li>Hidráulica: separación en medios líquidos según velocidad de sedimentación.</li>
        </ul>
        <p>En esta unidad se enfatiza la clasificación mecánica por tamizado.</p></div>
        
      </DivCarousel>
    )}
        >
          <ComparativeMethodsDiagram />
        </DiagramSection>
      )}

      {activeTab === 'curva' && (
        <DiagramSection 
          title="Concepto de tamaño de partícula" 
          description={(
      <DivCarousel>
        <div> <p>El tamaño de partícula no siempre es una medida directa, especialmente cuando las partículas son irregulares.</p>
        <h3>Formas de expresar el tamaño</h3>
        <ul>
          <li>Diámetro equivalente.</li>
          <li>Tamaño de abertura de malla.</li>
          <li>Diámetro medio (D50).</li>
        </ul></div>
       <div>  <p>El D50 representa el diámetro para el cual el 50 % del material es más fino y el 50 % más grueso.</p>
        <h3>Parámetros granulométricos comunes</h3>
        <ul>
          <li>D10: 10 % del material es más fino.</li>
          <li>D50: tamaño medio.</li>
          <li>D90: 90 % del material es más fino.</li>
        </ul>
        </div>
      
      </DivCarousel>
    )}
        >
          <CumulativeCurveDiagram />
        </DiagramSection>
      )}

      {activeTab === 'pendiente' && (
        <DiagramSection 
          title="Curvas de Tamaño y Equipos de Tamizado" 
          description={ (
      <DivCarousel>
        <p>El análisis granulométrico permite representar matemáticamente la distribución de tamaños de partículas mediante curvas acumulativas o diferenciales. Estas herramientas permiten evaluar la calidad de una separación y el desempeño del equipo.</p>
        <div><p>Las curvas granulométricas describen cómo se distribuyen los tamaños dentro de una muestra.</p>
                <h3>Tipos principales</h3>
                <ul>
                  <li>Curva acumulativa pasante.</li>
                  <li>Curva acumulativa retenida.</li>
                  <li>Curva diferencial de frecuencia.</li>
                </ul></div>
        <div>    <h3>Interpretación básica</h3>
                <ul>
                  <li>Curva más inclinada → distribución más uniforme.</li>
                  <li>Curva extendida → amplia distribución de tamaños.</li>
                </ul>
                <p>Representación usual en escala logarítmica para el tamaño.</p></div>
   
      </DivCarousel>
    )}
        >
          <InteractiveSlopeDiagram />
        </DiagramSection>
      )}

      {activeTab === 'vibratoria' && (
        <DiagramSection 
          title="Cribas vibratorias" 
          description={(
      <DivCarousel>
        <div><p>Las cribas vibratorias incrementan la eficiencia del tamizado mediante vibración controlada.</p>
        <h3>Principio de funcionamiento</h3>
        <ul>
          <li>Movimiento vibratorio inducido por motor.</li>
          <li>Desplazamiento del material sobre la superficie.</li>
          <li>Estratificación de partículas (finas abajo, gruesas arriba).</li>
        </ul></div>
        <div>  <h3>Componentes principales</h3>
        <ul>
          <li>Motor vibrador.</li>
          <li>Superficie de cribado.</li>
          <li>Bastidor estructural.</li>
          <li>Sistema de amortiguación.</li>
          <li>Canal de alimentación.</li>
        </ul></div>
      
      </DivCarousel>
    )}
        >
          <VibratingScreenDiagram />
        </DiagramSection>
      )}

      {activeTab === 'mesh' && (
        <DiagramSection 
          title="Mallas industriale" 
          description={(
      <DivCarousel>
    <div>  <p>Las mallas constituyen la superficie activa del proceso de separación.</p>
        <h3>Parámetros principales</h3>
        <ul>
          <li>Número Mesh: número de aberturas por pulgada lineal.</li>
          <li>Tamaño de abertura.</li>
          <li>Diámetro del alambre.</li>
          <li>Material de fabricación:
            <ul>
              <li>Acero inoxidable.</li>
              <li>Poliuretano.</li>
              <li>Materiales sintéticos.</li>
            </ul>
          </li>
        </ul>
        <h3>Relación Mesh–Abertura</h3>
        <p>Mayor número mesh → menor tamaño de abertura → partículas más finas.</p>
 </div>
      
      </DivCarousel>
    )}
        >
          <MeshDiagram />
        </DiagramSection>
      )}

        {activeTab === 'moisture' && (
        <DiagramSection 
          title="Parámetros que Afectan la Separación" 
          description={(
      <DivCarousel>
        <p>La eficiencia del tamizado depende de múltiples factores relacionados con el material, el equipo y las condiciones operativas. Una adecuada combinación de estos factores permite maximizar la capacidad y la precisión de separación.</p>
        <div>  <p>Las propiedades físicas del sólido influyen directamente en la eficiencia.</p>
                <h3>Factores relevantes</h3>
                <ul>
                  <li>Tamaño y distribución inicial.</li>
                  <li>Forma de las partículas.</li>
                  <li>Humedad.</li>
                  <li>Densidad.</li>
                  <li>Tendencia a la aglomeración.</li>
                </ul>
                <p>Materiales húmedos pueden obstruir la malla y reducir la eficiencia.</p></div>


      </DivCarousel>
    )}
        >
          <MoistureDiagram />
        </DiagramSection>
      )}

        {activeTab === 'vibration' && (
        <DiagramSection 
          title="Parámetros del equipo" 
          description={(
      <DivCarousel>
        <div>    <p>Las características del equipo determinan su capacidad y desempeño.</p>
        <h3>Variables importantes</h3>
        <ul>
          <li>Amplitud de vibración.</li>
          <li>Frecuencia.</li>
          <li>Ángulo de inclinación.</li>
          <li>Área de cribado.</li>
          <li>Número de pisos (cribas múltiples).</li>
        </ul>
        <p>Mayor área efectiva → mayor capacidad de procesamiento.</p></div>
    
      </DivCarousel>
    )}
        >
          <VibrationDiagram />
        </DiagramSection>
      )}

        {activeTab === 'saturation' && (
        <DiagramSection 
          title="Parámetros operativos" 
          description={(
                <DivCarousel>
                    <div><p>Las condiciones de operación afectan directamente la eficiencia.</p>
                  <h3>Variables clave</h3>
                  <ul>
                    <li>Velocidad de alimentación.</li>
                    <li>Espesor del lecho.</li>
                    <li>Tiempo de residencia.</li>
                    <li>Limpieza y mantenimiento.</li>
                  </ul>
                  <p>Exceso de alimentación → disminución de eficiencia por saturación.</p>
                  <p>Método de explicación sugerido: Diagrama interactivo que permita variar la tasa de alimentación y visualizar la saturación de la malla.</p></div>
                  
                </DivCarousel>
              )

          }
        >
          <SaturationDiagram />
        </DiagramSection>
      )}

        {activeTab === 'efficiency' && (
        <DiagramSection 
          title="Eficiencia de separación" 
          description={(
      <DivCarousel>
        <div> <p>La eficiencia se define como:</p>
        <p><strong>Eficiencia = Material correctamente clasificado / Material total alimentado</strong></p>
        <h3>Factores que reducen la eficiencia</h3>
        <ul>
          <li>Saturación de malla.</li>
          <li>Partículas cercanas al tamaño de corte.</li>
          <li>Vibración insuficiente.</li>
          <li>Desgaste de la malla.</li>
        </ul></div>
       
      </DivCarousel>
    )}
        >
          <EfficiencyDiagram />
        </DiagramSection>
      )}
    </LessonLayout>
  );
};

export default App;