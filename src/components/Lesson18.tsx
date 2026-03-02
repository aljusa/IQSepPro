import React, { useState } from 'react';
import DivCarousel from '../assets/DivCarousel';

// --- Tipos e Interfaces ---
interface TabItem {
    id: string;
    label: string;
    title: string;
    description: React.ReactNode;
    component: React.FC;
}

interface LessonLayoutProps {
    title: string;
    tabs: TabItem[];
}

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

// --- Componentes Base y Layout ---

const Card: React.FC<CardProps> = ({ children, className = '' }) => (
    <div className={`grid bg-white rounded-xl shadow-md border border-slate-200 ${className}`}>
        {children}
    </div>
);

const Header: React.FC<{ title: string }> = ({ title }) => (
    <header className="grid grid-cols-1 place-items-center md:place-items-start p-6 bg-slate-900 text-white shadow-lg z-10">
        <div className="grid grid-cols-[auto_1fr] gap-3 items-center w-full max-w-6xl mx-auto">
            <div className="grid place-items-center w-10 h-10 bg-blue-600 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            </div>
            <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        </div>
    </header>
);
const LessonLayout: React.FC<LessonLayoutProps> = ({ title, tabs }) => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const activeTab = tabs[activeTabIndex];

    return (
        <div className="grid grid-rows-[auto_1fr] min-h-screen w-full bg-slate-50 text-slate-800 font-sans">
            <Header title={title} />

            <div className="grid grid-rows-[auto_1fr] w-full max-w-6xl mx-auto">
                
                {/* Tabs */}
                <nav className="grid grid-flow-col auto-cols-fr bg-white border-b border-slate-200 shadow-sm">
                    {tabs.map((tab, index) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTabIndex(index)}
                            className={`grid place-items-center py-4 px-2 text-sm md:text-base font-semibold transition-colors duration-200 border-b-2
                            ${activeTabIndex === index
                                    ? 'border-blue-600 text-blue-700 bg-blue-50/50'
                                    : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-100'
                                }`}
                        >
                            <span className="text-center">{tab.label}</span>
                        </button>
                    ))}
                </nav>

                {/* Contenido */}
                <main className="p-4 md:p-8 w-full">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-3xl font-extrabold text-slate-900 border-l-4 border-blue-600 pl-4">
                                {activeTab.title}
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed max-w-4xl">
                                {activeTab.description}
                            </p>
                        </div>

                        <Card className="w-full p-6 bg-slate-50">
                            <activeTab.component />
                        </Card>
                    </div>
                </main>
            </div>
        </div>
    );
};

// --- Componentes de Diagramas ---

// 1. Diagrama Estático: Área Superficial
const StaticAreaDiagram: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 items-center justify-items-center w-full max-w-3xl">
            <div className="grid place-items-center gap-4">
                <svg width="150" height="150" viewBox="0 0 100 100" className="drop-shadow-lg">
                    <rect x="10" y="10" width="80" height="80" fill="#94a3b8" stroke="#475569" strokeWidth="4" rx="4" />
                    {/* Indicadores de área */}
                    <path d="M5 50 L0 50 L0 100 L50 100 L50 105" stroke="#3b82f6" strokeWidth="2" fill="none" />
                    <text x="0" y="40" fontSize="10" fill="#2563eb" className="font-bold">Área Expuesta: Baja</text>
                </svg>
                <div className="text-center font-semibold text-slate-700">Partícula Original</div>
            </div>

            <div className="grid place-items-center">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                <span className="text-xs font-bold text-blue-600 mt-2 uppercase tracking-widest">Fragmentación</span>
            </div>

            <div className="grid place-items-center gap-4">
                <div className="grid grid-cols-3 grid-rows-3 gap-1">
                    {[...Array(9)].map((_, i) => (
                        <svg key={i} width="45" height="45" viewBox="0 0 50 50" className="drop-shadow-md">
                            <rect x="5" y="5" width="40" height="40" fill="#cbd5e1" stroke="#64748b" strokeWidth="2" rx="2" />
                        </svg>
                    ))}
                </div>
                <div className="text-center font-semibold text-slate-700">Múltiples Partículas<br /><span className="text-blue-600 text-sm">(Mayor Área Superficial)</span></div>
            </div>
        </div>
    );
};

// 2. Diagrama Dinámico: Flujo de Proceso
const DynamicFlowDiagram: React.FC = () => {
    return (
        <div className="grid w-full max-w-4xl relative py-12">
            {/* Animación CSS inyectada para flujo continuo */}
            <style>{`
        @keyframes flowDot {
          0% { transform: translateX(0) scale(0); opacity: 0; }
          10% { transform: translateX(0) scale(1); opacity: 1; }
          90% { transform: translateX(calc(100% - 24px)) scale(1); opacity: 1; }
          100% { transform: translateX(calc(100% - 24px)) scale(0); opacity: 0; }
        }
        .flow-animation {
          animation: flowDot 4s linear infinite;
        }
      `}</style>

            <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 items-center justify-items-center w-full relative z-10">

                {/* Nodo 1 */}
                <div className="grid place-items-center w-full">
                    <div className="grid place-items-center w-32 h-32 bg-slate-200 rounded-full border-4 border-slate-400 shadow-inner">
                        <div className="grid grid-cols-2 gap-1">
                            {[1, 2, 3, 4].map(i => <div key={i} className="w-6 h-6 bg-slate-500 rounded-sm" />)}
                        </div>
                    </div>
                    <span className="mt-3 font-bold text-slate-700">Mineral Grueso</span>
                    <span className="text-xs text-slate-500">Alimentación (ROM)</span>
                </div>

                {/* Flecha */}
                <div className="grid place-items-center text-blue-500">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </div>

                {/* Nodo 2 */}
                <div className="grid place-items-center w-full">
                    <div className="grid place-items-center w-32 h-32 bg-blue-100 rounded-full border-4 border-blue-400 shadow-inner">
                        <div className="grid grid-cols-3 gap-1">
                            {[...Array(9)].map((_, i) => <div key={i} className="w-3 h-3 bg-blue-500 rounded-sm" />)}
                        </div>
                    </div>
                    <span className="mt-3 font-bold text-slate-700">Trituración</span>
                    <span className="text-xs text-slate-500">Etapa Primaria/Secundaria</span>
                </div>

                {/* Flecha */}
                <div className="grid place-items-center text-blue-500">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </div>

                {/* Nodo 3 */}
                <div className="grid place-items-center w-full">
                    <div className="grid place-items-center w-32 h-32 bg-indigo-100 rounded-full border-4 border-indigo-400 shadow-inner relative overflow-hidden">
                        <div className="absolute inset-0 grid grid-cols-8 gap-[1px] opacity-60">
                            {[...Array(64)].map((_, i) => <div key={i} className="w-full h-full bg-indigo-500 rounded-full" />)}
                        </div>
                    </div>
                    <span className="mt-3 font-bold text-slate-700">Molienda</span>
                    <span className="text-xs text-slate-500">Producto Fino</span>
                </div>
            </div>

            {/* Línea de ruta y partícula animada por debajo */}
            <div className="absolute top-1/2 left-[10%] right-[10%] h-1 bg-slate-200 -translate-y-1/2 z-0" />
            <div className="absolute top-1/2 left-[10%] right-[10%] -translate-y-1/2 z-0">
                <div className="w-4 h-4 bg-yellow-400 rounded-full shadow-[0_0_10px_rgba(250,204,21,0.8)] flow-animation" />
            </div>
        </div>
    );
};

