import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { StarIcon, AwardIcon, UsersIcon, BookOpenIcon, HeartIcon, TrophyIcon, GiftIcon, CheckCircleIcon } from "lucide-react"
import { Link } from "react-router-dom"

export default function Scholarships() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">Scholarships</span> & Financial Aid
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover opportunities to make quality education accessible through our comprehensive scholarship and financial aid programs.
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

      {/* Scholarship Overview Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Scholarship Programs</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Multiple scholarship opportunities to recognize excellence and support families
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <StarIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Academic Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Merit-based scholarships for outstanding academic achievement.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <AwardIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Talent & Arts</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Scholarships recognizing exceptional talent in arts, music, and athletics.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <HeartIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Need-Based Aid</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Financial assistance based on demonstrated family need.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <UsersIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Scholarships for students demonstrating leadership potential.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Academic Scholarships Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Academic Excellence Scholarships</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Recognizing outstanding academic achievement and potential
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-sm">Merit</Badge>
                  <CardTitle className="text-xl">Presidential Scholarship</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Our highest academic honor for students with exceptional academic records.
                </CardDescription>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Award Amount:</span>
                    <span className="font-semibold text-primary">$15,000/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Eligibility:</span>
                    <span className="font-semibold">GPA 3.8+, Top 5%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Renewable:</span>
                    <span className="font-semibold">Yes, 4 years</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground mt-4">
                  <li>• Minimum GPA 3.8</li>
                  <li>• Top 5% of graduating class</li>
                  <li>• Strong standardized test scores</li>
                  <li>• Leadership and service record</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-sm">Merit</Badge>
                  <CardTitle className="text-xl">Dean's Scholarship</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Recognition for students with strong academic performance and potential.
                </CardDescription>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Award Amount:</span>
                    <span className="font-semibold text-primary">$10,000/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Eligibility:</span>
                    <span className="font-semibold">GPA 3.5+, Top 15%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Renewable:</span>
                    <span className="font-semibold">Yes, 4 years</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground mt-4">
                  <li>• Minimum GPA 3.5</li>
                  <li>• Top 15% of graduating class</li>
                  <li>• Strong academic recommendations</li>
                  <li>• Demonstrated academic excellence</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-sm">Merit</Badge>
                  <CardTitle className="text-xl">Honors Scholarship</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  For students who demonstrate strong academic ability and commitment.
                </CardDescription>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Award Amount:</span>
                    <span className="font-semibold text-primary">$7,500/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Eligibility:</span>
                    <span className="font-semibold">GPA 3.3+, Top 25%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Renewable:</span>
                    <span className="font-semibold">Yes, 4 years</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground mt-4">
                  <li>• Minimum GPA 3.3</li>
                  <li>• Top 25% of graduating class</li>
                  <li>• Strong teacher recommendations</li>
                  <li>• Academic improvement trend</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Talent Scholarships Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Talent & Arts Scholarships</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Recognizing exceptional talent in arts, music, athletics, and other areas
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-sm">Arts</Badge>
                  <CardTitle className="text-xl">Visual Arts Scholarship</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  For students with exceptional talent in visual arts and design.
                </CardDescription>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Award Amount:</span>
                    <span className="font-semibold text-primary">$8,000/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Eligibility:</span>
                    <span className="font-semibold">Portfolio Review</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Renewable:</span>
                    <span className="font-semibold">Yes, 4 years</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground mt-4">
                  <li>• Portfolio submission required</li>
                  <li>• Art teacher recommendation</li>
                  <li>• Participation in art programs</li>
                  <li>• Maintain GPA 3.0+</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-sm">Music</Badge>
                  <CardTitle className="text-xl">Music Excellence Scholarship</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Recognizing outstanding musical talent and dedication to music education.
                </CardDescription>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Award Amount:</span>
                    <span className="font-semibold text-primary">$6,000/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Eligibility:</span>
                    <span className="font-semibold">Audition Required</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Renewable:</span>
                    <span className="font-semibold">Yes, 4 years</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground mt-4">
                  <li>• Live audition required</li>
                  <li>• Music teacher recommendation</li>
                  <li>• Participation in school music programs</li>
                  <li>• Maintain GPA 3.0+</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-sm">Athletics</Badge>
                  <CardTitle className="text-xl">Athletic Excellence Scholarship</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  For student-athletes who excel in their sport and academics.
                </CardDescription>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Award Amount:</span>
                    <span className="font-semibold text-primary">$5,000/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Eligibility:</span>
                    <span className="font-semibold">Tryout Required</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Renewable:</span>
                    <span className="font-semibold">Yes, 4 years</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground mt-4">
                  <li>• Athletic tryout required</li>
                  <li>• Coach recommendation</li>
                  <li>• Participation in school athletics</li>
                  <li>• Maintain GPA 3.0+</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-sm">Theater</Badge>
                  <CardTitle className="text-xl">Drama & Theater Scholarship</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  For students with exceptional talent in drama and theatrical arts.
                </CardDescription>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Award Amount:</span>
                    <span className="font-semibold text-primary">$4,000/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Eligibility:</span>
                    <span className="font-semibold">Audition Required</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Renewable:</span>
                    <span className="font-semibold">Yes, 4 years</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground mt-4">
                  <li>• Performance audition required</li>
                  <li>• Drama teacher recommendation</li>
                  <li>• Participation in school productions</li>
                  <li>• Maintain GPA 3.0+</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-sm">STEM</Badge>
                  <CardTitle className="text-xl">STEM Innovation Scholarship</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  For students with exceptional talent in science, technology, engineering, and mathematics.
                </CardDescription>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Award Amount:</span>
                    <span className="font-semibold text-primary">$7,000/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Eligibility:</span>
                    <span className="font-semibold">Project Review</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Renewable:</span>
                    <span className="font-semibold">Yes, 4 years</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground mt-4">
                  <li>• STEM project submission</li>
                  <li>• Science teacher recommendation</li>
                  <li>• Participation in STEM programs</li>
                  <li>• Maintain GPA 3.5+</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-sm">Writing</Badge>
                  <CardTitle className="text-xl">Creative Writing Scholarship</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  For students with exceptional talent in creative writing and literature.
                </CardDescription>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Award Amount:</span>
                    <span className="font-semibold text-primary">$3,000/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Eligibility:</span>
                    <span className="font-semibold">Writing Sample</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Renewable:</span>
                    <span className="font-semibold">Yes, 4 years</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground mt-4">
                  <li>• Writing sample submission</li>
                  <li>• English teacher recommendation</li>
                  <li>• Participation in writing programs</li>
                  <li>• Maintain GPA 3.0+</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Need-Based Aid Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Need-Based Financial Aid</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Making quality education accessible through need-based assistance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <HeartIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Need-Based Grant Program</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Comprehensive financial assistance based on demonstrated family need.
                </CardDescription>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Award Range:</span>
                    <span className="font-semibold text-primary">$2,000 - $15,000/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Eligibility:</span>
                    <span className="font-semibold">Financial Need</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Renewable:</span>
                    <span className="font-semibold">Yes, annually</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground mt-4">
                  <li>• Based on family income and expenses</li>
                  <li>• Confidential application process</li>
                  <li>• Awards range from 10% to 90% of tuition</li>
                  <li>• Renewable each year</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <UsersIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Family Support Program</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Additional support for families with multiple children or special circumstances.
                </CardDescription>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Award Range:</span>
                    <span className="font-semibold text-primary">$1,000 - $8,000/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Eligibility:</span>
                    <span className="font-semibold">Multiple Children</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Renewable:</span>
                    <span className="font-semibold">Yes, annually</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground mt-4">
                  <li>• Sibling discount program</li>
                  <li>• Single parent support</li>
                  <li>• Military family assistance</li>
                  <li>• Educator family discounts</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Application Process Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Application Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple steps to apply for scholarships and financial aid
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <BookOpenIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">1. Complete Application</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Submit your school application and scholarship application forms.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <FileTextIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">2. Submit Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Provide required documents including transcripts, recommendations, and portfolios.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <StarIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">3. Audition/Review</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Complete auditions, portfolio reviews, or assessments as required.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <CheckCircleIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">4. Receive Award</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Get notified of your scholarship award and next steps.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Common questions about scholarships and financial aid
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="application-deadline">
              <AccordionTrigger className="text-xl">
                When is the scholarship application deadline?
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Scholarship applications are due by March 1st for the following academic year. 
                    Early applications are encouraged as some scholarships have limited availability.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                    <li>• General scholarship deadline: March 1st</li>
                    <li>• Early application deadline: February 1st</li>
                    <li>• Late applications considered on case-by-case basis</li>
                    <li>• Financial aid applications due March 15th</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="multiple-scholarships">
              <AccordionTrigger className="text-xl">
                Can I receive multiple scholarships?
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Students can receive multiple scholarships, but the total award cannot exceed 100% of tuition. 
                    We will work with families to maximize their financial assistance.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                    <li>• Multiple scholarships allowed</li>
                    <li>• Total cannot exceed 100% of tuition</li>
                    <li>• Merit and need-based aid can be combined</li>
                    <li>• Sibling discounts apply to remaining balance</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="renewal-requirements">
              <AccordionTrigger className="text-xl">
                What are the renewal requirements for scholarships?
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Most scholarships are renewable for up to 4 years, provided students maintain 
                    the required GPA and continue to meet program requirements.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                    <li>• Maintain minimum GPA (varies by scholarship)</li>
                    <li>• Continue participation in required programs</li>
                    <li>• Demonstrate good character and conduct</li>
                    <li>• Submit renewal application annually</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="financial-aid-process">
              <AccordionTrigger className="text-xl">
                How does the financial aid process work?
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Financial aid is based on demonstrated need using standardized formulas. 
                    We consider family income, expenses, assets, and special circumstances.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                    <li>• Submit financial aid application</li>
                    <li>• Provide tax returns and financial documents</li>
                    <li>• Confidential review process</li>
                    <li>• Awards determined by demonstrated need</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="international-students">
              <AccordionTrigger className="text-xl">
                Are scholarships available for international students?
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    International students are eligible for merit-based scholarships but not need-based aid. 
                    Additional documentation may be required.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                    <li>• Merit-based scholarships available</li>
                    <li>• Need-based aid not available</li>
                    <li>• Additional documentation required</li>
                    <li>• English proficiency may be required</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Call to Action Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Apply for Scholarships Today!
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't let financial concerns prevent you from accessing quality education. Apply for scholarships and financial aid.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/admissions/apply">Start Application</Link>
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
