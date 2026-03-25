import React from 'react';
import { 
  Wind, 
  ArrowDown, 
  ArrowUp, 
  Factory, 
  Wheat, 
  Pill, 
  Pickaxe, 
  Settings, 
  RefreshCw,
  ArrowRight,
  Box,
  Activity
} from 'lucide-react';

// --- Visual Components ---

const DiagramaGeneral = () => (
  <div className="relative w-full h-64 bg-slate-50 rounded-xl border-2 border-slate-200 flex items-center justify-center p-4 overflow-hidden">
    {/* Contenedor principal del clasificador */}
    <div className="relative w-32 h-48 border-4 border-slate-700 rounded-t-full rounded-b-lg flex flex-col items-center justify-center bg-white z-10">
      <span className="text-xs font-bold text-slate-500 mt-8">Cámara de<br/>Clasificación</span>
    </div>
    
    {/* Flechas de entrada/salida */}
    {/* Entrada de material */}
    <div className="absolute top-4 left-1/2 -translate-x-1/2 flex flex-col items-center text-amber-600 animate-bounce">
      <span className="text-xs font-bold bg-white px-1 rounded">Entrada Partículas</span>
      <ArrowDown size={24} />
    </div>
    
    {/* Entrada de Aire */}
    <div className="absolute bottom-12 left-8 flex items-center text-blue-500">
      <span className="text-xs font-bold mr-1 bg-white px-1 rounded">Aire</span>
      <ArrowRight size={24} />
      <Wind size={24} className="animate-pulse" />
    </div>

    {/* Salida Finos */}
    <div className="absolute top-12 right-12 flex flex-col items-center text-blue-600">
      <ArrowUp size={24} />
      <span className="text-xs font-bold bg-white px-1 rounded">Partículas Finas</span>
      <div className="flex gap-1 mt-1">
        <div className="w-1 h-1 bg-blue-500 rounded-full animate-ping"></div>
        <div className="w-1 h-1 bg-blue-500 rounded-full animate-ping delay-75"></div>
        <div className="w-1 h-1 bg-blue-500 rounded-full animate-ping delay-150"></div>
      </div>
    </div>

    {/* Salida Gruesos */}
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center text-amber-800">
      <ArrowDown size={24} />
      <span className="text-xs font-bold bg-white px-1 rounded">Partículas Gruesas</span>
      <div className="flex gap-1 mt-1">
        <div className="w-3 h-3 bg-amber-800 rounded-full"></div>
        <div className="w-2.5 h-2.5 bg-amber-800 rounded-full"></div>
      </div>
    </div>
  </div>
);

const DiagramaFuerzas = () => (
  <div className="w-full h-64 bg-slate-50 rounded-xl border-2 border-slate-200 flex items-center justify-around p-4">
    {/* Partícula Pequeña */}
    <div className="flex flex-col items-center relative">
      <div className="absolute -top-16 text-blue-500 flex flex-col items-center">
        <span className="text-xs font-bold mb-1">Arrastre (F_a)</span>
        <ArrowUp size={48} strokeWidth={3} />
      </div>
      <div className="w-8 h-8 bg-amber-500 rounded-full z-10 shadow-lg border-2 border-amber-600 flex items-center justify-center text-[10px] text-white font-bold">Fina</div>
      <div className="absolute -bottom-8 text-red-500 flex flex-col items-center">
        <ArrowDown size={16} strokeWidth={3} />
        <span className="text-xs font-bold mt-1">Peso (P)</span>
      </div>
      <div className="mt-12 text-sm font-semibold text-slate-600 bg-blue-100 px-3 py-1 rounded-full">F_a {'>'} P (Sube)</div>
    </div>

    {/* Partícula Grande */}
    <div className="flex flex-col items-center relative">
      <div className="absolute -top-8 text-blue-500 flex flex-col items-center">
        <span className="text-xs font-bold mb-1">Arrastre (F_a)</span>
        <ArrowUp size={24} strokeWidth={3} />
      </div>
      <div className="w-16 h-16 bg-amber-700 rounded-full z-10 shadow-lg border-2 border-amber-800 flex items-center justify-center text-xs text-white font-bold">Gruesa</div>
      <div className="absolute -bottom-16 text-red-500 flex flex-col items-center">
        <ArrowDown size={48} strokeWidth={3} />
        <span className="text-xs font-bold mt-1">Peso (P)</span>
      </div>
      <div className="mt-20 text-sm font-semibold text-slate-600 bg-red-100 px-3 py-1 rounded-full">P {'>'} F_a (Cae)</div>
    </div>
  </div>
);

