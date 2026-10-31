import type { Metadata } from 'next';
import Link from 'next/link';
import ContactSection from '@/components/ContactSection';
import { identity, pageSocial } from '@/lib/seo';

const description =
  'Research by S M Hozaifa Hossain: ferroelectric gate-all-around FETs for neuromorphic hardware, TCAD nanowire design, differentiable TCAD, and HLS accelerators.';

export const metadata: Metadata = {
  title: 'Research',
  description,
  alternates: { canonical: '/research' },
  ...pageSocial('/research', 'Research · S M Hozaifa Hossain', description),
};

type Block = {
  id: string;
  theme: string;
  eyebrow: string;
  question: string;
  answer: string;
  detail: string;
  numbersTitle: string;
  numbers: string[];
  link?: { href: string; label: string };
};

const blocks: Block[] = [
  {
    id: 'thesis',
    theme: 'cream',
    eyebrow: 'Undergraduate thesis · defended September 2026',
    question: 'What did S M Hozaifa Hossain’s undergraduate thesis show?',
    answer:
      'His thesis models a gate-all-around ferroelectric FET with a 7 nm HZO gate stack in Synopsys Sentaurus TCAD, then uses it as an artificial synapse in a spiking network. The device shows a 5410x memory window and a 63.5 mV/dec subthreshold slope, and the network classifies ECG heartbeats with 83.04% accuracy.',
    detail:
      'Title: Ferroelectric Gate-All-Around FETs for Next-Generation Neuromorphic Systems: Device Modeling and Spiking Network Implementation. Advisor: Dr. Mainul Hossain, University of Dhaka. The sub-100 nm device was calibrated with Preisach polarization dynamics against experimental data. Conductance-level placement mattered more to SNN accuracy than the number of levels. The calibrated conductance states were deployed in a PyTorch spiking recurrent network (SpikingJelly, leaky integrate-and-fire neurons) for 4-class arrhythmia classification on the MIT-BIH database.',
    numbersTitle: 'Key numbers',
    numbers: [
      'Memory window 5410x at VGS = 0 V',
      'ΔVT 0.387 V',
      'SS 63.5 mV/dec',
      '<1% retention loss over 9.9e5 read cycles',
      '15 analog conductance states over 3.79 decades',
      '~9 aJ per switching pulse',
      '83.04% accuracy, macro-F1 0.75',
      '535.8 pJ per heartbeat',
    ],
  },
  {
    id: 'crest',
    theme: 'pearl',
    eyebrow: 'CREST 2027 · Silicon River Bangladesh',
    question: 'What is the CREST 2027 research project?',
    answer:
      'As a CREST 2027 Research Fellow at Silicon River Bangladesh, he is working on calibrating analog FeFET synapses without a write-verify loop. Today, programming a ferroelectric synapse to a target conductance usually needs repeated write and read checks; removing that loop would save energy and time. He is advised by Dr. Mainul Hossain.',
    detail:
      'The fellowship runs January to December 2027 at the Center for Research Excellence on Semiconductor Technology, supported by Neural Semiconductor Ltd. It builds directly on the analog-conductance results from the thesis, where 15 states were extracted under write-verify at about 9 aJ per pulse.',
    numbersTitle: 'Fellowship',
    numbers: [
      'Selected 30 October 2026',
      'Fellowship: Jan to Dec 2027',
      'Advisor: Dr. Mainul Hossain',
      'Host: Silicon River Bangladesh',
    ],
  },
  {
    id: 'nanowire',
    theme: 'dark',
    eyebrow: 'IEEE EDS TCAD Hackathon 2026',
    question: 'How does stress improve a sub-10 nm gate-all-around nanowire transistor?',
    answer:
      'Applying 1 GPa of uniaxial tensile stress along a 6 nm silicon nanowire repopulates its conduction-band subbands. In his Sentaurus TCAD design this gave 35% more on-current and 32% more transconductance, while band-to-band tunneling and quantum corrections kept off-state leakage at 0.99 pA.',
    detail:
      'The nMOS has a 15 nm gate length, 6 nm diameter and 0.9 nm EOT (0.4 nm SiO2 interface layer plus 2.82 nm HfO2, κ = 22), built as a six-material 3D cylinder in Sentaurus Structure Editor with 0.2 nm radial mesh refinement. Simulation used deformation-potential and eSubBand models, density-gradient quantum correction and nonlocal-path band-to-band tunneling. This design made him one of three international winners of the IEEE EDS TCAD Hackathon 2026, and the first from Bangladesh.',
    numbersTitle: 'Key numbers',
    numbers: [
      '+35% ION (5.42 µA, 287 µA/µm)',
      '+32% gm (2.10 mS/µm)',
      'IOFF 0.99 pA, ION/IOFF 5.5e6',
      'SS 61 mV/dec at VDD 0.7 V',
    ],
  },
  {
    id: 'differentiable-silicon',
    theme: 'olive',
    eyebrow: 'Tesseract Hackathon 2026 · Best-in-Track',
    question: 'What is Differentiable Silicon?',
    answer:
      'Differentiable Silicon is a pipeline that passes one gradient from an ECG classification loss through a PyTorch spiking network and a JAX device-to-neuron model into Synopsys Sentaurus TCAD. That tells you how four FeFET fabrication parameters should change to improve accuracy, even though the TCAD solver is a closed binary.',
    detail:
      'The closed solver has no adjoint, so the missing gradient was manufactured with trust-region finite-difference probes and a Broyden update. Descent cut balanced cross-entropy from 1.400 to 1.018 and raised accuracy from 0.250 to 0.688 in 64 solver calls. It won Best-in-Track in the Hybrid ML x Mechanistic Models track, run by Pasteur Labs and ISI.',
    numbersTitle: 'Key numbers',
    numbers: [
      '4 FeFET fabrication parameters',
      'Cross-entropy 1.400 to 1.018',
      'Accuracy 0.250 to 0.688',
      '64 solver calls',
    ],
    link: {
      href: 'https://github.com/hozaifa1/differentiable-silicon',
      label: 'github.com/hozaifa1/differentiable-silicon',
    },
  },
  {
    id: 'hls',
    theme: 'cream',
    eyebrow: 'Siemens EDA HLS Hackathon 2026 · 1st place',
    question: 'How was a CNN accelerator made 915 times more energy efficient?',
    answer:
      'He designed an ultra-low-power CNN accelerator for roadside-object recognition by exploring many high-level synthesis configurations, then measuring real gate-level power. Energy per inference fell from 6,877 nJ to 7.51 nJ, a 915x reduction, at 95.3% accuracy. The result took first place in the Siemens EDA hackathon.',
    detail:
      'The flow used QKeras and hls4ml to move the quantized network into Siemens Catapult HLS, targeted a 45 nm ASIC library, and measured power with PowerPro at gate level. The final design came from 365 synthesis runs.',
    numbersTitle: 'Key numbers',
    numbers: [
      '6,877 nJ to 7.51 nJ per inference',
      '915x lower energy',
      '95.3% accuracy',
      '365 synthesis runs',
      '45 nm ASIC library',
    ],
  },
];

