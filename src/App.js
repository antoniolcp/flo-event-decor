import React, { useRef, useState, useEffect } from "react";
import { ChevronDown, Instagram, Mail, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./components/ui/button";
import 'swiper/css';
import 'swiper/css/effect-fade';
import Galeria from "./galeria";
import { FaTiktok } from 'react-icons/fa';


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
            <a href="#galeria" className="text-base font-medium hover:text-primary">
              Galeria
            </a>
            <a href="#contact" className="text-base font-medium hover:text-primary">
              Contacto
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
        <section className="relative flex min-h-[650px] items-center justify-center overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            className="absolute h-full w-full object-cover"
          >
            <source src="/videos/fundoSite.mp4" type="video/mp4" />
          </video>

          {/* Logo por cima do vídeo */}
          <div className="container relative z-10 mx-auto flex flex-col items-center justify-center px-4 text-center">
            <div className="mb-32">
              <img
                src="/images/Logo/floBola.png"
                alt="FLO Event Decor Logo"
                className="mx-auto h-72 w-auto md:h-[400px]"
              />
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
            <img src="/images/Tias/sofia.JPG" alt="Sofia" className="h-full w-full object-cover" />
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
            <img src="/images/Tias/marta.JPG" alt="Marta" className="h-full w-full object-cover" />
          </div>
          <h3 className="font-serif text-3xl font-bold">MARTA</h3>
          <p className="mt-4 text-lg text-muted-foreground font-body">
          Cresceu na Quinta das Flores, um lugar especial com estufas de diversas flores e onde também trabalha. 
          A sua experiência e atenção aos detalhes permitem proporcionar eventos maravilhosos.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


{/* Concept Section */}
<section id="concept" className="bg-primary-light/30 py-20">
  <div className="container px-4">
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="font-serif text-4xl font-bold md:text-5xl">Conceito</h2>
      <p className="mt-6 text-xl text-muted-foreground font-body">
        Combinamos a beleza natural das flores com um design sofisticado e personalizado, criando ambientes
        memoráveis para casamentos, festas e momentos especiais.
      </p>

      <div className="mt-12 flex justify-center">
        <img
          src="/images/Conteudo/conceito.png"
          alt="Conceito"
          className="max-w-2xl w-full"
        />
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

      <div className="mt-12 flex flex-wrap justify-center gap-12">
        <img
          src="/images/Conteudo/criatividade.png"
          alt="Criatividade"
          className="h-24 md:h-30"
        />
        <img
          src="/images/Conteudo/excelencia.png"
          alt="Excelência"
          className="h-20 md:h-22"
        />
      </div>

      <p className="mt-12 text-xl font-medium italic font-body">
        O nosso propósito é que cada evento supere a expectativa do nosso cliente.
      </p>
    </div>
  </div>
</section>


{/* Galeria Horizontal com setas */}
<Galeria />



{/* Contact Section */}
<section id="contact" className="py-20">
  <div className="container px-4">
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="font-serif text-4xl font-bold md:text-5xl">Fale Connosco</h2>
      <p className="mt-6 text-xl text-muted-foreground font-body">
        Entre em contacto para tornar seu evento verdadeiramente especial.
      </p>

      <div className="mt-12 flex flex-col items-center justify-center gap-4">
        {/* Linha 1 - Sofia */}
        <div className="flex flex-col md:flex-row items-center gap-6 text-xl text-muted-foreground hover:text-primary transition">
          <a href="mailto:sofia.ramalho@hotmail.com" className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            sofia.ramalho@hotmail.com
          </a>
          <a href="tel:+351939765522" className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            +351 939 765 522
          </a>
        </div>

        {/* Linha 2 - Marta */}
        <div className="flex flex-col md:flex-row items-center gap-6 text-xl text-muted-foreground hover:text-primary transition">
          <a href="mailto:marta.flores@email.com" className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            martasilvag@gmail.com
          </a>
          <a href="tel:+351917810527" className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            +351 917 810 527
          </a>
        </div>

        {/* Instagram */}
        <a
          href="https://instagram.com/flo_eventdecor"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xl hover:text-primary mt-4"
        >
          <Instagram className="h-5 w-5" />
          @flo_eventdecor
        </a>
        {/* TikTok */}
<a
  href="https://www.tiktok.com/@flo_eventdecor"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 text-xl hover:text-primary mt-4"
>
<FaTiktok className="h-5 w-5" />

  @flo_eventdecor
</a>

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
  <a 
    href="https://www.tiktok.com/@flo_eventdecor" 
    target="_blank"
    rel="noopener noreferrer"
    className="text-muted-foreground hover:text-primary"
  >
    <FaTiktok className="h-5 w-5" />
    <span className="sr-only">@flo_eventdecor</span>
  </a>
</div>

        </div>
      </footer>
    </div>
  )
}
