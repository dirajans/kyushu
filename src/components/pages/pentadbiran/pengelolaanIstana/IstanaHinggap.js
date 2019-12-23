import React from 'react';

import ChartItem from './../ChartItem';

import { Tree, TreeNode } from 'react-organizational-chart';

export default function IstanaBesarSeriMenanti(){
  const pembantuOperasi14 = [
    { name: 'Ishak Bin Abd Rahman (K)', position: 'Pembantu Operasi N14', image: 'myimage' },
  ]

  const pembantuOperasi1114 = [
    { name: 'Mohd Bin Kasim (K)', position: 'Pembantu Operasi N11/N14', image: 'myimage' },
    { name: 'Rohana binti Ahmad (K)', position: 'Pembantu Operasi N11/N14', image: 'myimage' },
    { name: 'Norhazunika Binti Azahar (T)', position: 'Pembantu Operasi N11/N14', image: 'myimage' },
  ]

  const pembantuAwam14 = [
    { name: 'Zahrene Bin Abdullah (K)', position: 'Pembantu Awam H14', image: 'myimage' },
  ]

  const pembantuAwam1114 = [
    { name: 'Fadlisham Bin Abd Malek (T)', position: 'Pembantu Awam H11/H14', image: 'myimage' },
    { name: 'Shahri Bin Mohamed (K)', position: 'Pembantu Awam H11/H14', image: 'myimage' },
    { name: 'M. Nizam Bin Yusop (K)', position: 'Pembantu Awam H11/H14', image: 'myimage' },
    { name: 'Mohd Ezuan Bin Adam (K)', position: 'Pembantu Awam H11/H14', image: 'myimage' },
  ]

  return (
    <Tree label={<ChartItem header={'Istana Hinggap'} />}>
      <TreeNode label={<ChartItem people={pembantuOperasi14} />}>
        <TreeNode label={<ChartItem people={pembantuOperasi1114} />}>
          <TreeNode label={<ChartItem people={pembantuAwam14} />}>
            <TreeNode label={<ChartItem people={pembantuAwam1114} />} />
          </TreeNode>
        </TreeNode>
      </TreeNode>
    </Tree>
  )
}
