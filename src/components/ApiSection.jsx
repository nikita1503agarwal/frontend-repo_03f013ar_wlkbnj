import { motion } from "framer-motion"

export default function ApiSection(){
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  return (
    <section id="api" className="relative py-20 border-t border-white/5 bg-gradient-to-b from-zinc-950 to-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h2 initial={{y:20, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once:true}} className="text-3xl md:text-4xl font-bold text-white">Unsere API gegen Gestern</motion.h2>
            <motion.p initial={{y:20, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once:true}} className="mt-3 text-white/70">
              Nutze unsere REST-API, um Discord-IDs zu prüfen oder Vorfälle zu melden. Schnelle Antwortzeiten, klare Ergebnisse. Für Entwickler gemacht.
            </motion.p>

            <div className="mt-6 text-sm text-white/80 space-y-2">
              <p><span className="text-red-400 font-mono">GET</span> {baseUrl}/api/cheaters?discord_id=123</p>
              <p><span className="text-red-400 font-mono">POST</span> {baseUrl}/api/cheaters</p>
            </div>

            <a href="#checker" className="inline-block mt-6 px-5 py-3 rounded-lg bg-red-600 hover:bg-red-500 text-white font-semibold shadow-[0_0_25px_rgba(239,68,68,0.35)] transition">Live testen</a>
          </div>

          <motion.pre initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="bg-black/60 border border-white/10 rounded-xl p-4 text-red-200/90 overflow-auto text-xs">
{`curl -s "${baseUrl}/api/cheaters?discord_id=123456789" | jq

# Neue Meldung anlegen
curl -X POST "${baseUrl}/api/cheaters" \
  -H "Content-Type: application/json" \
  -d '{
    "discord_id": "123456789",
    "username": "cheater#0001",
    "reason": "Aim Assist",
    "evidence_url": "https://example.com/proof.mp4",
    "flagged_by": "mod@server"
  }'`}
          </motion.pre>
        </div>
      </div>
    </section>
  )
}
