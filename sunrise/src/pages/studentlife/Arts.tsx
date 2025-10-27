import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PaletteIcon, MusicIcon, UsersIcon, StarIcon, CalendarIcon, MapPinIcon, ClockIcon, AwardIcon } from "lucide-react"
import { Link } from "react-router-dom"

export default function Arts() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">Arts</span> & Music
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore your creative potential through our comprehensive arts and music programs, performances, and exhibitions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/admissions/apply">Join Our Programs</Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/contact/visit">Schedule a Visit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Arts Overview Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Arts & Music Overview</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive programs fostering creativity, artistic expression, and cultural appreciation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <PaletteIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Visual Arts</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Drawing, painting, sculpture, digital art, and photography programs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <MusicIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Music Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Band, choir, orchestra, and individual instrument instruction.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <UsersIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Performing Arts</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Drama, theater, dance, and public speaking programs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <StarIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Exhibitions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Student art shows, concerts, plays, and cultural events.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Programs Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Arts Programs</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our diverse arts and music programs by category
            </p>
          </div>
          
          <Tabs defaultValue="visual" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="visual">Visual Arts</TabsTrigger>
              <TabsTrigger value="music">Music</TabsTrigger>
              <TabsTrigger value="performing">Performing Arts</TabsTrigger>
            </TabsList>
            
            <TabsContent value="visual" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <PaletteIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Drawing & Painting</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Learn fundamental drawing and painting techniques using various mediums.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades K-12</Badge>
                      <Badge variant="secondary" className="text-xs">Beginner to Advanced</Badge>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Instructor:</span>
                        <span className="font-semibold">Ms. Amanda Foster</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Schedule:</span>
                        <span className="font-semibold">Tuesdays & Thursdays</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Time:</span>
                        <span className="font-semibold">3:30 - 5:00 PM</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <StarIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Sculpture & 3D Art</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Create three-dimensional artworks using clay, wood, metal, and mixed media.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades 6-12</Badge>
                      <Badge variant="secondary" className="text-xs">Intermediate</Badge>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Instructor:</span>
                        <span className="font-semibold">Mr. David Thompson</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Schedule:</span>
                        <span className="font-semibold">Mondays & Wednesdays</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Time:</span>
                        <span className="font-semibold">4:00 - 5:30 PM</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <PaletteIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Digital Art</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Create digital artwork using tablets, software, and graphic design tools.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades 9-12</Badge>
                      <Badge variant="secondary" className="text-xs">Advanced</Badge>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Instructor:</span>
                        <span className="font-semibold">Ms. Jennifer Lee</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Schedule:</span>
                        <span className="font-semibold">Fridays</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Time:</span>
                        <span className="font-semibold">3:30 - 5:00 PM</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <StarIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Photography</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Learn photography techniques, composition, and digital editing.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades 6-12</Badge>
                      <Badge variant="secondary" className="text-xs">All Levels</Badge>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Instructor:</span>
                        <span className="font-semibold">Mr. Michael Chen</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Schedule:</span>
                        <span className="font-semibold">Saturdays</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Time:</span>
                        <span className="font-semibold">10:00 AM - 12:00 PM</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <PaletteIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Ceramics</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Create pottery and ceramic artworks using wheel throwing and hand-building techniques.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades 6-12</Badge>
                      <Badge variant="secondary" className="text-xs">All Levels</Badge>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Instructor:</span>
                        <span className="font-semibold">Ms. Lisa Wang</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Schedule:</span>
                        <span className="font-semibold">Tuesdays & Thursdays</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Time:</span>
                        <span className="font-semibold">4:00 - 5:30 PM</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <StarIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Art History</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Study art movements, famous artists, and cultural significance of art.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades 9-12</Badge>
                      <Badge variant="secondary" className="text-xs">Academic</Badge>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Instructor:</span>
                        <span className="font-semibold">Dr. Sarah Johnson</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Schedule:</span>
                        <span className="font-semibold">Mondays</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Time:</span>
                        <span className="font-semibold">4:00 - 5:00 PM</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="music" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <MusicIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Concert Band</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Learn to play wind and percussion instruments in a large ensemble setting.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades 6-12</Badge>
                      <Badge variant="secondary" className="text-xs">All Levels</Badge>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Director:</span>
                        <span className="font-semibold">Mr. Kevin Patel</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Schedule:</span>
                        <span className="font-semibold">Mondays & Wednesdays</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Time:</span>
                        <span className="font-semibold">3:30 - 4:30 PM</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <MusicIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Choir</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Develop vocal skills and perform in various musical styles and languages.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades 6-12</Badge>
                      <Badge variant="secondary" className="text-xs">All Levels</Badge>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Director:</span>
                        <span className="font-semibold">Ms. Sarah Johnson</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Schedule:</span>
                        <span className="font-semibold">Tuesdays & Thursdays</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Time:</span>
                        <span className="font-semibold">3:30 - 4:30 PM</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <MusicIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Orchestra</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Play string, wind, and percussion instruments in a full orchestra setting.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades 6-12</Badge>
                      <Badge variant="secondary" className="text-xs">Intermediate</Badge>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Director:</span>
                        <span className="font-semibold">Ms. Emily Rodriguez</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Schedule:</span>
                        <span className="font-semibold">Mondays & Fridays</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Time:</span>
                        <span className="font-semibold">4:00 - 5:00 PM</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <StarIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Jazz Band</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Explore jazz music, improvisation, and contemporary musical styles.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades 9-12</Badge>
                      <Badge variant="secondary" className="text-xs">Advanced</Badge>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Director:</span>
                        <span className="font-semibold">Mr. Kevin Patel</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Schedule:</span>
                        <span className="font-semibold">Tuesdays</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Time:</span>
                        <span className="font-semibold">4:30 - 5:30 PM</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <MusicIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Piano Lessons</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Individual piano instruction for students of all skill levels.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades K-12</Badge>
                      <Badge variant="secondary" className="text-xs">Individual</Badge>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Instructor:</span>
                        <span className="font-semibold">Ms. Maria Garcia</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Schedule:</span>
                        <span className="font-semibold">By Appointment</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span className="font-semibold">30-45 minutes</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <MusicIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Music Theory</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Study music fundamentals, composition, and advanced musical concepts.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades 9-12</Badge>
                      <Badge variant="secondary" className="text-xs">Academic</Badge>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Instructor:</span>
                        <span className="font-semibold">Dr. Sarah Johnson</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Schedule:</span>
                        <span className="font-semibold">Wednesdays</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Time:</span>
                        <span className="font-semibold">4:00 - 5:00 PM</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="performing" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <UsersIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Drama Club</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Develop acting skills and perform in plays, musicals, and dramatic productions.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades 6-12</Badge>
                      <Badge variant="secondary" className="text-xs">All Levels</Badge>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Director:</span>
                        <span className="font-semibold">Ms. Emily Rodriguez</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Schedule:</span>
                        <span className="font-semibold">Mondays & Wednesdays</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Time:</span>
                        <span className="font-semibold">3:30 - 5:00 PM</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <StarIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Musical Theater</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Combine acting, singing, and dancing in full-scale musical productions.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades 9-12</Badge>
                      <Badge variant="secondary" className="text-xs">Audition Required</Badge>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Director:</span>
                        <span className="font-semibold">Ms. Emily Rodriguez</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Schedule:</span>
                        <span className="font-semibold">Tuesdays & Thursdays</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Time:</span>
                        <span className="font-semibold">4:00 - 6:00 PM</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <UsersIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Dance Company</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Learn various dance styles including ballet, jazz, modern, and hip-hop.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades 6-12</Badge>
                      <Badge variant="secondary" className="text-xs">All Levels</Badge>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Instructor:</span>
                        <span className="font-semibold">Ms. Amanda Foster</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Schedule:</span>
                        <span className="font-semibold">Mondays & Fridays</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Time:</span>
                        <span className="font-semibold">4:00 - 5:30 PM</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <StarIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Public Speaking</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Develop confidence and skills in public speaking and presentation.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades 9-12</Badge>
                      <Badge variant="secondary" className="text-xs">All Levels</Badge>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Instructor:</span>
                        <span className="font-semibold">Mr. James Rodriguez</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Schedule:</span>
                        <span className="font-semibold">Thursdays</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Time:</span>
                        <span className="font-semibold">4:00 - 5:00 PM</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <UsersIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Improv Theater</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Learn improvisational acting techniques and spontaneous performance skills.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades 6-12</Badge>
                      <Badge variant="secondary" className="text-xs">All Levels</Badge>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Instructor:</span>
                        <span className="font-semibold">Mr. David Thompson</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Schedule:</span>
                        <span className="font-semibold">Fridays</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Time:</span>
                        <span className="font-semibold">3:30 - 4:30 PM</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <StarIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Stage Crew</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Learn technical theater skills including lighting, sound, and set design.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades 6-12</Badge>
                      <Badge variant="secondary" className="text-xs">Technical</Badge>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Instructor:</span>
                        <span className="font-semibold">Mr. Michael Chen</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Schedule:</span>
                        <span className="font-semibold">As Needed</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Time:</span>
                        <span className="font-semibold">Variable</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Upcoming Events Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't miss our upcoming performances, exhibitions, and cultural events
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <CalendarIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-lg">Fall Art Exhibition</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Student artwork showcase featuring paintings, sculptures, and digital art.
                </CardDescription>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Date:</span>
                    <span className="font-semibold">November 15-17</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Time:</span>
                    <span className="font-semibold">6:00 - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Location:</span>
                    <span className="font-semibold">Art Gallery</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <MusicIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-lg">Winter Concert</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Holiday concert featuring band, choir, and orchestra performances.
                </CardDescription>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Date:</span>
                    <span className="font-semibold">December 12</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Time:</span>
                    <span className="font-semibold">7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Location:</span>
                    <span className="font-semibold">Main Auditorium</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <UsersIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-lg">Spring Musical</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Full-scale musical production featuring drama and musical theater students.
                </CardDescription>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Date:</span>
                    <span className="font-semibold">March 20-22</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Time:</span>
                    <span className="font-semibold">7:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Location:</span>
                    <span className="font-semibold">Main Auditorium</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <StarIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-lg">Dance Recital</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Annual dance company performance showcasing various dance styles.
                </CardDescription>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Date:</span>
                    <span className="font-semibold">April 25</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Time:</span>
                    <span className="font-semibold">6:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Location:</span>
                    <span className="font-semibold">Main Auditorium</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <PaletteIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-lg">Photography Show</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Student photography exhibition featuring digital and film photography.
                </CardDescription>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Date:</span>
                    <span className="font-semibold">May 10-12</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Time:</span>
                    <span className="font-semibold">5:00 - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Location:</span>
                    <span className="font-semibold">Art Gallery</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <AwardIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-lg">Arts Awards Ceremony</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Recognition ceremony honoring outstanding student artists and performers.
                </CardDescription>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Date:</span>
                    <span className="font-semibold">May 30</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Time:</span>
                    <span className="font-semibold">6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Location:</span>
                    <span className="font-semibold">Main Auditorium</span>
                  </div>
                </div>
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
            Express Your Creativity!
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our vibrant arts community and discover your artistic talents.
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
