import React from 'react';
import Button from '../button';
import './ButtonDemo.scss';

const ButtonDemo = () => {
  const handleClick = (variant, size) => {
    console.log(`${variant} button (${size}) clicked!`);
  };

  return (
    <div className="button-demo">
      <h2>Button Component Demo</h2>
      
      <div className="button-demo__section">
        <h3>Fill Buttons</h3>
        <div className="button-demo__row">
          <Button 
            variant="fill" 
            size="small" 
            onClick={() => handleClick('fill', 'small')}
          >
            Small Fill
          </Button>
          <Button 
            variant="fill" 
            size="medium" 
            onClick={() => handleClick('fill', 'medium')}
          >
            Medium Fill
          </Button>
          <Button 
            variant="fill" 
            size="large" 
            onClick={() => handleClick('fill', 'large')}
          >
            Large Fill
          </Button>
        </div>
      </div>

      <div className="button-demo__section">
        <h3>Outline Buttons</h3>
        <div className="button-demo__row">
          <Button 
            variant="outline" 
            size="small" 
            onClick={() => handleClick('outline', 'small')}
          >
            Small Outline
          </Button>
          <Button 
            variant="outline" 
            size="medium" 
            onClick={() => handleClick('outline', 'medium')}
          >
            Medium Outline
          </Button>
          <Button 
            variant="outline" 
            size="large" 
            onClick={() => handleClick('outline', 'large')}
          >
            Large Outline
          </Button>
        </div>
      </div>

      <div className="button-demo__section">
        <h3>Disabled Buttons</h3>
        <div className="button-demo__row">
          <Button 
            variant="fill" 
            disabled 
            onClick={() => handleClick('fill', 'disabled')}
          >
            Disabled Fill
          </Button>
          <Button 
            variant="outline" 
            disabled 
            onClick={() => handleClick('outline', 'disabled')}
          >
            Disabled Outline
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ButtonDemo; 