
import React, { useEffect, useState } from 'react';

const Card = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("/Tickets.json")
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    return (
        <div className="bg-gray-100 w-full py-10">
            <div className="max-w-[1200px] mx-auto mb-6">
                <h1 className="font-semibold text-2xl">Customer Tickets</h1>
            </div>
            <div className="max-w-[1250px] mx-auto flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-[70%]">
                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {users.map(ticket => (
                            <div key={ticket.id} className="bg-white rounded-lg shadow-md p-5 hover:shadow-xl transition">
                                <div className="flex justify-between items-center mb-3">
                                    <h2 className="text-lg font-bold">{ticket.title}</h2>
                                    <div className={`flex items-center gap-2 rounded-full w-[120px] h-[28px] px-2
                                        ${ticket.status === "Open" ? "bg-green-200" : "bg-orange-200"}`}>
                                        <img
                                            src={ticket.status === "Open" ? "/images/Ellipse 22.png" : "/images/Ellipse 22 (2).png"}
                                            alt=""
                                            className="w-4 h-4"
                                        />
                                        <span className={`text-sm font-medium 
                                            ${ticket.status === "Open" ? "text-green-700" : "text-orange-700"}`}>
                                            {ticket.status}
                                        </span>
                                    </div>
                                </div>
                                <p className="text-gray-700 mb-3">{ticket.description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-4">
                                        <div className="flex gap-2 items-center">
                                            <p className="text-gray-600 font-semibold">#{ticket.id}</p>
                                            <span className={`px-1 py-1 rounded text-xs 
                                                ${ticket.priority === "HIGH PRIORITY" ? "text-red-600 bg-red-100" : "text-green-500 bg-green-100"}`}>
                                                {ticket.priority}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <span>{ticket.customer}</span>
                                            <img src="/images/card.png" alt="" className="w-4 h-4" />
                                            <span>{ticket.createdAt}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full md:w-[340px] bg-white rounded-lg shadow-md p-6">
                    <h1 className="text-xl font-bold mb-2">Task Status</h1>
                    <p className="text-gray-600">Extra banner-like space</p>
                </div>
            </div>
        </div>
    );
};

export default Card;