export default function ResearchPage() {
  return (
    <main>
      <section id="hero" data-theme="dark">
        <div className="content">
          <div className="hero-grid">
            <h1 className="hero-tagline">
              Research by {identity.name}: <em>devices that compute like brains.</em>
            </h1>
            <div className="hero-meta">
              <span className="role">Research</span>
              <p>Ferroelectric FETs</p>
              <p>TCAD &amp; device physics</p>
              <p>Spiking neural networks</p>
              <p style={{ marginTop: '14px' }}>{identity.location}</p>
            </div>
            <p className="hero-bio">
              {identity.name} researches semiconductor devices and neuromorphic hardware: how
              ferroelectric transistors can act as low-energy synapses, and how TCAD,
              high-level synthesis and machine learning connect devices to algorithms. See also{' '}
              <Link href="/awards" className="text-link">
                awards
              </Link>{' '}
              and{' '}
              <Link href="/publications" className="text-link">
                publications
              </Link>
              .
            </p>
            <div className="hero-sub">
              <span>Research &middot; Thesis &middot; CREST 2027</span>
            </div>
          </div>
        </div>
      </section>

      {blocks.map((block) => (
        <section key={block.id} id={block.id} className="route-panel" data-theme={block.theme}>
          <div className="content">
            <div className="route-copy-grid">
              <div className="route-copy-main">
                <p className="section-eyebrow">{block.eyebrow}</p>
                <h2 className="section-title-sm">{block.question}</h2>
                <p className="route-copy" style={{ marginTop: '32px' }}>
                  {block.answer}
                </p>
                <p className="route-copy">{block.detail}</p>
                {block.link ? (
                  <p className="route-copy">
                    <a className="text-link" href={block.link.href} target="_blank" rel="noreferrer">
                      {block.link.label}
                    </a>
                  </p>
                ) : null}
              </div>
              <div className="route-copy-side">
                <div className="meta-card">
                  <h3>{block.numbersTitle}</h3>
                  <div className="stack-pills">
                    {block.numbers.map((n) => (
                      <span key={n} className="stack-pill">
                        {n}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <ContactSection />
    </main>
  );
}
