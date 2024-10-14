import React from 'react';
import Table from '../../reUsableComponents/Table';

const ServiceProviderManagement = () => {
  const tableConfig = {
    type: "serviceprovidermanagement", // Corrected the spelling to match the type
    title: "Service Provider Management",
  };

  const tableDataConfig = [
    {
      name: "Samanta William",
      id: "#129876543",
      date: "May 25, 2024",
      location: "Sydney",
      image: "/tableimage.png",
      contact: { phone: "123456789", mail: "samanta.william@example.com" },
      verifiedBy: "Admin",
      status: "Active",
    },
    {
      name: "Michael Smith",
      id: "#122345343",
      date: "December 25, 2023",
      location: "Sydney",
      image: "/tableimage.png",
      contact: { phone: "123456789", mail: "michael.smith@example.com" },
      verifiedBy: "Admin",
      status: "Not Active",
    },
    {
      name: "John Doe",
      id: "#125538065",
      date: "April 10, 2022",
      location: "New York",
      image: "/tableimage.png",
      contact: { phone: "987654321", mail: "john.doe@example.com" },
      verifiedBy: "Manager",
      status: "Not Active",
    },
    {
      name: "Emily Clarke",
      id: "#127838765",
      date: "May 15, 2022",
      location: "London",
      image: "/tableimage.png",
      contact: { phone: "456789012", mail: "emily.clarke@example.com" },
      verifiedBy: "Admin",
      status: "Active",
    },
  ];

  const tableColConfig = [
    "Name",
    "ID",
    "Date",
    "Verified By", // Ensure column is named exactly how it should be rendered
    "Location",
    "Contact",
    "Status",
    "Action"
  ];

  const cardConfig = [
    { title: "15K", subtitle: "Total Providers", iconBg: "bg-[#6F4FF2]" },
    { title: "5K", subtitle: "Verified Providers", iconBg: "bg-[#50BB25]" },
    { title: "200", subtitle: "Service Requests", iconBg: "bg-[#F9D62C]" },
    { title: "89", subtitle: "Lead Requests", iconBg: "bg-[#28B5E1]" },
    { title: "50", subtitle: "Active Providers", iconBg: "bg-[#167F71]" },
    { title: "12", subtitle: "Complaints", iconBg: "bg-[#DC3546]" },
  ];

  return (
    <div className="w-full font-poppins px-6 pb-10 lg:px-10">
      <div className="flex flex-wrap gap-5 pb-10">
        {cardConfig.map((item, index) => (
          <div key={index} className="flex w-56 bg-primary rounded-xl px-4 py-3">
            <span className={`flex items-center justify-center h-14 w-14 mr-4 rounded-full ${item.iconBg}`}>
              <img src='/card-icon.svg' alt="" />
            </span>
            <div>
              <h2 className="text-lg font-bold mb-1">{item.title}</h2>
              <p className="text-sm text-[#68676E]">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      <Table
        tableColConfig={tableColConfig}
        tableDataConfig={tableDataConfig}
        tableConfig={tableConfig}
      />
    </div>
  );
};

export default ServiceProviderManagement;
