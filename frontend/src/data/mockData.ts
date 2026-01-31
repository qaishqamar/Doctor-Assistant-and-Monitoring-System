export interface AIReport {
  id: string;
  patientName: string;
  primarySymptom: string;
  severity: 'Critical' | 'High' | 'Moderate' | 'Low';
  submittedTime: string;
  status: 'New' | 'Reviewed' | 'In Progress';
  mrn: string;
  aiAnalysis: string;
  recommendations: string[];
  vitalSigns?: {
    heartRate: number;
    bloodPressure: string;
    temperature: number;
    oxygenSaturation: number;
  };
}

export interface Alert {
  id: string;
  patientId: string;
  patientName: string;
  message: string;
  severity: 'Critical' | 'Warning' | 'Info';
  timestamp: string;
  read: boolean;
}

export interface Patient {
  id: string;
  name: string;
  dob: string;
  gender: 'Male' | 'Female' | 'Other';
  mrn: string;
  lastVisit: string;
  primaryCondition: string;
  medications: string[];
  adherence: number; // percentage
  riskLevel: 'Low' | 'Medium' | 'High';
}

export interface AdherenceDataPoint {
  date: string;
  adherence: number;
}

export const mockAIReports: AIReport[] = [
  {
    id: '1',
    patientName: 'John Smith',
    primarySymptom: 'Chest Pain',
    severity: 'Critical',
    submittedTime: '2024-11-15T09:30:00Z',
    status: 'New',
    mrn: 'MRN-12345',
    aiAnalysis: 'Elevated cardiac markers detected. Possible acute coronary syndrome.',
    recommendations: [
      'Immediate ECG and troponin levels',
      'Consider cardiac catheterization',
      'Monitor vitals closely'
    ],
    vitalSigns: {
      heartRate: 98,
      bloodPressure: '145/92',
      temperature: 98.6,
      oxygenSaturation: 97
    }
  },
  {
    id: '2',
    patientName: 'Mary Johnson',
    primarySymptom: 'Shortness of Breath',
    severity: 'High',
    submittedTime: '2024-11-15T08:15:00Z',
    status: 'New',
    mrn: 'MRN-67890',
    aiAnalysis: 'Possible COPD exacerbation with signs of respiratory distress.',
    recommendations: [
      'Administer bronchodilators',
      'Check arterial blood gas',
      'Consider corticosteroids'
    ],
    vitalSigns: {
      heartRate: 110,
      bloodPressure: '130/85',
      temperature: 99.2,
      oxygenSaturation: 89
    }
  },
  {
    id: '3',
    patientName: 'Robert Davis',
    primarySymptom: 'Abdominal Pain',
    severity: 'Moderate',
    submittedTime: '2024-11-15T07:45:00Z',
    status: 'In Progress',
    mrn: 'MRN-54321',
    aiAnalysis: 'Possible appendicitis with elevated inflammatory markers.',
    recommendations: [
      'CT scan abdomen/pelvis',
      'Monitor for peritoneal signs',
      'Prepare for possible surgery'
    ]
  },
  {
    id: '4',
    patientName: 'Patricia Wilson',
    primarySymptom: 'Headache',
    severity: 'Low',
    submittedTime: '2024-11-15T06:30:00Z',
    status: 'Reviewed',
    mrn: 'MRN-09876',
    aiAnalysis: 'Likely tension headache, no concerning features noted.',
    recommendations: [
      'Standard analgesics',
      'Stress management',
      'Follow up if symptoms persist'
    ]
  },
  {
    id: '5',
    patientName: 'Michael Brown',
    primarySymptom: 'Fever',
    severity: 'High',
    submittedTime: '2024-11-15T05:20:00Z',
    status: 'New',
    mrn: 'MRN-11223',
    aiAnalysis: 'High fever with elevated white count suggests possible sepsis.',
    recommendations: [
      'Blood cultures',
      'IV antibiotics',
      'Fluid resuscitation'
    ]
  }
];

export const mockAlerts: Alert[] = [
  {
    id: 'a1',
    patientId: 'p1',
    patientName: 'John Smith',
    message: 'Medication not taken for 2 days',
    severity: 'Critical',
    timestamp: '2024-11-15T10:15:00Z',
    read: false
  },
  {
    id: 'a2',
    patientId: 'p2',
    patientName: 'Mary Johnson',
    message: 'Blood pressure reading above normal range',
    severity: 'Warning',
    timestamp: '2024-11-15T09:45:00Z',
    read: false
  },
  {
    id: 'a3',
    patientId: 'p3',
    patientName: 'Robert Davis',
    message: 'Appointment scheduled for tomorrow',
    severity: 'Info',
    timestamp: '2024-11-15T08:30:00Z',
    read: true
  },
  {
    id: 'a4',
    patientId: 'p4',
    patientName: 'Sarah Miller',
    message: 'Lab results showing improvement',
    severity: 'Info',
    timestamp: '2024-11-15T07:20:00Z',
    read: true
  }
];