// 3. Diagrama Interactivo: Mecanismos
type MechanismType = 'compresion' | 'impacto' | 'cizallamiento' | 'abrasion';

const InteractiveMechanismsDiagram: React.FC = () => {
    const [activeMech, setActiveMech] = useState<MechanismType>('compresion');

    const mechs = [
        { id: 'compresion', label: 'Compresión', desc: 'Fuerzas opuestas aplastan la partícula.' },
        { id: 'impacto', label: 'Impacto', desc: 'Fuerza repentina y de alta velocidad rompe la partícula.' },
        { id: 'cizallamiento', label: 'Cizallamiento', desc: 'Fuerzas paralelas en sentidos opuestos cortan el material.' },
        { id: 'abrasion', label: 'Abrasión', desc: 'Fricción superficial desgasta los bordes de la partícula.' }
    ] as const;

    return (
        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8 w-full h-full">
            {/* Selector Grid */}
            <div className="grid grid-rows-4 gap-3 content-start">
                {mechs.map(mech => (
                    <button
                        key={mech.id}
                        onClick={() => setActiveMech(mech.id)}
                        className={`grid place-items-start p-4 border rounded-lg text-left transition-all
              ${activeMech === mech.id
                                ? 'bg-blue-600 text-white border-blue-700 shadow-md ring-2 ring-blue-300 ring-offset-2'
                                : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
                            }`}
                    >
                        <span className="font-bold text-lg">{mech.label}</span>
                        <span className={`text-xs mt-1 ${activeMech === mech.id ? 'text-blue-100' : 'text-slate-500'}`}>
                            {mech.desc}
                        </span>
                    </button>
                ))}
            </div>

            {/* Renderizado de Fuerzas Grid */}
            <div className="grid place-items-center bg-white rounded-lg border border-slate-200 shadow-inner p-8 relative overflow-hidden">
                <svg width="300" height="300" viewBox="0 0 200 200" className="overflow-visible">
                    {/* Fondo/Guías */}
                    <circle cx="100" cy="100" r="80" fill="#f8fafc" stroke="#e2e8f0" strokeDasharray="5,5" />

                    {/* Partícula Base */}
                    <path
                        d="M 60,60 Q 100,40 140,60 T 150,120 Q 130,160 80,150 T 50,100 Z"
                        fill={activeMech === 'abrasion' ? '#cbd5e1' : '#94a3b8'}
                        stroke="#475569"
                        strokeWidth="3"
                        className="transition-all duration-300"
                    />

                    {/* Animaciones de flechas dinámicas basadas en estado */}
                    {activeMech === 'compresion' && (
                        <g className="transition-all">
                            {/* Top arrow */}
                            <path d="M100 0 L100 40 M90 30 L100 40 L110 30" stroke="#ef4444" strokeWidth="6" strokeLinecap="round" fill="none" className="animate-bounce" />
                            {/* Bottom arrow */}
                            <path d="M100 200 L100 160 M90 170 L100 160 L110 170" stroke="#ef4444" strokeWidth="6" strokeLinecap="round" fill="none" className="animate-bounce" />
                        </g>
                    )}

                    {activeMech === 'impacto' && (
                        <g>
                            <path d="M180 20 L130 50 M130 40 L130 50 L140 50" stroke="#f59e0b" strokeWidth="8" strokeLinecap="round" fill="none">
                                <animate attributeName="stroke-dashoffset" values="100;0" dur="0.5s" repeatCount="indefinite" />
                                <animate attributeName="stroke-dasharray" values="100" dur="0.5s" repeatCount="indefinite" />
                            </path>
                            {/* Efecto de rotura */}
                            <path d="M120 60 L100 80 L110 100 L90 120" stroke="#fbbf24" strokeWidth="2" fill="none" className="animate-pulse" />
                        </g>
                    )}

                    {activeMech === 'cizallamiento' && (
                        <g>
                            {/* Left moving up */}
                            <path d="M60 160 L60 40 M50 50 L60 40 L70 50" stroke="#8b5cf6" strokeWidth="6" strokeLinecap="round" fill="none">
                                <animateTransform attributeName="transform" type="translate" values="0,10; 0,-10; 0,10" dur="1s" repeatCount="indefinite" />
                            </path>
                            {/* Right moving down */}
                            <path d="M140 40 L140 160 M130 150 L140 160 L150 150" stroke="#8b5cf6" strokeWidth="6" strokeLinecap="round" fill="none">
                                <animateTransform attributeName="transform" type="translate" values="0,-10; 0,10; 0,-10" dur="1s" repeatCount="indefinite" />
                            </path>
                        </g>
                    )}

                    {activeMech === 'abrasion' && (
                        <g>
                            <path d="M40 50 Q 100 30 160 50" stroke="#10b981" strokeWidth="4" strokeDasharray="10,5" fill="none">
                                <animate attributeName="stroke-dashoffset" values="0;30" dur="1s" repeatCount="indefinite" />
                            </path>
                            <path d="M40 150 Q 100 170 160 150" stroke="#10b981" strokeWidth="4" strokeDasharray="10,5" fill="none">
                                <animate attributeName="stroke-dashoffset" values="30;0" dur="1s" repeatCount="indefinite" />
                            </path>
                            {/* Polvo generado */}
                            {[...Array(8)].map((_, i) => (
                                <circle key={i} cx={50 + i * 15} cy={40 + (i % 2) * 5} r="2" fill="#64748b" className="animate-ping" style={{ animationDelay: `${i * 0.2}s` }} />
                            ))}
                        </g>
                    )}
                </svg>
            </div>
        </div>
    );
};

