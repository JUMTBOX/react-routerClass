import React from 'react';
import Button from './Button';

export default function SkyBlueButton({ text, clickEvent }) {
  return (
    <Button
      mainColor="#72dcfa"
      subColor="#3a82e0"
      hoverColor="#CFECF2"
      text={text}
      clickEvent={clickEvent}
    />
  );
}
