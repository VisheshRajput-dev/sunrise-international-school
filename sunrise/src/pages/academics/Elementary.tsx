import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BookOpenIcon, UsersIcon, HeartIcon, LightbulbIcon, ClockIcon, StarIcon, GraduationCapIcon } from "lucide-react"
import { Link } from "react-router-dom"

export default function Elementary() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Elementary <span className="gradient-text">School</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Building strong foundations in reading, writing, mathematics, and critical thinking skills for grades K-5.
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
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Program Overview Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Program Overview</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive curriculum designed to nurture young minds and develop essential skills
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <BookOpenIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Core Academics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Reading, writing, mathematics, science, and social studies with hands-on learning experiences.
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
                  Social-emotional learning and character education integrated throughout the curriculum.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <LightbulbIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Creative Arts</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Art, music, and physical education programs that foster creativity and physical wellness.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <UsersIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Small Class Sizes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Low student-to-teacher ratios ensure personalized attention and individual support.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Grade Level Details Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Grade Level Programs</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Age-appropriate curriculum and activities tailored to each developmental stage
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="kindergarten">
              <AccordionTrigger className="text-xl">
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">K</Badge>
                  <span>Kindergarten</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid md:grid-cols-2 gap-6 pt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Academic Focus</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Letter recognition and phonics</li>
                        <li>• Number sense and counting</li>
                        <li>• Fine motor skill development</li>
                        <li>• Social skills and cooperation</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Special Programs</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Story time and library visits</li>
                        <li>• Music and movement</li>
                        <li>• Art exploration</li>
                        <li>• Outdoor play and discovery</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="first-second">
              <AccordionTrigger className="text-xl">
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">1-2</Badge>
                  <span>First & Second Grade</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid md:grid-cols-2 gap-6 pt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Academic Focus</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Reading fluency and comprehension</li>
                        <li>• Writing skills and creative expression</li>
                        <li>• Addition, subtraction, and problem-solving</li>
                        <li>• Science exploration and observation</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Special Programs</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Computer literacy introduction</li>
                        <li>• Physical education and sports</li>
                        <li>• Art and craft projects</li>
                        <li>• Field trips and hands-on learning</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="third-fourth">
              <AccordionTrigger className="text-xl">
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">3-4</Badge>
                  <span>Third & Fourth Grade</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid md:grid-cols-2 gap-6 pt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Academic Focus</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Advanced reading comprehension</li>
                        <li>• Essay writing and research skills</li>
                        <li>• Multiplication, division, and fractions</li>
                        <li>• Social studies and geography</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Special Programs</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Science fair participation</li>
                        <li>• Music and band programs</li>
                        <li>• Student council opportunities</li>
                        <li>• Technology integration</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="fifth">
              <AccordionTrigger className="text-xl">
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">5</Badge>
                  <span>Fifth Grade</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid md:grid-cols-2 gap-6 pt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Academic Focus</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Literature analysis and discussion</li>
                        <li>• Research projects and presentations</li>
                        <li>• Decimals, percentages, and geometry</li>
                        <li>• American history and government</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Special Programs</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Leadership development</li>
                        <li>• Middle school preparation</li>
                        <li>• Community service projects</li>
                        <li>• Advanced technology skills</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Daily Schedule Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Daily Schedule</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A balanced day that combines academics, creativity, and physical activity
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <ClockIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Morning Schedule</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">8:00 - 8:30 AM</span>
                    <span className="text-sm text-muted-foreground">Arrival & Morning Work</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">8:30 - 9:30 AM</span>
                    <span className="text-sm text-muted-foreground">Language Arts</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">9:30 - 10:30 AM</span>
                    <span className="text-sm text-muted-foreground">Mathematics</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">10:30 - 10:45 AM</span>
                    <span className="text-sm text-muted-foreground">Recess</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <ClockIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Afternoon Schedule</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">10:45 - 11:45 AM</span>
                    <span className="text-sm text-muted-foreground">Science/Social Studies</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">11:45 - 12:30 PM</span>
                    <span className="text-sm text-muted-foreground">Lunch</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">12:30 - 1:30 PM</span>
                    <span className="text-sm text-muted-foreground">Special Classes</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">1:30 - 2:30 PM</span>
                    <span className="text-sm text-muted-foreground">Independent Work</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Special Programs Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Special Programs</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Enrichment opportunities that enhance learning and personal development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-sm">Arts</Badge>
                  <CardTitle className="text-xl">Visual Arts</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Creative expression through drawing, painting, sculpture, and digital art.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Weekly art classes</li>
                  <li>• Student art exhibitions</li>
                  <li>• Community art projects</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-sm">Music</Badge>
                  <CardTitle className="text-xl">Music Education</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Introduction to music theory, instruments, and performance opportunities.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• General music classes</li>
                  <li>• Beginning band (4th-5th grade)</li>
                  <li>• Choir and performance groups</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-sm">STEM</Badge>
                  <CardTitle className="text-xl">STEM Exploration</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Hands-on science, technology, engineering, and mathematics activities.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Science lab experiments</li>
                  <li>• Computer programming basics</li>
                  <li>• Engineering challenges</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-sm">Sports</Badge>
                  <CardTitle className="text-xl">Physical Education</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Development of physical fitness, coordination, and teamwork skills.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Daily PE classes</li>
                  <li>• Intramural sports</li>
                  <li>• Fitness assessments</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-sm">Library</Badge>
                  <CardTitle className="text-xl">Library & Reading</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Fostering a love of reading and developing research skills.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Weekly library visits</li>
                  <li>• Reading incentive programs</li>
                  <li>• Author visits and book fairs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-sm">Support</Badge>
                  <CardTitle className="text-xl">Learning Support</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Additional support for students who need extra help or enrichment.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Reading intervention</li>
                  <li>• Math tutoring</li>
                  <li>• Gifted and talented programs</li>
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
            Ready to Start Your Child's Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our elementary program and give your child the foundation for lifelong success.
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
