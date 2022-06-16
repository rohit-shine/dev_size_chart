import React, { useCallback, useState} from "react";
import {
  AppProvider,
  Navigation,
  Layout,
  Card,
  Frame,
  SkeletonPage,
  TextContainer,
  SkeletonDisplayText,
  SkeletonBodyText,
  Icon,
  TopBar,
} from "@shopify/polaris";
import {
  ArrowLeftMinor,
  HomeMajor,
  OrdersMajor,
  SettingsMinor,
  FollowUpEmailMajor,
  ProductsMajor,
} from "@shopify/polaris-icons";
import {Link} from 'react-router-dom';
import '../assets/style.css';
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";


function HomePage({ children }) {

  const navigate =  useNavigate();
  const shopName = Cookies.get("shop");
  let letter = shopName.charAt(0);
  const initialLetter = letter.toUpperCase();
  

  const [mobileNavigationActive, setMobileNavigationActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
const router = window.location; 

  const sideNav = [
    { name: "Dashboard", icon: HomeMajor, url: "/"},
    { name: "Size Chart", icon: OrdersMajor, url: "/sizechart" },
    { name: "Products", icon: ProductsMajor, url: "/products" },
    { name: "Settings", icon: SettingsMinor, url: "/settings" }
  ];

  const subNav = [
    {
      name: "Contact Us",
      icon: FollowUpEmailMajor,
      url: "/contactus",
    }
  ];

  const handleClick = useCallback(() => {
     navigate("/");
  });

  const toggleMobileNavigationActive = () => {
    setMobileNavigationActive(!mobileNavigationActive);
  };

  const userMenuActions = [
    {
      items: [{ content: "Community forums" }],
    },
  ];

  const logo = {
    width: 124,
    topBarSource:
      "https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-color.svg?6215648040070010999",
    contextualSaveBarSource:
      "https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-gray.svg?6215648040070010999",
    url: "/",
    accessibilityLabel: "Size Chart",
  };
  
  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={userMenuActions}
      name= {shopName}
      detail=""
      initials= {initialLetter}
      // onToggle={toggleUserMenuActive}
    />
  );

  const topBarMarkup = (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
      onNavigationToggle={toggleMobileNavigationActive}
    />
  );

  const navigationMarkup = (
    <Navigation location="/">
      <Navigation.Section
        items={[
          {
            label: "Back to Shopify",
            icon: ArrowLeftMinor,
            onClick: handleClick,
          },
        ]}
      />
      <div className="sd-navigation" >
        <ul className="Polaris-Navigation__Section Polaris-Navigation__Section--withSeparator" >
            <li className="Polaris-Navigation__SectionHeading">
              <span className="Polaris-Navigation__Text navigation_heading">MAIN MENU</span>
            </li>
          {sideNav.map((sideNav, index) => {
            return (
              <li key={index} className="Polaris-Navigation__ListItem">
                <Link to={sideNav.url}  className={
                      router.pathname == sideNav.url
                        ? "Polaris-Navigation__Item Polaris-Navigation__Item--selected Polaris-Navigation--subNavigationActive"
                        :
                         "Polaris-Navigation__Item"
                    }>
                    <div className="Polaris-Navigation__Icon">
                      <Icon source={sideNav.icon} color="base" />
                    </div>
                    <span className="Polaris-Navigation__Text">
                      {sideNav.name}
                    </span>
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className="Polaris-Navigation__Section Polaris-Navigation__Section--withSeparator">
          <li className="Polaris-Navigation__SectionHeading">
            <span className="Polaris-Navigation__Text navigation_heading">Help & FAQ</span>
          </li>
          {subNav.map((subNav, index) => {
            return (
              <li key={index} className="Polaris-Navigation__ListItem">
                <Link to={subNav.url} replace  className={
                      router.pathname == subNav.url
                        ? "Polaris-Navigation__Item Polaris-Navigation__Item--selected Polaris-Navigation--subNavigationActive"
                        :
                         "Polaris-Navigation__Item"
                    }>
                    <div className="Polaris-Navigation__Icon">
                      <Icon source={subNav.icon} color="base" />
                    </div>
                    <span className="Polaris-Navigation__Text">
                      {subNav.name}
                    </span>
                </Link>
              </li> 
            );
          })}
        </ul>
      </div>
    </Navigation>
  );

  const loadingPageMarkup = (
    <SkeletonPage>
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <TextContainer>
              <SkeletonDisplayText size="small" />
              <SkeletonBodyText lines={9} />
            </TextContainer>
          </Card>
        </Layout.Section>
      </Layout>
    </SkeletonPage>
  );

  const actualPageMarkup = (
    <Layout>
      <Layout.Section>
        <div className="sd-main-layout">{children}</div>
      </Layout.Section>
    </Layout>
  );
  const pageMarkup = isLoading ? loadingPageMarkup : actualPageMarkup;
  return (
    <>
      <div style={{ height: "500px" }}>
        <AppProvider
          i18n={{
            Polaris: {
              TopBar: {
                toggleMenuLabel: "Toggle menu",
              },
              Frame: {
                navigationLabel: "Navigation",
                Navigation: {
                  closeMobileNavigationLabel: "Close navigation",
                },
              },
            },
          }}
        >
          <div>
            <Frame
              logo={logo}
              topBar={topBarMarkup}
              navigation={navigationMarkup}
              showMobileNavigation={mobileNavigationActive}
              onNavigationDismiss={toggleMobileNavigationActive}
            >
              {pageMarkup}
            </Frame>
          </div>
        </AppProvider>
      </div>
    </>
  );
} 

export default HomePage;