const DiagramaMecanismo = () => (
  <div className="w-full h-64 bg-blue-50 rounded-xl border-2 border-blue-200 overflow-hidden relative">
    <div className="absolute inset-0 opacity-20 flex flex-col justify-around">
      <div className="w-full h-2 bg-blue-400 animate-pulse"></div>
      <div className="w-full h-2 bg-blue-400 animate-pulse delay-75"></div>
      <div className="w-full h-2 bg-blue-400 animate-pulse delay-150"></div>
    </div>
    
    <div className="absolute top-1/2 left-4 -translate-y-1/2 flex items-center text-blue-700 font-bold">
      Flujo de Aire <Wind className="ml-2" />
    </div>

    {/* Partículas Finas (siguiendo el flujo) */}
    <div className="absolute top-1/4 left-1/4 flex space-x-8">
      {[...Array(5)].map((_, i) => (
        <div key={`f-${i}`} className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}></div>
      ))}
    </div>
    
    <div className="absolute top-1/3 left-1/3 flex space-x-12">
      {[...Array(4)].map((_, i) => (
        <div key={`f2-${i}`} className="w-1.5 h-1.5 bg-amber-300 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.3}s` }}></div>
      ))}
    </div>

    {/* Partículas Gruesas (cayendo) */}
    <svg className="absolute inset-0 w-full h-full pointer-events-none">
      <path d="M 100 128 Q 200 128 250 250" fill="transparent" stroke="#92400e" strokeWidth="2" strokeDasharray="5,5" />
      <path d="M 120 140 Q 180 140 220 250" fill="transparent" stroke="#92400e" strokeWidth="2" strokeDasharray="5,5" />
    </svg>
    <div className="absolute top-[130px] left-[150px] w-5 h-5 bg-amber-800 rounded-full"></div>
    <div className="absolute top-[180px] left-[200px] w-6 h-6 bg-amber-800 rounded-full"></div>
    <div className="absolute top-[220px] left-[230px] w-4 h-4 bg-amber-800 rounded-full"></div>
    
    <div className="absolute bottom-4 right-4 bg-white/80 p-2 rounded text-xs font-semibold shadow">
      Las finas siguen el flujo <br/> Las gruesas se desvían por inercia
    </div>
  </div>
);

const DiagramaTipos = () => (
  <div className="w-full h-64 flex gap-4">
    {/* Estático */}
    <div className="flex-1 bg-slate-50 rounded-xl border-2 border-slate-200 p-4 flex flex-col items-center relative overflow-hidden">
      <h4 className="font-bold text-slate-700 mb-4 z-10">Clasificador Estático</h4>
      <div className="w-24 h-32 border-4 border-slate-400 rounded-b-full relative flex justify-center">
        <div className="absolute top-0 bottom-0 w-1 bg-blue-200"></div>
        <Wind className="text-blue-400 absolute bottom-4 animate-pulse" />
      </div>
      <p className="text-xs text-center mt-2 text-slate-500">Sin partes móviles.<br/>Flujo simple.</p>
    </div>

    {/* Dinámico */}
    <div className="flex-1 bg-blue-50 rounded-xl border-2 border-blue-200 p-4 flex flex-col items-center relative overflow-hidden">
      <h4 className="font-bold text-blue-800 mb-4 z-10">Clasificador Dinámico</h4>
      <div className="w-24 h-32 border-4 border-blue-400 rounded-b-full relative flex items-center justify-center">
        <Settings size={40} className="text-slate-700 animate-spin" />
        <div className="absolute inset-0 rounded-full border-2 border-blue-300 border-dashed animate-spin-slow opacity-50"></div>
      </div>
      <p className="text-xs text-center mt-2 text-slate-600">Con rotor incorporado.<br/>Mayor control de corte.</p>
    </div>
  </div>
);

