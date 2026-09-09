---
title: "VisualML"
blurb: "An iOS app that draws every intermediate state of a machine learning pipeline, so the middle stops being a black box."
year: "2026"
role: "Solo project"
stack: ["Swift", "SwiftUI", "Python", "NumPy", "Accelerate"]
repo: "https://github.com/AlviNabil/VisualML"
cover: "/img/visualml/lsa.png"
featured: true
order: 2
---

Most machine learning tutorials show you an input and an output and hide
everything in between. VisualML makes the middle visible: text becomes a count
matrix, becomes a weighted matrix, becomes a two-dimensional map, becomes a
decision boundary — and every stage is drawn on screen with live controls.

Flip *raw counts* to *TF-IDF* and watch ubiquitous words dim while rare telling
words brighten. Drag the learning rate and watch the boundary rotate. Press play
on the training screen and gradient descent replays iteration by iteration, the
line starting from an arbitrary guess at 59% accuracy and walking into place.

The regression half is fit two ways side by side — the closed-form normal
equations against iterative gradient descent — so you can watch the iterative
solution converge onto the exact answer, and see precisely where too large a
learning rate diverges. Logistic regression has no closed form, and the app says
so, along with why cross-entropy rather than squared error is the right loss for
a binary target.

All the numerical work is done in Python with hand-written NumPy and shipped
into the app as JSON. SwiftUI fits nothing itself — it replays a solution that
already exists, which is what keeps the sliders responsive without a Python
runtime on the phone.
