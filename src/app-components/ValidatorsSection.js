import React, { useState } from 'react';
import '../css/ValidatorsSection.css';

function ValidatorsSection() {

const [isStartowClicked, setIsStartNowClicked] = useState(false)


 const startNow = () => {
   setIsStartNowClicked(true)
 }

 const backUp = () => {
    setIsStartNowClicked(false)
 }

   // Funzione per connettere wallet
   async function connectWallet() {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log('Connected account:', accounts[0]);
      } catch (error) {
        console.error('Error connecting MetaMask:', error);
      }
    } else {
      alert('MetaMask not detected');
    }
  }






  return (
    <section className="validators-section">
    {!isStartowClicked && (
      <div className="validators-content">
        <h2>Diventa un Validatore</h2>
        <p>
          Unisciti alla nostra comunità e diventa un validatore di notizie. Contribuisci a garantire che solo le notizie verificate diventino virali. Diventare un validatore è semplice e gratificante!
        </p>
        <div className="validators-steps">
          <div className="step">
            <h3>1. Registrati con il tuo Wallet</h3>
            <p>Connetti il tuo account Metamask e inizia il tuo viaggio come validatore.</p>
          </div>
          <div className="step">
            <h3>2. Verifica le Notizie</h3>
            <p>Esamina e approva le notizie caricate dalla comunità. Le tue decisioni influenzeranno quali notizie diventano virali.</p>
          </div>
          <div className="step">
            <h3>3. Guadagna Ricompense</h3>
            <p>Per ogni notizia verificata, guadagnerai <strong>0.002 ETH</strong> direttamente nel tuo wallet.</p>
          </div>
        </div>
        <button className="cta-button" onClick={startNow}>Start Now</button>
      </div>
      )}

      {isStartowClicked &&(
        
        <div class="roadmap-section">
     <button className='back-function'onClick={backUp}>❌</button>
  <h2>La tua Roadmap per Diventare un Validatore</h2>
  <div class="roadmap-container">
    <div class="roadmap-step">
      <h3>1. Collega il Tuo Wallet</h3>
      <p>Utilizza il pulsante qui sotto per collegare il tuo wallet Metamask. Sarà la tua identità come validatore.</p>
      <button class="cta-button" onClick={connectWallet}>Collega Wallet</button>
    </div>
    <div class="arrow">↓</div>
    <div class="roadmap-step">
      <h3>2. Verifica le Notizie</h3>
      <p>Esamina attentamente le notizie proposte. Se almeno il 51% dei validatori non conferma una notizia, questa sarà ritenuta invalida.</p>
    </div>
    <div class="arrow">↓</div>
    <div class="roadmap-step">
      <h3>3. Pagamento Fee</h3>
      <p>Per ogni notizia che validi, dovrai pagare una piccola fee oltre alla gas fee. Questo aiuta a mantenere l'integrità del sistema.</p>
    </div>
    <div class="arrow">↓</div>
    <div class="roadmap-step">
      <h3>4. Ricevi il Premio</h3>
      <p>Se la notizia è valida, riceverai una ricompensa di <strong>0.002 ETH</strong>. Nessun premio sarà assegnato per le notizie invalidate.</p>
    </div>
  </div>
</div>

      )}
    


    </section>
  );
}

export default ValidatorsSection;
