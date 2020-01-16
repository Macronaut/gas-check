import React, { useState } from 'react';

import { useForm } from 'react-hook-form';

import {
    InputRightElement,
    FormErrorMessage,
    FormHelperText,
    FormControl,
    InputGroup,
    FormLabel,
    Button,
    Input,
    Icon,
    Flex,
    Box,
    Text,
    Link
} from "@chakra-ui/core";

export default function Login() {

    const { handleSubmit, register, watch, errors } = useForm();
    const [ type, setType ] = useState('view');

    const user = watch('user');
    const password = watch('password');

    function toggleType() {
        setType(type === 'view' ? 'view-off' : 'view');
    }

    function onSubmit(data) {
        console.group(`-- USER DATA --`);
        console.log(`user >> ${user}`)
        console.log(`password >> ${password}`)
        console.groupEnd();
        
        console.log(`data >> ${data}`);
    }

    function checkInput(event) {
        console.log(`event >> ${event}`);
    }

    return(
        <>
            <Flex bg='blue.700' align='center' justify='center'>
                <Box bg='blue.600' w='1024px' maxW='100%' h='100vh' p='10px'>
                    <Flex w='100%' h='100%' align='flex-start' paddingTop='20px' justify='center'>
                        <Box bg='white' w='90%' p='20px' borderRadius='5px'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <FormLabel htmlFor='user'>Usuário</FormLabel>
                                <Input onChange={checkInput} ref={register} name='user' my='2' variant="outline" placeholder="Insira seu usuário" />
                                <FormLabel htmlFor='password'>Senha</FormLabel>
                                <InputGroup my='2'>
                                    <Input onChange={checkInput} ref={register} name='password' type={ type === 'view-off' ? 'text' : 'password' } variant="outline" placeholder="Insira sua senha" />
                                    <InputRightElement width="4.5rem">
                                        <Icon name={ type } cursor='pointer' onClick={ toggleType } />                                    
                                    </InputRightElement>
                                </InputGroup>
                                <Flex mt='3' justify='center' align='center'>                                
                                    <Button type="submit" mx='1' variantColor="blue" size="sm">Login</Button>                                
                                </Flex>
                            </form>
                            <Text mt='3'> Você é um <b>novo usuário</b>? <Link href='/register' color='teal.500'>Clique aqui</Link> para se cadastrar.</Text>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </>
    )
}