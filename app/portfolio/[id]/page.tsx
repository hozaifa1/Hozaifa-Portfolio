import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Github, ArrowLeft, CheckCircle2, Package, Users, BarChart3, FileText, Shield, Zap } from 'lucide-react';
import { projects } from '@/lib/data';
import Contact from '@/components/Contact';
import ProjectHeroImage from '@/components/ProjectHeroImage';
import ProjectScreens from '@/components/ProjectScreens';

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

const erpFeatures = [
  {
    title: "Foreign Order Management",
    icon: Package,
    description: "Complete order lifecycle tracking with style hierarchy, fabric specifications, and buyer information.",
    details: [
      "Order + style hierarchy with fabric specs and colorways",
      "Document stack with cloud storage",
      "Categorization pipelines (Upcoming, Running, Archived)",
      "Approval history timelines"
    ]
  },
  {
    title: "Development & Sampling",
    icon: FileText,
    description: "Comprehensive sampling workflow from Lab Dip to Production samples.",
    details: [
      "Lab Dip, Hand Loom, Strike-Off, PP sample tracking",
      "Versioned submissions with courier logging",
      "Mandatory resubmission plans",
      "Photo viewer dialog for instant review"
    ]
  },
  {
    title: "Financial Management",
    icon: BarChart3,
    description: "Multi-version invoicing and Letter of Credit tracking system.",
    details: [
      "Proforma Invoices (Draft/Sent/Revised/Confirmed)",
      "LC tracker with expiry alerts",
      "Discrepancy notes and document attachments",
      "Automated financial reporting"
    ]
  },
  {
    title: "Local Production & Daily Metrics",
    icon: Zap,
    description: "Real-time production cockpit with throughput monitoring.",
    details: [
      "Floor-level tracker for local orders",
      "Cuts, finishing, and delivery status",
      "Inline order/line notes for instant coaching",
      "KPI widgets and gradient cards"
    ]
  },
  {
    title: "Incidents & Blockers",
    icon: Shield,
    description: "Comprehensive incident management with action plans.",
    details: [
      "Capture rejections, breakdowns, and delays",
      "Action plans with owners and due dates",
      "Status transitions and evidence uploads",
      "Auditable escalation trails"
    ]
  },
  {
    title: "Shipments & Logistics",
    icon: Users,
    description: "End-to-end shipment tracking and documentation.",
    details: [
      "Packing list, invoice, and AWB uploads",
      "ETD/ETA tracking",
      "Delivery confirmation workflow",
      "Real-time notification system"
    ]
  }
];

