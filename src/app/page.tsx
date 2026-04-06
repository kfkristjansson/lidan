import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const SERVICES = [
  {
    title: "EMDR",
    subtitle: "Eye Movement Desensitization and Reprocessing",
    description:
      "Augnhreyfimeðferð sem vinnur með áfallaupplifanir og erfiðar minningar á áhrifaríkan hátt.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "Hugræn atferlismeðferð",
    subtitle: "HAM — Cognitive Behavioral Therapy",
    description:
      "Vinnur með hugsunarmunstur og hegðun til að bæta líðan og andlega heilsu.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z"
        />
      </svg>
    ),
  },
  {
    title: "Núvitund",
    subtitle: "Mindfulness",
    description:
      "Meðvituð nærvera og slökunaræfingar sem styðja við andlega vellíðan og þol.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
        />
      </svg>
    ),
  },
  {
    title: "Parasambönd",
    subtitle: "Couples Therapy",
    description:
      "Meðferð fyrir pör sem vilja bæta samskipti sín og styrkja samband.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    ),
  },
];

const TREATMENT_AREAS = [
  "Áföll og áfallastreita (PTSD)",
  "Þunglyndi og tilfinningastjórnun",
  "Kvíði",
  "Lítil sjálfsvirðing",
  "Áhrif áfalla á sambönd",
  "Erfiðar minningar sem trufla daglegt líf",
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      {/* Hero */}
      <section className="relative bg-accent-light overflow-hidden">
        <div className="max-w-[1080px] mx-auto px-6 py-20 md:py-32">
          <div className="grid md:grid-cols-[1fr_300px] gap-12 items-center">
            <div>
              <p className="text-accent font-semibold text-[11px] tracking-[0.06em] uppercase mb-3">
                EMDR meðferðaraðili · Hjúkrunarfræðingur
              </p>
              <h1 className="text-[48px] font-semibold text-text leading-[1.15] tracking-[-0.02em] mb-6">
                Jóhanna Kristín
                <br />
                <span className="text-accent">Steingrímsdóttir</span>
              </h1>
              <p className="text-lg text-body font-light leading-[1.7] max-w-lg mb-8">
                Sérhæfð meðferð við áföllum, kvíða, þunglyndi og streitu.
                EMDRIA viðurkennd frá 2018 með áratuga reynslu í
                heilbrigðiskerfinu.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:546-0406"
                  className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-md font-medium hover:bg-accent-hover transition-colors duration-200"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  Panta tíma
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <Image
                src="/images/johanna-profile.png"
                alt="Jóhanna Kristín Steingrímsdóttir"
                width={300}
                height={300}
                className="rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Um Jóhönnu — exact text from original site */}
      <section className="py-20 md:py-28 bg-page">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="grid md:grid-cols-[280px_1fr] gap-12 items-start">
            <div className="md:hidden">
              <Image
                src="/images/johanna-profile.png"
                alt="Jóhanna Kristín Steingrímsdóttir"
                width={280}
                height={280}
                className="rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.04)] mx-auto"
              />
            </div>
            <div className="hidden md:block">
              <Image
                src="/images/johanna-profile.png"
                alt="Jóhanna Kristín Steingrímsdóttir"
                width={280}
                height={280}
                className="rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
              />
            </div>
            <div className="max-w-[720px]">
              <h2 className="text-[32px] font-semibold text-text tracking-[-0.01em] mb-6">
                Um Jóhönnu
              </h2>
              <div className="space-y-4 text-body font-light leading-[1.7]">
                <p>
                  Jóhanna starfar á EMDR stofunni. Hún er hjúkrunarfræðingur
                  með mikla reynslu af meðferðarvinnu einstaklinga vegna áfalla,
                  þunglyndis, kvíða og lágs sjálfsmats.
                </p>
                <p>
                  Jóhanna hefur sérhæft sig í EMDR meðferð, lauk EMDR þjálfun
                  árið 2013 og hlaut EMDRIA viðurkenningu sem EMDR viðurkenndur
                  meðferðaraðili árið 2018. Hún hefur einnig verið virk í að
                  sækja endurmenntun hvað varðar meðferð einstaklinga með flókna
                  og endurtekna áfallasögu. Jóhanna hefur verið í handleiðslu á
                  EMDR vinnu sína frá árinu 2013.
                </p>
                <p>
                  Jóhanna notar einnig hugræna atferlismeðferð í sínu starfi.
                  Hún lauk árs námi í hugrænni atferlismeðferð 2007 á vegum
                  Félags um hugræna atferlismeðferð í samstarfi við Endurmenntun
                  Háskóla Íslands og Oxford Cognitive Therapy Centre.
                </p>
                <p>
                  Jóhanna hefur starfað á geðheilsusviði Reykjalundar þar sem
                  hún tók þátt í að þróa eftirfylgdarnámskeið í núvitund fyrir
                  skjólstæðinga og er leiðbeinandi á núvitundarnámskeiðum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[32px] font-semibold text-text tracking-[-0.01em] mb-3">
              Meðferðarform
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="group p-8 rounded-xl bg-surface shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition-shadow duration-300"
              >
                <div className="text-accent mb-4">{service.icon}</div>
                <h3 className="text-[22px] font-semibold text-text mb-1">
                  {service.title}
                </h3>
                <p className="text-[11px] font-semibold text-accent tracking-[0.06em] uppercase mb-3">
                  {service.subtitle}
                </p>
                <p className="text-body font-light leading-[1.7]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Areas */}
      <section className="py-20 md:py-28 bg-page">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[32px] font-semibold text-text tracking-[-0.01em] mb-8">
                Meðferðarsvið
              </h2>
              <ul className="space-y-4">
                {TREATMENT_AREAS.map((area) => (
                  <li key={area} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-accent mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-text">{area}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <Image
                src="/images/skies.jpg"
                alt="Ró og nærvera"
                width={480}
                height={335}
                className="rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="max-w-[1080px] mx-auto px-6">
          <h2 className="text-[32px] font-semibold text-text tracking-[-0.01em] mb-12 text-center">
            Menntun og reynsla
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-surface rounded-xl flex items-center justify-center mx-auto mb-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                <Image
                  src="/images/emdr-logo.png"
                  alt="EMDR"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="text-[22px] font-semibold text-text mb-2">
                EMDR viðurkenning
              </h3>
              <p className="text-sm text-body font-light">
                EMDRIA viðurkennd 2018. Lauk EMDR þjálfun 2013.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-surface rounded-xl flex items-center justify-center mx-auto mb-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                <Image
                  src="/images/ham-logo.png"
                  alt="HAM"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h3 className="text-[22px] font-semibold text-text mb-2">
                HAM þjálfun
              </h3>
              <p className="text-sm text-body font-light">
                Hugræn atferlismeðferð við Oxford Cognitive Centre 2007.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-surface rounded-xl flex items-center justify-center mx-auto mb-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                <svg
                  className="w-10 h-10 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                  />
                </svg>
              </div>
              <h3 className="text-[22px] font-semibold text-text mb-2">
                Reykjalundur
              </h3>
              <p className="text-sm text-body font-light">
                Starfaði á geðdeild þar sem hún þróaði námsefni í núvitund.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
