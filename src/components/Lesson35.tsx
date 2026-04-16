import { BookOpen, Droplet, Zap, Settings, ArrowRight } from 'lucide-react';

// --- VISUAL COMPONENTS (SVG & HTML) ---

const Visual1Concepto = () => (
  <div className="w-full overflow-x-auto bg-slate-50 p-4 rounded-xl border border-slate-200">
    <svg viewBox="0 0 500 200" className="w-full max-w-2xl mx-auto h-48">
      <defs>
        <marker id="arrowBlue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6" />
        </marker>
        <marker id="arrowGray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b" />
        </marker>
      </defs>
      
      {/* Motor */}
      <rect x="50" y="70" width="80" height="60" rx="5" fill="#94a3b8" />
      <text x="90" y="105" textAnchor="middle" fill="white" className="font-bold text-sm">MOTOR</text>
      <text x="90" y="145" textAnchor="middle" fill="#64748b" className="text-xs">Energía Mecánica</text>
      
      {/* Eje */}
      <rect x="130" y="95" width="40" height="10" fill="#cbd5e1" />
      
      {/* Bomba */}
      <circle cx="210" cy="100" r="40" fill="#334155" />
      <circle cx="210" cy="100" r="20" fill="#475569" className="animate-spin" style={{ transformOrigin: '210px 100px', animationDuration: '3s' }} strokeDasharray="10 5" stroke="white" strokeWidth="2" />
      <text x="210" y="105" textAnchor="middle" fill="white" className="font-bold text-sm">BOMBA</text>
      
      {/* Tubería Entrada */}
      <path d="M210 200 L210 140" stroke="#bfdbfe" strokeWidth="15" />
      <path d="M210 180 L210 150" stroke="#3b82f6" strokeWidth="4" markerEnd="url(#arrowBlue)" />
      
      {/* Tubería Salida */}
      <path d="M250 100 L350 100" stroke="#bfdbfe" strokeWidth="15" />
      <path d="M260 100 L340 100" stroke="#3b82f6" strokeWidth="4" markerEnd="url(#arrowBlue)" />
      
      {/* Etiquetas Energía Hidráulica */}
      <text x="420" y="80" textAnchor="middle" fill="#1e3a8a" className="font-bold text-xs">ENERGÍA HIDRÁULICA:</text>
      <text x="420" y="95" textAnchor="middle" fill="#0369a1" className="text-xs">+ Presión (P)</text>
      <text x="420" y="110" textAnchor="middle" fill="#0369a1" className="text-xs">+ Velocidad (v)</text>
      <text x="420" y="125" textAnchor="middle" fill="#0369a1" className="text-xs">+ Elevación (z)</text>
    </svg>
  </div>
);

const Visual2Energia = () => (
  <div className="w-full bg-slate-50 p-4 rounded-xl border border-slate-200">
    <svg viewBox="0 0 500 200" className="w-full max-w-2xl mx-auto h-48">
      {/* Tubería */}
      <path d="M50 150 Q 250 150, 450 50" fill="none" stroke="#e2e8f0" strokeWidth="40" strokeLinecap="round"/>
      <path d="M50 150 Q 250 150, 450 50" fill="none" stroke="#93c5fd" strokeWidth="30" strokeLinecap="round" className="opacity-50"/>
      
      {/* Partículas de flujo (Velocidad) */}
      <path d="M 80 150 L 120 150" stroke="#2563eb" strokeWidth="3" markerEnd="url(#arrowBlue)" />
      <path d="M 250 135 L 290 115" stroke="#2563eb" strokeWidth="3" markerEnd="url(#arrowBlue)" />
      <path d="M 400 70 L 440 50" stroke="#2563eb" strokeWidth="3" markerEnd="url(#arrowBlue)" />

      {/* Indicador de Presión (Manómetro) */}
      <circle cx="180" cy="150" r="15" fill="white" stroke="#ef4444" strokeWidth="3" />
      <path d="M 180 150 L 188 142" stroke="#ef4444" strokeWidth="2" />
      <text x="180" y="185" textAnchor="middle" fill="#ef4444" className="text-xs font-bold">PRESIÓN</text>

      {/* Indicador de Elevación */}
      <line x1="420" y1="180" x2="420" y2="60" stroke="#10b981" strokeWidth="2" strokeDasharray="4" markerEnd="url(#arrowGray)"/>
      <line x1="400" y1="180" x2="440" y2="180" stroke="#10b981" strokeWidth="2"/>
      <text x="445" y="120" fill="#10b981" className="text-xs font-bold">POSICIÓN (z)</text>

      {/* Indicador de Velocidad */}
      <text x="270" y="90" fill="#2563eb" className="text-xs font-bold">VELOCIDAD (v)</text>
    </svg>
  </div>
);

