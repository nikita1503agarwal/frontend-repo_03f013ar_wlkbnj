import { Shield, Search, Database } from "lucide-react"
import { motion } from "framer-motion"

const items = [
  {
    icon: Shield,
    title: "Schutz in Echtzeit",
    desc: "Prüfe Nutzer vor dem Join automatisch und halte Cheater von deinen Servern fern.",
  },
  {
    icon: Search,
    title: "Schnelle Checks",
    desc: "Suche per Discord-ID oder Benutzername und erhalte klare Ergebnisse.",
  },
  {
    icon: Database,
    title: "Wachsende Datenbasis",
    desc: "Wir pflegen eine ständig aktualisierte Liste mit Begründungen und Beweisen.",
  },
]

export default function Features(){
  return (
    <section id="features" className="relative py-20 border-t border-white/5 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div key={i} initial={{y:20, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once:true}} transition={{delay:i*0.1}} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-red-500/40 hover:bg-red-500/5 transition">
              <div className="flex items-center gap-3">
                <it.icon className="text-red-400" />
                <h3 className="text-white font-semibold text-lg">{it.title}</h3>
              </div>
              <p className="text-white/70 mt-3 text-sm">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
