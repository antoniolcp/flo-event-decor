import React from "react"
import { ChevronDown, Instagram, Mail, Phone } from "lucide-react"
import { Button } from "./components/ui/button"

export default function App() {
  return (
    <div className="flex min-h-screen flex-col font-body">
      {/* Navigation */}
      <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2 font-serif text-3xl font-bold">
            <span className="text-primary">FLO</span> Event Decor
          </a>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="text-base font-medium hover:text-primary">
              Sobre Nós
            </a>
            <a href="#concept" className="text-base font-medium hover:text-primary">
              Conceito
            </a>
            <a href="#mission" className="text-base font-medium hover:text-primary">
              Missão
            </a>
            <a href="#events" className="text-base font-medium hover:text-primary">
              Eventos
            </a>
            <a href="#contact" className="text-base font-medium hover:text-primary">
              Contato
            </a>
          </nav>
          <Button variant="outline" className="md:hidden" size="icon">
            <span className="sr-only">Toggle menu</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section 
          className="relative flex min-h-[80vh] items-center justify-center overflow-hidden"
          style={{
            backgroundImage: 'url(../images/IMG_2198.PNG)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="container relative z-10 mx-auto flex flex-col items-center justify-center px-4 text-center">
            <div className="mb-8">
              <img 
                src="/images/image.PNG"
                alt="FLO Event Decor Logo" 
                className="mx-auto h-86 w-auto md:h-[400px]"
              />
            </div>
            <p className="mt-6 max-w-2xl text-2xl text-primary-dark/80 font-body">Fazemos cada evento florescer.</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white">
                Os Nossos Serviços
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-primary-dark text-primary-dark hover:bg-primary-dark/10">
                Fale Conosco
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="container px-4">
            <h2 className="text-center font-serif text-4xl font-bold md:text-5xl">A nossa Equipa</h2>
            <div className="mt-16 grid gap-10 md:grid-cols-2">
              <div className="group relative overflow-hidden rounded-xl bg-muted p-6 transition-all hover:shadow-lg">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6 h-40 w-40 overflow-hidden rounded-full border-4 border-background">
                    <div className="h-full w-full bg-primary/10"></div>
                  </div>
                  <h3 className="font-serif text-3xl font-bold">SOFIA</h3>
                  <p className="mt-4 text-lg text-muted-foreground font-body">
                    Apaixonada por decoração, reúne o seu talento estético e gosto único para te surpreender e tornar o
                    teu sonho realidade através de ambientes inesquecíveis.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl bg-muted p-6 transition-all hover:shadow-lg">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6 h-40 w-40 overflow-hidden rounded-full border-4 border-background">
                    <div className="h-full w-full bg-primary/10"></div>
                  </div>
                  <h3 className="font-serif text-3xl font-bold">MARTA</h3>
                  <p className="mt-4 text-lg text-muted-foreground font-body">
                    Desde cedo tem uma ligação forte com flores na estufa onde cresceu e atualmente trabalha. Junta o
                    seu gosto pelas flores e a atenção aos detalhes para te proporcionar eventos maravilhosos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Concept Section */}
        <section id="concept" className="bg-primary-light/30 py-20">
          <div className="container px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-4xl font-bold md:text-5xl">Conceito</h2>
              <p className="mt-6 text-xl text-muted-foreground font-body">
                Combinamos a beleza natural das flores com um design sofisticado e personalizado, criando ambientes
                memoráveis para casamentos, festas e momentos especiais.
              </p>
              <div className="mt-12 grid grid-cols-3 gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <span className="font-serif text-xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="mt-4 text-lg font-medium">Unicidade</h3>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <span className="font-serif text-xl font-bold text-primary">2</span>
                  </div>
                  <h3 className="mt-4 text-lg font-medium">Autenticidade</h3>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <span className="font-serif text-xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="mt-4 text-lg font-medium">Cada detalhe conta</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="py-20">
          <div className="container px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-4xl font-bold md:text-5xl">Missão</h2>
              <p className="mt-6 text-xl text-muted-foreground font-body">
                Temos como missão fazer de cada evento uma experiência surpreendente onde cada peça importa e é
                escolhida para complementar outras, procurando sempre a harmonia entre todos os detalhes.
              </p>
              <p className="mt-4 text-xl text-muted-foreground font-body">
                Oferecemos soluções criativas e personalizadas através de um olhar atento e compromisso com a qualidade
                de forma a criar ambientes que encantam e emocionam.
              </p>
              <div className="mt-12 flex flex-wrap justify-center gap-8">
                <div className="flex items-center gap-2">
                  <span className="font-serif text-2xl font-bold text-primary">Criatividade</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-serif text-2xl font-bold text-primary">Excelência</span>
                </div>
              </div>
              <p className="mt-12 text-xl font-medium italic font-body">
                O nosso propósito é que cada evento supere a expectativa do nosso cliente.
              </p>
            </div>
          </div>
        </section>

        {/* Events Gallery */}
        <section id="events" className="bg-primary-light/30 py-20">
          <div className="container px-4">
            <h2 className="text-center font-serif text-4xl font-bold md:text-5xl">OS NOSSOS EVENTOS</h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="group overflow-hidden rounded-xl bg-background shadow-md transition-all hover:shadow-xl"
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <div className="h-full w-full bg-primary/10"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif text-xl font-medium">Evento {item}</h3>
                    <p className="mt-2 text-base text-muted-foreground font-body">
                      Arranjos florais lindos para uma ocasião especial.
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
              <h2 className="font-serif text-4xl font-bold md:text-5xl">Fale Conosco</h2>
              <p className="mt-6 text-xl text-muted-foreground font-body">
                Entre em contato para tornar seu evento verdadeiramente especial.
              </p>
              <div className="mt-12 flex flex-col items-center justify-center gap-6 md:flex-row">
                <a href="mailto:info@floeventdecor.com" className="flex items-center gap-2 text-xl hover:text-primary">
                  <Mail className="h-5 w-5" />
                  sofia.ramalho@hotmail.com
                </a>
                <a href="tel:+351123456789" className="flex items-center gap-2 text-xl hover:text-primary">
                  <Phone className="h-5 w-5" />
                  +351 939765522
                  <a>+351 917810527</a>
                </a>
                <a
                  href="https://instagram.com/flo_eventdecor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xl hover:text-primary"
                >
                  <Instagram className="h-5 w-5" />
                  @flo_eventdecor
                </a>
              </div>
              <div className="mt-12">
                <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white">
                  Solicitar Orçamento
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
          <div className="flex items-center gap-2 font-serif text-2xl font-bold">
            <span className="text-primary">FLO</span> Event Decor
          </div>
          <p className="text-base text-muted-foreground font-body">
            &copy; {new Date().getFullYear()} FLO Event Decor. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <a
              href="https://instagram.com/flo_eventdecor"
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
