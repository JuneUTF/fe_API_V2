import CanvasJSReact from '@canvasjs/react-charts';
import { useMaterialUIController } from 'context';
import "../style.css"
import Data from "layouts/AdminRole/Home/Classify/Data"
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
function classify(){
  const [controller, dispatch] = useMaterialUIController();
  const {    sidenavColor,darkMode  } = controller;
		const options = {
			animationEnabled: true,
			exportEnabled: true,
      		backgroundColor: "transparent ",
			title:{
				text: "国籍割合",
        		fontColor: darkMode ? 'white':"#344767",
			},
			legend: {
				fontColor: darkMode ? 'white':"#344767",
			  },
			  toolTip: {
				backgroundColor: darkMode ? 'white':"#344767",
				fontColor: !darkMode ? 'white':"#344767",
				Content: "{x} : {y}"
			},
			data: [{
				type: "pie",
				showInLegend: true,
				legendText: "{label}",
				toolTipContent: "{label}: <strong>{y}%</strong>",
				indexLabel: "{y}%",
				indexLabelFontColor : darkMode ? 'white':"#344767",
				fontColor: !darkMode ? 'white':"#344767",
				indexLabelPlacement: "inside",
				dataPoints: Data
			}]
		}
		
		return (
		<div>
			<CanvasJSChart color ={sidenavColor} options = {options}/>
		</div>
		);
}

export default classify;