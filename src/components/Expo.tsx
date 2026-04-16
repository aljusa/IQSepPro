import React, { useState } from 'react';
import { 
  Droplet, 
  Settings, 
  Layers, 
  Factory, 
  Scale, 
  FlaskConical, 
  Award, 
  BookOpen,
  Clock,
  MonitorPlay,
  Users,
  Mic,
  CheckCircle2,
  AlertCircle,
  CheckCircle,
  MessageCircleQuestion
} from 'lucide-react';

// --- Visual Components (Diagrams) ---

const PumpDiagram = () => (
  <div className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-lg border border-slate-200 w-full h-48">
    <svg viewBox="0 0 200 150" className="w-full h-full max-w-[200px]">
      {/* Tubería de Succión */}
      <path d="M 0 85 L 60 85 L 60 115 L 0 115 Z" fill="#94a3b8" />
      <text x="5" y="105" fontSize="10" fill="white" fontWeight="bold">SUCCIÓN</text>
      <path d="M 10 100 L 40 100" stroke="#38bdf8" strokeWidth="4" strokeDasharray="4 4" className="animate-pulse" />
      
      {/* Carcasa (Voluta) */}
      <circle cx="100" cy="100" r="40" fill="#cbd5e1" stroke="#64748b" strokeWidth="4" />
      <circle cx="100" cy="100" r="30" fill="#f1f5f9" />
      
      {/* Impulsor */}
      <g transform="translate(100, 100)">
        <circle cx="0" cy="0" r="8" fill="#475569" />
        <path d="M 0 -8 Q 15 -15 25 0 Q 15 5 0 8 Z" fill="#64748b" transform="rotate(0)" />
        <path d="M 0 -8 Q 15 -15 25 0 Q 15 5 0 8 Z" fill="#64748b" transform="rotate(90)" />
        <path d="M 0 -8 Q 15 -15 25 0 Q 15 5 0 8 Z" fill="#64748b" transform="rotate(180)" />
        <path d="M 0 -8 Q 15 -15 25 0 Q 15 5 0 8 Z" fill="#64748b" transform="rotate(270)" />
      </g>
      
      {/* Tubería de Descarga */}
      <path d="M 85 10 L 115 10 L 115 60 L 85 60 Z" fill="#94a3b8" />
      <text x="88" y="25" fontSize="8" fill="white" fontWeight="bold" transform="rotate(-90 95 25)">DESCARGA</text>
      <path d="M 100 50 L 100 20" stroke="#38bdf8" strokeWidth="4" strokeDasharray="4 4" className="animate-pulse" />
    </svg>
    <p className="text-xs text-slate-500 mt-2 text-center">Esquema básico de una bomba centrífuga</p>
  </div>
);

const FlowDiagram = () => (
  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-100 w-full h-48">
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center border-2 border-blue-400">
        <Droplet className="text-blue-600" size={20} />
      </div>
      <span className="text-xs font-bold mt-2 text-blue-800">1. Entrada</span>
      <span className="text-[10px] text-center text-blue-600 max-w-[60px]">Baja energía</span>
    </div>
    
    <div className="flex-1 flex flex-col items-center px-2">
      <div className="relative w-full h-2 bg-blue-200 rounded">
        <div className="absolute top-0 left-0 h-full bg-blue-500 rounded animate-pulse" style={{width: '100%'}}></div>
      </div>
      <span className="text-xs font-semibold text-blue-700 mt-2">2. Transferencia de Energía (Motor/Impulsor)</span>
    </div>
    
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center border-2 border-blue-700">
        <Droplet className="text-white" size={24} />
      </div>
      <span className="text-xs font-bold mt-2 text-blue-800">3. Salida</span>
      <span className="text-[10px] text-center text-blue-600 max-w-[60px]">Alta presión/velocidad</span>
    </div>
  </div>
);

const ProsConsDiagram = () => (
  <div className="flex gap-4 w-full h-48">
    <div className="flex-1 bg-green-50 p-4 rounded-lg border border-green-200 flex flex-col items-center justify-center text-center">
      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-2">
        <CheckCircle2 className="text-green-600" size={20} />
      </div>
      <h4 className="font-bold text-green-800 text-sm mb-1">Ventajas</h4>
      <ul className="text-xs text-green-700 text-left list-disc pl-4 space-y-1">
        <li>Alta eficiencia</li>
        <li>Flujo constante</li>
        <li>Fácil mantenimiento</li>
      </ul>
    </div>
    <div className="flex-1 bg-red-50 p-4 rounded-lg border border-red-200 flex flex-col items-center justify-center text-center">
      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mb-2">
        <AlertCircle className="text-red-600" size={20} />
      </div>
      <h4 className="font-bold text-red-800 text-sm mb-1">Desventajas</h4>
      <ul className="text-xs text-red-700 text-left list-disc pl-4 space-y-1">
        <li>Cavitación</li>
        <li>Requiere cebado</li>
        <li>Límites de viscosidad</li>
      </ul>
    </div>
  </div>
);

// --- Main Application ---

