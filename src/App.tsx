import React, { useEffect, useState } from 'react';
import { Heart, Clock, Volume2, Radio, Play, Star, List, Command, Settings, Sun, Moon } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Music Streaming",
      description: "Enjoy continuous music without interruptions, keeping your server lively around the clock"
    },
    {
      icon: <Volume2 className="w-8 h-8" />,
      title: "High-Quality Audio",
      description: "Crystal-clear sound with minimal lag for the best listening experience"
    },
    {
      icon: <Radio className="w-8 h-8" />,
      title: "Multiple Sources",
      description: "Play from YouTube, SoundCloud, Spotify, and live radio streams"
    },
    {
      icon: <Play className="w-8 h-8" />,
      title: "Easy Commands",
      description: "Simple and intuitive controls for playing, pausing, skipping, and queuing music"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "High Performance",
      description: "Optimized for stability with minimal lag and smooth playback"
    },
    {
      icon: <List className="w-8 h-8" />,
      title: "Queue Management",
      description: "Easily manage your playlist with advanced queue controls"
    }
  ];

  const commands = [
    {
      icon: <Play className="w-6 h-6" />,
      title: "Playback Controls",
      commands: [
        { cmd: "!play <song>", desc: "Play a song or add to queue" },
        { cmd: "!pause", desc: "Pause current playback" },
        { cmd: "!resume", desc: "Resume playback" },
        { cmd: "!skip", desc: "Skip to next song" },
        { cmd: "!stop", desc: "Stop playback" }
      ]
    },
    {
      icon: <List className="w-6 h-6" />,
      title: "Queue Management",
      commands: [
        { cmd: "!queue", desc: "View current queue" },
        { cmd: "!clear", desc: "Clear the queue" },
        { cmd: "!shuffle", desc: "Shuffle the queue" },
        { cmd: "!remove <position>", desc: "Remove song from queue" },
        { cmd: "!move <from> <to>", desc: "Move song in queue" }
      ]
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Settings",
      commands: [
        { cmd: "!volume <0-100>", desc: "Adjust volume" },
        { cmd: "!loop", desc: "Toggle queue loop" },
        { cmd: "!autoplay", desc: "Toggle autoplay" },
        { cmd: "!disconnect", desc: "Disconnect bot" },
        { cmd: "!help", desc: "Show all commands" }
      ]
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900' 
        : 'bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300'
    } animate-gradient`}>
      <div className="absolute inset-0 bg-[url('https://assets.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e3a57bdb3717fbf9cec_gradient-bg.svg')] bg-cover opacity-50 pointer-events-none"></div>
      
      {/* Theme Toggle Button */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed bottom-8 right-8 p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 z-50"
        style={{
          backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.8)',
        }}
      >
        {isDark ? (
          <Sun className="w-6 h-6 text-white" />
        ) : (
          <Moon className="w-6 h-6 text-pink-600" />
        )}
      </button>

      <div className="container mx-auto px-4 py-16 relative">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Hero Section */}
          <div className="flex flex-col items-center justify-center space-y-8 mb-24">
            <div className="relative">
              <Heart 
                size={120} 
                className={`${isDark ? 'text-purple-500' : 'text-pink-500'} animate-pulse-slow animate-glow`}
                fill={isDark ? '#a855f7' : '#ec4899'}
              />
              <div className="absolute -top-4 -right-4">
                <div className={`w-8 h-8 ${isDark ? 'bg-purple-500' : 'bg-pink-500'} rounded-full animate-float opacity-50`}></div>
              </div>
              <div className="absolute -bottom-4 -left-4">
                <div className={`w-6 h-6 ${isDark ? 'bg-purple-400' : 'bg-pink-400'} rounded-full animate-float opacity-50`}
                     style={{ animationDelay: '1s' }}></div>
              </div>
            </div>

            <h1 className={`text-5xl font-bold text-center bg-gradient-to-r ${
              isDark 
                ? 'from-purple-400 to-purple-600' 
                : 'from-pink-400 to-pink-600'
            } text-transparent bg-clip-text animate-pulse-slow`}>
              Heart Beat
            </h1>

            <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-700'} text-center max-w-2xl mx-auto leading-relaxed`}>
              Your Discord server's ultimate music companion, powered by Lunar Developments
            </p>

            <div className="flex space-x-4">
              <a 
                href="https://discord.com/api/oauth2/authorize?client_id=1332998604645994537&permissions=8&scope=bot" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${
                  isDark 
                    ? 'bg-purple-500 hover:bg-purple-600 hover:shadow-purple-500/50' 
                    : 'bg-pink-500 hover:bg-pink-600 hover:shadow-pink-500/50'
                } text-white px-8 py-3 rounded-full font-medium transform hover:-translate-y-1 transition-all duration-300 shadow-lg`}
              >
                Add to Discord
              </a>
              <a 
                href="https://discord.gg/lunardevs" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`bg-white/80 backdrop-blur-sm ${
                  isDark ? 'text-purple-500' : 'text-pink-600'
                } px-8 py-3 rounded-full font-medium hover:bg-white transform hover:-translate-y-1 transition-all duration-300 shadow-lg`}
              >
                Support Server
              </a>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-24">
            <h2 className={`text-4xl font-bold text-center ${
              isDark ? 'text-purple-400' : 'text-pink-600'
            } mb-12`}>Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`${
                    isDark 
                      ? 'bg-gray-800/50 hover:bg-gray-800/70' 
                      : 'bg-white/70 hover:bg-white/80'
                  } backdrop-blur-sm p-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl`}
                >
                  <div className={isDark ? 'text-purple-400' : 'text-pink-500'} className="mb-4">{feature.icon}</div>
                  <h3 className={`text-xl font-semibold ${
                    isDark ? 'text-purple-300' : 'text-pink-600'
                  } mb-2`}>{feature.title}</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Heart Beat */}
          <div className="mb-24">
            <h2 className={`text-4xl font-bold text-center ${
              isDark ? 'text-purple-400' : 'text-pink-600'
            } mb-12`}>Why Choose Heart Beat?</h2>
            <div className={`${
              isDark 
                ? 'bg-gray-800/50' 
                : 'bg-white/70'
            } backdrop-blur-sm p-8 rounded-xl shadow-lg`}>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} text-center max-w-4xl mx-auto leading-relaxed`}>
                Developed by <span className={isDark ? 'text-purple-400' : 'text-pink-600'} className="font-semibold">Lunar Developments</span>, Heart Beat isn't just another music bot—it's an immersive experience designed to keep your community engaged. With its reliable performance, easy integration, and diverse feature set, Heart Beat is the perfect companion for any event, chat, or chill session.
              </p>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} text-center mt-6`}>
                No matter the occasion, Heart Beat is <span className={isDark ? 'text-purple-400' : 'text-pink-600'} className="font-semibold">always online, always free, and always ready</span> to provide non-stop entertainment. Add it to your server today and elevate your music experience! 🎵 🚀
              </p>
            </div>
          </div>

          {/* Quick Commands */}
          <div>
            <h2 className={`text-4xl font-bold text-center ${
              isDark ? 'text-purple-400' : 'text-pink-600'
            } mb-12`}>Quick Commands</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {commands.map((section, index) => (
                <div 
                  key={index}
                  className={`${
                    isDark 
                      ? 'bg-gray-800/50' 
                      : 'bg-white/70'
                  } backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={isDark ? 'text-purple-400' : 'text-pink-500'}>{section.icon}</div>
                    <h3 className={`text-xl font-semibold ${
                      isDark ? 'text-purple-300' : 'text-pink-600'
                    }`}>{section.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {section.commands.map((cmd, cmdIndex) => (
                      <div key={cmdIndex} className={`border-b ${
                        isDark ? 'border-gray-700' : 'border-pink-100'
                      } pb-2 last:border-0`}>
                        <code className={isDark ? 'text-purple-400' : 'text-pink-600'}>{cmd.cmd}</code>
                        <p className={`text-sm mt-1 ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>{cmd.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;