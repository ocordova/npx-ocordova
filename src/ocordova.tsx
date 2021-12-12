import React from "react";
import { Text, Box } from "ink";

const colors = {
    cyan: '#8be9fd',
    pink: '#ff79c6',
    foreground: '#f8f8f2',
    yellow: '##f1fa8c'
}

export const Ocordova = () => {
    return (
        <Box flexDirection="column" marginTop={1} marginBottom={2}>
            <Box flexDirection="column">
                <Text color={colors.cyan}>👋 Hello, I'm <Text color={colors.pink} bold>Óscar Córdova</Text></Text>
                <Box flexDirection="column" paddingLeft={3} marginTop={1}>
                    <Text color={colors.foreground}>
                        I'm a Full Stack Engineer based in Mexico City
                    </Text>
                    <Box marginTop={1}>
                        <Text inverse color={colors.yellow}>{"  "}Website{" "}</Text>
                        <Text>{' '}</Text>
                        <Text underline color={colors.yellow}>https://ocordova.me</Text>
                    </Box>
                    <Box>
                        <Text inverse color={colors.yellow}>{" "}AMA Repo{" "}</Text>
                        <Text>{' '}</Text>
                        <Text underline color={colors.yellow}>https://github.com/ocordova/ama</Text>
                    </Box>
                </Box>

            </Box>
        </Box>
    );
};