// 4. Diagrama Dinámico: Triturador de Mandíbulas
const DynamicJawCrusherDiagram: React.FC = () => {
    return (
        <div className="grid place-items-center w-full h-full relative">
            <style>{`
        @keyframes jawSwing {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }
        @keyframes fallAndShrink1 {
          0% { transform: translate(140px, 0px) scale(1); opacity: 0; }
          10% { opacity: 1; }
          40% { transform: translate(140px, 120px) scale(0.7); }
          70% { transform: translate(140px, 200px) scale(0.4); }
          90% { transform: translate(140px, 280px) scale(0.2); opacity: 1; }
          100% { transform: translate(140px, 320px) scale(0.2); opacity: 0; }
        }
        @keyframes fallAndShrink2 {
           0% { transform: translate(160px, -20px) scale(0.9); opacity: 0; }
          10% { opacity: 1; }
          40% { transform: translate(160px, 100px) scale(0.6); }
          70% { transform: translate(150px, 180px) scale(0.35); }
          90% { transform: translate(145px, 260px) scale(0.15); opacity: 1; }
          100% { transform: translate(145px, 300px) scale(0.15); opacity: 0; }
        }
        .jaw-moving {
          transform-origin: 200px 20px;
          animation: jawSwing 1.5s ease-in-out infinite;
        }
        .particle-1 { animation: fallAndShrink1 3s linear infinite; }
        .particle-2 { animation: fallAndShrink2 3.5s linear infinite 1s; }
        .particle-3 { animation: fallAndShrink1 2.8s linear infinite 2s; }
      `}</style>

            <svg width="400" height="350" viewBox="0 0 300 350" className="bg-slate-100 rounded-lg shadow-inner border border-slate-200">
                <defs>
                    <pattern id="lines" patternUnits="userSpaceOnUse" width="10" height="10">
                        <line x1="0" y1="0" x2="10" y2="10" stroke="#cbd5e1" strokeWidth="1" />
                    </pattern>
                </defs>

                {/* Fondo de la cámara */}
                <path d="M100 20 L220 20 L160 300 L120 300 Z" fill="url(#lines)" opacity="0.5" />

                {/* Partículas Cayendo (Rocas) */}
                <g>
                    {/* Rock shape */}
                    <path d="M-15,-15 Q0,-25 15,-10 T10,15 Q-5,25 -15,10 Z" fill="#64748b" className="particle-1" />
                    <path d="M-10,-15 Q5,-20 15,-5 T5,15 Q-10,20 -15,5 Z" fill="#475569" className="particle-2" />
                    <path d="M-15,-10 Q0,-20 20,-10 T15,15 Q-5,25 -20,5 Z" fill="#94a3b8" className="particle-3" />
                </g>

                {/* Mandíbula Fija (Izquierda) */}
                <g>
                    <path d="M80 0 L120 0 L140 300 L80 300 Z" fill="#334155" stroke="#0f172a" strokeWidth="2" />
                    {/* Corrugaciones fijas */}
                    {[...Array(10)].map((_, i) => (
                        <line key={i} x1="120" y1={20 + i * 28} x2="140" y2={30 + i * 28} stroke="#1e293b" strokeWidth="3" />
                    ))}
                </g>

                {/* Mandíbula Móvil (Derecha) */}
                <g className="jaw-moving">
                    {/* Pivot point */}
                    <circle cx="200" cy="20" r="8" fill="#ef4444" z="10" />
                    <path d="M180 0 L240 0 L180 300 L140 300 Z" fill="#475569" stroke="#0f172a" strokeWidth="2" />
                    {/* Corrugaciones móviles */}
                    {[...Array(10)].map((_, i) => (
                        <line key={i} x1="180" y1={20 + i * 28} x2="140" y2={30 + i * 28} stroke="#334155" strokeWidth="3" />
                    ))}
                </g>

                {/* Indicadores/Etiquetas */}
                <text x="25" y="150" fill="#1e293b" fontSize="12" fontWeight="bold">Mandíbula Fija</text>
                <text x="210" y="150" fill="#1e293b" fontSize="12" fontWeight="bold">Mandíbula Móvil</text>
                <path d="M210 160 Q 240 160 250 120" stroke="#ef4444" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />

                <defs>
                    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" />
                    </marker>
                </defs>

            </svg>
        </div>
    );
};
const RodillosDiagram: React.FC = () => (
    <svg viewBox="0 0 400 300" className="w-full h-full max-h-96" xmlns="http://www.w3.org/2000/svg">
        <style>
            {`
        /* Animaciones para simular la gravedad y flujo del material */
        @keyframes fallIn {
          0% { transform: translateY(50px); opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; transform: translateY(160px); }
          100% { transform: translateY(180px); opacity: 0; }
        }
        @keyframes fallOut {
          0% { transform: translateY(180px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(280px); opacity: 0; }
        }

        .rock-in { animation: fallIn 2s infinite linear; }
        .rock-out { animation: fallOut 1.2s infinite linear; }
        
        /* Desfases para crear un flujo continuo */
        .delay-0 { animation-delay: 0s; }
        .delay-1 { animation-delay: 0.5s; }
        .delay-2 { animation-delay: 1.0s; }
        .delay-3 { animation-delay: 1.5s; }
      `}
        </style>

        <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect width="20" height="20" fill="none" stroke="#e5e7eb" strokeWidth="1" />
            </pattern>
            <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" />
            </marker>
        </defs>

        {/* Fondo cuadriculado */}
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Tolva / Entrada de material */}
        <path d="M 120 40 L 280 40 L 230 110 L 170 110 Z" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />

        {/* MATERIAL ENTRANTE (Animado) */}
        <circle cx="190" cy="0" r="6" fill="#64748b" className="rock-in delay-0" />
        <circle cx="210" cy="0" r="5" fill="#64748b" className="rock-in delay-1" />
        <circle cx="200" cy="0" r="7" fill="#64748b" className="rock-in delay-2" />
        <circle cx="195" cy="0" r="4" fill="#64748b" className="rock-in delay-3" />

        {/* Rodillo Izquierdo (Giro Horario) */}
        <g transform="translate(140, 180)">
            <g>
                {/* Animación SVG nativa para rotación continua */}
                <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="4s" repeatCount="indefinite" />
                <circle cx="0" cy="0" r="50" fill="#94a3b8" stroke="#334155" strokeWidth="3" />
                <path d="M 0 -50 L 0 50 M -50 0 L 50 0" stroke="#334155" strokeWidth="2" strokeDasharray="5,5" />
            </g>
            <circle cx="0" cy="0" r="10" fill="#334155" />
            {/* Flecha indicadora de giro (Estática relativa al centro) */}
            <path d="M -20 -60 A 65 65 0 0 1 20 -60" fill="none" stroke="#ef4444" strokeWidth="3" markerEnd="url(#arrow)" />
        </g>

        {/* Rodillo Derecho (Giro Antihorario) */}
        <g transform="translate(260, 180)">
            <g>
                {/* Animación SVG nativa para rotación continua inversa */}
                <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="-360 0 0" dur="4s" repeatCount="indefinite" />
                <circle cx="0" cy="0" r="50" fill="#94a3b8" stroke="#334155" strokeWidth="3" />
                <path d="M 0 -50 L 0 50 M -50 0 L 50 0" stroke="#334155" strokeWidth="2" strokeDasharray="5,5" />
            </g>
            <circle cx="0" cy="0" r="10" fill="#334155" />
            {/* Flecha indicadora de giro (Estática relativa al centro) */}
            <path d="M 20 -60 A 65 65 0 0 0 -20 -60" fill="none" stroke="#ef4444" strokeWidth="3" markerEnd="url(#arrow)" />
        </g>

        {/* MATERIAL TRITURADO SALIENTE (Animado) */}
        {/* Grupo 0 */}
        <circle cx="200" cy="0" r="3" fill="#334155" className="rock-out delay-0" />
        <circle cx="185" cy="0" r="2" fill="#334155" className="rock-out delay-0" style={{ animationDelay: '0.2s' }} />
        {/* Grupo 1 */}
        <circle cx="190" cy="0" r="2.5" fill="#334155" className="rock-out delay-1" />
        <circle cx="210" cy="0" r="2" fill="#334155" className="rock-out delay-1" style={{ animationDelay: '0.7s' }} />
        {/* Grupo 2 */}
        <circle cx="205" cy="0" r="3" fill="#334155" className="rock-out delay-2" />
        <circle cx="195" cy="0" r="1.5" fill="#334155" className="rock-out delay-2" style={{ animationDelay: '1.2s' }} />
        {/* Grupo 3 */}
        <circle cx="200" cy="0" r="2" fill="#334155" className="rock-out delay-3" />
        <circle cx="215" cy="0" r="1" fill="#334155" className="rock-out delay-3" style={{ animationDelay: '1.7s' }} />
    </svg>
);



