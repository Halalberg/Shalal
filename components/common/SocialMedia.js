import React from 'react';

const imagesInfo = [
  {
    image: '/images/insta/10.png',
    translateRatio: -50
  },
  {
    image: '/images/insta/11.png',
    translateRatio: 30
  },
  {
    image: '/images/insta/12.png',
    translateRatio: 0
  },
  {
    image: '/images/insta/13.png',
    translateRatio: -20
  },
  {
    image: '/images/insta/14.png',
    translateRatio: -80
  }
];

export default class SocialMedia extends React.Component {
  constructor(props) {
    super(props);

    this.followContainer = React.createRef();
    this.images = [];

    this.animate = this.animate.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.animate();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    window.requestAnimationFrame(this.animate);
  };

  animate() {
    if (!this.followContainer.current) {
      return;
    }
    const dimensions = this.followContainer.current.getBoundingClientRect();

    if (dimensions.top - window.innerHeight < 0 && dimensions.bottom > 0) {
      const scrolledRatio =
        (window.innerHeight - dimensions.top) / window.innerHeight;

      this.images.forEach((image, index) => {
        const translateRatio = imagesInfo[index] ? imagesInfo[index].translateRatio : 0;
        image &&
          (image.style.transform = `translateY(${scrolledRatio * translateRatio}px)`);
      });
    }
  };

  render() {
    return (
      <footer className="pt-5">
        <div
          ref={this.followContainer}
          className="custom-container px-3 mb-5 footer-follow"
        >
          <div className="row footer-follow--header">
            <div className="px-3 footer-follow--title">
              <p
                className="font-size-display1 mb-3"
                style={{ maxWidth: '26rem' }}
              >
                Följ oss på instagram för mer uppdateringar!
              </p>
              <div className="d-flex">
                <a
                  href="https://www.instagram.com/shallowcrafts/"
                  className="d-flex py-3 align-items-center font-color-black borderbottom border-color-black"
                >
                  <p className="mr-3">Följ Oss</p>
                  <img src="/icon/arrow-long-right.svg" alt="Arrow icon"/>
                </a>
              </div>
            </div>
          </div>
          <div className="d-flex footer-follow--images">
            {imagesInfo.map((item, i) => (
              <div key={i} className="justify-content-sm-end flex-column follow-images">
                <div
                  ref={image => this.images.push(image)}
                  style={{
                    paddingBottom: '100%',
                    background: `url("${item.image}") center center/cover`
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </footer>
    );
  }
}
