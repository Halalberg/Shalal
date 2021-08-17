import React, { useEffect, useState } from 'react';
import commerce from '../../lib/commerce';
import { Collapse } from 'react-collapse';
import Head from 'next/head';
import ErrorPage from 'next/error'
import { useRouter } from 'next/router';
import Root from '../../components/common/Root';
import TemplatePage from '../../components/common/TemplatePage';
import CarouselImages from '../../components/productAssets/CarouselImages';
import ProductDetail from '../../components/productAssets/ProductDetail';
import ClientReview from '../../components/productAssets/ClientReview';
import SuggestedProducts from '../../components/productAssets/SuggestedProducts';
import ExploreBanner from '../../components/productAssets/ExploreBanner';
import Footer from '../../components/common/Footer';
import SocialMedia from '../../components/common/SocialMedia';
import CategoryList from '../../components/products/CategoryList';
import reduceProductImages from '../../lib/reduceProductImages';

const detailView = `<p>
Tvål kit: Vit tvålmassa, ekologiskt eterisk lavendelolja, torkade lavendelblommor, silikonform.<br>
Ler kit: Vit och grå naturlera. 
<p>Smyckeskit: Glaspärlor, vit och mintgrön bomullstråd, vit tygpåse. </p><br>


<p>Detaljer kring innehållet</p> <br>
Tvålmassa<br>
INCI: Aqua, Glycerin, Sorbitol, Sodium Stearate,<br>
 Sodium Laurate, Propylene Glycol, Sodium Oleate,<br>
  Sodium Myristate, Sodium Chloride, Glyceryl Mono Laurate,<br>
   Cocamidopropyl Betaine, Cocos Nucifera (Coconut) Oil, <br>
   Sodium Thiosulphate, Sodium Citrate, Citric Acid, <br>
   Titanium Dioxide, Trisodium Sulfosuccinate, <br>
   <p> Pentasodium Pentatate, Tetrasodium Etidronate.</p>
   <br>
<p>Tillverkad av Stephenson Personal Care.</p><br>

<p>Ekologisk eterisk lavendel olja
</p><br>
Eteriska oljor ska generellt aldrig användas direkt <br>
på huden utan skall tillsättas i tvålmassan.<br>
I hudprodukter rekommenderas sammanlagt max 0,5% eterisk olja.<br>
Lavendeloljan är säker att förtära dock med största försiktighet.<br>
Dosering av eteriska oljor för invärtes bruk är svår <br>
då produkten inte är standardiserad och kan variera i styrka.<br>
Eteriska oljor är giftiga och livsfarliga är för stor dos.<br>
Eteriska oljor bör förvaras mörkt och svalt.<br>

</p>`;

export default function Product() {
  const router = useRouter();
  const { permalink } = router.query;
  const [showShipping, setShowShipping] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const toggleShipping = () => {
    setShowShipping(!showShipping);
  }

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  }

  useEffect(() => {
    if (!permalink) {
      return;
    }

    const fetchProductByPermalink = async (permalink) => {
      try {
        const product = await commerce.products.retrieve(permalink, { type: 'permalink '});
        setProduct(product);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchProductByPermalink(permalink);
  }, [permalink]);

  if (loading) {
    return <TemplatePage page={ {message: 'Loading...'} } />
  }

  if (product === null) {
    return <ErrorPage statusCode={404} />
  }

  const images = reduceProductImages(product);
  return (
    <Root>
      <Head>
        <title>{ product.name } | Shallow Crafts</title>
      </Head>

      <div className="py-5 my-5">
      <div className="main-product-content">
 

          







        <div className="product-images">
          <div className="flex-grow-1">
            {Array.isArray(images) ? (images.map((image, i) => (
              <img
                key={i}
                src={image}
                className="w-100 mb-3 carousel-main-images"
              />
            ))) : (
              ''
            )}
          </div>
        </div>

        {/* Right Section - Product Details */}
        <div className="product-detail">
          <ProductDetail product={product} />

          <div
            onClick={toggleShipping}
            className="d-flex cursor-pointer py-3 justify-content-between font-weight-medium"
          >
            Leverans och retur
            <img src="/icon/plus.svg" />
          </div>
          <Collapse isOpened={showShipping}>
            <div className="pb-4 font-color-medium">
              Leveranstid 1-3 vardagar. Fraktkostnad på 59SEK inrikes tillkommer, utrikes 185SEK. För mer information gällande leverans och retur se våra <a href="/terms">villkor.</a>
            </div>
          </Collapse>
          <div className="h-1 border-bottom border-color-black" />
          <div
            onClick={toggleDetails}
            className="d-flex cursor-pointer py-3 justify-content-between font-weight-medium"
          >
            Innehållsförteckning
            <img src="/icon/plus.svg" />
          </div>
          <Collapse isOpened={showDetails}>
            <div
              className="pb-4 font-color-medium"
              dangerouslySetInnerHTML={{
                __html: detailView
              }}
            />
          </Collapse>
          <div className="h-1 borderbottom border-color-black" />
        </div>
      </div>
    </div>

    
   
    <Footer />
  </Root>
  );
}
