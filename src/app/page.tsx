"use client";

import Navbar from "@/components/navbar";
import { motion } from "framer-motion";

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
            <motion.h1 
              className="text-foreground mb-6 text-4xl font-bold md:text-6xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Mohammed Moustarhfir
            </motion.h1>
            <motion.p 
              className="text-muted-foreground mb-8 text-xl md:text-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Fullstack Developer passionate about creating innovative web solutions with modern technologies
            </motion.p>
            <motion.div 
              className="flex flex-col justify-center gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a
                href="#projects"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-8 py-3 font-medium transition-colors"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                className="border-border text-foreground hover:bg-accent rounded-lg border px-8 py-3 font-medium transition-colors"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-muted/50 py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.h2 
              className="text-foreground mb-12 text-center text-3xl font-bold md:text-4xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Background</h3>
                  <p className="text-muted-foreground mb-4">
                    Fullstack Developer with expertise in modern web technologies. Graduate from Youcode (OCP Simplon co) 
                    with a strong foundation in both front-end and back-end development.
                  </p>
                  <p className="text-muted-foreground">
                    Previously studied Industrial Maintenance Electrical Technology at OFPPT and hold a Professional 
                    Baccalaureate in Electrical Engineering.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Languages</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <strong>Arabic:</strong> Native</li>
                    <li>• <strong>English:</strong> Advanced</li>
                    <li>• <strong>French:</strong> Intermediate</li>
                  </ul>
                  <h3 className="text-xl font-semibold mb-4 mt-6 text-foreground">Interests</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Football</li>
                    <li>• Photography</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.h2 
              className="text-foreground mb-12 text-center text-3xl font-bold md:text-4xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Featured Projects
            </motion.h2>
            <motion.div 
              className="grid md:grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-card rounded-lg border border-border p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">EasyBank</h3>
                <p className="text-muted-foreground mb-4">
                  Banking application with comprehensive management features. Developed software dedicated to banking management 
                  with secure transactions and user-friendly interface.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">HTML</span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">CSS</span>
                  <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">JavaScript</span>
                  <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm">Java</span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">Jakarta EE</span>
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm">PostgreSQL</span>
                </div>
                <p className="text-sm text-muted-foreground">Tools: Tailwind, UML, JIRA, Git, MVC</p>
              </div>
              <div className="bg-card rounded-lg border border-border p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">YouHospital</h3>
                <p className="text-muted-foreground mb-4">
                  Hospital Management System that simplifies the management of patient and staff files, as well as appointment 
                  scheduling. Full-stack application with modern architecture.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm">Java</span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">Spring Boot</span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Angular</span>
                  <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">TypeScript</span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">PostgreSQL</span>
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm">Docker</span>
                </div>
                <p className="text-sm text-muted-foreground">Tools: Spring Data JPA, Swagger, REST API, JUnit, Mockito, SCSS</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-foreground mb-12 text-center text-3xl font-bold md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Professional Experience
          </motion.h2>
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="p-6 bg-card rounded-lg border border-border">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Web Developer - Intern</h3>
                  <p className="text-primary font-medium">Shortkut, Casablanca</p>
                </div>
                <span className="text-muted-foreground text-sm mt-2 md:mt-0">April 2024 - July 2024</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Focused on website development and optimization using modern web technologies.
              </p>
              <div className="mb-4">
                <h4 className="font-semibold text-foreground mb-2">Key Responsibilities:</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Design and develop customized websites</li>
                  <li>Ensure cross-device and cross-browser compatibility</li>
                  <li>Diagnose and resolve website issues efficiently</li>
                  <li>Enhance SEO strategies and optimize page load speeds</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">PHP</span>
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm">HTML</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">CSS</span>
                <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">JavaScript</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">jQuery</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">WordPress</span>
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm">Divi</span>
                <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 rounded-full text-sm">Elementor</span>
              </div>
            </div>
            
            <div className="p-6 bg-card rounded-lg border border-border">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">JAVA Fullstack Developer - Intern</h3>
                  <p className="text-primary font-medium">Business IT Solutions (BITS), Casablanca</p>
                </div>
                <span className="text-muted-foreground text-sm mt-2 md:mt-0">May 2023 - June 2023</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Developed a Payment Simulation Website using full-stack Java technologies.
              </p>
              <div className="mb-4">
                <h4 className="font-semibold text-foreground mb-2">Key Responsibilities:</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Creation of interfaces for the POS simulation module</li>
                  <li>Program and implement REST API</li>
                  <li>Create and modify the database</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm">Java</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">Spring Boot</span>
                <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm">Angular</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm">MySQL</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-muted/50 py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.h2 
              className="text-foreground mb-12 text-center text-3xl font-bold md:text-4xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Technical Skills
            </motion.h2>
            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Front-End</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>• HTML, CSS, Bootstrap</p>
                  <p>• TailwindCSS</p>
                  <p>• JavaScript, TypeScript</p>
                  <p>• Angular, React</p>
                </div>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Back-End</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>• Java, Spring Framework</p>
                  <p>• Hibernate, Jakarta EE</p>
                  <p>• MySQL, SQL, PostgreSQL</p>
                  <p>• PHP, Laravel</p>
                </div>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Tools & Methods</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>• UML, Scrum Methodology</p>
                  <p>• Git, GitHub, JIRA</p>
                  <p>• REST API, Maven</p>
                  <p>• WordPress, Figma, Photoshop</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.h2 
              className="text-foreground mb-12 text-center text-3xl font-bold md:text-4xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Get In Touch
            </motion.h2>
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-8">
                <p className="text-muted-foreground text-lg mb-4">
                  I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
                </p>
                <p className="text-muted-foreground">
                  <strong>Open to remote work</strong> - Let's build something amazing together!
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <motion.div 
                  className="p-6 bg-card rounded-lg border border-border"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Email</h3>
                  <a href="mailto:mohammed.moustarhfir@gmail.com" className="text-primary hover:text-primary/80 break-all">
                    mohammed.moustarhfir@gmail.com
                  </a>
                </motion.div>
                <motion.div 
                  className="p-6 bg-card rounded-lg border border-border"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Phone</h3>
                  <a href="tel:+212644291265" className="text-primary hover:text-primary/80">
                    +212 644 291265
                  </a>
                </motion.div>
                <motion.div 
                  className="p-6 bg-card rounded-lg border border-border"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Social</h3>
                  <div className="space-y-2">
                    <div>
                      <a href="https://github.com/mohammed-moustarhfir" className="text-primary hover:text-primary/80">
                        GitHub: @mohammed-moustarhfir
                      </a>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Twitter: @Mousta-Med</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
