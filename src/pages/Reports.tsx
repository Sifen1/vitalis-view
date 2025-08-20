import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area
} from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { 
  Download,
  FileText,
  TrendingUp,
  Users,
  Calendar,
  DollarSign,
  Activity
} from "lucide-react";
import { dashboardStats } from "@/data/mockData";
import { GenerateReportModal } from "@/components/modals/GenerateReportModal";

const COLORS = ['hsl(213, 94%, 68%)', 'hsl(213, 88%, 73%)', 'hsl(213, 82%, 78%)', 'hsl(213, 76%, 83%)', 'hsl(213, 70%, 88%)'];

const patientAgeData = [
  { range: '0-18', count: 145 },
  { range: '19-35', count: 287 },
  { range: '36-50', count: 412 },
  { range: '51-65', count: 298 },
  { range: '65+', count: 105 },
];

const treatmentOutcomes = [
  { month: 'Jan', successful: 94, complications: 6 },
  { month: 'Feb', successful: 87, complications: 13 },
  { month: 'Mar', successful: 96, complications: 4 },
  { month: 'Apr', successful: 89, complications: 11 },
  { month: 'May', successful: 92, complications: 8 },
  { month: 'Jun', successful: 95, complications: 5 },
];

export default function Reports() {
  const [isGenerateModalOpen, setIsGenerateModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Reports & Analytics</h1>
          <p className="text-muted-foreground mt-1">Comprehensive healthcare analytics and insights</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Data
          </Button>
          <Button onClick={() => setIsGenerateModalOpen(true)}>
            <FileText className="w-4 h-4 mr-2" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">94.2%</div>
                <p className="text-sm text-muted-foreground">Treatment Success Rate</p>
              </div>
              <Activity className="w-8 h-8 text-green-500" />
            </div>
            <div className="mt-2">
              <Badge variant="secondary" className="text-green-600">
                <TrendingUp className="w-3 h-3 mr-1" />
                +2.1%
              </Badge>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">12.5</div>
                <p className="text-sm text-muted-foreground">Avg Length of Stay (days)</p>
              </div>
              <Calendar className="w-8 h-8 text-primary" />
            </div>
            <div className="mt-2">
              <Badge variant="secondary" className="text-red-600">
                -0.8 days
              </Badge>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">4.7/5</div>
                <p className="text-sm text-muted-foreground">Patient Satisfaction</p>
              </div>
              <Users className="w-8 h-8 text-yellow-500" />
            </div>
            <div className="mt-2">
              <Badge variant="secondary" className="text-green-600">
                <TrendingUp className="w-3 h-3 mr-1" />
                +0.3
              </Badge>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">$2.4M</div>
                <p className="text-sm text-muted-foreground">Quarterly Revenue</p>
              </div>
              <DollarSign className="w-8 h-8 text-green-500" />
            </div>
            <div className="mt-2">
              <Badge variant="secondary" className="text-green-600">
                <TrendingUp className="w-3 h-3 mr-1" />
                +15.2%
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Revenue vs Appointments Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                revenue: {
                  label: "Revenue ($K)",
                  color: "hsl(213, 94%, 68%)",
                },
                appointments: {
                  label: "Appointments",
                  color: "hsl(213, 88%, 73%)",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={dashboardStats.appointmentData.map((item, index) => ({
                  ...item,
                  revenue: dashboardStats.revenueData[index]?.revenue / 1000 || 0
                }))}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area 
                    type="monotone" 
                    dataKey="revenue" 
                    stackId="1"
                    stroke="var(--color-revenue)" 
                    fill="var(--color-revenue)"
                    fillOpacity={0.3}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="appointments" 
                    stackId="2"
                    stroke="var(--color-appointments)" 
                    fill="var(--color-appointments)"
                    fillOpacity={0.3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Patient Age Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                count: {
                  label: "Patients",
                  color: "hsl(213, 94%, 68%)",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={patientAgeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="range" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="count" fill="var(--color-count)" radius={4} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Department Workload</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                patients: {
                  label: "Patients",
                  color: "hsl(213, 94%, 68%)",
                },
              }}
              className="h-[250px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={dashboardStats.departmentData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="patients"
                  >
                    {dashboardStats.departmentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
            <div className="mt-4 space-y-2">
              {dashboardStats.departmentData.map((dept, index) => (
                <div key={dept.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    />
                    <span>{dept.name}</span>
                  </div>
                  <span className="font-medium">{dept.patients}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Treatment Outcomes</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                successful: {
                  label: "Successful",
                  color: "hsl(142, 76%, 36%)",
                },
                complications: {
                  label: "Complications",
                  color: "hsl(0, 84%, 60%)",
                },
              }}
              className="h-[250px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={treatmentOutcomes}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="successful" fill="var(--color-successful)" radius={4} />
                  <Bar dataKey="complications" fill="var(--color-complications)" radius={4} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Quick Reports */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-20 flex-col">
              <FileText className="w-6 h-6 mb-2" />
              Monthly Summary
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <Users className="w-6 h-6 mb-2" />
              Patient Demographics
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <Activity className="w-6 h-6 mb-2" />
              Treatment Outcomes
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <DollarSign className="w-6 h-6 mb-2" />
              Financial Report
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <Calendar className="w-6 h-6 mb-2" />
              Appointment Analytics
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <TrendingUp className="w-6 h-6 mb-2" />
              Performance Metrics
            </Button>
          </div>
        </CardContent>
      </Card>

      <GenerateReportModal 
        open={isGenerateModalOpen} 
        onOpenChange={setIsGenerateModalOpen}
      />
    </div>
  );
}