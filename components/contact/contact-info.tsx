import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { COMPANY_INFO } from "@/lib/constants"

export function ContactInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-heading">Contact Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Row 1: Phone & Email */}
          <div className="flex items-start space-x-3">
            <Phone className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="font-medium">Phone</p>
              <p className="text-muted-foreground">{COMPANY_INFO.phone}</p>
              <p className="text-sm text-muted-foreground">Sales & General Inquiries</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Mail className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="font-medium">Email</p>
              <p className="text-muted-foreground">{COMPANY_INFO.email}</p>
              <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
            </div>
          </div>
          {/* Row 2: Address & Business Hours */}
          <div className="flex items-start space-x-3">
            <MapPin className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="font-medium">Address</p>
              <p className="text-muted-foreground">
                {COMPANY_INFO.address.street}
                <br />
                {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state}
                <br />
                {COMPANY_INFO.address.pincode}
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Clock className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="font-medium">Business Hours</p>
              <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-muted-foreground">Saturday: 9:00 AM - 2:00 PM</p>
              <p className="text-sm text-muted-foreground">Quality Hotline: 24/7</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
