import { useEffect, useState } from "react";
import LaserFlow from "./components/LaserFlow";

type Preset = {
  name: string;
  color: string;
};

const presets: Preset[] = [
  { name: "Pink", color: "#FF79C6" },
  { name: "Cyan", color: "#5DE4FF" },
  { name: "Purple", color: "#A855F7" },
  { name: "Blue", color: "#5B8CFF" },
  { name: "Red", color: "#FF4D6D" },
];

const randomColors = [
  "#FF79C6",
  "#5DE4FF",
  "#A855F7",
  "#5B8CFF",
  "#FF4D6D",
  "#FFB86C",
  "#7CFFB2",
];

function App() {
  const [color, setColor] = useState("#FF79C6");
  const [wispDensity, setWispDensity] = useState(1.2);
  const [fogIntensity, setFogIntensity] = useState(0.45);
  const [pulse, setPulse] = useState(false);

  const triggerPulse = () => {
    setPulse(true);

    window.setTimeout(() => {
      setPulse(false);
    }, 450);
  };

  const resetEffect = () => {
    setColor("#FF79C6");
    setWispDensity(1.2);
    setFogIntensity(0.45);
    setPulse(false);
  };

  const randomizeEffect = () => {
    const randomColor =
      randomColors[Math.floor(Math.random() * randomColors.length)];

    const randomDensity = Number((Math.random() * 1.6 + 0.4).toFixed(1));

    const randomFog = Number((Math.random() * 0.7 + 0.2).toFixed(2));

    setColor(randomColor);
    setWispDensity(randomDensity);
    setFogIntensity(randomFog);

    triggerPulse();
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === "r") {
        resetEffect();
      }

      if (event.code === "Space") {
        event.preventDefault();
        triggerPulse();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const cursor = document.querySelector(".cursor-glow") as HTMLElement | null;

    if (!cursor) return;

    const handlePointerMove = (event: PointerEvent) => {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <main
      className={`experience ${pulse ? "is-pulsing" : ""}`}
      onClick={triggerPulse}
    >
      {/* Custom cursor */}
      <div className="cursor-glow" />

      {/* Laser background */}
      <div className="laser-background">
        <LaserFlow
          color={color}
          wispDensity={wispDensity}
          wispSpeed={15}
          wispIntensity={5}
          flowSpeed={pulse ? 1.2 : 0.35}
          flowStrength={pulse ? 0.65 : 0.25}
          fogIntensity={fogIntensity}
          fogScale={0.3}
          fogFallSpeed={0.6}
          mouseTiltStrength={0.01}
          mouseSmoothTime={0}
          decay={1.1}
          falloffStart={1.2}
        />
      </div>

      {/* Dark cinematic overlay */}
      <div className="background-overlay" />

      {/* Navigation */}
      <nav className="navbar" onClick={(event) => event.stopPropagation()}>
        <div className="brand">
          <span className="brand-dot" />
          Laser Flow
        </div>

        <div className="nav-links">
          <button type="button">EXPERIMENTS</button>
          <button type="button">WEBGL</button>
          <button type="button">ABOUT</button>
        </div>

        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="github-button"
        >
          GitHub ↗
        </a>
      </nav>

      {/* Hero */}
      <section className="hero" onClick={(event) => event.stopPropagation()}>
        <div className="eyebrow">
          <span />
          REAL-TIME WEBGL EXPERIENCE
        </div>

        <h1>
          LIGHT
          <br />
          <span>IN MOTION.</span>
        </h1>

        <p>
          An interactive volumetric laser experiment built with React, Three.js
          and GLSL.
        </p>

        <div className="hero-actions">
          <button
            type="button"
            onClick={triggerPulse}
            className="primary-button"
          >
            TRIGGER PULSE
          </button>

          <span className="hint">
            Move your cursor · Click anywhere · Press Space
          </span>
        </div>
      </section>

      {/* Control panel */}
      <aside
        className="control-panel"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="panel-header">
          <div>
            <small>LIVE SYSTEM</small>
            <h2>Laser Flow</h2>
          </div>

          <span className="live">
            <i />
            LIVE
          </span>
        </div>

        {/* Color */}
        <div className="control">
          <div className="control-label">
            <span>BEAM COLOR</span>
            <span>{color}</span>
          </div>

          <input
            type="color"
            value={color}
            onChange={(event) => setColor(event.target.value)}
          />
        </div>

        {/* Presets */}
        <div className="preset-section">
          <div className="control-label">
            <span>COLOR PRESETS</span>
          </div>

          <div className="presets">
            {presets.map((preset) => (
              <button
                key={preset.name}
                type="button"
                className="preset"
                style={
                  {
                    "--preset-color": preset.color,
                  } as React.CSSProperties
                }
                onClick={() => setColor(preset.color)}
                title={preset.name}
              />
            ))}
          </div>
        </div>

        {/* Wisp density */}
        <div className="control">
          <div className="control-label">
            <span>WISP DENSITY</span>
            <span>{wispDensity.toFixed(1)}</span>
          </div>

          <input
            type="range"
            min="0.2"
            max="2"
            step="0.1"
            value={wispDensity}
            onChange={(event) => setWispDensity(Number(event.target.value))}
          />
        </div>

        {/* Fog */}
        <div className="control">
          <div className="control-label">
            <span>FOG INTENSITY</span>
            <span>{fogIntensity.toFixed(2)}</span>
          </div>

          <input
            type="range"
            min="0.1"
            max="1"
            step="0.05"
            value={fogIntensity}
            onChange={(event) => setFogIntensity(Number(event.target.value))}
          />
        </div>

        {/* Action buttons */}
        <div className="panel-actions">
          <button type="button" onClick={randomizeEffect}>
            <span>✦</span>
            RANDOMIZE
          </button>

          <button type="button" onClick={resetEffect}>
            ↺ RESET
          </button>
        </div>

        <div className="keyboard-hint">
          <span>R</span> RESET
          <span>SPACE</span> PULSE
        </div>
      </aside>

      {/* Bottom information */}
      <footer className="footer">
        <div>
          <span>RENDER ENGINE</span>
          <strong>THREE.JS</strong>
        </div>

        <div>
          <span>SHADER</span>
          <strong>GLSL</strong>
        </div>

        <div>
          <span>FRAMEWORK</span>
          <strong>REACT</strong>
        </div>

        <div className="status">
          <i />
          REAL-TIME
        </div>
      </footer>
    </main>
  );
}

export default App;
