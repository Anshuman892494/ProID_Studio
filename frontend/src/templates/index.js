import CorporateModern from "./CorporateModern";
import StudentAcademic from "./StudentAcademic";
import MinimalistExecutive from "./MinimalistExecutive";
import HealthcareMedical from "./HealthcareMedical";
import CreativeAgency from "./CreativeAgency";
import VIPEventPress from "./VIPEventPress";
import SecurityOfficer from "./SecurityOfficer";
import MinimalistClean from "./MinimalistClean";
import SchoolPrimaryBadge from "./SchoolPrimaryBadge";
import HighSchoolScholar from "./HighSchoolScholar";
import UniversityCampusVertical from "./UniversityCampusVertical";
import FacultyStaffPass from "./FacultyStaffPass";
import BoardingSchoolPass from "./BoardingSchoolPass";

export const templatesCatalog = [
  // --- EDUCATION & SCHOOL TEMPLATES ---
  {
    id: "primary-school",
    name: "Primary & Junior School Badge",
    category: "Education",
    badge: "Kids & Primary",
    badgeColor: "bg-amber-400 text-slate-950 font-black",
    description: "Bright sky blue & yellow ID badge tailored for primary school students with parent contact & principal stamp area.",
    component: SchoolPrimaryBadge,
    defaultColor: "#0284c7",
    sampleData: {
      name: "RUDRAKSH SHARMA",
      designation: "GRADE 4 - SEC B",
      idNumber: "ADM-2026-441",
      department: "RUBY HOUSE / GR 4",
      phone: "+91 9876543210",
      organization: "ST. XAVIER PRIMARY SCHOOL"
    }
  },
  {
    id: "high-school",
    name: "High School Senior Scholar",
    category: "Education",
    badge: "High School",
    badgeColor: "bg-indigo-600 text-white font-black",
    description: "Sleek Indigo & Cyan scholar pass for high school students with library barcode & science stream tags.",
    component: HighSchoolScholar,
    defaultColor: "#312e81",
    sampleData: {
      name: "AARAV KAPOOR",
      designation: "CLASS 12 - SCIENCE STREAM",
      idNumber: "SCH-2026-90",
      department: "PHYSICS & MATH / APOLLO",
      phone: "+91 9876543210",
      organization: "CAMBRIDGE HIGH SCHOOL"
    }
  },
  {
    id: "university-campus",
    name: "University NFC Campus Pass",
    category: "Education",
    badge: "University",
    badgeColor: "bg-emerald-600 text-white font-black",
    description: "Emerald green campus pass for university graduates & researchers with smart NFC tap indicator.",
    component: UniversityCampusVertical,
    defaultColor: "#064e3b",
    sampleData: {
      name: "KABIR MEHTA",
      designation: "POSTGRADUATE SCHOLAR",
      idNumber: "PG-2026-102",
      department: "ARTIFICIAL INTELLIGENCE",
      phone: "+91 9876543210",
      organization: "STANFORD UNIVERSITY"
    }
  },
  {
    id: "faculty-staff",
    name: "Academic Faculty & Professor",
    category: "Education",
    badge: "Faculty Pass",
    badgeColor: "bg-rose-900 text-amber-300 font-black",
    description: "Burgundy & Gold executive academic badge for university professors, teachers & department heads.",
    component: FacultyStaffPass,
    defaultColor: "#4c0519",
    sampleData: {
      name: "DR. ROBERT LANGDON",
      designation: "PROFESSOR OF SYMBOLOGY",
      idNumber: "FAC-9011",
      department: "HUMANITIES & HISTORY",
      phone: "+91 9876543210",
      organization: "HARVARD FACULTY"
    }
  },
  {
    id: "boarding-school",
    name: "Boarding School Resident Pass",
    category: "Education",
    badge: "Boarding Pass",
    badgeColor: "bg-amber-500 text-slate-950 font-black",
    description: "Royal navy & gold crest design for residential boarding school students with warden telephone & gate permit.",
    component: BoardingSchoolPass,
    defaultColor: "#0f172a",
    sampleData: {
      name: "ETHAN HUNT",
      designation: "RESIDENT STUDENT",
      idNumber: "BRD-2026-08",
      department: "WINDSOR DORM / GR 11",
      phone: "+91 9876543210",
      organization: "ROYAL BOARDING ACADEMY"
    }
  },

  // --- CORPORATE & OTHER CATEGORIES ---
  {
    id: "corporate",
    name: "Corporate Sapphire Elite",
    category: "Corporate",
    badge: "Popular",
    badgeColor: "bg-blue-600 text-white",
    description: "Deep Sapphire gradient wave header, verified gold ID tag, overlapping photo frame & clearance footer.",
    component: CorporateModern,
    defaultColor: "#1e3a8a",
    sampleData: {
      name: "ARJUN VERMA",
      designation: "SENIOR SOFTWARE ENGINEER",
      idNumber: "EMP-98241",
      department: "ENGINEERING & IT",
      phone: "+91 9876543210",
      organization: "PROID TECHNOLOGIES"
    }
  },
  {
    id: "student",
    name: "University Prestige Pass",
    category: "Education",
    badge: "Top Rated",
    badgeColor: "bg-rose-700 text-white",
    description: "Deep Crimson & Gold Academic Banner with gold foil frame, course details & registrar seal.",
    component: StudentAcademic,
    defaultColor: "#881337",
    sampleData: {
      name: "PRIYA SHARMA",
      designation: "UNDERGRADUATE STUDENT",
      idNumber: "STU-2026-089",
      department: "COMPUTER SCIENCE & ENG",
      phone: "+91 9988776655",
      organization: "OXFORD UNIVERSITY"
    }
  },
  {
    id: "executive",
    name: "Cybertech Obsidian Executive",
    category: "Executive",
    badge: "New",
    badgeColor: "bg-cyan-500 text-slate-950 font-black",
    description: "Midnight Obsidian & Neon Cyan gradient with metallic lines and Level-5 clearance tag.",
    component: MinimalistExecutive,
    defaultColor: "#0f172a",
    sampleData: {
      name: "VIKRAMADITYA SINGH",
      designation: "CHIEF TECHNOLOGY OFFICER",
      idNumber: "CTO-001",
      department: "CYBERSECURITY LABS",
      phone: "+91 9876500000",
      organization: "NEXUS INNOVATIONS"
    }
  },
  {
    id: "medical",
    name: "Healthcare & Specialist",
    category: "Healthcare",
    badge: "Specialized",
    badgeColor: "bg-sky-600 text-white",
    description: "Hospital staff ID card with emergency medical cross, ICU access badge & doctor avatar frame.",
    component: HealthcareMedical,
    defaultColor: "#0284c7",
    sampleData: {
      name: "DR. ANANYA ROY",
      designation: "SENIOR CARDIOLOGIST",
      idNumber: "MED-88492",
      department: "CARDIOLOGY DEPT",
      phone: "+91 9999911111",
      organization: "CITY CARE HOSPITAL"
    }
  },
  {
    id: "creative",
    name: "Creative Agency Prism",
    category: "Creative",
    badge: "Featured",
    badgeColor: "bg-amber-400 text-slate-950 font-black",
    description: "Vibrant sunset prism gradient tailored for UI/UX designers, creative directors & media producers.",
    component: CreativeAgency,
    defaultColor: "#7c3aed",
    sampleData: {
      name: "ROHAN MEHTA",
      designation: "LEAD UI/UX DESIGNER",
      idNumber: "DES-9901",
      department: "BRAND STRATEGY",
      phone: "+91 9876543210",
      organization: "PIXEL LAB STUDIO"
    }
  },
  {
    id: "vip",
    name: "VIP Gold Luxury Pass",
    category: "Events",
    badge: "VIP Exclusive",
    badgeColor: "bg-amber-500 text-slate-950 font-black",
    description: "Gold & Obsidian VIP Event Pass with lanyard slot graphic, speaker badge & venue clearance.",
    component: VIPEventPress,
    defaultColor: "#d97706",
    sampleData: {
      name: "MARCUS VANCE",
      designation: "KEYNOTE SPEAKER & VIP",
      idNumber: "VIP-8809",
      department: "MAIN STAGE & LOUNGE",
      phone: "+91 9876543210",
      organization: "GLOBAL TECH SUMMIT 2026"
    }
  },
  {
    id: "security",
    name: "Tactical Defense Officer",
    category: "Security",
    badge: "Tactical",
    badgeColor: "bg-red-600 text-white font-black",
    description: "Matte Black & Steel Blue tactical layout with metal shield icon & armed clearance code.",
    component: SecurityOfficer,
    defaultColor: "#0f172a",
    sampleData: {
      name: "OFFICER RYAN CROSS",
      designation: "CHIEF SECURITY OFFICER",
      idNumber: "SEC-9041",
      department: "ARMED RESPONSE UNIT",
      phone: "+91 9876543210",
      organization: "APEX SECURITY DIVISION"
    }
  },
  {
    id: "swiss",
    name: "Swiss Monochrome Minimalist",
    category: "Minimalist",
    badge: "Swiss Clean",
    badgeColor: "bg-slate-900 text-white font-black",
    description: "Ultra-clean Swiss typography with bold borders & high-contrast monochrome aesthetic.",
    component: MinimalistClean,
    defaultColor: "#0f172a",
    sampleData: {
      name: "CHRISTIAN BALE",
      designation: "CREATIVE DIRECTOR",
      idNumber: "SWISS-091",
      department: "VISUAL ARTS STUDIO",
      phone: "+91 9876543210",
      organization: "STUDIO MONOCHROME"
    }
  }
];

export default templatesCatalog;
