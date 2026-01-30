import React, { useState } from 'react';
import { 
  Maximize2, 
  MousePointer2, 
  Layout,
  CheckCircle2,
  XCircle,
  Activity,
} from 'lucide-react';
import DivCarousel from '../assets/DivCarousel';

// --- Tipos e Interfaces ---

interface Section {
  id: string;
  title: string;
  description: React.ReactNode;
  type: 'static' | 'dynamic' | 'interactive';
  icon: React.ElementType;
}

// --- Datos de la Lección ---

const sections: Section[] = [
  {
    id: 'comparison',
    title: 'Alcance y finalidad de la norma ISO 10628-2',
    description: (
      <DivCarousel>
        <p>
          La norma ISO 10628-2 define símbolos gráficos que deben utilizarse en los diagramas de proceso de la industria química y petroquímica. Es decir, especifica cómo debe dibujarse cada equipo o elemento del proceso para que su representación sea clara y uniforme.
        </p>
        <div>  <p>
          Cuando la norma habla de alcance, se refiere a hasta dónde aplica. En este caso:
        </p>
        <ul>
          <li>Aplica únicamente a diagramas de proceso.</li>
          <li>Está dirigida a la industria química y petroquímica.</li>
          <li>No aplica a diagramas eléctricos o electrotécnicos, ya que esos usan otros sistemas de símbolos.</li>
        </ul></div>
      <div> <p>
          La finalidad de la norma es:
        </p>
        <ul>
          <li>Evitar interpretaciones diferentes de un mismo símbolo.</li>
          <li>Facilitar la lectura de diagramas complejos.</li>
          <li>Establecer un estándar internacional común.</li>
        </ul></div>
       
        <p>
          En términos simples, la norma busca que todos “lean” los diagramas de la misma manera.
        </p>
      </DivCarousel>
    ),
    type: 'static',
    icon: Layout
  },
  {
    id: 'relations',
    title: 'Relación con otras normas técnicas',
    description: (
      <DivCarousel>
        <p>
          La ISO 10628-2 no funciona de manera aislada. El documento indica que forma parte de un conjunto de normas relacionadas con la documentación técnica.
        </p>
        <div> <p>
          Entre estas normas se incluyen:
        </p>
        <ul>
          <li>Normas de vocabulario técnico, que definen el significado exacto de los términos usados.</li>
          <li>Normas generales de símbolos gráficos para diagramas, que establecen reglas comunes.</li>
          <li>Normas sobre diseño y proporciones, que indican cómo deben dibujarse los símbolos para mantener coherencia visual.</li>
        </ul></div>
       <div>     <p>
          Esto significa que los símbolos:
        </p>
        <ul>
          <li>No solo deben verse iguales.</li>
          <li>También deben significar lo mismo en distintos documentos técnicos.</li>
        </ul></div>
   
        <p>
          La interrelación entre normas garantiza que los diagramas sean coherentes tanto visual como conceptualmente.
        </p>
      </DivCarousel>
    ),
    type: 'dynamic',
    icon: Activity
  },
  {
    id: 'anatomy',
    title: 'Estructura general de los símbolos gráficos',
    description: (
      <DivCarousel>
       
        <p>
          La norma establece que cada símbolo gráfico tiene una estructura común, lo que facilita su identificación y uso correcto.
        </p> 
        <div>  <p>
          Esta estructura incluye:
        </p>
        <ul>
          <li><strong>Representación gráfica:</strong> Es el dibujo esquemático del equipo. No es un dibujo realista, sino una forma simplificada que representa su función.</li>
          <li><strong>Número de registro:</strong> Es un código normativo que identifica oficialmente al símbolo. Sirve para referencia técnica y documentación.</li>
          <li><strong>Descripción:</strong> Es el nombre técnico del equipo o elemento que representa el símbolo.</li>
          <li><strong>Ubicación de conexiones:</strong> La norma indica posiciones preferentes para entradas y salidas de flujo. Estas posiciones ayudan a entender cómo circulan los materiales dentro del proceso.</li>
        </ul></div>
      
        <p>
          Gracias a esta estructura, un símbolo puede ser reconocido independientemente del diagrama o del país donde se utilice.
        </p>
      </DivCarousel>
    ),
    type: 'static',
    icon: Maximize2
  },
  {
    id: 'functional',
    title: 'Clasificación de los símbolos por grupos funcionales',
    description: (
      <DivCarousel>
        <p>
          La norma organiza los símbolos en grupos temáticos, también llamados grupos funcionales. Esto significa que los símbolos se agrupan según la función del equipo dentro del proceso.
        </p>
        <div> <p>
          Algunos de los grupos definidos en la norma son:
        </p>
        <ul>
          <li>Recipientes y tanques.</li>
          <li>Columnas con internos.</li>
          <li>Intercambiadores de calor.</li>
          <li>Generadores de vapor y hornos.</li>
          <li>Equipos de separación y filtración, entre otros.</li>
        </ul>
        </div>
       <div> 
        <p>
          Esta clasificación cumple dos funciones importantes:
        </p>
        <ul>
          <li>Facilita la búsqueda rápida de un símbolo dentro de la norma.</li>
          <li>Refuerza la lógica funcional del diagrama, ayudando a entender el proceso completo.</li>
        </ul>
        
   
        <p>
          En palabras simples, los símbolos no están ordenados al azar, sino según lo que hacen dentro del proceso industrial.
        </p>
        </div>
      </DivCarousel>
    ),
    type: 'interactive',
    icon: MousePointer2
  }
];

