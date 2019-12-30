import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function Sidebar() {
  const bahagianSatu = [
    { title: 'Bab 1 - Permulaan', ringkasan: 'Ringkasan Bab' },
    { title: 'Bab 2 - Agama Negeri', ringkasan: 'Ringkasan Bab' },
    { title: 'Bab 3 - Yang di-Pertuan Besar', ringkasan: 'Ringkasan Bab' },
    { title: 'Bab 4 - Pemangku Yang di-Pertuan Besar', ringkasan: 'Ringkasan Bab' },
    { title: 'Bab 5 - Undang Yang Empat dan Tunku Besar Tampin', ringkasan: 'Ringkasan Bab' },
    { title: 'Bab 6 - Dewan Keadilan dan Undang', ringkasan: 'Ringkasan Bab' },
    { title: 'Bab 7 - Kehormatan dan Kebesaran', ringkasan: 'Ringkasan Bab' },
    { title: 'Bab 8 - Syarat - Syarat Am', ringkasan: 'Ringkasan Bab' },
  ]

  const bahagianDua = [
    { title: 'Bab 1 - Permulaan', ringkasan: 'Ringkasan Bab' },
    { title: 'Bab 2 - Pemerintahan', ringkasan: 'Ringkasan Bab' },
    { title: 'Bab 3 - Kuasa Mengampunkan', ringkasan: 'Ringkasan Bab' },
    { title: 'Bab 4 - Kuasa Negeri', ringkasan: 'Ringkasan Bab' },
    { title: 'Bab 5 - Kuasa Undangan Negeri', ringkasan: 'Ringkasan Bab' },
    { title: 'Bab 6 - Hal Ehwal Kewangan', ringkasan: 'Ringkasan Bab' },
    { title: 'Bab 7 - Syarat - Syarat Am', ringkasan: 'Ringkasan Bab' },
    { title: 'Bab 8 - Syarat - Syarat Pertukaran', ringkasan: 'Ringkasan Bab' },
    { title: 'Bab 9 - Pembatalan', ringkasan: 'Ringkasan Bab' },
  ]

  const jadual = [
    { title: 'Fasal 39 - Sumpah Ahli Majlis Mesyuarat Kerajaan', ringkasan: 'Ringkasan Bab' },
    { title: 'Fasal 58 - Sumpah Ahli Majlis Dewan Negeri', ringkasan: 'Ringkasan Bab' },
    { title: 'Fasal 37 (4) - Sumpah Pegawai Kerajaan Yang Mengambil Bahagian di dalam Rundingan Majlis Mesyuarat Kerajaan', ringkasan: 'Ringkasan Bab' },
    { title: 'Fasal 39A (3) - Sumpah Setiausaha Politik', ringkasan: 'Ringkasan Bab' },
  ]

  const ExpansionPanelComponent = ({ children, title, expanded, header }) => {
    return (
      <ExpansionPanel expanded={ expanded ? true : false }>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={css(styles.heading)}>
            {header && (
              <span style={{ fontWeight: 'bold' }}>{title}</span>
            )}
            {!header && title }
          </Typography>
        </ExpansionPanelSummary>
        {children}
      </ExpansionPanel>
    )
  }

  return (
    <div className={css(styles.root)}>
      <ExpansionPanelComponent title={'Bahagian Satu'} expanded header>
        {bahagianSatu.map( (bab) => (
          <ExpansionPanelComponent title={bab.title}>
            <ExpansionPanelDetails>
              <Typography>
                {bab.ringkasan}
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanelComponent>
        ))}
      </ExpansionPanelComponent>

      <ExpansionPanelComponent title={'Bahagian Dua'} expanded header>
        {bahagianDua.map( (bab) => (
          <ExpansionPanelComponent title={bab.title}>
            <ExpansionPanelDetails>
              <Typography>
                {bab.ringkasan}
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanelComponent>
        ))}
      </ExpansionPanelComponent>

      <ExpansionPanelComponent title={'Jadual'} expanded header>
        {jadual.map( (bab) => (
          <ExpansionPanelComponent title={bab.title}>
            <ExpansionPanelDetails>
              <Typography>
                {bab.ringkasan}
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanelComponent>
        ))}
      </ExpansionPanelComponent>
    </div>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: 15,
  },
})