import React, { useState, useEffect } from 'react';
import DivCarousel from '../assets/DivCarousel';

// --- DEFINICIÓN DE TIPOS ---
interface TabData {
  id: string;
  label: string;
  title: string;
  description: React.ReactNode;
  render: React.ReactNode;
}

interface LessonLayoutProps {
  appTitle: string;
  tabs: TabData[];
  activeTabId: string;
  onTabChange: (id: string) => void;
}

// --- COMPONENTES BASE ---

/**
 * Componente Card: Envoltorio para mantener una estética consistente.
 * Utiliza CSS Grid para su estructura interna.
 */
const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`grid bg-white rounded-xl shadow-lg border border-slate-200  ${className}`}>
    {children}
  </div>
);

// --- DIAGRAMAS ---

/**
 * 1. Diagrama dinámico — Evolución de la mezcla hacia uniformidad
 */
const UniformityDiagram: React.FC = () => {
  const [mixing, setMixing] = useState(false);
  // Grid de 20x20 = 400 celdas. 0 = azul (izquierda), 1 = rojo (derecha) inicial.
  const [cells, setCells] = useState<number[]>(() => {
    const initial = [];
    for (let i = 0; i < 400; i++) {
      initial.push((i % 20) < 10 ? 0 : 1);
    }
    return initial;
  });

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (mixing) {
      interval = setInterval(() => {
        setCells(prev => {
          const next = [...prev];
          // Intercambiar celdas aleatorias para simular difusión/mezcla
          for (let i = 0; i < 20; i++) {
            const idx1 = Math.floor(Math.random() * 400);
            const idx2 = Math.floor(Math.random() * 400);
            const temp = next[idx1];
            next[idx1] = next[idx2];
            next[idx2] = temp;
          }
          return next;
        });
      }, 50);
    }
    return () => clearInterval(interval);
  }, [mixing]);

  const reset = () => {
    setMixing(false);
    const initial = [];
    for (let i = 0; i < 400; i++) {
      initial.push((i % 20) < 10 ? 0 : 1);
    }
    setCells(initial);
  };

  return (
    <div className="grid grid-rows-[1fr_auto] gap-6 p-6 place-items-center ">
      <div className="grid grid-cols-[repeat(20,minmax(0,1fr))] gap-px w-64 h-64 bg-slate-200 border border-slate-300">
        {cells.map((val, idx) => (
          <div key={idx} className={`  ${val === 0 ? 'bg-blue-500' : 'bg-red-500'}`} />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <button 
          onClick={() => setMixing(!mixing)}
          className="bg-indigo-600 text-white px-6 py-2 rounded shadow hover:bg-indigo-700 transition-colors"
        >
          {mixing ? 'Pausar Mezcla' : 'Iniciar Mezcla'}
        </button>
        <button 
          onClick={reset}
          className="bg-slate-200 text-slate-800 px-6 py-2 rounded shadow hover:bg-slate-300 transition-colors"
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
};

/**
 * 2. Diagrama interactivo comparativo — Mecanismos de mezcla según el sistema
 */
const MechanismsDiagram: React.FC = () => {
  const [systemType, setSystemType] = useState<'solid-solid' | 'solid-liquid'>('solid-solid');

  return (
    <div className="grid grid-rows-[auto_1fr] gap-6 p-6 ">
      <div className="grid grid-cols-2 gap-4 bg-slate-100 p-2 rounded-lg justify-self-center">
        <button 
          onClick={() => setSystemType('solid-solid')}
          className={`px-4 py-2 rounded font-medium transition-colors ${systemType === 'solid-solid' ? 'bg-white shadow text-indigo-700' : 'text-slate-600'}`}
        >
          Sólido - Sólido
        </button>
        <button 
          onClick={() => setSystemType('solid-liquid')}
          className={`px-4 py-2 rounded font-medium transition-colors ${systemType === 'solid-liquid' ? 'bg-white shadow text-indigo-700' : 'text-slate-600'}`}
        >
          Sólido - Líquido
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6 items-start">
        {systemType === 'solid-solid' ? (
          <>
            <Card className="p-4 bg-blue-50 text-center grid gap-2">
              <h4 className="font-bold text-blue-900">Convección</h4>
              <p className="text-sm text-blue-800">Transferencia de grupos grandes de partículas de una ubicación a otra.</p>
              <div className="h-24 grid place-items-center bg-white rounded border border-blue-200 mt-2">
                <span className="text-2xl">🔄</span>
              </div>
            </Card>
            <Card className="p-4 bg-green-50 text-center grid gap-2">
              <h4 className="font-bold text-green-900">Difusión</h4>
              <p className="text-sm text-green-800">Movimiento aleatorio de partículas individuales sobre superficies recién formadas.</p>
              <div className="h-24 grid place-items-center bg-white rounded border border-green-200 mt-2">
                <span className="text-2xl">✨</span>
              </div>
            </Card>
            <Card className="p-4 bg-orange-50 text-center grid gap-2">
              <h4 className="font-bold text-orange-900">Cizallamiento</h4>
              <p className="text-sm text-orange-800">Deslizamiento de planos de partículas unos sobre otros.</p>
              <div className="h-24 grid place-items-center bg-white rounded border border-orange-200 mt-2">
                <span className="text-2xl">✂️</span>
              </div>
            </Card>
          </>
        ) : (
          <>
            <Card className="p-4 bg-cyan-50 text-center grid gap-2">
              <h4 className="font-bold text-cyan-900">Flujo Volumétrico</h4>
              <p className="text-sm text-cyan-800">Corrientes a gran escala inducidas por un agitador o impulsor.</p>
              <div className="h-24 grid place-items-center bg-white rounded border border-cyan-200 mt-2">
                <span className="text-2xl">🌊</span>
              </div>
            </Card>
            <Card className="p-4 bg-purple-50 text-center grid gap-2">
              <h4 className="font-bold text-purple-900">Turbulencia</h4>
              <p className="text-sm text-purple-800">Remolinos caóticos que disipan energía y mezclan a microescala.</p>
              <div className="h-24 grid place-items-center bg-white rounded border border-purple-200 mt-2">
                <span className="text-2xl">🌪️</span>
              </div>
            </Card>
            <Card className="p-4 bg-teal-50 text-center grid gap-2">
              <h4 className="font-bold text-teal-900">Corte Lípido</h4>
              <p className="text-sm text-teal-800">Gradientes de velocidad cerca de las aspas del agitador.</p>
              <div className="h-24 grid place-items-center bg-white rounded border border-teal-200 mt-2">
                <span className="text-2xl">⚙️</span>
              </div>
            </Card>
          </>
        )}
      </div>
    </div>
  );
};

/**
 * 3. Diagrama estático comparativo — Mezcla homogénea vs. heterogénea
 */
const StaticComparativeDiagram: React.FC = () => {
  // Generar posiciones estáticas para mantener consistencia visual
  const uniformParticles = Array.from({ length: 150 }).map((_, i) => ({
    x: (i * 13) % 280 + 10,
    y: (i * 27) % 280 + 10,
    type: i % 2 === 0 ? 'A' : 'B'
  }));

  const stratifiedParticles = Array.from({ length: 150 }).map((_, i) => ({
    x: (i * 17) % 280 + 10,
    y: i < 75 ? (i * 11) % 130 + 10 : (i * 11) % 130 + 160,
    type: i < 75 ? 'A' : 'B'
  }));

  return (
    <div className="grid grid-cols-2 gap-8 p-6  place-items-center">
      <div className="grid gap-4 place-items-center">
        <h3 className="font-semibold text-lg text-slate-700">Mezcla Homogénea</h3>
        <svg width="300" height="300" className="bg-slate-50 border-2 border-slate-300 rounded-lg shadow-inner">
          {uniformParticles.map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r="5" fill={p.type === 'A' ? '#3b82f6' : '#ef4444'} opacity="0.8" />
          ))}
        </svg>
        <p className="text-sm text-slate-500 text-center">Distribución uniforme de fases en todo el volumen.</p>
      </div>

      <div className="grid gap-4 place-items-center">
        <h3 className="font-semibold text-lg text-slate-700">Mezcla Heterogénea</h3>
        <svg width="300" height="300" className="bg-slate-50 border-2 border-slate-300 rounded-lg shadow-inner">
          {stratifiedParticles.map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r="5" fill={p.type === 'A' ? '#3b82f6' : '#ef4444'} opacity="0.8" />
          ))}
        </svg>
        <p className="text-sm text-slate-500 text-center">Fases visibles y estratificadas; separación evidente.</p>
      </div>
    </div>
  );
};

