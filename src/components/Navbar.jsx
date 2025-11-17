import { Menu } from "lucide-react"

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 py-4 backdrop-blur bg-black/30 border-b border-red-500/20">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="inline-block w-8 h-8 rounded bg-gradient-to-br from-red-500 to-red-700 shadow-[0_0_30px_rgba(239,68,68,0.6)]" />
          <span className="text-white font-bold tracking-tight text-xl">Cheaterstats</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="text-white/80 hover:text-white transition">Funktionen</a>
          <a href="#api" className="text-white/80 hover:text-white transition">API</a>
          <a href="#checker" className="text-white/80 hover:text-white transition">Checker</a>
          <a href="#contact" className="text-white/80 hover:text-white transition">Kontakt</a>
        </nav>
        <button className="md:hidden text-white/80 hover:text-white" aria-label="Menu">
          <Menu size={20} />
        </button>
      </div>
    </header>
  )
}
