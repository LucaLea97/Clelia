import {useEffect, useRef, useState} from "react";
import mqtt from "mqtt";

// Replace with your HiveMQ WebSocket URL
const url = `${import.meta.env.VITE_MQTT_PROTOCOL}://${import.meta.env.VITE_MQTT_WS_URL}`
const options = {
    clientId: `mqttjs_${Math.random().toString(16).substring(2, 8)}`,
    username: import.meta.env.VITE_MQTT_USERNAME,
    password: import.meta.env.VITE_MQTT_PASSWORD,
}

export function useMqtt() {
    const [ledState, setLedState] = useState({ id: null, state: "OFF" });
    const clientRef = useRef(null);

    const topic = import.meta.env.VITE_MQTT_TOPIC;

    useEffect(() => {
        // Only create the client if it doesn't exist
        if (!clientRef.current) {
            const client = mqtt.connect(url, options);
            clientRef.current = client;

            client.on("connect", () => {
                console.log("Connected to HiveMQ");
                client.subscribe(topic, (error) => {
                    if (error) {
                        console.error('Subscription error:', error);
                    } else {
                        console.log('Subscribed to ' + topic);
                    }
                });
            });

            client.on("message", (topic, message) => {
                if (topic === topic) {
                    const data = JSON.parse(message.toString());
                    setLedState(data);
                }
            });

            client.on('error', (error) => {
                console.error('MQTT Error:', error);
            });
        }

        return () => {
            // Cleanup the client on unmount
            if (clientRef.current) {
                clientRef.current.end();
                clientRef.current = null;
            }
        };
    }, []);

    const sendMessage = (id, state) => {
        const message = JSON.stringify({ id, state });
        clientRef.current.publish(topic, message);
    };

    return { ledState, sendMessage };
}
