import React, { useRef } from "react"; 
import emailjs from "@emailjs/browser"; 
export default function Contact() { 
const form = useRef(); 
const sendEmail = (e) = e.preventDefault(); emailjs.sendForm('YOUR_SERVICE_ID','YOUR_TEMPLATE_ID',form.current,'YOUR_PUBLIC_KEY').then(result = alert("Message sent!"); }, error = alert("Failed"); }); }; 
