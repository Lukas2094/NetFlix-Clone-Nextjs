import styled from '@emotion/styled';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Flex
  } from '@chakra-ui/react'

export const Container = styled(Flex)`

    width: 100%;
    height: 100%;
    min-height: 220px;

    margin: 140px 0px;

    align-items: center;
    justify-content: center;

`;

export const ModalContainer = styled(Modal)``;

export const ModalOver = styled(ModalOverlay)``;

export const ModalContente = styled(ModalContent)`
   

`;

export const ModalHead = styled(ModalHeader)``;

export const ModalFooterpage = styled(ModalFooter)``;

export const ModalBodyPage = styled(ModalBody)`

    video {
        width: 100%;
        height: 300px;

        background-color: #000;
    }


`;

export const ModalClose = styled(ModalCloseButton)``;

export const PlayMovie = styled(Button)``;