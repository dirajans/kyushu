import React from 'react';

import PageContainer from '../../shared/containers/PageContainer';
import PengelolaanIstana from './pengelolaanIstana/PengelolaanIstana';

export default function IndexPentadbiran(){
    return (
      <PageContainer>
        <div style={{ padding: 20 }}>
          <PengelolaanIstana />
        </div>
      </PageContainer>
    )
}
