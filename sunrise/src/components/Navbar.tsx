import * as React from "react"
import { Link } from "react-router-dom"
import { BookOpenIcon, GraduationCapIcon, UsersIcon, CalendarIcon, PhoneIcon, HomeIcon, MenuIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import schoolLogo from "@/assets/school-logo.png"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const academicPrograms: { title: string; href: string; description: string }[] = [
  {
    title: "Elementary School",
    href: "/academics/elementary",
    description: "Grades K-5: Building strong foundations in reading, writing, and mathematics.",
  },
  {
    title: "Middle School",
    href: "/academics/middle",
    description: "Grades 6-8: Preparing students for high school with advanced coursework.",
  },
  {
    title: "High School",
    href: "/academics/high",
    description: "Grades 9-12: College preparatory programs and career pathways.",
  },
  {
    title: "Special Programs",
    href: "/academics/special",
    description: "Gifted education, special needs support, and enrichment programs.",
  },
  {
    title: "Extracurriculars",
    href: "/academics/extracurriculars",
    description: "Sports, clubs, arts, and leadership opportunities.",
  },
  {
    title: "College Prep",
    href: "/academics/college-prep",
    description: "SAT/ACT preparation, college counseling, and application support.",
  },
]

const studentLife: { title: string; href: string; description: string }[] = [
  {
    title: "Student Activities",
    href: "/student-life/activities",
    description: "Clubs, organizations, and student-run initiatives.",
  },
  {
    title: "Athletics",
    href: "/student-life/athletics",
    description: "Sports teams, intramurals, and fitness programs.",
  },
  {
    title: "Arts & Music",
    href: "/student-life/arts",
    description: "Visual arts, music programs, and performance opportunities.",
  },
  {
    title: "Student Services",
    href: "/student-life/services",
    description: "Counseling, health services, and academic support.",
  },
]

export function Navbar() {
  return (
    <div className="border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <img 
                src={schoolLogo} 
                alt="Sunrise School Logo" 
                className="h-10 w-auto sm:h-12 md:h-14 lg:h-16 object-contain"
              />
              
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex">
            <NavigationMenu viewport={false}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-semibold">
                    <HomeIcon className="mr-2 h-4 w-4" />
                    Home
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1.5 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg">
                    <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] p-2">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="from-primary/20 to-primary/10 flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6"
                            to="/"
                          >
                            <div className="mb-2 text-lg font-medium sm:mt-4 text-primary">
                              Sunrise School
                            </div>
                            <p className="text-muted-foreground text-sm leading-tight">
                              Excellence in Education, Character, and Community
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/about" title="About Our School">
                        Learn about our mission, values, and educational philosophy.
                      </ListItem>
                      <ListItem href="/leadership" title="Leadership Team">
                        Meet our principal, administrators, and department heads.
                      </ListItem>
                      <ListItem href="/history" title="School History">
                        Discover our rich heritage and traditions.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-semibold">
                    <BookOpenIcon className="mr-2 h-4 w-4" />
                    Academics
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1.5 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg">
                    <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px] p-2">
                      {academicPrograms.map((program) => (
                        <ListItem
                          key={program.title}
                          title={program.title}
                          href={program.href}
                        >
                          {program.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-semibold">
                    <UsersIcon className="mr-2 h-4 w-4" />
                    Student Life
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1.5 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg">
                    <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px] p-2">
                      {studentLife.map((activity) => (
                        <ListItem
                          key={activity.title}
                          title={activity.title}
                          href={activity.href}
                        >
                          {activity.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-semibold">
                    <GraduationCapIcon className="mr-2 h-4 w-4" />
                    Admissions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1.5 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg">
                    <ul className="grid w-[300px] gap-4 p-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/admissions/apply">
                            <div className="font-medium">Apply Now</div>
                            <div className="text-muted-foreground">
                              Start your application process.
                            </div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/admissions/requirements">
                            <div className="font-medium">Requirements</div>
                            <div className="text-muted-foreground">
                              Learn about admission criteria.
                            </div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/admissions/tuition">
                            <div className="font-medium">Tuition & Fees</div>
                            <div className="text-muted-foreground">
                              Understand our pricing structure.
                            </div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/admissions/scholarships">
                            <div className="font-medium">Scholarships</div>
                            <div className="text-muted-foreground">
                              Explore financial aid opportunities.
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-semibold">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    News & Events
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1.5 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg">
                    <ul className="grid w-[200px] gap-4 p-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/news">Latest News</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/events">Upcoming Events</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/calendar">School Calendar</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/newsletter">Newsletter</Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-semibold">
                    <PhoneIcon className="mr-2 h-4 w-4" />
                    Contact
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1.5 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg">
                    <ul className="grid w-[200px] gap-4 p-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/contact">General Contact</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/contact/admissions">Admissions Office</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/contact/faculty">Faculty Directory</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/contact/visit">Schedule a Visit</Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MenuIcon className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="text-left">Sunrise School</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="home">
                      <AccordionTrigger className="text-left">
                        <div className="flex items-center">
                          <HomeIcon className="mr-2 h-4 w-4" />
                          Home
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2 pl-6">
                          <Link to="/" className="block py-2 text-sm hover:text-primary">
                            Home
                          </Link>
                          <Link to="/about" className="block py-2 text-sm hover:text-primary">
                            About Our School
                          </Link>
                          <Link to="/leadership" className="block py-2 text-sm hover:text-primary">
                            Leadership Team
                          </Link>
                          <Link to="/history" className="block py-2 text-sm hover:text-primary">
                            School History
                          </Link>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="academics">
                      <AccordionTrigger className="text-left">
                        <div className="flex items-center">
                          <BookOpenIcon className="mr-2 h-4 w-4" />
                          Academics
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2 pl-6">
                          {academicPrograms.map((program) => (
                            <Link
                              key={program.title}
                              to={program.href}
                              className="block py-2 text-sm hover:text-primary"
                            >
                              {program.title}
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="student-life">
                      <AccordionTrigger className="text-left">
                        <div className="flex items-center">
                          <UsersIcon className="mr-2 h-4 w-4" />
                          Student Life
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2 pl-6">
                          {studentLife.map((activity) => (
                            <Link
                              key={activity.title}
                              to={activity.href}
                              className="block py-2 text-sm hover:text-primary"
                            >
                              {activity.title}
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="admissions">
                      <AccordionTrigger className="text-left">
                        <div className="flex items-center">
                          <GraduationCapIcon className="mr-2 h-4 w-4" />
                          Admissions
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2 pl-6">
                          <Link to="/admissions/apply" className="block py-2 text-sm hover:text-primary">
                            Apply Now
                          </Link>
                          <Link to="/admissions/requirements" className="block py-2 text-sm hover:text-primary">
                            Requirements
                          </Link>
                          <Link to="/admissions/tuition" className="block py-2 text-sm hover:text-primary">
                            Tuition & Fees
                          </Link>
                          <Link to="/admissions/scholarships" className="block py-2 text-sm hover:text-primary">
                            Scholarships
                          </Link>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="news-events">
                      <AccordionTrigger className="text-left">
                        <div className="flex items-center">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          News & Events
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2 pl-6">
                          <Link to="/news" className="block py-2 text-sm hover:text-primary">
                            Latest News
                          </Link>
                          <Link to="/events" className="block py-2 text-sm hover:text-primary">
                            Upcoming Events
                          </Link>
                          <Link to="/calendar" className="block py-2 text-sm hover:text-primary">
                            School Calendar
                          </Link>
                          <Link to="/newsletter" className="block py-2 text-sm hover:text-primary">
                            Newsletter
                          </Link>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="contact">
                      <AccordionTrigger className="text-left">
                        <div className="flex items-center">
                          <PhoneIcon className="mr-2 h-4 w-4" />
                          Contact
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2 pl-6">
                          <Link to="/contact" className="block py-2 text-sm hover:text-primary">
                            General Contact
                          </Link>
                          <Link to="/contact/admissions" className="block py-2 text-sm hover:text-primary">
                            Admissions Office
                          </Link>
                          <Link to="/contact/faculty" className="block py-2 text-sm hover:text-primary">
                            Faculty Directory
                          </Link>
                          <Link to="/contact/visit" className="block py-2 text-sm hover:text-primary">
                            Schedule a Visit
                          </Link>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link to={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
