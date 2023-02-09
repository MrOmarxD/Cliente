import { createContext, useState} from "react";
import { calcularMarca, obtenerDiferenciaYear,calcularPlan, formatearDinero } from "../helpers";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {

  const [datos,setDatos]=useState({
    marca: '',
    year:'',
    plan:''
  })

  const [error,setError] = useState('');
  const [resultado, setResultado]= useState(0);
  const [cargando,setCargando]=useState(false);


  const handleChangeDatos = e =>{
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    })
  }

  const cotizarSeguro = () => {
    // Precio Base

    let resultado = 200;

    // Diferencia en años: hay que restar 3% por año

    const diferencia = obtenerDiferenciaYear(datos.year);
    console.log(diferencia);

    resultado -= resultado*diferencia*0.03;
    console.log(resultado);

    // Procedencia: Americano(15%), Europeo(30%), Asiático(5%)

    resultado *= calcularMarca(datos.marca);
    console.log(resultado);

    // Tipo: Basico(20%), Completo(50%)

    resultado *=calcularPlan(datos.plan);
    console.log(resultado);

    // Formatear dinero

    resultado = formatearDinero(resultado);

    setCargando(true);

    setTimeout(()=>{
        setResultado(resultado);
        setCargando(false);
        console.log(resultado)
    },3000)



  }

    return(

        <CotizadorContext.Provider
        value={{
          datos,
          handleChangeDatos,
          error,
          setError,
          cotizarSeguro,
          resultado,
          cargando
        }}
        >
          {children}
        </CotizadorContext.Provider>

      )
}

export { CotizadorProvider}

export default CotizadorContext;