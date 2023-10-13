import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

const Modal = ({ title, children, onClose }) => {
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog
        variants={{
          hidden: { opacity: 0, y: 30, x: 30 },
          visible: { opacity: 1, y: 10, x: 0, scale: [0.8, 2, 1.3],  backgroundColor: '#8b11f0' }
        }}
        initial="hidden"
        animate="visible" 
        exit={{opacity: 0, y: 300, x: 300, transition:{duration: 0.3} }}
        transition={{ duration: 1, bounce: 0.5, type: 'spring' }}
        open 
        className="modal">
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById('modal')
  );
}

export default Modal;