const Visual3BombaTurbina = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {/* Bomba */}
    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 text-center relative overflow-hidden">
      <h4 className="font-bold text-blue-800 mb-4">BOMBA (Generador Hidráulico)</h4>
      <div className="flex justify-center items-center space-x-2">
        <div className="flex flex-col items-center">
          <Settings size={32} className="text-slate-600 animate-spin-slow" />
          <span className="text-xs mt-1 font-semibold text-slate-700">Mecánica</span>
        </div>
        <ArrowRight className="text-blue-500" />
        <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold shadow-lg">
          B
        </div>
        <ArrowRight className="text-blue-500" />
        <div className="flex flex-col items-center">
          <Droplet size={32} className="text-blue-500" />
          <span className="text-xs mt-1 font-semibold text-blue-700">Hidráulica</span>
        </div>
      </div>
      <p className="text-xs text-blue-600 mt-4 font-medium">+ Añade energía al fluido</p>
    </div>

    {/* Turbina */}
    <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 text-center relative overflow-hidden">
      <h4 className="font-bold text-amber-800 mb-4">TURBINA (Motor Hidráulico)</h4>
      <div className="flex justify-center items-center space-x-2">
        <div className="flex flex-col items-center">
          <Droplet size={32} className="text-blue-500" />
          <span className="text-xs mt-1 font-semibold text-blue-700">Hidráulica</span>
        </div>
        <ArrowRight className="text-amber-500" />
        <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold shadow-lg">
          T
        </div>
        <ArrowRight className="text-amber-500" />
        <div className="flex flex-col items-center">
          <Zap size={32} className="text-amber-600" />
          <span className="text-xs mt-1 font-semibold text-amber-700">Mecánica</span>
        </div>
      </div>
      <p className="text-xs text-amber-600 mt-4 font-medium">- Extrae energía del fluido</p>
    </div>
  </div>
);

const Visual4Arbol = () => (
  <div className="flex flex-col items-center bg-slate-50 p-6 rounded-xl border border-slate-200">
    <div className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold shadow-md z-10">
      BOMBAS HIDRÁULICAS
    </div>
    <div className="flex w-full max-w-md mt-[-2px]">
      <div className="w-1/2 border-t-2 border-l-2 border-slate-400 rounded-tl-lg mt-4 h-6"></div>
      <div className="w-1/2 border-t-2 border-r-2 border-slate-400 rounded-tr-lg mt-4 h-6"></div>
    </div>
    <div className="flex w-full max-w-2xl justify-between gap-4 mt-2">
      <div className="flex-1 bg-white border-2 border-indigo-200 p-4 rounded-lg text-center shadow-sm">
        <h4 className="font-bold text-indigo-700 mb-2">Desplazamiento Positivo</h4>
        <p className="text-xs text-slate-600">Volumen atrapado y desplazado (Reciprocantes, Rotatorias)</p>
      </div>
      <div className="flex-1 bg-white border-2 border-teal-200 p-4 rounded-lg text-center shadow-sm">
        <h4 className="font-bold text-teal-700 mb-2">Dinámicas</h4>
        <p className="text-xs text-slate-600">Adición continua de energía (Centrífugas, Axiales)</p>
      </div>
    </div>
  </div>
);

