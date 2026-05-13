---
title: Platform
description: Main components of the Asetio platform.
navigation:
  icon: i-lucide-layout-dashboard
---

# Platform

Asetio is organized as a multi-tenant platform. Each organization has its own operational environment, users, roles, permissions, settings, assets, gateways, tags, alerts, tasks, and events.

## Tenant and access

The tenant defines the operational boundary of an organization. Within that boundary, Asetio manages:

- Backoffice users.
- Field technicians.
- Roles and permissions.
- Sessions and security.
- Business settings.
- Storage, backups, and integrations.

## Assets

Assets are the main record in the system. They can represent equipment, infrastructure, tools, hardware, racks, devices, or any item that needs traceability.

Each asset can have:

- Category and custom fields.
- Brand, provider, and metadata.
- QR or short identifier.
- Assigned BLE tag.
- Change history.
- Relationship with alerts and tasks.

## BLE tags

Tags are physical devices that broadcast BLE signals. Asetio supports their full lifecycle:

- Discovered by radar.
- Registered in inventory.
- Assigned to an asset.
- Available, assigned, in maintenance, or retired.
- Updated from gateway readings.

## Gateways

Gateways receive BLE signals and report them to the backend. Asetio uses them to build operational visibility:

- Online/offline state.
- Heartbeat.
- Last reading.
- Coverage zone.
- Provisioning and QR.

## Backoffice and technician portal

The backoffice manages the full operation. The technician portal focuses on field execution: asset readings, tag linking, and maintenance work.
