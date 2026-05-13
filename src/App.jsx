export default function ScorpionKingsLive() {
  const tickets = [
    { block: '217', section: 'L2 General East', price: 'R700.00' },
    { block: '218', section: 'L2 General East', price: 'R700.00' },
    { block: '219', section: 'L2 General East', price: 'R700.00' },
    { block: '220', section: 'L2 General East', price: 'R700.00' },
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <section
        className="relative min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <nav className="relative z-10 flex justify-between items-center px-8 py-6 border-b border-yellow-500/30">
          <h1 className="text-3xl font-black text-yellow-400">
            SCORPION KINGS LIVE
          </h1>

          <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-2xl font-bold transition">
            BUY TICKETS
          </button>
        </nav>

        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center px-8 md:px-20 py-20">
          <div>
            <div className="inline-block bg-yellow-500 text-black px-5 py-2 rounded-full font-bold mb-6">
              EARLY BIRD DISCOUNT — 10% OFF
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-none text-yellow-400">
              SCORPION
              <br />
              KINGS LIVE
            </h1>

            <p className="mt-8 text-2xl text-gray-300 leading-relaxed">
              The biggest Amapiano music experience arrives at FNB Stadium on 19 September 2026.
            </p>
          </div>

          <div>
            <img
              src="/scorpion-king.jpg"
              alt="Scorpion Kings Live"
              className="rounded-3xl shadow-2xl border-4 border-yellow-500/40"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-16 bg-[#050505]">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-black text-yellow-400">
            TICKET SECTIONS
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tickets.map((ticket, index) => (
            <div
              key={index}
              className="bg-white/5 border border-yellow-500/20 rounded-3xl p-8"
            >
              <h3 className="text-3xl font-black text-yellow-400">
                Block {ticket.block}
              </h3>

              <p className="mt-3 text-gray-300 text-lg">
                {ticket.section}
              </p>

              <h4 className="text-5xl font-black mt-6 text-white">
                {ticket.price}
              </h4>

              <button className="mt-8 w-full bg-yellow-500 text-black py-4 rounded-2xl font-black text-lg">
                BUY NOW
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
