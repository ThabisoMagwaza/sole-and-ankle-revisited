/* eslint-disable no-unused-vars */
import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import styled, { keyframes } from 'styled-components/macro';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

import { COLORS, WEIGHTS } from '../../constants';

const MobileMenu = ({ isOpen, onDismiss, children }) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onDismiss}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Overlay onClick={onDismiss} />
        <Dialog.Title>Navigation Menu</Dialog.Title>
        <Content>
          <Close asChild>
            <UnstyledButton onClick={onDismiss}>
              <VisuallyHidden>Dismiss menu</VisuallyHidden>
              <Icon id="close" />
            </UnstyledButton>
          </Close>
          <Filler />
          <Nav>
            <a href="/sale">Sale</a>
            <a href="/new">New&nbsp;Releases</a>
            <a href="/men">Men</a>
            <a href="/women">Women</a>
            <a href="/kids">Kids</a>
            <a href="/collections">Collections</a>
          </Nav>
          <Footer>
            <a href="/terms">Terms and Conditions</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/contact">Contact Us</a>
          </Footer>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const Filler = styled.div`
  flex: 1;
`;

const Close = styled(Dialog.Close)`
  position: absolute;
  right: 0;
  top: 10px;

  padding: 16px;
`;

const SlideIn = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
`;

const SlideOut = keyframes`
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(100%);
  }
`;

const ContentDisappear = keyframes`
  0% {
    opacity: 1;
  }

  10% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
`;

const Overlay = styled(Dialog.Overlay)`
  position: absolute;
  inset: 0;
  background: ${COLORS.gray[700]};
  opacity: 0.8;
`;

const Content = styled(Dialog.Content)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;

  width: 80%;
  max-width: 600px;

  padding: 32px;

  background: ${COLORS.white};

  display: flex;
  flex-direction: column;

  &[data-state='open'] {
    animation: ${SlideIn} 0.3s ease-in;
  }

  &[data-state='closed'] {
    animation: ${SlideOut} 0.3s ease-out;

    & a {
      animation: ${ContentDisappear} 0.3s linear;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 22px;

  a {
    font-size: ${18 / 16}rem;
    text-decoration: none;
    color: ${COLORS.gray[900]};
    font-weight: ${WEIGHTS.medium};

    &:first-of-type {
      color: ${COLORS.secondary};
    }
  }
`;

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;

  align-items: flex-start;
  justify-content: flex-end;

  a {
    font-size: ${14 / 16}rem;
    text-decoration: none;
    color: ${COLORS.gray[700]};
  }
`;

export default MobileMenu;