const ImpactoDiagram = () => (
    <svg viewBox="0 0 400 300" className="w-full h-full max-h-96 rounded-lg border border-slate-200" xmlns="http://www.w3.org/2000/svg">
        <style>
            {`
        /* Animación del rotor */
        .spin-fast { animation: spin 0.8s linear infinite; transform-origin: 200px 180px; }
        @keyframes spin { 100% { transform: rotate(360deg); } }

        /* Clases auxiliares para retrasar animaciones y crear un flujo constante */
        .delay-1 { animation-delay: 0.2s !important; }
        .delay-2 { animation-delay: 0.4s !important; }
        .delay-3 { animation-delay: 0.6s !important; }
        .delay-4 { animation-delay: 0.8s !important; }

        /* --- 1. Piedras entrando (caída libre) --- */
        .rock-drop-1 { animation: drop1 1s infinite linear; opacity: 0; }
        .rock-drop-2 { animation: drop2 1.2s infinite linear; opacity: 0; }

        @keyframes drop1 {
          0% { transform: translate(140px, 30px); opacity: 0; }
          10% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translate(150px, 120px); opacity: 0; }
        }
        @keyframes drop2 {
          0% { transform: translate(160px, 20px); opacity: 0; }
          10% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translate(165px, 120px); opacity: 0; }
        }

        /* --- 2. Piedras impactadas (chocando contra placas) --- */
        .rock-smash-1 { animation: smash1 0.7s infinite ease-out; opacity: 0; }
        .rock-smash-2 { animation: smash2 0.8s infinite ease-out; opacity: 0; }
        .rock-smash-3 { animation: smash3 0.6s infinite ease-out; opacity: 0; }

        @keyframes smash1 {
          0% { transform: translate(165px, 110px) scale(1.5); opacity: 0; }
          10% { opacity: 1; }
          40% { transform: translate(255px, 105px) scale(1); opacity: 1; } /* Choca placa 1 */
          100% { transform: translate(255px, 180px) scale(0.5); opacity: 0; } /* Cae rota */
        }
        @keyframes smash2 {
          0% { transform: translate(175px, 120px) scale(1.5); opacity: 0; }
          10% { opacity: 1; }
          45% { transform: translate(285px, 150px) scale(1); opacity: 1; } /* Choca placa 2 */
          100% { transform: translate(265px, 220px) scale(0.5); opacity: 0; } /* Cae rota */
        }
        @keyframes smash3 {
          0% { transform: translate(185px, 140px) scale(1.5); opacity: 0; }
          10% { opacity: 1; }
          50% { transform: translate(295px, 195px) scale(1); opacity: 1; } /* Choca placa 3 */
          100% { transform: translate(250px, 240px) scale(0.3); opacity: 0; } /* Cae rota */
        }

        /* --- 3. Material de salida (pequeñas piedras cayendo) --- */
        .rock-exit { animation: exitDrop 0.8s infinite linear; opacity: 0; }
        @keyframes exitDrop {
          0% { transform: translateY(240px); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(300px); opacity: 0; }
        }
      `}
        </style>

        <rect width="100%" height="100%" fill="#f8fafc" />

        {/* Carcasa */}
        <path d="M 100 80 Q 300 80 320 250 L 80 250 Z" fill="#e2e8f0" stroke="#475569" strokeWidth="4" />

        {/* Placas rompedoras (Estator) */}
        <rect x="260" y="100" width="10" height="40" fill="#b91c1c" transform="rotate(-30, 260, 100)" />
        <rect x="290" y="150" width="10" height="40" fill="#b91c1c" transform="rotate(-15, 290, 150)" />
        <rect x="300" y="200" width="10" height="40" fill="#b91c1c" />

        {/* Entrada de material */}
        <path d="M 120 40 L 180 40 L 160 100 L 120 100 Z" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="2" />

        {/* --- PIEDRAS DE ENTRADA --- */}
        <circle cx="0" cy="0" r="5" fill="#64748b" className="rock-drop-1" />
        <circle cx="0" cy="0" r="4" fill="#475569" className="rock-drop-2 delay-1" />
        <circle cx="0" cy="0" r="6" fill="#64748b" className="rock-drop-1 delay-2" />
        <circle cx="0" cy="0" r="5" fill="#334155" className="rock-drop-2 delay-3" />

        {/* Rotor Dinámico */}
        <g className="spin-fast">
            <circle cx="200" cy="180" r="60" fill="#94a3b8" stroke="#334155" strokeWidth="2" />
            <circle cx="200" cy="180" r="10" fill="#334155" />
            {/* Barras de impacto */}
            <rect x="190" y="100" width="20" height="30" fill="#1d4ed8" rx="2" />
            <rect x="190" y="230" width="20" height="30" fill="#1d4ed8" rx="2" />
            <rect x="120" y="170" width="30" height="20" fill="#1d4ed8" rx="2" />
            <rect x="250" y="170" width="30" height="20" fill="#1d4ed8" rx="2" />
        </g>

        {/* --- PIEDRAS IMPACTADAS --- */}
        {/* Grupo 1 */}
        <circle cx="0" cy="0" r="4" fill="#334155" className="rock-smash-1" />
        <circle cx="0" cy="0" r="3" fill="#475569" className="rock-smash-2" />
        <circle cx="0" cy="0" r="5" fill="#1e293b" className="rock-smash-3" />
        {/* Grupo 2 (Desfasado) */}
        <circle cx="0" cy="0" r="4.5" fill="#334155" className="rock-smash-2 delay-1" />
        <circle cx="0" cy="0" r="3" fill="#475569" className="rock-smash-3 delay-1" />
        <circle cx="0" cy="0" r="3.5" fill="#1e293b" className="rock-smash-1 delay-2" />
        {/* Grupo 3 (Desfasado) */}
        <circle cx="0" cy="0" r="5" fill="#334155" className="rock-smash-3 delay-2" />
        <circle cx="0" cy="0" r="4" fill="#475569" className="rock-smash-1 delay-3" />
        <circle cx="0" cy="0" r="3" fill="#1e293b" className="rock-smash-2 delay-3" />

        {/* Trayectoria visual (Punteada) */}
        <path d="M 180 120 Q 230 100 260 110" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4,4" />
        <path d="M 190 140 Q 240 140 285 155" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4,4" />
        <path d="M 200 160 Q 260 180 295 200" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4,4" />

        {/* --- MATERIAL TRITURADO SALIENDO --- */}
        <circle cx="150" cy="0" r="2" fill="#64748b" className="rock-exit" />
        <circle cx="180" cy="0" r="1.5" fill="#475569" className="rock-exit delay-1" />
        <circle cx="210" cy="0" r="2.5" fill="#334155" className="rock-exit delay-2" />
        <circle cx="250" cy="0" r="1" fill="#64748b" className="rock-exit delay-3" />
        <circle cx="230" cy="0" r="2" fill="#475569" className="rock-exit delay-4" />
        <circle cx="160" cy="0" r="1.5" fill="#334155" className="rock-exit delay-2" />

    </svg>
); 

