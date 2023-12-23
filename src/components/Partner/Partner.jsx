import styles from "./Partner.module.css";
import PartnerForm from "./PartnerForm";
const Partner = () => {
  return (
    <div className={styles.partner} id="section-partner">
      <div className={styles.partnerContainer}>
        <div className={styles.partnerDescription}>
          We are currently looking for Partnership/Sponsorship for the
          representation of our candidate internationally and also support all
          our humanitarian projects.
          <h1>How does it benefit you:</h1>
          Attract International recognition through our YouTube and Live
          streaming event Brand visibility: Provision of high-quality brand
          awareness, your brand visuals will be placed on all our social media
          platforms and print materials. Get international exposure for your
          brand and services. Consumer Perception: Sponsoring this project shows
          the human side of you, there is nothing that wins a customer’s heart
          than social responsibility, customers will perceive your
          business/products to be reliable and reputable which will in turn
          increase customer loyalty. On-site table to promote your
          products/services Share your company brochure and flyers in our take
          home souvenir bags Be mentioned to media houses as a Sponsor during
          the live event
          <h1>How does it benefit Nigeria</h1>
          The participation of girls of all the races and nationalities in these
          contests erases borders between states and excludes racism and any
          other prejudices regarding particular social, religious or political
          principles. It promotes tourism: It allows room to showcase the great
          culture of the Nigerian people. It enriches international relations:
          Popular international competitions are participated in by different
          countries. A way for today’s youth to find new opportunities. It
          promotes local economic opportunities by promoting local businesses
          internationally. It becomes a channel to reach and help despondent
          communities around the world.
        </div>
        <div className={styles.partnerForm}>
          <PartnerForm />
        </div>
      </div>
    </div>
  );
};

export default Partner;
