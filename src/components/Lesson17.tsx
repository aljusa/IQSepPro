import React, { useState } from 'react';
import { 
  BookOpen, 
  Map, 
  Settings, 
  GitCommit, 
  Droplet, 
  Activity, 
  Factory, 
  CheckCircle, 
  ArrowRight, 
  Menu,
  Info,
  Shield,
  Thermometer,
  Zap
} from 'lucide-react';

// --- Tipos y Definiciones ---

interface Section {
  id: string;
  title: string;
  icon: React.ElementType;
  content: React.ReactNode;
}

// --- Componentes UI Reutilizables ---

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden ${className}`}>
    {children}
  </div>
);

const SectionHeader = ({ title, icon: Icon }: { title: string; icon: React.ElementType }) => (
  <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
    <div className="p-2 bg-blue-100 text-blue-700 rounded-lg">
      <Icon size={24} />
    </div>
    <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
  </div>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-3">
    {items.map((item, index) => (
      <li key={index} className="flex items-start gap-3 text-slate-600">
        <span className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
        <span className="leading-relaxed">{item}</span>
      </li>
    ))}
  </ul>
);

const InfoBox = ({ title, children, type = "info" }: { title: string; children: React.ReactNode; type?: "info" | "def" }) => {
  const styles = type === "info" 
    ? "bg-blue-50 border-blue-100 text-blue-900" 
    : "bg-emerald-50 border-emerald-100 text-emerald-900";
  
  const iconColor = type === "info" ? "text-blue-600" : "text-emerald-600";

  return (
    <div className={`p-4 rounded-lg border ${styles} mb-4`}>
      <h4 className={`font-semibold mb-2 flex items-center gap-2 ${iconColor}`}>
        {type === "info" ? <Info size={18} /> : <BookOpen size={18} />}
        {title}
      </h4>
      <div className="text-sm opacity-90 leading-relaxed">
        {children}
      </div>
    </div>
  );
};

// --- Componente Principal ---

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("intro");

  // Definición del contenido de la lección
  const sections: Section[] = [
    {
      id: "intro",
      title: "Alcance y Definiciones",
      icon: BookOpen,
      content: (
        <div className="space-y-6 animate-fadeIn">
          <p className="text-lg text-slate-600 leading-relaxed">
            La norma <span className="font-bold text-slate-800">ISO 14617-15:2002</span> especifica los símbolos gráficos 
            para diagramas de instalación (edificios) y mapas de redes. Complementa a las partes 2 a 12 de la misma norma.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4 text-slate-800 border-b pb-2">Objetivos Principales</h3>
              <BulletList items={[
                "Indicar ubicación de componentes.",
                "Especificar tipos de dispositivos.",
                "Mostrar interconexiones en una instalación o red."
              ]} />
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4 text-slate-800 border-b pb-2">Aplicable a:</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center p-3 bg-slate-50 rounded text-center">
                  <Droplet className="text-blue-500 mb-2" />
                  <span className="text-sm font-medium">Agua y Saneamiento</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-slate-50 rounded text-center">
                  <Thermometer className="text-red-500 mb-2" />
                  <span className="text-sm font-medium">Climatización</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-slate-50 rounded text-center">
                  <Zap className="text-yellow-500 mb-2" />
                  <span className="text-sm font-medium">Electricidad</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-slate-50 rounded text-center">
                  <Factory className="text-slate-500 mb-2" />
                  <span className="text-sm font-medium">Instalaciones Técnicas</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Definiciones Clave</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <InfoBox title="Diagrama de Instalación" type="def">
                Dibujo que muestra la ubicación de los componentes de una instalación y sus interconexiones mediante símbolos gráficos.
              </InfoBox>
              <InfoBox title="Mapa de Red" type="def">
                Diagrama de vista general que muestra una red sobre un mapa geográfico (ej. estaciones, líneas y equipos).
              </InfoBox>
              <InfoBox title="Agua Potable" type="def">
                Agua apta para consumo humano que requiere protección especial.
              </InfoBox>
              <InfoBox title="Sensor vs Detector" type="def">
                <strong>Sensor:</strong> Convierte una magnitud física en señal.<br/>
                <strong>Detector:</strong> Transmite señal binaria (on/off) ante una condición.
              </InfoBox>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "tuberias",
      title: "Tuberías y Conductos",
      icon: Settings,
      content: (
        <div className="space-y-6 animate-fadeIn">
          <p className="text-slate-600">
            Esta sección define cómo representar la interacción de tuberías, cables y conductos con la estructura del edificio.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-3">Símbolos Básicos</h3>
              <Card className="p-5 bg-slate-50 border-slate-200">
                <BulletList items={[
                  "Manguito para paso a través de muros.",
                  "Paso sellado (estanco al aire, agua o fuego).",
                  "Paso entre zonas con distinta presión.",
                  "Punto de anclaje.",
                  "Soporte o guía para tuberías."
                ]} />
              </Card>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-3">Información Suplementaria</h3>
              <Card className="p-5 bg-slate-50 border-slate-200">
                <BulletList items={[
                  "Instalación subterránea o subacuática.",
                  "Instalación sobre postes.",
                  "Ubicación en ductos (circulares/rectangulares).",
                  "Uso de bandejas portacables.",
                  "Indicación de pendiente."
                ]} />
              </Card>
            </div>
          </div>

          <div className="mt-6 p-4 bg-orange-50 border border-orange-100 rounded-lg">
            <h4 className="font-bold text-orange-800 mb-2">Reglas de Aplicación</h4>
            <ul className="list-disc list-inside text-orange-900 space-y-1 text-sm">
              <li>Los <strong>ángulos</strong> de los símbolos están estandarizados.</li>
              <li>La <strong>orientación</strong> no siempre indica flujo.</li>
              <li>Si es necesario indicar la dirección del flujo, se deben usar <strong>flechas explícitas</strong>.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "conexion",
      title: "Conexión y Acceso",
      icon: GitCommit,
      content: (
        <div className="space-y-6 animate-fadeIn">
          <p className="text-slate-600">
            Dispositivos que permiten conectar, distribuir o acceder a las redes. Es crucial diferenciar entre el contenedor y el contenido.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             {[
               { title: "Cajas de Conexión", desc: "Puntos de unión o derivación de líneas." },
               { title: "Terminales", desc: "Punto de entrada de servicio al consumidor." },
               { title: "Pozos / Cámaras", desc: "Espacios de acceso (cuadrados o circulares) para inspección." }
             ].map((item, i) => (
               <Card key={i} className="p-4 hover:shadow-md transition-shadow">
                 <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-3 font-bold">
                   {i + 1}
                 </div>
                 <h4 className="font-bold text-slate-800">{item.title}</h4>
                 <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
               </Card>
             ))}
          </div>

          <InfoBox title="Nota Importante de Representación" type="info">
            La norma permite añadir símbolos calificadores o anotaciones dentro de los símbolos de cajas o cámaras para indicar exactamente qué equipo contienen (ej. un medidor dentro de una caja).
          </InfoBox>
        </div>
      )
    },
    {
      id: "grifos",
      title: "Grifos y Agua",
      icon: Droplet,
      content: (
        <div className="space-y-6 animate-fadeIn">
          <p className="text-slate-600">
            Representación de puntos de consumo y control en instalaciones sanitarias e hidráulicas.
          </p>

          <Card className="overflow-hidden">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-100 text-slate-700 font-semibold">
                <tr>
                  <th className="p-4 border-b">Tipo de Dispositivo</th>
                  <th className="p-4 border-b">Descripción / Uso</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr><td className="p-4 font-medium">Grifo de salida</td><td className="p-4">Estándar para lavabos o fregaderos.</td></tr>
                <tr><td className="p-4 font-medium">Grifo empotrado</td><td className="p-4">Ubicado en nicho o pared.</td></tr>
                <tr><td className="p-4 font-medium">Grifo mezclador</td><td className="p-4">Combina agua fría y caliente.</td></tr>
                <tr><td className="p-4 font-medium">Grifo autocerrante</td><td className="p-4">Temporizado (común en baños públicos).</td></tr>
                <tr><td className="p-4 font-medium">Ducha manual</td><td className="p-4">Con flexo móvil.</td></tr>
                <tr><td className="p-4 font-medium">Válvula de descarga</td><td className="p-4">Fluxómetros con interruptor de tubería.</td></tr>
              </tbody>
            </table>
          </Card>
        </div>
      )
    },
    {
      id: "control",
      title: "Control y Protección",
      icon: Activity,
      content: (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-slate-800 text-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="text-emerald-400" />
              <h3 className="text-xl font-bold">Seguridad y Automatización</h3>
            </div>
            <p className="opacity-90">
              Estos símbolos son vitales para los sistemas modernos de gestión de edificios (BMS), seguridad y protección contra incendios.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-slate-700 mb-3 border-l-4 border-blue-500 pl-3">Magnitudes Detectables</h4>
              <div className="flex flex-wrap gap-2">
                {["Sonido", "Fuego", "Humo", "Polvo", "Vibración / Sismo", "Temperatura"].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium border border-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-slate-700 mb-3 border-l-4 border-emerald-500 pl-3">Dispositivos Clave</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center justify-between bg-white p-2 rounded border">
                  <span>Unidad de protección agua potable</span>
                  <CheckCircle size={16} className="text-emerald-500" />
                </li>
                <li className="flex items-center justify-between bg-white p-2 rounded border">
                  <span>Lámina eléctrica de ventana</span>
                  <Zap size={16} className="text-yellow-500" />
                </li>
                <li className="flex items-center justify-between bg-white p-2 rounded border">
                  <span>Detectores de Incendio</span>
                  <Activity size={16} className="text-red-500" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "plantas",
      title: "Plantas Técnicas",
      icon: Factory,
      content: (
        <div className="space-y-6 animate-fadeIn">
          <p className="text-slate-600">
            Símbolos para representar sistemas completos o unidades funcionales complejas de forma compacta.
          </p>

          <div className="bg-white border rounded-xl p-6">
            <h3 className="text-center font-bold text-slate-800 mb-6">Elementos de Información Suplementaria</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                { label: "Energía", sub: "Eléctrica, Térmica" },
                { label: "Fluido", sub: "Agua, Residuales" },
                { label: "Función", sub: "Bombeo, Intercambio" },
                { label: "Tratamiento", sub: "Depuración, Desalinización" }
              ].map((item, idx) => (
                <div key={idx} className="p-3 bg-slate-50 rounded-lg">
                  <div className="font-bold text-blue-700">{item.label}</div>
                  <div className="text-xs text-slate-500 mt-1">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>

          <h4 className="font-bold text-slate-800 mt-4">Ejemplos de Plantas Representables:</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
             {["Planta de generación de agua caliente", "Torre de agua", "Estación de bombeo", "Planta de tratamiento de aguas residuales", "Planta de refrigeración", "Central de calefacción distrital"].map(plant => (
               <div key={plant} className="flex items-center gap-2 p-3 border rounded hover:bg-slate-50">
                 <Factory size={16} className="text-slate-400" />
                 <span className="text-sm font-medium text-slate-700">{plant}</span>
               </div>
             ))}
          </div>
        </div>
      )
    },
    {
      id: "resumen",
      title: "Resumen y Cierre",
      icon: CheckCircle,
      content: (
        <div className="space-y-8 animate-fadeIn">
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <Map className="text-blue-600" />
              Relación con el Mapa Mental
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-700">
                    <th className="p-3 border rounded-tl-lg">Concepto del Mapa</th>
                    <th className="p-3 border rounded-tr-lg">Contenido ISO 14617-15</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr><td className="p-3 border">Alcance y definiciones</td><td className="p-3 border">Capítulos 1 a 3</td></tr>
                  <tr><td className="p-3 border">Instalación tuberías/conductos</td><td className="p-3 border">Capítulo 4</td></tr>
                  <tr><td className="p-3 border">Equipos de conexión</td><td className="p-3 border">Capítulo 5</td></tr>
                  <tr><td className="p-3 border">Grifos y dispositivos</td><td className="p-3 border">Capítulos 6 y 7</td></tr>
                  <tr><td className="p-3 border">Medición y control</td><td className="p-3 border">Capítulo 8</td></tr>
                  <tr><td className="p-3 border bg-blue-50 font-medium">Plantas y sistemas</td><td className="p-3 border bg-blue-50 font-medium">Capítulos 9 y 10</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6 text-center">
            <h3 className="text-2xl font-bold text-emerald-800 mb-4">Conclusión de la Lección</h3>
            <p className="text-emerald-900 mb-6 max-w-2xl mx-auto leading-relaxed">
              La ISO 14617-15:2002 es el lenguaje universal para arquitectos e ingenieros. Permite leer planos con claridad, integrar disciplinas (hidráulica, eléctrica, control) y reducir errores críticos en la fase de construcción.
            </p>
            <button 
              onClick={() => setActiveTab("intro")}
              className="px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors font-semibold shadow-sm flex items-center gap-2 mx-auto"
            >
              Repasar Lección <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )
    }
  ];

  const activeSection = sections.find(s => s.id === activeTab) || sections[0];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg text-white">
              <BookOpen size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800 leading-tight">Norma ISO 14617-15:2002</h1>
              <p className="text-xs text-slate-500 font-medium">Diagramas de Instalación y Mapas de Redes</p>
            </div>
          </div>
          <div className="text-xs font-semibold bg-slate-100 text-slate-600 px-3 py-1 rounded-full border border-slate-200 hidden sm:block">
            Lección Interactiva
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-5xl mx-auto w-full p-4 md:p-6 flex flex-col md:flex-row gap-6">
        
        {/* Sidebar Navigation (Desktop) / Top Scroll (Mobile) */}
        <nav className="md:w-64 flex-shrink-0">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden sticky top-24">
            <div className="p-4 bg-slate-50 border-b border-slate-200 font-semibold text-slate-700 flex items-center gap-2">
              <Menu size={18} />
              Contenido
            </div>
            <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible p-2 gap-1 scrollbar-hide">
              {sections.map((section) => {
                const isActive = activeTab === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveTab(section.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all whitespace-nowrap md:whitespace-normal text-left
                      ${isActive 
                        ? "bg-blue-50 text-blue-700 shadow-sm ring-1 ring-blue-100" 
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                  >
                    <section.icon size={18} className={isActive ? "text-blue-600" : "text-slate-400"} />
                    {section.title}
                  </button>
                );
              })}
            </div>
          </div>
        </nav>

        {/* Content Area */}
        <section className="flex-1 min-w-0">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 min-h-[500px]">
            <SectionHeader title={activeSection.title} icon={activeSection.icon} />
            
            {/* Dynamic Content Render */}
            <div key={activeTab}> {/* Key forces re-render for animation */}
              {activeSection.content}
            </div>

            {/* Navigation Footer within Card */}
            <div className="mt-12 pt-6 border-t border-slate-100 flex justify-between items-center text-sm text-slate-400">
              <span>ISO 14617-15:2002</span>
              <span>Página {sections.findIndex(s => s.id === activeTab) + 1} de {sections.length}</span>
            </div>
          </div>
        </section>

      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 mt-auto">
        <div className="max-w-5xl mx-auto px-4 text-center text-slate-500 text-sm">
          <p>© 2024 Material Educativo de Ingeniería - Estándares ISO</p>
        </div>
      </footer>
    </div>
  );
}