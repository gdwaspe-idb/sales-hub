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


// ─── SECTOR 4: RETAIL & FMCG ─────────────────────────────────────────────────
SECTORS.push({
  id: 'retail',
  name: 'Retail & FMCG',
  icon: 'RF',
  tagline: 'Demand forecasting · CLV & personalisation · supply chain risk · POPIA loyalty data',
  openingQ: '"What was your stockout rate on your highest-velocity SKUs in the final two weeks of your last festive season — and what is your best estimate of the lost sales value? And of your loyalty programme members, what percentage receive a personalised communication based on their individual purchase history, versus a broad segment mailer?"',
  vp: 'Turns POS and loyalty data into festive season demand forecasts, individual-level next-best-offer personalisation, and supplier risk predictions — POPIA-compliant, managed locally by iDbase360, and aligned to your trading calendar so the model is trained and validated before your next peak trading window.',
  entry: 'DataIQ360 Demand Forecasting PoC · DataIQ360 CLV & Personalisation · DataTrust360 POPIA Loyalty Assessment · DataFlow360 POS & Loyalty Data Pipeline',
  events: 'Retail Congress SA (primary annual event) · CGCSA annual conference · January post-festive outreach window — highest urgency, pain is fresh · June pre-peak urgency window — demand forecasting PoC must start before Q3 promotional calendar is locked · JSE retail earnings season (varies by retailer financial year)',

  personas: [
    {
      title: 'CCO / Chief Commercial Officer / CEO',
      role: 'Economic Buyer',
      vp: 'iDbase360 turns your POS and loyalty data into festive season demand forecasts and individual-level retention offers — aligned to your trading calendar, POPIA-compliant, managed locally. The festive season stockout cost is your commercial anchor: a 1% improvement in stockout rate across your store network is worth tens of millions of rands, and it pays for the managed service many times over.'
    },
    {
      title: 'Head of Data Science / CDO / Head of Advanced Analytics',
      role: 'Technical Champion',
      vp: 'Dataiku gives your data science team a production MLOps platform where demand and personalisation models run in production, update from fresh POS data, retrain automatically when accuracy drifts, and deliver outputs to your demand planning and marketing teams without a data science bottleneck. iDbase360 manages the platform — your data scientists build the next model, not maintain the last one.'
    },
    {
      title: 'CMO / Head of Loyalty / Head of Customer',
      role: 'Personalisation & POPIA Buyer',
      vp: 'DataIQ360 moves your loyalty programme from broad-segment personalisation to individual-level next-best-offer recommendations — and DataTrust360 enforces POPIA Section 69 consent-aware processing at the analytics layer, making your personalisation legally defensible and your loyalty programme an asset rather than a liability.'
    },
    {
      title: 'Head of Supply Chain / Head of Demand Planning',
      role: 'Operational Champion',
      vp: 'A DataIQ360 demand forecast that incorporates SA-specific signals — load-shedding schedules, school calendar events, local weather, competitor promotional activity — materially outperforms standard statistical forecasting on festive season stockout and markdown rate. Your demand planners run scenario analyses themselves, without booking the data science team.'
    },
    {
      title: 'CIO / Head of Technology',
      role: 'Technology Gatekeeper',
      vp: 'Dataiku integrates with your existing SAP, Oracle, POS, and loyalty platform architecture through native connectors, and deploys in your private cloud — loyalty member personal data never leaves your network perimeter. DataForge360 manages the platform operationally so your IT team carries no additional load.'
    }
  ],

  useCases: [
    {
      n: 1,
      name: 'Demand Forecasting & Inventory Optimisation',
      persona: 'CCO / Head of Supply Chain / Head of Demand Planning',
      entryQ: '"During your last festive season, what was your stockout rate on your highest-velocity SKUs in the final two weeks — and what is your best estimate of the lost sales value? And on the markdown side, what did overstock cost you in perishables, fashion lines, or seasonal products?"',
      outcome: 'Carrefour deployed DataIQ360-equivalent demand forecasting across 3,000 stores, reducing stockout rates by 18% and overstock waste by 22% — adding EUR 120 million in annual gross margin. A SA grocery retailer (NDA) deployed DataIQ360 demand forecasting across 80 stores — incorporating Eskom load-shedding schedules as an external signal — reducing festive season stockout rate on the top 100 SKUs from 8.4% to 3.1% and protecting an estimated R47 million in sales revenue.',
      entry: 'DataIQ360 Demand Forecasting — scoped PoC on one product category and 20–30 stores. Back-test on 12 months of POS and promotional history. DataFlow360 as the data pipeline layer integrating POS, loyalty, ERP, and external signal data.'
    },
    {
      n: 2,
      name: 'Customer Lifetime Value & Loyalty Personalisation',
      persona: 'CMO / Head of Loyalty / Head of Customer / CCO',
      entryQ: '"Of your loyalty programme members, what percentage receive a personalised communication based on their individual purchase history — and what is the measured redemption rate difference between your personalised and your generic promotional communications? And if a high-value member has not transacted in 60 days, does your system flag that automatically?"',
      outcome: 'Woolworths Australia deployed a DataIQ360-equivalent customer analytics platform increasing loyalty active member engagement by 34% and personalised offer redemption by 22% — adding AUD 85 million in incremental Year 1 revenue. A SA fashion retailer (NDA) identified 340,000 high-value customers at risk of lapsing using DataIQ360 CLV and churn prediction — a targeted retention campaign recovered 28% of the at-risk segment, protecting an estimated R62 million in customer lifetime value.',
      entry: 'DataIQ360 CLV and personalisation — natural Phase 2 following demand forecasting, sharing the same DataFlow360 POS and loyalty data pipeline. DataTrust360 enforces POPIA Section 69 consent-aware processing at the analytics layer.'
    },
    {
      n: 3,
      name: 'Trade Spend Optimisation & Promotion Analytics',
      persona: 'CCO / Head of Category Management / CMO / CFO',
      entryQ: '"When you run a promotional programme with a supplier, is the offer depth, timing, and store selection driven by a model that predicts promotional uplift before the promotion runs — or is it primarily negotiated with the supplier and then evaluated against actuals after the fact? And what percentage of your total trade spend has a measured ROI attached to it?"',
      outcome: 'Decathlon deployed DataIQ360 promotion optimisation improving promotional conversion by 19% and reducing markdown depth requirements by 14%. A SA grocery retailer (NDA) identified R120 million in annual trade spend with a measured ROI below 1.0x using DataIQ360 trade analytics — reallocation of that spend to higher-performing categories and store clusters improved overall trade spend ROI by 31% in the subsequent trading year.',
      entry: 'DataIQ360 Trade Spend and Promotion Optimisation — typically Phase 2 or Phase 3, sharing the demand forecasting data pipeline. High commercial urgency for FMCG manufacturers managing trade budgets with SA retail groups.'
    },
    {
      n: 4,
      name: 'Supply Chain Risk Analytics & Supplier Intelligence',
      persona: 'Head of Supply Chain / CSCO / CCO',
      entryQ: '"In the last 12 months, how many supplier delivery failures resulted in stockouts on your shelves — and at what point in the supply cycle did your team know a supplier was going to fail to deliver: before the delivery window, or when the truck did not arrive?"',
      outcome: 'Unilever deployed DataIQ360 supply chain analytics reducing supplier-driven stockouts by 24% and safety stock requirements by 15%. A SA FMCG manufacturer (NDA) identified 8 at-risk suppliers 6 weeks before delivery failures using DataIQ360 supplier risk scoring — enabling alternative sourcing that prevented an estimated R38 million in production stoppages and downstream retail stockouts.',
      entry: 'DataIQ360 Supply Chain Risk Analytics + DataFlow360 for supplier and procurement data integration. Highest urgency immediately after a high-profile festive season stockout caused by a supplier failure.'
    },
    {
      n: 5,
      name: 'Shrinkage Analytics & Loss Prevention Intelligence',
      persona: 'COO / Head of Loss Prevention / Head of Operations / CFO',
      entryQ: '"What is your current shrinkage rate as a percentage of revenue — and what proportion of that shrinkage is known theft versus unknown losses that are only visible at the year-end stocktake? And at the store level, can your loss prevention team identify which stores have anomalous shrinkage patterns before the annual audit?"',
      outcome: 'A European supermarket group deployed DataIQ360 shrinkage analytics that reduced unknown shrinkage by 31% in the first year by identifying anomalous transaction patterns — early-morning voids, consistent till short counts, and supplier delivery discrepancies — that manual audit processes had missed. A SA grocery group (NDA) deployed DataIQ360 loss prevention analytics identifying 34 stores with statistically anomalous shrinkage patterns requiring investigation — recovering an estimated R18 million in annual shrinkage reduction.',
      entry: 'DataIQ360 Shrinkage and Loss Prevention Analytics — typically a standalone engagement with the COO or Head of Operations as the economic buyer. Often fundable from the loss prevention operational budget rather than IT capital.'
    },
    {
      n: 6,
      name: 'POPIA Compliance & Loyalty Data Governance',
      persona: 'POPIA Information Officer / CMO / Head of Loyalty / CIO',
      entryQ: '"How does your loyalty programme currently manage POPIA consent for direct marketing — is consent tracked at the individual member level and enforced in your campaign execution platform before each communication is sent? And if the Information Regulator requested a data processing register for your loyalty analytics activities tomorrow, how long would it take your team to produce a complete, accurate one?"',
      outcome: 'A SA retailer (NDA) deployed DataTrust360 to automate POPIA consent tracking across its loyalty analytics pipeline — identifying R180 million in annual marketing spend targeting non-consented members, creating immediate regulatory risk mitigation and enabling a compliant personalisation programme to replace the non-compliant activity. A European retailer achieved full GDPR compliance across its loyalty data processing estate using Dataiku governance capabilities, eliminating 43 unlawful processing activities identified during the initial data mapping exercise.',
      entry: 'DataTrust360 POPIA Loyalty Data Governance Assessment — fixed fee consulting engagement, typically below competitive tender thresholds, approvable by the CMO or Information Officer without a full IT procurement process.'
    }
  ],

  stages: [
    {
      num: 1,
      story: 'Lead with the trading calendar — not technology. The festive season creates hard commercial deadlines that generate urgency no pitch can manufacture. The story is: "iDbase360 turns your POS and loyalty data into a demand forecast that prevents festive season stockouts and a personalisation engine that retains high-value customers — managed locally, aligned to your trading calendar, POPIA-compliant. If we start now, the model will be trained and validated before your next major trading window."',
      actions: [
        'Read their most recent JSE earnings call or annual results release — CCOs signal analytics gaps explicitly in earnings commentary. Look for stockout disclosures, margin compression, and any mention of data or personalisation investment.',
        'January post-festive window is the highest-urgency outreach moment: festive season pain is fresh and every commercial team is doing the post-mortem. Lead with: "What did your festive season stockout and markdown numbers look like this year — and what would better forecasting have been worth?"',
        'June pre-peak urgency window: a demand forecasting PoC needs to start now to be validated before the Q3 promotional calendar is locked and Black Friday planning begins.',
        'Lead sources: Retail Congress SA, CGCSA events, Snowflake SA and Microsoft SA co-sell introductions, Deloitte and PwC retail advisory practices, JSE retail earnings season outreach.',
        'Primary targets: Head of Data Science or CDO (immediate technical pain), CCO or Head of Supply Chain (commercial urgency from trading calendar). Get both in the room before Stage 2.'
      ],
      blockers: [
        {
          q: '"We already have a data science team building our own demand forecasting model."',
          m: 'The question is not whether your team can build a demand forecasting model — it is whether that model is running in production today, updating daily from fresh POS data, incorporating external signals like load-shedding schedules and competitor promotions, and making its outputs available to your demand planners without booking the data science team. iDbase360 is the managed data estate layer that takes your team\'s model from a notebook to a production system that the commercial team actually uses. Can we show you how that architecture works in 30 minutes?'
        },
        {
          q: '"The timing is bad — we are heading into peak trading season and cannot take on anything new."',
          m: 'That is the most common time we have this conversation — because the pain of the last peak season is fresh. Two options that work around the timing: first, the DataTrust360 POPIA Loyalty Assessment is a consulting exercise that does not touch production systems and can run in parallel with any trading period. Second, the POS and loyalty data from your current peak trading period is actually the most valuable training dataset for a demand forecasting model — we can use this period as the data collection window and be ready to build the model the moment trading quietens. Either way, we can make this timing work for you.'
        }
      ]
    },
    {
      num: 2,
      story: 'Quantify the trading calendar pain in rands before leaving Stage 2. A stockout rate × average basket value × store count × trading days gives you the festive season lost sales estimate in 10 minutes of mental arithmetic. That number is your commercial anchor for the entire subsequent conversation. The story is: "Before we recommend anything, we need to understand your data architecture, your current forecasting approach, your POPIA posture, and where the biggest commercial opportunity sits — demand forecasting, personalisation, or supply chain risk."',
      actions: [
        'Trading calendar mapping first: when does festive season planning start? When is the promotional calendar locked? When does Black Friday inventory need to be committed? These dates create the PoC delivery deadline.',
        'Quantify stockout and markdown cost from the last festive season — even rough estimates are enough to build the ROI anchor: "If your stockout rate was X% and your festive season revenue is R Y, then a 2-point improvement is worth approximately R Z."',
        'Loyalty programme POPIA posture: how is consent tracked and enforced for direct marketing? If it is a checkbox in a registration form with no enforcement at the campaign execution layer, DataTrust360 has an immediate and fast-moving commercial application.',
        'Data architecture: where does POS data sit? Where is loyalty? Do they connect in real time or does someone stitch them together manually? Manual consolidation = DataForge360 + DataFlow360 entry point.',
        'Map all four stakeholder layers before leaving Stage 2: CCO/CEO (commercial buyer), Head of Data Science (technical champion), CMO/Head of Loyalty (personalisation and POPIA buyer), CIO (technology gatekeeper).'
      ],
      blockers: [
        {
          q: '"Our data is too messy and fragmented to support AI at this stage."',
          m: 'Messy, fragmented data is not a barrier to starting — it is the starting point. DataForge360 and DataFlow360 are specifically designed to consolidate fragmented retail data sources: POS, loyalty, e-commerce, ERP, and supplier data. The governed data pipeline we build in Phase 1 is the foundation that makes the AI models in Phase 2 possible and trustworthy. We have taken organisations in exactly this position from fragmented data to a production demand forecasting model within one trading quarter. Would it help to share that implementation architecture?'
        }
      ]
    },
    {
      num: 3,
      story: 'You have a quantified trading calendar pain and an engaged commercial buyer. The story is: "We know what the festive season stockout cost. We know the data that exists to build a model that prevents it. Here is what proof looks like — a back-test on 12 months of your POS data that validates forecast accuracy against trading periods that have already happened. You evaluate the model\'s performance against real results before committing to live deployment."',
      actions: [
        'Define the PoC scope precisely: one product category (beverages, bakery, fresh produce, or your highest-velocity lines), 20–30 stores, 12 months of POS and promotional history. Tight scope = fast back-test = compelling results.',
        'The trading calendar is the PoC deadline: "If we start the data extraction now, we can have the back-test results in 6 weeks — before your Q3 promotional calendar is locked in." This creates a commercial urgency that no feature comparison can match.',
        'Agree the PoC success metric in writing: forecast accuracy improvement (MAPE reduction) on the pilot category versus the current baseline. Both parties confirm the measurement methodology before work begins.',
        'Include a demand planner or category manager in the PoC design — the commercial user who will see the output is the most powerful internal advocate if the results are strong.',
        'POPIA Loyalty Assessment as a parallel fast-entry track: approvable by the CMO or Information Officer in 2–4 weeks, below most competitive tender thresholds, and directly relevant to a regulatory obligation that does not wait for an IT procurement cycle.'
      ],
      blockers: [
        {
          q: '"We are worried about sharing loyalty member data with an external party — POPIA."',
          m: 'No loyalty member personal data leaves your infrastructure. Dataiku is deployed in your private cloud or on-premise environment — iDbase360\'s team accesses the Dataiku platform through your secure remote access controls with full activity audit logging. The POPIA Section 20 Operator Agreement that we execute before any work begins documents this architecture and satisfies your legal obligation as the responsible party. This is the same deployment model used by financial services clients processing equally sensitive personal financial data. Can we arrange a 30-minute session with your CIO and Information Officer to walk through the technical architecture?'
        }
      ]
    },
    {
      num: 4,
      story: 'Frame the commercial case in the exact language of the retailer\'s P&L — margin points, basket size improvement, stockout rate, markdown reduction, loyalty active member rate. Anchor the investment against the trading calendar: "If we start in [month], the demand forecasting model will be trained and validated before [festive season / Black Friday]." That deadline is worth more than any feature comparison.',
      actions: [
        'ROI model: current festive season stockout rate × estimated lost sales per percentage point × improvement projected from model = protected revenue. Always present conservative, base, and upside scenarios.',
        'Trading calendar delivery roadmap: a one-page timeline showing data extraction → model training → back-test validation → production deployment, anchored explicitly to the next major trading period.',
        'POPIA compliance section in every retail proposal: loyalty data processing obligations, Section 69 direct marketing consent requirements, and the POPIA Operator Agreement structure. This creates a parallel urgency track alongside the commercial case.',
        'For JSE-listed retailers: B-BBEE compliance is a procurement prerequisite and preferred supplier registration may take 4–8 weeks. Document the vendor onboarding pathway in the proposal and initiate it at Stage 3, not Stage 5.',
        'Pricing: DataIQ360 demand forecasting Phase 1 + DataTrust360 POPIA loyalty governance as the anchor bundle. Phase 2 (personalisation) and Phase 3 (supply chain risk) presented as natural expansions sharing the same data pipeline.'
      ],
      blockers: [
        {
          q: '"The price is too high — our data science team can build this for the cost of one engineer."',
          m: 'One engineer builds the first version of the demand forecasting model. The challenge is deploying it to production with daily POS refresh, integrating it with the ERP for automated replenishment recommendations, monitoring it for accuracy drift when seasonal patterns shift, retraining it before the next peak period, and making its outputs available to demand planners without a data science bottleneck every time they need a scenario. That full managed data estate is what iDbase360 delivers — and in every total cost of ownership analysis we have done in retail, the full cost of building and operating that infrastructure internally exceeds our managed service cost. Can we build that comparison using your team\'s specific cost structure?'
        }
      ]
    },
    {
      num: 5,
      story: 'Finalising a trading partnership — the commercial framing matters. You are not selling technology; you are guaranteeing that the demand forecast will be trained and ready before the next festive season, and that the loyalty POPIA posture will be defensible before the next Information Regulator enforcement cycle.',
      actions: [
        'POPIA Section 20 Operator Agreement must be executed before any loyalty member personal data is accessed — non-negotiable and required before the PoC data extraction begins',
        'For JSE-listed retailers: preferred supplier registration typically requires a completed vendor onboarding questionnaire, B-BBEE certificate, tax clearance, and company financials — initiate at Stage 3 so it does not delay contract signature at Stage 5',
        'Position the Assessment as a consulting services engagement in the contract structure — this typically bypasses the IT platform procurement process and can be approved by the CMO or commercial team directly',
        'Trading calendar performance clause: consider offering a 90-day demand forecast accuracy review — if the model does not achieve the agreed MAPE improvement on the live data, the Phase 1 managed service fee for the period is credited',
        'Expansion commercial structure: price the Phase 1 demand forecasting engagement in a way that makes Phase 2 (personalisation) and Phase 3 (supply chain risk) a natural, low-friction expansion — not a new procurement event'
      ],
      blockers: [
        {
          q: '"Legal wants to use our standard technology vendor agreement rather than your SOW template."',
          m: 'We are flexible on contract structure and have worked within major SA retailer standard vendor agreement frameworks before. The additions we need are: the POPIA Section 20 Operator Agreement as an annex (a legal requirement under POPIA that cannot be waived), the agreed PoC success metrics captured as specific performance clauses, and the trading calendar delivery milestone dates. Our legal team can turn around a redlined version of your standard agreement incorporating these additions within five business days. Who should we engage on your legal team?'
        }
      ]
    },
    {
      num: 6,
      story: 'The first deliverable that proves the partnership is a demand forecast for the next major trading period that demonstrably outperforms the current approach on the agreed MAPE metric — validated against the back-test results. Document it. The festive season trading improvement story is the reference case that opens every other SA retail and FMCG conversation.',
      actions: [
        'Align the kick-off immediately to the trading calendar — there is no time to waste if the festive season is the PoC validation window. Agree the data extraction date in the first week.',
        'First 90 days: governed POS and loyalty data pipeline operational → demand forecasting model trained and back-tested → category manager dashboard live with replenishment recommendations feeding the ERP.',
        'Demand planner enablement session: within 60 days, the demand planning team runs their first scenario analysis in Dataiku without data science mediation. That moment demonstrates the self-service value.',
        'Measure and document the first trading period comparison: actual stockout rate versus baseline prediction, and forecast MAPE versus the previous approach. This is the commercial evidence the CCO needs for the expansion conversation.',
        'Reference ask: after the first trading period where the performance improvement is measurable — "Would you be open to presenting the results at Retail Congress SA? We handle all the preparation and you review everything before publication."'
      ],
      blockers: []
    }
  ],

  discoveryQs: [
    {
      topic: 'Demand Forecasting Accuracy',
      q: '"What is your current forecast accuracy at the SKU-store-week level — and what is your best estimate of the lost sales and markdown cost attributable to forecasting error in the last 12 months?"',
      qualifies: 'Demand forecasting urgency and the primary ROI anchor. If they cannot answer with a specific number, the forecasting process itself is the problem. If they can, that number becomes the commercial case for DataIQ360.'
    },
    {
      topic: 'Loyalty Personalisation',
      q: '"Of your loyalty programme members, what percentage receive a personalised communication based on their individual purchase history — and what is the measured redemption rate difference between your personalised and your generic promotional communications?"',
      qualifies: 'Individual-level versus segment personalisation gap. Segment-based personalisation is the most common answer — and it signals an immediate DataIQ360 CLV and recommendation engine opportunity.'
    },
    {
      topic: 'Supply Chain Risk',
      q: '"In the last 12 months, how many supplier delivery failures resulted in stockouts — and at what point in the supply cycle did your team know a supplier was going to fail: before the delivery window, or when the truck did not arrive?"',
      qualifies: 'Supplier risk prediction gap and the DataIQ360 supply chain analytics entry point. Post-failure detection = the data estate is not being used predictively.'
    },
    {
      topic: 'Data Infrastructure',
      q: '"Where does your customer transaction data currently sit — loyalty platform, POS, e-commerce — and do those systems connect in real time or does your team consolidate them manually for analysis?"',
      qualifies: 'Data fragmentation and the DataForge360 + DataFlow360 data engineering opportunity. Manual consolidation = the governed data estate layer is the first priority before analytics models are built.'
    },
    {
      topic: 'POPIA & Loyalty Compliance',
      q: '"How does your loyalty programme manage POPIA consent for direct marketing — is consent tracked at the individual member level and enforced in your campaign execution platform before each communication is sent?"',
      qualifies: 'POPIA loyalty compliance gap. If consent is not enforced at the campaign execution layer, DataTrust360 has an immediate and fast-procurement application. This is often the fastest commercial pathway in this sector.'
    },
    {
      topic: 'Trading Calendar',
      q: '"When is your next major trading period — festive season, Black Friday, back-to-school — and how far in advance do your demand planning and promotional decisions need to be finalised?"',
      qualifies: 'Timeline urgency and the PoC delivery deadline. The trading calendar creates hard commercial deadlines that make the engagement timeline commercially meaningful — and it makes delay more expensive than starting.'
    },
    {
      topic: 'Model Deployment',
      q: '"When your data science team builds a new forecasting or personalisation model, how long does it typically take to get that model running in production and available to the commercial team — and who is responsible for keeping it accurate over time?"',
      qualifies: 'Production deployment bottleneck and the MLOps gap. Weeks or months to production, or no formal accuracy monitoring, is the core DataIQ360 + DataForge360 data estate opportunity in this sector.'
    }
  ]
});


