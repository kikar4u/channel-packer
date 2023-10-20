import { MemoryRouter as Router } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';

import processImage from '../main/processImage';
import ChannelDiv from './ChannelDiv';

import './App.css';

export default function App() {
  type Channel = {
    id: number;
    label: string;
    selectedFile: File | null;
    uploadedImageUrl: string | null;
  };
  const [channels, setChannels] = useState<Channel[]>([
    { id: 1, label: 'Red', selectedFile: null, uploadedImageUrl: null },
    { id: 2, label: 'Green', selectedFile: null, uploadedImageUrl: null },
    { id: 3, label: 'Blue', selectedFile: null, uploadedImageUrl: null },
    { id: 4, label: 'Alpha', selectedFile: null, uploadedImageUrl: null },
    // Add more channel objects as needed
  ]);

  const onFileChange = (
    event: ChangeEvent<HTMLInputElement>,
    channelId: number,
  ) => {
    const updatedChannels = channels.map((channel) =>
      channel.id === channelId
        ? {
            ...channel,
            selectedFile:
              event.target.files && event.target.files.length > 0
                ? (event.target.files[0] as File)
                : null,
          }
        : channel,
    );
    setChannels(updatedChannels);
  };

  const onFileUpload = (channelId: number) => {
    const channel = channels.find((c) => c.id === channelId);
    if (channel?.selectedFile) {
      const updatedChannels = channels.map((currentChannel) => {
        return currentChannel.id === channelId
          ? {
              ...currentChannel,
              uploadedImageUrl: currentChannel.selectedFile
                ? (currentChannel.selectedFile as File).path
                : null,
            }
          : currentChannel;
      });
      setChannels(updatedChannels);
      console.log('Uploading file...', (channel.selectedFile as File).path);
      processImage(channel.selectedFile.path, './src/');
    } else {
      console.log('No file selected!');
    }
  };
  return (
    <Router>
      {channels.map((channel) => (
        <ChannelDiv
          key={channel.id}
          url={
            channel.uploadedImageUrl ||
            'https://i.ibb.co/FHN8Yrm/Fv0-QTg-TXs-AIRK-N.jpg'
          }
          label={channel.label}
          onFileChange={(event: ChangeEvent<HTMLInputElement>) =>
            onFileChange(event, channel.id)
          }
          onFileUpload={() => onFileUpload(channel.id)}
        />
      ))}
    </Router>
  );
}
