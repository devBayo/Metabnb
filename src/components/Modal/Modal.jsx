import { createPortal } from 'react-dom';
import './Modal.css';
import MetaMaskLogo from '../../assets/metamask_logo.png';
import WalletCLogo from '../../assets/walletconnect_logo.png';

const ModalOverlay = () => {
  return (
    <div className="modal">
      <div className="modal-header">
        <h2>Connect wallet</h2>
        <ion-icon name="close-sharp" className="close-icon"></ion-icon>
      </div>
      <div className="modal-content">
        <p>Choose your preferred wallet:</p>
        <div className="wallets">
          <div className="wallet">
            <img src={MetaMaskLogo} alt="metamask logo" />
            <h3>Metamask</h3>
            <ion-icon
              name="chevron-forward-outline"
              className="proceed-icon"
            ></ion-icon>
          </div>
          <div className="wallet">
            <img src={WalletCLogo} alt="WalletConnect logo" />
            <h3>WalletConnect</h3>
            <ion-icon
              name="chevron-forward-outline"
              className="proceed-icon"
            ></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
};

const Modal = props => {
  return (
    <>
      {createPortal(
        <div className="backdrop" />,
        document.getElementById('modal-root')
      )}
      {createPortal(
        <ModalOverlay onClick={props.onClick} />,
        document.getElementById('modal-root')
      )}
    </>
  );
};

export default Modal;
