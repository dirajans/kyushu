import React from 'react';
import PageContainer from '../../../../shared/containers/PageContainer';
import {
    Typography,
    Grid,
    Divider,
    Container
} from '@material-ui/core';
import { munawir } from './../../../../images/IndexImages';

export default function Munawir(){
    return (
        <PageContainer>
            <Container>
                <br/><br/><br/><br/>
                <Grid container spacing={6}>
                <Grid item lg={5}>
                    <img src={munawir} alt={''} style={{ maxWidth: '100%', height: 'auto'}} />
                </Grid>
                <Grid item lg={7}>
                    <Typography variant={'h4'}>
                        Tuanku Munawir ibni Almarhum Tuanku Abdul Rahman
                    </Typography>
                    <br/>
                    <Divider />
                    <br/>
                    <Typography variant={'body1'} style={{ textAlign: 'justify' }}>
                    Tuanku Munawir ibni Almarhum Tuanku Abdul Rahman merupakan Yang Di-Pertuan Besar Negeri Sembilan yang
                    kesembilan dari 5 April 1960 - 14 April 1967. Baginda merupakan putera sulung kepada Yang di-Pertuan Agong
                    Malaysia yang pertama iaitu Almarhum Tuanku Abdul Rahman dan Tuanku Maharunnisa binti Tunku Membang.
                    <br/><br/>
                    Almarhum Tuanku Munawir telah diputerakan pada 29 Mac 1922 di Kuala Pilah, Negeri Sembilan. Baginda merupakan
                    putera sulung daripada 8 beradik. Tuanku Munawir mendapat pendidikan awal di Sekolah Seri Menanti, Kolej Melayu
                    Kuala Kangsar (MCKK) dan di Sekolah King George V, Seremban. Seterusnya baginda telah ke luar negara untuk
                    melanjutkan pelajaran di School of Oriental & African Studies (SOAS) di London, UK.
                    <br/><br/>
                    <strong>Pelantikkan Raja Bergelar</strong>
                    <br/>
                    Baginda telah dikurniakan gelaran Yang Amat Mulia Tunku Muda Serting pada 6 Julai 1934 pada usia 12 tahun
                    setelah ayahanda baginda menaiki takhta Negeri Sembilan pada tahun 1933. Seterusnya baginda telah dilantik
                    sebagai Yang Amat Mulia Tunku Laksamana pada 25 April 1937 pada usia 15 tahun.
                    <br/><br/>
                    Tuanku Munawir juga pernah menjadi Pemangku Yang di-Pertuan Besar Negeri Sembilan sebanyak 2 kali.
                    Pertamanya pada 31 Ogos 1954 hingga November 1954 dimana ayahanda baginda berangkat ke luar negara. Dan kali
                    kedua semasa ayahanda baginda diangkat sebagai Seri Paduka Baginda Yang Di Pertuan Agong Malaysia yang pertama
                    bermula tanggal 3 September 1957 hingga 5 April 1960.
                    <br/><br/>
                    <strong>Yang di-Pertuan Besar</strong>
                    <br/>
                    Baginda seterusnya menaiki takhta sebagai Yang di-Pertuan Besar Negeri Sembilan apabila ayahanda baginda
                    mangkat pada 1 April 1960 ketika menjadi Yang di-Pertuan Agong Malaysia yang pertama.
                    <br/><br/>
                    Adinda baginda iaitu Tuanku Ja’afar ditabalkan sebagai Yang di-Pertuan Besar Negeri Sembilan ke-10 selepas
                    kemangkatan baginda. Ketika kemangkatan baginda, anakanda baginda berusia 18 tahun dan Perdana Menteri Malaysia
                    ketika itu, Tunku Abdul Rahman mencadangkan agar adinda baginda, Tuanku Ja'afar menaiki takhta dan dengan
                    perkenan muafakat Majlis Undang Yang Empat telah dilantik menjadi Yang Di-Pertuan Besar menggantikkannya.
                    <br/><br/>
                    Anakanda baginda, Tuanku Muhriz pula merupakan Yang Di-Pertuan Besar Negeri Sembilan yang ke-11 menggantikan
                    Tuanku Ja'afar yang mangkat pada 27 Disember 2008.
                    <br/><br/>
                    <strong>Kehidupan</strong>
                    <br/>
                    Baginda telah mendirikan rumah tangga bersama Tuanku Ampuan Durah Binti Almarhum Tunku Besar Burhanuddin pada
                    1940, dan keduanya dengan Engku Fatimah Zaharah.
                    </Typography>
                </Grid>
            </Grid>
            <br/><br/><br/><br/>
            </Container>
        </PageContainer>
    )
}
