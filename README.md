# 🏢 PropFlow - Real Estate CRM Dashboard# 📊 Business Admin Dashboard



A modern, professional real estate CRM dashboard for managing property sales, leads, and team operations. Built with React, TypeScript, and Tailwind CSS.A professional, full-featured admin dashboard for managing business operations. Built with modern web technologies and following industry best practices for enterprise-level applications.



![PropFlow Dashboard](https://via.placeholder.com/1200x600/fbbf24/18181b?text=PropFlow+Dashboard)![Dashboard Preview](https://via.placeholder.com/1200x600/18181b/ffffff?text=Dashboard+Preview)



## 🎯 Project Overview## 🎯 Project Overview



PropFlow is a comprehensive real estate management platform designed for property developers and sales teams. It features:This admin dashboard demonstrates real-world business application development with a focus on:

- Clean, modern UI with amber/gold accent colors- Clean, professional UI design (inspired by Stripe, Linear, Shopify)

- Real estate-specific metrics and analytics- Complex data visualization and management

- Lead management and sales pipeline tracking- Intuitive user experience with minimal clutter

- Team collaboration tools- Type-safe development with TypeScript



## ✨ Features## ✨ Features



### 📊 Dashboard### 📈 Dashboard

- **Sales Metrics** — Total sales, units sold, price per sq ft tracking- **KPI Cards** — Real-time metrics with trend indicators

- **Units Status** — Visual breakdown of Available, Reserved, Offered, and Sold units- **Revenue Analytics** — Interactive area chart showing monthly performance

- **Lead Analytics** — Daily lead tracking with interactive bar charts- **Order Trends** — Bar chart visualization of order volumes

- **Remaining Inventory** — Quick view of available units- **Top Products** — Ranked list of best-selling items

- **Recent Activity** — Live feed of business events

### 🏷️ Offers Management

- **Offer Tracking** — Monitor all incoming property offers### 👥 User Management

- **Status Management** — Pending, Accepted, Rejected, Counter-offer states- **Searchable Data Table** — Filter by role and status

- **Price Comparison** — Compare offer amounts vs listing prices- **Row Actions Menu** — Edit, delete, reset password (hidden in three-dot menu)

- **Trend Indicators** — Visual cues for above/below asking price- **Pagination** — Navigate large datasets efficiently

- **User Profiles** — View detailed user information

### 📧 Email Inbox

- **Integrated Email** — Built-in email client for lead communication### 📊 Reports

- **Folder Organization** — Inbox, Starred, Sent, Drafts, Archive- **Sales Reports** — Track revenue vs profit over time

- **Quick Actions** — Star, archive, delete with one click- **User Activity** — Hourly activity patterns

- **Attachment Support** — View email attachments inline- **Product Performance** — Category breakdown with pie charts

- **Regional Analytics** — Performance by geographic region

### 📅 Calendar

- **Event Management** — Schedule viewings, meetings, and signings### ⚙️ Settings

- **Monthly View** — Full calendar with event indicators- **Profile Management** — Update personal information

- **Today's Schedule** — Quick view of daily appointments- **Notifications** — Email and push notification preferences

- **Location Tracking** — See where each event takes place- **Security** — Password management, 2FA, active session monitoring

- **Billing** — Payment methods and invoice history

### 📄 Contract Templates

- **Template Library** — Pre-built contract templates## 🛠️ Tech Stack

- **Category Organization** — Purchase, Lease, Offer, Disclosure types

- **Usage Tracking** — See how often templates are used- **React 18** — Component-based UI library

- **Quick Actions** — Copy or download templates instantly- **TypeScript** — Type safety and better developer experience

- **Vite** — Lightning-fast build tool and dev server

### 👥 Team Management- **Tailwind CSS** — Utility-first CSS framework

- **Team Directory** — View all team members and their roles- **Recharts** — React charting library for data visualization

- **Performance Metrics** — Deals closed and revenue per agent- **React Router** — Client-side routing

- **Online Status** — See who's available in real-time- **Lucide React** — Beautiful, consistent icon set

- **Contact Info** — Quick access to email and phone

## 🚀 Getting Started

### 📇 Contacts (CRM)

- **Contact Database** — All leads, investors, and partners### Prerequisites

- **Lead Scoring** — Hot Lead, Active, Nurturing, Cold status- Node.js 18+ 

- **Contact Types** — Buyer, Investor, Partner categorization- npm or yarn

- **Activity Tracking** — Last contact date for follow-ups

### Installation

### 📈 Sales Pipeline

- **Kanban Board** — Visual pipeline with drag-and-drop stages```bash

- **Deal Cards** — Property, value, contact, and days in stage# Clone the repository

- **Stage Tracking** — New Leads → Contacted → Viewing → Offer → Negotiation → Closedgit clone https://github.com/yourusername/admin-dashboard.git

- **Pipeline Value** — Total value at each stage

# Navigate to project directory

### 🔔 Notificationscd admin-dashboard

- **Activity Alerts** — Offer accepted, new leads, contract reminders

- **Notification Types** — Success, info, and warning categories# Install dependencies

- **Read/Unread Status** — Track what needs attentionnpm install

- **Quick Actions** — Mark as read or dismiss

# Start development server

### ⚙️ Settingsnpm run dev

- **Profile Management** — Update personal information```

- **Security** — Password and 2FA management

- **Notifications** — Configure alert preferencesThe application will be available at `http://localhost:5173`

- **Appearance** — Customize the interface

### Build for Production

## 🛠️ Tech Stack

```bash

| Technology | Purpose |npm run build

|------------|---------|```

| **React 18** | Component-based UI library |

| **TypeScript** | Type safety and better DX |## 🎨 Design Philosophy

| **Vite** | Fast build tool and dev server |

| **Tailwind CSS v4** | Utility-first styling |This project follows modern UI/UX principles for business applications:

| **Recharts** | Data visualization |

| **React Router** | Client-side routing |- **Tight Spacing** — Uses `p-4` and `p-2` padding for dense, efficient layouts

| **Lucide React** | Beautiful icon set |- **Gray Hierarchy** — `text-zinc-500` for descriptions, `text-zinc-900` for titles

- **Minimal Actions** — Extra actions hidden in dropdown menus (three-dot button)

## 🚀 Getting Started- **Professional Color Scheme** — Zinc grays with minimal accent colors

- **Smooth Interactions** — Subtle hover states and transitions

### Prerequisites

- Node.js 18+## 📁 Project Structure

- npm or yarn

```

### Installationsrc/

├── components/

```bash│   ├── Layout.tsx      # Main app layout wrapper

# Clone the repository│   ├── Sidebar.tsx     # Collapsible navigation sidebar

git clone https://github.com/yourusername/propflow-dashboard.git│   └── Header.tsx      # Top bar with search, notifications, profile

├── pages/

# Navigate to project directory│   ├── Dashboard.tsx   # Overview with stats and charts

cd propflow-dashboard│   ├── Users.tsx       # User management table

│   ├── Reports.tsx     # Analytics and reporting

# Install dependencies│   └── Settings.tsx    # Account settings

npm install├── App.tsx             # Main app component with routing

└── main.tsx            # Application entry point

# Start development server```

npm run dev

```## 🎯 Key Learnings



### Build for Production- Building complex data tables with search, filter, and actions

- Integrating interactive charts and data visualizations

```bash- Creating professional, production-ready UI components

npm run build- Managing application state and navigation

npm run preview- TypeScript best practices in React applications

```

## 🔮 Future Enhancements

## 📁 Project Structure

- [ ] Authentication (JWT + protected routes)

```- [ ] Backend API integration

src/- [ ] Dark mode toggle

├── components/- [ ] Export data to CSV/PDF

│   ├── Layout.tsx      # Main layout wrapper- [ ] Real-time updates with WebSockets

│   └── Sidebar.tsx     # Navigation sidebar- [ ] Advanced filtering and sorting

├── pages/- [ ] Custom dashboard widgets (drag & drop)

│   ├── Dashboard.tsx   # Main dashboard with metrics

│   ├── Offers.tsx      # Offer management## 📸 Screenshots

│   ├── Inbox.tsx       # Email client

│   ├── Calendar.tsx    # Event calendar### Dashboard

│   ├── Contracts.tsx   # Contract templates![Dashboard](https://via.placeholder.com/800x500/18181b/ffffff?text=Dashboard+View)

│   ├── Team.tsx        # Team directory

│   ├── Contacts.tsx    # CRM contacts### User Management

│   ├── Pipeline.tsx    # Sales pipeline![Users](https://via.placeholder.com/800x500/18181b/ffffff?text=User+Management)

│   ├── Notifications.tsx # Notification center

│   └── Settings.tsx    # User settings### Reports

└── App.tsx             # Route configuration![Reports](https://via.placeholder.com/800x500/18181b/ffffff?text=Reports+Analytics)

```

## 📄 License

## 🎨 Design Features

MIT License - feel free to use this project for learning or portfolio purposes.

- **Amber/Gold Accent** — Professional real estate branding

- **Clean White Cards** — Modern card-based layout## 🤝 Contributing

- **Zinc Gray Palette** — Sophisticated color hierarchy

- **Responsive Design** — Works on desktop and tabletThis is a portfolio project, but suggestions and feedback are welcome!

- **Hover States** — Interactive feedback on all elements

---

## 📄 License

**Built with ❤️ by [Your Name]**

MIT License - feel free to use this project for your portfolio or as a starting point for your own applications.import reactDom from 'eslint-plugin-react-dom'



---export default defineConfig([

  globalIgnores(['dist']),

Built with ❤️ using React and Tailwind CSS  {

    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
