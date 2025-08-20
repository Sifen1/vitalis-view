export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  address: string;
  bloodType: string;
  allergies: string[];
  lastVisit: string;
  status: 'Active' | 'Inactive';
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  email: string;
  phone: string;
  experience: number;
  department: string;
  availability: string;
  rating: number;
  patients: number;
}

export interface Appointment {
  id: string;
  patientId: string;
  patientName: string;
  doctorId: string;
  doctorName: string;
  date: string;
  time: string;
  type: string;
  status: 'Scheduled' | 'Completed' | 'Cancelled' | 'In Progress';
  notes?: string;
}

export interface BillRecord {
  id: string;
  patientId: string;
  patientName: string;
  amount: number;
  date: string;
  status: 'Paid' | 'Pending' | 'Overdue';
  services: string[];
  insurance: boolean;
}

export const mockPatients: Patient[] = [
  {
    id: '1',
    name: 'John Doe',
    age: 35,
    gender: 'Male',
    email: 'john.doe@email.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main St, New York, NY 10001',
    bloodType: 'O+',
    allergies: ['Penicillin', 'Shellfish'],
    lastVisit: '2024-01-15',
    status: 'Active'
  },
  {
    id: '2',
    name: 'Jane Smith',
    age: 28,
    gender: 'Female',
    email: 'jane.smith@email.com',
    phone: '+1 (555) 987-6543',
    address: '456 Oak Ave, Los Angeles, CA 90210',
    bloodType: 'A-',
    allergies: ['Latex'],
    lastVisit: '2024-01-20',
    status: 'Active'
  },
  {
    id: '3',
    name: 'Michael Johnson',
    age: 45,
    gender: 'Male',
    email: 'michael.j@email.com',
    phone: '+1 (555) 456-7890',
    address: '789 Pine St, Chicago, IL 60601',
    bloodType: 'B+',
    allergies: [],
    lastVisit: '2024-01-10',
    status: 'Active'
  },
  {
    id: '4',
    name: 'Emily Davis',
    age: 52,
    gender: 'Female',
    email: 'emily.davis@email.com',
    phone: '+1 (555) 321-0987',
    address: '321 Elm St, Houston, TX 77001',
    bloodType: 'AB+',
    allergies: ['Aspirin'],
    lastVisit: '2024-01-05',
    status: 'Inactive'
  },
];

export const mockDoctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Wilson',
    specialty: 'Cardiology',
    email: 'sarah.wilson@medcare.com',
    phone: '+1 (555) 111-2222',
    experience: 12,
    department: 'Cardiology',
    availability: 'Mon-Fri 9AM-5PM',
    rating: 4.8,
    patients: 245
  },
  {
    id: '2',
    name: 'Dr. Robert Brown',
    specialty: 'Orthopedics',
    email: 'robert.brown@medcare.com',
    phone: '+1 (555) 333-4444',
    experience: 8,
    department: 'Orthopedics',
    availability: 'Mon-Wed 8AM-4PM',
    rating: 4.6,
    patients: 189
  },
  {
    id: '3',
    name: 'Dr. Lisa Chen',
    specialty: 'Pediatrics',
    email: 'lisa.chen@medcare.com',
    phone: '+1 (555) 555-6666',
    experience: 15,
    department: 'Pediatrics',
    availability: 'Tue-Sat 10AM-6PM',
    rating: 4.9,
    patients: 312
  },
  {
    id: '4',
    name: 'Dr. David Martinez',
    specialty: 'Neurology',
    email: 'david.martinez@medcare.com',
    phone: '+1 (555) 777-8888',
    experience: 20,
    department: 'Neurology',
    availability: 'Mon-Thu 9AM-3PM',
    rating: 4.7,
    patients: 156
  },
];

export const mockAppointments: Appointment[] = [
  {
    id: '1',
    patientId: '1',
    patientName: 'John Doe',
    doctorId: '1',
    doctorName: 'Dr. Sarah Wilson',
    date: '2024-01-25',
    time: '10:00 AM',
    type: 'Consultation',
    status: 'Scheduled',
    notes: 'Regular checkup'
  },
  {
    id: '2',
    patientId: '2',
    patientName: 'Jane Smith',
    doctorId: '3',
    doctorName: 'Dr. Lisa Chen',
    date: '2024-01-25',
    time: '2:00 PM',
    type: 'Follow-up',
    status: 'In Progress',
    notes: 'Post-surgery follow-up'
  },
  {
    id: '3',
    patientId: '3',
    patientName: 'Michael Johnson',
    doctorId: '2',
    doctorName: 'Dr. Robert Brown',
    date: '2024-01-24',
    time: '11:30 AM',
    type: 'Surgery',
    status: 'Completed',
    notes: 'Knee replacement surgery'
  },
  {
    id: '4',
    patientId: '4',
    patientName: 'Emily Davis',
    doctorId: '4',
    doctorName: 'Dr. David Martinez',
    date: '2024-01-26',
    time: '9:00 AM',
    type: 'Consultation',
    status: 'Scheduled',
    notes: 'Neurological assessment'
  },
];

export const mockBilling: BillRecord[] = [
  {
    id: '1',
    patientId: '1',
    patientName: 'John Doe',
    amount: 450.00,
    date: '2024-01-15',
    status: 'Paid',
    services: ['Consultation', 'Blood Test', 'X-Ray'],
    insurance: true
  },
  {
    id: '2',
    patientId: '2',
    patientName: 'Jane Smith',
    amount: 1250.00,
    date: '2024-01-20',
    status: 'Pending',
    services: ['Surgery', 'Anesthesia', 'Post-op Care'],
    insurance: true
  },
  {
    id: '3',
    patientId: '3',
    patientName: 'Michael Johnson',
    amount: 280.00,
    date: '2024-01-10',
    status: 'Overdue',
    services: ['Consultation', 'MRI Scan'],
    insurance: false
  },
  {
    id: '4',
    patientId: '4',
    patientName: 'Emily Davis',
    amount: 320.00,
    date: '2024-01-05',
    status: 'Paid',
    services: ['Consultation', 'CT Scan'],
    insurance: true
  },
];

export const dashboardStats = {
  totalPatients: 1247,
  totalDoctors: 42,
  todayAppointments: 28,
  pendingBills: 15,
  monthlyRevenue: 125000,
  patientGrowth: 8.2,
  appointmentData: [
    { month: 'Jan', appointments: 324 },
    { month: 'Feb', appointments: 287 },
    { month: 'Mar', appointments: 412 },
    { month: 'Apr', appointments: 389 },
    { month: 'May', appointments: 445 },
    { month: 'Jun', appointments: 423 },
  ],
  revenueData: [
    { month: 'Jan', revenue: 98000 },
    { month: 'Feb', revenue: 87000 },
    { month: 'Mar', revenue: 125000 },
    { month: 'Apr', revenue: 112000 },
    { month: 'May', revenue: 134000 },
    { month: 'Jun', revenue: 145000 },
  ],
  departmentData: [
    { name: 'Cardiology', value: 35, patients: 245 },
    { name: 'Orthopedics', value: 25, patients: 189 },
    { name: 'Pediatrics', value: 20, patients: 156 },
    { name: 'Neurology', value: 12, patients: 89 },
    { name: 'Others', value: 8, patients: 64 },
  ]
};