const DiagramaAplicaciones = () => {
  const apps = [
    { icon: <Factory size={32}/>, title: 'Cemento', desc: 'Clasificación de material molido' },
    { icon: <Wheat size={32}/>, title: 'Alimentos', desc: 'Separación de polvos finos' },
    { icon: <Pill size={32}/>, title: 'Farmacéutica', desc: 'Uniformidad de partículas' },
    { icon: <Pickaxe size={32}/>, title: 'Minería', desc: 'Clasificación de minerales' },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 h-full">
      {apps.map((app, idx) => (
        <div key={idx} className="bg-white border-2 border-slate-100 rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
          <div className="p-3 bg-blue-100 text-blue-600 rounded-full mb-2">
            {app.icon}
          </div>
          <h4 className="font-bold text-slate-800 text-sm">{app.title}</h4>
          <p className="text-xs text-slate-500 mt-1">{app.desc}</p>
        </div>
      ))}
    </div>
  );
};

const TablaVentajas = () => (
  <div className="w-full bg-white rounded-xl border-2 border-slate-200 overflow-hidden shadow-sm">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="bg-slate-100 text-slate-700 text-sm">
          <th className="p-4 border-b-2 border-slate-200">Ventaja Operativa</th>
          <th className="p-4 border-b-2 border-slate-200">Impacto en el Proceso</th>
        </tr>
      </thead>
      <tbody className="text-sm">
        <tr className="border-b border-slate-100 hover:bg-slate-50">
          <td className="p-4 font-semibold text-blue-700 flex items-center"><RefreshCw size={16} className="mr-2"/> Operación Continua</td>
          <td className="p-4 text-slate-600">Permite procesar grandes volúmenes sin interrupciones.</td>
        </tr>
        <tr className="border-b border-slate-100 hover:bg-slate-50">
          <td className="p-4 font-semibold text-blue-700 flex items-center"><Box size={16} className="mr-2"/> Proceso en Seco</td>
          <td className="p-4 text-slate-600">Elimina el uso de líquidos, ahorrando costos de secado posterior.</td>
        </tr>
        <tr className="border-b border-slate-100 hover:bg-slate-50">
          <td className="p-4 font-semibold text-blue-700 flex items-center"><Settings size={16} className="mr-2"/> Precisión</td>
          <td className="p-4 text-slate-600">Control exacto sobre la distribución del tamaño de partícula.</td>
        </tr>
        <tr className="hover:bg-slate-50">
          <td className="p-4 font-semibold text-blue-700 flex items-center"><Activity size={16} className="mr-2"/> Eficiencia Energética</td>
          <td className="p-4 text-slate-600">Menor consumo en comparación con molienda prolongada o métodos húmedos.</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const DiagramaProceso = () => (
  <div className="w-full h-64 bg-slate-50 rounded-xl border-2 border-slate-200 p-4 flex items-center justify-center relative">
    <div className="flex items-center w-full justify-between px-8">
      
      {/* Etapa 1 */}
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 bg-slate-700 rounded-lg flex items-center justify-center text-white shadow-lg border-b-4 border-slate-900">
          <Settings size={32} />
        </div>
        <span className="font-bold text-sm mt-2">Molienda /<br/>Trituración</span>
      </div>

      {/* Flecha */}
      <div className="flex-1 flex justify-center relative">
        <div className="h-1 w-full bg-blue-300 absolute top-1/2 -translate-y-1/2"></div>
        <ArrowRight className="text-blue-500 absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-slate-50" size={24}/>
      </div>

      {/* Etapa 2 (Clasificador) */}
      <div className="flex flex-col items-center relative z-10">
        <div className="w-28 h-28 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg border-b-4 border-blue-800 animate-pulse">
          <Wind size={40} />
        </div>
        <span className="font-bold text-sm mt-2 text-blue-700">Clasificador<br/>de Aire</span>

        {/* Retorno */}
        <svg className="absolute top-full left-1/2 w-48 h-20 -translate-x-full pointer-events-none overflow-visible">
          <path d="M 0 10 L 0 50 L -150 50 L -150 -60" fill="transparent" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4,4"/>
          <circle cx="-150" cy="-60" r="4" fill="#f59e0b" />
        </svg>
        <span className="absolute -bottom-8 -left-16 text-xs text-amber-600 font-bold bg-slate-50 px-1">Retorno (Gruesos)</span>

        {/* Producto */}
        <svg className="absolute bottom-full left-1/2 w-24 h-16 pointer-events-none overflow-visible">
          <path d="M 0 -10 L 0 -40 L 80 -40" fill="transparent" stroke="#3b82f6" strokeWidth="2" />
          <polygon points="80,-44 88,-40 80,-36" fill="#3b82f6" />
        </svg>
        <span className="absolute -top-12 -right-24 text-xs text-blue-600 font-bold bg-slate-50 px-1">Producto (Finos)</span>
      </div>

    </div>
  </div>
);

// --- Layout Components ---

type SectionProps = {

  
    title:string;
    content:string;
    Visual: React.ComponentType;
    index:number;
}



const Section: React.FC<SectionProps> = ({title, content, Visual, index }) => 
  { const isEven = index % 2 === 0;
  
  return (
    <section className="py-12 border-b border-slate-200 last:border-0">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className={`flex flex-col lg:flex-row gap-8 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
          {/* Text Content */}
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 leading-tight">
              {title}
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed text-justify">
              {content}
            </p>
          </div>
          
          {/* Visual Content */}
          <div className="flex-1 w-full">
            <div className="bg-white p-2 rounded-2xl shadow-lg border border-slate-100">
              <Visual />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Main Application ---

export default function App() {
  const sectionsData = [
    {
      title: "Introducción a los clasificadores de aire",
      content: "Los clasificadores de aire son equipos utilizados para separar partículas sólidas en función de sus propiedades físicas, principalmente tamaño, forma o densidad, mediante corrientes de aire controladas. Su alcance se centra en procesos donde se requiere una clasificación precisa de materiales particulados sin el uso de líquidos.",
      visual: DiagramaGeneral
    },
    {
      title: "Principio de funcionamiento",
      content: "El proceso se basa en la interacción entre la fuerza de arrastre ejercida por el aire y la fuerza de la gravedad. Cuando las partículas entran en una corriente de aire, aquellas con menor tamaño o densidad experimentan mayor efecto del arrastre y son transportadas por el flujo, mientras que las partículas más grandes o densas no logran sostenerse y caen.",
      visual: DiagramaFuerzas
    },
    {
      title: "Mecanismo de clasificación por tamaño y densidad",
      content: "La separación ocurre porque las partículas responden de manera diferente a las fuerzas del sistema. Las partículas finas tienen mayor relación superficie/masa, lo que favorece su interacción con el aire, mientras que las partículas gruesas tienen mayor inercia y tienden a separarse del flujo. Este mecanismo permite obtener fracciones con distribuciones de tamaño bien definidas.",
      visual: DiagramaMecanismo
    },
    {
      title: "Tipos de clasificadores de aire",
      content: "Los clasificadores estáticos no tienen partes móviles y dependen únicamente de la geometría del equipo y la velocidad del aire para lograr la separación. Son simples y robustos, pero menos precisos. Los clasificadores dinámicos incorporan elementos móviles, como rotores, que generan campos de fuerza adicionales y permiten un control más fino del tamaño de corte, mejorando la eficiencia y precisión del proceso.",
      visual: DiagramaTipos
    },
    {
      title: "Aplicaciones industriales",
      content: "Estos equipos se utilizan ampliamente en industrias donde el control del tamaño de partícula es crítico. En la industria del cemento permiten clasificar el material molido, en alimentos se emplean para separar polvos finos, en farmacéutica para asegurar uniformidad de partículas, y en minería para la clasificación de minerales.",
      visual: DiagramaAplicaciones
    },
    {
      title: "Ventajas operativas",
      content: "Los clasificadores de aire permiten una operación continua y un control preciso del tamaño de partícula sin la necesidad del uso de líquidos, lo que reduce costos de secado y manejo. Además, suelen tener un consumo energético relativamente bajo en comparación con otros métodos de clasificación más intensivos.",
      visual: TablaVentajas
    },
    {
      title: "Importancia en la separación de partículas",
      content: "Estos equipos combinan la acción de la gravedad con fuerzas de arrastre generadas por un fluido (aire), lo que permite un control más refinado de la separación en comparación con métodos puramente gravitacionales. Por ello, son fundamentales en procesos donde la calidad del producto depende de una distribución de tamaño específica.",
      visual: DiagramaProceso
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-200 selection:text-blue-900">
      {/* Header / Hero */}
      <header className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
           <Wind size={400} className="absolute -top-20 -right-20 text-blue-300 animate-pulse" />
           <Wind size={200} className="absolute bottom-10 -left-10 text-slate-300" />
        </div>
        
        <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
        
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Clasificadores de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Aire</span>
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-white">
        {sectionsData.map((section, index) => (
          <Section 
            key={index}
            index={index}
            title={section.title}
            content={section.content}
            Visual={section.visual}
          />
        ))}
      </main>

   
    </div>
  );
}