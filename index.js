import PointCurveShape from "./point-curve-shape.js";
import Outline from "./outline.js";
import SVGParser from "./svg-parser.js";
console.log("HELLO WORLD sney2002");
const API = { SVGParser, Outline, PointCurveShape, parse: function(pathString) {
  	const outline = new API.Outline();
    const parser = new API.SVGParser(outline);
    parser.parse(pathString);
    return outline;
}};

export default API;