/**
 * 4. Diagrama dinámico — Segregación en mezcla sólido–sólido
 */
const SegregationDiagram: React.FC = () => {
  const [rotating, setRotating] = useState(false);
  const [rotationDeg, setRotationDeg] = useState(0);
  const [segregationFactor, setSegregationFactor] = useState(0); // 0 (mezclado) a 1 (segregado)

  useEffect(() => {
    let animationFrame: number;
    
    const animate = () => {
      if (rotating) {
        setRotationDeg(prev => (prev + 2) % 360);
        setSegregationFactor(prev => Math.min(prev + 0.005, 1));
      }
      animationFrame = requestAnimationFrame(animate);
    };

    if (rotating) {
      animationFrame = requestAnimationFrame(animate);
    }

    return () => cancelAnimationFrame(animationFrame);
  }, [rotating]);

  const reset = () => {
    setRotating(false);
    setRotationDeg(0);
    setSegregationFactor(0);
  };

  // Generar partículas. 
  // Partículas densas/pequeñas (azules) tienden a ir al centro durante segregación.
  // Partículas ligeras/grandes (rojas) tienden a ir a la periferia.
  const particles = Array.from({ length: 120 }).map((_, i) => {
    const isDense = i % 2 === 0;
    const baseRadius = (i * 13) % 120; // Radio aleatorio distribuido
    const angle = (i * 37) % 360;
    
    // Calcular radio final basado en el factor de segregación
    const targetRadius = isDense ? 
      Math.max(10, baseRadius * 0.4) : // Densas al centro
      Math.min(130, baseRadius + 40 + (i % 20)); // Ligeras a la periferia
      
    const currentRadius = baseRadius + (targetRadius - baseRadius) * segregationFactor;
    
    // Coordenadas polares a cartesianas (centro en 150, 150)
    const rad = (angle * Math.PI) / 180;
    const x = 150 + currentRadius * Math.cos(rad);
    const y = 150 + currentRadius * Math.sin(rad);

    return { x, y, isDense };
  });

  return (
    <div className="grid grid-rows-[1fr_auto] gap-6 p-6 place-items-center ">
      <div className="grid place-items-center relative">
        <svg 
          width="320" height="320" 
          style={{ transform: `rotate(${rotationDeg}deg)` }}
          className="transition-transform duration-75"
        >
          {/* Tambor mezclador */}
          <circle cx="160" cy="160" r="150" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="4" />
          <circle cx="160" cy="160" r="140" fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="10 5" />
          
          {/* Partículas */}
          {particles.map((p, i) => (
            <circle 
              key={i} 
              cx={p.x} 
              cy={p.y} 
              r={p.isDense ? 4 : 7} 
              fill={p.isDense ? '#0284c7' : '#f43f5e'} 
            />
          ))}
        </svg>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button 
          onClick={() => setRotating(!rotating)}
          className="bg-indigo-600 text-white px-6 py-2 rounded shadow hover:bg-indigo-700 transition-colors"
        >
          {rotating ? 'Detener Tambor' : 'Rotar Tambor'}
        </button>
        <button 
          onClick={reset}
          className="bg-slate-200 text-slate-800 px-6 py-2 rounded shadow hover:bg-slate-300 transition-colors"
        >
          Reiniciar
        </button>
      </div>
      
      {segregationFactor > 0.8 && (
         <div className="bg-amber-100 text-amber-800 px-4 py-2 rounded border border-amber-300 text-sm">
           ⚠️ Alerta: Segregación evidente. Control deficiente del proceso.
         </div>
      )}
    </div>
  );
};

