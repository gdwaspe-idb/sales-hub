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


// ─── SECTOR 2: MINING & ENERGY ────────────────────────────────────────────────
SECTORS.push({
  id: 'mining',
  name: 'Mining & Energy',
  icon: 'ME',
  tagline: 'Predictive maintenance · safety analytics · energy optimisation · Carbon Tax ESG',
  openingQ: '"On your most critical production asset — whether that is a primary crusher, a hoist, a smelter, or a compressor — how many unplanned stoppages did you experience in the last 12 months, and what is your best estimate of the combined production loss cost per event? And how much advance notice did your condition monitoring team have before each one?"',
  vp: 'Turns operational sensor and historian data into machine failure predictions, safety precursor alerts, and energy optimisation schedules — managed by an iDbase360 team who understands MHSA personal liability, the Carbon Tax Act, and the precise operational impact of load-shedding on a South African mine or energy facility.',
  entry: 'DataIQ360 Predictive Maintenance PoC · DataIQ360 Safety Analytics · DataTrust360 ESG & Carbon Tax Assessment · DataForge360 OT Platform Managed Services',
  events: 'Mining Indaba (February, Cape Town — primary annual event) · Joburg Indaba (September) · Enlit Africa (energy sector) · Minerals Council SA working groups · OT vendor channel: Schneider Electric SA, ABB SA, Siemens SA, Rockwell Automation · SAIMM technical forums',

  personas: [
    {
      title: 'COO / VP Operations / Mine Manager',
      role: 'Economic Buyer — Operational',
      vp: 'iDbase360 turns your OSIsoft PI and SCADA data into machine health predictions and production optimisation insights — managed on-premise within your OT network perimeter, with no cloud connectivity required. The first prevented breakdown on your primary crusher covers months of managed service cost.'
    },
    {
      title: 'Head of Asset Management / Digital Transformation Lead',
      role: 'Technical Champion',
      vp: 'iDbase360 connects to your existing OT historian — OSIsoft PI, AVEVA, Wonderware — through a read-only interface within your plant network perimeter, and builds health score models your maintenance team acts on from a simple dashboard. No cloud. No OT cybersecurity risk. No new data infrastructure required.'
    },
    {
      title: 'Group SHE Manager / Head of Risk',
      role: 'Safety Champion',
      vp: 'DataIQ360 produces explainable safety precursor alerts — showing exactly which sensor readings and operational parameters are driving the elevated risk score — with the MHSA-compatible audit documentation that allows your SHE team to demonstrate proactive risk management to the DMRE and defend against Section 54 personal liability.'
    },
    {
      title: 'Head of Energy / Chief Sustainability Officer',
      role: 'Sustainability & ESG Stakeholder',
      vp: 'DataTrust360 automates your Carbon Tax Act Scope 1 emissions calculation from production-level energy data — replacing the manual, aggregated utility-invoice estimate with an auditable, SARS-defensible calculation that is traceable to the machine level. DataIQ360 then optimises your load schedule around Eskom TOU tariffs and load-shedding windows.'
    },
    {
      title: 'CFO / Group Finance Director',
      role: 'Commercial Approver',
      vp: 'Preventing one major production stoppage per quarter typically covers 12 months of iDbase360 managed service cost at most SA mining operations. We build the payback model from your own production cost structure before proposing anything — every number is traceable to your disclosed operational metrics.'
    }
  ],

  useCases: [
    {
      n: 1,
      name: 'Predictive Maintenance & Equipment Health Scoring',
      persona: 'COO / Head of Asset Management / Head of Maintenance',
      entryQ: '"On your highest-value production asset, how many unplanned stoppages in the last 12 months — and what is your combined production loss cost per event, including emergency repair, production loss, and contractor mobilisation? And critically — how much advance notice did your maintenance team have before each failure?"',
      outcome: 'Anglo American deployed a Dataiku-equivalent predictive maintenance platform that reduced unplanned downtime by 28% and cut maintenance cost per tonne by 14% across SA surface mining operations. A SA platinum miner (NDA) deployed a DataIQ360 bearing health model predicting 11 bearing failures with an average of 9 days advance notice over a 90-day pilot — preventing an estimated R8.4 million in combined downtime, emergency repair, and production loss costs.',
      entry: 'DataIQ360 Predictive Maintenance PoC — 12-week back-test on historical historian data, scoped to one asset class. DataForge360 OT Platform Managed Services as the always-on management layer.'
    },
    {
      n: 2,
      name: 'Safety Incident Prediction & MHSA Compliance Analytics',
      persona: 'Group SHE Manager / COO / Mine Manager',
      entryQ: '"In the last 12 months, how many MHSA Section 54 stop-work orders did you receive — and what was the combined direct and indirect cost, including production loss, investigation, and legal exposure? And when a serious incident or near-miss occurred, how quickly could your SHE team identify the precursor conditions that contributed to it in the 48 hours before the event?"',
      outcome: 'A SA platinum miner (NDA) deployed a DataIQ360 safety precursor model that identified elevated-risk operational conditions 4 hours before 7 of the 9 serious near-miss events that occurred in the subsequent 6-month period — enabling management intervention before each event and generating documented evidence of proactive risk management that was presented to the DMRE during a routine inspection.',
      entry: 'DataIQ360 Safety Analytics + DataTrust360 MHSA-compatible audit documentation. Must be positioned as a governed safety analytics engagement from Day 1 — the explainability and lineage layer is non-negotiable for MHSA contexts.'
    },
    {
      n: 3,
      name: 'Energy Optimisation & Load-Shedding Production Scheduling',
      persona: 'Head of Energy / COO / CFO',
      entryQ: '"What percentage of your total operating cost is electricity — and do you currently have a model that actively optimises your most flexible production loads against Eskom\'s TOU tariff schedule and your load-shedding forecast? And when Stage 4 or higher load-shedding forces you onto diesel generation, what is your average diesel cost per hour of production?"',
      outcome: 'Anglo American\'s energy optimisation programme using advanced operational analytics achieved a 15% reduction in energy intensity across SA operations — equivalent to removing 200,000 tonnes of CO2 annually. Sibanye-Stillwater has publicly reported saving over R500 million annually through energy management including load shifting and demand response. A SA gold miner (NDA) deployed DataIQ360 energy scheduling that reduced diesel generator consumption by 31% over six months — saving R6.8 million in annual diesel cost while maintaining production throughput targets.',
      entry: 'DataIQ360 Energy Optimisation + DataTrust360 Carbon Tax Act emissions pipeline. Carbon Tax Assessment often approvable at Head of Energy or CSO level independently of the full platform engagement.'
    },
    {
      n: 4,
      name: 'Carbon Tax & ESG Reporting Automation',
      persona: 'CSO / Head of Energy / CFO / Head of Sustainability',
      entryQ: '"How does your sustainability team currently calculate your Carbon Tax Act Scope 1 liability — and can you trace that calculation back to production-level energy consumption data at the machine or production area level? And for your JSE sustainability disclosure, how long does it take your team to consolidate emissions data from all sites into the board-ready ESG report?"',
      outcome: 'A SA diversified mining group (NDA) deployed DataTrust360 to automate its Carbon Tax Act Scope 1 emissions calculation from SCADA and metering data at 14 sites — replacing a manual Excel-based estimation process with an auditable, production-level calculation that identified a R12 million over-reporting of Carbon Tax liability in the prior year. Recovery was submitted through the SARS voluntary disclosure process.',
      entry: 'DataTrust360 ESG & Carbon Tax Assessment — fixed fee, 4–6 weeks. Often the fastest commercial entry in this sector: fundable from the sustainability or finance operational budget, below most competitive tender thresholds, and directly linked to a live financial obligation.'
    },
    {
      n: 5,
      name: 'Production Optimisation & Ore Processing Analytics',
      persona: 'COO / Head of Processing / Chief Digital Officer',
      entryQ: '"On your primary processing circuit — whether that is a concentrator, a smelter, or a leaching plant — what is your current recovery rate, and how is that figure determined? Is it modelled in real time from sensor data, or calculated retrospectively from assay results?"',
      outcome: 'Barrick Gold deployed a Dataiku process optimisation model on its Pueblo Viejo concentrator that improved gold recovery rate by 1.8 percentage points — equivalent to USD 40 million in additional annual revenue at current gold prices. A SA platinum concentrator (NDA) deployed a DataIQ360 recovery optimisation model that improved PGM recovery by 1.1 percentage points — worth an estimated R28 million annually at prevailing basket prices.',
      entry: 'DataIQ360 Process Optimisation — typically Phase 2 following a successful predictive maintenance engagement, sharing the same DataFlow360 historian data pipeline foundation.'
    },
    {
      n: 6,
      name: 'OT Data Estate Governance & Historian Management',
      persona: 'Head of Asset Management / CIO / CDO / Head of OT',
      entryQ: '"How many different OT data sources — historians, SCADA systems, PLCs, condition monitoring feeds — does your operation currently have, and what proportion of that sensor data is actually being used in any kind of analytics, reporting, or decision support? And if an auditor asked to trace a production figure from your board report back to the original sensor reading, how would your team do that?"',
      outcome: 'A SA diversified mining house (NDA) deployed DataForge360 to establish governed OT data management across 6 operating mines — creating a unified, quality-assured operational data layer that reduced time-to-insight for group-level production reporting from 5 days to 4 hours, and formed the foundation for subsequent DataIQ360 predictive maintenance and safety analytics deployments across the group.',
      entry: 'DataForge360 OT Platform Managed Services — the foundation layer. Often the right starting point for large mining houses with multiple sites and fragmented OT data estates, before analytics models are built on top.'
    }
  ],

  stages: [
    {
      num: 1,
      story: 'You are opening as a local, operationally-credible partner — not a software vendor. Lead with a specific production number from their most recent results announcement: cost per tonne, OEE target versus actuality, a known Section 54 event, or a load-shedding impact they disclosed. The story is: "iDbase360 turns your OSIsoft PI and SCADA operational data into machine health predictions, safety precursor alerts, and energy optimisation schedules — managed on-premise within your OT network perimeter, no cloud connectivity required, by a local SA team who understands what a Section 54 costs and what load-shedding does to a platinum smelter."',
      actions: [
        'Research before any outreach: most recent production results announcement, JSE SENS disclosures for Section 54 events, disclosed energy cost ratios, and any known OT platform or digital transformation initiative from LinkedIn or industry press',
        'Lead sources: Mining Indaba (February, Cape Town — book meetings 6–8 weeks in advance for C-suite access), Joburg Indaba (September), Schneider Electric SA / ABB SA / Siemens SA OT vendor channel introductions, Minerals Council SA working group contacts',
        'Best outreach angle: load-shedding production resilience and diesel cost avoidance, or predictive maintenance cost avoidance — whichever is more urgent from their most recent public results commentary',
        'Primary targets: COO or VP Operations (feels the production pain most acutely), Head of Asset Management or Digital Lead (owns the OT data and the platform decision), Group SHE Manager (carries MHSA personal liability)',
        'Goal: a site visit and discovery conversation within 2–3 weeks of first contact. Mining deals require physical presence — a remote-only relationship does not build the operational credibility this sector demands.'
      ],
      blockers: [
        {
          q: '"Our OT systems are completely air-gapped — we cannot connect production data to any external platform or cloud."',
          m: 'On-premise deployment within the OT network perimeter is specifically designed for this constraint — and it is our default architecture for mining and industrial clients. Dataiku runs as an on-premise application inside your plant network. iDbase360 connects to your OSIsoft PI historian through a read-only interface within the OT perimeter — no data leaves your network, no cloud connectivity required. Your OT cybersecurity team defines the connectivity boundary and we work within it. The architecture we have used at comparable SA mining operations is available for your Head of OT and IT Security to review. Can we arrange a 30-minute technical session with that team?'
        },
        {
          q: '"We already have OEM condition monitoring from our equipment vendor — Sandvik, Metso, SKF."',
          m: 'OEM condition monitoring systems are designed to monitor that vendor\'s specific equipment within one data silo — they cannot correlate signals across your full asset estate, incorporate production context, or model the interaction effects between assets and process variables. iDbase360 aggregates data from all your equipment vendors and builds cross-asset health models that are fundamentally more predictive. The bearing failure on your primary crusher is often preceded by a signal in the feed conveyor data two weeks earlier — but only a cross-asset model sees that. Your OEM portal does not.'
        }
      ]
    },
    {
      num: 2,
      story: 'You are a trusted operational analytics advisor — not a vendor. A site visit at this stage is worth more than three remote discovery calls. The story is: "Before we recommend anything, we need to understand your specific asset estate, your OT data sources, your safety metrics, and where the biggest production and energy cost pain sits. The most valuable AI model we can build is almost always hiding in the historian data your operation is already collecting — the gap is the governed analytics infrastructure to act on it."',
      actions: [
        'Prioritise a site visit — physically seeing the operation builds credibility and surfaces pain points that never come up in a boardroom conversation. Ask: "Would it be possible to do a 2-hour site walk before we sit down for the discovery meeting?"',
        'Quantify the downtime pain before leaving Stage 2: events per year on primary assets × average cost per event = the annual production cost at risk. This is your ROI anchor for the entire subsequent commercial conversation.',
        'Map the OT data landscape: historian type (OSIsoft PI, AVEVA, Wonderware, custom), key sensor coverage per asset class, data access feasibility, and current analytics tooling (if any)',
        'Identify all three commercial angles simultaneously: operational (maintenance cost and production loss), safety (MHSA Section 54 risk and LTIFR target), and financial (Carbon Tax liability accuracy and energy cost optimisation)',
        'For JSE-listed groups: identify the sustainability reporting obligation and ask about the Carbon Tax Assessment as a parallel fast-entry track at Stage 2 — it often has a faster procurement pathway than the full analytics engagement'
      ],
      blockers: [
        {
          q: '"We tried a predictive maintenance project 18 months ago with [vendor] and it did not deliver results."',
          m: 'That is the most common starting point for this conversation in the mining sector — and it tells us exactly what to do differently. Failed predictive maintenance projects in mining almost always fail for one of three reasons: the data pipeline from the historian to the model was unstable and produced unreliable inputs; the model was built by a consultancy who left after delivery with no operational handover; or the output was never integrated into the maintenance team\'s workflow in a way they actually used. iDbase360\'s managed service model directly addresses all three: we own and operate the data pipeline, we maintain the model as part of the ongoing engagement, and we work with your maintenance team to embed the output into the existing work order workflow. Can we walk through what specifically failed in the previous project — it will tell us exactly where iDbase360 would have made the difference.'
        }
      ]
    },
    {
      num: 3,
      story: 'You have a quantified production pain and an engaged operational buyer. The story is: "We know what the unplanned downtime on your primary crusher is costing per year. We know the historian data that exists to build a health model that predicts failures with 7–14 days advance notice. Here is what proof looks like — a 12-week back-test on your own historical data that validates predictive accuracy against breakdowns that have already happened. You evaluate the model\'s performance against real events before committing to live deployment."',
      actions: [
        'Define the PoC scope precisely: one asset class (e.g. primary crushers, hoisting systems, or underground mobile equipment), one site, 12 months of historian data. The tighter the scope, the faster the back-test and the cleaner the result.',
        'Agree the back-test success metric in writing before work begins: "The model will predict X% of historical breakdown events with at least Y days advance notice, measured against the maintenance records for the period." This removes ambiguity about what success looks like.',
        'Identify the OT data extraction process with the Head of OT: historian export, read-only network connection, or edge compute approach within the OT perimeter',
        'Propose the DataTrust360 Carbon Tax & ESG Assessment as a parallel fast-entry track — frequently approvable at Head of Energy or CSO level without a full capital approval, with a faster 4–6 week delivery timeline',
        'For capex-constrained environments: confirm with the CFO whether DataForge360 and DataIQ360 can be classified as operational expenditure (managed services) rather than capital. In most mining company frameworks, managed analytics services are classified as opex maintenance or data management cost — not IT capital.'
      ],
      blockers: [
        {
          q: '"Capex is frozen for the next two quarters — we cannot commit to any new technology investment."',
          m: 'DataForge360 and DataIQ360 are structured as monthly operating expenditure — not capital investment. In most mining company financial frameworks, managed operational technology services are classified as opex maintenance or data management cost, not IT capital. The production cost avoidance argument is also an opex conversation: preventing one major production stoppage per quarter reduces your maintenance and production loss opex line — it is not a technology investment ROI, it is a direct operational cost avoidance. Can we work with your finance team to confirm the right budget classification and identify which operational budget line covers this?'
        }
      ]
    },
    {
      num: 4,
      story: 'You are presenting a production economics case. The story is: "Here is what unplanned downtime on your primary production assets is costing your operation annually. Here is the back-test result showing the model\'s predictive accuracy on your own historical data. Here is the investment. And here is why acting before your next quarterly production review — when these numbers become visible to your board and investors — is worth significantly more than waiting."',
      actions: [
        'Lead the executive summary with their own production numbers from their most recent results announcement or site operational data — not platform features or technology capabilities',
        'Production economics ROI model: downtime events per year × average cost per event × predicted prevention rate (typically 30–40% in the first year) = annual value protected. Present conservative, base, and upside scenarios.',
        'Safety angle: MHSA Section 54 personal liability creates board-level urgency that is separate from and reinforces the commercial ROI case. Frame it respectfully: "The safety analytics capability also gives your SHE team documented evidence of proactive risk management — which matters when the DMRE inspector arrives."',
        'Always include the Carbon Tax track for JSE-listed mining groups: estimated current Carbon Tax liability, improvement from machine-level calculation accuracy, and SARS audit trail value',
        'OT architecture diagram on one page: OSIsoft PI / SCADA → read-only feed within OT perimeter → DataForge360 managed platform (on-premise) → DataIQ360 health models → maintenance team dashboard / CMMS work order trigger. Zero cloud connectivity. Zero OT security risk.'
      ],
      blockers: [
        {
          q: '"Your competitor offered a lower price for what seems like a similar scope."',
          m: 'The comparison is almost never like-for-like in this sector — and it is worth unpacking before price becomes the deciding factor. Three specific questions: (1) Is the competitor offering a managed service with ongoing operational accountability, or a once-off model build with a handover? (2) What OT data integration experience do they have specifically with your historian type and asset classes — have they built a model on OSIsoft PI data from a platinum concentrator before? (3) What is their SA mining reference base — can they put you in a room with a COO at a comparable SA operation who will speak to the outcome? iDbase360 carries operational accountability for the model\'s performance beyond the build phase, with SA mining-specific delivery experience. We are not the cheapest option — we are the option that still has a team accountable for your data estate in 18 months.'
        }
      ]
    },
    {
      num: 5,
      story: 'Finalising an operational data estate partnership. The story is: "We are committed to the production, safety, and energy outcomes we have proposed. Let us finalise the terms that give your COO, your Group SHE Manager, and your Board the confidence that this is a professionally governed, MHSA-compliant, and locally accountable managed service."',
      actions: [
        'POPIA Operator Agreement required before any data that could identify individual workers — driver behaviour, worker location, safety incident records — is processed. Non-negotiable.',
        'B-BBEE compliance certificate must be current and verified. Mining Charter III procurement requirements make this a hard prerequisite — an expired certificate kills a bid at the final stage.',
        'For JSE-listed groups: preferred supplier registration and group procurement approval may take 4–8 weeks. Initiate the vendor onboarding process at Stage 3, not Stage 5.',
        'Carbon Tax Assessment contract can often be structured as a separate consulting engagement with a faster approval pathway — use this to generate early revenue while the full platform commercial process progresses.',
        'OT remote access terms: iDbase360 team access to the on-premise Dataiku environment must be via the client\'s approved secure remote access channel (VPN or jump server), with full activity audit logging. This is standard and should be agreed in the SOW schedule.'
      ],
      blockers: [
        {
          q: '"Group procurement policy requires centralised vendor approval — the local site cannot approve this."',
          m: 'Two parallel tracks: (1) The Carbon Tax & ESG Assessment is a consulting engagement typically approvable at local mine or regional COO level without involving group procurement — it has a fixed fee below most capital approval thresholds and is directly linked to a statutory compliance obligation. (2) For the full platform engagement, we can provide a complete group-level vendor qualification pack — company registration, B-BBEE certificate, tax clearance, reference list, audited financials, and cybersecurity posture documentation — designed for the group procurement committee\'s vendor assessment process. Can we identify the group IT procurement or SCM contact so we can run both tracks simultaneously?'
        }
      ]
    },
    {
      num: 6,
      story: 'The contract is signed. The story is: "We are now part of your operational data estate. The first time a DataIQ360 health alert fires on your primary crusher 9 days before a bearing failure that your maintenance team then prevents — and you calculate the production loss that did not happen — that is the moment this partnership proves its value. Document it. That story opens every other mining conversation in South Africa."',
      actions: [
        'Within 24 hours: personal message from iDbase360 leadership to COO and Head of Asset Management. Confirm kick-off date. Introduce the named delivery lead by name and title.',
        'Within 48 hours: execute the POPIA Operator Agreement for any personal data in scope. Confirm OT remote access channel with the Head of OT and IT Security.',
        'Within 1 week: on-site delivery team introduction to the OT team, maintenance management, and the SHE Manager. This meeting is on-site — not remote.',
        'Within 90 days: first machine health score dashboard in production, visible to the maintenance team, triggering the first proactive maintenance intervention before a breakdown occurs.',
        'Document the first prevented breakdown immediately — the rand value, the days of advance notice, and the production loss avoided. This is the reference case that opens every subsequent SA mining and energy conversation.'
      ],
      blockers: []
    }
  ],

  discoveryQs: [
    {
      topic: 'Equipment Downtime',
      q: '"On your most critical production asset — primary crusher, hoist, concentrator, or compressor — how many unplanned stoppages in the last 12 months, and what is your combined production loss cost per event including emergency repair, contractor mobilisation, and lost throughput?"',
      qualifies: 'Predictive maintenance urgency and primary ROI anchor. More than 4–5 unplanned stoppages per year on a primary asset = the payback calculation is immediate and compelling. If they cannot quantify the per-event cost, help them estimate it: production rate × commodity price × hours lost.'
    },
    {
      topic: 'Maintenance Regime',
      q: '"Is your current maintenance programme primarily time-based, condition-based, or predictive — and for your condition monitoring, how long after data is collected does your maintenance team typically act on it? Is that alert from the historian reaching a technician in 30 minutes or 3 days?"',
      qualifies: 'Gap between data collection and maintenance action. A 24–72 hour lag on condition monitoring data is common and directly addressable. Time-based maintenance with no condition monitoring = the largest predictive maintenance opportunity.'
    },
    {
      topic: 'Safety Performance',
      q: '"What is your operation\'s current LTIFR and how does it compare to your group target — and when a serious incident or near-miss occurs, how quickly can your SHE team identify the precursor conditions in the operational data in the 48 hours before the event?"',
      qualifies: 'MHSA Section 54 risk and safety analytics urgency. LTIFR above group target = high urgency. If precursor analysis is retrospective and takes days, the safety analytics gap is immediately actionable and carries personal liability implications for mine management.'
    },
    {
      topic: 'Energy Cost & Load-Shedding',
      q: '"What percentage of your total operating cost is electricity — and when Stage 4 or higher load-shedding forces you onto diesel generation, what is your average diesel cost per hour of production? And do you have a model that actively optimises your flexible loads around the Eskom TOU tariff schedule?"',
      qualifies: 'Energy optimisation urgency. Operations above 15% electricity-to-total-opex ratio have a compelling DataIQ360 energy scheduling ROI. Any operation running 4+ hours of daily diesel backup has a quantifiable and significant cost that the energy scheduling model directly reduces.'
    },
    {
      topic: 'Carbon Tax & ESG Reporting',
      q: '"How does your sustainability team currently calculate your Carbon Tax Act Scope 1 liability — and can you trace that calculation from the number in your board ESG report back to production-level energy consumption data at the machine or production area level? Or is it estimated from aggregate utility invoices?"',
      qualifies: 'Carbon Tax urgency and the fast-entry ESG Assessment commercial pathway. If the calculation is from aggregate utility invoices rather than production-level metering, over-reporting of Carbon Tax liability is likely — and the potential refund through voluntary disclosure is often material.'
    },
    {
      topic: 'OT Data Architecture',
      q: '"What OT systems and historians are in use across your key assets — OSIsoft PI, AVEVA System Platform, Wonderware, GE Proficy, or custom systems? And what proportion of the sensor data those systems collect is currently being used in any kind of analytics, reporting, or decision-support model?"',
      qualifies: 'Data access feasibility, integration complexity, and analytics maturity. Most SA mining operations collect far more data than they analyse. Low analytics utilisation of existing historian data = the largest data estate opportunity, and DataForge360 is the natural entry point.'
    },
    {
      topic: 'Analytics Capability Gap',
      q: '"Does your organisation have data scientists or engineers building predictive models on your operational data — and if so, are those models running in production and making live maintenance or operational decisions, or are they still in notebooks being evaluated?"',
      qualifies: 'MLOps and production deployment gap. Models in notebooks = iDbase360 is the managed data estate layer that takes those models to production. No data science capability at all = iDbase360 builds and manages the models end-to-end from the DataIQ360 managed service.'
    }
  ]
});


