const Visual1_Intro = () => (
  <div className="flex flex-col sm:flex-row items-center justify-center gap-8 w-full h-full p-4 bg-white rounded-lg border border-gray-200">
    <div className="flex flex-col items-center">
      <h4 className="text-sm font-bold text-blue-600 mb-2">Clarificador</h4>
      <svg width="120" height="120" viewBox="0 0 100 100" className="drop-shadow-md">
        <rect x="20" y="20" width="60" height="60" fill="#EBF8FF" stroke="#3182CE" strokeWidth="2" rx="4"/>
        <rect x="20" y="60" width="60" height="20" fill="#8B4513" opacity="0.6" rx="4"/>
        <circle cx="35" cy="40" r="2" fill="#8B4513"/>
        <circle cx="50" cy="50" r="2" fill="#8B4513"/>
        <circle cx="65" cy="45" r="2" fill="#8B4513"/>
        <path d="M 50 20 L 50 10" stroke="#3182CE" strokeWidth="2" markerEnd="url(#arrow)"/>
      </svg>
      <p className="text-xs text-gray-500 mt-2 text-center">Sedimentación<br/>por Gravedad</p>
    </div>
    <div className="hidden sm:block text-gray-300 text-2xl">VS</div>
    <div className="flex flex-col items-center">
      <h4 className="text-sm font-bold text-orange-500 mb-2">Separador de Inercia</h4>
      <svg width="120" height="120" viewBox="0 0 100 100" className="drop-shadow-md">
        <path d="M 10 30 L 70 30 L 70 90 L 90 90 L 90 10 L 10 10 Z" fill="#FEEBC8" stroke="#DD6B20" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M 30 20 L 50 20" stroke="#DD6B20" strokeWidth="2" markerEnd="url(#arrow-orange)"/>
        <path d="M 80 40 L 80 60" stroke="#DD6B20" strokeWidth="2" markerEnd="url(#arrow-orange)"/>
        <circle cx="75" cy="20" r="3" fill="#4A5568"/>
        <circle cx="85" cy="25" r="2" fill="#4A5568"/>
      </svg>
      <p className="text-xs text-gray-500 mt-2 text-center">Cambio de dirección<br/>brusco</p>
    </div>
  </div>
);

const Visual2_ClarificadorPrincipio = () => (
  <div className="flex flex-col items-center justify-center w-full h-full p-4 bg-white rounded-lg border border-gray-200">
    <svg width="250" height="180" viewBox="0 0 200 150">
      <defs>
        <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EBF8FF" />
          <stop offset="60%" stopColor="#90CDF4" />
          <stop offset="100%" stopColor="#8B4513" stopOpacity="0.8"/>
        </linearGradient>
      </defs>
      <rect x="25" y="30" width="150" height="100" fill="url(#waterGrad)" stroke="#2B6CB0" strokeWidth="3" rx="5"/>
      {/* Entrada y Salida */}
      <rect x="10" y="40" width="20" height="15" fill="#CBD5E0" stroke="#4A5568"/>
      <path d="M 5 47 L 25 47" stroke="#2B6CB0" strokeWidth="2" markerEnd="url(#arrow)"/>
      <rect x="170" y="40" width="20" height="15" fill="#CBD5E0" stroke="#4A5568"/>
      <path d="M 175 47 L 195 47" stroke="#2B6CB0" strokeWidth="2" markerEnd="url(#arrow)"/>
      
      {/* Partículas cayendo */}
      {[...Array(15)].map((_, i) => (
        <circle key={i} cx={40 + Math.random() * 120} cy={50 + Math.random() * 50} r={1.5 + Math.random()*1.5} fill="#4A2311"/>
      ))}
      {/* Flechas de flujo lento */}
      <path d="M 50 70 L 150 70" stroke="#ffffff" strokeWidth="1" strokeDasharray="4 4" opacity="0.6"/>
      <text x="100" y="20" fontSize="10" textAnchor="middle" fill="#2B6CB0" fontWeight="bold">Líquido Clarificado (Superior)</text>
      <text x="100" y="145" fontSize="10" textAnchor="middle" fill="#8B4513" fontWeight="bold">Sedimentos (Fondo)</text>
    </svg>
  </div>
);

