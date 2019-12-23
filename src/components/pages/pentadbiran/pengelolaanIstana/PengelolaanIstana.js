import React from 'react';

import ChartItem from './../ChartItem';
import IstanaBesarSeriMenanti from './IstanaBesarSeriMenanti';
import IstanaHinggap from './IstanaHinggap';
import StaffPeribadi from './StaffPeribadi';
import PembantuAwam from './PembantuAwam';
import IstanaNegeri from './IstanaNegeri';

import { Tree, TreeNode } from 'react-organizational-chart';

const pegawaiTadbir = [
  { name: 'Munzaid Bin Mariyono', position: 'Penolong Pegawai Tadbir N29', image: 'myimage' },
]

export default function PengelolaanIstana(){
  return (
    <Tree label={<ChartItem header={'Pengelolaan Istana'} />}>
    <TreeNode label={<ChartItem people={pegawaiTadbir} />}>
      <TreeNode label={<IstanaBesarSeriMenanti />} />
      <TreeNode label={<IstanaHinggap />} />
      <TreeNode label={<StaffPeribadi />} />
      <TreeNode label={<IstanaNegeri />} />
      <TreeNode label={<PembantuAwam />} />
    </TreeNode>
    </Tree>
  )
}
