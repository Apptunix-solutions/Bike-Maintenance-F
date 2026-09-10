# 🚴 BikeFix

> **Your bike needs service. Find the right mechanic, fast.**  
> عجلتك محتاجة صيانة؟ إحنا نوصلّك بالخبير.

---

## What is BikeFix?

BikeFix is a specialized **bicycle maintenance marketplace** that connects bike owners with trusted mechanics and workshops. No generic handyman. No bike rentals. Just real bike repair, fast.

**The core flow:**
1. 📝 Describe your bike problem
2. 🔍 Get matched with nearby mechanics
3. 💰 Compare transparent offers
4. ✅ Approve the repair
5. 📊 Track service in real-time
6. 📋 Keep complete maintenance history

---

## Key Features

### 🎯 Customer Experience
- **Bike Garage** — Register multiple bikes with full details (brand, type, size, e-bike specs)
- **Smart Matching** — Find mechanics by distance, rating, availability, and expertise
- **Transparent Quotes** — See itemized pricing before repair begins
- **Service Tracking** — Real-time status updates with provider ETA
- **Maintenance Timeline** — Complete history of all services and parts replaced
- **Ratings & Reviews** — Rate mechanics and track quality

### 🔧 Mechanic Dashboard
- **Job Queue** — Available repair requests nearby
- **Provider Profile** — Showcase specialties, ratings, and service area
- **Mobile Service** — Enable on-site repair with configurable radius
- **Earnings Tracking** — Daily/weekly/monthly performance metrics
- **Response Time** — Build reliability and rank higher

### 🏪 Workshop Management
- **Repair Queue** — Manage customer backlog with status tracking
- **Calendar Booking** — Multi-mechanic scheduling and capacity planning
- **Parts Inventory** — Track stock with automatic reorder thresholds
- **Revenue Dashboard** — Analyze performance and customer metrics

### ⚙️ Admin Operations
- **Request Management** — Oversee all repairs and monitor disputes
- **Provider Verification** — Real configuration, real verification (not fake claims)
- **Commission Settings** — Flexible percentage or flat-fee models
- **KPI Dashboard** — GMV, response times, completion rates, platform health
- **Dispute Resolution** — Evidence-based ticket management

---

## Supported Platforms

| Role | Experience |
|------|------------|
| **Customer** | Mobile-first app for browsing, requesting, and tracking repairs |
| **Mechanic** | Mobile-first with offline capability for job discovery |
| **Workshop** | Desktop-first admin dashboard for scheduling and inventory |
| **Admin** | Full dashboard for operations, payments, and provider management |

---

## Technical Stack

```
Frontend:
  • React 19 + TypeScript
  • Vite (lightning-fast dev server)
  • TanStack Router + React Query
  • Tailwind CSS + shadcn/ui
  • Lucide Icons

Backend-ready:
  • Supabase (auth, RLS, real-time)
  • PostgreSQL data model
  • REST APIs with type safety

Theming:
  • Dark/Light/System modes
  • Bilingual (Arabic/English)
  • RTL-first design
```

---

## Getting Started

