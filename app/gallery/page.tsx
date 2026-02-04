'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  ChevronLeft, 
  ChevronRight, 
  X,
  Image as ImageIcon
} from 'lucide-react';

interface EventGallery {
  id: number;
  title: string;
  date: string;
  location: string;
  category: string;
  description: string;
  images: string[];
}

const GalleryPage = () => {
  // Organize events with multiple images
  const eventGalleries: EventGallery[] = [
    {
      id: 1,
      title: "Fish Tank 2.0",
      date: "March 15, 2024",
      location: "MAIT Auditorium",
      category: "Competition",
      description: "Our flagship pitching competition – where creativity meets courage, mentorship meets guidance, and ideas meet opportunity.",
      images: [
        "/jiya.jpg",
        "/fish4.jpg",
        "/fish1.jpg",
        "/fem.jpg",
        "/fish.jpg",
        "/fish0.jpg",
      ]
    },
    {
      id: 2,
      title: "Canva Basics Workshop",
      date: "April 3, 2024",
      location: "Design Studio",
      category: "Workshop",
      description: "An exclusive learning session for our members – a hands-on class designed to help you create impactful posters, presentations, and social media creatives from scratch.",
      images: [
        "/fem.jpg",
        "/canva1.jpg",
        "/canva2.jpg",
        "/canva3.jpg",
        "/canva4.jpg",
        "/canva5.jpg",

      ]
    },
    {
      id: 3,
      title: "Venture Lab & Campus Ventures",
      date: "May 20, 2024",
      location: "Innovation Hub",
      category: "Incubation",
      description: "From campus idea to platform – we support student-led initiatives like CampusMart that are shaping the future through creativity and courage.",
      images: [
        "/blue.jpg",
        "/.jpg",
        "/.jpg",
        "/.jpg",
        "/.jpg",
        "/.jpg",
      ]
    },
    {
      id: 4,
      title: "Pitch Perfect Workshop",
      date: "Feb 5, 2026",
      location: "MAIT Seminar Hall",
      category: "Workshop",
      description: "Master the art of pitching to investors and refining your value proposition.",
      images: [
        "/shubh.jpg",
        "/pitch1.jpg",
        "/pitch2.jpg",
        "/pitch3.jpg",
        "/pitch4.jpg",
        "/pitch5.jpg",
      ]
    },
    {
      id: 113,
      title: "Fresh Talent Hiring: Recruitment Drive",
      date: "19-Sept-2025",
      location: "Campus Plaza",
      category: "Recruitment",
      description: "Connecting our startups with the brightest fresh minds from the campus.",
      images: [
        "/mock.jpg",
        "/inter1.jpg",
        "/inter3.png",
        "/inter4.png",
        "/inter6.png",
        "/inter5.png",
      ]
    },
    {
      id: 112,
      title: "Virtual Orientation",
      date: "18-Sept-2025",
      location: "Discord / Zoom",
      category: "Orientation",
      description: "Online session for remote members to understand the global sphere network.",
      images: [
        "/orientation.jpg",
        "/orientation1.jpg",
        "/orientation2.jpg",
        "/orientation3.jpg",
        "/orientation4.jpg",
        "/orientation5.jpg",
    ]
    }
  ];

  const [selectedImage, setSelectedImage] = useState<{image: string, eventTitle: string, eventId: number} | null>(null);
  const [currentEventIndex, setCurrentEventIndex] = useState<number>(0);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const openImageModal = (image: string, eventTitle: string, eventId: number) => {
    const eventIndex = eventGalleries.findIndex(event => event.id === eventId);
    const imageIndex = eventGalleries[eventIndex].images.findIndex(img => img === image);
    setCurrentEventIndex(eventIndex);
    setCurrentImageIndex(imageIndex);
    setSelectedImage({image, eventTitle, eventId});
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage) {
      const currentEvent = eventGalleries[currentEventIndex];
      let newImageIndex = currentImageIndex - 1;
      let newEventIndex = currentEventIndex;

      if (newImageIndex < 0) {
        // Move to previous event
        newEventIndex = currentEventIndex === 0 ? eventGalleries.length - 1 : currentEventIndex - 1;
        const prevEvent = eventGalleries[newEventIndex];
        newImageIndex = prevEvent.images.length - 1;
      }

      setCurrentEventIndex(newEventIndex);
      setCurrentImageIndex(newImageIndex);
      setSelectedImage({
        image: eventGalleries[newEventIndex].images[newImageIndex],
        eventTitle: eventGalleries[newEventIndex].title,
        eventId: eventGalleries[newEventIndex].id
      });
    }
  };

  const goToNext = () => {
    if (selectedImage) {
      const currentEvent = eventGalleries[currentEventIndex];
      let newImageIndex = currentImageIndex + 1;
      let newEventIndex = currentEventIndex;

      if (newImageIndex >= currentEvent.images.length) {
        // Move to next event
        newEventIndex = currentEventIndex === eventGalleries.length - 1 ? 0 : currentEventIndex + 1;
        newImageIndex = 0;
      }

      setCurrentEventIndex(newEventIndex);
      setCurrentImageIndex(newImageIndex);
      setSelectedImage({
        image: eventGalleries[newEventIndex].images[newImageIndex],
        eventTitle: eventGalleries[newEventIndex].title,
        eventId: eventGalleries[newEventIndex].id
      });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  return (
    <div className="min-h-screen bg-[#020202] text-white selection:bg-purple-500/30 overflow-x-hidden font-sans">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-purple-600/5 blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-32">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
            <ImageIcon className="w-4 h-4 text-purple-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-300">
              Moments Captured
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 italic">
            EVENT <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">GALLERY</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Relive the moments that shaped our entrepreneurial journey. A collection of memories from our events.
          </p>
        </motion.div>

        {/* Gallery by Event */}
        <div className="space-y-48">
          {eventGalleries.map((event, eventIndex) => (
            <motion.section
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: eventIndex * 0.1 }}
              className="scroll-mt-32"
            >
              {/* Event Header */}
              <div className="text-center mb-16">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400">
                    <ImageIcon className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase italic">
                    {event.title}
                  </h2>
                  <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent ml-4" />
                </div>
                
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-purple-400" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    {event.location}
                  </div>
                  <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest text-purple-400 bg-purple-500/20 border border-purple-500/30 rounded-full">
                    {event.category}
                  </span>
                </div>
                
                <p className="text-gray-300 max-w-2xl mx-auto">
                  {event.description}
                </p>
              </div>

              {/* Event Images Grid - 3 columns, max 2 rows (6 images) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {event.images.slice(0, 6).map((image, imageIndex) => (
                  <motion.div
                    key={`${event.id}-${imageIndex}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (eventIndex * 0.1) + (imageIndex * 0.05) }}
                    className="group relative overflow-hidden rounded-3xl aspect-[3/2] cursor-pointer bg-[#0a0a0a] border border-white/10 hover:border-purple-500/30 transition-all duration-500"
                    onClick={() => openImageModal(image, event.title, event.id)}
                  >
                    <div className="w-full h-full flex items-center justify-center p-4">
                      <img
                        src={image}
                        alt={`${event.title} - Image ${imageIndex + 1}`}
                        className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="px-2 py-1 text-[8px] font-bold uppercase tracking-widest text-purple-400 bg-purple-500/20 border border-purple-500/30 rounded-full">
                          {event.category}
                        </span>
                      </div>
                      <h3 className="text-sm font-bold text-white mb-1 truncate">{event.title}</h3>
                      <p className="text-xs text-gray-300 truncate">Image {imageIndex + 1}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </main>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div 
            className="relative max-w-6xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={selectedImage.image}
                alt={selectedImage.eventTitle}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8">
                <div className="max-w-3xl">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest text-purple-400 bg-purple-500/20 border border-purple-500/30 rounded-full">
                      {eventGalleries[currentEventIndex].category}
                    </span>
                    <div className="flex items-center gap-2 text-xs text-gray-300">
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      {eventGalleries[currentEventIndex].date}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-300">
                      <MapPin className="w-4 h-4 text-cyan-400" />
                      {eventGalleries[currentEventIndex].location}
                    </div>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {selectedImage.eventTitle}
                  </h2>
                  <p className="text-gray-200 leading-relaxed">
                    {eventGalleries[currentEventIndex].description}
                  </p>
                </div>
              </div>
            </div>
            
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-gray-400">
              {currentImageIndex + 1} / {eventGalleries[currentEventIndex].images.length} • {eventGalleries[currentEventIndex].title}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;