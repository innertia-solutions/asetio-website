---
title: Captura de estado
description: Como las senales y lecturas de campo actualizan el estado de los activos.
navigation:
  icon: i-lucide-activity
---

# Captura de estado

Asetio transforma senales de terreno, inspecciones y lecturas automaticas en eventos operativos dentro del tenant correcto. La tecnologia de captura puede cambiar por instalacion; el objetivo del producto es mantener actualizado el estado de cada activo critico.

## Flujo de datos

1. Un activo genera una senal, lectura o inspeccion.
2. La infraestructura de captura detecta el evento.
3. El evento se publica en el canal de ingesta configurado.
4. El servicio de captura encola los mensajes en Redis Streams.
5. Workers separan y procesan lecturas por fuente.
6. El backend procesa la lectura en Laravel.
7. Asetio actualiza activos, estado, alertas, historial y eventos en tiempo real.

## Resiliencia

El procesamiento esta disenado para soportar volumen y fallas temporales:

- Redis Streams como buffer.
- Separacion por shards.
- Deduplicacion por fuente y activo.
- Reintentos automaticos si el backend no responde.
- Circuit breaker para proteger la API.
- Entrega al menos una vez.

## Que actualiza una lectura

Una lectura puede actualizar:

- Ultima fuente de captura.
- Senal o condicion reportada.
- Ultima vez visto.
- Estado de descubrimiento.
- Activo asociado.
- Vista operacional de la organizacion.
- Reglas de alerta.
- Eventos en canales de tiempo real.
