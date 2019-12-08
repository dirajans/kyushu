import { bg, backdrop } from './../../images/IndexImages';

export const styles = {
    container: {
      backgroundImage: `url(${bg})`,
      height: '90vh',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    },
    content: {
      height: '100%',
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      color: 'white',
    },
    sectionIntro: {
      height: 1080,
      backgroundImage: `url(${backdrop})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundColor: 'white',
      backgroundAttachment: 'fixed',
    },
    sectionOne: {
      height: 1080,
      backgroundImage: `url(${backdrop})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundColor: '#cf0820',
      backgroundAttachment: 'fixed',
    },
    sectionTwo: {
      height: 1080,
      backgroundImage: `url(${backdrop})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundColor: 'black',
      backgroundAttachment: 'fixed',
    },
    sectionThree: {
      height: 1080,
      backgroundColor: '#fcd20e',
    //   backgroundImage: `url(${backdrop})`,
    //   backgroundPosition: 'left',
    //   backgroundRepeat: 'no-repeat',
    },
  }