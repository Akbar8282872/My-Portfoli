
# ARCHITECTURE.md — Premium Interactive Developer Portfolio

## 1. Project Vision

Build a world-class personal developer portfolio using HTML5, modern CSS3, and advanced JavaScript.

The website must combine exceptional visual design, sophisticated motion, immersive interactions, polished typography, premium project showcases, and reliable engineering.

The target is a portfolio that feels custom-built by a high-end creative development studio—not a generic AI-generated template.

Use your strongest available capabilities in frontend engineering, UI/UX implementation, animation, interaction design, responsive layouts, and performance optimization.

Create an original combination of visual elements, interactions, and motion. Do not imitate a single existing website or combine fashionable effects without a coherent design direction.

The result must be memorable, visually striking, professional, and genuinely usable.

## 2. Core Technology Stack

Use the following technologies as the primary foundation:

### HTML5
- Semantic, accessible page structure.
- Clear separation of content and interface components.
- Appropriate metadata and SEO structure.
- Reusable patterns for navigation, sections, project displays, and forms.
- Proper document hierarchy and accessible interaction elements.

### Modern CSS3
- CSS custom properties for design tokens.
- Flexbox and CSS Grid for advanced layouts.
- Responsive typography using `clamp()`.
- Fluid spacing and responsive sizing.
- Modern gradients, masks, clipping, and layered compositions where appropriate.
- CSS transitions and keyframe animations.
- Container queries where useful.
- Carefully controlled shadows, borders, and depth.
- Responsive breakpoints designed around content needs.

### Advanced JavaScript
- Modern ECMAScript syntax and modules.
- Reusable functions and clearly separated responsibilities.
- Event-driven interaction architecture.
- Efficient DOM manipulation.
- Intersection Observer for viewport-based reveals.
- RequestAnimationFrame for appropriate frame-based animation.
- Pointer and touch interaction handling.
- Dynamic navigation and scroll-state management.
- Form validation and functional interaction states.
- Cleanup of event listeners and animation resources.

Keep HTML, CSS, and JavaScript as the core technologies. Add libraries only when they provide a clear advantage.

## 3. Framework and Dependency Policy

Start by inspecting the existing project files, package configuration, and implementation constraints.

Use the lightest architecture that can achieve the intended design quality.

Prefer native HTML, CSS, and JavaScript for standard interface functionality.

Where advanced animation or 3D is genuinely beneficial, evaluate suitable options such as:

- GSAP for complex timelines and scroll-driven animation.
- Three.js for custom 3D scenes and WebGL experiences.
- Lenis for smooth scrolling, only when appropriate and compatible.
- A suitable lightweight icon library for consistent iconography.

These libraries are optional, not mandatory. Do not install every library listed here.

Avoid introducing React, another framework, or a build system solely because it is fashionable. If the existing project already uses a framework or bundler, preserve it when appropriate rather than rebuilding unnecessarily.

Select technologies based on visual requirements, maintainability, browser support, and performance.

## 4. Recommended Project Structure

Organize the project into clear, maintainable modules. Adapt this structure to the actual application rather than forcing it onto an existing project.

    portfolio/
    ├── index.html
    ├── pages/
    │   ├── about.html
    │   ├── projects.html
    │   ├── services.html
    │   └── contact.html
    ├── assets/
    │   ├── images/
    │   ├── icons/
    │   ├── models/
    │   └── fonts/
    ├── css/
    │   ├── tokens.css
    │   ├── reset.css
    │   ├── base.css
    │   ├── layout.css
    │   ├── components.css
    │   ├── animations.css
    │   ├── pages.css
    │   └── responsive.css
    ├── js/
    │   ├── main.js
    │   ├── navigation.js
    │   ├── motion.js
    │   ├── interactions.js
    │   ├── projects.js
    │   ├── contact.js
    │   └── utils.js
    ├── ARCHITECTURE.md
    ├── DESIGN.md
    ├── PRD.md
    └── README.md

The five HTML pages shown are an example structure. Follow the actual five