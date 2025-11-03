"use client"

import { useEffect, useState } from "react"

export default function SplineModel() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <svg
        viewBox="0 0 1000 800"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <style>{`
            @keyframes rotate-clockwise {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            @keyframes rotate-counter {
              from { transform: rotate(360deg); }
              to { transform: rotate(0deg); }
            }
            @keyframes pulse-radius {
              0%, 100% { r: 50px; }
              50% { r: 80px; }
            }
            @keyframes pulse-dot {
              0%, 100% { r: 6px; opacity: 0.6; }
              50% { r: 10px; opacity: 0.9; }
            }
            @keyframes pulse-line {
              0%, 100% { opacity: 0.1; }
              50% { opacity: 0.3; }
            }
            
            .rotating-shape {
              transform-origin: 500px 400px;
              animation: rotate-clockwise 20s linear infinite;
            }
            .rotating-circles {
              transform-origin: 500px 400px;
              animation: rotate-counter 30s linear infinite;
            }
            .pulsing-dot {
              animation: pulse-dot 2s ease-in-out infinite;
            }
            .pulsing-center {
              animation: pulse-radius 4s ease-in-out infinite;
            }
            .pulsing-line {
              animation: pulse-line 3s ease-in-out infinite;
            }
            .pulsing-line-2 {
              animation: pulse-line 3s ease-in-out 1s infinite;
            }
            .corner-ring {
              transform-origin: center;
              animation: rotate-clockwise 10s linear infinite;
            }
          `}</style>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "hsl(var(--primary))", stopOpacity: 0.1 }} />
            <stop offset="100%" style={{ stopColor: "hsl(var(--secondary))", stopOpacity: 0.05 }} />
          </linearGradient>
          <radialGradient id="radial1" cx="30%" cy="30%">
            <stop offset="0%" style={{ stopColor: "hsl(var(--primary))", stopOpacity: 0.15 }} />
            <stop offset="100%" style={{ stopColor: "hsl(var(--primary))", stopOpacity: 0 }} />
          </radialGradient>
        </defs>

        {/* Background shapes */}
        <rect width="1000" height="800" fill="url(#grad1)" />
        <circle cx="200" cy="150" r="300" fill="url(#radial1)" />
        <circle cx="800" cy="600" r="250" fill="url(#radial1)" />

        {/* Animated geometric shapes */}
        <g className="rotating-shape">
          <polygon
            points="500,100 650,250 550,400 450,400 350,250"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            opacity="0.3"
          />
        </g>

        {/* Rotating concentric circles */}
        <g className="rotating-circles">
          <circle cx="500" cy="400" r="200" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.2" />
          <circle cx="500" cy="400" r="150" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.3" />
          <circle cx="500" cy="400" r="100" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.4" />
        </g>

        {/* Animated dots positioned in a circle */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <circle
            key={`dot-${i}`}
            cx={500 + 150 * Math.cos((i * Math.PI) / 3)}
            cy={400 + 150 * Math.sin((i * Math.PI) / 3)}
            r="6"
            fill="hsl(var(--primary))"
            opacity="0.6"
            className="pulsing-dot"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}

        {/* Flowing lines */}
        <line
          x1="500"
          y1="100"
          x2="500"
          y2="700"
          stroke="hsl(var(--primary))"
          strokeWidth="1"
          opacity="0.1"
          className="pulsing-line"
        />
        <line
          x1="200"
          y1="400"
          x2="800"
          y2="400"
          stroke="hsl(var(--primary))"
          strokeWidth="1"
          opacity="0.1"
          className="pulsing-line-2"
        />

        {/* Pulsing central element */}
        <circle
          cx="500"
          cy="400"
          r="50"
          fill="hsl(var(--primary))"
          opacity="0.1"
          className="pulsing-center"
        />
        <circle cx="500" cy="400" r="30" fill="hsl(var(--primary))" opacity="0.2" />

        {/* Corner accents */}
        {[
          { x: 100, y: 100 },
          { x: 900, y: 100 },
          { x: 100, y: 700 },
          { x: 900, y: 700 },
        ].map((pos, i) => (
          <g key={`corner-${i}`}>
            <circle
              cx={pos.x}
              cy={pos.y}
              r="40"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              opacity="0.2"
              className="corner-ring"
              style={{ animationDuration: `${10 + i}s` }}
            />
          </g>
        ))}
      </svg>
    </div>
  )
}
