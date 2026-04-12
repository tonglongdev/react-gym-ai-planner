# React Gym AI Planner

An intelligent fitness planning application that uses AI to generate personalized workout plans based on user profiles and fitness goals.

## Features

- **AI-Powered Workout Plans**: Generate customized gym workout plans using OpenAI
- **User Authentication**: Secure user authentication with profile management
- **Detailed User Profiles**: Onboarding flow to capture fitness goals, experience level, and preferences
- **Plan Management**: View, create, and manage workout plans
- **Account Settings**: User account management and preferences

## Tech Stack

### Frontend
- **React 19.2** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Lightning-fast build tool with HMR
- **React Router 7.13** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Modern icon library

### Backend
- **Express.js** - Node.js web framework
- **Prisma ORM** - Database ORM with type safety
- **PostgreSQL** - Database (hosted on Neon)
- **OpenAI API** - AI integration for plan generation
- **Cookie Parser** - Session management

## Project Structure

```
├── src/                    # Frontend React application
│   ├── components/         # Reusable UI components
│   ├── pages/             # Page components (Home, Auth, Profile, etc.)
│   ├── context/           # React context for state management
│   ├── lib/               # Utility functions and API client
│   └── types/             # TypeScript type definitions
├── server/                # Backend Express server
│   ├── src/
│   │   ├── routes/        # API route handlers (profile, plan)
│   │   ├── lib/           # Server utilities (AI, Prisma client)
│   │   └── index.ts       # Express app setup
│   └── prisma/            # Database schema and migrations
├── public/                # Static assets
└── vite.config.ts        # Vite configuration
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- PostgreSQL database (or use Neon)
- OpenAI API key

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-gym-ai-planner
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install server dependencies**
   ```bash
   cd server
   npm install
   cd ..
   ```

4. **Set up environment variables**
   
   Create `.env` in the `server` directory:
   ```env
   DATABASE_URL=your_postgresql_url
   OPENAI_API_KEY=your_openai_api_key
   PORT=3001
   ```

5. **Set up database**
   ```bash
   cd server
   npx prisma migrate dev
   cd ..
   ```

### Development

Run both frontend and backend simultaneously:

1. **Terminal 1 - Start the frontend (Vite dev server)**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

2. **Terminal 2 - Start the backend**
   ```bash
   cd server
   npm run dev:server
   ```
   The API will be available at `http://localhost:3001`

### Build & Preview

**Build for production**
```bash
npm run build
```

**Preview production build**
```bash
npm run preview
```

## Available Scripts

### Frontend
- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production (TypeScript + Vite)
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview production build locally

### Backend
- `npm run dev:server` - Start development server with auto-reload (from `server/` directory)

## API Endpoints

### Profile Routes
- `GET /api/profile/:id` - Get user profile
- `POST /api/profile` - Create/update user profile
- `DELETE /api/profile/:id` - Delete user profile

### Plan Routes
- `GET /api/plan/:id` - Get workout plan
- `POST /api/plan` - Generate new AI workout plan
- `PUT /api/plan/:id` - Update workout plan
- `DELETE /api/plan/:id` - Delete workout plan

## Database Schema

The application uses Prisma with PostgreSQL. Key entities include:
- **User** - User profiles with fitness information
- **Plan** - AI-generated or custom workout plans

Run `npx prisma studio` to view and manage data visually.

## Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## License

MIT
