---
layout: page
title: Neural Text-To-Speech
description: High-fidelity speech synthesis using PyTorch, Whisper, and EnCodec
img: assets/img/tts_bg.jpg
importance: 1
category: Projects
giscus_comments: true
---

This project focuses on the development of a neural Text-To-Speech (TTS) system built from scratch in **PyTorch**. The goal is to achieve high-fidelity speech synthesis by leveraging state-of-the-art representation learning techniques.

The system integrates the **WhisperTokenizer** for robust text encoding and utilizes **EnCodec** with Residual Vector Quantization (RVQ) to handle high-quality audio reconstruction.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/tts_arch.jpg" title="System Architecture" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/mimi.jpg" title="RVQ Visualization" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    System components: Left, the overall architecture. Right, visualization of Mimi.
</div>


### Technical Implementation

The core of the project relies on **EnCodec**, a high-fidelity neural audio codec. Instead of predicting raw waveforms or standard mel-spectrograms, the model predicts discrete audio tokens derived from the EnCodec codebook. This allows the model to capture fine-grained acoustic details.

For the linguistic front-end, I utilized the **WhisperTokenizer**. Since Whisper is trained on a massive dataset of diverse audio, its tokenizer provides a robust representation of text that aligns well with speech patterns, making the synthesis more natural.

### Current Status

This project is currently a **Work In Progress (WIP)**. The repository contains the training loop, data preprocessing pipelines for custom datasets, and the inference scripts.

You can view the source code and track progress on GitHub:

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
    <div class="repo p-2 text-center">
        <a href="https://github.com/iliasslasri/tts" class="btn btn-outline-primary">View Project on GitHub</a>
    </div>
</div>

