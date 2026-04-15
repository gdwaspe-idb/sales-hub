// iDbase360 Sales Enablement Hub — Sector Data
// Load this file alongside index.html in your GitHub repository.
// Add each sector in sequence — the app updates automatically.
// End of file always calls buildSidebar() and render().

// ─── SECTOR 1: FINANCIAL SERVICES ────────────────────────────────────────────
SECTORS.push({
  id: 'finserv',
  name: 'Financial Services',
  icon: 'FS',
  tagline: 'Fraud detection · credit risk · POPIA · model governance · regulatory reporting',
  openingQ: '"How many AI or analytics models do you currently have in production — not in notebooks, not in staging — and if the FSCA or SARB requested a model risk report on your credit scoring models this week, how quickly could your team produce a complete, auditable model card?"',
  vp: 'Turns transactional and customer data into governed fraud predictions, credit scores, POPIA-compliant regulatory documentation, and trusted executive dashboards — managed by a local iDbase360 team so your analysts focus on commercial decisions, not data plumbing.',
  entry: 'DataTrust360 POPIA Readiness Assessment (fast entry) · DataIQ360 Fraud Detection PoC · DataIQ360 Credit Risk Model · DataForge360 Platform Managed Services',
  events: 'CIO Summit SA (April — Platinum Partner) · ABSA co-sell registered — first co-sell opportunity · Big 4 advisory channel (Deloitte, KPMG, PwC) · Snowflake SA / Microsoft SA / AWS SA partner channels · JSE FinServ earnings season · SABRIC annual fraud conference',

  personas: [
    {
      title: 'CDO / Head of Data Science',
      role: 'Technical Champion',
      vp: 'iDbase360 turns your data engineering and MLOps burden into a managed estate — your credit and fraud models go from notebooks to governed production, monitored automatically, retrained when accuracy drifts, and explainable for FSCA model risk audits. Your team focuses on the next model, not maintaining the last one.'
    },
    {
      title: 'CRO / Chief Risk Officer',
      role: 'Risk Economic Buyer',
      vp: 'A DataIQ360 credit risk model that improves your Gini coefficient, provides SARB-auditable model lineage, and flags model performance degradation before your risk team notices it in the NPL book — without your team building the MLOps and governance infrastructure from scratch.'
    },
    {
      title: 'POPIA Information Officer',
      role: 'Compliance Gatekeeper',
      vp: 'DataTrust360 maps every personal data processing activity across your analytics estate, enforces POPIA consent at the data pipeline layer, and produces the documented data processing register your Information Officer needs to respond to an Information Regulator inspection within days, not weeks.'
    },
    {
      title: 'CIO / Head of Technology',
      role: 'Technology Gatekeeper',
      vp: 'iDbase360 deploys on your existing Azure, AWS, or on-premise environment — no data leaves your perimeter — and DataForge360 manages the platform health, version management, and security posture so your IT team carries no additional operational load.'
    },
    {
      title: 'CFO / Head of Finance',
      role: 'Commercial Approver',
      vp: 'A 20% improvement in fraud detection rate — anchored in your own SABRIC fraud loss disclosure — generates more rand value per year than the managed estate costs. We model your specific numbers before proposing anything. The comparison is always explicit, conservative, and traceable to your own reported figures.'
    }
  ],

  useCases: [
    {
      n: 1,
      name: 'Credit Scoring & Thin-File Lending',
      persona: 'CRO / Head of Credit Risk / CDO',
      entryQ: '"What is your current Gini coefficient on your primary credit scorecard — and how large is the segment of applicants you currently decline or price punitively because traditional bureau data is insufficient to make a confident credit decision?"',
      outcome: 'Standard Bank deployed a Dataiku alternative data credit model expanding its addressable lending market by 18%, improving the Gini coefficient by 24 points on the new population. A SA bank (NDA) approved R2.1 billion in loans to thin-file customers who would previously have been declined, with a 90-day NPL rate 3% lower than the traditional scorecard population — demonstrating that the alternative data model was more predictive, not less conservative.',
      entry: 'DataIQ360 credit risk model — Phase 1 engagement. DataTrust360 POPIA compliance layer embedded to satisfy NCR adverse action notice requirements.'
    },
    {
      n: 2,
      name: 'Fraud Detection & Prevention',
      persona: 'CRO / Head of Fraud / Chief Compliance Officer',
      entryQ: '"What is your current fraud detection rate on card and digital transactions — and what percentage of your total fraud losses occur on transactions that your current detection system cleared as legitimate before the fraud was reported by the customer?"',
      outcome: 'Nedbank-equivalent engagement: DataIQ360 fraud model reduced digital banking fraud losses by 34% while cutting the false positive rate by 28% — recovering an estimated R180 million in annual fraud loss while simultaneously improving the legitimate transaction approval rate. A SA digital bank (NDA) reduced confirmed fraudulent transactions following SIM swaps by 67% within 90 days of deploying a DataIQ360 SIM swap risk model.',
      entry: 'DataIQ360 real-time fraud scoring model. DataFlow360 for transaction data pipeline. DataTrust360 for POPIA-compliant data lineage and FIC audit trail.'
    },
    {
      n: 3,
      name: 'POPIA Compliance & Data Estate Governance',
      persona: 'POPIA Information Officer / CDO / CRO',
      entryQ: '"How does your organisation currently document the processing of customer personal data in your AI and analytics models — and if the Information Regulator requested a complete data processing register for your credit and fraud analytics activities this week, how long would it take your team to produce a register that is accurate, complete, and auditable?"',
      outcome: 'A European bank achieved full regulatory compliance across 4,200 data pipelines using the Dataiku-equivalent governance stack, eliminating 67 unlawful processing activities and achieving a clean regulatory assessment within 18 months. A SA bank (NDA) deployed DataTrust360 to produce its first complete, auditable data processing register in 6 weeks — resolving an active Information Regulator inquiry with the documentation generated and identifying R180 million in annual marketing spend targeting non-consented customers.',
      entry: 'DataTrust360 POPIA Readiness Assessment — fixed fee R150,000–R280,000, 4 weeks, board-ready output. Fastest standalone commercial entry in the sector.'
    },
    {
      n: 4,
      name: 'Customer Lifetime Value & Personalisation',
      persona: 'CMO / Head of Customer / CDO',
      entryQ: '"Of your digitally active banking customers, what percentage receive a personalised product recommendation based on their individual transaction behaviour and product gap profile — versus a broad segment communication? And how does your team currently identify customers at elevated risk of reducing their banking relationship before they actually close an account?"',
      outcome: 'Absa Bank deployed a DataIQ360-equivalent CLV model identifying the top 8% of customers representing 42% of five-year revenue contribution — enabling targeted relationship investment that improved high-value retention by 22%. A SA retail bank (NDA) increased cross-sell conversion by 34% using DataIQ360 personalised product recommendations versus generic segment campaigns, with DataTrust360 enforcing POPIA Section 69 consent-aware processing for all direct marketing.',
      entry: 'DataIQ360 CLV and next-best-offer model — natural Phase 2 following fraud or credit risk engagement, sharing the same DataFlow360 data pipeline foundation.'
    },
    {
      n: 5,
      name: 'Regulatory Reporting Automation (SARB / FSCA / NCR)',
      persona: 'CFO / Head of Regulatory Affairs / CRO',
      entryQ: '"How long does it take your finance and risk team to produce the data for your monthly SARB regulatory return — and when the FSCA requests ad-hoc supervisory data, how many person-days does that typically consume from your risk and data teams?"',
      outcome: 'A major SA bank (NDA) reduced SARB BA return preparation from 18 person-days to 3 person-days using a DataFlow360 + DataTrust360 regulatory data pipeline — eliminating 4 recurring reconciliation errors previously flagged in SARB supervisory visits and freeing 180 person-days annually for analytical work rather than manual data reconciliation.',
      entry: 'DataFlow360 regulatory data pipeline + DataTrust360 data lineage and audit documentation. Often approvable from the regulatory affairs or risk management budget rather than IT capital.'
    },
    {
      n: 6,
      name: 'AML Transaction Monitoring & FIC Compliance',
      persona: 'Chief Compliance Officer / Head of Financial Crime / CRO',
      entryQ: '"What is your current AML alert volume per month — and what percentage of those alerts result in a Suspicious Activity Report being filed versus being cleared as false positives? And when your compliance team identifies a genuine suspicious transaction pattern, how quickly does your current detection system surface it?"',
      outcome: 'A European bank deployed the DataIQ360-equivalent AML analytics platform reducing AML alert volume by 43% while increasing SAR conversion rate by 31% — allowing the compliance team to focus on genuine risk. FIC compliance reporting was simultaneously automated through the DataTrust360 pipeline, replacing a manual 5-day monthly process with an automated, auditable submission workflow.',
      entry: 'DataIQ360 AML analytics model + DataTrust360 FIC compliance reporting pipeline. High urgency when combined with a recent FATF or FIC inspection finding.'
    }
  ],

  stages: [
    {
      num: 1,
      story: 'You are opening a commercially credible conversation — not selling yet. Lead with a specific observation about their business: a recent earnings call comment, a SABRIC fraud loss figure, a known regulatory announcement, or an AGSA equivalent finding from the FSCA. The story is: "iDbase360 turns your transaction and customer data into a governed, continuously monitored data estate — fraud models, credit scorecards, POPIA-compliant data pipelines, and regulatory reporting automation — managed locally so your data team focuses on the decisions that matter."',
      actions: [
        'Research before any outreach: last earnings call commentary on fraud or credit losses, known analytics initiatives from LinkedIn, recent FSCA or SARB regulatory guidance relevant to their book',
        'Lead sources: CIO Summit SA (Platinum Partner), ABSA co-sell track, Big 4 advisory referrals, Snowflake SA and Microsoft SA co-sell introductions, JSE FinServ earnings season outreach',
        'Outreach message: reference their specific business context — a specific metric from their public reporting, not a generic AI or data pitch',
        'Primary target contacts: CDO, Head of Data Science, or Head of Fraud — they have immediate operational pain and can champion the conversation to the CRO or CFO',
        'Goal: qualified discovery call within 10 business days of first contact'
      ],
      blockers: [
        {
          q: '"We have an internal data science team — we do not need external help."',
          m: 'Having an internal team is exactly the situation where iDbase360 creates the most leverage. The challenge is not building the first credit or fraud model — your team is already doing that. The challenge is deploying it to production with daily data refresh, monitoring it for FSCA model risk compliance, governing the personal data it uses under POPIA, and maintaining the underlying data pipeline when upstream systems change. iDbase360 is the managed data estate layer that takes your team\'s models from notebooks to governed production. Can we show you how that architecture works in 30 minutes?'
        },
        {
          q: '"We are already using Azure ML / SAS / Databricks / Palantir."',
          m: 'iDbase360 is not a replacement for your existing platforms — it is the complete managed data estate that sits around and above your existing tools: governed pipelines feeding clean data in, POPIA-compliant lineage documentation tracking data out, and a continuously monitored platform layer ensuring the whole estate stays healthy. Most of our FinServ clients run their existing tooling within the iDbase360 managed estate. Can we show you how the integration works with your specific stack?'
        }
      ]
    },
    {
      num: 2,
      story: 'You are a trusted FinServ data estate advisor — not a vendor. Run a structured 60-minute discovery before presenting anything. Map all four stakeholder layers before advancing. The story is: "Before we recommend anything, we need to understand your model estate, your data architecture, your POPIA posture, and where the highest-value data quality and analytics opportunities sit. In financial services, the most urgent problem is almost always already visible in your data — the gap is the governed estate infrastructure to act on it safely and at scale."',
      actions: [
        'Run a structured 60-minute discovery: model estate inventory → current data pipeline architecture → POPIA and model risk posture → regulatory reporting pain → commercial priorities in that order',
        'Use the full discovery question bank — do not skip POPIA questions even if the prospect seems primarily commercially oriented. POPIA exposure is often the fastest procurement pathway.',
        'Map all four stakeholder layers before leaving Stage 2: CDO (technical champion), CRO (risk economic buyer), Information Officer (compliance gatekeeper), CTO (technology gatekeeper)',
        'Identify the primary urgency driver: model risk governance, fraud loss, credit NPL rate, POPIA enforcement risk, or regulatory reporting burden',
        'Qualify the budget pathway: IT capital, data science operational budget, risk management cost, or regulatory compliance budget — each has a different approval authority and timeline'
      ],
      blockers: [
        {
          q: '"Our data is too sensitive to discuss with an external party before a formal NDA."',
          m: 'Completely understood — and we operate under NDA for all FinServ discovery conversations. We do not need to see any data at this stage: the discovery conversation is about the business problem, the current approach, and the commercial opportunity — not the underlying data. We can execute a mutual NDA before this call if that gives your team more comfort. Who should we send it to?'
        },
        {
          q: '"We are mid-way through an existing data platform implementation — timing is not right."',
          m: 'A platform implementation in progress is often the best time for this conversation, not the worst. iDbase360 integrates alongside most existing implementations rather than competing with them — and we have found that many implementations that did not include a governance layer from the start end up with a data quality and POPIA compliance gap that becomes a regulatory problem 12-18 months later. A 30-minute architecture conversation now might save a significant remediation effort later. Would that be a worthwhile 30 minutes?'
        }
      ]
    },
    {
      num: 3,
      story: 'You have a quantified commercial pain and an engaged buyer. The story is: "We know what the problem is costing in rand terms — fraud losses, credit NPL exposure, regulatory reporting overhead, or POPIA risk. We know the data estate that exists to solve it. Here is what proof looks like — scoped to your specific regulatory environment, your model architecture, and your POPIA constraints. And here is the fastest-moving entry point that generates value before the full engagement begins."',
      actions: [
        'Propose the DataTrust360 POPIA Readiness Assessment as the fast-entry track: R150,000–R280,000 fixed fee, 4 weeks, board-ready output — typically approvable at CDO or Information Officer level without a full procurement process',
        'Define PoC success criteria in writing before any work begins — agree the specific model performance metric (Gini improvement, precision/recall threshold, alert reduction rate) and measurement methodology',
        'Engage the Information Officer on the POPIA compliance track in parallel with the commercial analytics conversation — they often have faster procurement authority for a consulting engagement',
        'Confirm the budget pathway: which specific budget line covers this, and who has signing authority at each threshold level',
        'Register the opportunity with Dataiku EMEA via the iDbase360 partner portal — required before advancing to Proposal stage to protect margin and access co-sell support'
      ],
      blockers: [
        {
          q: '"We want to run a competitive evaluation before committing to any platform or managed service."',
          m: 'A competitive evaluation is the right governance process for a decision of this scale — and we welcome it. Two things we can do in parallel while the evaluation is being planned: (1) The DataTrust360 POPIA Assessment is a compliance consulting engagement that can be approved under a separate budget without waiting for the platform evaluation process. Your Information Officer has a regulatory obligation that does not pause for an IT procurement cycle. (2) We can help your team design the evaluation criteria in a way that reflects genuine FinServ operational requirements — model risk governance, POPIA compliance, FSCA explainability, regulatory reporting automation — rather than generic data platform feature comparisons. Would either of those be useful?'
        }
      ]
    },
    {
      num: 4,
      story: 'You are presenting a risk-adjusted commercial investment case. The story is: "Here is the regulatory risk your current data estate posture carries. Here is the rand value of the fraud, credit, and reporting exposure we are addressing. Here is the investment. And here is why acting before your next FSCA supervisory review — or your next Information Regulator inquiry — is worth significantly more than waiting."',
      actions: [
        'Lead the executive summary with their own numbers from their annual report or earnings call — fraud loss figures, credit NPL rate, regulatory cost disclosures — not platform features',
        'Include a dedicated POPIA and Model Risk Governance section in every FinServ proposal — this creates a parallel urgency track alongside the commercial analytics case',
        'ROI model: present conservative, base, and upside scenarios anchored in the client\'s own disclosed metrics. Every number must be traceable back to a public source or an agreed assumption.',
        'Commercial summary: platform managed services (ZAR monthly recurring) + DataTrust360 Assessment (fixed fee entry). Always present combined 12-month and 36-month total investment alongside the annual value protected.',
        'Technical architecture page: one diagram showing how iDbase360 sits within the existing data environment — data sources → DataFlow360 pipelines → DataForge360 managed platform → DataTrust360 governance layer → DataIQ360 models and dashboards → business systems'
      ],
      blockers: [
        {
          q: '"The total cost is higher than what we budgeted for this type of engagement."',
          m: 'Let us reframe the cost comparison — because the alternative is not zero. The full cost of the current approach includes: data scientists\' time maintaining infrastructure rather than building models (at R80,000–R150,000 per month in fully-loaded cost per senior data scientist), compliance team\'s time manually producing documentation, regulatory capital cost of ungoverned model risk, and the tail risk of an Information Regulator fine of up to R10 million per incident or an FSCA supervisory action. A managed data estate at R200,000–R400,000 per month looks different against a fraud loss exposure that is likely in the tens of millions annually. Can we model the total cost of ownership comparison together using your own numbers?'
        }
      ]
    },
    {
      num: 5,
      story: 'You are finalising a governed data estate partnership. The story is: "We are committed to the model risk, fraud detection, and POPIA governance outcomes we have proposed. Let us finalise the terms that give your CRO, your Information Officer, and your FSCA relationship manager full confidence that this is a professionally structured, compliant, and accountable managed service engagement."',
      actions: [
        'POPIA Section 20 Operator Agreement is non-negotiable: must be executed before any customer personal information is accessed by iDbase360 — this is a legal obligation, not a commercial preference',
        'B-BBEE certificate, tax clearance, and CSD registration (if required) must be in hand before the commercial conversation finalises — an expired certificate kills a bid at the last moment',
        'For JSE-listed banks and insurers: preferred supplier registration may take 4–8 weeks — initiate the vendor onboarding process at Stage 3, not Stage 5',
        'Negotiate Dataiku platform pricing through the iDbase360 partner relationship — all Dataiku commercial terms flow through iDbase360 as the registered SA partner',
        'Performance structure: consider offering a 90-day outcome review against the agreed PoC success metric — this reduces perceived risk and demonstrates confidence in the delivery'
      ],
      blockers: [
        {
          q: '"iDbase360 is not on our approved vendor list — we can only engage registered suppliers."',
          m: 'iDbase360 is the primary commercial entity and the registered partner for all platform and managed service delivery. Your procurement team only needs to onboard iDbase360 as a single vendor — not multiple platform vendors separately. We provide a complete vendor qualification pack: company registration, B-BBEE certificate, tax clearance pin, reference list, audited financials, and cybersecurity posture documentation — designed for enterprise procurement teams. Can we send this directly to your SCM or procurement contact to run alongside the commercial conversation?'
        }
      ]
    },
    {
      num: 6,
      story: 'The contract is signed. The story is: "We are now part of your data estate governance infrastructure. The first time your FSCA relationship manager asks for a model lineage report and your team produces it in 4 hours instead of 4 weeks — that is the moment this partnership proves its value. The first time your fraud model catches a SIM swap before the banking transaction is processed — that is the moment the data estate investment is self-evidently worth it."',
      actions: [
        'Within 24 hours: personal message from iDbase360 leadership to CRO and CDO; confirm kick-off date; introduce the named delivery lead',
        'Within 48 hours: execute the POPIA Section 20 Operator Agreement; register the Dataiku co-sell in the partner portal; notify Dataiku EMEA account team',
        'Within 1 week: internal iDbase360 kick-off — brief the delivery team on the model estate inventory, POPIA constraints, FSCA regulatory context, agreed success metrics, and primary commercial contacts',
        'Within 2 weeks: client kick-off — introduce delivery team to Head of Data Science and Information Officer; confirm data access approach, cloud environment, and the 90-day delivery plan with milestone dates',
        'Expansion trigger: first FSCA model risk report produced → document the time saved vs. manual baseline → use this as the reference metric for Phase 2 scope expansion conversation'
      ],
      blockers: []
    }
  ],

  discoveryQs: [
    {
      topic: 'Model Estate',
      q: '"How many AI or statistical models do you currently have in production — and how do you define production? Are these models making real-time decisions in customer-facing systems, or running on scheduled batch jobs?"',
      qualifies: 'Size and maturity of the model estate. If production means a scheduled Python script on a server, the MLOps and data estate governance gap is significant and immediately actionable for DataForge360 + DataIQ360.'
    },
    {
      topic: 'Model Risk Governance',
      q: '"When did you last produce a model validation report on your primary credit scorecard — and can you show the complete lineage from training data through feature engineering to the deployed model output, in the format your FSCA supervisory relationship would expect to see?"',
      qualifies: 'FSCA model risk compliance gap. If documentation is manual, incomplete, or more than 12 months old, DataTrust360 is an urgent compliance need that can be sold independently of the full platform engagement.'
    },
    {
      topic: 'Fraud Detection Performance',
      q: '"What is your current fraud detection rate on card and digital transactions — and what percentage of your total fraud losses occur on transactions that your system cleared as legitimate before the fraud was reported by the customer?"',
      qualifies: 'Fraud model performance gap. A high false negative rate (fraud that passed through the model) is the primary commercial urgency anchor for a DataIQ360 fraud model conversation.'
    },
    {
      topic: 'POPIA Compliance Posture',
      q: '"How does your organisation currently document the processing of customer personal data in your AI and analytics models — and if the Information Regulator contacted you tomorrow requesting a data processing register and lineage documentation for your credit analytics, how long would your team take to produce it?"',
      qualifies: 'POPIA compliance posture and urgency. Most SA banks cannot produce a complete, auditable register in under 2 weeks — this is the DataTrust360 fast-entry trigger with the fastest procurement pathway.'
    },
    {
      topic: 'Data Pipeline Architecture',
      q: '"Where does your customer transaction data currently sit — on-premise, Azure, AWS, Snowflake — and how long does it take from a transaction event to a fraud score or credit decision being available in your operational systems?"',
      qualifies: 'Data architecture understanding and latency gap. Days-to-insight means analytics is batch, not real-time. Latency in fraud scoring directly translates to a measurable and quantifiable financial loss.'
    },
    {
      topic: 'Model Deployment Lifecycle',
      q: '"When your data science team builds a new credit or fraud model, how long does it take from a trained model in a notebook to a model making live decisions in production — and who is responsible for monitoring that model\'s accuracy over time and triggering a retrain when it drifts?"',
      qualifies: 'Production deployment bottleneck and model maintenance burden. Months to production, or no formal monitoring process, is the core DataFlow360 + DataIQ360 + DataForge360 data estate opportunity.'
    },
    {
      topic: 'Regulatory Reporting Burden',
      q: '"How many person-days per month does your finance and risk team spend preparing data for SARB regulatory returns and FSCA supervisory submissions — and when the FSCA requests ad-hoc data, what is the typical turnaround time your team can commit to?"',
      qualifies: 'Regulatory reporting automation urgency. More than 5 person-days per monthly SARB cycle = compelling DataFlow360 + DataTrust360 regulatory pipeline ROI story.'
    }
  ]
});

// ─── RENDER ───────────────────────────────────────────────────────────────────
// Call these at the end of every data.js save — they refresh the sidebar and home screen.
buildSidebar();
render();
