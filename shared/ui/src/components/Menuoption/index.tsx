import { MdClear } from 'react-icons/md';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Spacing } from '../../layout';
import { Text } from '../Text';
import { FaCircle } from 'react-icons/fa';
export interface MenuOption {
    menu: string;
    id: number;
}

export interface MenuOptionProps {
    options:MenuOption[];
    selectedOption: MenuOption;
    setSelectedOption: React.Dispatch<React.SetStateAction<MenuOption>>;
}

export const MenuOption = ({
    options,
    selectedOption,
    setSelectedOption,
}: MenuOptionProps) => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(true);
    const onClickButton = () => {
        setOpen(!open);
    }

    const onClickMenuOption = (domain: string) => {
        navigate(`/classpick/${domain}`)
    }
    return (
        <Container>
            <Wrapper className = {open? `open` : `close`}>
                <MdClear size={'1.5rem'} onClick ={() => onClickButton()} style ={{position: 'absolute', right: '15px', color:'#F3111F', cursor:'pointer'}}/>
                <Spacing size ={90}/>
                <ListWrapper>
                    {options.map((option, index) => (
                        <ListElement key={index} onClick={() => onClickMenuOption(option.menu)}>
                            <FaCircle size ={'1.5rem'}style={{color :'#D9D9D9'}}/>
                            <Text typo = {'Headline1'}>{option.menu}</Text>
                        </ListElement>
                    ))}
                </ListWrapper>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    .close{
        transform: translateX(-200px);
    }
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    display: relative;
    transition: all 0.1s ease-in-out;
    overflow: hidden;
    width: 100%;
    padding-top: 26px;
`

const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 51px;
`

const ListElement = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    gap: 13px;
    padding: 0px 31px;
`