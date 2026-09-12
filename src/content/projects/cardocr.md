---
title: "cardOCR"
blurb: "Scan a bank card, run OCR on a backend service, and get structured editable fields back, stored encrypted on the device."
year: "2026"
role: "Solo project"
stack: ["Flutter", "Dart", "FastAPI", "PaddleOCR", "AES-256-GCM"]
repo: "https://github.com/AlviNabil/CardOCR"
cover: "/img/cardocr/02-result-boxes.png"
featured: true
order: 3
---

A Flutter app photographs a debit or credit card, a FastAPI service running
PaddleOCR reads it, and the app turns the recognized lines into a card number,
expiry, cardholder name and network. Those fields are editable, validated, and
stored under AES-256-GCM.

Because it handles real financial data, I worked out the security model before
writing any of the app. Only ciphertext is written to disk. The backend holds nothing: the
image is read and the response is sent, with nothing persisted.

Two things do most of the work for accuracy. The capture is cropped to the card
cutout before it is uploaded, which keeps the OCR engine off the desk behind the
card and cuts the payload to a fraction of a full photo. The frozen preview then
shows exactly the pixels being read.
And the card number is checked against the Luhn algorithm as you type, which
matters because embossed digits are the hardest thing on a card to
recognize. A wrong digit disables saving, so a broken record never gets stored
quietly.

Keeping that round trip inside a usable onboarding flow is most of why those two
choices exist.
