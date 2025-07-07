import { ShaderMaterial } from "three";
declare global {
  namespace JSX {
    interface IntrinsicElements {
      colorShiftMaterial: React.DetailedHTMLProps<React.HTMLAttributes<ShaderMaterial>, any>;
    }
  }
}
export {};