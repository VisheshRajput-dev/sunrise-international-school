import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { StarIcon, HeartIcon, LightbulbIcon, UsersIcon, BookOpenIcon, ShieldIcon, AwardIcon, TargetIcon } from "lucide-react"
import { Link } from "react-router-dom"

export default function SpecialPrograms() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Special <span className="gradient-text">Programs</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Specialized educational programs designed to meet the unique needs of all learners and provide enrichment opportunities.
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
              Comprehensive support and enrichment programs for diverse learning needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <StarIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Gifted Education</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Advanced programs for academically gifted and talented students.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <HeartIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Special Education</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Individualized support for students with learning differences.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <LightbulbIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Enrichment Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Extended learning opportunities and specialized courses.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <UsersIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Support Services</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Counseling, tutoring, and academic support for all students.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Gifted Education Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Gifted Education Program</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced learning opportunities for academically gifted and talented students
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <StarIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Program Features</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>• Accelerated curriculum in core subjects</li>
                  <li>• Advanced placement opportunities</li>
                  <li>• Independent research projects</li>
                  <li>• Mentorship programs with professionals</li>
                  <li>• Academic competitions and contests</li>
                  <li>• Specialized enrichment activities</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <AwardIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Eligibility Requirements</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>• Standardized test scores in 95th percentile</li>
                  <li>• Teacher recommendations</li>
                  <li>• Portfolio of student work</li>
                  <li>• Parent/student interview</li>
                  <li>• Demonstrated academic excellence</li>
                  <li>• Creative or leadership abilities</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="elementary-gifted">
              <AccordionTrigger className="text-xl">
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">K-5</Badge>
                  <span>Elementary Gifted Program</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid md:grid-cols-2 gap-6 pt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Curriculum Focus</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Advanced mathematics and problem-solving</li>
                        <li>• Literature analysis and creative writing</li>
                        <li>• Scientific inquiry and experimentation</li>
                        <li>• Critical thinking and logic</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Special Activities</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Math Olympiad competitions</li>
                        <li>• Science fair projects</li>
                        <li>• Creative writing workshops</li>
                        <li>• Field trips to museums and universities</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="middle-gifted">
              <AccordionTrigger className="text-xl">
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">6-8</Badge>
                  <span>Middle School Gifted Program</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid md:grid-cols-2 gap-6 pt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Advanced Coursework</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Honors-level courses in all subjects</li>
                        <li>• Pre-AP preparation classes</li>
                        <li>• Independent study opportunities</li>
                        <li>• Research methodology training</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Leadership Development</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Student government participation</li>
                        <li>• Peer tutoring programs</li>
                        <li>• Community service projects</li>
                        <li>• Mentorship of younger students</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="high-gifted">
              <AccordionTrigger className="text-xl">
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">9-12</Badge>
                  <span>High School Gifted Program</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid md:grid-cols-2 gap-6 pt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">College Preparation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Full AP course load</li>
                        <li>• Dual enrollment opportunities</li>
                        <li>• College-level research projects</li>
                        <li>• Internship placements</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Specialized Tracks</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• STEM research pathway</li>
                        <li>• Humanities and arts track</li>
                        <li>• Entrepreneurship program</li>
                        <li>• Global studies concentration</li>
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

      {/* Special Education Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Special Education Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive support for students with diverse learning needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <HeartIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Learning Support</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Individualized instruction and accommodations for students with learning disabilities.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Small group instruction</li>
                  <li>• Multi-sensory learning approaches</li>
                  <li>• Assistive technology support</li>
                  <li>• Modified curriculum options</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <ShieldIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Behavioral Support</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Positive behavior interventions and social-emotional learning support.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Behavior intervention plans</li>
                  <li>• Social skills training</li>
                  <li>• Counseling services</li>
                  <li>• Peer support groups</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <UsersIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Inclusion Services</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Support for students with disabilities in general education classrooms.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Co-teaching models</li>
                  <li>• Paraprofessional support</li>
                  <li>• Curriculum modifications</li>
                  <li>• Peer buddy programs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <BookOpenIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Academic Intervention</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Targeted support for students struggling with specific academic areas.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Reading intervention programs</li>
                  <li>• Math tutoring and support</li>
                  <li>• Writing skills development</li>
                  <li>• Study skills instruction</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <TargetIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Transition Services</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Preparation for post-secondary education, employment, and independent living.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Career exploration programs</li>
                  <li>• Job skills training</li>
                  <li>• Independent living skills</li>
                  <li>• Post-secondary planning</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <HeartIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Family Support</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Resources and support services for families of students with special needs.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Parent education workshops</li>
                  <li>• Support group meetings</li>
                  <li>• Resource library access</li>
                  <li>• Advocacy assistance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Enrichment Programs Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Enrichment Programs</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Extended learning opportunities and specialized programs for all students
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-sm">Academic</Badge>
                  <CardTitle className="text-xl">Academic Enrichment</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Advanced coursework and specialized academic programs.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Advanced mathematics courses</li>
                  <li>• Science research programs</li>
                  <li>• Creative writing workshops</li>
                  <li>• Debate and public speaking</li>
                  <li>• Academic competitions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-sm">Arts</Badge>
                  <CardTitle className="text-xl">Arts & Creativity</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Programs that foster creativity and artistic expression.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Visual arts studio programs</li>
                  <li>• Music composition and performance</li>
                  <li>• Theater and drama productions</li>
                  <li>• Digital media and filmmaking</li>
                  <li>• Creative writing and poetry</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-sm">STEM</Badge>
                  <CardTitle className="text-xl">STEM Programs</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Science, technology, engineering, and mathematics enrichment.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Robotics and engineering clubs</li>
                  <li>• Computer programming courses</li>
                  <li>• Science fair and research projects</li>
                  <li>• Mathematics competitions</li>
                  <li>• Environmental science programs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-sm">Leadership</Badge>
                  <CardTitle className="text-xl">Leadership Development</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Programs that develop leadership skills and civic engagement.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Student government training</li>
                  <li>• Community service projects</li>
                  <li>• Peer mentoring programs</li>
                  <li>• Leadership workshops</li>
                  <li>• Social justice initiatives</li>
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
            Find the Right Program for Your Child
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our special programs are designed to meet the unique needs of every learner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/admissions/apply">Apply Now</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/contact/visit">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
