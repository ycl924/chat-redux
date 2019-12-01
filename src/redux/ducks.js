// actions

export const sendMessage = (message) => {
  return {
    type: 'SEND_MESSAGE',
    payload: message
  };
};

export const selectChannel = (channel) => {
  return {
    type: 'SELECT_CHANNEL',
    payload: channel
  };
};

// export const fetchMessages = (channel) => {
//   const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
//     .then(response => response.json());
//   return {
//     type: 'FETCH_MESSAGES',
//     payload: promise
//   };
// };

// reducer
export default function reducer(state, action) {
  switch (action.type) {
    case 'SEND_MESSAGE':
      return {
        ...state,
        selectedChannel: { ...state.selectedChannel,
          messages: [...state.selectedChannel.messages, action.payload] }
      };
    case 'SELECT_CHANNEL':
      return {
        ...state,
        channels: state.channels.map(channel => (channel.id === state.selectedChannel.id ? state.selectedChannel : channel)),
        selectedChannel: action.payload
      };
      // ),
    default:
      return state;
  }
}
