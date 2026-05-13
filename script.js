window.addEventListener('load', () => {
  const options = { threshold: 0.4 };

  const parseCounter = (text) => {
    const match = text.match(/^\s*([+−-]?)([0-9]+(?:\.[0-9]+)?)([%]*)\s*$/);
    if (!match) return null;
    return {
      prefix: match[1] || '',
      value: Number(match[2]),
      suffix: match[3] || '',
    };
  };

  const animateValue = (element, target, prefix, suffix) => {
    const duration = 1400;
    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = Math.min(now - startTime, duration);
      const progress = elapsed / duration;
      const current = Math.round(target * progress);
      element.textContent = `${prefix}${current}${suffix}`;

      if (elapsed < duration) {
        requestAnimationFrame(tick);
      } else {
        element.textContent = `${prefix}${target}${suffix}`;
      }
    };

    requestAnimationFrame(tick);
  };

  const initCounters = () => {
    const counters = Array.from(document.querySelectorAll('.stats .num'));
    if (!counters.length) {
      setTimeout(initCounters, 100);
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const element = entry.target;
        const parsed = parseCounter(element.textContent);
        if (parsed) {
          animateValue(element, parsed.value, parsed.prefix, parsed.suffix);
        }
        obs.unobserve(element);
      });
    }, options);

    counters.forEach((counter) => {
      if (parseCounter(counter.textContent)) {
        observer.observe(counter);
      }
    });
  };

  initCounters();
});