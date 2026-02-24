import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      {/* Dummy content to allow scrolling */}
      <div className="h-[200vh] bg-[#111] flex items-center justify-center">
        <p className="text-3xl opacity-50">Scroll to experience animation</p>
      </div>
    </main>
  );
}