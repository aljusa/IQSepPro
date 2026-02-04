import React, { useState } from 'react';
import { 
  BookOpen, 
  Thermometer, 
  Settings, 
  Wind, 
  Flame, 
  Snowflake, 
  Fan, 
  AlertTriangle, 
  Map, 
  CheckCircle,
  Menu,
  ChevronRight,
  Info
} from 'lucide-react';

// --- Tipos de Datos ---
interface SectionContent {
  title: string;
  icon: React.ElementType;
  content: React.ReactNode;
}

// --- Componente Principal ---
export default function App() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Datos de la lección
  const sections: SectionContent[] = [
    {
      title: "1. Introducción",
      icon: BookOpen,
      content: (
        <div className="space-y-6 animate-in fade-in duration-500">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
            <h3 className="text-xl font-bold text-blue-800 mb-2">Propósito de la Norma ISO 14617-11:2002</h3>
            <p className="text-gray-700">
              Esta norma establece los símbolos gráficos internacionales para diagramas, enfocándose específicamente en 
              <strong> Dispositivos de transferencia de calor</strong> y <strong>Motores térmicos</strong>.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" /> Usos Principales
              </h4>
              <ul className="space-y-2 text-gray-600 list-disc list-inside">
                <li>Diagramas de proceso (P&ID)</li>
                <li>Plantas industriales</li>
                <li>Sistemas energéticos</li>
                <li>Ingeniería térmica y mecánica</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" /> Objetivo
              </h4>
              <p className="text-gray-600">
                Asegurar que equipos térmicos complejos puedan interpretarse de forma <span className="font-semibold text-blue-600">clara, uniforme y sin ambigüedades</span>, independientemente del país o sector industrial.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "2. Intercambiadores",
      icon: Thermometer,
      content: (
        <div className="space-y-6 animate-in fade-in duration-500">
          <h3 className="text-2xl font-bold text-gray-800 border-b pb-2">Intercambiadores de calor y condensadores</h3>
          
          <div className="bg-indigo-50 p-4 rounded-lg">
            <h4 className="font-bold text-indigo-900">🔹 Concepto General</h4>
            <p className="text-indigo-800">
              Dispositivo que permite la transferencia de energía térmica entre dos o más fluidos, sin que estos se mezclen necesariamente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Símbolos Básicos</h4>
              <ul className="bg-white p-4 rounded-lg border shadow-sm space-y-2">
                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-gray-400 rounded-full"></div>Envolvente (tanque)</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-gray-400 rounded-full"></div>Serpentín de calentamiento/enfriamiento</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-gray-400 rounded-full"></div>Tubo aleteado</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-gray-400 rounded-full"></div>Boquilla de aspersión</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Equipos Representados</h4>
              <ul className="bg-white p-4 rounded-lg border shadow-sm space-y-2">
                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-400 rounded-full"></div>Intercambiadores de calor</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-400 rounded-full"></div>Condensadores</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-400 rounded-full"></div>Desrecalentadores</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-400 rounded-full"></div>Humidificadores</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
            <h5 className="font-bold text-yellow-800 flex items-center gap-2">
              <Info className="w-5 h-5" /> Regla Clave
            </h5>
            <p className="text-yellow-900 italic">
              "La envolvente solo se representa cuando su forma o presencia es relevante para la función térmica del equipo."
            </p>
          </div>
        </div>
      )
    },
    {
      title: "3. Diseños Específicos",
      icon: Settings,
      content: (
        <div className="space-y-6 animate-in fade-in duration-500">
          <div className="flex items-center justify-between border-b pb-4">
            <h3 className="text-2xl font-bold text-gray-800">Diseños específicos de intercambiadores</h3>
            <span className="text-xs font-bold uppercase tracking-wide bg-gray-200 text-gray-700 px-3 py-1 rounded-full">Uso Restringido</span>
          </div>

          <p className="text-gray-600">
            Estos símbolos se emplean <span className="font-bold text-red-500">únicamente</span> cuando es necesario mostrar el tipo constructivo del intercambiador, no en diagramas simplificados.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Tubos rectos", "Cabezal flotante", "Tubos en U", 
              "Tubos en espiral", "Doble tubo", "De placas", 
              "Regenerativo (precalentador)"
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-3 rounded shadow-sm border border-gray-200 flex items-center gap-3 hover:bg-gray-50 transition-colors">
                <Settings className="w-5 h-5 text-gray-400" />
                <span className="font-medium text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-red-50 border border-red-100 rounded-lg p-4 text-center">
            <span className="font-bold text-red-700">⚠️ Regla Normativa:</span>
            <p className="text-red-600 mt-1">
              Estos símbolos no deben usarse de forma indiscriminada, solo cuando la construcción influye en la operación o el análisis del sistema.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "4. Torres de Enfriamiento",
      icon: Wind,
      content: (
        <div className="space-y-6 animate-in fade-in duration-500">
          <h3 className="text-2xl font-bold text-gray-800 border-b pb-2">Torres de Enfriamiento</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-blue-700 mb-3">Función Principal</h4>
              <p className="text-gray-600 mb-4">
                Una torre de enfriamiento disipa calor al ambiente mediante tres mecanismos físicos:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center bg-blue-50 p-3 rounded-lg text-blue-800">
                  <Wind className="w-5 h-5 mr-3" /> Evaporación
                </li>
                <li className="flex items-center bg-blue-50 p-3 rounded-lg text-blue-800">
                  <Wind className="w-5 h-5 mr-3" /> Convección
                </li>
                <li className="flex items-center bg-blue-50 p-3 rounded-lg text-blue-800">
                  <Wind className="w-5 h-5 mr-3" /> Contacto aire-agua
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Variantes de Símbolos</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-white p-2 rounded shadow-sm"><Settings className="w-6 h-6 text-gray-600" /></div>
                  <div>
                    <strong className="block text-gray-900">Tiro Inducido</strong>
                    <span className="text-sm text-gray-500">Ventilador en la parte superior succionando aire.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-white p-2 rounded shadow-sm"><Settings className="w-6 h-6 text-gray-600" /></div>
                  <div>
                    <strong className="block text-gray-900">Tiro Forzado</strong>
                    <span className="text-sm text-gray-500">Ventilador en la base empujando aire.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-white p-2 rounded shadow-sm"><Settings className="w-6 h-6 text-gray-600" /></div>
                  <div>
                    <strong className="block text-gray-900">Con Humidificación</strong>
                    <span className="text-sm text-gray-500">Símbolos complementarios para control de humedad.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "5. Calderas y Hornos",
      icon: Flame,
      content: (
        <div className="space-y-8 animate-in fade-in duration-500">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Calderas */}
            <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-orange-100 rounded-full text-orange-600">
                  <Flame className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-orange-900">Calderas y Generadores</h3>
              </div>
              <p className="text-gray-700 mb-4 text-sm">Convierten energía térmica en vapor o agua caliente.</p>
              <ul className="space-y-2 text-gray-800 text-sm font-medium">
                <li>• Caldera simple</li>
                <li>• Caldera con domo</li>
                <li>• Generador de vapor</li>
              </ul>
            </div>

            {/* Hornos */}
            <div className="bg-red-50 p-6 rounded-xl border border-red-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-red-100 rounded-full text-red-600">
                  <Flame className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-red-900">Hornos</h3>
              </div>
              <p className="text-gray-700 mb-4 text-sm">Equipo donde el calor se genera y aplica directamente a un proceso (metalurgia, cerámica).</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 mb-4 text-lg">Fuentes Térmicas (Símbolos Complementarios)</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Combustión", sub: "(Fired type)" },
                { label: "Eléctrico", sub: "Resistencia" },
                { label: "Electrodo", sub: "Arco" },
                { label: "Nuclear", sub: "Fisión" },
                { label: "Inducción", sub: "Magnética" },
                { label: "Integrado", sub: "Intercambiador" },
              ].map((src, i) => (
                <div key={i} className="bg-white border p-3 rounded text-center shadow-sm">
                  <span className="block font-semibold text-gray-800">{src.label}</span>
                  <span className="text-xs text-gray-500">{src.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      title: "6. Bombas de Calor",
      icon: Snowflake,
      content: (
        <div className="space-y-6 animate-in fade-in duration-500">
          <div className="bg-cyan-900 text-white p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <Snowflake className="w-8 h-8 text-cyan-300" />
              Bombas de calor y Refrigeración
            </h3>
            <p className="mt-2 text-cyan-100 opacity-90">
              Dispositivos que transfieren calor contra el gradiente térmico natural, utilizando energía externa.
            </p>
          </div>

          <div className="bg-white border rounded-xl overflow-hidden shadow-sm">
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x">
              <div className="p-6 text-center hover:bg-gray-50 transition">
                <div className="text-red-500 font-bold text-lg mb-2">↑ Aumento</div>
                <div className="text-gray-800 font-semibold">Bomba de Calor</div>
                <p className="text-xs text-gray-500 mt-2">Eleva el nivel térmico</p>
              </div>
              <div className="p-6 text-center hover:bg-gray-50 transition">
                <div className="text-blue-500 font-bold text-lg mb-2">↓ Disminución</div>
                <div className="text-gray-800 font-semibold">Refrigeración</div>
                <p className="text-xs text-gray-500 mt-2">Disminuye el nivel térmico</p>
              </div>
              <div className="p-6 text-center hover:bg-gray-50 transition">
                <div className="text-purple-500 font-bold text-lg mb-2">↔ Reversible</div>
                <div className="text-gray-800 font-semibold">Ambas Funciones</div>
                <p className="text-xs text-gray-500 mt-2">Bomba / Refrigerador</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "7. Turbinas",
      icon: Fan,
      content: (
        <div className="space-y-6 animate-in fade-in duration-500">
          <h3 className="text-2xl font-bold text-gray-800 border-b pb-2">Turbinas y Motores Térmicos</h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Turbinas */}
            <div className="space-y-4">
              <h4 className="flex items-center gap-2 text-lg font-bold text-slate-700">
                <Fan className="w-5 h-5" /> Turbinas
              </h4>
              <p className="text-sm text-gray-600">
                Convierten energía térmica del fluido en energía mecánica rotacional.
              </p>
              <ul className="space-y-2">
                {["Turbina de vapor", "Turbina de vapor (entrada central)", "Turbina de gas", "Motor a chorro", "Turbofan"].map((item, i) => (
                   <li key={i} className="flex items-center justify-between p-3 bg-white border rounded hover:border-slate-400 transition cursor-default">
                     <span className="text-slate-800">{item}</span>
                     <ChevronRight className="w-4 h-4 text-slate-400" />
                   </li>
                ))}
              </ul>
            </div>

            {/* Pistón */}
            <div className="space-y-4">
              <h4 className="flex items-center gap-2 text-lg font-bold text-slate-700">
                <Settings className="w-5 h-5" /> Motores de Pistón
              </h4>
              <p className="text-sm text-gray-600">
                Utilizados comúnmente en diagramas energéticos y de generación de potencia.
              </p>
              <div className="bg-slate-100 p-4 rounded-lg space-y-3">
                <div className="bg-white p-3 rounded shadow-sm">
                  <span className="font-semibold block text-slate-900">Alternativos</span>
                  <span className="text-xs text-slate-500">Vapor o Combustión Interna</span>
                </div>
                <div className="bg-white p-3 rounded shadow-sm">
                  <span className="font-semibold block text-slate-900">Combustión Externa</span>
                  <span className="text-xs text-slate-500">Ej: Motor Stirling</span>
                </div>
                <div className="bg-white p-3 rounded shadow-sm">
                  <span className="font-semibold block text-slate-900">Rotativos</span>
                  <span className="text-xs text-slate-500">Pistón rotativo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "8. Varios",
      icon: AlertTriangle,
      content: (
        <div className="space-y-6 animate-in fade-in duration-500">
          <div className="bg-amber-50 border-l-8 border-amber-500 p-6 rounded-r-xl">
            <h3 className="text-2xl font-bold text-amber-900 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6" /> Flare (Antorcha)
            </h3>
            <p className="text-amber-800 mb-4">
              Elemento clave en plantas petroquímicas y de gas para la seguridad operativa.
            </p>
            
            <h4 className="font-bold text-amber-900 uppercase text-xs tracking-wider mb-2">Usos Principales:</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-amber-200 text-amber-900 rounded-full text-sm font-semibold">Quemar gases excedentes</span>
              <span className="px-3 py-1 bg-amber-200 text-amber-900 rounded-full text-sm font-semibold">Protección de seguridad</span>
              <span className="px-3 py-1 bg-amber-200 text-amber-900 rounded-full text-sm font-semibold">Descarga controlada</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Resumen y Mapa",
      icon: Map,
      content: (
        <div className="space-y-8 animate-in fade-in duration-500">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Mapa de Relación: Norma vs Concepto</h3>
            <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
              <table className="w-full text-sm text-left text-gray-600">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                  <tr>
                    <th className="px-6 py-3">Concepto</th>
                    <th className="px-6 py-3">Sección ISO 14617-11</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-white"><td className="px-6 py-3 font-medium">Intercambiadores y condensadores</td><td className="px-6 py-3 text-blue-600">Sección 4</td></tr>
                  <tr className="bg-gray-50"><td className="px-6 py-3 font-medium">Diseños específicos</td><td className="px-6 py-3 text-blue-600">Sección 5</td></tr>
                  <tr className="bg-white"><td className="px-6 py-3 font-medium">Torres de enfriamiento</td><td className="px-6 py-3 text-blue-600">Sección 6</td></tr>
                  <tr className="bg-gray-50"><td className="px-6 py-3 font-medium">Calderas y hornos</td><td className="px-6 py-3 text-blue-600">Sección 7</td></tr>
                  <tr className="bg-white"><td className="px-6 py-3 font-medium">Bombas de calor</td><td className="px-6 py-3 text-blue-600">Sección 8</td></tr>
                  <tr className="bg-gray-50"><td className="px-6 py-3 font-medium">Turbinas y motores</td><td className="px-6 py-3 text-blue-600">Secciones 9 y 10</td></tr>
                  <tr className="bg-white"><td className="px-6 py-3 font-medium">Varios (Flare)</td><td className="px-6 py-3 text-blue-600">Sección 11</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-2xl shadow-xl text-center">
            <h3 className="text-2xl font-bold mb-4">Conclusión Final</h3>
            <p className="opacity-90 max-w-2xl mx-auto mb-6">
              La ISO 14617-11 proporciona el lenguaje gráfico universal que permite diferenciar funciones térmicas sin texto adicional, integrando equipos térmicos con sistemas mecánicos para reducir errores en diseño y operación.
            </p>
            <button 
              onClick={() => setActiveTab(0)}
              className="px-6 py-2 bg-white text-blue-700 font-bold rounded-full hover:bg-blue-50 transition shadow-lg"
            >
              Volver al Inicio
            </button>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800">
      
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 text-white p-2 rounded-lg">
              <BookOpen size={24} />
            </div>
            <div>
              <h1 className="text-lg font-bold leading-none text-slate-900">Norma ISO 14617-11:2002</h1>
              <p className="text-xs text-slate-500 font-medium">Dispositivos de Transferencia de Calor</p>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu />
          </button>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full grid md:grid-cols-[280px_1fr] gap-6 p-4">
        
        {/* Sidebar Navigation (Desktop) / Dropdown (Mobile) */}
        <nav className={`
          ${isMobileMenuOpen ? 'block' : 'hidden'} 
          md:block bg-white rounded-xl shadow-sm border border-gray-200 h-fit md:sticky md:top-24 overflow-hidden
        `}>
          <div className="p-4 bg-gray-50 border-b border-gray-100">
            <h2 className="font-semibold text-gray-500 text-xs uppercase tracking-wider">Tabla de Contenidos</h2>
          </div>
          <div className="flex flex-col p-2 space-y-1">
            {sections.map((section, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveTab(idx);
                  setIsMobileMenuOpen(false);
                }}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 text-left
                  ${activeTab === idx 
                    ? 'bg-blue-50 text-blue-700 shadow-sm ring-1 ring-blue-100' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
              >
                <section.icon size={18} className={activeTab === idx ? 'text-blue-600' : 'text-gray-400'} />
                {section.title}
              </button>
            ))}
          </div>
        </nav>

        {/* Content Area */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-10 min-h-[500px]">
          <div className="mb-6 pb-4 border-b border-gray-100 flex items-center gap-3">
             <div className="p-2 bg-gray-100 rounded-lg text-gray-600">
               {React.createElement(sections[activeTab].icon, { size: 24 })}
             </div>
             <h2 className="text-2xl font-bold text-gray-900">{sections[activeTab].title}</h2>
          </div>
          
          {sections[activeTab].content}

          {/* Bottom Navigation Helper */}
          <div className="mt-12 pt-6 border-t border-gray-100 flex justify-between">
            <button 
              disabled={activeTab === 0}
              onClick={() => { setActiveTab(prev => prev - 1); window.scrollTo(0,0); }}
              className="text-sm font-medium text-gray-500 hover:text-blue-600 disabled:opacity-30 flex items-center gap-1"
            >
              ← Anterior
            </button>
            <button 
              disabled={activeTab === sections.length - 1}
              onClick={() => { setActiveTab(prev => prev + 1); window.scrollTo(0,0); }}
              className="text-sm font-medium text-gray-500 hover:text-blue-600 disabled:opacity-30 flex items-center gap-1"
            >
              Siguiente →
            </button>
          </div>
        </section>

      </main>
    </div>
  );
}