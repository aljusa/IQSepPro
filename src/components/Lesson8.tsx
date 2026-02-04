import React, { useState } from 'react';
import { 
  BookOpen, 
  Activity, 
  MapPin, 
  Cpu, 
  ShieldAlert, 
  Network, 
  CheckCircle, 
  ChevronRight, 
  ChevronLeft,
  Menu,
  X
} from 'lucide-react';

// --- Types ---
interface SectionContent {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

// --- Data ---
const lessonData: SectionContent[] = [
  {
    id: 'intro',
    title: '1. Introducción',
    icon: <BookOpen className="w-5 h-5" />,
    content: (
      <div className="space-y-6 animate-fadeIn">
        <header className="border-b pb-4 border-slate-200">
          <h2 className="text-3xl font-bold text-slate-800">Introducción a la ISO 14617-6</h2>
          <p className="text-slate-500 mt-2">Norma ISO 14617-6:2002 - Símbolos Gráficos</p>
        </header>
        
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 shadow-sm">
          <p className="text-lg text-slate-700">
            La <strong>ISO 14617-6:2002</strong> define los símbolos gráficos para representar funciones de medición y control en diagramas técnicos, especialmente en plantas de proceso, sistemas industriales y automatización.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-lg border shadow-sm">
            <h3 className="font-semibold text-lg mb-3 text-indigo-700">Enfoque Funcional</h3>
            <p className="text-slate-600 mb-4">
              A diferencia de otras partes de la norma (que representan dispositivos físicos), esta parte se centra en las <strong>funciones</strong> que se realizan:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>Medir</li>
              <li>Indicar</li>
              <li>Registrar</li>
              <li>Transmitir</li>
              <li>Controlar</li>
              <li>Comparar</li>
              <li>Procesar información</li>
            </ul>
          </div>
          
          <div className="bg-white p-5 rounded-lg border shadow-sm">
            <h3 className="font-semibold text-lg mb-3 text-indigo-700">Representación Dual</h3>
            <p className="text-slate-600">
              Un mismo símbolo puede representar:
            </p>
            <div className="mt-4 space-y-3">
              <div className="flex items-center p-3 bg-slate-50 rounded">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                <span>Una función abstracta</span>
              </div>
              <div className="flex items-center p-3 bg-slate-50 rounded">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                <span>Un dispositivo real que ejecuta esa función</span>
              </div>
            </div>
            <p className="text-sm text-slate-500 mt-4 italic">Dependiendo del nivel de detalle del diagrama.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'functions',
    title: '2. Funciones',
    icon: <Activity className="w-5 h-5" />,
    content: (
      <div className="space-y-6 animate-fadeIn">
        <header className="border-b pb-4 border-slate-200">
          <h2 className="text-3xl font-bold text-slate-800">Funciones de Medición y Control</h2>
        </header>

        <section className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
            <span className="bg-indigo-100 text-indigo-700 p-2 rounded mr-3">?</span>
            ¿Qué es una función de medición y control?
          </h3>
          <p className="text-slate-600 mb-4">
            Es una acción lógica o funcional aplicada a una variable de proceso para:
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Obtener información</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Tomar decisiones</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Actuar sobre el proceso</span>
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
            <h3 className="text-lg font-bold text-blue-700 mb-3 border-b border-blue-200 pb-2">Funciones de Medición</h3>
            <p className="text-sm text-slate-600 mb-4">Permiten conocer el valor de una variable física (Temperatura, Presión, Caudal, Nivel, etc.).</p>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li><strong>Indicación (I):</strong> Mostrar el valor medido.</li>
              <li><strong>Transmisión (T):</strong> Enviar la señal a otro punto.</li>
              <li><strong>Registro (R):</strong> Almacenar el valor en el tiempo.</li>
              <li><strong>Alarma (A):</strong> Avisar cuando se supera un límite.</li>
            </ul>
          </div>

          <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
            <h3 className="text-lg font-bold text-orange-700 mb-3 border-b border-orange-200 pb-2">Funciones de Control</h3>
            <p className="text-sm text-slate-600 mb-4">Permiten actuar sobre el proceso para mantener una condición deseada.</p>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li><strong>Control (C):</strong> Acción automática sobre una variable.</li>
              <li><strong>Conmutación (S):</strong> Control tipo ON/OFF.</li>
              <li><strong>Realimentación:</strong> Compara valor medido vs. Set Point.</li>
            </ul>
          </div>
        </div>
        
        <p className="text-center text-slate-500 text-sm italic mt-4">
          Estas funciones se representan mediante símbolos circulares u ovalados con códigos de letras en su interior.
        </p>
      </div>
    )
  },
  {
    id: 'location',
    title: '3. Ubicación',
    icon: <MapPin className="w-5 h-5" />,
    content: (
      <div className="space-y-6 animate-fadeIn">
        <header className="border-b pb-4 border-slate-200">
          <h2 className="text-3xl font-bold text-slate-800">Ubicación de Instrumentos</h2>
        </header>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6">
          <h4 className="font-bold text-amber-800">Importancia</h4>
          <p className="text-amber-700">La norma permite indicar dónde se encuentra el instrumento, clave para: <strong>Operación, Mantenimiento y Seguridad.</strong></p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: 'Ubicación Primaria', desc: 'Instrumento accesible al operador.' },
            { title: 'Ubicación Auxiliar', desc: 'Instrumento no accesible directamente (ej. detrás de un panel).' },
            { title: 'Sala de Control Central', desc: 'Función ubicada en una estación central de operación.' },
            { title: 'Sala de Control Local', desc: 'Función cercana al proceso o equipo.' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow-sm border hover:border-indigo-300 transition-colors">
              <h4 className="font-bold text-indigo-600 mb-1">{item.title}</h4>
              <p className="text-slate-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-100 p-4 rounded text-center text-slate-600 text-sm mt-4">
          <p>La ubicación se indica mediante símbolos adicionales dentro del símbolo funcional.</p>
          <p className="mt-2 font-medium">Ausencia de símbolo = Ubicación no definida o Montado en Campo.</p>
        </div>
      </div>
    )
  },
  {
    id: 'logic',
    title: '4. Lógica',
    icon: <Cpu className="w-5 h-5" />,
    content: (
      <div className="space-y-6 animate-fadeIn">
        <header className="border-b pb-4 border-slate-200">
          <h2 className="text-3xl font-bold text-slate-800">Lógica y Procesamiento</h2>
        </header>

        <p className="text-lg text-slate-600">
          La lógica se refiere al procesamiento de señales para tomar decisiones automáticas o semiautomáticas (Comparación, Selección, Cálculo, Conversión).
        </p>

        <div className="overflow-hidden bg-white shadow sm:rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo de Lógica</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descripción</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-700">AND / OR</td>
                <td className="px-6 py-4 text-sm text-slate-600">Se cumplen varias condiciones simultáneamente o alternativamente.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-700">NOT</td>
                <td className="px-6 py-4 text-sm text-slate-600">Inversión del estado lógico (Negación).</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-700">Comparación</td>
                <td className="px-6 py-4 text-sm text-slate-600">Evaluación entre dos señales.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-700">PLC / Computadora</td>
                <td className="px-6 py-4 text-sm text-slate-600">Funciones indicadas como "time-sharing".</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="p-4 bg-indigo-50 text-indigo-800 rounded-md text-sm text-center">
            Estas funciones se representan mediante símbolos específicos conectados por enlaces funcionales, no físicos.
        </div>
      </div>
    )
  },
  {
    id: 'backup',
    title: '5. Respaldo',
    icon: <ShieldAlert className="w-5 h-5" />,
    content: (
      <div className="space-y-6 animate-fadeIn">
        <header className="border-b pb-4 border-slate-200">
          <h2 className="text-3xl font-bold text-slate-800">Funciones de Respaldo (Back-up)</h2>
        </header>

        <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
                <p className="text-slate-700 mb-4 text-lg">
                    Es una función secundaria que entra en operación cuando falla la función principal, se pierde la señal, la alimentación, o el sistema automático.
                </p>
                <div className="bg-white p-4 rounded border-l-4 border-red-500 shadow-sm">
                    <h4 className="font-bold text-red-600 mb-2">Representación</h4>
                    <ul className="list-disc list-inside text-slate-600 space-y-1">
                        <li>Símbolo adosado al principal.</li>
                        <li><strong>No</strong> se conecta mediante enlace funcional.</li>
                        <li>Indica redundancia o seguridad operativa.</li>
                    </ul>
                </div>
            </div>
            <div className="flex-1 bg-slate-100 p-6 rounded-xl flex flex-col items-center justify-center text-center">
                <div className="text-4xl mb-2">🖥️ + ✋</div>
                <h4 className="font-bold text-slate-800">Ejemplo Típico</h4>
                <p className="text-slate-600 mt-2">
                    Control automático por computadora <br/>
                    <span className="font-bold">+</span><br/>
                    Respaldo mediante dispositivo discreto (manual)
                </p>
            </div>
        </div>
      </div>
    )
  },
  {
    id: 'mindmap',
    title: '6. Relaciones',
    icon: <Network className="w-5 h-5" />,
    content: (
      <div className="space-y-6 animate-fadeIn">
        <header className="border-b pb-4 border-slate-200">
          <h2 className="text-3xl font-bold text-slate-800">Relación de Conceptos</h2>
        </header>

        <p className="text-slate-600">Resumen estructural de cómo interactúan los conceptos en la norma.</p>

        <div className="grid gap-4 md:grid-cols-2">
            {[
                { concept: "Funciones de medición y control", role: "Definen QUÉ se hace con la variable", color: "bg-blue-100 border-blue-300 text-blue-800" },
                { concept: "Ubicación de instrumentos", role: "Indica DÓNDE se ejecuta la función", color: "bg-green-100 border-green-300 text-green-800" },
                { concept: "Lógica", role: "Decide CÓMO se procesa la información", color: "bg-purple-100 border-purple-300 text-purple-800" },
                { concept: "Respaldo", role: "Garantiza SEGURIDAD y continuidad", color: "bg-red-100 border-red-300 text-red-800" }
            ].map((card, idx) => (
                <div key={idx} className={`p-6 rounded-lg border-2 ${card.color} flex flex-col justify-center`}>
                    <h3 className="font-bold text-lg mb-2">{card.concept}</h3>
                    <p className="font-medium opacity-90">{card.role}</p>
                </div>
            ))}
        </div>
      </div>
    )
  },
  {
    id: 'conclusion',
    title: '7. Cierre',
    icon: <CheckCircle className="w-5 h-5" />,
    content: (
      <div className="space-y-8 animate-fadeIn text-center">
        <header>
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Fin de la Lección</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
        </header>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-slate-800 mb-6">¿Qué hemos aprendido?</h3>
            <p className="text-slate-600 mb-6">
                La ISO 14617-6 proporciona el lenguaje gráfico funcional para describir cómo un sistema:
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
                {['Mide', 'Analiza', 'Decide', 'Controla', 'Se Protege'].map(tag => (
                    <span key={tag} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full font-medium border border-slate-200">{tag}</span>
                ))}
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                <h4 className="font-bold text-green-800 mb-2">Utilidad Práctica</h4>
                <p className="text-green-700 text-sm">
                    Dominar esta norma te permite leer P&IDs, comprender lazos de control e integrar automatización avanzada con seguridad.
                </p>
            </div>
        </div>

        <button 
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-md font-medium"
        >
            Reiniciar Lección
        </button>
      </div>
    )
  }
];

// --- Main Component ---
const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const activeContent = lessonData[activeTab];
  const isLast = activeTab === lessonData.length - 1;
  const isFirst = activeTab === 0;

  const handleNext = () => {
    if (!isLast) {
      setActiveTab(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (!isFirst) {
      setActiveTab(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* Mobile Header */}
      <div className="md:hidden bg-indigo-900 text-white p-4 flex justify-between items-center shadow-md sticky top-0 z-50">
        <h1 className="font-bold text-lg truncate">ISO 14617-6:2002</h1>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside className={`
        fixed inset-y-0 left-0 z-40 w-72 bg-indigo-900 text-white transform transition-transform duration-300 ease-in-out shadow-xl
        md:relative md:translate-x-0
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6 border-b border-indigo-800">
          <h1 className="text-2xl font-bold leading-tight">Curso de Instrumentación</h1>
          <p className="text-indigo-300 text-sm mt-1">Símbolos Gráficos</p>
        </div>
        
        <nav className="p-4 space-y-2 overflow-y-auto max-h-[calc(100vh-100px)]">
          {lessonData.map((section, index) => (
            <button
              key={section.id}
              onClick={() => {
                setActiveTab(index);
                setIsMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`w-full flex items-center p-3 rounded-lg transition-all duration-200 text-left group
                ${activeTab === index 
                  ? 'bg-indigo-700 text-white shadow-md border-l-4 border-indigo-400' 
                  : 'text-indigo-200 hover:bg-indigo-800 hover:text-white'
                }`}
            >
              <span className={`mr-3 ${activeTab === index ? 'text-indigo-300' : 'text-indigo-400 group-hover:text-white'}`}>
                {section.icon}
              </span>
              <span className="font-medium text-sm">{section.title}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-8 lg:p-12 max-w-5xl mx-auto w-full">
        {/* Progress Bar (Visual indicator) */}
        <div className="w-full bg-slate-200 h-1.5 rounded-full mb-8 overflow-hidden">
            <div 
                className="bg-indigo-600 h-full transition-all duration-500 ease-out"
                style={{ width: `${((activeTab + 1) / lessonData.length) * 100}%` }}
            ></div>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-2xl shadow-lg min-h-[500px] flex flex-col">
            <div className="p-6 md:p-10 flex-grow">
                {activeContent.content}
            </div>

            {/* Footer Navigation Buttons */}
            <div className="border-t border-slate-100 p-6 bg-slate-50 rounded-b-2xl flex justify-between items-center">
                <button 
                    onClick={handlePrev}
                    disabled={isFirst}
                    className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors
                        ${isFirst 
                            ? 'text-slate-300 cursor-not-allowed' 
                            : 'text-indigo-600 hover:bg-indigo-100'
                        }`}
                >
                    <ChevronLeft className="w-5 h-5 mr-1" />
                    Anterior
                </button>

                <span className="text-xs text-slate-400 font-medium uppercase tracking-wider hidden sm:block">
                    Sección {activeTab + 1} de {lessonData.length}
                </span>

                <button 
                    onClick={handleNext}
                    disabled={isLast}
                    className={`flex items-center px-6 py-2 rounded-lg font-bold shadow-sm transition-all
                        ${isLast 
                            ? 'bg-slate-200 text-slate-400 cursor-not-allowed' 
                            : 'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-md'
                        }`}
                >
                    {isLast ? 'Finalizado' : 'Siguiente'}
                    {!isLast && <ChevronRight className="w-5 h-5 ml-1" />}
                </button>
            </div>
        </div>
        
        <footer className="mt-8 text-center text-slate-400 text-sm">
            © 2024 Curso de Normas Técnicas | ISO 14617-6
        </footer>
      </main>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default App;