
const Branding = () => {
    return (
        <div className="bg-transparent text-white overflow-hidden">
            <section className="py-14 border-t border-white/5 opacity-30">
                <div className="flex overflow-hidden relative group select-none">
                    <div className="flex animate-marquee whitespace-nowrap py-10">
                        {/* Content duplicated for seamless loop */}
                        {[1, 2].map((group) => (
                            <div key={group} className="flex items-center">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="flex items-center px-10">
                                        <span className="text-6xl md:text-8xl font-black text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}>CHILLCLOUD</span>
                                        <span className="mx-10 text-white/5 text-4xl">/</span>
                                        <span className="text-[#D4AF37] text-6xl md:text-8xl font-black">EXCELLENCE</span>
                                        <span className="mx-10 text-white/5 text-4xl">/</span>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Branding