const Visual5Desplazamiento = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-xl border border-slate-200">
    {/* Pistón */}
    <div className="flex flex-col items-center">
      <h5 className="font-bold text-sm text-slate-700 mb-4">Tipo Reciprocante (Pistón)</h5>
      <svg viewBox="0 0 200 150" className="w-full h-32">
        {/* Cilindro */}
        <rect x="50" y="40" width="100" height="70" fill="none" stroke="#64748b" strokeWidth="4" />
        {/* Fluido */}
        <rect x="52" y="42" width="60" height="66" fill="#bfdbfe" className="animate-pulse" />
        {/* Pistón */}
        <rect x="110" y="42" width="20" height="66" fill="#475569" />
        <line x1="130" y1="75" x2="180" y2="75" stroke="#475569" strokeWidth="6" />
        {/* Válvulas (simples) */}
        <line x1="40" y1="60" x2="50" y2="60" stroke="#3b82f6" strokeWidth="8" />
        <line x1="40" y1="90" x2="50" y2="90" stroke="#ef4444" strokeWidth="8" />
        {/* Flecha de movimiento */}
        <path d="M 150 60 L 140 60" stroke="black" strokeWidth="2" markerEnd="url(#arrowGray)" />
        <path d="M 150 90 L 160 90" stroke="black" strokeWidth="2" markerEnd="url(#arrowGray)" />
      </svg>
      <p className="text-xs text-center mt-2 text-slate-500">Volumen atrapado en el cilindro</p>
    </div>
    
    {/* Engranajes */}
    <div className="flex flex-col items-center">
      <h5 className="font-bold text-sm text-slate-700 mb-4">Tipo Rotatoria (Engranes)</h5>
      <svg viewBox="0 0 200 150" className="w-full h-32">
        <path d="M 80 150 L 80 110 A 50 50 0 0 1 120 110 L 120 150" fill="none" stroke="#bfdbfe" strokeWidth="20" />
        <path d="M 80 0 L 80 40 A 50 50 0 0 0 120 40 L 120 0" fill="none" stroke="#3b82f6" strokeWidth="20" />
        
        {/* Engranaje 1 */}
        <g style={{ transformOrigin: '75px 75px', animationDuration: '4s', animationTimingFunction: 'linear', animationIterationCount: 'infinite' }} className="animate-spin">
          <circle cx="75" cy="75" r="30" fill="#94a3b8" />
          <path d="M 70 35 L 80 35 L 85 45 L 65 45 Z" fill="#64748b" />
          <path d="M 70 115 L 80 115 L 85 105 L 65 105 Z" fill="#64748b" />
          <path d="M 35 70 L 35 80 L 45 85 L 45 65 Z" fill="#64748b" />
          <path d="M 115 70 L 115 80 L 105 85 L 105 65 Z" fill="#64748b" />
        </g>

        {/* Engranaje 2 */}
        <g style={{ transformOrigin: '125px 75px', animationDuration: '4s', animationDirection: 'reverse', animationTimingFunction: 'linear', animationIterationCount: 'infinite' }} className="animate-spin">
           <circle cx="125" cy="75" r="30" fill="#94a3b8" />
           <path d="M 120 35 L 130 35 L 135 45 L 115 45 Z" fill="#64748b" />
           <path d="M 120 115 L 130 115 L 135 105 L 115 105 Z" fill="#64748b" />
           <path d="M 85 70 L 85 80 L 95 85 L 95 65 Z" fill="#64748b" />
           <path d="M 165 70 L 165 80 L 155 85 L 155 65 Z" fill="#64748b" />
        </g>
      </svg>
      <p className="text-xs text-center mt-2 text-slate-500">Fluido desplazado entre los dientes y la carcasa</p>
    </div>
  </div>
);

