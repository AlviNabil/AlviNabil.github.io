---
title: "Bangla Emergency Post Classification"
blurb: "A nine-class emergency triage system for Bangla social media, built on a dataset that did not exist before."
year: "2023"
role: "Undergraduate thesis · first author"
tag: "Thesis"
stack: ["Python", "PyTorch", "Transformers", "XLM-RoBERTa", "Streamlit"]
repo: "https://github.com/AlviNabil/Bangla-Emergency-Post-From-Social-Media"
paper: "eict-2023-bangla-emergency"
featured: true
order: 1
---

Bangla has around 230 million speakers and almost no NLP infrastructure. When
something goes wrong, whether a fire, an accident or an urgent call for blood,
those posts sit in the feed with everything else and nobody is sorting them.

No labelled dataset existed, so I built one: 5,836 posts hand-annotated across
nine emergency categories. I left the class distribution as I found it, because
that is what the real data looks like. Crime is 42.7% of the set and pandemic is
2.5%.

I then fine-tuned several transformer architectures on it and compared them
against classical baselines. Weights and data are both on the Hugging Face Hub,
and a Streamlit app runs inference on a pasted post.

Every model was fine-tuned on a single GTX 1070 Ti, which put a hard ceiling on
how many configurations I could try. XLM-RoBERTa took about half an hour per run
at ten epochs, and was not practical on CPU at all.
