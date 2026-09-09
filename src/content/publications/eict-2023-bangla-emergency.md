---
title: "Bangla Emergency Post Classification on Social Media Using Transformer-Based BERT Models"
authors:
    - "Alvi Ahmmed Nabil"
    - "Dola Das"
    - "Md. Shahidul Salim"
    - "Shamsul Arifeen"
    - "H. M. Abdul Fattah"
venue: "2023 6th International Conference on Electrical Information and Communication Technology (EICT)"
venueShort: "IEEE EICT 2023"
year: 2023
location: "Khulna, Bangladesh"
type: "conference"
url: "https://ieeexplore.ieee.org/document/10427900"
doi: "10.1109/EICT61409.2023.10427900"
pages: "1-6"
code: "https://github.com/AlviNabil/Bangla-Emergency-Post-From-Social-Media"
models: "https://huggingface.co/NightRaven/bangla-emergency-post-classification"
dataset: "https://huggingface.co/datasets/NightRaven/bangla-emergency-posts"
tags:
    - "NLP"
    - "Low-resource languages"
    - "Transformers"
bibtex: |
    @INPROCEEDINGS{10427900,
      author={Nabil, Alvi Ahmmed and Das, Dola and Salim, Md. Shahidul and Arifeen, Shamsul and Fattah, H. M. Abdul},
      booktitle={2023 6th International Conference on Electrical Information and Communication Technology (EICT)},
      title={Bangla Emergency Post Classification on Social Media using Transformer Based BERT Models},
      year={2023},
      volume={},
      number={},
      pages={1-6},
      keywords={Social networking (online);Disasters;Text categorization;Artificial neural networks;Machine learning;Transformers;Task analysis;Text Classification;Transformers;BERT;Emergency Post;Natural Language Processing(NLP)},
      doi={10.1109/EICT61409.2023.10427900}}
---

Time-sensitive emergency posts on Bangla social media go unnoticed because no
automated triage exists for a language with very little NLP infrastructure. This
work builds the missing dataset and benchmarks transformer models on it.

I collected and annotated 5,836 posts across nine emergency categories —
accident, blood, crime, fire, natural disaster, pandemic, suicide, war and
weather — split 3,267 / 819 / 1,750 for training, validation and test. The
classes are heavily imbalanced by nature: crime accounts for 42.7% of posts and
pandemic for 2.5%, which is what makes the task harder than its size suggests.

Several transformer architectures were fine-tuned and compared against classical
baselines. Both the trained weights and the dataset are published on the Hugging
Face Hub, and the repository ships a Streamlit app that runs inference on a
pasted post.
