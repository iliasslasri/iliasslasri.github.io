---
layout: post
title: "A Curated Collection of AI & Audio Resources"
date: 2025-12-17 09:00:00-0400
description: A comprehensive list of resources, papers, and courses covering Audio ML, Transformers, LLMs, and Efficient Deep Learning that I find valuable.
tags: machine-learning audio llm deep-learning resources
categories: learning
related_posts: false
---

This is a living collection of resources, papers, and tools that I have found useful for Deep Learning, specifically focusing on Audio ML, LLMs, and ML Systems efficiency.

## Good blogs
* **[Ahead of AI by sebastian raschka](https://magazine.sebastianraschka.com/)**.

## Audio ML & Signal Processing

A mix of fundamental theory and state-of-the-art applications in audio.

* **[Loss Functions in Audio ML](https://www.soundsandwords.io/audio-loss-functions/)**: A great overview of how we measure error in audio domains.
* **[Deep Filtering Paper](https://arxiv.org/pdf/1904.08369)**: Essential reading for speech enhancement.
* **[Whisper Timestamped](https://github.com/linto-ai/whisper-timestamped)**: An extension for Multilingual Automatic Speech Recognition that adds word-level timestamps and confidence scores.
* **[Sequence Modeling With CTC](https://distill.pub/2017/ctc/)**: An interactive Distill.pub article explaining Connectionist Temporal Classification.

### Books & Theory

* **[Music Information Retrieval (MIR)](https://musicinformationretrieval.com/)**: A comprehensive guide to MIR.
* **[Digital Signals Theory](https://brianmcfee.net/dstbook-site/content/intro.html)**: An accessible introduction by Brian McFee.

---

## Transformers & LLMs

Resources to understand the backbone of modern AI, from attention mechanisms to fine-tuning strategies.

### Architecture Internals

* **[The Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/)**: Jay Alammar's classic visual guide.
* **[Formal Algorithms for Transformers](https://arxiv.org/pdf/2207.09238)**: DeepMind's rigorous formalization of the architecture.
* **[Making Deep Learning Go Brrrr From First Principles](https://horace.io/brrr_intro.html)**: Understanding hardware utilization.
* **[Mastering Tensor Dimensions in Transformers](https://huggingface.co/blog/not-lain/tensor-dims)**: A guide to keeping track of shapes in Hugging Face.
* **[Attention is off by one](https://www.evanmiller.org/attention-is-off-by-one.html)**: A critical look at Softmax implementation nuances.
* **[Some Intuition on Attention](https://eugeneyan.com/writing/attention/)**: Eugene Yan’s breakdown of the mechanism.
* **[Pre-LN Transformer](https://sh-tsang.medium.com/review-pre-ln-transformer-on-layer-normalization-in-the-transformer-architecture-b6c91a89e9ab)**: A review on why Layer Normalization placement matters.
* **[Grouped Query Attention](https://arxiv.org/pdf/2305.13245)**: The paper introducing GQA for efficient inference.

### Large Language Models (LLMs)

* **[The Illustrated GPT-2](https://jalammar.github.io/illustrated-gpt2/)** & **[The Illustrated BERT](http://jalammar.github.io/illustrated-bert/)**: Visual guides by Jay Alammar.
* **[Improving Language Understanding by Generative Pre-Training (GPT-1)](https://www.mikecaptain.com/resources/pdf/GPT-1.pdf)**: The original paper that started the GPT series.
* **[Decoding Strategies in LLMs](https://huggingface.co/blog/mlabonne/decoding-strategies)**: An overview of greedy search, beam search, and sampling methods.

### Training & Fine-Tuning (DPO & LoRA)

* **[Direct Preference Optimization (DPO) Explained](https://www.tylerromero.com/posts/2024-04-dpo/)**: An in-depth look at preference optimization.
* **[LLM Alignment: On-Policy vs. Off-Policy](https://thesalt.substack.com/p/llm-alignment-on-policy-vs-off-policy)**: Understanding data selection for alignment.
* **[LoRA Without Regret](https://thinkingmachines.ai/blog/lora/)**: Insights on Low-Rank Adaptation by Thinking Machines.

---

## Deep Learning Engineering & Systems

Practical tools, hardware architectures, and foundational concepts.

### Engineering & Frameworks

* **[Lightning + Hydra Template](https://github.com/ashleve/lightning-hydra-template)**: A robust starting point for PyTorch Lightning projects.
* **[PyTorch Autograd Engine](https://pytorch.org/blog/overview-of-pytorch-autograd-engine/)**: An overview of how gradients are calculated under the hood.
* **[Remote Tensorboard](https://blog.yyliu.net/remote-tensorboard/)**: A tip on how to route remote visualization ports to your local machine.

### Core Concepts

* **Normalization**: [Batch Normalization (Paper)](https://arxiv.org/abs/1502.03167) & [Layer Normalization (Paper)](https://arxiv.org/abs/1607.06450).
* **RNNs**: [Understanding LSTM Networks](http://colah.github.io/posts/2015-08-Understanding-LSTMs/) (Colah's Blog).
* **Basics**: [Kilian Weinberger's Course](https://www.youtube.com/@kilianweinberger698) (Cornell) for linear models and fundamentals.

### Hardware & Architecture

* **[XiangShan (Open Source CPU)](https://github.com/OpenXiangShan/XiangShan)**: Top-performing open-source RISC-V processor. ([Docs](https://docs.xiangshan.cc/zh-cn/latest/)).

---

## Courses

Specialized coursework for deep diving into specific verticals.

* **[MIT: TinyML and Efficient Deep Learning Computing](https://hanlab.mit.edu/courses/2024-fall-65940)** (Fall 2024)
* **[Cornell: Machine Learning Hardware and Systems](https://abdelfattah-class.github.io/ece5545/)**
* **[Hugging Face: Audio Course](https://huggingface.co/learn/audio-course)**


### Useful Commands & scripts
```bash
#!/bin/bash
#SBATCH --job-name=my_job
#SBATCH --output=result.out
#SBATCH --partition=P100
#SBATCH --gres=gpu:1 
#SBATCH --time=10:00:00

srun python script.py
```
```bash
sinfo
sbatch job.sh
```

```bash
squeue -u user # see jobs
tail -f result.out
scancel <JOBID>
```