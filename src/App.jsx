import "./App.css";
import ControlField from "./Components/ControllField/ControlField";
import FormAction from "./Components/FormAction/FormAction";
import HookInput from "./Components/HookInput/HookInput";
import ProductFrom from "./Components/ProductsManagement/ProductFrom";
import ProductTable from "./Components/ProductsManagement/ProductTable";
import SimpleInput from "./Components/SimpleInput/SimpleInput";
import Uncontrolled from "./Components/UncontrolledField/Uncontrolled";

function App() {
  return (
    <>
      {/* <SimpleInput></SimpleInput> */}
      {/* <FormAction></FormAction> */}
      {/* <ControlField></ControlField> */}
      {/* <Uncontrolled></Uncontrolled> */}
      {/* <HookInput></HookInput> */}
      <ProductTable></ProductTable>
      <ProductFrom></ProductFrom>
    </>
  );
}

export default App;
