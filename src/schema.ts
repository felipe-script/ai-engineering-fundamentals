export interface BaseElement {
    /*
    id — unique identifier (the agent generates these)
x, y — position on the canvas
width, height — dimensions
strokeColor — border/line color (hex string)
backgroundColor — fill color (hex or "transparent")
fillStyle — how the fill renders: "solid", "hachure", or "cross-hatch"
roughness — 0 for clean lines, 1 for hand drawn
opacity — 0 to 100
    */
   id: string;
   x: number;
   y:number;
   width:number;
   height:number;
   strokeColor: string;
   strokeWidth: number;
   backgroundColor: string;
   fillStyle: "solid" | "hachure" | "cross-hatcher";// or cross-hatch
   roughness: number;
   opacity: number;
   angle: number;
   groupIds: string [];
   isDeleted: boolean;
   boundElements: {id: string, type: 'arrow' | 'text'}[] | null;
}

export interface RectangleElement extends BaseElement {
    type: "rectangle";
    roundness: {type: number; value?:number } | null;
}

export interface EllipseElement extends BaseElement {
    type: "ellipse";
}

export interface DiamondElement extends BaseElement {
    type: "diamond";
}


export interface TextElement extends BaseElement {
    type: "text";
    text: string;
    fontSize: number;
    fontFamily: string;
    textAlign: "left" | "center" | "right";
    verticalAlign: "top" | "middle" | "bottom";
    containerId: string | null;
}

export interface ArrowElement extends BaseElement {
    type: 'arrow',
    points: { x: number; y: number }[];
    startBinding: { elementId: string; focus: number; gap: number } | null;
    endBinding: { elementId: string; focus: number; gap: number } | null;
}

export interface LineElement extends BaseElement {
    type:'line',
    points: [number, number][];
}


export type ExcalidrawElement = RectangleElement | EllipseElement | DiamondElement | TextElement | ArrowElement | LineElement;