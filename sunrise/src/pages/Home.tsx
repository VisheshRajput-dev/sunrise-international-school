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
      <section className="relative py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Welcome to <span className="gradient-text">Sunrise School</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Excellence in Education, Character, and Community. Preparing students for success in an ever-changing world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/admissions/apply">Apply Now</Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Mission/Vision Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building tomorrow's leaders through excellence, character, and community
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <BookOpenIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Academic Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Rigorous curriculum designed to challenge and inspire students at every level with innovative teaching methods.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <HeartIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Character Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Building strong values, leadership skills, and ethical decision-making through comprehensive character education.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <UsersIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Community Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Fostering connections between students, families, and the broader community through meaningful engagement.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <LightbulbIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Innovation & Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Embracing new technologies and methodologies to prepare students for the challenges of tomorrow.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Key Programs Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Programs</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive educational pathways designed to nurture every student's potential
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-sm">K-5</Badge>
                  <CardTitle className="text-2xl">Elementary School</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Building strong foundations in reading, writing, mathematics, and critical thinking skills.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li>• Core academic subjects with hands-on learning</li>
                  <li>• Art, music, and physical education programs</li>
                  <li>• Social-emotional learning and character development</li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/academics/elementary">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-sm">6-8</Badge>
                  <CardTitle className="text-2xl">Middle School</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Preparing students for high school with advanced coursework and leadership opportunities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li>• Advanced mathematics and science courses</li>
                  <li>• Elective programs and extracurricular activities</li>
                  <li>• College and career exploration programs</li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/academics/middle">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-sm">9-12</Badge>
                  <CardTitle className="text-2xl">High School</CardTitle>
                </div>
                <CardDescription className="text-base">
                  College preparatory programs and career pathways with comprehensive support systems.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li>• AP and honors courses</li>
                  <li>• College counseling and application support</li>
                  <li>• Internship and career pathway programs</li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/academics/high">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-sm">All Ages</Badge>
                  <CardTitle className="text-2xl">Special Programs</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Gifted education, special needs support, and enrichment programs for diverse learning needs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li>• Gifted and talented education</li>
                  <li>• Special education services</li>
                  <li>• Enrichment and acceleration programs</li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/academics/special">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Contact Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to join our community? We'd love to hear from you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center card-hover">
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <PhoneIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Phone</h3>
                <p className="text-muted-foreground">(555) 123-4567</p>
              </CardContent>
            </Card>

            <Card className="text-center card-hover">
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <MailIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <p className="text-muted-foreground">info@sunriseschool.edu</p>
              </CardContent>
            </Card>

            <Card className="text-center card-hover">
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <MapPinIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Address</h3>
                <p className="text-muted-foreground">123 Education Ave<br />Learning City, LC 12345</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="text-lg px-12 py-6" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50 py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <GraduationCapIcon className="h-6 w-6 text-primary" />
            <h3 className="text-xl font-bold">Sunrise School</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            Excellence in Education, Character, and Community
          </p>
          <p className="text-sm text-muted-foreground">
            © 2024 Sunrise School. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
