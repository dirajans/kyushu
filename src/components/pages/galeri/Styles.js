import { StyleSheet } from 'aphrodite';

export const styles = StyleSheet.create({
  container: {
    paddingBottom: 30,
  },
  title: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  titleBar: {
    background:
          'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
          'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white'
  },
  circular: {
    minHeight: '100%',
    paddingTop: '20vh',
    paddingBottom: '20vh'
  }
})