export default function App() {
  const [activeSection, setActiveSection] = useState('guia');

  const guideSections = [
    {
      id: 1,
      title: "1. Definición",
      icon: <Droplet className="text-blue-500" />,
      explanation: "Explicación clara sobre qué es exactamente el tipo de bomba asignada y cuál es su propósito principal en el manejo de fluidos.",
      visualSuggestion: "Se sugiere incluir un diagrama básico o icono que represente la transferencia de fluidos.",
      visualComponent: null
    },
    {
      id: 2,
      title: "2. Funcionamiento",
      icon: <Settings className="text-slate-600" />,
      explanation: "Descripción paso a paso de cómo la bomba realiza su trabajo. Desde que el fluido entra hasta que es expulsado con mayor energía.",
      visualSuggestion: "Diagrama de flujo animado mostrando la entrada, el proceso de presurización y la salida del fluido.",
      visualComponent: <FlowDiagram />
    },
    {
      id: 3,
      title: "3. Partes Principales",
      icon: <Layers className="text-amber-500" />,
      explanation: "Identificación de los componentes estructurales y mecánicos más importantes, detallando la función específica de cada parte.",
      visualSuggestion: "Esquema transversal de la bomba con etiquetas señalando partes clave (succión, impulsor, carcasa, descarga).",
      visualComponent: <PumpDiagram />
    },
    {
      id: 4,
      title: "4. Aplicaciones",
      icon: <Factory className="text-indigo-500" />,
      explanation: "Contextos del mundo real donde se utiliza esta bomba. Menciones de sectores como la industria, agricultura, sistemas domésticos, etc.",
      visualSuggestion: "Iconografía de diferentes sectores (fábrica, casa, tractor) para ilustrar su versatilidad.",
      visualComponent: null
    },
    {
      id: 5,
      title: "5. Ventajas y Desventajas",
      icon: <Scale className="text-emerald-500" />,
      explanation: "Análisis crítico de los beneficios que ofrece este equipo en comparación con sus limitaciones operativas o de diseño.",
      visualSuggestion: "Tabla comparativa o diseño de balanza visual contrastando los pros y los contras.",
      visualComponent: <ProsConsDiagram />
    },
    {
      id: 6,
      title: "6. Caso Práctico",
      icon: <FlaskConical className="text-purple-500" />,
      explanation: "Demostración de un uso en la vida real. Puede estar apoyado por un caso de estudio, imágenes reales de la instalación o un video corto.",
      visualSuggestion: "Un contenedor destacado tipo 'Caso de Estudio' para resaltar la aplicación real.",
      visualComponent: null
    },
    {
      id: 7,
      title: "7. Conclusión",
      icon: <Award className="text-yellow-500" />,
      explanation: "Resumen sobre la importancia vital de este tipo de bomba en la ingeniería y la vida cotidiana.",
      visualSuggestion: "Un bloque de texto resaltado con un icono de trofeo o idea.",
      visualComponent: null
    },
    {
      id: 8,
      title: "8. Fuentes de Información",
      icon: <BookOpen className="text-slate-400" />,
      explanation: "Bibliografía estructurada. Inclusión de libros de texto, manuales técnicos, páginas web confiables y material audiovisual.",
      visualSuggestion: "Lista con viñetas en formato académico.",
      visualComponent: null
    }
  ];

  const rubric = [
    { criteria: "Contenido", excellent: "Completo, claro y correcto", good: "Mayormente completo", regular: "Información incompleta", poor: "Muy poca información" },
    { criteria: "Organización", excellent: "Bien estructurado", good: "Orden aceptable", regular: "Algo desordenado", poor: "Sin orden" },
    { criteria: "Dominio del tema", excellent: "Explican sin leer, dominan", good: "Leen poco", regular: "Dependencia de lectura", poor: "No comprenden" },
    { criteria: "Participación", excellent: "Todos participan activamente", good: "Casi todos participan", regular: "Participación desigual", poor: "Solo 1 o 2 participan" },
    { criteria: "Material visual", excellent: "Muy claro y atractivo", good: "Adecuado", regular: "Poco claro", poor: "No hay material" },
    { criteria: "Tiempo", excellent: "Dentro del tiempo (8-12m)", good: "Ligero exceso", regular: "Mucho exceso o corto", poor: "No cumple" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header */}
      <header className="bg-blue-900 text-white p-8 shadow-md">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Guía metodológica y rúbrica para la preparación de exposición</h1>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 flex gap-4">
          <button 
            onClick={() => setActiveSection('guia')}
            className={`py-4 px-2 font-semibold border-b-2 transition-colors ${activeSection === 'guia' ? 'border-blue-600 text-blue-700' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
          >
            Guía de Exposición
          </button>
          <button 
            onClick={() => setActiveSection('requisitos')}
            className={`py-4 px-2 font-semibold border-b-2 transition-colors ${activeSection === 'requisitos' ? 'border-blue-600 text-blue-700' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
          >
            Requisitos y Rúbrica
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto p-4 md:p-8">
        
        {activeSection === 'guia' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Layers className="text-blue-600" />
                Estructura del Contenido
              </h2>
              <p className="text-slate-600">
                Cada equipo deberá estructurar su investigación siguiendo rigurosamente los siguientes 8 puntos. 
                A continuación, se detalla qué debe incluirse en cada sección y sugerencias visuales para las diapositivas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {guideSections.map((section) => (
                <div key={section.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="p-5 border-b border-slate-100 bg-slate-50 flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                      {section.icon}
                    </div>
                    <h3 className="text-lg font-bold text-slate-800">{section.title}</h3>
                  </div>
                  <div className="p-5">
                    <div className="mb-4">
                   
                      <p className="text-sm text-slate-600 leading-relaxed">{section.explanation}</p>
                    </div>
                    
                    <div className="mb-4 bg-blue-50 p-3 rounded-lg border border-blue-100">
                      <h4 className="text-xs font-bold uppercase text-blue-500 mb-1 tracking-wider">Sugerencia Visual</h4>
                      <p className="text-sm text-blue-800 italic">{section.visualSuggestion}</p>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'requisitos' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            
            {/* Requisitos Generales */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-6 border-b border-slate-100 bg-blue-50">
                <h2 className="text-2xl font-bold text-blue-900 flex items-center gap-2">
                  <AlertCircle className="text-blue-600" />
                  Requisitos de la Exposición
                </h2>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex flex-col items-center text-center p-4 bg-slate-50 rounded-lg">
                  <Clock className="text-blue-500 mb-2" size={32} />
                  <h4 className="font-bold text-slate-800">Duración</h4>
                  <p className="text-sm text-slate-600 mt-1">De 8 a 12 minutos estrictos por equipo.</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-slate-50 rounded-lg">
                  <MonitorPlay className="text-purple-500 mb-2" size={32} />
                  <h4 className="font-bold text-slate-800">Apoyo Visual</h4>
                  <p className="text-sm text-slate-600 mt-1">Uso obligatorio de diapositivas.</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-slate-50 rounded-lg">
                  <Users className="text-emerald-500 mb-2" size={32} />
                  <h4 className="font-bold text-slate-800">Participación</h4>
                  <p className="text-sm text-slate-600 mt-1">Todos los integrantes deben hablar.</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-slate-50 rounded-lg">
                  <Mic className="text-rose-500 mb-2" size={32} />
                  <h4 className="font-bold text-slate-800">Expresión</h4>
                  <p className="text-sm text-slate-600 mt-1">Explicar con palabras propias, prohibido leer.</p>
                </div>
                     {/* Asistencia obligatoria */}

      
              </div>
              
            </div>

            {/* Rúbrica de Evaluación */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-6 border-b border-slate-100 bg-slate-800 text-white">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <CheckCircle2 className="text-emerald-400" />
                  Rúbrica de Evaluación
                </h2>
                <p className="text-slate-300 text-sm mt-1">Criterios de calificación para la presentación oral.</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-100 text-slate-700">
                    <tr>
                      <th className="p-4 font-bold border-b border-slate-200">Criterio</th>
                      <th className="p-4 font-bold border-b border-slate-200 text-emerald-700 bg-emerald-50">Excelente (10)</th>
                      <th className="p-4 font-bold border-b border-slate-200 text-blue-700 bg-blue-50">Bueno (8)</th>
                      <th className="p-4 font-bold border-b border-slate-200 text-amber-700 bg-amber-50">Regular (6)</th>
                      <th className="p-4 font-bold border-b border-slate-200 text-rose-700 bg-rose-50">Insuficiente (≤5)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rubric.map((row, idx) => (
                      <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-slate-800">{row.criteria}</td>
                        <td className="p-4 text-slate-600 bg-emerald-50/30">{row.excellent}</td>
                        <td className="p-4 text-slate-600 bg-blue-50/30">{row.good}</td>
                        <td className="p-4 text-slate-600 bg-amber-50/30">{row.regular}</td>
                        <td className="p-4 text-slate-600 bg-rose-50/30">{row.poor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div>
      <div className="flex flex-col items-center text-center p-4 bg-red-50 border border-red-200 rounded-lg">
        <CheckCircle className="text-red-600 mb-2" size={32} />
        <h4 className="font-bold text-red-800">Asistencia (Obligatorio)</h4>
        <p className="text-sm text-red-700 mt-1">
          Estar presente en al menos el 80% de las presentaciones.
        </p>
      </div>

      {/* Interacción obligatoria */}
      <div className="flex flex-col items-center text-center p-4 bg-red-50 border border-red-200 rounded-lg">
        <MessageCircleQuestion className="text-red-600 mb-2" size={32} />
        <h4 className="font-bold text-red-800">Interacción</h4>
        <p className="text-sm text-red-700 mt-1">
          Realizar al menos una pregunta a algún equipo al final de la presentación.
        </p>      </div>
<div>
        <span className="mt-2 text-xs font-semibold bg-red-100 text-red-700 px-2 py-1 rounded-full">
          No cumplir con alguno de estos puntos = -50% de la calificación
        </span></div>
          </div>
          </div>
        )}

      </main>
    </div>
  );
}