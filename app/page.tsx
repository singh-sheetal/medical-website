export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-4 p-8">
        <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 text-sm font-medium px-4 py-2 rounded-full">
          <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
          M1 Complete — Pipeline confirmed
        </div>
        <h1 className="text-4xl font-bold text-gray-900">
          MedicalOS
        </h1>
        <p className="text-gray-500 max-w-md">
          Next.js 14 · TypeScript · Tailwind CSS · Framer Motion
        </p>
        <p className="text-sm text-gray-400">
          Project scaffold ready. Design tokens in M2. Landing page in M3–M12.
        </p>
      </div>
    </main>
  );
}
