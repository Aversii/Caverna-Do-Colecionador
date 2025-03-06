import React, { useState } from 'react';
import { SwitchWrapper, Switch, Circle, IconWrapper } from './styles';

interface ToggleButtonProps {
  toggleTheme: () => void;
  isdarkmode: boolean;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ toggleTheme, isdarkmode }) => {
  const [isMoving, setIsMoving] = useState(false);

  const handleToggle = () => {
    setIsMoving(true);
    setTimeout(() => {
      toggleTheme();
      setIsMoving(false);
    }, 120);
  };

  return (
    <SwitchWrapper onClick={handleToggle}>
      <Switch $isdarkmode={isdarkmode}>
        <Circle $isdarkmode={isdarkmode}>
          <IconWrapper>
            {isdarkmode ? '🌙' : '☀️'}
          </IconWrapper>
        </Circle>
      </Switch>
    </SwitchWrapper>
  );
};

export default ToggleButton;
