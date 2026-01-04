import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'motion/react';
import './TiltedCard.css';

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2
};

/**
 * @param {Object} props
 * @param {string} props.imageSrc
 * @param {string} [props.altText]
 * @param {string} [props.captionText]
 * @param {string} [props.containerHeight]
 * @param {string} [props.containerWidth]
 * @param {string} [props.imageHeight]
 * @param {string} [props.imageWidth]
 * @param {number} [props.scaleOnHover]
 * @param {number} [props.rotateAmplitude]
 * @param {boolean} [props.showMobileWarning]
 * @param {boolean} [props.showTooltip]
 * @param {React.ReactNode} [props.overlayContent]
 * @param {boolean} [props.displayOverlayContent]
 * @param {React.ReactNode} [props.expandedContent]
 * @param {string} [props.modalTitle]
 * @param {string} [props.modalDescription]
 */
export default function TiltedCard({
  imageSrc,
  altText = 'Tilted card image',
  captionText = '',
  containerHeight = '300px',
  containerWidth = '100%',
  imageHeight = '300px',
  imageWidth = '300px',
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  showMobileWarning = true,
  showTooltip = true,
  overlayContent = undefined,
  displayOverlayContent = false,
  // Modal props
  expandedContent = undefined,
  modalTitle = '',
  modalDescription = ''
}) {
  const ref = useRef(null);
  const modalRef = useRef(null);

  const x = useMotionValue();
  const y = useMotionValue();
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1
  });

  const [lastY, setLastY] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardRect, setCardRect] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  function handleMouse(e) {
    if (!ref.current || isModalOpen) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    if (isModalOpen) return;
    scale.set(scaleOnHover);
    opacity.set(1);
  }

  function handleMouseLeave() {
    if (isModalOpen) return;
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
  }

  function handleCardClick() {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setCardRect({
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      });
    }
    setIsAnimating(true);
    setIsModalOpen(true);
    // Reset tilt effects when opening modal
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  }

  function handleCloseModal() {
    const modal = modalRef.current;
    
    // Re-capture the card rect for accurate exit animation
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setCardRect({
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      });
    }
    
    setIsClosing(true);
    
    if (modal && modal.scrollTop > 0) {
      modal.scrollTo({ top: 0, behavior: "smooth" });
      const scrollDuration = Math.min(modal.scrollTop / 2, 300);
      setTimeout(() => {
        setIsModalOpen(false);
      }, scrollDuration);
    } else {
      setIsModalOpen(false);
    }
  }
  
  function handleAnimationComplete() {
    if (!isModalOpen) {
      setCardRect(null);
      setIsClosing(false);
    }
    setIsAnimating(false);
  }

  return (
    <>
      <figure
        ref={ref}
        className="tilted-card-figure"
        style={{
          height: containerHeight,
          width: containerWidth,
          cursor: expandedContent ? 'pointer' : 'default',
          opacity: isModalOpen ? 0 : 1,
          pointerEvents: isModalOpen ? 'none' : 'auto',
        }}
        onMouseMove={handleMouse}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleCardClick}
      >
        {showMobileWarning && (
          <div className="tilted-card-mobile-alert">This effect is not optimized for mobile. Check on desktop.</div>
        )}

        <motion.div
          className="tilted-card-inner"
          style={{
            width: imageWidth,
            height: imageHeight,
            rotateX,
            rotateY,
            scale
          }}
        >
          <motion.img
            src={imageSrc}
            alt={altText}
            className="tilted-card-img"
            style={{
              width: imageWidth,
              height: imageHeight
            }}
          />

          {displayOverlayContent && overlayContent && (
            <motion.div className="tilted-card-overlay">{overlayContent}</motion.div>
          )}
        </motion.div>

        {showTooltip && (
          <motion.figcaption
            className="tilted-card-caption"
            style={{
              x,
              y,
              opacity,
              rotate: rotateFigcaption
            }}
          >
            {captionText}
          </motion.figcaption>
        )}
      </figure>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleCloseModal}
              className="tilted-card-modal-overlay"
            />

            {/* Modal Content */}
            <motion.div
              ref={modalRef}
              initial={cardRect ? {
                top: cardRect.top,
                left: cardRect.left,
                width: cardRect.width,
                height: cardRect.height,
                borderRadius: 15,
              } : {}}
              animate={{
                top: '6vh',
                left: '16.67%',
                width: '66.67%',
                height: '88vh',
                borderRadius: 24,
              }}
              exit={cardRect ? {
                top: cardRect.top,
                left: cardRect.left,
                width: cardRect.width,
                height: cardRect.height,
                borderRadius: 15,
              } : {}}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              onAnimationComplete={handleAnimationComplete}
              className={`tilted-card-modal ${isClosing ? 'tilted-card-modal-closing' : ''}`}
            >
              {/* Card-style image - shown during open/close transitions */}
              <motion.img
                src={imageSrc}
                alt={altText}
                className="tilted-card-modal-card-image"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                exit={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
              />

              {/* Close button */}
              <motion.button
                onClick={handleCloseModal}
                className="tilted-card-modal-close"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </motion.button>

              {/* Header with image - modal expanded view */}
              <motion.div 
                className="tilted-card-modal-header"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, delay: 0.1 }}
              >
                <img
                  src={imageSrc}
                  alt={altText}
                  className="tilted-card-modal-image"
                />
                <div className="tilted-card-modal-image-overlay" />
              </motion.div>

              {/* Content - fades out before modal shrinks */}
              <motion.div 
                className="tilted-card-modal-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.15 }}
              >
                {modalTitle && (
                  <h2 className="tilted-card-modal-title">{modalTitle}</h2>
                )}
                {modalDescription && (
                  <p className="tilted-card-modal-description">{modalDescription}</p>
                )}
                {expandedContent}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