// ─── SECTOR 3: PUBLIC SECTOR ──────────────────────────────────────────────────
SECTORS.push({
  id: 'publicsector',
  name: 'Public Sector',
  icon: 'PS',
  tagline: 'AGSA audit remediation · grant & procurement fraud · POPIA for citizens · service delivery reporting',
  openingQ: '"In your most recent AGSA management letter, how many findings related to data quality, missing documentation, or inability to reconcile figures between systems — and how many of those were repeat findings from the prior audit cycle? And if the Information Regulator contacted your department tomorrow requesting a data processing register for all citizen personal information you process, how prepared would your Information Officer be to respond?"',
  vp: 'Reduces AGSA audit findings, detects grant and procurement fraud before disbursement, and governs citizen data in full POPIA compliance — deployed on SA infrastructure, managed locally by iDbase360, with entry points that fall below most competitive tender thresholds.',
  entry: 'DataTrust360 Audit Readiness Assessment (consulting entry, below tender threshold) · DataIQ360 Grant Fraud Detection · DataIQ360 Procurement Analytics · DataFlow360 Service Delivery Reporting Automation',
  events: 'GovTech SA (Tshwane, annual) · AGSA stakeholder forums and audit outcome briefings · SALGA annual conference and municipal events · DPSA digital working groups · October–December peak procurement window before financial year-end · February–March AGSA audit preparation urgency window · Minerals Council and SOE CEO forums',

  personas: [
    {
      title: 'Director-General / CFO / City Manager / Municipal Manager',
      role: 'Accounting Officer — Economic Buyer',
      vp: 'iDbase360 reduces AGSA data quality findings, provides documented evidence of proactive governance that demonstrates PFMA accountability to the Auditor-General, and detects grant and procurement fraud before disbursement — reducing the irregular expenditure disclosure that creates personal liability under PFMA Section 38.'
    },
    {
      title: 'Chief Audit Executive / Head of Internal Audit',
      role: 'Governance Champion',
      vp: 'DataIQ360 gives your internal audit team an always-on procurement fraud scoring model and beneficiary anomaly detection engine — catching irregularities before the AGSA audit cycle reveals them, and generating the documented evidence chain that supports disciplinary and recovery proceedings.'
    },
    {
      title: 'POPIA Information Officer',
      role: 'Compliance Gatekeeper',
      vp: 'DataTrust360 maps every citizen data processing pipeline, enforces POPIA-aligned data quality and purpose limitation at the pipeline layer, and produces the live data processing register your Information Officer needs to respond to an Information Regulator inquiry within days — not weeks of manual reconstruction.'
    },
    {
      title: 'CIO / Head of ICT / Head of Data Analytics',
      role: 'Technical Champion',
      vp: 'iDbase360 deploys on-premise within your existing government infrastructure — no cloud connectivity required, no data sovereignty risk. DataForge360 manages the platform health and integration across your BAS, PERSAL, LOGIS, and department-specific systems so your ICT team carries no additional operational load.'
    },
    {
      title: 'Head of Supply Chain Management / SCM Director',
      role: 'Procurement Compliance Buyer',
      vp: 'DataIQ360 scores every procurement transaction for fraud risk before award — detecting split orders, connected-party supplier relationships, and bid rotation patterns that manual SCM processes miss — and generating the documented audit trail that supports PPPFA compliance evidence.'
    }
  ],

  useCases: [
    {
      n: 1,
      name: 'Grant & Social Benefits Fraud Detection',
      persona: 'Director-General / CFO / Head of Grant Administration / Chief Audit Executive',
      entryQ: '"When your department processes its monthly grant payment run, at what point in that process are suspicious or anomalous beneficiary records identified and removed — before the payment is made, or after? And what is your best estimate of the annual value of fraudulent or erroneous grant payments that are currently being made before detection?"',
      outcome: 'A Southern African development agency (NDA) deployed a DataIQ360-equivalent beneficiary reconciliation model that identified 14,000 duplicate beneficiaries across three payment systems — representing an estimated R420 million in annual overpayments — within the first 90 days of deployment. A SA national department (NDA) deployed DataIQ360 pre-payment screening that detected R47 million in irregular split orders before disbursement in its first operational quarter, eliminating a class of AGSA finding that had recurred for three consecutive audit cycles.',
      entry: 'DataIQ360 Grant Fraud Detection + DataTrust360 PFMA-compliant audit documentation. Highest urgency and most direct irregular expenditure reduction story in the sector. The business case is immediate: every fraudulent payment detected before disbursement is a rand saved and an audit finding avoided.'
    },
    {
      n: 2,
      name: 'Procurement Fraud & SCM Analytics',
      persona: 'CFO / SCM Director / Chief Audit Executive / Director-General',
      entryQ: '"In your last financial year, how many procurement transactions were flagged as irregular by your SCM team or internal audit — and how many of those were identified before the contract was awarded versus after payment had already been made? And do you currently have a system that scores every supplier for fraud risk and compliance status before award?"',
      outcome: 'The City of Johannesburg\'s internal audit unit (NDA) piloted a DataIQ360-equivalent supplier analytics model that identified 340 suppliers with suspicious registration patterns — including 89 with shared banking details or connected director relationships — representing contracts totalling over R180 million placed under review. A SA provincial department (NDA) implemented DataIQ360 procurement fraud screening detecting R47 million in irregular split orders before commitment, eliminating the most common recurring category in its AGSA management letter.',
      entry: 'DataIQ360 Procurement Analytics + DataTrust360 PPPFA compliance documentation. One of the strongest ROI narratives in the sector: every irregular expenditure item detected before payment is a PFMA finding avoided, a rand recovered, and personal liability mitigated for the accounting officer.'
    },
    {
      n: 3,
      name: 'AGSA Audit Remediation & Data Quality Governance',
      persona: 'Director-General / CFO / Chief Audit Executive / CIO',
      entryQ: '"How many data quality or documentation findings appeared in your most recent AGSA management letter — and how many of those are repeat findings that have appeared in two or more consecutive audit cycles? And when your finance team prepares your annual financial statements, how many manual reconciliation steps are required between your BAS, PERSAL, and LOGIS data?"',
      outcome: 'A SA metropolitan municipality (NDA) eliminated 8 of 11 recurring AGSA data quality findings within one financial year after implementing DataTrust360 automated quality rules across its BAS and PERSAL data pipelines. A SA national department (NDA) reduced its annual financial statement preparation time from 18 person-days to 3 person-days using DataFlow360 automated reconciliation — eliminating 4 recurring AGSA reconciliation errors and freeing the finance team for analytical work rather than manual data stitching.',
      entry: 'DataTrust360 AGSA Audit Readiness Assessment — fixed fee R150,000–R280,000, 4–6 weeks. Structured as a professional consulting engagement, typically below competitive tender thresholds. Produces a board-ready gap analysis the department uses regardless of subsequent platform decision.'
    },
    {
      n: 4,
      name: 'Service Delivery Reporting & Performance Analytics',
      persona: 'Director-General / Deputy DG / Head of Strategy & M&E / City Manager',
      entryQ: '"How long does it take your team to produce the quarterly performance report submitted to DPME or your oversight authority — and how confident are you that every figure in that report can be traced back to a verified source document? And when your Minister or Mayor asks for a real-time service delivery performance update, how long does that take your team to produce?"',
      outcome: 'The City of Cape Town\'s data-driven service delivery monitoring programme reduced the time to generate monthly mayoral performance reports from three weeks to three days, enabling proactive reallocation of resources to underperforming service areas in real time. A sub-Saharan African national health department (NDA) deployed DataFlow360 to automate its district health information system reporting — reducing data preparation time for national health outcome reports by 65% and eliminating the recurring AGSA finding related to health facility performance data completeness.',
      entry: 'DataFlow360 + DataTrust360 service delivery reporting pipeline. High political urgency: a Minister cannot defend a parliamentary question with data they do not trust. Often fundable from the M&E or strategy budget rather than ICT capital.'
    },
    {
      n: 5,
      name: 'Ghost Employee & Payroll Fraud Detection',
      persona: 'CFO / Director-General / Head of Human Resources / Chief Audit Executive',
      entryQ: '"When last did your department conduct a comprehensive reconciliation of your PERSAL payroll records against your physical establishment list, your biometric access control data, and your Home Affairs population register? And how many of your current AGSA findings relate to payroll controls, employee existence verification, or remuneration compliance?"',
      outcome: 'A SA national department (NDA) deployed DataIQ360 PERSAL analytics that identified 1,240 employees with inconsistent records across systems — of whom 380 were confirmed ghost employees or overpayment cases — representing over R28 million in annual payroll irregularity. Recovery proceedings were initiated with PFMA-compliant audit documentation generated automatically by DataTrust360.',
      entry: 'DataIQ360 PERSAL Analytics + DataTrust360 PFMA audit trail. High political urgency: ghost employees are front-page news and carry direct PFMA personal liability for the accounting officer. Often the fastest-moving use case when an AGSA payroll finding has already been issued.'
    },
    {
      n: 6,
      name: 'POPIA Compliance & Citizen Data Governance',
      persona: 'POPIA Information Officer / Director-General / CIO / Head of Legal',
      entryQ: '"How does your department currently document all processing activities involving citizen personal information — and if the Information Regulator conducted an audit of your data processing activities this month, what would your Information Officer present as evidence of POPIA compliance? And for citizen data breach notification, does your department have a documented 72-hour notification workflow?"',
      outcome: 'A European public sector organisation achieved full regulatory compliance across 4,200 citizen data pipelines using a DataTrust360-equivalent governance platform — eliminating 67 unlawful processing activities and producing a regulator-ready data processing register within 18 months. A SA provincial government department (NDA) deployed DataTrust360 to produce its first complete, auditable citizen data processing register — replacing a manually maintained spreadsheet last updated 14 months prior — and resolving an active Information Regulator inquiry with the documentation generated.',
      entry: 'DataTrust360 POPIA Readiness Assessment — fixed fee consulting engagement. Almost always below competitive tender thresholds. The Information Regulator\'s active audit programme creates direct, non-deferrable urgency for every government department processing citizen personal information at scale.'
    }
  ],

  stages: [
    {
      num: 1,
      story: 'You are opening as a local governance expert who has read their audit report — not as a software vendor. The most effective entry is always through AGSA findings: they are public, quantified, and personally significant to the accounting officer. Read the most recent audit outcome before any contact is made. The story is: "iDbase360 remediates the most common AGSA data quality findings, detects grant and procurement fraud before disbursement, and governs citizen data in POPIA compliance — on SA infrastructure, managed locally, with entry points that fall below most competitive tender thresholds."',
      actions: [
        'Read the AGSA audit report and management letter for the target department before any outreach. They are public documents available on the AGSA website. Identify the specific finding categories and whether any are repeat findings.',
        'Lead outreach with the specific findings: "We saw your management letter referenced data quality failures in your PERSAL reconciliation for the third consecutive year — this is one of the most common patterns we address, and there is a structured approach to eliminating it before the next audit cycle."',
        'Primary targets: CFO and Chief Audit Executive first — they carry the most direct AGSA accountability and the most personal urgency. DG or City Manager once you have a champion at CFO/CAE level.',
        'Position the DataTrust360 Audit Readiness Assessment as a professional consulting services engagement — not a technology procurement. At R150,000–R280,000 it typically falls below the competitive tender threshold for professional services in most national departments and municipalities.',
        'Key events: GovTech SA (Tshwane), AGSA stakeholder forums after audit outcome announcements (October–December is the highest urgency window), SALGA conference for municipal targets.'
      ],
      blockers: [
        {
          q: '"All our technology procurement goes through a formal tender process — we cannot engage outside of that."',
          m: 'The DataTrust360 Audit Readiness Assessment is a professional consulting services engagement — not a technology procurement or a software licence. At R150,000–R280,000, it typically falls below the competitive tender threshold for professional services in most national departments and metropolitan municipalities. It produces a current-state gap analysis that your department uses regardless of which platform or vendor you subsequently choose for the implementation phase — so it is genuinely procurement-neutral. Can we confirm with your SCM team which procurement category this falls under and what the applicable threshold is?'
        },
        {
          q: '"We need to go through SITA for any technology solution."',
          m: 'Two pathways worth exploring in parallel. First, the DataTrust360 Assessment is a professional consulting engagement and typically does not require SITA involvement — it is a services procurement, not a technology acquisition. Second, for the full managed service implementation, we can engage through the relevant SITA transversal contracts framework as an approved implementation partner. Many of the technology platforms iDbase360 deploys are already available on SITA transversal catalogues. Can we establish which specific SITA pathway applies to your department\'s situation while starting the consulting Assessment locally?'
        }
      ]
    },
    {
      num: 2,
      story: 'You are a trusted public sector governance advisor — not a vendor. Government officials respond to advisors who understand the PFMA, the AGSA process, and the political consequences of a qualified opinion. The story is: "Before we recommend anything, we need to understand your specific audit exposure, your data infrastructure, and where the biggest governance and service delivery risks sit. Most departments at this stage have three or four foundational data problems that, if resolved, would materially change their audit outcome and reduce the accounting officer\'s personal liability."',
      actions: [
        'Structure the 60-minute discovery call: institutional context (10 min) → AGSA findings and irregular expenditure deep-dive (20 min) → fraud and POPIA exposure (15 min) → systems landscape and data architecture (10 min) → budget and procurement context (5 min)',
        'Quantify the irregular expenditure before leaving Stage 2: disclosed irregular expenditure figure × proportion attributable to data quality or SCM failures = the annual financial exposure that iDbase360 directly addresses',
        'Map the procurement pathway early: consulting engagement route (fastest — below competitive tender threshold), professional services quotation process, or full technology tender. Understanding this at Stage 2 prevents a late-stage procurement surprise.',
        'Identify whether SITA is in scope for the implementation phase — for national departments this is often mandatory and affects the commercial structure',
        'Engage all three governance layers simultaneously: CFO/DG (accounting officer urgency), Chief Audit Executive (governance champion), POPIA Information Officer (compliance urgency and often fastest procurement pathway)'
      ],
      blockers: [
        {
          q: '"Our budget is fully committed for this financial year — this would need to go into next year\'s MTEF submission."',
          m: 'That is the most common starting position in government and it is rarely the final answer. Three things to explore: (1) The DataTrust360 Assessment is typically fundable from existing operational budgets — internal audit, CFO governance improvement, or ICT operational maintenance — without requiring a new MTEF allocation. (2) Departments that have identified a specific AGSA finding or fraud risk can often access a contingency or risk mitigation budget line for a time-bound consulting engagement. (3) The October–March period before financial year-end is often when underspent budget is available for commitments. Can we discuss with your CFO which existing budget line is most appropriate for a professional consulting engagement of this scope?'
        }
      ]
    },
    {
      num: 3,
      story: 'You have a quantified audit or fraud exposure and an engaged accounting officer or CFO. The story is: "We know what the AGSA findings are costing in irregular expenditure disclosure, in political capital, and in personal PFMA liability. We know the data infrastructure that exists to address it. Here is the consulting engagement that produces a board-ready remediation roadmap in 4–6 weeks — and here is the fraud detection capability that starts preventing irregular expenditure before the next payment run."',
      actions: [
        'Propose the DataTrust360 Audit Readiness Assessment as the formal entry point: fixed fee R150,000–R280,000, 4–6 weeks, output is a board/EXCO-ready current state assessment and prioritised remediation roadmap',
        'Confirm the Assessment can be sourced as a professional consulting services engagement under existing procurement policy — this removes the 3–6 month tender delay',
        'Engage the CFO, Chief Audit Executive, and POPIA Information Officer simultaneously on the three-track urgency: AGSA data quality (CFO), fraud detection (CAE), POPIA compliance (Information Officer)',
        'For fraud detection use cases: propose a scoped proof of value on one grant payment run or one procurement dataset — the results on real data make the business case self-evident',
        'Register the opportunity with the iDbase360 commercial team for tracking and to ensure the correct procurement pathway is supported from the start'
      ],
      blockers: [
        {
          q: '"The Information Regulator has not contacted us yet — POPIA is not an urgent priority for this department."',
          m: 'The Information Regulator\'s audit programme is targeting large public sector data processors specifically — departments that process citizen personal information at scale are at the front of the queue, not the back. The risk is not whether you will be contacted, but whether you will be ready when you are. A department that can present a complete, accurate data processing register and a documented breach notification workflow on the day of an inspection is in a categorically different position from one that cannot. Given that your department processes [personal data categories from their context], the question is not whether POPIA is relevant — it is whether you want to be ready before or after the Inspector arrives. The Assessment we are proposing specifically produces the documentation your Information Officer needs.'
        }
      ]
    },
    {
      num: 4,
      story: 'You are presenting a governance risk reduction and irregular expenditure prevention case — not a technology investment case. The story is: "Here is what the AGSA findings are costing your department in irregular expenditure disclosure, audit qualification risk, and political exposure. Here is what a DataIQ360 fraud detection deployment could have prevented in your last financial year. And here is the investment — structured as a professional services and managed data estate engagement that your SCM team can process through the appropriate procurement pathway."',
      actions: [
        'Lead the executive summary with their AGSA finding count and their disclosed irregular expenditure figure — not platform features. Frame it explicitly: "Your department disclosed R X million in irregular expenditure last year. DataIQ360 procurement analytics, applied to your supplier and payment data, would have identified an estimated R Y million of that before commitment."',
        'PFMA personal liability framing — used respectfully, not as a threat: "Accounting officers are personally accountable under PFMA Section 38 for maintaining effective internal control systems. DataTrust360 provides documented evidence that a proactive, technology-assisted governance programme was in place — which is relevant if an expenditure item is subsequently investigated."',
        'POPIA enforcement section in every public sector proposal — the Information Regulator\'s active audit programme creates non-deferrable urgency alongside the commercial case',
        'Procurement pathway section: clearly document the recommended commercial pathway (consulting engagement, professional services quotation, or technology tender), the applicable NT threshold, and the procurement timeline',
        'On-premise architecture page: diagram showing iDbase360 deployed within the department\'s existing government infrastructure — no cloud connectivity, no data sovereignty risk, SITA-compatible architecture'
      ],
      blockers: [
        {
          q: '"The total contract value triggers a formal competitive tender — we cannot award directly, and that process will take 6–9 months."',
          m: 'Two structured approaches. First, a phased engagement design: the DataTrust360 Assessment (Phase 1, below competitive tender threshold, approvals in 2–4 weeks) followed by a scoped Proof of Value on one data domain (Phase 2, also potentially below threshold, contracted separately). Each phase is independently useful — the department has a deliverable and a decision point before committing to the next phase. Second, if the full implementation does require a formal tender, iDbase360 can help your team structure the tender specification to reflect genuine operational requirements — data quality governance for AGSA compliance, POPIA data processing register capability, pre-payment fraud screening — which benefits the institution regardless of which vendor ultimately wins. Would a phased approach work within your current procurement framework?'
        }
      ]
    },
    {
      num: 5,
      story: 'Finalising a governance and data estate partnership. CSD registration, B-BBEE compliance, and tax clearance are hard gates — not administrative formalities. The POPIA Operator Agreement is a legal requirement before any citizen personal data is accessed. These must be in hand before any commercial conversation finalises.',
      actions: [
        'CSD (Central Supplier Database) registration is mandatory for any national or provincial department engagement — confirm current registration number and provide to the SCM team for vendor verification',
        'B-BBEE compliance certificate must be current and verified through the B-BBEE Commission. Mining Charter equivalents apply for SOEs with sectoral requirements.',
        'POPIA Section 20 Operator Agreement must be executed before any citizen personal information is accessed by the iDbase360 team — non-negotiable, required by legislation',
        'Tax clearance certificate (good standing) must be current — request the pin from SARS and provide to the SCM team',
        'For municipalities: confirm MFMA Section 36 compliance position if any deviation from competitive bidding is proposed — the municipal CFO must sign the deviation motivation and it must be reported to the council'
      ],
      blockers: [
        {
          q: '"Procurement says iDbase360 is not on the National Treasury CSD preferred supplier list."',
          m: 'iDbase360 is CSD-registered and the registration number is available immediately. We provide a complete vendor compliance pack designed for SCM team verification: CSD registration confirmation, B-BBEE certificate, tax clearance pin, company registration documents, audited financial statements, and a reference list of comparable public sector engagements. This pack is specifically designed to give your SCM practitioner everything needed to complete vendor verification in a single submission. Can we send it directly to the SCM practitioner\'s email address to run alongside the commercial conversation?'
        }
      ]
    },
    {
      num: 6,
      story: 'The contract is signed. The first deliverable that changes the department\'s position is a DataTrust360 data quality dashboard showing the AGSA-findable data quality failures from the most recent management letter — addressed, documented, and ready for AG verification at the next audit visit. That moment is when the accounting officer understands what this partnership is worth.',
      actions: [
        'POPIA Operator Agreement must be executed before any citizen data is accessed — required by legislation, not optional. Ensure this is signed on or before the kick-off date.',
        'Align implementation milestones to the departmental financial year calendar and the AGSA audit cycle — not the iDbase360 delivery calendar. The next AGSA audit preparation window is the first hard milestone.',
        'Within 90 days: DataTrust360 data quality rules covering the top 3 recurring AGSA findings — live, documented, and able to be presented to the AGSA as evidence of proactive remediation',
        'Within 90 days: first DataIQ360 fraud screening run on the most recent grant payment or procurement dataset — results briefed to the Chief Audit Executive with documented findings',
        'Reference ask timing: after the first AGSA management letter following deployment shows a reduction in data quality findings — that is when the accounting officer is most willing to share the story'
      ],
      blockers: []
    }
  ],

  discoveryQs: [
    {
      topic: 'AGSA Audit Findings',
      q: '"In your most recent AGSA management letter, how many findings related to data quality, missing documentation, or inability to reconcile figures between systems — and how many of those are repeat findings that have appeared in two or more consecutive audit cycles?"',
      qualifies: 'Audit remediation urgency and depth of the governance problem. Repeat findings signal systemic data quality failures, not one-off errors — and they carry escalating political and personal liability consequences for the accounting officer.'
    },
    {
      topic: 'Irregular Expenditure',
      q: '"What was your department\'s disclosed irregular expenditure figure in the most recent financial year — and what proportion of that is attributable to SCM process failures or documentation quality failures versus operational programme expenditure?"',
      qualifies: 'Financial exposure and the specific intervention type needed: procurement fraud detection (DataIQ360) versus data quality and documentation governance (DataTrust360). High SCM component = procurement analytics entry point.'
    },
    {
      topic: 'Grant or Beneficiary Fraud',
      q: '"When your department processes its monthly grant or beneficiary payment run, at what point in that process are suspicious or anomalous records identified and removed — before payment, or after? And does your department have an automated system that screens every payment before disbursement?"',
      qualifies: 'Pre-payment fraud detection gap. If detection is post-payment, the ROI case is immediate and compelling: every rand detected before disbursement is a rand saved and an audit finding avoided.'
    },
    {
      topic: 'POPIA Compliance',
      q: '"How does your department currently document all processing activities involving citizen personal information — and if the Information Regulator conducted an audit this month, what would your Information Officer present as evidence of POPIA compliance?"',
      qualifies: 'POPIA compliance posture and urgency. Almost universal weakness across SA government. The Information Regulator\'s active audit programme targeting large public sector data processors creates direct, non-deferrable urgency.'
    },
    {
      topic: 'Performance Reporting',
      q: '"How long does it take your team to produce the quarterly performance report submitted to DPME or your oversight authority — and how confident are you that every figure in that report can be traced back to a verified source document?"',
      qualifies: 'Service delivery reporting automation urgency. If the answer is "weeks" and "not very confident", the DataFlow360 + DataTrust360 reporting pipeline has an immediate and high-value application.'
    },
    {
      topic: 'Systems Landscape',
      q: '"How many different IT systems does your department pull data from for financial reporting, performance reporting, and service delivery monitoring — and do those systems reconcile automatically or does your team stitch the data together manually for each reporting cycle?"',
      qualifies: 'System fragmentation and data integration complexity. Most departments have 5–15 systems that do not integrate — each manual reconciliation is a DataFlow360 pipeline opportunity and a source of AGSA data quality risk.'
    },
    {
      topic: 'Procurement Controls',
      q: '"How does your SCM team currently detect split orders designed to circumvent competitive bidding thresholds — and when a procurement irregularity appears in an AGSA finding, how far back can your team trace the full transaction chain through your procurement system?"',
      qualifies: 'Procurement fraud detection gap and SCM controls maturity. If split order detection is manual or absent, and transaction traceability is limited, DataIQ360 procurement analytics has an immediate and quantifiable application.'
    }
  ]
});

// ─── RENDER ───────────────────────────────────────────────────────────────────
// Call these at the end of every data.js save — they refresh the sidebar and home screen.
buildSidebar();
render();
