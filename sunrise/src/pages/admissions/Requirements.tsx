import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircleIcon, FileTextIcon, StarIcon, UsersIcon, BookOpenIcon, CalendarIcon, AwardIcon } from "lucide-react"
import { Link } from "react-router-dom"

export default function Requirements() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Admission <span className="gradient-text">Requirements</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Learn about the requirements and criteria for admission to Sunrise School at each grade level.
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
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* General Requirements Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">General Requirements</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Basic requirements that apply to all applicants
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <FileTextIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Application Form</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Complete online application with student and family information.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <BookOpenIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Academic Records</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Official transcripts and standardized test scores from current school.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <UsersIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Teacher recommendations and character references from current school.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <CalendarIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Interview</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Personal interview with admissions team and student assessment.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Grade Level Requirements Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Grade Level Requirements</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specific requirements and criteria for each grade level
            </p>
          </div>
          
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Admission Requirements by Grade Level</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Grade Level</TableHead>
                    <TableHead>Age Requirement</TableHead>
                    <TableHead>Academic Requirements</TableHead>
                    <TableHead>Additional Requirements</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Kindergarten</TableCell>
                    <TableCell>5 years by Sept 1</TableCell>
                    <TableCell>Readiness assessment</TableCell>
                    <TableCell>Birth certificate, immunization records</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Grades 1-2</TableCell>
                    <TableCell>Age appropriate</TableCell>
                    <TableCell>Previous grade completion</TableCell>
                    <TableCell>Report cards, teacher evaluation</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Grades 3-5</TableCell>
                    <TableCell>Age appropriate</TableCell>
                    <TableCell>B average or higher</TableCell>
                    <TableCell>Standardized test scores, recommendations</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Grades 6-8</TableCell>
                    <TableCell>Age appropriate</TableCell>
                    <TableCell>B average, passing grades</TableCell>
                    <TableCell>Entrance exam, interview, recommendations</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Grades 9-12</TableCell>
                    <TableCell>Age appropriate</TableCell>
                    <TableCell>B average, college prep courses</TableCell>
                    <TableCell>SAT/ACT scores, essay, interview</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Required Documents Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Required Documents</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete list of documents needed for your application
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-sm">Academic</Badge>
                  <CardTitle className="text-xl">Academic Documents</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-primary" />
                    Official transcripts from current school (last 2 years)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-primary" />
                    Standardized test scores (SAT, ACT, SSAT, etc.)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-primary" />
                    Teacher recommendations (2 required)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-primary" />
                    Principal/Counselor recommendation (1 required)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-primary" />
                    Academic writing sample (grades 6-12)
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-sm">Personal</Badge>
                  <CardTitle className="text-xl">Personal Documents</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-primary" />
                    Birth certificate or passport
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-primary" />
                    Immunization records
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-primary" />
                    Recent photograph (2x2 inches)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-primary" />
                    Parent/Guardian identification
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-primary" />
                    Proof of residency
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-sm">Financial</Badge>
                  <CardTitle className="text-xl">Financial Documents</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-primary" />
                    Application fee payment receipt
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-primary" />
                    Financial aid application (if applicable)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-primary" />
                    Tax returns (for financial aid)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-primary" />
                    Employment verification
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-primary" />
                    Bank statements (for financial aid)
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-sm">Special</Badge>
                  <CardTitle className="text-xl">Special Circumstances</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-primary" />
                    IEP or 504 plan (if applicable)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-primary" />
                    Medical documentation (if applicable)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-primary" />
                    Custody documentation (if applicable)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-primary" />
                    English proficiency test (international students)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-primary" />
                    Visa documentation (international students)
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Admission Criteria Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Admission Criteria</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Factors considered in the admission decision process
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <StarIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Academic Performance</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Strong academic record and demonstrated learning potential.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Grade point average</li>
                  <li>• Standardized test scores</li>
                  <li>• Course rigor and progression</li>
                  <li>• Teacher recommendations</li>
                  <li>• Academic writing samples</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <UsersIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Character & Values</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Alignment with school values and positive character traits.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Integrity and honesty</li>
                  <li>• Respect for others</li>
                  <li>• Responsibility and accountability</li>
                  <li>• Compassion and empathy</li>
                  <li>• Leadership potential</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <AwardIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Extracurricular Involvement</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Participation in activities that demonstrate interests and talents.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Sports and athletics</li>
                  <li>• Arts and music</li>
                  <li>• Community service</li>
                  <li>• Leadership roles</li>
                  <li>• Special talents or skills</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <BookOpenIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Learning Readiness</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Preparedness for our academic program and learning environment.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Assessment results</li>
                  <li>• Interview performance</li>
                  <li>• Motivation and curiosity</li>
                  <li>• Study habits and skills</li>
                  <li>• Adaptability and resilience</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <UsersIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Family Support</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Family commitment to education and school community involvement.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Parent/guardian interview</li>
                  <li>• Educational values alignment</li>
                  <li>• Support for student success</li>
                  <li>• Community involvement</li>
                  <li>• Financial commitment</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <StarIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Diversity & Inclusion</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Contribution to school diversity and inclusive community.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Cultural background</li>
                  <li>• Unique perspectives</li>
                  <li>• Special circumstances</li>
                  <li>• Geographic diversity</li>
                  <li>• Socioeconomic diversity</li>
                </ul>
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
              Common questions about admission requirements and process
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="minimum-gpa">
              <AccordionTrigger className="text-xl">
                What is the minimum GPA requirement?
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    We generally look for students with a B average (3.0 GPA) or higher. However, we consider 
                    the full academic profile including grade trends, course rigor, and teacher recommendations.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                    <li>• Elementary (K-5): Focus on readiness and potential</li>
                    <li>• Middle School (6-8): B average or higher preferred</li>
                    <li>• High School (9-12): B average with college prep courses</li>
                    <li>• Special circumstances considered on case-by-case basis</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="test-scores">
              <AccordionTrigger className="text-xl">
                Are standardized test scores required?
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Standardized test scores are required for grades 6-12. We accept various tests including 
                    SSAT, ISEE, SAT, ACT, and state standardized tests.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                    <li>• Grades 6-8: SSAT or ISEE preferred</li>
                    <li>• Grades 9-12: SAT or ACT scores</li>
                    <li>• State standardized tests accepted</li>
                    <li>• Test prep resources available</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="recommendations">
              <AccordionTrigger className="text-xl">
                How many recommendations do I need?
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    We require 2 teacher recommendations and 1 principal/counselor recommendation. 
                    Additional recommendations are welcome but not required.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                    <li>• 2 teacher recommendations (current or recent teachers)</li>
                    <li>• 1 principal/counselor recommendation</li>
                    <li>• Recommendations should be from academic subjects</li>
                    <li>• Character references accepted as supplementary</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="interview-process">
              <AccordionTrigger className="text-xl">
                What happens during the interview?
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    The interview is a conversation to learn about the student's interests, goals, and 
                    fit with our school community. It's also an opportunity for families to ask questions.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                    <li>• Student interview (30-45 minutes)</li>
                    <li>• Parent/guardian interview (15-30 minutes)</li>
                    <li>• Campus tour included</li>
                    <li>• Opportunity to meet teachers and students</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="waitlist">
              <AccordionTrigger className="text-xl">
                What if I'm placed on the waitlist?
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Being on the waitlist means you're a qualified candidate, but space is limited. 
                    We maintain an active waitlist and contact families as space becomes available.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                    <li>• Waitlist position updated regularly</li>
                    <li>• Families contacted as space becomes available</li>
                    <li>• Additional documentation may be requested</li>
                    <li>• Alternative enrollment options discussed</li>
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
            Ready to Apply?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Review our requirements and start your application today.
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
