"use client"

import React, { useState, useRef, useEffect } from "react";
import { ArrowRight, Play, Pause, Volume2, VolumeX, ChevronDown, ChevronUp } from "lucide-react";
import { AiFillInstagram, AiOutlineTikTok } from "react-icons/ai";

const Herov2 = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoHidden, setIsVideoHidden] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Mobile video states
  const [isMobileVideoPlaying, setIsMobileVideoPlaying] = useState(true);
  const [isMobileVideoMuted, setIsMobileVideoMuted] = useState(true);
  const [isMobileVideoHidden, setIsMobileVideoHidden] = useState(false);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleVideoVisibility = () => {
    setIsVideoHidden(!isVideoHidden);
  };

  // Mobile video controls
  const toggleMobilePlay = () => {
    if (mobileVideoRef.current) {
      if (isMobileVideoPlaying) {
        mobileVideoRef.current.pause();
      } else {
        mobileVideoRef.current.play();
      }
      setIsMobileVideoPlaying(!isMobileVideoPlaying);
    }
  };

  const toggleMobileMute = () => {
    if (mobileVideoRef.current) {
      mobileVideoRef.current.muted = !isMobileVideoMuted;
      setIsMobileVideoMuted(!isMobileVideoMuted);
    }
  };

  const toggleMobileVideoVisibility = () => {
    setIsMobileVideoHidden(!isMobileVideoHidden);
  };

  // Ensure video plays after component mounts and when video becomes visible
  useEffect(() => {
    const playVideo = async () => {
      if (videoRef.current && !isVideoHidden) {
        try {
          // Sync mute state when video becomes visible
          videoRef.current.muted = isMuted;
          await videoRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.log("Autoplay prevented by browser:", error);
          setIsPlaying(false);
        }
      }
    };

    // Small delay to ensure video element is ready
    const timer = setTimeout(playVideo, 100);
    return () => clearTimeout(timer);
  }, [isVideoHidden]);

  // Sync mute state whenever it changes
  useEffect(() => {
    if (videoRef.current && !isVideoHidden) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted, isVideoHidden]);

  // Mobile video useEffects
  useEffect(() => {
    const playMobileVideo = async () => {
      if (mobileVideoRef.current && !isMobileVideoHidden) {
        try {
          mobileVideoRef.current.muted = isMobileVideoMuted;
          await mobileVideoRef.current.play();
          setIsMobileVideoPlaying(true);
        } catch (error) {
          console.log("Mobile autoplay prevented by browser:", error);
          setIsMobileVideoPlaying(false);
        }
      }
    };

    const timer = setTimeout(playMobileVideo, 100);
    return () => clearTimeout(timer);
  }, [isMobileVideoHidden]);

  useEffect(() => {
    if (mobileVideoRef.current && !isMobileVideoHidden) {
      mobileVideoRef.current.muted = isMobileVideoMuted;
    }
  }, [isMobileVideoMuted, isMobileVideoHidden]);

  // Mobile video event handlers
  const handleMobileVideoPlay = () => {
    setIsMobileVideoPlaying(true);
  };

  const handleMobileVideoPause = () => {
    setIsMobileVideoPlaying(false);
  };

  // Handle video state changes
  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };
  return (
    <div className="min-h-screen py-2">
      <div
        className="mx-auto"
        style={{ paddingLeft: "1.5vw", paddingRight: "1.5vw" }}
      >
        {/* Rounded Container with Background Image */}
        <div
          className="relative rounded-3xl overflow-hidden min-h-[95vh] bg-white"
          data-aos="fade-up"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/hero/hero-img.png"
              alt="Strawberry Garden"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Progressive Blur Overlay */}
          <div className="absolute inset-0 z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/60"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-[1px]"></div>
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 z-20 pb-8">
            <div
              className="w-full"
              style={{ paddingLeft: "2vw", paddingRight: "2vw" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8 items-end">
                {/* Left Content */}
                <div
                  className="lg:col-span-7 text-white"
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  <div className="flex flex-row items-end mb-4 gap-2">
                    <a
                      href="https://www.tiktok.com/@kitala.strawberry"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-white p-2 inline-block hover:bg-[#E12929] transition-colors duration-200 group"
                    >
                      <AiOutlineTikTok className="w-5 h-5 text-[#E12929] group-hover:text-white" />
                    </a>

                    <a
                      href="https://www.instagram.com/kitala_strawberry/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-white p-2 inline-block hover:bg-[#E12929] transition-colors duration-200 group"
                    >
                      <AiFillInstagram className="w-5 h-5 text-[#E12929] group-hover:text-white" />
                    </a>
                  </div>

                  <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold mb-4 md:mb-6 font-sans">
                    Petik Buahnya
                    <br />
                    Bantu Tumbuh
                    <br />
                    Jiwanya
                  </h1>

                  <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-white max-w-lg leading-relaxed">
                    Bukan sekadar kebun — ini adalah ladang pemulihan dan tempat
                    tumbuhnya masa depan
                  </p>

                  {/* Action Buttons */}
                  <div
                    className="flex flex-col sm:flex-row gap-3 md:gap-4"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <a
                      href="https://maps.app.goo.gl/S3fLvZbcyxJJbRHb8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white hover:bg-gray-100 text-black rounded-full flex items-center justify-center gap-3 transition-all duration-200 font-medium text-sm md:text-base group shadow-lg"
                      style={{
                        paddingLeft: "2vw",
                        paddingRight: "2vw",
                        paddingTop: "0.75rem",
                        paddingBottom: "0.75rem",
                      }}
                    >
                      KUNJUNGI KAMI
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center group-hover:rotate-360 transition-transform duration-500">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                    </a>

                    <a
                      href="/tentang-kami"
                      className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white flex justify-center items-center rounded-full transition-all duration-200 font-medium text-sm md:text-base border border-white/30"
                      style={{
                        paddingLeft: "2vw",
                        paddingRight: "2vw",
                        paddingTop: "0.75rem",
                        paddingBottom: "0.75rem",
                      }}
                    >
                      HUBUNGI
                    </a>
                  </div>
                </div>

                {/* Right Content - Video Player - Hidden on mobile */}
                <div
                  className="hidden lg:flex lg:col-span-5 lg:justify-end flex-col items-end"
                  data-aos="fade-left"
                  data-aos-delay="400"
                >
                  <div className={`transition-all duration-300 ${
                    isVideoHidden 
                      ? 'w-fit h-16' 
                      : 'w-fit'
                  } bg-white shadow-lg rounded-2xl overflow-hidden`}>
                    
                    {/* Custom Controls */}
                    <div className="p-3 bg-white">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={togglePlay}
                            className="p-1.5 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors"
                            disabled={isVideoHidden}
                          >
                            {isPlaying ? (
                              <Pause className="w-4 h-4 text-gray-700" />
                            ) : (
                              <Play className="w-4 h-4 text-gray-700" />
                            )}
                          </button>
                          
                          <button
                            onClick={toggleMute}
                            className="p-1.5 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors"
                            disabled={isVideoHidden}
                          >
                            {isMuted ? (
                              <VolumeX className="w-4 h-4 text-gray-700" />
                            ) : (
                              <Volume2 className="w-4 h-4 text-gray-700" />
                            )}
                          </button>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <button
                            onClick={toggleVideoVisibility}
                            className="flex items-center gap-2 px-3 py-1.5 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors"
                          >
                            {isVideoHidden ? (
                              <>
                                <ChevronUp className="w-4 h-4 text-gray-700" />
                                <span className="text-xs font-medium text-gray-700">Lihat Video</span>
                              </>
                            ) : (
                              <ChevronDown className="w-4 h-4 text-gray-700" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Video Container */}
                    {!isVideoHidden && (
                      <div className="relative p-3 pt-0">
                        <video
                          ref={videoRef}
                          className="w-80 h-auto object-contain rounded-lg"
                          loop
                          muted={isMuted}
                          autoPlay
                          playsInline
                          onPlay={handleVideoPlay}
                          onPause={handleVideoPause}
                        >
                          <source src="/video/video sub.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Video Player - Only visible on mobile */}
      <div className="lg:hidden py-6">
        <div
          className="mx-auto"
          style={{ paddingLeft: "1.5vw", paddingRight: "1.5vw" }}
        >
          <div 
            className="flex justify-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className={`transition-all duration-300 ${
              isMobileVideoHidden 
                ? 'w-fit h-16' 
                : 'w-fit max-w-sm'
            } bg-white shadow-lg rounded-2xl overflow-hidden`}>
              
              {/* Mobile Custom Controls */}
              <div className="p-3 bg-white">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={toggleMobilePlay}
                      className="p-1.5 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors"
                      disabled={isMobileVideoHidden}
                    >
                      {isMobileVideoPlaying ? (
                        <Pause className="w-4 h-4 text-gray-700" />
                      ) : (
                        <Play className="w-4 h-4 text-gray-700" />
                      )}
                    </button>
                    
                    <button
                      onClick={toggleMobileMute}
                      className="p-1.5 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors"
                      disabled={isMobileVideoHidden}
                    >
                      {isMobileVideoMuted ? (
                        <VolumeX className="w-4 h-4 text-gray-700" />
                      ) : (
                        <Volume2 className="w-4 h-4 text-gray-700" />
                      )}
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={toggleMobileVideoVisibility}
                      className="flex items-center gap-2 px-3 py-1.5 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors"
                    >
                      {isMobileVideoHidden ? (
                        <>
                          <ChevronUp className="w-4 h-4 text-gray-700" />
                          <span className="text-xs font-medium text-gray-700">Lihat Video</span>
                        </>
                      ) : (
                        <ChevronDown className="w-4 h-4 text-gray-700" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Mobile Video Container */}
              {!isMobileVideoHidden && (
                <div className="relative p-3 pt-0">
                  <video
                    ref={mobileVideoRef}
                    className="w-80 h-auto object-contain rounded-lg"
                    loop
                    muted={isMobileVideoMuted}
                    autoPlay
                    playsInline
                    onPlay={handleMobileVideoPlay}
                    onPause={handleMobileVideoPause}
                  >
                    <source src="/video/video sub.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herov2;