// --- Componentes de UI Base ---

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden ${className}`}>
    {children}
  </div>
);

// --- Componentes de Diagramas ---

// 1. Diagrama Estático: Comparación
const ComparisonDiagram = () => (
  <div className="w-full h-96 grid grid-cols-2 gap-8 p-6 bg-slate-50">
    {/* Panel No Estandarizado */}
    <div className="relative border-2 border-dashed border-red-300 rounded-lg p-4 bg-red-50/30">
      <div className="absolute top-2 right-2 text-red-500 flex items-center gap-2">
        <span className="text-xs font-bold uppercase">Sin Norma</span>
        <XCircle size={20} />
      </div>
      <div className="h-full grid place-items-center opacity-70">
        <svg viewBox="0 0 200 200" className="w-full h-full max-w-[200px]">
          {/* Dibujos irregulares simulando falta de estándar */}
          <path d="M20,50 Q50,10 90,60 T150,50" fill="none" stroke="#ef4444" strokeWidth="2" />
          <rect x="30" y="80" width="50" height="40" fill="none" stroke="#ef4444" strokeWidth="2" transform="rotate(-10 55 100)" />
          <circle cx="140" cy="120" r="25" fill="none" stroke="#ef4444" strokeWidth="2" />
          <text x="20" y="180" className="text-[10px] fill-red-800 font-serif">"Tanque (?)"</text>
          <text x="120" y="30" className="text-[10px] fill-red-800 font-serif">"Flujo"</text>
        </svg>
      </div>
    </div>

    {/* Panel Estandarizado */}
    <div className="relative border-2 border-green-300 rounded-lg p-4 bg-green-50/30">
      <div className="absolute top-2 right-2 text-green-600 flex items-center gap-2">
        <span className="text-xs font-bold uppercase">ISO 10628</span>
        <CheckCircle2 size={20} />
      </div>
      <div className="h-full grid place-items-center">
        <svg viewBox="0 0 200 200" className="w-full h-full max-w-[200px]">
          {/* Símbolos Técnicos Correctos */}
          {/* Recipiente */}
          <path d="M40,60 L40,140 M100,60 L100,140 M40,140 Q70,160 100,140 M40,60 Q70,80 100,60 M40,60 Q70,40 100,60" fill="none" stroke="#16a34a" strokeWidth="2" />
          {/* Línea de flujo */}
          <line x1="100" y1="100" x2="160" y2="100" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arrowhead)" />
          {/* Válvula */}
          <path d="M120,100 L130,90 L130,110 Z M140,100 L130,90 L130,110 Z" fill="#16a34a" transform="translate(10,0)" />
          
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#16a34a" />
            </marker>
          </defs>
          <text x="45" y="170" className="text-[10px] fill-green-800 font-mono">C-01 (Recipiente)</text>
        </svg>
      </div>
    </div>
  </div>
);

// 2. Diagrama Dinámico: Relaciones
const DynamicRelations = () => (
  <div className="w-full h-96 bg-slate-900 rounded-lg p-8 relative overflow-hidden grid place-items-center">
    {/* Fondo animado sutil */}
    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-slate-900 to-slate-900"></div>
    
    <div className="relative w-full max-w-lg h-full">
      {/* Nodo Central */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="bg-blue-600 text-white w-32 h-32 rounded-full grid place-items-center shadow-[0_0_30px_rgba(37,99,235,0.5)] border-4 border-blue-400 animate-pulse">
          <div className="text-center">
            <div className="font-bold text-lg">ISO 10628</div>
            <div className="text-[10px] opacity-80">Diagramas de Flujo</div>
          </div>
        </div>
      </div>

      {/* Nodos Satélite con Animación CSS */}
      {/* Nodo 1 */}
      <div className="absolute top-10 left-10 animate-[bounce_3s_infinite]">
        <div className="bg-slate-700 text-slate-200 px-4 py-2 rounded border border-slate-600">
          <div className="font-bold text-sm">ISO 14617</div>
          <div className="text-[10px]">Símbolos Gráficos</div>
        </div>
        <svg className="absolute top-full left-1/2 w-24 h-24 stroke-blue-500/50 fill-none pointer-events-none transform rotate-45">
          <path d="M0,0 Q10,50 80,80" className="animate-[dash_2s_linear_infinite]" strokeDasharray="5" />
        </svg>
      </div>

      {/* Nodo 2 */}
      <div className="absolute top-10 right-10 animate-[bounce_4s_infinite]">
        <div className="bg-slate-700 text-slate-200 px-4 py-2 rounded border border-slate-600">
          <div className="font-bold text-sm">ISO 15519</div>
          <div className="text-[10px]">Esquemas de Instrumentos</div>
        </div>
      </div>

      {/* Nodo 3 */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-[bounce_3.5s_infinite]">
        <div className="bg-slate-700 text-slate-200 px-4 py-2 rounded border border-slate-600">
          <div className="font-bold text-sm">ISO 81346</div>
          <div className="text-[10px]">Sistemas Industriales</div>
        </div>
      </div>

      {/* Líneas de conexión animadas (SVG overlay) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
        <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="2" strokeDasharray="4" />
        <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="2" strokeDasharray="4" />
        <line x1="50%" y1="50%" x2="50%" y2="80%" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="2" strokeDasharray="4" />
      </svg>
    </div>
  </div>
);

// 3. Diagrama Estático: Anatomía
const AnatomyDiagram = () => (
  <div className="w-full h-96 bg-white p-8 grid grid-cols-12 gap-4">
    <div className="col-span-8 relative border border-slate-100 rounded bg-slate-50 grid place-items-center">
      <div className="relative w-64 h-64">
        {/* Símbolo Central: Válvula de Compuerta */}
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
          <path d="M20,50 L40,20 L40,80 Z" fill="#334155" />
          <path d="M80,50 L60,20 L60,80 Z" fill="#334155" />
          <circle cx="50" cy="50" r="5" fill="#f8fafc" stroke="#334155" strokeWidth="2" />
          <line x1="50" y1="50" x2="50" y2="15" stroke="#334155" strokeWidth="2" />
          <line x1="40" y1="15" x2="60" y2="15" stroke="#334155" strokeWidth="2" />
          
          {/* Puntos de conexión (Highlights) */}
          <circle cx="20" cy="50" r="3" fill="#ef4444" className="animate-pulse" />
          <circle cx="80" cy="50" r="3" fill="#ef4444" className="animate-pulse" />
        </svg>

        {/* Labels con líneas conectoras */}
        {/* Parte Gráfica */}
        <div className="absolute top-0 right-0 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded border border-blue-200">
          Representación Gráfica
        </div>
        <svg className="absolute inset-0 pointer-events-none">
          <line x1="75%" y1="10%" x2="60%" y2="30%" stroke="#93c5fd" strokeWidth="1" />
        </svg>

        {/* Puntos de Conexión */}
        <div className="absolute bottom-10 left-0 bg-red-100 text-red-800 text-xs px-2 py-1 rounded border border-red-200">
          Puntos de Conexión
        </div>
        <svg className="absolute inset-0 pointer-events-none">
          <line x1="25%" y1="80%" x2="22%" y2="55%" stroke="#fca5a5" strokeWidth="1" />
        </svg>
      </div>
    </div>
    
    <div className="col-span-4 grid grid-rows-3 gap-2">
        <div className="bg-slate-100 p-3 rounded text-sm border-l-4 border-blue-500">
            <div className="font-bold text-slate-700">Reg. No. 2011</div>
            <div className="text-slate-500 text-xs">Identificador único en la base de datos ISO.</div>
        </div>
        <div className="bg-slate-100 p-3 rounded text-sm border-l-4 border-slate-500">
            <div className="font-bold text-slate-700">Descripción</div>
            <div className="text-slate-500 text-xs">Válvula de compuerta, operación manual.</div>
        </div>
         <div className="bg-slate-100 p-3 rounded text-sm border-l-4 border-red-500">
            <div className="font-bold text-slate-700">Conectividad</div>
            <div className="text-slate-500 text-xs">Flujo bidireccional estándar.</div>
        </div>
    </div>
  </div>
);

// 4. Diagrama Interactivo: Grupos Funcionales

const FunctionalGroupsDiagram = () => {
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  /* ================= SVGs ================= */

  const GateValveSVG = () => (
   <img
  data-src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Valve%2C_gate_type_-_ISO_10628-2.svg/250px-Valve%2C_gate_type_-_ISO_10628-2.svg.png"
  alt="Valve, gate type - ISO 10628-2.svg"
  className="sd-image"
  loading="lazy"
  style={{
    height: "100%",
    maxWidth: "180px",
    maxHeight: "180px",
  }}
  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Valve%2C_gate_type_-_ISO_10628-2.svg/250px-Valve%2C_gate_type_-_ISO_10628-2.svg.png"
/>
  );

   const CheckValveSVG = () => (
     <img
    data-src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Check_valve_%28general%29_%28ISO_10628-2%29.svg/500px-Check_valve_%28general%29_%28ISO_10628-2%29.svg.png"
    alt="Check valve (general) (ISO 10628-2).svg"
    className="sd-image"
    loading="lazy"
    style={{
      height: "100%",
      maxWidth: "50px",
      maxHeight: "25px",
    }}
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Check_valve_%28general%29_%28ISO_10628-2%29.svg/500px-Check_valve_%28general%29_%28ISO_10628-2%29.svg.png"
  />
  );

  const GlobeValveSVG = () => (
     <img
    data-src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Valve%2C_globe_type_-_ISO_10628-2.svg/250px-Valve%2C_globe_type_-_ISO_10628-2.svg.png"
    alt="Valve, globe type - ISO 10628-2.svg"
    className="sd-image"
    loading="lazy"
    style={{
      height: "100%",
     
      maxWidth: "180px",
      maxHeight: "180px",
    }}
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Valve%2C_globe_type_-_ISO_10628-2.svg/250px-Valve%2C_globe_type_-_ISO_10628-2.svg.png"
  />
  );
  const TankSVG = () => (
     <img
  data-src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Tank%2C_vessel_-_ISO_10628-2.svg/250px-Tank%2C_vessel_-_ISO_10628-2.svg.png"
  alt="Tank, vessel - ISO 10628-2.svg"
  className="sd-image"
  loading="lazy"
  style={{
    height: "100%",
    maxWidth: "206px",
    maxHeight: "206px",
  }}
  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Tank%2C_vessel_-_ISO_10628-2.svg/250px-Tank%2C_vessel_-_ISO_10628-2.svg.png"
/>
  );
   const ReactorSVG = () => (
   <img
  data-src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Vessel_with_dished_ends_and_heating_or_cooling_-_ISO_10628-2.svg/250px-Vessel_with_dished_ends_and_heating_or_cooling_-_ISO_10628-2.svg.png"
  alt="Vessel with dished ends and heating or cooling - ISO 10628-2.svg"
  className="sd-image"
  loading="lazy"
  style={{
    height: "100%",
    maxWidth: "206px",
    maxHeight: "206px",
  }}
  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Vessel_with_dished_ends_and_heating_or_cooling_-_ISO_10628-2.svg/250px-Vessel_with_dished_ends_and_heating_or_cooling_-_ISO_10628-2.svg.png"
/>

  );
   const ColumnSVG = () => (
    <img
  data-src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Column_%28general%29_-_ISO_10628-2.svg/250px-Column_%28general%29_-_ISO_10628-2.svg.png"
  alt="Column (general) - ISO 10628-2.svg"
  className="sd-image"
  loading="lazy"
  style={{
    height: "100%",
    maxWidth: "206px",
    maxHeight: "206px",
  }}
  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Column_%28general%29_-_ISO_10628-2.svg/250px-Column_%28general%29_-_ISO_10628-2.svg.png"
/>

  );
   const CentrifugalSVG = () => (
    <img
  data-src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Pump%2C_centrifugal_type_%28ISO_10628-2%29.svg/500px-Pump%2C_centrifugal_type_%28ISO_10628-2%29.svg.png"
  alt="Pump, centrifugal type (ISO 10628-2).svg"
  className="sd-image"
  loading="lazy"
  style={{
    height: "80%",
    maxWidth: "339px",
    maxHeight: "180px",
  }}
  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Pump%2C_centrifugal_type_%28ISO_10628-2%29.svg/500px-Pump%2C_centrifugal_type_%28ISO_10628-2%29.svg.png"
/>

  );

   const PositiveSVG = () => (
    <img
  data-src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Pump%2C_liquid_type_%28general%29_%28ISO_10628-2%29.svg/500px-Pump%2C_liquid_type_%28general%29_%28ISO_10628-2%29.svg.png"
  alt="Pump, liquid type (general) (ISO 10628-2).svg"
  className="sd-image"
  loading="lazy"
  style={{
    height: "80%",
    maxWidth: "339px",
    maxHeight: "180px",
  }}
  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Pump%2C_liquid_type_%28general%29_%28ISO_10628-2%29.svg/500px-Pump%2C_liquid_type_%28general%29_%28ISO_10628-2%29.svg.png"
/>

  );

  const FanSVG = () => (
    <img
  data-src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Blower%2C_fan_%28general%29_%28ISO_10628-2%29.svg/500px-Blower%2C_fan_%28general%29_%28ISO_10628-2%29.svg.png"
  alt="Blower, fan (general) (ISO 10628-2).svg"
  className="sd-image"
  loading="lazy"
  style={{
    height: "80%",
    maxWidth: "339px",
    maxHeight: "180px",
  }}
  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Blower%2C_fan_%28general%29_%28ISO_10628-2%29.svg/500px-Blower%2C_fan_%28general%29_%28ISO_10628-2%29.svg.png"
/>

  );

  /* ========== MAPA id → SVG ========== */

  const symbolIcons: Record<string, React.ReactNode> = {
    gate: <GateValveSVG />,
    globe: <GlobeValveSVG />,
    check: <CheckValveSVG />,
    tank: <TankSVG />,
    reactor: <ReactorSVG />,
    column: <ColumnSVG />,
    centrifugal: <CentrifugalSVG />,
    positive: <PositiveSVG />,
    fan: <FanSVG />,
  };

  /* ================= DATA ================= */

  const groups = [
    {
      id: 'valves',
      label: 'Válvulas y Accesorios',
      symbols: [
        { id: 'gate', label: 'Compuerta' },
        { id: 'globe', label: 'Globo' },
        { id: 'check', label: 'Retención' },
      ],
    },
    {
      id: 'vessels',
      label: 'Tanques y Recipientes',
      symbols: [
        { id: 'tank', label: 'Tanque Atmosférico' },
        { id: 'reactor', label: 'Reactor' },
        { id: 'column', label: 'Columna' },
      ],
    },
    {
      id: 'pumps',
      label: 'Bombas y Compresores',
      symbols: [
        { id: 'centrifugal', label: 'Centrífuga' },
        { id: 'positive', label: 'Desplazamiento +' },
        { id: 'fan', label: 'Ventilador' },
      ],
    },
  ];

  /* ================= UI ================= */

  return (
    <div className="w-full h-96 grid grid-cols-12 gap-4 p-4 bg-slate-50">
      {/* Columna de Categorías */}
      <div className="col-span-4 flex flex-col gap-3">
        {groups.map(group => (
          <button
            key={group.id}
            onClick={() => setActiveGroup(group.id)}
            className={`p-4 rounded-lg text-left transition-all duration-300 border-l-4 ${
              activeGroup === group.id
                ? 'bg-white shadow-md border-slate-800 translate-x-2'
                : 'bg-slate-100 border-transparent hover:bg-slate-200'
            }`}
          >
            <div className="font-bold text-slate-700">{group.label}</div>
            <div className="text-xs text-slate-400 mt-1">Click para explorar</div>
          </button>
        ))}
      </div>

      {/* Área de Visualización */}
      <div className="col-span-8 bg-white rounded-lg border border-slate-200 p-6 grid place-items-center">
        {activeGroup ? (
          <div className="w-full h-full flex flex-col justify-center items-center gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-xl font-bold text-slate-800 border-b pb-2">
              Símbolos: {groups.find(g => g.id === activeGroup)?.label}
            </h3>

            <div className="grid grid-cols-3 gap-4 w-full">
              {groups
                .find(g => g.id === activeGroup)
                ?.symbols.map(sym => (
                  <div
                    key={sym.id}
                    className="aspect-square bg-slate-50 rounded border border-slate-200 flex flex-col items-center justify-center p-2 hover:shadow-lg transition-shadow"
                  >
                    {symbolIcons[sym.id]}
                    <span className="text-xs text-center font-medium text-slate-600 mt-2">
                      {sym.label}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        ) : (
          <div className="text-center text-slate-400">
            <MousePointer2 className="mx-auto mb-2 w-12 h-12 opacity-50" />
            <p>Seleccione un grupo funcional para ver los ejemplos.</p>
          </div>
        )}
      </div>
    </div>
  );
};


// --- Componente de Layout Principal ---

const LessonLayout: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>(sections[0].id);

  const activeSection = sections.find(s => s.id === activeTabId) || sections[0];

  const renderDiagram = () => {
    switch (activeSection.id) {
      case 'comparison': return <ComparisonDiagram />;
      case 'relations': return <DynamicRelations />;
      case 'anatomy': return <AnatomyDiagram />;
      case 'functional': return <FunctionalGroupsDiagram />;
      default: return <div>Diagrama no encontrado</div>;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-6">
        
        {/* 1. Header Area (Grid Span 12) */}
        <header className="col-span-12 bg-slate-900 text-white rounded-xl p-6 shadow-lg flex justify-between items-center">
          <div>
            
            <h1 className="text-2xl md:text-3xl font-bold">Norma ISO 10628-2</h1>
            <p className="text-slate-400 text-sm mt-1">Diagramas para la industria química y petroquímica</p>
          </div>
          
        </header>

        {/* 2. Navigation Tabs (Grid Span 12) */}
        <nav className="col-span-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-white p-2 rounded-lg shadow-sm">
                {sections.map((section) => {
                    const Icon = section.icon;
                    const isActive = activeTabId === section.id;
                    return (
                        <button
                            key={section.id}
                            onClick={() => setActiveTabId(section.id)}
                            className={`
                                flex items-center justify-center gap-2 py-3 px-4 rounded-md transition-all duration-200 font-medium text-sm
                                ${isActive 
                                    ? 'bg-blue-50 text-blue-700 shadow-sm ring-1 ring-blue-200' 
                                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'}
                            `}
                        >
                            <Icon size={16} />
                            <span className="truncate">{section.title}</span>
                        </button>
                    );
                })}
            </div>
        </nav>

        {/* 3. Main Content Area (Grid Span 12) */}
        <main className="col-span-12 gap-6">
            
            {/* Info Panel */}
            <div className="col-span-12 lg:col-span-4 space-y-4">
                <Card className="p-6 h-full border-t-4 border-t-blue-500">
                    
                    <h2 className="text-2xl font-bold text-slate-800 mb-4">{activeSection.title}</h2>
                    <p className="text-slate-600 leading-relaxed text-lg">
                        {activeSection.description}
                    </p>
                    
                   
                </Card>
            </div>

            {/* Diagram Render Panel */}
            <div className="col-span-12 lg:col-span-8">
                <Card className="h-full min-h-[400px]">
                   
                    {/* Renderizado Condicional del Diagrama */}
                    {renderDiagram()}
                </Card>
            </div>

        </main>
      </div>
    </div>
  );
};

export default LessonLayout;