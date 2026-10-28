import {useEffect} from 'react';
import Icon from './ui/Icon';

export default function ThankYou(){
  useEffect(()=>{
    try{
      if(sessionStorage.getItem('stoneNilLeadSubmitted')!=='1')return;
      sessionStorage.removeItem('stoneNilLeadSubmitted');
      window.fbq?.('trackCustom','ThankYouPageView');
    }catch{}
  },[]);

  return (
    <main className="thankyou-page">
      <section className="thankyou-card" aria-labelledby="thankyou-title">
        <a className="thankyou-logo" href="/" aria-label="Swasth Bharat Herbal home">
          <img src="/logo-cropped.png" alt="Swasth Bharat Herbal" width="257" height="361"/>
        </a>
        <span className="thankyou-check" aria-hidden="true"><Icon name="shield"/></span>
        <p className="thankyou-kicker">SWASTH BHARAT HERBAL</p>
        <h1 id="thankyou-title">&#x0927;&#x0928;&#x094D;&#x092F;&#x0935;&#x093E;&#x0926;!</h1>
        <h2>&#x0906;&#x092A;&#x0915;&#x093E; &#x0905;&#x0928;&#x0941;&#x0930;&#x094B;&#x0927; &#x092A;&#x094D;&#x0930;&#x093E;&#x092A;&#x094D;&#x0924; &#x0939;&#x094B; &#x0917;&#x092F;&#x093E; &#x0939;&#x0948;&#x0964;</h2>
        <p className="thankyou-message">&#x0939;&#x092E;&#x093E;&#x0930;&#x0940; &#x091F;&#x0940;&#x092E; &#x091C;&#x0932;&#x094D;&#x0926; &#x0939;&#x0940; &#x0906;&#x092A;&#x0938;&#x0947; &#x0938;&#x0902;&#x092A;&#x0930;&#x094D;&#x0915; &#x0915;&#x0930;&#x0947;&#x0917;&#x0940;&#x0964;</p>
        <a className="cta green" href="/#top">&#x092E;&#x0941;&#x0916;&#x094D;&#x092F; &#x092A;&#x0943;&#x0937;&#x094D;&#x0920; &#x092A;&#x0930; &#x091C;&#x093E;&#x090F;&#x0901;</a>
        <a className="thankyou-order-link" href="/#order">&#x092B;&#x093F;&#x0930; &#x0938;&#x0947; &#x0911;&#x0930;&#x094D;&#x0921;&#x0930; &#x0915;&#x0930;&#x0947;&#x0902;</a>
      </section>
    </main>
  );
}
