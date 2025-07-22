import Button from "@/components/Button"
import ScrollReveal from "@/components/ScrollReveal"
import Navigation from "@/components/Navigation"
import Link from "next/link"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-red-900/20 to-black"></div>
          <div className="absolute inset-0 bg-[url('/1.jpg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>

          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            <ScrollReveal delay={200}>
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-red-600/20 border border-red-500/30 rounded-full text-red-400 text-sm font-semibold tracking-wide uppercase animate-pulse">
                  Profesjonalny Serwis
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
                <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent animate-pulse">
                  MOTO
                </span>
                <span className="text-white">FORCE</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
                Ekstremalna precyzja. Nieograniczona moc. Twój motocykl zasługuje na najlepszy serwis w mieście.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={800}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center sm:items-end">
                <Link href={"#contact"}>
                  <Button variant="primary" size="xl" className="group">
                    <span className="flex items-center gap-2">
                      Umów wizytę teraz
                      <svg
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </Button>
                </Link>
                <Link href={"/projects"}>
                  <Button variant="outline" size="md" className="group bg-transparent">
                    <span className="flex items-center gap-2">
                      Zobacz nasze prace
                      <svg
                        className="w-5 h-5 group-hover:rotate-12 transition-transform"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fillRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Floating elements with animations */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-red-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-32 right-16 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>

          <ScrollReveal delay={1000}>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-red-500 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-red-500 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 px-4 bg-black relative">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-transparent"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <ScrollReveal>
              <div className="text-center mb-20">
                <div className="inline-block px-4 py-2 bg-red-600/20 border border-red-500/30 rounded-full text-red-400 text-sm font-semibold tracking-wide uppercase mb-4">
                  Nasze Usługi
                </div>
                <h2 className="text-5xl md:text-6xl font-black mb-6">
                  <span className="text-white">PEŁEN </span>
                  <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                    SERWIS
                  </span>
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Od podstawowych przeglądów po ekstremalne modyfikacje - obsługujemy wszystko
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Serwis Silników",
                  description:
                    "Kompleksowe naprawy i regeneracja silników wszystkich typów. Zwiększanie mocy i optymalizacja wydajności.",
                  icon: "🏍️",
                  image: "/2.jpg?height=200&width=300",
                  gradient: "from-red-600 to-red-800",
                },
                {
                  title: "Tuning & Performance",
                  description: "Modyfikacje wydajnościowe, chip tuning, sportowe układy wydechowe i filtry powietrza.",
                  icon: "⚡",
                  image: "/3.jpg?height=200&width=300",
                  gradient: "from-orange-600 to-red-600",
                },
                {
                  title: "Diagnostyka Komputerowa",
                  description:
                    "Zaawansowana diagnostyka elektronicznych systemów motocykla z użyciem najnowszego sprzętu.",
                  icon: "🔧",
                  image: "/7.jpg?height=200&width=300",
                  gradient: "from-yellow-600 to-orange-600",
                },
                {
                  title: "Układy Hamulcowe",
                  description:
                    "Serwis i modyfikacje układów hamulcowych. Sportowe klocki, tarcze i przewody hamulcowe.",
                  icon: "🛑",
                  image: "/5.jpg?height=200&width=300",
                  gradient: "from-red-700 to-red-900",
                },
                {
                  title: "Zawieszenie & Geometria",
                  description: "Regulacja i serwis zawieszenia. Sportowe amortyzatory i sprężyny dla lepszych osiągów.",
                  icon: "🔩",
                  image: "/6.jpg?height=200&width=300",
                  gradient: "from-orange-700 to-yellow-600",
                },
                {
                  title: "Pomoc Drogowa 24/7",
                  description: "Całodobowa pomoc drogowa i transport motocykli. Szybka reakcja w całym regionie.",
                  icon: "🚛",
                  image: "/1.jpg?height=200&width=300",
                  gradient: "from-red-800 to-black",
                },
              ].map((service, index) => (
                <ScrollReveal key={index} delay={index * 100} direction="up">
                  <div className="group flex flex-col h-full relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-red-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20">
                    <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

                    <div className="relative p-6">
                      <div className="aspect-video mb-4 rounded-lg overflow-hidden bg-gray-700">
                        <img
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>

                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className={`text-3xl p-3 rounded-xl bg-gradient-to-r ${service.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          {service.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                          {service.title}
                        </h3>
                      </div>

                      <p className="text-gray-300 leading-relaxed mb-4">{service.description}</p>

                      {/* <div className="flex items-center text-red-400 font-semibold group-hover:text-red-300 transition-colors">
                        <span>Dowiedz się więcej</span>
                        <svg
                          className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div> */}

                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-4 bg-gradient-to-b from-black to-gray-900 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal direction="left">
                <div>
                  <div className="inline-block px-4 py-2 bg-red-600/20 border border-red-500/30 rounded-full text-red-400 text-sm font-semibold tracking-wide uppercase mb-6">
                    O Nas
                  </div>
                  <h2 className="text-5xl md:text-6xl font-black mb-8">
                    <span className="text-white">PASJA </span>
                    <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                      & PRECYZJA
                    </span>
                  </h2>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    MotoForce to nie tylko serwis - to miejsce, gdzie pasja spotyka się z najwyższą precyzją techniczną.
                    Od 15 lat obsługujemy najwymagających motocyklistów, którzy oczekują perfekcji.
                  </p>
                  <p className="text-lg text-gray-300 mb-10 leading-relaxed">
                    Nasz zespół to certyfikowani specjaliści z wieloletnim doświadczeniem w tuningu i serwisie motocykli
                    sportowych. Używamy tylko oryginalnych części i najnowocześniejszego sprzętu diagnostycznego.
                  </p>

                  <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-10">
                    {[
                      { number: "15", label: "Lat doświadczenia", icon: "🏆" },
                      { number: "2000", label: "Naprawionych motocykli", icon: "🔧" },
                      { number: "20", label: "Projektów tuningu", icon: "⚡" },
                      { number: "24", label: "Pomoc drogowa", icon: "🚛" },
                    ].map((stat, index) => (
                      <ScrollReveal key={index} delay={index * 100}>
                        <div className="relative group">
                          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 group-hover:border-red-500/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                            <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                              {stat.icon}
                            </div>
                            <div className="text-3xl font-black text-red-500 mb-1 group-hover:text-red-400 transition-colors">
                              <div className="odometer" data-value={stat.number}>0</div>{index == 3 ? "/7 h": "+"}
                            </div>
                            <div className="text-gray-300 text-sm">{stat.label}</div>
                          </div>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>

                  {/* <Button variant="primary" size="lg" className="group">
                    <span className="flex items-center gap-2">
                      Poznaj nasz zespół
                      <svg
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </Button> */}

                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={200}>
                <div className="relative">
                  <div className="relative z-10">
                    <img
                      src="/6.jpg?height=600&width=500"
                      alt="Warsztat MotoForce"
                      className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl"></div>
                  </div>

                  {/* Floating cards with animations */}
                  <div className="absolute -top-6 -right-6 w-48 h-24 bg-gradient-to-r from-red-600 to-red-800 rounded-xl shadow-2xl border border-red-500/30 " />
                  <div className="absolute -bottom-6 -left-6 w-48 h-24 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-xl shadow-2xl border border-orange-500/30 " />

                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 px-4 bg-black">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <div className="inline-block px-4 py-2 bg-red-600/20 border border-red-500/30 rounded-full text-red-400 text-sm font-semibold tracking-wide uppercase mb-4">
                  FAQ
                </div>
                <h2 className="text-5xl md:text-6xl font-black mb-6">
                  <span className="text-white">CZĘSTO ZADAWANE </span>
                  <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                    PYTANIA
                  </span>
                </h2>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              {[
                {
                  question: "Jak długo trwa standardowy serwis motocykla?",
                  answer:
                    "Standardowy serwis trwa od 2-4 godzin w zależności od zakresu prac. Większe naprawy mogą wymagać 1-3 dni roboczych. Zawsze informujemy o przewidywanym czasie realizacji.",
                },
                {
                  question: "Czy oferujecie gwarancję na wykonane prace?",
                  answer:
                    "Tak, wszystkie nasze prace objęte są 12-miesięczną gwarancją. Na części zamienne udzielamy gwarancji zgodnie z warunkami producenta.",
                },
                {
                  question: "Jakie marki motocykli serwisujecie?",
                  answer:
                    "Obsługujemy wszystkie marki motocykli - od japońskich (Honda, Yamaha, Suzuki, Kawasaki) przez europejskie (BMW, Ducati, KTM) po amerykańskie (Harley-Davidson). Specjalizujemy się w motocyklach sportowych.",
                },
                {
                  question: "Czy można umówić się na konkretną godzinę?",
                  answer:
                    "Tak, pracujemy na umówionych terminach. Dzięki temu nie musisz czekać - przyjeżdżasz o ustalonej godzinie i od razu zajmujemy się Twoim motocyklem.",
                },
                {
                  question: "Ile kosztuje diagnostyka komputerowa?",
                  answer:
                    "Diagnostyka komputerowa kosztuje 150 zł. Jeśli zdecydujesz się na naprawę u nas, koszt diagnostyki zostanie odliczony od końcowej faktury.",
                },
                {
                  question: "Czy oferujecie pomoc drogową?",
                  answer:
                    "Tak, oferujemy całodobową pomoc drogową w promieniu 50 km od naszego serwisu. Koszt zależy od odległości i rodzaju usterki.",
                },
              ].map((faq, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10">
                    <details className="group">
                      <summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-red-500/5 transition-colors duration-300">
                        <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors pr-4">
                          {faq.question}
                        </h3>
                        <div className="flex-shrink-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-500 transition-all duration-300 group-hover:scale-110">
                          <svg
                            className="w-4 h-4 text-white transform group-open:rotate-45 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                        </div>
                      </summary>
                      <div className="px-6 pb-6">
                        <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                      </div>
                    </details>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <div className="inline-block px-4 py-2 bg-red-600/20 border border-red-500/30 rounded-full text-red-400 text-sm font-semibold tracking-wide uppercase mb-4">
                  Kontakt
                </div>
                <h2 className="text-5xl md:text-6xl font-black mb-6">
                  <span className="text-white">SKONTAKTUJ SIĘ </span>
                  <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                    Z NAMI
                  </span>
                </h2>
                <p className="text-xl text-gray-400">Gotowy na najlepszy serwis w mieście?</p>
              </div>
            </ScrollReveal>

            <div className="grid lg:grid-cols-2 gap-16">
              <ScrollReveal direction="left">
                <div className="space-y-8">
                  {[
                    {
                      icon: "📍",
                      title: "Lokalizacja",
                      content: "ul. Motocyklowa 123\n00-001 Warszawa",
                      gradient: "from-red-600 to-red-800",
                    },
                    {
                      icon: "📞",
                      title: "Telefon",
                      content: "+48 123 456 789\n+48 987 654 321 (pomoc drogowa)",
                      gradient: "from-orange-600 to-red-600",
                    },
                    {
                      icon: "✉️",
                      title: "Email",
                      content: "info@motoforce.pl\nserwis@motoforce.pl",
                      gradient: "from-yellow-600 to-orange-600",
                    },
                    {
                      icon: "🕒",
                      title: "Godziny otwarcia",
                      content: "Pon-Pt: 8:00 - 18:00\nSobota: 9:00 - 15:00\nNiedziela: zamknięte",
                      gradient: "from-red-700 to-red-900",
                    },
                  ].map((contact, index) => (
                    <div key={index} className="flex items-start space-x-6 group cursor-pointer">
                      <div
                        className={`bg-gradient-to-r ${contact.gradient} p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <span className="text-2xl">{contact.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-red-400 mb-2 group-hover:text-red-300 transition-colors">
                          {contact.title}
                        </h3>
                        <p className="text-gray-300 whitespace-pre-line leading-relaxed">{contact.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={200}>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 shadow-2xl hover:border-red-500/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-6">Umów wizytę online</h3>
                  <form className="space-y-6">
                    {[
                      { label: "Imię i nazwisko", type: "text", placeholder: "Jan Kowalski" },
                      { label: "Email", type: "email", placeholder: "jan@example.com" },
                      { label: "Telefon", type: "tel", placeholder: "+48 123 456 789" },
                      { label: "Marka i model", type: "text", placeholder: "Honda CBR 600RR" },
                    ].map((field, index) => (
                      <div key={index}>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">{field.label}</label>
                        <input
                          type={field.type}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all hover:border-gray-500"
                          placeholder={field.placeholder}
                        />
                      </div>
                    ))}

                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Opis problemu</label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all hover:border-gray-500"
                        placeholder="Opisz problem z motocyklem lub rodzaj serwisu..."
                      ></textarea>
                    </div>

                    <Button variant="primary" size="lg" className="w-full group">
                      <span className="flex items-center justify-center gap-2">
                        Wyślij zapytanie
                        <svg
                          className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                        </svg>
                      </span>
                    </Button>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black border-t border-gray-800 py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-8">
                <h3 className="text-3xl font-black">
                  <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                    MOTO
                  </span>
                  <span className="text-white">FORCE</span>
                </h3>
                <p className="text-gray-400 mt-2">Profesjonalny serwis motocyklowy</p>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 mb-4 md:mb-0">© 2025 MotoForce. Wszystkie prawa zastrzeżone.</p>
                <Link
                  href="https://rumcajzdev.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-red-500"
                >
                  Designed and developed by rumcajzdev
                </Link>
                <div className="flex space-x-8">
                  {["Polityka prywatności", "Regulamin", "Kontakt"].map((link, index) => (
                    <a
                      key={index}
                      href="#"
                      className="text-gray-400 hover:text-red-400 transition-colors font-medium hover:scale-105 transform duration-300"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </footer>
      </main>
    </>
  )
}
