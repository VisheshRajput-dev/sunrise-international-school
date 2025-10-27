import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { BookOpenIcon, UsersIcon, HeartIcon, LightbulbIcon, TargetIcon, EyeIcon, StarIcon } from "lucide-react"
import { Link } from "react-router-dom"

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              About <span className="gradient-text">Sunrise School</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover our mission, values, and educational philosophy that guide everything we do.
            </p>
          </div>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Mission & Vision Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <TargetIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl mb-4">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-center leading-relaxed">
                  To provide a transformative educational experience that nurtures academic excellence, 
                  character development, and community engagement, preparing students to become 
                  compassionate leaders and lifelong learners in an ever-changing world.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <EyeIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl mb-4">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-center leading-relaxed">
                  To be a beacon of educational innovation and excellence, where every student 
                  discovers their unique potential, develops strong character, and contributes 
                  meaningfully to their community and the world.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Core Values Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our educational approach and community culture
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

      {/* Educational Philosophy Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Educational Philosophy</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our approach to teaching and learning that shapes every student's journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-sm">Student-Centered</Badge>
                  <CardTitle className="text-xl">Individualized Learning</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  We recognize that every student learns differently and at their own pace. Our teachers adapt their methods to meet individual needs.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Differentiated instruction strategies</li>
                  <li>• Personalized learning plans</li>
                  <li>• Multiple assessment methods</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-sm">Holistic</Badge>
                  <CardTitle className="text-xl">Whole Child Development</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Education extends beyond academics. We nurture intellectual, emotional, social, and physical development.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Social-emotional learning programs</li>
                  <li>• Physical education and wellness</li>
                  <li>• Arts and creative expression</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-sm">Future-Ready</Badge>
                  <CardTitle className="text-xl">21st Century Skills</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  We prepare students for success in a rapidly changing world by developing critical thinking and collaboration skills.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Critical thinking and problem-solving</li>
                  <li>• Communication and collaboration</li>
                  <li>• Digital literacy and technology</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Call to Action Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover how Sunrise School can help your child reach their full potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/admissions/apply">Apply Now</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/contact/visit">Schedule a Visit</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
