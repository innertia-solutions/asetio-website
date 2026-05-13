---
seo:
  title: Asetio - Operaciones de activos en tiempo real
  description: Gestiona activos de alto valor, monitorea su estado en tiempo real y coordina alertas, mantenimiento y responsables desde una sola plataforma.
navigation: false
---

::custom-hero
---
title: Activos de alto valor, siempre visibles y bajo control.
description: Asetio centraliza inventario, estado operativo, ubicacion, alertas y mantenimiento para que cada activo critico tenga trazabilidad, responsable y accion siguiente.
primaryButton:
  text: Solicitar demo
  to: mailto:hola@asetio.com
secondaryButton:
  text: Ver documentacion
  to: /es/docs/intro
---
::

::stats-section
---
stats:
  - value: Inventario
    label: Un registro vivo por activo critico
  - value: Estado
    label: Senales, ubicacion y condicion en tiempo real
  - value: Accion
    label: Alertas, responsables y mantenimiento conectado
---
::

::problem-section
---
eyebrow: El problema
title: La operacion pierde control cuando el activo existe en una planilla, pero la realidad ocurre en terreno.
description: Asetio esta pensado para equipos que no pueden depender de informacion atrasada. Cuando un activo critico cambia de estado, sale de zona o requiere mantenimiento, el sistema debe convertir ese evento en una accion trazable.
problems:
  - icon: i-lucide-file-spreadsheet
    title: Inventario desactualizado
    description: Los activos se registran una vez, pero su ubicacion, responsable, condicion e historial cambian todos los dias.
  - icon: i-lucide-bell-off
    title: Senales que no se convierten en accion
    description: Lecturas, inspecciones y eventos quedan dispersos si no existe una regla clara de prioridad, responsable y cierre.
  - icon: i-lucide-history
    title: Mantenimiento sin contexto
    description: El equipo tecnico llega a terreno sin historial confiable, evidencias o trazabilidad de decisiones anteriores.
---
::

::platform-layers
---
eyebrow: Plataforma Asetio
title: Tres capas para operar activos criticos con trazabilidad.
description: Asetio conecta el registro digital del activo con su estado real y con las acciones que debe ejecutar el equipo.
layers:
  - icon: i-lucide-database
    title: Inventario operacional
    description: Cada activo vive en un registro unico con atributos, criticidad, responsable, ubicacion esperada, documentos e historial.
    points:
      - Categorias y campos personalizados
      - QR, identificadores y asignaciones
      - Auditoria de cambios por tenant
  - icon: i-lucide-radar
    title: Estado en tiempo real
    description: Lecturas automaticas, inspecciones, checklists y eventos se normalizan para mostrar condicion y ubicacion operacional.
    points:
      - Ultima senal y ultima vez visto
      - Cobertura por zonas y fuentes
      - Condicion operativa actualizada
  - icon: i-lucide-list-checks
    title: Accion y cierre
    description: Las condiciones relevantes abren alertas, casos o tareas con responsable, severidad, plazo y evidencia de cierre.
    points:
      - Alertas por regla o excepcion
      - Mantenimiento preventivo y correctivo
      - Historial completo para auditoria
---
::

::signal-flow-section
---
eyebrow: Flujo de senal
title: Del dispositivo en terreno a una alerta accionable para la empresa.
description: Asetio convierte lecturas BLE y eventos operacionales en decisiones claras, responsables asignados y evidencia para cerrar el ciclo.
outcomeTitle: Una senal no queda perdida en la red.
outcomeDescription: Cada lectura puede terminar en estado actualizado, alerta priorizada, tarea de mantenimiento o historial auditable del activo.
outcomeBadge: Evento trazable
steps:
  - icon: i-lucide-package-check
    title: Activo critico
    badge: Origen
    description: Un equipo, herramienta o infraestructura emite una senal de estado, presencia o condicion.
    signalLabel: Dato capturado
    signal: ID, zona, lectura, bateria, evento
  - icon: i-lucide-router
    title: Gateway BLE
    badge: Captura
    description: El gateway escucha beacons y tags cercanos, valida la ultima senal y la prepara para envio.
    signalLabel: Normalizacion
    signal: RSSI, timestamp, zona, gateway
  - icon: i-lucide-brain-circuit
    title: Asetio
    badge: Reglas
    description: El sistema cruza el evento con inventario, criticidad, responsable y reglas operacionales.
    signalLabel: Decision
    signal: Normal, revisar, critico, fuera de zona
  - icon: i-lucide-building-2
    title: Empresa
    badge: Accion
    description: La alerta llega al equipo correcto con contexto suficiente para responder y cerrar el caso.
    signalLabel: Respuesta
    signal: Alerta, tarea, evidencia, historial
