# Interactive 3D Portfolio - Murali Krishtna

A unique portfolio website that visualizes career progression through an interactive Rubik's Cube, built with React Three Fiber and real cube-solving algorithms.

## 🎯 Features

- **Real Rubik's Cube Solving**: Uses the Kociemba algorithm to generate authentic scrambles and solutions
- **Progressive Solving**: Each career milestone corresponds to a portion of the cube being solved
- **Interactive 3D Navigation**: Rotate and inspect the cube with arrow keys or on-screen controls
- **Modular Architecture**: Clean, extensible codebase for easy updates

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Visit `http://localhost:5000` to see the portfolio.

## 📝 Adding New Work Experiences

To add a new work experience, simply edit `client/src/data/experiences.ts`:

### 1. Add your new experience to the array:

```typescript
{
  id: 'exp4',  // Unique identifier
  title: 'Senior Engineer',
  role: 'Staff Software Engineer',
  company: 'Your Company',
  period: '2025 - Present',
  
  // Short description for collapsed view
  description: "One-line summary of your role and impact.",
  
  // Detailed description for expanded view
  detailedDescription: "A longer narrative about your work, challenges faced, and solutions delivered.",
  
  // Bullet points for key achievements
  keyAccomplishments: [
    "Built X that resulted in Y impact",
    "Led initiative Z across N teams",
    "Optimized system ABC resulting in 50% improvement"
  ],
  
  // Hex color for this experience (used for cube face and UI accents)
  color: '#4CAF50',
  
  // Whether this represents a "solved" state (true for work experiences, false for "future/WIP")
  solved: true,
  
  // Tech stack tags
  tech: ['React', 'TypeScript', 'AWS', 'System Design']
}
```

### 2. That's it!

The cube solver automatically redistributes the solving algorithm across all experiences. If you have 5 experiences now, the cube will solve in 4 steps (Start → Exp1 → Exp2 → Exp3 → Exp4).

## 🏗️ Architecture

### Component Structure

```
client/src/
├── components/
│   ├── ExperienceCard.tsx      # Reusable card (collapsed & expanded views)
│   ├── Portfolio.tsx            # Main page orchestrator
│   ├── RubiksCube.tsx           # 3D cube with physics-based moves
│   └── ui/                      # Shadcn UI primitives
├── data/
│   └── experiences.ts           # Career data (single source of truth)
├── hooks/
│   └── useCubeSolver.ts         # Cube initialization & solving logic
└── types/
    └── cubejs.d.ts              # Type definitions
```

### Key Principles

1. **Single Source of Truth**: All career data lives in `experiences.ts`
2. **Separation of Concerns**:
   - `ExperienceCard`: Presentation logic
   - `useCubeSolver`: Cube algorithm logic
   - `RubiksCube`: 3D rendering & physics
3. **Extensibility**: Adding experiences requires zero code changes, only data

## 🎨 Customization

### Colors

Each experience has a `color` field that determines:
- The cube face color when solved
- UI accent colors in the experience card
- Progress bar color

Recommended: Use high-contrast colors for visual distinction.

### Cube Difficulty

The scramble is genuinely random. If you want a simpler or more complex scramble, you can modify the initialization in `useCubeSolver.ts`:

```typescript
// For a simpler scramble (fewer moves)
const cube = new Cube();
cube.move("R U R' U'"); // Custom scramble instead of randomize()

// For harder scramble (default)
cube.randomize();
```

## 🔧 Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **3D Graphics**: Three.js, React Three Fiber, Drei
- **Animations**: Framer Motion
- **Cube Solving**: cubejs (Kociemba algorithm)
- **UI Components**: Shadcn/ui, Radix UI
- **Styling**: Tailwind CSS v4

## 📦 Project Structure

- **Client-side only**: No backend needed, perfect for static hosting
- **Performance**: Lazy-loaded 3D assets, optimized bundle
- **Accessibility**: Keyboard navigation, semantic HTML, ARIA labels

## 🎯 Future Enhancements

Potential additions you might consider:

- [ ] Add project detail modals
- [ ] Integrate GitHub/LinkedIn links dynamically
- [ ] Export resume as PDF
- [ ] Analytics to track visitor engagement
- [ ] Dark/light mode toggle (currently dark-only)

## 📄 License

MIT - Feel free to use this as a template for your own portfolio!

---

**Built with ❤️ and a lot of Rubik's cube rotations**
