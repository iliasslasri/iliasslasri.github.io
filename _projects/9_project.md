---
layout: page
title: FSPEN Implementation
description: An ultra-lightweight network for real-time speech enhancement (<100k params)
img: assets/img/fspen.png
importance: 1
category: Projects
giscus_comments: true
---

This project implements **[FSPEN (Full-band Sub-band Path Extension Network)](https://ieeexplore.ieee.org/document/10446016)**, an ultra-lightweight speech enhancement model with minimal latency and strictly limited parameters ($<100$k).


We developed the **first unofficial PyTorch implementation** of this paper, including full training and evaluation pipelines. I benchmarked the model and conducted ablation studies.

### Code & Demo

* <i class="fab fa-github"></i> **GitHub:** [iliasslasri/fspen](https://github.com/iliasslasri/fspen)
* <i class="fas fa-rocket"></i> **Live Demo:** [Hugging Face Spaces](https://huggingface.co/spaces/iliasslasri/fspen) (restart the space if it's sleeping ;))



### The Architecture

FSPEN introduces a **Dual Path Extension (DPE)** mechanism. Instead of processing heavy inter-frame computations, it splits features into parallel groups processed by small GRUs. This increases the model's capacity (parameters) without increasing the operations per second (MACs).

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/fspen.png" title="FSPEN Framework" class="img-fluid rounded z-depth-1" %}
</div>
<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/dpe.png" title="Path Extension Mechanism" class="img-fluid rounded z-depth-1" %}
</div>

<div class="caption">
    Top: The Global FSPEN framework showing sub-band allocation. Down: The Path Extension mechanism that splits processing into parallel groups to save compute power.
</div>



### Key Findings

Through my ablation study on the VoiceBank+Demand dataset, I verified the "sweet spot" for model configuration:

* **Optimal Config:** Group size $P=8$, Depth $DPE=3$.
* **Performance:** Achieved **2.95 PESQ** and **0.92 STOI**.
* **Efficiency:** Only **87k Parameters** and **80M MACs**, making it viable for edge deployment.
