import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UsersIcon, BookOpenIcon, PaletteIcon, MusicIcon, MicroscopeIcon, GlobeIcon, HeartIcon, TrophyIcon, StarIcon, LightbulbIcon } from "lucide-react"
import { Link } from "react-router-dom"

export default function Activities() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Student <span className="gradient-text">Activities</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover clubs, organizations, and leadership opportunities that enrich your school experience and help you grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/admissions/apply">Join Our Community</Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/contact/visit">Schedule a Visit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Activities Overview Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Activities Overview</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Over 50 clubs and organizations to explore your interests and develop new skills
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <UsersIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Academic Clubs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Science, math, debate, and academic competition teams.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <PaletteIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Arts & Culture</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Visual arts, music, drama, and cultural appreciation clubs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <HeartIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Service & Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Community service, student government, and leadership development.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <TrophyIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Special Interest</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Gaming, robotics, environmental, and hobby-based clubs.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Clubs by Category Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Clubs & Organizations</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find your passion and connect with like-minded students
            </p>
          </div>
          
          <Tabs defaultValue="academic" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="academic">Academic</TabsTrigger>
              <TabsTrigger value="arts">Arts & Culture</TabsTrigger>
              <TabsTrigger value="service">Service</TabsTrigger>
              <TabsTrigger value="special">Special Interest</TabsTrigger>
            </TabsList>
            
            <TabsContent value="academic" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <MicroscopeIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Science Club</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Explore scientific concepts through experiments, competitions, and field trips.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades 6-12</Badge>
                      <Badge variant="secondary" className="text-xs">Meets Weekly</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Advisor:</strong> Dr. Sarah Chen<br/>
                      <strong>Meeting Time:</strong> Thursdays 3:30 PM
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <BookOpenIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Debate Team</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Develop critical thinking and public speaking skills through competitive debate.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades 9-12</Badge>
                      <Badge variant="secondary" className="text-xs">Competitive</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Advisor:</strong> Mr. James Rodriguez<br/>
                      <strong>Meeting Time:</strong> Tuesdays 4:00 PM
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <StarIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Math Olympiad</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Challenge yourself with advanced mathematics and compete in regional competitions.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades 6-12</Badge>
                      <Badge variant="secondary" className="text-xs">Competitive</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Advisor:</strong> Ms. Lisa Wang<br/>
                      <strong>Meeting Time:</strong> Mondays 3:30 PM
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <GlobeIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Model UN</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Learn about international relations and diplomacy through simulation conferences.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades 9-12</Badge>
                      <Badge variant="secondary" className="text-xs">Travel</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Advisor:</strong> Ms. Maria Garcia<br/>
                      <strong>Meeting Time:</strong> Wednesdays 4:00 PM
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <BookOpenIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Literary Magazine</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Create and publish student writing, poetry, and artwork.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades 6-12</Badge>
                      <Badge variant="secondary" className="text-xs">Creative</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Advisor:</strong> Ms. Jennifer Lee<br/>
                      <strong>Meeting Time:</strong> Fridays 3:30 PM
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <LightbulbIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Robotics Club</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Design, build, and program robots for competitions and challenges.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades 6-12</Badge>
                      <Badge variant="secondary" className="text-xs">STEM</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Advisor:</strong> Mr. David Thompson<br/>
                      <strong>Meeting Time:</strong> Thursdays 4:00 PM
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="arts" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <PaletteIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Art Club</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Explore various art mediums and techniques in a supportive environment.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades K-12</Badge>
                      <Badge variant="secondary" className="text-xs">Creative</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Advisor:</strong> Ms. Amanda Foster<br/>
                      <strong>Meeting Time:</strong> Tuesdays 3:30 PM
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <MusicIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Jazz Band</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Perform jazz music and develop improvisation skills.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades 9-12</Badge>
                      <Badge variant="secondary" className="text-xs">Audition</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Advisor:</strong> Mr. Kevin Patel<br/>
                      <strong>Meeting Time:</strong> Mondays 4:00 PM
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <UsersIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Drama Club</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Perform in plays, musicals, and develop acting skills.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades 6-12</Badge>
                      <Badge variant="secondary" className="text-xs">Performance</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Advisor:</strong> Ms. Emily Rodriguez<br/>
                      <strong>Meeting Time:</strong> Wednesdays 3:30 PM
                    </p>
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
                      Sing in harmony and perform at school events and concerts.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades 6-12</Badge>
                      <Badge variant="secondary" className="text-xs">Performance</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Advisor:</strong> Ms. Sarah Johnson<br/>
                      <strong>Meeting Time:</strong> Thursdays 3:30 PM
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <PaletteIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Photography Club</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Learn photography techniques and capture school events.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades 9-12</Badge>
                      <Badge variant="secondary" className="text-xs">Creative</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Advisor:</strong> Mr. Michael Chen<br/>
                      <strong>Meeting Time:</strong> Fridays 4:00 PM
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <GlobeIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Cultural Exchange</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Celebrate diversity and learn about different cultures.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades 6-12</Badge>
                      <Badge variant="secondary" className="text-xs">Cultural</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Advisor:</strong> Ms. Lisa Wang<br/>
                      <strong>Meeting Time:</strong> Tuesdays 4:00 PM
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="service" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <HeartIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Community Service</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Organize volunteer projects and make a positive impact in the community.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades 6-12</Badge>
                      <Badge variant="secondary" className="text-xs">Volunteer</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Advisor:</strong> Ms. Maria Garcia<br/>
                      <strong>Meeting Time:</strong> Mondays 3:30 PM
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <TrophyIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Student Government</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Represent student interests and organize school events and activities.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades 6-12</Badge>
                      <Badge variant="secondary" className="text-xs">Leadership</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Advisor:</strong> Mr. Robert Kim<br/>
                      <strong>Meeting Time:</strong> Wednesdays 4:00 PM
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <GlobeIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Environmental Club</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Promote environmental awareness and sustainability initiatives.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades 6-12</Badge>
                      <Badge variant="secondary" className="text-xs">Environmental</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Advisor:</strong> Ms. Jennifer Lee<br/>
                      <strong>Meeting Time:</strong> Thursdays 3:30 PM
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <UsersIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Peer Mentoring</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Help younger students succeed academically and socially.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades 9-12</Badge>
                      <Badge variant="secondary" className="text-xs">Mentoring</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Advisor:</strong> Ms. Amanda Foster<br/>
                      <strong>Meeting Time:</strong> Fridays 3:30 PM
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <HeartIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Key Club</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      International service organization focused on leadership and community service.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades 9-12</Badge>
                      <Badge variant="secondary" className="text-xs">International</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Advisor:</strong> Mr. Thomas Brown<br/>
                      <strong>Meeting Time:</strong> Tuesdays 4:00 PM
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <StarIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">National Honor Society</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Recognize academic excellence and promote scholarship, service, and character.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades 10-12</Badge>
                      <Badge variant="secondary" className="text-xs">Invitation</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Advisor:</strong> Ms. Emily Rodriguez<br/>
                      <strong>Meeting Time:</strong> Monthly
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="special" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <LightbulbIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Gaming Club</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Play board games, video games, and develop strategic thinking skills.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades 6-12</Badge>
                      <Badge variant="secondary" className="text-xs">Recreation</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Advisor:</strong> Mr. David Thompson<br/>
                      <strong>Meeting Time:</strong> Fridays 3:30 PM
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <MicroscopeIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Chess Club</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Learn and play chess, participate in tournaments and competitions.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades K-12</Badge>
                      <Badge variant="secondary" className="text-xs">Strategy</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Advisor:</strong> Ms. Lisa Wang<br/>
                      <strong>Meeting Time:</strong> Wednesdays 3:30 PM
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <GlobeIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Cooking Club</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Learn cooking techniques and explore different cuisines from around the world.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades 6-12</Badge>
                      <Badge variant="secondary" className="text-xs">Culinary</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Advisor:</strong> Ms. Maria Garcia<br/>
                      <strong>Meeting Time:</strong> Thursdays 4:00 PM
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <BookOpenIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Book Club</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Read and discuss books, share recommendations, and explore different genres.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades 6-12</Badge>
                      <Badge variant="secondary" className="text-xs">Reading</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Advisor:</strong> Ms. Jennifer Lee<br/>
                      <strong>Meeting Time:</strong> Mondays 3:30 PM
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <StarIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Anime Club</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Watch and discuss anime, learn about Japanese culture, and create fan art.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades 6-12</Badge>
                      <Badge variant="secondary" className="text-xs">Cultural</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Advisor:</strong> Mr. Kevin Patel<br/>
                      <strong>Meeting Time:</strong> Tuesdays 3:30 PM
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <TrophyIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Investment Club</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Learn about financial markets, investing strategies, and economic principles.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades 9-12</Badge>
                      <Badge variant="secondary" className="text-xs">Finance</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Advisor:</strong> Mr. James Miller<br/>
                      <strong>Meeting Time:</strong> Fridays 4:00 PM
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Leadership Opportunities Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Leadership Opportunities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Develop leadership skills and make a positive impact on your school community
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-sm">Student Government</Badge>
                  <CardTitle className="text-xl">Class Officers</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Represent your class and organize grade-level activities and events.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• President, Vice President, Secretary, Treasurer</li>
                  <li>• Organize class events and fundraisers</li>
                  <li>• Represent student interests</li>
                  <li>• Develop leadership and communication skills</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-sm">Peer Support</Badge>
                  <CardTitle className="text-xl">Peer Mentors</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Help younger students succeed academically and socially.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Mentor elementary and middle school students</li>
                  <li>• Provide academic support and guidance</li>
                  <li>• Serve as positive role models</li>
                  <li>• Develop empathy and teaching skills</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-sm">Service</Badge>
                  <CardTitle className="text-xl">Service Leaders</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Lead community service projects and volunteer initiatives.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Organize community service projects</li>
                  <li>• Coordinate volunteer opportunities</li>
                  <li>• Lead fundraising campaigns</li>
                  <li>• Make a positive community impact</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-sm">Academic</Badge>
                  <CardTitle className="text-xl">Academic Leaders</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Lead academic clubs and represent the school in competitions.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Lead academic clubs and teams</li>
                  <li>• Represent school in competitions</li>
                  <li>• Organize academic events</li>
                  <li>• Mentor other students academically</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-sm">Arts</Badge>
                  <CardTitle className="text-xl">Arts Leaders</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Lead artistic and creative programs and performances.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Direct performances and exhibitions</li>
                  <li>• Lead artistic clubs and groups</li>
                  <li>• Organize cultural events</li>
                  <li>• Mentor younger artists</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-sm">Athletics</Badge>
                  <CardTitle className="text-xl">Athletic Leaders</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Lead sports teams and promote school spirit and sportsmanship.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Captain sports teams</li>
                  <li>• Promote school spirit</li>
                  <li>• Organize athletic events</li>
                  <li>• Mentor younger athletes</li>
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
            Get Involved Today!
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our vibrant community of students and discover your passions through our diverse activities.
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
