import { AddToCalendarButton } from 'add-to-calendar-button-react';

const Reminder = () => {
  return (
    <AddToCalendarButton
        name="Sherin & Ariz Wedding (Resepsi)"
        location="Gedung Bakorwil IV Pamekasan (Eks. Karesidenan – Madura), Jalan Slamet Riadi No. 1, Kec. Pamekasan, Pamekasan - Jawa Timur"
        startDate="2025-09-28"
        useUserTZ="true"
        size='2'
        options="['Apple','Google']"
        buttonStyle = 'text'
        hideIconButton={true}
    ></AddToCalendarButton>
  )
}

export default Reminder;
