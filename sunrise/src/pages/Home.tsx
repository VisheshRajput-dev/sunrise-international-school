import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { BookOpenIcon, UsersIcon, HeartIcon, LightbulbIcon, GraduationCapIcon, PhoneIcon, MailIcon, MapPinIcon } from "lucide-react"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 md:py-32 px-4 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              Welcome to <span className="gradient-text">Sunrise School</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
              Excellence in Education, Character, and Community. Preparing students for success in an ever-changing world.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="text-lg px-10 py-8 btn-premium rounded-xl" asChild>
                <Link to="/admissions/apply">Apply Now</Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-10 py-8 rounded-xl border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Mission/Vision Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-slide-in-left">Our Core Values</h2>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto animate-slide-in-right">
              Building tomorrow's leaders through excellence, character, and community
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-hover glass border-0 shadow-xl animate-scale-in" style={{animationDelay: '0.1s'}}>
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-6 p-4 bg-linear-to-br from-primary/20 to-accent/20 rounded-2xl w-fit animate-float">
                  <BookOpenIcon className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold">Academic Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed">
                  Rigorous curriculum designed to challenge and inspire students at every level with innovative teaching methods.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover glass border-0 shadow-xl animate-scale-in" style={{animationDelay: '0.2s'}}>
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-6 p-4 bg-linear-to-br from-primary/20 to-accent/20 rounded-2xl w-fit animate-float" style={{animationDelay: '0.5s'}}>
                  <HeartIcon className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold">Character Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed">
                  Building strong values, leadership skills, and ethical decision-making through comprehensive character education.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover glass border-0 shadow-xl animate-scale-in" style={{animationDelay: '0.3s'}}>
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-6 p-4 bg-linear-to-br from-primary/20 to-accent/20 rounded-2xl w-fit animate-float" style={{animationDelay: '1s'}}>
                  <UsersIcon className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold">Community Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed">
                  Fostering connections between students, families, and the broader community through meaningful engagement.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover glass border-0 shadow-xl animate-scale-in" style={{animationDelay: '0.4s'}}>
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-6 p-4 bg-linear-to-br from-primary/20 to-accent/20 rounded-2xl w-fit animate-float" style={{animationDelay: '1.5s'}}>
                  <LightbulbIcon className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold">Innovation & Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed">
                  Embracing new technologies and methodologies to prepare students for the challenges of tomorrow.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Key Programs Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-slide-in-left">Our Programs</h2>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto animate-slide-in-right">
              Comprehensive educational pathways designed to nurture every student's potential
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <Card className="card-hover glass border-0 shadow-xl animate-scale-in group" style={{animationDelay: '0.1s'}}>
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="secondary" className="text-sm px-4 py-2 bg-linear-to-r from-primary/20 to-accent/20 border-0">K-5</Badge>
                  <CardTitle className="text-3xl font-bold group-hover:text-primary transition-colors duration-300">Elementary School</CardTitle>
                </div>
                <CardDescription className="text-lg leading-relaxed">
                  Building strong foundations in reading, writing, mathematics, and critical thinking skills.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-base text-muted-foreground mb-6">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Core academic subjects with hands-on learning
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Art, music, and physical education programs
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Social-emotional learning and character development
                  </li>
                </ul>
                <Button variant="outline" className="w-full py-6 text-lg rounded-xl border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300" asChild>
                  <Link to="/academics/elementary">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover glass border-0 shadow-xl animate-scale-in group" style={{animationDelay: '0.2s'}}>
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="secondary" className="text-sm px-4 py-2 bg-linear-to-r from-primary/20 to-accent/20 border-0">6-8</Badge>
                  <CardTitle className="text-3xl font-bold group-hover:text-primary transition-colors duration-300">Middle School</CardTitle>
                </div>
                <CardDescription className="text-lg leading-relaxed">
                  Preparing students for high school with advanced coursework and leadership opportunities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-base text-muted-foreground mb-6">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Advanced mathematics and science courses
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Elective programs and extracurricular activities
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    College and career exploration programs
                  </li>
                </ul>
                <Button variant="outline" className="w-full py-6 text-lg rounded-xl border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300" asChild>
                  <Link to="/academics/middle">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover glass border-0 shadow-xl animate-scale-in group" style={{animationDelay: '0.3s'}}>
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="secondary" className="text-sm px-4 py-2 bg-linear-to-r from-primary/20 to-accent/20 border-0">9-12</Badge>
                  <CardTitle className="text-3xl font-bold group-hover:text-primary transition-colors duration-300">High School</CardTitle>
                </div>
                <CardDescription className="text-lg leading-relaxed">
                  College preparatory programs and career pathways with comprehensive support systems.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-base text-muted-foreground mb-6">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    AP and honors courses
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    College counseling and application support
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Internship and career pathway programs
                  </li>
                </ul>
                <Button variant="outline" className="w-full py-6 text-lg rounded-xl border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300" asChild>
                  <Link to="/academics/high">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover glass border-0 shadow-xl animate-scale-in group" style={{animationDelay: '0.4s'}}>
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="secondary" className="text-sm px-4 py-2 bg-linear-to-r from-primary/20 to-accent/20 border-0">All Ages</Badge>
                  <CardTitle className="text-3xl font-bold group-hover:text-primary transition-colors duration-300">Special Programs</CardTitle>
                </div>
                <CardDescription className="text-lg leading-relaxed">
                  Gifted education, special needs support, and enrichment programs for diverse learning needs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-base text-muted-foreground mb-6">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Gifted and talented education
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Special education services
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Enrichment and acceleration programs
                  </li>
                </ul>
                <Button variant="outline" className="w-full py-6 text-lg rounded-xl border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300" asChild>
                  <Link to="/academics/special">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Contact Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-slide-in-left">Get in Touch</h2>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto animate-slide-in-right">
              Ready to join our community? We'd love to hear from you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center card-hover glass border-0 shadow-xl animate-scale-in" style={{animationDelay: '0.1s'}}>
              <CardContent className="pt-8 pb-8">
                <div className="mx-auto mb-6 p-4 bg-linear-to-br from-primary/20 to-accent/20 rounded-2xl w-fit animate-float">
                  <PhoneIcon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3">Phone</h3>
                <p className="text-muted-foreground text-lg">(555) 123-4567</p>
              </CardContent>
            </Card>

            <Card className="text-center card-hover glass border-0 shadow-xl animate-scale-in" style={{animationDelay: '0.2s'}}>
              <CardContent className="pt-8 pb-8">
                <div className="mx-auto mb-6 p-4 bg-linear-to-br from-primary/20 to-accent/20 rounded-2xl w-fit animate-float" style={{animationDelay: '0.5s'}}>
                  <MailIcon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3">Email</h3>
                <p className="text-muted-foreground text-lg">info@sunriseschool.edu</p>
              </CardContent>
            </Card>

            <Card className="text-center card-hover glass border-0 shadow-xl animate-scale-in" style={{animationDelay: '0.3s'}}>
              <CardContent className="pt-8 pb-8">
                <div className="mx-auto mb-6 p-4 bg-linear-to-br from-primary/20 to-accent/20 rounded-2xl w-fit animate-float" style={{animationDelay: '1s'}}>
                  <MapPinIcon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3">Address</h3>
                <p className="text-muted-foreground text-lg">123 Education Ave<br />Learning City, LC 12345</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="text-xl px-16 py-8 btn-premium rounded-xl" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50 py-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex items-center justify-center gap-3 mb-6 animate-fade-in-up">
            <div className="p-3 bg-linear-to-br from-primary/20 to-accent/20 rounded-xl">
              <GraduationCapIcon className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-3xl font-bold">Sunrise School</h3>
          </div>
          <p className="text-xl text-muted-foreground mb-6 animate-slide-in-left">
            Excellence in Education, Character, and Community
          </p>
          <p className="text-base text-muted-foreground animate-slide-in-right">
            © 2024 Sunrise School. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