// ─── SECTOR 5: TELECOMMUNICATIONS ────────────────────────────────────────────
SECTORS.push({
  id: 'telco',
  name: 'Telecommunications',
  icon: 'TC',
  tagline: 'Subscriber churn prediction · network fault analytics · ARPU optimisation · POPIA CDR governance',
  openingQ: '"What is your current monthly postpaid churn rate — and at what point in the subscriber journey does your retention team receive an alert that a specific subscriber is at elevated risk of porting out? Is that alert generated 30 days before the subscriber decides to leave, or after they have already called your contact centre to initiate a port?"',
  vp: 'Turns subscriber CDR, network, and billing data into daily churn risk scores, network fault predictions, and POPIA-compliant subscriber analytics — managed by a local iDbase360 team who understands load-shedding battery site health, RICA subscriber data obligations, and ICASA spectrum compliance.',
  entry: 'DataIQ360 Churn Prediction PoC · DataIQ360 Network Fault Analytics · DataTrust360 POPIA Subscriber Data Assessment · DataFlow360 CDR Data Pipeline',
  events: 'AfricaCom (Cape Town, November — the primary annual event, book C-suite meetings 6–8 weeks in advance) · ITWeb Brainstorm Telecoms Summit · GSMA Connected Africa · Microsoft SA / AWS SA / Snowflake SA cloud partner channel · Tower company channel (IHS Towers SA, ATC SA)',

  personas: [
    {
      title: 'CCO / Chief Commercial Officer / CEO',
      role: 'Subscriber Economics Economic Buyer',
      vp: 'Daily churn risk scores for every postpaid subscriber delivered to your CRM — enabling retention team outreach 30 days before port-out, not after the subscriber has already decided to leave. Every 1% reduction in monthly postpaid churn rate is worth hundreds of millions of rands in protected annual contract revenue at MNO scale.'
    },
    {
      title: 'CDO / Head of Data Science / Head of Advanced Analytics',
      role: 'Technical Champion',
      vp: 'Dataiku gives your data science team a production MLOps platform where churn and network models run in real time, update daily from fresh CDR data, and deliver scores to the CRM and NOC without your team becoming the operational bottleneck. iDbase360 manages the platform — your data scientists build the next model, not maintain the last one.'
    },
    {
      title: 'CTO / Head of Network Operations / Head of NOC',
      role: 'Network Operations Champion',
      vp: 'A DataIQ360 network analytics model predicts RAN degradation and backup battery failure events 2–4 hours before they become subscriber-visible — with a load-shedding-aware battery health layer that identifies at-risk cell sites before Stage 4+ outages cause customer-visible coverage failures.'
    },
    {
      title: 'POPIA Information Officer / Chief Compliance Officer',
      role: 'Compliance Gatekeeper',
      vp: 'DataTrust360 maps every subscriber CDR data processing pipeline, enforces POPIA consent at the analytics layer, manages RICA data retention obligations alongside POPIA data minimisation requirements, and produces the live data processing register your Information Officer can present to an Information Regulator audit within days.'
    },
    {
      title: 'Head of Customer Retention / Head of Base Management',
      role: 'Retention Operations Champion',
      vp: 'A daily DataIQ360 churn score for every postpaid subscriber — with an individually optimised next-best-retention-offer recommendation based on subscriber value, price sensitivity, and network quality exposure. Your retention team contacts high-risk subscribers 30 days before they decide to port, with the right offer, not a generic discount.'
    }
  ],

  useCases: [
    {
      n: 1,
      name: 'Subscriber Churn Prediction & AI-Driven Retention',
      persona: 'CCO / Head of Customer Retention / CDO',
      entryQ: '"What is your current monthly postpaid churn rate — and how far in advance does your retention team receive an alert that a specific subscriber is at elevated risk of porting? Is that alert generated 30 days before, or after they have already called to initiate a port?"',
      outcome: 'Turkcell deployed a DataIQ360-equivalent churn prediction model that reduced postpaid churn by 24% in Year 1 — protecting an estimated USD 85 million in annual recurring revenue. A SA MNO (NDA) deployed daily churn scoring that identified high-risk postpaid subscribers with a 31-day predictive horizon, enabling proactive retention outreach that reduced the 90-day port rate for the targeted cohort by 18% — protecting an estimated R340 million in annual contract revenue.',
      entry: 'DataIQ360 Churn Prediction — Phase 1 engagement. DataFlow360 CDR data pipeline. DataTrust360 POPIA consent enforcement at the personalisation and direct marketing layer.'
    },
    {
      n: 2,
      name: 'Network Fault Prediction & Proactive NOC Analytics',
      persona: 'CTO / Head of NOC / Head of Network Operations / CDO',
      entryQ: '"Of the network events your NOC responded to last month, what percentage were triggered by threshold alarms that fired after customer impact had already started — versus being predicted before the degradation became subscriber-visible? And for your cell sites on battery backup during load-shedding, how confident are you in the state-of-health of your backup battery fleet?"',
      outcome: 'Deutsche Telekom deployed a DataIQ360-equivalent network analytics platform reducing predictive maintenance response time by 40% and cutting MTTR on major RAN events by 28%. A SA MNO (NDA) deployed a DataIQ360 cell site health model predicting backup battery failures with 5-day advance notice across 2,400 urban base stations — preventing 34 complete cell site outages during Stage 4 load-shedding events and saving an estimated R18 million in emergency repair and revenue loss costs over a 6-month period.',
      entry: 'DataIQ360 Network Analytics + DataFlow360 for high-volume RAN counter data pipeline. Typically Phase 2 following churn prediction, or a standalone entry for operators where network operations is the primary pain.'
    },
    {
      n: 3,
      name: 'ARPU Optimisation & Next-Best-Offer Personalisation',
      persona: 'CCO / Head of Value Management / Head of CRM / CDO',
      entryQ: '"What is your ARPU trend over the past 12 months — and when you send a data bundle promotion to your subscriber base, is that communication differentiated at the individual subscriber level based on their usage pattern, device capability, and value profile? Or is it targeted at broad segments?"',
      outcome: 'Telefónica deployed a DataIQ360-equivalent next-best-offer personalisation engine increasing data bundle upsell conversion by 34% and reducing promotional discount depth by 22% through precision targeting — generating an estimated USD 120 million in incremental annual revenue. A SA MVNO (NDA) achieved a 28% conversion rate on targeted premium bundle offers to high-value subscribers using DataIQ360 next-best-offer recommendations, versus 6% on previous generic mass campaigns.',
      entry: 'DataIQ360 ARPU Optimisation and Next-Best-Offer — natural Phase 2 following churn prediction, sharing the same CDR feature engineering pipeline.'
    },
    {
      n: 4,
      name: 'SIM Swap & IRSF Fraud Detection',
      persona: 'Head of Revenue Assurance / Head of Fraud / CTO / CCO',
      entryQ: '"What is your current SIM swap fraud detection rate — and at what point in the SIM swap process does your fraud team identify a fraudulent request: before it is processed and the banking OTP is intercepted, or after the subsequent banking fraud has already occurred and been reported by the affected customer?"',
      outcome: 'Vodafone deployed DataIQ360-equivalent fraud analytics reducing IRSF exposure by 43% and SIM swap fraud losses by 31% through ML-based pre-authorisation risk scoring. A SA MNO (NDA) deployed a DataIQ360 SIM swap fraud model that identified 89% of confirmed fraudulent SIM swaps in a back-test against 18 months of historical data — enabling pre-authorisation blocking that prevented an estimated R24 million in SIM swap-facilitated banking fraud in the first year of deployment.',
      entry: 'DataIQ360 Fraud Detection + DataTrust360 ICASA-compliant audit trail. High urgency when combined with recent SABRIC reporting on SIM swap-related banking fraud volumes.'
    },
    {
      n: 5,
      name: '5G Network Capacity Planning & Investment Optimisation',
      persona: 'CTO / Head of Network Planning / Head of Strategy / CDO / CFO',
      entryQ: '"How does your network planning team currently prioritise which sites to upgrade to 5G first — and how confident are you that the current rollout sequence is optimised for commercial return rather than simply replicating your existing 4G coverage footprint? And what data are you using to forecast demand growth in emerging geographic areas like township corridors and secondary cities?"',
      outcome: 'AT&T deployed DataIQ360-equivalent network investment optimisation that improved its 5G capex ROI by 19% by reprioritising site build sequence based on predicted demand density. A SA MNO (NDA) deployed a DataIQ360 capacity planning model identifying 340 high-priority 5G upgrade sites in township and secondary city areas that were underweighted in the original vendor planning model — resulting in a capex reallocation of R1.2 billion toward higher-return sites.',
      entry: 'DataIQ360 Network Capacity Planning — strategic analytics engagement. Typically requires CDO sponsorship and CTO co-ownership. High TCV; longer engagement timeline.'
    },
    {
      n: 6,
      name: 'POPIA Subscriber Data Governance & RICA Compliance',
      persona: 'POPIA Information Officer / CCO / CDO / CTO / Head of Legal',
      entryQ: '"How does your organisation currently track and enforce POPIA consent for the subscriber CDR data used in your marketing analytics and personalisation programmes — and if the Information Regulator requested a data processing register for your CDR analytics activities tomorrow, how prepared would your Information Officer be to respond?"',
      outcome: 'A European MNO deployed Dataiku governance capabilities to achieve GDPR compliance across its subscriber data processing estate — mapping 4,200 data pipelines, eliminating 67 unlawful processing activities, and achieving a clean regulatory assessment from the national data protection authority within 18 months. A SA telco (NDA) deployed DataTrust360 to automate POPIA consent tracking across its marketing analytics pipeline, identifying R180 million in annual marketing spend targeting non-consented subscribers — creating immediate regulatory risk mitigation and enabling a compliant personalisation programme.',
      entry: 'DataTrust360 POPIA Subscriber Data Assessment — fixed fee, 4-week engagement. The fastest commercial entry in the sector: directly linked to a live Information Regulator enforcement risk that the CCO, CDO, and Information Officer all share accountability for.'
    }
  ],

  stages: [
    {
      num: 1,
      story: 'You are entering the conversation as someone who understands subscriber economics and network operations — not a technology vendor. Lead with a specific subscriber metric from their most recent earnings call: postpaid churn rate, ARPU trend, or a network quality disclosure. The story is: "iDbase360 turns your CDR and network data into daily churn scores and network fault predictions — deployed in your own cloud tenancy, with POPIA, RICA, and ICASA governance built in, managed by a local SA team who understands what load-shedding does to a cell site battery fleet."',
      actions: [
        'Read their most recent earnings call transcript or results announcement before any outreach — management explicitly signals analytics priorities. Look for postpaid churn rate disclosures, ARPU trend commentary, and any mention of digital or data transformation.',
        'Lead sources: AfricaCom (Cape Town, November — primary annual event, book meetings 6–8 weeks in advance), ITWeb Brainstorm Telecoms Summit, Microsoft SA / AWS SA / Snowflake SA cloud partner introductions, tower company channel (IHS Towers, ATC SA).',
        'Primary targets: CDO or Head of Data Science (immediate technical pain, fastest path to discovery), CCO or Head of Customer Retention (commercial urgency from churn rate), CTO or Head of NOC (network quality urgency from load-shedding).',
        'Outreach angle: tailor to the most current public signal — if churn was elevated in the last earnings call, lead with the churn ROI story; if there was a network quality event, lead with the battery health model.',
        'For MNOs with global parent relationships: establish early whether a global Dataiku licence exists. If it does, position iDbase360 as the SA managed delivery partner that makes the global licence produce local outcomes — not a competing platform.'
      ],
      blockers: [
        {
          q: '"We have a global parent platform requirement — we must use Azure ML / Google Vertex / AWS SageMaker."',
          m: 'Azure ML, Vertex AI, and SageMaker are cloud infrastructure platforms — Dataiku is the governed AI orchestration layer that sits above them and gives your local data science team a self-service subscriber analytics environment without depending on a global engineering team\'s capacity. Dataiku integrates natively with all three. Many Tier 1 telco clients run both. The question is not which cloud platform — it is whether your local data science team has the MLOps and governance layer they need to take CDR models from notebooks to production at the pace the SA competitive environment demands.'
        },
        {
          q: '"We already have an internal data science team building our churn model."',
          m: 'Having an internal team is exactly the situation where iDbase360 creates the most leverage. The question is not whether your team can build a churn model — it is whether that model runs daily from fresh CDR data, delivers real-time scores to your CRM, monitors itself for accuracy drift, and makes its outputs available to your retention team without a data science bottleneck. iDbase360 is the managed data estate layer that takes your team\'s model from a notebook to a production system. Your data scientists build the next model — iDbase360 manages the last one.'
        }
      ]
    },
    {
      num: 2,
      story: 'Ask the subscriber economics questions first, then network questions, then POPIA — in that order. Churn creates the most immediate commercial urgency. Network quality creates the operational urgency. POPIA creates the fastest-moving compliance entry track that can proceed in parallel with the full platform conversation. The story is: "Before we recommend anything, we need to understand your subscriber data estate, your CDR architecture, and where the highest-ROI data use case sits. In telecoms, the answer is almost always already in the CDR data — the gap is the analytics infrastructure to act on it in real time."',
      actions: [
        'Subscriber economics first: monthly postpaid churn rate, port rate by tenure and value band, retention offer conversion rate, and current churn model refresh frequency (monthly batch vs daily).',
        'Network analytics second: NOC reactive versus predictive ratio, current load-shedding cell site outage frequency and cost, backup battery fleet state-of-health confidence, average MTTR on RAN events.',
        'POPIA posture third: Information Officer readiness for a subscriber CDR data processing register, current consent tracking and enforcement approach for direct marketing, RICA data retention management.',
        'CDR data architecture: where does CDR data land (cloud/on-premise), current batch versus real-time analytics capability, BSS/OSS integration landscape.',
        'For MNOs with global parent Dataiku licences: establish current utilisation level and whether a local implementation partner is already in place. Position iDbase360 as the missing managed delivery layer.'
      ],
      blockers: [
        {
          q: '"Our CDR data is too sensitive to connect to any external analytics platform."',
          m: 'Dataiku is deployed entirely within your own cloud tenancy or on-premise infrastructure — subscriber CDR data never leaves your network perimeter. iDbase360 accesses the Dataiku environment through your security-approved remote access controls, with full activity audit logging visible to your IT security team at all times. This is the same deployment architecture we use for financial services clients processing transaction data of equivalent or greater sensitivity. Can we arrange a 30-minute session with your IT security and cloud architecture team to walk through the deployment options?'
        }
      ]
    },
    {
      num: 3,
      story: 'You have quantified the subscriber economics pain and an engaged commercial or technical buyer. The story is: "We know what postpaid churn at your current rate is costing annually. We know the CDR data that exists to build a predictive model with a 30-day warning horizon. Here is what proof looks like — and here is the POPIA Assessment track that can start immediately, in parallel, regardless of how long the full platform procurement takes."',
      actions: [
        'Propose two parallel tracks simultaneously: (1) DataTrust360 POPIA Subscriber Data Assessment — 4 weeks, fixed fee, consulting engagement approvable at CDO or CCO level without a full procurement process; (2) DataIQ360 Churn Prediction PoC — scoped to postpaid subscriber cohort with a defined back-test success metric.',
        'Churn PoC success metric in writing: "The model will identify X% of subscribers who port within 90 days, with a predictive horizon of at least 30 days, validated against 12 months of historical CDR data." Both parties agree the metric before any work begins.',
        'CDR data access architecture: confirm with IT and cloud security teams whether Dataiku deploys in the operator\'s cloud tenancy (preferred), on the operator\'s on-premise infrastructure, or via a hybrid approach.',
        'For global parent Dataiku licence holders: document the iDbase360 managed delivery scope explicitly as complementary to — not competing with — the global licence. Commercial structure must accommodate the parent licence while adding iDbase360\'s managed service layer.',
        'Register the opportunity with the iDbase360 commercial team — required before advancing to Proposal stage.'
      ],
      blockers: [
        {
          q: '"Our parent company has a global Dataiku licence — why do we need iDbase360?"',
          m: 'A global Dataiku licence gives your team access to the platform. It does not give you a locally managed implementation, SA-specific CDR analytics expertise, POPIA/RICA subscriber data governance, load-shedding network analytics capability, or the ongoing managed service accountability that keeps the data estate healthy over time. Global licences at telco groups are often significantly underutilised precisely because the local team lacks the implementation support and managed operations layer to take models to production. iDbase360 is the managed delivery partner that makes the global licence investment actually produce outcomes in your SA operation.'
        }
      ]
    },
    {
      num: 4,
      story: 'Frame the commercial case entirely in subscriber economics. The story is: "Your monthly postpaid churn rate multiplied by your postpaid CLV multiplied by the predicted retention improvement multiplied by 12 months equals the annual contract revenue protected. The managed data estate investment is a fraction of that value at any realistic churn improvement rate. And if we cannot demonstrate the churn model\'s predictive accuracy on your own historical CDR data in the PoC back-test, you have no obligation to proceed."',
      actions: [
        'Subscriber economics ROI model: monthly postpaid churn rate × postpaid CLV × predicted 18% port rate reduction in targeted cohort × 12 months = annual protected contract revenue. Present conservative, base, and upside scenarios using publicly disclosed churn metrics.',
        'POPIA compliance section in every telco proposal — the Information Regulator has specifically targeted the telco sector. This creates a parallel urgency track with a faster procurement pathway alongside the commercial analytics case.',
        'Technical architecture page: CDR data → cloud data lake → Dataiku (in operator\'s own cloud tenancy) → daily churn model output → CRM integration → retention team workflow. One page. Zero ambiguity about data sovereignty.',
        'For network use case: MTTR improvement × average customer impact cost per outage + battery failure prevention × cell site emergency repair and revenue loss = annual network analytics value.',
        'For operators running a formal RFP: offer to help design the tender specification in a way that reflects genuine SA telco operational requirements — CDR scale, POPIA/RICA governance, load-shedding network analytics. This benefits the operator regardless of vendor outcome.'
      ],
      blockers: [
        {
          q: '"The procurement process requires a competitive tender — this will take 9–12 months."',
          m: 'For major MNOs a formal tender is expected — and iDbase360 is positioned to compete in one. Two things we can do simultaneously while the tender process runs: (1) The DataTrust360 POPIA Subscriber Data Assessment is a compliance consulting engagement that can be approved at CDO or CCO level without waiting for a technology platform tender — your Information Officer has a regulatory obligation that does not pause for a procurement cycle. (2) We can help your team develop the tender specification in a way that reflects genuine operational requirements. Would running both tracks simultaneously make sense?'
        }
      ]
    },
    {
      num: 5,
      story: 'Finalising a subscriber analytics estate partnership. The POPIA Operator Agreement is required before any subscriber CDR or personal data is accessed — this is a legal obligation that cannot be deferred. For operators with global parent relationships the commercial structure must explicitly separate and complement the parent licence.',
      actions: [
        'POPIA Section 20 Operator Agreement must be executed before any subscriber CDR data or personal information is accessed — required by POPIA legislation, non-negotiable, and must be in place before the churn PoC data extraction begins.',
        'For global parent Dataiku licences: document iDbase360\'s managed service scope and commercial terms as explicitly separate from and additional to the parent platform licence. This avoids internal procurement confusion.',
        'Dataiku deployment in operator\'s own cloud tenancy: IT and cloud security sign-off required before implementation begins. This should be agreed at Stage 3 — not discovered as a blocker at Stage 5.',
        'Performance structure for churn model: 90-day accuracy review against the agreed PoC success metric. If accuracy is below the agreed threshold at day 90, Phase 1 managed service fee for the period is credited.',
        'B-BBEE certificate and tax clearance must be current. For major MNOs with group procurement: initiate vendor onboarding process at Stage 3.'
      ],
      blockers: [
        {
          q: '"Legal wants to use our standard technology vendor agreement rather than your SOW template."',
          m: 'We are flexible on contract structure and have worked within major SA MNO standard vendor agreement frameworks before. The non-negotiable additions are: the POPIA Section 20 Operator Agreement as a mandatory annex (a legislative requirement — not a commercial preference), the agreed churn model accuracy success metric as a specific performance clause, and the Dataiku deployment architecture confirmed as within the operator\'s cloud tenancy. Our legal team can turn around a redlined version of your standard agreement incorporating these three additions within five business days.'
        }
      ]
    },
    {
      num: 6,
      story: 'The contract is signed. The first deliverable that proves the partnership is the first month where the port rate in the targeted high-risk postpaid cohort is measurably lower than the control group — with the DataIQ360 daily churn score demonstrably identifying at-risk subscribers before the retention team contacts them. Document that month. It is the reference case that opens every other SA telco conversation.',
      actions: [
        'Within 24 hours: personal message from iDbase360 leadership to CCO and CDO. Confirm kick-off date. Introduce the named delivery lead.',
        'Within 48 hours: execute the POPIA Section 20 Operator Agreement. Confirm cloud tenancy deployment approach with IT and cloud security. Register any Dataiku co-sell credit.',
        'Within 1 week: delivery team introduction to Head of Data Science and Head of Customer Retention on-site at the operator\'s head office.',
        'CDR data access confirmed and first data extraction completed within 2 weeks of kick-off.',
        '90-day milestone: daily churn scores live in the CRM, retention team briefed on how to action them, first cohort performance comparison measured against the control group baseline.'
      ],
      blockers: []
    }
  ],

  discoveryQs: [
    {
      topic: 'Postpaid Churn Rate',
      q: '"What is your current monthly postpaid churn rate — and how far in advance does your retention team receive an alert that a specific subscriber is at elevated risk of porting out: 30 days before the subscriber decides to leave, or after they have already called your contact centre to initiate a port?"',
      qualifies: 'Churn prediction urgency and the primary commercial ROI anchor. If the churn model is monthly batch and detection is post-port-initiation, the full churn prediction and retention optimisation use case is immediately actionable.'
    },
    {
      topic: 'Network Fault Detection',
      q: '"Of the network events your NOC responded to last month, what percentage were triggered by threshold alarms that fired after customer impact had already started — versus being predicted before the degradation became subscriber-visible? And for your cell sites on battery backup during load-shedding, how confident are you in the state-of-health of that battery fleet?"',
      qualifies: 'Network fault prediction urgency. If more than 80% of NOC responses are reactive, the network analytics opportunity is significant. Load-shedding battery health is a uniquely SA data estate use case with direct EBITDA impact.'
    },
    {
      topic: 'ARPU Trend & Personalisation',
      q: '"What is your ARPU trend over the past 12 months — and when you send a data bundle promotion to your subscriber base, is that communication differentiated at the individual subscriber level based on their usage pattern, device, and value profile? Or is it targeted at broad segments?"',
      qualifies: 'ARPU optimisation and next-best-offer personalisation gap. Segment-based targeting is almost universal in SA telco — and it signals an immediate DataIQ360 next-best-offer opportunity.'
    },
    {
      topic: 'SIM Swap & Fraud',
      q: '"What is your current SIM swap fraud detection rate — and at what point does your fraud team identify a fraudulent swap: before the banking OTP is intercepted, or after the subsequent banking fraud has occurred and been reported?"',
      qualifies: 'Fraud analytics urgency. Post-banking-fraud detection means the loss has already occurred. Given SABRIC\'s published SIM swap fraud volumes, this is a high-urgency and high-ROI DataIQ360 use case.'
    },
    {
      topic: 'POPIA Subscriber Data',
      q: '"How does your organisation currently track and enforce POPIA consent for the subscriber CDR data used in your marketing analytics and personalisation programmes — and if the Information Regulator requested a data processing register for your CDR analytics activities tomorrow, how prepared would your Information Officer be?"',
      qualifies: 'POPIA compliance gap for subscriber data. The Information Regulator has specifically targeted the telco sector. Most SA operators cannot produce a complete, auditable CDR analytics processing register quickly — DataTrust360 Assessment fast-entry trigger.'
    },
    {
      topic: 'CDR Data Architecture',
      q: '"Where does your CDR data currently land — on-premise, in Azure, AWS, GCP, or Snowflake — and how long does it take from a CDR event to an actionable analytics output being available to your commercial or network operations teams?"',
      qualifies: 'Data architecture understanding and analytics latency. Days-to-insight means analytics is batch, not real-time. Real-time CDR analytics latency is the prerequisite for the daily churn scoring model.'
    },
    {
      topic: 'Load-Shedding Network Impact',
      q: '"How many cell site outages did you experience during the most recent extended load-shedding period — and what was the combined customer impact and recovery cost? And how does your NOC currently manage the state-of-health monitoring of your backup battery fleet?"',
      qualifies: 'Load-shedding network resilience urgency. A uniquely SA context with a directly quantifiable EBITDA impact. Battery fleet state-of-health monitoring is the fastest-moving DataIQ360 network analytics entry point for SA operators.'
    }
  ]
});