/**
 * 5. Diagrama dinámico — Suspensión vs. sedimentación en mezcla sólido–líquido
 */
const SuspensionDiagram: React.FC = () => {
  const [speed, setSpeed] = useState<number>(0);
  const [particles, setParticles] = useState<Array<{baseX: number, noiseOffset: number, size: number}>>([]);

  useEffect(() => {
    // Inicializar partículas
    const initial = Array.from({ length: 80 }).map(() => ({
      baseX: 20 + Math.random() * 260,
      noiseOffset: Math.random() * 1000,
      size: 3 + Math.random() * 3
    }));
    setParticles(initial);
  }, []);

  // Animación continua del líquido
  const [time, setTime] = useState(0);
  useEffect(() => {
    let animationFrame: number;
    const animate = () => {
      setTime(t => t + (speed * 0.05));
      animationFrame = requestAnimationFrame(animate);
    };
    if (speed > 0) {
      animationFrame = requestAnimationFrame(animate);
    }
    return () => cancelAnimationFrame(animationFrame);
  }, [speed]);

  return (
    <div className="grid grid-rows-[1fr_auto] gap-6 p-6 place-items-center ">
      <div className="grid place-items-center relative  ">
        <svg width="300" height="300" className="border-b-4 border-l-4 border-r-4 border-slate-400 rounded-b-xl  bg-white">
          {/* Líquido */}
          <rect x="0" y="50" width="300" height="250" fill="#bae6fd" opacity="0.5" />
          
          {/* Eje del agitador */}
          <rect x="145" y="0" width="10" height="220" fill="#64748b" />
          {/* Aspas del agitador (rotan según velocidad) */}
          <g transform={`translate(150, 220) rotate(${time * 10})`}>
             <rect x="-60" y="-5" width="120" height="10" fill="#475569" rx="2" />
          </g>

          {/* Partículas */}
          {particles.map((p, i) => {
            // Lógica de dinámica de fluidos simulada
            // Si la velocidad es baja, y = fondo (280). Si es alta, y se distribuye
            const suspensionHeight = (speed / 100) * 230; // Altura máxima de suspensión
            const randomFluctuation = Math.sin(time + p.noiseOffset) * (speed / 20);
            
            // Base Y: en el fondo
            let currentY = 280 - (p.size); 
            let currentX = p.baseX;

            if (speed > 5) {
               // Levantar partículas basado en la velocidad
               // Las partículas más pequeñas (size menor) suben más fácil
               const liftFactor = (10 - p.size) * 0.1;
               currentY = 280 - (Math.random() * suspensionHeight * liftFactor) + randomFluctuation;
               // Asegurar que no salgan del líquido ni del tanque
               currentY = Math.max(60, Math.min(285, currentY));
               
               // Movimiento horizontal por el remolino
               currentX = p.baseX + Math.cos(time + p.noiseOffset) * (speed / 5);
               currentX = Math.max(10, Math.min(290, currentX));
            }

            return (
              <circle 
                key={i} 
                cx={currentX} 
                cy={currentY} 
                r={p.size} 
                fill="#a1a1aa" 
                stroke="#71717a"
                strokeWidth="1"
              />
            );
          })}
        </svg>
      </div>

      <div className="grid grid-rows-[auto_auto] gap-2  max-w-md bg-slate-50 p-4 rounded-lg border border-slate-200">
        <div className="grid grid-cols-[1fr_auto] items-center">
          <label htmlFor="speed-slider" className="font-semibold text-slate-700">Velocidad de Agitación</label>
          <span className="font-mono bg-white px-2 py-1 rounded border text-sm">{speed}%</span>
        </div>
        <input 
          id="speed-slider"
          type="range" 
          min="0" max="100" 
          value={speed} 
          onChange={(e) => setSpeed(Number(e.target.value))}
          className=" h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-indigo-600"
        />
        <div className="grid grid-cols-2 text-xs text-slate-500 mt-1">
          <span>Sedimentación</span>
          <span className="text-right">Suspensión Completa</span>
        </div>
      </div>
    </div>
  );
};

