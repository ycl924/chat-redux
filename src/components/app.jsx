import React from 'react';
import LogoBar from './logobar';
import ChannelList from './channel_list';
import MessageList from './message_list';

const App = () => {
  console.log(process.version);

  return (
    <div className="app">
      <LogoBar />
      <ChannelList />
      <MessageList />
    </div>
  );
};

export default App;
