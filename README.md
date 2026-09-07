# ✦ Laser Flow — Interactive WebGL Experience

A cinematic, interactive laser-flow experience built with **React, TypeScript, Three.js, and GLSL**.

An experimental WebGL showcase featuring mouse interaction, customizable laser colors, live controls, animated wisps, fog intensity, and interactive pulse effects.

## ✨ Preview

![Laser Flow UI Preview](src/assets/laser-flow.png)

## 🎯 About the Project

**Laser Flow** is an interactive WebGL experiment created to explore real-time visual effects on the web.

The project combines a volumetric laser shader with a minimal futuristic interface to create an immersive visual experience.

Move your cursor around the screen, experiment with different laser settings, change colors, and trigger the laser pulse in real time.

## 🚀 Features

- ✦ Real-time WebGL laser effect
- 🖱️ Mouse-responsive laser movement
- ⚡ Interactive laser pulse
- 🎨 Custom beam color
- 🌈 Multiple color presets
- 🌫️ Adjustable fog intensity
- ✨ Adjustable wisp density
- 🎲 Randomize laser configuration
- ↺ Reset effect
- ⌨️ Keyboard shortcuts
- 📱 Responsive interface
- ⚡ Real-time Three.js rendering
- 🧪 Custom GLSL shader
- 🎛️ Interactive control panel

## 🖱️ Interactions

| Interaction   | Action                                |
| ------------- | ------------------------------------- |
| Move mouse    | Interact with the laser               |
| Trigger Pulse | Create an interactive laser pulse     |
| `SPACE`       | Trigger laser pulse                   |
| `R`           | Reset settings                        |
| Color picker  | Change laser color                    |
| Color presets | Switch between predefined colors      |
| Wisp Density  | Adjust animated wisps                 |
| Fog Intensity | Adjust volumetric fog                 |
| Randomize     | Generate a random laser configuration |
| Reset         | Restore default settings              |

## 🎨 Color Presets

The showcase includes several built-in laser colors:

- Pink
- Cyan
- Purple
- Blue
- Red

You can also choose a custom color using the color picker.

## 🛠️ Tech Stack

- **React**
- **TypeScript**
- **Three.js**
- **GLSL**
- **Vite**
- **CSS**
- **Oxlint**

## 📁 Project Structure

```text
laser-flow-showcase/
│
├── public/
│
├── src/
│   ├── assets/
│   │   └── laser-flow-preview.png
│   │
│   ├── components/
│   │   └── LaserFlow.tsx
│   │
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```
📂 File Overview
File / Folder	Description
src/components/LaserFlow.tsx	Main Three.js and GLSL laser effect
src/App.tsx	Main application and interactive controls
src/index.css	Global styles and UI design
src/assets/	Project preview and visual assets
src/main.tsx	React application entry point
public/	Public static files
package.json	Project dependencies and scripts
vite.config.ts	Vite configuration
README.md	Project documentation
⚙️ Prerequisites

Before running the project, make sure you have Node.js installed.

Check your Node.js version:

node -v

A modern Node.js version is recommended.

🚀 Getting Started
1. Clone the repository
git clone https://github.com/YOUR-USERNAME/laser-flow-showcase.git
2. Navigate to the project
cd laser-flow-showcase
3. Install dependencies
npm install
4. Start the development server
npm run dev

The application will be available at the local URL displayed in your terminal.

Usually:

http://localhost:5173
📦 Available Scripts
Command	Description
npm run dev	Starts the development server with hot reload
npm run build	Builds the project for production
npm run preview	Previews the production build
npm run lint	Runs Oxlint to check the code
🎛️ LaserFlow Component

The main visual effect is provided by the LaserFlow component.

It can be imported into any React component:

import LaserFlow from "./components/LaserFlow";

function App() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <LaserFlow color="#FF79C6" />
    </div>
  );
}

export default App;
🔧 LaserFlow Properties

The LaserFlow component supports several optional properties for customizing the effect.

