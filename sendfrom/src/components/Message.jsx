import { useState } from 'react';
import axios from 'axios';

const Message = () => {
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { message, email };

        try {
            const response = await axios.post('https://sendemailapi.up.railway.app/sendemail', data);
            console.log(response.data);
            alert('Message sent successfully!');
        } catch (error) {
            console.error(error);
        }

        setMessage('');
        setEmail('');
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="w-full md:w-1/2 lg:w-1/3 p-10 bg-white rounded-lg shadow-lg">
                <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-800 font-medium mb-2">
                        Message
                    </label>
                    <input
                        id="message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-3 py-2 rounded bg-gray-300 border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-800 font-medium mb-2">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 rounded bg-gray-300 border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        required
                    />
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="inline-block px-4 py-2 text-white font-semibold bg-indigo-500 rounded hover:bg-indigo-600 focus:bg-indigo-700"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Message;
