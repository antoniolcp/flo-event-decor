import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Instagram, Mail, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-serif text-2xl font-bold">
            <span className="text-primary">FLO</span> Event Decor
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About Us
            </Link>
            <Link href="#concept" className="text-sm font-medium hover:text-primary">
              Concept
            </Link>
            <Link href="#mission" className="text-sm font-medium hover:text-primary">
              Mission
            </Link>
            <Link href="#events" className="text-sm font-medium hover:text-primary">
              Our Events
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <Button variant="outline" className="md:hidden" size="icon">
            <span className="sr-only">Toggle menu</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-gradient-to-r from-rose-50 to-pink-50">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Floral background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container relative z-10 mx-auto flex flex-col items-center justify-center px-4 text-center">
            <h1 className="font-serif text-5xl font-bold tracking-tight md:text-7xl">
              <span className="text-primary">FLO</span> Event Decor
            </h1>
            <p className="mt-6 max-w-2xl text-xl text-muted-foreground">Fazemos cada evento florescer.</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button size="lg" className="rounded-full">
                Our Services
              </Button>
              <Button size="lg" variant="outline" className="rounded-full">
                Contact Us
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="container px-4">
            <h2 className="text-center font-serif text-3xl font-bold md:text-4xl">Meet Our Team</h2>
            <div className="mt-16 grid gap-10 md:grid-cols-2">
              <div className="group relative overflow-hidden rounded-xl bg-muted p-6 transition-all hover:shadow-lg">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6 h-40 w-40 overflow-hidden rounded-full border-4 border-background">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt="Sofia"
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-serif text-2xl font-bold">SOFIA</h3>
                  <p className="mt-4 text-muted-foreground">
                    Apaixonada por decoração, reúne o seu talento estético e gosto único para te surpreender e tornar o
                    teu sonho realidade através de ambientes inesquecíveis.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl bg-muted p-6 transition-all hover:shadow-lg">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6 h-40 w-40 overflow-hidden rounded-full border-4 border-background">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt="Marta"
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-serif text-2xl font-bold">MARTA</h3>
                  <p className="mt-4 text-muted-foreground">
                    Desde cedo tem uma ligação forte com flores na estufa onde cresceu e atualmente trabalha. Junta o
                    seu gosto pelas flores e a atenção aos detalhes para te proporcionar eventos maravilhosos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Concept Section */}
        <section id="concept" className="bg-gradient-to-r from-rose-50 to-pink-50 py-20">
          <div className="container px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-bold md:text-4xl">Conceito</h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Combinamos a beleza natural das flores com um design sofisticado e personalizado, criando ambientes
                memoráveis para casamentos, festas e momentos especiais.
              </p>
              <div className="mt-12 grid grid-cols-3 gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <span className="font-serif text-xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="mt-4 font-medium">Unicidade</h3>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <span className="font-serif text-xl font-bold text-primary">2</span>
                  </div>
                  <h3 className="mt-4 font-medium">Autenticidade</h3>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <span className="font-serif text-xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="mt-4 font-medium">Cada detalhe conta</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="py-20">
          <div className="container px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-bold md:text-4xl">Missão</h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Temos como missão fazer de cada evento uma experiência surpreendente onde cada peça importa e é
                escolhida para complementar outras, procurando sempre a harmonia entre todos os detalhes.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Oferecemos soluções criativas e personalizadas através de um olhar atento e compromisso com a qualidade
                de forma a criar ambientes que encantam e emocionam.
              </p>
              <div className="mt-12 flex flex-wrap justify-center gap-8">
                <div className="flex items-center gap-2">
                  <span className="font-serif text-xl font-bold text-primary">Criatividade</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-serif text-xl font-bold text-primary">Excelência</span>
                </div>
              </div>
              <p className="mt-12 font-medium italic">
                O nosso propósito é que cada evento supere a expectativa do nosso cliente.
              </p>
            </div>
          </div>
        </section>

        {/* Events Gallery */}
        <section id="events" className="bg-muted py-20">
          <div className="container px-4">
            <h2 className="text-center font-serif text-3xl font-bold md:text-4xl">OS NOSSOS EVENTOS</h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="group overflow-hidden rounded-xl bg-background shadow-md transition-all hover:shadow-xl"
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=600&width=800`}
                      alt={`Event ${item}`}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif text-lg font-medium">Event Type {item}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Beautiful floral arrangements for a special occasion.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-bold md:text-4xl">Contact Us</h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Get in touch with us to make your event truly special.
              </p>
              <div className="mt-12 flex flex-col items-center justify-center gap-6 md:flex-row">
                <a href="mailto:info@floeventdecor.com" className="flex items-center gap-2 text-lg hover:text-primary">
                  <Mail className="h-5 w-5" />
                  info@floeventdecor.com
                </a>
                <a href="tel:+1234567890" className="flex items-center gap-2 text-lg hover:text-primary">
                  <Phone className="h-5 w-5" />
                  +1 (234) 567-890
                </a>
                <a
                  href="https://instagram.com/floeventdecor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-lg hover:text-primary"
                >
                  <Instagram className="h-5 w-5" />
                  @floeventdecor
                </a>
              </div>
              <div className="mt-12">
                <Button size="lg" className="rounded-full">
                  Request a Quote
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
          <div className="flex items-center gap-2 font-serif text-xl font-bold">
            <span className="text-primary">FLO</span> Event Decor
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} FLO Event Decor. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://instagram.com/floeventdecor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="mailto:info@floeventdecor.com" className="text-muted-foreground hover:text-primary">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
