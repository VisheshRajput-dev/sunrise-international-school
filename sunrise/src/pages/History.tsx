import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { CalendarIcon, AwardIcon, UsersIcon, BookOpenIcon, StarIcon, TrophyIcon, GraduationCapIcon } from "lucide-react"
import { Link } from "react-router-dom"

export default function History() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              School <span className="gradient-text">History</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover our rich heritage, traditions, and the journey that shaped Sunrise School.
            </p>
          </div>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Founding Story Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Our Founding Story
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Sunrise School was founded in 1985 by a group of visionary educators and community leaders 
                who believed that every child deserved access to exceptional education. What started as a 
                small elementary school with just 50 students has grown into a comprehensive K-12 institution 
                serving over 1,200 students today.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our founders envisioned a school that would combine academic rigor with character development, 
                creating an environment where students could thrive both intellectually and personally. This 
                vision continues to guide us today as we prepare students for success in an ever-changing world.
              </p>
              <div className="flex items-center gap-4">
                <Button size="lg" asChild>
                  <Link to="/about">Learn More</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact/visit">Visit Our Campus</Link>
                </Button>
              </div>
            </div>
            <Card className="card-hover">
              <CardContent className="pt-8">
                <div className="text-center">
                  <div className="mx-auto mb-6 p-4 bg-primary/10 rounded-full w-fit">
                    <BookOpenIcon className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Founded in 1985</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Original Students:</span>
                      <span className="font-semibold">50</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Current Students:</span>
                      <span className="font-semibold">1,200+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Faculty Members:</span>
                      <span className="font-semibold">85</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Years of Excellence:</span>
                      <span className="font-semibold">39</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Timeline Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Key Milestones</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Important moments that shaped our school's journey
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="shrink-0">
                <Card className="w-64 card-hover">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-3 p-2 bg-primary/10 rounded-full w-fit">
                      <CalendarIcon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">1985</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      School founded with elementary program
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">The Beginning</h3>
                <p className="text-muted-foreground">
                  Sunrise School opened its doors with a vision to provide exceptional elementary education 
                  to the community. The original campus consisted of three classrooms and a small library.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="shrink-0">
                <Card className="w-64 card-hover">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-3 p-2 bg-primary/10 rounded-full w-fit">
                      <UsersIcon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">1995</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      Middle School program added
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Expansion</h3>
                <p className="text-muted-foreground">
                  Responding to community needs, we expanded to include middle school grades 6-8, 
                  establishing our reputation for academic excellence and character development.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="shrink-0">
                <Card className="w-64 card-hover">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-3 p-2 bg-primary/10 rounded-full w-fit">
                      <GraduationCapIcon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">2005</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      High School program launched
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Complete K-12</h3>
                <p className="text-muted-foreground">
                  The addition of high school grades 9-12 completed our comprehensive educational program, 
                  offering students a seamless journey from kindergarten to graduation.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="shrink-0">
                <Card className="w-64 card-hover">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-3 p-2 bg-primary/10 rounded-full w-fit">
                      <AwardIcon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">2015</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      National recognition achieved
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Excellence Recognized</h3>
                <p className="text-muted-foreground">
                  Sunrise School received national recognition for academic excellence and innovative 
                  teaching methods, establishing our reputation as a leading educational institution.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="shrink-0">
                <Card className="w-64 card-hover">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-3 p-2 bg-primary/10 rounded-full w-fit">
                      <StarIcon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">2020</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      Technology integration
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Digital Innovation</h3>
                <p className="text-muted-foreground">
                  We embraced technology-enhanced learning, implementing cutting-edge educational tools 
                  and preparing students for the digital age while maintaining our core values.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Achievements Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Achievements</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Recognition and accomplishments that reflect our commitment to excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <TrophyIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Academic Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base mb-4">
                  Consistently ranked in top 10% of schools statewide
                </CardDescription>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">SAT Average:</span>
                    <span className="font-semibold">1350</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">AP Pass Rate:</span>
                    <span className="font-semibold">92%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">College Acceptance:</span>
                    <span className="font-semibold">98%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <AwardIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Awards & Recognition</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base mb-4">
                  National and state-level recognition for excellence
                </CardDescription>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Blue Ribbon School</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">STEM Excellence</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Character Award</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <UsersIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Community Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base mb-4">
                  Making a positive difference in our community
                </CardDescription>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Service Hours:</span>
                    <span className="font-semibold">15,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Scholarships:</span>
                    <span className="font-semibold">$2M+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Alumni Success:</span>
                    <span className="font-semibold">95%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Traditions Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">School Traditions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Time-honored traditions that unite our community and celebrate our heritage
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-sm">Annual</Badge>
                  <CardTitle className="text-xl">Founder's Day Celebration</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Every September, we celebrate our founding with a special assembly, 
                  alumni recognition, and community service projects.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Alumni guest speakers</li>
                  <li>• Student presentations</li>
                  <li>• Community service awards</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-sm">Monthly</Badge>
                  <CardTitle className="text-xl">Character Recognition</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Monthly assemblies recognize students who exemplify our core values 
                  of integrity, respect, responsibility, and compassion.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Student nominations</li>
                  <li>• Character awards</li>
                  <li>• Community recognition</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-sm">Seasonal</Badge>
                  <CardTitle className="text-xl">Sunrise Spirit Week</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  A week-long celebration of school spirit featuring themed days, 
                  competitions, and community building activities.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Themed dress-up days</li>
                  <li>• Class competitions</li>
                  <li>• Spirit rally</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-sm">Graduation</Badge>
                  <CardTitle className="text-xl">Legacy Ceremony</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Graduating seniors pass on their wisdom and school spirit to incoming 
                  students in a meaningful ceremony.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Senior speeches</li>
                  <li>• Mentorship program</li>
                  <li>• Legacy projects</li>
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
            Become Part of Our History
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our community and help us continue our tradition of excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/admissions/apply">Apply Now</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/contact/visit">Schedule a Tour</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
