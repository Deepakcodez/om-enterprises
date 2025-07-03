
export const menus = [
  {
    name: "Home",
    link: "/"
  },
  {
    name: "Services",
    link: "/services",
    submenu: [
      {
        name: "Messaging",
        link: "/services/messaging/a2p-messaging",
        submenu: [
          { name: "A2P Messaging", link: "/services/messaging/a2p-messaging" },
          { name: "RCS Business Messaging", link: "/services/messaging/rcs-business-messaging" },
          { name: "Whatsapp Business Messages", link: "/services/messaging/whatsapp-business" },
          { name: "2 Way Solution", link: "/services/messaging/two-way-messaging" },
          { name: "Mail 2 SMS", link: "/services/messaging/mail-to-sms" },
          { name: "CPAAS", link: "/services/messaging/cpaas" }
        ]
      },
      {
        name: "Operator",
        link: "/services/operator/smsc",
        submenu: [
          { name: "SMSC", link: "/services/operator/smsc" },
          { name: "Instant Virtual Number", link: "/services/operator/virtual-number" }
        ]
      },
      {
        name: "Voice",
        link: "/services/voice/outbound-dialer",
        submenu: [
          { name: "Outbound Dealer", link: "/services/voice/outbound-dialer" },
          { name: "IVR", link: "/services/voice/ivr" },
          { name: "Missed Call", link: "/services/voice/missed-call" },
          { name: "Click 2 Call", link: "/services/voice/click2call" },
          { name: "SMS 2 Call", link: "/services/voice/sms2call" }
        ]
      },
      {
        name: "Marketing",
        link: "/services/marketing/email-marketing",
        submenu: [{ name: "Email Marketing", link: "/services/marketing/email-marketing" }]
      },
      { 
        name: "Identity", 
        link: "/services/identity/verified-sms", 
        submenu: [{ name: "Verified SMS", link: "/services/identity/verified-sms" }]
      },
      { 
        name: "Website Development", 
        link: "/services/web-development/web-designing",
        submenu: [
          { name: "Web Development ", link: "/services/web-development/web-development" },
          { name: "Website Designing", link: "/services/web-development/web-designing" },
        ]
      }
    ]
  },
    {
      name: "Pricing",
      link: "/pricing"
    },
    {
      name: "Careers",
      link: "/careers"
    },
    {
      name: "Blog",
      link: "/blog"
    },
    {
      name: "About Us",
      link: "/aboutUs"
    }
  ];