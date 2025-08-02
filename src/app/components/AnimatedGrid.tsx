"use client"
import React, { useEffect, useState, useRef } from "react"

const GRID_SIZE = 40
const ANIM_DURATION = 0.5
const ANIM_DELAY_STEP = 0.3

export function AnimatedGrid() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    function updateSize() {
      if (containerRef.current) {
        setWidth(containerRef.current.clientWidth)
        setHeight(containerRef.current.clientHeight)
      }
    }

    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  const numHorizontalLines = Math.floor(height / GRID_SIZE) + 1
  const numVerticalLines = Math.floor(width / GRID_SIZE) + 1

  // เส้นแนวนอน
  const horizontalLines = []
  for (let i = 0; i < numHorizontalLines; i++) {
    horizontalLines.push(
      <line
        key={"h" + i}
        x1={0}
        y1={i * GRID_SIZE}
        x2={width}
        y2={i * GRID_SIZE}
        stroke="gray"
        strokeWidth={1}
        strokeDasharray={width}
        strokeDashoffset={width}
        style={{
          animation: `drawLine ${ANIM_DURATION}s linear forwards`,
          animationDelay: `${i * ANIM_DELAY_STEP}s`,
        }}
      />
    )
  }

  // เส้นแนวตั้ง
  const verticalLines = []
  for (let i = 0; i < numVerticalLines; i++) {
    verticalLines.push(
      <line
        key={"v" + i}
        x1={i * GRID_SIZE}
        y1={0}
        x2={i * GRID_SIZE}
        y2={height}
        stroke="gray"
        strokeWidth={1}
        strokeDasharray={height}
        strokeDashoffset={height}
        style={{
          animation: `drawLine ${ANIM_DURATION}s linear forwards`,
          animationDelay: `${(numHorizontalLines + i) * ANIM_DELAY_STEP}s`,
        }}
      />
    )
  }

  return (
    <div ref={containerRef} className="relative w-full h-[400px]">
      <svg
        className="absolute inset-0 pointer-events-none opacity-40 print:hidden"
        width={width}
        height={height}
      >
        {horizontalLines}
        {verticalLines}
        <style>{`
          @keyframes drawLine {
            to {
              stroke-dashoffset: 0;
            }
          }
        `}</style>
      </svg>
    </div>
  )
}
export default AnimatedGrid