// 1. Diagrama Interactivo: Velocidad de agitación
const AgitationSpeedDiagram: React.FC = () => {
  const [speed, setSpeed] = useState<number>(50);
  
  // Determinamos el estado del sistema basado en la velocidad
  const isSedimented = speed < 30;
  const isTurbulent = speed > 80;

  return (
    <div className="grid grid-rows-[auto_1fr] gap-6  p-6">
      <div className="grid grid-cols-[auto_1fr_auto] gap-4 items-center bg-slate-50 p-4 rounded-lg border border-slate-200">
        <span className="text-sm font-semibold text-slate-600">Baja</span>
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={speed} 
          onChange={(e) => setSpeed(Number(e.target.value))}
          className=" accent-blue-600 cursor-pointer"
        />
        <span className="text-sm font-semibold text-slate-600">Alta</span>
      </div>

      <div className="grid place-items-center relative bg-slate-100 rounded-lg border border-slate-300  min-h-[300px]">
        {/* Contenedor del Tanque */}
        <div className="w-48 h-64 border-4 border-t-0 border-slate-400 rounded-b-3xl relative bg-blue-50/50 ">
          {/* Nivel de Líquido */}
          <div className="absolute bottom-0  h-[90%] bg-blue-200/40 border-t border-blue-300"></div>
          
          {/* Eje y Agitador */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-4/5 bg-slate-500"></div>
          <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-16 h-4 bg-slate-600"></div>

          {/* Partículas simuladas */}
          <svg className="absolute inset-0   pointer-events-none">
            <style>
              {`
                @keyframes float-sediment {
                  0%, 100% { transform: translate(0, 0); }
                  50% { transform: translate(2px, -2px); }
                }
                @keyframes float-normal {
                  0% { transform: translate(0, 0) rotate(0deg); }
                  25% { transform: translate(20px, -40px) rotate(90deg); }
                  50% { transform: translate(0px, -80px) rotate(180deg); }
                  75% { transform: translate(-20px, -40px) rotate(270deg); }
                  100% { transform: translate(0, 0) rotate(360deg); }
                }
                @keyframes float-turbulent {
                  0% { transform: translate(0, 0) scale(1); }
                  33% { transform: translate(40px, -120px) scale(1.2); }
                  66% { transform: translate(-40px, -60px) scale(0.8); }
                  100% { transform: translate(0, 0) scale(1); }
                }
              `}
            </style>
            {Array.from({ length: 40 }).map((_, i) => {
              // Distribución inicial
              const cx = 20 + Math.random() * 60 + '%';
              // Si está sedimentado, se agrupan al fondo. Si no, se distribuyen.
              const cy = isSedimented 
                ? 85 + Math.random() * 10 + '%' 
                : 20 + Math.random() * 70 + '%';
              
              const animationName = isSedimented ? 'float-sediment' : (isTurbulent ? 'float-turbulent' : 'float-normal');
              const animationDuration = isSedimented ? '3s' : `${150 / (speed + 10)}s`;
              const delay = `-${Math.random() * 5}s`;

              return (
                <circle
                  key={i}
                  cx={cx}
                  cy={cy}
                  r={isTurbulent && i % 3 === 0 ? 3 : 4} // Burbujas en turbulencia
                  fill={isTurbulent && i % 3 === 0 ? 'white' : '#1e40af'}
                  style={{
                    animation: `${animationName} ${animationDuration} infinite ease-in-out`,
                    animationDelay: delay,
                    transition: 'cy 1s ease-in-out'
                  }}
                />
              );
            })}
          </svg>
        </div>
        
        {/* Etiqueta de Estado */}
        <div className="absolute bottom-4 right-4 bg-white/90 px-3 py-1 rounded text-sm font-bold text-slate-700 shadow border border-slate-200 grid">
          {isSedimented ? 'Estado: Sedimentación' : isTurbulent ? 'Estado: Turbulencia / Aireación' : 'Estado: Suspensión Uniforme'}
        </div>
      </div>
    </div>
  );
};

// 2. Diagrama Dinámico: Paletas (Flujo Radial Suave)
const PaddleAgitatorDiagram: React.FC = () => {
  return (
    <div className="grid place-items-center  p-6 bg-slate-50 min-h-[400px]">
       <svg viewBox="0 0 200 200" className=" max-w-md h-auto">
        <style>
          {`
            @keyframes spin-slow { 100% { transform: rotate(360deg); } }
            @keyframes flow-radial {
              0% { stroke-dashoffset: 100; opacity: 0; }
              50% { opacity: 1; }
              100% { stroke-dashoffset: 0; opacity: 0; }
            }
            .paddle-spin { transform-origin: 100px 100px; animation: spin-slow 6s linear infinite; }
            .flow-line { 
              stroke-dasharray: 100; 
              animation: flow-radial 3s infinite linear; 
            }
          `}
        </style>
        <circle cx="100" cy="100" r="90" fill="#e0f2fe" stroke="#0284c7" strokeWidth="4" />
        
        {/* Líneas de flujo radiales (suaves) */}
        {[0, 60, 120, 180, 240, 300].map(angle => (
          <g key={angle} transform={`rotate(${angle} 100 100)`}>
            <path 
              d="M 120 100 Q 150 110 180 100" 
              fill="none" 
              stroke="#0ea5e9" 
              strokeWidth="2" 
              className="flow-line" 
              style={{ animationDelay: `${angle / 120}s` }} 
            />
          </g>
        ))}

        {/* Eje central */}
        <circle cx="100" cy="100" r="10" fill="#334155" />
        {/* Paletas */}
        <g className="paddle-spin">
          <rect x="30" y="92" width="140" height="16" fill="#475569" rx="2" />
          <rect x="92" y="30" width="16" height="140" fill="#475569" rx="2" />
        </g>
      </svg>
    </div>
  );
};

// 3. Diagrama Dinámico: Hélice (Flujo Axial)
const PropellerAgitatorDiagram: React.FC = () => {
  return (
    <div className="grid place-items-center  p-6 bg-slate-50 min-h-[400px]">
       <svg viewBox="0 0 200 250" className=" max-w-sm h-auto">
        <style>
          {`
            @keyframes flow-axial-down {
              0% { transform: translateY(-20px); opacity: 0; }
              50% { opacity: 1; }
              100% { transform: translateY(60px); opacity: 0; }
            }
            @keyframes flow-axial-up {
              0% { stroke-dashoffset: 200; opacity: 0; }
              20% { opacity: 1; }
              80% { opacity: 1; }
              100% { stroke-dashoffset: 0; opacity: 0; }
            }
            .axial-down { animation: flow-axial-down 2s infinite linear; }
            .axial-up { stroke-dasharray: 200; animation: flow-axial-up 3s infinite linear; }
            .propeller { transform-origin: 100px 180px; animation: spin-slow 1s linear infinite; }
          `}
        </style>
        {/* Tanque */}
        <path d="M 20 20 L 20 220 A 80 20 0 0 0 180 220 L 180 20" fill="#f0f9ff" stroke="#0369a1" strokeWidth="4" />
        <ellipse cx="100" cy="220" rx="80" ry="20" fill="#bae6fd" stroke="#0369a1" strokeWidth="4" />
        <line x1="20" y1="50" x2="180" y2="50" stroke="#7dd3fc" strokeWidth="2" strokeDasharray="4" />

        {/* Flujo Descendente Central */}
        <g stroke="#0284c7" strokeWidth="3" fill="none">
          <path d="M 85 80 L 85 140 M 80 135 L 85 145 L 90 135" className="axial-down" style={{ animationDelay: '0s' }} />
          <path d="M 115 80 L 115 140 M 110 135 L 115 145 L 120 135" className="axial-down" style={{ animationDelay: '1s' }} />
        </g>

        {/* Flujo Ascendente Lateral */}
        <g stroke="#0ea5e9" strokeWidth="2" fill="none">
          <path d="M 100 210 Q 40 210 40 150 L 40 80" className="axial-up" />
          <path d="M 100 210 Q 160 210 160 150 L 160 80" className="axial-up" style={{ animationDelay: '1.5s' }} />
        </g>

        {/* Eje y Hélice */}
        <rect x="96" y="20" width="8" height="160" fill="#475569" />
        <g className="propeller">
          <ellipse cx="100" cy="180" rx="30" ry="8" fill="#334155" transform="rotate(20 100 180)" />
          <ellipse cx="100" cy="180" rx="30" ry="8" fill="#1e293b" transform="rotate(-20 100 180)" />
        </g>
      </svg>
    </div>
  );
};

// 4. Diagrama Dinámico: Turbina (Flujo Radial y Turbulencia)
const TurbineAgitatorDiagram: React.FC = () => {
  return (
    <div className="grid place-items-center  p-6 bg-slate-50 min-h-[400px]">
       <svg viewBox="0 0 200 200" className=" max-w-md h-auto">
        <style>
          {`
            @keyframes turbine-spin { 100% { transform: rotate(360deg); } }
            @keyframes flow-turbulent {
              0% { stroke-dashoffset: 150; opacity: 0; }
              30% { opacity: 1; }
              100% { stroke-dashoffset: 0; opacity: 0; }
            }
            .turbine-spin { transform-origin: 100px 100px; animation: turbine-spin 2s linear infinite; }
            .turbulent-line { 
              stroke-dasharray: 150; 
              animation: flow-turbulent 1.5s infinite linear; 
            }
          `}
        </style>
        <circle cx="100" cy="100" r="90" fill="#f8fafc" stroke="#334155" strokeWidth="4" />
        
        {/* Zonas de alta turbulencia (círculos difusos cerca de las paredes) */}
        <circle cx="20" cy="100" r="15" fill="#93c5fd" opacity="0.4" filter="blur(4px)" />
        <circle cx="180" cy="100" r="15" fill="#93c5fd" opacity="0.4" filter="blur(4px)" />
        <circle cx="100" cy="20" r="15" fill="#93c5fd" opacity="0.4" filter="blur(4px)" />
        <circle cx="100" cy="180" r="15" fill="#93c5fd" opacity="0.4" filter="blur(4px)" />

        {/* Flujo radial con rizos en los extremos */}
        {[0, 90, 180, 270].map((angle, i) => (
          <g key={angle} transform={`rotate(${angle} 100 100)`}>
            <path 
              d="M 130 100 L 160 100 Q 180 100 170 80 Q 160 60 180 50" 
              fill="none" 
              stroke="#2563eb" 
              strokeWidth="2.5" 
              className="turbulent-line" 
              style={{ animationDelay: `${i * 0.4}s` }} 
            />
            <path 
              d="M 130 100 L 160 100 Q 180 100 170 120 Q 160 140 180 150" 
              fill="none" 
              stroke="#3b82f6" 
              strokeWidth="1.5" 
              className="turbulent-line" 
              style={{ animationDelay: `${i * 0.4 + 0.2}s` }} 
            />
          </g>
        ))}

        {/* Turbina central */}
        <g className="turbine-spin">
          <circle cx="100" cy="100" r="20" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
          {[0, 60, 120, 180, 240, 300].map(angle => (
            <rect key={angle} x="120" y="96" width="15" height="8" fill="#475569" transform={`rotate(${angle} 100 100)`} />
          ))}
        </g>
        <circle cx="100" cy="100" r="8" fill="#1e293b" />
      </svg>
    </div>
  );
};

// 5. Diagrama Dinámico: Ribbon Mixer
const RibbonMixerDiagram: React.FC = () => {
  return (
    <div className="grid place-items-center  p-6 bg-slate-50 min-h-[400px]">
       <svg viewBox="0 0 300 150" className=" max-w-lg h-auto">
        <style>
          {`
            @keyframes slide-right {
              0% { transform: translateX(0); }
              100% { transform: translateX(40px); }
            }
            @keyframes slide-left {
              0% { transform: translateX(0); }
              100% { transform: translateX(-40px); }
            }
            .ribbon-outer { stroke-dasharray: 10 10; animation: slide-right 2s linear infinite; }
            .ribbon-inner { stroke-dasharray: 8 8; animation: slide-left 2s linear infinite; }
          `}
        </style>
        {/* Tanque horizontal */}
        <path d="M 20 20 L 20 100 A 30 30 0 0 0 50 130 L 250 130 A 30 30 0 0 0 280 100 L 280 20 Z" fill="#f8fafc" stroke="#64748b" strokeWidth="3" />
        
        {/* Eje central */}
        <line x1="10" y1="75" x2="290" y2="75" stroke="#334155" strokeWidth="6" strokeLinecap="round" />
        
        {/* Cintas (representación visual mediante ondas en movimiento) */}
        <g opacity="0.8">
           {/* Cinta exterior empuja hacia un lado */}
           <path d="M 0 50 Q 20 20 40 50 T 80 50 T 120 50 T 160 50 T 200 50 T 240 50 T 280 50 T 320 50" fill="none" stroke="#ef4444" strokeWidth="4" className="ribbon-outer" />
           <path d="M 0 100 Q 20 130 40 100 T 80 100 T 120 100 T 160 100 T 200 100 T 240 100 T 280 100 T 320 100" fill="none" stroke="#ef4444" strokeWidth="4" className="ribbon-outer" />
           
           {/* Cinta interior empuja hacia el lado opuesto */}
           <path d="M -20 65 Q 0 45 20 65 T 60 65 T 100 65 T 140 65 T 180 65 T 220 65 T 260 65 T 300 65" fill="none" stroke="#3b82f6" strokeWidth="3" className="ribbon-inner" />
           <path d="M -20 85 Q 0 105 20 85 T 60 85 T 100 85 T 140 85 T 180 85 T 220 85 T 260 85 T 300 85" fill="none" stroke="#3b82f6" strokeWidth="3" className="ribbon-inner" />
        </g>

        {/* Leyenda visual */}
        <g transform="translate(40, 140)">
          <line x1="0" y1="0" x2="20" y2="0" stroke="#ef4444" strokeWidth="3" />
          <text x="25" y="4" fontSize="10" fill="#475569">Cinta Exterior (Convección derecha)</text>
          
          <line x1="150" y1="0" x2="170" y2="0" stroke="#3b82f6" strokeWidth="3" />
          <text x="175" y="4" fontSize="10" fill="#475569">Cinta Interior (Convección izquierda)</text>
        </g>
      </svg>
    </div>
  );
};

// 6. Diagrama Estático: Comparativa de Calidad de Mezcla
const MixingComparisonDiagram: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8  p-6 bg-slate-50 items-center min-h-[400px]">
      
      {/* Mezcla Deficiente */}
      <div className="grid grid-rows-[auto_1fr] gap-4 place-items-center">
        <h4 className="font-bold text-slate-700 text-lg">Mezcla Deficiente</h4>
        <div className="w-48 h-48 bg-white border-2 border-slate-300 shadow-inner relative ">
          {Array.from({ length: 150 }).map((_, i) => {
             // Distribuimos los puntos rojos concentrados en una esquina
             const isClumped = i < 100;
             const x = isClumped ? Math.random() * 40 + 50 : Math.random() * 100;
             const y = isClumped ? Math.random() * 40 + 50 : Math.random() * 100;
             const color = isClumped || Math.random() > 0.5 ? '#ef4444' : '#3b82f6';
             
             return (
               <div 
                 key={i} 
                 className="absolute rounded-full w-2 h-2" 
                 style={{ left: `${x}%`, top: `${y}%`, backgroundColor: color }}
               />
             );
          })}
        </div>
        <p className="text-sm text-center text-slate-500 max-w-[200px]">Zonas de alta concentración y composición irregular visible.</p>
      </div>

      {/* Mezcla Uniforme */}
      <div className="grid grid-rows-[auto_1fr] gap-4 place-items-center">
        <h4 className="font-bold text-emerald-700 text-lg">Producto Bien Mezclado</h4>
        <div className="w-48 h-48 bg-white border-2 border-emerald-300 shadow-inner relative ">
          {Array.from({ length: 150 }).map((_, i) => {
             // Distribución pseudo-uniforme mediante Grid mental
             const cols = 12;
             const row = Math.floor(i / cols);
             const col = i % cols;
             
             // Agregamos un ligero ruido (jitter) para que no parezca una matriz perfecta
             const jitterX = (Math.random() - 0.5) * 6;
             const jitterY = (Math.random() - 0.5) * 6;
             
             const x = (col * (100 / cols)) + jitterX;
             const y = (row * (100 / Math.ceil(150/cols))) + jitterY;
             const color = i % 2 === 0 ? '#ef4444' : '#3b82f6';
             
             return (
               <div 
                 key={i} 
                 className="absolute rounded-full w-2 h-2" 
                 style={{ left: `${x}%`, top: `${y}%`, backgroundColor: color }}
               />
             );
          })}
        </div>
        <p className="text-sm text-center text-slate-500 max-w-[200px]">Distribución homogénea y concentración uniforme de las partículas.</p>
      </div>

    </div>
  );
};



