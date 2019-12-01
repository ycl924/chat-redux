import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectChannel } from '../redux/ducks';

const Channel = (props) => {
  const selchan = useSelector(state => state.selectedChannel);
  const dispatch = useDispatch();
  return (
    <div className="channel">
      <p onClick={
        () => {
          dispatch(selectChannel(props.channel))
          console.log(selchan)}}>
        #{props.channel.name}
      </p>
    </div>
  );
};

export default Channel;