const Visual6Dinamica = () => (
  <div className="flex flex-col items-center bg-slate-50 p-6 rounded-xl border border-slate-200">
    <svg viewBox="0 0 300 250" className="w-full max-w-sm h-48">
      {/* Carcasa (Voluta) */}
      <path d="M 150 200 A 70 70 0 1 0 100 100 L 100 20 L 160 20 L 160 80 A 90 90 0 1 1 150 220 Z" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="2" />
      
      {/* Flujo de entrada (Ojo) */}
      <circle cx="150" cy="130" r="20" fill="#bfdbfe" />
      <circle cx="150" cy="130" r="10" fill="#3b82f6" />
      
      {/* Impulsor girando */}
      <g style={{ transformOrigin: '150px 130px', animationDuration: '1s', animationTimingFunction: 'linear', animationIterationCount: 'infinite' }} className="animate-spin">
        <circle cx="150" cy="130" r="45" fill="none" stroke="#64748b" strokeWidth="1" />
        {/* Álabes */}
        <path d="M 150 110 Q 180 90, 180 130" fill="none" stroke="#475569" strokeWidth="4" />
        <path d="M 150 150 Q 120 170, 120 130" fill="none" stroke="#475569" strokeWidth="4" />
        <path d="M 130 110 Q 110 80, 150 90" fill="none" stroke="#475569" strokeWidth="4" />
        <path d="M 170 150 Q 190 180, 150 170" fill="none" stroke="#475569" strokeWidth="4" />
      </g>

      {/* Trayectoria de flujo */}
      <path d="M 170 90 Q 220 50, 130 50" fill="none" stroke="#3b82f6" strokeWidth="3" strokeDasharray="5" markerEnd="url(#arrowBlue)" />
      
      <text x="150" y="240" textAnchor="middle" className="text-xs font-bold fill-slate-700">Corte Transversal: Bomba Centrífuga</text>
    </svg>
  </div>
);

const Visual7Impulsores = () => (
  <div className="grid grid-cols-3 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
    <div>
      <svg viewBox="0 0 100 100" className="w-full h-24">
        <circle cx="50" cy="50" r="10" fill="#94a3b8" />
        <path d="M 50 40 Q 70 20, 80 50" fill="none" stroke="#475569" strokeWidth="6" />
        <path d="M 50 60 Q 30 80, 20 50" fill="none" stroke="#475569" strokeWidth="6" />
        <path d="M 40 50 Q 20 30, 50 20" fill="none" stroke="#475569" strokeWidth="6" />
        <path d="M 60 50 Q 80 70, 50 80" fill="none" stroke="#475569" strokeWidth="6" />
      </svg>
      <p className="text-xs font-bold mt-2 text-slate-700">ABIERTO</p>
      <p className="text-[10px] text-slate-500 leading-tight mt-1">Sin platos laterales. Para líquidos con sólidos.</p>
    </div>
    <div>
      <svg viewBox="0 0 100 100" className="w-full h-24">
        <circle cx="50" cy="50" r="40" fill="#cbd5e1" />
        <circle cx="50" cy="50" r="10" fill="#94a3b8" />
        <path d="M 50 40 Q 70 20, 80 50" fill="none" stroke="#475569" strokeWidth="6" />
        <path d="M 50 60 Q 30 80, 20 50" fill="none" stroke="#475569" strokeWidth="6" />
        <path d="M 40 50 Q 20 30, 50 20" fill="none" stroke="#475569" strokeWidth="6" />
        <path d="M 60 50 Q 80 70, 50 80" fill="none" stroke="#475569" strokeWidth="6" />
      </svg>
      <p className="text-xs font-bold mt-2 text-slate-700">SEMI-ABIERTO</p>
      <p className="text-[10px] text-slate-500 leading-tight mt-1">Un plato trasero. Líquidos algo viscosos.</p>
    </div>
    <div>
      <svg viewBox="0 0 100 100" className="w-full h-24">
         <circle cx="50" cy="50" r="40" fill="#94a3b8" stroke="#64748b" strokeWidth="2" />
         <circle cx="50" cy="50" r="15" fill="#cbd5e1" />
         {/* Representación de que está cerrado (plato frontal opaco tapando aspas) */}
         <line x1="20" y1="50" x2="80" y2="50" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="2" opacity="0.5"/>
         <line x1="50" y1="20" x2="50" y2="80" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="2" opacity="0.5"/>
      </svg>
      <p className="text-xs font-bold mt-2 text-slate-700">CERRADO</p>
      <p className="text-[10px] text-slate-500 leading-tight mt-1">Dos platos. Alta eficiencia, líquidos limpios.</p>
    </div>
  </div>
);

