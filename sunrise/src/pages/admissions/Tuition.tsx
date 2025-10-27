import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DollarSignIcon, CreditCardIcon, CalculatorIcon, GiftIcon, StarIcon, CheckCircleIcon, ClockIcon, UsersIcon } from "lucide-react"
import { Link } from "react-router-dom"

export default function Tuition() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Tuition & <span className="gradient-text">Fees</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Transparent pricing and flexible payment options to make quality education accessible for all families.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/admissions/scholarships">View Scholarships</Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/contact/visit">Schedule a Visit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Tuition Overview Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Tuition Overview</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Competitive tuition rates with comprehensive educational programs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <DollarSignIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Transparent Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Clear, upfront pricing with no hidden fees or surprise costs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <CreditCardIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Flexible Payment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Multiple payment options including monthly, quarterly, and annual plans.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <GiftIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Financial Aid</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Generous financial aid and scholarship programs available.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <StarIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Value Education</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Exceptional value with comprehensive programs and small class sizes.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Tuition Rates Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Tuition Rates 2024-2025</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Annual tuition rates by grade level
            </p>
          </div>
          
          <Card className="card-hover max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Annual Tuition Rates</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Grade Level</TableHead>
                    <TableHead>Annual Tuition</TableHead>
                    <TableHead>Monthly Payment</TableHead>
                    <TableHead>Includes</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Kindergarten</TableCell>
                    <TableCell className="font-bold text-primary">$12,500</TableCell>
                    <TableCell>$1,250</TableCell>
                    <TableCell>Full-day program, meals, materials</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Grades 1-2</TableCell>
                    <TableCell className="font-bold text-primary">$14,500</TableCell>
                    <TableCell>$1,450</TableCell>
                    <TableCell>Core curriculum, arts, PE, meals</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Grades 3-5</TableCell>
                    <TableCell className="font-bold text-primary">$16,500</TableCell>
                    <TableCell>$1,650</TableCell>
                    <TableCell>Advanced curriculum, electives, meals</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Grades 6-8</TableCell>
                    <TableCell className="font-bold text-primary">$18,500</TableCell>
                    <TableCell>$1,850</TableCell>
                    <TableCell>Honors courses, electives, athletics</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Grades 9-12</TableCell>
                    <TableCell className="font-bold text-primary">$20,500</TableCell>
                    <TableCell>$2,050</TableCell>
                    <TableCell>AP courses, college prep, athletics</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Additional Fees Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Additional Fees</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Optional fees and one-time charges
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-sm">Required</Badge>
                  <CardTitle className="text-xl">Required Fees</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex justify-between items-center">
                    <span>Application Fee</span>
                    <span className="font-semibold">$100</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Enrollment Fee</span>
                    <span className="font-semibold">$500</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Technology Fee</span>
                    <span className="font-semibold">$300/year</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Student Activities Fee</span>
                    <span className="font-semibold">$200/year</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Graduation Fee (12th grade)</span>
                    <span className="font-semibold">$150</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-sm">Optional</Badge>
                  <CardTitle className="text-xl">Optional Fees</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex justify-between items-center">
                    <span>Extended Day Program</span>
                    <span className="font-semibold">$2,500/year</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Private Music Lessons</span>
                    <span className="font-semibold">$800/semester</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Athletic Team Participation</span>
                    <span className="font-semibold">$150/sport</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>School Bus Transportation</span>
                    <span className="font-semibold">$1,200/year</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>International Student Fee</span>
                    <span className="font-semibold">$1,000/year</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Payment Options Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Payment Options</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Flexible payment plans to fit your family's budget
            </p>
          </div>
          
          <Tabs defaultValue="annual" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="annual">Annual</TabsTrigger>
              <TabsTrigger value="semester">Semester</TabsTrigger>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="financial">Financial Aid</TabsTrigger>
            </TabsList>
            
            <TabsContent value="annual" className="space-y-6">
              <Card className="card-hover">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <StarIcon className="h-6 w-6 text-primary" />
                    <CardTitle className="text-xl">Annual Payment Plan</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    Pay the full year's tuition upfront and receive a 3% discount.
                  </CardDescription>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 3% discount on total tuition</li>
                    <li>• Payment due by August 1st</li>
                    <li>• No additional fees</li>
                    <li>• Simplest payment option</li>
                  </ul>
                  <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                    <div className="text-sm font-semibold text-primary">Example: Grade 9-12</div>
                    <div className="text-lg font-bold">$20,500 - $615 = $19,885</div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="semester" className="space-y-6">
              <Card className="card-hover">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <CalendarIcon className="h-6 w-6 text-primary" />
                    <CardTitle className="text-xl">Semester Payment Plan</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    Pay tuition in two equal installments per academic year.
                  </CardDescription>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Two payments per year</li>
                    <li>• First payment due August 1st</li>
                    <li>• Second payment due January 1st</li>
                    <li>• $50 processing fee per semester</li>
                  </ul>
                  <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                    <div className="text-sm font-semibold text-primary">Example: Grade 9-12</div>
                    <div className="text-lg font-bold">$10,300 per semester + $50 fee</div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="monthly" className="space-y-6">
              <Card className="card-hover">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <CreditCardIcon className="h-6 w-6 text-primary" />
                    <CardTitle className="text-xl">Monthly Payment Plan</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    Spread tuition payments over 10 months for easier budgeting.
                  </CardDescription>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 10 monthly payments</li>
                    <li>• Payments due 1st of each month</li>
                    <li>• $100 setup fee</li>
                    <li>• Automatic payment available</li>
                  </ul>
                  <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                    <div className="text-sm font-semibold text-primary">Example: Grade 9-12</div>
                    <div className="text-lg font-bold">$2,050 per month + $100 setup</div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="financial" className="space-y-6">
              <Card className="card-hover">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <GiftIcon className="h-6 w-6 text-primary" />
                    <CardTitle className="text-xl">Financial Aid Program</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    Need-based financial assistance to make education accessible.
                  </CardDescription>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Need-based assistance available</li>
                    <li>• Application deadline: March 1st</li>
                    <li>• Awards range from 10% to 90% of tuition</li>
                    <li>• Renewable annually</li>
                  </ul>
                  <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                    <div className="text-sm font-semibold text-primary">Average Award</div>
                    <div className="text-lg font-bold">$8,000 - $15,000 per year</div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Separator className="my-8 sm:my-12 md:my-16" />

      {/* Financial Aid Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Financial Aid</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Making quality education accessible through financial assistance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircleIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Need-Based Aid</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Financial assistance based on demonstrated family need.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Based on family income and expenses</li>
                  <li>• Awards range from 10% to 90%</li>
                  <li>• Renewable each year</li>
                  <li>• Confidential application process</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <StarIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Merit Scholarships</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Academic and talent-based scholarships for exceptional students.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Academic excellence awards</li>
                  <li>• Arts and music scholarships</li>
                  <li>• Athletic scholarships</li>
                  <li>• Leadership scholarships</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <UsersIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Sibling Discount</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Reduced tuition rates for families with multiple children.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 5% discount for second child</li>
                  <li>• 10% discount for third child</li>
                  <li>• 15% discount for fourth+ child</li>
                  <li>• Applied to lower tuition rates</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <ClockIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Early Payment</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Additional discounts for early payment of tuition.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 3% discount for annual payment</li>
                  <li>• 1% discount for semester payment</li>
                  <li>• Payment by August 1st required</li>
                  <li>• Cannot be combined with other discounts</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <CalculatorIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Payment Plans</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Flexible payment options to fit your family's budget.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Monthly payment plans</li>
                  <li>• Semester payment plans</li>
                  <li>• Annual payment plans</li>
                  <li>• Automatic payment options</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <GiftIcon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Special Programs</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Additional financial support for specific programs and circumstances.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• International student support</li>
                  <li>• Military family discounts</li>
                  <li>• Educator family discounts</li>
                  <li>• Emergency financial assistance</li>
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
            Invest in Your Child's Future
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Quality education is an investment that pays dividends for a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/admissions/scholarships">Apply for Financial Aid</Link>
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