// --- ESTRUCTURA PRINCIPAL (LAYOUT) ---

/**
 * Layout Principal: Implementado estrictamente con CSS Grid
 */
const LessonLayout: React.FC<LessonLayoutProps> = ({ appTitle, tabs, activeTabId, onTabChange }) => {
  const activeTab = tabs.find(t => t.id === activeTabId) || tabs[0];

  return (
<div className="min-h-screen w-full grid grid-cols-1 grid-rows-[auto_auto_1fr] bg-slate-100 text-slate-800 font-sans selection:bg-indigo-100">
      {/* HEADER */}
      <header className="grid bg-white border-b border-slate-200 top-0 z-50">
                <div className="grid grid-cols-[1fr_auto] items-center px-6 py-4 ">

          <h1 className="text-xl md:text-2xl font-black text-indigo-900 flex items-center gap-3">
          {appTitle}
        </h1>

        <nav className="flex gap-2  mt-3 pb-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={` px-4 py-2 rounded-t-lg font-medium border-b-4 transition-all text-sm md:text-base ${
                activeTabId === tab.id
                  ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
                  : 'border-transparent text-slate-500 hover:bg-slate-100 hover:text-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
        </div>
      </header>

      {/* TITLE */}
      <div className="px-4 md:px-8 pt-6 md:pt-8 pb-2">
        <h2 className="text-xl font-bold text-slate-800">
          {activeTab.title}
        </h2>
      </div>

      {/* DESCRIPTION */}
      <div className="px-4 md:px-8 pb-6">
        <p className="text-base md:text-lg text-slate-600">
          {activeTab.description}
        </p>
      </div>

      {/* CONTENT */}
      <main className="px-4 md:px-8 pb-8">
        <Card className="">
          {activeTab.render}
        </Card>
      </main>

    </div>
  );
};
// --- APLICACIÓN RAÍZ ---

