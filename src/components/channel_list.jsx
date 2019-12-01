import React from 'react';
import { useSelector } from 'react-redux';

import Channel from './channel';

const ChannelList = () => {
  const channels = useSelector(state => state.channels);

  return (
    <div className="channel-list">
      <h3>Channels</h3>
      {channels.map(c =>
        <Channel key={c.id} channel={c} />
      )
      }
    </div>
  );
};

export default ChannelList;
