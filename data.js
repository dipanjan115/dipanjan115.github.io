// Portfolio content — sourced from resume
window.PORTFOLIO_DATA = {
  name: "Dipanjan Adhikary",
  profilePhoto: "assets/Profile_Photo.jpg",
  role: "PhD Candidate · Wireless PHY & Software-Defined Radio",
  location: "Phoenix, Arizona",
  email: "dipanjanpiyas@gmail.com",
  linkedin: "dipanjanadhikary",
  github: "dipanjan115",
  affiliation: "PROTON Lab · Arizona State University",
  expected: "December 2026",

  about: [
    "I am currently pursuing a PhD in Computer Engineering at Arizona State University, under the guidance of <a href='https://search.asu.edu/profile/5136552' target='_blank' rel='noreferrer' style='color: var(--accent); font-weight: 600;'>Dr. Eirini Eleni Tsiropoulou</a>, specializing in wireless physical-layer design, Over-the-Air Computation (AirComp), and Software-Defined Radio systems.",
    "My research combines theoretical foundations with hardware experimentation. Current work includes adaptive jamming defenses for IIoT, NOMA testbeds on ADALM-Pluto and USRP, and a resilient control link for concentrated solar power fields under a DOE-funded program. Expected graduation: December 2026."
  ],

  researchFocus: [
    {
      tag: "01",
      title: "Over-the-Air Computation Security",
      body: "Adaptive algorithms for detecting and mitigating jamming attacks in AirComp-based IIoT systems, including a provisional patent on autonomous anti-jamming for concentrated solar power applications."
    },
    {
      tag: "02",
      title: "SDR Physical-Layer Prototyping",
      body: "End-to-end implementation of NOMA, QPSK, OTFS, and LDPC chains on ADALM-Pluto and USRP B210 hardware, with measured bit error rates as low as 10⁻⁵ on the far user."
    },
    {
      tag: "03",
      title: "Resilient Wireless Control",
      body: "Beacon-based coarse synchronization, forward error correction, and sub-second latency for the HELIOCOMM heliostat-field control prototype funded by the U.S. Department of Energy."
    }
  ],

  publications: [
    {
      type: "Patent",
      year: "2025",
      title: "Systems and Methods for Autonomous Anti-Jamming in Over the Air Computation Concentrated Solar Power Systems",
      authors: "D. Adhikary, E. E. Tsiropoulou",
      venue: "U.S. Patent Application (Provisional)",
      status: "Submitted",
      url: "#"
    },
    {
      type: "Journal",
      year: "2026",
      title: "A Software Defined Radio Implementation of Non-Orthogonal Multiple Access with Reliable Decoding via Error Correction",
      authors: "D. Adhikary, E. E. Tsiropoulou",
      venue: "MDPI Future Internet",
      url: "https://www.mdpi.com/1999-5903/18/3/128"
    },
    {
      type: "Journal",
      year: "2025",
      title: "Jamming Attacks Detection and Ejection in Over the Air Computation Concentrated Solar Power Systems",
      authors: "D. Adhikary, J. Plusquellic, E. E. Tsiropoulou",
      venue: "IEEE Internet of Things Journal",
      url: "https://ieeexplore.ieee.org/abstract/document/11151639"
    },
    {
      type: "Conference",
      year: "2026",
      title: "Physical Layer Design and Validation of a Downlink NOMA-QPSK System on Software Defined Radio",
      authors: "D. Adhikary, E. E. Tsiropoulou",
      venue: "IEEE ICC 2026",
      status: "Accepted",
      url: "#"
    },
    {
      type: "Conference",
      year: "2025",
      title: "Denial of Service Attacks in Over-the-Air Computation for Internet of Medical Things",
      authors: "D. Adhikary, J. Plusquellic, E. E. Tsiropoulou",
      venue: "IEEE Globecom 2025",
      url: "https://ieeexplore.ieee.org/abstract/document/11431860"
    },
    {
      type: "Conference",
      year: "2025",
      title: "DRAGON: Data and Resource Allocation in ISAC Systems based on Game Theory and Learning",
      authors: "D. Adhikary, M. S. Siraj, E. E. Tsiropoulou",
      venue: "IEEE ICC 2025",
      url: "https://ieeexplore.ieee.org/abstract/document/11160879"
    },
    {
      type: "Conference",
      year: "2019",
      title: "Coopetition-Based Inter-Operator Traffic Sharing for Energy-Efficient Cellular Networks",
      authors: "D. Adhikary, N. S. N. Bayev, M. F. Hossain, K. S. Munasinghe, A. Jamalipour",
      venue: "IEEE ICSPCS 2019",
      url: "https://ieeexplore.ieee.org/abstract/document/9008429"
    },
    {
      type: "Conference",
      year: "2018",
      title: "Text to Braille Scanner with Ultra Low Cost Refreshable Braille Display",
      authors: "Coauthor",
      venue: "IEEE GHTC 2018",
      url: "https://ieeexplore.ieee.org/abstract/document/8601552/"
    }
  ],

  experience: [
    {
      role: "Graduate Research Associate",
      org: "PROTON Lab · Arizona State University",
      period: "Aug 2024 – Present",
      bullets: [
        "Engineered adaptive algorithms to detect and mitigate jamming attacks in AirComp IIoT systems.",
        "Built an SDR-based NOMA testbed achieving BER ~10⁻⁵ (far user) and ~10⁻³ (near user)."
      ],
      stack: ["MATLAB", "Python", "Simulink", "ADALM-Pluto"]
    },
    {
      role: "Graduate Teaching Associate",
      org: "ECEE · Arizona State University",
      period: "Jan 2026 – May 2026",
      bullets: [
        "Led EEE 455 Communication Systems labs — digital comms experiments, channel estimation, time alignment, frequency offset, FEC.",
        "Instructed students in GNU Radio for SDR signal acquisition and MATLAB for DSP."
      ],
      stack: ["MATLAB", "GNU Radio", "USRP B210"]
    },
    {
      role: "Project Student",
      org: "Nordic Semiconductor ASA · Trondheim, Norway",
      period: "Sep 2022 – Jul 2023",
      bullets: [
        "Modified the BLE Mesh stack to add two message-prioritization mechanisms for high-load, noisy environments.",
        "Achieved ~20× latency improvement and ~30% packet-drop reduction in noisy conditions.",
        "M.Sc. Thesis: Message Prioritization in Bluetooth Mesh Networks."
      ],
      stack: ["C", "Python", "Zephyr RTOS", "nRF Connect SDK", "nRF52840dk"]
    },
    {
      role: "Summer Intern",
      org: "AiBA AI · Gjøvik, Norway",
      period: "Jun 2022 – Jul 2022",
      bullets: [
        "Automated an AI-based online abuse-and-harassment detection pipeline.",
        "Curated and preprocessed a labeled social-media dataset; benchmarked SOTA detection methods.",
        "Performed competitive landscape analysis to inform product strategy."
      ],
      stack: ["Python", "ML"]
    }
  ],

  projects: [
    {
      name: "HELIOCOMM",
      tag: "DOE-funded",
      summary: "Resilient wireless control link for concentrated-solar fields with tens of thousands of heliostats.",
      details: [
        "Firmware on ADALM-Pluto for the distributed transmitter prototype.",
        "Beacon-based coarse synchronization across distributed transmitters.",
        "LDPC + Convolutional FEC for low-SNR operation.",
        "Sub-second end-to-end latency · <4% PER."
      ],
      metrics: [
        { v: "<4%", k: "Packet Error Rate" },
        { v: "<1s", k: "End-to-end Latency" }
      ]
    },
    {
      name: "Downlink NOMA-QPSK + LDPC",
      tag: "SDR / Simulink",
      summary: "Two-user downlink NOMA chain on Software-Defined Radio with QPSK modulation and LDPC coding.",
      details: [
        "Full TX/RX DSP chain in Simulink + ADALM-Pluto.",
        "Reliable decoding via error correction.",
        "Measured BER far/near users on benchtop hardware."
      ],
      metrics: [
        { v: "10⁻⁵", k: "BER · Far user" },
        { v: "10⁻³", k: "BER · Near user" }
      ]
    },
    {
      name: "Distributed Power Control in AirComp",
      tag: "Game Theory · HIL",
      summary: "Hardware-in-the-loop SDR testbed for game-theoretic distributed power control in over-the-air computation.",
      details: [
        "Evaluated single-cell and multi-cell configurations.",
        "Coupled simulation to live RF for experimental validation."
      ],
      metrics: []
    },
    {
      name: "OTFS Transceiver",
      tag: "PlutoSDR · DSP",
      summary: "Point-to-point Orthogonal Time Frequency Space transceiver on ADALM-Pluto.",
      details: [
        "Full transmitter and receiver DSP chain.",
        "Message-passing and MMSE detectors for symbol recovery."
      ],
      metrics: []
    }
  ],

  education: [
    {
      degree: "Ph.D. in Computer Engineering",
      school: "Arizona State University",
      where: "Tempe, AZ · PROTON Lab",
      period: "Jan 2025 – Present",
      detail: "Security in Over-the-Air Computation; SDR testbed for wireless protocols.",
      courses: ["Probability & Random Processes", "AI-based Decision-making in Dynamic Systems", "Foundations of Algorithms"]
    },
    {
      degree: "Ph.D. in Computer Engineering (transferred)",
      school: "University of New Mexico",
      where: "Albuquerque, NM · PROTON Lab",
      period: "Aug 2024 – Dec 2024",
      detail: "Coursework in Reinforcement Learning.",
      courses: ["Reinforcement Learning"]
    },
    {
      degree: "M.Sc. in Communication Technology",
      school: "Norwegian University of Science and Technology",
      where: "Trondheim, Norway",
      period: "Conferred Oct 2023",
      detail: "M.Sc. Thesis with Nordic Semiconductor — Message Prioritization in BLE Mesh Networks.",
      courses: []
    },
    {
      degree: "B.Sc. in Electrical & Electronic Engineering",
      school: "Bangladesh University of Engineering and Technology",
      where: "Dhaka, Bangladesh",
      period: "Conferred Jan 2019",
      detail: "Major: Communication · Minor: Electronics.",
      courses: ["Digital Communication", "DSP", "Random Signals", "Electromagnetics", "Optical Fiber Comm."]
    }
  ],

  skills: {
    Languages: ["Python", "MATLAB", "C"],
    "Frameworks & Tools": ["Simulink", "GNU Radio", "Zephyr RTOS", "nRF Connect SDK", "Pandas", "SciPy", "Docker", "Wireshark", "GitHub"],
    Hardware: ["ADALM-Pluto SDR", "USRP B210", "nRF52840dk", "nRF7002dk", "ESP32", "Oscilloscope"],
    Wireless: ["Bluetooth Mesh", "BLE", "MQTT", "LTE", "5G PHY"],
    "Operating Systems": ["Linux", "Windows"]
  },

  memberships: [
    { name: "IEEE Student Member", period: "2025 – Present", where: "Region 6 · Phoenix" },
    { name: "IEEE Member (R10)", period: "2016 – 2021", where: "Bangladesh" },
    { name: "Tekna Norge", period: "2022 – 2023", where: "Trondheim, Norway" }
  ]
};
