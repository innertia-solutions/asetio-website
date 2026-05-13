---
title: Plataforma
description: Componentes principales de la plataforma Asetio.
navigation:
  icon: i-lucide-layout-dashboard
---

# Plataforma

Asetio se organiza como una plataforma multi-tenant. Cada organizacion tiene su propio entorno operativo, usuarios, roles, permisos, configuracion, activos, gateways, tags, alertas, tareas y eventos.

## Tenant y acceso

El tenant define el limite operativo de una organizacion. Dentro de ese limite se administran:

- Usuarios de backoffice.
- Tecnicos de terreno.
- Roles y permisos.
- Sesiones y seguridad.
- Configuracion de negocio.
- Storage, backups e integraciones.

## Activos

Los activos son el registro principal del sistema. Pueden representar equipamiento, infraestructura, herramientas, hardware, racks, dispositivos o cualquier elemento que requiera trazabilidad.

Cada activo puede tener:

- Categoria y campos personalizados.
- Marca, proveedor y metadatos.
- QR o identificador corto.
- Tag BLE asignado.
- Historial de cambios.
- Relacion con alertas y tareas.

## Tags BLE

Los tags son dispositivos fisicos que emiten senales BLE. Asetio soporta el ciclo de vida completo:

- Descubierto por radar.
- Registrado en inventario.
- Asignado a un activo.
- Disponible, asignado, en mantenimiento o retirado.
- Actualizado desde lecturas de gateways.

## Gateways

Los gateways reciben senales BLE y las reportan al backend. Asetio los usa para construir visibilidad operacional:

- Estado online/offline.
- Heartbeat.
- Ultima lectura.
- Zona de cobertura.
- Provisionamiento y QR.

## Backoffice y portal tecnico

El backoffice permite administrar la operacion completa. El portal tecnico concentra las tareas que ocurren en terreno: lectura de activos, vinculacion de tags y ejecucion de mantenimiento.
