---
title: Status Capture
description: How field signals and readings update asset status.
navigation:
  icon: i-lucide-activity
---

# Status Capture

Asetio turns field signals, inspections, and automatic readings into operational events inside the right tenant. The capture technology can vary by installation; the product goal is to keep every critical asset's status up to date.

## Data flow

1. An asset generates a signal, reading, or inspection.
2. Capture infrastructure detects the event.
3. The event is published through the configured ingestion channel.
4. The capture service queues messages in Redis Streams.
5. Workers separate and process readings by source.
6. The Laravel backend processes the reading.
7. Asetio updates assets, status, alerts, history, and real-time events.

## Resilience

The processing pipeline is designed for volume and temporary failures:

- Redis Streams as buffer.
- Sharding.
- Deduplication by source and asset.
- Automatic retry if the backend does not respond.
- Circuit breaker to protect the API.
- At-least-once delivery.

## What a reading updates

A reading can update:

- Last capture source.
- Reported signal or condition.
- Last seen timestamp.
- Discovery state.
- Related asset.
- Organization operational view.
- Alert rules.
- Real-time channels.