const BolasDiagram: React.FC = () => {
  const ballsLift = [
    { x: 200, y: 260, r: 13 },
    { x: 170, y: 245, r: 14 },
    { x: 145, y: 220, r: 12 },
    { x: 130, y: 190, r: 13 },
    { x: 125, y: 155, r: 14 },
    { x: 135, y: 120, r: 12 },
    { x: 160, y: 95, r: 13 },
    { x: 190, y: 80, r: 12 },
  ];

  const ballsCataract = [
    { x: 235, y: 95, r: 12, delay: "0s" },
    { x: 260, y: 115, r: 13, delay: "0.4s" },
    { x: 275, y: 140, r: 11, delay: "0.8s" },
  ];

  return (
    <svg
      viewBox="0 0 400 300"
      className="w-full h-full max-h-[500px]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <style>
        {`
          .drum {
            animation: rotateDrum 6s linear infinite;
            transform-origin: 200px 150px;
          }

          .lift-group {
            animation: rotateDrum 6s linear infinite;
            transform-origin: 200px 150px;
          }

          .fall {
            animation: fallBall 1.6s linear infinite;
          }

          @keyframes rotateDrum {
            100% { transform: rotate(360deg); }
          }

          @keyframes fallBall {
            0% { transform: translate(0,0); opacity: 1; }
            100% { transform: translate(-40px, 80px); opacity: 0.8; }
          }
        `}
      </style>

      {/* Fondo */}
      <rect width="100%" height="100%" fill="#f8fafc" />

      {/* Tambor */}
      <g className="drum">
        <circle
          cx="200"
          cy="150"
          r="120"
          fill="#e2e8f0"
          stroke="#334155"
          strokeWidth="6"
        />

        {/* Revestimientos internos */}
        <circle
          cx="200"
          cy="150"
          r="105"
          fill="none"
          stroke="#94a3b8"
          strokeWidth="3"
          strokeDasharray="12 10"
        />
      </g>

      {/* Bolas levantadas por rotación */}
      <g className="lift-group">
        {ballsLift.map((b, i) => (
          <circle
            key={i}
            cx={b.x}
            cy={b.y}
            r={b.r}
            fill={i % 2 === 0 ? "#475569" : "#64748b"}
          />
        ))}
      </g>

      {/* Catarata */}
      <g>
        {ballsCataract.map((b, i) => (
          <circle
            key={i}
            className="fall"
            cx={b.x}
            cy={b.y}
            r={b.r}
            fill="#475569"
            style={{ animationDelay: b.delay }}
          />
        ))}
      </g>

      {/* Lecho de impacto */}
      <ellipse
        cx="200"
        cy="230"
        rx="75"
        ry="25"
        fill="#cbd5e1"
      />

      {/* Material triturado */}
      <circle cx="185" cy="225" r="3" fill="#b91c1c" />
      <circle cx="205" cy="230" r="2.5" fill="#b91c1c" />
      <circle cx="220" cy="220" r="2" fill="#b91c1c" />

      {/* Flecha de rotación */}
      <path
        d="M 80 150 A 120 120 0 0 1 120 60"
        fill="none"
        stroke="#1d4ed8"
        strokeWidth="4"
        markerEnd="url(#arrow)"
      />

      <defs>
        <marker
          id="arrow"
          viewBox="0 0 10 10"
          refX="5"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#1d4ed8" />
        </marker>
      </defs>
    </svg>
  );
};
const MartillosDiagram: React.FC = () => (
    <svg viewBox="0 0 400 300" className="w-full h-full max-h-96" xmlns="http://www.w3.org/2000/svg">
        <style>
            {`
        /* Animación del Rotor */
        @keyframes spin { 
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); } 
        }
        
        /* Animación del material entrando (rocas) */
        @keyframes fall {
          0% { transform: translateY(-30px); opacity: 0; }
          20% { opacity: 1; }
          80% { transform: translateY(70px); opacity: 1; }
          100% { transform: translateY(90px); opacity: 0; }
        }

        /* Animación del material saliendo (polvo) */
        @keyframes sift {
          0% { transform: translateY(0px); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: translateY(40px); opacity: 0; }
        }

        /* Clases de animación */
        .spin-med { 
          animation: spin 0.6s linear infinite; 
          transform-origin: 200px 160px; 
        }
        
        /* Retrasos escalonados para que la caída parezca natural */
        .rock-1 { animation: fall 1.2s linear infinite; }
        .rock-2 { animation: fall 1.5s linear infinite 0.4s; }
        .rock-3 { animation: fall 1.1s linear infinite 0.8s; }
        
        .dust-1 { animation: sift 1s linear infinite; }
        .dust-2 { animation: sift 1.2s linear infinite 0.2s; }
        .dust-3 { animation: sift 0.9s linear infinite 0.5s; }
        .dust-4 { animation: sift 1.1s linear infinite 0.7s; }
        .dust-5 { animation: sift 1.3s linear infinite 0.3s; }
      `}
        </style>
        <rect width="100%" height="100%" fill="#f8fafc" />

        {/* Carcasa y Entrada */}
        <path d="M 160 30 L 240 30 L 240 80 A 90 90 0 0 1 290 160 L 290 260 L 110 260 L 110 160 A 90 90 0 0 1 160 80 Z" fill="none" stroke="#475569" strokeWidth="3" />

        {/* Criba de control (Malla en la parte inferior) */}
        <path d="M 120 180 A 80 80 0 0 0 280 180" fill="none" stroke="#b91c1c" strokeWidth="6" strokeDasharray="8,4" />

        {/* Material entrando (Rocas Animadas) */}
        <circle cx="200" cy="50" r="6" fill="#64748b" className="rock-1" />
        <circle cx="185" cy="40" r="5" fill="#64748b" className="rock-2" />
        <circle cx="215" cy="60" r="7" fill="#64748b" className="rock-3" />

        {/* Rotor y Martillos Dinámicos */}
        <g className="spin-med">
            {/* Disco del rotor */}
            <circle cx="200" cy="160" r="30" fill="#94a3b8" stroke="#334155" strokeWidth="2" />
            <circle cx="200" cy="160" r="8" fill="#334155" />

            {/* 4 Martillos pivotantes */}
            <g transform="translate(200, 160)">
                <path d="M 0 -25 L -5 -70 L 5 -70 Z" fill="#475569" />
                <rect x="-10" y="-80" width="20" height="15" fill="#1d4ed8" rx="2" />
                <circle cx="0" cy="-25" r="3" fill="#f8fafc" />

                <g transform="rotate(90)">
                    <path d="M 0 -25 L -5 -70 L 5 -70 Z" fill="#475569" />
                    <rect x="-10" y="-80" width="20" height="15" fill="#1d4ed8" rx="2" />
                    <circle cx="0" cy="-25" r="3" fill="#f8fafc" />
                </g>

                <g transform="rotate(180)">
                    <path d="M 0 -25 L -5 -70 L 5 -70 Z" fill="#475569" />
                    <rect x="-10" y="-80" width="20" height="15" fill="#1d4ed8" rx="2" />
                    <circle cx="0" cy="-25" r="3" fill="#f8fafc" />
                </g>

                <g transform="rotate(270)">
                    <path d="M 0 -25 L -5 -70 L 5 -70 Z" fill="#475569" />
                    <rect x="-10" y="-80" width="20" height="15" fill="#1d4ed8" rx="2" />
                    <circle cx="0" cy="-25" r="3" fill="#f8fafc" />
                </g>
            </g>
        </g>

        {/* Material cribado (Polvo/partículas finas Animadas) */}
        {/* Posiciones iniciales justas debajo de la criba */}
        <circle cx="160" cy="195" r="2" fill="#334155" className="dust-1" />
        <circle cx="200" cy="195" r="1.5" fill="#334155" className="dust-2" />
        <circle cx="240" cy="195" r="2.5" fill="#334155" className="dust-3" />
        <circle cx="180" cy="195" r="1.5" fill="#334155" className="dust-4" />
        <circle cx="220" cy="195" r="2" fill="#334155" className="dust-5" />
    </svg>
);

