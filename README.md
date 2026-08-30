FE-AA1 — Buttons with a Brain

An interactive button-state and motion demonstration built for the FlyRank AI Frontend AI Engineering track.

🌐 Live Demo: https://buttons-with-a-brain-olive.vercel.app/

📌 Overview

This project demonstrates how a well-designed button can communicate its complete lifecycle through state, motion, and visual feedback.

Instead of treating a button as a simple clickable element, this project explores how interaction states can clearly communicate what is happening to the user.

The main component is an AI Generate button that transitions through:

Idle → Hover/Focus → Loading → Success/Error → Idle

The project also includes dedicated controls that allow reviewers to trigger each important state directly.

🎯 Assignment Objective

This project was created for:

FE-AA1 — Buttons with a Brain: Motion & State Micro-interactions

The objective was to build a button that:

Communicates its current state clearly
Uses intentional motion
Handles asynchronous loading
Shows success and error feedback
Prevents duplicate interactions
Works with keyboard navigation
Supports reduced-motion preferences
Remains responsive and robust during rapid interaction
✨ Features
🎯 Reusable stateful Generate button
🟢 Idle state
✨ Hover and focus feedback
⏳ Loading state
✅ Success state
❌ Error state
🚫 Disabled state
🧪 Test Success control
🧪 Test Error control
🔄 Reset control
📊 Current-state indicator
🔁 Retry functionality
⌨️ Keyboard accessible
♿ Visible focus states
🧘 prefers-reduced-motion support
📱 Responsive design
⚡ Smooth micro-interactions
🛡️ Duplicate-click protection
🌐 Deployed on Vercel
🔄 Button State Lifecycle

The main interaction follows this lifecycle:

                 ┌───────────────┐
                 │     IDLE      │
                 │   Generate    │
                 └───────┬───────┘
                         │
                    Click / Enter
                         │
                         ▼
                 ┌───────────────┐
                 │    LOADING    │
                 │  Generating…  │
                 └───────┬───────┘
                         │
                 ┌───────┴────────┐
                 │                │
              Success           Error
                 │                │
                 ▼                ▼
          ┌────────────┐   ┌────────────┐
          │  SUCCESS   │   │   ERROR    │
          │  Generated  │   │   Retry    │
          └─────┬──────┘   └─────┬──────┘
                │                │
                └───────┬────────┘
                        ▼
                 ┌───────────────┐
                 │     IDLE      │
                 └───────────────┘

The demo also includes a disabled state for demonstrating unavailable actions.

🧪 Reviewer Test Controls

The demo includes three dedicated controls:

Test Success

Forces the main button into the success state immediately.

Test Error

Forces the main button into the error state immediately.

Reset

Returns the component to its initial idle state.

These controls make it possible to evaluate the different states without relying on the random result of the simulated asynchronous operation.

⏳ Simulated Async Operation

The Generate button uses a simulated asynchronous operation rather than a real AI API.

The operation uses a short randomized delay to represent an AI generation request.

The normal Generate action can produce either:

Success
Error

The loading state prevents additional clicks while the simulated operation is running.

This keeps the demonstration focused on interaction design and state management, rather than requiring an external backend or AI API.

🎨 Motion Decisions

I kept the interactions short so the interface feels responsive rather than animated for its own sake.

Hover and focus transitions use roughly 150–200ms, while loading and result transitions use roughly 200–300ms.

I use compositor-friendly properties such as transform and opacity where possible to avoid unnecessary layout changes.

The error state uses a brief shake to communicate failure, while the error message and visual state remain visible even when motion is reduced.

The goal was to make motion communicate what changed and why, rather than adding animation purely for decoration.

♿ Accessibility

Accessibility was considered as part of the component design.

The project includes:

Semantic button elements
Keyboard navigation
Keyboard activation using Enter and Space
Visible :focus-visible styling
Disabled button state
Clear text feedback for success and error
Loading feedback
Appropriate ARIA state information
Sufficient visual contrast
State communication that does not depend only on color
🧘 Reduced Motion

