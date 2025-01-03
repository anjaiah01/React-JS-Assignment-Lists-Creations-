import {ListItemContainer,Name, Description} from './EachListStyles'
const EachList = (props) => {
    const {item} = props
    const {name, description} = item
    return (
        <ListItemContainer>
            <Name>{name}</Name>
            <Description>{description}</Description>
        </ListItemContainer>
    );
};
export default EachList;
