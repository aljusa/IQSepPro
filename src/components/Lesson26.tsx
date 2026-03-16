import React, { useState } from 'react';

// --- DEFINICIÓN DE TIPOS ---
interface SectionData {
  id: string;
  shortTitle: string;
  title: string;
  description: string;
  diagramIndex: number;
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface LessonLayoutProps {
  sections: SectionData[];
  activeSectionIndex: number;
  onTabChange: (index: number) => void;
}

interface DiagramRenderProps {
  index: number;
}

// --- DATOS DE LA LECCIÓN ---
const LESSON_DATA: SectionData[] = [
  {
    id: 'papel',
    shortTitle: 'Concepto',
    title: 'El papel del medio filtrante en la filtración',
    description: 'El medio filtrante es el material poroso que permite separar partículas sólidas de un fluido durante el proceso de filtración. Su función es retener los sólidos mientras permite el paso del fluido, lo que determina tanto la eficiencia del proceso como la calidad del filtrado obtenido.',
    diagramIndex: 0
  },
  {
    id: 'clasificacion',
    shortTitle: 'Clasificación',
    title: 'Clasificación general de los medios filtrantes',
    description: 'Los medios filtrantes pueden clasificarse según el material y estructura que utilizan para retener las partículas. En aplicaciones industriales, tres categorías principales son comunes: medios filtrantes textiles, medios filtrantes metálicos y medios filtrantes granulares. Cada tipo se adapta a condiciones específicas de operación y a distintos tamaños de partículas.',
    diagramIndex: 1
  },
  {
    id: 'def-textiles',
    shortTitle: 'Def. Textiles',
    title: 'Definición de medios filtrantes textiles',
    description: 'Los medios filtrantes textiles están fabricados a partir de fibras naturales o sintéticas entrelazadas que forman una estructura porosa capaz de retener partículas sólidas. Este tipo de medio filtrante se utiliza ampliamente debido a su flexibilidad, eficiencia y facilidad de reemplazo.',
    diagramIndex: 2
  },
  {
    id: 'mat-textiles',
    shortTitle: 'Mat. Textiles',
    title: 'Ejemplos de materiales textiles filtrantes',
    description: 'Los medios filtrantes textiles pueden fabricarse con diversos materiales, cada uno con propiedades específicas de resistencia y filtración. Entre los más comunes se encuentran algodón, poliéster, nylon y polipropileno, utilizados según las condiciones químicas y mecánicas del proceso.',
    diagramIndex: 3
  },
  {
    id: 'app-textiles',
    shortTitle: 'App. Textiles',
    title: 'Aplicaciones de los medios filtrantes textiles',
    description: 'Los medios filtrantes textiles se emplean principalmente en equipos industriales como filtros prensa y filtros rotatorios. En estos sistemas, las telas filtrantes actúan como la superficie donde se retienen las partículas sólidas y se forma la torta de filtración.',
    diagramIndex: 4
  },
  {
    id: 'def-metalicos',
    shortTitle: 'Def. Metálicos',
    title: 'Definición de medios filtrantes metálicos',
    description: 'Los medios filtrantes metálicos están construidos con mallas metálicas o placas perforadas que permiten el paso del fluido mientras retienen partículas sólidas de mayor tamaño. Se utilizan cuando se requiere alta resistencia mecánica o condiciones de operación exigentes.',
    diagramIndex: 5
  },
  {
    id: 'caract-metalicos',
    shortTitle: 'Caract. Metálicos',
    title: 'Características de los medios filtrantes metálicos',
    description: 'Los medios filtrantes metálicos destacan por su alta resistencia mecánica, lo que les permite soportar presiones elevadas. También presentan resistencia a altas temperaturas y gran durabilidad, lo que los hace adecuados para procesos industriales severos.',
    diagramIndex: 6
  },
  {
    id: 'def-granulares',
    shortTitle: 'Def. Granulares',
    title: 'Definición de medios filtrantes granulares',
    description: 'Los medios filtrantes granulares están formados por capas de materiales granulares a través de las cuales fluye el fluido. Durante el paso del fluido, las partículas sólidas quedan atrapadas entre los espacios existentes entre los granos del material filtrante.',
    diagramIndex: 7
  },
  {
    id: 'mat-granulares',
    shortTitle: 'Mat. Granulares',
    title: 'Ejemplos de materiales granulares filtrantes',
    description: 'Entre los materiales granulares más utilizados en filtración se encuentran arena, grava y carbón activado. Estos materiales se combinan frecuentemente en diferentes capas para mejorar la eficiencia del proceso de filtración.',
    diagramIndex: 8
  },
  {
    id: 'app-granulares',
    shortTitle: 'App. Granulares',
    title: 'Aplicaciones de los medios filtrantes granulares',
    description: 'Los medios filtrantes granulares se utilizan principalmente en sistemas de tratamiento de agua, donde ayudan a eliminar partículas suspendidas, sedimentos y contaminantes presentes en el líquido.',
    diagramIndex: 9
  },
  {
    id: 'criterios',
    shortTitle: 'Criterios',
    title: 'Criterios para seleccionar un medio filtrante',
    description: 'La selección de un medio filtrante adecuado depende de varias propiedades del proceso. Entre los criterios más importantes se encuentran el tamaño de partícula, la viscosidad del fluido, la temperatura de operación, la resistencia química del material y la facilidad de limpieza o reemplazo.',
    diagramIndex: 10
  },
  {
    id: 'condicion',
    shortTitle: 'Condición Funcional',
    title: 'Condición funcional de un medio filtrante eficiente',
    description: 'Un medio filtrante eficiente debe cumplir dos funciones simultáneas: permitir el paso del fluido con baja resistencia y retener las partículas sólidas con alta eficiencia. El equilibrio entre permeabilidad y capacidad de retención es esencial para lograr un proceso de filtración eficaz.',
    diagramIndex: 11
  }
];

// --- COMPONENTES UI BÁSICOS ---

const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden ${className}`}>
    {children}
  </div>
);

// --- COMPONENTE DE RENDERIZADO DE DIAGRAMAS ---
const DiagramRender: React.FC<DiagramRenderProps> = ({ index }) => {
  // Renderizado dinámico de SVG puro utilizando CSS Grid para el contenedor cuando sea necesario
  // Se mantienen viewBox estándar para asegurar responsiveness

  const renderDiagram = () => {
    switch (index) {
      case 0: // Medio Filtrante Básico
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full max-h-64 object-contain drop-shadow-sm">
            {/* Título/Caja */}
            <rect x="125" y="10" width="150" height="40" rx="6" fill="#1e293b" />
            <text x="200" y="35" textAnchor="middle" fill="white" fontWeight="bold" fontSize="16">Medio Filtrante</text>
            <line x1="200" y1="50" x2="200" y2="80" stroke="#cbd5e1" strokeWidth="2" />
            
            {/* Medio poroso */}
            <rect x="50" y="150" width="300" height="40" rx="4" fill="#cbd5e1" stroke="#64748b" strokeWidth="2" strokeDasharray="8 4" />
            <text x="200" y="175" textAnchor="middle" fill="#334155" fontWeight="bold">Capa Porosa</text>

            {/* Partículas retenidas */}
            <circle cx="100" cy="135" r="8" fill="#854d0e" />
            <circle cx="150" cy="140" r="10" fill="#854d0e" />
            <circle cx="210" cy="130" r="12" fill="#854d0e" />
            <circle cx="270" cy="142" r="7" fill="#854d0e" />
            <circle cx="320" cy="135" r="9" fill="#854d0e" />

            {/* Fluido pasando */}
            <path d="M 120 100 L 120 140" stroke="#3b82f6" strokeWidth="3" strokeDasharray="4 4" />
            <path d="M 200 90 L 200 140" stroke="#3b82f6" strokeWidth="3" strokeDasharray="4 4" />
            <path d="M 280 100 L 280 140" stroke="#3b82f6" strokeWidth="3" strokeDasharray="4 4" />
            
            <path d="M 120 200 L 120 240 M 115 235 L 120 245 L 125 235" stroke="#3b82f6" strokeWidth="3" fill="none"/>
            <path d="M 200 200 L 200 250 M 195 245 L 200 255 L 205 245" stroke="#3b82f6" strokeWidth="3" fill="none"/>
            <path d="M 280 200 L 280 240 M 275 235 L 280 245 L 285 235" stroke="#3b82f6" strokeWidth="3" fill="none"/>
          </svg>
        );
      case 1: // Clasificación (Mapa Conceptual)
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full max-h-64 object-contain drop-shadow-sm">
            {/* Nodo Central */}
            <rect x="110" y="30" width="180" height="40" rx="8" fill="#2563eb" />
            <text x="200" y="55" textAnchor="middle" fill="white" fontWeight="bold">Medios Filtrantes</text>
            
            {/* Líneas conectoras */}
            <path d="M 200 70 L 200 120" stroke="#94a3b8" strokeWidth="2" />
            <path d="M 80 120 L 320 120" stroke="#94a3b8" strokeWidth="2" />
            <path d="M 80 120 L 80 160" stroke="#94a3b8" strokeWidth="2" />
            <path d="M 200 120 L 200 160" stroke="#94a3b8" strokeWidth="2" />
            <path d="M 320 120 L 320 160" stroke="#94a3b8" strokeWidth="2" />

            {/* Nodos Hijos */}
            <rect x="30" y="160" width="100" height="40" rx="6" fill="#f8fafc" stroke="#2563eb" strokeWidth="2" />
            <text x="80" y="185" textAnchor="middle" fill="#1e293b" fontWeight="600">Textiles</text>

            <rect x="150" y="160" width="100" height="40" rx="6" fill="#f8fafc" stroke="#2563eb" strokeWidth="2" />
            <text x="200" y="185" textAnchor="middle" fill="#1e293b" fontWeight="600">Metálicos</text>

            <rect x="270" y="160" width="100" height="40" rx="6" fill="#f8fafc" stroke="#2563eb" strokeWidth="2" />
            <text x="320" y="185" textAnchor="middle" fill="#1e293b" fontWeight="600">Granulares</text>
          </svg>
        );
      case 2: // Textiles Definición
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full max-h-64 object-contain drop-shadow-sm">
            {/* Caja Definición */}
            <rect x="100" y="10" width="200" height="40" rx="6" fill="#10b981" />
            <text x="200" y="35" textAnchor="middle" fill="white" fontWeight="bold">Medios Textiles</text>
            
            {/* Trama Textil (Fibras) */}
            <g stroke="#94a3b8" strokeWidth="12" strokeLinecap="round" opacity="0.8">
              {/* Horizontales */}
              <line x1="80" y1="120" x2="320" y2="120" />
              <line x1="80" y1="160" x2="320" y2="160" />
              <line x1="80" y1="200" x2="320" y2="200" />
              {/* Verticales */}
              <line x1="120" y1="80" x2="120" y2="240" />
              <line x1="160" y1="80" x2="160" y2="240" />
              <line x1="200" y1="80" x2="200" y2="240" />
              <line x1="240" y1="80" x2="240" y2="240" />
              <line x1="280" y1="80" x2="280" y2="240" />
            </g>
            
            {/* Partículas bloqueadas */}
            <circle cx="140" cy="140" r="14" fill="#854d0e" />
            <circle cx="180" cy="100" r="10" fill="#854d0e" />
            <circle cx="260" cy="180" r="12" fill="#854d0e" />
            
            {/* Fluido pasando por los poros */}
            <circle cx="220" cy="140" r="4" fill="#3b82f6" opacity="0.8" />
            <circle cx="220" cy="180" r="4" fill="#3b82f6" opacity="0.8" />
            <circle cx="180" cy="220" r="4" fill="#3b82f6" opacity="0.8" />
          </svg>
        );
      case 3: // Materiales Textiles
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full max-h-64 object-contain drop-shadow-sm">
            <rect x="130" y="20" width="140" height="40" rx="6" fill="#1e293b" />
            <text x="200" y="45" textAnchor="middle" fill="white" fontWeight="bold">Medios Textiles</text>
            
            <path d="M 200 60 L 200 150" stroke="#cbd5e1" strokeWidth="2" />
            <path d="M 100 150 L 300 150" stroke="#cbd5e1" strokeWidth="2" />
            
            {/* Items */}
            <rect x="40" y="100" width="100" height="35" rx="4" fill="#f1f5f9" stroke="#94a3b8" />
            <text x="90" y="122" textAnchor="middle" fill="#0f172a" fontSize="14" fontWeight="600">Algodón</text>

            <rect x="260" y="100" width="100" height="35" rx="4" fill="#f1f5f9" stroke="#94a3b8" />
            <text x="310" y="122" textAnchor="middle" fill="#0f172a" fontSize="14" fontWeight="600">Poliéster</text>

            <rect x="40" y="180" width="100" height="35" rx="4" fill="#f1f5f9" stroke="#94a3b8" />
            <text x="90" y="202" textAnchor="middle" fill="#0f172a" fontSize="14" fontWeight="600">Nylon</text>

            <rect x="260" y="180" width="100" height="35" rx="4" fill="#f1f5f9" stroke="#94a3b8" />
            <text x="310" y="202" textAnchor="middle" fill="#0f172a" fontSize="14" fontWeight="600">Polipropileno</text>

            <path d="M 90 135 L 90 180" stroke="#cbd5e1" strokeWidth="2" />
            <path d="M 310 135 L 310 180" stroke="#cbd5e1" strokeWidth="2" />
            <path d="M 100 150 L 40 150" stroke="#cbd5e1" strokeWidth="2" />
            <path d="M 300 150 L 360 150" stroke="#cbd5e1" strokeWidth="2" />
          </svg>
        );
      case 4: // Aplicaciones Textiles
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full max-h-64 object-contain drop-shadow-sm">
             {/* Filtro Prensa Abstracto */}
            <g transform="translate(60, 100)">
              <text x="60" y="-20" textAnchor="middle" fill="#1e293b" fontWeight="bold">Filtro Prensa</text>
              <rect x="0" y="0" width="120" height="80" fill="#cbd5e1" stroke="#64748b" strokeWidth="2" rx="4" />
              <rect x="20" y="0" width="10" height="80" fill="#3b82f6" opacity="0.3" />
              <rect x="55" y="0" width="10" height="80" fill="#3b82f6" opacity="0.3" />
              <rect x="90" y="0" width="10" height="80" fill="#3b82f6" opacity="0.3" />
              {/* Telas entre placas */}
              <line x1="25" y1="0" x2="25" y2="80" stroke="#10b981" strokeWidth="2" strokeDasharray="2 2" />
              <line x1="60" y1="0" x2="60" y2="80" stroke="#10b981" strokeWidth="2" strokeDasharray="2 2" />
              <line x1="95" y1="0" x2="95" y2="80" stroke="#10b981" strokeWidth="2" strokeDasharray="2 2" />
            </g>

            {/* Tambor Rotatorio Abstracto */}
            <g transform="translate(240, 100)">
               <text x="50" y="-20" textAnchor="middle" fill="#1e293b" fontWeight="bold">Tambor Rotatorio</text>
               <circle cx="50" cy="40" r="40" fill="#f8fafc" stroke="#64748b" strokeWidth="3" />
               <circle cx="50" cy="40" r="30" fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="6 3" />
               <rect x="20" y="80" width="60" height="20" fill="#e2e8f0" />
               <path d="M 50 40 L 75 15" stroke="#94a3b8" strokeWidth="2" />
            </g>
          </svg>
        );
      case 5: // Def Metálicos
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full max-h-64 object-contain drop-shadow-sm">
            <rect x="100" y="10" width="200" height="40" rx="6" fill="#f59e0b" />
            <text x="200" y="35" textAnchor="middle" fill="white" fontWeight="bold">Medios Metálicos</text>
            
            {/* Placa metálica perforada */}
            <rect x="80" y="80" width="240" height="160" rx="8" fill="#cbd5e1" stroke="#475569" strokeWidth="4" />
            
            {/* Orificios Regulares (Grid) */}
            <g fill="#1e293b">
              {[...Array(5)].map((_, row) => (
                [...Array(7)].map((_, col) => (
                  <circle key={`${row}-${col}`} cx={100 + col * 33} cy={100 + row * 30} r="8" />
                ))
              ))}
            </g>
            
            {/* Partículas y fluido */}
            <circle cx="166" cy="130" r="15" fill="#854d0e" /> {/* Atrapada */}
            <circle cx="232" cy="190" r="14" fill="#854d0e" /> {/* Atrapada */}
            <circle cx="100" cy="100" r="5" fill="#3b82f6" /> {/* Pasando */}
            <circle cx="265" cy="160" r="5" fill="#3b82f6" /> {/* Pasando */}
          </svg>
        );
      case 6: // Caract. Metálicos
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full max-h-64 object-contain drop-shadow-sm">
             <circle cx="200" cy="150" r="50" fill="#f59e0b" />
             <text x="200" y="155" textAnchor="middle" fill="white" fontWeight="bold" fontSize="14">Metálicos</text>

             {/* Nodos */}
             <path d="M 200 100 L 200 60" stroke="#94a3b8" strokeWidth="2" />
             <rect x="130" y="20" width="140" height="40" rx="20" fill="#f8fafc" stroke="#f59e0b" strokeWidth="2" />
             <text x="200" y="45" textAnchor="middle" fill="#1e293b" fontWeight="600" fontSize="12">Alta Temperatura</text>

             <path d="M 155 175 L 110 210" stroke="#94a3b8" strokeWidth="2" />
             <rect x="30" y="210" width="140" height="40" rx="20" fill="#f8fafc" stroke="#f59e0b" strokeWidth="2" />
             <text x="100" y="235" textAnchor="middle" fill="#1e293b" fontWeight="600" fontSize="12">Resistencia Mecánica</text>

             <path d="M 245 175 L 290 210" stroke="#94a3b8" strokeWidth="2" />
             <rect x="230" y="210" width="140" height="40" rx="20" fill="#f8fafc" stroke="#f59e0b" strokeWidth="2" />
             <text x="300" y="235" textAnchor="middle" fill="#1e293b" fontWeight="600" fontSize="12">Alta Durabilidad</text>
          </svg>
        );
      case 7: // Def Granulares
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full max-h-64 object-contain drop-shadow-sm">
            <rect x="100" y="10" width="200" height="40" rx="6" fill="#8b5cf6" />
            <text x="200" y="35" textAnchor="middle" fill="white" fontWeight="bold">Medios Granulares</text>

            <rect x="100" y="80" width="200" height="180" fill="#f8fafc" stroke="#475569" strokeWidth="2" />
            
            {/* Granos aleatorios simulados */}
            <g fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1">
              <circle cx="130" cy="110" r="15" /> <circle cx="160" cy="100" r="18" /> <circle cx="195" cy="115" r="14" />
              <circle cx="230" cy="105" r="20" /> <circle cx="270" cy="110" r="16" />
              
              <circle cx="120" cy="150" r="17" /> <circle cx="165" cy="155" r="19" /> <circle cx="210" cy="145" r="16" />
              <circle cx="250" cy="160" r="22" /> <circle cx="280" cy="145" r="14" />
              
              <circle cx="135" cy="195" r="21" /> <circle cx="180" cy="190" r="15" /> <circle cx="225" cy="200" r="18" />
              <circle cx="265" cy="195" r="16" />

              <circle cx="125" cy="235" r="16" /> <circle cx="170" cy="240" r="20" /> <circle cx="215" cy="235" r="15" />
              <circle cx="255" cy="245" r="19" />
            </g>

            {/* Fluido curveando */}
            <path d="M 150 70 Q 140 120 180 150 T 150 210 T 180 270" fill="none" stroke="#3b82f6" strokeWidth="3" />
            <path d="M 230 70 Q 250 120 200 170 T 250 230 T 210 270" fill="none" stroke="#3b82f6" strokeWidth="3" />
          </svg>
        );
      case 8: // Mat Granulares (Capas)
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full max-h-64 object-contain drop-shadow-sm">
            <text x="200" y="30" textAnchor="middle" fill="#1e293b" fontWeight="bold" fontSize="16">Capas Filtrantes</text>
            
            {/* Contenedor */}
            <rect x="120" y="50" width="160" height="210" fill="none" stroke="#475569" strokeWidth="3" rx="4" />
            
            {/* Carbón Activado (Top) */}
            <rect x="120" y="50" width="160" height="70" fill="#334155" />
            <text x="200" y="90" textAnchor="middle" fill="white" fontWeight="600">Carbón Activado</text>

            {/* Arena (Middle) */}
            <rect x="120" y="120" width="160" height="70" fill="#fcd34d" />
            <text x="200" y="160" textAnchor="middle" fill="#78350f" fontWeight="600">Arena</text>

            {/* Grava (Bottom) */}
            <rect x="120" y="190" width="160" height="70" fill="#94a3b8" />
            <text x="200" y="230" textAnchor="middle" fill="#1e293b" fontWeight="600">Grava</text>
          </svg>
        );
      case 9: // App Granulares
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full max-h-64 object-contain drop-shadow-sm">
            <text x="200" y="30" textAnchor="middle" fill="#1e293b" fontWeight="bold" fontSize="16">Planta de Tratamiento</text>
            
            {/* Tanque */}
            <path d="M 100 80 L 100 250 L 300 250 L 300 80" fill="none" stroke="#64748b" strokeWidth="4" />
            
            {/* Agua sucia entrada */}
            <rect x="60" y="90" width="40" height="20" fill="#94a3b8" />
            <path d="M 80 110 L 80 140 M 75 135 L 80 145 L 85 135" stroke="#3b82f6" strokeWidth="3" fill="none" />

            {/* Nivel de agua */}
            <rect x="102" y="120" width="196" height="40" fill="#bfdbfe" opacity="0.7" />
            
            {/* Lechos */}
            <rect x="102" y="160" width="196" height="40" fill="#fcd34d" /> {/* Arena */}
            <rect x="102" y="200" width="196" height="48" fill="#94a3b8" /> {/* Grava */}

            {/* Salida limpia */}
            <rect x="300" y="210" width="40" height="20" fill="#94a3b8" />
            <path d="M 340 220 L 370 220 M 365 215 L 375 220 L 365 225" stroke="#3b82f6" strokeWidth="3" fill="none" />
          </svg>
        );
      case 10: // Criterios de Selección (Radial)
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full max-h-64 object-contain drop-shadow-sm">
            <circle cx="200" cy="150" r="45" fill="#ef4444" />
            <text x="200" y="145" textAnchor="middle" fill="white" fontWeight="bold" fontSize="12">Selección del</text>
            <text x="200" y="160" textAnchor="middle" fill="white" fontWeight="bold" fontSize="12">Medio Filtrante</text>

            <path d="M 200 105 L 200 60" stroke="#94a3b8" strokeWidth="2" />
            <rect x="140" y="30" width="120" height="30" rx="4" fill="#fee2e2" stroke="#ef4444" />
            <text x="200" y="50" textAnchor="middle" fill="#7f1d1d" fontSize="12" fontWeight="600">Tamaño Partícula</text>

            <path d="M 245 135 L 290 110" stroke="#94a3b8" strokeWidth="2" />
            <rect x="290" y="90" width="100" height="30" rx="4" fill="#fee2e2" stroke="#ef4444" />
            <text x="340" y="110" textAnchor="middle" fill="#7f1d1d" fontSize="12" fontWeight="600">Viscosidad</text>

            <path d="M 235 180 L 270 220" stroke="#94a3b8" strokeWidth="2" />
            <rect x="250" y="220" width="120" height="30" rx="4" fill="#fee2e2" stroke="#ef4444" />
            <text x="310" y="240" textAnchor="middle" fill="#7f1d1d" fontSize="12" fontWeight="600">Resistencia Quím.</text>

            <path d="M 165 180 L 130 220" stroke="#94a3b8" strokeWidth="2" />
            <rect x="30" y="220" width="110" height="30" rx="4" fill="#fee2e2" stroke="#ef4444" />
            <text x="85" y="240" textAnchor="middle" fill="#7f1d1d" fontSize="12" fontWeight="600">Limpieza</text>

            <path d="M 155 135 L 110 110" stroke="#94a3b8" strokeWidth="2" />
            <rect x="10" y="90" width="100" height="30" rx="4" fill="#fee2e2" stroke="#ef4444" />
            <text x="60" y="110" textAnchor="middle" fill="#7f1d1d" fontSize="12" fontWeight="600">Temperatura</text>
          </svg>
        );
      case 11: // Equilibrio Funcional
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full max-h-64 object-contain drop-shadow-sm">
             {/* Base de la balanza */}
             <polygon points="200,100 170,250 230,250" fill="#64748b" />
             
             {/* Barra equilibrada */}
             <rect x="50" y="90" width="300" height="10" fill="#1e293b" rx="5" />
             <circle cx="200" cy="95" r="8" fill="#f8fafc" stroke="#1e293b" strokeWidth="2" />

             {/* Plato izquierdo - Permeabilidad */}
             <path d="M 50 100 L 70 160 L 130 160 L 150 100" fill="none" stroke="#94a3b8" strokeWidth="2" />
             <rect x="60" y="160" width="80" height="40" fill="#3b82f6" rx="4" />
             <text x="100" y="185" textAnchor="middle" fill="white" fontWeight="bold" fontSize="12">Permeabilidad</text>

             {/* Plato derecho - Retención */}
             <path d="M 250 100 L 270 160 L 330 160 L 350 100" fill="none" stroke="#94a3b8" strokeWidth="2" />
             <rect x="260" y="160" width="80" height="40" fill="#854d0e" rx="4" />
             <text x="300" y="185" textAnchor="middle" fill="white" fontWeight="bold" fontSize="12">Retención</text>

             <text x="200" y="40" textAnchor="middle" fill="#0f172a" fontWeight="bold" fontSize="16">Equilibrio Funcional Ideal</text>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="grid place-items-center w-full bg-slate-50 p-6 rounded-lg border border-slate-100 h-80">
      {renderDiagram()}
    </div>
  );
};

// --- ESTRUCTURA PRINCIPAL DE LA LECCIÓN (Layout Grid) ---
const LessonLayout: React.FC<LessonLayoutProps> = ({ sections, activeSectionIndex, onTabChange }) => {
  const currentSection = sections[activeSectionIndex];

  return (
    // Layout principal en CSS Grid: Filas para Título/Tabs y el Contenido Principal
    <div className="grid grid-rows-[auto_1fr] h-screen w-full bg-slate-100 font-sans text-slate-800">
      
      {/* HEADER: Título y Navegación */}
      <header className="grid grid-rows-[auto_auto] gap-2 bg-white shadow-sm border-b border-slate-200 p-4 md:px-8 z-10">
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">
Medios Filtrantes        </h1>
        
        {/* Navegación por pestañas mediante CSS Grid (sin botones Next/Prev) */}
        <nav className="grid grid-cols-5 gap-2 mt-2">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => onTabChange(index)}
              className={`
                px-3 py-2 text-sm font-semibold rounded-md transition-all duration-200 text-center truncate
                ${activeSectionIndex === index 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'}
              `}
              title={section.title} // Tooltip natural para textos largos
            >
              {section.shortTitle}
            </button>
          ))}
        </nav>
      </header>

      {/* ÁREA DE CONTENIDO PRINCIPAL */}
      <main className="grid place-items-start justify-center p-6 ">
        <Card className="w-full max-w-5xl grid grid-rows-[auto_auto_1fr] gap-6 p-6 md:p-8">
          
          {/* Título del Panel Actual */}
          <div className="grid gap-2 border-b border-slate-100 pb-4">
            <h2 className="text-2xl font-bold text-slate-900">
              {currentSection.title}
            </h2>
            <div className="w-16 h-1 bg-blue-500 rounded-full"></div>
          </div>

          {/* Descripción Conceptual */}
          <div className="grid gap-4">
            <p className="text-lg text-slate-700 leading-relaxed">
              {currentSection.description}
            </p>
          </div>

          {/* Renderizado de Diagrama (Sugerencia Visual) */}
          <div className="grid grid-rows-[auto_1fr] gap-4 mt-4">
            <DiagramRender index={currentSection.diagramIndex} />
          </div>

        </Card>
      </main>
    </div>
  );
};

// --- COMPONENTE RAÍZ ---
export default function App() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <LessonLayout 
      sections={LESSON_DATA} 
      activeSectionIndex={activeTabIndex} 
      onTabChange={setActiveTabIndex} 
    />
  );
}