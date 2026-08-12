export interface DiagnosticTest {
  id: string;
  name: string;
  category: 'Pathology' | 'Radiology' | 'Cardiology' | 'Diabetes' | 'Wellness';
  price: number;
  originalPrice?: number;
  sampleType: string; // e.g. "Blood", "Urine", "Swab", "Imaging"
  turnaroundTime: string; // e.g. "Same Day", "24 Hours"
  fastingRequired: boolean;
  description: string;
  popular?: boolean;
}

export interface HealthPackage {
  id: string;
  title: string;
  testsIncludedCount: number;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  targetGroup: string;
  includedCategories: string[];
  popular?: boolean;
}

export interface Doctor {
  id: string;
  name: string;
  designation: string;
  qualification: string;
  experienceYears: number;
  image: string;
  specialization: string;
}

export interface SampleReportResult {
  sampleId: string;
  patientName: string;
  testName: string;
  date: string;
  status: 'Completed' | 'Processing' | 'Sample Collected';
  downloadUrl?: string;
}
