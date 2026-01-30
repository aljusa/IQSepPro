import React, { useState } from 'react';
import { Treemap, ResponsiveContainer, Tooltip } from 'recharts';
import { BookOpen, Activity,  ArrowRight, GitFork, CheckCircle,   Layers } from 'lucide-react';
import DivCarousel from '../assets/DivCarousel';

// --- TIPOS E INTERFACES ---

interface TabData {
  id: string;
  label: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  Category: 'Estático' | 'Dinámico' | 'Interactivo';
}



// --- DATOS MOCK ---

const TABS: TabData[] = [
  { 
    id: 'map', 
    label: 'Mapa Conceptual', 
    icon: <Layers size={18} />,
    title: 'Organización de la serie ISO 14617',
    description: (
      <DivCarousel>
        <div> La serie se divide en <strong>15 partes</strong>, cada una dedicada a un <strong>grupo específico de símbolos</strong>.  Cada parte contiene:
        <ul>
          <li>Símbolos</li>
          <li>Reglas de aplicación</li>
          <li>Símbolos complementarios</li>
          <li>Ejemplos</li>
        </ul>
        Esto permite aprender no solo el símbolo, sino su uso correcto.</div>
      
      </DivCarousel>
    ),
    Category: 'Estático'
  },
  { 
    id: 'reg', 
    label: 'Números de Registro', 
    icon: <Activity size={18} />,
    title: 'Diagrama de Números de Registro',
    description: ( <DivCarousel>
      <div>Cada elemento posee un identificador único:
        <ul>
          <li>101 → <strong>símbolo</strong></li>
          <li><strong>R</strong>101 → <strong>regla de aplicación</strong></li>
          <li><strong>X</strong>101 → <strong>ejemplo</strong></li>
        </ul>
        <strong>Que compartan número no implica relación directa</strong>. Esta codificación permite trazabilidad, uso en CAD y evita ambigüedades.</div>
        
      </DivCarousel>
    ),
    Category: 'Dinámico'
  },
  { 
    id: 'comp', 
    label: 'Tabla Comparativa', 
    icon: <BookOpen size={18} />,
    title: 'Comparativa de Símbolos Similares',
    description: (
      <DivCarousel>
        <div><strong>Dos símbolos pueden verse iguales, pero tener significados distintos según su número de registro.</strong>
        <br />
        Los símbolos pueden tener distintas formas (Forma 1, Forma 2, etc.), que indican diferente nivel de información.
        </div>
        
      </DivCarousel>
    ),
    Category: 'Estático'
  },
  { 
    id: 'logic', 
    label: 'Secuencia Lógica', 
    icon: <ArrowRight size={18} />,
    title: 'Reglas y ejemplos de aplicación',
    description: (
      <DivCarousel>
        <div><strong>Las reglas indican:</strong>
        <ul>
          <li>Cómo <strong>combinar símbolos</strong></li>
          <li>Cómo <strong>crear símbolos compuestos</strong></li>
          <li>Cómo <strong>ubicarlos correctamente</strong></li>
        </ul>
        Los<strong> ejemplos no son diseños obligatorios</strong>, sino guías pedagógicas que <strong>muestran aplicaciones típicas</strong>.</div>
        
      </DivCarousel>
    ),
    Category: 'Dinámico'
  },
  { 
    id: 'tree', 
    label: 'Árbol de Decisión', 
    icon: <GitFork size={18} />,
    title: 'Guía de uso de Índices',
    description: (
      <DivCarousel>
        <p> La elección del símbolo depende del tipo de diagrama, nivel de detalle y norma sectorial.
        <br /><br />
        La norma incluye tres índices:
        <ul>
          <li>Alfabético</li>
          <li>Por número de registro</li>
          <li>Índice cruzado con otras normas</li>
        </ul>
        Esto convierte a la ISO 14617 en una herramienta de consulta rápida.</p>
       
      </DivCarousel>
    ),
    Category: 'Interactivo'
  }
];

// Datos para el Treemap
const PARTS_DATA = [
  { name: 'P1: General', size: 20, desc: 'Reglas generales e índices' },
  { name: 'P2: Elementos', size: 10, desc: 'Formas básicas' },
  { name: 'P3: Conexiones', size: 10, desc: 'Tuberías y uniones' },
  { name: 'P4: Actuadores', size: 10, desc: 'Mecanismos de acción' },
  { name: 'P5: Medida', size: 15, desc: 'Instrumentos de control' },
  { name: 'P6: Funciones', size: 15, desc: 'Funciones de medida' },
  { name: 'P7: Componentes', size: 10, desc: 'Mecánicos básicos' },
  { name: 'P8: Válvulas', size: 15, desc: 'Control de flujo' },
  { name: 'P9: Bombas', size: 10, desc: 'Bombas y compresores' },
  { name: 'P10: Convertidores', size: 10, desc: 'Fluidos de potencia' },
  { name: 'P11: Intercambio', size: 10, desc: 'Calor' },
  { name: 'P12: Separación', size: 10, desc: 'Filtros y purificadores' },
  { name: 'P13: Química', size: 10, desc: 'Procesos químicos' },
  { name: 'P14: Transporte', size: 10, desc: 'Materiales sólidos' },
  { name: 'P15: Instalación', size: 10, desc: 'Diagramas de instalación' },
];

