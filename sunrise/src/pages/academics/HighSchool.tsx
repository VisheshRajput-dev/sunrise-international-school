import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { GraduationCapIcon, BookOpenIcon, CalculatorIcon, MicroscopeIcon, GlobeIcon, StarIcon, TrophyIcon, UsersIcon } from "lucide-react"
import { Link } from "react-router-dom"

export default function HighSchool() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              High <span className="gradient-text">School</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Preparing students for college, career, and life success through rigorous academics, leadership opportunities, and comprehensive support.
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
              A comprehensive college-preparatory program with advanced coursework and personalized guidance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <GraduationCapIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">College Prep</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Advanced Placement courses, dual enrollment, and comprehensive college counseling.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <StarIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Academic Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Honors courses, research opportunities, and academic competitions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <UsersIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Leadership Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Student government, clubs, community service, and mentorship programs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <TrophyIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Career Pathways</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Career exploration, internships, and specialized programs in various fields.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* AP Courses Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Advanced Placement Courses</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              College-level courses that provide students with advanced academic opportunities
            </p>
          </div>
          
          <Tabs defaultValue="stem" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="stem">STEM</TabsTrigger>
              <TabsTrigger value="humanities">Humanities</TabsTrigger>
              <TabsTrigger value="social">Social Studies</TabsTrigger>
              <TabsTrigger value="languages">Languages</TabsTrigger>
            </TabsList>
            
            <TabsContent value="stem" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <CalculatorIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">AP Calculus AB</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      College-level calculus covering limits, derivatives, and integrals.
                    </CardDescription>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">Grade 11-12</Badge>
                      <Badge variant="secondary" className="text-xs">Prerequisite: Pre-Calc</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <MicroscopeIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">AP Biology</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Advanced study of biological concepts and laboratory techniques.
                    </CardDescription>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">Grade 11-12</Badge>
                      <Badge variant="secondary" className="text-xs">Prerequisite: Biology</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <MicroscopeIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">AP Chemistry</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      College-level chemistry with advanced laboratory work.
                    </CardDescription>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">Grade 11-12</Badge>
                      <Badge variant="secondary" className="text-xs">Prerequisite: Chemistry</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <CalculatorIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">AP Physics 1</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Algebra-based physics covering mechanics and waves.
                    </CardDescription>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">Grade 11-12</Badge>
                      <Badge variant="secondary" className="text-xs">Prerequisite: Algebra II</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <BookOpenIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">AP Computer Science A</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Java programming and computer science principles.
                    </CardDescription>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">Grade 11-12</Badge>
                      <Badge variant="secondary" className="text-xs">Prerequisite: CS Intro</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <CalculatorIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">AP Statistics</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      College-level statistics and data analysis.
                    </CardDescription>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">Grade 11-12</Badge>
                      <Badge variant="secondary" className="text-xs">Prerequisite: Algebra II</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="humanities" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <BookOpenIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">AP English Literature</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Advanced study of literary works and critical analysis.
                    </CardDescription>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">Grade 12</Badge>
                      <Badge variant="secondary" className="text-xs">Prerequisite: English III</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <BookOpenIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">AP English Language</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Rhetorical analysis and advanced composition skills.
                    </CardDescription>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">Grade 11</Badge>
                      <Badge variant="secondary" className="text-xs">Prerequisite: English II</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <StarIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">AP Art History</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Study of art history from ancient to modern times.
                    </CardDescription>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">Grade 11-12</Badge>
                      <Badge variant="secondary" className="text-xs">No Prerequisites</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="social" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <GlobeIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">AP World History</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Comprehensive study of world history from ancient to modern.
                    </CardDescription>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">Grade 10-11</Badge>
                      <Badge variant="secondary" className="text-xs">No Prerequisites</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <GlobeIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">AP U.S. History</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      In-depth study of American history and government.
                    </CardDescription>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">Grade 11</Badge>
                      <Badge variant="secondary" className="text-xs">Prerequisite: U.S. History</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <UsersIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">AP Psychology</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Introduction to psychological principles and research methods.
                    </CardDescription>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">Grade 11-12</Badge>
                      <Badge variant="secondary" className="text-xs">No Prerequisites</Badge>
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
                      <GlobeIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">AP Spanish Language</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Advanced Spanish language and cultural studies.
                    </CardDescription>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">Grade 11-12</Badge>
                      <Badge variant="secondary" className="text-xs">Prerequisite: Spanish III</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <GlobeIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">AP French Language</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Advanced French language and cultural studies.
                    </CardDescription>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">Grade 11-12</Badge>
                      <Badge variant="secondary" className="text-xs">Prerequisite: French III</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* College Preparation Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">College Preparation</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive support to help students succeed in college applications and beyond
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <GraduationCapIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">College Counseling</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Personalized guidance for college selection, applications, and financial aid.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Individual college counseling sessions</li>
                  <li>• College application assistance</li>
                  <li>• Financial aid and scholarship guidance</li>
                  <li>• College visit coordination</li>
                  <li>• Essay writing support</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <StarIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Dual Enrollment</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Earn college credit while in high school through partner universities.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Partnership with local universities</li>
                  <li>• College-level courses on campus</li>
                  <li>• Transferable college credits</li>
                  <li>• Reduced college costs</li>
                  <li>• Early college experience</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <BookOpenIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">SAT/ACT Preparation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Comprehensive test preparation programs and practice opportunities.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• In-school test prep courses</li>
                  <li>• Practice test sessions</li>
                  <li>• Individual tutoring available</li>
                  <li>• Test-taking strategies</li>
                  <li>• Score improvement tracking</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <TrophyIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Career Exploration</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Programs to help students explore career options and develop professional skills.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Career assessment tools</li>
                  <li>• Internship opportunities</li>
                  <li>• Guest speaker series</li>
                  <li>• Job shadowing programs</li>
                  <li>• Professional development workshops</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Graduation Requirements Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Graduation Requirements</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Academic requirements and credit distribution for high school graduation
            </p>
          </div>
          
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Credit Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Subject Area</TableHead>
                    <TableHead>Credits Required</TableHead>
                    <TableHead>Notes</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">English</TableCell>
                    <TableCell>4 credits</TableCell>
                    <TableCell>Must include English I-IV</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Mathematics</TableCell>
                    <TableCell>4 credits</TableCell>
                    <TableCell>Must include Algebra I, Geometry, Algebra II</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Science</TableCell>
                    <TableCell>3 credits</TableCell>
                    <TableCell>Must include Biology, Chemistry or Physics</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Social Studies</TableCell>
                    <TableCell>3 credits</TableCell>
                    <TableCell>Must include U.S. History, Government</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Foreign Language</TableCell>
                    <TableCell>2 credits</TableCell>
                    <TableCell>Same language, consecutive years</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Physical Education</TableCell>
                    <TableCell>1 credit</TableCell>
                    <TableCell>Health and PE courses</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Electives</TableCell>
                    <TableCell>5 credits</TableCell>
                    <TableCell>Any additional courses</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Total Credits</TableCell>
                    <TableCell className="font-bold">22 credits</TableCell>
                    <TableCell>Minimum for graduation</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Call to Action Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready for High School Excellence?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our high school program and prepare for college and career success.
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
