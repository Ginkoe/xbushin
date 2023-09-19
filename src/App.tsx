
import { HStack, Select, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { DisplayPane } from "./components/display";
import { MonitorForm } from "./components/monitor-info";

function App() {
    const [aspectRatio, setAspectRatio] = useState(32 / 9);



    return (
        <VStack height="100vh" p={4}>
            <Text>Display Settings</Text>

            <MonitorForm />

            <HStack>
                <Select placeholder="Aspect ratio" onChange={(e) => {
                    setAspectRatio(+e.currentTarget.value);
                }}>
                    <option value={32 / 9}>32:9 (Super Ultra Wide)</option>
                    <option value={16 / 9}>16:9 (Standard)</option>
                    <option value={21 / 9}>21:9 (Ultra Wide)</option>
                </Select>
            </HStack>
            <DisplayPane aspectRatio={aspectRatio} />
        </VStack >
    );
}

export default App;