---
::

::features-section
---
title: Gestion operacional
subtitle: Todo lo necesario para proteger activos criticos y sostener continuidad
features:
  - icon: i-lucide-box
    title: Inventario vivo
    description: Activos, categorias, atributos, responsables, ubicaciones, proveedores e identificacion QR en un registro unico.
  - icon: i-lucide-activity
    title: Estado en tiempo real
    description: Condicion, presencia, zona operativa, ultima lectura y eventos relevantes disponibles en paneles claros.
  - icon: i-lucide-bell-ring
    title: Alertas por condicion
    description: Reglas para detectar activos fuera de zona, sin lectura, con riesgo operativo o pendientes de atencion.
  - icon: i-lucide-shield-alert
    title: Control de riesgo
    description: Priorizacion por criticidad, responsables definidos y bitacora para auditoria operacional.
  - icon: i-lucide-wrench
    title: Mantenimiento conectado
    description: Planes, ordenes, inspecciones y tareas de terreno vinculadas al historial real del activo.
  - icon: i-lucide-code
    title: Integraciones
    description: API, webhooks y eventos para conectar Asetio con ERP, BI, mantenimiento, seguridad y sistemas internos.
---
::

::use-cases-section
---
eyebrow: Casos de uso
title: Para operaciones donde perder visibilidad cuesta tiempo, dinero o continuidad.
description: El producto se adapta a activos fisicos, infraestructura tecnica y equipos de terreno que requieren seguimiento continuo.
useCases:
  - icon: i-lucide-building-2
    title: Facilities e infraestructura
    description: Controla UPS, tableros, salas tecnicas, racks, sensores, herramientas y equipamiento critico por sede o zona.
  - icon: i-lucide-warehouse
    title: Bodegas y activos moviles
    description: Mantiene trazabilidad de equipos que entran, salen, se asignan o cambian de responsable durante la operacion.
  - icon: i-lucide-hard-hat
    title: Equipos tecnicos
    description: Entrega contexto, tareas, checklists y evidencia a quienes inspeccionan o mantienen activos en terreno.
  - icon: i-lucide-shield-check
    title: Operaciones auditables
    description: Construye historial por activo para auditorias internas, cumplimiento, continuidad operacional y gestion de riesgo.
---
::

::architecture-diagram
::

::trust-section
---
eyebrow: Preparado para operar
title: Diseñado para crecer desde una instalacion hasta una operacion multi-tenant.
description: Asetio combina experiencia de producto, datos operacionales e integraciones para convivir con sistemas existentes.
items:
  - icon: i-lucide-users
    title: Multi-tenant y permisos
    description: Organizaciones, usuarios, roles, responsables y configuracion separados por tenant.
  - icon: i-lucide-plug
    title: API y webhooks
    description: Eventos e integraciones para conectar ERP, BI, mantenimiento, seguridad u otros sistemas internos.
  - icon: i-lucide-radio-tower
    title: Fuentes de captura flexibles
    description: Telemetria, lecturas automaticas, QR, inspecciones, checklists y datos manuales dentro de un mismo modelo.
  - icon: i-lucide-lock-keyhole
    title: Trazabilidad y evidencia
    description: Cada alerta, tarea y cambio queda ligado al activo, al responsable y al resultado operacional.
---
::

::final-cta
---
eyebrow: Siguiente paso
title: Si un activo critico cambia de estado, tu equipo deberia saberlo y actuar antes de que afecte la operacion.
description: Revisemos tus activos, zonas, fuentes de captura y flujos de mantenimiento para armar una demo aterrizada a tu operacion.
primaryButton:
  text: Solicitar demo
  to: mailto:hola@asetio.com
secondaryButton:
  text: Ver documentacion
  to: /es/docs/intro
---
::
