"use client"

import Navigation from "@/components/Navigation"
import ScrollReveal from "@/components/ScrollReveal"
import Button from "@/components/Button"
import { useState } from "react"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Honda CBR 1000RR - Full Performance Build",
      category: "Tuning Sportowy",
      description:
        "Kompleksowa modyfikacja sportowego motocykla z zwiększeniem mocy do 200 KM. Sportowy układ wydechowy, chip tuning, sportowe zawieszenie.",
      beforeImage: "/25.jpg?height=400&width=600",
      afterImage: "/12.jpg?height=400&width=600",
      specs: ["Moc: 200 KM", "Moment: 120 Nm", "Waga: -15 kg", "0-100: 2.8s"],
      tags: ["Performance", "Chip Tuning", "Sportowy"],
      year: "2024",
    },
    {
      id: 2,
      title: "Yamaha R6 - Track Day Special",
      category: "Przygotowanie Torowe",
      description: "Przygotowanie motocykla do jazd torowych. Sportowe hamulce, opony slick, roll cage, telemetria.",
      beforeImage: "/24.jpg?height=400&width=600",
      afterImage: "/13.jpg?height=400&width=600",
      specs: ["Hamulce Brembo", "Opony Pirelli Slick", "Telemetria", "Roll Cage"],
      tags: ["Track", "Racing", "Safety"],
      year: "2024",
    },
    {
      id: 3,
      title: "Kawasaki ZX-10R - Street Fighter Build",
      category: "Custom Build",
      description:
        "Przekształcenie sportowego motocykla w street fightera. Custom owiewki, LED lighting, sportowe komponenty.",
      beforeImage: "/10.jpg?height=400&width=600",
      afterImage: "/23.jpg?height=400&width=600",
      specs: ["Custom Owiewki", "LED System", "Sportowe Felgi", "Carbon Fiber"],
      tags: ["Custom", "Street Fighter", "LED"],
      year: "2023",
    },
    {
      id: 4,
      title: "BMW S1000RR - Endurance Racing",
      category: "Racing Prep",
      description:
        "Przygotowanie do wyścigów długodystansowych. Wzmocniona konstrukcja, system chłodzenia, pit stop modifications.",
      beforeImage: "/22.jpg?height=400&width=600",
      afterImage: "/11.jpg?height=400&width=600",
      specs: ["Racing Suspension", "Quick Release", "Cooling System", "Pit Stop Ready"],
      tags: ["Racing", "Endurance", "Professional"],
      year: "2023",
    },
    {
      id: 5,
      title: "Ducati Panigale V4 - Show Bike",
      category: "Show Build",
      description: "Motocykl wystawowy z najwyższej półki. Pełny carbon fiber, custom paint job, premium components.",
      beforeImage: "/20.png?height=400&width=600",
      afterImage: "/8.jpg?height=400&width=600",
      specs: ["Full Carbon", "Custom Paint", "Premium Parts", "Show Quality"],
      tags: ["Show", "Carbon", "Premium"],
      year: "2023",
    },
    {
      id: 6,
      title: "Suzuki GSX-R750 - Vintage Restoration",
      category: "Restauracja",
      description:
        "Kompletna restauracja klasycznego motocykla sportowego. Przywrócenie oryginalnego wyglądu z nowoczesnymi ulepszeniami.",
      beforeImage: "/21.jpg?height=400&width=600",
      afterImage: "/9.jpg?height=400&width=600",
      specs: ["Original Paint", "Restored Engine", "New Electronics", "Period Correct"],
      tags: ["Restoration", "Vintage", "Classic"],
      year: "2022",
    },
  ]

  const categories = [
    "Wszystkie",
    "Tuning Sportowy",
    "Przygotowanie Torowe",
    "Custom Build",
    "Racing Prep",
    "Show Build",
    "Restauracja",
  ]


  const [selectedCategory, setSelectedCategory] = useState("Wszystkie");

  const filteredProjects =
    selectedCategory === "Wszystkie"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-900 text-white pt-16">
        {/* Hero Section */}
        <section className="py-24 px-4 bg-gradient-to-br from-black via-red-900/20 to-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <ScrollReveal>
              <div className="text-center mb-16">
                <div className="inline-block px-4 py-2 bg-red-600/20 border border-red-500/30 rounded-full text-red-400 text-sm font-semibold tracking-wide uppercase mb-6">
                  Nasze Projekty
                </div>
                <h1 className="text-6xl md:text-8xl font-black mb-6">
                  <span className="text-white">NASZE </span>
                  <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                    DZIEŁA
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Każdy projekt to unikalna historia. Zobacz, jak przekształcamy zwykłe motocykle w prawdziwe dzieła
                  sztuki mechanicznej.
                </p>
              </div>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal delay={200}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                {[
                  { number: "150", label: "Zrealizowanych projektów", icon: "🏆" },
                  { number: "50", label: "Projektów tuningu", icon: "⚡" },
                  { number: "25", label: "Motocykli wyścigowych", icon: "🏁" },
                  { number: "100", label: "Zadowolonych klientów", icon: "❤️" },
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 group-hover:border-red-500/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                      <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                        {stat.icon}
                      </div>
                      <div className="text-3xl font-black text-red-500 mb-1">
                        <div className="odometer" data-value={stat.number}>0</div>{index == 3 ? "%": "+"}
                      </div>
                      <div className="text-gray-300 text-sm">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Filter Categories */}
        <section className="py-12 px-4 bg-black border-b border-gray-800">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-500/25"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700 hover:border-red-500/50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {filteredProjects.map((project, index) => (
                <ScrollReveal key={project.id} delay={index * 100}>
                  <div className="group flex flex-col h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-red-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10">
                    {/* Before/After Images */}
                    <div className="relative">
                      <div className="grid grid-cols-2 gap-1">
                        <div className="relative aspect-video overflow-hidden">
                          <img
                            src={project.beforeImage || "/placeholder.svg"}
                            alt={`${project.title} - Before`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 rounded-full text-white text-sm font-semibold">
                            PRZED
                          </div>
                        </div>
                        <div className="relative aspect-video overflow-hidden">
                          <img
                            src={project.afterImage || "/placeholder.svg"}
                            alt={`${project.title} - After`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute top-4 right-4 bg-gradient-to-r from-red-600 to-red-700 px-3 py-1 rounded-full text-white text-sm font-semibold">
                            PO
                          </div>
                        </div>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute bottom-4 left-4 bg-gradient-to-r from-orange-600 to-yellow-600 px-4 py-2 rounded-lg text-white font-semibold text-sm">
                        {project.category}
                      </div>

                      {/* Year Badge */}
                      <div className="absolute bottom-4 right-4 bg-black/80 px-3 py-1 rounded-full text-white text-sm">
                        {project.year}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex-grow flex flex-col">
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>

                      {/* Specs */}
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {project.specs.map((spec, specIndex) => (
                          <div key={specIndex} className="flex items-center gap-2 text-sm">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span className="text-gray-300">{spec}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tags */}
                      {/* <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs font-medium hover:bg-red-500/20 hover:text-red-400 transition-colors cursor-pointer"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div> */}

                      {/* CTA */}
                      {/* <div className="flex items-center justify-between">
                        <Button variant="outline" size="md" className="group bg-transparent">
                          <span className="flex items-center gap-2">
                            Zobacz szczegóły
                            <svg
                              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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

                        <div className="flex items-center gap-4 text-gray-400">
                          <button className="hover:text-red-400 transition-colors hover:scale-110 transform duration-300">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                          <button className="hover:text-red-400 transition-colors hover:scale-110 transform duration-300">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                            </svg>
                          </button>
                        </div>
                      </div> */}
                      
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 bg-black">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-12 rounded-2xl border border-gray-700">
                <h2 className="text-4xl md:text-5xl font-black mb-6">
                  <span className="text-white">GOTOWY NA </span>
                  <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                    SWÓJ PROJEKT?
                  </span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Każdy motocykl ma potencjał. Pozwól nam go uwolnić i stworzyć coś wyjątkowego.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button variant="primary" size="xl" className="group">
                    <span className="flex items-center gap-2">
                      Rozpocznij projekt
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
                  <Button variant="outline" size="xl" className="group bg-transparent">
                    <span className="flex items-center gap-2">
                      Skontaktuj się z nami
                      <svg
                        className="w-5 h-5 group-hover:scale-110 transition-transform"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </span>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
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
                <p className="text-gray-400 mb-4 md:mb-0">© 2024 MotoForce. Wszystkie prawa zastrzeżone.</p>
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