const Visual3_ZonasClarificador = () => (
  <div className="flex items-center justify-center w-full h-full p-4 bg-white rounded-lg border border-gray-200 relative">
    <svg width="280" height="180" viewBox="0 0 250 150">
      <rect x="25" y="25" width="200" height="100" fill="#F7FAFC" stroke="#A0AEC0" strokeWidth="2"/>
      
      {/* Zonas (Divisiones) */}
      <line x1="70" y1="25" x2="70" y2="125" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="5 5"/>
      <line x1="180" y1="25" x2="180" y2="125" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="5 5"/>
      
      {/* Textos de Zonas */}
      <text x="47" y="75" fontSize="10" textAnchor="middle" fill="#4A5568" fontWeight="bold" transform="rotate(-90 47,75)">1. ENTRADA</text>
      <text x="125" y="75" fontSize="12" textAnchor="middle" fill="#2B6CB0" fontWeight="bold">2. SEDIMENTACIÓN</text>
      <text x="203" y="75" fontSize="10" textAnchor="middle" fill="#48BB78" fontWeight="bold" transform="rotate(-90 203,75)">3. SALIDA</text>
      
      {/* Lodos */}
      <polygon points="70,125 180,125 125,145" fill="#8B4513" opacity="0.7"/>
      <text x="125" y="140" fontSize="8" textAnchor="middle" fill="#FFF">Acumulación de Lodos</text>
      
      {/* Flujo */}
      <path d="M 30 50 Q 125 100 220 50" stroke="#4299E1" strokeWidth="2" fill="none" strokeDasharray="3 3"/>
    </svg>
  </div>
);

const Visual4_SeparadorInercia = () => (
  <div className="flex items-center justify-center w-full h-full p-4 bg-white rounded-lg border border-gray-200">
    <svg width="240" height="180" viewBox="0 0 200 150">
      {/* Conducto */}
      <path d="M 20 60 L 120 60 L 120 140 L 160 140 L 160 20 L 20 20 Z" fill="#EDF2F7" stroke="#718096" strokeWidth="3" strokeLinejoin="round"/>
      
      {/* Flujo de fluido (gira) */}
      <path d="M 30 40 L 100 40 Q 140 40 140 80 L 140 130" stroke="#63B3ED" strokeWidth="4" fill="none" markerEnd="url(#arrow-blue)"/>
      <text x="110" y="120" fontSize="10" fill="#3182CE" fontWeight="bold" transform="rotate(90 110,120)">Fluido limpio</text>

      {/* Partículas (siguen recto) */}
      <path d="M 40 45 L 145 45" stroke="#E53E3E" strokeWidth="2" strokeDasharray="4 2" fill="none"/>
      <circle cx="150" cy="45" r="4" fill="#C53030"/>
      <circle cx="155" cy="52" r="3" fill="#C53030"/>
      <circle cx="148" cy="38" r="3.5" fill="#C53030"/>
      
      <text x="70" y="30" fontSize="10" fill="#4A5568" fontWeight="bold">Partículas + Fluido</text>
      <text x="170" y="45" fontSize="10" fill="#C53030" fontWeight="bold">Impacto</text>
    </svg>
  </div>
);

