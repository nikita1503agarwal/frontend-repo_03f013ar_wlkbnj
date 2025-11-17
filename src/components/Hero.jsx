import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,rgba(239,68,68,0.25),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(0,0,0,0.4),transparent_50%)]" />

      {/* Glow orbs */}
      <motion.div initial={{opacity:0, scale:0.9}} animate={{opacity:1, scale:1}} transition={{duration:1.2}} className="pointer-events-none absolute -inset-40">
        <div className="absolute -top-10 -left-10 w-80 h-80 bg-red-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-red-500/20 rounded-full blur-3xl" />
      </motion.div>

      <div className="relative max-w-6xl mx-auto px-6 py-28 text-center">
        <motion.div initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.6}}>
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-red-300/80 bg-red-500/10 border border-red-500/20 px-3 py-1 rounded-full">
            Anti-Cheat Plattform
          </span>
        </motion.div>

        <motion.h1 initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.1, duration:0.7}} className="mt-6 text-4xl md:text-6xl font-extrabold text-white tracking-tight">
          Cheater erkennen. Server schützen.
        </motion.h1>

        <motion.p initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.2, duration:0.7}} className="mt-4 text-base md:text-lg text-white/70 max-w-2xl mx-auto">
          Wir sind Cheaterstats. Wir sammeln und protokollieren Discord-Accounts von Cheatern, damit du schnell prüfen kannst, ob ein Nutzer auffällig ist. Moderne Oberfläche, starke Animationen – rot/schwarzes Theme.
        </motion.p>

        <motion.div initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.3, duration:0.7}} className="mt-8 flex items-center justify-center gap-3">
          <a href="#checker" className="px-5 py-3 rounded-lg bg-red-600 hover:bg-red-500 text-white font-semibold shadow-[0_0_25px_rgba(239,68,68,0.35)] transition">Jetzt prüfen</a>
          <a href="#api" className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold border border-white/10 transition">API ansehen</a>
        </motion.div>
      </div>

      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{backgroundImage:'linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)', backgroundSize:'48px 48px'}} />
    </section>
  )
}
