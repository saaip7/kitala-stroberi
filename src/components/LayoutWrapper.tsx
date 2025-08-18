"use client";

import { useContactModal } from "@/contexts/ContactModalContext";
import ContactModal from "@/components/ContactModal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
  const { isContactModalOpen, closeContactModal } = useContactModal();

  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </>
  );
};

export default LayoutWrapper;