// --- COMPONENTES UI BASE (GRID SYSTEM) ---

const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden ${className}`}>
    {children}
  </div>
);



// --- COMPONENTES DE VISUALIZACIÓN ---

// 1. Treemap de las Partes
const VisualizationPartsMap = () => {
  // Custom Content para el Treemap para evitar problemas de renderizado por defecto
  const CustomContent = (props: any) => {
    const { x, y, width, height, name } = props;
    if (width < 50 || height < 50) return null; // Evitar renderizar en cajas muy pequeñas
    return (
      <g>
        <rect x={x} y={y} width={width} height={height} fill="#fff" fillOpacity={0} stroke="#fff" strokeWidth={2} />
        <foreignObject x={x} y={y} width={width} height={height}>
           <div className="h-full w-full p-2 grid place-content-center text-center leading-tight">
             <span className="text-xs font-bold text-slate-600 drop-shadow-md">{name}</span>
           </div>
        </foreignObject>
      </g>
    );
  };

  return (
    <div className="h-[400px] w-full p-4 bg-slate-50">
      <ResponsiveContainer width="100%" height="100%">
        <Treemap
          data={PARTS_DATA}
          dataKey="size"
          aspectRatio={4 / 3}
          stroke="#fff"
          fill="#0a0c0f"
          content={<CustomContent />}
        >
          <Tooltip 
            content={({ payload }) => {
              if (payload && payload.length) {
                const data = payload[0].payload;
                return (
                  <div className="bg-white p-2 border border-slate-200 shadow-lg rounded text-sm">
                    
                    <p className="text-slate-500">{data.desc}</p>
                    
                  </div>
                );
              }
              return null;
            }}
          />
        </Treemap>
      </ResponsiveContainer>
    </div>
  );
};

// 2. Diagrama de Números de Registro
const VisualizationRegNumber = () => {
  return (
    <div className="p-8 bg-slate-50 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
      {/* Columna Símbolo */}
      <div className="grid gap-2 text-center">
        <div className="bg-white p-6 border-2 border-blue-200 rounded-lg shadow-sm grid place-items-center h-32">
          <div className="w-12 h-12 border-2 border-slate-800 rounded-full"></div>
          <span className="mt-2 text-xs text-slate-400 font-mono">Gráfico</span>
        </div>
        <div className="bg-blue-600 text-white py-2 rounded font-mono font-bold">101</div>
        <p className="text-sm font-semibold text-slate-700">Símbolo</p>
        <p className="text-xs text-slate-500">La forma gráfica pura.</p>
        <p>1️⃣ Un símbolo = una función</p>
        <p>Cada símbolo representa una función específica, no un equipo concreto.</p>
        

      </div>

      {/* Columna Regla */}
      <div className="grid gap-2 text-center opacity-70 hover:opacity-100 transition-opacity">
        <div className="bg-white p-6 border-2 border-dashed border-slate-300 rounded-lg shadow-sm grid place-items-center h-32">
          <p className="text-xs text-left w-full text-slate-600">
            "El diámetro debe ser..."<br/>
            "Uso restringido a..."
          </p>
        </div>
        <div className="bg-slate-500 text-white py-2 rounded font-mono font-bold">R101</div>
        <p className="text-sm font-semibold text-slate-700">Regla de Aplicación</p>
        <p className="text-xs text-slate-500">Normativa de uso del 101.</p>
        <p>Define cómo debe utilizarse el símbolo dentro de un diagrama para evitar interpretaciones incorrectas.</p>
     
        
      </div>

       {/* Columna Ejemplo */}
       <div className="grid gap-2 text-center">
        <div className="bg-white p-6 border-2 border-emerald-200 rounded-lg shadow-sm grid place-items-center h-32">
           <div className="grid grid-cols-2 gap-1 w-16">
             <div className="w-6 h-6 border border-slate-800 rounded-full"></div>
             <div className="w-6 h-6 border border-slate-800 rounded-full"></div>
           </div>
           <span className="mt-2 text-xs text-slate-400 font-mono">En contexto</span>
        </div>
        <div className="bg-emerald-600 text-white py-2 rounded font-mono font-bold">X101</div>
        <p className="text-sm font-semibold text-slate-700">Ejemplo de Aplicación</p>
        <p className="text-xs text-slate-500">Implementación real.</p>
        <p>Muestra cómo se usa el símbolo 101 en un caso concreto. <br />
        Integra el símbolo con contexto real: etiquetas, notas, conexiones y entorno.
        <br /> No redefine el símbolo ni la regla: solo demuestra su aplicación correcta.</p>
      </div>
    </div>
  );
};

// 3. Tabla Comparativa (Usando CSS Grid en lugar de <table> HTML para control total)
const VisualizationCompare = () => {
  return (
    <div className="p-4 bg-slate-50">
      <div className="grid grid-cols-[1fr_2fr_2fr] gap-px bg-slate-200 border border-slate-200 rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-slate-100 p-3 font-bold text-slate-700 text-sm">Visual</div>
        <div className="bg-slate-100 p-3 font-bold text-slate-700 text-sm">Registro 201 (Válvula)</div>
        <div className="bg-slate-100 p-3 font-bold text-slate-700 text-sm">Registro 202 (Compuerta)</div>

        {/* Row 1 */}
        <div className="bg-white p-4 grid place-items-center">
          <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[20px] border-b-slate-800"></div>
        </div>
        <div className="bg-white p-4 text-sm text-slate-600">
          <span className="font-mono text-blue-600 block mb-1">No. 201</span>
          Representa una válvula de paso estándar. El vértice toca la línea de flujo.
        </div>
        <div className="bg-white p-4 text-sm text-slate-600">
          <span className="font-mono text-emerald-600 block mb-1">No. 202</span>
          Representa una compuerta manual. Visualmente similar pero el vértice no toca la línea.
        </div>

        {/* Row 2 */}
        <div className="bg-white p-4 grid place-items-center">
          <div className="w-8 h-8 border-2 border-slate-800 rounded-full"></div>
        </div>
        <div className="bg-white p-4 text-sm text-slate-600">
           <span className="font-mono text-blue-600 block mb-1">No. 501</span>
           Tanque genérico atmosférico.
        </div>
        <div className="bg-white p-4 text-sm text-slate-600">
           <span className="font-mono text-emerald-600 block mb-1">No. 505</span>
           Tanque presurizado (línea interior añadida).
        </div>
      </div>
    </div>
  );
};

// 4. Secuencia Lógica
const VisualizationSequence = () => {
  return (
    <div className="p-8 bg-slate-50 overflow-x-auto">
      <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 items-center min-w-[600px]">
        {/* Paso 1 */}
        <div className="bg-white p-4 rounded-lg border-l-4 border-l-blue-500 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
             <div className="bg-blue-100 p-1 rounded"><Activity size={16} className="text-blue-600"/></div>
             <span className="font-bold text-slate-700">Identificar Símbolo</span>
          </div>
          <p className="text-xs text-slate-500">Localizar forma base en partes 2-15.</p>
        </div>

        <ArrowRight className="text-slate-300" />

        {/* Paso 2 */}
        <div className="bg-white p-4 rounded-lg border-l-4 border-l-purple-500 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
             <div className="bg-purple-100 p-1 rounded"><BookOpen size={16} className="text-purple-600"/></div>
             <span className="font-bold text-slate-700">Consultar Reglas</span>
          </div>
          <p className="text-xs text-slate-500">Verificar restricciones de dimensión/giro.</p>
        </div>

        <ArrowRight className="text-slate-300" />

        {/* Paso 3 */}
        <div className="bg-white p-4 rounded-lg border-l-4 border-l-emerald-500 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
             <div className="bg-emerald-100 p-1 rounded"><CheckCircle size={16} className="text-emerald-600"/></div>
             <span className="font-bold text-slate-700">Validar con Ejemplo</span>
          </div>
          <p className="text-xs text-slate-500">Comparar resultado final con sección X.</p>
        </div>
      </div>
      <div className="mt-6 text-center">
        <p className="text-sm italic text-slate-500 bg-slate-100 inline-block px-4 py-2 rounded-full">
          "El símbolo no es válido hasta que cumple su Regla (R) y se asemeja a su Ejemplo (X)"
        </p>
      </div>
    </div>
  );
};

// 5. Árbol de Decisión Interactivo
const VisualizationDecisionTree = () => {
  const [step, setStep] = useState<number>(0);

  const reset = () => setStep(0);

  const Question = ({ text, onYes, onNo }: { text: string, onYes: () => void, onNo: () => void }) => (
    <div className="grid gap-6 text-center animate-in fade-in zoom-in duration-300">
      <h3 className="text-lg font-bold text-slate-800">{text}</h3>
      <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto w-full">
        <button onClick={onYes} className="bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-medium transition-colors">
          Sí
        </button>
        <button onClick={onNo} className="bg-rose-600 hover:bg-rose-700 text-white py-3 rounded-lg font-medium transition-colors">
          No
        </button>
      </div>
    </div>
  );

  const Result = ({ title, desc, action }: { title: string, desc: string, action?: string }) => (
    <div className="text-center animate-in slide-in-from-bottom duration-500">
      <div className="bg-blue-50 w-16 h-16 rounded-full grid place-items-center mx-auto mb-4">
        <CheckCircle className="text-blue-600" size={32} />
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
      <p className="text-slate-600 mb-6">{desc}</p>
      {action && <div className="bg-slate-100 p-3 rounded font-mono text-sm text-slate-700 inline-block">{action}</div>}
      <div className="mt-8">
        <button onClick={reset} className="text-sm text-slate-400 hover:text-slate-600 underline">Reiniciar Consulta</button>
      </div>
    </div>
  );

  return (
    <div className="p-8 bg-slate-50 min-h-[300px] grid place-items-center">
      {step === 0 && (
        <Question 
          text="¿Conoces el nombre funcional del componente? (ej. 'Válvula de bola')" 
          onYes={() => setStep(1)} 
          onNo={() => setStep(2)} 
        />
      )}
      
      {step === 1 && (
        <Result 
          title="Usa el Índice Alfabético" 
          desc="Busca por la letra inicial del componente en la Parte 1 de la norma."
          action="Ir a ISO 14617-1: Índice Alfabético"
        />
      )}

      {step === 2 && (
        <Question 
          text="¿Sabes a qué categoría pertenece? (ej. 'Control', 'Flujo')" 
          onYes={() => setStep(3)} 
          onNo={() => setStep(4)} 
        />
      )}

      {step === 3 && (
        <Result 
          title="Navega por Partes (2-15)" 
          desc="Ve directamente a la parte de la norma que cubre esa categoría."
          action="Ej. Bombas -> Parte 9"
        />
      )}

      {step === 4 && (
        <Result 
          title="Escaneo Visual" 
          desc="Utiliza la tabla resumen de símbolos gráficos en la Parte 1 para identificar la forma."
          action="ISO 14617-1: Anexo A"
        />
      )}
    </div>
  );
};

// --- COMPONENTE LAYOUT PRINCIPAL (CSS GRID PURO) ---

const LessonLayout = () => {
  const [activeTabId, setActiveTabId] = useState<string>(TABS[0].id);

  const activeTab = TABS.find(t => t.id === activeTabId) || TABS[0];

  const renderContent = () => {
    switch (activeTabId) {
      case 'map': return <VisualizationPartsMap />;
      case 'reg': return <VisualizationRegNumber />;
      case 'comp': return <VisualizationCompare />;
      case 'logic': return <VisualizationSequence />;
      case 'tree': return <VisualizationDecisionTree />;
      default: return null;
    }
  };

  return (
    // REGLA 1a: Uso de CSS Grid para layout principal
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans grid grid-rows-[auto_auto_1fr] max-w-5xl mx-auto border-x border-slate-200 shadow-2xl">
      
      {/* HEADER AREA */}
      <header className="bg-white border-b border-slate-200 px-6 py-5 grid grid-cols-[auto_1fr] items-center gap-4">
        <div className="bg-blue-600 p-2 rounded-lg text-white">
          <BookOpen size={24} />
        </div>
        <div>
          <h1 className="text-xl font-bold text-slate-800"> ISO 14617-1</h1>
          
        </div>
      </header>

      {/* NAVIGATION TABS AREA (GRID) */}
      <nav className="bg-white border-b border-slate-200 px-6 pt-2">
        {/* Usamos grid-flow-col para simular un flex row pero con grid riguroso */}
        <div className="grid grid-flow-col auto-cols-max gap-6 overflow-x-auto pb-0">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTabId(tab.id)}
              className={`
                group relative pb-4 text-sm font-medium transition-colors outline-none grid grid-flow-col gap-2 items-center
                ${activeTabId === tab.id ? 'text-blue-600' : 'text-slate-500 hover:text-slate-700'}
              `}
            >
              {tab.icon}
              <span>{tab.label}</span>
              {activeTabId === tab.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-t-full" />
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* MAIN CONTENT AREA */}
      <main className="p-6 bg-slate-50/50">
        <Card className="h-full grid grid-rows-[auto_auto_1fr]">
          
          {/* Section Header */}
          <div className="p-6 border-b border-slate-100 bg-white grid gap-2">
            <div className="grid grid-flow-col justify-between items-start">
               <h2 className="text-2xl font-bold text-slate-800">{activeTab.title}</h2>
            </div>
            <p className="text-slate-600 max-w-3xl leading-relaxed">
              {activeTab.description}
            </p>
          </div>

        

          {/* Dynamic Visualization Render */}
          <div className="relative bg-slate-50 overflow-hidden">
            {renderContent()}
          </div>

        </Card>
      </main>

    </div>
  );
};

// Exportación Default
export default LessonLayout;