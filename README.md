# PropFlow - Real Estate CRM Dashboard

A real estate CRM dashboard built with React and TypeScript. Covers the full sales workflow: leads, pipeline, offers, contracts, team management, and calendar.

Built this to have something portfolio-worthy that actually looks like a real product — not a tutorial clone.

## Stack

- React 18
- TypeScript
- Tailwind CSS v4
- Recharts
- React Router v6
- Lucide React
- Vite

## Features

**Dashboard** - Sales metrics, unit status breakdown (Available / Reserved / Offered / Sold), and a lead tracking chart.

**Pipeline** - Kanban board with drag-and-drop. Move deals through: New Lead, Qualified, Proposal, Negotiation, Closed.

**Contacts** - CRM table with search and filter. Tag contacts as Buyer, Investor, or Partner, and track lead status.

**Offers** - Table of incoming offers with list price comparison and status tracking (Pending, Accepted, Counter, Rejected).

**Contracts** - Template library organized by category (Purchase, Lease, Offer, Disclosure).

**Inbox** - Email client UI with folder navigation, starred messages, and attachment indicators.

**Calendar** - Monthly calendar view with event indicators and a daily schedule panel.

**Team** - Team directory cards showing deals closed, revenue, and online status.

**Notifications** - Activity feed grouped by type (success, info, warning) with read/unread state.

**Settings** - Account and preferences panels.

## Getting Started

```bash
git clone https://github.com/avinxshKD/PropFlow-Admin-Dashboard.git
cd PropFlow-Admin-Dashboard
npm install
npm run dev
```

Open http://localhost:5173.

```bash
npm run build
```

## Project Structure

```
src/
+-- components/
¦   +-- Layout.tsx
¦   +-- Sidebar.tsx
+-- pages/
    +-- Dashboard.tsx
    +-- Pipeline.tsx
    +-- Contacts.tsx
    +-- Offers.tsx
    +-- Contracts.tsx
    +-- Inbox.tsx
    +-- Calendar.tsx
    +-- Team.tsx
    +-- Notifications.tsx
    +-- Settings.tsx
```

## Design Notes

Amber/gold accent against zinc grays. Dense layouts with `p-4` cards. Extra actions hidden in three-dot menus to keep the UI clean. Hover states on everything interactive.

## License

MIT
