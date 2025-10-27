import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { TrophyIcon, UsersIcon, CalendarIcon, MapPinIcon, ClockIcon, StarIcon, TargetIcon, AwardIcon } from "lucide-react"
import { Link } from "react-router-dom"

export default function Athletics() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">Athletics</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Compete with pride, develop character, and build lasting friendships through our comprehensive athletic programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/admissions/apply">Join Our Teams</Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/contact/visit">Schedule a Visit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Athletics Overview Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Athletics Overview</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive athletic programs for students of all skill levels and interests
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <TrophyIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Competitive Sports</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Varsity and junior varsity teams competing in regional and state championships.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <UsersIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Intramural Sports</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Recreational leagues and tournaments for students who want to play for fun.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <TargetIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Physical Education</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Comprehensive PE program promoting fitness, health, and lifelong wellness.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <StarIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Athletic Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  State championships, individual records, and college athletic scholarships.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Sports Teams Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Sports Teams</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Competitive teams organized by season and skill level
            </p>
          </div>
          
          <Tabs defaultValue="fall" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="fall">Fall Sports</TabsTrigger>
              <TabsTrigger value="winter">Winter Sports</TabsTrigger>
              <TabsTrigger value="spring">Spring Sports</TabsTrigger>
              <TabsTrigger value="year-round">Year-Round</TabsTrigger>
            </TabsList>
            
            <TabsContent value="fall" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <TrophyIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Football</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Varsity and junior varsity football teams competing in regional championships.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades 9-12</Badge>
                      <Badge variant="secondary" className="text-xs">Varsity/JV</Badge>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Coach:</span>
                        <span className="font-semibold">Coach Johnson</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Season:</span>
                        <span className="font-semibold">August - November</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Practice:</span>
                        <span className="font-semibold">Daily 3:30 PM</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <UsersIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Volleyball</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Girls volleyball team with competitive spirit and strong teamwork.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades 9-12</Badge>
                      <Badge variant="secondary" className="text-xs">Girls</Badge>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Coach:</span>
                        <span className="font-semibold">Coach Rodriguez</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Season:</span>
                        <span className="font-semibold">August - October</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Practice:</span>
                        <span className="font-semibold">Daily 4:00 PM</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <TargetIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Cross Country</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Boys and girls cross country teams competing in regional meets.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades 6-12</Badge>
                      <Badge variant="secondary" className="text-xs">Co-ed</Badge>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Coach:</span>
                        <span className="font-semibold">Coach Chen</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Season:</span>
                        <span className="font-semibold">August - November</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Practice:</span>
                        <span className="font-semibold">Daily 3:30 PM</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <TrophyIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Soccer</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Boys and girls soccer teams with competitive regional play.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades 6-12</Badge>
                      <Badge variant="secondary" className="text-xs">Boys/Girls</Badge>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Coach:</span>
                        <span className="font-semibold">Coach Miller</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Season:</span>
                        <span className="font-semibold">August - October</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Practice:</span>
                        <span className="font-semibold">Daily 4:00 PM</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="winter" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <TrophyIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Basketball</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Boys and girls basketball teams competing in regional championships.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades 6-12</Badge>
                      <Badge variant="secondary" className="text-xs">Boys/Girls</Badge>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Coach:</span>
                        <span className="font-semibold">Coach Thompson</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Season:</span>
                        <span className="font-semibold">November - February</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Practice:</span>
                        <span className="font-semibold">Daily 4:00 PM</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <UsersIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Wrestling</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Competitive wrestling program with individual and team competitions.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades 6-12</Badge>
                      <Badge variant="secondary" className="text-xs">Co-ed</Badge>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Coach:</span>
                        <span className="font-semibold">Coach Brown</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Season:</span>
                        <span className="font-semibold">November - February</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Practice:</span>
                        <span className="font-semibold">Daily 3:30 PM</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <StarIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Swimming</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Competitive swimming team with individual and relay events.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades 6-12</Badge>
                      <Badge variant="secondary" className="text-xs">Co-ed</Badge>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Coach:</span>
                        <span className="font-semibold">Coach Garcia</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Season:</span>
                        <span className="font-semibold">November - February</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Practice:</span>
                        <span className="font-semibold">Daily 4:00 PM</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="spring" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <TrophyIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Baseball</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Boys baseball team competing in regional league play.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades 9-12</Badge>
                      <Badge variant="secondary" className="text-xs">Boys</Badge>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Coach:</span>
                        <span className="font-semibold">Coach Lee</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Season:</span>
                        <span className="font-semibold">March - May</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Practice:</span>
                        <span className="font-semibold">Daily 4:00 PM</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <UsersIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Softball</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Girls softball team with competitive regional play.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades 9-12</Badge>
                      <Badge variant="secondary" className="text-xs">Girls</Badge>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Coach:</span>
                        <span className="font-semibold">Coach Wang</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Season:</span>
                        <span className="font-semibold">March - May</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Practice:</span>
                        <span className="font-semibold">Daily 4:00 PM</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <TargetIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Track & Field</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Boys and girls track and field team with individual and relay events.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades 6-12</Badge>
                      <Badge variant="secondary" className="text-xs">Co-ed</Badge>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Coach:</span>
                        <span className="font-semibold">Coach Patel</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Season:</span>
                        <span className="font-semibold">March - May</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Practice:</span>
                        <span className="font-semibold">Daily 3:30 PM</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <TrophyIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Tennis</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Boys and girls tennis teams competing in regional tournaments.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades 6-12</Badge>
                      <Badge variant="secondary" className="text-xs">Boys/Girls</Badge>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Coach:</span>
                        <span className="font-semibold">Coach Foster</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Season:</span>
                        <span className="font-semibold">March - May</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Practice:</span>
                        <span className="font-semibold">Daily 4:00 PM</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="year-round" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <StarIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Cheerleading</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Competitive cheerleading squad supporting all athletic teams.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades 6-12</Badge>
                      <Badge variant="secondary" className="text-xs">Co-ed</Badge>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Coach:</span>
                        <span className="font-semibold">Coach Rodriguez</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Season:</span>
                        <span className="font-semibold">Year-Round</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Practice:</span>
                        <span className="font-semibold">Daily 4:00 PM</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <TargetIcon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Golf</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Boys and girls golf teams competing in regional tournaments.
                    </CardDescription>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">Grades 9-12</Badge>
                      <Badge variant="secondary" className="text-xs">Boys/Girls</Badge>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Coach:</span>
                        <span className="font-semibold">Coach Miller</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Season:</span>
                        <span className="font-semibold">Year-Round</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Practice:</span>
                        <span className="font-semibold">Weekends</span>
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

      {/* Facilities Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Athletic Facilities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              State-of-the-art facilities supporting all athletic programs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <MapPinIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Main Gymnasium</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Full-size basketball and volleyball court with seating for 1,200 spectators.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Basketball and volleyball courts</li>
                  <li>• Bleacher seating for 1,200</li>
                  <li>• Locker rooms and showers</li>
                  <li>• Scoreboard and sound system</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <MapPinIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Athletic Field</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Regulation-size football and soccer field with track and field facilities.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Football and soccer field</li>
                  <li>• 400-meter track</li>
                  <li>• Field event areas</li>
                  <li>• Press box and concessions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <MapPinIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Swimming Pool</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Olympic-size swimming pool with diving boards and spectator seating.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 8-lane competition pool</li>
                  <li>• Diving boards and platforms</li>
                  <li>• Spectator seating</li>
                  <li>• Locker rooms and showers</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <MapPinIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Weight Room</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Fully equipped fitness center with modern weight training equipment.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Free weights and machines</li>
                  <li>• Cardio equipment</li>
                  <li>• Certified trainers</li>
                  <li>• Open to all students</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <MapPinIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Tennis Courts</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Six outdoor tennis courts with lighting for evening play.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Six regulation courts</li>
                  <li>• Evening lighting</li>
                  <li>• Court maintenance</li>
                  <li>• Equipment storage</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <MapPinIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Baseball/Softball Fields</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Separate fields for baseball and softball with dugouts and scoreboards.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Regulation baseball field</li>
                  <li>• Regulation softball field</li>
                  <li>• Dugouts and bullpens</li>
                  <li>• Electronic scoreboards</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Upcoming Events Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't miss our upcoming games, meets, and tournaments
            </p>
          </div>
          
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Fall Sports Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Event</TableHead>
                    <TableHead>Teams</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Time</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Oct 15</TableCell>
                    <TableCell>Football Game</TableCell>
                    <TableCell>Sunrise vs. Central High</TableCell>
                    <TableCell>Home Field</TableCell>
                    <TableCell>7:00 PM</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Oct 18</TableCell>
                    <TableCell>Volleyball Match</TableCell>
                    <TableCell>Sunrise vs. Westside</TableCell>
                    <TableCell>Main Gym</TableCell>
                    <TableCell>6:00 PM</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Oct 22</TableCell>
                    <TableCell>Cross Country Meet</TableCell>
                    <TableCell>Regional Championship</TableCell>
                    <TableCell>Riverside Park</TableCell>
                    <TableCell>9:00 AM</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Oct 25</TableCell>
                    <TableCell>Soccer Game</TableCell>
                    <TableCell>Sunrise vs. East High</TableCell>
                    <TableCell>Home Field</TableCell>
                    <TableCell>4:30 PM</TableCell>
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
            Join Our Athletic Program!
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Develop your athletic skills, build character, and compete with pride as part of our teams.
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
