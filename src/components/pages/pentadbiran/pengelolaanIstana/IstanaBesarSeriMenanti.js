import React from 'react';

import ChartItem from './../ChartItem';

import { Tree, TreeNode } from 'react-organizational-chart';

export default function IstanaBesarSeriMenanti(){
  const pembantuOperasi = [
    { name: 'Muhammad Izmar Azlif Bin Kamar Asma (***) (K)', position: 'Pembantu Operasi N11/N14', image: 'myimage' },
    { name: 'Noor Afidah Binti Jaapar (***)(**) (K)', position: 'Pembantu Operasi N11/N14', image: 'myimage' },
    { name: 'Mohamad Haikal Bin Alwi (***) (K)', position: 'Pembantu Operasi N11/N14', image: 'myimage' },
    { name: 'Nooraini Binti Ramly (K)', position: 'Pembantu Operasi N11/N14', image: 'myimage' },
    { name: 'Nurazira Binti Abu Hassan (T)', position: 'Pembantu Operasi N11/N14', image: 'myimage' },
    { name: 'Muhamad Alfirdhaus Bin Eddie (K)', position: 'Pembantu Operasi N11/N14', image: 'myimage' },
  ]

  const pembantuAwam14 = [
    { name: 'Norisman Bin Ishak (T)', position: 'Pembantu Awam H14', image: 'myimage' },
  ]

  const pembantuAwam1114 = [
    { name: 'Norfarraasikin Binti Abd Halim (K)', position: 'Pembantu Awam H11/H14', image: 'myimage' },
    { name: 'Abdul Muhip Bin Haji Husain (K)', position: 'Pembantu Awam H11/H14', image: 'myimage' },
    { name: 'M. Kamaruzaman Bin Mustafa (***) (K)', position: 'Pembantu Awam H11/H14', image: 'myimage' },
    { name: 'Abdul Hamid Bin Hassan (K)', position: 'Pembantu Awam H11/H14', image: 'myimage' },
    { name: 'Mansor@Aziz Bin Jalil (K)', position: 'Pembantu Awam H11/H14', image: 'myimage' },
    { name: 'Rahim Bin Ali (K)', position: 'Pembantu Awam H11/H14', image: 'myimage' },
    { name: 'Mohamad Faiz Bin Hasan (K)', position: 'Pembantu Awam H11/H14', image: 'myimage' },
    { name: 'Musalmah Binti Rashad (T)', position: 'Pembantu Awam H11/H14', image: 'myimage' },
    { name: 'M. Zhafiri Bin M. Yunus (T)', position: 'Pembantu Awam H11/H14', image: 'myimage' },
    { name: 'Muhammad Anuar Bin Kadir (K)', position: 'Pembantu Awam H11/H14', image: 'myimage' },
    { name: 'M. Firdaus Bin Zainuddin (T)', position: 'Pembantu Awam H11/H14', image: 'myimage' },
  ]

  return (
    <Tree label={<ChartItem header={'Istana Besar Seri Menanti'} />}>
      <TreeNode label={<ChartItem people={pembantuOperasi} />}>
        <TreeNode label={<ChartItem people={pembantuAwam14} />}>
          <TreeNode label={<ChartItem people={pembantuAwam1114} />} />
        </TreeNode>
      </TreeNode>
    </Tree>
  )
}