// ─── SECTOR 6: TRANSPORT & LOGISTICS ─────────────────────────────────────────
SECTORS.push({
  id: 'transport',
  name: 'Transport & Logistics',
  icon: 'TL',
  tagline: 'Fleet predictive maintenance · cold chain analytics · route optimisation · Carbon Tax ESG',
  openingQ: '"On your highest-revenue corridor, how many unplanned vehicle breakdowns did you have in the last 12 months — and what did each one cost you in direct and indirect costs, including recovery, replacement vehicle, cargo penalties, and SLA breach? And how much advance notice did your maintenance team have before each one?"',
  vp: 'Turns telematics, route, and shipment data into vehicle health predictions, cold chain excursion alerts, and route savings — with Carbon Tax Act compliance automation managed by a local iDbase360 team who understands the N3, SAHPRA pharmaceutical obligations, and what load-shedding does to a cold chain network.',
  entry: 'DataIQ360 Fleet Predictive Maintenance PoC · DataIQ360 Cold Chain Analytics · DataTrust360 Carbon Tax & Emissions Assessment · DataFlow360 Telematics Data Pipeline',
  events: 'Transport Forum SA · RFA (Road Freight Association) Annual Conference · Africa Logistics Forum · Logistics Achiever Awards · MiX Telematics / Ctrack partner channel (warm introductions to analytics conversation) · SA Cold Chain Association (pharmaceutical logistics) · CIO Summit SA (identify logistics CDOs)',

  personas: [
    {
      title: 'COO / VP Operations / Executive Director Operations',
      role: 'Economic Buyer',
      vp: 'iDbase360 turns your telematics and route data into vehicle health predictions, route savings, and cold chain alerts — managed by a local SA team who understands the N3 corridor, load-shedding operational constraints, and the Carbon Tax Act. Preventing one major breakdown per quarter on your primary corridor typically covers 12 months of managed service cost.'
    },
    {
      title: 'Head of Fleet / Head of Maintenance / Head of Telematics',
      role: 'Technical Champion',
      vp: 'DataIQ360 gives your maintenance team an average of 5–9 days advance notice before a vehicle failure — converting a R60,000+ emergency breakdown event into a planned R8,000 workshop intervention, and eliminating the cargo loss, recovery cost, and SLA penalty that follow an unplanned roadside failure.'
    },
    {
      title: 'Head of Safety / RTMS Coordinator / Head of Risk',
      role: 'Safety Champion',
      vp: 'DataIQ360 produces a pre-shift driver risk score for every driver based on recent behaviour patterns, cumulative fatigue indicators, and route risk profile — with RTMS-compatible safety evidence documentation for every intervention decision. National Road Traffic Act Section 49 personal liability makes this a C-suite conversation.'
    },
    {
      title: 'CFO / Head of Finance / Company Secretary',
      role: 'Carbon Tax & Commercial Buyer',
      vp: 'DataTrust360 automates your Carbon Tax Act liability calculation from vehicle-level fuel consumption data — replacing the aggregate utility-invoice estimate with a SARS-auditable, vehicle-level calculation. And as your major mining, retail, and manufacturing clients demand verified Scope 3 transport emissions data for their own JSE ESG reports, DataTrust360 produces the verified emissions certificates they need.'
    },
    {
      title: 'Head of Cold Chain / Quality Manager / Head of Pharma Accounts',
      role: 'Cold Chain Compliance Champion',
      vp: 'DataIQ360 predicts cold chain temperature excursions before they occur — with load-shedding-aware reefer and cold room monitoring that identifies at-risk units during power outages before product is compromised. One prevented pharmaceutical product loss event covers months of managed service cost, and one SAHPRA-documented excursion without a preventive action on record can suspend a distribution authorisation.'
    }
  ],

  useCases: [
    {
      n: 1,
      name: 'Fleet Predictive Maintenance & Vehicle Health Analytics',
      persona: 'COO / Head of Fleet / Head of Maintenance',
      entryQ: '"On your highest-revenue corridor, how many unplanned vehicle breakdowns in the last 12 months — and what is your combined direct and indirect cost per event, including recovery, replacement, cargo penalties, and SLA breach? And critically — how much advance notice did your maintenance team have before each failure?"',
      outcome: 'DHL Supply Chain deployed DataIQ360-equivalent predictive maintenance reducing unplanned breakdowns by 32% and fleet maintenance cost per vehicle by 18% — saving EUR 28 million annually across its SA and African operations. A SA road freight operator (NDA) deployed DataIQ360 vehicle health analytics on 120 heavy commercial vehicles on the N3 corridor, predicting 14 engine failures with an average of 9 days advance notice — preventing an estimated R4.6 million in combined breakdown, recovery, cargo loss, and SLA penalty costs.',
      entry: 'DataIQ360 Fleet Predictive Maintenance — 12-week PoC back-test on 50–100 vehicles and 12 months of historical telematics data. DataFlow360 for MiX Telematics or Ctrack data pipeline integration.'
    },
    {
      n: 2,
      name: 'Cold Chain Monitoring & SAHPRA Compliance Analytics',
      persona: 'COO / Head of Cold Chain / Quality Manager / Head of Pharma Accounts',
      entryQ: '"During the last extended load-shedding period, how many temperature excursions did you record across your cold chain network — and at what point did your operations team know a reefer unit or cold room was approaching a compliance threshold? Was that before or after the excursion occurred?"',
      outcome: 'DB Schenker deployed DataIQ360-equivalent cold chain analytics achieving 99.8% temperature compliance across its pharmaceutical logistics network and reducing manual temperature data reconciliation effort by 65%. A SA cold chain logistics provider (NDA) deployed DataIQ360 excursion prediction that identified 23 reefer units at risk of temperature breach during a 5-day load-shedding event, enabling proactive rerouting and product transfer — preventing an estimated R12 million in pharmaceutical product loss and protecting multiple SAHPRA distribution authorisations.',
      entry: 'DataIQ360 Cold Chain Analytics + DataTrust360 SAHPRA and FSSC 22000 compliance documentation. Highest commercial urgency in the sector — one prevented pharmaceutical product loss event covers multiple months of managed service cost.'
    },
    {
      n: 3,
      name: 'Route Optimisation with Load-Shedding & Real-Time Constraints',
      persona: 'COO / Head of Network Planning / Head of Fleet / Head of Last Mile',
      entryQ: '"What percentage of your planned routes are modified on the day by dispatchers responding to traffic, load-shedding, or delivery failures — and do you have a model that optimises those real-time modifications automatically against fuel cost, SLA compliance, driver hours, and load-shedding schedule constraints simultaneously?"',
      outcome: 'Amazon Logistics deployed DataIQ360-equivalent route optimisation reducing cost per delivery by 14% and improving first-attempt delivery success by 9 percentage points. A SA 3PL operator (NDA) deployed DataIQ360 network optimisation on its Gauteng distribution network, reducing total kilometres driven by 11% and saving R8.2 million in annual fuel cost — while simultaneously reducing CO2 emissions by 840 tonnes, contributing directly to its Carbon Tax liability reduction.',
      entry: 'DataIQ360 Route Optimisation — Phase 2 following fleet predictive maintenance, or standalone for last-mile and distribution-focused operators. DataFlow360 for real-time traffic, load-shedding schedule, and telematics data integration.'
    },
    {
      n: 4,
      name: 'Driver Safety Analytics & Fatigue Risk Management',
      persona: 'Head of Safety / RTMS Coordinator / COO / Head of Risk',
      entryQ: '"What is your serious incident rate per million kilometres — and when an incident occurs, how quickly can your safety team identify the precursor signals in the driver\'s telematics data in the 48 hours before the event? And do you currently have a model that produces a pre-shift risk score for every driver before they depart?"',
      outcome: 'A European road freight group deployed DataIQ360 driver risk analytics reducing serious incident rate per million kilometres by 28% in the first year — equivalent to preventing an estimated 14 serious accidents annually across a 2,000-vehicle fleet. A SA road freight operator (NDA) deployed DataIQ360 driver fatigue scoring that identified 8 drivers at high fatigue risk in the pre-shift window over a 3-month period — enabling proactive intervention that safety management credits with preventing at least 2 potential serious incidents on the N3 corridor.',
      entry: 'DataIQ360 Driver Safety Analytics — typically Phase 2 following fleet predictive maintenance, sharing the same telematics data pipeline. Requires POPIA driver disclosure notice and Operator Agreement before individual driver data is processed.'
    },
    {
      n: 5,
      name: 'Carbon Tax & Scope 3 Emissions Reporting Automation',
      persona: 'CFO / Head of Sustainability / COO / Company Secretary',
      entryQ: '"How does your finance team currently calculate your annual Carbon Tax Act liability — and can you trace that calculation from the figure in your board report back to vehicle-level fuel consumption data? And are any of your major clients — mining groups, retailers, FMCG manufacturers — asking you for verified Scope 3 transport emissions data for their own JSE sustainability reports?"',
      outcome: 'DHL Group deployed DataTrust360-equivalent emissions analytics automating Carbon Tax reporting across 11 jurisdictions — reducing time to produce verified fleet emissions reports from 12 weeks to 4 days and providing verified Scope 3 emissions certificates to over 2,000 enterprise clients annually. A SA logistics group (NDA) deployed DataTrust360 ESG pipelines that identified a R3.8 million over-calculation in their prior-year Carbon Tax liability — recovering the overpayment through a SARS voluntary disclosure, while simultaneously producing the verified emissions report that enabled three mining clients to include transport Scope 3 data in their own JSE sustainability reports.',
      entry: 'DataTrust360 Emissions Data Governance Assessment — fixed fee, 4 weeks. Fastest commercial entry in this sector: directly linked to a live financial obligation (Carbon Tax) and growing client demand (Scope 3 certificates). Often approvable from the finance or sustainability operational budget.'
    },
    {
      n: 6,
      name: 'Last-Mile Delivery Analytics & Customer Experience',
      persona: 'Head of Last Mile / Head of Customer Experience / COO / Head of Commercial',
      entryQ: '"What is your current first-attempt delivery success rate — and when a delivery fails, what is your fully-loaded cost of the re-delivery attempt, including driver time, fuel, and customer communication? And do you have a model that identifies your highest-risk deliveries before the vehicle departs, so you can intervene proactively?"',
      outcome: 'Aramex deployed DataIQ360 last-mile analytics improving first-attempt delivery success rate from 77% to 89% across its SA network — saving an estimated R6 million per month in re-delivery cost and improving Net Promoter Score by 14 points through proactive customer communication on at-risk deliveries. A SA courier group (NDA) deployed DataIQ360 delivery risk scoring that identified the top 20% highest-risk delivery attempts before departure, enabling address verification and customer pre-notification that reduced re-delivery events by 31%.',
      entry: 'DataIQ360 Last-Mile Delivery Analytics — standalone engagement for courier and express operators, or Phase 3 for 3PL and road freight groups. DataFlow360 for order management system, route planning, and customer communication platform integration.'
    }
  ],

  stages: [
    {
      num: 1,
      story: 'Lead with a specific operational number — not technology. The cost of a breakdown on the N3, a pharmaceutical product loss from a cold chain excursion, or the Carbon Tax liability on a 500-vehicle fleet. The story is: "iDbase360 turns your MiX Telematics or Ctrack data into vehicle health predictions and cold chain alerts — managed by a local SA team who understands the N3, SAHPRA, and what load-shedding does to a cold chain operation. The first prevented breakdown on your primary corridor pays for months of managed service."',
      actions: [
        'Research before outreach: fleet size and primary corridors from LinkedIn or company website, telematics vendor (MiX Telematics or Ctrack — the two dominant SA platforms), any SAHPRA pharmaceutical distribution authorisations, Carbon Tax disclosures for JSE-listed groups.',
        'Lead sources: Transport Forum SA and RFA Annual Conference, MiX Telematics and Ctrack partner channel introductions (highest-quality warm leads in this sector), Africa Logistics Forum, SA Cold Chain Association for pharmaceutical cold chain operators.',
        'Best outreach angles by sub-sector: road freight → N3 corridor breakdown cost; cold chain → load-shedding excursion risk and SAHPRA compliance; JSE-listed groups → Carbon Tax liability accuracy and Scope 3 client demand; courier/last-mile → first-attempt delivery success rate.',
        'Primary targets: COO or Head of Fleet (immediate operational pain and budget authority), Head of Safety (RTMS and National Road Traffic Act personal liability urgency), CFO or Head of Sustainability (Carbon Tax and ESG reporting).',
        'Site visit at a depot or operations centre is worth three remote calls — physically seeing the fleet and the maintenance operation builds operational credibility that no presentation can replicate.'
      ],
      blockers: [
        {
          q: '"We already have MiX Telematics / Ctrack — we get our analytics from there."',
          m: 'MiX and Ctrack are excellent telematics data collection platforms — and they are the data source that DataIQ360 connects to. Their analytics layer is built for compliance reporting and reactive exception monitoring — driver scorecards, speeding alerts, trip reports. DataIQ360 sits above your telematics platform and builds ML predictive models on the raw data that MiX and Ctrack collect but cannot model: predicting which engine will fail in 9 days, which reefer unit\'s battery will degrade before the next load-shedding event, which driver\'s pre-shift fatigue pattern suggests elevated accident risk. We have native integrations with both MiX Telematics and Ctrack. Can we show you the architecture in 30 minutes?'
        },
        {
          q: '"Our telematics data is owned by our telematics vendor — we cannot extract it."',
          m: 'That is a contractual position that most MiX and Ctrack enterprise agreements allow to be renegotiated or supplemented. Most SA enterprise telematics contracts include a raw data export clause or an API access provision that is simply not activated. Even where direct extraction is restricted, DataIQ360 can connect to the telematics vendor\'s API or reporting interface to ingest aggregated data feeds. We have navigated this access challenge with three SA logistics operators in the past 12 months. Can we look at the specific data access clause in your current telematics agreement together?'
        }
      ]
    },
    {
      num: 2,
      story: 'Quantify the operational problem in rands per vehicle per event before leaving Stage 2. Breakdown cost × annual frequency = the annual production cost at risk on your primary corridor. That number is your commercial anchor. The story is: "Before we recommend anything, we need to understand your fleet composition, your telematics data source, your cold chain exposure, and where the biggest operational and compliance cost sits."',
      actions: [
        'Fleet profile: fleet size and type (HCV, LCV, refrigerated, tanker), primary corridors, telematics vendor, breakdown frequency and average all-in cost per event. This conversation often surfaces a number the operator has never actually calculated — help them arrive at it.',
        'Cold chain: pharmaceutical or food clients with temperature compliance obligations, SAHPRA distribution authorisation scope, load-shedding cold chain incident history, current monitoring approach (IoT sensors, manual logs, or telematics-integrated).',
        'Carbon Tax posture: current calculation method (aggregate fuel invoice vs vehicle-level measurement), JSE listing status and sustainability disclosure obligations, client Scope 3 data requests.',
        'Driver safety: current LTIFR or serious incident rate, RTMS accreditation status or intent, current driver behaviour analytics approach (monthly scorecard vs predictive pre-shift risk).',
        'Data access feasibility: telematics vendor, data export frequency, ERP or fleet management system for maintenance records. Identifying the data access pathway at Stage 2 prevents a late-stage technical surprise.'
      ],
      blockers: [
        {
          q: '"Route optimisation is already built into our Transport Management System."',
          m: 'TMS route optimisation is static — calculated at booking time based on distance and delivery time windows. DataIQ360 route optimisation is dynamic and constraint-aware: it incorporates real-time traffic, load-shedding schedule and its impact on specific road segments and traffic patterns, vehicle payload restrictions, driver hours-of-service compliance, fuel cost by route and time of day, and cold chain temperature exposure by route. The TMS gives you the planned route. DataIQ360 gives you the optimised route that adapts continuously to what is actually happening on the road and the grid.'
        }
      ]
    },
    {
      num: 3,
      story: 'Propose a back-test PoC scoped to your highest-risk corridor and 50–100 vehicles. The back-test uses 12 months of historical telematics data to validate predictive accuracy against breakdowns that have already happened — the operator evaluates the model\'s performance against real events before committing to live deployment.',
      actions: [
        'Define the PoC scope: highest-volume corridor (N3, N1, or key regional route), 50–100 vehicles, 12 months of historical telematics and maintenance record data. The tighter the scope, the faster the back-test and the cleaner the result.',
        'Back-test success metric in writing: "The model will predict X% of historical breakdown events with at least Y days advance notice, measured against confirmed maintenance records for the period." Both parties agree before work begins.',
        'For cold chain: propose a parallel excursion prediction back-test on historical reefer sensor data and load-shedding event logs. If the data exists, the back-test produces compelling evidence in 4–6 weeks.',
        'Carbon Tax Assessment as fast-entry parallel track: approvable from finance or sustainability operational budget in 2–4 weeks, directly linked to a live statutory obligation, and producing a result the CFO uses regardless of subsequent platform decision.',
        'POPIA driver disclosure notice: confirm with the Head of HR and legal that individual driver behaviour data processing for risk scoring is covered by the employment relationship and disclosed in the driver contract or a specific disclosure notice before any driver-level data is processed.'
      ],
      blockers: [
        {
          q: '"We want to see a pilot on our own vehicles before committing — but we cannot afford the downtime risk."',
          m: 'The PoC is specifically designed to eliminate that risk. We use a 12-month historical data extract from your telematics system — a static dataset with no connectivity to live vehicle systems — and back-test the model against breakdowns that have already happened. You evaluate accuracy against real events before any live deployment. Live vehicle connectivity only comes in Phase 2, after the PoC has demonstrated predictive accuracy on your specific fleet and corridor data. Can we agree on the corridor, the vehicle count, and the data extract scope, and set a 6-week back-test timeline?'
        }
      ]
    },
    {
      num: 4,
      story: 'Frame the commercial case as operational cost avoidance — not technology investment. The story is: "Here is what unplanned breakdowns on your primary corridor cost annually. Here is what the back-test shows the predictive model could have prevented. Here is the managed service investment. And the Carbon Tax over-calculation we typically find in the Assessment pays for a significant portion of the first year."',
      actions: [
        'ROI model: breakdown events per year × average all-in cost per event × predicted prevention rate (30–40% in Year 1) = annual value protected. Present conservative, base, and upside scenarios anchored in the operator\'s own disclosed or estimated figures.',
        'Cold chain track: pharmaceutical product loss value at risk per excursion event × annual excursion frequency × prevention rate. One R12 million pharmaceutical product loss prevented covers years of cold chain managed service cost.',
        'Carbon Tax track: current calculation method → estimated inaccuracy → potential overpayment recovery through SARS voluntary disclosure + annual Carbon Tax optimisation value. For JSE-listed groups, add the client Scope 3 certificate value as a commercial differentiation argument.',
        'Managed service as opex: confirm with the CFO that DataForge360 and DataIQ360 managed services are classified as operational expenditure — fleet management or data management cost — not IT capital. This is the correct classification for most SA logistics company financial frameworks.',
        'Architecture page: MiX Telematics or Ctrack → DataFlow360 telematics data pipeline → DataForge360 managed platform → DataIQ360 health models → maintenance team dashboard and automated CMMS work order trigger. One page. Operationally credible.'
      ],
      blockers: [
        {
          q: '"The ROI depends on how many breakdowns the model predicts — what if it doesn\'t predict enough on our specific fleet?"',
          m: 'That is exactly the right question — and it is precisely why we structure every PoC as a back-test against your own historical data before any live deployment commitment. We validate the model\'s predictive accuracy on breakdowns that have already happened in your specific fleet, on your specific corridors, with your specific telematics data quality. If the model does not achieve the agreed accuracy threshold on the historical data, we do not proceed to live deployment and you have no further financial obligation. The back-test result is the commercial evidence — not our promise.'
        }
      ]
    },
    {
      num: 5,
      story: 'Finalising an operational data estate partnership. POPIA driver disclosure is required before individual driver data is processed. The Carbon Tax Assessment contract can often move faster than the main platform commercial process.',
      actions: [
        'POPIA Section 20 Operator Agreement required before any individual driver behaviour data is processed. Driver-level telematics data processing also requires a POPIA-compliant disclosure notice in the driver\'s employment contract or a specific standalone disclosure — confirm with the operator\'s HR and legal team.',
        'Carbon Tax Assessment contract can typically be structured as a separate consulting engagement with faster finance or sustainability team approval — use this to generate early revenue while the full platform commercial process progresses.',
        'B-BBEE compliance certificate must be current — JSE-listed logistics groups require it as a procurement prerequisite. Initiate vendor onboarding at Stage 3.',
        'National Road Traffic Act Section 49: confirm with the Head of Safety that the driver risk scoring model output will be used within a documented safety management framework — this creates the legal defence record that protects both the operator and iDbase360.',
        'For Transnet or PRASA engagements: apply the Public Sector playbook procurement approach — PFMA compliance, CSD registration, and National Treasury framework. Longer cycle but high strategic value.'
      ],
      blockers: [
        {
          q: '"Our drivers\' union will object to individual driver monitoring and risk scoring."',
          m: 'This is a legitimate employment relations process requirement — not a barrier — and it needs to be handled correctly from the start. The safety framing is the correct context: DataIQ360 produces pre-shift risk scores to protect drivers from fatigue-related accidents, not to create a disciplinary performance management system. POPIA and the LRA require proper disclosure and consultation before individual driver data is processed for any purpose. We provide a standard driver disclosure notice template and an implementation framework that has been reviewed for SA labour law compliance, and we recommend engaging union representatives early in the process. The proactive approach — "we are implementing a driver fatigue protection system and this is how it works" — is categorically different from a surveillance framing.'
        }
      ]
    },
    {
      num: 6,
      story: 'The first deliverable that proves the partnership is the first prevented breakdown on the N3 — the R60,000 emergency callout that became an R8,000 planned workshop intervention because DataIQ360 fired a health alert 9 days earlier. Document that event in detail: the health alert date, the maintenance action taken, the breakdown that did not happen, and the cost avoided. That story opens every other SA logistics conversation.',
      actions: [
        'On-site kick-off at the primary depot: delivery team meets the Head of Fleet, Head of Maintenance, and the telematics data team in person. This is not a remote kick-off.',
        'Telematics data extraction confirmed and first data pipeline running within 2 weeks of kick-off date.',
        'First vehicle health score dashboard visible to the maintenance team within 60 days — showing health scores for the top 50 highest-mileage vehicles on the primary corridor.',
        'Document the first proactive maintenance intervention triggered by a DataIQ360 health alert: date of alert, health score threshold crossed, maintenance action taken, and the breakdown that did not occur. This is the reference case.',
        'Reference ask timing: after the first quarter where fleet breakdown frequency is measurably lower than the baseline — the COO or Head of Fleet is the most willing to share the story at that point.'
      ],
      blockers: []
    }
  ],

  discoveryQs: [
    {
      topic: 'Vehicle Breakdown Cost',
      q: '"On your primary corridors, how many unplanned vehicle breakdowns in the last 12 months — and what is your best estimate of the fully-loaded cost per event, including emergency recovery, replacement vehicle, cargo penalties, SLA breach charges, and lost revenue?"',
      qualifies: 'Predictive maintenance urgency and the primary ROI anchor. More than 10 events per 100 vehicles per year = compelling payback. If they cannot quantify the per-event cost, help them estimate it — that calculation is often more persuasive than any demo.'
    },
    {
      topic: 'Cold Chain Compliance',
      q: '"During the last extended load-shedding period, how many temperature excursions did you record across your cold chain network — and at what point did your operations team know a reefer unit or cold room was approaching a compliance threshold: before or after the excursion occurred?"',
      qualifies: 'Cold chain analytics urgency. Post-excursion detection = SAHPRA compliance exposure and pharmaceutical client relationship risk. Load-shedding frequency makes this a recurring rather than exceptional risk.'
    },
    {
      topic: 'Carbon Tax & ESG Reporting',
      q: '"How does your finance team currently calculate your Carbon Tax Act liability — and can you trace that calculation back to vehicle-level fuel consumption data? And are any of your major clients asking you for verified Scope 3 transport emissions data for their own JSE or ESG sustainability reports?"',
      qualifies: 'Carbon Tax urgency and ESG Assessment fast-entry pathway. Growing client demand for Scope 3 certificates is converting this from a compliance obligation into a commercial differentiator for 3PL operators with JSE-listed clients.'
    },
    {
      topic: 'Driver Safety Performance',
      q: '"What is your current serious incident rate per million kilometres — and when an incident occurs, how quickly can your safety team identify the precursor signals in driver telematics data in the 48 hours before the event? And do you currently produce a pre-shift risk score for any driver?"',
      qualifies: 'Driver safety analytics urgency. National Road Traffic Act Section 49 personal liability and RTMS scheme requirements make this a C-suite conversation. Pre-shift risk scoring is the most immediate and actionable DataIQ360 safety use case.'
    },
    {
      topic: 'Route Efficiency',
      q: '"What percentage of your planned routes are modified on the day by dispatchers — and do you have a model that optimises those modifications automatically against fuel cost, SLA deadlines, driver hours-of-service compliance, and load-shedding schedule constraints?"',
      qualifies: 'Route optimisation gap. Manual dispatcher decisions on high volumes of daily modifications = DataIQ360 dynamic route optimisation opportunity, with fuel cost savings quantifiable from existing fleet data.'
    },
    {
      topic: 'Telematics Data Architecture',
      q: '"What telematics platform are you using — MiX Telematics, Ctrack, Geotab, or something else — and where does that data currently sit: in the vendor portal, in a data warehouse, or somewhere else? And what proportion of the data your telematics system collects is currently being used in any kind of predictive analytics or modelling?"',
      qualifies: 'Data access feasibility and analytics maturity. Vendor-portal only = significant underutilisation of existing data. Data warehouse or lakehouse = faster DataFlow360 integration. Low analytics utilisation = the largest managed data estate opportunity.'
    },
    {
      topic: 'Maintenance Regime',
      q: '"Is your current vehicle maintenance programme primarily time-based, mileage-based, or condition-based — and for your condition monitoring, how long after a telematics fault code or anomaly appears does your maintenance team typically act on it?"',
      qualifies: 'Gap between data collection and maintenance action. Time-based or mileage-based with no condition monitoring = the most compelling predictive maintenance opportunity. A 24–48 hour lag on fault code response = DataIQ360 closes that gap.'
    }
  ]
});


