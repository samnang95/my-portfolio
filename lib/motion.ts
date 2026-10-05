export type SlideDirection = "left" | "right" | "up";

const DISTANCE_X = 80;
const DISTANCE_Y = 40;

/**
 * Scroll-triggered slide-in props for Motion components.
 * Replays every time the element re-enters the viewport (once: false).
 *
 * The transition lives inside `whileInView` so it doesn't leak into other
 * gestures (e.g. a card's `whileHover` won't inherit the stagger delay).
 */
export function slideIn(direction: SlideDirection = "up", delay = 0) {
  const x = direction === "left" ? -DISTANCE_X : direction === "right" ? DISTANCE_X : 0;
  const y = direction === "up" ? DISTANCE_Y : 0;

  return {
    initial: { opacity: 0, x, y },
    whileInView: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
    },
    viewport: { once: false, amount: 0.2 },
  };
}

/** Slide direction for an item in a 3-column grid: left / up / right by column. */
export function gridDirection(index: number): SlideDirection {
  return (["left", "up", "right"] as const)[index % 3];
}
