// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects-amp-hackathons",
          title: "projects &amp; hackathons",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-bookshelf",
          title: "bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "post-pesto-vqt-losses-amp-eval-on-reverb",
        
          title: "PESTO (VQT, Losses &amp; Eval on reverb)",
        
        description: "Pitch Estimation with Self-supervised Transposition-Equivariant Objective",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/pesto/";
          
        },
      },{id: "post-a-curated-collection-of-ai-amp-audio-resources",
        
          title: "A Curated Collection of AI &amp; Audio Resources",
        
        description: "A comprehensive list of resources, papers, and courses covering Audio ML, Transformers, LLMs, and Efficient Deep Learning that I find valuable.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/resources/";
          
        },
      },{id: "post-nmf-divergence-derivation-by-me",
        
          title: "NMF Divergence Derivation by ME",
        
        description: "A step-by-step derivation of the Multiplicative Update Rule for Non-negative Matrix Factorization using KL-Divergence.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/nmf/";
          
        },
      },{id: "post-mimi-the-codec-behind-moshi-and-unmute",
        
          title: "Mimi: The Codec behind Moshi and Unmute",
        
        description: "A deep dive into Kyutai&#39;s state-of-the-art neural audio codec, exploring its architecture, quantization, and integration with LLMs.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/mimi/";
          
        },
      },{id: "books-the-fellowship-of-the-ring",
          title: 'The Fellowship of the Ring',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_fellowship/";
            },},{id: "books-the-hobbit",
          title: 'The Hobbit',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_hobbit/";
            },},{id: "projects-mistral-ai-paris-hackathon",
          title: 'Mistral AI Paris Hackathon',
          description: "Fine-tuning a model to live-commentate football matches",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-consumer-edge-ai-hackathon",
          title: 'Consumer Edge AI Hackathon',
          description: "Hugging Face, Meta, Scaleway &amp; EF. On device model optimization and deployment.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-lerobot-hackathon-by-hugging-face",
          title: 'LeRobot Hackathon by Hugging Face',
          description: "Learned about Robotics, Control &amp; RL.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-qrt-data-challenge",
          title: 'QRT Data Challenge',
          description: "Can you guess the winner of the football match? organized by QRT",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-master-dev-france-2023",
          title: 'Master Dev France 2023',
          description: "The largest competitive programming competition in France organized by La Poste. Ranked 74th/250.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-exolegend",
          title: 'Exolegend',
          description: "Robotics Hackathon organized by Exotec. Programming robots to conquer a constantly evolving maze, and destroy the enemy robots.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-neural-text-to-speech",
          title: 'Neural Text-To-Speech',
          description: "High-fidelity speech synthesis using PyTorch, Whisper, and EnCodec",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-fspen-implementation",
          title: 'FSPEN Implementation',
          description: "An ultra-lightweight network for real-time speech enhancement (&lt;100k params)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/iliasslasri", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%69%6C%69%61%73%73%73.%6C%61%73%72%69@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/iliasslasri", "_blank");
        },
      },];
