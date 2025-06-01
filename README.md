# Energy Analysis App

A comprehensive energy analysis application built with Next.js, Material-UI, and Redux Toolkit.

## Version 1.0.0

### Features Implemented

#### Core Features
- Electricity rates management and visualization
- Design statistics tracking and analysis
- City-wise design status monitoring
- Interactive data visualization

#### Electricity Rates Module
- View electricity rates by city
- Interactive line chart visualization
- Real-time data updates
- Pagination and filtering support

#### Design Statistics Module
- City-wise design statistics
- Status tracking with color-coded indicators
- Total designs count
- Status breakdown (FINALIZED, REVIEW, REJECTED, etc.)
- Sorted view by total designs

#### UI/UX Features
- Responsive design
- Material-UI components
- Dark/Light theme support
- Interactive data tables
- Custom status color schemes
- Loading states and error handling

#### Technical Features
- TypeScript implementation
- Redux Toolkit for state management
- Next.js 13+ with App Router
- Material-UI v5
- Reusable components
- Type-safe constants
- Optimized performance with useMemo and useCallback
- Dynamic imports for better code splitting

### Getting Started

#### Prerequisites
- Node.js 16.x or higher
- npm or yarn

#### Installation
1. Clone the repository
```bash
git clone https://github.com/yourusername/energy-analysis-app.git
```

2. Install dependencies
```bash
cd energy-analysis-app
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Project Structure
```
src/
├── components/
│   ├── charts/
│   ├── electricity-rates/
│   ├── filters/
│   └── workspace/
├── constants/
├── hooks/
├── lib/
├── toolkit/
│   └── slices/
└── utils/
```

### Status Colors
The application uses a consistent color scheme for different statuses:
- FINALIZED: Green (#2E7D32)
- REVIEW: Orange (#E65100)
- REJECTED: Red (#C62828)
- DRAFT: Blue (#1565C0)
- PENDING: Purple (#7B1FA2)
- IN_PROGRESS: Cyan (#00838F)
- COMPLETED: Light Green (#558B2F)
- CANCELLED: Grey (#455A64)

### Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### License
This project is licensed under the MIT License - see the LICENSE file for details

### Acknowledgments
- Material-UI for the component library
- Next.js team for the framework
- Redux Toolkit for state management
