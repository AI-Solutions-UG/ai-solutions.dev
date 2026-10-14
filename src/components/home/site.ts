export const contactEmail = 'info@ai-solutions.dev';

export const contactHref = `mailto:${contactEmail}?subject=${encodeURIComponent(
  'Ein Problem, das wir gern los wären',
)}&body=${encodeURIComponent(
  'Hallo AI Solutions,\n\nunser Problem in zwei, drei Sätzen:\n\n\nUnternehmen:\nAnsprechpartner:\nTelefon (optional):\n',
)}`;

/** Prefix an internal path with the configured base (root in production, subfolder in PR previews). */
export const href = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`;
