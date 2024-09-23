import "./BtnClear.css";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";

export const BtnClear = ({ deleteAll }) => {
  return (
    <button onClick={deleteAll} className="btn_container">
      <CleaningServicesIcon className="iconClean" />
      <h3 className="txt_btn">Limpiar tareas...</h3>
    </button>
  );
};