// ─── SECTOR 7: MANUFACTURING ──────────────────────────────────────────────────
SECTORS.push({
  id: 'manufacturing',
  name: 'Manufacturing',
  icon: 'MF',
  tagline: 'OEE & predictive maintenance · quality defect detection · energy optimisation · Carbon Tax ESG',
  openingQ: '"On your most critical production asset, how many unplanned stoppages did you experience in the last 12 months — and what is your combined OEE loss in rand value from those events? And how much advance notice did your maintenance team have before each one?"',
  vp: 'Turns production historian, sensor, and quality data into machine health predictions, real-time quality defect alerts, and energy optimisation schedules — managed on-premise within your OT network perimeter by an iDbase360 team who understands load-shedding production resilience, IATF 16949 documentation requirements, and the Carbon Tax Act.',
  entry: 'DataIQ360 Predictive Maintenance PoC · DataIQ360 Quality Defect Detection · DataTrust360 ESG & Carbon Tax Assessment · DataForge360 OT Platform Managed Services',
  events: 'Manufacturing Indaba (mid-year, Johannesburg — primary annual event) · SEIFSA (Steel & Engineering Industries Federation) · NAACAM (National Association of Automotive Component & Allied Manufacturers) · Siemens SA / ABB SA / Rockwell Automation / Schneider Electric OT vendor channel · CGCSA (food manufacturing) · SAPICS supply chain conference',

  personas: [
    {
      title: 'COO / VP Manufacturing / Plant Director',
      role: 'Economic Buyer',
      vp: 'iDbase360 turns your production historian and sensor data into machine health predictions, quality defect alerts, and energy optimisation schedules — managed on-premise by iDbase360, no cloud connectivity required from the OT network. Preventing one major production line stoppage per quarter typically covers 12 months of managed service cost at most SA manufacturing operations.'
    },
    {
      title: 'Head of Maintenance Engineering / Digital Manufacturing Lead',
      role: 'Technical Champion',
      vp: 'DataIQ360 connects to your OSIsoft PI, Siemens SIMATIC, GE Proficy, or Rockwell FactoryTalk historian through a read-only interface within the OT network perimeter — no cloud, no OT cybersecurity risk — and builds health score models your maintenance team acts on from a simple dashboard. The first 9-day advance notice of a bearing failure converts a R2 million line stoppage into a R15,000 planned maintenance intervention.'
    },
    {
      title: 'Quality Director / IATF Coordinator / Head of Quality Assurance',
      role: 'Quality Champion',
      vp: 'DataIQ360 detects quality defect risk in real time from your process parameter data — and DataTrust360 provides the full audit lineage from raw material input through process parameters to finished goods test result that IATF 16949, FSSC 22000, and SAHPRA GMP audits require, without additional manual documentation effort.'
    },
    {
      title: 'Head of Energy / Head of Sustainability / CSO',
      role: 'Energy & ESG Stakeholder',
      vp: 'A DataIQ360 energy scheduling model sequences your most energy-intensive production processes into grid-power windows — reducing diesel generator consumption during load-shedding — while DataTrust360 tracks Carbon Tax Act liability at the machine level and produces the auditable Scope 1 and 2 emissions report your board and external sustainability assurer require.'
    },
    {
      title: 'CFO / Group Finance Director',
      role: 'Commercial Approver',
      vp: 'The OEE improvement from preventing one major production line stoppage per quarter generates more annual rand value than iDbase360 costs. The Carbon Tax over-reporting we typically identify in the Assessment generates a direct financial recovery. We build the payback model from your own production cost structure before proposing anything.'
    }
  ],

  useCases: [
    {
      n: 1,
      name: 'Predictive Maintenance & OEE Improvement',
      persona: 'COO / Head of Maintenance Engineering / Plant Director',
      entryQ: '"On your most critical production asset, how many unplanned stoppages in the last 12 months — and what is your combined OEE loss in rand value? In automotive, that is typically R500,000–R2 million per line-down hour. In food and beverage, it is lost batch value plus overtime recovery cost. What does it cost you per event — and how much advance notice did your maintenance team have?"',
      outcome: 'Renault deployed DataIQ360-equivalent predictive maintenance reducing unplanned downtime by 28% and maintenance cost per vehicle produced by 19% across its SA manufacturing operations. A SA automotive components manufacturer (NDA) deployed DataIQ360 bearing health analytics predicting 11 bearing failures with an average of 7 days advance notice — preventing an estimated R3.8 million in combined downtime and emergency repair costs. A SA food manufacturer (NDA) deployed DataIQ360 filling line health monitoring that reduced unplanned line stoppages by 34% in 12 months — saving R7.2 million in lost production value and avoiding 4 customer SLA breach penalties.',
      entry: 'DataIQ360 Predictive Maintenance — 12-week back-test PoC on 2–3 critical assets in one production area, using 12 months of historian data. DataForge360 OT Platform Managed Services as the always-on platform management layer.'
    },
    {
      n: 2,
      name: 'Quality Defect Detection & SPC Analytics',
      persona: 'Quality Director / COO / IATF Coordinator / Head of QA',
      entryQ: '"What is your current First Pass Yield on your highest-volume production process — and when a quality defect reaches finished goods inspection or a customer complaint, how long does root cause analysis take? Is that analysis automated from your process data, or does it take your quality team days of manual investigation to trace back through the production records?"',
      outcome: 'Bosch deployed DataIQ360 quality analytics across its automotive components manufacturing, reducing customer PPM defect rate by 41% and first-pass inspection failures by 34% through real-time process parameter monitoring and automated defect risk scoring. A SA food manufacturer (NDA) deployed DataIQ360 quality prediction reducing batch rejection rate from 2.3% to 0.7% — saving an estimated R18 million annually in scrap and rework costs while simultaneously reducing FSSC 22000 manual documentation effort by 65%.',
      entry: 'DataIQ360 Quality Defect Detection + DataTrust360 IATF 16949 / FSSC 22000 / SAHPRA audit lineage documentation. Often the fastest-growing use case once predictive maintenance has established the data pipeline foundation.'
    },
    {
      n: 3,
      name: 'Energy Optimisation & Load-Shedding Production Scheduling',
      persona: 'Head of Energy / COO / CFO',
      entryQ: '"What percentage of your total production cost is energy — electricity and diesel combined — and do you currently have a model that schedules your most energy-intensive production processes around load-shedding windows rather than running diesel generators at R4–R7 per kWh? And can you calculate your Carbon Tax Act liability at the machine or production line level, or is it estimated from aggregate utility invoices?"',
      outcome: 'Nestlé deployed DataIQ360-equivalent energy optimisation reducing energy cost per tonne of production by 12% and peak demand exposure by 15%. A SA food manufacturer (NDA) deployed DataIQ360 production scheduling that reduced diesel generator consumption by 34% by sequencing energy-intensive processing into grid-power windows — saving R7.4 million in annual diesel cost while maintaining production throughput targets.',
      entry: 'DataIQ360 Energy Optimisation + DataTrust360 Carbon Tax Act pipeline. Carbon Tax Assessment often approvable from finance or sustainability operational budget as a fast-entry parallel track to the full analytics engagement.'
    },
    {
      n: 4,
      name: 'Carbon Tax & ESG Reporting Automation',
      persona: 'Head of Sustainability / CSO / CFO / Group Company Secretary',
      entryQ: '"How does your sustainability team currently calculate your Carbon Tax Act Scope 1 liability — and can you trace that calculation back to production-line-level energy consumption data at the machine level? Or is it estimated from aggregate utility invoices that do not distinguish between production areas? And for your JSE sustainability disclosure, how long does it take your team to consolidate emissions data from all sites into the board-ready ESG report?"',
      outcome: 'A SA diversified manufacturer (NDA) deployed DataTrust360 to automate Carbon Tax Act Scope 1 calculations from machine-level SCADA and metering data across 8 production facilities — replacing a manual utility-invoice estimation process with an auditable, machine-level calculation that identified a R9.6 million over-reporting of Carbon Tax liability in the prior year. Recovery was submitted through the SARS voluntary disclosure process.',
      entry: 'DataTrust360 ESG & Carbon Tax Assessment — fixed fee, 4–6 weeks. Fastest commercial entry in this sector: directly linked to a live financial obligation increasing annually. Often approvable from the sustainability or finance operational budget independently of the full analytics platform engagement.'
    },
    {
      n: 5,
      name: 'Supply Chain Risk Analytics & Raw Material Planning',
      persona: 'Head of Supply Chain / CSCO / Head of Production Planning',
      entryQ: '"In the last 12 months, how many times did a raw material shortfall cause a production line to stop or a batch to be delayed — and how far in advance did your planning team know the shortage was coming? Was it in time to source an alternative, or did you only find out when the line actually ran out of material?"',
      outcome: 'Volkswagen deployed DataIQ360 supply chain risk analytics identifying at-risk suppliers an average of 34 days before delivery failures — reducing production line stoppages from supplier shortfalls by 27%. A SA food manufacturer (NDA) predicted 4 key ingredient shortfalls with 12 days advance notice using DataIQ360 supplier risk scoring — enabling alternative sourcing that prevented an estimated R9.6 million in production downtime and product reformulation cost.',
      entry: 'DataIQ360 Supply Chain Risk Analytics + DataFlow360 for ERP, SAP APO/IBP, and supplier performance data integration. Typically Phase 2 or Phase 3 following predictive maintenance and quality analytics, sharing the same DataForge360 platform foundation.'
    },
    {
      n: 6,
      name: 'OT Data Estate Governance & Historian Management',
      persona: 'Head of Maintenance Engineering / CIO / CDO / Head of OT',
      entryQ: '"How many different OT data sources — historians, SCADA systems, PLCs, quality measurement systems, energy meters — does your operation currently have, and what proportion of that sensor data is actually being used in any kind of analytics, reporting, or decision support? And if a customer or auditor asked you to trace a quality metric from your board report back to the original sensor reading on the production line, how would your team do that?"',
      outcome: 'A SA automotive Tier 1 supplier (NDA) deployed DataForge360 to establish governed OT data management across 4 manufacturing plants — creating a unified, quality-assured operational data layer that reduced time-to-insight for group-level production quality reporting from 5 days to 6 hours, and formed the foundation for subsequent DataIQ360 predictive maintenance and quality analytics deployments across all four sites.',
      entry: 'DataForge360 OT Platform Managed Services — the foundation layer. Most appropriate starting point for multi-site manufacturers with fragmented OT data estates, before analytics models are built on top.'
    }
  ],

  stages: [
    {
      num: 1,
      story: 'Lead with a production number — not technology. An unplanned line stoppage cost, a quality batch rejection rate, or the load-shedding diesel consumption figure from their most recent results. The story is: "iDbase360 turns your OSIsoft PI and SCADA production data into machine health predictions and quality defect alerts — managed on-premise within your OT network perimeter by a local SA team who understands load-shedding production resilience, IATF 16949 documentation, and the Carbon Tax Act."',
      actions: [
        'Research before outreach: manufacturing sub-sector and key products, OT historian type (OSIsoft PI is most common in SA industrial manufacturing), IATF/FSSC certification from their website, and any recent production or quality events from LinkedIn or industry press.',
        'Lead sources: Manufacturing Indaba (mid-year Johannesburg — primary annual event), SEIFSA for steel and engineering, NAACAM for automotive, Siemens SA / ABB SA / Rockwell Automation OT vendor partner channel, CGCSA for food and beverage.',
        'Sub-sector angle by target: automotive → IATF 16949 quality and OEM PPM urgency; food & beverage → FSSC 22000 quality, load-shedding batch loss, and demand-driven scheduling; steel/energy-intensive → energy cost and Carbon Tax; pharmaceutical → SAHPRA GMP batch record traceability.',
        'Primary targets: Head of Maintenance Engineering or Digital Manufacturing Lead (technical champion with immediate OT data pain), COO or Plant Director (production cost urgency), Quality Director (IATF/FSSC documentation urgency).',
        'A site visit at the manufacturing plant is essential for credibility in this sector — ask for a production floor walk as part of the discovery meeting. You cannot understand the OT architecture without seeing it.'
      ],
      blockers: [
        {
          q: '"We are already part of a global Industry 4.0 or smart manufacturing programme through our parent company."',
          m: 'Global Industry 4.0 programmes define the strategic direction and the technology standard — they rarely deliver a working platform with local SA implementation support, load-shedding production scheduling capability, Carbon Tax Act reporting, or IATF 16949 quality lineage documentation. The global programme tells your SA plant what to aspire to; iDbase360 delivers it on SA ground conditions with SA regulatory knowledge. We complement the global programme — and in most cases, the local SA plant\'s data estate is the most underserved part of the global programme because the global team\'s attention is on the larger plants in Europe or Asia.'
        },
        {
          q: '"Our OT systems are completely air-gapped — we cannot connect production data to any analytics platform."',
          m: 'On-premise deployment within the OT network perimeter is our default architecture for manufacturing clients — and it is specifically designed for air-gapped environments. Dataiku runs as an on-premise application inside your plant network. iDbase360 connects to your SCADA historian through a read-only interface within the OT perimeter — no data leaves your network, no internet connectivity required, no OT cybersecurity risk created. Your Head of OT and IT Security defines the connectivity boundary and we work within it. Can we arrange a 30-minute technical architecture session with that team?'
        }
      ]
    },
    {
      num: 2,
      story: 'A site visit first, then a structured discovery conversation. Physically seeing the production line and the historian architecture builds credibility that no presentation can replicate. The story is: "Before we recommend anything, we need to understand your specific asset estate, your OT data sources, your quality certification requirements, and where the biggest OEE and cost reduction opportunity sits."',
      actions: [
        'Site visit: walk the production floor, identify the critical assets, observe the maintenance team\'s current workflow, see the historian and SCADA screen. Ask the maintenance engineer: "Which machine would cause the biggest problem if it stopped right now?" That machine is the PoC anchor.',
        'OEE quantification: unplanned downtime events per year × average production value per hour lost = annual OEE loss in rand. If they cannot give you this number, help them calculate it. That calculation is often the most valuable thing you do in Stage 2.',
        'Quality metrics: First Pass Yield, scrap rate, customer PPM (for automotive), or batch rejection rate (for food and pharma). IATF/FSSC certification status and last audit outcome.',
        'Energy profile: electricity as % of total production cost, load-shedding impact in rand per event or per month, diesel generator consumption and cost. Carbon Tax calculation method — aggregate invoice or machine-level measurement?',
        'OT data landscape: historian type and version, SCADA system, PLC types, data access approach within OT perimeter, current analytics tooling (if any). Most SA manufacturing plants have OSIsoft PI or a SCADA historian collecting far more data than they analyse.'
      ],
      blockers: [
        {
          q: '"We don\'t have a data science team — we cannot use an ML platform."',
          m: 'That is exactly the situation iDbase360 is designed for. Dataiku\'s visual recipe builder allows your process engineers and maintenance technicians to interact with the model outputs — the machine health dashboard, the quality defect alert, the energy schedule — without writing a line of code. And iDbase360\'s DataIQ360 managed service means our data science team builds and maintains the models. What we need from your team is deep process knowledge about what a failing bearing sounds like in your vibration data — not data science skills. Your engineers provide the domain expertise; we provide the analytics infrastructure.'
        }
      ]
    },
    {
      num: 3,
      story: 'You have quantified the OEE loss and have an engaged plant director or Head of Maintenance. The story is: "Here is the annual OEE cost from unplanned downtime on your primary asset. Here is what proof looks like — a 12-week back-test on your own historian data that validates predictive accuracy against production stoppages that have already happened. You evaluate the model\'s performance against real events before committing to live deployment."',
      actions: [
        'Define the PoC scope precisely: 2–3 critical assets in one production area, 12 months of historian data. The tighter the scope, the faster the back-test and the cleaner the result.',
        'Back-test success metric in writing before work begins: "The model will predict X% of historical production stoppage events with at least Y days advance notice, measured against the confirmed maintenance records for the period."',
        'OT data extraction process: historian export to a secure file transfer within the OT perimeter, or a read-only historian connection via a dedicated data diode. Confirm the approach with the Head of OT at Stage 3 — not as a late-stage discovery.',
        'Carbon Tax Assessment as a parallel fast-entry track: approvable from sustainability or finance operational budget in 2–4 weeks, directly linked to a statutory obligation, and producing a result the CFO uses regardless of subsequent platform decision.',
        'For automotive clients: position the IATF 16949 quality lineage capability as the documentation that satisfies the OEM customer portal audit requirement — this often accelerates procurement approval because it addresses an existing customer compliance obligation.'
      ],
      blockers: [
        {
          q: '"We need to run the PoC in a test environment completely separate from our live production systems."',
          m: 'That is the correct approach for any production-adjacent system — and we design every manufacturing PoC around this constraint. The PoC uses a historical data extract from your OT historian: a static dataset with no connectivity to live production systems whatsoever. The predictive models are built and validated on historical data. Live production connectivity only comes in Phase 2, after the PoC has proven predictive accuracy and the IT/OT integration architecture has been formally validated and approved by your Head of OT and IT Security.'
        }
      ]
    },
    {
      num: 4,
      story: 'Frame the commercial case as production investment avoidance and quality cost reduction — not technology investment. The story is: "Here is what OEE loss from unplanned downtime costs your operation annually. Here is what the back-test shows the predictive maintenance model could have prevented. Here is the Carbon Tax over-reporting the Assessment identified. And here is the investment — structured as operational expenditure that your plant manager can approve."',
      actions: [
        'OEE ROI model: unplanned downtime events per year × average production value lost per event × predicted prevention rate (30–40% in Year 1) = annual value protected. Conservative, base, and upside scenarios.',
        'Quality track: scrap and rework cost × First Pass Yield improvement rate. For automotive: OEM PPM fine avoided × improvement rate. For food: batch rejection cost × improvement rate.',
        'Carbon Tax track: current calculation method accuracy gap → potential over-reporting → SARS voluntary disclosure recovery + annual ongoing Carbon Tax optimisation value.',
        'Opex classification argument: DataForge360 and DataIQ360 are monthly managed service fees — in most manufacturing company frameworks this is classified as operational maintenance or data management cost, not IT capital. Confirm the classification with the CFO early — opex approval is typically 3–4 times faster than capex.',
        'OT architecture on one page: SCADA/historian → read-only data feed within OT perimeter → DataForge360 managed platform (on-premise) → DataIQ360 health/quality models → maintenance team dashboard + CMMS work order trigger. No cloud. No OT security risk. One page.'
      ],
      blockers: [
        {
          q: '"Our OEM / parent company requires us to use their approved digital manufacturing platform."',
          m: 'OEM-required platforms are typically data reporting standards and quality system integration frameworks — not analytics platforms. Dataiku integrates with and feeds its output into OEM-required systems rather than competing with them. The predictive maintenance health scores, quality defect risk flags, and energy optimisation schedules that DataIQ360 produces can be exported in any format required by OEM data standards — including GM\'s Manufacturing Intelligence platform, Volkswagen\'s Group Production System data requirements, or Toyota\'s Production System digital frameworks. The OEM\'s digital manufacturing requirement is typically the kind of production analytics capability that DataIQ360 provides on top of the OEM reporting layer.'
        }
      ]
    },
    {
      num: 5,
      story: 'Finalising a production data estate partnership. The OT remote access architecture is the most important technical negotiation — all iDbase360 remote access to the on-premise Dataiku environment must be via the client\'s approved secure channel with full activity audit logging.',
      actions: [
        'OT remote access terms: all iDbase360 team access to the on-premise Dataiku environment via the plant IT security-approved channel (VPN or jump server), with full activity audit logging visible to the client\'s IT security team. This must be agreed in the SOW technical schedule.',
        'Quality system documentation: DataTrust360 lineage output format must be aligned to the client\'s QMS document control system — IATF 16949 or FSSC 22000 document reference format, version control, and retention period. Agree this with the Quality Director at Stage 3.',
        'Carbon Tax Assessment contract: structure as a separate consulting engagement with faster finance or sustainability team approval — generates early revenue while the full platform commercial process progresses.',
        'B-BBEE certificate, tax clearance, and preferred supplier registration: must be current before commercial conversation finalises. For JSE-listed manufacturers: group procurement process may require preferred supplier registration that takes 4–8 weeks — initiate at Stage 3.',
        'POPIA considerations: if production data includes any personal information — individual worker performance data, driver behaviour, health and safety incident data with personal identifiers — a POPIA Section 20 Operator Agreement is required before processing begins.'
      ],
      blockers: [
        {
          q: '"The capital expenditure budget for this plant is frozen — we cannot add any new technology spend."',
          m: 'DataForge360 and DataIQ360 are structured as monthly operational expenditure — not capital investment. In most SA manufacturing company financial frameworks, managed analytics services are classified as opex maintenance or data management cost: the same budget category as your current CMMS maintenance contract or your production planning software subscription. The production cost avoidance ROI is also an opex argument: preventing one major production stoppage per quarter reduces your maintenance and production loss opex line — it is not a technology investment return, it is a direct operating cost reduction. Can we work with your finance team to confirm the correct budget classification and identify which plant or corporate operational budget line this falls under?'
        }
      ]
    },
    {
      num: 6,
      story: 'The first deliverable that proves the partnership is the first prevented production line stoppage — the machine health alert that fired 7 days before a bearing failure that maintenance then prevented with a planned workshop intervention, and the R2 million OEE loss that did not happen. Document it in detail. It is the reference case that opens every other SA manufacturing conversation.',
      actions: [
        'On-site kick-off at the plant: delivery team meets the Head of Maintenance Engineering, Head of Quality, and the Head of OT in person. This is not a remote kick-off — the production floor credibility must be established from the first day.',
        'OT data extraction confirmed and first historian data pipeline running within 2 weeks of kick-off.',
        'First machine health score dashboard visible to the maintenance team within 60 days — showing health scores for the 2–3 PoC assets, updated from fresh historian data on the agreed refresh cycle.',
        'Document the first proactive maintenance intervention triggered by a DataIQ360 health alert: the alert date, the health score threshold crossed, the maintenance action taken, the estimated breakdown cost avoided. This is the reference case.',
        'Quality track Phase 2 trigger: once the predictive maintenance model is in production and trusted, introduce the quality defect detection conversation to the Quality Director using the same DataFlow360 historian data pipeline as the foundation.'
      ],
      blockers: []
    }
  ],

  discoveryQs: [
    {
      topic: 'Equipment Downtime & OEE',
      q: '"On your most critical production asset, how many unplanned stoppages in the last 12 months — and what is your combined OEE loss in rand value from those events? And how much advance notice did your maintenance team have before each failure?"',
      qualifies: 'Predictive maintenance urgency and primary ROI anchor. More than 5 unplanned stoppages per year on a primary asset = the payback calculation is immediate. If they cannot quantify the per-event cost, help them calculate it — that exercise is often the most valuable thing done in Stage 2.'
    },
    {
      topic: 'Quality Performance',
      q: '"What is your current First Pass Yield on your highest-volume production process — and when a quality defect reaches finished goods inspection or a customer complaint, how long does root cause analysis take, and is that analysis automated from process data or done manually?"',
      qualifies: 'Quality analytics urgency. Every FPY improvement point = millions in reduced scrap and rework. Manual root cause analysis taking days = DataTrust360 process data lineage and DataIQ360 quality defect prediction opportunity.'
    },
    {
      topic: 'Energy Cost & Load-Shedding',
      q: '"What percentage of your total production cost is energy — electricity and diesel combined — and do you have a model that schedules your most energy-intensive production processes around load-shedding windows rather than running diesel generators at R4–R7 per kWh?"',
      qualifies: 'Energy optimisation urgency. Any operation running 4+ hours of daily diesel backup during load-shedding has a quantifiable and significant cost that the DataIQ360 energy scheduling model directly reduces.'
    },
    {
      topic: 'Carbon Tax & ESG',
      q: '"How does your sustainability team calculate your Carbon Tax Act Scope 1 liability — and can you trace that calculation from the board ESG report back to production-line-level energy consumption data at the machine level? Or is it estimated from aggregate utility invoices?"',
      qualifies: 'Carbon Tax urgency and the DataTrust360 ESG Assessment fast-entry pathway. Aggregate utility invoice calculation = likely over-reporting and potential SARS voluntary disclosure recovery. This is the fastest commercial entry point for JSE-listed manufacturers.'
    },
    {
      topic: 'OT Data Architecture',
      q: '"What OT systems and historians are in use across your key production assets — OSIsoft PI, Siemens SIMATIC, GE Proficy, Rockwell FactoryTalk? And what proportion of the sensor data those systems collect is currently being used in any kind of analytics, reporting, or decision-support model?"',
      qualifies: 'Data access feasibility and analytics maturity gap. Most SA manufacturing plants collect far more data than they analyse. Low analytics utilisation of existing historian data = the largest data estate opportunity, and DataForge360 is the right starting point.'
    },
    {
      topic: 'Quality Certification Requirements',
      q: '"What quality management certifications does your operation currently hold — IATF 16949 for automotive, FSSC 22000 for food, SAHPRA GMP for pharmaceutical — and in your last certification audit, were there any findings related to data traceability, process documentation completeness, or measurement system validation?"',
      qualifies: 'Quality documentation and IATF/FSSC lineage urgency. Certification audit findings related to data traceability = DataTrust360 quality data lineage is an immediate compliance need, often with a customer or certification body deadline attached.'
    },
    {
      topic: 'Budget Classification',
      q: '"When your organisation invests in operational technology analytics and managed services — platforms that connect to your production data and provide ongoing operational insights — is that typically classified as capital expenditure or operational expenditure in your financial framework?"',
      qualifies: 'Commercial pathway and approval timeline. Opex classification = plant manager or COO can approve; 3–5 month cycle. Capex classification = board or group approval; 6–12 month cycle with the Assessment as the fast-entry bridge.'
    }
  ]
});


