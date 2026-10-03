import { redirect } from "next/navigation"

// The site is a single page now; keep old links working.
export default function ContactPage() {
  redirect("/#contact")
}
