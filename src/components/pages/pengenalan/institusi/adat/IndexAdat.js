import React from 'react';
import { 
  Container, 
  Typography,
  Grid,
  Divider,
} from '@material-ui/core';
import PageContainer from './../../../../shared/containers/PageContainer';

export default function DesktopComponents(){
  return (
    <PageContainer>
    <Container>
      <br/><br/><br/><br/>
      <Grid container>
        <Grid item lg={3}>
        </Grid>
        <Grid item lg={6}>
        <Typography variant={'h6'} style={{ color: 'grey'}}>
          Pengenalan
        </Typography>
        <Typography variant={'h4'}>
          Adat Perpatih
        </Typography>
        <br/>
        <Divider />
        <br/>
        
      <Typography variant={'body1'} style={{ textAlign: 'justify' }}>
        Adat Perpatih adalah amalan hidup yang jauh lebih lama daripada Common Law yang hanya bermula sekitar tahun 1066 Masihi. 
        Adat ini berasal dari Alam Minangkabau. Adat Perpatih telah dibawa dan diterima pakai di Negeri Sembilan oleh para perantau 
        yang mula meneroka wilayah ini sekitar abad ke-12. Walaupun Adat Perpatih yang diamalkan oleh masyarakat pedalaman Negeri 
        Sembilan telah melalui proses pengubahsuaian, namun dasar adat ini masih kekal iaitu menjuraikan keturunan berdasarkan 
        sistem nasab ibu atau matrilineal.<br/>
        <br/>
        Adat Alam Minangkabau telah melalui tiga bentuk perkembangan utama iaitu Undang-undang Nan Tigo, Adat Tarik Baleh dan 
        Adat Tuah Disakato susunan Datuk Perpatih Nan Sebatang. Kesan perkembangan ini telah mewujudkan dua (2) sistem nasab iaitu:
        <br/>
        
        <br/>
        <div style={{ textAlign: 'center', fontStyle: 'italic' }}>
        Nasab bapa (patrilineal) yang dikaitkan dengan Datuk Ketemenggungan.<br/>
        Nasab ibu (matrilineal) yang dikaitan dengan Datuk Perpatih Nan Sebatang<br/>
        </div>
        <br/>

        Berikutan dengan kewujudan dua (2) sistem ini, wujud konsep Laras Nan Dua iaitu Bodi-Cianago dan Kota-Piliang di Minangkabau. 
        Melalui pemuafakatan antara kedua-dua orang pemimpin ini yang ditandai dengan batu batikam dan batu baling, dua (2) 
        sistem (nasab ibu dan nasab bapa) telah menjadi satu Adat Tuah Disakato. Penggabungan dua sistem menjadi satu yang digunakan 
        sehingga kini dikenali sebagai Adat Alam Minangkabau.<br/>
        <br/>
        Di Negeri Sembilan, kedua-dua laras ini digabungkan menjadi satu Adat Perpatih, Adat Perpatih Negeri Sembilan adalah variasi 
        adat Alam Minangkabau, Adat Perpatih melestari kehidupan masyarakat tempatan melalui prinsip kerukunan hidup termasuk konsep 
        dan amalan budi, undang-undang, perlembagaan, kuasa adat, kepentingan hartanah, kekeluargaan, alam semula jadi dan 
        aspek-aspek kehidupan yang lain.<br/>
        <br/>
        Adat Perpatih adalah satu sistem kemasyarakatan yang lengkap. Sistem ini tidak statik, tetapi dinamik kerana memberi ruang, 
        peluang dan peraturan untuk mengubahnya mengikut masa, keadaan dan zaman. Kedinamikan adat ini termaktub dalam 
        perlembagaannya yang dipaparkan dalam bentuk puisi.<br/>
        
        <br/>
        <div style={{ textAlign: 'center', fontStyle: 'italic' }}>
        ‘Baik diterima dek muafakat,<br/>
        Buruk ditolak dek rundingan,<br/>
        Tak ada yang keruh yang tak jernih,<br/>
        Tak ada yang kusut yang tak selesai.<br/>
        Usang-usang diperbaharui,<br/>
        Lapuk-lapik dikajangi.<br/>
        Sekali air bah,<br/>
        Sekali tebing berubah,<br/>
        Sekali raja mangkat,<br/>
        Sekali adat beralih,<br/>
        Sekali tahun beredar,<br/>
        Sekali musim bertukar.’<br/>
        </div>
      </Typography>
      
      <br/>
      <Divider />
      <br/>
      
      <Typography variant={'h5'}>
      Institusi Kepimpinan Dalam Masyarakat Adat Perpatih
      </Typography>
      <br/>
      <Typography variant={'body1'}>
      Masyarakat Adat Perpatih dibahagikan kepada beberapa kelompok kekeluargaan iaitu suku yang dipecahkan kepada kelompok Perut, 
      diikuti oleh kelompok ruang dan yang paling kecil adalah kelompok kekeluargaan rumpun. Setiap kelompok ini mempunyai 
      pemimpinnya tersendiri:<br/>
      <br/>
      <div style={{ textAlign: 'center', fontStyle: 'italic' }}>
      Kodim - Ketua kelompok kekeluargaan rumpun (sublineage)<br/>
      Besar - Ketua kelompok kekeluargaan ruang (lineage)<br/>
      Buapak - Ketua kelompok kekeluargaan perut (subclan)<br/>
      Lembaga - Ketua kelompok kekeluargaan suku (clan)<br/>
      </div>
      <br/>
      Suku-suku di Negeri Sembilan:<br/>
      <br/>
      <div style={{ textAlign: 'center', fontStyle: 'italic' }}>
      Biduanda<br/>
      Paya Kumboh<br/>
      Tanah Datar<br/>
      Batu Hampar<br/>
      Tiga Nenek<br/>
      Anak Acheh<br/>
      Mungkal	Sri Melenggang<br/>
      Anak Melaka<br/>
      Sri Lemak<br/>
      Batu Belang<br/>
      Tiga Batu<br/>
      </div>
      </Typography>
        </Grid>
        <Grid item lg={3}>
        </Grid>
      </Grid>
      <br/><br/>
    </Container>
  </PageContainer>
  )
}
