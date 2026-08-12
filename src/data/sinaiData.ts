import { DiagnosticTest, HealthPackage, Doctor, SampleReportResult } from '../types/sinai';

export const LAB_INFO = {
  name: "Sinai Medical Diagnostics",
  tagline: "Precision Diagnostics • Advanced Pathology & Radiology",
  domain: "sinaimedicaldiagnostics.in",
  emergencyPhone: "+91 98765 12345",
  tollFree: "1800 123 4567",
  email: "care@sinaimedicaldiagnostics.in",
  address: "Sinai Health Tower, Main Road, City Center",
  operatingHours: "24/7 Pathology & Emergency | Radiology: 7:00 AM - 9:00 PM",
  accreditations: ["NABL Certified", "ISO 15189:2012", "ICMR Approved Lab"]
};

export const DIAGNOSTIC_TESTS: DiagnosticTest[] = [
  {
    id: "test-cbc",
    name: "Complete Blood Count (CBC) with ESR",
    category: "Pathology",
    price: 350,
    originalPrice: 500,
    sampleType: "Blood (EDTA)",
    turnaroundTime: "Same Day (4 Hours)",
    fastingRequired: false,
    description: "Evaluates overall health and detects a wide range of disorders including anemia, infection, and leukemia.",
    popular: true
  },
  {
    id: "test-thyroid",
    name: "Thyroid Profile Total (T3, T4, TSH)",
    category: "Pathology",
    price: 499,
    originalPrice: 850,
    sampleType: "Blood (Serum)",
    turnaroundTime: "Same Day",
    fastingRequired: true,
    description: "Assesses thyroid gland function to evaluate hypothyroidism or hyperthyroidism.",
    popular: true
  },
  {
    id: "test-lipid",
    name: "Lipid Profile (Cholesterol & Triglycerides)",
    category: "Pathology",
    price: 550,
    originalPrice: 900,
    sampleType: "Blood (Serum)",
    turnaroundTime: "Same Day",
    fastingRequired: true,
    description: "Measures blood cholesterol and triglyceride levels to assess cardiovascular heart disease risk.",
    popular: true
  },
  {
    id: "test-hba1c",
    name: "HbA1c (Glycated Hemoglobin)",
    category: "Diabetes",
    price: 450,
    originalPrice: 700,
    sampleType: "Blood (EDTA)",
    turnaroundTime: "Same Day",
    fastingRequired: false,
    description: "Reflects average blood sugar levels over the past 3 months for diabetes monitoring.",
    popular: true
  },
  {
    id: "test-lft",
    name: "Liver Function Test (LFT)",
    category: "Pathology",
    price: 650,
    originalPrice: 1100,
    sampleType: "Blood (Serum)",
    turnaroundTime: "Same Day",
    fastingRequired: true,
    description: "Measures enzymes, proteins, and bilirubin to evaluate liver health and liver damage."
  },
  {
    id: "test-kft",
    name: "Kidney Function Test (KFT / RFT)",
    category: "Pathology",
    price: 600,
    originalPrice: 1000,
    sampleType: "Blood & Urine",
    turnaroundTime: "Same Day",
    fastingRequired: true,
    description: "Evaluates kidney function by measuring urea, creatinine, uric acid, and electrolytes."
  },
  {
    id: "test-vitamin-d",
    name: "Vitamin D (25-Hydroxy Total)",
    category: "Wellness",
    price: 999,
    originalPrice: 1800,
    sampleType: "Blood (Serum)",
    turnaroundTime: "24 Hours",
    fastingRequired: false,
    description: "Assesses bone strength, immune health, and vitamin D deficiency levels.",
    popular: true
  },
  {
    id: "test-usg-abdomen",
    name: "Ultrasound Abdomen & Pelvis (USG)",
    category: "Radiology",
    price: 1200,
    originalPrice: 1800,
    sampleType: "Imaging",
    turnaroundTime: "Immediate / Same Day",
    fastingRequired: true,
    description: "High-resolution sonography imaging of abdominal organs including liver, kidneys, gallbladder, and spleen."
  },
  {
    id: "test-ecg",
    name: "12-Lead Digital ECG",
    category: "Cardiology",
    price: 300,
    originalPrice: 500,
    sampleType: "Cardiac Tracing",
    turnaroundTime: "Immediate (15 Mins)",
    fastingRequired: false,
    description: "Records heart rhythm and electrical activity to detect arrhythmias or ischemia."
  }
];

export const HEALTH_PACKAGES: HealthPackage[] = [
  {
    id: "pkg-fullbody-essential",
    title: "Sinai Full Body Essential Package",
    testsIncludedCount: 65,
    price: 1299,
    originalPrice: 3500,
    discountPercentage: 63,
    targetGroup: "All Adults",
    includedCategories: ["CBC", "Lipid Profile", "Liver Function", "Kidney Function", "Fasting Blood Sugar", "Thyroid TSH"],
    popular: true
  },
  {
    id: "pkg-fullbody-advanced",
    title: "Sinai Comprehensive Master Wellness",
    testsIncludedCount: 88,
    price: 2499,
    originalPrice: 6200,
    discountPercentage: 60,
    targetGroup: "Comprehensive Health",
    includedCategories: ["All Essential Tests", "Vitamin D & B12", "HbA1c", "Cardiac Risk Markers", "Iron Profile", "Urine Complete"],
    popular: true
  },
  {
    id: "pkg-senior-citizen",
    title: "Senior Citizen Special Care Package",
    testsIncludedCount: 75,
    price: 1899,
    originalPrice: 4800,
    discountPercentage: 60,
    targetGroup: "Seniors (Age 55+)",
    includedCategories: ["Cardiac Risk", "Bone Health (Calcium & Vit D)", "Kidney & Liver", "Diabetes Profile", "Arthritis Markers"]
  }
];

export const DOCTORS_TEAM: Doctor[] = [
  {
    id: "doc-1",
    name: "Dr. Sarah Al-Sinai, MD",
    designation: "Chief Consultant Pathologist",
    qualification: "MD Pathology, Fellow in Molecular Diagnostics",
    experienceYears: 18,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80",
    specialization: "Histopathology & Hematology"
  },
  {
    id: "doc-2",
    name: "Dr. Rajiv Mehta, MD",
    designation: "Head of Radiology & Imaging",
    qualification: "MD Radiology (AIIMS), DMRD",
    experienceYears: 15,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80",
    specialization: "MRI, CT Scan & USG Diagnostics"
  }
];

export const MOCK_REPORT_DATABASE: Record<string, SampleReportResult> = {
  "SN-1001": {
    sampleId: "SN-1001",
    patientName: "John Doe",
    testName: "Complete Blood Count (CBC) & Lipid Profile",
    date: "2026-07-25",
    status: "Completed",
    downloadUrl: "#pdf-download"
  },
  "SN-1002": {
    sampleId: "SN-1002",
    patientName: "Priya Sharma",
    testName: "Thyroid Profile & HbA1c",
    date: "2026-07-26",
    status: "Processing"
  }
};
