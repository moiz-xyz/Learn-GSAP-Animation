# 🚀 GSAP Animations Mastery

Welcome to my **GSAP Learning Repository!** Here, I have documented my journey of learning **GSAP (GreenSock Animation Platform)** through the official **GSAP Docs** and this **YouTube playlist**: [GSAP Playlist](https://www.youtube.com/watch?v=9C03V1dXxOU&list=PLbtI3_MArDOnIIJxB6xFtpnhM0wTwz0x6).

---

## 📌 What is GSAP?
GSAP is a powerful JavaScript library for creating high-performance animations. It makes animating elements **smooth, fast, and easy**, with built-in support for timelines, easing, and complex interactions.

---

## 📂 Repository Structure & Concepts

Each folder contains different animation concepts that I have learned and implemented.

### 1️⃣ **GSAP Basics**
- Covered **GSAP Core concepts**, including:
  - `gsap.to()`: Animates properties from their current state to a specified target.
  - `gsap.from()`: Starts the animation from the given values and transitions to the default state.
  - `gsap.fromTo()`: Defines both the starting and ending properties of an animation.
  - **Basic Properties:**
    - `duration`: Time (in seconds) the animation takes to complete.
    - `delay`: Delays the animation start.
    - `ease`: Controls the speed variation over time (e.g., `power1.inOut`, `bounce`, `elastic`).
    - `repeat`: Defines how many times the animation should repeat.
    - `yoyo`: Makes the animation reverse on alternate repeats.

### 2️⃣ **GSAP Basics II**
- Explored **GSAP Timelines**, which allow multiple animations to play sequentially or in sync.
- `gsap.timeline()`: Helps organize animations efficiently.
- **Timeline Methods:**
  - `.add()`: Adds animations at specific points.
  - `.to()`, `.from()`, `.fromTo()`: Used within timelines for chaining animations.
  - `.stagger()`: Animates multiple elements in sequence with slight delays.
  - `.pause()`, `.resume()`, `.reverse()`: Controls playback dynamically.

### 3️⃣ **Navbar Animations**
- Animated **navbar elements** for a smooth user experience.
- Implemented hover effects, menu slide-ins, and staggered animations.
- Used properties like `opacity`, `scale`, `x`, and `y` for transitions.

### 4️⃣ **ScrollTrigger with GSAP**
- **Added animations triggered by scrolling**.
- Used `ScrollTrigger` to detect user scrolling and animate elements as they appear in the viewport.
- **Key Properties:**
  - `start`: Defines when the animation should trigger (e.g., `"top 80%"`).
  - `end`: Specifies when the animation should stop.
  - `scrub`: Smoothly syncs animation with scrolling.
  - `pin`: Keeps an element fixed during scrolling.
  - `markers`: Visual indicators for debugging trigger points.

### 5️⃣ **Custom Cursor**
_
- Designed a **custom cursor animation** that follows user movements.
- Used `mousemove` event listeners to track user movement.
- Applied **GSAP properties** like `x`, `y`, `scale`, and `opacity` to animate the cursor.

### 6️⃣ **Project I - "Two Good Co" Web Animation**

- A **real-world project** implementing GSAP animations for a website.
- Combining multiple GSAP techniques to create smooth and interactive animations.

---

## 🔥 How to Use This Repo
1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/your-repo-name.git
   ```
2. **Navigate to a folder and open `index.html` in a browser.**
3. **Check out the JavaScript files (`.js`) to see GSAP animations in action.**
4. **Experiment & modify the code to learn!**

---

## 📖 Learning Resources
- **Official GSAP Docs:** [GSAP Documentation](https://greensock.com/docs/)
- **YouTube Playlist:** [GSAP Animations](https://www.youtube.com/watch?v=9C03V1dXxOU&list=PLbtI3_MArDOnIIJxB6xFtpnhM0wTwz0x6)

---

## ⭐ Support the Repository!
If you find this repo helpful, don't forget to:
✅ **Follow me** on GitHub.  
⭐ **Star this repository** to show support.  
📩 **Contribute & share your own GSAP animations!**

---

🔔 **Stay tuned!** I'll keep updating this repo with more GSAP projects and animations! 🚀
