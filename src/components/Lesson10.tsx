import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Settings, 
  Wind, 
  Zap, 
  Activity, 
  ShieldAlert, 
  Book, 
  Map, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft,
  Menu,
  X,
  Info
} from 'lucide-react';

// --- Tipos de Datos ---

interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

// --- Componentes UI Reutilizables ---

const Card = ({ title, children, className = "" }: { title?: string, children: React.ReactNode, className?: string }) => (
  <div className={`bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden ${className}`}>
    {title && (
      <div className="bg-slate-50 px-6 py-4 border-b border-slate-100">
        <h3 className="font-semibold text-slate-800 text-lg">{title}</h3>
      </div>
    )}
    <div className="p-6 text-slate-600">
      {children}
    </div>
  </div>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-2">
    {items.map((item, idx) => (
      <li key={idx} className="flex items-start gap-3">
        <span className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
        <span className="text-slate-700 leading-relaxed">{item}</span>
      </li>
    ))}
  </ul>
);

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-2 mb-2">
    {children}
  </span>
);

// --- Componente Principal ---

export default function App() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll to top when tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  }, [activeTab]);

  const sections: Section[] = [
    {
      id: 'intro',
      title: '1. Introducción ISO 14617-8',
      icon: <Info size={20} />,
      content: (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-blue-600 text-white p-8 rounded-2xl shadow-lg mb-8">
            <h1 className="text-3xl font-bold mb-4">Norma ISO 14617-8:2002</h1>
            <p className="text-blue-100 text-lg">Símbolos gráficos para diagramas: Válvulas y Amortiguadores (Dampers)</p>
          </div>

          <Card title="Objetivo de la Norma">
            <p className="mb-4">
              Define los símbolos gráficos normalizados utilizados en diagramas técnicos a nivel mundial.
              Su objetivo principal es asegurar una interpretación unívoca en cualquier país o disciplina.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-slate-50 p-4 rounded-lg">
                <h4 className="font-semibold text-slate-900 mb-2">Aplicaciones Principales</h4>
                <BulletList items={[
                  "Diagramas de proceso (P&ID)",
                  "Sistemas hidráulicos y neumáticos",
                  "Plantas industriales",
                  "Industria alimentaria y farmacéutica"
                ]} />
              </div>
            </div>
          </Card>
        </div>
      )
    },
    {
      id: 'general',
      title: '2. Válvulas de Propósito General',
      icon: <Settings size={20} />,
      content: (
        <div className="space-y-6 animate-fadeIn">
          <Card>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                <Settings size={32} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">Definición</h2>
                <p className="mt-2 text-slate-600">
                  Son válvulas utilizadas principalmente para abrir, cerrar o desviar el flujo, sin funciones complejas de control automático continuo.
                </p>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card title="Tipos Básicos">
              <ul className="space-y-4">
                <li className="border-l-4 border-blue-500 pl-4">
                  <strong className="block text-slate-900">Válvula de dos vías</strong>
                  Permite o bloquea el paso del fluido.
                </li>
                <li className="border-l-4 border-blue-500 pl-4">
                  <strong className="block text-slate-900">Válvula de dos vías angular</strong>
                  Similar a la anterior, pero con cambio de dirección (90°).
                </li>
                <li className="border-l-4 border-blue-500 pl-4">
                  <strong className="block text-slate-900">Válvula de tres vías</strong>
                  Permite desviar el flujo entre dos salidas o mezclar.
                </li>
                <li className="border-l-4 border-blue-500 pl-4">
                  <strong className="block text-slate-900">Válvula de cuatro vías</strong>
                  Común en sistemas hidráulicos para inversión de actuadores.
                </li>
              </ul>
            </Card>

            <Card title="Información Suplementaria">
              <p className="mb-3 text-sm italic text-slate-500">Se pueden añadir símbolos para indicar:</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge>Antirretorno (Check)</Badge>
                <Badge>Seguridad</Badge>
                <Badge>Preajuste</Badge>
                <Badge>Cambio por presión/temp</Badge>
              </div>
              
              <h4 className="font-semibold text-slate-900 mb-2">Tipos de Construcción</h4>
              <p className="text-xs text-amber-600 mb-2 bg-amber-50 p-2 rounded border border-amber-200">
                ⚠️ Usar solo cuando sea estrictamente necesario para no sobrecargar el diagrama.
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>• Globo</div>
                <div>• Bola</div>
                <div>• Compuerta</div>
                <div>• Aguja</div>
                <div>• Mariposa</div>
                <div>• Diafragma</div>
              </div>
            </Card>
          </div>
        </div>
      )
    },
    {
      id: 'dampers',
      title: '3. Amortiguadores (Dampers)',
      icon: <Wind size={20} />,
      content: (
        <div className="space-y-6 animate-fadeIn">
          <Card>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-teal-100 text-teal-600 rounded-lg">
                <Wind size={32} />
              </div>
              <h2 className="text-xl font-bold text-slate-900">¿Qué es un Damper?</h2>
            </div>
            <p className="text-lg text-slate-700">
              Dispositivo que regula o bloquea el flujo de <strong>gases o aire</strong>. Es fundamental en sistemas de ventilación (HVAC), hornos industriales y grandes ductos.
            </p>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card title="Símbolos Definidos">
              <BulletList items={[
                "Damper de dos o tres vías",
                "Damper multilámina (Louver)",
                "Damper de control (Regulación fina)"
              ]} />
            </Card>

            <Card title="Funciones Adicionales y Actuadores">
              <p className="mb-4">Siguen las mismas reglas que las válvulas generales. Pueden incluir:</p>
              <BulletList items={[
                "Función antirretorno (Backdraft damper)",
                "Función de seguridad (Cortafuegos)",
                "Ajustabilidad manual o preajustada",
                "Actuadores de diafragma o cilindro"
              ]} />
            </Card>
          </div>
        </div>
      )
    },
    {
      id: 'fluid-power',
      title: '4. Válvulas de Potencia Fluida',
      icon: <Zap size={20} />,
      content: (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-r-lg">
            <h2 className="text-xl font-bold text-indigo-900 mb-2">Contexto</h2>
            <p className="text-indigo-800">
              Usadas en sistemas <strong>hidráulicos y neumáticos</strong>. No solo abren/cierran, sino que dirigen, regulan y protegen la energía del fluido a alta presión.
            </p>
          </div>

          <Card title="Anatomía del Símbolo">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-1 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-slate-200 rounded text-slate-600 font-bold">1</div>
                  <p>El símbolo se divide en <strong>cuadrados o rectángulos</strong> adyacentes.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-slate-200 rounded text-slate-600 font-bold">2</div>
                  <p>Cada cuadrado representa una <strong>posición distinta</strong> de la válvula.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-slate-200 rounded text-slate-600 font-bold">3</div>
                  <p>Las flechas internas muestran el camino del flujo en esa posición específica.</p>
                </div>
              </div>
              
              {/* Abstract visual representation of a directional valve symbol */}
              <div className="p-6 bg-slate-100 rounded-lg border border-slate-300">
                <div className="flex border-2 border-slate-800 bg-white">
                  <div className="w-16 h-16 border-r border-slate-800 flex items-center justify-center relative">
                    <div className="absolute w-0.5 h-10 bg-slate-800 rotate-45"></div>
                    <div className="absolute w-0.5 h-10 bg-slate-800 -rotate-45"></div>
                  </div>
                  <div className="w-16 h-16 flex items-center justify-center relative">
                     <div className="absolute h-10 w-0.5 bg-slate-800 left-1/3"></div>
                     <div className="absolute h-10 w-0.5 bg-slate-800 right-1/3"></div>
                     <div className="absolute w-2 h-2 border-t-2 border-r-2 border-slate-800 rotate-45 top-3 left-1/3 -ml-[4.5px]"></div>
                     <div className="absolute w-2 h-2 border-b-2 border-l-2 border-slate-800 rotate-45 bottom-3 right-1/3 -ml-[2.5px]"></div>
                  </div>
                </div>
                <p className="text-center text-xs text-slate-500 mt-2">Ejemplo conceptual: Válvula direccional</p>
              </div>
            </div>
          </Card>

          <Card title="Tipos Principales">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-3 rounded">
                    <h4 className="font-bold text-slate-700">Control de Dirección</h4>
                    <p className="text-sm text-slate-600">Válvulas direccionales 4/2, 4/3, 5/2, etc.</p>
                </div>
                <div className="bg-slate-50 p-3 rounded">
                    <h4 className="font-bold text-slate-700">Control de Presión</h4>
                    <p className="text-sm text-slate-600">Alivio, Reductoras, De dos etapas.</p>
                </div>
                <div className="bg-slate-50 p-3 rounded">
                    <h4 className="font-bold text-slate-700">Control de Caudal</h4>
                    <p className="text-sm text-slate-600">Reguladores de flujo, Divisores de caudal.</p>
                </div>
                <div className="bg-slate-50 p-3 rounded">
                    <h4 className="font-bold text-slate-700">Combinaciones</h4>
                    <p className="text-sm text-slate-600">Suelen llevar pilotos hidráulicos o solenoides eléctricos.</p>
                </div>
             </div>
          </Card>
        </div>
      )
    },
    {
      id: 'hygienic',
      title: '5. Válvulas Higiénicas',
      icon: <Activity size={20} />,
      content: (
        <div className="space-y-6 animate-fadeIn">
           <Card className="border-l-4 border-green-500">
             <div className="flex items-center gap-3 mb-2">
                <Activity className="text-green-600" />
                <h2 className="text-xl font-bold text-slate-900">Industria Sanitaria</h2>
             </div>
             <p className="text-slate-600">
               Diseñadas para procesos críticos como la <strong>industria alimentaria, farmacéutica y biotecnología</strong>.
             </p>
           </Card>

           <div className="grid md:grid-cols-2 gap-6">
             <Card title="Características Gráficas">
               <BulletList items={[
                 "Usan los mismos símbolos base que las válvulas de potencia.",
                 "El énfasis está en mostrar la separación de fluidos.",
                 "Indican capacidades CIP (Clean In Place) o SIP (Steam In Place).",
                 "Prevención de contaminación cruzada."
               ]} />
             </Card>
             <Card title="Ejemplo de Lógica">
               <div className="bg-slate-50 p-4 rounded text-center">
                 <p className="text-slate-800 font-medium">Lógica de Mix-proof (Prueba de mezcla)</p>
                 <div className="my-4 text-slate-500 text-sm">
                   Cambio de flujo A → B <br/>
                   o <br/>
                   B → C
                 </div>
                 <p className="text-xs text-slate-500">
                   Dependiendo de la posición, asegura que el fluido de limpieza no toque el producto.
                 </p>
               </div>
             </Card>
           </div>
        </div>
      )
    },
    {
      id: 'special',
      title: '6. Funciones Especiales',
      icon: <ShieldAlert size={20} />,
      content: (
        <div className="space-y-6 animate-fadeIn">
          <Card>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Autooperadas</h2>
            <p className="mb-6 text-slate-700">
              Son válvulas que cumplen una función específica sin necesidad de energía externa (eléctrica o neumática de control). Actúan por la física del propio fluido.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition">
                <h3 className="font-bold text-slate-800">Válvula de descarga</h3>
                <p className="text-sm text-slate-500 mt-1">Libera presión automáticamente.</p>
              </div>
              <div className="p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition">
                <h3 className="font-bold text-slate-800">Trampa de vapor</h3>
                <p className="text-sm text-slate-500 mt-1">Elimina condensado sin dejar escapar vapor vivo.</p>
              </div>
              <div className="p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition">
                <h3 className="font-bold text-slate-800">Ventilación automática</h3>
                <p className="text-sm text-slate-500 mt-1">Purgadores de aire en tuberías.</p>
              </div>
            </div>
            <div className="mt-4 p-3 bg-blue-50 text-blue-800 text-sm rounded">
              <strong>Nota:</strong> Se representan con un símbolo simple, sin reglas complejas, ya que su función es intrínseca.
            </div>
          </Card>
        </div>
      )
    },
    {
      id: 'definitions',
      title: '7. Definiciones Clave',
      icon: <Book size={20} />,
      content: (
        <div className="space-y-6 animate-fadeIn">
          <Card title="Glosario Normativo">
            <dl className="space-y-4">
              <div className="pb-4 border-b border-slate-100">
                <dt className="font-bold text-blue-700 text-lg">Válvula de seguridad</dt>
                <dd className="mt-1 text-slate-600">Libera fluido automáticamente al superar una presión segura preestablecida para evitar explosiones o fallos.</dd>
              </div>
              <div className="pb-4 border-b border-slate-100">
                <dt className="font-bold text-blue-700 text-lg">Válvula de vacío</dt>
                <dd className="mt-1 text-slate-600">Admite aire en el sistema para evitar presiones negativas (vacío) que podrían colapsar tanques o tuberías.</dd>
              </div>
              <div className="pb-4 border-b border-slate-100">
                <dt className="font-bold text-blue-700 text-lg">Válvula de control</dt>
                <dd className="mt-1 text-slate-600">Elemento final de control que regula caudal, presión, temperatura o nivel modulando el paso del fluido.</dd>
              </div>
              <div>
                <dt className="font-bold text-blue-700 text-lg">Otros términos</dt>
                <dd className="mt-1 text-slate-600">
                   <span className="font-semibold">Válvula reductora:</span> Mantiene una presión de salida constante.<br/>
                   <span className="font-semibold">Válvula de alivio:</span> Similar a la de seguridad, pero para control de presión operativa en líquidos.
                </dd>
              </div>
            </dl>
          </Card>
        </div>
      )
    },
    {
      id: 'map',
      title: '8. Mapa Mental y Estructura',
      icon: <Map size={20} />,
      content: (
        <div className="space-y-6 animate-fadeIn">
          <Card title="Relación Concepto - Sección ISO">
            <p className="mb-4 text-slate-600">Referencia rápida para localizar símbolos en el documento oficial de la norma.</p>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm whitespace-nowrap">
                <thead className="uppercase tracking-wider border-b-2 border-slate-200 bg-slate-50">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-slate-700 font-bold">Concepto del Mapa</th>
                    <th scope="col" className="px-6 py-4 text-slate-700 font-bold">Sección en la Norma</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-medium text-slate-900">Válvulas de propósito general</td>
                    <td className="px-6 py-4 text-slate-500">Sección 4</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-medium text-slate-900">Amortiguadores (dampers)</td>
                    <td className="px-6 py-4 text-slate-500">Sección 5</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-medium text-slate-900">Válvulas para potencia fluida</td>
                    <td className="px-6 py-4 text-slate-500">Sección 6</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-medium text-slate-900">Válvulas higiénicas</td>
                    <td className="px-6 py-4 text-slate-500">Sección 7</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-medium text-slate-900">Funciones especiales</td>
                    <td className="px-6 py-4 text-slate-500">Sección 8</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-medium text-slate-900">Definiciones clave</td>
                    <td className="px-6 py-4 text-slate-500">Sección 3</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      )
    },
    {
      id: 'conclusion',
      title: '9. Cierre de la Lección',
      icon: <CheckCircle size={20} />,
      content: (
        <div className="space-y-6 animate-fadeIn text-center">
          <div className="bg-gradient-to-br from-green-500 to-emerald-700 text-white p-10 rounded-2xl shadow-xl">
            <CheckCircle className="w-16 h-16 mx-auto mb-4 opacity-90" />
            <h2 className="text-3xl font-bold mb-4">¡Lección Completada!</h2>
            <p className="text-xl opacity-90 mb-6">
              La ISO 14617-8 es la base fundamental para la ingeniería de procesos moderna.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 text-left mt-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <h4 className="font-bold mb-1">Unifica Lenguaje</h4>
                <p className="text-sm opacity-80">Permite que un ingeniero en Japón entienda el plano de uno en México.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <h4 className="font-bold mb-1">Reduce Errores</h4>
                <p className="text-sm opacity-80">Evita confusiones costosas entre tipos de válvulas similares.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <h4 className="font-bold mb-1">Facilita P&IDs</h4>
                <p className="text-sm opacity-80">Es el estándar de facto para Diagramas de Tuberías e Instrumentación.</p>
              </div>
            </div>

            <button 
              onClick={() => setActiveTab(0)}
              className="mt-8 bg-white text-green-700 px-6 py-3 rounded-full font-bold shadow-lg hover:bg-slate-100 transition transform hover:scale-105"
            >
              Repasar Lección
            </button>
          </div>
        </div>
      )
    }
  ];

  const nextTab = () => {
    if (activeTab < sections.length - 1) setActiveTab(activeTab + 1);
  };

  const prevTab = () => {
    if (activeTab > 0) setActiveTab(activeTab - 1);
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans">
      
      {/* Mobile Header */}
      <div className="lg:hidden bg-white shadow-sm p-4 sticky top-0 z-20 flex justify-between items-center">
        <div className="font-bold text-slate-800 flex items-center gap-2">
          <BookOpen className="text-blue-600" />
          <span>ISO 14617-8</span>
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-600">
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row min-h-screen">
        
        {/* Sidebar Navigation */}
        <aside className={`
          lg:w-80 bg-white border-r border-slate-200 flex-shrink-0 
          fixed lg:sticky top-16 lg:top-0 h-[calc(100vh-64px)] lg:h-screen overflow-y-auto
          transition-transform duration-300 z-10
          ${isMobileMenuOpen ? 'translate-x-0 w-full' : '-translate-x-full lg:translate-x-0'}
          lg:block
        `}>
          <div className="p-6 hidden lg:block">
            <div className="flex items-center gap-3 text-blue-700 font-extrabold text-xl">
              <BookOpen size={28} />
              <span>Curso Técnico</span>
            </div>
            <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Válvulas y Dampers</p>
          </div>

          <nav className="p-4 space-y-1">
            {sections.map((section, idx) => (
              <button
                key={section.id}
                onClick={() => setActiveTab(idx)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left text-sm font-medium rounded-lg transition-colors duration-200
                  ${activeTab === idx 
                    ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border-l-4 border-transparent'
                  }`}
              >
                <span className={`${activeTab === idx ? 'text-blue-600' : 'text-slate-400'}`}>
                  {section.icon}
                </span>
                <span className="line-clamp-1">{section.title}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-4 lg:p-8 lg:pt-12 pb-24">
          <div className="max-w-4xl mx-auto">
            {/* Header of Content */}
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-800">{sections[activeTab].title}</h2>
              <span className="text-sm text-slate-400 font-mono hidden sm:block">
                Pág {activeTab + 1} de {sections.length}
              </span>
            </div>

            {/* Dynamic Content */}
            <div className="min-h-[400px]">
              {sections[activeTab].content}
            </div>

            {/* Footer Navigation Buttons */}
            <div className="mt-12 pt-6 border-t border-slate-200 flex justify-between items-center">
              <button
                onClick={prevTab}
                disabled={activeTab === 0}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all
                  ${activeTab === 0 
                    ? 'opacity-0 pointer-events-none' 
                    : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 hover:shadow-sm'
                  }`}
              >
                <ArrowLeft size={18} />
                Anterior
              </button>

              <button
                onClick={nextTab}
                disabled={activeTab === sections.length - 1}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium shadow-sm transition-all
                  ${activeTab === sections.length - 1
                    ? 'opacity-0 pointer-events-none'
                    : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md'
                  }`}
              >
                Siguiente
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}