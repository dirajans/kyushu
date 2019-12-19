import { StyleSheet } from 'aphrodite';
import { fadeInRight } from 'react-animations';
import { backdrop } from './../../../images/IndexImages';

export const styles = StyleSheet.create({
  sectionDefault: {
    height: 1080,
    backgroundColor: 'white',
  },
  sectionBlack: {
    height: 1080,
    backgroundImage: `url(${backdrop})`,
    backgroundPosition: 'left',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'black',
    backgroundAttachment: 'fixed',
  },
  sectionRed: {
    height: 1080,
    backgroundImage: `url(${backdrop})`,
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#cf0820',
    backgroundAttachment: 'fixed',
  },
  sectionYellow: {
    height: 1080,
    backgroundImage: `url(${backdrop})`,
    backgroundPosition: 'left',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#fcd20e',
    backgroundAttachment: 'fixed',
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  bounce: {
    animationName: fadeInRight,
    animationDuration: '2s'
  }
})
