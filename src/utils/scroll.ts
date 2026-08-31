/**
 * Smoothly scrolls the window to a target element or vertical offset
 * with a controlled duration and easing animation.
 *
 * @param target - Element ID (with or without #), HTMLElement, or number (px from top)
 * @param duration - Duration in milliseconds (default: 1100ms for a clear, gliding scroll effect)
 * @param offset - Top offset in pixels to accommodate fixed headers (default: 90)
 */
export function smoothScrollTo(
  target: string | HTMLElement | number,
  duration = 1100,
  offset = 90
): void {
  let targetY = 0;

  if (typeof target === 'string') {
    const id = target.replace(/^#/, '');
    const element = document.getElementById(id);
    if (!element) return;
    const elementPosition = element.getBoundingClientRect().top;
    targetY = window.pageYOffset + elementPosition - offset;
  } else if (typeof target === 'number') {
    targetY = target - offset;
  } else if (target instanceof HTMLElement) {
    const elementPosition = target.getBoundingClientRect().top;
    targetY = window.pageYOffset + elementPosition - offset;
  }

  const startY = window.pageYOffset || document.documentElement.scrollTop;
  const maxScroll = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight
  ) - window.innerHeight;

  const finalTargetY = Math.max(0, Math.min(targetY, maxScroll));
  const distance = finalTargetY - startY;

  if (Math.abs(distance) < 5) return;

  const startTime = performance.now();

  // Ease in out cubic for a natural acceleration and deceleration
  function easeInOutCubic(t: number): number {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function step(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = easeInOutCubic(progress);

    window.scrollTo(0, startY + distance * ease);

    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  }

  window.requestAnimationFrame(step);
}
