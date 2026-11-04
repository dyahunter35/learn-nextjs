import Link from "next/link";

export default function OfflinePage() {
  return (
    <main className="offline-page">
      <span className="brand-mark" aria-hidden="true">⌘</span>
      <h1>أنت غير متصل بالإنترنت</h1>
      <p>هذه الصفحة غير متاحة حاليًا. أعد الاتصال بالإنترنت ثم حاول مرة أخرى.</p>
      <hr />
      <h2>You’re offline</h2>
      <p>This page is not available yet. Reconnect to the internet and try again.</p>
      <Link className="button-primary" href="/">العودة إلى الصفحة الرئيسية · Home</Link>
    </main>
  );
}