Property	Type	Description
color	string	Beam color
horizontalBeamOffset	number	Horizontal beam position
verticalBeamOffset	number	Vertical beam position
horizontalSizing	number	Horizontal beam size
verticalSizing	number	Vertical beam size
wispDensity	number	Density of animated wisps
wispSpeed	number	Speed of wisp movement
wispIntensity	number	Brightness of wisps
flowSpeed	number	Speed of beam flow
flowStrength	number	Strength of beam flow
fogIntensity	number	Volumetric fog intensity
fogScale	number	Spatial scale of fog
fogFallSpeed	number	Speed of fog movement
mouseTiltStrength	number	Mouse interaction strength
mouseSmoothTime	number	Pointer smoothing
decay	number	Beam falloff shaping
falloffStart	number	Falloff start radius
💻 Example Configuration
<LaserFlow
  color="#FF79C6"
  horizontalBeamOffset={0.1}
  verticalBeamOffset={0}
  horizontalSizing={0.5}
  verticalSizing={2}
  wispDensity={1.2}
  wispSpeed={15}
  wispIntensity={5}
  flowSpeed={0.35}
  flowStrength={0.25}
  fogIntensity={0.45}
  fogScale={0.3}
  fogFallSpeed={0.6}
  mouseTiltStrength={0.01}
  mouseSmoothTime={0}
  decay={1.1}
  falloffStart={1.2}
/>
⚡ Pulse Interaction

The showcase includes an interactive pulse effect.

Users can trigger the pulse using:

TRIGGER PULSE

or:

SPACE

The pulse temporarily increases the laser flow and creates a stronger visual effect.

🎲 Randomize Effect

The Randomize button generates a new configuration by changing:

Laser color
Wisp density
Fog intensity
Flow intensity

This makes it easy to experiment with different visual combinations.

↺ Reset Effect

The Reset button restores the default configuration.

Default values:

Color: #FF79C6
Wisp Density: 1.2
Fog Intensity: 0.45
Flow Speed: 0.35
Flow Strength: 0.25

The keyboard shortcut:

R

can also be used to reset the effect.

🖱️ Mouse Interaction

The laser responds to pointer movement using the mouseTiltStrength and mouseSmoothTime properties.

Moving the cursor across the screen creates a dynamic and interactive visual experience.

📱 Responsive Design

The interface is designed to work across different screen sizes.

The layout adapts for:

Desktop
Laptop
Tablet
Mobile

On smaller screens, unnecessary navigation and footer elements are reduced to keep the laser experience focused.

🧪 Experiment & Customize

This project is designed as a visual experiment.

You can customize the experience by modifying:

Laser colors
Wisp density
Wisp speed
Wisp intensity
Fog intensity
Fog scale
Flow speed
Flow strength
Beam position
Mouse interaction
GLSL shader parameters
UI animations
Color presets

You can also use the LaserFlow component as a background for your own React applications.

💡 Inspiration

The LaserFlow visual effect is based on the open-source LaserFlow component originally available through React Bits.

The effect uses Three.js and GLSL to create an animated volumetric laser beam.

This repository presents the effect through a custom interactive interface with additional controls and visual interactions.

📚 Learn More
React
Three.js
Vite
TypeScript
React Bits
GLSL
📸 Project Assets

The project UI preview is stored inside:

src/assets/

Example:

src/assets/laser-flow-preview.png

The image is used in this README to showcase the project's interface.

📄 License

This project uses an open-source LaserFlow implementation.

The original LaserFlow implementation is distributed under the MIT License.

Please refer to the original project and its license for the applicable attribution and usage terms.

👩‍💻 Author

Abinaya

A frontend and WebGL experiment focused on interactive graphics, creative development, and modern web technologies.

⭐ Acknowledgements

Special thanks to the open-source community and React Bits for the original LaserFlow concept and implementation.

Built with React + Three.js + GLSL ✦


### ⚠️ Just change these 2 things

**1. Your image filename**

If your asset isn't actually:

```text
src/assets/laser-flow-preview.png

replace that filename in the README with your real image filename.

2. Your GitHub username

Replace:

YOUR-USERNAME

with your GitHub username.

This version is structured like a proper GitHub project README: title → preview → project description → features → interactions → tech stack → structure → setup → API/configuration → customization → inspiration → license → author.


