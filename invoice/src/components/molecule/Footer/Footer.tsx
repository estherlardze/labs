import "./Footer.css";
import Button from "../../atom/Button/Button";

const Footer = ({ handleInvoiceClose }: { handleInvoiceClose: () => void }) => {
  return (
    <footer className="footer">
      <Button radius="rounded-lg" color="discard" variant="secondary" onClick={handleInvoiceClose}>Discard</Button>
      <div className="footer__right">
        <Button radius="rounded-lg" variant="primary" color="save">Save as draft</Button>
        <Button radius="rounded-lg" color="send">Save & send</Button>
      </div>

    </footer>
  );
};

export default Footer;
