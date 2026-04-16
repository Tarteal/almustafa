import { motion } from "motion/react";
import { 
  BookOpen, 
  GraduationCap, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Star, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Menu,
  X,
  ChevronDown,
  Heart,
  CreditCard,
  Lock
} from "lucide-react";
import { useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutItem, setCheckoutItem] = useState<{ title: string; price: string; type: 'course' | 'donation' } | null>(null);

  const handleCheckout = (title: string, price: string, type: 'course' | 'donation' = 'course') => {
    setCheckoutItem({ title, price, type });
    setIsCheckoutOpen(true);
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const stagger = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.2 }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-primary/20 selection:text-primary">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <BookOpen className="text-primary-foreground w-6 h-6" />
              </div>
              <span className="text-2xl font-heading font-bold text-primary tracking-tight">Almustafa Quran</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Home</a>
              <a href="#courses" className="text-sm font-medium hover:text-primary transition-colors">Courses</a>
              <a href="#donate" className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
                <Heart className="w-4 h-4 text-accent fill-accent" /> Donate
              </a>
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
              <a href="#blog" className="text-sm font-medium hover:text-primary transition-colors">Articles</a>
              <Button variant="default" className="rounded-full px-6" onClick={() => handleCheckout("General Enrollment", "$49/mo")}>Start Learning</Button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-primary">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden bg-background border-b border-border px-4 py-6 flex flex-col gap-4"
          >
            <a href="#" className="text-lg font-medium">Home</a>
            <a href="#courses" className="text-lg font-medium">Courses</a>
            <a href="#donate" className="text-lg font-medium flex items-center gap-2">
              <Heart className="w-5 h-5 text-accent fill-accent" /> Donate
            </a>
            <a href="#about" className="text-lg font-medium">About</a>
            <a href="#blog" className="text-lg font-medium">Articles</a>
            <Button className="w-full rounded-full" onClick={() => handleCheckout("General Enrollment", "$49/mo")}>Start Learning</Button>
          </motion.div>
        )}
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden mx-4 sm:mx-6 lg:mx-8 my-8 rounded-[2rem] bg-gradient-to-br from-[#2D5A27] to-[#1a3a17] shadow-2xl">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 islamic-pattern opacity-10" />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 relative z-10 w-full py-20">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Badge variant="secondary" className="mb-6 px-4 py-1 text-white border-white/20 bg-white/10 backdrop-blur-sm">
                  Trusted by 10,000+ Students Worldwide
                </Badge>
                <h1 className="text-4xl md:text-6xl font-heading font-bold text-white leading-[1.2] mb-6">
                  Learn Quran Online with <span className="text-accent italic">Expert Teachers</span>
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-lg">
                  Flexible learning hours, certified tutors, and personalized curriculum designed for global students of all ages.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="rounded-full px-8 text-lg h-14 bg-accent hover:bg-accent/90 text-white border-none shadow-lg shadow-black/20 group"
                    onClick={() => handleCheckout("Full Access Plan", "$59/mo")}
                  >
                    Start Learning <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <a 
                    href="#courses" 
                    className={buttonVariants({ 
                      variant: "outline", 
                      size: "lg", 
                      className: "rounded-full px-8 text-lg h-14 border-white/30 text-white hover:bg-white/10" 
                    })}
                  >
                    View Courses
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Three Learning Steps Section */}
        <section className="py-24 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeIn} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">Start Learning in 3 Easy Steps</h2>
              <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
            </motion.div>

            <motion.div 
              variants={stagger}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                { step: "1", title: "Sign Up", desc: "Create your free account in seconds.", icon: <Users className="w-6 h-6" /> },
                { step: "2", title: "Choose Course", desc: "Select a path that fits your goals.", icon: <BookOpen className="w-6 h-6" /> },
                { step: "3", title: "Begin Learning", desc: "Connect with your expert tutor.", icon: <GraduationCap className="w-6 h-6" /> }
              ].map((item, idx) => (
                <motion.div key={idx} variants={fadeIn} className="relative">
                  <Card className="h-full border border-border/50 shadow-sm bg-background hover:shadow-md transition-shadow duration-300 rounded-xl">
                    <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                      <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <CardTitle className="text-lg font-heading">{item.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Offered Courses Section */}
        <section id="courses" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeIn} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">Our Courses</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive curriculum designed by scholars to help you master Quranic recitation and understanding.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  title: "Quran Reading (Tajweed)", 
                  desc: "Master the rules of Tajweed and improve your recitation with proper pronunciation and rhythm.",
                  img: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=2070&auto=format&fit=crop",
                  level: "Beginner to Advanced",
                  price: "$39/mo"
                },
                { 
                  title: "Quran Memorization (Hifz)", 
                  desc: "A structured program to help you memorize the Holy Quran with retention techniques and regular revision.",
                  img: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070&auto=format&fit=crop",
                  level: "Intermediate",
                  price: "$45/mo"
                },
                { 
                  title: "Islamic Studies", 
                  desc: "Deepen your knowledge of Fiqh, Hadith, Seerah, and Islamic history for kids and adults.",
                  img: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?q=80&w=2070&auto=format&fit=crop",
                  level: "All Levels",
                  price: "$29/mo"
                }
              ].map((course, idx) => (
                <motion.div 
                  key={idx} 
                  {...fadeIn} 
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="overflow-hidden h-full border-none border-b-[3px] border-accent shadow-lg shadow-black/5 hover:shadow-xl transition-all duration-500 group rounded-2xl">
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={course.img} 
                        alt={course.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-accent text-white border-none">{course.level}</Badge>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <Badge className="bg-primary text-white border-none font-bold">{course.price}</Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-heading text-primary">{course.title}</CardTitle>
                      <CardDescription className="text-sm leading-relaxed text-muted-foreground h-12 overflow-hidden">{course.desc}</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-between items-center">
                      <button className="text-accent font-bold text-xs uppercase tracking-wider hover:underline">
                        Details
                      </button>
                      <Button 
                        size="sm" 
                        className="rounded-full bg-primary hover:bg-primary/90"
                        onClick={() => handleCheckout(course.title, course.price)}
                      >
                        Enroll Now
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 islamic-pattern opacity-10 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div {...fadeIn} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">What Our Students Say</h2>
              <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Sara Malik", role: "Parent", text: "The teachers are incredibly patient and the online platform is very easy to use.", avatar: "https://i.pravatar.cc/150?u=sara" },
                { name: "Ahmed Khan", role: "Hifz Student", text: "My son has learned more in 3 months than he did in 2 years locally.", avatar: "https://i.pravatar.cc/150?u=ahmed" },
                { name: "Omar Farooq", role: "Adult Learner", text: "The flexibility of scheduling classes around my work hours is a game-changer.", avatar: "https://i.pravatar.cc/150?u=omar" }
              ].map((t, idx) => (
                <motion.div key={idx} {...fadeIn} transition={{ delay: idx * 0.1 }}>
                  <Card className="bg-[#F4F6F3] border-none text-foreground h-full rounded-xl p-2">
                    <CardContent className="pt-6">
                      <p className="italic text-muted-foreground text-sm leading-relaxed mb-4">"{t.text}"</p>
                      <div className="flex items-center gap-3">
                        <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full bg-gray-200" referrerPolicy="no-referrer" />
                        <div>
                          <CardTitle className="text-sm font-bold">{t.name}</CardTitle>
                          <div className="flex gap-0.5">
                            {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3 h-3 fill-accent text-accent" />)}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Articles / Blog Section */}
        <section id="blog" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeIn} className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
              <div className="text-left">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">Latest Articles</h2>
                <p className="text-muted-foreground">Insights and tips to help you on your spiritual and educational journey.</p>
              </div>
              <Button variant="ghost" className="text-primary hover:bg-primary/5 group">
                View All Articles <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  title: "The Importance of Tajweed", 
                  excerpt: "Understanding why proper pronunciation is essential for every Muslim reciting the Holy Quran.",
                  img: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?q=80&w=2070&auto=format&fit=crop",
                  date: "Oct 12, 2023"
                },
                { 
                  title: "Tips for Quran Memorization", 
                  excerpt: "Practical strategies to help you retain verses and stay consistent with your Hifz goals.",
                  img: "https://images.unsplash.com/photo-1584281723351-9d92ff3f8142?q=80&w=2070&auto=format&fit=crop",
                  date: "Oct 08, 2023"
                },
                { 
                  title: "Islamic Ethics for Children", 
                  excerpt: "Teaching the next generation the values of compassion, honesty, and respect through Seerah.",
                  img: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=2070&auto=format&fit=crop",
                  date: "Sep 28, 2023"
                }
              ].map((post, idx) => (
                <motion.div key={idx} {...fadeIn} transition={{ delay: idx * 0.1 }}>
                  <div className="group cursor-pointer">
                    <div className="h-64 rounded-3xl overflow-hidden mb-6 relative">
                      <img 
                        src={post.img} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute bottom-4 left-4">
                        <Badge className="bg-white/90 text-primary backdrop-blur-sm border-none">{post.date}</Badge>
                      </div>
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-primary mb-3 group-hover:text-accent transition-colors">{post.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                    <a href="#" className="text-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Donate Section */}
        <section id="donate" className="py-24 bg-[#FDFCF9] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-border/50 flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <Badge className="bg-accent/10 text-accent border-none mb-6 px-4 py-1">Sadaqah Jariyah</Badge>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6 leading-tight">
                  Support the Spread of <span className="text-accent italic">Quranic Knowledge</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  Your donations help us provide scholarships to underprivileged students, maintain our digital platform, and expand our reach to those in need of spiritual guidance.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="font-medium">Student Scholarships</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="font-medium">Platform Maintenance</span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-[400px] shrink-0">
                <Card className="border-none shadow-2xl bg-primary text-white rounded-3xl overflow-hidden">
                  <CardHeader className="text-center pt-10">
                    <Heart className="w-12 h-12 text-accent mx-auto mb-4 fill-accent" />
                    <CardTitle className="text-2xl font-heading">Make a Donation</CardTitle>
                    <CardDescription className="text-white/60">Choose an amount to contribute</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 pb-10">
                    <div className="grid grid-cols-3 gap-3">
                      {["$10", "$50", "$100"].map((amount) => (
                        <Button 
                          key={amount} 
                          variant="outline" 
                          className="border-white/20 hover:bg-white/10 text-white h-12 rounded-xl"
                          onClick={() => handleCheckout("Donation", amount, 'donation')}
                        >
                          {amount}
                        </Button>
                      ))}
                    </div>
                    <div className="relative">
                      <Input 
                        placeholder="Custom Amount" 
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12 rounded-xl pl-10"
                      />
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">$</span>
                    </div>
                    <Button 
                      className="w-full h-14 bg-accent hover:bg-accent/90 text-white border-none rounded-xl text-lg font-bold shadow-lg shadow-black/20"
                      onClick={() => handleCheckout("Custom Donation", "Flexible", 'donation')}
                    >
                      Donate Now
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-secondary/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeIn} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">Everything you need to know about our online learning platform.</p>
            </motion.div>

            <motion.div {...fadeIn}>
              <Accordion type="single" collapsible className="w-full space-y-4">
                {[
                  { q: "How do online classes work?", a: "Our classes are conducted via high-quality video conferencing tools. You'll have a dedicated tutor for one-on-one sessions where you can interact in real-time, share screens, and use digital whiteboards." },
                  { q: "What are the class timings?", a: "We offer 24/7 flexibility. You can choose a schedule that fits your time zone and daily routine. Our tutors are available globally to accommodate all students." },
                  { q: "Do you offer trial classes?", a: "Yes! We offer a free 30-minute trial session for all new students. This allows you to meet your tutor, assess your level, and experience our teaching methodology." },
                  { q: "What payment methods are accepted?", a: "We accept all major credit/debit cards, PayPal, and bank transfers. Our payment gateway is secure and encrypted for your safety." }
                ].map((item, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="bg-background border border-border rounded-2xl px-6">
                    <AccordionTrigger className="text-left font-heading text-xl hover:text-primary hover:no-underline py-6">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-lg pb-6">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-[#1E351A] text-[#D1D1D1] pt-20 pb-10 relative">
        <div className="absolute inset-0 islamic-pattern opacity-5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <BookOpen className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-heading font-bold tracking-tight text-white">Almustafa Quran</span>
              </div>
              <p className="text-[#D1D1D1]/60 leading-relaxed mb-6 text-sm">
                Empowering Muslims worldwide with accessible, high-quality Quranic education through modern technology and expert scholarship.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all"><Facebook className="w-4 h-4" /></a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all"><Twitter className="w-4 h-4" /></a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all"><Instagram className="w-4 h-4" /></a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all"><Youtube className="w-4 h-4" /></a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold mb-6 text-white uppercase tracking-widest">Useful Links</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-accent transition-colors">Home</a></li>
                <li><a href="#courses" className="hover:text-accent transition-colors">Courses</a></li>
                <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
                <li><a href="#blog" className="hover:text-accent transition-colors">Latest Articles</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold mb-6 text-white uppercase tracking-widest">Contact</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-accent shrink-0" />
                  <span>salam@almustafaquran.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-accent shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold mb-6 text-white uppercase tracking-widest">Payments</h4>
              <div className="flex flex-wrap gap-2">
                <div className="px-2 py-1 bg-white/5 rounded text-[10px] font-bold border border-white/10">VISA</div>
                <div className="px-2 py-1 bg-white/5 rounded text-[10px] font-bold border border-white/10">PAYPAL</div>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-white/10 text-center text-white/40 text-[10px] uppercase tracking-widest">
            <p>© 2024 Almustafa Quran Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Checkout Modal */}
      <Dialog open={isCheckoutOpen} onOpenChange={setIsCheckoutOpen}>
        <DialogContent className="sm:max-w-[500px] rounded-[2rem] p-0 overflow-hidden border-none shadow-2xl">
          <div className="bg-primary p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 islamic-pattern opacity-10" />
            <div className="relative z-10">
              <DialogHeader>
                <DialogTitle className="text-2xl font-heading text-white flex items-center gap-2">
                  <Lock className="w-5 h-5 text-accent" /> Secure Checkout
                </DialogTitle>
                <DialogDescription className="text-white/70">
                  {checkoutItem?.type === 'donation' ? 'Your contribution makes a difference.' : 'Complete your enrollment to start learning.'}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-6 p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{checkoutItem?.title}</span>
                  <span className="text-accent font-bold text-xl">{checkoutItem?.price}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 space-y-6">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="John" className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Doe" className="rounded-xl" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="john@example.com" className="rounded-xl" />
              </div>
            </div>

            <div className="space-y-4">
              <Label>Payment Method</Label>
              <RadioGroup defaultValue="card" className="grid grid-cols-2 gap-4">
                <div>
                  <RadioGroupItem value="card" id="card" className="peer sr-only" />
                  <Label
                    htmlFor="card"
                    className="flex flex-col items-center justify-between rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent/5 hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                  >
                    <CreditCard className="mb-2 h-6 w-6" />
                    Card
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="paypal" id="paypal" className="peer sr-only" />
                  <Label
                    htmlFor="paypal"
                    className="flex flex-col items-center justify-between rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent/5 hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                  >
                    <div className="font-bold italic text-blue-600 mb-2">PayPal</div>
                    PayPal
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="card-number">Card Number</Label>
                <div className="relative">
                  <Input id="card-number" placeholder="0000 0000 0000 0000" className="rounded-xl pl-10" />
                  <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiry</Label>
                  <Input id="expiry" placeholder="MM/YY" className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" placeholder="123" className="rounded-xl" />
                </div>
              </div>
            </div>

            <Button className="w-full h-14 rounded-xl text-lg font-bold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
              {checkoutItem?.type === 'donation' ? 'Complete Donation' : 'Pay & Enroll'}
            </Button>
            <p className="text-center text-xs text-muted-foreground flex items-center justify-center gap-1">
              <Lock className="w-3 h-3" /> Encrypted & Secure Payment
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