export const mockPatients: Patient[] = [
  {
    id: 'p1',
    name: 'John Smith',
    dob: '1965-04-12',
    gender: 'Male',
    mrn: 'MRN-12345',
    lastVisit: '2024-11-10',
    primaryCondition: 'Hypertension',
    medications: ['Lisinopril', 'Atorvastatin'],
    adherence: 85,
    riskLevel: 'Low'
  },
  {
    id: 'p2',
    name: 'Mary Johnson',
    dob: '1978-09-23',
    gender: 'Female',
    mrn: 'MRN-67890',
    lastVisit: '2024-11-12',
    primaryCondition: 'Diabetes Type 2',
    medications: ['Metformin', 'Insulin'],
    adherence: 65,
    riskLevel: 'Medium'
  },
  {
    id: 'p3',
    name: 'Robert Davis',
    dob: '1952-12-05',
    gender: 'Male',
    mrn: 'MRN-54321',
    lastVisit: '2024-11-08',
    primaryCondition: 'Heart Failure',
    medications: ['Furosemide', 'Carvedilol', 'Lisinopril'],
    adherence: 92,
    riskLevel: 'Low'
  },
  {
    id: 'p4',
    name: 'Patricia Wilson',
    dob: '1985-03-18',
    gender: 'Female',
    mrn: 'MRN-09876',
    lastVisit: '2024-11-14',
    primaryCondition: 'Anxiety Disorder',
    medications: ['Sertraline'],
    adherence: 78,
    riskLevel: 'Low'
  },
  {
    id: 'p5',
    name: 'Michael Brown',
    dob: '1945-07-30',
    gender: 'Male',
    mrn: 'MRN-11223',
    lastVisit: '2024-11-13',
    primaryCondition: 'COPD',
    medications: ['Albuterol', 'Tiotropium'],
    adherence: 45,
    riskLevel: 'High'
  },
  {
    id: 'p6',
    name: 'Sarah Miller',
    dob: '1990-11-02',
    gender: 'Female',
    mrn: 'MRN-44556',
    lastVisit: '2024-11-05',
    primaryCondition: 'Hypothyroidism',
    medications: ['Levothyroxine'],
    adherence: 95,
    riskLevel: 'Low'
  },
  {
    id: 'p7',
    name: 'David Taylor',
    dob: '1972-01-15',
    gender: 'Male',
    mrn: 'MRN-77889',
    lastVisit: '2024-11-11',
    primaryCondition: 'Chronic Kidney Disease',
    medications: ['Lisinopril', 'Ferrous Sulfate'],
    adherence: 60,
    riskLevel: 'Medium'
  },
  {
    id: 'p8',
    name: 'Jennifer Lee',
    dob: '1988-06-27',
    gender: 'Female',
    mrn: 'MRN-99001',
    lastVisit: '2024-11-09',
    primaryCondition: 'Rheumatoid Arthritis',
    medications: ['Methotrexate', 'Prednisone'],
    adherence: 88,
    riskLevel: 'Low'
  }
];

export const mockAdherenceData: Record<string, AdherenceDataPoint[]> = {
  p1: Array.from({ length: 30 }, (_, i) => ({
    date: `${11}/${i + 1}/24`,
    adherence: 70 + Math.floor(Math.random() * 30) // Random adherence between 70-99%
  })),
  p2: Array.from({ length: 30 }, (_, i) => ({
    date: `${11}/${i + 1}/24`,
    adherence: 50 + Math.floor(Math.random() * 40) // Random adherence between 50-89%
  })),
  p3: Array.from({ length: 30 }, (_, i) => ({
    date: `${11}/${i + 1}/24`,
    adherence: 80 + Math.floor(Math.random() * 20) // Random adherence between 80-99%
  })),
  p4: Array.from({ length: 30 }, (_, i) => ({
    date: `${11}/${i + 1}/24`,
    adherence: 75 + Math.floor(Math.random() * 20) // Random adherence between 75-94%
  })),
  p5: Array.from({ length: 30 }, (_, i) => ({
    date: `${11}/${i + 1}/24`,
    adherence: 30 + Math.floor(Math.random() * 40) // Random adherence between 30-69%
  }))
};