// ─── SECTOR 8: EDUCATION & EDTECH ────────────────────────────────────────────
SECTORS.push({
  id: 'education',
  name: 'Education & EdTech',
  icon: 'ED',
  tagline: 'Student at-risk analytics · HEMIS reporting automation · research data governance · POPIA for students',
  openingQ: '"How does your institution currently identify students who are at risk of dropping out in their first year — and at what point in the semester do you typically know? Is that early enough to intervene effectively? And how long does it take your Institutional Research team to produce a HEMIS-ready submission — and what proportion of that time is spent cleaning and reconciling data rather than doing actual analysis?"',
  vp: 'Automates HEMIS and DHET reporting, predicts at-risk students before they fail, and provides the POPIA-compliant governance layer for student and research data — managed locally by iDbase360 on SA infrastructure, with entry points below most institutional procurement thresholds.',
  entry: 'DataTrust360 AI Readiness Assessment (below tender threshold) · DataFlow360 HEMIS Reporting Automation · DataIQ360 Student At-Risk Analytics · DataTrust360 Research Data Governance',
  events: 'SAPSE (SA Postsecondary Education) data conference — primary Institutional Research forum · HESA / Universities South Africa (USAf) annual events · DHET stakeholder forums · NRF research data management forums · Microsoft SA and Snowflake SA EdTech partner ecosystem · CHE (Council on Higher Education) network',

  personas: [
    {
      title: 'Vice-Chancellor / DVC Academic / Deputy Vice-Chancellor',
      role: 'Academic Economic Buyer',
      vp: 'iDbase360 gives your institution a governed AI platform that improves student throughput rates, automates DHET reporting obligations, and provides POPIA-compliant data governance — delivered by a local SA team who understands HEMIS, NRF grant requirements, and the CHE quality framework, so your staff focus on students and research, not data plumbing.'
    },
    {
      title: 'Director of Institutional Research / Registrar',
      role: 'Technical Champion — Reporting',
      vp: 'DataFlow360 automates your HEMIS submission pipeline — extracting from your SIS, validating against DHET field definitions, and producing a submission-ready dataset with full data lineage — reducing a 3–5 week manual process to a governed, auditable pipeline that runs in days and eliminates the subsidy exposure from DHET submission errors.'
    },
    {
      title: 'CIO / Head of ICT / Head of Data & Analytics',
      role: 'Technology Champion',
      vp: 'Dataiku deploys on-premise or within your private institutional cloud — student personal data never leaves your network perimeter. DataForge360 manages the platform operationally so your ICT team carries no additional load, and the multi-persona environment means researchers, IR analysts, and data engineers can all work in the same governed platform without creating data silos.'
    },
    {
      title: 'POPIA Information Officer / Registrar',
      role: 'Compliance Gatekeeper',
      vp: 'DataTrust360 maps every student and staff data processing pipeline, enforces POPIA-aligned governance rules across all institutional data systems, and produces the live data catalogue and processing register your Information Officer can present to an Information Regulator audit — replacing the policy document and spreadsheet that most SA institutions currently call their POPIA compliance infrastructure.'
    },
    {
      title: 'Dean of Research / VP Research / NRF Grant Manager',
      role: 'Research Data Champion',
      vp: 'DataTrust360 provides the operational Research Data Management infrastructure that NRF, EU Horizon, and NIH grant conditions increasingly require — automated data lineage from collection to publication, POPIA-compliant handling of human subjects research data, and the grant-ready Data Management Plan documentation that manual RDM processes cannot produce at scale.'
    }
  ],

  useCases: [
    {
      n: 1,
      name: 'Student At-Risk Prediction & Early Intervention',
      persona: 'DVC Academic / Director of Student Success / Director of Institutional Research',
      entryQ: '"How does your institution currently identify students who are at risk of dropping out in their first year — and at what point in the semester does your team typically know a student is at risk? Is it early enough to intervene before they have already failed their first assessments?"',
      outcome: 'Georgia State University deployed a student success prediction model identifying at-risk students from 800+ data signals — resulting in a 22-percentage-point improvement in graduation rates over six years and over USD 35 million in additional tuition revenue retained annually. A SA university (NDA) deployed DataIQ360 student at-risk analytics identifying 340 high-risk first-year students in Week 3 of semester — six weeks before mid-semester assessments — enabling targeted academic support that reduced the dropout rate in that cohort by 31%.',
      entry: 'DataIQ360 Student At-Risk Analytics — fixed-outcome engagement: weekly risk score refresh, advisor routing integration, and DHET-aligned throughput reporting output. DataFlow360 for SIS, LMS, and library access data pipeline integration.'
    },
    {
      n: 2,
      name: 'HEMIS Reporting Automation & DHET Submission Governance',
      persona: 'Director of Institutional Research / Registrar / CIO',
      entryQ: '"How long does it take your Institutional Research team to produce a HEMIS-ready data submission — and what proportion of that time is spent cleaning, reconciling, and validating data rather than doing actual analytical work? And how many DHET correction requests has your institution received in the last three submission cycles?"',
      outcome: 'A SA comprehensive university (NDA) reduced HEMIS submission preparation from 5 weeks to 4 days using DataFlow360 automated pipelines — freeing 3 IR staff weeks per submission cycle for strategic analytics, and eliminating 6 recurring DHET data correction requests that had been generating subsidy calculation delays. A SA university of technology (NDA) eliminated 7 of 11 recurring DHET data quality findings within the first year of DataTrust360 data quality governance.',
      entry: 'DataFlow360 + DataTrust360 HEMIS Reporting Automation — the highest-urgency and fastest-approving engagement type in the sector. The January HEMIS deadline creates an annual commercial urgency window: November–December outreach reaches IR Directors when the pain is at its peak.'
    },
    {
      n: 3,
      name: 'Research Data Governance & NRF Compliance',
      persona: 'Dean of Research / VP Research / NRF Grant Manager / POPIA Information Officer',
      entryQ: '"Does your institution have an operational Research Data Management infrastructure that satisfies NRF grant conditions and international funder Data Management Plan requirements — or is your research data governance primarily a policy document with limited operational backing? And how do you currently ensure that research datasets involving human subjects are not shared or reused beyond their ethical clearance scope?"',
      outcome: 'A SA research-intensive university (NDA) deployed DataTrust360 research data governance, achieving NRF Open Research data compliance for 94% of active funded projects within six months — enabling open access data sharing for qualifying datasets and eliminating 3 recurring NRF compliance findings that had been flagging in grant reporting cycles. A European university achieved GDPR compliance certification across all research and student data systems using Dataiku, with the governance infrastructure deployed and validated within a single academic semester.',
      entry: 'DataTrust360 Research Data Governance Assessment — fixed fee consulting engagement. Often fundable from the research office operational budget independently of the main ICT procurement process. NRF grant conditions create direct, non-deferrable urgency at research-intensive institutions.'
    },
    {
      n: 4,
      name: 'Enrolment Analytics & DHET Subsidy Planning',
      persona: 'DVC Planning / Registrar / CFO / Head of Enrolment Management',
      entryQ: '"How does your institution currently forecast enrolment demand by faculty and qualification level — and when DHET adjusts subsidy funding bands or throughput targets in the annual performance agreement, how quickly can your planning team model the financial impact on institutional revenue?"',
      outcome: 'A SA university of technology (NDA) deployed DataIQ360 enrolment analytics improving DHET headcount subsidy forecast accuracy by 18 percentage points — enabling the finance team to model subsidy impact in hours rather than weeks, and informing faculty resource allocation decisions 3 months earlier in the planning cycle. The improved forecast accuracy prevented a R4.2 million subsidy shortfall from going undetected until mid-year.',
      entry: 'DataIQ360 Enrolment Analytics — often a natural Phase 2 following HEMIS automation, using the same DataFlow360 SIS data pipeline as the foundation. High CFO sponsorship potential once the DHET subsidy financial impact is quantified.'
    },
    {
      n: 5,
      name: 'Personalised Learning & EdTech Product Analytics',
      persona: 'Chief Product Officer / Head of Data / CTO / CEO (EdTech Company)',
      entryQ: '"What is your platform\'s current course completion rate — and do you have a model that predicts which learners are at risk of disengaging before they actually stop logging in? Is that model operating in real time from fresh engagement data, or does it run as a monthly batch report that is already stale by the time your customer success team acts on it?"',
      outcome: 'A Southern African EdTech provider (NDA) deployed DataIQ360 learner risk analytics identifying disengaged learners 14 days before they churned from the platform — enabling targeted re-engagement interventions that improved course completion rates by 28% and reduced monthly churn by 19%, directly improving ARR retention. Duolingo deployed a comparable MLOps architecture increasing daily active user engagement by 35% through personalised learning path recommendations.',
      entry: 'DataIQ360 Learner Risk and Personalisation — targeted at EdTech companies with Series A+ funding and monthly recurring revenue. Faster sales cycle (2–4 months) than institutional education. DataTrust360 POPIA governance for learner data (including POPIA Section 35 children\'s data provisions for school-segment platforms).'
    },
    {
      n: 6,
      name: 'POPIA Compliance & Student Data Governance',
      persona: 'POPIA Information Officer / Registrar / CIO / Council Secretary',
      entryQ: '"How does your institution currently document all processing activities involving student personal information — and if the Information Regulator conducted an audit of your student data systems this month, what would your Information Officer present as evidence of POPIA compliance? And does your institution have a documented 72-hour breach notification workflow for a data breach affecting student records?"',
      outcome: 'A SA higher education institution (NDA) deployed DataTrust360 to map 2,100 data assets across four student-facing systems, automatically identify 31 POPIA compliance gaps, and produce a regulator-ready lineage report within six weeks — reducing the Information Officer\'s manual compliance effort by 65% and resolving an active Information Regulator inquiry with the documentation generated. A European university achieved GDPR compliance certification across all research and student data systems using Dataiku governance capabilities within a single academic semester.',
      entry: 'DataTrust360 POPIA Readiness Assessment — fixed fee consulting engagement, almost always below institutional procurement thresholds. The Information Regulator\'s active audit programme targeting large data processors creates direct urgency for every institution processing student personal data at scale.'
    }
  ],

  stages: [
    {
      num: 1,
      story: 'Education deals are slow, committee-driven, and require relationship-building at multiple levels simultaneously. Never rely on a single champion. The story is: "iDbase360 gives your institution a governed AI platform that improves student throughput, automates DHET reporting, and manages POPIA compliance — managed locally on SA infrastructure, with entry points that fall below most institutional procurement thresholds." The November–December HEMIS urgency window is your highest-leverage outreach moment of the year.',
      actions: [
        'January HEMIS deadline creates the most reliable annual urgency window: November–December outreach reaches IR Directors when HEMIS preparation pain is fresh and acute. Lead with: "What did your HEMIS preparation process look like this year — and what would it have been worth to have that pipeline automated?"',
        'Lead sources: SAPSE data conference (primary IR Director forum — this is where you build the technical champion relationship), HESA/USAf events for DVC Academic access, NRF research data forums for research data governance angle, Microsoft SA and Snowflake SA EdTech partner ecosystem.',
        'Target all three entry roles simultaneously: Director of Institutional Research (immediate HEMIS operational pain and fastest procurement pathway), DVC Academic (strategic student throughput mandate and budget authority), POPIA Information Officer (compliance urgency and often fastest consulting engagement approval).',
        'For EdTech companies: different buying process — target the CPO or Head of Data directly, lead with the product AI capability story, and expect a 2–4 month sales cycle rather than the 6–18 months typical for institutional education.',
        'DHET subsidy angle: calculate the approximate rand value of a 1% improvement in throughput at the target institution — DHET headcount subsidy per enrolled FTEN × estimated cohort size × 1% improvement rate. That number is often R5–R20 million per year. It is the commercial anchor for the DVC Academic conversation.'
      ],
      blockers: [
        {
          q: '"Our IT team has standardised on Microsoft and we are required to use Microsoft tools."',
          m: 'Dataiku integrates natively with the full Microsoft stack — Azure, Power BI, SharePoint, and Microsoft Fabric. It is not a replacement for any Microsoft tool; it is the governed AI and data engineering layer that sits above them. Your Power BI dashboards become reliable because Dataiku governs the data that feeds them. Your HEMIS pipeline runs on Azure infrastructure. Your student at-risk model outputs are accessible from the Microsoft Power Platform. Most of our education clients run Dataiku on Azure alongside the Microsoft stack — the two complement each other. Can we show you the integration architecture in 30 minutes?'
        },
        {
          q: '"We tried building a student analytics capability 18 months ago and it never got used."',
          m: 'That is the most common starting point in this sector — and it tells us exactly what to do differently. Failed student analytics initiatives in higher education almost always fail for one of three reasons: the model was built on unreliable data with no quality governance, the output was never integrated into the advisor workflow in a way advisors actually used, or the data science team that built it moved on with no managed handover. iDbase360 addresses all three: DataTrust360 governs the data quality from the source, DataIQ360 builds the advisor routing workflow into the model output, and the managed service means iDbase360\'s team remains accountable for the model\'s performance after the build phase. Can we walk through what specifically failed in the previous initiative?'
        }
      ]
    },
    {
      num: 2,
      story: 'You are a trusted SA higher education data advisor — not a vendor. The story is: "Before we recommend anything, we need to understand your specific reporting burden, your student data infrastructure, your research data governance posture, and where the highest-urgency compliance risk sits. Most institutions at this stage have three or four foundational data problems — HEMIS accuracy, POPIA compliance, student at-risk identification — that, if resolved, would materially change the institution\'s performance on its DHET obligations."',
      actions: [
        'HEMIS pain first: how long does submission preparation take, how many DHET correction requests in the last 3 cycles, what is the estimated subsidy exposure from recurring data quality errors.',
        'Student throughput: current first-year dropout rate, at what point in semester at-risk students are identified, whether there is an active early warning system or manual process, number of students the institution believes it loses each year that it could retain with better identification.',
        'POPIA posture: Information Officer readiness for a data processing register request, current student data consent management approach, documented breach notification workflow.',
        'Research data: NRF compliance status for funded research data management plans, human subjects data governance for research ethics clearance compliance, international funder requirements.',
        'SIS infrastructure: Banner, PeopleSoft, or ITS Integrator — the three most common SA university SIS platforms. Data quality level, integration with LMS (Moodle, Blackboard, Canvas) and finance system.'
      ],
      blockers: [
        {
          q: '"We cannot share student personal data with any external party — POPIA."',
          m: 'No student personal data needs to leave your institution\'s infrastructure. Dataiku deploys on-premise on your existing university server infrastructure or within your institutional private cloud. iDbase360\'s team accesses the Dataiku environment through your institution\'s security-approved remote access controls with full activity audit logging visible to your ICT security team. No student data leaves your network perimeter — this is the same architecture we use for financial services clients processing equally sensitive personal financial data. Can we arrange a 30-minute session with your CIO and POPIA Information Officer to walk through the technical architecture?'
        }
      ]
    },
    {
      num: 3,
      story: 'You have a quantified HEMIS and throughput pain and an engaged IR Director or DVC Academic. The story is: "We know what the HEMIS preparation burden costs in IR team time and subsidy risk. We know what a 1% throughput improvement is worth in DHET subsidy rand value. Here is the consulting engagement that produces a board-ready assessment in 4–6 weeks — below your institution\'s competitive tender threshold — and here is the student at-risk model that starts identifying at-risk students before mid-semester."',
      actions: [
        'Propose the DataTrust360 AI Readiness Assessment as the formal entry point: fixed fee R150,000–R250,000, 4–6 weeks, structured as a professional consulting engagement — below most institutional competitive tender thresholds. Covers HEMIS data quality, POPIA compliance gap, and student analytics maturity.',
        'Confirm the Assessment can be sourced as a consulting services engagement from the IR, ICT, or research office operational budget without requiring a competitive tender.',
        'HEMIS urgency alignment: "If we start the Assessment now, the HEMIS data quality rules will be operational before the next January submission cycle." This creates a hard commercial deadline.',
        'Engage the DVC Academic, Director of IR, POPIA Information Officer, and CIO simultaneously — each has a separate urgency driver and a separate potential budget line.',
        'For research-intensive universities: DataTrust360 Research Data Governance Assessment can be scoped as a separate engagement funded from the research office or an NRF infrastructure grant — often the fastest procurement pathway at research-intensive institutions.'
      ],
      blockers: [
        {
          q: '"Our university Senate or Council must approve any new technology platform — that process takes 6–12 months."',
          m: 'The DataTrust360 AI Readiness Assessment is a professional consulting engagement — not a technology platform adoption — and it typically does not require Senate or Council approval. The Assessment output gives your institution the evidence base it needs to propose platform adoption to Senate or Council with a fully-costed, evidence-backed business case: throughput improvement potential in DHET subsidy rand value, HEMIS error risk reduction, and POPIA compliance gap remediation. Two universities have used this approach: Senate approved the platform adoption based on the Assessment findings and the Proof of Value outcomes. Would the Assessment-first approach work within your governance framework?'
        }
      ]
    },
    {
      num: 4,
      story: 'Frame the commercial case in the language of institutional accountability — not technology investment. The story is: "Here is what HEMIS errors are costing in potential subsidy underpayment. Here is what a 1% throughput improvement is worth in DHET subsidy rand value. Here is what a POPIA Information Regulator finding could cost institutionally and reputationally. And here is the investment — structured as professional consulting and managed services that your finance team can source without a capital approval."',
      actions: [
        'HEMIS ROI: estimated DHET subsidy exposure from recurring data quality errors + IR team person-days saved per submission cycle × cost per person-day × 3 annual submission cycles.',
        'Throughput ROI: DHET headcount subsidy per enrolled FTEN × estimated number of students retained annually by early intervention model × current dropout rate improvement potential.',
        'POPIA risk framing — used contextually, not as a threat: "The Information Regulator has begun active audit activities targeting large educational data processors. A finding against your institution would affect not just compliance, but the institution\'s reputation with prospective students, staff, and research funders."',
        'Research data funding angle: DataTrust360 Research Data Governance enables compliance with NRF grant conditions that are increasingly making data management infrastructure a funding prerequisite. The value is not just risk reduction — it is future grant eligibility protection.',
        'Procurement pathway section: consulting engagement, professional services quotation, or technology tender — document the recommended pathway and applicable threshold clearly in the proposal.'
      ],
      blockers: [
        {
          q: '"We don\'t have an ICT capital budget for a new analytics platform this year."',
          m: 'The AI Readiness Assessment is a professional consulting services expenditure — not IT capital — and is typically fundable from the IR operational budget, the ICT operational maintenance budget, or the research office operational budget. The HEMIS automation Phase 2 is structured as a monthly managed service: DataFlow360 is classified as data management operational expenditure in most institutional financial frameworks, not IT capital. And the throughput improvement value — DHET subsidy retained per additional graduate — is a direct institutional revenue line, not a technology investment return. Can we work with your CFO to identify the right budget classification and funding source for each phase of the engagement?'
        }
      ]
    },
    {
      num: 5,
      story: 'Finalising an institutional data governance partnership. POPIA Operator Agreement is required before any student personal data is accessed. On-premise deployment within institutional infrastructure is typically non-negotiable for public institutions. University procurement processes are slower but more structured — plan accordingly from Stage 3.',
      actions: [
        'POPIA Section 20 Operator Agreement must be executed before any student or staff personal data is accessed by the iDbase360 team — non-negotiable, required before any data extraction or pipeline development begins.',
        'On-premise or private institutional cloud deployment: confirm with CIO and ICT team the server provisioning or cloud environment allocation. For institutions with existing Azure institutional agreements, deploying Dataiku in the Azure institutional tenant is typically the fastest path.',
        'Procurement pathway: three written quotations or full competitive tender depending on total contract value per the institution\'s SCM policy. Confirm the applicable threshold with the finance team at Stage 3.',
        'Academic calendar alignment: implementation milestones must align to the academic calendar and the HEMIS submission cycle — not iDbase360\'s delivery calendar. The next HEMIS submission date is the first hard milestone.',
        'For research grants: if any component of the DataTrust360 Research Data Governance deployment is fundable from an NRF infrastructure or capacity building grant, identify this pathway at Stage 3. NRF infrastructure grants have specific procurement requirements.'
      ],
      blockers: [
        {
          q: '"IT says we don\'t have server capacity for an on-premise Dataiku deployment."',
          m: 'Two options that typically resolve this quickly: First, a minimal server configuration for the DataTrust360 Assessment phase can usually run on existing university server infrastructure with a small virtual machine allocation — our technical team can provide a minimum specification document for your IT team to assess against current capacity within 48 hours. Second, if your institution has an existing Azure or AWS institutional agreement — which most SA research universities now do — Dataiku can deploy as a new virtual machine in your existing cloud tenancy at no additional infrastructure cost beyond the VM runtime. No new hardware procurement required. Which of these two approaches would your IT team prefer to explore?'
        }
      ]
    },
    {
      num: 6,
      story: 'The first deliverable that proves the partnership is the first HEMIS submission cycle that completes in days rather than weeks — with a data quality dashboard showing the IR team the quality status before the DHET window opens, and no correction requests from DHET for the submitted data. That moment is when the Registrar and DVC Academic understand what this partnership is worth.',
      actions: [
        'POPIA Operator Agreement executed before any student data extraction begins — on or before the kick-off date.',
        'Align Phase 1 milestones immediately to the HEMIS submission calendar: the January deadline is the first hard milestone. If the engagement starts in October, the HEMIS data quality pipeline must be operational before December.',
        'First 90 days: DataFlow360 HEMIS pipeline operational → DataTrust360 data quality dashboard showing IR team the quality status before submission → first HEMIS submission produced through the automated pipeline.',
        'Student at-risk model Phase 2: target deployment before Week 3 of Semester 1 of the next academic year — the earliest point where intervention can have maximum impact on first-year throughput.',
        'Reference ask timing: after the first HEMIS submission cycle that requires zero manual reconciliation and generates zero DHET correction requests. That is the Registrar\'s story — and it is the reference case for the entire SA higher education sector.'
      ],
      blockers: []
    }
  ],

  discoveryQs: [
    {
      topic: 'HEMIS Reporting Burden',
      q: '"How long does it take your Institutional Research team to produce a HEMIS-ready data submission — and what proportion of that time is spent cleaning, reconciling, and validating data rather than doing actual analytical work? And how many DHET data correction requests has your institution received in the last three submission cycles?"',
      qualifies: 'HEMIS automation urgency and the fastest-moving commercial entry point. More than 3 weeks of manual preparation = compelling DataFlow360 pipeline opportunity. Any DHET correction requests = DataTrust360 data quality governance urgency.'
    },
    {
      topic: 'Student At-Risk Identification',
      q: '"How does your institution currently identify students who are at risk of dropping out in their first year — and at what point in the semester does your team typically know? Is that early enough to intervene effectively before the student has already missed the critical academic support window?"',
      qualifies: 'Student analytics urgency and DVC Academic sponsorship potential. If identification is mid-semester or end-of-year, the intervention window has already closed. Early identification in Week 2–3 = the use case that changes throughput rates.'
    },
    {
      topic: 'POPIA Compliance Posture',
      q: '"How does your institution currently document all processing activities involving student personal information — and if the Information Regulator conducted an audit of your student data systems this month, what would your Information Officer present as evidence of POPIA compliance?"',
      qualifies: 'POPIA compliance gap for student data. Almost universal weakness across SA institutions. The Information Regulator\'s active audit programme creates direct, non-deferrable urgency — and the DataTrust360 Assessment is the fastest consulting engagement entry point.'
    },
    {
      topic: 'Research Data Governance',
      q: '"Does your institution have an operational Research Data Management infrastructure that satisfies current NRF grant conditions and international funder Data Management Plan requirements — or is your research data governance primarily a policy document with limited operational backing?"',
      qualifies: 'Research data governance urgency. NRF and international funder conditions are tightening. Institutions without operational RDM infrastructure risk future grant eligibility. DataTrust360 Research Data Governance is the directly relevant fast-entry engagement.'
    },
    {
      topic: 'Student Information System',
      q: '"What student information system does your institution use — ITS Integrator, Banner, or PeopleSoft — and do your SIS, LMS, library access, and financial aid systems currently reconcile automatically for HEMIS purposes or does your IR team stitch the data together manually?"',
      qualifies: 'Data infrastructure and integration complexity. Manual SIS-LMS-Finance reconciliation = DataFlow360 pipeline opportunity and a significant DataTrust360 quality governance need.'
    },
    {
      topic: 'DHET Throughput Targets',
      q: '"What is your institution\'s current first-year retention rate and overall throughput rate — and what is the DHET subsidy rand value of a 1% improvement in throughput at your student scale? Is that improvement target in your current DHET performance agreement?"',
      qualifies: 'Throughput urgency and the primary commercial ROI anchor for the DVC Academic conversation. Calculating the DHET subsidy value of a throughput improvement converts the student analytics conversation from a welfare story to a revenue story.'
    },
    {
      topic: 'Budget & Procurement',
      q: '"Who has budget authority for a professional data governance consulting engagement at your institution — and is that typically the IR operational budget, the ICT operational budget, or the research office budget? And what is the competitive tender threshold for professional services?"',
      qualifies: 'Commercial pathway and procurement timeline. Identifying the right budget line and confirming the Assessment sits below the competitive tender threshold is the single most important commercial discovery question in institutional education.'
    }
  ]
});

// ─── RENDER ───────────────────────────────────────────────────────────────────
// Call these at the end of every data.js save — they refresh the sidebar and home screen.
buildSidebar();
render();
