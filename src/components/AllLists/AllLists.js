import { useState, useEffect } from 'react';
import {
    MainContainer,
    HeaderTextContainer,
    Heading,
    NewListButton,
    MainListsContainer,
    EachListContainer,
} from './AllListsStyles';
import EachList from '../EachList/EachList';  // Assuming EachList renders individual items.

const AllLists = () => {
    const [allLists, setAllLists] = useState({});  // Store lists as an object for grouping

    // Fetch data from the API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://apis.ccbp.in/list-creation/lists");
                const data = await response.json();

                // Group by list_number
                const groupedLists = data.lists.reduce((acc, item) => {
                    const { list_number } = item;
                    if (!acc[list_number]) {
                        acc[list_number] = [];
                    }
                    acc[list_number].push(item);
                    return acc;
                }, {});

                setAllLists(groupedLists);
            } catch (error) {
                console.error("Failed to fetch lists:", error);
                setAllLists({});
            }
        };
        fetchData();
    }, []);

    return (
        <MainContainer>
            <HeaderTextContainer>
                <Heading>List Creation</Heading>
                <NewListButton>Create a new list</NewListButton>
            </HeaderTextContainer>
            <MainListsContainer>
                {Object.entries(allLists).map(([listNumber, items]) => (
                    <EachListContainer>
                        <h2>List {listNumber}</h2>
                        {items.map(item => (
                            <EachList key={item.id} item={item} />
                        ))}
                    </EachListContainer>
                ))}
            </MainListsContainer>
        </MainContainer>
    );
};

export default AllLists;