The interface respects the user's system-level:

prefers-reduced-motion

When reduced motion is enabled:

Animations are reduced or removed.
The error shake is disabled.
Large transforms are avoided.
State changes remain visible.
Loading, success, and error feedback are still communicated.

The purpose is to reduce unnecessary movement without removing important interaction feedback.

🛡️ Interaction Robustness

The component was designed to handle common interaction problems.

Rapid clicking

Additional clicks are prevented while the Generate operation is loading.

Multiple async operations

The component does not intentionally start multiple simultaneous Generate operations from repeated clicks.

Reset during loading

The Reset control can return the component to the idle state without leaving the interface stuck.

Retry

The error state provides a way to try the operation again.

Interruptible interaction

Hovering, focusing, clicking, and state changes are handled without intentionally breaking the component lifecycle.

🏗️ Project Structure
buttons-with-a-brain/
├── public/
├── src/
│   ├── components/
│   │   ├── GenerateButton.*
│   │   └── StateControls.*
│   ├── App.*
│   ├── main.*
│   └── index.css
├── package.json
├── vite.config.*
└── README.md

The exact file extensions and implementation details may vary depending on the final project configuration.

🛠️ Tech Stack
Frontend
React
TypeScript
Vite
CSS
Motion
CSS transitions/animations
Compositor-friendly transforms and opacity
Reduced-motion media query
Deployment
Vercel
💻 Getting Started
Prerequisites

Make sure you have:

Node.js
npm
Git

installed on your computer.

Clone the repository
git clone YOUR_GITHUB_REPOSITORY_URL
Navigate into the project
cd buttons-with-a-brain
Install dependencies
npm install
Start the development server
npm run dev

Open the local URL provided by Vite.

📦 Production Build

To create a production build:

npm run build

The build should complete successfully before deployment.

🌐 Deployment

The project is deployed using Vercel.

Live demo:

https://buttons-with-a-brain-olive.vercel.app/

The deployed version allows reviewers to interact with the button and inspect the different states.

🧪 Testing Checklist

Before deployment, I checked the following:

 Idle state
 Hover state
 Focus state
 Loading state
 Success state
 Error state
 Disabled state
 Test Success
 Test Error
 Reset
 Retry
 Keyboard navigation
 Visible focus indicator
 Reduced-motion support
 Responsive layout
 Duplicate-click protection
 Production build
🎓 What I Learned

This assignment helped me understand that button design is not only about styling.

A good interactive component needs to communicate:

What can be clicked
What is currently happening
Whether an action succeeded
Whether something failed
What the user can do next

I also learned that animation should support communication instead of being added only for visual effects.

Accessibility and reduced-motion support should also be considered while designing the interaction rather than being added at the end.

🤖 Use of AI

I used AI as a development and learning assistant during this project to help with implementation ideas, debugging, interaction design, and reviewing the component behaviour.

I reviewed and tested the implementation myself, including the different button states, responsiveness, keyboard interaction, reduced-motion behaviour, and production build.

The purpose of using AI was to accelerate development while still understanding and validating the final implementation.

🚀 Future Improvements

Possible future improvements include:

Connecting the button to a real AI generation API.
Adding more reusable button variants.
Creating a reusable motion system for other components.
Adding automated component tests.
Measuring interaction performance with additional tooling.
Expanding the demo with additional real-world use cases such as Save, Deploy, or Send.
📄 Assignment

FlyRank AI — Frontend AI Engineering

Assignment: FE-AA1 — Buttons with a Brain: Motion & State Micro-interactions

Live Demo:
https://buttons-with-a-brain-olive.vercel.app/

⭐ Final Summary

This project demonstrates a small but production-oriented interaction system where state, motion, accessibility, and user feedback work together.

The main lesson is simple:

A button should not just react to a click — it should communicate what the click caused.