### Prerequisites
- Node.js 18+ (install with [nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- npm or yarn

### Development

```bash
# Clone and install
git clone <repository-url>
cd bikefix
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Format & lint
npm run format
npm run lint

# Production build
npm run build
npm run preview
```

---

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui primitives
│   └── *.tsx           # Domain-specific components
├── features/           # Feature modules
│   ├── bikes/          # Bike garage & profiles
│   ├── marketplace/    # Search & discovery
│   ├── requests/       # Service requests
│   ├── providers/      # Mechanic profiles & matching
│   ├── quotes/         # Pricing & approval
│   ├── maintenance/    # History & reminders
│   └── admin/          # Operations dashboard
├── lib/                # Utilities & helpers
├── types/              # TypeScript definitions
├── i18n/               # Bilingual support
├── routes/             # TanStack Router pages
└── styles.css          # Tailwind & theme tokens
```

---

## Design System

### Color Palette

**Light Mode**
- Primary: `#167D9A` (trusted blue)
- Accent: `#F28C28` (energy orange)
- Success: `#2E8B57` (completed green)
- Danger: `#D64545` (attention red)

**Dark Mode**
- Primary: `#46A9C4` (brightened)
- Accent: `#F5A14A` (maintained energy)
- Success: `#54B77A` (improved contrast)
- Danger: `#F06B6B` (high visibility)

### Typography
- **Arabic**: IBM Plex Sans Arabic / Noto Sans Arabic
- **English**: Inter / Manrope
- **Responsive**: Mobile-first 16px → Desktop 18px base

### Motion
- Fast: 120ms (micro-interactions)
- Normal: 180ms (standard transitions)
- Slow: 300ms (important state changes)

---

## Bilingual Support

BikeFix is **bilingual-first**, not an afterthought:

- ✅ Arabic and English interfaces
- ✅ RTL/LTR layouts (proper alignment, not flipped)
- ✅ Contextual directional icons
- ✅ Language toggle with persistence
- ✅ Form & table support for both directions

**Language Switcher:** Top navigation

---

## Demo Accounts

### Customer
```
Email: customer@demo.com
Bike: Demo Mountain Bike (2024 Trek)
Area: Tanta, Stadium Area
```

### Mechanic
```
Name: Ahmed — Bike Fix
Rating: 4.9 ⭐ (47 reviews)
Service Area: Tanta, within 8km
Mobile Service: Yes, 50 EGP travel fee
```

### Workshop
```
Name: Speed Cycle Workshop
Location: Tanta, Saad Zaghloul St.
Mechanics: 3
Specialties: Brakes, chains, tune-ups
```

### Admin
```
Email: admin@demo.com
Access: Full platform oversight
```

---

## Core Workflows

### 1. Customer Repair Request
```
Select Bike → Describe Problem → Upload Photos
→ Choose Location → Select Service Type → Pick Time
→ Review → Submit
```

### 2. Provider Matching
```
New Request → Find Nearby Providers (rating, distance, availability)
→ Filter by Specialties & Service Type
→ Display 3 Best Matches (customizable)
```

### 3. Quote & Approval
```
Provider Sends Offer → Customer Reviews
→ Provider Diagnoses → Creates Detailed Quote
→ Customer Approves Parts & Labor → Repair Starts
```

### 4. Service Tracking
```
Status: SUBMITTED → OFFER SELECTED → BOOKED
→ PROVIDER ON WAY → ARRIVED → DIAGNOSING
→ QUOTE PENDING → QUOTE APPROVED → IN REPAIR
→ READY_FOR_PICKUP → COMPLETED
```

---

## Business Model

### Commission (Configurable)
```
Service Cost:        350 EGP
Platform Fee (10%):  -35 EGP
Provider Earns:      315 EGP
```

Supports:
- Percentage-based (per request)
- Fixed fee (per request)
- Provider-specific rates
- Category-specific rates

### Payment Methods (MVP)
- 💵 Cash at location
- 💳 Demo online (non-functional)
- 🏦 Demo wallet (non-functional)

---

## Responsive Breakpoints

Tested at: 320px, 375px, 390px, 430px, 768px, 1024px, 1280px, 1440px, 1920px

- **Mobile**: Customer & Mechanic focus (iOS/Android)
- **Tablet**: Secondary experience (iPad)
- **Desktop**: Admin & Workshop tools (1440px optimal)

---

## Accessibility

- ✅ Semantic HTML structure
- ✅ Keyboard navigation (Tab, Enter, Escape)
- ✅ Visible focus indicators
- ✅ Screen reader labels (aria-*)
- ✅ Adequate color contrast (WCAG AA)
- ✅ Lucide icons (not emoji) for UI elements
- ✅ Form validation & error messaging

---

## What's NOT Included (MVP)

- ❌ Real payment gateway integration
- ❌ Live GPS tracking
- ❌ Push notifications
- ❌ WhatsApp integration
- ❌ AI-assisted diagnostics
- ❌ Advanced route optimization
- ❌ Full e-commerce parts store

These are planned for **Phase 2+**.

---

## Build with Lovable

This project was initially built with [Lovable](https://lovable.dev).

- ✅ All code is yours
- ✅ Push to GitHub → Sync back to Lovable
- ✅ Continue in Lovable or locally
- ✅ No vendor lock-in

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

This project is **open source** and available under the [MIT License](LICENSE).

---

## Support

Have questions or need help?

- 📧 **Email**: support@bikefix.local
- 💬 **Discord**: [Join our community](https://discord.gg/bikefix)
- 🐛 **Issues**: [Report bugs on GitHub](https://github.com/bikefix/bikefix/issues)

---

**BikeFix** — Connecting cyclists with trusted mechanics since 2026.

Made with ❤️ for the Egyptian cycling community.
