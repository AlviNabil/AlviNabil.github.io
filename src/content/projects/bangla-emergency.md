---
title: "Bangla Emergency Post Classification"
blurb: "A nine-class emergency triage system for Bangla social media, built on a dataset that did not exist before."
year: "2023"
role: "Undergraduate thesis · first author"
stack: ["Python", "PyTorch", "Transformers", "XLM-RoBERTa", "Streamlit"]
repo: "https://github.com/AlviNabil/Bangla-Emergency-Post-From-Social-Media"
paper: "eict-2023-bangla-emergency"
featured: true
order: 1
---

Bangla has around 230 million speakers and almost no NLP infrastructure. When
something goes wrong — a fire, an accident, an urgent call for blood — the posts
that need attention are buried in a feed nobody is triaging.

The blocking problem was that no labelled dataset existed, so I built one:
5,836 posts hand-annotated across nine emergency categories. The distribution is
genuinely imbalanced rather than artificially balanced, because that is what the
deployment condition actually looks like — crime is 42.7% of the data and
pandemic is 2.5%.

I then fine-tuned several transformer architectures on it and compared them
against classical baselines. Weights and data are both on the Hugging Face Hub,
and a Streamlit app runs inference on a pasted post.

Every model was fine-tuned on a single GTX 1070 Ti, which put a hard ceiling on
how many configurations could be tried — roughly half an hour per run for
XLM-RoBERTa at ten epochs, and impractical on CPU.
