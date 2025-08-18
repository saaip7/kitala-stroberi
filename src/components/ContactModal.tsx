"use client";

import { X, MessageCircle, User, Users } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const contactOptions = [
    {
      id: 1,
      name: "Pengurus Kitala Stroberi",
      phone: "628983837962",
      message: "Halo, saya tertarik untuk berkunjung ke Kebun Stroberi Kitala. Bisa minta informasi lebih lanjut?",
      description: "Informasi wisata & tiket",
      icon: <MessageCircle className="w-5 h-5" />,
      category: "kitala"
    },
    {
      id: 2,
      name: "Owner Yayasan Rehabilitasi Mental Al Hafish",
      phone: "6281233530434",
      message: "Halo, saya ingin mengetahui lebih lanjut tentang program Yayasan Al Hafish. Terima kasih.",
      description: "Program yayasan & kerjasama",
      icon: <User className="w-5 h-5" />,
      category: "yayasan"
    },
    {
      id: 3,
      name: "Admin Yayasan Rehabilitasi Mental Al Hafish",
      phone: "6281938884890",
      message: "Halo, saya ingin bertanya tentang kegiatan di Yayasan Al Hafish. Mohon informasinya.",
      description: "Informasi umum & pendaftaran",
      icon: <Users className="w-5 h-5" />,
      category: "yayasan"
    }
  ];

  const handleContactClick = (phone: string, message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only close if clicking the backdrop itself, not the modal content
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/70 z-[9999] flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">Hubungi Kami</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {/* Kitala Stroberi Section */}
          <div className="mb-6">
            {/* <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <MessageCircle className="w-5 h-5 mr-2 text-red-500" />
              Kitala Stroberi
            </h3> */}
            <button
              onClick={() => handleContactClick(contactOptions[0].phone, contactOptions[0].message)}
              className="w-full flex items-center p-4 bg-green-50 hover:bg-green-100 border border-green-200 rounded-xl transition-all duration-200 group"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full mr-4 group-hover:bg-green-600">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="flex-1 text-left">
                <div className="font-medium text-gray-800">{contactOptions[0].name}</div>
                <div className="text-sm text-gray-600">{contactOptions[0].description}</div>
              </div>
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-3 text-sm text-gray-500 bg-white">Yayasan Rehabilitasi Mental Al Hafish</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Yayasan Al Hafish Section */}
          <div className="space-y-3">
            {contactOptions.slice(1).map((contact) => (
              <button
                key={contact.id}
                onClick={() => handleContactClick(contact.phone, contact.message)}
                className="w-full flex items-center p-4 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl transition-all duration-200 group"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full mr-4 group-hover:bg-blue-600">
                  {contact.icon}
                </div>
                <div className="flex-1 text-left">
                  <div className="font-medium text-gray-800">{contact.name}</div>
                  <div className="text-sm text-gray-600">{contact.description}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