const Visual8Matriz = () => (
  <div className="overflow-x-auto rounded-xl border border-slate-200">
    <table className="min-w-full text-sm text-left">
      <thead className="bg-slate-100 text-slate-700">
        <tr>
          <th className="px-4 py-3 font-semibold">Condición / Fluido</th>
          <th className="px-4 py-3 font-semibold bg-indigo-50 text-indigo-800">Reciprocantes</th>
          <th className="px-4 py-3 font-semibold bg-teal-50 text-teal-800">Rotatorias</th>
          <th className="px-4 py-3 font-semibold bg-blue-50 text-blue-800">Centrífugas</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-200 bg-white">
        <tr>
          <td className="px-4 py-3 font-medium text-slate-900">Agua limpia / Gran Caudal</td>
          <td className="px-4 py-3 text-slate-400">Poco común</td>
          <td className="px-4 py-3 text-slate-400">Poco común</td>
          <td className="px-4 py-3 font-bold text-green-600 bg-green-50">Óptimo</td>
        </tr>
        <tr>
          <td className="px-4 py-3 font-medium text-slate-900">Fluido Altamente Viscoso (Aceite, Miel)</td>
          <td className="px-4 py-3 text-slate-400">Aceptable</td>
          <td className="px-4 py-3 font-bold text-green-600 bg-green-50">Óptimo</td>
          <td className="px-4 py-3 text-red-400 bg-red-50">No Recomendado</td>
        </tr>
        <tr>
          <td className="px-4 py-3 font-medium text-slate-900">Presiones Extremadamente Altas</td>
          <td className="px-4 py-3 font-bold text-green-600 bg-green-50">Óptimo</td>
          <td className="px-4 py-3 text-slate-600">Aceptable</td>
          <td className="px-4 py-3 text-slate-400">Difícil (Requiere Multipaso)</td>
        </tr>
        <tr>
          <td className="px-4 py-3 font-medium text-slate-900">Sólidos en suspensión (Lodos)</td>
          <td className="px-4 py-3 text-red-400 bg-red-50">Se atascan</td>
          <td className="px-4 py-3 text-red-400 bg-red-50">Desgaste rápido</td>
          <td className="px-4 py-3 font-bold text-green-600 bg-green-50">Aceptable (Impulsor abierto)</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const Visual9Dispersion = () => (
  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 relative">
    <svg viewBox="0 0 400 300" className="w-full h-64">
      {/* Ejes */}
      <line x1="40" y1="260" x2="380" y2="260" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowGray)"/>
      <line x1="40" y1="260" x2="40" y2="20" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowGray)"/>
      <text x="210" y="290" textAnchor="middle" className="text-xs font-bold fill-slate-700">CAUDAL (Flujo volumétrico)</text>
      <text x="15" y="140" transform="rotate(-90 15,140)" textAnchor="middle" className="text-xs font-bold fill-slate-700">PRESIÓN (Carga)</text>
      
      {/* Región Reciprocantes */}
      <ellipse cx="80" cy="70" rx="30" ry="40" fill="#818cf8" opacity="0.6" />
      <text x="80" y="75" textAnchor="middle" className="text-[10px] font-bold fill-indigo-900">Reciprocantes</text>
      
      {/* Región Rotatorias */}
      <ellipse cx="150" cy="150" rx="50" ry="40" fill="#2dd4bf" opacity="0.6" />
      <text x="150" y="155" textAnchor="middle" className="text-[10px] font-bold fill-teal-900">Rotatorias</text>
      
      {/* Región Centrífugas */}
      <ellipse cx="280" cy="220" rx="80" ry="30" fill="#60a5fa" opacity="0.6" />
      <text x="280" y="225" textAnchor="middle" className="text-[10px] font-bold fill-blue-900">Centrífugas</text>
      
      {/* Líneas de guía punteadas */}
      <line x1="40" y1="70" x2="50" y2="70" stroke="#94a3b8" strokeDasharray="2" />
      <line x1="80" y1="260" x2="80" y2="250" stroke="#94a3b8" strokeDasharray="2" />
    </svg>
  </div>
);

// --- MAIN APP COMPONENT ---

