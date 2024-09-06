import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { useParams } from 'react-router-dom';

    interface Message {
    message: string;
    sender: string;
    }

    interface User {
    id: string;
    username: string;
    }

const Chat = () => {
  // Obtenemos los parámetros como un Record y usamos aserciones de tipo para asegurarnos que cumplen con los tipos deseados
    const params = useParams();
    const username = params.username as string;
    const userId = params.userId as string;

    const [message, setMessage] = useState('');
    const [targetId, setTargetId] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);
    const [users, setUsers] = useState<User[]>([]);

    const socket = io(`http://192.168.51.26:3000`, {
        query: { userId }
    });

    useEffect(() => {
        socket.on('message', (msg) => {
            setMessages(prevMessages => [...prevMessages, msg]);
        });

        // Escuchar la actualización de usuarios en línea
        socket.on('updateUsers', (onlineUsers) => {
            setUsers(onlineUsers);
        });

        return () => {
            socket.off('message');
            socket.off('updateUsers'); // Asegurarse de apagar este evento también
        };
    }, [socket]);


const sendMessage = () => {
    if (message.trim() && targetId) {
        const content = { message, sender: username };
        console.log("Enviando mensaje:", { targetId, content }); 
        socket.emit('directMessage', { targetId, content });
        setMessage('');
    }
};

    return (
        <div className="chat-container">
        <ul>
            {messages.map((msg, index) => (
            <li key={index} className={msg.sender === username ? 'my-message' : 'other-message'}>
                <strong>{msg.sender}:</strong> {msg.message}
            </li>
            ))}
        </ul>
        <div>
            <input
            type="text"
            placeholder="Type your message here..."
            value={message}
            onChange={e => setMessage(e.target.value)}
            onKeyPress={e => e.key === 'Enter' && sendMessage()}
            />
            <select
            value={targetId}
            onChange={e => setTargetId(e.target.value)}
            >
            <option value="">Select user</option>
            {users.map(user => (
                <option key={user.id} value={user.id}>{user.username}</option>
            ))}
            </select>
            <button onClick={sendMessage}>Send</button>
        </div>
        </div>
    );
    };

export default Chat;
