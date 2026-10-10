import Link from "next/link";
import { tools } from "../lib/tools";
export default function Home() {
  const cats = [...new Set(tools.map(t => t.category))];
  return <>
    <h1>Free tools for online sellers</h1>
    <p className="lead">Fix titles, clean keywords and format listings in seconds. No sign-up.</p>
    {cats.map(c => <section key={c}><h2>{c}</h2>
      <div className="grid">{tools.filter(t => t.category === c).map(t =>
        <Link key={t.slug} href={`/tools/${t.slug}`} className="card"><h3>{t.name}</h3><p>{t.desc}</p></Link>)}</div></section>)}
  </>;
}
