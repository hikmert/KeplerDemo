import Processors from "kepler.gl/processors";
import triplayerData from "../data/triplayer.json";
import { wrapTo, addDataToMap } from "kepler.gl/actions";
import { loadFiles } from "kepler.gl/actions";
import csvData from "../data/activities-csv";
import { getMapConfig } from "../configs/map";

export const REQUEST_ACTIVITY_DATA = "REQUEST_ACTIVITY_DATA";
export const GET_ACTIVITY_DATA = "GET_ACTIVITY_DATA";

const info = {
  id: "activity_data",
  label: "Activities",
};

export function loadMapData() {
  return (dispatch) => {

    const tripLayer = new File([new Blob([JSON.stringify(triplayerData)])], "triplayer.json");
    const data = Processors.processCsvData(csvData);
    const config = getMapConfig();
    const datasets = [{ info, data }];

    dispatch(
      wrapTo(
        "trip_map",
        addDataToMap({
          datasets,
          config,
        })
      )
    );
    dispatch(loadFiles([tripLayer]));
  };
}
