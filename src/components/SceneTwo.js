// SceneTwo.js
import React from "react";
import { Sky, Text, Entity } from "react-aframe-ar";
import Button from "./Button";

export default function SceneTwo({ visible, changeScene }) {
  return (
    <Entity id="SceneTwo" visible={visible}>
      {/* <Sky src="/img/salida9.jpg" rotation="0 -130 0" /> */}
      <Sky src="/img/Oratorio.jpg" rotation="0 -130 0" />

      {/* Oratorio (escena 4)
      <Entity
        geometry="primitive: plane; width: 1; height: 0.5;"
        material="color: #FFFFFF;"
        position="4.47716 0.54748 -4.84135"
        rotation="-6.8721 -35.66893 1.76395"
        className="clickable"
        events={{ click: () => changeScene("SceneOne") }}
      >
        <Text
          value="CheckIn"
          align="center"
          position="0 0 0.01"
          color="#7BC8A4"
        />
      </Entity>
		*/}
      {/* CheckIn (escena 3)
      <Entity
        geometry="primitive: plane; width: 1; height: 0.5;"
        material="color: #FFFFFF;"
        position="-4.73 2.07074 7.98732"
        rotation="-8.46979 138.94648 0.54011"
        className="clickable"
        events={{ click: () => changeScene("SceneOne") }}
      >
        <Text
          value="Oratorio"
          align="center"
          position="0 0 0.01"
          color="#7BC8A4"
        />
      </Entity>

      <Entity
        geometry="primitive: plane; width: 1; height: 0.5;"
        material="color: #FFFFFF;"
        position="-5.57691 0.54748 -4.84135"
        rotation="5.527896807422183 38.19107479224016 2.0139466498848435"
        className="clickable"
        events={{ click: () => changeScene("SceneOne") }}
      >
        <Text
          value="Salida 9"
          align="center"
          position="0 0 0.01"
          color="#7BC8A4"
        />
      </Entity>
	  */}

      {/* Salida nueve (escena 2) 
      <Entity
        geometry="primitive: plane; width: 1; height: 0.5;"
        material="color: #FFFFFF;"
        position="-9.26 2.29074 0.60646"
        rotation="-8.69979116126642 81.8023303264179 3.040114060964149"
        className="clickable"
        events={{ click: () => changeScene("SceneOne") }}
      >
        <Text
          value="Entrada"
          align="center"
          position="0 0 0.01"
          color="#7BC8A4"
        />
      </Entity>

      <Entity
        geometry="primitive: plane; width: 1; height: 0.5;"
        material="color: #FFFFFF;"
        position="4.35635 2.63472 1.1059"
        rotation="5.148598747045577 -91.25269619930569 -2.9117715148548435"
        className="clickable"
        events={{ click: () => changeScene("SceneOne") }}
      >
        <Text
          value="Calle"
          align="center"
          position="0 0 0.01"
          color="#7BC8A4"
        />
      </Entity>
		*/}

      {/* <Button
				text='Ir a Scene 1'
				x='-1.5'
				y='1'
				z='-4'
				className='scene1-button'
				onClick={() => changeScene('SceneOne')}
			/> */}
    </Entity>
  );
}
