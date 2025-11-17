import { useState } from "react"

export default function Checker(){
  const [discordId, setDiscordId] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const onCheck = async (e) => {
    e.preventDefault()
    setError(null)
    setResult(null)
    if(!discordId) return
    setLoading(true)
    try {
      const res = await fetch(`${baseUrl}/api/cheaters?discord_id=${encodeURIComponent(discordId)}`)
      const data = await res.json()
      setResult(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="checker" className="relative py-20 border-t border-white/5 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Discord-ID prüfen</h2>
        <p className="text-white/70 text-center mt-2">Gib eine ID ein, um zu sehen, ob sie in unserer Datenbank markiert ist.</p>

        <form onSubmit={onCheck} className="mt-8 flex gap-3">
          <input value={discordId} onChange={(e)=>setDiscordId(e.target.value)} placeholder="z.B. 123456789012345678" className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-red-500/60" />
          <button disabled={loading} className="px-5 py-3 rounded-lg bg-red-600 hover:bg-red-500 text-white font-semibold disabled:opacity-60">{loading ? 'Prüfen…' : 'Prüfen'}</button>
        </form>

        {error && <p className="mt-4 text-red-400 text-sm">{error}</p>}

        {result && (
          <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10 text-white">
            <div className="text-sm text-white/70">Treffer: {result.count}</div>
            {result.results && result.results.length > 0 ? (
              <div className="mt-3 space-y-3">
                {result.results.map((r) => (
                  <div key={r._id} className="p-3 rounded-lg bg-black/40 border border-white/10">
                    <div className="font-mono text-red-300">{r.discord_id}</div>
                    {r.username && <div className="text-white/80 text-sm">{r.username}</div>}
                    {r.reason && <div className="text-white/60 text-sm">Grund: {r.reason}</div>}
                    <div className="text-xs text-white/50 mt-1">Status: {r.status}</div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mt-3 text-white/70">Keine Einträge gefunden.</p>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
