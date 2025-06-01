# AlgoViz – Algorithm Visualizer

**🔗 Live Demo**: [https://alainplayz.github.io/AlgoViz/](https://alainplayz.github.io/AlgoViz/)

---

## 📌 Project Overview

**AlgoViz** is a web-based interactive tool for visualizing fundamental algorithms in computer science. Built using **Next.js**, **React**, and **ShadCN UI**, the project aims to make algorithm learning more engaging, accessible, and intuitive by providing real-time animations and simulations.

This project is particularly useful for:
- Students learning algorithms for the first time
- Educators demonstrating concepts visually
- Developers revisiting classic algorithm implementations

---

## 🚀 Key Features

- 🎯 Visual representation of 24+ algorithms
- ⏱️ Step-by-step execution with animations
- 📱 Responsive design for multiple devices
- 🌐 Deployed via GitHub Pages as a fully static site (SPA)
- 🛠️ Clean and modular codebase for easy customization

---

## 🧠 Algorithms Implemented

### 📍 Pathfinding
- Depth-First Search (DFS)
- Breadth-First Search (BFS)
- Dijkstra’s Algorithm
- A* (A-Star)
- Recursive Maze Generation

### 🔃 Sorting
- Bubble Sort
- Selection Sort
- Insertion Sort
- Merge Sort
- Quick Sort
- Heap Sort

### 🧮 Number Theory
- Sieve of Eratosthenes
- Archimedes Spiral (Prime Visualization)

### 🧩 Backtracking
- N-Queen Problem

### 📐 Geometry
- Convex Hull (Graham Scan)

### 🔎 Search Logic
- Binary Search Game

### 🧬 Recursion
- Fibonacci Sequence
- Binomial Coefficient
- Derangement
- Fast Exponentiation
- Stirling Numbers (Second Kind)

### 🧠 Turing Machine Simulations
- Bitwise NOT
- Increment Operation
- Two’s Complement

---

## 📁 Project Structure

```
/app              → Main pages and route handlers
/components       → Reusable UI elements
/public/Assets    → Images and static files
/styles           → Global styles (if any)
/build            → Static export output
next.config.mjs   → Next.js export and asset settings
```

---

## 🛠️ Tech Stack

- **Next.js** (with `output: export` for static SPA)
- **React 18**
- **TypeScript**
- **TailwindCSS**
- **ShadCN UI Components**
- **GitHub Pages** for deployment

---

## 🖥️ Run Locally

Make sure you have **Node.js** installed, then:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app locally.

---

## 🏗️ Build & Deploy

To generate the static files and deploy:

```bash
# Build the project
npm run build

# Export as a static site
npm run export
```

This will create a `build/` directory containing the static site. Push it to the `gh-pages` branch or use GitHub Actions to deploy.

---

## 🧭 Future Improvements

- Add interactive graph editor for custom inputs
- Include more data structure visualizations (AVL, Trie, etc.)
- Add code tracing view alongside animation
- Support dark mode and accessibility enhancements

---

## 👨‍💻 Author

**AlainPlayz**

If you find this project helpful, feel free to ⭐ star the repository!

---

## 📖 License

This project is released under the MIT License and is free to use for educational and non-commercial purposes.

---