const ColoidalDiagram: React.FC = () => {
    // Estados para controlar la dinámica del diagrama
    const [gap, setGap] = useState<number>(5); // Controla la separación entre rotor y estator
    const [speed, setSpeed] = useState<number>(50); // Controla la velocidad de rotación (1-100)
    const [isRunning, setIsRunning] = useState<boolean>(true);
    setGap(5)
    setSpeed(50)
    setIsRunning(true)

    // Cálculos para la animación
    // Si está apagado, la duración es "indefinida" (se detiene), si no, depende de la velocidad.
    const animationDuration = isRunning ? `${150 / speed}s` : '0s';
    const isPaused = !isRunning || speed === 0;

    return (
        <div className="flex flex-col items-center w-full max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-sm border border-slate-200">
            {/* Contenedor del SVG */}
            <div className="w-full aspect-video">
                <svg viewBox="0 0 400 300" className="w-full h-full max-h-96" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="100%" fill="#ffffff" />

                    {/* Indicador de Rotación (Flecha curva superior) */}
                    {!isPaused && (
                        <g transform="translate(200, 20)">
                            <path d="M -15 0 A 15 5 0 1 1 15 0" fill="none" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrow-small-red)">
                                <animateTransform 
                                    attributeName="transform" 
                                    type="rotate" 
                                    from="0 0 0" 
                                    to="360 0 0" 
                                    dur={animationDuration} 
                                    repeatCount="indefinite" 
                                />
                            </path>
                        </g>
                    )}

                    {/* Eje y Rotor (Cono interior) - Fijo en el centro */}
                    <path d="M 180 40 L 220 40 L 220 100 L 260 220 L 140 220 L 180 100 Z" fill="#94a3b8" stroke="#334155" strokeWidth="2" />
                    <rect x="190" y="20" width="20" height="20" fill="#475569" />

                    {/* Estator Izquierdo (Se desplaza hacia la izquierda según el gap) */}
                    <path 
                        d={`M 120 100 L ${170 - gap} 100 L ${135 - gap} 230 L 80 230 Z`} 
                        fill="#cbd5e1" 
                        stroke="#475569" 
                        strokeWidth="2" 
                        style={{ transition: 'all 0.3s ease' }}
                    />
                    
                    {/* Estator Derecho (Se desplaza hacia la derecha según el gap) */}
                    <path 
                        d={`M 280 100 L ${230 + gap} 100 L ${265 + gap} 230 L 320 230 Z`} 
                        fill="#cbd5e1" 
                        stroke="#475569" 
                        strokeWidth="2" 
                        style={{ transition: 'all 0.3s ease' }}
                    />

                    {/* Zoom Line / Indicador de Gap */}
                    <circle cx="250" cy="170" r="15" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="2,2" />
                    <path d="M 265 170 L 320 100" stroke="#ef4444" strokeWidth="1" strokeDasharray="4,4" />
                    <path d="M 250 155 L 320 40" stroke="#ef4444" strokeWidth="1" strokeDasharray="4,4" />

                    {/* Detalle Ampliado (Cizallamiento) */}
                    <g transform="translate(290, 40)">
                        <rect x="0" y="0" width="90" height="90" fill="#f8fafc" stroke="#ef4444" strokeWidth="2" />
                        <text x="5" y="15" fontSize="10" fill="#ef4444" fontWeight="bold">Cizallamiento</text>
                        
                        {/* Borde del Estator en el Zoom */}
                        <polygon points={`0,20 ${40 - (gap * 2)},90 0,90`} fill="#cbd5e1" style={{ transition: 'all 0.3s ease' }}/>
                        
                        {/* Borde del Rotor en el Zoom */}
                        <polygon points="50,20 90,20 90,90" fill="#94a3b8" />

                        {/* Fuerzas y fluido animado */}
                        <g style={{ opacity: isPaused ? 0.3 : 1 }}>
                            <path d={`M ${43 - gap} 30 L ${43 - gap} 80`} stroke="#1d4ed8" strokeWidth="1" strokeDasharray="4,4" style={{ transition: 'all 0.3s ease' }}>
                                {!isPaused && <animate attributeName="stroke-dashoffset" from="0" to="-24" dur={animationDuration} repeatCount="indefinite" />}
                            </path>
                            <path d={`M ${47 - (gap/2)} 30 L ${47 - (gap/2)} 80`} stroke="#1d4ed8" strokeWidth="1.5" strokeDasharray="4,4" style={{ transition: 'all 0.3s ease' }}>
                                {!isPaused && <animate attributeName="stroke-dashoffset" from="0" to="-24" dur={animationDuration} repeatCount="indefinite" />}
                            </path>
                            
                            {/* Vector de velocidad del rotor */}
                            <path d="M 60 50 L 60 80" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrow-small)">
                                {!isPaused && (
                                    <animateTransform 
                                        attributeName="transform" 
                                        type="translate" 
                                        values="0,0; 0,5; 0,0" 
                                        dur={animationDuration} 
                                        repeatCount="indefinite" 
                                    />
                                )}
                            </path>
                            <text x="65" y="65" fontSize="10" fill="#000" fontWeight="bold">v</text>
                        </g>
                    </g>

                    {/* Etiquetas principales */}
                    <text x="185" y="245" fontSize="12" fill="#334155" fontWeight="bold" textAnchor="middle">Rotor</text>
                    <text x="100" y="245" fontSize="12" fill="#334155" fontWeight="bold" textAnchor="middle">Estator</text>
                    <text x="300" y="245" fontSize="12" fill="#334155" fontWeight="bold" textAnchor="middle">Estator</text>

                    <defs>
                        <marker id="arrow-small" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
                            <path d="M 0 0 L 10 5 L 0 10 z" fill="#000" />
                        </marker>
                        <marker id="arrow-small-red" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
                            <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" />
                        </marker>
                    </defs>
                </svg>
            </div>

          
        </div>
    );
};


