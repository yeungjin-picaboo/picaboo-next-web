import Link from 'next/link';
import Flag from 'react-flagkit';
import { LogOut, Shield } from 'react-feather';
import { UserCircle, Wallet, World } from 'tabler-icons-react';
import Navigation from '../Navigation/Navigation';
import {
  AccountMenu,
  StDropdown,
  StDropdownItem,
  StHeader,
  StHeaderLeft,
  StHeaderRight,
  StLanguageDropdown,
  StLogo,
  StLogoText,
  StUserDropdown,
  StWalletBox,
  StWalletText,
} from './Header.styled';
import useHeader from '@/hooks/useHeader';
import Image from 'next/image';
import WalletModal from '../WalletModal/WalletModal';
import { useTranslation } from 'next-i18next';
import { comforterBrush, meiryo } from '@/styles/fonts/font';
import { useRouter } from 'next/router';

export default function Header() {
  const {
    route,
    isModalOpen,
    isUserDropdownOpen,
    userDropdownRef,
    isLangDropdownOpen,
    langDropdownRef,
    handleUserDropdown,
    handleLangDropdown,
    handleModalOpen,
    handleModalClose,
    handleLogout,
  } = useHeader();
  const { t } = useTranslation('header');

  const router = useRouter();
  return (
    <StHeader>
      <StHeaderLeft>
        <StLogo href='/diary' className={comforterBrush.className}>
          <Image src='/icons/logo.png' alt='' width={40} height={40} />
          <StLogoText>Picaboo</StLogoText>
        </StLogo>
        <Navigation route={route} list={['diary', 'marketplace', 'contact']} />
      </StHeaderLeft>
      <StHeaderRight className={meiryo.className}>
        <AccountMenu>
          <StWalletBox onClick={handleModalOpen}>
            <Wallet size={30} strokeWidth={1} />
            <StWalletText>{t('connect_wallet')}</StWalletText>
          </StWalletBox>
          {isModalOpen && <WalletModal handleClose={handleModalClose} />}
          <StUserDropdown
            ref={userDropdownRef}
            isOpen={isUserDropdownOpen}
            onClick={handleUserDropdown}
          >
            <UserCircle size={30} strokeWidth={1} />
            {isUserDropdownOpen && (
              <StDropdown>
                <StDropdownItem>
                  <Shield size={20} />
                  <Link href='/account'>{t('account')}</Link>
                </StDropdownItem>
                <StDropdownItem onClick={handleLogout}>
                  <LogOut size={20} />
                  {t('logout')}
                </StDropdownItem>
              </StDropdown>
            )}
          </StUserDropdown>
        </AccountMenu>
        <StLanguageDropdown
          ref={langDropdownRef}
          isOpen={isLangDropdownOpen}
          onClick={handleLangDropdown}
        >
          <World size={30} strokeWidth={1} />
          {isLangDropdownOpen && (
            <StDropdown>
              <StDropdownItem
                onClick={() => {
                  router.push(router.asPath, router.asPath, { locale: 'en' });
                }}
              >
                <Flag
                  country='US'
                  role='button'
                  style={{
                    boxShadow: '0px 0px 4px 1px rgba(0, 0, 0, 0.25)',
                    height: '16px',
                  }}
                />
              </StDropdownItem>
              <StDropdownItem
                onClick={() => {
                  router.push(router.asPath, router.asPath, { locale: 'ja' });
                }}
              >
                <Flag
                  country='JP'
                  role='button'
                  style={{
                    boxShadow: '0px 0px 4px 1px rgba(0, 0, 0, 0.25)',
                    height: '16px',
                  }}
                />
              </StDropdownItem>
              <StDropdownItem
                onClick={() => {
                  router.push(router.asPath, router.asPath, { locale: 'kr' });
                }}
              >
                <Flag
                  country='KR'
                  role='button'
                  style={{
                    boxShadow: '0px 0px 4px 1px rgba(0, 0, 0, 0.25)',
                    height: '16px',
                  }}
                />
              </StDropdownItem>
            </StDropdown>
          )}
        </StLanguageDropdown>
      </StHeaderRight>
    </StHeader>
  );
}
