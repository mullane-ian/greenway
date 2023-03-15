import React from 'react';
import { Html } from "@react-three/drei";
import { useThree } from '@react-three/fiber';
const Modal = ({
  showModal,
  setShowModal,
  isActive = true,
  title = "Greenway Pest Solutions",
  description = `
    Our mosquito prevention service is designed to help homeowners and businesses protect their property from these pesky and potentially harmful insects. We offer a comprehensive approach to mosquito control that includes misting the foliage around your property and setting up traps to prevent future infestations.

    Our team of experienced technicians will begin by assessing your property to determine the best course of action. We will identify areas where mosquitoes are likely to breed and congregate, such as standing water and dense vegetation. Then, we will use a specialized misting system to apply a safe and effective insecticide to the foliage around your property. This misting process is designed to kill adult mosquitoes and prevent the development of their larvae.

    In addition to misting, we will also set up traps in strategic locations around your property. These traps are designed to attract and capture mosquitoes, preventing them from breeding and laying eggs. Our traps are non-toxic and safe for both people and pets, so you can rest assured that your property is being protected without any harm to your loved ones.

    Our mosquito prevention service is highly effective and long-lasting, providing you with peace of mind knowing that your property is protected from these annoying and potentially harmful insects. Contact us today to schedule a consultation and start enjoying a mosquito-free environment!
  `
}) => {
  const closeModal = () => {
    setShowModal(false);
  };

  React.useEffect(() => {
    // Add event listener to detect clicks outside the modal content
    const handleClickOutside = (event) => {
      const modalContent = document.querySelector('.modal-content');
      if (modalContent && !modalContent.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showModal]);

    const { viewport } = useThree();
  const { width, height } = viewport;

  return (
    <Html   
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {showModal && (
        <div className='container'>
                  <div className={`modal `}>
          <div className="modal-overlay"></div>
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            {title && <h2 className="modal-title text-3xl">{title}</h2>}
            {description && (
              <p className="modal-description mb-8 text-lg">{description}</p>
            )}
          </div>
        </div>
        </div>

      )}

    </Html>
  );
};

export default Modal;