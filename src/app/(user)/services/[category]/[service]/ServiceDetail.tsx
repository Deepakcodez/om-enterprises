import React from "react";
import A2p from "./A2p";
import Rcs from "./Rcs";
import TwoWayMessaging from "./TwoWayMessaging";
import Acculync from "./Acculync";
import MailTOSms from "./MailTOSms";
import Cpaas from "./Cpaas";
import OmniChannel from "./OmniChannel";
import WhatsappBuisiness from "./WhatsappBuisiness";
import Smcs from "./Smcs";
import VirtualNumber from "./VirtualNumber";
import OutbondDialer from "./OutbondDialer";
import Ivr from "./Ivr";
import MissedCall from "./MissedCall";
import Click2call from "./Click2call";
import Sms2Call from "./Sms2Call";
import VerifiedSms from "./VerifiedSms";
import EmailMarketing from "./EmailMarketing";
import WebDesigning from "./WebDesigning";
import WebDevelopment from "./WebDevelopment";

interface ServiceDetailProps {
  serviceId: number | null;
}
const ServiceDetail: React.FC<ServiceDetailProps> = ({ serviceId }) => {
  if (serviceId === 1) {
    return (
      <div>
        <A2p />
      </div>
    );
  }
  if (serviceId === 2) {
    return (
      <div>
        <Rcs />
      </div>
    );
  }
  if (serviceId === 4) {
    return (
      <div>
        <WhatsappBuisiness />
      </div>
    );
  }
  if (serviceId === 5) {
    return (
      <div>
        <TwoWayMessaging />
      </div>
    );
  }
  if (serviceId === 6) {
    return (
      <div>
        <Acculync />
      </div>
    );
  }
  if (serviceId === 7) {
    return (
      <div>
        <MailTOSms />
      </div>
    );
  }
  if (serviceId === 8) {
    return (
      <div>
        <Cpaas />
      </div>
    );
  }
  if (serviceId === 9) {
    return (
      <div>
        <OmniChannel />
      </div>
    );
  }
  if (serviceId === 10) {
    return (
      <div>
        <Smcs />
      </div>
    );
  }
  if (serviceId === 11) {
    return (
      <div>
        <VirtualNumber />
      </div>
    );
  }
  if (serviceId === 12) {
    return (
      <div>
        <OutbondDialer />
      </div>
    );
  }
  if (serviceId === 13) {
    return (
      <div>
        <Ivr />
      </div>
    );
  }
  if (serviceId === 14) {
    return (
      <div>
        <MissedCall />
      </div>
    );
  }
  if (serviceId === 15) {
    return (
      <div>
        <Click2call />
      </div>
    );
  }
  if (serviceId === 16) {
    return (
      <div>
        <Sms2Call />
      </div>
    );
  } 
  if (serviceId === 17) {
    return (
      <div>
        <EmailMarketing />
      </div>
    );
  } 
  if (serviceId === 18) {
    return (
      <div>
        <VerifiedSms />
      </div>
    );
  }
  if (serviceId === 19) {
    return (
      <div>
        <WebDevelopment />
      </div>
    );
  }
  if (serviceId === 20) {
    return (
      <div>
        <WebDesigning />
      </div>
    );
  }
  return <A2p />;
};

export default ServiceDetail;
