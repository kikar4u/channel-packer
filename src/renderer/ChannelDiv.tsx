import React from 'react';

export default function ChannelDiv({ url, label, onFileChange, onFileUpload }) {
  return (
    <div className="mainImage">
      <h1 className="channelName">{label}</h1>
      <input type="file" onChange={onFileChange} />
      <button type="button" onClick={onFileUpload}>
        Upload!
      </button>
      <img src={url} alt="result" />
    </div>
  );
}
