import React from 'react';

const TeamsPage = () => {
  const teamMembers = [
    { name: "John Doe", role: "Senior Developer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" },
    { name: "Jane Smith", role: "UI/UX Designer", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" },
    { name: "Mike Johnson", role: "DevOps Engineer", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" },
    { name: "Sarah Williams", role: "Data Scientist", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" },
    { name: "Alex Brown", role: "Cloud Architect", image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" },
    { name: "Emily Davis", role: "QA Engineer", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" },
    { name: "Chris Lee", role: "Frontend Developer", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" },
    { name: "Laura Wilson", role: "Backend Developer", image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" },
    { name: "Tom Harris", role: "CTO", image: "https://images.unsplash.com/photo-1503443207922-dff7d5436e10?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" },
    { name: "Anna Taylor", role: "Product Manager", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" },
    { name: "Paul Martinez", role: "Network Engineer", image: "https://images.unsplash.com/photo-1531123897727-8f129e672f9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" },
    { name: "Sophie Clark", role: "Cybersecurity Expert", image: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-pulse">
          Our IT Team
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          At Seinxera, we are a leading IT company delivering cutting-edge solutions in software development, cloud services, and cybersecurity. Meet our talented team driving innovation!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-4 transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamsPage;