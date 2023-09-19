import { Button, HStack, Input } from "@chakra-ui/react"
import { useMonitorStore } from "../states/monitor";
import { useState } from "react";

export function MonitorForm() {
    const addMonitor =
        useMonitorStore((selector) => selector.addMonitor);

    const [monitorName, setMonitorName] = useState("");


    return (<HStack w="full" justify={"space-between"}>
        <Input placeholder="Monitor name" onChange={(e) => setMonitorName(e.currentTarget.value)} value={monitorName} />
        <Button onClick={() => {
            addMonitor({
                name: monitorName
            })
        }}>Create</Button>
        <Button>Delete</Button>
    </HStack>)
}