export default function App() {
  const blocks = [
    {
      id: 1,
      title: "Concepto de equipo de bombeo",
      text: "Un equipo de bombeo es un dispositivo que transforma energía mecánica en energía hidráulica. Esta energía se manifiesta en el fluido como aumento de presión, velocidad o elevación (posición). Su función esencial es transportar o impulsar fluidos de un punto a otro.",
      visual: <Visual1Concepto />
    },
    {
      id: 2,
      title: "Formas de energía en un fluido",
      text: "La energía que una bomba transmite a un fluido puede presentarse en tres formas principales: Energía de presión (incremento de presión interna), Energía de posición (elevación del fluido) y Energía de velocidad (aumento de la rapidez del flujo). En la práctica, estas formas suelen combinarse.",
      visual: <Visual2Energia />
    },
    {
      id: 3,
      title: "Relación entre bombas y turbinas",
      text: "Las bombas y las turbinas son máquinas inversas. Mientras una bomba entrega energía al fluido, una turbina extrae energía del fluido y la convierte en energía mecánica. En sistemas hidráulicos, una bomba puede considerarse un generador hidráulico y una turbina un motor hidráulico.",
      visual: <Visual3BombaTurbina />
    },
    {
      id: 4,
      title: "Clasificación general de bombas",
      text: "Las bombas se clasifican principalmente en dos grandes grupos: Bombas de desplazamiento positivo y Bombas dinámicas. Esta clasificación se basa en la forma en que transfieren energía al fluido.",
      visual: <Visual4Arbol />
    },
    {
      id: 5,
      title: "Bombas de desplazamiento positivo",
      text: "Estas bombas transportan el fluido mediante el atrapamiento de un volumen definido y su desplazamiento. Se subdividen en Reciprocantes (pistón, émbolo, diafragma) y Rotatorias (engranes, lóbulos, tornillos). Son adecuadas para altas presiones y caudales relativamente bajos.",
      visual: <Visual5Desplazamiento />
    },
    {
      id: 6,
      title: "Bombas dinámicas",
      text: "En estas bombas, el fluido recibe energía de manera continua mediante un impulsor. Incluyen: Centrífugas (flujo radial o mixto), Axiales y Periféricas. Son ideales para grandes caudales y presiones moderadas.",
      visual: <Visual6Dinamica />
    },
    {
      id: 7,
      title: "Subclasificación de bombas centrífugas",
      text: "Las bombas centrífugas pueden clasificarse según: Tipo de flujo (radial, axial o mixto), Número de etapas (una/unipaso o varias/multipaso) y Tipo de impulsor (abierto, semiabierto o cerrado).",
      visual: <Visual7Impulsores />
    },
    {
      id: 8,
      title: "Factores para la selección de bombas",
      text: "La elección del tipo de bomba depende de: Caudal requerido, Presión de operación, Propiedades del fluido (viscosidad, densidad, temperatura, pH) y Presencia de sólidos o impurezas.",
      visual: <Visual8Matriz />
    },
    {
      id: 9,
      title: "Aplicaciones típicas según el tipo de bomba",
      text: "Cada tipo responde a condiciones específicas: Bombas reciprocantes para caudales pequeños y altas presiones. Bombas rotatorias para fluidos viscosos. Bombas centrífugas para grandes caudales y fluidos poco viscosos.",
      visual: <Visual9Dispersion />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800 selection:bg-blue-200 selection:text-blue-900 pb-12">
      
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-slate-800 text-white p-8 shadow-lg">
        <div className="max-w-5xl mx-auto flex items-center gap-4">
          <BookOpen size={40} className="text-blue-300" />
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Fundamentos y Clasificación de Bombas Hidráulicas</h1>
        
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-4xl mx-auto mt-8 px-4 space-y-12">
        
        {blocks.map((block) => (
          <section key={block.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
            <div className="border-b border-slate-100 bg-slate-50/50 p-6 flex items-start gap-4">
              <div className="bg-blue-100 text-blue-700 w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                {block.id}
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-800">{block.title}</h2>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  {block.text}
                </p>
              </div>
            </div>
            
            <div className="p-6">
           
              {/* Visualización generada a medida */}
              {block.visual}
            </div>
          </section>
        ))}

      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto mt-12 text-center text-slate-500 text-sm px-4">
        <p>Material educativo generado para facilitar el entendimiento y síntesis de la mecánica de fluidos.</p>
      </footer>

    </div>
  );
}