const Visual5_Impacto = () => (
  <div className="flex flex-col items-center justify-center w-full h-full p-6 bg-gray-900 rounded-lg border border-gray-700">
    <svg width="200" height="160" viewBox="0 0 150 120">
      {/* Pared */}
      <rect x="110" y="10" width="20" height="100" fill="#4A5568" rx="2"/>
      
      {/* Trayectoria */}
      <path d="M 10 50 L 105 50" stroke="#F6AD55" strokeWidth="2" strokeDasharray="5 5" fill="none"/>
      
      {/* Partícula chocando */}
      <circle cx="100" cy="50" r="10" fill="#ED8936"/>
      
      {/* Líneas de impacto */}
      <path d="M 105 40 L 95 30 M 110 45 L 120 35 M 105 60 L 95 70 M 110 55 L 120 65" stroke="#FBD38D" strokeWidth="2" strokeLinecap="round"/>
      
      {/* Partícula depositándose */}
      <circle cx="100" cy="90" r="10" fill="#ED8936" opacity="0.5"/>
      <path d="M 100 65 L 100 75" stroke="#A0AEC0" strokeWidth="2" markerEnd="url(#arrow-gray)"/>
      <text x="50" y="45" fontSize="10" fill="#FBD38D">Inercia</text>
      <text x="50" y="100" fontSize="10" fill="#A0AEC0">Pierde energía y cae</text>
    </svg>
  </div>
);

const Visual6_Aplicaciones = () => (
  <div className="flex flex-col sm:flex-row gap-4 w-full h-full items-stretch">
    <div className="flex-1 bg-blue-50 border border-blue-200 rounded-lg p-4 flex flex-col items-center justify-center text-center">
      <div className="bg-blue-500 text-white rounded-full p-3 mb-2">
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c0 0-8 9.5-8 14a8 8 0 0016 0c0-4.5-8-14-8-14z"/></svg>
      </div>
      <h4 className="font-bold text-blue-800 text-sm mb-1">Clarificadores</h4>
      <p className="text-xs text-blue-600">Plantas de tratamiento de aguas. Remoción de sólidos suspendidos.</p>
    </div>
    <div className="flex-1 bg-orange-50 border border-orange-200 rounded-lg p-4 flex flex-col items-center justify-center text-center">
      <div className="bg-orange-500 text-white rounded-full p-3 mb-2">
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 11h-2V6c0-1.1-.9-2-2-2h-2V2H9v2H7c-1.1 0-2 .9-2 2v5H3v2h2v5c0 1.1.9 2 2 2h2v2h2v-2h2c1.1 0 2-.9 2-2v-5h2v-2zm-4 5H9V6h6v10z"/></svg>
      </div>
      <h4 className="font-bold text-orange-800 text-sm mb-1">Separadores de Inercia</h4>
      <p className="text-xs text-orange-600">Sistemas de ventilación y ductos industriales. Tratamiento de gases.</p>
    </div>
  </div>
);

