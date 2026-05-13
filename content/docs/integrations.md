---
title: Integraciones
description: API, webhooks y extensibilidad de Asetio.
navigation:
  icon: i-lucide-code
---

# Integraciones

Asetio esta pensado para convivir con sistemas existentes. La plataforma expone eventos y puntos de integracion para conectar operaciones fisicas con procesos internos.

## API

La API permite integrar datos de tenants, usuarios, activos, gateways, tags, alertas y mantenimiento con sistemas externos.

## Webhooks

Los webhooks permiten reaccionar a eventos relevantes:

- Cambios en activos.
- Lecturas o estados de tags.
- Heartbeats de gateways.
- Apertura o actualizacion de alertas.
- Cambios en tareas de mantenimiento.

## OAuth e identidad

La plataforma contempla integraciones OAuth para conectar cuentas externas y centralizar flujos de autenticacion cuando el tenant lo requiera.

## Eventos internos

El backend publica eventos tenant-aware para mantener actualizados dashboards, radar y modulos operacionales en tiempo real.
