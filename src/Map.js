import React from "react";
import { connect } from "react-redux";
import KeplerGl from "kepler.gl";
import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";
import { loadMapData } from "../src/store/actions";

const mapboxApiAccessToken =
  "pk.eyJ1Ijoib2VsaW5zaW4iLCJhIjoiY2tvbHNhNDhvMDJnbDJvbzRzaGhsZGZocSJ9.MghO_wsjSgVYXbt9haPk8Q";

class Map extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(loadMapData());
  }

  render() {
    return (
      <React.Fragment>
        <div style={{ position: "absolute", width: "100%", height: "100%" }}>
          <AutoSizer>
            {({ height, width }) => (
              <KeplerGl
                id="trip_map"
                mapboxApiAccessToken={mapboxApiAccessToken}
                width={width}
                height={height}
              />
            )}
          </AutoSizer>
        </div>
      </React.Fragment>
    );
  }
}

const dispatchToProps = (dispatch) => ({ dispatch });

export default connect(dispatchToProps)(Map);
