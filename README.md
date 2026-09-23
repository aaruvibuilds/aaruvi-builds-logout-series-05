# ⚡ AARUVI BUILDS

### ⏻ Logout Animation — Series 05

**Lock the workspace.**
**Secure the session.**

<p align="center">
  <a href="https://aaruvibuilds.github.io/aaruvi-builds-logout-series-05/">
    <img src="https://img.shields.io/badge/🚀%20LIVE%20DEMO-7B5CFF?style=for-the-badge&logoColor=white" alt="Live Demo">
  </a>
  <a href="https://github.com/aaruvibuilds/aaruvi-builds-logout-series-05">
    <img src="https://img.shields.io/badge/💻%20SOURCE%20CODE-17151B?style=for-the-badge&logo=github&logoColor=white" alt="Source Code">
  </a>
</p>

---

## ⏻ The Build

**Logout Animation — Series 05** explores a security-focused approach to the logout experience.

Instead of treating logout as simply leaving the interface, the workspace behaves like a protected system that actively **locks itself down and secures the current session**.

The interaction moves through a simple visual sequence:

```text
SECURE SESSION
      ↓
LOGOUT
      ↓
SECURING WORKSPACE
      ↓
LOCKING YOUR SESSION
      ↓
SESSION SECURED
      ↓
LOCKED OUT
      ↓
UNLOCK WORKSPACE
      ↓
SECURE SESSION
```

Built entirely with **HTML, CSS and JavaScript**.

No frameworks.
No libraries.
Just frontend interaction and motion.

---

## 🎬 The Experience

### 01 — Secure Workspace

The experience begins inside a private workspace.

The interface includes:

* Workspace identity
* Secure session indicator
* Private workspace heading
* Security status
* Verified security card
* Trusted devices
* Security monitoring
* Logout control

The system begins in the:

**SECURE SESSION**

state.

The security indicator continuously communicates that the workspace is protected.

---

### 02 — Initiating Logout

Clicking **Logout** starts the security sequence.

Instead of immediately removing the interface, the workspace begins transitioning into a secure lock-down state.

The interface changes from:

```text
SECURE SESSION
```

toward:

```text
SECURING WORKSPACE
```

The dashboard begins moving away while the lock sequence takes over.

---

### 03 — Locking The Session

The center of the interface reveals a dedicated locking scene.

The message becomes:

**Locking
your session.**

Beside it is a large CSS-built lock.

The lock becomes the visual focus while the workspace fades away.

---

### 04 — The Lock Sequence

The lock itself contains several animated details.

During the sequence:

* The lock enters the scene
* The shackle moves
* The lock gently floats into position
* A security glow expands around it
* The workspace disappears
* The locking message becomes visible

The lock animation creates a visual representation of the session being secured.

---

### 05 — Session Secured

After the locking sequence completes, the interface reaches its final state.

The security indicator changes to:

**SESSION LOCKED**

The signed-out screen displays:

**Locked out.**

> Your workspace has been secured.

The workspace is now visually protected.

---

### 06 — Unlock Workspace

The experience doesn't require a page refresh.

Clicking:

**Unlock workspace**

restores the workspace.

The signed-out screen fades away while the dashboard returns.

The system returns to:

**SECURE SESSION**

The interaction can therefore be repeated continuously.

---

## ✨ Interaction System

| State / Action   | Behaviour                         |
| ---------------- | --------------------------------- |
| `active`         | Secure workspace active           |
| `leaving`        | Locking / security sequence       |
| `signed-out`     | Session secured                   |
| Logout button    | Starts locking sequence           |
| Unlock workspace | Restores workspace                |
| Escape key       | Unlocks workspace when signed out |

The JavaScript manages the application state, security indicator and timed lock sequence.

---

## 🎨 Motion Details

The visual system combines several small interactions:

* Secure-session indicator pulse
* Logout button hover effect
* Logout button state transition
* Dashboard upward movement
* Dashboard fade
* Heading transition
* Security card hover interaction
* Shield movement
* Statistics interaction
* Lock-stage reveal
* Lock message entrance
* Lock floating motion
* Lock shackle rotation
* Security glow expansion
* Signed-out icon entrance
* Signed-out content stagger
* Unlock workspace transition
* Workspace restoration
* Focus-visible states

The CSS handles the complete motion system without external animation libraries.

---

## 🔐 The Security Interface

The workspace is designed around a simple security metaphor.

