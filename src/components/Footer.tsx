export default function Footer() {
  return (
    <footer id="samband" className="bg-deep text-page/80">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-[22px] font-semibold text-white mb-4">
              Hafa samband
            </h3>
            <div className="space-y-3">
              <p>
                <span className="text-subtle text-[11px] font-semibold uppercase tracking-[0.06em] block">
                  Panta tíma
                </span>
                <a
                  href="tel:546-0406"
                  className="hover:text-white transition-colors duration-200"
                >
                  546-0406
                </a>
              </p>
              <p>
                <span className="text-subtle text-[11px] font-semibold uppercase tracking-[0.06em] block">
                  Beint
                </span>
                <a
                  href="tel:899-2623"
                  className="hover:text-white transition-colors duration-200"
                >
                  899-2623
                </a>
              </p>
              <p>
                <span className="text-subtle text-[11px] font-semibold uppercase tracking-[0.06em] block">
                  Netfang
                </span>
                <a
                  href="mailto:johannas@emdrstofan.is"
                  className="hover:text-white transition-colors duration-200"
                >
                  johannas@emdrstofan.is
                </a>
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-[22px] font-semibold text-white mb-4">
              Staðsetning
            </h3>
            <div className="space-y-3">
              <p>
                EMDR stofan
                <br />
                Vallakór 4, 3. hæð
                <br />
                203 Kópavogur
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-subtle text-sm">
          &copy; {new Date().getFullYear()} Jóhanna Steingrímsdóttir. Öll
          réttindi áskilin.
        </div>
      </div>
    </footer>
  );
}
