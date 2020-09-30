import React, {useState} from 'react';
import PropTypes from 'prop-types';

ColorBox.propTypes = {};
function getRandomcolor () {
  const ColorList = ['deeppink', 'green', 'yellow', 'black', 'blue'];
  const ranDomColor = Math.trunc (Math.random () * 5); //matt.random chi ra một số 0 tới bé thua mot. nhân 5 thi se ra so be thua 5.trunc là lấy phần nguyên
  return ColorList[ranDomColor];
}
function ColorBox () {
  const [color, setColor] = useState ('green');

  function handleClick () {
    //get random color
    const newColor = getRandomcolor ();
    setColor (newColor);
  }
  return (
    <div
      className="BoxColor"
      style={{backgroundColor: color}}
      onClick={handleClick}
    >
      COLOR BOX
    </div>
  );
}

export default ColorBox;
