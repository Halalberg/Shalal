import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';

const About = () => (
  <Root>
    <Head>
      <title>About | Shallow Crafts</title>
    </Head>
    <div className="about-container">
      {/* Row */}
      <div className="row mt-5 pt-5 about-hero">
        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
            <div className="h-100 d-flex flex-column py-5 px-4 px-sm-5 justify-content-center">
              <h2 className="font-size-header mb-4">
              Varför hantverksbox?
              </h2>
              <h4 className="font-size-subheader mb-4">
              <p>Hantverksboxen är för oss som behöver ett kreativt utlopp, vill testa något nytt men inte vet vart man ska börja.
                             </p>
                            <p>  </p>
                            <p> När man väl har
                            bestämt sig för att testa ett hantverk men dessutom inte tycker det är kul efter ett tag 
                            kan det ta emot att behöva exempelvis slänga det som blir över, utifrån ett
                            miljömässigt -och
                            ekonomiskt perspektiv. </p>
                            <p>
                            Med vår hantverksbox får du testa flera olika hantverk utan att ha onödigt material över.
                            Vårt syfte är att vara en låg tröskeln in i det kreativa. </p>
                            <p>
                            Våra produkter är noggrant utplockade from olika leverantörer utifrån ett kvalitet - och
                            hållbarhetsperspektiv som sedan sammanställts i ett och samma kit.</p>
                            <p>

                            Med hantverkskiten får du även instruktioner så du vet hur du ska gå tillväga. Se vår instagram för förslag på vad du kan skapa!</p>
              </h4>

            </div>
          </div>

        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/vrf hantverk.png" width="500" alt="Commerce.js illustration"/>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/Om OSS.png" width="500" alt="Netlify illustration"/>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column justify-content-center py-5 px-4 px-sm-5">
            <h3 className="font-size-header mb-4">
              Om mig
            </h3>
            <h4 className="font-size-subheader mb-4">
            <p>Jag som grundat Shallow Crafts heter Kristina och är i grunden ekonom. När jag
                                jobbade som ekonom brukade jag komma hem och längta efter ett kreativt utlopp. </p>
                                <p>
                                Jag har varit på drejkurser, målat länge och pysslar mycket hemma. </p>
                                <p>
                                Jag minns hur svårt det var att välja exakt vad för hantverk som jag skulle testa och såg att
                                många pysselkit där ute inte riktigt föll mig i smaken på grund av
                                hållbarhetsperspektivet men även att kvalitén inte riktigt var det jag sökte. </p>

                               <p> Därför skapade jag detta hantverkskit för att ge andra möjligheten att testa helt olika typer
                                av hantverk utan att behöva lägga alltför mycket pengar och research inför varje val. </p>
                                <p>En
                                liten push
                                in i det kreativa, en låg tröskel till att testa på något nytt.
                            </p>
            </h4>

          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="row">
        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column justify-content-center py-5 px-4 px-sm-5">
            <h3 className="font-size-header mb-4">
              Pyssel utan slöseri
            </h3>
            <h4 className="font-size-subheader mb-4">
            <p>  
Innehållet i hantverkskitet är tillräckligt för att skapa 1 tvål, 2-4 lerfigurer, 2-4 smycken. 
Varför vi valt att begränsa innehållet i kitet är att ni ska få möjligheten att lära känna ett hantverk och därefter göra ett eget val om ni vill rikta er in på ett specifikt hantverk eller inte. 
 </p>
 <p>
Allt i hantverkskitet är återanvändningsbart! Följ vår instagram för roliga och användbara tips.</p>
            </h4>

          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/minimal waste.png" width="500" alt="GitHub illustration"/>
            </div>
          </div>
        </div>
      </div>
</div>
    <Footer />
  </Root>
);

export default About;
