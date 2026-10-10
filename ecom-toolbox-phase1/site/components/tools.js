"use client";
import { useState } from "react";
const Box = ({ v, set, ph, ro }) => <textarea rows={9} value={v} readOnly={ro} placeholder={ph} onChange={e => set && set(e.target.value)} />;
const Copy = ({ t }) => { const [d, setD] = useState(false); return <button onClick={() => { navigator.clipboard.writeText(t); setD(true); setTimeout(() => setD(false), 1200); }}>{d ? "Copied" : "Copy result"}</button>; };
const LIMITS = { "Amazon title (common)": 200, "Etsy title": 140, "eBay title": 80, "Google title (approx.)": 60, "Meta description (approx.)": 160 };

export function WordCounter() {
  const [t, setT] = useState(""), [k, setK] = useState("Amazon title (common)");
  const words = t.trim() ? t.trim().split(/\s+/).length : 0, bytes = new TextEncoder().encode(t).length, lim = LIMITS[k];
  return <div>
    <Box v={t} set={setT} ph="Paste or type your text" />
    <p className="stats"><b>{words}</b> words · <b>{t.length}</b> characters · <b>{bytes}</b> bytes</p>
    <div className="row"><select value={k} onChange={e => setK(e.target.value)}>{Object.keys(LIMITS).map(x => <option key={x}>{x}</option>)}</select>
      <span className={t.length > lim ? "bad" : "ok"}>{t.length} / {lim} characters</span></div>
  </div>;
}
export function CaseConverter() {
  const [t, setT] = useState("");
  const f = { "UPPERCASE": s => s.toUpperCase(), "lowercase": s => s.toLowerCase(),
    "Title Case": s => s.toLowerCase().replace(/\b\w/g, c => c.toUpperCase()),
    "Sentence case": s => s.toLowerCase().replace(/(^\s*|[.!?]\s+)([a-z])/g, (m, a, b) => a + b.toUpperCase()) };
  return <div><Box v={t} set={setT} ph="Paste your text" />
    <div className="row">{Object.entries(f).map(([n, fn]) => <button key={n} onClick={() => setT(fn(t))}>{n}</button>)}<Copy t={t} /></div></div>;
}
export function Deduper() {
  const [t, setT] = useState(""), [ci, setCi] = useState(true), [so, setSo] = useState(false);
  const lines = t.split("\n").map(s => s.trim()).filter(Boolean), seen = new Set();
  let out = lines.filter(l => { const k = ci ? l.toLowerCase() : l; if (seen.has(k)) return false; seen.add(k); return true; });
  if (so) out = [...out].sort((a, b) => a.localeCompare(b));
  const r = out.join("\n");
  return <div><Box v={t} set={setT} ph="One keyword or line per row" />
    <div className="row"><label><input type="checkbox" checked={ci} onChange={e => setCi(e.target.checked)} /> Ignore capitalization</label>
      <label><input type="checkbox" checked={so} onChange={e => setSo(e.target.checked)} /> Sort A–Z</label></div>
    <p className="stats"><b>{lines.length - out.length}</b> duplicates removed · <b>{out.length}</b> left</p>
    <Box v={r} ro ph="Result appears here" /><Copy t={r} /></div>;
}
export function HtmlTagger() {
  const [t, setT] = useState(""), [m, setM] = useState("p");
  const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const L = t.split("\n").map(s => s.trim()).filter(Boolean).map(esc);
  const r = m === "p" ? L.map(l => `<p>${l}</p>`).join("\n") : m === "ul" ? (L.length ? `<ul>\n${L.map(l => `  <li>${l}</li>`).join("\n")}\n</ul>` : "") : L.join("<br>\n");
  return <div><Box v={t} set={setT} ph="One paragraph or point per line" />
    <div className="row"><select value={m} onChange={e => setM(e.target.value)}>
      <option value="p">Paragraphs (&lt;p&gt;)</option><option value="ul">Bullet list (&lt;ul&gt;)</option><option value="br">Line breaks (&lt;br&gt;)</option></select></div>
    <Box v={r} ro ph="HTML appears here" /><Copy t={r} /></div>;
}
