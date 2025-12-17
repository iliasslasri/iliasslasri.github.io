---
layout: page
title: Mistral AI Paris Hackathon
description: Fine-tuning a model to live-commentate football matches
img: assets/img/mistral_ai_hackathon.avif
importance: 1
category: Hackathons
related_publications: false
---
<div class="row justify-content-sm-center">
    <div class="col-sm-5 mt-2 mt-md-0">
        {% include figure.liquid path="assets/img/mistral_ai_hackathon.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
In this hackathon, we took on the challenge of fine-tuning a model to generate live commentary for football matches. The goal was to bridge computer vision and Large Language Models (LLMs) to create a dynamic, descriptive audio experience from raw video data.


The model was trained on a dataset of open-source comments we collected to learn the specific cadence and vocabulary of sports commentators. 

To achieve real-time description, we built a pipeline that:
1.  Extracts player and ball positions from the video stream.
2.  Feeds this structured spatial data constantly into a fine-tuned Mistral model.
3.  Generates play-by-play commentary.

You can explore the code and technical details in our <a href="https://github.com/iliasslasri/Mistral.ai-hackathon">[repository](https://github.com/iliasslasri/Mistral.ai-hackathon)</a> or <a href="https://devpost.com/software/mistralcommentator">[devpost](https://devpost.com/software/mistralcommentator)</a>.