import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

interface ChatProps {
    username?: string;
    userId: string;  // Asegúrate de tener un identificador para cada usuario
}


const Chat: React.FC<ChatProps> = ({ username, userId }) => {
    const [message, setMessage] = useState<string>('');
    const [targetId, setTargetId] = useState<string>('');
    const [messages, setMessages] = useState<{ message: string, sender: string }[]>([]);

    useEffect(() => {
        socket.on('message', (msg: { message: string, sender: string }) => {
            setMessages((prevMessages) => [...prevMessages, msg]);
        });

        return () => {
            socket.off('message');
        };
    }, []);

    const sendMessage = (): void => {
        if (message.trim() && targetId) {
            socket.emit('directMessage', { targetId, content: { message, sender: username || 'Anonymous' }});
            setMessage('');
        }
    };

    return (
        <div className="p-4 h-screen flex flex-col justify-between">
            <ul className="overflow-auto h-5/6">
                {messages.map((msg, index) => (
                    <li key={index} className={`p-2 rounded-lg m-2 ${
                        msg.sender === username ? 'bg-blue-500 text-white self-end' : 'bg-gray-300'
                    }`}>
                        <strong>{msg.sender}:</strong> {msg.message}
                    </li>
                ))}
            </ul>
            <div className="flex">
                <input
                    type="text"
                    placeholder="Type your message here..."
                    className="flex-1 p-2 border-2 border-gray-300 rounded-l-lg"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' ? sendMessage() : null}
                />
                <select
                    className="border-2 border-gray-300 rounded-lg"
                    value={targetId}
                    onChange={(e) => setTargetId(e.target.value)}
                >
                    {/* Suponiendo que tienes una lista de usuarios, renderízalos aquí */}
                    {/* <option value={user.id}>{user.name}</option> */}
                </select>
                <button 
                    className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
                    onClick={sendMessage}
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default Chat;
