Audgen

<div align="center">

<img src="assets/logo.png" alt="Audgen Logo" width="120" height="120" style="border-radius: 20px; box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);">

<h1 style="margin-top: 20px; font-size: 3rem;">Audgen Studio</h1>

<p style="font-size: 1.2rem; max-width: 600px; margin: 0 auto; color: #9ca3af;">
The ultra-lightweight, neural audio synthesis engine designed for storytellers, creators, and developers. Powered by <b>AbhiBots API</b> and <b>ElevenLabs</b>.
</p>

<a href="https://audgen.pages.dev"><strong>Explore the Live Demo »</strong></a>





<a href="#-features">Features</a> ·
<a href="#-installation">Installation</a> ·
<a href="#-api-integration">API Access</a>

</div>

⚡ Overview

Audgen is a streamlined text-to-speech platform built to demonstrate the power of modern neural audio generation without the bloat. It provides a clean, "dark-mode first" interface for generating lifelike speech, managing voice IDs, and exporting high-quality MP3 audio.

The platform is built using pure HTML5, CSS3, and Vanilla JavaScript, ensuring maximum performance and zero dependency overhead on the client side.

🎥 Desktop Tutorial

See Audgen in action. This tutorial covers selecting voices, adjusting stability, and generating audio.

<div align="center">
<video src="assets/Tutorial-Desktop.mp4" width="100%" controls preload="metadata"></video>





<em>(If the video does not play, please view it directly in the <a href="assets/Tutorial-Desktop.mp4">assets folder</a>.)</em>
</div>

✨ Features

🎙️ Neural Voice Generation: Access ultra-realistic voices powered by ElevenLabs v2 models.

🎛️ Precision Controls: Fine-tune Stability and Similarity Boost to perfect the emotional delivery of the AI.

🆔 Custom Voice IDs: Seamless support for custom ElevenLabs Voice IDs—just paste and generate.

⚡ Real-Time Streaming: Optimized for low latency, delivering audio blobs directly to the browser.

🎨 Glassmorphism UI: A modern, responsive interface featuring dynamic gradients, glowing accents, and smooth GSAP-like transitions.

📱 Mobile Responsive: Fully functional on mobile devices with a custom touch-friendly navigation menu.

🛠️ Architecture & Tech Stack

Audgen adheres to a No-Build philosophy for the frontend, utilizing platform-native technologies for speed and sustainability.

Component

Technology

Description

Frontend

HTML5 / CSS3

Semantic markup with CSS Variables for theming.

Logic

Vanilla JS (ES6+)

async/await for API calls, native DOM manipulation.

API Provider

AbhiBots / ElevenLabs

Backend neural processing and audio synthesis.

Hosting

Cloudflare Pages

Lightning-fast edge delivery.

Styling

CSS Grid / Flexbox

Responsive layouts with hardware-accelerated animations.

🚀 Installation & Setup

To run Audgen locally on your machine:

Clone the Repository

git clone [https://github.com/yourusername/audgen.git](https://github.com/yourusername/audgen.git)
cd audgen


Install Dependencies (Optional for Dev)
We use Wrangler for local development to simulate Cloudflare Pages.

npm install


Run Development Server

npm run dev


Or simply open index.html in your browser via Live Server.

🔌 API Integration

Audgen serves as a reference implementation for the AbhiBots TTS API.

Endpoint: POST /api/generate

Payload Example:

{
  "text": "Welcome to the future of audio synthesis.",
  "voice_id": "21m00Tcm4TlvDq8ikWAM",
  "provider": "eleven",
  "stability": 0.5,
  "similarity": 0.75
}


Note: To request your own API keys for integration into third-party apps, please visit the API Request Page.

📂 Project Structure

audgen/
├── assets/             # Images, icons, and video tutorials
├── builds/             # Minified CSS/JS (production assets)
├── index.html          # Landing Page
├── voice.html          # Main Studio Interface (Generator)
├── request.html        # API Access Request Form
├── info.html           # Documentation & Architecture Info
├── package.json        # Project metadata & scripts
└── README.md           # Documentation


🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request

📄 License

Distributed under the MIT License. See LICENSE for more information.

<div align="center">
<p>Built with ❤️ by <a href="https://www.google.com/search?q=https://github.com/aurasqlm">aurasqlm</a></p>
<p>Powered by <strong>AbhiBots</strong></p>
</div>
