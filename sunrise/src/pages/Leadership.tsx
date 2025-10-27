import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GraduationCapIcon, UsersIcon, BookOpenIcon, AwardIcon, MailIcon, PhoneIcon } from "lucide-react"
import { Link } from "react-router-dom"

export default function Leadership() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Leadership <span className="gradient-text">Team</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated professionals who guide our school community toward excellence.
            </p>
          </div>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Principal Message Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Message from Our Principal
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                "At Sunrise School, we believe that every child has unlimited potential waiting to be discovered. 
                Our mission is to provide an environment where students can grow academically, develop strong character, 
                and become confident leaders ready to make a positive impact on the world."
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                "Our dedicated team of educators works tirelessly to ensure that each student receives personalized 
                attention and support. Together, we're building not just a school, but a community where excellence 
                is the standard and every student's success is our shared achievement."
              </p>
              <div className="flex items-center gap-4">
                <Button size="lg" asChild>
                  <Link to="/contact">Contact Principal</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <Card className="card-hover">
              <CardContent className="pt-8">
                <div className="text-center">
                  <Avatar className="h-32 w-32 mx-auto mb-6">
                    <AvatarImage src="/api/placeholder/128/128" alt="Dr. Sarah Johnson" />
                    <AvatarFallback className="text-2xl">SJ</AvatarFallback>
                  </Avatar>
                  <h3 className="text-2xl font-bold mb-2">Dr. Sarah Johnson</h3>
                  <p className="text-lg text-primary mb-4">Principal</p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• Ph.D. in Educational Leadership</p>
                    <p>• 15+ years in education</p>
                    <p>• Former Assistant Superintendent</p>
                  </div>
                  <div className="flex justify-center gap-4 mt-6">
                    <Button variant="outline" size="sm">
                      <MailIcon className="h-4 w-4 mr-2" />
                      Email
                    </Button>
                    <Button variant="outline" size="sm">
                      <PhoneIcon className="h-4 w-4 mr-2" />
                      Call
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Administrative Team Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Administrative Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our experienced administrators ensure smooth operations and student success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardContent className="pt-6">
                <div className="text-center">
                  <Avatar className="h-24 w-24 mx-auto mb-4">
                    <AvatarImage src="/api/placeholder/96/96" alt="Michael Chen" />
                    <AvatarFallback>MC</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold mb-2">Michael Chen</h3>
                  <p className="text-primary mb-3">Assistant Principal</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Oversees student discipline and academic programs
                  </p>
                  <div className="flex justify-center gap-2">
                    <Button variant="outline" size="sm">
                      <MailIcon className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <PhoneIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="pt-6">
                <div className="text-center">
                  <Avatar className="h-24 w-24 mx-auto mb-4">
                    <AvatarImage src="/api/placeholder/96/96" alt="Emily Rodriguez" />
                    <AvatarFallback>ER</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold mb-2">Emily Rodriguez</h3>
                  <p className="text-primary mb-3">Dean of Students</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Manages student life and extracurricular activities
                  </p>
                  <div className="flex justify-center gap-2">
                    <Button variant="outline" size="sm">
                      <MailIcon className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <PhoneIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="pt-6">
                <div className="text-center">
                  <Avatar className="h-24 w-24 mx-auto mb-4">
                    <AvatarImage src="/api/placeholder/96/96" alt="David Thompson" />
                    <AvatarFallback>DT</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold mb-2">David Thompson</h3>
                  <p className="text-primary mb-3">Business Manager</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Handles finances and facility management
                  </p>
                  <div className="flex justify-center gap-2">
                    <Button variant="outline" size="sm">
                      <MailIcon className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <PhoneIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Department Heads Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Department Heads</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our academic leaders guide curriculum development and teaching excellence
            </p>
          </div>
          
          <Tabs defaultValue="elementary" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="elementary">Elementary</TabsTrigger>
              <TabsTrigger value="middle">Middle School</TabsTrigger>
              <TabsTrigger value="high">High School</TabsTrigger>
              <TabsTrigger value="special">Special Programs</TabsTrigger>
            </TabsList>
            
            <TabsContent value="elementary" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/api/placeholder/48/48" alt="Lisa Wang" />
                        <AvatarFallback>LW</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">Lisa Wang</CardTitle>
                        <CardDescription>Elementary Department Head</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Leads K-5 curriculum development and teacher support
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="secondary">K-5</Badge>
                      <Badge variant="secondary">Curriculum</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/api/placeholder/48/48" alt="James Miller" />
                        <AvatarFallback>JM</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">James Miller</CardTitle>
                        <CardDescription>Elementary Math Coordinator</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Specializes in mathematics education and assessment
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="secondary">Math</Badge>
                      <Badge variant="secondary">Assessment</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="middle" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/api/placeholder/48/48" alt="Maria Garcia" />
                        <AvatarFallback>MG</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">Maria Garcia</CardTitle>
                        <CardDescription>Middle School Department Head</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Oversees grades 6-8 academic programs and student transition
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="secondary">6-8</Badge>
                      <Badge variant="secondary">Transition</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/api/placeholder/48/48" alt="Robert Kim" />
                        <AvatarFallback>RK</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">Robert Kim</CardTitle>
                        <CardDescription>Science Coordinator</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Leads science curriculum and laboratory programs
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="secondary">Science</Badge>
                      <Badge variant="secondary">Labs</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="high" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/api/placeholder/48/48" alt="Jennifer Lee" />
                        <AvatarFallback>JL</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">Jennifer Lee</CardTitle>
                        <CardDescription>High School Department Head</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Manages grades 9-12 programs and college preparation
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="secondary">9-12</Badge>
                      <Badge variant="secondary">College Prep</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/api/placeholder/48/48" alt="Thomas Brown" />
                        <AvatarFallback>TB</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">Thomas Brown</CardTitle>
                        <CardDescription>College Counselor</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Provides college guidance and application support
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="secondary">Counseling</Badge>
                      <Badge variant="secondary">Applications</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="special" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/api/placeholder/48/48" alt="Amanda Foster" />
                        <AvatarFallback>AF</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">Amanda Foster</CardTitle>
                        <CardDescription>Special Education Director</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Oversees special education services and accommodations
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="secondary">Special Ed</Badge>
                      <Badge variant="secondary">Support</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/api/placeholder/48/48" alt="Kevin Patel" />
                        <AvatarFallback>KP</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">Kevin Patel</CardTitle>
                        <CardDescription>Gifted Program Coordinator</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Manages gifted and talented education programs
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="secondary">Gifted</Badge>
                      <Badge variant="secondary">Enrichment</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Call to Action Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Connect with Our Leadership Team
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Have questions or want to learn more? Our leadership team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/contact/visit">Schedule a Meeting</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
