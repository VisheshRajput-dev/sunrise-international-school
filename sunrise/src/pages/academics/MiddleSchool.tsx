import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpenIcon, CalculatorIcon, MicroscopeIcon, GlobeIcon, PaletteIcon, MusicIcon, UsersIcon, TrophyIcon } from "lucide-react"
import { Link } from "react-router-dom"

export default function MiddleSchool() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Middle <span className="gradient-text">School</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Preparing students for high school success through rigorous academics, character development, and exploration of interests.
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
              A comprehensive curriculum designed to challenge students and prepare them for high school success
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
                  Advanced coursework in English, mathematics, science, and social studies with honors options.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <UsersIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Character Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Leadership opportunities, community service, and social-emotional learning programs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <PaletteIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Electives & Arts</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Wide variety of elective courses including art, music, technology, and foreign languages.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <TrophyIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Extracurriculars</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Sports teams, clubs, student government, and special interest groups.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Core Subjects Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Core Subjects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Rigorous academic coursework that builds critical thinking and problem-solving skills
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <BookOpenIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">English Language Arts</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Advanced reading comprehension, writing skills, and literary analysis.
                </CardDescription>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">Grade 6</Badge>
                    <span>Literature & Composition</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">Grade 7</Badge>
                    <span>Advanced Writing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">Grade 8</Badge>
                    <span>Honors English</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <CalculatorIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Mathematics</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Progressive math curriculum with honors and accelerated options.
                </CardDescription>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">Grade 6</Badge>
                    <span>Pre-Algebra</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">Grade 7</Badge>
                    <span>Algebra I</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">Grade 8</Badge>
                    <span>Geometry</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <MicroscopeIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Science</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Hands-on laboratory experiences and scientific inquiry methods.
                </CardDescription>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">Grade 6</Badge>
                    <span>Earth Science</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">Grade 7</Badge>
                    <span>Life Science</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">Grade 8</Badge>
                    <span>Physical Science</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <GlobeIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Social Studies</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  World cultures, history, geography, and civic responsibility.
                </CardDescription>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">Grade 6</Badge>
                    <span>World Geography</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">Grade 7</Badge>
                    <span>World History</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">Grade 8</Badge>
                    <span>U.S. History</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Electives Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Elective Courses</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore interests and develop new skills through our diverse elective offerings
            </p>
          </div>
          
          <Tabs defaultValue="arts" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="arts">Arts & Music</TabsTrigger>
              <TabsTrigger value="technology">Technology</TabsTrigger>
              <TabsTrigger value="languages">Languages</TabsTrigger>
              <TabsTrigger value="special">Special Programs</TabsTrigger>
            </TabsList>
            
            <TabsContent value="arts" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <PaletteIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Visual Arts</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Drawing, painting, sculpture, and digital art techniques.
                    </CardDescription>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">Art I</Badge>
                      <Badge variant="secondary" className="text-xs">Art II</Badge>
                      <Badge variant="secondary" className="text-xs">Digital Art</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <MusicIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Music Programs</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Band, choir, orchestra, and music theory courses.
                    </CardDescription>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">Concert Band</Badge>
                      <Badge variant="secondary" className="text-xs">Choir</Badge>
                      <Badge variant="secondary" className="text-xs">Orchestra</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <UsersIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Drama & Theater</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Acting, stagecraft, and theatrical production skills.
                    </CardDescription>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">Drama I</Badge>
                      <Badge variant="secondary" className="text-xs">Drama II</Badge>
                      <Badge variant="secondary" className="text-xs">Stagecraft</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="technology" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <BookOpenIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Computer Science</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Introduction to programming and computer science concepts.
                    </CardDescription>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">Scratch</Badge>
                      <Badge variant="secondary" className="text-xs">Python</Badge>
                      <Badge variant="secondary" className="text-xs">Web Design</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <MicroscopeIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">STEM Lab</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Engineering challenges, robotics, and scientific inquiry.
                    </CardDescription>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">Robotics</Badge>
                      <Badge variant="secondary" className="text-xs">Engineering</Badge>
                      <Badge variant="secondary" className="text-xs">3D Printing</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <GlobeIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Digital Media</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Video production, graphic design, and multimedia skills.
                    </CardDescription>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">Video Editing</Badge>
                      <Badge variant="secondary" className="text-xs">Graphic Design</Badge>
                      <Badge variant="secondary" className="text-xs">Photography</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="languages" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <BookOpenIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Spanish</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Beginning and intermediate Spanish language and culture.
                    </CardDescription>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">Spanish I</Badge>
                      <Badge variant="secondary" className="text-xs">Spanish II</Badge>
                      <Badge variant="secondary" className="text-xs">Conversation</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <GlobeIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">French</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Introduction to French language, culture, and traditions.
                    </CardDescription>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">French I</Badge>
                      <Badge variant="secondary" className="text-xs">French II</Badge>
                      <Badge variant="secondary" className="text-xs">Culture</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <UsersIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Mandarin Chinese</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Basic Mandarin Chinese language and cultural studies.
                    </CardDescription>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">Mandarin I</Badge>
                      <Badge variant="secondary" className="text-xs">Mandarin II</Badge>
                      <Badge variant="secondary" className="text-xs">Calligraphy</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="special" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <TrophyIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Leadership</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Student government, peer mentoring, and leadership development.
                    </CardDescription>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">Student Council</Badge>
                      <Badge variant="secondary" className="text-xs">Peer Mentoring</Badge>
                      <Badge variant="secondary" className="text-xs">Leadership Skills</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <UsersIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Community Service</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Service learning projects and community engagement opportunities.
                    </CardDescription>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">Service Learning</Badge>
                      <Badge variant="secondary" className="text-xs">Volunteer Work</Badge>
                      <Badge variant="secondary" className="text-xs">Social Action</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <BookOpenIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Study Skills</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Academic support, study strategies, and organizational skills.
                    </CardDescription>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">Study Strategies</Badge>
                      <Badge variant="secondary" className="text-xs">Time Management</Badge>
                      <Badge variant="secondary" className="text-xs">Test Prep</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Extracurricular Activities Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Extracurricular Activities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sports, clubs, and special interest groups that enrich the middle school experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-sm">Sports</Badge>
                  <CardTitle className="text-xl">Athletics</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Competitive sports teams and intramural programs for all skill levels.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Basketball (Boys & Girls)</li>
                  <li>• Soccer (Boys & Girls)</li>
                  <li>• Track & Field</li>
                  <li>• Volleyball (Girls)</li>
                  <li>• Cross Country</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-sm">Clubs</Badge>
                  <CardTitle className="text-xl">Student Clubs</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Student-led clubs covering diverse interests and hobbies.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Chess Club</li>
                  <li>• Art Club</li>
                  <li>• Science Club</li>
                  <li>• Book Club</li>
                  <li>• Environmental Club</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-sm">Leadership</Badge>
                  <CardTitle className="text-xl">Student Government</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Leadership opportunities and student voice in school decisions.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Student Council</li>
                  <li>• Class Representatives</li>
                  <li>• Peer Mediation</li>
                  <li>• School Spirit Committee</li>
                  <li>• Community Service Board</li>
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
            Ready for Middle School Success?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our middle school program and prepare for high school with confidence.
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
