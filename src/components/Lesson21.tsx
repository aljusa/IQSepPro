import React, { useState, useEffect } from 'react';
import {  ArrowUp, Beaker, Layers, MoveDown, Maximize2 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import DivCarousel from '../assets/DivCarousel';

// --- Interfaces y Tipos ---

interface TabConfig {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  color: string;
}

// --- Componentes Atómicos ---

const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden ${className}`}>
    {children}
  </div>
);

// --- Diagramas Específicos ---

/**
 * 1. Diagrama de fuerzas sobre una partícula (Estático)
 */
const DiagramForceAnalysis = () => {
  return (
    <div className="relative w-full aspect-video flex items-center justify-center bg-slate-50 rounded-lg">
      <svg width="400" height="400" viewBox="0 0 400 400" className="drop-shadow-md">
        {/* Fluido de fondo */}
        <rect x="50" y="50" width="300" height="300" fill="#e0f2fe" opacity="0.5" rx="10" />
        
        {/* Partícula */}
        <circle cx="200" cy="200" r="40" fill="#64748b" stroke="#334155" strokeWidth="2" />
        
        {/* Vector Peso (W) */}
        <line x1="200" y1="200" x2="200" y2="340" stroke="#ef4444" strokeWidth="4" markerEnd="url(#arrowhead-red)" />
        <text x="215" y="330" fill="#ef4444" className="font-bold">Peso (W)</text>
        
        {/* Vector Empuje (E) */}
        <line x1="185" y1="200" x2="185" y2="100" stroke="#3b82f6" strokeWidth="4" markerEnd="url(#arrowhead-blue)" />
        <text x="110" y="110" fill="#3b82f6" className="font-bold">Empuje (E)</text>
        
        {/* Vector Arrastre (Fd) */}
        <line x1="215" y1="200" x2="215" y2="140" stroke="#10b981" strokeWidth="4" markerEnd="url(#arrowhead-green)" />
        <text x="230" y="145" fill="#10b981" className="font-bold">Arrastre (Fd)</text>

        {/* Definición de flechas */}
        <defs>
          <marker id="arrowhead-red" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444" />
          </marker>
          <marker id="arrowhead-blue" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
          </marker>
          <marker id="arrowhead-green" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#10b981" />
          </marker>
        </defs>
      </svg>
    </div>
  );
};

/**
 * 2. Sedimentación de distintos tamaños (Dinámico)
 * Ilustra la Ley de Stokes: v ∝ d²
 */
const DiagramParticleSizes = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const initialParticles = [
      { id: 1, x: 50, y: 20, size: 5, speed: 0.5, color: '#94a3b8' },
      { id: 2, x: 150, y: 20, size: 10, speed: 2, color: '#64748b' },
      { id: 3, x: 250, y: 20, size: 20, speed: 8, color: '#334155' },
    ];
    setParticles(initialParticles);

    let animationFrameId: number;
    const render = () => {
      setParticles(prev => prev.map(p => ({
        ...p,
        y: p.y > 350 ? 20 : p.y + p.speed
      })));
      animationFrameId = requestAnimationFrame(render);
    };
    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="w-full bg-slate-900 rounded-lg p-6 flex flex-col items-center">
      <div className="relative w-full h-[400px] border-x border-b border-slate-700 bg-blue-950/20 overflow-hidden">
        {particles.map(p => (
          <div 
            key={p.id}
            className="absolute rounded-full transition-all duration-100 ease-linear shadow-lg"
            style={{
              left: `${p.x}px`,
              top: `${p.y}px`,
              width: `${p.size * 2}px`,
              height: `${p.size * 2}px`,
              backgroundColor: p.color,
              transform: 'translateX(-50%)'
            }}
          />
        ))}
        {/* Etiquetas de Velocidad */}
        <div className="absolute bottom-4 left-0 w-full flex justify-around text-xs text-slate-400 font-mono">
          <span>v = 1x</span>
          <span>v = 4x</span>
          <span>v = 16x</span>
        </div>
      </div>
    </div>
  );
};

/**
 * 3. Sedimentación Discreta (Dinámico)
 */
const DiagramDiscreteSedimentation = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  
  useEffect(() => {
    const count = 20;
    const items = Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 90 + 5,
      y: Math.random() * 100,
      size: 4,
      speed: 1 + Math.random() * 0.5,
      color: '#cbd5e1'
    }));
    setParticles(items);

    const interval = setInterval(() => {
      setParticles(prev => prev.map(p => ({
        ...p,
        y: p.y > 100 ? -5 : p.y + p.speed
      })));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-80 bg-slate-100 rounded-lg relative overflow-hidden border border-slate-200">
      {particles.map(p => (
        <div 
          key={p.id}
          className="absolute bg-slate-500 rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
          }}
        />
      ))}
      <div className="absolute inset-0 pointer-events-none border-b-4 border-blue-200/50"></div>
    </div>
  );
};

/**
 * 4. Formación de Flóculos (Dinámico)
 */
const DiagramFlocculation = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const items = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 90 + 5,
      y: Math.random() * 40,
      size: 3,
      speed: 0.8,
      color: '#94a3b8'
    }));
    setParticles(items);

    const interval = setInterval(() => {
      setParticles(prev => prev.map(p => {
        let newSize = p.size;
        let newSpeed = p.speed;
        
        // Simular agregación según profundidad
        if (p.y > 40 && p.y < 80) {
          newSize = 6;
          newSpeed = 1.5;
        } else if (p.y >= 80) {
          newSize = 12;
          newSpeed = 3;
        }

        return {
          ...p,
          size: newSize,
          speed: newSpeed,
          y: p.y > 110 ? -10 : p.y + p.speed
        };
      }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-96 bg-emerald-50/30 rounded-lg relative overflow-hidden border border-emerald-100">
      {particles.map(p => (
        <div 
          key={p.id}
          className="absolute bg-emerald-700/60 rounded-full transition-all duration-500"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            filter: p.size > 5 ? 'blur(0.5px)' : 'none'
          }}
        />
      ))}
      {/* Zonas de Reacción */}
      <div className="absolute top-0 w-full h-1/3 border-b border-dashed border-emerald-200 flex items-end px-4 py-1 text-[10px] text-emerald-600 uppercase tracking-widest">Zona Discreta</div>
      <div className="absolute top-1/3 w-full h-1/3 border-b border-dashed border-emerald-200 flex items-end px-4 py-1 text-[10px] text-emerald-600 uppercase tracking-widest">Zona de Floculación</div>
      <div className="absolute top-2/3 w-full h-1/3 flex items-end px-4 py-1 text-[10px] text-emerald-600 uppercase tracking-widest">Sedimentación Acelerada</div>
    </div>
  );
};


// 1. Static Diagram: Discrete vs Flocculent
const DiscreteVsFlocculentDiagram: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-8 w-full max-w-2xl h-full">
      {/* Discreta */}
      <div className="grid grid-rows-[auto_1fr] gap-4">
        <h3 className="text-center font-semibold text-slate-700">Sedimentación Discreta</h3>
        <div className="grid place-items-center bg-blue-50 border-2 border-blue-200 rounded-lg relative overflow-hidden h-80">
          <svg width="100%" height="100%" viewBox="0 0 100 200" preserveAspectRatio="none">
            {/* Water background */}
            <rect x="0" y="0" width="100" height="200" fill="#e0f2fe" opacity="0.5"/>
            {/* Particles falling independently */}
            <circle cx="20" cy="30" r="3" fill="#64748b" />
            <line x1="20" y1="35" x2="20" y2="55" stroke="#94a3b8" strokeWidth="1" strokeDasharray="2" />
            
            <circle cx="50" cy="80" r="3" fill="#64748b" />
            <line x1="50" y1="85" x2="50" y2="105" stroke="#94a3b8" strokeWidth="1" strokeDasharray="2" />
            
            <circle cx="80" cy="140" r="3" fill="#64748b" />
            <line x1="80" y1="145" x2="80" y2="165" stroke="#94a3b8" strokeWidth="1" strokeDasharray="2" />
            
            {/* Accumulated bottom */}
            <rect x="0" y="190" width="100" height="10" fill="#cbd5e1" />
          </svg>
        </div>
      </div>

      {/* Floculenta */}
      <div className="grid grid-rows-[auto_1fr] gap-4">
        <h3 className="text-center font-semibold text-slate-700">Sedimentación Floculenta</h3>
        <div className="grid place-items-center bg-blue-50 border-2 border-blue-200 rounded-lg relative overflow-hidden h-80">
          <svg width="100%" height="100%" viewBox="0 0 100 200" preserveAspectRatio="none">
            {/* Water background */}
            <rect x="0" y="0" width="100" height="200" fill="#e0f2fe" opacity="0.5"/>
            
            {/* Small particles top */}
            <circle cx="30" cy="20" r="2" fill="#475569" />
            <circle cx="40" cy="25" r="2" fill="#475569" />
            <circle cx="60" cy="15" r="2" fill="#475569" />
            <circle cx="70" cy="30" r="2" fill="#475569" />
            
            {/* Arrows pointing to agglomeration */}
            <path d="M 35 30 Q 50 45 50 50" stroke="#94a3b8" strokeWidth="1" fill="none" strokeDasharray="2" />
            <path d="M 65 35 Q 50 45 50 50" stroke="#94a3b8" strokeWidth="1" fill="none" strokeDasharray="2" />

            {/* Medium flocs middle */}
            <path d="M 45 60 Q 50 55 55 60 T 50 65 Z" fill="#334155" />
            <path d="M 70 80 Q 75 75 80 80 T 75 85 Z" fill="#334155" />
            <line x1="50" y1="70" x2="50" y2="110" stroke="#94a3b8" strokeWidth="2" strokeDasharray="3" />
            
            {/* Large flocs bottom */}
            <path d="M 35 130 Q 45 120 55 130 T 65 135 Q 55 145 45 140 T 35 130 Z" fill="#0f172a" />
            <line x1="50" y1="145" x2="50" y2="185" stroke="#64748b" strokeWidth="3" strokeDasharray="4" />
            
            {/* Accumulated bottom */}
            <rect x="0" y="180" width="100" height="20" fill="#94a3b8" />
          </svg>
        </div>
      </div>
    </div>
  );
};

// 2. Static Diagram: Thickener Schema
const ThickenerDiagram: React.FC = () => {
  return (
    <div className="grid place-items-center w-full max-w-3xl h-full">
      <svg viewBox="0 0 500 350" className="w-full h-auto drop-shadow-md">
        {/* Tank Body */}
        <path d="M 50 50 L 450 50 L 450 200 L 280 300 L 220 300 L 50 200 Z" fill="#e0f2fe" stroke="#3b82f6" strokeWidth="3"/>
        
        {/* Feed Well (Alimentación) */}
        <rect x="230" y="20" width="40" height="100" fill="#93c5fd" stroke="#2563eb" strokeWidth="2" />
        <path d="M 250 5 L 250 80" stroke="#1d4ed8" strokeWidth="4" markerEnd="url(#arrowhead)"/>
        <text x="250" y="15" textAnchor="middle" fontSize="12" fill="#1e3a8a" fontWeight="bold">Alimentación</text>

        {/* Clarification Zone */}
        <text x="120" y="100" textAnchor="middle" fontSize="14" fill="#0369a1" fontWeight="bold">Zona de Clarificación</text>
        
        {/* Settling Zone */}
        <rect x="52" y="130" width="396" height="70" fill="#bfdbfe" opacity="0.7" />
        <text x="380" y="165" textAnchor="middle" fontSize="14" fill="#1d4ed8" fontWeight="bold">Zona de Sedimentación</text>

        {/* Rakes (Rastras) */}
        <path d="M 250 120 L 250 290" stroke="#475569" strokeWidth="6" />
        <line x1="250" y1="280" x2="100" y2="200" stroke="#475569" strokeWidth="4" />
        <line x1="250" y1="280" x2="400" y2="200" stroke="#475569" strokeWidth="4" />
        {/* Rake blades */}
        <line x1="150" y1="225" x2="150" y2="240" stroke="#334155" strokeWidth="3" />
        <line x1="200" y1="252" x2="200" y2="267" stroke="#334155" strokeWidth="3" />
        <line x1="300" y1="252" x2="300" y2="267" stroke="#334155" strokeWidth="3" />
        <line x1="350" y1="225" x2="350" y2="240" stroke="#334155" strokeWidth="3" />
        <text x="180" y="280" textAnchor="middle" fontSize="12" fill="#334155" fontWeight="bold">Rastras</text>

        {/* Sludge blanket */}
        <path d="M 52 200 L 448 200 L 280 298 L 220 298 Z" fill="#94a3b8" opacity="0.8"/>
        
        {/* Sludge Discharge */}
        <rect x="235" y="300" width="30" height="40" fill="#64748b" stroke="#334155" strokeWidth="2" />
        <path d="M 250 310 L 250 350" stroke="#0f172a" strokeWidth="4" markerEnd="url(#arrowhead-dark)"/>
        <text x="250" y="360" textAnchor="middle" fontSize="12" fill="#0f172a" fontWeight="bold">Descarga de Lodos</text>

        {/* Markers */}
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#1d4ed8" />
          </marker>
          <marker id="arrowhead-dark" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#0f172a" />
          </marker>
        </defs>
      </svg>
    </div>
  );
};

// 3. Dynamic Diagram: Clarifier Operation
const ClarifierDynamicDiagram: React.FC = () => {
  return (
    <div className="grid place-items-center w-full h-full relative">
      <style>{`
        @keyframes fall {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          10% { opacity: 1; }
          90% { transform: translateY(180px) scale(1.5); opacity: 1; }
          100% { transform: translateY(200px) scale(2); opacity: 0; }
        }
        @keyframes flowUp {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          20% { opacity: 0.6; }
          80% { transform: translateY(-100px) translateX(var(--tx)); opacity: 0.6; }
          100% { transform: translateY(-120px) translateX(var(--tx)); opacity: 0; }
        }
        .particle { animation: fall 4s infinite linear; }
        .flow-left { animation: flowUp 3s infinite linear; --tx: -50px; }
        .flow-right { animation: flowUp 3s infinite linear; --tx: 50px; }
        .delay-1 { animation-delay: 1s; }
        .delay-2 { animation-delay: 2s; }
        .delay-3 { animation-delay: 3s; }
      `}</style>
      
      <svg viewBox="0 0 600 400" className="w-full max-w-3xl h-auto">
        {/* Tank */}
        <path d="M 100 100 L 500 100 L 500 300 L 350 380 L 250 380 L 100 300 Z" fill="#f0f9ff" stroke="#0ea5e9" strokeWidth="2"/>
        
        {/* Water Level & Overflow Weirs */}
        <rect x="90" y="100" width="20" height="20" fill="#bae6fd" stroke="#0284c7" />
        <rect x="490" y="100" width="20" height="20" fill="#bae6fd" stroke="#0284c7" />
        <path d="M 80 120 Q 70 140 60 160" stroke="#38bdf8" strokeWidth="4" fill="none" className="flow-left" />
        <path d="M 520 120 Q 530 140 540 160" stroke="#38bdf8" strokeWidth="4" fill="none" className="flow-right" />
        
        {/* Feed Pipe */}
        <rect x="280" y="20" width="40" height="120" fill="#7dd3fc" stroke="#0284c7" strokeWidth="2" />
        <text x="300" y="15" textAnchor="middle" fontSize="14" fill="#075985" fontWeight="bold">Ingreso (Caudal)</text>

        {/* Clarified Water Flow Indicators (Animated) */}
        <g stroke="#38bdf8" strokeWidth="2" fill="none" opacity="0.6">
          <path d="M 260 200 Q 200 150 150 120" className="flow-left" />
          <path d="M 340 200 Q 400 150 450 120" className="flow-right" />
          <path d="M 260 240 Q 180 180 120 120" className="flow-left delay-1" />
          <path d="M 340 240 Q 420 180 480 120" className="flow-right delay-1" />
        </g>

        {/* Settling Particles (Animated) */}
        <g fill="#475569">
          {/* Group 1 */}
          <circle cx="280" cy="150" r="3" className="particle" />
          <circle cx="300" cy="140" r="2" className="particle" />
          <circle cx="320" cy="150" r="3" className="particle" />
          
          {/* Group 2 */}
          <circle cx="270" cy="160" r="2.5" className="particle delay-1" />
          <circle cx="300" cy="170" r="4" className="particle delay-1" />
          <circle cx="330" cy="160" r="2.5" className="particle delay-1" />

          {/* Group 3 */}
          <circle cx="285" cy="145" r="3" className="particle delay-2" />
          <circle cx="315" cy="155" r="2" className="particle delay-2" />
          
          {/* Group 4 */}
          <circle cx="290" cy="130" r="3.5" className="particle delay-3" />
          <circle cx="310" cy="140" r="2.5" className="particle delay-3" />
        </g>

        {/* Sludge Layer */}
        <path d="M 100 300 L 500 300 L 350 380 L 250 380 Z" fill="#94a3b8" opacity="0.9"/>
        <text x="300" y="340" textAnchor="middle" fontSize="16" fill="#f8fafc" fontWeight="bold">Lodos Compactados</text>
        <text x="150" y="160" textAnchor="middle" fontSize="14" fill="#0369a1" fontWeight="bold">Agua Clarificada</text>
        <text x="450" y="160" textAnchor="middle" fontSize="14" fill="#0369a1" fontWeight="bold">Agua Clarificada</text>
      </svg>
    </div>
  );
};

// 4. Interactive Diagram: Operational Impact
const OperationalImpactDiagram: React.FC = () => {
  const [inflow, setInflow] = useState<number>(50); // 0 - 100
  const [solids, setSolids] = useState<number>(30); // 0 - 100

  // Derived calculations for simulation
  // High inflow = turbulent, lower efficiency, higher sludge blanket
  // High solids = faster sludge accumulation, lower efficiency
  const efficiency = Math.max(10, 100 - (inflow * 0.4) - (solids * 0.3));
  const sludgeLevel = Math.min(100, (inflow * 0.3) + (solids * 0.6));
  
  // Calculate visual height for sludge polygon based on level (0-100)
  // Max height corresponds to y=150, min height corresponds to y=290
  const maxSludgeY = 150;
  const minSludgeY = 290;
  const currentSludgeY = minSludgeY - ((minSludgeY - maxSludgeY) * (sludgeLevel / 100));

  // Determine clarifier water color based on efficiency
  const waterOpacity = Math.max(0.1, 1 - (efficiency / 100));
  
  const chartData = [
    { name: 'Eficiencia (%)', valor: Number(efficiency.toFixed(1)), max: 100 },
    { name: 'Nivel Lodos (%)', valor: Number(sludgeLevel.toFixed(1)), max: 100 }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 w-full h-full">
      {/* Controls Panel */}
      <div className="grid grid-rows-[auto_auto_1fr] gap-6 bg-slate-100 p-6 rounded-xl border border-slate-200">
        <h3 className="font-bold text-slate-800 text-lg border-b border-slate-300 pb-2">Panel de Control</h3>
        
        <div className="grid gap-4">
          <div className="grid gap-2">
            <label className="text-sm font-semibold text-slate-700 flex justify-between">
              <span>Caudal de Entrada</span>
              <span className="text-blue-600">{inflow} m³/h</span>
            </label>
            <input 
              type="range" min="10" max="100" value={inflow} 
              onChange={(e) => setInflow(Number(e.target.value))}
              className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>
          
          <div className="grid gap-2">
            <label className="text-sm font-semibold text-slate-700 flex justify-between">
              <span>Concentración Sólidos</span>
              <span className="text-amber-600">{solids} %</span>
            </label>
            <input 
              type="range" min="5" max="80" value={solids} 
              onChange={(e) => setSolids(Number(e.target.value))}
              className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-amber-600"
            />
          </div>
        </div>

        <div className="grid grid-rows-[auto_1fr] gap-2 mt-4">
          <h4 className="text-sm font-semibold text-slate-700 text-center">Métricas de Proceso</h4>
          <div className="w-full h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis type="number" domain={[0, 100]} hide />
                <YAxis dataKey="name" type="category" width={100} tick={{ fontSize: 12, fill: '#475569' }} axisLine={false} tickLine={false}/>
                <Tooltip cursor={{fill: 'transparent'}} />
                <Bar dataKey="valor" radius={[0, 4, 4, 0]} barSize={20}>
                  {chartData.map((_, index) => (
                                        <Cell  key={`cell-${index}`} fill={index === 0 ? '#10b981' : '#f59e0b'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Interactive Visualization */}
      <div className="grid place-items-center bg-white border border-slate-200 rounded-xl p-4 relative overflow-hidden">
        {/* Warning Indicator */}
        {efficiency < 40 && (
          <div className="absolute top-4 right-4 bg-red-100 text-red-700 px-4 py-2 rounded-md border border-red-300 font-bold text-sm animate-pulse z-10">
            ¡Alerta: Sobrecarga en el sistema! Pérdida de clarificación.
          </div>
        )}

        <svg viewBox="0 0 500 350" className="w-full max-w-2xl h-auto transition-all duration-500">
          {/* Base Tank Profile */}
          <path d="M 50 50 L 450 50 L 450 200 L 280 300 L 220 300 L 50 200 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2"/>
          
          {/* Dynamic Water Opacity (Turbidity based on efficiency) */}
          <path d="M 50 50 L 450 50 L 450 200 L 280 300 L 220 300 L 50 200 Z" fill="#94a3b8" opacity={waterOpacity} style={{ transition: 'opacity 0.5s ease' }}/>
          <path d="M 50 50 L 450 50 L 450 200 L 280 300 L 220 300 L 50 200 Z" fill="#e0f2fe" opacity={1 - waterOpacity} style={{ transition: 'opacity 0.5s ease' }}/>

          {/* Dynamic Sludge Blanket */}
          {/* X coordinates for slanted walls need to be interpolated if y < 200, but for simplicity we keep y limit >= 150 where tank is mostly straight */}
          <path 
            d={`M 52 ${currentSludgeY} L 448 ${currentSludgeY} L 448 200 L 280 298 L 220 298 L 52 200 Z`} 
            fill="#64748b" 
            opacity="0.9"
            style={{ transition: 'all 0.5s ease' }}
          />
          <line x1="52" y1={currentSludgeY} x2="448" y2={currentSludgeY} stroke="#f59e0b" strokeWidth="2" strokeDasharray="4" style={{ transition: 'all 0.5s ease' }}/>

          {/* Feed Center Well */}
          <rect x="230" y="20" width="40" height="120" fill="#3b82f6" opacity="0.8" />
          
          {/* Flow visual cues based on inflow */}
          <path d="M 250 140 L 220 170" stroke="#1d4ed8" strokeWidth={inflow / 15} opacity="0.6" markerEnd="url(#flow-arrow)"/>
          <path d="M 250 140 L 280 170" stroke="#1d4ed8" strokeWidth={inflow / 15} opacity="0.6" markerEnd="url(#flow-arrow)"/>

          <defs>
            <marker id="flow-arrow" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
              <polygon points="0 0, 6 2, 0 4" fill="#1d4ed8" />
            </marker>
          </defs>
        </svg>
      </div>
    </div>
  );
};



// --- Estructura de Diseño Principal (Layout) ---

const LessonLayout = () => {
  const [activeTab, setActiveTab] = useState('forces');

  const tabs: TabConfig[] = [
    { id: 'forces', label: 'Análisis de Fuerzas', icon: <ArrowUp className="w-4 h-4" /> },
    { id: 'sizes', label: 'Efecto del Tamaño', icon: <Maximize2 className="w-4 h-4" /> },
    { id: 'discrete', label: 'Sedimentación Discreta', icon: <MoveDown className="w-4 h-4" /> },
    { id: 'flocs', label: 'Floculación', icon: <Beaker className="w-4 h-4" /> },
    { id: 'discretevsflocs', label: 'Comparacion', icon: <Beaker className="w-4 h-4" /> },
    { id: 'thickener', label: 'Espesadores', icon: <Beaker className="w-4 h-4" /> },
    { id: 'clarifier', label: 'Clarificadores', icon: <Beaker className="w-4 h-4" /> },
    { id: 'operational', label: 'Parámetros', icon: <Beaker className="w-4 h-4" /> },
  ];

  const contentMap: Record<string, { title: string, description: React.ReactNode, render: React.ReactNode }> = {
    forces: {
      title: "Diagrama de Fuerzas sobre una Partícula",
      description: (
      <DivCarousel>
        <div>
          <p>La sedimentación es una operación unitaria de separación sólido–líquido basada en la acción de la gravedad. Se emplea cuando existe diferencia de densidad entre las partículas sólidas suspendidas y el fluido que las contiene. Es fundamental en tratamiento de aguas, minería, procesos químicos y recuperación de sólidos.</p>
          
        </div>

        <div>
          <p>Cuando una partícula se encuentra suspendida en un fluido, actúan tres fuerzas principales:</p>
          <ul>
            <li>Fuerza gravitacional (peso).</li>
            <li>Empuje del fluido (Principio de Arquímedes).</li>
            <li>Fuerza de arrastre (resistencia viscosa).</li>
          </ul>

          <p>El movimiento de la partícula depende del equilibrio entre estas fuerzas.</p>

          <h3>Balance conceptual de fuerzas</h3>
          <ul>
            <li>Si el peso aparente &gt; fuerza de arrastre → la partícula acelera.</li>
            <li>Si el peso aparente = fuerza de arrastre → velocidad constante.</li>
            <li>Si el empuje ≈ peso → sedimentación lenta o flotación.</li>
          </ul>
          </div>
        
      </DivCarousel>
    ),
      render: <DiagramForceAnalysis />
    },
    sizes: {
      title: "Sedimentación y Diámetro de Partícula",
      description:  (
      <DivCarousel>
        <div>

          <p>La velocidad terminal (Vₜ) se alcanza cuando la fuerza neta sobre la partícula es cero y la partícula cae a velocidad constante.</p>

          <p>En régimen laminar (Ley de Stokes):</p>

          <p>𝑉ₜ = g(ρₛ − ρ𝑓)d² / 18μ</p>
          <p>Donde:</p>
          <ul>
            <li>Vₜ: velocidad terminal</li>
            <li>g: aceleración de la gravedad</li>
            <li>ρₛ: densidad del sólido</li>
            <li>ρ𝑓: densidad del fluido</li>
            <li>d: diámetro de partícula</li>
            <li>μ: viscosidad del fluido</li>
          </ul>
        </div>

<div> <h3>Factores que afectan la velocidad terminal</h3>
          <ul>
            <li>Mayor diámetro → mayor velocidad.</li>
            <li>Mayor diferencia de densidades → mayor velocidad.</li>
            <li>Mayor viscosidad → menor velocidad.</li>
          </ul>

          <p>Partículas grandes y densas sedimentan más rápidamente que partículas pequeñas o poco densas.</p>

       </div>   <p>La sedimentación se fundamenta en el equilibrio de fuerzas sobre una partícula en un fluido. La velocidad terminal es el parámetro clave que determina el tiempo y la eficiencia de separación.</p>
         
      </DivCarousel>
    ),
      render: <DiagramParticleSizes />
    },
    discrete: {
      title: "Sedimentación Discreta e Independiente",
      description: (
      <DivCarousel>
        <div>
          <p>El comportamiento de las partículas depende de su concentración y de su interacción. Esto permite clasificar la sedimentación en distintos tipos según el modo en que las partículas descienden en el fluido.</p>
        </div>
        <div>
          <p>Ocurre cuando:</p>
          <ul>
            <li>Las partículas sedimentan individualmente.</li>
            <li>No interactúan entre sí.</li>
            <li>La suspensión es diluida.</li>
          </ul>

          <h3>Características</h3>
          <ul>
            <li>Tamaño constante durante la caída.</li>
            <li>Trayectoria independiente.</li>
            <li>Aplicable la Ley de Stokes (régimen laminar).</li>
          </ul>

          <p>Ejemplo típico: arena en agua limpia.</p>
 </div>
      </DivCarousel>
    ),
      render: <DiagramDiscreteSedimentation />
    },
    flocs: {
      title: "Formación de Flóculos y Agregación",
      description:(
      <DivCarousel>
        <div>
          <p>Ocurre cuando:</p>
          <ul>
            <li>Las partículas se agrupan formando flóculos.</li>
            <li>El tamaño efectivo aumenta durante la caída.</li>
            <li>La velocidad cambia con el tiempo.</li>
          </ul>

          <h3>Características</h3>
          <ul>
            <li>Común en tratamiento de aguas.</li>
            <li>Requiere coagulantes o floculantes.</li>
            <li>Difícil modelado matemático exacto.</li>
          </ul>

          <p>Mejora la velocidad de sedimentación al aumentar el tamaño efectivo.</p>
</div>
      </DivCarousel>
    ),
      render: <DiagramFlocculation />
    },
    discretevsflocs: {
      title: "Comparacion general",
      description:      
       <div>
          <table>
            <thead>
              <tr>
                <th>Característica</th>
                <th>Discreta</th>
                <th>Floculenta</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Interacción entre partículas</td>
                <td>No</td>
                <td>Sí</td>
              </tr>
              <tr>
                <td>Tamaño durante el proceso</td>
                <td>Constante</td>
                <td>Variable</td>
              </tr>
              <tr>
                <td>Modelado matemático</td>
                <td>Simple</td>
                <td>Complejo</td>
              </tr>
              <tr>
                <td>Aplicación típica</td>
                <td>Suspensiones diluidas</td>
                <td>Tratamiento de aguas</td>
              </tr>
            </tbody>
          </table>
     <p>La diferencia fundamental entre sedimentación discreta y floculenta radica en la interacción entre partículas. Esta distinción influye directamente en el diseño y operación de los equipos industriales.</p>
     </div>
,
      render: <DiscreteVsFlocculentDiagram />
    },
    thickener: {
      title: "Espesadores",
      description: (
      <DivCarousel> 
         <p>En la industria, la sedimentación se realiza en equipos diseñados para maximizar la eficiencia de separación sólido–líquido. Los más utilizados son los espesadores y los clarificadores.</p>
        <div>
         <h3><strong>Función</strong></h3>
          <p>Incrementar la concentración de sólidos en el fondo del tanque y recuperar el líquido clarificado en la parte superior.</p>

          <h3>Características</h3>
          <ul>
            <li>Tanques circulares de gran diámetro.</li>
            <li>Sistema de rastras o brazos giratorios.</li>
            <li>Descarga inferior de lodo concentrado.</li>
            <li>Entrada central de alimentación.</li>
          </ul>
    

          <h3>Aplicaciones</h3>
          <ul>
            <li>Industria minera.</li>
            <li>Procesamiento de minerales.</li>
            <li>Recuperación de sólidos industriales.</li>
          </ul>
        </div>
      </DivCarousel>
    ),
      render: <ThickenerDiagram />
    },
    clarifier: {
      title: "Clarificadores",
      description:  (
      <DivCarousel>
        <div>
          <h3>Función</h3>
          <p>Remover sólidos suspendidos para obtener un líquido clarificado de alta calidad.</p>

          <h3>Características</h3>
          <ul>
            <li>Flujo controlado de entrada.</li>
            <li>Zona amplia de sedimentación.</li>
            <li>Recolección superior mediante vertederos.</li>
            <li>Extracción inferior de lodos.</li>
          </ul>

          <h3>Aplicaciones</h3>
          <ul>
            <li>Plantas de tratamiento de agua potable.</li>
            <li>Tratamiento de aguas residuales.</li>
            <li>Procesos químicos.</li>
          </ul>

        </div>
      </DivCarousel>
    ),
      render: <ClarifierDynamicDiagram />
    },
    operational: {
      title: "Parámetros operativos",
      description:  (
      <DivCarousel>
        <div>
          <h3>Función</h3>
          <p>Remover sólidos suspendidos para obtener un líquido clarificado de alta calidad.</p>

          <h3>Características</h3>
          <ul>
            <li>Flujo controlado de entrada.</li>
            <li>Zona amplia de sedimentación.</li>
            <li>Recolección superior mediante vertederos.</li>
            <li>Extracción inferior de lodos.</li>
          </ul>

          <h3>Aplicaciones</h3>
          <ul>
            <li>Plantas de tratamiento de agua potable.</li>
            <li>Tratamiento de aguas residuales.</li>
            <li>Procesos químicos.</li>
          </ul>

        </div>
      </DivCarousel>
    ),
      render: <OperationalImpactDiagram />
    }
  };

  const currentContent = contentMap[activeTab];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 grid grid-rows-[auto_1fr] grid-cols-1">
      {/* Header Section */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 shadow-sm z-10 grid grid-cols-[1fr_auto] items-center">
        <div>
          <h1 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <Layers className="text-blue-600" />
            Mecánica de Sedimentación
          </h1>
        </div>
        
        <nav className="flex gap-1 bg-slate-100 p-1 rounded-lg">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === tab.id 
                  ? "bg-white text-blue-600 shadow-sm" 
                  : "text-slate-600 hover:bg-slate-200/50"
              }`}
            >
              {tab.icon}
              <span className="hidden md:inline">{tab.label}</span>
            </button>
          ))}
        </nav>
      </header>

      {/* Main Content Area using CSS Grid */}
      <main className="p-6 md:p-10 grid grid-cols-1 max-w-6xl mx-auto w-full gap-8 content-start">
        
        {/* Section Header */}
        <div className="space-y-2 border-l-4 border-blue-500 pl-4">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
            {currentContent.title}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
            {currentContent.description}
          </p>
        </div>

        {/* Diagram Area */}
        <div className="grid grid-cols-1 gap-6">
          <Card className="p-8 flex items-center justify-center bg-white min-h-[450px]">
            <div className="w-full">
              {currentContent.render}
            </div>
          </Card>

          {/* Complementary Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-4 bg-blue-50/50 border-blue-100">
              <h4 className="font-bold text-blue-900 text-sm uppercase mb-2">Variables Clave</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Densidad del fluido ($\rho_f$)</li>
                <li>• Viscosidad dinámica ($\mu$)</li>
                <li>• Diámetro de partícula ($d_p$)</li>
              </ul>
            </Card>
            <Card className="p-4 bg-emerald-50/50 border-emerald-100">
              <h4 className="font-bold text-emerald-900 text-sm uppercase mb-2">Estado del Sistema</h4>
              <p className="text-sm text-emerald-800">
                {activeTab === 'forces' ? "Análisis de equilibrio estático." : "Simulación de flujo laminar activo."}
              </p>
            </Card>
            <Card className="p-4 bg-slate-50 border-slate-200">
              <h4 className="font-bold text-slate-900 text-sm uppercase mb-2">Aplicación</h4>
              <p className="text-sm text-slate-600">
                Tratamiento de aguas, minería y geología sedimentaria.
              </p>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-6 text-center text-slate-400 text-xs border-t border-slate-200 mt-auto">
        DiagramtoReact • Visualización Educativa en Ingeniería • 2024
      </footer>
    </div>
  );
};

export default function App() {
  return (
    <LessonLayout />
  );
}