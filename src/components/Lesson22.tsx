import React, { useState, useEffect } from 'react';

import DivCarousel from '../assets/DivCarousel';

// --- Types & Interfaces ---
type DiagramStatus = 'Estático' | 'Dinámico';

interface LessonSection {
  id: string;
  title: string;
  subtitle: string;
  description: React.ReactNode;
  status: DiagramStatus;
}

interface LayoutProps {
  sections: LessonSection[];
  activeSectionId: string;
  onTabChange: (id: string) => void;
  children: React.ReactNode;
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

// --- Data Content ---
const LESSON_SECTIONS: LessonSection[] = [
  {
    id: 'fase-densidad',
    title: 'Separación por Densidad',
    subtitle: 'Separación de fases por diferencia de densidad',
    description:  (
      <DivCarousel>
        <div>
          <p>La decantación es una operación unitaria basada en la separación de fases por acción gravitacional. Se utiliza cuando existe diferencia de densidad entre las fases y se permite el reposo suficiente para que ocurra la estratificación natural.</p>

          <p>Es un método simple, de bajo consumo energético y ampliamente utilizado en tratamiento de aguas, industria química y procesos de separación sólido–líquido y líquido–líquido.</p>
        </div>
            <div>
          <p>La separación ocurre debido a la diferencia de densidades entre las fases presentes en el sistema.</p>

          <ul>
            <li>La fase más densa se desplaza hacia el fondo.</li>
            <li>La fase menos densa permanece en la parte superior.</li>
            <li>El proceso requiere condiciones de flujo tranquilo (mínima turbulencia).</li>
          </ul>

          <p>No se requiere energía mecánica significativa, más allá del control del caudal y la geometría del equipo.</p>

        </div>
      </DivCarousel>
    ),
    status: 'Estático',
  },
  {
    id: 'solido-liquido',
    title: 'Sólido–Líquido',
    subtitle: 'Decantación sólido–líquido',
    description: (
      <DivCarousel>
        <div>
          <p>En este caso:</p>

          <ul>
            <li>Las partículas sólidas sedimentan.</li>
            <li>El líquido sobrenadante se retira cuidadosamente.</li>
            <li>Se aplica generalmente después de un proceso de sedimentación previa.</li>
          </ul>

          <h3>Características</h3>

          <ul>
            <li>Separación del líquido clarificado.</li>
            <li>Extracción manual o controlada del sobrenadante.</li>
            <li>Aplicación en separación de lodos.</li>
          </ul>

          <p>La eficiencia depende del grado de sedimentación previo.</p>

         
        </div>
      </DivCarousel>
    ),
    status: 'Dinámico',
  },
  {
    id: 'liquido-liquido',
    title: 'Líquido–Líquido',
    subtitle: 'Decantación líquido–líquido',
    description:  (
      <DivCarousel>
        <div>
          <p>Ocurre cuando dos líquidos son inmiscibles y tienen distinta densidad.</p>

          <h3>Ejemplos comunes</h3>

          <ul>
            <li>Agua y aceite.</li>
            <li>Agua y solventes orgánicos.</li>
          </ul>

          <h3>Condiciones necesarias</h3>

          <ul>
            <li>Diferencia suficiente de densidades.</li>
            <li>Tiempo adecuado de reposo.</li>
            <li>Ausencia de emulsiones estables.</li>
          </ul>

          <p>La separación se produce formando una interfase claramente definida.</p>

     </div>
     <div>
          <p>La decantación es un método económico y eficiente cuando existe diferencia significativa de densidades y se dispone de tiempo suficiente para la separación.</p>
        </div>
      </DivCarousel>
    ),
    status: 'Estático',
  },
  {
    id: 'tanque-rectangular',
    title: 'Tanque Rectangular',
    subtitle: 'Flujo en tanque de decantación rectangular',
    description: (
      <DivCarousel>
        <div>
          <p>En aplicaciones industriales, la decantación se realiza en tanques diseñados para maximizar el tiempo de retención y minimizar turbulencias, garantizando condiciones favorables para la separación.</p>
        </div>
      <div>
          <h3>Características</h3>

          <ul>
            <li>Flujo horizontal.</li>
            <li>Zona de entrada con disipación de energía.</li>
            <li>Zona amplia de sedimentación.</li>
            <li>Canal de salida del líquido clarificado.</li>
          </ul>

          <h3>Aplicaciones</h3>

          <ul>
            <li>Plantas de tratamiento de aguas residuales.</li>
            <li>Procesos municipales e industriales.</li>
          </ul>

          <p>Su diseño favorece flujo uniforme a lo largo del tanque.</p>

        </div>
     
      </DivCarousel>
    ),
    status: 'Dinámico',
  },
  {
    id: 'tanque-circular',
    title: 'Tanque Circular',
    subtitle: 'Flujo radial en tanque circular',
    description: (
      <DivCarousel>
        <div>
          <h3>Características</h3>

          <ul>
            <li>Flujo radial.</li>
            <li>Entrada central.</li>
            <li>Recolección periférica del líquido.</li>
            <li>Sistema de rastras para remover sólidos.</li>
          </ul>

          <h3>Ventajas</h3>

          <ul>
            <li>Mejor distribución hidráulica.</li>
            <li>Menor formación de zonas muertas.</li>
            <li>Mayor eficiencia en grandes caudales.</li>
          </ul>

        </div>
      </DivCarousel>
    ),
    status: 'Dinámico',
  },
  {
    id: 'zonas',
    title: 'Zonas funcionales',
    subtitle: 'Zonas funcionales del tanque',
    description: (
      <DivCarousel>
        <div>
          <p>Todo tanque de decantación posee zonas definidas:</p>

          <ul>
            <li>Zona de entrada.</li>
            <li>Zona de sedimentación.</li>
            <li>Zona de acumulación de lodos.</li>
            <li>Zona de salida del líquido clarificado.</li>
          </ul>

          <p>El diseño adecuado busca evitar:</p>

          <ul>
            <li>Turbulencia excesiva.</li>
            <li>Cortocircuitos hidráulicos.</li>
            <li>Resuspensión de sólidos.</li>
          </ul>

          <p>La geometría y el diseño hidráulico del tanque determinan el rendimiento del proceso. El control del flujo es esencial para maximizar la eficiencia de separación.</p>
        </div>
      </DivCarousel>
    ),
    status: 'Dinámico',
  },
  {
    id: 'densidad',
    title: 'Densidad',
    subtitle: 'Influencia de la densidad',
    description: (
      <DivCarousel>
        <div>
          <p>La eficiencia de la decantación depende tanto de las propiedades físicas del sistema como de los parámetros operativos del equipo.</p>
        </div>

          <div>
          <p>La diferencia de densidad entre fases es el motor del proceso.</p>

          <ul>
            <li>Mayor diferencia → separación más rápida.</li>
            <li>Diferencia pequeña → separación lenta.</li>
            <li>En líquido–líquido, puede requerir tiempos prolongados.</li>
          </ul>

          <p>La densidad determina la magnitud de la fuerza gravitacional efectiva.</p>

        </div>
      </DivCarousel>
    )
    ,
    status: 'Dinámico',
  },
  {
    id: 'viscosidad',
    title: 'Viscosidad',
    subtitle: 'Influencia de la viscosidad',
    description: (
      <DivCarousel>
        <div>
          <p>La viscosidad genera resistencia al movimiento.</p>

          <ul>
            <li>Alta viscosidad → menor velocidad de sedimentación.</li>
            <li>Baja viscosidad → separación más eficiente.</li>
            <li>La temperatura influye indirectamente al modificar la viscosidad.</li>
          </ul>

          <p>Fluidos viscosos dificultan la movilidad de partículas o gotas.</p>

        </div>
      </DivCarousel>
    ),
    status: 'Dinámico',
  },
  {
    id: 'retencion',
    title: 'Tiempo de retención',
    subtitle: 'Tiempo de retención hidráulico (TRH)',
    description:  (
      <DivCarousel>
        <div>
          <p>El tiempo de retención hidráulico se define como:</p>

          <p>TRH = Volumen del tanque / Caudal de alimentación</p>

          <h3>Influencia del TRH</h3>

          <ul>
            <li>Mayor TRH → mayor oportunidad de separación.</li>
            <li>TRH insuficiente → arrastre de sólidos.</li>
            <li>TRH excesivo → mayor tamaño y costo del equipo.</li>
          </ul>

          <p>Debe existir equilibrio entre eficiencia y costo de inversión.</p>

        </div>
      </DivCarousel>
    ),
    status: 'Dinámico',
  },
  {
    id: 'condiciones',
    title: 'Factores',
    subtitle: ' Otros factores relevantes',
    description: (
      <DivCarousel>
        <div>
          <ul>
            <li>Temperatura.</li>
            <li>Tamaño de partícula.</li>
            <li>Estabilidad de emulsiones.</li>
            <li>Presencia de surfactantes.</li>
            <li>Condiciones de flujo (laminar vs. turbulento).</li>
          </ul>

          <p>Estos factores pueden favorecer o dificultar la separación.</p>


</div>       


<p>La eficiencia de la decantación resulta del equilibrio entre propiedades físicas (densidad, viscosidad) y parámetros operativos (TRH, caudal, diseño del tanque). El control adecuado de estas variables permite optimizar la separación.</p>


 <p>La decantación es una operación unitaria fundamental basada en la separación por gravedad. Su aplicación en sistemas sólido–líquido y líquido–líquido depende de la diferencia de densidades, el control del flujo y el tiempo de retención. El diseño adecuado de tanques y la correcta gestión de variables operativas permiten garantizar eficiencia, calidad del efluente y viabilidad económica en múltiples procesos industriales.</p>
       
      </DivCarousel>
    ),
    status: 'Dinámico',
  }
];

// --- UI Components ---

const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden ${className}`}>
    {children}
  </div>
);

// --- Diagram Renders (SVG based for precise physical modeling) ---

const DiferenciaDensidadDiagram = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full max-h-[400px]">
    {/* Contenedor / Vaso */}
    <path d="M 120 50 L 120 250 A 20 20 0 0 0 140 270 L 260 270 A 20 20 0 0 0 280 250 L 280 50" fill="none" stroke="#334155" strokeWidth="4" />
    
    {/* Fase Ligera (Top) */}
    <rect x="122" y="70" width="156" height="90" fill="#93c5fd" opacity="0.8" />
    <text x="200" y="120" textAnchor="middle" fill="#1e3a8a" className="font-semibold text-sm">Fase Ligera (Menor Densidad)</text>
    
    {/* Fase Densa (Bottom) */}
    <rect x="122" y="160" width="156" height="108" fill="#fcd34d" opacity="0.8" />
    <text x="200" y="215" textAnchor="middle" fill="#92400e" className="font-semibold text-sm">Fase Densa (Mayor Densidad)</text>

    {/* Interfase */}
    <line x1="122" y1="160" x2="278" y2="160" stroke="#475569" strokeWidth="2" strokeDasharray="5,5" />
    
    {/* Flechas de gravedad (Estáticas) */}
    <g stroke="#b45309" strokeWidth="3" fill="none">
      <path d="M 160 170 L 160 240 M 155 230 L 160 240 L 165 230" />
      <path d="M 240 170 L 240 240 M 235 230 L 240 240 L 245 230" />
    </g>
  </svg>
);

const SolidoLiquidoDiagram = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full max-h-[400px]">
    {/* Animación de inclinación y vaciado */}
    <g>
      <animateTransform attributeName="transform" type="rotate" values="0 200 250; -30 200 250; 0 200 250" dur="6s" repeatCount="indefinite" />
      
      {/* Vaso */}
      <path d="M 150 50 L 150 250 A 10 10 0 0 0 160 260 L 240 260 A 10 10 0 0 0 250 250 L 250 50" fill="none" stroke="#334155" strokeWidth="4" />
      
      {/* Líquido (Sobrenadante) que disminuye */}
      <rect x="152" y="100" width="96" height="130" fill="#60a5fa" opacity="0.6">
        <animate attributeName="y" values="100; 160; 100" dur="6s" repeatCount="indefinite" />
        <animate attributeName="height" values="130; 70; 130" dur="6s" repeatCount="indefinite" />
      </rect>

      {/* Partículas Sólidas (Sedimento) */}
      <path d="M 152 230 L 248 230 L 248 258 L 152 258 Z" fill="#78350f" />
      <circle cx="170" cy="240" r="4" fill="#451a03" />
      <circle cx="190" cy="245" r="5" fill="#451a03" />
      <circle cx="210" cy="238" r="3" fill="#451a03" />
      <circle cx="230" cy="250" r="4" fill="#451a03" />
      <circle cx="180" cy="252" r="4" fill="#451a03" />
      <circle cx="220" cy="245" r="5" fill="#451a03" />
    </g>

    {/* Flujo de vertido dinámico (Líquido saliendo) */}
    <path d="M 115 130 Q 80 160 80 250" fill="none" stroke="#60a5fa" strokeWidth="8" strokeLinecap="round" opacity="0">
      <animate attributeName="opacity" values="0; 0.8; 0" keyTimes="0; 0.5; 1" dur="6s" repeatCount="indefinite" />
      <animate attributeName="stroke-dasharray" values="0,100; 100,0; 0,100" dur="6s" repeatCount="indefinite" />
    </path>
  </svg>
);

const LiquidoLiquidoDiagram = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full max-h-[400px]">
    {/* Soporte */}
    <line x1="100" y1="20" x2="100" y2="280" stroke="#64748b" strokeWidth="6" />
    <line x1="70" y1="280" x2="130" y2="280" stroke="#64748b" strokeWidth="6" />
    <path d="M 100 120 L 160 120 M 160 110 L 160 130 M 100 180 L 140 180" stroke="#64748b" strokeWidth="4" />

    {/* Embudo de decantación */}
    <path d="M 200 40 C 260 40 270 140 200 200 L 200 240" fill="none" stroke="#334155" strokeWidth="4" />
    <path d="M 200 40 C 140 40 130 140 200 200 L 200 240" fill="none" stroke="#334155" strokeWidth="4" />
    
    {/* Tapa */}
    <rect x="185" y="25" width="30" height="15" fill="#475569" rx="3" />

    {/* Fase Superior (Aceite/Ligero) */}
    <path d="M 154 90 C 144 110 142 125 152 140 L 248 140 C 258 125 256 110 246 90 Z" fill="#fde047" opacity="0.8" />
    
    {/* Fase Inferior (Agua/Densa) */}
    <path d="M 152 140 C 160 155 175 180 198 198 L 202 198 C 225 180 240 155 248 140 Z" fill="#38bdf8" opacity="0.8" />

    {/* Línea de Interfase */}
    <line x1="152" y1="140" x2="248" y2="140" stroke="#0f172a" strokeWidth="2" strokeDasharray="4,4" />

    {/* Válvula de descarga */}
    <rect x="190" y="220" width="20" height="10" fill="#ef4444" />
    <circle cx="200" cy="225" r="3" fill="#7f1d1d" />
    
    {/* Vaso receptor */}
    <path d="M 175 260 L 175 295 A 5 5 0 0 0 180 300 L 220 300 A 5 5 0 0 0 225 295 L 225 260" fill="none" stroke="#334155" strokeWidth="3" />
    
    {/* Labels */}
    <text x="270" y="110" fill="#854d0e" className="text-xs font-semibold">Líquido A (Ligero)</text>
    <text x="270" y="165" fill="#0369a1" className="text-xs font-semibold">Líquido B (Denso)</text>
    <text x="240" y="228" fill="#b91c1c" className="text-xs font-bold">Válvula</text>
  </svg>
);

const TanqueRectangularDiagram = () => (
  <svg viewBox="0 0 500 250" className="w-full h-full max-h-[300px]">
    {/* Estructura del Tanque */}
    <rect x="50" y="50" width="400" height="150" fill="#e0f2fe" stroke="#0284c7" strokeWidth="3" />
    
    {/* Zona de entrada (Influyente) */}
    <path d="M 10 60 L 50 60 M 10 90 L 50 90 M 10 120 L 50 120" stroke="#0284c7" strokeWidth="4" strokeDasharray="5,5">
      <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1s" repeatCount="indefinite" />
    </path>
    <rect x="50" y="50" width="20" height="120" fill="#94a3b8" /> {/* Pantalla deflectora */}

    {/* Zona de salida (Efluente) */}
    <path d="M 450 60 L 490 60 M 450 80 L 490 80" stroke="#38bdf8" strokeWidth="4" strokeDasharray="5,5">
      <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1s" repeatCount="indefinite" />
    </path>
    <rect x="430" y="80" width="20" height="120" fill="#94a3b8" /> {/* Vertedero */}

    {/* Nivel de agua */}
    <line x1="50" y1="55" x2="450" y2="55" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="10,5" />

    {/* Lodos en el fondo */}
    <path d="M 50 200 L 450 200 L 450 180 Q 250 195 50 170 Z" fill="#8b5cf6" opacity="0.6" />

    {/* Animación de partículas sedimentando */}
    <g fill="#4c1d95">
      <circle r="3">
        <animateTransform attributeName="transform" type="translate" values="70,100; 150,140; 250,185" keyTimes="0; 0.5; 1" dur="4s" repeatCount="indefinite" />
      </circle>
      <circle r="2.5">
        <animateTransform attributeName="transform" type="translate" values="70,70; 200,120; 320,185" keyTimes="0; 0.5; 1" dur="5s" repeatCount="indefinite" />
      </circle>
      <circle r="3.5">
        <animateTransform attributeName="transform" type="translate" values="70,130; 120,160; 180,185" keyTimes="0; 0.5; 1" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle r="2">
        <animateTransform attributeName="transform" type="translate" values="70,80; 250,110; 400,185" keyTimes="0; 0.5; 1" dur="6s" repeatCount="indefinite" />
      </circle>
    </g>

    {/* Indicadores de flujo horizontal */}
    <g stroke="#0284c7" strokeWidth="2" fill="none" opacity="0.5">
      <path d="M 150 90 L 350 90 M 345 85 L 350 90 L 345 95">
        <animateTransform attributeName="transform" type="translate" values="-20,0; 20,0; -20,0" dur="3s" repeatCount="indefinite" />
      </path>
      <path d="M 150 130 L 300 130 M 295 125 L 300 130 L 295 135">
        <animateTransform attributeName="transform" type="translate" values="-15,0; 15,0; -15,0" dur="3.5s" repeatCount="indefinite" />
      </path>
    </g>
  </svg>
);

const TanqueCircularDiagram = () => (
  <svg viewBox="0 0 500 300" className="w-full h-full max-h-[350px]">
    {/* Corte transversal del tanque circular */}
    {/* Fondo cónico */}
    <path d="M 50 150 L 250 250 L 450 150 L 450 200 L 250 280 L 50 200 Z" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
    
    {/* Agua */}
    <path d="M 50 150 L 250 250 L 450 150 L 450 70 L 50 70 Z" fill="#bae6fd" opacity="0.7" />
    
    {/* Paredes exteriores / Vertedero */}
    <rect x="40" y="60" width="10" height="140" fill="#64748b" />
    <rect x="450" y="60" width="10" height="140" fill="#64748b" />
    <path d="M 50 80 L 30 80 M 30 80 L 30 110" stroke="#0ea5e9" strokeWidth="3" fill="none" strokeDasharray="4,2">
       <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1s" repeatCount="indefinite" />
    </path>
    <path d="M 450 80 L 470 80 M 470 80 L 470 110" stroke="#0ea5e9" strokeWidth="3" fill="none" strokeDasharray="4,2">
       <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1s" repeatCount="indefinite" />
    </path>

    {/* Campana central (Influyente) */}
    <rect x="220" y="30" width="60" height="120" fill="#94a3b8" />
    <path d="M 250 10 L 250 140" stroke="#0284c7" strokeWidth="15" strokeDasharray="10,5">
       <animate attributeName="stroke-dashoffset" from="15" to="0" dur="0.8s" repeatCount="indefinite" />
    </path>

    {/* Lodos en el fondo */}
    <path d="M 80 165 L 250 250 L 420 165 L 250 260 Z" fill="#52525b" opacity="0.8" />

    {/* Sistema de rastras (Barredoras rotativas simuladas en 2D) */}
    <g stroke="#1e293b" strokeWidth="4">
      {/* Eje central */}
      <line x1="250" y1="120" x2="250" y2="250" />
      {/* Brazos de la rastra */}
      <line x1="250" y1="230" x2="100" y2="155" />
      <line x1="250" y1="230" x2="400" y2="155" />
      
      {/* Cuchillas animadas oscilando levemente para simular barrido 3D en 2D */}
      <g>
        <animateTransform attributeName="transform" type="rotate" values="-2 250 230; 2 250 230; -2 250 230" dur="4s" repeatCount="indefinite" />
        <line x1="120" y1="165" x2="120" y2="175" strokeWidth="3" />
        <line x1="160" y1="185" x2="160" y2="195" strokeWidth="3" />
        <line x1="200" y1="205" x2="200" y2="215" strokeWidth="3" />
        <line x1="380" y1="165" x2="380" y2="175" strokeWidth="3" />
        <line x1="340" y1="185" x2="340" y2="195" strokeWidth="3" />
        <line x1="300" y1="205" x2="300" y2="215" strokeWidth="3" />
      </g>
    </g>

    {/* Flechas de flujo radial */}
    <g stroke="#0369a1" strokeWidth="3" fill="none">
      <path d="M 200 130 Q 150 120 100 90" markerEnd="url(#arrow)">
         <animate attributeName="stroke-dasharray" values="0,200; 200,0" dur="2s" repeatCount="indefinite" />
      </path>
      <path d="M 300 130 Q 350 120 400 90">
         <animate attributeName="stroke-dasharray" values="0,200; 200,0" dur="2s" repeatCount="indefinite" />
      </path>
    </g>
  </svg>
);

const ZonasFuncionalesDiagram: React.FC = () => (
  <div className="w-full grid place-items-center overflow-x-auto">
    <svg viewBox="0 0 900 450" className="w-full max-w-4xl h-auto drop-shadow-sm font-sans">
      <defs>
        <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e0f2fe" />
          <stop offset="100%" stopColor="#bae6fd" />
        </linearGradient>
        <pattern id="sludge" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="2" fill="#475569" opacity="0.4" />
          <circle cx="4" cy="4" r="3" fill="#334155" opacity="0.5" />
          <circle cx="16" cy="16" r="1.5" fill="#1e293b" opacity="0.6" />
        </pattern>
      </defs>

      {/* Estructura del Tanque */}
      <rect x="50" y="50" width="800" height="350" fill="#f8fafc" stroke="#475569" strokeWidth="6" rx="8" />
      
      {/* Zona de Entrada (Izquierda) */}
      <rect x="50" y="50" width="120" height="350" fill="#7dd3fc" opacity="0.8" />
      <path d="M 20 100 L 50 100" stroke="#0284c7" strokeWidth="12" strokeLinecap="round" />
      <polygon points="50,90 65,100 50,110" fill="#0284c7" />
      
      {/* Zona de Sedimentación (Centro Superior) */}
      <rect x="170" y="50" width="560" height="230" fill="url(#waterGrad)" />
      
      {/* Zona de Lodos (Centro Inferior) */}
      <rect x="170" y="280" width="560" height="120" fill="#94a3b8" />
      <rect x="170" y="280" width="560" height="120" fill="url(#sludge)" />
      <path d="M 450 400 L 450 430" stroke="#334155" strokeWidth="16" />
      <polygon points="435,430 465,430 450,450" fill="#334155" />

      {/* Zona de Salida (Derecha) */}
      <rect x="730" y="50" width="120" height="350" fill="#38bdf8" opacity="0.7" />
      <path d="M 850 100 L 880 100" stroke="#0284c7" strokeWidth="12" strokeLinecap="round" />
      <polygon points="880,90 895,100 880,110" fill="#0284c7" />

      {/* Deflectores (Baffles) */}
      <line x1="170" y1="50" x2="170" y2="300" stroke="#1e293b" strokeWidth="8" strokeLinecap="round" />
      <line x1="730" y1="120" x2="730" y2="400" stroke="#1e293b" strokeWidth="8" strokeLinecap="round" />

      {/* Etiquetas */}
      <g className="text-sm md:text-base font-bold text-slate-800">
        <text x="110" y="225" textAnchor="middle" transform="rotate(-90 110 225)">ZONA DE ENTRADA</text>
        <text x="450" y="150" textAnchor="middle" className="text-lg md:text-xl text-sky-900">ZONA DE SEDIMENTACIÓN</text>
        <text x="450" y="345" textAnchor="middle" className="text-lg md:text-xl text-slate-100">ZONA DE LODOS</text>
        <text x="790" y="225" textAnchor="middle" transform="rotate(-90 790 225)">ZONA DE SALIDA</text>
      </g>
    </svg>
  </div>
);

// 2. Diferencia de densidad (Estático)
const DensidadDiagram: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
    {/* Alta diferencia de densidad */}
    <div className="grid grid-rows-[auto_1fr] gap-4 place-items-center text-center">
      <h3 className="font-bold text-lg text-emerald-700">Alta Diferencia de Densidad (Δρ Grande)</h3>
      <svg viewBox="0 0 300 400" className="w-full max-w-xs drop-shadow-md">
        <rect x="25" y="20" width="250" height="360" fill="none" stroke="#475569" strokeWidth="6" rx="8" />
        <rect x="28" y="23" width="244" height="257" fill="#dcfce7" />
        <rect x="28" y="280" width="244" height="97" fill="#059669" />
        
        {/* Partículas cayendo rápido */}
        {[60, 120, 180, 240].map((x) => (
          <g key={`high-${x}`}>
            <circle cx={x} cy="100" r="8" fill="#047857" />
            <path d={`M ${x} 115 L ${x} 165`} stroke="#047857" strokeWidth="3" strokeDasharray="4 4" />
            <polygon points={`${x-4},160 ${x+4},160 ${x},170`} fill="#047857" />
            <circle cx={x+15} cy="180" r="10" fill="#047857" />
            <path d={`M ${x+15} 195 L ${x+15} 245`} stroke="#047857" strokeWidth="3" strokeDasharray="4 4" />
            <polygon points={`${x+11},240 ${x+19},240 ${x+15},250`} fill="#047857" />
          </g>
        ))}
        <text x="150" y="335" textAnchor="middle" fill="white" className="font-bold">Separación Rápida</text>
      </svg>
    </div>

    {/* Baja diferencia de densidad */}
    <div className="grid grid-rows-[auto_1fr] gap-4 place-items-center text-center">
      <h3 className="font-bold text-lg text-amber-700">Baja Diferencia de Densidad (Δρ Pequeña)</h3>
      <svg viewBox="0 0 300 400" className="w-full max-w-xs drop-shadow-md">
        <rect x="25" y="20" width="250" height="360" fill="none" stroke="#475569" strokeWidth="6" rx="8" />
        <rect x="28" y="23" width="244" height="317" fill="#fef3c7" />
        <rect x="28" y="340" width="244" height="37" fill="#d97706" />
        
        {/* Partículas cayendo lento */}
        {[70, 130, 190, 230].map((x, i) => (
          <g key={`low-${x}`}>
            <circle cx={x} cy={80 + i*30} r="6" fill="#b45309" />
            <path d={`M ${x} ${90 + i*30} L ${x} ${110 + i*30}`} stroke="#b45309" strokeWidth="2" strokeDasharray="2 2" />
            <polygon points={`${x-3},${108 + i*30} ${x+3},${108 + i*30} ${x},${113 + i*30}`} fill="#b45309" />
            
            <circle cx={x-15} cy={160 + i*20} r="5" fill="#b45309" />
            <path d={`M ${x-15} ${170 + i*20} L ${x-15} ${190 + i*20}`} stroke="#b45309" strokeWidth="2" strokeDasharray="2 2" />
            <polygon points={`${x-18},${188 + i*20} ${x-12},${188 + i*20} ${x-15},${193 + i*20}`} fill="#b45309" />
          </g>
        ))}
        <text x="150" y="365" textAnchor="middle" fill="white" className="font-bold">Separación Lenta</text>
      </svg>
    </div>
  </div>
);

// 3. Efecto de la viscosidad (Dinámico)
const ViscosidadDiagram: React.FC = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let animationFrameId: number;
    const animate = () => {
      setTime((prevTime) => (prevTime + 1) % 1000);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Generamos partículas base para visualizar
  const particles = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    x: 40 + i * 25,
    offset: i * 120,
    size: 4 + (i % 3) * 2,
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
      {/* Baja Viscosidad */}
      <div className="grid grid-rows-[auto_1fr] gap-4 place-items-center">
        <div className="grid place-items-center text-center">
          <h3 className="font-bold text-lg text-blue-700">Fluido de Baja Viscosidad</h3>
          <p className="text-sm text-slate-500">Agua, solventes (Movimiento rápido)</p>
        </div>
        <svg viewBox="0 0 260 400" className="w-full max-w-xs bg-white rounded-lg border-2 border-slate-300">
          <rect x="0" y="0" width="260" height="400" fill="#e0f2fe" opacity="0.6" />
          {particles.map((p) => {
            // Velocidad rápida
            const y = ((time * 4 + p.offset) % 450) - 50;
            return (
              <circle key={`low-${p.id}`} cx={p.x} cy={y} r={p.size} fill="#0369a1" />
            );
          })}
          <rect x="0" y="350" width="260" height="50" fill="#0284c7" />
        </svg>
      </div>

      {/* Alta Viscosidad */}
      <div className="grid grid-rows-[auto_1fr] gap-4 place-items-center">
        <div className="grid place-items-center text-center">
          <h3 className="font-bold text-lg text-purple-700">Fluido de Alta Viscosidad</h3>
          <p className="text-sm text-slate-500">Glicerina, aceites (Movimiento lento)</p>
        </div>
        <svg viewBox="0 0 260 400" className="w-full max-w-xs bg-white rounded-lg border-2 border-slate-300">
          <rect x="0" y="0" width="260" height="400" fill="#f3e8ff" opacity="0.8" />
          {particles.map((p) => {
            // Velocidad muy lenta
            const y = ((time * 0.8 + p.offset) % 450) - 50;
            return (
              <circle key={`high-${p.id}`} cx={p.x} cy={y} r={p.size} fill="#6b21a8" />
            );
          })}
          <rect x="0" y="350" width="260" height="50" fill="#581c87" />
        </svg>
      </div>
    </div>
  );
};

// 4. Impacto del Tiempo de Retención Hidráulico (Interactivo)
const RetencionDiagram: React.FC = () => {
  const [caudal, setCaudal] = useState<number>(50); // Caudal en L/min
  const volumen = 1000; // Volumen fijo del tanque en L
  const trh = (volumen / caudal).toFixed(1); // Tiempo en minutos
  
  // Para la animación de CSS en SVG, calculamos la duración inversa al caudal
  const animationDuration = (100 / caudal).toFixed(2);

  return (
    <div className="grid grid-rows-[auto_1fr] gap-8 p-4">
      {/* Controles Interactivos */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 bg-white p-6 rounded-lg border border-slate-200 shadow-sm items-center">
        <div className="grid gap-4">
          <label htmlFor="caudalSlider" className="font-bold text-slate-700 grid grid-cols-[1fr_auto]">
            <span>Caudal de entrada (Q):</span>
            <span className="text-blue-600">{caudal} L/min</span>
          </label>
          <input 
            id="caudalSlider"
            type="range" 
            min="10" 
            max="200" 
            step="10" 
            value={caudal} 
            onChange={(e) => setCaudal(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
        </div>
        <div className="grid place-items-center bg-blue-50 p-4 rounded-lg border border-blue-100 min-w-[200px]">
          <span className="text-sm text-slate-500 font-semibold mb-1">Tiempo de Retención (TRH)</span>
          <span className="text-3xl font-extrabold text-blue-700">{trh} <span className="text-lg">min</span></span>
          <span className="text-xs text-slate-400 mt-1">Fórmula: V / Q</span>
        </div>
      </div>

      {/* Visualización del tanque dinámico */}
      <div className="grid place-items-center w-full overflow-hidden">
        <svg viewBox="0 0 800 300" className="w-full max-w-4xl h-auto">
          <style>
            {`
              @keyframes flowAnimation {
                from { stroke-dashoffset: 40; }
                to { stroke-dashoffset: 0; }
              }
              .water-flow {
                animation: flowAnimation ${animationDuration}s linear infinite;
              }
            `}
          </style>
          
          {/* Tanque Base */}
          <rect x="100" y="50" width="600" height="200" fill="#f8fafc" stroke="#475569" strokeWidth="6" rx="10" />
          <rect x="100" y="100" width="600" height="150" fill="#bae6fd" opacity="0.6" />
          
          {/* Líneas de flujo animadas */}
          <g stroke="#0284c7" strokeWidth="4" strokeLinecap="round" strokeDasharray="15 25" className="water-flow">
            <line x1="120" y1="130" x2="680" y2="130" />
            <line x1="120" y1="170" x2="680" y2="170" />
            <line x1="120" y1="210" x2="680" y2="210" />
          </g>

          {/* Tubería Entrada */}
          <rect x="0" y="120" width="100" height="40" fill="#94a3b8" />
          <path d="M 20 140 L 80 140" stroke="#f8fafc" strokeWidth="8" strokeDasharray="10 10" className="water-flow" />
          
          {/* Tubería Salida */}
          <rect x="700" y="120" width="100" height="40" fill="#94a3b8" />
          <path d="M 720 140 L 780 140" stroke="#f8fafc" strokeWidth="8" strokeDasharray="10 10" className="water-flow" />

          {/* Indicador visual de turbulencia */}
          {caudal > 100 && (
            <text x="400" y="270" textAnchor="middle" className="fill-red-500 font-bold text-sm">
              ⚠️ Alta turbulencia: Posible resuspensión de lodos
            </text>
          )}
          {caudal <= 100 && (
            <text x="400" y="270" textAnchor="middle" className="fill-emerald-600 font-bold text-sm">
              ✓ Flujo laminar estable
            </text>
          )}
        </svg>
      </div>
    </div>
  );
};

// 5. Condiciones (Estático)
const CondicionesDiagram: React.FC = () => {
  const favorables = [
    { title: "Baja temperatura del fluido", desc: "Aumenta la diferencia de densidades relativas en algunos sistemas." },
    { title: "Partículas de gran tamaño", desc: "Cumplen con la Ley de Stokes ofreciendo mayor velocidad terminal." },
    { title: "Flujo laminar", desc: "Evita la mezcla y resuspensión del sedimento ya separado." },
    { title: "Alta diferencia de densidad (Δρ)", desc: "Acelera significativamente la separación natural por gravedad." }
  ];

  const desfavorables = [
    { title: "Emulsiones estables", desc: "Evitan la coalescencia y separación de las fases líquidas." },
    { title: "Partículas coloidales", desc: "Son demasiado pequeñas y las fuerzas repulsivas superan a la gravedad." },
    { title: "Corrientes de convección térmica", desc: "Generan flujo ascendente que contrarresta la sedimentación." },
    { title: "Flujo turbulento", desc: "Rompe los flóculos y resuspende el lodo asentado en el fondo." }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
      {/* Columna Favorables */}
      <div className="grid grid-rows-[auto_1fr] gap-4">
        <div className="bg-emerald-100 border-b-4 border-emerald-500 p-4 rounded-t-lg grid place-items-center">
          <h3 className="font-bold text-xl text-emerald-800">Condiciones Favorables</h3>
        </div>
        <div className="grid gap-3 content-start">
          {favorables.map((item, index) => (
            <div key={index} className="grid grid-cols-[auto_1fr] gap-3 bg-white p-4 rounded-lg shadow-sm border border-emerald-100">
              <span className="grid place-items-center bg-emerald-100 text-emerald-600 w-8 h-8 rounded-full font-bold">✓</span>
              <div className="grid gap-1">
                <h4 className="font-bold text-slate-800 text-sm md:text-base">{item.title}</h4>
                <p className="text-xs md:text-sm text-slate-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Columna Desfavorables */}
      <div className="grid grid-rows-[auto_1fr] gap-4">
        <div className="bg-rose-100 border-b-4 border-rose-500 p-4 rounded-t-lg grid place-items-center">
          <h3 className="font-bold text-xl text-rose-800">Condiciones Desfavorables</h3>
        </div>
        <div className="grid gap-3 content-start">
          {desfavorables.map((item, index) => (
            <div key={index} className="grid grid-cols-[auto_1fr] gap-3 bg-white p-4 rounded-lg shadow-sm border border-rose-100">
              <span className="grid place-items-center bg-rose-100 text-rose-600 w-8 h-8 rounded-full font-bold">✕</span>
              <div className="grid gap-1">
                <h4 className="font-bold text-slate-800 text-sm md:text-base">{item.title}</h4>
                <p className="text-xs md:text-sm text-slate-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


// --- Main Lesson Components ---

const DiagramRender: React.FC<{ sectionId: string }> = ({ sectionId }) => {
  // Enrutador visual basado en Grid
  return (
    <div className="grid place-items-center w-full h-full bg-slate-50 border border-slate-100 rounded-lg p-4 min-h-[300px]">
      {sectionId === 'fase-densidad' && <DiferenciaDensidadDiagram />}
      {sectionId === 'solido-liquido' && <SolidoLiquidoDiagram />}
      {sectionId === 'liquido-liquido' && <LiquidoLiquidoDiagram />}
      {sectionId === 'tanque-rectangular' && <TanqueRectangularDiagram />}
      {sectionId === 'tanque-circular' && <TanqueCircularDiagram />}
      {sectionId === 'zonas' && <ZonasFuncionalesDiagram />}
      {sectionId === 'densidad' && <DensidadDiagram />}
      {sectionId === 'viscosidad' && <ViscosidadDiagram />}
      {sectionId === 'retencion' && <RetencionDiagram />}
      {sectionId === 'condiciones' && <CondicionesDiagram />}

    </div>
  );
};

const LessonLayout: React.FC<LayoutProps> = ({ sections, activeSectionId, onTabChange, children }) => {
  return (
    <div className="grid grid-rows-[auto_1fr] min-h-screen bg-slate-100 font-sans text-slate-800">
      
      {/* Header & Nav Area */}
      <header className="grid grid-rows-[auto_auto] bg-white shadow-sm border-b border-slate-200 z-10 sticky top-0">
        <div className="grid place-content-center p-6 bg-slate-900 text-white">
          <h1 className="text-2xl font-bold tracking-tight text-center">Fundamentos de Decantación</h1>
         
        </div>
        
        {/* Navigation Tabs (Strictly CSS Grid) */}
        <nav className="grid grid-cols-2 md:grid-cols-5 gap-1 p-2 bg-slate-50">
          {sections.map((section) => {
            const isActive = section.id === activeSectionId;
            return (
              <button
                key={section.id}
                onClick={() => onTabChange(section.id)}
                className={`grid place-content-center p-3 text-sm font-semibold rounded-md transition-all duration-200 cursor-pointer outline-none focus:ring-2 focus:ring-blue-500
                  ${isActive 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                  }`}
                aria-selected={isActive}
                role="tab"
              >
                <span className="text-center">{section.title}</span>
              </button>
            );
          })}
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="grid grid-cols-1 p-4 md:p-8 lg:px-24">
        {children}
      </main>
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState<string>(LESSON_SECTIONS[0].id);
  
  const currentSection = LESSON_SECTIONS.find(s => s.id === activeTab) || LESSON_SECTIONS[0];

  return (
    <LessonLayout 
      sections={LESSON_SECTIONS} 
      activeSectionId={activeTab} 
      onTabChange={setActiveTab}
    >
      <Card className="grid grid-rows-[auto_1fr] h-full">
        {/* Panel Header */}
        <div className="grid grid-cols-[1fr_auto] items-start p-6 border-b border-slate-100 bg-white">
          <div className="grid grid-rows-[auto_auto] gap-2">
            <h2 className="text-2xl font-bold text-slate-800">{currentSection.subtitle}</h2>
            <p className="text-slate-600 leading-relaxed max-w-3xl">
              {currentSection.description}
            </p>
          </div>
  
        </div>

        {/* Panel Render Area */}
        <div className="grid place-items-center p-8 bg-slate-50">
          <div className="grid w-full max-w-4xl aspect-video bg-white rounded-xl shadow-inner border border-slate-200 overflow-hidden">
            <DiagramRender sectionId={currentSection.id} />
          </div>
        </div>
      </Card>
    </LessonLayout>
  );
}