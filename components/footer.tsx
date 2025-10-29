"use client"
import { Button } from "@/components/ui/button"
import { GithubIcon, LinkedinIcon, MailIcon, ArrowUpIcon } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-muted/30 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-primary mb-2">M. Bhuvaneswar</h3>
            <p className="text-muted-foreground max-w-md">
              Computer Science Engineering student passionate about creating innovative solutions through code and
              technology.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-4">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/BHUVI-SHIP-IT"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <GithubIcon className="h-5 w-5" />
                </a>
              </Button>

              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://www.linkedin.com/in/bhuvaneswar123/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
              </Button>

              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:bhuvaneswar981@gmail.com" aria-label="Email">
                  <MailIcon className="h-5 w-5" />
                </a>
              </Button>
            </div>

            <Button variant="outline" size="sm" onClick={scrollToTop} className="gap-2">
              <ArrowUpIcon className="h-4 w-4" />
              Back to Top
            </Button>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} M. Bhuvaneswar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
