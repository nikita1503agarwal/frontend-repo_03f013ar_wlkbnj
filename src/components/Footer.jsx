export default function Footer(){
  return (
    <footer id="contact" className="py-12 border-t border-white/5 bg-black">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/60 text-sm">© {new Date().getFullYear()} Cheaterstats • Anti-Cheat Plattform</p>
        <div className="text-white/60 text-sm">
          API & Support: <a className="text-red-400 hover:text-red-300" href="mailto:contact@cheaterstats.dev">contact@cheaterstats.dev</a>
        </div>
      </div>
    </footer>
  )
}
