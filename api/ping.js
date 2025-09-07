// Minimal Vercel Serverless Function
export default async function handler(req, res) {
  // Basic CORS (harmless for same-origin; handy for tests)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const now = new Date().toISOString();
  const name = (req.query && req.query.name) || null;
  return res.status(200).json({ ok: true, now, method: req.method, name });
}

