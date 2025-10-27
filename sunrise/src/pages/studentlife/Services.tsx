import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HeartIcon, BookOpenIcon, UsersIcon, ShieldIcon, PhoneIcon, MailIcon, ClockIcon, MapPinIcon, StarIcon, TargetIcon } from "lucide-react"
import { Link } from "react-router-dom"

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Student <span className="gradient-text">Services</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive support services designed to help every student succeed academically, socially, and personally.
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

      {/* Services Overview Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Services Overview</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dedicated professionals providing comprehensive support for student success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <HeartIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Counseling</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Academic, career, and personal counseling services for all students.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <BookOpenIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Academic Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Tutoring, study skills, and learning support programs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <ShieldIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Health Services</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  School nurse, health education, and wellness programs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <UsersIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Special Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Special education, gifted programs, and learning accommodations.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Counseling Services Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Counseling Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional counselors dedicated to supporting student success and well-being
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <BookOpenIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Academic Counseling</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Guidance on course selection, academic planning, and study strategies.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Course selection and scheduling</li>
                  <li>• Academic goal setting</li>
                  <li>• Study skills development</li>
                  <li>• Grade monitoring and support</li>
                </ul>
                <div className="mt-4 pt-4 border-t">
                  <div className="flex items-center gap-2 text-sm">
                    <PhoneIcon className="h-4 w-4 text-primary" />
                    <span className="font-semibold">(555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm mt-1">
                    <MailIcon className="h-4 w-4 text-primary" />
                    <span className="font-semibold">counseling@sunrise.edu</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <StarIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Career Counseling</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Career exploration, college planning, and post-secondary guidance.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Career interest assessments</li>
                  <li>• College and university guidance</li>
                  <li>• Scholarship and financial aid</li>
                  <li>• Resume and application support</li>
                </ul>
                <div className="mt-4 pt-4 border-t">
                  <div className="flex items-center gap-2 text-sm">
                    <PhoneIcon className="h-4 w-4 text-primary" />
                    <span className="font-semibold">(555) 123-4568</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm mt-1">
                    <MailIcon className="h-4 w-4 text-primary" />
                    <span className="font-semibold">careers@sunrise.edu</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <HeartIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Personal Counseling</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Individual and group counseling for personal and social issues.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Individual counseling sessions</li>
                  <li>• Group therapy and support</li>
                  <li>• Crisis intervention</li>
                  <li>• Family consultation</li>
                </ul>
                <div className="mt-4 pt-4 border-t">
                  <div className="flex items-center gap-2 text-sm">
                    <PhoneIcon className="h-4 w-4 text-primary" />
                    <span className="font-semibold">(555) 123-4569</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm mt-1">
                    <MailIcon className="h-4 w-4 text-primary" />
                    <span className="font-semibold">personal@sunrise.edu</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Academic Support Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Academic Support</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive programs to help students achieve their academic potential
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <BookOpenIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Tutoring Services</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  One-on-one and small group tutoring in all subject areas.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li>• Individual tutoring sessions</li>
                  <li>• Small group study sessions</li>
                  <li>• Peer tutoring programs</li>
                  <li>• Online tutoring resources</li>
                </ul>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Hours:</span>
                    <span className="font-semibold">Monday-Friday 3:30-6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location:</span>
                    <span className="font-semibold">Learning Center</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <TargetIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Study Skills Program</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Workshops and individual coaching to improve study habits and learning strategies.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li>• Time management skills</li>
                  <li>• Note-taking strategies</li>
                  <li>• Test-taking techniques</li>
                  <li>• Memory and concentration</li>
                </ul>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Schedule:</span>
                    <span className="font-semibold">Weekly workshops</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location:</span>
                    <span className="font-semibold">Library Conference Room</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <UsersIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Learning Support</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Specialized support for students with learning differences and academic challenges.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li>• Individualized learning plans</li>
                  <li>• Accommodation support</li>
                  <li>• Assistive technology</li>
                  <li>• Progress monitoring</li>
                </ul>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Contact:</span>
                    <span className="font-semibold">Learning Support Office</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Phone:</span>
                    <span className="font-semibold">(555) 123-4570</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <StarIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Library Services</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Comprehensive library resources and research support for all students.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li>• Research assistance</li>
                  <li>• Computer and printing access</li>
                  <li>• Study spaces and quiet areas</li>
                  <li>• Digital resources and databases</li>
                </ul>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Hours:</span>
                    <span className="font-semibold">7:30 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location:</span>
                    <span className="font-semibold">Main Library</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Health Services Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Health Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive health and wellness services to support student well-being
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <ShieldIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">School Nurse</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Licensed nurse providing health care, first aid, and health education.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• First aid and emergency care</li>
                  <li>• Medication administration</li>
                  <li>• Health screenings</li>
                  <li>• Health education programs</li>
                </ul>
                <div className="mt-4 pt-4 border-t">
                  <div className="flex items-center gap-2 text-sm">
                    <ClockIcon className="h-4 w-4 text-primary" />
                    <span className="font-semibold">Monday-Friday 8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm mt-1">
                    <MapPinIcon className="h-4 w-4 text-primary" />
                    <span className="font-semibold">Health Office</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <HeartIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Mental Health</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Licensed mental health professionals providing counseling and support.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Individual counseling</li>
                  <li>• Crisis intervention</li>
                  <li>• Group therapy sessions</li>
                  <li>• Mental health education</li>
                </ul>
                <div className="mt-4 pt-4 border-t">
                  <div className="flex items-center gap-2 text-sm">
                    <PhoneIcon className="h-4 w-4 text-primary" />
                    <span className="font-semibold">(555) 123-4571</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm mt-1">
                    <MailIcon className="h-4 w-4 text-primary" />
                    <span className="font-semibold">mentalhealth@sunrise.edu</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <TargetIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Wellness Programs</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Comprehensive wellness programs promoting healthy lifestyle choices.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Nutrition education</li>
                  <li>• Physical fitness programs</li>
                  <li>• Stress management workshops</li>
                  <li>• Substance abuse prevention</li>
                </ul>
                <div className="mt-4 pt-4 border-t">
                  <div className="flex items-center gap-2 text-sm">
                    <CalendarIcon className="h-4 w-4 text-primary" />
                    <span className="font-semibold">Monthly workshops</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm mt-1">
                    <MapPinIcon className="h-4 w-4 text-primary" />
                    <span className="font-semibold">Various locations</span>
                  </div>
                </div>
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
              Common questions about our student services and support programs
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="counseling-appointment">
              <AccordionTrigger className="text-xl">
                How do I schedule a counseling appointment?
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    You can schedule a counseling appointment by visiting the counseling office, calling (555) 123-4567, 
                    or emailing counseling@sunrise.edu. Walk-in appointments are also available for urgent matters.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                    <li>• Visit the counseling office in person</li>
                    <li>• Call (555) 123-4567</li>
                    <li>• Email counseling@sunrise.edu</li>
                    <li>• Walk-in appointments available for urgent needs</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="tutoring-services">
              <AccordionTrigger className="text-xl">
                What tutoring services are available?
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    We offer comprehensive tutoring services including individual sessions, small group study, 
                    peer tutoring, and online resources. Tutoring is available in all subject areas.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                    <li>• Individual tutoring sessions</li>
                    <li>• Small group study sessions</li>
                    <li>• Peer tutoring programs</li>
                    <li>• Online tutoring resources</li>
                    <li>• Available Monday-Friday 3:30-6:00 PM</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="health-services">
              <AccordionTrigger className="text-xl">
                What health services are provided?
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Our health services include first aid, medication administration, health screenings, 
                    mental health support, and wellness education programs.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                    <li>• Licensed school nurse on campus</li>
                    <li>• First aid and emergency care</li>
                    <li>• Medication administration</li>
                    <li>• Health screenings and assessments</li>
                    <li>• Mental health counseling</li>
                    <li>• Wellness education programs</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="special-accommodations">
              <AccordionTrigger className="text-xl">
                How do I request special accommodations?
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    To request special accommodations, contact the Learning Support Office. You'll need to provide 
                    documentation from a qualified professional and meet with our support team to develop an accommodation plan.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                    <li>• Contact Learning Support Office</li>
                    <li>• Provide professional documentation</li>
                    <li>• Meet with support team</li>
                    <li>• Develop accommodation plan</li>
                    <li>• Regular progress monitoring</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="emergency-procedures">
              <AccordionTrigger className="text-xl">
                What should I do in case of a health emergency?
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    In case of a health emergency, immediately contact the school nurse at (555) 123-4572, 
                    notify a teacher or administrator, or call 911 for life-threatening situations.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                    <li>• Contact school nurse: (555) 123-4572</li>
                    <li>• Notify teacher or administrator</li>
                    <li>• Call 911 for life-threatening emergencies</li>
                    <li>• Follow emergency procedures posted in classrooms</li>
                    <li>• Stay calm and follow instructions</li>
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
            We're Here to Support You!
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our dedicated team is committed to helping every student succeed and thrive.
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
