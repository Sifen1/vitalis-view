import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  Bell, 
  Shield, 
  Database, 
  Palette, 
  Clock,
  Mail,
  Phone,
  Lock,
  Globe,
  FileText
} from "lucide-react";

export default function Settings() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground mt-1">Manage your healthcare system preferences</p>
        </div>
        <Badge variant="secondary">Administrator</Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Settings */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5" />
              Profile Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" defaultValue="Sarah" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" defaultValue="Miller" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" defaultValue="sarah.miller@medcare.com" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" defaultValue="+1 (555) 123-4567" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Input id="role" defaultValue="Administrator" disabled />
            </div>
            
            <Button>Save Profile Changes</Button>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Security
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full justify-start">
              <Lock className="w-4 h-4 mr-2" />
              Change Password
            </Button>
            
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium">Two-Factor Authentication</p>
                <p className="text-xs text-muted-foreground">Add extra security to your account</p>
              </div>
              <Switch />
            </div>
            
            <Separator />
            
            <div className="space-y-2">
              <p className="text-sm font-medium">Recent Login Activity</p>
              <div className="space-y-2 text-xs text-muted-foreground">
                <div>Today 2:30 PM - New York, NY</div>
                <div>Yesterday 8:45 AM - New York, NY</div>
                <div>Jan 20, 9:15 AM - New York, NY</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Notifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium">Email Notifications</p>
                <p className="text-xs text-muted-foreground">Receive updates via email</p>
              </div>
              <Switch defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium">Push Notifications</p>
                <p className="text-xs text-muted-foreground">Browser notifications</p>
              </div>
              <Switch defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium">SMS Alerts</p>
                <p className="text-xs text-muted-foreground">Critical alerts via SMS</p>
              </div>
              <Switch />
            </div>
            
            <Separator />
            
            <div className="space-y-3">
              <p className="text-sm font-medium">Notification Types</p>
              
              <div className="flex items-center justify-between">
                <p className="text-sm">New Appointments</p>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <p className="text-sm">Patient Updates</p>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <p className="text-sm">System Alerts</p>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <p className="text-sm">Billing Reminders</p>
                <Switch />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* System Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="w-5 h-5" />
              System Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="timezone">Timezone</Label>
              <Input id="timezone" defaultValue="Eastern Time (ET)" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="dateFormat">Date Format</Label>
              <Input id="dateFormat" defaultValue="MM/DD/YYYY" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="language">Language</Label>
              <Input id="language" defaultValue="English (US)" />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium">Dark Mode</p>
                <p className="text-xs text-muted-foreground">Switch to dark theme</p>
              </div>
              <Switch />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium">Compact View</p>
                <p className="text-xs text-muted-foreground">More data in less space</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* Organization Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Organization
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="orgName">Organization Name</Label>
              <Input id="orgName" defaultValue="MedCare Healthcare System" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input id="address" defaultValue="123 Medical Center Dr, New York, NY 10001" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="orgPhone">Phone</Label>
              <Input id="orgPhone" defaultValue="+1 (555) 000-0000" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="license">License Number</Label>
              <Input id="license" defaultValue="HC-2024-001234" />
            </div>
            
            <Button variant="outline" className="w-full">
              Update Organization Info
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-16 flex-col">
              <FileText className="w-5 h-5 mb-1" />
              Export Data
            </Button>
            <Button variant="outline" className="h-16 flex-col">
              <Database className="w-5 h-5 mb-1" />
              Backup System
            </Button>
            <Button variant="outline" className="h-16 flex-col">
              <Mail className="w-5 h-5 mb-1" />
              Email Settings
            </Button>
            <Button variant="outline" className="h-16 flex-col">
              <Clock className="w-5 h-5 mb-1" />
              System Logs
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}