const Visual7_Tabla = () => (
  <div className="w-full h-full overflow-hidden rounded-lg border border-gray-200 shadow-sm text-sm">
    <table className="w-full text-left">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-3 font-semibold text-gray-700">Aspecto</th>
          <th className="p-3 font-semibold text-gray-700">Detalle</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        <tr className="bg-green-50">
          <td className="p-3 font-medium text-green-800 flex items-center gap-2">
            <span className="text-green-500">➕</span> Ventajas
          </td>
          <td className="p-3 text-green-700">Simplicidad de diseño, bajo costo de mantenimiento y facilidad de operación continua.</td>
        </tr>
        <tr className="bg-red-50">
          <td className="p-3 font-medium text-red-800 flex items-center gap-2">
            <span className="text-red-500">➖</span> Limitaciones
          </td>
          <td className="p-3 text-red-700">Baja eficiencia en partículas muy pequeñas o de baja densidad (no sedimentan ni tienen inercia suficiente).</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const Visual8_Proceso = () => (
  <div className="flex items-center justify-center w-full h-full p-4 bg-white rounded-lg border border-gray-200 overflow-x-auto">
    <div className="flex items-center gap-2 min-w-max">
      <div className="bg-gray-200 px-3 py-2 rounded text-xs font-bold text-gray-700">Flujo<br/>Bruto</div>
      <span className="text-gray-400">➔</span>
      <div className="bg-orange-100 border border-orange-400 px-3 py-2 rounded text-center">
        <div className="text-xs font-bold text-orange-700">Separador de Inercia</div>
        <div className="text-[10px] text-orange-600">(Elimina partículas gruesas)</div>
      </div>
      <span className="text-gray-400">➔</span>
      <div className="bg-blue-100 border border-blue-400 px-3 py-2 rounded text-center">
        <div className="text-xs font-bold text-blue-700">Clarificador</div>
        <div className="text-[10px] text-blue-600">(Sedimenta partículas finas)</div>
      </div>
      <span className="text-gray-400">➔</span>
      <div className="bg-green-100 px-3 py-2 rounded text-xs font-bold text-green-700">Flujo<br/>Limpio</div>
    </div>
  </div>
);

// --- Componente Principal ---

export default function App() {
  const sections = [
    {
      id: 1,
      title: "Introducción a clarificadores y separadores de inercia",
      explanation: "Los clarificadores y separadores de inercia son equipos utilizados para remover partículas suspendidas en fluidos, ya sea líquidos o gases. Su objetivo es mejorar la calidad del fluido, ya sea aumentando la claridad en líquidos o reduciendo la carga de partículas en corrientes gaseosas.",
      visualSuggestion: "Un esquema comparativo donde se muestre un clarificador (tanque con sedimentación) y un separador de inercia (conducto con cambio de dirección), destacando sus diferencias operativas.",
      visualComponent: <Visual1_Intro />
    },
    {
      id: 2,
      title: "Funcionamiento de los clarificadores",
      explanation: "Los clarificadores operan bajo el principio de sedimentación gravitacional. El fluido se introduce en un tanque donde su velocidad disminuye significativamente, permitiendo que las partículas sólidas suspendidas se depositen en el fondo debido a su mayor densidad. El líquido clarificado se recoge en la parte superior.",
      visualSuggestion: "Un tanque rectangular o circular con flujo lento, mostrando partículas descendiendo al fondo y una capa de líquido claro en la parte superior.",
      visualComponent: <Visual2_ClarificadorPrincipio />
    },
    {
      id: 3,
      title: "Características operativas de los clarificadores",
      explanation: "Estos equipos están diseñados para operar de manera continua, permitiendo la entrada constante de fluido y la extracción simultánea de sólidos sedimentados. Incorporan zonas de sedimentación bien definidas que favorecen la separación eficiente, incluso de partículas finas, siempre que el tiempo de residencia sea suficiente.",
      visualSuggestion: "Un diagrama del clarificador dividido en zonas (entrada, sedimentación y salida), indicando el recorrido del fluido y la acumulación de lodos.",
      visualComponent: <Visual3_ZonasClarificador />
    },
    {
      id: 4,
      title: "Principio de los separadores de inercia",
      explanation: "Los separadores de inercia funcionan aprovechando la resistencia de las partículas a cambiar su estado de movimiento. Cuando el flujo del fluido cambia bruscamente de dirección, las partículas más pesadas tienden a continuar en línea recta debido a su inercia, separándose así del fluido.",
      visualSuggestion: "Un conducto con un giro brusco donde se observe que el fluido cambia de dirección, pero las partículas siguen rectas e impactan contra una pared.",
      visualComponent: <Visual4_SeparadorInercia />
    },
    {
      id: 5,
      title: "Mecanismo de separación por impacto",
      explanation: "Al no seguir la trayectoria del fluido, las partículas chocan contra superficies del equipo, pierden energía y quedan retenidas o son recolectadas. Este mecanismo es especialmente efectivo para partículas relativamente grandes o densas, que poseen mayor inercia.",
      visualSuggestion: "Una ampliación del punto de impacto donde se vea una partícula chocando contra una superficie y depositándose.",
      visualComponent: <Visual5_Impacto />
    },
    {
      id: 6,
      title: "Aplicaciones industriales",
      explanation: "Los clarificadores se emplean ampliamente en el tratamiento de aguas para remover sólidos suspendidos y mejorar la calidad del efluente. Por su parte, los separadores de inercia se utilizan en sistemas de ventilación, tratamiento de gases y procesos industriales donde es necesario eliminar partículas gruesas de manera rápida.",
      visualSuggestion: "Una representación con dos escenarios: una planta de tratamiento de agua con clarificador y un sistema de ductos industriales con separador de inercia.",
      visualComponent: <Visual6_Aplicaciones />
    },
    {
      id: 7,
      title: "Ventajas y limitaciones",
      explanation: "Ambos equipos se caracterizan por su simplicidad, bajo costo y facilidad de operación. Sin embargo, presentan limitaciones en la remoción de partículas muy pequeñas o de baja densidad, ya que estas no sedimentan fácilmente ni poseen suficiente inercia para separarse del flujo.",
      visualSuggestion: "Una tabla comparativa que muestre ventajas (simplicidad, bajo costo) y limitaciones (baja eficiencia en partículas finas).",
      visualComponent: <Visual7_Tabla />
    },
    {
      id: 8,
      title: "Importancia en los procesos de separación",
      explanation: "Estos sistemas complementan otras técnicas de separación al aprovechar principios distintos: la gravedad en los clarificadores y la inercia en los separadores. Su uso combinado permite diseñar procesos más eficientes y adaptados a diferentes tipos de partículas y condiciones de operación.",
      visualSuggestion: "Un diagrama de proceso donde ambos equipos aparecen en distintas etapas, mostrando cómo se integran en un sistema de separación más amplio.",
      visualComponent: <Visual8_Proceso />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-12">
      {/* Definiciones globales de SVG utilizadas en los diagramas */}
      <svg width="0" height="0" className="hidden">
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#3182CE" />
          </marker>
          <marker id="arrow-orange" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#DD6B20" />
          </marker>
          <marker id="arrow-blue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#63B3ED" />
          </marker>
          <marker id="arrow-gray" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#A0AEC0" />
          </marker>
        </defs>
      </svg>

      {/* Cabecera */}
      <header className="bg-indigo-900 text-white py-12 px-6 shadow-md mb-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
            Clarificadores y Separadores de Inercia
          </h1>
          
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="max-w-5xl mx-auto px-6 flex flex-col gap-10">
        {sections.map((section, index) => (
          <section key={section.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col md:flex-row transition-transform hover:-translate-y-1 duration-300">
            
            {/* Mitad Izquierda: Texto */}
            <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-indigo-100 text-indigo-700 font-bold w-8 h-8 flex items-center justify-center rounded-full shrink-0">
                  {index + 1}
                </span>
                <h2 className="text-xl font-bold text-slate-800 leading-tight">
                  {section.title}
                </h2>
              </div>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                {section.explanation}
              </p>
              
              <div className="mt-auto pt-4 border-t border-slate-100">
                <div className="flex items-start gap-2 text-xs text-slate-500 bg-slate-50 p-3 rounded-md">
                  <span className="font-bold text-indigo-500 uppercase tracking-wider shrink-0 mt-0.5">💡 Sugerencia Visual:</span>
                  <span className="italic">{section.visualSuggestion}</span>
                </div>
              </div>
            </div>

            {/* Mitad Derecha: Componente Visual */}
            <div className="flex-1 bg-slate-50 border-t md:border-t-0 md:border-l border-slate-200 p-6 flex items-center justify-center min-h-[250px]">
              {section.visualComponent}
            </div>

          </section>
        ))}
      </main>

      {/* Pie de página */}
      <footer className="mt-16 text-center text-slate-500 text-sm py-8 border-t border-slate-200">
        <p>Generado por Ideastoweb • Transformando textos académicos en experiencias visuales interactivas.</p>
      </footer>
    </div>
  );
}