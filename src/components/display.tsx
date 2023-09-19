import { AspectRatio, Text, Box } from "@chakra-ui/react";
import { Rnd } from "react-rnd";
import { useMonitorStore } from "../states/monitor";

type DisplayPaneProps = {
    aspectRatio: number;
}

export function DisplayPane({ aspectRatio }: DisplayPaneProps) {
    const monitors = useMonitorStore((state) => state.monitors);


    return <AspectRatio w="full" ratio={aspectRatio}>
        <Box bg="blue" w="full" h="full">
            {monitors.map((monitor) => {
                return <Rnd
                    disableDragging
                    bounds="parent"
                    default={{
                        x: 0,
                        y: 0,
                        width: "100%",
                        height: "100%",
                    }}
                    enableResizing={{
                        top: false,
                        right: true,
                        bottom: false,
                        left: false,
                        topRight: false,
                        bottomRight: false,
                        bottomLeft: false,
                        topLeft: false
                    }}
                >

                    <Box h="full" bg="green"><Text>{monitor.name}</Text></Box>
                </Rnd>
            })}
        </Box>

    </AspectRatio>
}