export default function App() {
  const [activeTabId, setActiveTabId] = useState<string>('tab1');

  // Configuración de los paneles de contenido basados en los requerimientos
  const tabsData: TabData[] = [
    {
      id: 'tab1',
      label: 'Uniformidad',
      title: 'Evolución de la Mezcla hacia la Uniformidad',
      description: (
<DivCarousel>
<p>El mezclado es una operación unitaria cuyo objetivo es lograr una distribución uniforme de dos o más componentes, reduciendo gradientes de concentración, temperatura o composición. La agitación es el medio mecánico que genera el movimiento necesario para que esa redistribución ocurra.</p>

<p>En procesos industriales, el mezclado puede involucrar sistemas sólido–sólido, sólido–líquido o líquido–líquido, y su eficiencia impacta directamente la calidad del producto final.</p>

<div><p>El mezclado consiste en la redistribución aleatoria de partículas o fluidos dentro de un volumen determinado hasta alcanzar un nivel deseado de uniformidad.</p>

<p><strong>Características de una mezcla ideal</strong></p>
<ul>
<li>Uniformidad espacial.</li>
<li>Ausencia de segregación.</li>
<li>Reproducibilidad en el tiempo.</li>
<li>Composición constante en cualquier muestra tomada.</li>
</ul>

<p>Desde el punto de vista físico, el mezclado implica disminuir la varianza de concentración dentro del sistema.</p></div>


</DivCarousel>
),
      render: <UniformityDiagram />
    },
    {
      id: 'tab2',
      label: 'Mecanismos',
      title: 'Mecanismos de Mezcla según el Sistema',
      description: (
<DivCarousel>
    <div><p>El mecanismo dominante depende del estado físico del sistema.</p>

<p><strong>En sistemas sólido–sólido</strong></p>
<ul>
<li>Convección: movimiento macroscópico de grupos de partículas.</li>
<li>Difusión: redistribución microscópica por movimiento aleatorio.</li>
<li>Cizallamiento: deslizamiento entre capas del material.</li>
</ul></div>

<div><p><strong>En sistemas sólido–líquido</strong></p>
<ul>
<li>Suspensión de partículas.</li>
<li>Dispersión.</li>
<li>Turbulencia inducida por el agitador.</li>
<li>Circulación axial o radial del fluido.</li>
</ul></div>

</DivCarousel>
),
      render: <MechanismsDiagram />
    },
    {
      id: 'tab3',
      label: 'Comparativa',
      title: 'Mezcla Homogénea vs. Heterogénea',
      description: (
<DivCarousel>
    <div><p><strong>Mezcla homogénea</strong></p>
<ul>
<li>Composición uniforme.</li>
<li>Fases indistinguibles.</li>
<li>Alta reproducibilidad.</li>
</ul></div>

<div><p><strong>Mezcla heterogénea</strong></p>
<ul>
<li>Fases distinguibles.</li>
<li>Posible segregación.</li>
<li>Variaciones locales de concentración.</li>
</ul>

<p>El grado de mezcla puede cuantificarse mediante índices estadísticos basados en la varianza de concentración.</p></div>
<p>El mezclado reduce diferencias de concentración y promueve uniformidad. Su eficiencia depende del mecanismo físico predominante y de las propiedades del sistema.</p>

</DivCarousel>
),
      render: <StaticComparativeDiagram />
    },
    {
      id: 'tab4',
      label: 'Segregación',
      title: 'Riesgo de Segregación en Mezcla Sólido-Sólido',
      description: (
<DivCarousel>
<p>En estos sistemas, el objetivo es lograr una distribución uniforme de partículas con posibles diferencias de tamaño o densidad.</p>
<div><p><strong>Factores que influyen</strong></p>
<ul>
<li>Distribución granulométrica.</li>
<li>Forma de partícula.</li>
<li>Diferencia de densidades.</li>
<li>Energía aplicada.</li>
<li>Tiempo de mezclado.</li>
</ul></div>

<div><p><strong>Riesgos comunes</strong></p>
<ul>
<li>Segregación por vibración.</li>
<li>Separación por diferencia de tamaño.</li>
<li>Estratificación durante el transporte.</li>
</ul></div>

</DivCarousel>
),
      render: <SegregationDiagram />
    },
    {
      id: 'tab5',
      label: 'Suspensión',
      title: 'Suspensión vs. Sedimentación en Sistemas Sólido-Líquido',
      description: (
<DivCarousel>
<p>En este sistema se busca mantener partículas suspendidas dentro de un fluido.</p>

<p><strong>Objetivos principales</strong></p>
<ul>
<li>Suspensión homogénea.</li>
<li>Disolución (si el sólido es soluble).</li>
<li>Evitar sedimentación.</li>
</ul>

<p><strong>Variables críticas</strong></p>
<ul>
<li>Velocidad de agitación.</li>
<li>Viscosidad del líquido.</li>
<li>Densidad relativa sólido–líquido.</li>
<li>Tamaño de partícula.</li>
</ul>

<p>Si la velocidad es insuficiente, ocurre sedimentación; si es excesiva, puede generarse aireación.</p>

<div>
   <p>Problemas comunes en mezclado</p> 
    <ul>
<li>Sedimentación.</li>
<li>Formación de grumos.</li>
<li>Aireación no deseada.</li>
<li>Sobremezclado (posible degradación del producto).</li>
</ul>

<p>El control de variables operativas es esencial para evitar estos problemas.</p></div>


</DivCarousel>
),
      render: <SuspensionDiagram />
    }
    ,
    {
      id: 'tab6',
      label: 'Agitación',
      title: 'Equipos de Mezclado y Agitación',
      description: (
<DivCarousel>

<p>La selección del equipo depende del estado físico del sistema, la viscosidad, el volumen y el nivel de homogeneidad requerido.</p>


</DivCarousel>
),
      render: <AgitationSpeedDiagram />
    }    ,
    {
      id: 'tab7',
      label: 'Paletas',
      title: 'Agitadores de Paletas',
      description: (
<DivCarousel>
<div>
<p><strong>Características</strong></p>
<ul>
<li>Movimiento suave.</li>
<li>Flujo principalmente radial.</li>
<li>Bajo consumo energético.</li>
<li>Adecuado para líquidos de baja viscosidad.</li>
</ul>

<p>Se emplea cuando no se requiere alta turbulencia.</p>
</div>

</DivCarousel>
),
      render: <PaddleAgitatorDiagram />
    }
    ,
    {
      id: 'tab8',
      label: 'Hélice',
      title: 'Agitadores de Hélice',
      description: (
<DivCarousel>
    <div><p><strong>Principio de funcionamiento</strong></p>
<ul>
<li>Generan flujo axial intenso.</li>
<li>Alta circulación vertical del fluido.</li>
<li>Mezcla rápida en líquidos de baja a media viscosidad.</li>
</ul></div>

<div><p><strong>Aplicaciones</strong></p>
<ul>
<li>Suspensión de sólidos finos.</li>
<li>Mezcla de líquidos miscibles.</li>
<li>Homogeneización rápida.</li>
</ul></div>

</DivCarousel>
),
      render: <PropellerAgitatorDiagram />
    }
    ,
    {
      id: 'tab9',
      label: 'Turbina',
      title: 'Agitadores de Turbina',
      description: (
<DivCarousel>
    <div><p><strong>Principio</strong></p>
<ul>
<li>Generan flujo radial.</li>
<li>Alta turbulencia.</li>
<li>Incrementan transferencia de masa.</li>
</ul>

<p><strong>Usos principales</strong></p>
<ul>
<li>Reacciones químicas.</li>
<li>Dispersión de gases.</li>
<li>Emulsificación.</li>
</ul></div>
</DivCarousel>
),
      render: <TurbineAgitatorDiagram />
    }
    ,
    {
      id: 'tab10',
      label: 'Ribbon',
      title: 'Ribbon Mixer (Mezclador de Cintas)',
      description: (
<DivCarousel>
    <div><p><strong>Principio de funcionamiento</strong></p>
<ul>
<li>Recipiente horizontal.</li>
<li>Doble cinta helicoidal.</li>
<li>Movimiento en sentidos opuestos.</li>
</ul></div>
<div><p>La cinta externa desplaza el material hacia un extremo, mientras la interna lo mueve en sentido contrario, generando mezcla convectiva eficiente.</p>

<p><strong>Aplicaciones</strong></p>
<ul>
<li>Mezcla sólido–sólido.</li>
<li>Polvos y granulados.</li>
<li>Industria alimentaria y farmacéutica.</li>
</ul></div>


</DivCarousel>
),
      render: <RibbonMixerDiagram />
    }
    ,
    {
      id: 'tab11',
      label: 'Mezclado Uniforme',
      title: 'Importancia del Mezclado Uniforme',
      description: (
<DivCarousel>
    <div><p>Un mezclado uniforme es esencial para:</p>
<ul>
<li>Garantizar calidad del producto.</li>
<li>Evitar variaciones de concentración.</li>
<li>Optimizar reacciones químicas.</li>
<li>Cumplir normativas regulatorias.</li>
<li>Reducir desperdicios y reprocesos.</li>
</ul></div>
<div><p>Una mezcla deficiente puede provocar:</p>
<ul>
<li>Productos fuera de especificación.</li>
<li>Ineficiencia en procesos posteriores.</li>
<li>Pérdidas económicas significativas.</li>
</ul></div>


</DivCarousel>
),
      render: <MixingComparisonDiagram />
    }
  ];

  return (
    <LessonLayout 
      appTitle="Mezclado"
      tabs={tabsData}
      activeTabId={activeTabId}
      onTabChange={setActiveTabId}
    />
  );
}