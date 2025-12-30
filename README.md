# Animated Lit Components Demo

This project is a small demo application demonstrating the development of standalone **Lit** web components with **Storybook** documentation.

## Intent

The purpose of this project is to showcase modern web component development using:
- **Lit**: For lightweight, reactive web components.
- **TypeScript**: For robust, type-safe code standards.
- **SCSS**: Using the **BEM** (Block Element Modifier) convention for scoped styling.
- **GSAP**: For high-performance UI animations.
- **WebGL/GLSL**: For high-performance background shader effects.
- **Storybook**: For component-driven development and interactive documentation.

## Components

- **HeroLanding**: A full-viewport hero section featuring a custom GLSL shader-based background and GSAP-powered entrance animations.
- **AnimatedCard**: A versatile card component with smooth hover transitions and staggered entry support.
- **AppButton**: A modern button component with primary and secondary variants, designed with premium aesthetics.

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed.

### Installation

```bash
npm install
```

## Running the Application

### Demo Application
To view the landing page demo:
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### Storybook Documentation
To explore the component library and documentation:
```bash
npm run storybook
```
Storybook will open at `http://localhost:6006`.

## Building for Production

### Build Demo App
```bash
npm run build
```

### Build Storybook
```bash
npm run build-storybook
```
