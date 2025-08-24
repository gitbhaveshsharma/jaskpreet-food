import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Users, AlertTriangle, Phone } from "lucide-react"

export function AuditPolicySection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">Audits & Recall Policy</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent audit processes and comprehensive recall procedures ensuring customer safety
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Users className="h-6 w-6 text-primary" />
                <h3 className="font-heading font-bold text-xl">Audit Schedule</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="font-medium">Internal Audits</span>
                  <span className="text-muted-foreground">Monthly</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="font-medium">Third-party Audits</span>
                  <span className="text-muted-foreground">Quarterly</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="font-medium">Certification Audits</span>
                  <span className="text-muted-foreground">Annual</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium">Customer Audits</span>
                  <span className="text-muted-foreground">On Request</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <AlertTriangle className="h-6 w-6 text-primary" />
                <h3 className="font-heading font-bold text-xl">Recall Procedure</h3>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold">Immediate Response (0-2 hours)</h4>
                  <p className="text-sm text-muted-foreground">
                    Product identification, risk assessment, and immediate containment measures.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Notification (2-6 hours)</h4>
                  <p className="text-sm text-muted-foreground">
                    Customer notification, regulatory reporting, and public communication if required.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Recovery (6-24 hours)</h4>
                  <p className="text-sm text-muted-foreground">
                    Product retrieval, investigation, corrective actions, and documentation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 bg-primary text-primary-foreground">
          <CardContent className="p-8 text-center">
            <h3 className="font-heading font-bold text-xl mb-4">24/7 Quality Hotline</h3>
            <p className="mb-6 opacity-90">
              For any quality concerns or to report issues, our dedicated quality team is available around the clock.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                <Phone className="h-4 w-4 mr-2" />
                Call +91 98765 43211
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <FileText className="h-4 w-4 mr-2" />
                Download Policy
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
