import GoogleMapReact from "google-map-react";
import { barragens } from "../mocks/barragens";
import Marker from "./Marker";



const DEFAULT_ZOOM = 8;
const DEFAULT_CENTER = {
  lat: -8.470697,
  lng: -38.371057,
};

const Mapa = () => {
  return (
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={DEFAULT_CENTER}
        defaultZoom={DEFAULT_ZOOM}
      >
        {
          barragens.map((barragem, indice) => {
            return (
              
                <Marker
                  lat={barragem.localizacao.latitude}
                  lng={barragem.localizacao.longitude}
                  text={barragem.nome}
                  key={indice}
                />
              
            )

          })
        }
      </GoogleMapReact>
    </div>
  );
};

export default Mapa;