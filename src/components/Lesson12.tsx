import React, { useState } from 'react';
import { 
  BookOpen, 
  Settings, 
  ArrowRightLeft, 
   
  Layers, 
  Cylinder, 
  Map, 
  CheckCircle, 
  Info,
  Menu,
  X,
  ChevronRight,
  RotateCw,
  Zap,
  FileText // Agregado: Faltaba esta importación
} from 'lucide-react';

// --- Interfaces ---
interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

// --- Componentes UI ---

const Card = ({ title, children, className = "" }: { title?: string, children: React.ReactNode, className?: string }) => (
  <div className={`bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden ${className}`}>
    {title && (
      <div className="bg-slate-50 px-6 py-4 border-b border-slate-100">
        <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
          {title}
        </h3>
      </div>
    )}
    <div className="p-6">
      {children}
    </div>
  </div>
);

const InfoBox = ({ children, type = 'info' }: { children: React.ReactNode, type?: 'info' | 'warning' }) => {
  const styles = type === 'warning' 
    ? "bg-amber-50 text-amber-800 border-amber-200 icon-amber-500"
    : "bg-blue-50 text-blue-800 border-blue-200 icon-blue-500";
  
  return (
    <div className={`p-4 rounded-lg border flex gap-3 ${styles}`}>
      <Info className={`w-5 h-5 flex-shrink-0 mt-0.5 ${type === 'warning' ? 'text-amber-600' : 'text-blue-600'}`} />
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
};

// --- Componente Principal de la App ---

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('alcance');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Definición del contenido de la lección
  const sections: Section[] = [
    {
      id: 'alcance',
      title: '1. Alcance',
      icon: <BookOpen size={20} />,
      content: (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Convertidores de Potencia de Fluidos</h1>
            <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              Norma ISO 14617-10:2002
            </div>
          </div>

          <Card title="Objetivo de la Norma">
            <p className="text-slate-600 mb-4">
              La ISO 14617-10:2002 establece los símbolos gráficos para diagramas que representan convertidores de potencia fluida. Estos dispositivos son fundamentales para la conversión de energía:
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center my-6">
              <div className="bg-slate-100 p-4 rounded-lg text-center font-medium w-full md:w-48">Energía Mecánica</div>
              <ArrowRightLeft className="text-blue-500 w-8 h-8" />
              <div className="bg-blue-100 p-4 rounded-lg text-center font-medium text-blue-800 w-full md:w-48">Energía de Fluido<br/><span className="text-xs font-normal">(Hidráulica/Neumática)</span></div>
            </div>
            <InfoBox type="warning">
              <strong>Nota Importante:</strong> La norma <em>no cubre</em> bombas usadas principalmente para transporte de fluidos (estas pertenecen a la ISO 14617-9). El énfasis aquí es estrictamente la <strong>conversión de potencia</strong>.
            </InfoBox>
          </Card>

          <Card title="Áreas de Aplicación">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {['Sistemas hidráulicos y neumáticos', 'Automatización industrial', 'Diagramas de potencia fluida', 'Maquinaria y equipos industriales'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-4 h-4 text-green-500" /> {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      )
    },
    {
      id: 'terminos',
      title: '2. Definiciones',
      icon: <FileText size={20} />, // Ahora FileText está definido
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-800">Términos y Definiciones Clave</h2>
          <p className="text-slate-600">La norma define términos técnicos para evitar ambigüedades en la interpretación de planos.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: 'Bomba de desplazamiento positivo', d: 'Aumenta la energía del fluido encerrándolo en una cámara de volumen variable (ej. pistones, engranajes).' },
              { t: 'Bomba rotodinámica', d: 'Aumenta la energía del fluido mediante la acción dinámica de un impulsor o hélice giratoria (fuerza centrífuga).' },
              { t: 'Capacidad (Desplazamiento)', d: 'El volumen geométrico de fluido desplazado por cada ciclo o revolución completa.' },
              { t: 'Bomba over-centre', d: 'Dispositivo capaz de invertir el sentido del flujo sin necesidad de cambiar el sentido de giro del eje.' },
              { t: 'Bomba uni-flow', d: 'El flujo mantiene siempre la misma dirección de salida, independientemente de hacia dónde gire el eje de entrada.' }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <h4 className="font-bold text-blue-700 mb-2">{item.t}</h4>
                <p className="text-sm text-slate-600">{item.d}</p>
              </Card>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'conversion',
      title: '3. Conversión Directa',
      icon: <RotateCw size={20} />,
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-800">Conversión Mecánica ↔ Fluido</h2>
          
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <Card title="Concepto Central">
                <p className="text-slate-600">
                  Esta sección abarca dispositivos que convierten directamente energía mecánica (generalmente rotación de un eje) en energía de fluido, o viceversa, sin etapas intermedias complejas.
                </p>
                <div className="mt-4 p-4 bg-slate-50 rounded border border-slate-100">
                  <h4 className="font-semibold text-slate-700 mb-2">Símbolos que identifican:</h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500"></div>Tipo de energía (Triángulo lleno = Hidráulico, Vacío = Neumático)</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500"></div>Sentido del flujo (Dirección del triángulo)</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500"></div>Sentido de rotación (Flecha curva)</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500"></div>Reversibilidad</li>
                  </ul>
                </div>
              </Card>
            </div>
            
            <div className="flex-1">
              <Card title="Dispositivos Principales">
                <div className="grid grid-cols-1 gap-2">
                  {[
                    "Bombas hidráulicas y neumáticas",
                    "Motores hidráulicos y neumáticos",
                    "Unidades Bomba/Motor (reversibles)",
                    "Motores semi-rotativos (actuadores de giro)",
                    "Equipos de flujo variable o alternativo"
                  ].map((d, i) => (
                    <div key={i} className="flex items-center p-2 rounded hover:bg-slate-50">
                      <ChevronRight className="w-4 h-4 text-slate-400 mr-2" />
                      <span className="text-slate-700">{d}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'simbolos',
      title: '4. Símbolos Compl.',
      icon: <Settings size={20} />,
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-800">Símbolos Complementarios</h2>
          <p className="text-slate-600">
            Pequeños gráficos que se añaden al símbolo principal para agregar información técnica específica sin alterar la función base del componente.
          </p>

          <Card className="bg-gradient-to-br from-white to-slate-50">
            <h3 className="font-bold text-lg mb-4 text-center">Información que pueden indicar</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { label: 'Ajustabilidad', icon: 'Variable', desc: 'Flecha diagonal cruzando el símbolo' },
                { label: 'Tipo de Flujo', icon: 'Pulsante/Constante', desc: 'Símbolos de onda o línea' },
                { label: 'Rotación', icon: 'Horario/Anti', desc: 'Flechas curvas sobre el eje' },
                { label: 'Mecanismo', icon: 'Resorte/Manual', desc: 'Forma de retorno o control' },
                { label: 'Funcionamiento', icon: 'Rotodinámico', desc: 'Triángulo abierto vs cerrado' },
                { label: 'Velocidad', icon: 'Ajustable', desc: 'Control sobre la velocidad de giro' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-4 rounded shadow-sm border border-slate-100 text-center">
                  <div className="text-blue-600 font-bold text-sm mb-1">{item.label}</div>
                  <div className="text-xs text-slate-500">{item.desc}</div>
                </div>
              ))}
            </div>
          </Card>

          <InfoBox>
            <strong>Regla de Dibujo (ISO):</strong> Generalmente, el símbolo complementario (como la flecha de variabilidad) debe cruzar el centro del símbolo principal, a menos que la norma especifique una posición distinta para mayor claridad.
          </InfoBox>
        </div>
      )
    },
    {
      id: 'intermedio',
      title: '5. Paso Intermedio',
      icon: <Layers size={20} />,
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-800">Convertidores con Paso Intermedio</h2>
          
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1 space-y-4">
               <p className="text-lg text-slate-700">
                 Son dispositivos que convierten energía utilizando un medio fluido intermedio en lugar de una conexión mecánica directa eje-a-eje.
               </p>
               <ul className="space-y-3">
                 <li className="bg-white p-3 rounded-lg border border-l-4 border-l-blue-500 shadow-sm">
                   <strong>Convertidor Neumático-Hidráulico:</strong> Usa aire comprimido para mover aceite (o viceversa).
                 </li>
                 <li className="bg-white p-3 rounded-lg border border-l-4 border-l-purple-500 shadow-sm">
                   <strong>Intensificador de Presión:</strong> Usa baja presión sobre un área grande para generar alta presión en un área pequeña.
                 </li>
                 <li className="bg-white p-3 rounded-lg border border-l-4 border-l-green-500 shadow-sm">
                   <strong>Convertidor de Par (Torque Converter):</strong> Transmisión hidrodinámica de potencia.
                 </li>
               </ul>
            </div>
            
            <div className="w-full md:w-1/3 bg-slate-100 p-6 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-700 mb-3 text-center">Usos Comunes</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2"><Zap size={16}/> Aumentar presión localmente</li>
                <li className="flex gap-2"><Zap size={16}/> Aislamiento entre fluidos</li>
                <li className="flex gap-2"><Zap size={16}/> Frenado suave o arranque</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'lineales',
      title: '6. Cilindros',
      icon: <Cylinder size={20} />,
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-800">Motores Lineales (Cilindros)</h2>
          <p className="text-slate-600">Convierten la energía del fluido en fuerza y movimiento rectilíneo.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card title="Simple Efecto">
              <div className="flex flex-col h-full justify-between">
                <p className="text-sm text-slate-600 mb-4">
                  El fluido solo realiza trabajo en una dirección. El retorno es externo.
                </p>
                <div className="flex gap-2 text-xs font-semibold">
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">Extensión por presión</span>
                  <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded">Retorno por resorte</span>
                </div>
              </div>
            </Card>

            <Card title="Doble Efecto">
              <div className="flex flex-col h-full justify-between">
                <p className="text-sm text-slate-600 mb-4">
                  El fluido puede realizar trabajo en ambas direcciones (extensión y retracción).
                </p>
                <div className="flex gap-2 text-xs font-semibold">
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">Dos puertos</span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">Fuerza en ambos sentidos</span>
                </div>
              </div>
            </Card>
            
             <Card title="Variantes Especiales">
                <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                  <li><strong>Cilindros Telescópicos:</strong> Para carreras largas en espacios reducidos.</li>
                  <li><strong>Con Amortiguación (Cushion):</strong> Reducen el impacto al final de la carrera.</li>
                  <li><strong>Doble Vástago:</strong> Vástago pasante por ambos lados.</li>
                </ul>
            </Card>

            <Card title="Datos en el Símbolo">
               <div className="text-sm text-slate-600">
                 El símbolo permite ver:
                 <ul className="mt-2 space-y-1 pl-4 border-l-2 border-slate-200">
                    <li>Número de cámaras</li>
                    <li>Relación de áreas (diferencial)</li>
                    <li>Amortiguación (fija o ajustable)</li>
                 </ul>
               </div>
            </Card>
          </div>
        </div>
      )
    },
    {
      id: 'resumen',
      title: '7. Resumen',
      icon: <Map size={20} />,
      content: (
        <div className="space-y-8">
          <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <CheckCircle className="text-green-400" /> Cierre de la Lección
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              La norma ISO 14617-10 no es solo un conjunto de dibujos; es un <strong>lenguaje universal</strong> para la ingeniería. Dominar estos símbolos permite leer planos complejos de maquinaria, evitar errores costosos de instalación y diseñar sistemas más seguros.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white/10 p-3 rounded backdrop-blur-sm">Leer Planos</div>
              <div className="bg-white/10 p-3 rounded backdrop-blur-sm">Diseñar</div>
              <div className="bg-white/10 p-3 rounded backdrop-blur-sm">Identificar</div>
              <div className="bg-white/10 p-3 rounded backdrop-blur-sm">Integrar</div>
            </div>
          </div>

          <Card title="Relación con el Mapa Mental">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b">
                  <tr>
                    <th className="px-6 py-3">Concepto del Mapa</th>
                    <th className="px-6 py-3">Contenido en ISO 14617-10</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-6 py-4 font-medium text-slate-900">Alcance</td>
                    <td className="px-6 py-4 text-slate-600">Qué cubre (conversión) y qué excluye (transporte puro).</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-6 py-4 font-medium text-slate-900">Términos y Definiciones</td>
                    <td className="px-6 py-4 text-slate-600">Base conceptual (Desplazamiento positivo, Rotodinámico).</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 font-medium text-slate-900">Conversión Mecánica</td>
                    <td className="px-6 py-4 text-slate-600">Bombas, motores y unidades combinadas.</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-6 py-4 font-medium text-slate-900">Símbolos Complementarios</td>
                    <td className="px-6 py-4 text-slate-600">Ajustabilidad, tipo de flujo, sentido de rotación.</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 font-medium text-slate-900">Paso Intermedio</td>
                    <td className="px-6 py-4 text-slate-600">Convertidores Neumático-Hidráulicos y de par.</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-6 py-4 font-medium text-slate-900">Motores Lineales</td>
                    <td className="px-6 py-4 text-slate-600">Cilindros de simple y doble efecto, telescópicos.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      )
    }
  ];

  const activeContent = sections.find(s => s.id === activeTab)?.content;
  const activeTitle = sections.find(s => s.id === activeTab)?.title;

  return (
    <div className="flex flex-col md:flex-row h-screen bg-slate-50 text-slate-900 font-sans overflow-hidden">
      
      {/* Mobile Header */}
      <div className="md:hidden bg-white border-b border-slate-200 p-4 flex justify-between items-center z-20">
        <span className="font-bold text-slate-800">ISO 14617-10</span>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-600">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside className={`
        fixed md:static inset-y-0 left-0 z-10 w-64 bg-white border-r border-slate-200 transform transition-transform duration-200 ease-in-out flex flex-col
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="p-6 border-b border-slate-100 hidden md:block">
          <h1 className="text-xl font-bold text-slate-800">Curso ISO</h1>
          <p className="text-xs text-slate-500 mt-1">Potencia de Fluidos</p>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                setActiveTab(section.id);
                setIsMobileMenuOpen(false);
              }}
              className={`
                w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors
                ${activeTab === section.id 
                  ? 'bg-blue-50 text-blue-700' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}
              `}
            >
              <span className={activeTab === section.id ? 'text-blue-600' : 'text-slate-400'}>
                {section.icon}
              </span>
              {section.title}
            </button>
          ))}
        </nav>
        
        <div className="p-4 border-t border-slate-100">
          <div className="bg-slate-50 p-3 rounded text-xs text-slate-500 text-center">
            Progreso de la lección
            <div className="w-full bg-slate-200 h-1.5 rounded-full mt-2 overflow-hidden">
              <div 
                className="bg-blue-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${((sections.findIndex(s => s.id === activeTab) + 1) / sections.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto relative scroll-smooth">
        <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-slate-200 px-8 py-4 z-0 hidden md:flex justify-between items-center">
          <h2 className="text-xl font-semibold text-slate-800">{activeTitle}</h2>
          <span className="text-xs text-slate-400 font-mono">ISO 14617-10:2002</span>
        </header>

        <div className="p-6 md:p-8 max-w-4xl mx-auto pb-20">
           {activeContent}
        </div>

        {/* Navigation Footer within Main Area */}
        <div className="flex justify-between p-6 max-w-4xl mx-auto mt-auto">
           {/* Logic to show Previous/Next buttons could go here */}
        </div>
      </main>
      
      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-0 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

    </div>
  );
}