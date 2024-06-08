import classes from './TabsBlock.module.css';

export const tabsTypes = {
  DASHBOARD: 'dashboard',
  MAIN: 'main',
  PRICES: 'prices',
  SETTINGS: 'settings'
};

export const tabsTypesData = {
  dashboard: {
    headStyle: classes.dashboardHead,
    bodyStyle: classes.dashboardBody,
    tabStyle: classes.dashboardTab,
    tabActiveStyle: classes.dashboardTabActive
  },
  main: {
    headStyle: classes.mainHead,
    bodyStyle: '',
    tabStyle: classes.mainTab,
    tabActiveStyle: classes.mainTabActive
  },
  prices: {
    headStyle: classes.pricesHead,
    bodyStyle: '',
    tabStyle: classes.pricesTab,
    tabActiveStyle: classes.pricesTabActive
  },
  settings: {
    headStyle: classes.settingsHead,
    bodyStyle: '',
    tabStyle: classes.settingsTab,
    tabActiveStyle: classes.settingsTabActive
  }
};
