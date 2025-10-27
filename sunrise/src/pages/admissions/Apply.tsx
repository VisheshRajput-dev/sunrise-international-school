import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircleIcon, ClockIcon, FileTextIcon, UserIcon, MailIcon, PhoneIcon, CalendarIcon, StarIcon } from "lucide-react"
import { Link } from "react-router-dom"

export default function Apply() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Apply to <span className="gradient-text">Sunrise School</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Begin your journey to academic excellence. Our streamlined application process makes it easy to join our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/admissions/requirements">View Requirements</Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/contact/visit">Schedule a Visit</Link>
              </Button>
            </div>
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
              Simple steps to join our school community
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <FileTextIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">1. Complete Application</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Fill out our online application form with student and family information.
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
                  Upload required documents including transcripts, test scores, and recommendations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <UserIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">3. Interview & Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Meet with our admissions team and complete any required assessments.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <CheckCircleIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">4. Receive Decision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Get notified of your admission status and next steps for enrollment.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Application Form Preview Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Application Form</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete your application in just a few steps
            </p>
          </div>
          
          <Card className="card-hover max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Student Application Form</CardTitle>
              <CardDescription className="text-center">
                Please fill out all required fields to complete your application
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Tabs defaultValue="student" className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-8">
                  <TabsTrigger value="student">Student Info</TabsTrigger>
                  <TabsTrigger value="family">Family Info</TabsTrigger>
                  <TabsTrigger value="academic">Academic Info</TabsTrigger>
                  <TabsTrigger value="documents">Documents</TabsTrigger>
                </TabsList>
                
                <TabsContent value="student" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">First Name *</label>
                      <Input placeholder="Enter first name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Last Name *</label>
                      <Input placeholder="Enter last name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Date of Birth *</label>
                      <Input type="date" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Grade Level *</label>
                      <Input placeholder="Select grade level" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email Address *</label>
                      <Input type="email" placeholder="student@email.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Phone Number</label>
                      <Input type="tel" placeholder="(555) 123-4567" />
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="family" className="space-y-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Parent/Guardian Information</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Parent/Guardian Name *</label>
                          <Input placeholder="Enter parent/guardian name" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Relationship *</label>
                          <Input placeholder="Mother, Father, Guardian, etc." />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Email Address *</label>
                          <Input type="email" placeholder="parent@email.com" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Phone Number *</label>
                          <Input type="tel" placeholder="(555) 123-4567" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Occupation</label>
                          <Input placeholder="Enter occupation" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Employer</label>
                          <Input placeholder="Enter employer name" />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Emergency Contact</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Emergency Contact Name *</label>
                          <Input placeholder="Enter emergency contact name" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Relationship *</label>
                          <Input placeholder="Relationship to student" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Phone Number *</label>
                          <Input type="tel" placeholder="(555) 123-4567" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Email Address</label>
                          <Input type="email" placeholder="emergency@email.com" />
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="academic" className="space-y-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Current School Information</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Current School *</label>
                          <Input placeholder="Enter current school name" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Current Grade *</label>
                          <Input placeholder="Enter current grade" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">School Address</label>
                          <Input placeholder="Enter school address" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Principal/Counselor Name</label>
                          <Input placeholder="Enter principal/counselor name" />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Academic Interests</h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Intended Grade Level *</label>
                          <Input placeholder="Select intended grade level" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Academic Interests</label>
                          <Input placeholder="List academic interests or subjects" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Extracurricular Interests</label>
                          <Input placeholder="List extracurricular activities of interest" />
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="documents" className="space-y-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Required Documents</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <FileTextIcon className="h-5 w-5 text-primary" />
                            <span className="font-medium">Official Transcript</span>
                          </div>
                          <Button variant="outline" size="sm">Upload</Button>
                        </div>
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <FileTextIcon className="h-5 w-5 text-primary" />
                            <span className="font-medium">Standardized Test Scores</span>
                          </div>
                          <Button variant="outline" size="sm">Upload</Button>
                        </div>
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <FileTextIcon className="h-5 w-5 text-primary" />
                            <span className="font-medium">Teacher Recommendations (2)</span>
                          </div>
                          <Button variant="outline" size="sm">Upload</Button>
                        </div>
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <FileTextIcon className="h-5 w-5 text-primary" />
                            <span className="font-medium">Birth Certificate</span>
                          </div>
                          <Button variant="outline" size="sm">Upload</Button>
                        </div>
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <FileTextIcon className="h-5 w-5 text-primary" />
                            <span className="font-medium">Immunization Records</span>
                          </div>
                          <Button variant="outline" size="sm">Upload</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="pt-6 border-t">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium">Application Progress</span>
                  <span className="text-sm text-muted-foreground">0% Complete</span>
                </div>
                <Progress value={0} className="mb-4" />
                <div className="flex justify-end gap-4">
                  <Button variant="outline">Save Draft</Button>
                  <Button>Submit Application</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Important Dates Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Important Dates</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key deadlines and dates for the application process
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <CalendarIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Application Deadline</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">March 15, 2024</div>
                  <p className="text-sm text-muted-foreground">
                    All applications must be submitted by this date for priority consideration.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <UserIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Interview Period</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">March 20 - April 10</div>
                  <p className="text-sm text-muted-foreground">
                    Scheduled interviews and assessments for qualified applicants.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircleIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Decision Notification</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">April 20, 2024</div>
                  <p className="text-sm text-muted-foreground">
                    Admission decisions will be sent to all applicants.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <ClockIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Enrollment Deadline</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">May 15, 2024</div>
                  <p className="text-sm text-muted-foreground">
                    Accepted students must complete enrollment by this date.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <StarIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Orientation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">August 15, 2024</div>
                  <p className="text-sm text-muted-foreground">
                    New student orientation and welcome event.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <CalendarIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">First Day of School</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">August 20, 2024</div>
                  <p className="text-sm text-muted-foreground">
                    Classes begin for the 2024-2025 academic year.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Application Tips Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Application Tips</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Helpful advice to make your application stand out
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-sm">Preparation</Badge>
                  <CardTitle className="text-xl">Before You Apply</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>• Research our programs and ensure they align with your goals</li>
                  <li>• Gather all required documents well in advance</li>
                  <li>• Request teacher recommendations early</li>
                  <li>• Schedule a campus visit to learn more about our community</li>
                  <li>• Review our academic requirements and expectations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-sm">Application</Badge>
                  <CardTitle className="text-xl">During Application</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>• Complete all sections thoroughly and accurately</li>
                  <li>• Proofread your application for errors</li>
                  <li>• Submit all required documents on time</li>
                  <li>• Be honest and authentic in your responses</li>
                  <li>• Save your work frequently to avoid data loss</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-sm">Interview</Badge>
                  <CardTitle className="text-xl">Interview Preparation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>• Prepare thoughtful questions about our programs</li>
                  <li>• Practice discussing your academic interests and goals</li>
                  <li>• Dress appropriately and arrive on time</li>
                  <li>• Bring copies of your application and documents</li>
                  <li>• Be ready to discuss your extracurricular activities</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-sm">Follow-up</Badge>
                  <CardTitle className="text-xl">After Submission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>• Check your email regularly for updates</li>
                  <li>• Respond promptly to any requests for additional information</li>
                  <li>• Keep copies of all submitted documents</li>
                  <li>• Contact us if you have questions about your application status</li>
                  <li>• Prepare for potential waitlist or alternative options</li>
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
            Ready to Apply?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start your application today and take the first step toward joining our school community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/admissions/requirements">View Requirements</Link>
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
