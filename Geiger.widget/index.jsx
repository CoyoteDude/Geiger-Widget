// Geiger Lab — Übersicht Desktop Widget
//
// Fully interactive Geiger counter / gamma spectrometer simulation.
// Renders the complete self-contained simulation in an iframe so all
// logic, canvas rendering, audio, etc. works exactly as in the standalone version.

export const render = () => {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      borderRadius: 12,
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0,0,0,0.35)',
      background: '#0a0f0c'
    }}>
      <iframe
        src="./geiger.html"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          background: 'transparent'
        }}
        frameBorder="0"
        scrolling="no"
      />
    </div>
  );
};

// Optional: refresh every 30 minutes (the simulation itself is self-updating)
export const refreshFrequency = 1000 * 60 * 30;
