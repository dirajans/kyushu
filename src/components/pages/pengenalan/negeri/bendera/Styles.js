import { StyleSheet } from 'aphrodite';
import { backdrop } from './../../../../images/IndexImages';

export const styles = StyleSheet.create({
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
})
