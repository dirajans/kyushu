import { StyleSheet } from 'aphrodite';
import {
  backdropBlack,
  backdropYellow,
  backdropRed,
} from './../../../../images/IndexImages';

export const styles = StyleSheet.create({
  sectionBlack: {
    height: 450,
    backgroundImage: `url(${backdropBlack})`,
    backgroundPosition: 'left',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'black',
    backgroundAttachment: 'fixed',
  },
  sectionRed: {
    height: 350,
    backgroundImage: `url(${backdropRed})`,
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#cf0820',
    backgroundAttachment: 'fixed',
  },
  sectionYellow: {
    height: 300,
    backgroundImage: `url(${backdropYellow})`,
    backgroundPosition: 'left',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#fcd20e',
    backgroundAttachment: 'fixed',
  },
  text: {
    paddingTop: 100,
    paddingRight: 200,
    textAlign: 'center',
  }
})
