export const site = {
    name: "Alvi Ahmmed Nabil",
    firstName: "Alvi",
    restName: "Ahmmed Nabil",
    tagline: "Efficient AI systems — GPU computing, model optimization, and machine learning that survives contact with production.",
    role: "Senior Software Engineer, bKash Ltd.",
    seeking: "Seeking PhD admission for Fall 2027",
    email: "alvi.nabil.aan@gmail.com",
    github: "https://github.com/AlviNabil",
    linkedin: "https://www.linkedin.com/in/alvi-nabil",
    huggingface: "https://huggingface.co/NightRaven",
    url: "https://alvinabil.github.io",
};

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
        body: "Inference under a phone's memory, battery and privacy constraints rather than a cluster's.",
    },
    {
        title: "Human-AI interaction",
        body: "Making model behavior legible to the people using it — how uncertainty surfaces, how users correct mistakes, and what an interface owes someone when the model is wrong.",
    },
    {
        title: "Model optimization",
        body: "Quantization, pruning and distillation — making a trained model cheap enough to serve without giving up what it learned.",
    },
    {
        title: "Federated learning",
        body: "Training across decentralized data where moving the data to the model is not an option.",
    },
];

export const experience = [
    {
        org: "bKash Ltd.",
        role: "Senior Software Engineer",
        period: "April 2023 — present",
        location: "Dhaka, Bangladesh",
        points: [
            "Build and ship features on the app team for a mobile financial service serving over 80 million users — P2P Send Money, Savings, Remittance, Mobile Recharge, Merchant Payment and NFC Payment.",
            "Worked with the advanced research team on a debit and credit card scanner: the app captures a card image, transmits it encrypted for OCR, and returns extracted fields in real time to remove manual entry from wallet onboarding.",
            "Kept that round trip fast and reliable at the scale of millions of onboarding requests — first-hand exposure to the cost and latency constraints of serving ML in production rather than in isolation.",
            "Overhauled legacy Dart modules into a modern Clean Architecture standard, untangling UI from data layers to make the app more resilient and easier to scale."
        ],
        stack: ["Flutter", "Dart", "PaddleOCR"],
    },
];

export const education = [
    {
        org: "Khulna University of Engineering & Technology (KUET)",
        role: "BSc in Computer Science & Engineering",
        period: "Graduated March 2023",
        location: "Khulna, Bangladesh",
        points: [
            "Undergraduate thesis in natural language processing, published as first author at IEEE EICT 2023.",
            "Solved 500+ problems across LeetCode, Codeforces and UVa through competitive programming.",
        ],
    },
];

export const awards = [
    {
        title: "Dean's List — Faculty of Electrical and Electronic Engineering, KUET",
        detail: "Outstanding academic performance in the Fourth Year Examination, average GPA 3.91 / 4.00 (Academic Session 2020–2021).",
    },
    {
        title: "Bangladesh Mathematical Olympiad",
        detail: "National Runner-Up (2009 Primary, 2012 Junior); Regional Champion, Barishal (2009 Primary, 2012 Junior, 2014 Secondary).",
    },
];
