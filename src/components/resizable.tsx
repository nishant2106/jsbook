import { ResizableBox } from "react-resizable";

interface ResizableProps {
  direction: "horizontal" | "vertical";
}

const Resizable: React.FC<ResizableProps> = ({ direction }) => {
  return (
    <ResizableBox>
      <div>children</div>
    </ResizableBox>
  );
};

export default Resizable;