// --- Aplicación Principal ---
const App: React.FC = () => {
    const lessonTabs: TabItem[] = [
        {
            id: 'static-area',
            label: '1. Área Superficial',
            title: 'Aumento del Área Superficial',
            description: (
                <DivCarousel>
                    <p>La reducción de tamaño es una operación unitaria mecánica que consiste en fragmentar sólidos mediante fuerzas externas para modificar sus dimensiones. Esta operación es esencial en industrias como la minera, cementera, alimentaria y farmacéutica, ya que influye directamente en la eficiencia de procesos posteriores como mezclado, reacción química, separación y transporte.</p>

                    <p>La reducción de tamaño busca modificar la granulometría del material para optimizar procesos industriales posteriores. Desde el punto de vista físico, implica vencer las fuerzas de cohesión interna del sólido mediante trabajo mecánico.</p>
                    <div> <h3>Principales objetivos industriales</h3>
                        <ul>
                            <li>Aumentar el área superficial disponible.</li>
                            <li>Facilitar reacciones químicas.</li>
                            <li>Mejorar la eficiencia en procesos de separación.</li>
                            <li>Cumplir especificaciones granulométricas.</li>
                            <li>Optimizar transporte y almacenamiento.</li>
                            <li>Liberar minerales valiosos en procesos de concentración.</li>
                        </ul>      </div>

                </DivCarousel>
            ),
            component: StaticAreaDiagram
        },
        {
            id: 'dynamic-flow',
            label: '2. Proceso Industrial',
            title: 'Flujo del Proceso: Trituración y Molienda',
            description: (
                <DivCarousel>
                    <p>Aunque ambos procesos reducen tamaño, se diferencian en el rango granulométrico y en la etapa del proceso industrial.</p>
                    <div> <h3>Diferencias clave</h3>
                        <div className='grid grid-cols-2'> <div > <h4>Trituración</h4>
                            <ul>
                                <li>Se aplica a rocas o bloques grandes.</li>
                                <li>Predomina la compresión.</li>
                                <li>Preparación para molienda.</li>
                            </ul></div>
                            <div><h4>Molienda</h4>
                                <ul>
                                    <li>Produce partículas finas o ultrafinas.</li>
                                    <li>Predominan impacto y abrasión.</li>
                                    <li>Requiere mayor consumo energético específico.</li>
                                </ul></div></div>

                    </div>

                </DivCarousel>
            ),
            component: DynamicFlowDiagram
        },
        {
            id: 'interactive-mechanisms',
            label: '3. Mecanismos de Rotura',
            title: 'Mecanismos de Reducción',
            description: (
                <DivCarousel>
                    <div>  <p>La fractura de partículas ocurre cuando la energía aplicada supera la resistencia mecánica del material.</p>
                        <div className='grid grid-cols-2'>
                            <div> <p><strong>Compresión:</strong><br />Fuerza aplicada entre dos superficies.<br />Ejemplo: triturador de mandíbulas.</p>
                                <p><strong>Impacto:</strong><br />Golpe súbito a alta velocidad.<br />Ejemplo: molino de martillos.</p></div>
                            <div>  <p><strong>Cizallamiento:</strong><br />Fuerzas paralelas que provocan deslizamiento interno.</p>
                                <p><strong>Abrasión:</strong><br />Desgaste por fricción continua.</p></div>
                        </div></div>

                    <div><h3>Relación mecanismo–material</h3>
                        <ul>
                            <li>Materiales duros → compresión.</li>
                            <li>Materiales frágiles → impacto.</li>
                            <li>Pastas o emulsiones → cizallamiento.</li>
                        </ul></div>

                </DivCarousel>
            ),
            component: InteractiveMechanismsDiagram
        },
        {
            id: 'dynamic-jaw',
            label: '4. Triturador de Mandíbulas',
            title: 'Triturador de Mandíbulas',
            description: (
                <DivCarousel>
                    <p>Los trituradores se emplean en etapas iniciales del procesamiento de sólidos. Reducen grandes bloques a tamaños manejables mediante compresión o impacto intenso.</p>
                    <div>   <p>El triturador de mandíbulas opera por compresión entre una superficie fija y otra móvil.</p>
                        <h3><strong>Principio de funcionamiento</strong></h3>
                        <ul>
                            <li>Mandíbula fija.</li>
                            <li>Mandíbula móvil oscilante.</li>
                            <li>Zona de alimentación superior.</li>
                            <li>Descarga inferior regulable.</li>
                        </ul></div>
                    <div>   <p>El material se comprime progresivamente hasta fracturarse.</p>
                        <h3><strong>Características operativas</strong></h3>
                        <ul>
                            <li>Uso en trituración primaria.</li>
                            <li>Adecuado para materiales duros y abrasivos.</li>
                            <li>Diseño robusto.</li>
                            <li>Bajo mantenimiento relativo.</li>
                        </ul></div>


                </DivCarousel>
            ),
            component: DynamicJawCrusherDiagram
        },
        {
            id: 'dynamic-roll',
            label: '5. Triturador de Rodillos',
            title: 'Triturador de Rodillos',
            description: (
                <DivCarousel>
                    <div><p>Opera mediante compresión y cizallamiento entre dos rodillos que giran en sentidos opuestos.</p>
                        <strong><h3>Principio de funcionamiento</h3></strong>
                        <ul>
                            <li>Dos rodillos paralelos.</li>
                            <li>Giro en sentido contrario.</li>
                            <li>Regulación del espacio entre rodillos.</li>
                        </ul></div>
                    <div> <strong><h3>Características</h3></strong>
                        <ul>
                            <li>Producto más uniforme.</li>
                            <li>Menor generación de finos.</li>
                            <li>Adecuado para materiales frágiles o de dureza media.</li>
                        </ul></div>

                </DivCarousel>
            ),
            component: RodillosDiagram
        },
        {
            id: 'dynamic-impact',
            label: '6. Triturador de Impacto',
            title: 'Triturador de Impacto',
            description: (
                <DivCarousel>
                    <div>  <p>Utiliza impacto a alta velocidad para fracturar el material.</p>
                        <h3>Principio de funcionamiento</h3>
                        <ul>
                            <li>Rotor giratorio.</li>
                            <li>Martillos o barras de impacto.</li>
                            <li>Placas rompedoras.</li>
                        </ul></div>
                    <div> <p>El material es lanzado contra superficies rígidas produciendo fractura.</p>
                        <h3>Características</h3>
                        <ul>
                            <li>Alta reducción en una etapa.</li>
                            <li>Mayor generación de finos.</li>
                            <li>Adecuado para materiales menos abrasivos.</li>
                        </ul></div>
                </DivCarousel>
            ),
            component: ImpactoDiagram
        },
        {
            id: 'dynamic-ball',
            label: '7. Molino de Bolas',
            title: 'Molino de Bolas',
            description: (
                <DivCarousel>
                    <p>La molienda permite alcanzar tamaños finos o ultrafinos con mayor control. El consumo energético es mayor que en trituración debido al tamaño reducido de las partículas finales.</p>
                    <div><p>Opera mediante impacto y abrasión en un cilindro rotatorio.</p>
                        <strong>   <h3>Principio de funcionamiento</h3></strong>
                        <ul>
                            <li>Cilindro horizontal.</li>
                            <li>Bolas metálicas como medio moledor.</li>
                            <li>Rotación controlada.</li>
                        </ul></div>
                    <div> <p>Las bolas ascienden y caen generando impacto y fricción.</p>
                        <strong> <h3>Aplicaciones</h3></strong>
                        <ul>
                            <li>Industria cementera.</li>
                            <li>Procesamiento de minerales.</li>
                            <li>Industria cerámica.</li>
                        </ul></div>


                </DivCarousel>
            ),
            component: BolasDiagram
        },
        {
            id: 'dynamic-ball',
            label: '8. Molino de Martillos',
            title: 'Molino de Martillos',
            description: (
                <DivCarousel> 
                    <div>
                    <p>Funciona por impacto mediante martillos rotatorios.</p>
                    <strong> <h3>Principio de funcionamiento</h3></strong>
                    <ul>
                        <li>Rotor central.</li>
                        <li>Martillos articulados.</li>
                        <li>Criba de control de tamaño.</li>
                    </ul></div>
                    <div> <p>El material es golpeado hasta alcanzar el tamaño requerido.</p>
                        <strong>  <h3>Características</h3></strong>
                        <ul>
                            <li>Alta velocidad.</li>
                            <li>Control granulométrico por cribas.</li>
                            <li>Uso frecuente en alimentos y agricultura.</li>
                        </ul>
                        </div>
                </DivCarousel>
            ),
            component: MartillosDiagram
        },
        {
            id: 'dynamic-coloidal',
            label: '9. Molino Coloidal',
            title: 'Molino Coloidal',
            description: (
                <DivCarousel>
                    <div>  <p>Opera por cizallamiento intenso entre un rotor y un estator muy próximos.</p>
                        <strong> <h3>Principio de funcionamiento</h3></strong>
                        <ul>
                            <li>Rotor de alta velocidad.</li>
                            <li>Estator fijo.</li>
                            <li>Separación muy pequeña entre ambos.</li>
                        </ul></div>
                    <div>
                        <p>El material experimenta fuerzas de cizallamiento extremas.</p>
                        <strong> <h3>Aplicaciones</h3></strong>
                        <ul>
                            <li>Emulsiones.</li>
                            <li>Pastas.</li>
                            <li>Suspensiones finas.</li>
                            <li>Industria farmacéutica y alimentaria.</li>
                        </ul></div>

                </DivCarousel>
            ),
            component: ColoidalDiagram
        },



    ];

    return (
        <LessonLayout
            title="Trituración y molienda"
            tabs={lessonTabs}
        />
    );
};

export default App;