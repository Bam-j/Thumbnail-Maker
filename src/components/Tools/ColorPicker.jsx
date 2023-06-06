import { CustomPicker } from 'react-color';
import {
  EditableInput,
  Hue,
  Saturation,
} from 'react-color/lib/components/common';
/*
기능: 폰트와 배경색 버튼을 누르면 나타날 색상 선택기.
 */

export const ColorPicker = ({ hex, hsl, hsv, onChange }) => {
  const styles = {
    body: {
      borderRadius: '14px',
      width: '200px',
      backgroundColor: '#ffffff',
      transition: `visibility 0s, opacity 0.5s linear`,
      boxShadow: '0px 0px 30px 5px rgba(0, 0, 0, 0.50)',
    },
    Saturation: {
      borderRadius: '5px 5px 0 0',
    },
    saturation: {
      width: '100%',
      paddingBottom: '55%',
      position: 'relative',
      borderRadius: '2px 2px 0 0',
      overflow: 'hidden',
    },
    hue: {
      width: '200px',
      height: ' 10px',
      position: 'relative',
    },
    squareShadow: {
      position: 'absolute',
      width: '200px',
      top: '10px',
      height: '150px',
    },
    roundShadow: {
      position: 'absolute',
      top: '100px',
      width: '200px',
      height: '78px',
      borderRadius: '12px',
      backgroundColor: '#ffffff',
    },
    editableInput: {
      input: {
        border: 'none',
        textAlign: 'center',
      },
    },
  };

  return (
    <div>
      <div
        className='squareShadow'
        style={styles.squareShadow}
      />
      <div
        className='roundShadow'
        style={styles.roundShadow}
      />
      <div style={{ height: 0, width: 200, position: 'relative' }} />
      <EditableInput
        style={styles.editableInput}
        value={hex}
        onChange={onChange}
      />
      <div style={styles.saturation}>
        <Saturation
          hsl={hsl}
          hsv={hsv}
          onChange={onChange}
          onChangeComplete={onChange}
        />
      </div>
      <div style={styles.hue}>
        <Hue
          hsl={hsl}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default CustomPicker(ColorPicker);