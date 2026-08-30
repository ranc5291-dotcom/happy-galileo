Project Overview
This project is an interactive demonstration of a stateful AI "Generate" button, designed for the FlyRank AI Frontend AI Engineering assignment. It explores how intentional motion and clear state transitions can effectively communicate interaction, progress, success, and failure without unnecessary decoration.

Assignment Objective
Build a professional interactive demo showing a reusable AI action button that communicates what is happening through state and motion. The final project must be polished, responsive, accessible, and ready to deploy to Vercel.

Features
Interactive State Transitions: Smooth, meaningful animations between idle, loading, success, and error states.
Robust State Management: Built-in protections against rapid clicking, race conditions, and stale asynchronous responses.
Test Controls: Dedicated testing suite allowing manual override to immediately trigger Success, Error, and Reset states for easy review.
Reduced Motion Support: Completely respects @media (prefers-reduced-motion: reduce), removing animations while retaining core visual state feedback.
Accessibility: Keyboard navigable, semantically correct, screen-reader friendly (using aria-busy and aria-hidden), and high contrast.
Fully Responsive: Optimized for seamless experiences across desktop, tablet, and mobile devices.
State Lifecycle
The button manages the following core states:

IDLE: Default state, waiting for user interaction.
LOADING: Indicates an active background process. Prevents multiple simultaneous submissions.
SUCCESS: Temporary positive feedback before returning to IDLE.
ERROR: Indicates a failed operation, allowing the user to "Retry".
DISABLED: Visually displays an unavailable state, ignoring interactions.
Motion Decisions
I kept the interactions short so the interface feels responsive rather than animated for its own sake. Hover and focus transitions use roughly 150–200ms, while loading and result transitions use roughly 200–300ms. I use transform and opacity because they are compositor-friendly and avoid unnecessary layout changes. Error feedback uses a brief shake, but the error state remains visible even when reduced motion is enabled.

Accessibility
The button is built with native <button> semantic elements. It correctly maps aria-busy and aria-disabled depending on the current state. Focus rings (:focus-visible) are prominent to assist keyboard navigation. Icons are appropriately hidden from screen readers to prevent redundant reading. State changes do not rely solely on color, incorporating textual and icon changes to communicate status.

Reduced-Motion Support
The application actively listens for system-level reduced motion preferences. When enabled, scale, opacity, and shake animations are significantly minimized or disabled, prioritizing instantaneous but visually distinct state shifts.

Technology Used
React 18
TypeScript
Vite
Lucide React (Icons)
Standard CSS (CSS Variables, keyframes)
Project Structure
src/
├── components/
│   ├── GenerateButton.tsx   # The core reusable button component
│   └── StateControls.tsx    # Controls for forcing specific states
├── App.tsx                  # Main demo layout and state machine integration
├── index.css                # Global styles, theming, and motion definitions
├── types.ts                 # Shared TypeScript interfaces and types
└── main.tsx                 # Application entry point
Local Setup
Ensure you have Node.js installed, then clone the repository and run:

npm install
npm run dev
Navigate to http://localhost:5173/ in your browser.

Testing
Load the page and verify responsive behavior.
Click Generate to watch the natural lifecycle (simulated 1-2.5s delay, 20% error rate).
Use Test Success and Test Error controls to manually force transitions.
Try spam-clicking Generate while loading; no duplicate operations should occur.
Emulate reduced-motion in dev tools to ensure animations are suppressed correctly.
Deployment
This project is built using Vite and is ready for instantaneous deployment to Vercel. To generate a production build locally:

npm run build
The output will be placed in the dist/ directory, ready to serve statically.
