'use client';

import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
const socket = io('http://localhost:8080');

socket.on('message', (data: string) => {
  console.log(data);
});

socket.emit('message', 'Hello from the clientd!');

export default function Home() {
  const [players, setPlayers] = useState<string[]>([]);
  const [playerName, setPlayerName] = useState<string>('');
  function joinGame() {
    if (playerName) {
      socket.emit('joinGame', playerName);
    }
  }
  socket.on('currentPlayers', (players) => setPlayers(players));
  // const [code, setCode] = useState('');
  // function onClickA() {
  //   socket.emit('join', { target: 'gameA' });
  // }

  // function generateRandomString() {
  //   // Create a string of uppercase letters.
  //   const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  //   // Generate a random string of 4 characters.
  //   let randomString = '';
  //   for (let i = 0; i < 4; i++) {
  //     const randomIndex = Math.floor(Math.random() * letters.length);
  //     randomString += letters[randomIndex];
  //   }

  //   // Return the random string.
  //   return randomString;
  // }

  // const handleClick = () => {
  //   const newCode = generateRandomString();
  //   setCode(newCode);
  // };

  return (
    <div>
      <input
        type='text'
        value={playerName}
        onChange={(e) => {
          setPlayerName(e.target.value);
        }}
      />
      <button onClick={joinGame}>Join Game</button>
      <p>Players</p>
      {players.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </div>
  );

  // function onClickB() {
  //   socket.emit('join', { message: 'gameB' });
  // }

  // return (
  //   <main className='flex min-h-screen flex-col items-center justify-between p-24'>
  //     <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
  //       <button
  //         onClick={onClickA}
  //       >
  //         Join Game A
  //       </button>
  //       {/* <button onClick={onClickB}>Join Game B</button> */}
  //     </div>
  //   </main>
  // );
}