```text
┌──────────────────────────────────────────┐
│ A  Workspace Studio      ● SECURE SESSION│
│                              [ Logout ]   │
│                                          │
│ Private workspace                        │
│ Your work is                             │
│ protected.                               │
│                                          │
│ ┌────────────────┐ ┌──────────┐ ┌─────┐ │
│ │ SECURITY       │ │ Devices  │ │Access│ │
│ │ ✓ VERIFIED     │ │ 03       │ │24/7 │ │
│ │ Protected      │ │ trusted  │ │monitor│
│ └────────────────┘ └──────────┘ └─────┘ │
└──────────────────────────────────────────┘
```

The dashboard establishes the idea that the workspace contains protected information before the logout sequence begins.

---

## 🔒 The Lock Stage

The defining visual element of Series 05 is the animated lock.

```text
          LOCKING
        YOUR SESSION

             ╭─────╮
          ╭──│     │──╮
          │  │  🔒 │  │
          │  │     │  │
          ╰──┴─────┴──╯
```

The lock is constructed entirely with CSS.

Its shackle rotates during the sequence while a subtle glow expands around the lock.

This creates a visual metaphor for the session being secured.

---

## 🧠 State-Driven Interaction

The interaction is controlled through a simple JavaScript state system.

```text
active
   │
   │ Logout
   ▼
leaving
   │
   │ 1950ms
   ▼
signed-out
   │
   │ Unlock workspace
   ▼
active
```

The JavaScript changes the application state while CSS controls the visual choreography.

The security indicator is also updated according to the current state.

---

## 🛠️ Built With

### HTML5

Provides the structure for:

* Workspace shell
* Navigation
* Secure session indicator
* Private workspace
* Security card
* Trusted device statistics
* Security monitoring
* Lock stage
* Signed-out state
* Unlock control

### CSS3

Handles the visual experience through:

* CSS transitions
* CSS transforms
* Keyframe animations
* CSS-built lock
* CSS-built shield
* Responsive layouts
* Hover states
* Focus-visible states
* Security glow effects
* Reduced-motion support

### JavaScript

Controls:

* Application state
* Logout interaction
* Lock sequence
* Security status
* Session timing
* Signed-out state
* Workspace restoration
* Escape-key interaction
* Button state management

---

## 📱 Responsive

The interface adapts for smaller screens.

The responsive system includes:

* Reduced workspace spacing
* Mobile navigation adjustments
* Hidden secondary security status
* Two-column dashboard layout
* Single-column mobile layout
* Smaller security shield
* Smaller statistics cards
* Vertical lock composition
* Mobile-friendly logout control

The lock scene also changes from a horizontal composition to a vertical composition on smaller screens.

---

## ♿ Reduced Motion

The project includes support for:

```css
prefers-reduced-motion: reduce
```

When reduced motion is preferred, animation and transition durations are minimized while preserving the core interaction.

---

## 📂 Project Structure

```text
aaruvi-builds-logout-series-05/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

Simple frontend structure.

No build tools required.

No dependencies required.

---

## 🚀 Run Locally

Clone the repository:

```bash
git clone https://github.com/aaruvibuilds/aaruvi-builds-logout-series-05.git
```

Enter the project:

```bash
cd aaruvi-builds-logout-series-05
```

Open:

```text
index.html
```

That's it.

No installation required.

No dependencies required.

---

## 🌐 Live Demo

### Try the interaction

[**🚀 Open Live Demo**](https://aaruvibuilds.github.io/aaruvi-builds-logout-series-05/)

Click **Logout** and watch the workspace lock down and secure the session.

Then click **Unlock workspace** to restore the interface.

---

## 💻 Source Code

The complete source code used for this build is available on GitHub.

### Repository

[**💻 View Source Code**](https://github.com/aaruvibuilds/aaruvi-builds-logout-series-05)

---

## 🎯 The Idea

A logout interaction doesn't have to feel like:

```text
CLICK → DISAPPEAR
```

It can communicate something meaningful:

```text
ACTION
  ↓
SECURITY RESPONSE
  ↓
LOCK
  ↓
SESSION SECURED
  ↓
COMPLETION
```

Series 05 explores logout as a **security action** rather than simply an exit action.

The interface doesn't just say the session has ended.

It visually communicates:

**The workspace is now secured.**

---

## ⚡ AARUVI BUILDS

**Frontend • UI • Motion**

Building modern web experiences through:

`Frontend Development` · `Creative UI` · `Smooth Motion`

### Follow the journey

**Instagram:** [@aaruvi_builds](https://www.instagram.com/aaruvi_builds)

**YouTube:** [@AaruviBuilds](https://www.youtube.com/@AaruviBuilds)

**GitHub:** [@aaruvibuilds](https://github.com/aaruvibuilds)

---

### BUILD. EXPERIMENT. CREATE.

**⚡ Aaruvi Builds**

*Series 05 / Logout Animation*
