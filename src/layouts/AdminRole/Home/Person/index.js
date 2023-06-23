import CanvasJSReact from '@canvasjs/react-charts';
import { useMaterialUIController } from 'context';
import Data from "layouts/AdminRole/Home/Person/Data"
import "../style.css"
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
function Preson(){
  const [controller, dispatch] = useMaterialUIController();
  const {    sidenavColor,darkMode  } = controller;
		const options = {
			animationEnabled: true,
			exportEnabled: true,
      		backgroundColor: "transparent ",
			title:{
				text: "資格割合",
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

export default Preson;