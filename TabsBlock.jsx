import { useEffect, useMemo, useRef, useState } from 'react';
import { tabsTypes, tabsTypesData } from './TabsBlock.data';
import { useLocation, Link } from 'react-router-dom';
import {
  AnimatedSwitcher,
  animatedSwitcherTypes
} from '../AnimatedSwitcher/AnimatedSwitcher';
import classes from './TabsBlock.module.css';

export const TabsBlock = ({
  tabsData,
  index,
  setIndex,
  isLinks,
  tabsType = tabsTypes.MAIN
}) => {
  const location = useLocation();
  const tabStyles = useMemo(() => tabsTypesData[tabsType], [tabsType]);
  const selectedTab = useRef(null);
  const [selectedX, setSelectedX] = useState(0);

  const onClick = (i) => {
    setIndex(i);
    if (tabsType === tabsTypes.MAIN) {
      if (i >= 0 && selectedTab.current) {
        const x = selectedTab.current.offsetLeft;
        const width = selectedTab.current.getBoundingClientRect().width;

        return setSelectedX(x + width / 2);
      }
      return setSelectedX(0);
    }
  };

  useEffect(() => {
    if (index >= 0 && selectedTab.current) {
      const x = selectedTab.current.offsetLeft;
      const width = selectedTab.current.getBoundingClientRect().width;
      return setSelectedX(x + width / 2);
    }
    return setSelectedX(0);
  }, [index]);

  return (
    <div>
      <div className={classes.tabsHeader}>
        <div className={tabStyles.headStyle}>
          {tabsData.map((tab, i) => {
            if (isLinks) {
              return (
                <Link
                  ref={index === i ? selectedTab : null}
                  key={`${tabsType}-tabHead-${i}`}
                  className={`${tabStyles.tabStyle} ${
                    index === i ? tabStyles.tabActiveStyle : ''
                  }`}
                  to={`${location.pathname}?tab=${i}`}
                >
                  {tab.headComponent}
                </Link>
              );
            }

            return (
              <div
                ref={index === i ? selectedTab : null}
                key={`${tabsType}-tabHead-${i}`}
                className={`${tabStyles.tabStyle} ${
                  index === i ? tabStyles.tabActiveStyle : ''
                }`}
                onClick={() => onClick(i)}
              >
                {tab.headComponent}
              </div>
            );
          })}
        </div>
        {tabsType === tabsTypes.MAIN && (
          <AnimatedSwitcher
            x={selectedX}
            containerClass={classes.switcherContainer}
            switcherType={animatedSwitcherTypes.TABS}
          />
        )}
      </div>
      <div className={tabStyles.bodyStyle}>
        {tabsData.map((tab, i) => (
          <div
            key={`${tabsType}-tabBody-${i}`}
            className={index === i ? classes.activeTab : classes.disabledTab}
          >
            {tab.bodyComponent}
          </div>
        ))}
      </div>
    </div>
  );
};
