---
title: "cardOCR"
blurb: "Scan a bank card, get structured editable fields back, and store them encrypted on the device."
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
expiry, cardholder name and network — editable, validated, and stored under
AES-256-GCM.

Because it handles real financial data, the security model came first rather
than last. Only ciphertext is written to disk. The backend holds nothing: the
image is read and the response is sent, with nothing persisted.

Two details carry most of the accuracy. The capture is cropped to the card
cutout *before* upload, so the OCR engine never wastes attention on the desk
behind the card, and the frozen preview shows exactly the pixels being read.
And the card number is checked against the Luhn algorithm as you type, which
matters because embossed digits are the hardest thing on a card to recognize —
a wrong digit disables saving instead of silently storing a broken record.

The capture is cropped client-side before upload, so the payload is a fraction
of a full photo and the OCR engine has less image to scan — the two changes that
kept the round trip inside a usable onboarding flow.
