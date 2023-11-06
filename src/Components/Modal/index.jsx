import { ModalStyles } from './index.styles';

/**
 * Modal component that can be opened or closed based on the `isOpen` prop.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.isOpen - Determines whether the modal is open or closed.
 * @param {Function} props.onClose - Callback function to close the modal.
 * @param {ReactNode} props.children - The content to be displayed within the modal.
 * @returns {JSX.Element} The Modal component.
 */
const Modal = ({ isOpen, onClose, children }) => {
  /**
   * Conditional rendering of the modal based on the `isOpen` prop.
   * If `isOpen` is true, use `ModalStyles.Open`, otherwise use `ModalStyles.Close`.
   */
  const ModalWrapper = isOpen ? ModalStyles.Open : ModalStyles.Close;

  return (
    <ModalWrapper>
      {/* Close button for the modal */}
      <span className="close" onClick={onClose}>
        &times;
      </span>
      {children}
    </ModalWrapper>
  );
};

export default Modal;

