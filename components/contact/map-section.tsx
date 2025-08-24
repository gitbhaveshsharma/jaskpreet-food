import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export function MapSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-heading">Find Us</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-4">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=123+Industrial+Area,+Food+Park,+New+Delhi&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <Button
          asChild
          variant="outline"
          className="w-full bg-transparent"
        >
          <a
            href="https://www.google.com/maps/search/?api=1&query=123+Industrial+Area,+Food+Park,+New+Delhi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Open in Google Maps
          </a>
        </Button>
      </CardContent>
    </Card>
  )
}
