import * as React from "react";
import Loading from "@kiwicom/orbit-components/lib/icons/Loading";
import Alert from "@kiwicom/orbit-components/lib/Alert";
import Tile from "@kiwicom/orbit-components/lib/Tile";
import CarrierLogo from "@kiwicom/orbit-components/lib/CarrierLogo";
import formatDate from "date-fns/format";
import differenceInMinutes from "date-fns/difference_in_minutes";

import FlightDetail from "./FlightDetail";
import NoResults from "./NoResults";

const SearchResults = ({ items, loading, error }) => {
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Alert type="critical">{error.toString()}</Alert>;
  }

  if (!items.length) {
    return <NoResults />;
  }

  return (
    <div>
      {items.slice(0, 10).map(item => {
        const departureTime = new Date(item.dTime * 1000);
        const arrivalTime = new Date(item.aTime * 1000);
        const diff = differenceInMinutes(arrivalTime, departureTime);

        return (
          <div style={{ marginBottom: "20px" }} key={item.id}>
            <Tile
              title={`${formatDate(
                departureTime,
                "DD.MM.YYYY HH:mm"
              )} - ${formatDate(
                arrivalTime,
                "DD.MM.YYYY HH:mm"
              )} - ${diff} minutes in total`}
              icon={
                <CarrierLogo
                  size="large"
                  carriers={item.airlines.map(x => ({ code: x }))}
                />
              }
            >
              <FlightDetail item={item} />
            </Tile>
          </div>
        );
      })}
    </div>
  );
};

export default SearchResults;
