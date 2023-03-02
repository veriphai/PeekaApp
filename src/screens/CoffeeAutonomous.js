import React, { useState, useEffect } from "react";
import { Box, FlatList, Center, NativeBaseProvider, Text } from "native-base";

export default function CoffeeAutonomous() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [summeryData, setSummeryData] = useState([]);
    // const fetchData = async () => {
    //     const resp = await fetch("http://ec2-65-0-104-33.ap-south-1.compute.amazonaws.com:8080/crud/creators");
    //     const data = await resp.json();
    //     setData(data);
    //     setLoading(false);
    // };

    const fetchData = async () => {
        try {
            const response = await fetch('http://ec2-65-0-104-33.ap-south-1.compute.amazonaws.com:8080/crud/creators', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Basic cGVla2FVc2VyOnBlZWthQDEyMw==',
                },
            });
            const jsonData = await response.json();
            setData(jsonData['channelList']);

        } catch (error) {
            console.error(error);
        }
    };

    const fetchSummeryData = async () => {
        try {
            const response = await fetch('http://ec2-65-0-104-33.ap-south-1.compute.amazonaws.com:8080/reeds/', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Basic cGVla2FVc2VyOnBlZWthQDEyMw==',
                },
            });
            const jsonData = await response.json();
            setSummeryData(jsonData);
            console.log(summeryData['reeds'][0])
        } catch (error) {
            console.error(error);
        }
    };

    const renderItem = ({ item }) => {
        return (
            <Box px={5} py={2} rounded="md" bg="primary.300" my={2}>
                {item.channelName}
            </Box>
        );
    };

    useEffect(() => {
        fetchData();
        fetchSummeryData();
    }, []);

    return (
        <NativeBaseProvider>
            <Center flex={1}>
                <Box> Fetch API</Box>
                {loading && <Box>Loading..</Box>}
                {data && (
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.channelId.toString()}
                    />
                )}
            </Center>
        </NativeBaseProvider>
    );

}