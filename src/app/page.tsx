import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section
          id="home"
          className="from-background to-muted flex min-h-screen items-center justify-center bg-gradient-to-br pt-16"
        >
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="text-foreground mb-6 text-4xl font-bold md:text-6xl">
              Welcome to My Portfolio
            </h1>
            <p className="text-muted-foreground mb-8 text-xl md:text-2xl">
              I&apos;m Moustarhfir, a passionate developer creating amazing
              digital experiences
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#projects"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-8 py-3 font-medium transition-colors"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border-border text-foreground hover:bg-accent rounded-lg border px-8 py-3 font-medium transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-muted/50 py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-foreground mb-12 text-center text-3xl font-bold md:text-4xl">
              About Me
            </h2>
            <div className="text-center">
              <p className="text-muted-foreground text-lg leading-relaxed">
                This is where you can add your personal story, background, and
                what drives your passion for development.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-foreground mb-12 text-center text-3xl font-bold md:text-4xl">
              My Projects
            </h2>
            <div className="text-center">
              <p className="text-muted-foreground text-lg">
                Project showcase will be added here.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="bg-muted/50 py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-foreground mb-12 text-center text-3xl font-bold md:text-4xl">
              Skills & Technologies
            </h2>
            <div className="text-center">
              <p className="text-muted-foreground text-lg">
                Skills and technologies section will be added here.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-foreground mb-12 text-center text-3xl font-bold md:text-4xl">
              Get In Touch
            </h2>
            <div className="text-center">
              <p className="text-muted-foreground text-lg">
                Contact form and information will be added here.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
