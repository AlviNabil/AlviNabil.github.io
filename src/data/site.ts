export const site = {
    name: "Alvi Ahmmed Nabil",
    firstName: "Alvi",
    restName: "Ahmmed Nabil",
    description: "AI/ML researcher and engineer in NLP, GPU computing, on-device AI, and Human-AI interaction. Also interested in computer vision, astrophysics, and fractals.",
    headline: "AI/ML Researcher & Engineer",
    role: "Senior Software Engineer, bKash Ltd.",
    seeking: "Seeking PhD admission for Fall 2027",
    email: "alvi.nabil.aan@gmail.com",
    phone: "+8801915300005",
    github: "https://github.com/AlviNabil",
    linkedin: "https://www.linkedin.com/in/alvi-nabil",
    huggingface: "https://huggingface.co/NightRaven",
    url: "https://alvinabil.github.io",
};

export const researchStatement =
    "My goal is to make AI models efficient enough to run on the hardware people already own.";

export const keywords = [
    "GPU computing",
    "On-device AI",
    "Human-AI interaction",
    "NLP",
    "Efficient ML systems",
];

export const interests = [
    {
        title: "GPU computing",
        body: "How transformer training and inference actually map onto hardware, and where the throughput goes. Eventually how to make it efficient.",
    },
    {
        title: "On-device AI",
        body: "Inference on a mobile device, where memory, battery and privacy set the limits.",
    },
    {
        title: "Human-AI interaction",
        body: "Making model behavior legible to the people using it: how uncertainty gets shown, how users correct mistakes, and how a system should behave when it is wrong.",
    },
    {
        title: "Model optimization",
        body: "Quantization, pruning and distillation: making a trained model cheap enough to serve without losing what it learned.",
    },
    {
        title: "Federated learning",
        body: "Training across decentralized data where moving the data to the model is not an option.",
    },
];

export const tests = [
    {
        name: "GRE",
        detail: "Quantitative 167 · Verbal 155 (March 2026)",
    },
    {
        name: "IELTS",
        detail: "Overall 8.0 (Listening 8.5 · Reading 9.0 · Writing 7.0 · Speaking 6.5)",
    },
];

export const activities = [
    {
        title: "HACK (Hardware Acceleration Club), KUET",
        detail: "Batch representative.",
    },
    {
        title: "BitFest 2019, KUET",
        detail: "Organizer and volunteer.",
    },
    {
        title: "Competitive programming",
        detail: "500+ problems solved across LeetCode, Codeforces and UVa.",
    },
];

export const experience = [
    {
        org: "bKash Ltd.",
        role: "Senior Software Engineer",
        period: "April 2023 – present",
        location: "Dhaka, Bangladesh",
        points: [
            "Build and ship features on the app team for a mobile financial service serving over 80 million users: P2P Send Money, Savings, Remittance, Mobile Recharge, Merchant Payment and NFC Payment.",
            "Worked with the advanced research team on a debit and credit card scanner: the app captures a card image, transmits it encrypted for OCR, and returns extracted fields in real time to remove manual entry from wallet onboarding.",
            "Kept that round trip fast and reliable across millions of onboarding requests, which is where I first saw what it costs to serve a model in production.",
            "Overhauled legacy Dart modules into a modern Clean Architecture standard, untangling UI from data layers to make the app more resilient and easier to scale."
        ],
        stack: ["Flutter", "Dart", "PaddleOCR"],
    },
];

export const education = [
    {
        org: "Khulna University of Engineering & Technology (KUET)",
        role: "BSc in Computer Science & Engineering",
        grade: "CGPA 3.55 / 4.00 (3.82 average in the last four semesters)",
        period: "January 2018 – March 2023",
        location: "Khulna, Bangladesh",
        points: [
            "Undergraduate thesis in natural language processing, published as first author at IEEE EICT 2023.",
            "Solved 500+ problems across LeetCode, Codeforces and UVa through competitive programming.",
        ],
    },
    {
        org: "Government Syed Hatem Ali College",
        role: "Higher Secondary Certificate, Science",
        grade: "GPA 5.00 / 5.00",
        period: "2017",
        location: "Barishal, Bangladesh",
        points: [],
    },
    {
        org: "Barishal Zilla School",
        role: "Secondary School Certificate, Science",
        grade: "GPA 5.00 / 5.00",
        period: "2015",
        location: "Barishal, Bangladesh",
        points: [],
    },
];

export const awards = [
    {
        title: "Dean's List, Faculty of Electrical and Electronic Engineering, KUET",
        items: [
            "Outstanding academic performance in the Fourth Year Examination, Academic Session 2020–2021.",
        ],
        cvItems: [
            "Outstanding academic performance, average GPA 3.91 / 4.00; Fourth Year Examination, Academic Session 2020–2021.",
        ],
    },
    {
        title: "Bangladesh Mathematical Olympiad",
        items: [
            "Regional Champion, 2014, Barishal, Bangladesh; Level: Secondary",
            "National Runner-Up, 2012, Bangladesh; Level: Junior",
            "Regional Champion, 2012, Barishal, Bangladesh; Level: Junior",
            "National Runner-Up, 2009, Bangladesh; Level: Primary",
            "Regional Champion, 2009, Barishal, Bangladesh; Level: Primary",
        ],
    },
    {
        title: "Bangladesh Astronomical Olympiad",
        items: [
            "First Runner-Up, 2014, Bangladesh; Level: Secondary",
        ],
    },
];
