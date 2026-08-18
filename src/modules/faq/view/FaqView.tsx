import Header from '../../home-page/components/Header/Header';
import Footer from '../../../shared/components/Footer/Footer';
import './FaqView.css';

function FaqView() {
  return (
    <main className="faq-view">
      <Header forceScrolled />

      <section className="faq-content">
        <div className="faq-container">
          <div className="faq-item">
            <h3 className="faq-item__question">What materials are used in Gentle Beast shoes?</h3>
            <p className="faq-item__answer">
              We use only the finest materials, including full-grain Italian leather, 
              premium suede, and hand-stitched construction. Each pair is crafted with 
              attention to detail and built to last.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-item__question">How do I find my correct shoe size?</h3>
            <p className="faq-item__answer">
              We recommend measuring your foot length and referring to our size guide 
              available on each product page. If you're between sizes, we suggest sizing 
              up for a more comfortable fit. Our customer service team is also available 
              to help with sizing questions.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-item__question">What is your return policy?</h3>
            <p className="faq-item__answer">
              We offer a 30-day return policy for unworn items in their original packaging. 
              If you're not completely satisfied with your purchase, you can return it for 
              a full refund or exchange. Please contact our support team to initiate a return.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-item__question">How long does shipping take?</h3>
            <p className="faq-item__answer">
              Standard shipping typically takes 5-7 business days within the United States. 
              Express shipping options are available at checkout for faster delivery. 
              International shipping times vary by location.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-item__question">Do you offer international shipping?</h3>
            <p className="faq-item__answer">
              Yes, we ship to over 50 countries worldwide. International shipping rates 
              and delivery times vary by destination. Duties and taxes may apply depending 
              on your country's import regulations.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-item__question">How should I care for my Gentle Beast shoes?</h3>
            <p className="faq-item__answer">
              To maintain the quality of your shoes, we recommend using a leather conditioner 
              regularly, storing them with shoe trees, and avoiding exposure to excessive 
              moisture. Each pair comes with detailed care instructions.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-item__question">Do you offer custom or personalized options?</h3>
            <p className="faq-item__answer">
              Currently, we offer a curated collection of ready-to-wear styles. However, 
              we're working on introducing custom options in the future. Sign up for our 
              newsletter to be the first to know when this service becomes available.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-item__question">How can I contact customer support?</h3>
            <p className="faq-item__answer">
              You can reach our customer support team via email at support@gentlebeast.com 
              or by phone at +1 (555) 123-4567. Our support hours are Monday through Friday, 
              9 AM to 6 PM EST. We typically respond to emails within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default FaqView;