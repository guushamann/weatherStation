import { ref } from "vue";
import openSocket from "socket.io-client";
import { currentUrlWithPortNumber } from "../utils/url-manipulation";

export function useSocketIo(port: number) {
    return openSocket('http://weatherstation.local:3000/');
}

export function useSocketName(socket: any) {
    const name = ref("");

    socket.on("name", (serverName: string) => {
        name.value = serverName;
    });

    function setDisplayName(value: string) {
        socket.emit("updateName", value);
    }

    return [name, setDisplayName];
}
