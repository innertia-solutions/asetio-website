---
seo:
  title: Asetio - Real-time asset operations
  description: Manage high-value assets, monitor their status in real time, and coordinate alerts, maintenance, and owners from one platform.
navigation: false
---

::custom-hero
---
title: High-value assets, always visible and under control.
description: Asetio centralizes inventory, operational status, location, alerts, and maintenance so every critical asset has traceability, ownership, and a next action.
primaryButton:
  text: Request a demo
  to: mailto:hola@asetio.com
secondaryButton:
  text: Read documentation
  to: /en/docs/intro
---
::

::stats-section
---
stats:
  - value: Inventory
    label: One live record for every critical asset
  - value: Status
    label: Signals, location, and condition in real time
  - value: Action
    label: Alerts, owners, and connected maintenance
---
::

::problem-section
---
eyebrow: The problem
title: Operations lose control when the asset lives in a spreadsheet, but reality happens in the field.
description: Asetio is built for teams that cannot rely on delayed information. When a critical asset changes status, leaves an area, or needs maintenance, the system should turn that event into traceable action.
problems:
  - icon: i-lucide-file-spreadsheet
    title: Outdated inventory
    description: Assets are registered once, but their location, owner, condition, and history change every day.
  - icon: i-lucide-bell-off
    title: Signals that do not become action
    description: Readings, inspections, and events get scattered without a clear rule for priority, ownership, and closure.
  - icon: i-lucide-history
    title: Maintenance without context
    description: Field teams arrive without reliable history, evidence, or traceability from previous decisions.
---
::

::platform-layers
---
eyebrow: Asetio Platform
title: Three layers to operate critical assets with traceability.
description: Asetio connects the asset's digital record with its real status and with the actions your team needs to execute.
layers:
  - icon: i-lucide-database
    title: Operational inventory
    description: Every asset has a single record with attributes, criticality, owner, expected location, documents, and history.
    points:
      - Categories and custom fields
      - QR, identifiers, and assignments
      - Tenant-aware change audit
  - icon: i-lucide-radar
    title: Real-time status
    description: Automatic readings, inspections, checklists, and events are normalized into operational condition and location.
    points:
      - Last signal and last seen
      - Coverage by areas and sources
      - Updated operating condition
  - icon: i-lucide-list-checks
    title: Action and closure
    description: Relevant conditions open alerts, cases, or tasks with owner, severity, deadline, and closure evidence.
    points:
      - Rule-based alerts and exceptions
      - Preventive and corrective maintenance
      - Complete audit-ready history
---
::

::signal-flow-section
---
eyebrow: Signal flow
title: From a field device to an actionable alert for the company.
description: Asetio turns BLE readings and operational events into clear decisions, assigned owners, and evidence to close the loop.
outcomeTitle: A signal does not get lost in the network.
outcomeDescription: Every reading can become updated status, a prioritized alert, a maintenance task, or auditable asset history.
outcomeBadge: Traceable event
steps:
  - icon: i-lucide-package-check
    title: Critical asset
    badge: Source
    description: Equipment, tools, or infrastructure emit a signal about status, presence, or condition.
    signalLabel: Captured data
    signal: ID, area, reading, battery, event
  - icon: i-lucide-router
    title: BLE gateway
    badge: Capture
    description: The gateway listens to nearby beacons and tags, validates the latest signal, and prepares it for delivery.
    signalLabel: Normalization
    signal: RSSI, timestamp, area, gateway
  - icon: i-lucide-brain-circuit
    title: Asetio
    badge: Rules
    description: The system matches the event with inventory, criticality, owner, and operational rules.
    signalLabel: Decision
    signal: Normal, review, critical, out of area
  - icon: i-lucide-building-2
    title: Company
    badge: Action
    description: The right team receives the alert with enough context to respond and close the case.
    signalLabel: Response
    signal: Alert, task, evidence, history
---
::

::features-section
---
title: Operational management
subtitle: Everything needed to protect critical assets and sustain continuity
features:
  - icon: i-lucide-box
    title: Live inventory
    description: Assets, categories, attributes, owners, locations, providers, and QR identity in one operating record.
  - icon: i-lucide-activity
    title: Real-time status
    description: Condition, presence, operating area, last reading, and relevant events available in clear dashboards.
  - icon: i-lucide-bell-ring
    title: Condition alerts
    description: Rules to detect assets out of zone, without readings, at operational risk, or waiting for attention.
  - icon: i-lucide-shield-alert
    title: Risk control
    description: Criticality-based priority, defined owners, and an operational audit trail.
  - icon: i-lucide-wrench
    title: Connected maintenance
    description: Plans, work orders, inspections, and field tasks tied to the asset's real history.
  - icon: i-lucide-code
    title: Integrations
    description: API, webhooks, and events to connect Asetio with ERP, BI, maintenance, security, and internal systems.
---
::

::use-cases-section
---
eyebrow: Use cases
title: For operations where losing visibility costs time, money, or continuity.
description: The product adapts to physical assets, technical infrastructure, and field teams that require continuous tracking.
useCases:
  - icon: i-lucide-building-2
    title: Facilities and infrastructure
    description: Control UPS, panels, technical rooms, racks, sensors, tools, and critical equipment by site or area.
  - icon: i-lucide-warehouse
    title: Warehouses and mobile assets
    description: Keep traceability of equipment that enters, leaves, gets assigned, or changes owner during operations.
  - icon: i-lucide-hard-hat
    title: Technical teams
    description: Give context, tasks, checklists, and evidence to the people inspecting or maintaining assets in the field.
  - icon: i-lucide-shield-check
    title: Auditable operations
    description: Build asset-level history for internal audits, compliance, continuity, and risk management.
---
::

::architecture-diagram
::

::trust-section
---
eyebrow: Built for operations
title: Designed to scale from one installation to a multi-tenant operation.
description: Asetio combines product workflows, operational data, and integrations to coexist with existing systems.
items:
  - icon: i-lucide-users
    title: Multi-tenant and permissions
    description: Organizations, users, roles, owners, and configuration separated by tenant.
  - icon: i-lucide-plug
    title: API and webhooks
    description: Events and integrations to connect ERP, BI, maintenance, security, or internal systems.
  - icon: i-lucide-radio-tower
    title: Flexible capture sources
    description: Telemetry, automatic readings, QR, inspections, checklists, and manual data in one model.
  - icon: i-lucide-lock-keyhole
    title: Traceability and evidence
    description: Every alert, task, and change is tied to the asset, the owner, and the operational outcome.
---
::

::final-cta
---
eyebrow: Next step
title: If a critical asset changes status, your team should know and act before operations are affected.
description: Let's review your assets, areas, capture sources, and maintenance flows to shape a demo around your operation.
primaryButton:
  text: Request a demo
  to: mailto:hola@asetio.com
secondaryButton:
  text: Read documentation
  to: /en/docs/intro
---
::