const lmsFeatures = [
  {
    title: "Multi-Program Coverage",
    icon: Package,
    description: "Support for BBA, MBA, CSE, THM, EEE, and LLB curricula with consistent metadata.",
    details: [
      "6+ academic programs supported",
      "Consistent fee structure across programs",
      "Duration tracking and semester management",
      "Automated curriculum seeding"
    ]
  },
  {
    title: "Official Syllabi Integration",
    icon: FileText,
    description: "Import National University syllabi (2015-2018) for every semester and major.",
    details: [
      "Word-level timestamp transcription",
      "Credits and marks alignment",
      "PDF source verification",
      "Automated subject code generation"
    ]
  },
  {
    title: "Exam & Result Automation",
    icon: BarChart3,
    description: "Generate three canonical exams per subject with automated result processing.",
    details: [
      "Automated exam generation",
      "Sample result creation for QA",
      "No manual data entry required",
      "Grade distribution analytics"
    ]
  },
  {
    title: "Major-Aware Result Entry",
    icon: CheckCircle2,
    description: "React modal matches students with exams filtered by course, semester, and major.",
    details: [
      "Smart subject filtering",
      "Prevents mismatched grades",
      "Course-specific validation",
      "Real-time error prevention"
    ]
  },
  {
    title: "Biometric Integration",
    icon: Users,
    description: "Integrated biometric attendance sync for 500+ students.",
    details: [
      "Fingerprint scanner integration",
      "Real-time attendance tracking",
      "Automated sync with student records",
      "Attendance report generation"
    ]
  },
  {
    title: "Academic Payment Processing",
    icon: Shield,
    description: "Secure payment processing with automated result generation.",
    details: [
      "Payment gateway integration",
      "Automated receipt generation",
      "Result release upon payment",
      "Financial reporting dashboard"
    ]
  }
];

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const isERP = project.id === 'prova-erp';
  const isLMS = project.id === 'igmis-lms';
  const features = isERP ? erpFeatures : isLMS ? lmsFeatures : null;

  return (
    <main className="pt-16 bg-[#04050d] text-white">
      <article className="relative min-h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(6,182,212,0.15),_transparent_45%)] pointer-events-none"></div>
        <div className="absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-[#0b1221] via-[#091225] to-transparent"></div>

        <div className="relative z-10">
          <div className="py-20">
            <div className="max-w-6xl mx-auto px-4">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-cyan-300 hover:text-white mb-6 text-sm font-semibold tracking-wide"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Portfolio
              </Link>
              <div className="flex flex-col gap-4">
                <span className="inline-flex w-max items-center gap-2 text-xs font-semibold uppercase tracking-[0.4em] text-cyan-300/80 bg-white/10 rounded-full px-4 py-2">
                  Case Study
                </span>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">{project.title}</h1>
                <p className="text-lg text-slate-300">{project.client} • {project.category}</p>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
            {project.image && <ProjectHeroImage src={project.image} alt={project.title} />}

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {Object.entries(project.impact).map(([key, value]) => (
                <div key={key} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-cyan-400/40 transition-colors">
                  <div className="text-3xl font-bold text-cyan-300 mb-2">{value}</div>
                  <div className="text-slate-400 uppercase text-xs tracking-widest">{key}</div>
                </div>
              ))}
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 mb-12 backdrop-blur-md shadow-[0_20px_70px_-35px_rgba(6,182,212,0.8)]">
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <p className="text-lg text-slate-200 mb-8 leading-relaxed">{project.description}</p>

              {isERP && (
                <div className="bg-gradient-to-br from-cyan-500/10 via-transparent to-indigo-500/10 border border-cyan-500/30 rounded-2xl p-6 mb-8">
                  <h3 className="text-xl font-bold text-white mb-4">Why This System Works</h3>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-white">Unified Source of Truth</p>
                        <p className="text-slate-300 text-sm">Orders, samples, production, incidents, and shipments share one PostgreSQL-backed data model with audit trails.</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-white">Live Production Cockpit</p>
                        <p className="text-slate-300 text-sm">Daily metrics feed dashboards so managers can coach lines without chasing updates.</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-white">Financial Compliance</p>
                        <p className="text-slate-300 text-sm">Versioned PIs, LC milestone clocks, and document vaults reduce banking surprises.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {isLMS && (
                <div className="bg-gradient-to-br from-cyan-500/10 via-transparent to-indigo-500/10 border border-cyan-500/30 rounded-2xl p-6 mb-8">
                  <h3 className="text-xl font-bold text-white mb-4">Key Capabilities</h3>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-white">Multi-Course Coverage</p>
                        <p className="text-slate-300 text-sm">Supports BBA, MBA, CSE, THM, EEE, and LLB curricula with consistent metadata and fee structures.</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-white">National University Alignment</p>
                        <p className="text-slate-300 text-sm">Official syllabi ingestion (2015-2018) ensures subjects, credits, and marks align with source PDFs.</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-white">Smart Result Management</p>
                        <p className="text-slate-300 text-sm">Major-aware filtering prevents mismatched grades by matching students with course-specific exams.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-4">Key Achievements</h3>
              <ul className="space-y-3 mb-8">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-cyan-500/20 text-cyan-300 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-sm">
                      {i + 1}
                    </span>
                    <span className="text-slate-200">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {isERP && (
            <ProjectScreens
              title="System Screens"
              images={[
                {
                  src: '/projects/erp/erp-dashboard.jpg',
                  title: 'Dashboard & Navigation',
                  description: 'Main control center with KPI widgets and navigation',
                },
                {
                  src: '/projects/erp/erp-samples.jpg',
                  title: 'Samples Workspace',
                  description: 'Lab Dip, Strike-Off, and PP sample tracking',
                },
                {
                  src: '/projects/erp/erp-local-orders.jpg',
                  title: 'Delivery Notifications Console',
                  description: 'Delivery alert stream with notification history',
                },
              ]}
            />
          )}

          {isLMS && (
            <ProjectScreens
              title="System Screens"
              images={[
                {
                  src: '/projects/lms/home.jpg',
                  title: 'Home Dashboard',
                  description: 'Main dashboard with analytics and quick actions',
                },
                {
                  src: '/projects/lms/students.jpg',
                  title: 'Student Directory',
                  description: 'Student management with course and major filtering',
                },
                {
                  src: '/projects/lms/attendance.jpg',
                  title: 'Attendance Insights',
                  description: 'Biometric integration with real-time tracking',
                },
                {
                  src: '/projects/lms/reportcard.jpg',
                  title: 'Report Card Preview',
                  description: 'Automated result generation and printing',
                },
                {
                  src: '/projects/lms/results.jpg',
                  title: 'Results Console',
                  description: 'Major-aware result entry with smart filtering',
                },
              ]}
            />
          )}

          {features && (
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Core Features & Modules</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/40 transition-all backdrop-blur-md">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/30">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                          <p className="text-slate-300 text-sm">{feature.description}</p>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {feature.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-200">
                            <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-12 backdrop-blur-md">
              <h3 className="text-2xl font-bold text-white mb-6">Technology Stack</h3>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-5 py-2.5 bg-white/10 text-white rounded-xl font-semibold border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {(isERP || isLMS) && (
                <div className="mt-8 pt-8 border-t border-white/10">
                  <h4 className="text-lg font-bold text-white mb-4">Architecture Highlights</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {isERP && (
                      <>
                        <div className="flex gap-3 p-4 bg-white/5 rounded-2xl border border-white/10">
                          <Shield className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-white text-sm">JWT Authentication</p>
                            <p className="text-slate-300 text-xs">Django + SimpleJWT with role-based permissions</p>
                          </div>
                        </div>
                        <div className="flex gap-3 p-4 bg-white/5 rounded-2xl border border-white/10">
                          <FileText className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-white text-sm">Secure File Storage</p>
                            <p className="text-slate-300 text-xs">Cloud storage with presigned access</p>
                          </div>
                        </div>
                        <div className="flex gap-3 p-4 bg-white/5 rounded-2xl border border-white/10">
                          <Zap className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-white text-sm">Real-time Updates</p>
                            <p className="text-slate-300 text-xs">React Query + Zustand state management</p>
                          </div>
                        </div>
                        <div className="flex gap-3 p-4 bg-white/5 rounded-2xl border border-white/10">
                          <BarChart3 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-white text-sm">Audit Logging</p>
                            <p className="text-slate-300 text-xs">Complete activity tracking & notification feeds</p>
                          </div>
                        </div>
                      </>
                    )}
                    {isLMS && (
                      <>
                        <div className="flex gap-3 p-4 bg-white/5 rounded-2xl border border-white/10">
                          <Package className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-white text-sm">Django REST Framework</p>
                            <p className="text-slate-300 text-xs">Course catalogs, exams, and grading APIs</p>
                          </div>
                        </div>
                        <div className="flex gap-3 p-4 bg-white/5 rounded-2xl border border-white/10">
                          <Users className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-white text-sm">React + Vite Frontend</p>
                            <p className="text-slate-300 text-xs">Modern dashboards with Tailwind CSS</p>
                          </div>
                        </div>
                        <div className="flex gap-3 p-4 bg-white/5 rounded-2xl border border-white/10">
                          <Shield className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-white text-sm">PostgreSQL Database</p>
                            <p className="text-slate-300 text-xs">Robust data management and integrity</p>
                          </div>
                        </div>
                        <div className="flex gap-3 p-4 bg-white/5 rounded-2xl border border-white/10">
                          <Zap className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-white text-sm">Automated Seeding</p>
                            <p className="text-slate-300 text-xs">Management commands for syllabi & exams</p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>

            {project.github && (
              <div className="flex gap-4 justify-center">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-white/20 bg-white/5 hover:border-cyan-400/40 hover:bg-white/10 transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                  View Source Code
                </a>
              </div>
            )}
          </div>
        </div>
      </article>

      <Contact />
    </main>
  );
}
