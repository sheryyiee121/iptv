"use client";
import React from 'react';

const movieSlides = [
    { src: "https://image.tmdb.org/t/p/w300/qhb1qOilapbapxWQn9jtRCMwXJF.jpg", label: "Wonka" },
    { src: "https://image.tmdb.org/t/p/w300/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg", label: "Barbie" },
    { src: "https://image.tmdb.org/t/p/w300/f496cm9enuEsZkSPzCwnTESEK5s.jpg", label: "Friends" },
    { src: "https://image.tmdb.org/t/p/w300/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg", label: "Oppenheimer" },
    { src: "https://image.tmdb.org/t/p/w300/gPbM0MK8CP8A174rmUwGsADNYKD.jpg", label: "Shrek" },
    { src: "https://image.tmdb.org/t/p/w300/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg", label: "The Batman" },
    { src: "https://image.tmdb.org/t/p/w300/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg", label: "Spider-Man" },
    { src: "https://image.tmdb.org/t/p/w300/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg", label: "The Marvels" }
];

const sportsSlides = [
    { src: movieSlides[0].src, label: "CBS SPORTS" },
    { src: movieSlides[1].src, label: "UFC PACK" },
    { src: movieSlides[2].src, label: "beIN SPORTS" },
    { src: movieSlides[3].src, label: "ESPN+ PACK" },
    { src: movieSlides[4].src, label: "SPORTS PACK" },
    { src: movieSlides[5].src, label: "Discovery" },
    { src: movieSlides[6].src, label: "LA LIGA" },
    { src: movieSlides[7].src, label: "DIRECTV SPORTS" }
];

const stats = [
    { value: "6 Years", sub: "In Business" },
    { value: "+5,400", sub: "Clients" },
    { value: "+150,000", sub: "Films & Series" },
    { value: "+22,000", sub: "Channels" }
];

export default function Sliders() {
    return (
        <>
            <style>{`
        .sliders-section {
          width: 100%;
          background: #000;
          padding: 60px 0 50px;
          overflow: hidden;
        }

        .slider-track-wrapper {
          width: 100%;
          overflow: hidden;
          position: relative;
          mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
        }

        .slider-track {
          display: flex;
          gap: 16px;
          width: max-content;
        }

        .slider-track.scroll-right {
          animation: scrollRight 35s linear infinite;
        }

        .slider-track.scroll-left {
          animation: scrollLeft 40s linear infinite;
        }

        .slider-track:hover {
          animation-play-state: paused;
        }

        @keyframes scrollRight {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scrollLeft {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .sport-card {
          flex-shrink: 0;
          width: 160px;
          height: 110px;
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          background: #111;
          border: 1px solid #222;
          transition: transform 0.3s, box-shadow 0.3s;
          cursor: pointer;
        }

        .sport-card:hover {
          transform: scale(1.06);
          box-shadow: 0 0 20px rgba(59,130,246,0.35);
          border-color: #3b82f6;
        }

        .sport-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .sport-card .card-label {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 6px 8px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.8px;
          color: #fff;
          background: linear-gradient(transparent, rgba(0,0,0,0.85));
          text-align: center;
        }

        .vod-heading {
          text-align: center;
          padding: 40px 24px 30px;
          font-family: Arial, sans-serif;
          font-size: clamp(22px, 3vw, 32px);
          font-weight: 900;
          color: #fff;
          letter-spacing: 0.5px;
        }

        .vod-heading span {
          color: #3b82f6;
        }

        .seo-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        .movie-card {
          flex-shrink: 0;
          width: 170px;
          height: 250px;
          border-radius: 14px;
          overflow: hidden;
          position: relative;
          background: #111;
          border: 1px solid #1a1a1a;
          transition: transform 0.35s, box-shadow 0.35s;
          cursor: pointer;
        }

        .movie-card:hover {
          transform: scale(1.07);
          box-shadow: 0 8px 30px rgba(59,130,246,0.3);
          border-color: #3b82f6;
        }

        .movie-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .movie-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(transparent 50%, rgba(0,0,0,0.7));
          pointer-events: none;
        }

        .stats-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 48px;
          flex-wrap: wrap;
          padding: 50px 24px 10px;
          max-width: 900px;
          margin: 0 auto;
        }

        .stat-item {
          text-align: center;
        }

        .stat-value {
          font-family: 'Arial Black', Arial, sans-serif;
          font-size: clamp(26px, 3.5vw, 38px);
          font-weight: 900;
          color: #fff;
          line-height: 1.2;
        }

        .stat-sub {
          font-family: Arial, sans-serif;
          font-size: 13px;
          color: #3b82f6;
          letter-spacing: 1px;
          margin-top: 4px;
        }

        @media (max-width: 640px) {
          .sport-card { width: 130px; height: 90px; }
          .movie-card { width: 140px; height: 210px; }
          .stats-bar  { gap: 28px; }
        }
      `}</style>
            <section className="sliders-section" aria-label="Premium Firestick Packages and IPTV Subscriptions">

                {/* Visually hidden text specifically for SEO indexing of target keywords */}
                <div className="seo-hidden">
                    <h2>Best Firestick Packages & IPTV Subscription UK</h2>
                    <p>
                        Looking for the best UK IPTV deals? Enhance your viewing experience with our premium firestick packages and top-rated IPTV subscription. Enjoy over 150,000 VOD titles, live sports, and 22,000+ channels in 4K quality effortlessly.
                    </p>
                </div>

                <div className="slider-track-wrapper">
                    <div className="slider-track scroll-right">
                        {[...movieSlides, ...movieSlides, ...movieSlides, ...movieSlides].map((m, i) => (
                            <div key={i} className="movie-card">
                                <img src={m.src} alt={`${m.label} - included in premium firestick packages`} loading="lazy" />
                            </div>
                        ))}
                    </div>
                </div>
                <h2 className="vod-heading">
                    +150,000 <span>latest VOD</span> titles available <br />
                    <span style={{ fontSize: '15px', color: '#888', fontWeight: 'normal', display: 'block', marginTop: '10px' }}>
                        Get the Best UK IPTV Subscription with our Premium Packages
                    </span>
                </h2>
                <div className="slider-track-wrapper">
                    <div className="slider-track scroll-left">
                        {[...movieSlides, ...movieSlides, ...movieSlides, ...movieSlides].map((m, i) => (
                            <div key={i} className="movie-card">
                                <img src={m.src} alt={`${m.label} - best uk iptv`} loading="lazy" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="stats-bar">
                    {stats.map((s) => (
                        <div key={s.sub} className="stat-item">
                            <div className="stat-value">{s.value}</div>
                            <div className="stat-sub">{s.sub}</div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
