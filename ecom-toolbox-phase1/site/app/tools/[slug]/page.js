import { notFound } from "next/navigation";
import Link from "next/link";
import { tools } from "../../../lib/tools";
export const dynamicParams = false;
export const generateStaticParams = () => tools.map(t => ({ slug: t.slug }));
export function generateMetadata({ params }) {
  const t = tools.find(x => x.slug === params.slug);
  return t ? { title: t.name, description: t.desc, alternates: { canonical: `/tools/${t.slug}` } } : {};
}
export default function ToolPage({ params }) {
  const t = tools.find(x => x.slug === params.slug); if (!t) notFound();
  const C = t.Component;
  return <>
    <p className="crumb"><Link href="/">Tools</Link> / {t.category}</p>
    <h1>{t.name}</h1><p className="lead">{t.desc}</p>
    <div className="panel"><C /></div>
    <article><h2>How to use it</h2><p>{t.body}</p></article>
    <h2>More tools</h2>
    <div className="grid">{tools.filter(x => x.slug !== t.slug).slice(0, 3).map(x =>
      <Link key={x.slug} href={`/tools/${x.slug}`} className="card"><h3>{x.name}</h3></Link>)}</div>
  </>;
}
